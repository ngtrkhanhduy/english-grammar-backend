import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ExercisesQuestionDocument = HydratedDocument<ExercisesQuestion>;

class Question {
    @Prop({ required: true })
    questionNumber: string;

    @Prop({ required: true })
    question: string;

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

@Schema()
export class ExercisesQuestion {
    @Prop({ required: true })
    exercises_question_name: string;

    @Prop({
        type: [Question],
        required: true,
    })
    questions_api: Question[];
}

export const ExercisesQuestionSchema = SchemaFactory.createForClass(ExercisesQuestion);
