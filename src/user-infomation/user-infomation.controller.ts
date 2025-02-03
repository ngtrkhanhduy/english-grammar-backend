import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserInfomationService } from './user-infomation.service';
import { CreateUserInfomationDto } from './dto/create-user-infomation.dto';
import { UpdateUserInfomationDto } from './dto/update-user-infomation.dto';

@Controller('user-infomation')
export class UserInfomationController {
  constructor(private readonly userInfomationService: UserInfomationService) {}

  @Post()
  create(@Body() createUserInfomationDto: CreateUserInfomationDto) {
    return this.userInfomationService.create(createUserInfomationDto);
  }

  @Get()
  findAll() {
    return this.userInfomationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userInfomationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserInfomationDto: UpdateUserInfomationDto) {
    return this.userInfomationService.update(+id, updateUserInfomationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userInfomationService.remove(+id);
  }
}
