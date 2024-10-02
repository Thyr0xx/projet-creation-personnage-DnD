import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Competence {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!:string;
    
    @Column("text")
    Description!: string
}