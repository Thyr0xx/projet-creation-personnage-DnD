import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Spell{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column("text")
    description!: string

    @Column({type: "int"})
    level!: number
}