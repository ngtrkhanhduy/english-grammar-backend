import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserLessonQuestion, UserLessonQuestionDocument } from './schemas/user-lesson-process.schema';

@Injectable()
export class UserLessonProcessService {
    constructor(
        @InjectModel(UserLessonQuestion.name) private UserLessonQuestionModel: Model<UserLessonQuestionDocument>,
    ) {}

    async create(data: Partial<UserLessonQuestion>): Promise<UserLessonQuestion> {
        const newQuestion = new this.UserLessonQuestionModel(data);
        return newQuestion.save();
    }

    async findAll(): Promise<UserLessonQuestion[]> {
        return this.UserLessonQuestionModel.find().exec();
    }

    async findById(id: string): Promise<UserLessonQuestion> {
        const question = await this.UserLessonQuestionModel.findById(id).exec();
        if (!question) {
            throw new NotFoundException(`Lesson Question with ID ${id} not found`);
        }
        return question;
    }

    async findByUserLessonQuestionName(name: string): Promise<UserLessonQuestion[]> {
        return this.UserLessonQuestionModel.find({ lesson_question_name: name }).exec();
    }

    async update(id: string, data: Partial<UserLessonQuestion>): Promise<UserLessonQuestion> {
        const updatedQuestion = await this.UserLessonQuestionModel.findByIdAndUpdate(id, data, { new: true }).exec();
        if (!updatedQuestion) {
            throw new NotFoundException(`Lesson Question with ID ${id} not found`);
        }
        return updatedQuestion;
    }

    async delete(id: string): Promise<UserLessonQuestion> {
        const deletedQuestion = await this.UserLessonQuestionModel.findByIdAndDelete(id).exec();
        if (!deletedQuestion) {
            throw new NotFoundException(`Lesson Question with ID ${id} not found`);
        }
        return deletedQuestion;
    }
}
