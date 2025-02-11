import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLessonProcessService } from './user-lesson-process.service';
import { UserLessonProcessController } from './user-lesson-process.controller';
import { UserLessonQuestion, UserLessonQuestionSchema } from './schemas/user-lesson-process.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserLessonQuestion.name, schema: UserLessonQuestionSchema }])],
    controllers: [UserLessonProcessController],
    providers: [UserLessonProcessService],
})
export class UserLessonProcessModule {}
