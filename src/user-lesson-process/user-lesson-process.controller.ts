import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { UserLearningProcessService } from './user-lesson-process.service';

@Controller('user-learning-process')
export class UserLearningProcessController {
    constructor(private readonly userLearningProcessService: UserLearningProcessService) {}

    @Post()
    async create(@Body() body: { username: string; learningProcess: any[] }) {
        const { username, learningProcess } = body;
        return this.userLearningProcessService.create(username, learningProcess);
    }

    @Get(':username')
    async getLearningProcess(@Param('username') username: string) {
        return this.userLearningProcessService.findByUsername(username);
    }

    @Put(':username')
    async updateLearningProcess(@Param('username') username: string, @Body() body: { learningProcess: any[] }) {
        return this.userLearningProcessService.updateLearningProcess(username, body.learningProcess);
    }

    @Put(':username/:to')
    async updateCompletedStatus(
        @Param('username') username: string,
        @Param('to') to: string,
        @Body() body: { completed: boolean },
    ) {
        return this.userLearningProcessService.updateCompletedStatus(username, '/' + to, body.completed);
    }
}
