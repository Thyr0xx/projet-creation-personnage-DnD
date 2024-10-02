import { ChildEntity, Column, JoinTable, ManyToMany } from "typeorm";
import { Race } from "./Race";
import { Resistance } from "../Resistance";

@ChildEntity()
export class Tiefling extends Race{
    @Column({type:"float", default: 9.0})
    move!: number

    @Column({type:"float", default: 12.0})
    nightVision!: number

    @ManyToMany(()=> Resistance)
    @JoinTable()
    masteries!: Resistance[]
}