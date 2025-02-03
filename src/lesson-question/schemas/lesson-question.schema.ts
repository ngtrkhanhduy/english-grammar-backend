import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LessionsQuestionDocument = HydratedDocument<LessonQuestion>;

class Question {
    @Prop({ required: true })
    questionNumber: string;

    @Prop({ required: true })
    question: string;

    @Prop({ required: true })
    questionType: string;

    @Prop({
        type: [
            {
                label: { type: String, required: true },
                value: { type: String, required: true },
            },
        ],
        required: true,
    })
    options: { label: string; value: string }[];

    @Prop({ required: true })
    correct_answer: string;
}

class QuestionSet {
    @Prop({ required: true })
    questionSetName: string;

    @Prop({ required: true })
    question: [Question];
}

@Schema()
export class LessonQuestion {
    @Prop({ required: true })
    lesson_question_name: string;

    @Prop({ required: true, default: false })
    isLearning: boolean;

    @Prop({
        type: [QuestionSet],
        required: true,
    })
    questions_api: QuestionSet[];
}

export const LessonQuestionSchema = SchemaFactory.createForClass(LessonQuestion);
