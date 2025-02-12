import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExercisesQuestion, ExercisesQuestionDocument } from './schema/exercises-question.schema';

@Injectable()
export class ExercisesQuestionService {
    constructor(
        @InjectModel(ExercisesQuestion.name)
        private readonly questionModel: Model<ExercisesQuestionDocument>,
    ) {}

    async findAll(): Promise<ExercisesQuestion[]> {
        return this.questionModel.find().exec();
    }

    async findOne(id: string): Promise<ExercisesQuestion> {
        const questionSet = await this.questionModel.findById(id).exec();
        if (!questionSet) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
        return questionSet;
    }

    async create(exercisesQuestion: ExercisesQuestion): Promise<ExercisesQuestion> {
        const newQuestionSet = new this.questionModel(exercisesQuestion);
        return newQuestionSet.save();
    }

    async update(id: string, updateData: Partial<ExercisesQuestion>): Promise<ExercisesQuestion> {
        const updatedQuestionSet = await this.questionModel
            .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
            .exec();
        if (!updatedQuestionSet) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
        return updatedQuestionSet;
    }

    async delete(id: string): Promise<void> {
        const result = await this.questionModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
    }

    async findByName(name: string): Promise<ExercisesQuestion[]> {
        const questionSets = await this.questionModel.find({ exercises_question_name: new RegExp(name, 'i') }).exec();

        if (!questionSets || questionSets.length === 0) {
            throw new NotFoundException(`No question sets found with name "${name}"`);
        }
        return questionSets;
    }
}
