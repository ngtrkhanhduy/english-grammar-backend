import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserExercisesProcessService } from './user-exercises-process.service';
import { CreateUserExercisesProcessDto } from './dto/create-user-exercises-process.dto';
import { UpdateUserExercisesProcessDto } from './dto/update-user-exercises-process.dto';

@Controller('user-exercises-process')
export class UserExercisesProcessController {
  constructor(private readonly userExercisesProcessService: UserExercisesProcessService) {}

  @Post()
  create(@Body() createUserExercisesProcessDto: CreateUserExercisesProcessDto) {
    return this.userExercisesProcessService.create(createUserExercisesProcessDto);
  }

  @Get()
  findAll() {
    return this.userExercisesProcessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userExercisesProcessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserExercisesProcessDto: UpdateUserExercisesProcessDto) {
    return this.userExercisesProcessService.update(+id, updateUserExercisesProcessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userExercisesProcessService.remove(+id);
  }
}
