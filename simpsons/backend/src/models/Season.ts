import { Schema, model } from 'mongoose';

interface Season {
    season: number;
    title: string;
    year?: number;
}

const SeasonSchema = new Schema<Season>({
    season: { type: Number, required: true },
    title: { type: String, required: true },
    year: { type: Number, required: false }
});

export default model<Season>('Season', SeasonSchema);