import {Card} from './card';
import {cardType, trapType} from './cardType';
import { Hero } from './hero';
import { Board } from './board';

export abstract class Trap extends Card {
    cardType: cardType = cardType.trap;
    abstract trapType: trapType;
    abstract active: boolean;
    abstract ifActivable: boolean;
    abstract haveTimer: boolean;
    abstract timer: number; 
    readonly itemValue: number = null;
    readonly holdItem: number = null;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
    }

    abstract OnHeroMoveOn(hero : Hero): void;
    abstract ChangeActive(): void;

    abstract SetTimer(): void;

    abstract OnEndtimer(): void;

    static ChangeAllActivableTrapStatus() : void
    {
        Board.cards.forEach(card => {			
            if(card.cardType == cardType.trap)
            {
                if((card as Trap).ifActivable)
                {
                    (card as Trap).ChangeActive();
                }            
            }
		});
    }

    IfHeroMoveOnContact(hero : Hero) : boolean 
    {
        return true;
    }
}