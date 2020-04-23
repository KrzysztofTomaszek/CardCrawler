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
				this.AddCard(i);
			}
		}
	}

	CreateInstance<T extends Card>(c: new (cardPleaceId:number) => T, pleaceId:number): T 
	{
    	return new c(pleaceId);
	}

	AddCard(cardPleaceId:number) : void
	{
		const randomElement: String  = allPlayableCards[Math.floor(Math.random() * allPlayableCards.length)];	
					
		switch (randomElement) 
		{
			case "Zombie":
				Board.cards[cardPleaceId] = this.CreateInstance(Zombie,cardPleaceId);
				break;
			case "Sword":
				Board.cards[cardPleaceId] = this.CreateInstance(Sword,cardPleaceId);
				break;
			case "Staff":
				Board.cards[cardPleaceId] = this.CreateInstance(Staff,cardPleaceId);
				break;
			case "Spike":
				Board.cards[cardPleaceId] = this.CreateInstance(Spike,cardPleaceId);
				break;	
			case "Skeleton":
				Board.cards[cardPleaceId] = this.CreateInstance(Skeleton,cardPleaceId);
				break;
			case "GoodChest":
				Board.cards[cardPleaceId] = this.CreateInstance(GoodChest,cardPleaceId);
				break;
			case "Coin":
				Board.cards[cardPleaceId] = this.CreateInstance(Coin,cardPleaceId);
				break;				
			case "BadChest":
				Board.cards[cardPleaceId] = this.CreateInstance(BadChest,cardPleaceId);
				break;						
		}			
	}

	static SetScore(addToScore: number): void
	{
		Board.score+=addToScore;
		(document.getElementById('score') as HTMLDivElement).innerHTML = ("<h1>Score: "+ Board.score.toString() +"</h1>");
	}

	CardClick(idCard:number) : void  //Pamiętaj aby w odpowiednim porzypadku poprawiać pozycję Hero
	{
		if(this.IfHeroIsNeighbour(idCard))
		{
			//wywoływanie akcji karty

			Board.cards[idCard].OnHeroMoveOn(Board.cards[this.heroPosition] as unknown as Hero)
			if(Board.cards[this.heroPosition].HP<=0)this.EndGame();
			else if(Board.cards[idCard].IfHeroMoveOnContact(Board.cards[this.heroPosition] as unknown as Hero)) this.MoveHeroInBoard(idCard);

			//To raczej powinno być w funckji OnHeroMoveOn w podklasach
			/*
			if(Board.cards[idCard].cardType == cardType.chest || Board.cards[idCard].cardType == cardType.trap)
			{

			}
			else if(Board.cards[idCard].cardType == cardType.enemy)
			{
				if((Board.cards[this.heroPosition] as Hero ).ifHoldItem)
				{
					//Odbieranie itemowi dur, brak poruszania, resap pieniązka
				}
				else
				{
					//Odjęcie życia, paruszanie, brak pieniązka
					
					//TEST Poruszania
					this.MoveHeroInBoard(idCard);
					//
				}
			}
			else
			{
				
			}
			*/
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
		this.AddCard(cardToMove+switcher+switcher);
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
		this.AddCard(scecondCard);
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
		this.AddCard(cardToMove);
	}

	MoveCardPauseSign(cardToMove:number, destination:number) : void
	{
		this.MoveCardInBoard(cardToMove,destination);
		if((cardToMove - destination) > 0)this.MoveCardInBoard(++cardToMove,cardToMove - 1);
		else if((cardToMove - destination) < 0)this.MoveCardInBoard(--cardToMove,cardToMove + 1);
		this.AddCard(cardToMove);
	}

	RemoveCard() : void
	{
        throw new Error("Method not implemented.");
	}

	EndGame() : void
	{
		//Zapisywanie postępów
		window.location.href = "index.html";
	}
}