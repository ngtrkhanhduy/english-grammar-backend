import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLearningProcess } from './schemas/user-lesson-process.schema';

@Injectable()
export class UserLearningProcessService {
    constructor(
        @InjectModel('UserLearningProcess') private readonly userLearningProcessModel: Model<UserLearningProcess>,
    ) {}

    async create(username: string, learningProcess: any[]): Promise<UserLearningProcess> {
        const newLearningProcess = new this.userLearningProcessModel({ username, learningProcess });
        return newLearningProcess.save();
    }

    async findByUsername(username: string): Promise<UserLearningProcess> {
        const learningProcess = await this.userLearningProcessModel.findOne({ username }).exec();
        if (!learningProcess) {
            throw new NotFoundException(`User with username ${username} not found`);
        }
        return learningProcess;
    }

    async updateLearningProcess(username: string, learningProcess: any[]): Promise<UserLearningProcess> {
        const updatedLearningProcess = await this.userLearningProcessModel
            .findOneAndUpdate({ username }, { learningProcess }, { new: true })
            .exec();
        if (!updatedLearningProcess) {
            throw new NotFoundException(`User with username ${username} not found`);
        }
        return updatedLearningProcess;
    }

    async updateCompletedStatus(username: string, to: string, completed: boolean): Promise<UserLearningProcess> {
        const user = await this.userLearningProcessModel.findOne({ username }).exec();
        if (!user) {
            throw new NotFoundException(`User with username ${username} not found`);
        }

        const learningProcess = user.learningProcess.map((item) => (item.to === to ? { ...item, completed } : item));

        user.learningProcess = learningProcess;
        return user.save();
    }
}
