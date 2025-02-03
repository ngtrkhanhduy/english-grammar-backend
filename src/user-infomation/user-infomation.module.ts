import { Module } from '@nestjs/common';
import { UserInfomationService } from './user-infomation.service';
import { UserInfomationController } from './user-infomation.controller';

@Module({
  controllers: [UserInfomationController],
  providers: [UserInfomationService],
})
export class UserInfomationModule {}
