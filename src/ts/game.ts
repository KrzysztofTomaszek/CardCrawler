import '../scss/game.scss';
import {Board} from './board';

let board : Board = new Board();

document.getElementById("card0").addEventListener("click", function(){board.CardClick(0);});
document.getElementById("card1").addEventListener("click", function(){board.CardClick(1);});
document.getElementById("card2").addEventListener("click", function(){board.CardClick(2);});
document.getElementById("card3").addEventListener("click", function(){board.CardClick(3);});
document.getElementById("card4").addEventListener("click", function(){board.CardClick(4);});
document.getElementById("card5").addEventListener("click", function(){board.CardClick(5);});
document.getElementById("card6").addEventListener("click", function(){board.CardClick(6);});
document.getElementById("card7").addEventListener("click", function(){board.CardClick(7);});
document.getElementById("card8").addEventListener("click", function(){board.CardClick(8);});
document.getElementById("sellItem").addEventListener("click", function(){board.SellItem();});
