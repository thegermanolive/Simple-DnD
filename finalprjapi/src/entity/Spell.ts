import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {
    IsInt,
    IsNotEmpty, IsOptional, IsPositive, Length, MaxLength,
} from 'class-validator';
@Entity()
export class Spell {

    @PrimaryGeneratedColumn()
    @IsOptional()
    id: number

    @Column()
    @Length(1, 100, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
    @IsNotEmpty({ message: 'Name is Required' })
    spellName: string

    @Column()
    @IsNotEmpty({ message: 'Level is Required' })
    @IsPositive({message: 'Level must be Positive'})
    @IsInt({ message: 'Level must be a whole number' })
    level: number

    @Column()
    @IsNotEmpty({ message: 'School is Required' })
    school: string

    @Column()
    @IsNotEmpty({ message: 'Casting Time is Required' })
    casting_time: string

    @Column()
    @IsNotEmpty({ message: 'Range is Required' })
    range: string

    @Column()
    @IsNotEmpty({ message: 'Duration is Required' })
    duration: string

    @Column()
    @IsNotEmpty({ message: 'Description is Required' })
    desc: string

}
