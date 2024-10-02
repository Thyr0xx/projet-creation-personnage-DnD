import { ChildEntity, Column, JoinTable, ManyToMany } from "typeorm";
import { Race } from "./Race";
import { Mastery } from "../Maitrise";

@ChildEntity()
export class Human extends Race{
    @Column({type:"float", default: 9.0})
    move!: number

    @ManyToMany(()=> Mastery)
    @JoinTable()
    masteries!:Mastery[]

    @Column({default :true})
     choiceAddCompetence!: boolean // a revoir 

     @Column({type: "float", default: 1.25})
     chargeMultiplier!: number

}