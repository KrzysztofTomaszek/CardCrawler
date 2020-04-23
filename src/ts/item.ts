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
    abstract itemValue: number;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(hero : Hero): void {
        hero.OnItemGet(this.itemValue);
    }	
    
    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return true;
    }

}