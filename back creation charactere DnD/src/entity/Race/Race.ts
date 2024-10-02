import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm";

@Entity()
@TableInheritance({column:{type: "varchar", name:"type"}})
export abstract class Race{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column("text",{nullable: true})
    description?: string
}