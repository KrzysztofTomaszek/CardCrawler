import {Card} from './card';
import {cardType, enemyType} from './cardType';
import { Hero } from './hero';
import { Board } from './board';

export abstract class Enemy extends Card {
    cardType: cardType = cardType.enemy;
    abstract enemyType: enemyType;
    abstract HP: number;
    drop: string = "Coin";
    itemTimer: number = null;
    itemValue: number = null;
    holdItem: number = null;
    ifDead: boolean = false;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(hero : Hero): void 
    {
        hero.Fight(this); 
    }	

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        if(hero.ifInLastPhaseHaveItem)
        { 
            if(this.ifDead)Board.AddCard(this.cardPleaceId,[this.drop]);	 
            return false;
        }         
        else return true;        
    }    
   
    TakeDamage(value :  number): void
    {
        this.HP-=value;
        super.DrawHP(this.HP);
    }
}