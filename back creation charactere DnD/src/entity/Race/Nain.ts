import { ChildEntity, Column, JoinTable, ManyToMany } from "typeorm";
import { Race } from "./Race";
import { Advantage } from "../avantage";
import { Resistance } from "../Resistance";

@ChildEntity()
export class Dwarf extends Race{
    @Column({type:"float", default: 7.5})
    move!: number

    @Column({type:"float", default: 12.0})
    nightVision!: number

    @ManyToMany(()=> Resistance)
    @JoinTable()
    resistances!: Resistance[]

    @ManyToMany(()=> Advantage)
    @JoinTable()
    advantages!: Advantage[]
}
