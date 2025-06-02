import { Schema, model, Types } from 'mongoose';

interface Dossier {
    character: Types.ObjectId;
    notes: string;
}

const DossierSchema = new Schema<Dossier>({
    character: { type: Schema.Types.ObjectId, ref: 'Character', required: true },
    notes: { type: String, default: '' }
});

export default model<Dossier>('Dossier', DossierSchema);