import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LessonQuestion, LessionsQuestionDocument } from './schemas/lesson-question.schema';

@Injectable()
export class LessonQuestionService {
    constructor(@InjectModel(LessonQuestion.name) private questionModel: Model<LessionsQuestionDocument>) {}

    async create(lessonsQuestion: LessonQuestion): Promise<LessonQuestion> {
        const newQuestionSet = new this.questionModel(lessonsQuestion);
        return newQuestionSet.save();
    }

    async findAll(): Promise<LessonQuestion[]> {
        return this.questionModel.find().exec();
    }

    async findOne(id: string): Promise<LessonQuestion> {
        const questionSet = await this.questionModel.findById(id).exec();
        if (!questionSet) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
        return questionSet;
    }

    async update(id: string, updateData: Partial<LessonQuestion>): Promise<LessonQuestion> {
        const updatedQuestionSet = await this.questionModel
            .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
            .exec();
        if (!updatedQuestionSet) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
        return updatedQuestionSet;
    }

    async remove(id: string): Promise<void> {
        const result = await this.questionModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
    }

    async findByLessonQuestionName(name: string): Promise<LessonQuestion> {
        const result = await this.questionModel.findOne({ lesson_question_name: name }).exec();
        if (!result) {
            throw new NotFoundException(`No question sets found with name "${name}"`);
        }
        return result;
    }
}
