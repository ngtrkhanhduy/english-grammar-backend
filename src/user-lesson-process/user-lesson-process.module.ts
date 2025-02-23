import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLearningProcessController } from './user-lesson-process.controller';
import { UserLearningProcessService } from './user-lesson-process.service';
import { UserLearningProcessSchema } from './schemas/user-lesson-process.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'UserLearningProcess', schema: UserLearningProcessSchema }])],
    controllers: [UserLearningProcessController],
    providers: [UserLearningProcessService],
})
export class UserLearningProcessModule {}
