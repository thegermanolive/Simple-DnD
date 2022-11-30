import {
  IsNotEmpty, IsOptional, Length, MaxLength,
} from 'class-validator';

export default class Student {
  @IsOptional()
  id!: number

  @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
  @IsNotEmpty({ message: 'Name is Required' })
  Name!: string

  @MaxLength(50, { message: 'Family Name must be at most $constraint1 characters ' })
  @IsNotEmpty()
  ArmorClass!: number

  @IsNotEmpty({ message: 'HP is Required' })
  HitPoints!: number

  @IsNotEmpty({ message: 'Speed is Required' })
  Speed!: string

  @IsOptional()
  Spells!: string
}
