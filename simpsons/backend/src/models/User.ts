import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    name?: string;
    role?: 'user' | 'admin';
}

const UserSchema = new Schema<IUser>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: false },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

export default model<IUser>('User', UserSchema);
