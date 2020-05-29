import {Card} from './card';
import {cardType, potionType} from './cardType';
import { Hero } from './hero';

export abstract class Potion extends Card {
    cardType: cardType = cardType.potion;
    abstract potionType: potionType;
    abstract HP:number;
    readonly itemTimer: number = null;
    readonly holdItem: number = null;
    readonly itemValue: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(hero : Hero): void {
        if(hero.HP+this.HP>hero.maxHP) hero.HP=hero.maxHP;
        else hero.HP+=this.HP;
    }	
    
    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return true;
    }
}