import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserLessonProcessService } from './user-lesson-process.service';
import { UserLessonQuestion } from './schemas/user-lesson-process.schema';

@Controller('user-lesson-process')
export class UserLessonProcessController {
    constructor(private readonly UserLessonQuestionService: UserLessonProcessService) {}

    @Post()
    async create(@Body() data: Partial<UserLessonQuestion>) {
        return this.UserLessonQuestionService.create(data);
    }

    @Get()
    async findAll() {
        return this.UserLessonQuestionService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.UserLessonQuestionService.findById(id);
    }

    @Get('name/:lesson_question_name')
    async findByUserLessonQuestionName(@Param('lesson_question_name') lesson_question_name: string) {
        return this.UserLessonQuestionService.findByUserLessonQuestionName(lesson_question_name);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: Partial<UserLessonQuestion>) {
        return this.UserLessonQuestionService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.UserLessonQuestionService.delete(id);
    }
}
