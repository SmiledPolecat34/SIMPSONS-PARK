import { Schema, model } from 'mongoose';

interface Character {
    name: string;
    description: string;
    image_url: string;
}

const CharacterSchema = new Schema<Character>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true }
});

export default model<Character>('Character', CharacterSchema);