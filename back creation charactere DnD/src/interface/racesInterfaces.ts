import { Trait } from "./traitsInterfaces"


interface Race{
    id:string
    name:string
    description:string
    move: number
    traits?: Trait
    subRaces?:SubRace[]
}

interface SubRace{
    id:string
    name:string
    description:string
    traits?:Trait
}

type RaceList = Race[]