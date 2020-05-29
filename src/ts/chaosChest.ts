import {Chest} from './chest';
import {chestType} from './cardType';

export  class ChaosChest extends Chest {
    chestType: chestType.chaosChest;
    itemPool: string[] = ["Werewolf","LightSword","RiskPotion"];
    avatarURL: string = "./img/avatars/chaosChest.png";
    name: string = "Chaos Chest";

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}