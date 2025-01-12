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

    // Lấy tất cả tập câu hỏi
    async findAll(): Promise<ExercisesQuestion[]> {
        return this.questionModel.find().exec();
    }

    // Lấy một tập câu hỏi theo ID
    async findOne(id: string): Promise<ExercisesQuestion> {
        const questionSet = await this.questionModel.findById(id).exec();
        if (!questionSet) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
        return questionSet;
    }

    // Tạo mới một tập câu hỏi
    async create(exercisesQuestion: ExercisesQuestion): Promise<ExercisesQuestion> {
        const newQuestionSet = new this.questionModel(exercisesQuestion);
        return newQuestionSet.save();
    }

    // Cập nhật một tập câu hỏi
    async update(id: string, updateData: Partial<ExercisesQuestion>): Promise<ExercisesQuestion> {
        const updatedQuestionSet = await this.questionModel
            .findByIdAndUpdate(id, updateData, { new: true, runValidators: true })
            .exec();
        if (!updatedQuestionSet) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
        return updatedQuestionSet;
    }

    // Xóa một tập câu hỏi
    async delete(id: string): Promise<void> {
        const result = await this.questionModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
    }

    // Thêm một câu hỏi vào tập
    async addQuestion(
        id: string,
        newQuestion: {
            questionNumber: string;
            question: string;
            options: { label: string; value: string }[];
            correct_answer: string;
        },
    ): Promise<ExercisesQuestion> {
        const updatedQuestionSet = await this.questionModel
            .findByIdAndUpdate(
                id,
                { $push: { questions_api: newQuestion } }, // $push thêm câu hỏi vào mảng
                { new: true, runValidators: true }, // Trả về tài liệu đã cập nhật
            )
            .exec();

        if (!updatedQuestionSet) {
            throw new NotFoundException(`Question set with ID ${id} not found`);
        }
        return updatedQuestionSet;
    }

    // Xóa một câu hỏi trong tập
    async deleteQuestion(id: string, questionNumber: string): Promise<ExercisesQuestion> {
        const updatedQuestionSet = await this.questionModel
            .findByIdAndUpdate(
                id,
                { $pull: { questions_api: { questionNumber } } }, // $pull xóa câu hỏi theo questionNumber
                { new: true, runValidators: true }, // Trả về tài liệu đã cập nhật
            )
            .exec();

        if (!updatedQuestionSet) {
            throw new NotFoundException(`Question number ${questionNumber} not found in set ${id}`);
        }
        return updatedQuestionSet;
    }

    // Tìm kiếm bằng tên question set
    async findByName(name: string): Promise<ExercisesQuestion[]> {
        const questionSets = await this.questionModel
            .find({ exercises_question_name: new RegExp(name, 'i') }) // Tìm kiếm không phân biệt hoa thường
            .exec();

        if (!questionSets || questionSets.length === 0) {
            throw new NotFoundException(`No question sets found with name "${name}"`);
        }
        return questionSets;
    }
}
