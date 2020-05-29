import {storageHeroName,storageScoreName,storageBoardName,HeroKnightName,HeroMegaKnightName} from './globals';
import {Card} from './card';
import {Hero} from './hero';
import {Zombie} from './zombie';
import {Sword} from './sword';
import {Staff} from './staff';
import {Ruby} from './ruby';
import {Skeleton} from './skeleton';
import {GoodChest} from './goodChest';
import {Coin} from './coin';
import {Trap} from './trap';
import {Knight} from './knight';
import {MegaKnight} from './megaKnight';
import {BadChest} from './badChest';
import {HealPotion} from './healPotion';
import {BigHealPotion} from './bigHealPotion';
import {RiskPotion} from './riskPotion';
import {DoomPotion} from './doomPotion';
import {Spike} from './spike';
import {ChaosChest} from './chaosChest';
import {Dagger} from './dagger';
import {LightSword} from './lightSword';
import {Ork} from './ork';
import {Werewolf} from './werewolf';
import {allPlayableCards, cardType} from './cardType';

export class Board {
	
	static cards: Card[] = [null, null, null, null, null, null, null, null, null];
	static score: number = 0;
	static soundtrack : HTMLAudioElement;
	static soundtrackActive:boolean=false;
	heroPosition:number = 4;
	hero: Hero;
	
	
	constructor() {		
		this.CreateBoard();		
		this.LoadSoundtrack();
	}

	LoadSoundtrack() : void
	{
		Board.soundtrack = new Audio();
		Board.soundtrack.src = "./audio/mainTheme.mp3";
		Board.soundtrack.load();		
		document.getElementById("ChangeSoundtrack").addEventListener("click", function(){Board.ChangeSoundtrack();;});
	}

	static ChangeSoundtrack() : void
	{
		if(Board.soundtrackActive)
		{
			this.soundtrack.pause();
			document.getElementById("ChangeSoundtrack").innerText="Play Soundtrack";
		}
		else
		{
			this.soundtrack.play();
			document.getElementById("ChangeSoundtrack").innerText="Pause Soundtrack";
		}
		Board.soundtrackActive=!Board.soundtrackActive;
	}
		

	CreateBoard() : void
	{		
		if(localStorage.getItem(storageHeroName) == null) localStorage.setItem(storageHeroName, HeroKnightName);
		for(let i:number = 0; i < 9; i++)
		{
			if(i==this.heroPosition) Board.SelectHero(i);
			else
			{
				Board.AddCard(i,allPlayableCards);
			}
		}
		if(localStorage.getItem(storageScoreName) == null) localStorage.setItem(storageScoreName, '0');
		Board.SetScore(parseInt(localStorage.getItem(storageScoreName)));
		//if(localStorage.getItem(storageBoardName) != null) Board.cards = JSON.parse(localStorage.getItem(storageBoardName))
	}

	static CreateInstance<T extends Card>(c: new (cardPleaceId:number) => T, pleaceId:number): T 
	{
    	return new c(pleaceId);
	}

	static AddCard(cardPleaceId:number, cardPool: string[]) : void
	{
		const randomElement: string  = cardPool[Math.floor(Math.random() * cardPool.length)];	
					
		switch (randomElement) 
		{
			case "Zombie":
				Board.cards[cardPleaceId] = Board.CreateInstance(Zombie,cardPleaceId);
				break;
			case "Sword":
				Board.cards[cardPleaceId] = Board.CreateInstance(Sword,cardPleaceId);
				break;
			case "Staff":
				Board.cards[cardPleaceId] = Board.CreateInstance(Staff,cardPleaceId);
				break;
			case "Skeleton":
				Board.cards[cardPleaceId] = Board.CreateInstance(Skeleton,cardPleaceId);
				break;
			case "GoodChest":
				Board.cards[cardPleaceId] = Board.CreateInstance(GoodChest,cardPleaceId);
				break;
			case "BadChest":
				Board.cards[cardPleaceId] = Board.CreateInstance(BadChest,cardPleaceId);
				break;		
			case "Coin":
				Board.cards[cardPleaceId] = Board.CreateInstance(Coin,cardPleaceId);
				break;
			case "Ruby":
				Board.cards[cardPleaceId] = Board.CreateInstance(Ruby,cardPleaceId);
				break;	
			case "HealPotion":
				Board.cards[cardPleaceId] = Board.CreateInstance(HealPotion,cardPleaceId);
				break;	
			case "BigHealPotion":
				Board.cards[cardPleaceId] = Board.CreateInstance(BigHealPotion,cardPleaceId);
				break;	
			case "DoomPotion":
				Board.cards[cardPleaceId] = Board.CreateInstance(DoomPotion,cardPleaceId);
				break;	
			case "RiskPotion":
				Board.cards[cardPleaceId] = Board.CreateInstance(RiskPotion,cardPleaceId);
				break;		
			case "Spike":
				Board.cards[cardPleaceId] = Board.CreateInstance(Spike,cardPleaceId);
				break;	
			case "ChaosChest":
				Board.cards[cardPleaceId] = Board.CreateInstance(ChaosChest,cardPleaceId);
				break;
			case "Werewolf":
				Board.cards[cardPleaceId] = Board.CreateInstance(Werewolf,cardPleaceId);
				break;
			case "Ork":
				Board.cards[cardPleaceId] = Board.CreateInstance(Ork,cardPleaceId);
				break;
			case "Dagger":
				Board.cards[cardPleaceId] = Board.CreateInstance(Dagger,cardPleaceId);
				break;
			case "LightSword":
				Board.cards[cardPleaceId] = Board.CreateInstance(LightSword,cardPleaceId);
				break;		
		}			
	}

	static SelectHero(heroPlace : number) : void
	{
		switch (localStorage.getItem(storageHeroName)) 
		{
			case HeroKnightName:
				Board.cards[heroPlace] = Board.CreateInstance(Knight,heroPlace);
				break;
			case HeroMegaKnightName:
				Board.cards[heroPlace] = Board.CreateInstance(MegaKnight,heroPlace);
				break;
		}
		
	}

	static SetScore(addToScore: number): void
	{
		Board.score+=addToScore;
		(document.getElementById('score') as HTMLDivElement).innerHTML = ("<h1>Gold: "+ Board.score.toString() +"</h1>");
		localStorage.setItem(storageScoreName, Board.score.toString());
	}

	CardClick(idCard:number) : void 
	{
		if(this.IfHeroIsNeighbour(idCard))
		{
			this.hero = Board.cards[this.heroPosition] as unknown as Hero;
			Board.cards[idCard].OnHeroMoveOn(this.hero);
			if(Board.cards[this.heroPosition].HP<=0)this.EndGame();
			else if(Board.cards[idCard].IfHeroMoveOnContact(this.hero))
			{
				this.StartMoneyChainCheckingSystem();
				this.MoveHeroInBoard(idCard);	
				this.StartTrapsActivation();
				this.StartMoneyChainCheckingSystem();
			}
			localStorage.setItem(storageBoardName, JSON.stringify(Board.cards));
		}
	}

	StartMoneyChainCheckingSystem() : void
	{
		if(Board.IfCardOnBoard("Coin"))
		{
			let moneyArr:number[] = Coin.IfMoneyChain();
			if(moneyArr[2]!=null)Coin.MoneyChain(moneyArr);
		}
	}

	StartTrapsActivation() : void
	{
		if(Board.IfTypeOnBoard(cardType.trap))
		{
			Trap.ChangeAllActivableTrapStatus();
		}
	}

	static IfCardOnBoard(cardName: string) : boolean
	{
		let flag:boolean=false;
		Board.cards.forEach(card => {			
			if(card.name == cardName){flag=true;}
		});
		if(flag)return true;
		else return false;
	}

	static IfTypeOnBoard(cardType: cardType) : boolean
	{
		let flag:boolean=false;
		Board.cards.forEach(card => {			
			if(card.cardType == cardType){flag=true;}
		});
		if(flag)return true;
		else return false;
	}

	IfHeroIsNeighbour(idCard:number) : boolean
	{
		if(this.heroPosition == 1 || this.heroPosition == 4 || this.heroPosition == 7)
		{
			if(this.heroPosition - 1 == idCard || this.heroPosition + 1 == idCard) return true;
		}
		if(this.heroPosition == 3 || this.heroPosition == 4 || this.heroPosition == 5)
		{
			if(this.heroPosition - 3 == idCard || this.heroPosition + 3 == idCard) return true;
		}
		if(this.heroPosition == 0 || this.heroPosition == 3 || this.heroPosition == 6)
		{
			if(this.heroPosition + 1 == idCard) return true;
		}
		if(this.heroPosition == 2 || this.heroPosition == 5 || this.heroPosition == 8)
		{
			if(this.heroPosition - 1 == idCard) return true;
		}
		if(this.heroPosition == 0 || this.heroPosition == 1 || this.heroPosition == 2)
		{
			if(this.heroPosition + 3 == idCard) return true;
		}
		if(this.heroPosition == 6 || this.heroPosition == 7 || this.heroPosition == 8)
		{
			if(this.heroPosition - 3 == idCard) return true;
		}
		return false;
	}

	MoveCardInBoard(cardIdToMove:number, destinationId:number):void
	{
		Board.cards[cardIdToMove].MoveCard(destinationId);
		Board.cards[destinationId]=Board.cards[cardIdToMove];		
	}

	MoveHeroInBoard(destination:number):void
	{
		if((this.heroPosition == 1 && destination == 2)||(this.heroPosition == 1 && destination == 0)||(this.heroPosition == 4 && destination == 5)||(this.heroPosition == 4 && destination == 3)||(this.heroPosition == 7 && destination == 8)||(this.heroPosition == 7 && destination == 6))this.MoveCardPauseSign(this.heroPosition, destination);
		else if((this.heroPosition == 3 && destination == 6)||(this.heroPosition == 3 && destination == 0)||(this.heroPosition == 4 && destination == 1)||(this.heroPosition == 4 && destination == 7)||(this.heroPosition == 5 && destination == 2)||(this.heroPosition == 5 && destination == 8))this.MoveCardReversePauseSign(this.heroPosition, destination);
		else if((this.heroPosition == 1 && destination == 4)||(this.heroPosition == 7 && destination == 4)||(this.heroPosition == 3 && destination == 4)||(this.heroPosition == 5 && destination == 4))this.MoveCardSmallL(this.heroPosition);
		else if((this.heroPosition == 0 && destination == 1)||(this.heroPosition == 2 && destination == 1))this.MoveCardBigL(this.heroPosition, destination, 1);
		else if((this.heroPosition == 6 && destination == 7)||(this.heroPosition == 8 && destination == 7))this.MoveCardBigL(this.heroPosition, destination, 2);
		else if((this.heroPosition == 0 && destination == 3)||(this.heroPosition == 6 && destination == 3))this.MoveCardBigL(this.heroPosition, destination, 3);
		else if((this.heroPosition == 2 && destination == 5)||(this.heroPosition == 8 && destination == 5))this.MoveCardBigL(this.heroPosition, destination, 4);
		else throw new Error("Wrong arguments");		

        this.heroPosition=destination;
	}

	MoveCardBigL(cardToMove:number, destinationId:number, switchMode : number) : void
	{
		this.MoveCardInBoard(cardToMove,destinationId);
        let switcher: number;
		switch (switchMode) 
		{
			case 1:
				switcher=3;
				break;
			case 2:
				switcher=-3;				
				break;
			case 3:
				switcher=1;				
				break;
			case 4:
				switcher=-1;				
				break;		
			default:
				throw new Error("Wrong arguments");
		}
		this.MoveCardInBoard(cardToMove+switcher,cardToMove);	
		this.MoveCardInBoard(cardToMove+switcher+switcher,cardToMove+switcher);	
		Board.AddCard(cardToMove+switcher+switcher,allPlayableCards);
	}

	MoveCardSmallL(cardToMove:number, destinationId:number = 4) : void
	{
		let scecondCard: number;
		this.MoveCardInBoard(cardToMove,destinationId);
		switch (cardToMove) 
		{
			case 1:
				scecondCard = 0;
				break;
			case 3:
				scecondCard = 6;				
				break;
			case 5:
				scecondCard = 2;				
				break;
			case 7:
				scecondCard = 8;				
				break;		
			default:
				throw new Error("Wrong arguments");
		}
		this.MoveCardInBoard(scecondCard,cardToMove);
		Board.AddCard(scecondCard,allPlayableCards);
	}	

	MoveCardReversePauseSign(cardToMove:number, destination:number) : void
	{
        this.MoveCardInBoard(cardToMove,destination);
		if((cardToMove - destination) > 0)
		{
			this.MoveCardInBoard(cardToMove + 3,cardToMove);
			cardToMove = cardToMove + 3;
		}
		else if((cardToMove - destination) < 0)
		{
			this.MoveCardInBoard(cardToMove - 3,cardToMove);
			cardToMove = cardToMove - 3;
		}
		Board.AddCard(cardToMove,allPlayableCards);
	}

	MoveCardPauseSign(cardToMove:number, destination:number) : void
	{
		this.MoveCardInBoard(cardToMove,destination);
		if((cardToMove - destination) > 0)this.MoveCardInBoard(++cardToMove,cardToMove - 1);
		else if((cardToMove - destination) < 0)this.MoveCardInBoard(--cardToMove,cardToMove + 1);
		Board.AddCard(cardToMove,allPlayableCards);
	}

	SellItem() : void
	{
		Board.SetScore(this.hero.holdItemValue);
		Board.SetItemValue(0);		
		this.hero.SellItem();
	}

	static SetItemValue(value: number): void
	{
		(document.getElementById('itemValue') as HTMLDivElement).innerHTML = ("<h1>Hold item value: "+ value.toString() +"</h1>");
	}

	EndGame() : void
	{
		window.location.href = "index.html";
		localStorage.removeItem(storageBoardName);
	}
}