import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserExercisesProcess, UserExercisesProcessDocument } from './schemas/user-exercises-process.schema';
import { CreateUserExercisesProcessDto } from './dto/create-user-exercises-process.dto';
import { UsersService } from 'src/users/users.service';
import { ExercisesQuestionService } from 'src/exercises-question/exercises-question.service';

@Injectable()
export class UserExercisesProcessService {
    constructor(
        @InjectModel(UserExercisesProcess.name)
        private readonly userExercisesProcessModel: Model<UserExercisesProcessDocument>,
        private readonly usersService: UsersService,
        private readonly exercisesQuestionService: ExercisesQuestionService,
    ) {}
    async create(createUserExercisesProcessDto: CreateUserExercisesProcessDto): Promise<UserExercisesProcess> {
        // Kiểm tra sự tồn tại của người dùng
        const user = await this.usersService.findByUsername(createUserExercisesProcessDto.username);
        if (!user) {
            throw new Error('User not found');
        }

        // Kiểm tra sự tồn tại của bài kiểm tra
        const exercise = await this.exercisesQuestionService.findByName(
            createUserExercisesProcessDto.exercises_process_name,
        );
        if (!exercise) {
            throw new Error('Exercise not found');
        }

        // Nếu cả hai giá trị trên đều hợp lệ, tiến hành tạo bài làm
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
