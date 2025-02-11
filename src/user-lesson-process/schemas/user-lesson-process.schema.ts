import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserLessonQuestionDocument = UserLessonQuestion & Document;

@Schema({ timestamps: true })
export class UserLessonQuestion {
    @Prop({ required: true })
    lesson_question_name: string;

    @Prop({ required: true })
    username: string;

    @Prop({ type: Map, of: String, required: true })
    answer: Map<string, string>;

    @Prop({ required: true })
    count: number;

    @Prop({ required: true })
    result: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const UserLessonQuestionSchema = SchemaFactory.createForClass(UserLessonQuestion);
