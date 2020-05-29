/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/game.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/game.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/game.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: lightblue; }\n\na:link {\n  color: red; }\n\na:visited {\n  color: red; }\n\na:hover {\n  color: hotpink; }\n\na:active {\n  color: green; }\n\n.wrapper {\n  font: 100% Helvetica, sans-serif;\n  color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  align-content: space-around;\n  justify-content: center;\n  background: blue;\n  flex-flow: column wrap;\n  max-width: 1024px; }\n\n.card {\n  height: 200px;\n  color: black;\n  margin: 10px 1em;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: lightyellow;\n  flex: 0 1 20%; }\n\n.cardTop {\n  margin-top: 10px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n.cardBottom {\n  margin-bottom: 10px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n.cardMiddle {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n\n.cardName {\n  background: skyblue;\n  margin: 0;\n  text-align: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\nimg {\n  max-height: 150px;\n  max-width: 150px;\n  margin: 0; }\n\n.gameBoard {\n  width: 940px;\n  margin: 0 auto;\n  padding: 30px;\n  background: green;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/scss/game.scss":
/*!****************************!*\
  !*** ./src/scss/game.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./game.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/game.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/ts/badChest.ts":
/*!****************************!*\
  !*** ./src/ts/badChest.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const chest_1 = __webpack_require__(/*! ./chest */ "./src/ts/chest.ts");
class BadChest extends chest_1.Chest {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.itemPool = ["Zombie", "Skeleton", "DoomPotion", "RiskPotion", "Ork"];
        this.avatarURL = "./img/avatars/badChest.png";
        this.name = "Dark Chest";
        super.Initialize(this);
    }
}
exports.BadChest = BadChest;


/***/ }),

/***/ "./src/ts/bigHealPotion.ts":
/*!*********************************!*\
  !*** ./src/ts/bigHealPotion.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const potion_1 = __webpack_require__(/*! ./potion */ "./src/ts/potion.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class BigHealPotion extends potion_1.Potion {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.potionType = cardType_1.potionType.bigHeal;
        this.HP = 8;
        this.avatarURL = "./img/avatars/bigHealPotion.png";
        this.name = "Big Heal Potion";
        super.Initialize(this);
    }
}
exports.BigHealPotion = BigHealPotion;


/***/ }),

/***/ "./src/ts/board.ts":
/*!*************************!*\
  !*** ./src/ts/board.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = __webpack_require__(/*! ./globals */ "./src/ts/globals.ts");
const zombie_1 = __webpack_require__(/*! ./zombie */ "./src/ts/zombie.ts");
const sword_1 = __webpack_require__(/*! ./sword */ "./src/ts/sword.ts");
const staff_1 = __webpack_require__(/*! ./staff */ "./src/ts/staff.ts");
const ruby_1 = __webpack_require__(/*! ./ruby */ "./src/ts/ruby.ts");
const skeleton_1 = __webpack_require__(/*! ./skeleton */ "./src/ts/skeleton.ts");
const goodChest_1 = __webpack_require__(/*! ./goodChest */ "./src/ts/goodChest.ts");
const coin_1 = __webpack_require__(/*! ./coin */ "./src/ts/coin.ts");
const trap_1 = __webpack_require__(/*! ./trap */ "./src/ts/trap.ts");
const knight_1 = __webpack_require__(/*! ./knight */ "./src/ts/knight.ts");
const megaKnight_1 = __webpack_require__(/*! ./megaKnight */ "./src/ts/megaKnight.ts");
const badChest_1 = __webpack_require__(/*! ./badChest */ "./src/ts/badChest.ts");
const healPotion_1 = __webpack_require__(/*! ./healPotion */ "./src/ts/healPotion.ts");
const bigHealPotion_1 = __webpack_require__(/*! ./bigHealPotion */ "./src/ts/bigHealPotion.ts");
const riskPotion_1 = __webpack_require__(/*! ./riskPotion */ "./src/ts/riskPotion.ts");
const doomPotion_1 = __webpack_require__(/*! ./doomPotion */ "./src/ts/doomPotion.ts");
const spike_1 = __webpack_require__(/*! ./spike */ "./src/ts/spike.ts");
const chaosChest_1 = __webpack_require__(/*! ./chaosChest */ "./src/ts/chaosChest.ts");
const dagger_1 = __webpack_require__(/*! ./dagger */ "./src/ts/dagger.ts");
const lightSword_1 = __webpack_require__(/*! ./lightSword */ "./src/ts/lightSword.ts");
const ork_1 = __webpack_require__(/*! ./ork */ "./src/ts/ork.ts");
const werewolf_1 = __webpack_require__(/*! ./werewolf */ "./src/ts/werewolf.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Board {
    constructor() {
        this.heroPosition = 4;
        this.CreateBoard();
        this.LoadSoundtrack();
    }
    LoadSoundtrack() {
        Board.soundtrack = new Audio();
        Board.soundtrack.src = "./audio/mainTheme.mp3";
        Board.soundtrack.load();
        document.getElementById("ChangeSoundtrack").addEventListener("click", function () { Board.ChangeSoundtrack(); ; });
    }
    static ChangeSoundtrack() {
        if (Board.soundtrackActive) {
            this.soundtrack.pause();
            document.getElementById("ChangeSoundtrack").innerText = "Play Soundtrack";
        }
        else {
            this.soundtrack.play();
            document.getElementById("ChangeSoundtrack").innerText = "Pause Soundtrack";
        }
        Board.soundtrackActive = !Board.soundtrackActive;
    }
    CreateBoard() {
        if (localStorage.getItem(globals_1.storageHeroName) == null)
            localStorage.setItem(globals_1.storageHeroName, globals_1.HeroKnightName);
        for (let i = 0; i < 9; i++) {
            if (i == this.heroPosition)
                Board.SelectHero(i);
            else {
                Board.AddCard(i, cardType_1.allPlayableCards);
            }
        }
        if (localStorage.getItem(globals_1.storageScoreName) == null)
            localStorage.setItem(globals_1.storageScoreName, '0');
        Board.SetScore(parseInt(localStorage.getItem(globals_1.storageScoreName)));
    }
    static CreateInstance(c, pleaceId) {
        return new c(pleaceId);
    }
    static AddCard(cardPleaceId, cardPool) {
        const randomElement = cardPool[Math.floor(Math.random() * cardPool.length)];
        switch (randomElement) {
            case "Zombie":
                Board.cards[cardPleaceId] = Board.CreateInstance(zombie_1.Zombie, cardPleaceId);
                break;
            case "Sword":
                Board.cards[cardPleaceId] = Board.CreateInstance(sword_1.Sword, cardPleaceId);
                break;
            case "Staff":
                Board.cards[cardPleaceId] = Board.CreateInstance(staff_1.Staff, cardPleaceId);
                break;
            case "Skeleton":
                Board.cards[cardPleaceId] = Board.CreateInstance(skeleton_1.Skeleton, cardPleaceId);
                break;
            case "GoodChest":
                Board.cards[cardPleaceId] = Board.CreateInstance(goodChest_1.GoodChest, cardPleaceId);
                break;
            case "BadChest":
                Board.cards[cardPleaceId] = Board.CreateInstance(badChest_1.BadChest, cardPleaceId);
                break;
            case "Coin":
                Board.cards[cardPleaceId] = Board.CreateInstance(coin_1.Coin, cardPleaceId);
                break;
            case "Ruby":
                Board.cards[cardPleaceId] = Board.CreateInstance(ruby_1.Ruby, cardPleaceId);
                break;
            case "HealPotion":
                Board.cards[cardPleaceId] = Board.CreateInstance(healPotion_1.HealPotion, cardPleaceId);
                break;
            case "BigHealPotion":
                Board.cards[cardPleaceId] = Board.CreateInstance(bigHealPotion_1.BigHealPotion, cardPleaceId);
                break;
            case "DoomPotion":
                Board.cards[cardPleaceId] = Board.CreateInstance(doomPotion_1.DoomPotion, cardPleaceId);
                break;
            case "RiskPotion":
                Board.cards[cardPleaceId] = Board.CreateInstance(riskPotion_1.RiskPotion, cardPleaceId);
                break;
            case "Spike":
                Board.cards[cardPleaceId] = Board.CreateInstance(spike_1.Spike, cardPleaceId);
                break;
            case "ChaosChest":
                Board.cards[cardPleaceId] = Board.CreateInstance(chaosChest_1.ChaosChest, cardPleaceId);
                break;
            case "Werewolf":
                Board.cards[cardPleaceId] = Board.CreateInstance(werewolf_1.Werewolf, cardPleaceId);
                break;
            case "Ork":
                Board.cards[cardPleaceId] = Board.CreateInstance(ork_1.Ork, cardPleaceId);
                break;
            case "Dagger":
                Board.cards[cardPleaceId] = Board.CreateInstance(dagger_1.Dagger, cardPleaceId);
                break;
            case "LightSword":
                Board.cards[cardPleaceId] = Board.CreateInstance(lightSword_1.LightSword, cardPleaceId);
                break;
        }
    }
    static SelectHero(heroPlace) {
        switch (localStorage.getItem(globals_1.storageHeroName)) {
            case globals_1.HeroKnightName:
                Board.cards[heroPlace] = Board.CreateInstance(knight_1.Knight, heroPlace);
                break;
            case globals_1.HeroMegaKnightName:
                Board.cards[heroPlace] = Board.CreateInstance(megaKnight_1.MegaKnight, heroPlace);
                break;
        }
    }
    static SetScore(addToScore) {
        Board.score += addToScore;
        document.getElementById('score').innerHTML = ("<h1>Gold: " + Board.score.toString() + "</h1>");
        localStorage.setItem(globals_1.storageScoreName, Board.score.toString());
    }
    CardClick(idCard) {
        if (this.IfHeroIsNeighbour(idCard)) {
            this.hero = Board.cards[this.heroPosition];
            Board.cards[idCard].OnHeroMoveOn(this.hero);
            if (Board.cards[this.heroPosition].HP <= 0)
                this.EndGame();
            else if (Board.cards[idCard].IfHeroMoveOnContact(this.hero)) {
                this.StartMoneyChainCheckingSystem();
                this.MoveHeroInBoard(idCard);
                this.StartTrapsActivation();
                this.StartMoneyChainCheckingSystem();
            }
            localStorage.setItem(globals_1.storageBoardName, JSON.stringify(Board.cards));
        }
    }
    StartMoneyChainCheckingSystem() {
        if (Board.IfCardOnBoard("Coin")) {
            let moneyArr = coin_1.Coin.IfMoneyChain();
            if (moneyArr[2] != null)
                coin_1.Coin.MoneyChain(moneyArr);
        }
    }
    StartTrapsActivation() {
        if (Board.IfTypeOnBoard(cardType_1.cardType.trap)) {
            trap_1.Trap.ChangeAllActivableTrapStatus();
        }
    }
    static IfCardOnBoard(cardName) {
        let flag = false;
        Board.cards.forEach(card => {
            if (card.name == cardName) {
                flag = true;
            }
        });
        if (flag)
            return true;
        else
            return false;
    }
    static IfTypeOnBoard(cardType) {
        let flag = false;
        Board.cards.forEach(card => {
            if (card.cardType == cardType) {
                flag = true;
            }
        });
        if (flag)
            return true;
        else
            return false;
    }
    IfHeroIsNeighbour(idCard) {
        if (this.heroPosition == 1 || this.heroPosition == 4 || this.heroPosition == 7) {
            if (this.heroPosition - 1 == idCard || this.heroPosition + 1 == idCard)
                return true;
        }
        if (this.heroPosition == 3 || this.heroPosition == 4 || this.heroPosition == 5) {
            if (this.heroPosition - 3 == idCard || this.heroPosition + 3 == idCard)
                return true;
        }
        if (this.heroPosition == 0 || this.heroPosition == 3 || this.heroPosition == 6) {
            if (this.heroPosition + 1 == idCard)
                return true;
        }
        if (this.heroPosition == 2 || this.heroPosition == 5 || this.heroPosition == 8) {
            if (this.heroPosition - 1 == idCard)
                return true;
        }
        if (this.heroPosition == 0 || this.heroPosition == 1 || this.heroPosition == 2) {
            if (this.heroPosition + 3 == idCard)
                return true;
        }
        if (this.heroPosition == 6 || this.heroPosition == 7 || this.heroPosition == 8) {
            if (this.heroPosition - 3 == idCard)
                return true;
        }
        return false;
    }
    MoveCardInBoard(cardIdToMove, destinationId) {
        Board.cards[cardIdToMove].MoveCard(destinationId);
        Board.cards[destinationId] = Board.cards[cardIdToMove];
    }
    MoveHeroInBoard(destination) {
        if ((this.heroPosition == 1 && destination == 2) || (this.heroPosition == 1 && destination == 0) || (this.heroPosition == 4 && destination == 5) || (this.heroPosition == 4 && destination == 3) || (this.heroPosition == 7 && destination == 8) || (this.heroPosition == 7 && destination == 6))
            this.MoveCardPauseSign(this.heroPosition, destination);
        else if ((this.heroPosition == 3 && destination == 6) || (this.heroPosition == 3 && destination == 0) || (this.heroPosition == 4 && destination == 1) || (this.heroPosition == 4 && destination == 7) || (this.heroPosition == 5 && destination == 2) || (this.heroPosition == 5 && destination == 8))
            this.MoveCardReversePauseSign(this.heroPosition, destination);
        else if ((this.heroPosition == 1 && destination == 4) || (this.heroPosition == 7 && destination == 4) || (this.heroPosition == 3 && destination == 4) || (this.heroPosition == 5 && destination == 4))
            this.MoveCardSmallL(this.heroPosition);
        else if ((this.heroPosition == 0 && destination == 1) || (this.heroPosition == 2 && destination == 1))
            this.MoveCardBigL(this.heroPosition, destination, 1);
        else if ((this.heroPosition == 6 && destination == 7) || (this.heroPosition == 8 && destination == 7))
            this.MoveCardBigL(this.heroPosition, destination, 2);
        else if ((this.heroPosition == 0 && destination == 3) || (this.heroPosition == 6 && destination == 3))
            this.MoveCardBigL(this.heroPosition, destination, 3);
        else if ((this.heroPosition == 2 && destination == 5) || (this.heroPosition == 8 && destination == 5))
            this.MoveCardBigL(this.heroPosition, destination, 4);
        else
            throw new Error("Wrong arguments");
        this.heroPosition = destination;
    }
    MoveCardBigL(cardToMove, destinationId, switchMode) {
        this.MoveCardInBoard(cardToMove, destinationId);
        let switcher;
        switch (switchMode) {
            case 1:
                switcher = 3;
                break;
            case 2:
                switcher = -3;
                break;
            case 3:
                switcher = 1;
                break;
            case 4:
                switcher = -1;
                break;
            default:
                throw new Error("Wrong arguments");
        }
        this.MoveCardInBoard(cardToMove + switcher, cardToMove);
        this.MoveCardInBoard(cardToMove + switcher + switcher, cardToMove + switcher);
        Board.AddCard(cardToMove + switcher + switcher, cardType_1.allPlayableCards);
    }
    MoveCardSmallL(cardToMove, destinationId = 4) {
        let scecondCard;
        this.MoveCardInBoard(cardToMove, destinationId);
        switch (cardToMove) {
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
        this.MoveCardInBoard(scecondCard, cardToMove);
        Board.AddCard(scecondCard, cardType_1.allPlayableCards);
    }
    MoveCardReversePauseSign(cardToMove, destination) {
        this.MoveCardInBoard(cardToMove, destination);
        if ((cardToMove - destination) > 0) {
            this.MoveCardInBoard(cardToMove + 3, cardToMove);
            cardToMove = cardToMove + 3;
        }
        else if ((cardToMove - destination) < 0) {
            this.MoveCardInBoard(cardToMove - 3, cardToMove);
            cardToMove = cardToMove - 3;
        }
        Board.AddCard(cardToMove, cardType_1.allPlayableCards);
    }
    MoveCardPauseSign(cardToMove, destination) {
        this.MoveCardInBoard(cardToMove, destination);
        if ((cardToMove - destination) > 0)
            this.MoveCardInBoard(++cardToMove, cardToMove - 1);
        else if ((cardToMove - destination) < 0)
            this.MoveCardInBoard(--cardToMove, cardToMove + 1);
        Board.AddCard(cardToMove, cardType_1.allPlayableCards);
    }
    SellItem() {
        Board.SetScore(this.hero.holdItemValue);
        Board.SetItemValue(0);
        this.hero.SellItem();
    }
    static SetItemValue(value) {
        document.getElementById('itemValue').innerHTML = ("<h1>Hold item value: " + value.toString() + "</h1>");
    }
    EndGame() {
        window.location.href = "index.html";
        localStorage.removeItem(globals_1.storageBoardName);
    }
}
exports.Board = Board;
Board.cards = [null, null, null, null, null, null, null, null, null];
Board.score = 0;
Board.soundtrackActive = false;


/***/ }),

/***/ "./src/ts/card.ts":
/*!************************!*\
  !*** ./src/ts/card.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Card {
    constructor(cardPleaceId) {
        this.cardPleaceId = cardPleaceId;
    }
    Initialize(obj) {
        this.DrawItemTimer(obj.itemTimer);
        this.DrawHP(obj.HP);
        this.DrawAvatar(obj.avatarURL);
        this.DrawHoldItem(obj.holdItem);
        this.DrawName(obj.name);
        this.DrawItemValue(obj.itemValue);
    }
    MoveCard(destination) {
        this.cardPleaceId = destination;
        this.Initialize(this);
    }
    DrawAvatar(src = null) {
        const avatar = document.getElementById("avatarIMG" + this.cardPleaceId.toString());
        if (src != null)
            avatar.src = src;
    }
    DrawName(value = null) {
        var targetDiv = document.getElementById("card" + this.cardPleaceId.toString()).getElementsByClassName("cardBottom")[0].getElementsByClassName("cardName")[0];
        if (value != null)
            targetDiv.innerHTML = value;
    }
    DrawHP(value = null) {
        this.DrawNumberInClass("cardTop", "life", value);
    }
    DrawItemTimer(value = null) {
        this.DrawNumberInClass("cardTop", "itemTimer", value);
    }
    DrawItemValue(value = null) {
        this.DrawNumberInClass("cardBottom", "itemValue", value);
    }
    DrawHoldItem(value = null) {
        this.DrawNumberInClass("cardBottom", "holdItem", value);
    }
    DrawNumberInClass(classCSS, childClassCSS, value) {
        var targetDiv = document.getElementById("card" + this.cardPleaceId.toString()).getElementsByClassName(classCSS)[0].getElementsByClassName(childClassCSS)[0];
        if (value != null)
            targetDiv.innerHTML = (value).toString();
        else
            targetDiv.innerHTML = " ";
    }
}
exports.Card = Card;


/***/ }),

/***/ "./src/ts/cardType.ts":
/*!****************************!*\
  !*** ./src/ts/cardType.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cardType;
(function (cardType) {
    cardType[cardType["hero"] = 0] = "hero";
    cardType[cardType["enemy"] = 1] = "enemy";
    cardType[cardType["item"] = 2] = "item";
    cardType[cardType["trap"] = 3] = "trap";
    cardType[cardType["chest"] = 4] = "chest";
    cardType[cardType["money"] = 5] = "money";
    cardType[cardType["potion"] = 6] = "potion";
})(cardType = exports.cardType || (exports.cardType = {}));
var enemyType;
(function (enemyType) {
    enemyType[enemyType["zombie"] = 0] = "zombie";
    enemyType[enemyType["skeleton"] = 1] = "skeleton";
    enemyType[enemyType["ork"] = 2] = "ork";
    enemyType[enemyType["werewolf"] = 3] = "werewolf";
})(enemyType = exports.enemyType || (exports.enemyType = {}));
var itemType;
(function (itemType) {
    itemType[itemType["sword"] = 0] = "sword";
    itemType[itemType["staf"] = 1] = "staf";
    itemType[itemType["dagger"] = 2] = "dagger";
    itemType[itemType["lightSword"] = 3] = "lightSword";
})(itemType = exports.itemType || (exports.itemType = {}));
var trapType;
(function (trapType) {
    trapType[trapType["spike"] = 0] = "spike";
})(trapType = exports.trapType || (exports.trapType = {}));
var chestType;
(function (chestType) {
    chestType[chestType["goodChest"] = 0] = "goodChest";
    chestType[chestType["badChest"] = 1] = "badChest";
    chestType[chestType["chaosChest"] = 2] = "chaosChest";
})(chestType = exports.chestType || (exports.chestType = {}));
var moneyType;
(function (moneyType) {
    moneyType[moneyType["coin"] = 0] = "coin";
    moneyType[moneyType["ruby"] = 1] = "ruby";
})(moneyType = exports.moneyType || (exports.moneyType = {}));
var potionType;
(function (potionType) {
    potionType[potionType["heal"] = 0] = "heal";
    potionType[potionType["bigHeal"] = 1] = "bigHeal";
    potionType[potionType["doom"] = 2] = "doom";
    potionType[potionType["risk"] = 3] = "risk";
})(potionType = exports.potionType || (exports.potionType = {}));
exports.allPlayableCards = ['Zombie', 'Skeleton', 'Staff', 'Sword', 'GoodChest', 'BadChest', 'HealPotion', 'DoomPotion', 'Spike', 'ChaosChest', 'Ork', 'Dagger'];


/***/ }),

/***/ "./src/ts/chaosChest.ts":
/*!******************************!*\
  !*** ./src/ts/chaosChest.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const chest_1 = __webpack_require__(/*! ./chest */ "./src/ts/chest.ts");
class ChaosChest extends chest_1.Chest {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.itemPool = ["Werewolf", "LightSword", "RiskPotion"];
        this.avatarURL = "./img/avatars/chaosChest.png";
        this.name = "Chaos Chest";
        super.Initialize(this);
    }
}
exports.ChaosChest = ChaosChest;


/***/ }),

/***/ "./src/ts/chest.ts":
/*!*************************!*\
  !*** ./src/ts/chest.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/ts/card.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
const board_1 = __webpack_require__(/*! ./board */ "./src/ts/board.ts");
class Chest extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.chest;
        this.HP = null;
        this.itemTimer = null;
        this.itemValue = null;
        this.holdItem = null;
    }
    OnHeroMoveOn() { }
    IfHeroMoveOnContact(hero) {
        board_1.Board.AddCard(this.cardPleaceId, this.itemPool);
        return false;
    }
}
exports.Chest = Chest;


/***/ }),

/***/ "./src/ts/coin.ts":
/*!************************!*\
  !*** ./src/ts/coin.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const money_1 = __webpack_require__(/*! ./money */ "./src/ts/money.ts");
const board_1 = __webpack_require__(/*! ./board */ "./src/ts/board.ts");
class Coin extends money_1.Money {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.itemValue = 5;
        this.avatarURL = "./img/avatars/coin.png";
        this.name = "Coin";
        super.Initialize(this);
    }
    static IfMoneyChain() {
        let out = [null, null, null];
        for (let i = 0; i <= 2; i++) {
            let counter = 0;
            for (let j = i; j <= i + 6; j += 3) {
                if (board_1.Board.cards[j].name == "Coin") {
                    out[counter++] = j;
                }
                else
                    break;
            }
        }
        if (out[2] != null)
            return out;
        for (let i = 0; i <= 6; i += 3) {
            let counter = 0;
            for (let j = i; j <= i + 2; j++) {
                if (board_1.Board.cards[j].name == "Coin") {
                    out[counter++] = j;
                }
                else
                    break;
            }
        }
        return out;
    }
    static MoneyChain(moneyArr) {
        for (let i = 0; i < moneyArr.length; i++) {
            board_1.Board.AddCard(moneyArr[i], ["Ruby"]);
        }
        if (board_1.Board.IfCardOnBoard(name)) {
            let newMoneyArr = Coin.IfMoneyChain();
            if (newMoneyArr[2] != null)
                Coin.MoneyChain(newMoneyArr);
        }
    }
}
exports.Coin = Coin;


/***/ }),

/***/ "./src/ts/dagger.ts":
/*!**************************!*\
  !*** ./src/ts/dagger.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __webpack_require__(/*! ./item */ "./src/ts/item.ts");
class Dagger extends item_1.Item {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.monetaryValue = 2;
        this.avatarURL = "./img/avatars/dagger.png";
        this.itemValue = 3;
        this.name = "Dagger";
        super.Initialize(this);
    }
}
exports.Dagger = Dagger;


/***/ }),

/***/ "./src/ts/doomPotion.ts":
/*!******************************!*\
  !*** ./src/ts/doomPotion.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const potion_1 = __webpack_require__(/*! ./potion */ "./src/ts/potion.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class DoomPotion extends potion_1.Potion {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.potionType = cardType_1.potionType.doom;
        this.HP = -4;
        this.avatarURL = "./img/avatars/doomPotion.png";
        this.name = "Potion Of Doom";
        super.Initialize(this);
    }
}
exports.DoomPotion = DoomPotion;


/***/ }),

/***/ "./src/ts/enemy.ts":
/*!*************************!*\
  !*** ./src/ts/enemy.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/ts/card.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
const board_1 = __webpack_require__(/*! ./board */ "./src/ts/board.ts");
class Enemy extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.enemy;
        this.drop = "Coin";
        this.itemTimer = null;
        this.itemValue = null;
        this.holdItem = null;
        this.ifDead = false;
    }
    OnHeroMoveOn(hero) {
        hero.Fight(this);
    }
    IfHeroMoveOnContact(hero) {
        if (hero.ifInLastPhaseHaveItem) {
            if (this.ifDead)
                board_1.Board.AddCard(this.cardPleaceId, [this.drop]);
            return false;
        }
        else
            return true;
    }
    TakeDamage(value) {
        this.HP -= value;
        super.DrawHP(this.HP);
    }
}
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../scss/game.scss */ "./src/scss/game.scss");
const board_1 = __webpack_require__(/*! ./board */ "./src/ts/board.ts");
let board = new board_1.Board();
document.getElementById("card0").addEventListener("click", function () { board.CardClick(0); });
document.getElementById("card1").addEventListener("click", function () { board.CardClick(1); });
document.getElementById("card2").addEventListener("click", function () { board.CardClick(2); });
document.getElementById("card3").addEventListener("click", function () { board.CardClick(3); });
document.getElementById("card4").addEventListener("click", function () { board.CardClick(4); });
document.getElementById("card5").addEventListener("click", function () { board.CardClick(5); });
document.getElementById("card6").addEventListener("click", function () { board.CardClick(6); });
document.getElementById("card7").addEventListener("click", function () { board.CardClick(7); });
document.getElementById("card8").addEventListener("click", function () { board.CardClick(8); });
document.getElementById("sellItem").addEventListener("click", function () { board.SellItem(); });


/***/ }),

/***/ "./src/ts/globals.ts":
/*!***************************!*\
  !*** ./src/ts/globals.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.storageHeroName = 'Hero';
exports.storageScoreName = 'Score';
exports.storageBoardName = 'Board';
exports.storageShopName = 'HeroesShop';
exports.HeroKnightName = 'Knight';
exports.HeroMegaKnightName = 'MegaKnight';


/***/ }),

/***/ "./src/ts/goodChest.ts":
/*!*****************************!*\
  !*** ./src/ts/goodChest.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const chest_1 = __webpack_require__(/*! ./chest */ "./src/ts/chest.ts");
class GoodChest extends chest_1.Chest {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.itemPool = ["Coin", "Sword", "Staff", "Ruby", "HealPotion", "BigHealPotion", "Dagger"];
        this.avatarURL = "./img/avatars/goodChest.png";
        this.name = "Chest";
        super.Initialize(this);
    }
}
exports.GoodChest = GoodChest;


/***/ }),

/***/ "./src/ts/healPotion.ts":
/*!******************************!*\
  !*** ./src/ts/healPotion.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const potion_1 = __webpack_require__(/*! ./potion */ "./src/ts/potion.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class HealPotion extends potion_1.Potion {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.potionType = cardType_1.potionType.heal;
        this.HP = 4;
        this.avatarURL = "./img/avatars/healPotion.png";
        this.name = "Heal Potion";
        super.Initialize(this);
    }
}
exports.HealPotion = HealPotion;


/***/ }),

/***/ "./src/ts/hero.ts":
/*!************************!*\
  !*** ./src/ts/hero.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/ts/card.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
const board_1 = __webpack_require__(/*! ./board */ "./src/ts/board.ts");
class Hero extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.hero;
        this.ifInLastPhaseHaveItem = false;
    }
    OnHeroMoveOn(hero) { }
    IfHeroMoveOnContact(hero) { return false; }
    OnItemGet(itemDurability, itemValue) {
        this.ifHoldItem = true;
        this.holdItem = itemDurability;
        this.SetItemValue(itemValue);
        board_1.Board.SetItemValue(itemValue);
        super.DrawHoldItem(this.holdItem);
    }
    DealDamageToMonster() {
        throw new Error("Method not implemented.");
    }
    SetItemValue(value) {
        this.holdItemValue = value;
    }
    Fight(enemy) {
        this.ifInLastPhaseHaveItem = false;
        if (this.ifHoldItem) {
            this.ifInLastPhaseHaveItem = true;
            let tmp;
            tmp = this.holdItem - enemy.HP;
            enemy.TakeDamage(this.holdItem);
            this.holdItem = tmp;
            if (enemy.HP <= 0)
                enemy.ifDead = true;
            if (this.holdItem <= 0) {
                this.holdItem = 0;
                this.ifHoldItem = false;
                this.SetItemValue(0);
            }
            super.DrawHoldItem(this.holdItem);
        }
        else {
            this.HP -= enemy.HP;
        }
    }
    SellItem() {
        this.SetItemValue(0);
        this.holdItem = 0;
        this.ifHoldItem = false;
        super.DrawHoldItem(this.holdItem);
    }
}
exports.Hero = Hero;


/***/ }),

/***/ "./src/ts/item.ts":
/*!************************!*\
  !*** ./src/ts/item.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/ts/card.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Item extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.item;
        this.HP = null;
        this.itemTimer = null;
        this.holdItem = null;
    }
    OnHeroMoveOn(hero) {
        hero.OnItemGet(this.itemValue, this.monetaryValue);
    }
    IfHeroMoveOnContact(hero) {
        return true;
    }
}
exports.Item = Item;


/***/ }),

/***/ "./src/ts/knight.ts":
/*!**************************!*\
  !*** ./src/ts/knight.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = __webpack_require__(/*! ./hero */ "./src/ts/hero.ts");
class Knight extends hero_1.Hero {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.name = "Knight";
        this.avatarURL = "./img/avatars/knight.png";
        this.HP = 10;
        this.maxHP = this.HP;
        this.itemTimer = null;
        this.itemValue = null;
        this.holdItem = 0;
        this.ifHoldItem = false;
        this.ifInLastPhaseHaveItem = false;
        super.Initialize(this);
    }
}
exports.Knight = Knight;


/***/ }),

/***/ "./src/ts/lightSword.ts":
/*!******************************!*\
  !*** ./src/ts/lightSword.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __webpack_require__(/*! ./item */ "./src/ts/item.ts");
class LightSword extends item_1.Item {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.monetaryValue = 50;
        this.avatarURL = "./img/avatars/lightSword.png";
        this.itemValue = 30;
        this.name = "Light Sword";
        super.Initialize(this);
    }
}
exports.LightSword = LightSword;


/***/ }),

/***/ "./src/ts/megaKnight.ts":
/*!******************************!*\
  !*** ./src/ts/megaKnight.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = __webpack_require__(/*! ./hero */ "./src/ts/hero.ts");
class MegaKnight extends hero_1.Hero {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.name = "Mega Knight";
        this.avatarURL = "./img/avatars/megaKnight.png";
        this.HP = 15;
        this.maxHP = this.HP;
        this.itemTimer = null;
        this.itemValue = null;
        this.holdItem = 0;
        this.ifHoldItem = false;
        this.ifInLastPhaseHaveItem = false;
        super.OnItemGet(10, 0);
        super.Initialize(this);
    }
}
exports.MegaKnight = MegaKnight;


/***/ }),

/***/ "./src/ts/money.ts":
/*!*************************!*\
  !*** ./src/ts/money.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/ts/card.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
const board_1 = __webpack_require__(/*! ./board */ "./src/ts/board.ts");
class Money extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.money;
        this.itemTimer = null;
        this.HP = null;
        this.holdItem = null;
    }
    OnHeroMoveOn() {
        board_1.Board.SetScore(this.itemValue);
    }
    IfHeroMoveOnContact(hero) {
        return true;
    }
}
exports.Money = Money;


/***/ }),

/***/ "./src/ts/ork.ts":
/*!***********************!*\
  !*** ./src/ts/ork.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const enemy_1 = __webpack_require__(/*! ./enemy */ "./src/ts/enemy.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Ork extends enemy_1.Enemy {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.name = "Ork";
        this.enemyType = cardType_1.enemyType.ork;
        this.avatarURL = "./img/avatars/ork.png";
        this.HP = 10;
        super.Initialize(this);
    }
}
exports.Ork = Ork;


/***/ }),

/***/ "./src/ts/potion.ts":
/*!**************************!*\
  !*** ./src/ts/potion.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/ts/card.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Potion extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.potion;
        this.itemTimer = null;
        this.holdItem = null;
        this.itemValue = null;
    }
    OnHeroMoveOn(hero) {
        if (hero.HP + this.HP > hero.maxHP)
            hero.HP = hero.maxHP;
        else
            hero.HP += this.HP;
    }
    IfHeroMoveOnContact(hero) {
        return true;
    }
}
exports.Potion = Potion;


/***/ }),

/***/ "./src/ts/riskPotion.ts":
/*!******************************!*\
  !*** ./src/ts/riskPotion.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const potion_1 = __webpack_require__(/*! ./potion */ "./src/ts/potion.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class RiskPotion extends potion_1.Potion {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.potionType = cardType_1.potionType.risk;
        this.HP = null;
        this.avatarURL = "./img/avatars/riskPotion.png";
        this.name = "Risk Potion";
        super.Initialize(this);
    }
    OnHeroMoveOn(hero) {
        if (Math.floor(Math.random() * 2) < 1) {
            hero.HP = hero.maxHP;
        }
        else {
            hero.HP = 1;
        }
    }
}
exports.RiskPotion = RiskPotion;


/***/ }),

/***/ "./src/ts/ruby.ts":
/*!************************!*\
  !*** ./src/ts/ruby.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const money_1 = __webpack_require__(/*! ./money */ "./src/ts/money.ts");
class Ruby extends money_1.Money {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.itemValue = 10;
        this.avatarURL = "./img/avatars/ruby.png";
        this.name = "Ruby";
        super.Initialize(this);
    }
}
exports.Ruby = Ruby;


/***/ }),

/***/ "./src/ts/skeleton.ts":
/*!****************************!*\
  !*** ./src/ts/skeleton.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const enemy_1 = __webpack_require__(/*! ./enemy */ "./src/ts/enemy.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Skeleton extends enemy_1.Enemy {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.name = "Skeleton";
        this.enemyType = cardType_1.enemyType.skeleton;
        this.avatarURL = "./img/avatars/skeleton.png";
        this.HP = 5;
        super.Initialize(this);
    }
}
exports.Skeleton = Skeleton;


/***/ }),

/***/ "./src/ts/spike.ts":
/*!*************************!*\
  !*** ./src/ts/spike.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const trap_1 = __webpack_require__(/*! ./trap */ "./src/ts/trap.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Spike extends trap_1.Trap {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.itemTimer = null;
        this.haveTimer = false;
        this.timer = null;
        this.ifActivable = true;
        this.trapType = cardType_1.trapType.spike;
        this.active = true;
        this.spikeOnURL = "./img/avatars/spikeON.png";
        this.spikeOffURL = "./img/avatars/spikeOFF.png";
        this.avatarURL = this.spikeOnURL;
        this.HP = 6;
        this.name = "Spike";
        super.Initialize(this);
    }
    OnHeroMoveOn(hero) {
        hero.HP -= this.HP;
    }
    ChangeActive() {
        if (this.active) {
            this.HP = 0;
            this.avatarURL = this.spikeOffURL;
        }
        else {
            this.HP = 6;
            this.avatarURL = this.spikeOnURL;
        }
        super.Initialize(this);
        this.active = !this.active;
    }
    SetTimer() { }
    OnEndtimer() { }
}
exports.Spike = Spike;


/***/ }),

/***/ "./src/ts/staff.ts":
/*!*************************!*\
  !*** ./src/ts/staff.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __webpack_require__(/*! ./item */ "./src/ts/item.ts");
class Staff extends item_1.Item {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.monetaryValue = 8;
        this.avatarURL = "./img/avatars/staff.png";
        this.itemValue = 6;
        this.name = "Staff";
        super.Initialize(this);
    }
}
exports.Staff = Staff;


/***/ }),

/***/ "./src/ts/sword.ts":
/*!*************************!*\
  !*** ./src/ts/sword.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __webpack_require__(/*! ./item */ "./src/ts/item.ts");
class Sword extends item_1.Item {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.monetaryValue = 3;
        this.avatarURL = "./img/avatars/sword.png";
        this.itemValue = 5;
        this.name = "Sword";
        super.Initialize(this);
    }
}
exports.Sword = Sword;


/***/ }),

/***/ "./src/ts/trap.ts":
/*!************************!*\
  !*** ./src/ts/trap.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __webpack_require__(/*! ./card */ "./src/ts/card.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
const board_1 = __webpack_require__(/*! ./board */ "./src/ts/board.ts");
class Trap extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.trap;
        this.itemValue = null;
        this.holdItem = null;
    }
    static ChangeAllActivableTrapStatus() {
        board_1.Board.cards.forEach(card => {
            if (card.cardType == cardType_1.cardType.trap) {
                if (card.ifActivable) {
                    card.ChangeActive();
                }
            }
        });
    }
    IfHeroMoveOnContact(hero) {
        return true;
    }
}
exports.Trap = Trap;


/***/ }),

/***/ "./src/ts/werewolf.ts":
/*!****************************!*\
  !*** ./src/ts/werewolf.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const enemy_1 = __webpack_require__(/*! ./enemy */ "./src/ts/enemy.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Werewolf extends enemy_1.Enemy {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.name = "Werewolf";
        this.enemyType = cardType_1.enemyType.werewolf;
        this.avatarURL = "./img/avatars/werewolf.png";
        this.HP = 25;
        super.Initialize(this);
        this.drop = "Ruby";
    }
}
exports.Werewolf = Werewolf;


/***/ }),

/***/ "./src/ts/zombie.ts":
/*!**************************!*\
  !*** ./src/ts/zombie.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const enemy_1 = __webpack_require__(/*! ./enemy */ "./src/ts/enemy.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Zombie extends enemy_1.Enemy {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.name = "Zombie";
        this.enemyType = cardType_1.enemyType.zombie;
        this.avatarURL = "./img/avatars/zombie.png";
        this.HP = 3;
        super.Initialize(this);
    }
}
exports.Zombie = Zombie;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2dhbWUuc2Nzcz9iMzZkIiwid2VicGFjazovLy8uL3NyYy90cy9iYWRDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYmlnSGVhbFBvdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmRUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGFvc0NoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29pbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZGFnZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9kb29tUG90aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ29vZENoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9oZWFsUG90aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9rbmlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2xpZ2h0U3dvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21lZ2FLbmlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vbmV5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9vcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3BvdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcmlza1BvdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcnVieS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2tlbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NwaWtlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc3dvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3dlcmV3b2xmLnRzIiwid2VicGFjazovLy8uL3NyYy90cy96b21iaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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Q0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDeFUsSUFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNwVixJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFD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QUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUM1RixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFXLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDNUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBVyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQzVGLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUM1RixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFXLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDNUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBVyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO0FBQzVGLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGNBQVcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUM1RixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFXLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDNUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFP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dGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9nYW1lLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlOyB9XFxuXFxuYTpsaW5rIHtcXG4gIGNvbG9yOiByZWQ7IH1cXG5cXG5hOnZpc2l0ZWQge1xcbiAgY29sb3I6IHJlZDsgfVxcblxcbmE6aG92ZXIge1xcbiAgY29sb3I6IGhvdHBpbms7IH1cXG5cXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogZ3JlZW47IH1cXG5cXG4ud3JhcHBlciB7XFxuICBmb250OiAxMDAlIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICBtYXgtd2lkdGg6IDEwMjRweDsgfVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW46IDEwcHggMWVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xcbiAgZmxleDogMCAxIDIwJTsgfVxcblxcbi5jYXJkVG9wIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYXJkQm90dG9tIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYXJkTWlkZGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2FyZE5hbWUge1xcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7IH1cXG5cXG5pbWcge1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLmdhbWVCb2FyZCB7XFxuICB3aWR0aDogOTQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2hlc3RUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgQmFkQ2hlc3QgZXh0ZW5kcyBDaGVzdCB7XHJcbiAgICBjaGVzdFR5cGU6IGNoZXN0VHlwZS5iYWRDaGVzdDtcclxuICAgIGl0ZW1Qb29sOiBzdHJpbmdbXSA9IFtcIlpvbWJpZVwiLFwiU2tlbGV0b25cIixcIkRvb21Qb3Rpb25cIixcIlJpc2tQb3Rpb25cIixcIk9ya1wiXTtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2JhZENoZXN0LnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJEYXJrIENoZXN0XCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7UG90aW9ufSBmcm9tICcuL3BvdGlvbic7XHJcbmltcG9ydCB7cG90aW9uVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgIGNsYXNzIEJpZ0hlYWxQb3Rpb24gZXh0ZW5kcyBQb3Rpb257XHJcbiAgICBwb3Rpb25UeXBlOiBwb3Rpb25UeXBlID0gcG90aW9uVHlwZS5iaWdIZWFsO1xyXG4gICAgSFA6IG51bWJlciA9IDg7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9iaWdIZWFsUG90aW9uLnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJCaWcgSGVhbCBQb3Rpb25cIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblx0XHJcbn0iLCJpbXBvcnQge3N0b3JhZ2VIZXJvTmFtZSxzdG9yYWdlU2NvcmVOYW1lLHN0b3JhZ2VCb2FyZE5hbWUsSGVyb0tuaWdodE5hbWUsSGVyb01lZ2FLbmlnaHROYW1lfSBmcm9tICcuL2dsb2JhbHMnO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHtab21iaWV9IGZyb20gJy4vem9tYmllJztcclxuaW1wb3J0IHtTd29yZH0gZnJvbSAnLi9zd29yZCc7XHJcbmltcG9ydCB7U3RhZmZ9IGZyb20gJy4vc3RhZmYnO1xyXG5pbXBvcnQge1J1Ynl9IGZyb20gJy4vcnVieSc7XHJcbmltcG9ydCB7U2tlbGV0b259IGZyb20gJy4vc2tlbGV0b24nO1xyXG5pbXBvcnQge0dvb2RDaGVzdH0gZnJvbSAnLi9nb29kQ2hlc3QnO1xyXG5pbXBvcnQge0NvaW59IGZyb20gJy4vY29pbic7XHJcbmltcG9ydCB7VHJhcH0gZnJvbSAnLi90cmFwJztcclxuaW1wb3J0IHtLbmlnaHR9IGZyb20gJy4va25pZ2h0JztcclxuaW1wb3J0IHtNZWdhS25pZ2h0fSBmcm9tICcuL21lZ2FLbmlnaHQnO1xyXG5pbXBvcnQge0JhZENoZXN0fSBmcm9tICcuL2JhZENoZXN0JztcclxuaW1wb3J0IHtIZWFsUG90aW9ufSBmcm9tICcuL2hlYWxQb3Rpb24nO1xyXG5pbXBvcnQge0JpZ0hlYWxQb3Rpb259IGZyb20gJy4vYmlnSGVhbFBvdGlvbic7XHJcbmltcG9ydCB7Umlza1BvdGlvbn0gZnJvbSAnLi9yaXNrUG90aW9uJztcclxuaW1wb3J0IHtEb29tUG90aW9ufSBmcm9tICcuL2Rvb21Qb3Rpb24nO1xyXG5pbXBvcnQge1NwaWtlfSBmcm9tICcuL3NwaWtlJztcclxuaW1wb3J0IHtDaGFvc0NoZXN0fSBmcm9tICcuL2NoYW9zQ2hlc3QnO1xyXG5pbXBvcnQge0RhZ2dlcn0gZnJvbSAnLi9kYWdnZXInO1xyXG5pbXBvcnQge0xpZ2h0U3dvcmR9IGZyb20gJy4vbGlnaHRTd29yZCc7XHJcbmltcG9ydCB7T3JrfSBmcm9tICcuL29yayc7XHJcbmltcG9ydCB7V2VyZXdvbGZ9IGZyb20gJy4vd2VyZXdvbGYnO1xyXG5pbXBvcnQge2FsbFBsYXlhYmxlQ2FyZHMsIGNhcmRUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcblx0XHJcblx0c3RhdGljIGNhcmRzOiBDYXJkW10gPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcblx0c3RhdGljIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cdHN0YXRpYyBzb3VuZHRyYWNrIDogSFRNTEF1ZGlvRWxlbWVudDtcclxuXHRzdGF0aWMgc291bmR0cmFja0FjdGl2ZTpib29sZWFuPWZhbHNlO1xyXG5cdGhlcm9Qb3NpdGlvbjpudW1iZXIgPSA0O1xyXG5cdGhlcm86IEhlcm87XHJcblx0XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHRcdFxyXG5cdFx0dGhpcy5DcmVhdGVCb2FyZCgpO1x0XHRcclxuXHRcdHRoaXMuTG9hZFNvdW5kdHJhY2soKTtcclxuXHR9XHJcblxyXG5cdExvYWRTb3VuZHRyYWNrKCkgOiB2b2lkXHJcblx0e1xyXG5cdFx0Qm9hcmQuc291bmR0cmFjayA9IG5ldyBBdWRpbygpO1xyXG5cdFx0Qm9hcmQuc291bmR0cmFjay5zcmMgPSBcIi4vYXVkaW8vbWFpblRoZW1lLm1wM1wiO1xyXG5cdFx0Qm9hcmQuc291bmR0cmFjay5sb2FkKCk7XHRcdFxyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDaGFuZ2VTb3VuZHRyYWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe0JvYXJkLkNoYW5nZVNvdW5kdHJhY2soKTs7fSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgQ2hhbmdlU291bmR0cmFjaygpIDogdm9pZFxyXG5cdHtcclxuXHRcdGlmKEJvYXJkLnNvdW5kdHJhY2tBY3RpdmUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc291bmR0cmFjay5wYXVzZSgpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNoYW5nZVNvdW5kdHJhY2tcIikuaW5uZXJUZXh0PVwiUGxheSBTb3VuZHRyYWNrXCI7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuc291bmR0cmFjay5wbGF5KCk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ2hhbmdlU291bmR0cmFja1wiKS5pbm5lclRleHQ9XCJQYXVzZSBTb3VuZHRyYWNrXCI7XHJcblx0XHR9XHJcblx0XHRCb2FyZC5zb3VuZHRyYWNrQWN0aXZlPSFCb2FyZC5zb3VuZHRyYWNrQWN0aXZlO1xyXG5cdH1cclxuXHRcdFxyXG5cclxuXHRDcmVhdGVCb2FyZCgpIDogdm9pZFxyXG5cdHtcdFx0XHJcblx0XHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlSGVyb05hbWUpID09IG51bGwpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VIZXJvTmFtZSwgSGVyb0tuaWdodE5hbWUpO1xyXG5cdFx0Zm9yKGxldCBpOm51bWJlciA9IDA7IGkgPCA5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGlmKGk9PXRoaXMuaGVyb1Bvc2l0aW9uKSBCb2FyZC5TZWxlY3RIZXJvKGkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHRCb2FyZC5BZGRDYXJkKGksYWxsUGxheWFibGVDYXJkcyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VTY29yZU5hbWUpID09IG51bGwpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VTY29yZU5hbWUsICcwJyk7XHJcblx0XHRCb2FyZC5TZXRTY29yZShwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlU2NvcmVOYW1lKSkpO1xyXG5cdFx0Ly9pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlQm9hcmROYW1lKSAhPSBudWxsKSBCb2FyZC5jYXJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUJvYXJkTmFtZSkpXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgQ3JlYXRlSW5zdGFuY2U8VCBleHRlbmRzIENhcmQ+KGM6IG5ldyAoY2FyZFBsZWFjZUlkOm51bWJlcikgPT4gVCwgcGxlYWNlSWQ6bnVtYmVyKTogVCBcclxuXHR7XHJcbiAgICBcdHJldHVybiBuZXcgYyhwbGVhY2VJZCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgQWRkQ2FyZChjYXJkUGxlYWNlSWQ6bnVtYmVyLCBjYXJkUG9vbDogc3RyaW5nW10pIDogdm9pZFxyXG5cdHtcclxuXHRcdGNvbnN0IHJhbmRvbUVsZW1lbnQ6IHN0cmluZyAgPSBjYXJkUG9vbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjYXJkUG9vbC5sZW5ndGgpXTtcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRzd2l0Y2ggKHJhbmRvbUVsZW1lbnQpIFxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIFwiWm9tYmllXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKFpvbWJpZSxjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiU3dvcmRcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoU3dvcmQsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlN0YWZmXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKFN0YWZmLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJTa2VsZXRvblwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShTa2VsZXRvbixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiR29vZENoZXN0XCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKEdvb2RDaGVzdCxjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiQmFkQ2hlc3RcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoQmFkQ2hlc3QsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdGNhc2UgXCJDb2luXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKENvaW4sY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlJ1YnlcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoUnVieSxjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdGNhc2UgXCJIZWFsUG90aW9uXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKEhlYWxQb3Rpb24sY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRjYXNlIFwiQmlnSGVhbFBvdGlvblwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShCaWdIZWFsUG90aW9uLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0Y2FzZSBcIkRvb21Qb3Rpb25cIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoRG9vbVBvdGlvbixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdGNhc2UgXCJSaXNrUG90aW9uXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKFJpc2tQb3Rpb24sY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdGNhc2UgXCJTcGlrZVwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShTcGlrZSxjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdGNhc2UgXCJDaGFvc0NoZXN0XCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKENoYW9zQ2hlc3QsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIldlcmV3b2xmXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKFdlcmV3b2xmLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJPcmtcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoT3JrLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJEYWdnZXJcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoRGFnZ2VyLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJMaWdodFN3b3JkXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKExpZ2h0U3dvcmQsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHR9XHRcdFx0XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgU2VsZWN0SGVybyhoZXJvUGxhY2UgOiBudW1iZXIpIDogdm9pZFxyXG5cdHtcclxuXHRcdHN3aXRjaCAobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUhlcm9OYW1lKSkgXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgSGVyb0tuaWdodE5hbWU6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbaGVyb1BsYWNlXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKEtuaWdodCxoZXJvUGxhY2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIEhlcm9NZWdhS25pZ2h0TmFtZTpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1toZXJvUGxhY2VdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoTWVnYUtuaWdodCxoZXJvUGxhY2UpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgU2V0U2NvcmUoYWRkVG9TY29yZTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdEJvYXJkLnNjb3JlKz1hZGRUb1Njb3JlO1xyXG5cdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpIGFzIEhUTUxEaXZFbGVtZW50KS5pbm5lckhUTUwgPSAoXCI8aDE+R29sZDogXCIrIEJvYXJkLnNjb3JlLnRvU3RyaW5nKCkgK1wiPC9oMT5cIik7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlU2NvcmVOYW1lLCBCb2FyZC5zY29yZS50b1N0cmluZygpKTtcclxuXHR9XHJcblxyXG5cdENhcmRDbGljayhpZENhcmQ6bnVtYmVyKSA6IHZvaWQgXHJcblx0e1xyXG5cdFx0aWYodGhpcy5JZkhlcm9Jc05laWdoYm91cihpZENhcmQpKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmhlcm8gPSBCb2FyZC5jYXJkc1t0aGlzLmhlcm9Qb3NpdGlvbl0gYXMgdW5rbm93biBhcyBIZXJvO1xyXG5cdFx0XHRCb2FyZC5jYXJkc1tpZENhcmRdLk9uSGVyb01vdmVPbih0aGlzLmhlcm8pO1xyXG5cdFx0XHRpZihCb2FyZC5jYXJkc1t0aGlzLmhlcm9Qb3NpdGlvbl0uSFA8PTApdGhpcy5FbmRHYW1lKCk7XHJcblx0XHRcdGVsc2UgaWYoQm9hcmQuY2FyZHNbaWRDYXJkXS5JZkhlcm9Nb3ZlT25Db250YWN0KHRoaXMuaGVybykpXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLlN0YXJ0TW9uZXlDaGFpbkNoZWNraW5nU3lzdGVtKCk7XHJcblx0XHRcdFx0dGhpcy5Nb3ZlSGVyb0luQm9hcmQoaWRDYXJkKTtcdFxyXG5cdFx0XHRcdHRoaXMuU3RhcnRUcmFwc0FjdGl2YXRpb24oKTtcclxuXHRcdFx0XHR0aGlzLlN0YXJ0TW9uZXlDaGFpbkNoZWNraW5nU3lzdGVtKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUJvYXJkTmFtZSwgSlNPTi5zdHJpbmdpZnkoQm9hcmQuY2FyZHMpKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdFN0YXJ0TW9uZXlDaGFpbkNoZWNraW5nU3lzdGVtKCkgOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYoQm9hcmQuSWZDYXJkT25Cb2FyZChcIkNvaW5cIikpXHJcblx0XHR7XHJcblx0XHRcdGxldCBtb25leUFycjpudW1iZXJbXSA9IENvaW4uSWZNb25leUNoYWluKCk7XHJcblx0XHRcdGlmKG1vbmV5QXJyWzJdIT1udWxsKUNvaW4uTW9uZXlDaGFpbihtb25leUFycik7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRTdGFydFRyYXBzQWN0aXZhdGlvbigpIDogdm9pZFxyXG5cdHtcclxuXHRcdGlmKEJvYXJkLklmVHlwZU9uQm9hcmQoY2FyZFR5cGUudHJhcCkpXHJcblx0XHR7XHJcblx0XHRcdFRyYXAuQ2hhbmdlQWxsQWN0aXZhYmxlVHJhcFN0YXR1cygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0c3RhdGljIElmQ2FyZE9uQm9hcmQoY2FyZE5hbWU6IHN0cmluZykgOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGZsYWc6Ym9vbGVhbj1mYWxzZTtcclxuXHRcdEJvYXJkLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHRcdFx0XHJcblx0XHRcdGlmKGNhcmQubmFtZSA9PSBjYXJkTmFtZSl7ZmxhZz10cnVlO31cclxuXHRcdH0pO1xyXG5cdFx0aWYoZmxhZylyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2UgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIElmVHlwZU9uQm9hcmQoY2FyZFR5cGU6IGNhcmRUeXBlKSA6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRsZXQgZmxhZzpib29sZWFuPWZhbHNlO1xyXG5cdFx0Qm9hcmQuY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcdFx0XHRcclxuXHRcdFx0aWYoY2FyZC5jYXJkVHlwZSA9PSBjYXJkVHlwZSl7ZmxhZz10cnVlO31cclxuXHRcdH0pO1xyXG5cdFx0aWYoZmxhZylyZXR1cm4gdHJ1ZTtcclxuXHRcdGVsc2UgcmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0SWZIZXJvSXNOZWlnaGJvdXIoaWRDYXJkOm51bWJlcikgOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gMSB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDcpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uIC0gMSA9PSBpZENhcmQgfHwgdGhpcy5oZXJvUG9zaXRpb24gKyAxID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNSlcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gLSAzID09IGlkQ2FyZCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiArIDMgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gMyB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiArIDEgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDIgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNSB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA4KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiAtIDEgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gMSB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiArIDMgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDYgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNyB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA4KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiAtIDMgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdE1vdmVDYXJkSW5Cb2FyZChjYXJkSWRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbklkOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdEJvYXJkLmNhcmRzW2NhcmRJZFRvTW92ZV0uTW92ZUNhcmQoZGVzdGluYXRpb25JZCk7XHJcblx0XHRCb2FyZC5jYXJkc1tkZXN0aW5hdGlvbklkXT1Cb2FyZC5jYXJkc1tjYXJkSWRUb01vdmVdO1x0XHRcclxuXHR9XHJcblxyXG5cdE1vdmVIZXJvSW5Cb2FyZChkZXN0aW5hdGlvbjpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHRpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMSAmJiBkZXN0aW5hdGlvbiA9PSAyKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgJiYgZGVzdGluYXRpb24gPT0gMCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0ICYmIGRlc3RpbmF0aW9uID09IDUpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNCAmJiBkZXN0aW5hdGlvbiA9PSAzKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDcgJiYgZGVzdGluYXRpb24gPT0gOCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3ICYmIGRlc3RpbmF0aW9uID09IDYpKXRoaXMuTW92ZUNhcmRQYXVzZVNpZ24odGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDMgJiYgZGVzdGluYXRpb24gPT0gNil8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzICYmIGRlc3RpbmF0aW9uID09IDApfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNCAmJiBkZXN0aW5hdGlvbiA9PSAxKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgJiYgZGVzdGluYXRpb24gPT0gNyl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA1ICYmIGRlc3RpbmF0aW9uID09IDIpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNSAmJiBkZXN0aW5hdGlvbiA9PSA4KSl0aGlzLk1vdmVDYXJkUmV2ZXJzZVBhdXNlU2lnbih0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24pO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMSAmJiBkZXN0aW5hdGlvbiA9PSA0KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDcgJiYgZGVzdGluYXRpb24gPT0gNCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzICYmIGRlc3RpbmF0aW9uID09IDQpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNSAmJiBkZXN0aW5hdGlvbiA9PSA0KSl0aGlzLk1vdmVDYXJkU21hbGxMKHRoaXMuaGVyb1Bvc2l0aW9uKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgJiYgZGVzdGluYXRpb24gPT0gMSl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyICYmIGRlc3RpbmF0aW9uID09IDEpKXRoaXMuTW92ZUNhcmRCaWdMKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgMSk7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2ICYmIGRlc3RpbmF0aW9uID09IDcpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gOCAmJiBkZXN0aW5hdGlvbiA9PSA3KSl0aGlzLk1vdmVDYXJkQmlnTCh0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24sIDIpO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMCAmJiBkZXN0aW5hdGlvbiA9PSAzKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDYgJiYgZGVzdGluYXRpb24gPT0gMykpdGhpcy5Nb3ZlQ2FyZEJpZ0wodGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uLCAzKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDIgJiYgZGVzdGluYXRpb24gPT0gNSl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA4ICYmIGRlc3RpbmF0aW9uID09IDUpKXRoaXMuTW92ZUNhcmRCaWdMKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgNCk7XHJcblx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIldyb25nIGFyZ3VtZW50c1wiKTtcdFx0XHJcblxyXG4gICAgICAgIHRoaXMuaGVyb1Bvc2l0aW9uPWRlc3RpbmF0aW9uO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRCaWdMKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbklkOm51bWJlciwgc3dpdGNoTW9kZSA6IG51bWJlcikgOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbklkKTtcclxuICAgICAgICBsZXQgc3dpdGNoZXI6IG51bWJlcjtcclxuXHRcdHN3aXRjaCAoc3dpdGNoTW9kZSkgXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRzd2l0Y2hlcj0zO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0c3dpdGNoZXI9LTM7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHN3aXRjaGVyPTE7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdHN3aXRjaGVyPS0xO1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIldyb25nIGFyZ3VtZW50c1wiKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUrc3dpdGNoZXIsY2FyZFRvTW92ZSk7XHRcclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUrc3dpdGNoZXIrc3dpdGNoZXIsY2FyZFRvTW92ZStzd2l0Y2hlcik7XHRcclxuXHRcdEJvYXJkLkFkZENhcmQoY2FyZFRvTW92ZStzd2l0Y2hlcitzd2l0Y2hlcixhbGxQbGF5YWJsZUNhcmRzKTtcclxuXHR9XHJcblxyXG5cdE1vdmVDYXJkU21hbGxMKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbklkOm51bWJlciA9IDQpIDogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzY2Vjb25kQ2FyZDogbnVtYmVyO1xyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbklkKTtcclxuXHRcdHN3aXRjaCAoY2FyZFRvTW92ZSkgXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRzY2Vjb25kQ2FyZCA9IDA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRzY2Vjb25kQ2FyZCA9IDY7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA1OlxyXG5cdFx0XHRcdHNjZWNvbmRDYXJkID0gMjtcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDc6XHJcblx0XHRcdFx0c2NlY29uZENhcmQgPSA4O1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIldyb25nIGFyZ3VtZW50c1wiKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKHNjZWNvbmRDYXJkLGNhcmRUb01vdmUpO1xyXG5cdFx0Qm9hcmQuQWRkQ2FyZChzY2Vjb25kQ2FyZCxhbGxQbGF5YWJsZUNhcmRzKTtcclxuXHR9XHRcclxuXHJcblx0TW92ZUNhcmRSZXZlcnNlUGF1c2VTaWduKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbjpudW1iZXIpIDogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlLGRlc3RpbmF0aW9uKTtcclxuXHRcdGlmKChjYXJkVG9Nb3ZlIC0gZGVzdGluYXRpb24pID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSArIDMsY2FyZFRvTW92ZSk7XHJcblx0XHRcdGNhcmRUb01vdmUgPSBjYXJkVG9Nb3ZlICsgMztcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoKGNhcmRUb01vdmUgLSBkZXN0aW5hdGlvbikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlIC0gMyxjYXJkVG9Nb3ZlKTtcclxuXHRcdFx0Y2FyZFRvTW92ZSA9IGNhcmRUb01vdmUgLSAzO1xyXG5cdFx0fVxyXG5cdFx0Qm9hcmQuQWRkQ2FyZChjYXJkVG9Nb3ZlLGFsbFBsYXlhYmxlQ2FyZHMpO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRQYXVzZVNpZ24oY2FyZFRvTW92ZTpudW1iZXIsIGRlc3RpbmF0aW9uOm51bWJlcikgOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbik7XHJcblx0XHRpZigoY2FyZFRvTW92ZSAtIGRlc3RpbmF0aW9uKSA+IDApdGhpcy5Nb3ZlQ2FyZEluQm9hcmQoKytjYXJkVG9Nb3ZlLGNhcmRUb01vdmUgLSAxKTtcclxuXHRcdGVsc2UgaWYoKGNhcmRUb01vdmUgLSBkZXN0aW5hdGlvbikgPCAwKXRoaXMuTW92ZUNhcmRJbkJvYXJkKC0tY2FyZFRvTW92ZSxjYXJkVG9Nb3ZlICsgMSk7XHJcblx0XHRCb2FyZC5BZGRDYXJkKGNhcmRUb01vdmUsYWxsUGxheWFibGVDYXJkcyk7XHJcblx0fVxyXG5cclxuXHRTZWxsSXRlbSgpIDogdm9pZFxyXG5cdHtcclxuXHRcdEJvYXJkLlNldFNjb3JlKHRoaXMuaGVyby5ob2xkSXRlbVZhbHVlKTtcclxuXHRcdEJvYXJkLlNldEl0ZW1WYWx1ZSgwKTtcdFx0XHJcblx0XHR0aGlzLmhlcm8uU2VsbEl0ZW0oKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBTZXRJdGVtVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2l0ZW1WYWx1ZScpIGFzIEhUTUxEaXZFbGVtZW50KS5pbm5lckhUTUwgPSAoXCI8aDE+SG9sZCBpdGVtIHZhbHVlOiBcIisgdmFsdWUudG9TdHJpbmcoKSArXCI8L2gxPlwiKTtcclxuXHR9XHJcblxyXG5cdEVuZEdhbWUoKSA6IHZvaWRcclxuXHR7XHJcblx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaW5kZXguaHRtbFwiO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RvcmFnZUJvYXJkTmFtZSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtjYXJkVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcmQge1xyXG4gICAgYWJzdHJhY3QgY2FyZFR5cGUgOiBjYXJkVHlwZTtcclxuICAgIGFic3RyYWN0IGF2YXRhclVSTCA6IHN0cmluZztcclxuICAgIGFic3RyYWN0IEhQIDogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgbmFtZTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgaXRlbVRpbWVyOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IGhvbGRJdGVtOiBudW1iZXI7XHJcbiAgICBjYXJkUGxlYWNlSWQgOiBudW1iZXI7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhcmRQbGVhY2VJZCA9IGNhcmRQbGVhY2VJZDsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBJbml0aWFsaXplKG9iajpDYXJkKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdJdGVtVGltZXIob2JqLml0ZW1UaW1lcik7XHJcbiAgICAgICAgdGhpcy5EcmF3SFAob2JqLkhQKTtcclxuICAgICAgICB0aGlzLkRyYXdBdmF0YXIob2JqLmF2YXRhclVSTCk7XHJcbiAgICAgICAgdGhpcy5EcmF3SG9sZEl0ZW0ob2JqLmhvbGRJdGVtKTtcclxuICAgICAgICB0aGlzLkRyYXdOYW1lKG9iai5uYW1lKTtcclxuICAgICAgICB0aGlzLkRyYXdJdGVtVmFsdWUob2JqLml0ZW1WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgTW92ZUNhcmQoZGVzdGluYXRpb246IG51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXJkUGxlYWNlSWQgPSBkZXN0aW5hdGlvbjtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IE9uSGVyb01vdmVPbihoZXJvIDogSGVybykgOiB2b2lkOyBcclxuXHJcbiAgICBEcmF3QXZhdGFyKHNyYyA6IHN0cmluZyA9IG51bGwpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXZhdGFySU1HXCIgKyB0aGlzLmNhcmRQbGVhY2VJZC50b1N0cmluZygpKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIGlmKHNyYyE9bnVsbClhdmF0YXIuc3JjID0gc3JjOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgRHJhd05hbWUodmFsdWU6c3RyaW5nID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgdGFyZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkXCIgKyB0aGlzLmNhcmRQbGVhY2VJZC50b1N0cmluZygpKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZEJvdHRvbVwiKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZE5hbWVcIilbMF07XHJcbiAgICAgICAgaWYodmFsdWUhPW51bGwpdGFyZ2V0RGl2LmlubmVySFRNTCA9IHZhbHVlOyAgXHJcbiAgICB9XHJcblxyXG4gICAgRHJhd0hQKHZhbHVlOm51bWJlciA9IG51bGwpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuRHJhd051bWJlckluQ2xhc3MoXCJjYXJkVG9wXCIsIFwibGlmZVwiLCB2YWx1ZSk7ICAgICAgICAgICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiAgICBEcmF3SXRlbVRpbWVyKHZhbHVlOm51bWJlciA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRUb3BcIiwgXCJpdGVtVGltZXJcIiwgdmFsdWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3SXRlbVZhbHVlKHZhbHVlOm51bWJlciA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRCb3R0b21cIiwgXCJpdGVtVmFsdWVcIiwgdmFsdWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3SG9sZEl0ZW0odmFsdWU6bnVtYmVyID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRCb3R0b21cIiwgXCJob2xkSXRlbVwiLCB2YWx1ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdOdW1iZXJJbkNsYXNzKGNsYXNzQ1NTOnN0cmluZywgY2hpbGRDbGFzc0NTUzpzdHJpbmcsIHZhbHVlOm51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRhcmdldERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZFwiICsgdGhpcy5jYXJkUGxlYWNlSWQudG9TdHJpbmcoKSkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc0NTUylbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjaGlsZENsYXNzQ1NTKVswXTtcclxuICAgICAgICBpZih2YWx1ZSE9bnVsbCl0YXJnZXREaXYuaW5uZXJIVE1MID0gKHZhbHVlKS50b1N0cmluZygpOyBcclxuICAgICAgICBlbHNlIHRhcmdldERpdi5pbm5lckhUTUwgPSBcIiBcIjtcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIGNhcmRUeXBlIHtcclxuICBoZXJvLFxyXG4gIGVuZW15LFxyXG4gIGl0ZW0sXHJcbiAgdHJhcCxcclxuICBjaGVzdCxcclxuICBtb25leSxcclxuICBwb3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGVudW0gZW5lbXlUeXBlIHtcclxuICB6b21iaWUsXHJcbiAgc2tlbGV0b24sXHJcbiAgb3JrLFxyXG4gIHdlcmV3b2xmXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGl0ZW1UeXBlIHtcclxuXHRzd29yZCxcclxuXHRzdGFmLFxyXG5cdGRhZ2dlcixcclxuXHRsaWdodFN3b3JkXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHRyYXBUeXBlIHtcclxuXHRzcGlrZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBjaGVzdFR5cGUge1xyXG5cdGdvb2RDaGVzdCxcclxuXHRiYWRDaGVzdCxcclxuXHRjaGFvc0NoZXN0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIG1vbmV5VHlwZSB7XHJcblx0Y29pbixcclxuXHRydWJ5XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHBvdGlvblR5cGUge1xyXG5cdGhlYWwsXHJcblx0YmlnSGVhbCxcclxuXHRkb29tLFxyXG5cdHJpc2tcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFsbFBsYXlhYmxlQ2FyZHMgOiBzdHJpbmdbXSA9IFsnWm9tYmllJywgJ1NrZWxldG9uJywgJ1N0YWZmJywgJ1N3b3JkJywgJ0dvb2RDaGVzdCcsICdCYWRDaGVzdCcsJ0hlYWxQb3Rpb24nLCdEb29tUG90aW9uJywnU3Bpa2UnLCdDaGFvc0NoZXN0JywnT3JrJywnRGFnZ2VyJ107IFxyXG5cclxuIiwiaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2hlc3RUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgQ2hhb3NDaGVzdCBleHRlbmRzIENoZXN0IHtcclxuICAgIGNoZXN0VHlwZTogY2hlc3RUeXBlLmNoYW9zQ2hlc3Q7XHJcbiAgICBpdGVtUG9vbDogc3RyaW5nW10gPSBbXCJXZXJld29sZlwiLFwiTGlnaHRTd29yZFwiLFwiUmlza1BvdGlvblwiXTtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2NoYW9zQ2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNoYW9zIENoZXN0XCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgY2hlc3RUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hlc3QgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZT0gY2FyZFR5cGUuY2hlc3Q7XHJcbiAgICBIUDpudW1iZXIgPSBudWxsO1xyXG4gICAgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcbiAgICBhYnN0cmFjdCBjaGVzdFR5cGU6IGNoZXN0VHlwZTtcclxuICAgIGFic3RyYWN0IGl0ZW1Qb29sOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7IFxyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbigpOiB2b2lkIHt9XHRcclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgQm9hcmQuQWRkQ2FyZCh0aGlzLmNhcmRQbGVhY2VJZCx0aGlzLml0ZW1Qb29sKTtcdFxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgICBcclxufSIsImltcG9ydCB7TW9uZXl9IGZyb20gJy4vbW9uZXknO1xyXG5pbXBvcnQge21vbmV5VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29pbiBleHRlbmRzIE1vbmV5IHtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gNTtcclxuICAgIG1vbmV5VHlwZTogbW9uZXlUeXBlLmNvaW47IFxyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvY29pbi5wbmdcIjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiQ29pblwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG5cclxuICAgIHN0YXRpYyBJZk1vbmV5Q2hhaW4oKSA6IG51bWJlcltdXHJcbiAgICB7ICAgICAgICBcclxuICAgICAgICBsZXQgb3V0Om51bWJlcltdID0gW251bGwsbnVsbCxudWxsXTtcclxuICAgICAgICBmb3IobGV0IGkgOiBudW1iZXIgPSAwOyBpIDw9IDI7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgZm9yKGxldCBqIDogbnVtYmVyID0gaTsgaiA8PSBpKzY7IGorPTMpXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihCb2FyZC5jYXJkc1tqXS5uYW1lID09IFwiQ29pblwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dFtjb3VudGVyKytdID0gajtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3V0WzJdIT1udWxsKXJldHVybiBvdXQ7XHJcbiAgICAgICAgZm9yKGxldCBpIDogbnVtYmVyID0gMDsgaSA8PSA2OyBpKz0zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogOiBudW1iZXIgPSBpOyBqIDw9IGkrMjsgaisrKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoQm9hcmQuY2FyZHNbal0ubmFtZSA9PSBcIkNvaW5cIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRbY291bnRlcisrXSA9IGo7ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBNb25leUNoYWluKG1vbmV5QXJyOm51bWJlcltdKSA6IHZvaWRcclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA6IG51bWJlciA9IDA7IGkgPCBtb25leUFyci5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJvYXJkLkFkZENhcmQobW9uZXlBcnJbaV0sW1wiUnVieVwiXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKEJvYXJkLklmQ2FyZE9uQm9hcmQobmFtZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbmV3TW9uZXlBcnI6bnVtYmVyW10gPSBDb2luLklmTW9uZXlDaGFpbigpO1xyXG5cdFx0ICAgIGlmKG5ld01vbmV5QXJyWzJdIT1udWxsKUNvaW4uTW9uZXlDaGFpbihuZXdNb25leUFycik7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7aXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBEYWdnZXIgZXh0ZW5kcyBJdGVte1xyXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLmRhZ2dlcjtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDI7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9kYWdnZXIucG5nXCI7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IDM7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkRhZ2dlclwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtQb3Rpb259IGZyb20gJy4vcG90aW9uJztcclxuaW1wb3J0IHtwb3Rpb25UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgRG9vbVBvdGlvbiBleHRlbmRzIFBvdGlvbntcclxuICAgIHBvdGlvblR5cGU6IHBvdGlvblR5cGUgPSBwb3Rpb25UeXBlLmRvb207XHJcbiAgICBIUDogbnVtYmVyID0gLTQ7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9kb29tUG90aW9uLnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJQb3Rpb24gT2YgRG9vbVwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBlbmVteVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteSBleHRlbmRzIENhcmQge1xyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUuZW5lbXk7XHJcbiAgICBhYnN0cmFjdCBlbmVteVR5cGU6IGVuZW15VHlwZTtcclxuICAgIGFic3RyYWN0IEhQOiBudW1iZXI7XHJcbiAgICBkcm9wOiBzdHJpbmcgPSBcIkNvaW5cIjtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaWZEZWFkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgaGVyby5GaWdodCh0aGlzKTsgXHJcbiAgICB9XHRcclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaGVyby5pZkluTGFzdFBoYXNlSGF2ZUl0ZW0pXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaWYodGhpcy5pZkRlYWQpQm9hcmQuQWRkQ2FyZCh0aGlzLmNhcmRQbGVhY2VJZCxbdGhpcy5kcm9wXSk7XHQgXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTsgICAgICAgIFxyXG4gICAgfSAgICBcclxuICAgXHJcbiAgICBUYWtlRGFtYWdlKHZhbHVlIDogIG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkhQLT12YWx1ZTtcclxuICAgICAgICBzdXBlci5EcmF3SFAodGhpcy5IUCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4uL3Njc3MvZ2FtZS5zY3NzJztcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4vYm9hcmQnO1xuXG5sZXQgYm9hcmQgOiBCb2FyZCA9IG5ldyBCb2FyZCgpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQwXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljaygwKTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDFcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDEpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkMlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soMik7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljaygzKTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDQpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkNVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNSk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg2KTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDcpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkOFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soOCk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGxJdGVtXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLlNlbGxJdGVtKCk7fSk7XG4iLCJleHBvcnQgY29uc3Qgc3RvcmFnZUhlcm9OYW1lOnN0cmluZyA9ICdIZXJvJztcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2VTY29yZU5hbWU6c3RyaW5nID0gJ1Njb3JlJztcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2VCb2FyZE5hbWU6c3RyaW5nID0gJ0JvYXJkJztcclxuZXhwb3J0IGNvbnN0IHN0b3JhZ2VTaG9wTmFtZTpzdHJpbmcgPSAnSGVyb2VzU2hvcCc7XHJcbmV4cG9ydCBjb25zdCBIZXJvS25pZ2h0TmFtZTpzdHJpbmcgPSAnS25pZ2h0JztcclxuZXhwb3J0IGNvbnN0IEhlcm9NZWdhS25pZ2h0TmFtZTpzdHJpbmcgPSAnTWVnYUtuaWdodCc7IiwiaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2hlc3RUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHb29kQ2hlc3QgZXh0ZW5kcyBDaGVzdCB7XHJcbiAgICBjaGVzdFR5cGU6IGNoZXN0VHlwZS5nb29kQ2hlc3Q7XHJcbiAgICBpdGVtUG9vbDogc3RyaW5nW10gPSBbXCJDb2luXCIsIFwiU3dvcmRcIiwgXCJTdGFmZlwiLCBcIlJ1YnlcIixcIkhlYWxQb3Rpb25cIixcIkJpZ0hlYWxQb3Rpb25cIixcIkRhZ2dlclwiXTtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2dvb2RDaGVzdC5wbmdcIjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiQ2hlc3RcIlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfSAgICBcclxufSIsImltcG9ydCB7UG90aW9ufSBmcm9tICcuL3BvdGlvbic7XHJcbmltcG9ydCB7cG90aW9uVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgIGNsYXNzIEhlYWxQb3Rpb24gZXh0ZW5kcyBQb3Rpb257XHJcbiAgICBwb3Rpb25UeXBlOiBwb3Rpb25UeXBlID0gcG90aW9uVHlwZS5oZWFsO1xyXG4gICAgSFA6IG51bWJlciA9IDQ7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9oZWFsUG90aW9uLnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJIZWFsIFBvdGlvblwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cclxuXHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSAnLi9lbmVteSc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSGVybyBleHRlbmRzIENhcmQge1xyXG4gICAgYWJzdHJhY3QgSFA6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IG1heEhQOm51bWJlcjtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgaXRlbVRpbWVyOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjsgXHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGUgPSBjYXJkVHlwZS5oZXJvO1xyXG4gICAgYWJzdHJhY3QgaG9sZEl0ZW0gOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBpZkhvbGRJdGVtIDogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IGhvbGRJdGVtVmFsdWUgOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBpZkluTGFzdFBoYXNlSGF2ZUl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiB2b2lkIHt9XHRcclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiB7cmV0dXJuIGZhbHNlO31cclxuXHJcbiAgICBPbkl0ZW1HZXQoaXRlbUR1cmFiaWxpdHk6IG51bWJlciwgaXRlbVZhbHVlOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZkhvbGRJdGVtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhvbGRJdGVtID0gaXRlbUR1cmFiaWxpdHk7XHJcbiAgICAgICAgdGhpcy5TZXRJdGVtVmFsdWUoaXRlbVZhbHVlKTtcclxuICAgICAgICBCb2FyZC5TZXRJdGVtVmFsdWUoaXRlbVZhbHVlKTtcclxuICAgICAgICBzdXBlci5EcmF3SG9sZEl0ZW0odGhpcy5ob2xkSXRlbSk7XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBEZWFsRGFtYWdlVG9Nb25zdGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBTZXRJdGVtVmFsdWUodmFsdWU6IG51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ob2xkSXRlbVZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgRmlnaHQoZW5lbXk6IEVuZW15KTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlmSW5MYXN0UGhhc2VIYXZlSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuaWZIb2xkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaWZJbkxhc3RQaGFzZUhhdmVJdGVtID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHRtcDpudW1iZXI7XHJcbiAgICAgICAgICAgIHRtcCA9IHRoaXMuaG9sZEl0ZW0gLSBlbmVteS5IUDtcclxuICAgICAgICAgICAgZW5lbXkuVGFrZURhbWFnZSh0aGlzLmhvbGRJdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5ob2xkSXRlbSA9IHRtcDtcclxuICAgICAgICAgICAgaWYoZW5lbXkuSFA8PTApZW5lbXkuaWZEZWFkPXRydWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaG9sZEl0ZW0gPD0gMCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9sZEl0ZW09MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWZIb2xkSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRJdGVtVmFsdWUoMCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3VwZXIuRHJhd0hvbGRJdGVtKHRoaXMuaG9sZEl0ZW0pOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkhQLT1lbmVteS5IUDtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIFNlbGxJdGVtKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNldEl0ZW1WYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLmhvbGRJdGVtID0gMDtcclxuICAgICAgICB0aGlzLmlmSG9sZEl0ZW0gPSBmYWxzZTtcclxuICAgICAgICBzdXBlci5EcmF3SG9sZEl0ZW0odGhpcy5ob2xkSXRlbSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGl0ZW1UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbSBleHRlbmRzIENhcmQge1xyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUuaXRlbTtcclxuICAgIGFic3RyYWN0IGl0ZW1UeXBlOiBpdGVtVHlwZTtcclxuICAgIGFic3RyYWN0IG1vbmV0YXJ5VmFsdWUgOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBIUDpudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKGhlcm8gOiBIZXJvKTogdm9pZCB7XHJcbiAgICAgICAgaGVyby5Pbkl0ZW1HZXQodGhpcy5pdGVtVmFsdWUsIHRoaXMubW9uZXRhcnlWYWx1ZSk7XHJcbiAgICB9XHRcclxuICAgIFxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtuaWdodCBleHRlbmRzIEhlcm8ge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJLbmlnaHRcIjtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2tuaWdodC5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSAxMDtcclxuICAgIG1heEhQOm51bWJlciA9IHRoaXMuSFA7XHJcbiAgICBpdGVtVGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IG51bGw7IFxyXG4gICAgaG9sZEl0ZW0gOiBudW1iZXIgPSAwO1xyXG4gICAgaWZIb2xkSXRlbSA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhvbGRJdGVtVmFsdWUgOiBudW1iZXI7XHJcbiAgICBpZkluTGFzdFBoYXNlSGF2ZUl0ZW06IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7aXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBMaWdodFN3b3JkIGV4dGVuZHMgSXRlbXtcclxuICAgIGl0ZW1UeXBlOiBpdGVtVHlwZS5saWdodFN3b3JkO1xyXG4gICAgbW9uZXRhcnlWYWx1ZTogbnVtYmVyID0gNTA7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9saWdodFN3b3JkLnBuZ1wiO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSAzMDtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiTGlnaHQgU3dvcmRcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWdhS25pZ2h0IGV4dGVuZHMgSGVybyB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIk1lZ2EgS25pZ2h0XCI7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9tZWdhS25pZ2h0LnBuZ1wiO1xyXG4gICAgSFA6IG51bWJlciA9IDE1O1xyXG4gICAgbWF4SFA6bnVtYmVyID0gdGhpcy5IUDtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDsgXHJcbiAgICBob2xkSXRlbSA6IG51bWJlciA9IDA7XHJcbiAgICBpZkhvbGRJdGVtIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaG9sZEl0ZW1WYWx1ZSA6IG51bWJlcjtcclxuICAgIGlmSW5MYXN0UGhhc2VIYXZlSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Pbkl0ZW1HZXQoMTAsMCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIG1vbmV5VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE1vbmV5IGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGUgPSBjYXJkVHlwZS5tb25leTtcclxuICAgIGFic3RyYWN0IG1vbmV5VHlwZTogbW9uZXlUeXBlOyBcclxuICAgIGFic3RyYWN0IGl0ZW1WYWx1ZTogbnVtYmVyO1xyXG4gICAgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgSFA6IG51bWJlciA9IG51bGw7XHJcbiAgICBob2xkSXRlbTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKCk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgQm9hcmQuU2V0U2NvcmUodGhpcy5pdGVtVmFsdWUpO1xyXG4gICAgfSAgICAgIFxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RW5lbXl9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQge2VuZW15VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgT3JrIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJPcmtcIjsgXHJcbiAgICBlbmVteVR5cGU6IGVuZW15VHlwZSA9IGVuZW15VHlwZS5vcms7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9vcmsucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMTA7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTsgICAgICAgXHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBwb3Rpb25UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUG90aW9uIGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGUgPSBjYXJkVHlwZS5wb3Rpb247XHJcbiAgICBhYnN0cmFjdCBwb3Rpb25UeXBlOiBwb3Rpb25UeXBlO1xyXG4gICAgYWJzdHJhY3QgSFA6bnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcbiAgICByZWFkb25seSBpdGVtVmFsdWU6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGlmKGhlcm8uSFArdGhpcy5IUD5oZXJvLm1heEhQKSBoZXJvLkhQPWhlcm8ubWF4SFA7XHJcbiAgICAgICAgZWxzZSBoZXJvLkhQKz10aGlzLkhQO1xyXG4gICAgfVx0XHJcbiAgICBcclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UG90aW9ufSBmcm9tICcuL3BvdGlvbic7XHJcbmltcG9ydCB7cG90aW9uVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBSaXNrUG90aW9uIGV4dGVuZHMgUG90aW9ue1xyXG4gICAgcG90aW9uVHlwZTogcG90aW9uVHlwZSA9IHBvdGlvblR5cGUucmlzaztcclxuICAgIEhQOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvcmlza1BvdGlvbi5wbmdcIjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiUmlzayBQb3Rpb25cIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgaWYoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPCAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVyby5IUD1oZXJvLm1heEhQO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZXJvLkhQPTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVx0ICAgIFxyXG59IiwiaW1wb3J0IHtNb25leX0gZnJvbSAnLi9tb25leSc7XHJcbmltcG9ydCB7IG1vbmV5VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUnVieSBleHRlbmRzIE1vbmV5IHtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gMTA7XHJcbiAgICBtb25leVR5cGU6IG1vbmV5VHlwZS5ydWJ5OyBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3J1YnkucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlJ1YnlcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7RW5lbXl9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQge2VuZW15VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2tlbGV0b24gZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlNrZWxldG9uXCI7IFxyXG4gICAgZW5lbXlUeXBlOiBlbmVteVR5cGUgPSBlbmVteVR5cGUuc2tlbGV0b247XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9za2VsZXRvbi5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSA1OyAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7ICAgICAgIFxyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7VHJhcH0gZnJvbSAnLi90cmFwJztcclxuaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQge3RyYXBUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlrZSBleHRlbmRzIFRyYXAgeyAgICBcclxuICAgIHJlYWRvbmx5IGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDsgIFxyXG4gICAgcmVhZG9ubHkgaGF2ZVRpbWVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICByZWFkb25seSAgdGltZXI6IG51bWJlciA9IG51bGw7ICAgXHJcbiAgICByZWFkb25seSBpZkFjdGl2YWJsZSA9IHRydWU7XHJcbiAgICB0cmFwVHlwZTogdHJhcFR5cGUgPSB0cmFwVHlwZS5zcGlrZTtcclxuICAgIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7IFxyXG4gICAgc3Bpa2VPblVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NwaWtlT04ucG5nXCI7XHJcbiAgICBzcGlrZU9mZlVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NwaWtlT0ZGLnBuZ1wiOyAgIFxyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSB0aGlzLnNwaWtlT25VUkw7ICAgIFxyXG4gICAgSFA6IG51bWJlciA9IDY7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlNwaWtlXCI7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGhlcm8uSFAtPXRoaXMuSFA7XHJcbiAgICB9XHRcclxuXHJcbiAgICBDaGFuZ2VBY3RpdmUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5hY3RpdmUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkhQPTA7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyVVJMPXRoaXMuc3Bpa2VPZmZVUkw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuSFA9NjtcclxuICAgICAgICAgICAgdGhpcy5hdmF0YXJVUkw9dGhpcy5zcGlrZU9uVVJMOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyBcclxuICAgICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBTZXRUaW1lcigpOiB2b2lkIHt9XHJcblxyXG4gICAgT25FbmR0aW1lcigpOiB2b2lkIHt9XHJcbn0iLCJpbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7aXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBTdGFmZiBleHRlbmRzIEl0ZW17XHJcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUuc3RhZjtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDg7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zdGFmZi5wbmdcIjtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gNjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU3RhZmZcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblx0XHJcbn0iLCJpbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7aXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBTd29yZCBleHRlbmRzIEl0ZW0ge1xyXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLnN3b3JkO1xyXG4gICAgbW9uZXRhcnlWYWx1ZTogbnVtYmVyID0gMztcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3N3b3JkLnBuZ1wiO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSA1O1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTd29yZFwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCB0cmFwVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyYXAgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLnRyYXA7XHJcbiAgICBhYnN0cmFjdCB0cmFwVHlwZTogdHJhcFR5cGU7XHJcbiAgICBhYnN0cmFjdCBhY3RpdmU6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBpZkFjdGl2YWJsZTogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IGhhdmVUaW1lcjogYm9vbGVhbjtcclxuICAgIGFic3RyYWN0IHRpbWVyOiBudW1iZXI7IFxyXG4gICAgcmVhZG9ubHkgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQ7XHJcbiAgICBhYnN0cmFjdCBDaGFuZ2VBY3RpdmUoKTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBTZXRUaW1lcigpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IE9uRW5kdGltZXIoKTogdm9pZDtcclxuXHJcbiAgICBzdGF0aWMgQ2hhbmdlQWxsQWN0aXZhYmxlVHJhcFN0YXR1cygpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIEJvYXJkLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHRcdFx0XHJcbiAgICAgICAgICAgIGlmKGNhcmQuY2FyZFR5cGUgPT0gY2FyZFR5cGUudHJhcClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoKGNhcmQgYXMgVHJhcCkuaWZBY3RpdmFibGUpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKGNhcmQgYXMgVHJhcCkuQ2hhbmdlQWN0aXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHRcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RW5lbXl9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQge2VuZW15VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgV2VyZXdvbGYgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIldlcmV3b2xmXCI7IFxyXG4gICAgZW5lbXlUeXBlOiBlbmVteVR5cGUgPSBlbmVteVR5cGUud2VyZXdvbGY7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy93ZXJld29sZi5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSAyNTsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyAgICAgICBcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgICAgXHJcbiAgICAgICAgdGhpcy5kcm9wPVwiUnVieVwiO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtFbmVteX0gZnJvbSAnLi9lbmVteSc7XHJcbmltcG9ydCB7ZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBab21iaWUgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlpvbWJpZVwiOyBcclxuICAgIGVuZW15VHlwZTogZW5lbXlUeXBlID0gZW5lbXlUeXBlLnpvbWJpZTtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3pvbWJpZS5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSAzOyAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7ICAgICAgIFxyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgICBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=