import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {
    IsNotEmpty, IsOptional, Length, MaxLength,
} from 'class-validator';
@Entity()
export class Monsters {

    @PrimaryGeneratedColumn()
    @IsOptional()
    id!: number

    @Column()
    @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
    @IsNotEmpty({ message: 'Name is Required' })
    Name: string

    @Column()
    @IsNotEmpty({ message: 'Level is Required' })
    Level: number

    @Column()
    @IsNotEmpty({ message: 'School is Required' })
    School: string

    @Column()
    @IsNotEmpty({ message: 'Casting Time is Required' })
    CastingTime: string

    @Column()
    @IsNotEmpty({ message: 'Range is Required' })
    Range: string

    @Column()
    @IsNotEmpty({ message: 'Duration is Required' })
    Duration: string

    @Column()
    @IsOptional()
    Damage: string

    @Column()
    @IsOptional()
    DamageType: string

    @Column()
    @IsOptional()
    StatusEffect: string

}
