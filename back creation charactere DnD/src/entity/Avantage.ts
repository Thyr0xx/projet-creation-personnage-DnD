import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Advantage{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    type!: string // sauvegarde, compétence

    @Column()
    target!: string // caractéristique (FOR DEX ) ou type spécifique (feu poison etc)
}