import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
    title: { type: String, required: true },
    avatar: { type: String, required: true },
    sounds: { type: String, required: true },
});

export interface Cat extends mongoose.Document {
    id: string;
    title: string;
    avatar: string;
    sounds: string;
}