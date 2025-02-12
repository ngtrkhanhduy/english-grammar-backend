import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserExercisesProcess, UserExercisesProcessSchema } from './schemas/user-exercises-process.schema';
import { UserExercisesProcessController } from './user-exercises-process.controller';
import { UserExercisesProcessService } from './user-exercises-process.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: UserExercisesProcess.name, schema: UserExercisesProcessSchema }])],
    controllers: [UserExercisesProcessController],
    providers: [UserExercisesProcessService],
})
export class UserExercisesProcessModule {}
