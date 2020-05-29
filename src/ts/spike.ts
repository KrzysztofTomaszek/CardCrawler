import {Trap} from './trap';
import {Hero} from './hero';
import {trapType} from './cardType';

export class Spike extends Trap {    
    readonly itemTimer: number = null;  
    readonly haveTimer: boolean = false;
    readonly  timer: number = null;   
    readonly ifActivable = true;
    trapType: trapType = trapType.spike;
    active: boolean = true; 
    spikeOnURL: string = "./img/avatars/spikeON.png";
    spikeOffURL: string = "./img/avatars/spikeOFF.png";   
    avatarURL: string = this.spikeOnURL;    
    HP: number = 6;
    name: string = "Spike"; 

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.Initialize(this);   
    }

    OnHeroMoveOn(hero : Hero): void {
        hero.HP-=this.HP;
    }	

    ChangeActive(): void {
        if(this.active)
        {
            this.HP=0;
            this.avatarURL=this.spikeOffURL;
        }
        else
        {
            this.HP=6;
            this.avatarURL=this.spikeOnURL;            
        }
        super.Initialize(this); 
        this.active = !this.active;
    }

    SetTimer(): void {}

    OnEndtimer(): void {}
}