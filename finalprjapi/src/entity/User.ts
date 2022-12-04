import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import {
    IsNotEmpty, IsOptional, Length,
} from 'class-validator';
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @IsOptional()
    id: number

    @Column()
    @Length(1, 50, { message: 'Name must be from $constraint1 to $constraint2 characters ' })
    @IsNotEmpty({ message: 'Name is Required' })
    UserName: string

    @Column()
    @IsNotEmpty()
    Password: string

}
