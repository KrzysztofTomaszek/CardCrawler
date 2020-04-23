import {cardType} from './cardType';
import { Hero } from './hero';

export abstract class Card {
    abstract cardType : cardType;
    abstract avatarURL : string;
    abstract HP : number;
    abstract name: string;
    abstract itemTimer: number;
    abstract itemValue: number;
    abstract holdItem: number;
    cardPleaceId : number;
 
    constructor(cardPleaceId:number) {
        this.cardPleaceId = cardPleaceId;      
    }

    Initialize(obj:Card) : void
    {
        this.DrawItemTimer(obj.itemTimer);
        this.DrawHP(obj.HP);
        this.DrawAvatar(obj.avatarURL);
        this.DrawHoldItem(obj.holdItem);
        this.DrawName(obj.name);
        this.DrawItemValue(obj.itemValue);
    }

    MoveCard(destination: number) : void
    {
        this.cardPleaceId = destination;
        this.Initialize(this);
    }

    SwapCard() : void
    {
        throw new Error("Method not implemented.");
    }

    abstract IfHeroMoveOnContact(hero : Hero) : boolean;

    abstract OnHeroMoveOn(hero : Hero) : void; 

    DrawAvatar(src : string = null) : void
    {
        const avatar = document.getElementById("avatarIMG" + this.cardPleaceId.toString()) as HTMLImageElement;
        if(src!=null)avatar.src = src;        
    }

    DrawName(value:string = null): void
    {
        var targetDiv = document.getElementById("card" + this.cardPleaceId.toString()).getElementsByClassName("cardBottom")[0].getElementsByClassName("cardName")[0];
        if(value!=null)targetDiv.innerHTML = value;  
    }

    DrawHP(value:number = null) : void
    {
        this.DrawNumberInClass("cardTop", "life", value);             
    }    

    DrawItemTimer(value:number = null): void
    {
        this.DrawNumberInClass("cardTop", "itemTimer", value); 
    }

    DrawItemValue(value:number = null): void
    {
        this.DrawNumberInClass("cardBottom", "itemValue", value); 
    }

    DrawHoldItem(value:number = null): void
    {

        this.DrawNumberInClass("cardBottom", "holdItem", value); 
    }

    DrawNumberInClass(classCSS:string, childClassCSS:string, value:number) : void
    {
        var targetDiv = document.getElementById("card" + this.cardPleaceId.toString()).getElementsByClassName(classCSS)[0].getElementsByClassName(childClassCSS)[0];
        if(value!=null)targetDiv.innerHTML = (value).toString(); 
        else targetDiv.innerHTML = " ";
    }
}