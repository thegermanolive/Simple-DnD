import {
  IsNotEmpty, IsOptional, Length,
} from 'class-validator';

export default class Student {
  @IsOptional()
  id!: number

  @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
  @IsNotEmpty({ message: 'Name is Required' })
  Name!: string

  @IsOptional()
  Cost!: number

  @IsNotEmpty({ message: 'Damage is Required' })
  Damage!: number

  @IsNotEmpty({ message: 'Damage Type is Required' })
  DamageType!: string

  @IsNotEmpty({ message: 'Weight is Required' })
  Weight!: string

  @IsOptional()
  Properties!: string

  @IsOptional()
  SpecialEffects!: string
}
