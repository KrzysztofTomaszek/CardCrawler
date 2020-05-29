import {Card} from './card';
import {cardType, moneyType} from './cardType';
import { Hero } from './hero';
import { Board } from './board';

export abstract class Money extends Card {
    cardType: cardType = cardType.money;
    abstract moneyType: moneyType; 
    abstract itemValue: number;
    itemTimer: number = null;
    HP: number = null;
    holdItem: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(): void 
    {
        Board.SetScore(this.itemValue);
    }      

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return true;
    }
}