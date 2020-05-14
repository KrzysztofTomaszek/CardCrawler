import {Card} from './card';
import {Hero} from './hero';
import {Zombie} from './zombie';
import {Sword} from './sword';
import {Staff} from './staff';
import {Spike} from './spike';
import {Skeleton} from './skeleton';
import {GoodChest} from './goodChest';
import {Coin} from './coin';
import {BadChest} from './badChest';
import {cardType, allPlayableCards} from './cardType';

export class Board {
	
	static cards: Card[] = [null, null, null, null, null, null, null, null, null];
	static score: number = 0;
	heroPosition:number = 4;
	hero: Hero;
	

	constructor() {
		this.CreateBoard();
	}

	CreateBoard() : void
	{		
		for(let i:number = 0; i < 9; i++)
		{
			if(i==this.heroPosition)Board.cards[i] = new Hero(i);
			else
			{
				Board.AddCard(i,allPlayableCards);
			}
		}
		//Cookies.set('Score', '10');
		
		if(localStorage.getItem('Score') == null) localStorage.setItem('Score', '0');
		Board.SetScore(parseInt(localStorage.getItem('Score')));
		alert(localStorage.getItem('Board'));
		//if(localStorage.getItem('Board') != null) Board.cards = JSON.parse(localStorage.getItem('Board'))
	}

	static CreateInstance<T extends Card>(c: new (cardPleaceId:number) => T, pleaceId:number): T 
	{
    	return new c(pleaceId);
	}

	static AddCard(cardPleaceId:number, cardPool: string[]) : void
	{
		const randomElement: string  = cardPool[Math.floor(Math.random() * allPlayableCards.length)];	
					
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
			case "Spike":
				Board.cards[cardPleaceId] = Board.CreateInstance(Spike,cardPleaceId);
				break;	
			case "Skeleton":
				Board.cards[cardPleaceId] = Board.CreateInstance(Skeleton,cardPleaceId);
				break;
			case "GoodChest":
				Board.cards[cardPleaceId] = Board.CreateInstance(GoodChest,cardPleaceId);
				break;
			case "Coin":
				Board.cards[cardPleaceId] = Board.CreateInstance(Coin,cardPleaceId);
				break;				
			case "BadChest":
				Board.cards[cardPleaceId] = Board.CreateInstance(BadChest,cardPleaceId);
				break;						
		}			
	}

	static SetScore(addToScore: number): void
	{
		Board.score+=addToScore;
		(document.getElementById('score') as HTMLDivElement).innerHTML = ("<h1>Score: "+ Board.score.toString() +"</h1>");
		localStorage.setItem('Score', Board.score.toString());
	}

	CardClick(idCard:number) : void 
	{
		if(this.IfHeroIsNeighbour(idCard))
		{
			//wywoływanie akcji karty
			this.hero = Board.cards[this.heroPosition] as unknown as Hero;
			Board.cards[idCard].OnHeroMoveOn(this.hero);
			if(Board.cards[this.heroPosition].HP<=0)this.EndGame();
			else if(Board.cards[idCard].IfHeroMoveOnContact(this.hero))this.MoveHeroInBoard(idCard);	

			localStorage.setItem('Board', JSON.stringify(Board.cards));
		}
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
		else throw new Error("Method not implemented.");		

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
				throw new Error("Method not implemented.");
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
				throw new Error("Method not implemented.");
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

	RemoveCard() : void
	{
        throw new Error("Method not implemented.");
	}

	EndGame() : void
	{
		//Zapisywanie postępów
		window.location.href = "index.html";
		localStorage.removeItem('Board');
	}
}