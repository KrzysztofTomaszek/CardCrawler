import {Potion} from './potion';
import {potionType} from './cardType';

export  class HealPotion extends Potion{
    potionType: potionType = potionType.heal;
    HP: number = 4;
    avatarURL: string = "./img/avatars/healPotion.png";
    name: string = "Heal Potion"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }
	
}