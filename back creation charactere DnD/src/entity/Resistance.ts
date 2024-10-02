import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Resistance{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    type!: string // feu poison glace

    @Column({default: 0.5})
    ReductionMultiplier!: number
}