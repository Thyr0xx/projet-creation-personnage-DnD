import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Mastery {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!:string;
    
    @Column()
    type!: string
}