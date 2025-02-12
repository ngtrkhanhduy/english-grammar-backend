import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserExercisesProcess, UserExercisesProcessSchema } from './schemas/user-exercises-process.schema';
import { UserExercisesProcessController } from './user-exercises-process.controller';
import { UserExercisesProcessService } from './user-exercises-process.service';
import { UsersModule } from 'src/users/users.module';
import { ExercisesQuestionModule } from 'src/exercises-question/exercises-question.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: UserExercisesProcess.name, schema: UserExercisesProcessSchema }]),
        UsersModule,
        ExercisesQuestionModule,
    ],
    controllers: [UserExercisesProcessController],
    providers: [UserExercisesProcessService],
})
export class UserExercisesProcessModule {}
