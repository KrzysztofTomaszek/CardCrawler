import {Card} from './card';
import {cardType, itemType} from './cardType';
import { Hero } from './hero';

export abstract class Item extends Card {
    cardType: cardType = cardType.item;
    abstract itemType: itemType;
    abstract monetaryValue : number;
    readonly HP:number = null;
    readonly itemTimer: number = null;
    readonly holdItem: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(): void {
        throw new Error("Method not implemented.");
    }	
    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return true;
    }

}