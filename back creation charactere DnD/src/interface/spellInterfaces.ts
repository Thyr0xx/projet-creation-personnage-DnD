import { DamageType } from "./traitsInterfaces"

type Unit = 'meters'|'self'

interface Range{
    distance: number
    unit: Unit
}

interface Damage{
    type: DamageType
    dice: string
}

interface AreaOfEffect{
    range: Range
    type?: DamageType
    dice?: string
    target?: string
}

interface Scaling{
    level: number[]
    effect: string[]
}

interface Subclass{
    name: string[]
    level: number
}

interface SpellEffect{
    type: string
    target?: string
    advantage?: boolean
    resistance?: DamageType[]
    source?: string
    lights?: number
    effectType?: string[]
}

type CastingTime = 'oneAction'|'bonusAction'|'reaction'

type School=
| 'abjuration'
| 'conjuration'
| 'divination'
| 'enchantment'
| 'evocation'
| 'illusion'
| 'necromancy'
| 'transmutation'

type Duration =
| 'instantaneous'
| 'oneRound'
| 'tenRound'
| 'untilLongRest'
| 'permanent'
| 'concentration'

interface Spell{
    id: string;
    name: string;
    description: string;
    school: School;
    castingTime: CastingTime;
    range: Range;
    duration: Duration
    damage?: Damage
    effect?: SpellEffect
    areaOfEffect?: AreaOfEffect
    scaling?: Scaling
    classes: string[]
    subClasses?: Subclass[]
    races?: string[]
    tags:string[]
}

interface SpellByLevel{
    [level:string]:Spell[]
}