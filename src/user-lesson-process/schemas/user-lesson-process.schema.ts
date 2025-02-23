import { Schema, Document } from 'mongoose';

export const UserLearningProcessSchema = new Schema({
    username: { type: String, required: true },
    learningProcess: [
        {
            title: { type: String, required: true },
            to: { type: String, required: true },
            completed: { type: Boolean, required: true },
        },
    ],
});

export interface UserLearningProcess extends Document {
    username: string;
    learningProcess: {
        title: string;
        to: string;
        completed: boolean;
    }[];
}
