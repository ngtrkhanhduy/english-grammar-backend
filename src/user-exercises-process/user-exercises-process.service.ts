import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserExercisesProcess, UserExercisesProcessDocument } from './schemas/user-exercises-process.schema';
import { CreateUserExercisesProcessDto } from './dto/create-user-exercises-process.dto';

@Injectable()
export class UserExercisesProcessService {
    constructor(
        @InjectModel(UserExercisesProcess.name)
        private readonly userExercisesProcessModel: Model<UserExercisesProcessDocument>,
    ) {}

    async create(createUserExercisesProcessDto: CreateUserExercisesProcessDto): Promise<UserExercisesProcess> {
        const newExercise = new this.userExercisesProcessModel(createUserExercisesProcessDto);
        return newExercise.save();
    }

    async findAllByUser(username: string): Promise<UserExercisesProcess[]> {
        return this.userExercisesProcessModel.find({ username }).exec();
    }

    async findOne(id: string): Promise<UserExercisesProcess> {
        const exercise = await this.userExercisesProcessModel.findById(id).exec();
        if (!exercise) {
            throw new NotFoundException(`Exercise Process with ID ${id} not found`);
        }
        return exercise;
    }

    async delete(id: string): Promise<void> {
        const deleted = await this.userExercisesProcessModel.findByIdAndDelete(id).exec();
        if (!deleted) {
            throw new NotFoundException(`Exercise Process with ID ${id} not found`);
        }
    }
}
