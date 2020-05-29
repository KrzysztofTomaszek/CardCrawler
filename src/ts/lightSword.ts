import {Item} from './item';
import {itemType} from './cardType';

export  class LightSword extends Item{
    itemType: itemType.lightSword;
    monetaryValue: number = 50;
    avatarURL: string = "./img/avatars/lightSword.png";
    itemValue: number = 30;
    name: string = "Light Sword"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}