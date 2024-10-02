import { ChildEntity, Collection, Column } from "typeorm";
import { Race } from "./Race";

@ChildEntity()
export class HalfOrc extends Race {
    @Column({type:"float", default: 9.0})
    move!: number

    @Column({type:"float", default: 12.0})
    nightVision!: number

    @Column({default :true})
    FierceStamina!: boolean 

    @Column({default :true})
    wildAttacks!: boolean 
}