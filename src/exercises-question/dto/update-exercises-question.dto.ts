import { PartialType } from '@nestjs/mapped-types';
import { CreateExercisesQuestionDto } from './create-exercises-question.dto';

export class UpdateExercisesQuestionDto extends PartialType(CreateExercisesQuestionDto) {}
