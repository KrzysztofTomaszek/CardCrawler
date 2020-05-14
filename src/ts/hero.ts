import {Card} from './card';
import {cardType} from './cardType';
import { Enemy } from './enemy';
import { Board } from './board';

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
    holdItemValue : number;
    ifInLastPhaseHaveItem: boolean = false;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this); 
    }

    OnHeroMoveOn(hero : Hero): void {}	
    IfHeroMoveOnContact(hero : Hero) : boolean {return false;}

    OnItemGet(itemDurability: number, itemValue: number): void
    {
        this.ifHoldItem = true;
        this.holdItem = itemDurability;
        this.SetItemValue(itemValue);
        Board.SetItemValue(itemValue);
        super.DrawHoldItem(this.holdItem);
    }    
    
    DealDamageToMonster(): void
    {
        throw new Error("Method not implemented.");
    }

    SetItemValue(value: number) : void
    {
        this.holdItemValue = value;
    }

    Fight(enemy: Enemy): void 
    {
        this.ifInLastPhaseHaveItem = false;
        if(this.ifHoldItem)
        {
            this.ifInLastPhaseHaveItem = true;
            let tmp:number;
            tmp = this.holdItem - enemy.HP;
            enemy.TakeDamage(this.holdItem);
            this.holdItem = tmp;
            if(enemy.HP<=0)enemy.ifDead=true;
            if(this.holdItem <= 0) 
            {
                this.holdItem=0;
                this.ifHoldItem = false;
                this.SetItemValue(0);
            }            
            super.DrawHoldItem(this.holdItem);   
        }
        else
        {
            this.HP-=enemy.HP;
        }               
    }    

    SellItem(): void
    {
        this.SetItemValue(0);
        this.holdItem = 0;
        this.ifHoldItem = false;
        super.DrawHoldItem(this.holdItem);
    }
}