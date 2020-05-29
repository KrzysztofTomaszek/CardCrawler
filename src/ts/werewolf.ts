import {Enemy} from './enemy';
import {enemyType} from './cardType';

export class Werewolf extends Enemy {
    name: string = "Werewolf"; 
    enemyType: enemyType = enemyType.werewolf;
    avatarURL: string = "./img/avatars/werewolf.png";
    HP: number = 25;    

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);       
        super.Initialize(this);     
        this.drop="Ruby";
    }
}