import { Module } from '@nestjs/common';
import { UserExercisesProcessService } from './user-exercises-process.service';
import { UserExercisesProcessController } from './user-exercises-process.controller';

@Module({
  controllers: [UserExercisesProcessController],
  providers: [UserExercisesProcessService],
})
export class UserExercisesProcessModule {}
