import {Card} from './card';
import {Item} from './item';
import {cardType, itemType} from './cardType';

export  class Sword extends Item {
    itemType: itemType.sword;
    monetaryValue: number = 3;
    avatarURL: string = "./img/avatars/sword.png";
    itemValue: number = 5;
    name: string = "Sword"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}