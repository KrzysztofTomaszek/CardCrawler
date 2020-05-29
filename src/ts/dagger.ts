import {Item} from './item';
import {itemType} from './cardType';

export  class Dagger extends Item{
    itemType: itemType.dagger;
    monetaryValue: number = 2;
    avatarURL: string = "./img/avatars/dagger.png";
    itemValue: number = 3;
    name: string = "Dagger"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}