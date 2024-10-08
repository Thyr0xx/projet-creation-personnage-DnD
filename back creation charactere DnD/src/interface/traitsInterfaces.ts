interface Masterytrait{
    masteries: string[]
}

interface NightVisionTrait{
    nightVision: number
    superiorNightVision ?: number
}

type AdvantageType = 'savingThrow'|'test'
type TargetType = string
interface Advantage{
    type: AdvantageType
    target: TargetType
}
interface AdvantageTrait{
    advantage: Advantage[]
}

export type DamageType = 
|'acid'
|'bludgeoning'
|'cold'
|'fire'
|'force'
|'lightning'
|'necrotic'
|'piercing'
|'poison'
|'psychic'
|'radiant'
|'slashing'
|'thunder'
interface Resistance{
    type: DamageType
    reduction: number
}
interface ResistanceTrait{
    resistance:Resistance[]
}

interface SpellTrait{
    spells:{
        [level:string]:string[]//keys are level of Spell, value are tables ID of spell
        }
}

 export interface Trait extends Partial<Masterytrait & NightVisionTrait & AdvantageTrait & ResistanceTrait & SpellTrait>{
    immunityMagicSleep?: boolean
    bonusMove?:number
    additionalSkill?:boolean
    weightMultiplier?: number
    savageAttack?: boolean
    relentlessEndurance?:boolean
    halflingLuck?:boolean
    expertiseHistory?:boolean
    astralKnowledge?:boolean
    skills?:string[]
}