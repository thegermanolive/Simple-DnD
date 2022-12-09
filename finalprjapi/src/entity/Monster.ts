import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {
    IsNotEmpty, IsNumber, IsOptional, IsPositive, Length, MaxLength, Min,
} from 'class-validator';
@Entity()
export class Monster {

    @PrimaryGeneratedColumn()
    @IsOptional()
    id: number

    @Column()
    @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
    @IsNotEmpty({ message: 'Name is Required' })
    monsterName: string

    @Column()
    @IsNotEmpty({ message: 'Monster must have a Challenge Rating'})
    @IsNumber( {},{ message: 'CR must be a number'})
    @IsPositive({message: 'CR must be a positive number'})
    cr: number;

    @Column()
    @IsNotEmpty({message: 'Armour Class is Required'})
    @IsNumber({}, {message: 'Armour Class must be a number'})
    @IsPositive({ message: 'Armour Class must be positive'})
    armourClass: number

    @Column()
    @IsNotEmpty({ message: 'HP is Required' })
    @Length(5,20,{message: 'Hit Points must be from $constraint1 to $constraint2 characters'})
    hitPoints: string

    @Column()
    @IsNotEmpty({ message: 'Speed is Required' })
    @Length(10,50,{message: 'Speed must be from $constraint1 to $constraint2 characters'})
    speed: string

    @Column({nullable: true})
    @IsOptional()
    spelldesc: string

    @Column()
    @IsOptional()
    @Column({nullable: true})
    spells: string

    @Column()
    @IsOptional()
    @Column({nullable: true})
    attacks: string

}
