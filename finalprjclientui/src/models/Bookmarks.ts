import {
  IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, Length, Matches, MaxLength,
} from 'class-validator';

export default class Student {
  @IsOptional()
  id!: number

  @IsNotEmpty()
  ObjectType!: string

  @IsNotEmpty()
  ObjectContents!: string
}
