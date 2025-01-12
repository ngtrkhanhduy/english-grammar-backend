import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExercisesQuestionController } from './exercises-question.controller';
import { ExercisesQuestionService } from './exercises-question.service';
import { ExercisesQuestion, ExercisesQuestionSchema } from './schema/exercises-question.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: ExercisesQuestion.name, schema: ExercisesQuestionSchema }])],
    controllers: [ExercisesQuestionController],
    providers: [ExercisesQuestionService],
})
export class ExercisesQuestionModule {}
