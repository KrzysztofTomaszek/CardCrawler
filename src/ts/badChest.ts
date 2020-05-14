import {Card} from './card';
import {Chest} from './chest';
import {cardType, chestType} from './cardType';

export  class BadChest extends Chest {
    chestType: chestType.badChest;
    itemPool: string[] = ["Zombie","Skeleton"];
    avatarURL: string = "./img/avatars/badChest.png";
    name: string = "Dark Chest";

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}