"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventArtist = void 0;
const openai_1 = __importDefault(require("openai"));
const client_s3_1 = require("@aws-sdk/client-s3");
const axios_1 = __importDefault(require("axios"));
const eventArtist = async (context) => {
    // Convert description to an image prompt
    const openai = new openai_1.default({
        apiKey: context.app.get('openai_api_key'),
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
                content: context.data.description
            }
        ],
        model: "gpt-4",
    });
    const imagePrompt = chatCompletion.choices[0].message.content;

    // Get image
    const response = await (0, axios_1.default)({
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
            seed: Math.random() * 10000000 | 0,
            scheduler: "euler",
            output_format: "png",
        },
        headers: {
            Authorization: `Bearer ${context.app.get('getimg_api_key')}`,
            'Content-Type': 'application/json'
        }
    });
    // Upload image to S3
    const image = Buffer.from(response.data.image, 'base64');
    const client = new client_s3_1.S3({
        region: context.app.get('s3').region,
        endpoint: context.app.get('s3').endpoint,
        credentials: {
            accessKeyId: context.app.get('s3').access_key,
            secretAccessKey: context.app.get('s3').secret_access_key
        }
    });
    const key = `public/cover/${context.data.id}.png`;
    const uploadResult = await client.putObject({
        Bucket: context.app.get('s3').bucket,
        Body: image,
        Key: key,
        ContentEncoding: 'base64',
        ContentType: 'image/png',
        ACL: 'public-read',
    });
    context.data.image = `https://snaphost.nyc3.cdn.digitaloceanspaces.com/${key}`;
};
exports.eventArtist = eventArtist;
//# sourceMappingURL=event-artist.js.map