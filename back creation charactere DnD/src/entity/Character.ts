import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Race } from "./Race/Race";
import { CharacterClass } from "./classe/Classe";
import { Competence } from "./Competence";
import { Spell } from "./Sort";
import { Mastery } from "./Maitrise";
import { Action } from "./Action";


@Entity()
export class Charactere{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @ManyToOne(()=> Race)
    race!: Race

    @ManyToOne(()=>CharacterClass)
    characterClass!: CharacterClass

    @Column({type: "int", default: 1})
    CharacterLevel!: number

    @Column ({type:"float", default: 0.0})
    move!: number

    @ManyToMany(()=> Competence)
    @JoinTable()
    competences!: Competence[]
    
    @ManyToMany(()=> Spell)
    @JoinTable()
    spells!:Spell[]
    
    @ManyToMany(()=> Mastery)
    @JoinTable()
    masteries!: Mastery[]

    @ManyToMany(()=> Action)
    @JoinTable()
    actions!: Action[]
}