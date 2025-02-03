import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, Query } from '@nestjs/common';
import { LessonQuestionService } from './lesson-question.service';
import { LessonQuestion } from './schemas/lesson-question.schema';

@Controller('lesson-question')
export class LessonQuestionController {
    constructor(private readonly lessonQuestionService: LessonQuestionService) {}

    @Post()
    async create(@Body() questionSet: LessonQuestion) {
        return this.lessonQuestionService.create(questionSet);
    }

    @Get()
    async findAll() {
        return this.lessonQuestionService.findAll();
    }

    // Di chuyển phương thức tìm kiếm lên trước để tránh nhầm với :id
    @Get('/search')
    async findByName(@Query('name') name: string) {
        if (!name) {
            throw new BadRequestException('Query parameter "name" is required');
        }
        return this.lessonQuestionService.findByLessonQuestionName(name);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.lessonQuestionService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateData: Partial<LessonQuestion>) {
        return this.lessonQuestionService.update(id, updateData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.lessonQuestionService.remove(id);
    }
}
