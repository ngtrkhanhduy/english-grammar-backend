import { Module } from '@nestjs/common';
import { UserLessonProcessService } from './user-lesson-process.service';
import { UserLessonProcessController } from './user-lesson-process.controller';

@Module({
  controllers: [UserLessonProcessController],
  providers: [UserLessonProcessService],
})
export class UserLessonProcessModule {}
