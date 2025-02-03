import { PartialType } from '@nestjs/mapped-types';
import { CreateUserExercisesProcessDto } from './create-user-exercises-process.dto';

export class UpdateUserExercisesProcessDto extends PartialType(CreateUserExercisesProcessDto) {}
