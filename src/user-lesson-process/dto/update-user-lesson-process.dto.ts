import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLessonProcessDto } from './create-user-lesson-process.dto';

export class UpdateUserLessonProcessDto extends PartialType(CreateUserLessonProcessDto) {}
