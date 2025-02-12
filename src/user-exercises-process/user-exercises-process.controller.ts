import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { UserExercisesProcessService } from './user-exercises-process.service';
import { CreateUserExercisesProcessDto } from './dto/create-user-exercises-process.dto';

@Controller('user-exercises-process')
export class UserExercisesProcessController {
    constructor(private readonly userExercisesProcessService: UserExercisesProcessService) {}

    @Post()
    async create(@Body() createUserExercisesProcessDto: CreateUserExercisesProcessDto) {
        return this.userExercisesProcessService.create(createUserExercisesProcessDto);
    }

    @Get(':username')
    async findAllByUser(@Param('username') username: string) {
        return this.userExercisesProcessService.findAllByUser(username);
    }

    @Get('detail/:id')
    async findOne(@Param('id') id: string) {
        return this.userExercisesProcessService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userExercisesProcessService.delete(id);
    }
}
