// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { Application, HookContext } from '../../declarations'
import OpenAI from 'openai';
import { S3 } from '@aws-sdk/client-s3';
import axios from 'axios'
import { logger } from '../../logger';
import moment from 'moment';


import { v4 as uuidv4 } from 'uuid';


export const eventArtist = async ({
  app,
  description,
  seed,
  event_id
}: {
  app: Application,
  description: string,
  seed: number,
  event_id: string
}) => {
  // Convert description to an image prompt
  const openai = new OpenAI({
      apiKey: app.get('openai_api_key'),
  });
  
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { 
        role: "user", 
        content: `
Explain to a blind person what's happening on the event in one short sentence. 
Remove the exact details such as names, dates, brands, etc. 
Describe what's happening on the place, not what this event is about. 
Event's description:
        `
      },
      {
        role: "user",
        content: description
      }
    ],
    model: "gpt-4",
  });

  const imagePrompt = chatCompletion.choices[0].message.content;

  logger.info(`Image prompt: ${imagePrompt}`);

  // Get image
  const response = await axios({
    url: 'https://api.getimg.ai/v1/stable-diffusion-xl/text-to-image',
    method: 'post',
    data: {
      model: "stable-diffusion-xl-v1-0",
      prompt: `"${imagePrompt}" in scenic style`,
      negative_prompt: "text",
      width: 1024,
      height: 512,
      steps: 25,
      guidance: 7.5,
      seed: Math.random() * 10_000_000 | 0,
      scheduler: "euler",
      output_format: "png",
    },
    headers: {
      Authorization: `Bearer ${app.get('getimg_api_key')}`,
      'Content-Type': 'application/json'
    }
  });

  // Upload image to S3
  const image = Buffer.from(response.data.image, 'base64');

  const client = new S3({
    region: app.get('s3').region,
    endpoint: app.get('s3').endpoint,
    credentials: {
      accessKeyId: app.get('s3').access_key,
      secretAccessKey: app.get('s3').secret_access_key
    }
  });

  const iamgeName = `${event_id}-${uuidv4()}.png`;

  const key = `public/cover/${iamgeName}`;

  const uploadResult = await client.putObject({
    Bucket: app.get('s3').bucket,
    Body: image,
    Key: key,
    ContentEncoding: 'base64',
    ContentType: 'image/png',
    ACL: 'public-read',
  });

  return {
    src: `https://snaphost.nyc3.cdn.digitaloceanspaces.com/${key}`,
    prompt: imagePrompt,
    updatedAt: moment().toISOString()
  };
}
