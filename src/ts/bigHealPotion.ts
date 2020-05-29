import {Potion} from './potion';
import {potionType} from './cardType';

export  class BigHealPotion extends Potion{
    potionType: potionType = potionType.bigHeal;
    HP: number = 8;
    avatarURL: string = "./img/avatars/bigHealPotion.png";
    name: string = "Big Heal Potion"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }
	
}