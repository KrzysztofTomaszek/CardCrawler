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

    OnHeroMoveOn(hero : Hero): boolean 
    {
        if(hero.ifHoldItem)
        {
            if(!hero.SubDurability(this.HP))
            {
                //Odbieranie itemowi dur, brak poruszania, resp pieniązka           
                Board.cards[this.cardPleaceId] = new Coin(this.cardPleaceId);
                return false;
            }
            return true;            
        }
        else
        {
            //Odjęcie życia, paruszanie, brak pieniązka
            hero.HP = hero.HP - this.HP;
            return true;
        }
    }	

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        if(hero.ifHoldItem) return false;
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