import {Card} from './card';
import {Trap} from './trap';
import {cardType, trapType} from './cardType';

export class Spike extends Trap {
    readonly itemTimer: number = null;  
    readonly haveTimer: boolean = false;
    trapType: trapType = trapType.spike;
    active: boolean;
    timer: number;   
    avatarURL: string = "./img/avatars/sample.png";
    HP: number = 4;
    name: string = "Spike"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        this.active = true;
        super.Initialize(this);   
    }

    OnHeroMoveOn(): void {
        throw new Error("Method not implemented.");
    }	
    
    DealDamage(): void {
        throw new Error("Method not implemented.");
    }
}