import {Card} from './card';
import {cardType, trapType} from './cardType';
import { Hero } from './hero';

export abstract class Trap extends Card {
    cardType: cardType = cardType.trap;
    abstract trapType: trapType;
    abstract active: boolean;
    abstract haveTimer: boolean;
    abstract timer: number; 
    readonly itemValue: number = null;
    readonly holdItem: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(): void {
        throw new Error("Method not implemented.");
    }	
    
    abstract DealDamage(): void;

    SetActive(): void
    {
        throw new Error("Method not implemented.");
    }

    SetTimer(): void
    {
        throw new Error("Method not implemented.");
    }

    OnEndtimer(): void
    {
        throw new Error("Method not implemented.");
    }

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return true;
    }
}