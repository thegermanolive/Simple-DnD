import {
  IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, Length, Matches, MaxLength,
} from 'class-validator';

export default class Student {
  @IsOptional()
  id!: number

  @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
  @IsNotEmpty({ message: 'Name is Required' })
  UserName!: string

  @IsNotEmpty()
  Password!: string
}
