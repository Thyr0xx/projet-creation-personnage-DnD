import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Charactere{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: string;

    @Column({type: "int",default: 1})
    level: number

    @ManyToOne(()=> Classe)
    classe : Classe;

    @ManyToOne(()=> Race)
    race : Race;

    @ManyToMany(()=> Sort, (sort)=>sort.charactere)
    @JoinTable()
    sorts: Sort[]
    
    @ManyToMany(()=> Action, (action)=>action.charactere)
    @JoinTable()
    actions: Action[]

    @ManyToMany(()=> Aptitude, (aptitude)=>aptitude.charactere)
    @JoinTable()
    aptitudes: Aptitude[]
}