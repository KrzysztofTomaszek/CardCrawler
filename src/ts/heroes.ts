import '../scss/heroes.scss';
import {storageHeroName,storageScoreName,HeroKnightName,HeroMegaKnightName,storageShopName} from './globals';

class HeroesShop
{
    static shopStatus: string[] = [HeroKnightName, null];
    allHeroes: string[] = [HeroKnightName, HeroMegaKnightName];
    heroesPool:number;
    static money:number;
    static actualActiveHero:string;
    cheapestCharacter: number = 400;

    constructor()
    {
        if(localStorage.getItem(storageScoreName) == null) localStorage.setItem(storageScoreName, '0');
        if(localStorage.getItem(storageHeroName) == null) localStorage.setItem(storageHeroName, HeroKnightName);
        this.heroesPool = HeroesShop.shopStatus.length;
        HeroesShop.money =  parseInt(localStorage.getItem(storageScoreName));
        this.InitializeShop();
        this.InitializeItems();        
        HeroesShop.SetGold(0);
    }

    InitializeShop() : void
    {        
        if(localStorage.getItem(storageShopName) != null) HeroesShop.shopStatus = JSON.parse(localStorage.getItem(storageShopName));
        else localStorage.setItem(storageShopName, JSON.stringify(HeroesShop.shopStatus));
    }

    InitializeItems(): void
    {
        for(let i : number = 0; i < this.heroesPool; i++)
        {
            if(HeroesShop.shopStatus[i] == null)
            {
                let hero: string = this.allHeroes[i];
                let price = this.cheapestCharacter;
                document.getElementById("Select"+hero).classList.add("HeroForBuy");
                document.getElementById("Select"+hero).innerHTML+="<button id='Buy"+hero+"'>Buy for "+(price*i)+"</button>";
                document.getElementById("Buy"+hero).addEventListener("click", function(){HeroesShop.BuyHero(hero, price * i, i) ;;});
            } 
            else if(localStorage.getItem(storageHeroName) == HeroesShop.shopStatus[i]) 
            {
                document.getElementById("Select"+(HeroesShop.shopStatus[i])).classList.add("ActiveHero");
                HeroesShop.actualActiveHero = HeroesShop.shopStatus[i];
            }            
            else
            {
                let hero: string = HeroesShop.shopStatus[i];
                document.getElementById("Select"+hero).classList.add("BoughtHero");
                document.getElementById("Select"+hero).innerHTML+="<button id='Chose"+hero+"'>Chose</button>";
                document.getElementById("Chose"+hero).addEventListener("click", function(){ HeroesShop.ActivateHero(hero);;});
            } 
        }
    }
    
    static BuyHero(hero:string, price: number, positionInShopStatus:number): void
    {
        if(price <= HeroesShop.money)
        {
            document.getElementById("Select"+hero).classList.remove("HeroForBuy");
            document.getElementById("Select"+hero).classList.add("BoughtHero");
            document.getElementById("Buy"+hero).remove();
            document.getElementById("Select"+hero).innerHTML+="<button id='Chose"+hero+"'>Chose</button>";
            document.getElementById("Chose"+hero).addEventListener("click", function(){ HeroesShop.ActivateHero(hero);;});
            HeroesShop.shopStatus[positionInShopStatus]=hero;
            localStorage.setItem(storageShopName, JSON.stringify(HeroesShop.shopStatus));
            HeroesShop.SetGold(price);
        }
        else alert("You don't have that amount of gold")
        
    }

    static ActivateHero(hero:string)
    {
        document.getElementById("Select"+HeroesShop.actualActiveHero).classList.remove("ActiveHero");
        document.getElementById("Select"+HeroesShop.actualActiveHero).classList.add("BoughtHero");
        document.getElementById("Select"+HeroesShop.actualActiveHero).innerHTML+="<button id='Chose"+HeroesShop.actualActiveHero+"'>Chose</button>";
        let oldHero = HeroesShop.actualActiveHero;
        document.getElementById("Chose"+HeroesShop.actualActiveHero).addEventListener("click", function(){ HeroesShop.ActivateHero(oldHero);;});


        document.getElementById("Select"+hero).classList.remove("BoughtHero");
        document.getElementById("Select"+hero).classList.add("ActiveHero");
        document.getElementById("Chose"+hero).remove();
        localStorage.setItem(storageHeroName, hero);
        HeroesShop.actualActiveHero = hero;
    }

    static SetGold(cost: number): void
	{
		HeroesShop.money-=cost;
		(document.getElementById('Gold') as HTMLDivElement).innerHTML = ("<h1>Gold: "+ HeroesShop.money.toString() +"</h1>");
		localStorage.setItem(storageScoreName, HeroesShop.money.toString());
	}
}

let hShop:HeroesShop = new HeroesShop();
