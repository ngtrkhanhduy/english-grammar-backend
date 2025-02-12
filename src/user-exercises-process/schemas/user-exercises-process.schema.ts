import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserExercisesProcessDocument = UserExercisesProcess & Document;

@Schema({ timestamps: true })
export class UserExercisesProcess {
    @Prop({ required: true })
    exercises_process_name: string;

    @Prop({ required: true })
    username: string;

    @Prop({ type: Map, of: String, required: true })
    answer: Map<string, string>;

    @Prop({ required: true })
    result: number;

    @Prop({ required: true, default: 100 })
    count: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const UserExercisesProcessSchema = SchemaFactory.createForClass(UserExercisesProcess);
