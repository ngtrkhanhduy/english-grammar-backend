import { Controller, Get, Post, Body, Param, Patch, Delete, BadRequestException, Query } from '@nestjs/common';
import { ExercisesQuestionService } from './exercises-question.service';
import { ExercisesQuestion } from './schema/exercises-question.schema';

@Controller('exercises-question')
export class ExercisesQuestionController {
    constructor(private readonly questionService: ExercisesQuestionService) {}

    @Get()
    async findAll() {
        return this.questionService.findAll();
    }

    @Get('/search')
    async findByName(@Query('name') name: string) {
        if (!name) {
            throw new BadRequestException('Query parameter "name" is required');
        }
        return this.questionService.findByName(name);
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
}
