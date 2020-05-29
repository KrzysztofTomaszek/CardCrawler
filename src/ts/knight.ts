import {Hero} from './hero';

export class Knight extends Hero {
    name: string = "Knight";
    avatarURL: string = "./img/avatars/knight.png";
    HP: number = 10;
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
        super.Initialize(this); 
    }
}