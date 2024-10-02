import { ChildEntity, Column, JoinTable, ManyToMany } from "typeorm";
import { Race } from "./Race";
import { Mastery } from "../Maitrise";

@ChildEntity()
export class Halfling extends Race{
    @Column({type:"float", default: 7.5})
    move!: number

    @Column({default: true})
    relaunchDice!: boolean

    @ManyToMany(()=> Mastery)
    @JoinTable()
    masteries!: Mastery[]
}