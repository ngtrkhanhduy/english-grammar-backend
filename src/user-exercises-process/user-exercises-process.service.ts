import { Injectable } from '@nestjs/common';
import { CreateUserExercisesProcessDto } from './dto/create-user-exercises-process.dto';
import { UpdateUserExercisesProcessDto } from './dto/update-user-exercises-process.dto';

@Injectable()
export class UserExercisesProcessService {
  create(createUserExercisesProcessDto: CreateUserExercisesProcessDto) {
    return 'This action adds a new userExercisesProcess';
  }

  findAll() {
    return `This action returns all userExercisesProcess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userExercisesProcess`;
  }

  update(id: number, updateUserExercisesProcessDto: UpdateUserExercisesProcessDto) {
    return `This action updates a #${id} userExercisesProcess`;
  }

  remove(id: number) {
    return `This action removes a #${id} userExercisesProcess`;
  }
}
