import {Card} from './card';
import {cardType} from './cardType';

export class Hero extends Card {
    name: string = "Knight";
    avatarURL: string = "./img/avatars/knight.png";
    HP: number = 10;
    readonly maxHP:number = this.HP;
    readonly itemTimer: number = null;
    readonly itemValue: number = null; 
    cardType: cardType = cardType.hero;
    holdItem : number;
    ifHoldItem : boolean = false;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this); 
    }

    OnHeroMoveOn(hero : Hero): void {}	
    IfHeroMoveOnContact(hero : Hero) : boolean {return false;}

    OnItemGet(itemDurability: number): void
    {
        this.holdItem = itemDurability;
        super.DrawHoldItem(this.holdItem);
    }    
    
    DealDamageToMonster(): void
    {
        throw new Error("Method not implemented.");
    }

    SubDurability(): void //Dur to life dla przedmiotów
    {
        throw new Error("Method not implemented.");
    }
}