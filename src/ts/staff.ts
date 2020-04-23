import {Card} from './card';
import {Item} from './item';
import {cardType, itemType} from './cardType';

export  class Staff extends Item{
    itemType: itemType.staf;
    monetaryValue: number = 8;
    avatarURL: string = "./img/avatars/staff.png";
    itemValue: number = 6;
    name: string = "Staff"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }
	
}