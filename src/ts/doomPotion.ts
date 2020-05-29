import {Potion} from './potion';
import {potionType} from './cardType';

export  class DoomPotion extends Potion{
    potionType: potionType = potionType.doom;
    HP: number = -4;
    avatarURL: string = "./img/avatars/doomPotion.png";
    name: string = "Potion Of Doom"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}