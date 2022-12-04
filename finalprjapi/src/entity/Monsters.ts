import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {
    IsNotEmpty, IsOptional, Length, MaxLength,
} from 'class-validator';
@Entity()
export class Monsters {

    @PrimaryGeneratedColumn()
    @IsOptional()
    id: number

    @Column()
    @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
    @IsNotEmpty({ message: 'Name is Required' })
    Name: string

    @Column()
    @MaxLength(50, { message: 'Family Name must be at most $constraint1 characters ' })
    @IsNotEmpty()
    ArmorClass: number

    @Column()
    @IsNotEmpty({ message: 'HP is Required' })
    HitPoints: number

    @Column()
    @IsNotEmpty({ message: 'Speed is Required' })
    Speed: string

    @Column()
    @IsOptional()
    Spells: string

}
