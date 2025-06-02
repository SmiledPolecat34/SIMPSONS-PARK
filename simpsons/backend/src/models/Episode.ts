import { Schema, model, Types } from 'mongoose';

interface Episode {
    _id?: Types.ObjectId;
    season: number;
    number: number;
    title: string;
    original_title?: string;
    description?: string;
    date_usa: Date;
}

const EpisodeSchema = new Schema<Episode>({
    _id: { type: Schema.Types.ObjectId, auto: true },
    season: { type: Number, required: true },
    number: { type: Number, required: true },
    title: { type: String, required: true },
    original_title: { type: String, required: false },
    description: { type: String, required: false },
    date_usa: { type: Date, required: true }
});

export default model<Episode>('Episode', EpisodeSchema);