import { ChildEntity } from "typeorm";
import { Race } from "./Race";

@ChildEntity()
export class Halfling extends Race{
    
}