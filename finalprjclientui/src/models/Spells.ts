import {
  IsNotEmpty, IsOptional, Length,
} from 'class-validator';

export default class Student {
  @IsOptional()
  id!: number

  @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
  @IsNotEmpty({ message: 'Name is Required' })
  Name!: string

  @IsNotEmpty({ message: 'Level is Required' })
  Level!: number

  @IsNotEmpty({ message: 'School is Required' })
  School!: string

  @IsNotEmpty({ message: 'Casting Time is Required' })
  CastingTime!: string

  @IsNotEmpty({ message: 'Range is Required' })
  Range!: string

  @IsNotEmpty({ message: 'Duration is Required' })
  Duration!: string

  @IsOptional()
  Damage!: string

  @IsOptional()
  DamageType!: string

  @IsOptional()
  StatusEffect!: string
}
