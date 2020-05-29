import {Money} from './money';
import { moneyType} from './cardType';

export class Ruby extends Money {
    itemValue: number = 10;
    moneyType: moneyType.ruby; 
    avatarURL: string = "./img/avatars/ruby.png";
    name: string = "Ruby"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }	
}