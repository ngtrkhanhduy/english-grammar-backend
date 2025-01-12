import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ExercisesQuestionService } from './exercises-question.service';
import { ExercisesQuestion } from './schema/exercises-question.schema';

@Controller('exercises-question')
export class ExercisesQuestionController {
    constructor(private readonly questionService: ExercisesQuestionService) {}

    @Get()
    async findAll() {
        return this.questionService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.questionService.findOne(id);
    }

    @Post()
    async create(@Body() questionSet: ExercisesQuestion) {
        return this.questionService.create(questionSet);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateData: Partial<ExercisesQuestion>) {
        return this.questionService.update(id, updateData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.questionService.delete(id);
        return { message: `Question set with ID ${id} deleted successfully.` };
    }

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

    @Delete(':id/question/:questionNumber')
    async deleteQuestion(@Param('id') id: string, @Param('questionNumber') questionNumber: string) {
        return this.questionService.deleteQuestion(id, questionNumber);
    }
}
