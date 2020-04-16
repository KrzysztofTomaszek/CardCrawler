import {Card} from './card';
import {cardType, chestType} from './cardType';
import { Hero } from './hero';

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

    OnHeroMoveOn(): void 
    {
        throw new Error("Method not implemented.");
    }	

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return false;
    }
    
    OpenChest()
    {
        throw new Error("Method not implemented.");
    }

    RandomItem()
    {
        throw new Error("Method not implemented.");
    }

    CreateItem()
    {
        throw new Error("Method not implemented.");
    }
     
}