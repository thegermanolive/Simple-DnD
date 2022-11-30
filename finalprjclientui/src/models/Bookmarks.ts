import {
  IsNotEmpty, IsOptional,
} from 'class-validator';

export default class Student {
  @IsOptional()
  id!: number

  @IsNotEmpty()
  ObjectType!: string

  @IsNotEmpty()
  ObjectContents!: string
}
