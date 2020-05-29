import {Chest} from './chest';
import {chestType} from './cardType';

export class GoodChest extends Chest {
    chestType: chestType.goodChest;
    itemPool: string[] = ["Coin", "Sword", "Staff", "Ruby","HealPotion","BigHealPotion","Dagger"];
    avatarURL: string = "./img/avatars/goodChest.png";
    name: string = "Chest"

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }    
}