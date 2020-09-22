import { isObject } from 'class-validator';
import * as mongoose from 'mongoose';

export const CatsSchemas = new mongoose.Schema({
    
    title: String,
    avatar: String, 
    sounds: String,
});