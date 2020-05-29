import '../scss/main.scss';
import {storageHeroName,storageScoreName,HeroKnightName} from './globals';

if(localStorage.getItem(storageScoreName) == null) localStorage.setItem(storageScoreName, '0');
if(localStorage.getItem(storageHeroName) == null) localStorage.setItem(storageHeroName, HeroKnightName);
