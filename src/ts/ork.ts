import {Enemy} from './enemy';
import {enemyType} from './cardType';

export class Ork extends Enemy {
    name: string = "Ork"; 
    enemyType: enemyType = enemyType.ork;
    avatarURL: string = "./img/avatars/ork.png";
    HP: number = 10;    

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);       
        super.Initialize(this);     
    }
}