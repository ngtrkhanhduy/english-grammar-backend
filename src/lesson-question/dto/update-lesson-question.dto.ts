import { PartialType } from '@nestjs/mapped-types';
import { CreateLessonQuestionDto } from './create-lesson-question.dto';

export class UpdateLessonQuestionDto extends PartialType(CreateLessonQuestionDto) {}
