import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, TableInheritance } from "typeorm";
import { Resistance } from "../Resistance";
import { Advantage } from "../avantage";

@Entity()
@TableInheritance({column:{type: "varchar", name:"type"}})
export abstract class Race{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column("text",{nullable: true})
    description?: string

    @ManyToMany(()=> Resistance)
    @JoinTable()
    resistances!: Resistance[]

    @ManyToMany(()=>Advantage)
    @JoinTable()
    advantages!: Advantage[]
}