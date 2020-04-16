import {Card} from './card';
import {Chest} from './chest';
import {cardType, chestType} from './cardType';

export class GoodChest extends Chest {
    chestType: chestType.goodChest;
    itemPool: string[] = ["Coin", "Sword"];
    avatarURL: string = "./img/avatars/chest.png";
    name: string = "Chest"

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }    
}