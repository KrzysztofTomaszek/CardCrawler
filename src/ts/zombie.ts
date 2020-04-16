import {Card} from './card';
import {Enemy} from './enemy';
import {cardType, enemyType} from './cardType';

export class Zombie extends Enemy {
    name: string = "Zombie"; 
    enemyType: enemyType = enemyType.zombie;
    avatarURL: string = "./img/avatars/zombie.png";
    HP: number = 3;    

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);       
        super.Initialize(this);     
    }
}