import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInfomationDto } from './create-user-infomation.dto';

export class UpdateUserInfomationDto extends PartialType(CreateUserInfomationDto) {}
