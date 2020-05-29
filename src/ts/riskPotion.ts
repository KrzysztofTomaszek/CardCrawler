import {Potion} from './potion';
import {potionType} from './cardType';
import { Hero } from './hero';

export  class RiskPotion extends Potion{
    potionType: potionType = potionType.risk;
    HP: number = null;
    avatarURL: string = "./img/avatars/riskPotion.png";
    name: string = "Risk Potion"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }
    
    OnHeroMoveOn(hero : Hero): void 
    {
        if(Math.floor(Math.random() * 2) < 1)
        {
            hero.HP=hero.maxHP;
        }
        else
        {
            hero.HP=1;
        }
    }	    
}