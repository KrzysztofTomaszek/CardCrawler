import {Enemy} from './enemy';
import {enemyType} from './cardType';

export class Skeleton extends Enemy {
    name: string = "Skeleton"; 
    enemyType: enemyType = enemyType.skeleton;
    avatarURL: string = "./img/avatars/skeleton.png";
    HP: number = 5;    

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);       
        super.Initialize(this);     
    }
}