export enum cardType {
  hero,
  enemy,
  item,
  trap,
  chest,
  money
}

export enum enemyType {
  zombie,
  skeleton
}

export enum itemType {
	sword,
	staf,
	dagger
}

export enum trapType {
	spike,
	bomb
}

export enum chestType {
	goodChest,
	badChest
}

export enum moneyType {
	coin,
	ruby
}

export const allPlayableCards : String[] = ['Zombie', 'Skeleton', 'Staff', 'Sword', 'Coin']; 
//export const allPlayableCards : String[] = ['Zombie', 'Sword', 'Staff', 'Spike', 'Skeleton', 'GoodChest', 'Coin', 'BadChest']; 

