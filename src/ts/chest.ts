import {Card} from './card';
import {cardType, chestType} from './cardType';
import { Hero } from './hero';
import { Board } from './board';

export abstract class Chest extends Card {
    cardType: cardType= cardType.chest;
    HP:number = null;
    itemTimer: number = null;
    itemValue: number = null;
    holdItem: number = null;
    abstract chestType: chestType;
    abstract itemPool: string[];

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId); 
    }

    OnHeroMoveOn(): void {}	

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        Board.AddCard(this.cardPleaceId,this.itemPool);	
        return false;
    }
     
}