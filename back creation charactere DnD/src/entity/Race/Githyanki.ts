import { ChildEntity, Column, JoinTable, ManyToMany } from "typeorm";
import { Race } from "./Race";
import { Mastery } from "../Maitrise";
import { Spell } from "../Sort";
import { Action } from "../Action";

@ChildEntity()
export class Githyanki extends Race{
    @Column({type:"float", default: 9.0})
    move!: number

    @ManyToMany(()=> Mastery)
    @JoinTable()
    masteries!: Mastery[]

    @ManyToMany(()=> Spell)
    @JoinTable()
    spells!: Spell[]

    @ManyToMany(()=> Action)
    @JoinTable()
    actions!: Action[]
}