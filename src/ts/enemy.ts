import {Card} from './card';
import {cardType, enemyType} from './cardType';
import { Hero } from './hero';
import { Board } from './board';
import { Coin } from './coin';

export abstract class Enemy extends Card {
    cardType: cardType = cardType.enemy;
    abstract enemyType: enemyType;
    abstract HP: number;
    itemTimer: number = null;
    itemValue: number = null;
    holdItem: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    OnHeroMoveOn(hero : Hero): void 
    {
        if(hero.ifHoldItem)
        {
            //Odbieranie itemowi dur, brak poruszania, resp pieniązka   
            hero.SubDurability(this.HP); 
        }
        else
        {
            //Odjęcie życia, paruszanie, brak pieniązka
            hero.HP = hero.HP - this.HP;
        }
    }	

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        if(hero.ifHoldItem)
        {
            Board.cards[this.cardPleaceId] = new Coin(this.cardPleaceId);
            return false;
        }         
        else return true;        
    }    
   
    DealDamage(): void
    {
        throw new Error("Method not implemented.");
    }

    SubHP(): void
    {
        throw new Error("Method not implemented.");
    }
}