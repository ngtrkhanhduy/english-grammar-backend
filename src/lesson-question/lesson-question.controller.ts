import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LessonQuestionService } from './lesson-question.service';
import { CreateLessonQuestionDto } from './dto/create-lesson-question.dto';
import { UpdateLessonQuestionDto } from './dto/update-lesson-question.dto';
import { LessonQuestion } from './schemas/lesson-question.schema';

@Controller('lesson-question')
export class LessonQuestionController {
    constructor(private readonly lessonQuestionService: LessonQuestionService) {}

    @Post()
    async create(@Body() questionSet: LessonQuestion) {
        return this.lessonQuestionService.create(questionSet);
    }

    @Get()
    findAll() {
        return this.lessonQuestionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.lessonQuestionService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLessonQuestionDto: UpdateLessonQuestionDto) {
        return this.lessonQuestionService.update(+id, updateLessonQuestionDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.lessonQuestionService.remove(+id);
    }
}
