import {Card} from './card';
import {cardType, moneyType} from './cardType';
import { Hero } from './hero';

export abstract class Money extends Card {
    cardType: cardType = cardType.money;
    abstract moneyType: moneyType; 
    itemTimer: number = null;
    HP: number = null;
    holdItem: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(): void 
    {
        throw new Error("Method not implemented.");
    }	

    MoneyChain()
    {
        throw new Error("Method not implemented.");
    }
    
    AddToPurse()
    {
        throw new Error("Method not implemented.");
    }
    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return true;
    }

}