import { Injectable } from '@nestjs/common';
import { CreateUserLessonProcessDto } from './dto/create-user-lesson-process.dto';
import { UpdateUserLessonProcessDto } from './dto/update-user-lesson-process.dto';

@Injectable()
export class UserLessonProcessService {
  create(createUserLessonProcessDto: CreateUserLessonProcessDto) {
    return 'This action adds a new userLessonProcess';
  }

  findAll() {
    return `This action returns all userLessonProcess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userLessonProcess`;
  }

  update(id: number, updateUserLessonProcessDto: UpdateUserLessonProcessDto) {
    return `This action updates a #${id} userLessonProcess`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLessonProcess`;
  }
}
