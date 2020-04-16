import {Card} from './card';
import {cardType, enemyType} from './cardType';
import { Hero } from './hero';

export abstract class Enemy extends Card {
    cardType: cardType = cardType.enemy;
    abstract enemyType: enemyType;
    itemTimer: number = null;
    itemValue: number = null;
    holdItem: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(hero : Hero): boolean 
    {
        if(hero.ifHoldItem)
        {
            //Odbieranie itemowi dur, brak poruszania, resp pieniązka

            return false;
        }
        else
        {
            //Odjęcie życia, paruszanie, brak pieniązka
            hero.HP = hero.HP - this.HP;
            return true;
        }
    }	

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        if(hero.ifHoldItem) return false;
        else return true;        
    }    
   
    DealDamage(): void
    {
        throw new Error("Method not implemented.");
    }

    SubHP(): void
    {
        throw new Error("Method not implemented.");
    }
}