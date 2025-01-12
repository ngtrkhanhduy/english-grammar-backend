import { Controller, Get, Post, Body, Param, Patch, Delete, BadRequestException, Query } from '@nestjs/common';
import { ExercisesQuestionService } from './exercises-question.service';
import { ExercisesQuestion } from './schema/exercises-question.schema';

@Controller('exercises-question')
export class ExercisesQuestionController {
    constructor(private readonly questionService: ExercisesQuestionService) {}

    // Lấy tất cả tập câu hỏi
    @Get()
    async findAll() {
        return this.questionService.findAll();
    }

    // Tìm kiếm tập câu hỏi theo tên
    @Get('/search')
    async findByName(@Query('name') name: string) {
        if (!name) {
            throw new BadRequestException('Query parameter "name" is required');
        }
        return this.questionService.findByName(name);
    }

    // Lấy chi tiết một tập câu hỏi theo ID
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.questionService.findOne(id);
    }

    // Tạo mới một tập câu hỏi
    @Post()
    async create(@Body() questionSet: ExercisesQuestion) {
        return this.questionService.create(questionSet);
    }

    // Cập nhật thông tin một tập câu hỏi
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateData: Partial<ExercisesQuestion>) {
        return this.questionService.update(id, updateData);
    }

    // Xóa một tập câu hỏi
    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.questionService.delete(id);
        return { message: `Question set with ID ${id} deleted successfully.` };
    }

    // Thêm một câu hỏi vào tập câu hỏi
    @Post(':id/question')
    async addQuestion(
        @Param('id') id: string,
        @Body()
        newQuestion: {
            questionNumber: string;
            question: string;
            options: { label: string; value: string }[];
            correct_answer: string;
        },
    ) {
        return this.questionService.addQuestion(id, newQuestion);
    }

    // Xóa một câu hỏi trong tập câu hỏi
    @Delete(':id/question/:questionNumber')
    async deleteQuestion(@Param('id') id: string, @Param('questionNumber') questionNumber: string) {
        return this.questionService.deleteQuestion(id, questionNumber);
    }
}
