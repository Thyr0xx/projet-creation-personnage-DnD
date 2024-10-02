import { ChildEntity, Column, JoinTable, ManyToMany } from "typeorm";
import { Race } from "./Race";
import { Mastery } from "../Maitrise";

@ChildEntity()
export class HalfElf extends Race{
    @Column({type:"float", default: 9.0})
    move!: number

    @Column({type:"float", default: 12.0})
    nightVision!: number

    @ManyToMany(()=> Mastery)
    @JoinTable()
    masteries!: Mastery[]
}