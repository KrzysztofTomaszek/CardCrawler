export enum cardType {
  hero,
  enemy,
  item,
  trap,
  chest,
  money,
  potion
}

export enum enemyType {
  zombie,
  skeleton,
  ork,
  werewolf
}

export enum itemType {
	sword,
	staf,
	dagger,
	lightSword
}

export enum trapType {
	spike
}

export enum chestType {
	goodChest,
	badChest,
	chaosChest
}

export enum moneyType {
	coin,
	ruby
}

export enum potionType {
	heal,
	bigHeal,
	doom,
	risk
}

export const allPlayableCards : string[] = ['Zombie', 'Skeleton', 'Staff', 'Sword', 'GoodChest', 'BadChest','HealPotion','DoomPotion','Spike','ChaosChest','Ork','Dagger']; 

