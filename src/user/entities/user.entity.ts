
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')

export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ 
        type: 'varchar' 
    }) 
    email: string; 

    @Column({ 
        type: 'varchar'
    }) 
    password: string;
}