import {Money} from './money';
import {moneyType} from './cardType';
import { Board } from './board';

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

    static IfMoneyChain() : number[]
    {        
        let out:number[] = [null,null,null];
        for(let i : number = 0; i <= 2; i++)
        {
            let counter = 0;
            for(let j : number = i; j <= i+6; j+=3)
            {                
                if(Board.cards[j].name == "Coin")
                {
                    out[counter++] = j;
                }
                else break;
            }
        }
        if(out[2]!=null)return out;
        for(let i : number = 0; i <= 6; i+=3)
        {
            let counter = 0;
            for(let j : number = i; j <= i+2; j++)
            {                
                if(Board.cards[j].name == "Coin")
                {
                    out[counter++] = j;       
                }
                else break;
            }
        }
        return out;
    }

    static MoneyChain(moneyArr:number[]) : void
    {        
        for(let i : number = 0; i < moneyArr.length; i++)
        {
            Board.AddCard(moneyArr[i],["Ruby"]);
        }
        if(Board.IfCardOnBoard(name))
        {
            let newMoneyArr:number[] = Coin.IfMoneyChain();
		    if(newMoneyArr[2]!=null)Coin.MoneyChain(newMoneyArr);
        }        
    }
}