import {Hero} from './hero';

export class MegaKnight extends Hero {
    name: string = "Mega Knight";
    avatarURL: string = "./img/avatars/megaKnight.png";
    HP: number = 15;
    maxHP:number = this.HP;
    itemTimer: number = null;
    itemValue: number = null; 
    holdItem : number = 0;
    ifHoldItem : boolean = false;
    holdItemValue : number;
    ifInLastPhaseHaveItem: boolean = false;

    constructor(cardPleaceId:number)
    {
        super(cardPleaceId);
        super.OnItemGet(10,0);
        super.Initialize(this); 
    }
}