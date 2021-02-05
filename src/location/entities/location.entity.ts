import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Location')

export class Location {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'double'})
    Latitude: number;

    @Column({type:'double'})
    Longitude:number;

}