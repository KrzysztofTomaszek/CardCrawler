import {Card} from './card';
import {Money} from './money';
import {cardType, moneyType} from './cardType';

export class Coin extends Money {
    itemValue: number = 5;
    moneyType: moneyType.coin; 
    avatarURL: string = "./img/avatars/coin.png";
    name: string = "Coin"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}