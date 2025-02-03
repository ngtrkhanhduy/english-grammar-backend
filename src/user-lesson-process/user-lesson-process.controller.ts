import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLessonProcessService } from './user-lesson-process.service';
import { CreateUserLessonProcessDto } from './dto/create-user-lesson-process.dto';
import { UpdateUserLessonProcessDto } from './dto/update-user-lesson-process.dto';

@Controller('user-lesson-process')
export class UserLessonProcessController {
  constructor(private readonly userLessonProcessService: UserLessonProcessService) {}

  @Post()
  create(@Body() createUserLessonProcessDto: CreateUserLessonProcessDto) {
    return this.userLessonProcessService.create(createUserLessonProcessDto);
  }

  @Get()
  findAll() {
    return this.userLessonProcessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLessonProcessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLessonProcessDto: UpdateUserLessonProcessDto) {
    return this.userLessonProcessService.update(+id, updateUserLessonProcessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLessonProcessService.remove(+id);
  }
}
