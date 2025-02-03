import { Module } from '@nestjs/common';
import { LessonQuestionService } from './lesson-question.service';
import { LessonQuestionController } from './lesson-question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonQuestion, LessonQuestionSchema } from './schemas/lesson-question.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: LessonQuestion.name, schema: LessonQuestionSchema }])],
    controllers: [LessonQuestionController],
    providers: [LessonQuestionService],
})
export class LessonQuestionModule {}
