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
    holdItem : number = 0;
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
        this.ifHoldItem = true;
        this.holdItem = itemDurability;
        super.DrawHoldItem(this.holdItem);
    }    
    
    DealDamageToMonster(): void
    {
        throw new Error("Method not implemented.");
    }

    SubDurability(durLoose:number): boolean //Dur to life dla przedmiotów zwraca czy postać dostała obrażenia
    {
        if(durLoose<=this.holdItem)
        {
            this.holdItem -= durLoose;
            if(durLoose == 0) this.ifHoldItem = false;    
            return false;
        }
        else
        {
            let tmp:number = durLoose - this.holdItem;
            this.holdItem = 0;
            this.HP-=tmp;
            this.ifHoldItem = false;
            return true;
        }           

    }
}