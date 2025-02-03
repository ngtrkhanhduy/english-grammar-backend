import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLessonQuestionDto } from './dto/create-lesson-question.dto';
import { UpdateLessonQuestionDto } from './dto/update-lesson-question.dto';
import { LessonQuestion, LessionsQuestionDocument } from './schemas/lesson-question.schema';

@Injectable()
export class LessonQuestionService {
    constructor(
        @InjectModel(LessonQuestion.name)
        private readonly questionModel: Model<LessionsQuestionDocument>,
    ) {}

    async create(lessonsQuestion: LessonQuestion): Promise<LessonQuestion> {
        const newQuestionSet = new this.questionModel(lessonsQuestion);
        return newQuestionSet.save();
    }

    findAll() {
        return `This action returns all lessonQuestion`;
    }

    findOne(id: number) {
        return `This action returns a #${id} lessonQuestion`;
    }

    update(id: number, updateLessonQuestionDto: UpdateLessonQuestionDto) {
        return `This action updates a #${id} lessonQuestion`;
    }

    remove(id: number) {
        return `This action removes a #${id} lessonQuestion`;
    }
}
