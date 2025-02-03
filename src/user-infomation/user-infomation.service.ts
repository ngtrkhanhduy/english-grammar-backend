import { Injectable } from '@nestjs/common';
import { CreateUserInfomationDto } from './dto/create-user-infomation.dto';
import { UpdateUserInfomationDto } from './dto/update-user-infomation.dto';

@Injectable()
export class UserInfomationService {
  create(createUserInfomationDto: CreateUserInfomationDto) {
    return 'This action adds a new userInfomation';
  }

  findAll() {
    return `This action returns all userInfomation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userInfomation`;
  }

  update(id: number, updateUserInfomationDto: UpdateUserInfomationDto) {
    return `This action updates a #${id} userInfomation`;
  }

  remove(id: number) {
    return `This action removes a #${id} userInfomation`;
  }
}
