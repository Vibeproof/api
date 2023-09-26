import type { Application } from '../../declarations';
export declare const eventArtist: ({ app, description, seed, event_id }: {
    app: Application;
    description: string;
    seed: number;
    event_id: string;
}) => Promise<{
    src: string;
    prompt: string | null;
    updatedAt: string;
}>;
