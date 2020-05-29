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
            throw new Error("Method not implemented.");
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
                throw new Error("Method not implemented.");
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
                throw new Error("Method not implemented.");
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
    SwapCard() {
        throw new Error("Method not implemented.");
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
    OnHeroMoveOn() {
    }
    IfHeroMoveOnContact(hero) {
        board_1.Board.AddCard(this.cardPleaceId, this.itemPool);
        return false;
    }
    OpenChest() {
        throw new Error("Method not implemented.");
    }
    RandomItem() {
        throw new Error("Method not implemented.");
    }
    CreateItem() {
        throw new Error("Method not implemented.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2dhbWUuc2Nzcz9iMzZkIiwid2VicGFjazovLy8uL3NyYy90cy9iYWRDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYmlnSGVhbFBvdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmRUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGFvc0NoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29pbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZGFnZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9kb29tUG90aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ29vZENoZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9oZWFsUG90aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9oZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9rbmlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2xpZ2h0U3dvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21lZ2FLbmlnaHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21vbmV5LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9vcmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3BvdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcmlza1BvdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvcnVieS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2tlbGV0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NwaWtlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zdGFmZi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc3dvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3RyYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3dlcmV3b2xmLnRzIiwid2VicGFjazovLy8uL3NyYy90cy96b21iaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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LENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3hVLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDcFYsSUFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FB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QixZQUFZLFlBQW1CO1FBRTNCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQVB4QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGNBQVMsR0FBYyxvQkFBUyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxjQUFTLEdBQVcsMEJBQTBCLENBQUM7UUFDL0MsT0FBRSxHQUFXLENBQUMsQ0FBQztRQUtYLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBWEQsd0JBV0MiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2dhbWUudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7IH1cXG5cXG5hOmxpbmsge1xcbiAgY29sb3I6IHJlZDsgfVxcblxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogcmVkOyB9XFxuXFxuYTpob3ZlciB7XFxuICBjb2xvcjogaG90cGluazsgfVxcblxcbmE6YWN0aXZlIHtcXG4gIGNvbG9yOiBncmVlbjsgfVxcblxcbi53cmFwcGVyIHtcXG4gIGZvbnQ6IDEwMCUgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBibHVlO1xcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcXG4gIG1heC13aWR0aDogMTAyNHB4OyB9XFxuXFxuLmNhcmQge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbjogMTBweCAxZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XFxuICBmbGV4OiAwIDEgMjAlOyB9XFxuXFxuLmNhcmRUb3Age1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNhcmRCb3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNhcmRNaWRkbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5jYXJkTmFtZSB7XFxuICBiYWNrZ3JvdW5kOiBza3libHVlO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxcblxcbmltZyB7XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4uZ2FtZUJvYXJkIHtcXG4gIHdpZHRoOiA5NDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Q2hlc3R9IGZyb20gJy4vY2hlc3QnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBjaGVzdFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBCYWRDaGVzdCBleHRlbmRzIENoZXN0IHtcclxuICAgIGNoZXN0VHlwZTogY2hlc3RUeXBlLmJhZENoZXN0O1xyXG4gICAgaXRlbVBvb2w6IHN0cmluZ1tdID0gW1wiWm9tYmllXCIsXCJTa2VsZXRvblwiLFwiRG9vbVBvdGlvblwiLFwiUmlza1BvdGlvblwiLFwiT3JrXCJdO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvYmFkQ2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkRhcmsgQ2hlc3RcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge1BvdGlvbn0gZnJvbSAnLi9wb3Rpb24nO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBwb3Rpb25UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgQmlnSGVhbFBvdGlvbiBleHRlbmRzIFBvdGlvbntcclxuICAgIHBvdGlvblR5cGU6IHBvdGlvblR5cGUgPSBwb3Rpb25UeXBlLmJpZ0hlYWw7XHJcbiAgICBIUDogbnVtYmVyID0gODtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2JpZ0hlYWxQb3Rpb24ucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkJpZyBIZWFsIFBvdGlvblwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cclxuXHRcclxufSIsImltcG9ydCB7c3RvcmFnZUhlcm9OYW1lLHN0b3JhZ2VTY29yZU5hbWUsc3RvcmFnZUJvYXJkTmFtZSxIZXJvS25pZ2h0TmFtZSxIZXJvTWVnYUtuaWdodE5hbWV9IGZyb20gJy4vZ2xvYmFscyc7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQge1pvbWJpZX0gZnJvbSAnLi96b21iaWUnO1xyXG5pbXBvcnQge1N3b3JkfSBmcm9tICcuL3N3b3JkJztcclxuaW1wb3J0IHtTdGFmZn0gZnJvbSAnLi9zdGFmZic7XHJcbmltcG9ydCB7UnVieX0gZnJvbSAnLi9ydWJ5JztcclxuaW1wb3J0IHtTa2VsZXRvbn0gZnJvbSAnLi9za2VsZXRvbic7XHJcbmltcG9ydCB7R29vZENoZXN0fSBmcm9tICcuL2dvb2RDaGVzdCc7XHJcbmltcG9ydCB7Q29pbn0gZnJvbSAnLi9jb2luJztcclxuaW1wb3J0IHtUcmFwfSBmcm9tICcuL3RyYXAnO1xyXG5pbXBvcnQge0tuaWdodH0gZnJvbSAnLi9rbmlnaHQnO1xyXG5pbXBvcnQge01lZ2FLbmlnaHR9IGZyb20gJy4vbWVnYUtuaWdodCc7XHJcbmltcG9ydCB7QmFkQ2hlc3R9IGZyb20gJy4vYmFkQ2hlc3QnO1xyXG5pbXBvcnQge0hlYWxQb3Rpb259IGZyb20gJy4vaGVhbFBvdGlvbic7XHJcbmltcG9ydCB7QmlnSGVhbFBvdGlvbn0gZnJvbSAnLi9iaWdIZWFsUG90aW9uJztcclxuaW1wb3J0IHtSaXNrUG90aW9ufSBmcm9tICcuL3Jpc2tQb3Rpb24nO1xyXG5pbXBvcnQge0Rvb21Qb3Rpb259IGZyb20gJy4vZG9vbVBvdGlvbic7XHJcbmltcG9ydCB7U3Bpa2V9IGZyb20gJy4vc3Bpa2UnO1xyXG5pbXBvcnQge0NoYW9zQ2hlc3R9IGZyb20gJy4vY2hhb3NDaGVzdCc7XHJcbmltcG9ydCB7RGFnZ2VyfSBmcm9tICcuL2RhZ2dlcic7XHJcbmltcG9ydCB7TGlnaHRTd29yZH0gZnJvbSAnLi9saWdodFN3b3JkJztcclxuaW1wb3J0IHtPcmt9IGZyb20gJy4vb3JrJztcclxuaW1wb3J0IHtXZXJld29sZn0gZnJvbSAnLi93ZXJld29sZic7XHJcbmltcG9ydCB7YWxsUGxheWFibGVDYXJkcywgY2FyZFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuXHRcclxuXHRzdGF0aWMgY2FyZHM6IENhcmRbXSA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcclxuXHRzdGF0aWMgc2NvcmU6IG51bWJlciA9IDA7XHJcblx0c3RhdGljIHNvdW5kdHJhY2sgOiBIVE1MQXVkaW9FbGVtZW50O1xyXG5cdHN0YXRpYyBzb3VuZHRyYWNrQWN0aXZlOmJvb2xlYW49ZmFsc2U7XHJcblx0aGVyb1Bvc2l0aW9uOm51bWJlciA9IDQ7XHJcblx0aGVybzogSGVybztcclxuXHRcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcdFx0XHJcblx0XHR0aGlzLkNyZWF0ZUJvYXJkKCk7XHRcdFxyXG5cdFx0dGhpcy5Mb2FkU291bmR0cmFjaygpO1xyXG5cdH1cclxuXHJcblx0TG9hZFNvdW5kdHJhY2soKSA6IHZvaWRcclxuXHR7XHJcblx0XHRCb2FyZC5zb3VuZHRyYWNrID0gbmV3IEF1ZGlvKCk7XHJcblx0XHRCb2FyZC5zb3VuZHRyYWNrLnNyYyA9IFwiLi9hdWRpby9tYWluVGhlbWUubXAzXCI7XHJcblx0XHRCb2FyZC5zb3VuZHRyYWNrLmxvYWQoKTtcdFx0XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNoYW5nZVNvdW5kdHJhY2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Qm9hcmQuQ2hhbmdlU291bmR0cmFjaygpOzt9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBDaGFuZ2VTb3VuZHRyYWNrKCkgOiB2b2lkXHJcblx0e1xyXG5cdFx0aWYoQm9hcmQuc291bmR0cmFja0FjdGl2ZSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zb3VuZHRyYWNrLnBhdXNlKCk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ2hhbmdlU291bmR0cmFja1wiKS5pbm5lclRleHQ9XCJQbGF5IFNvdW5kdHJhY2tcIjtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5zb3VuZHRyYWNrLnBsYXkoKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJDaGFuZ2VTb3VuZHRyYWNrXCIpLmlubmVyVGV4dD1cIlBhdXNlIFNvdW5kdHJhY2tcIjtcclxuXHRcdH1cclxuXHRcdEJvYXJkLnNvdW5kdHJhY2tBY3RpdmU9IUJvYXJkLnNvdW5kdHJhY2tBY3RpdmU7XHJcblx0fVxyXG5cdFx0XHJcblxyXG5cdENyZWF0ZUJvYXJkKCkgOiB2b2lkXHJcblx0e1x0XHRcclxuXHRcdGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VIZXJvTmFtZSkgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUhlcm9OYW1lLCBIZXJvS25pZ2h0TmFtZSk7XHJcblx0XHRmb3IobGV0IGk6bnVtYmVyID0gMDsgaSA8IDk7IGkrKylcclxuXHRcdHtcclxuXHRcdFx0aWYoaT09dGhpcy5oZXJvUG9zaXRpb24pIEJvYXJkLlNlbGVjdEhlcm8oaSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdEJvYXJkLkFkZENhcmQoaSxhbGxQbGF5YWJsZUNhcmRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZVNjb3JlTmFtZSkgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZVNjb3JlTmFtZSwgJzAnKTtcclxuXHRcdEJvYXJkLlNldFNjb3JlKHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VTY29yZU5hbWUpKSk7XHJcblx0XHQvL2FsZXJ0KGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VCb2FyZE5hbWUpKTtcclxuXHRcdC8vaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUJvYXJkTmFtZSkgIT0gbnVsbCkgQm9hcmQuY2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VCb2FyZE5hbWUpKVxyXG5cdH1cclxuXHJcblx0c3RhdGljIENyZWF0ZUluc3RhbmNlPFQgZXh0ZW5kcyBDYXJkPihjOiBuZXcgKGNhcmRQbGVhY2VJZDpudW1iZXIpID0+IFQsIHBsZWFjZUlkOm51bWJlcik6IFQgXHJcblx0e1xyXG4gICAgXHRyZXR1cm4gbmV3IGMocGxlYWNlSWQpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIEFkZENhcmQoY2FyZFBsZWFjZUlkOm51bWJlciwgY2FyZFBvb2w6IHN0cmluZ1tdKSA6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCByYW5kb21FbGVtZW50OiBzdHJpbmcgID0gY2FyZFBvb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2FyZFBvb2wubGVuZ3RoKV07XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0c3dpdGNoIChyYW5kb21FbGVtZW50KSBcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBcIlpvbWJpZVwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShab21iaWUsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlN3b3JkXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKFN3b3JkLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJTdGFmZlwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShTdGFmZixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiU2tlbGV0b25cIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoU2tlbGV0b24sY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIkdvb2RDaGVzdFwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShHb29kQ2hlc3QsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIkJhZENoZXN0XCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKEJhZENoZXN0LGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRjYXNlIFwiQ29pblwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShDb2luLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJSdWJ5XCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKFJ1YnksY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRjYXNlIFwiSGVhbFBvdGlvblwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShIZWFsUG90aW9uLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0Y2FzZSBcIkJpZ0hlYWxQb3Rpb25cIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoQmlnSGVhbFBvdGlvbixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1x0XHJcblx0XHRcdGNhc2UgXCJEb29tUG90aW9uXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKERvb21Qb3Rpb24sY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRjYXNlIFwiUmlza1BvdGlvblwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShSaXNrUG90aW9uLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRjYXNlIFwiU3Bpa2VcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoU3Bpa2UsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRjYXNlIFwiQ2hhb3NDaGVzdFwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShDaGFvc0NoZXN0LGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJXZXJld29sZlwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShXZXJld29sZixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiT3JrXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKE9yayxjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiRGFnZ2VyXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKERhZ2dlcixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiTGlnaHRTd29yZFwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShMaWdodFN3b3JkLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0fVx0XHRcdFxyXG5cdH1cclxuXHJcblx0c3RhdGljIFNlbGVjdEhlcm8oaGVyb1BsYWNlIDogbnVtYmVyKSA6IHZvaWRcclxuXHR7XHJcblx0XHRzd2l0Y2ggKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHN0b3JhZ2VIZXJvTmFtZSkpIFxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIEhlcm9LbmlnaHROYW1lOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2hlcm9QbGFjZV0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShLbmlnaHQsaGVyb1BsYWNlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBIZXJvTWVnYUtuaWdodE5hbWU6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbaGVyb1BsYWNlXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKE1lZ2FLbmlnaHQsaGVyb1BsYWNlKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHJcblx0c3RhdGljIFNldFNjb3JlKGFkZFRvU2NvcmU6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRCb2FyZC5zY29yZSs9YWRkVG9TY29yZTtcclxuXHRcdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKSBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJIVE1MID0gKFwiPGgxPkdvbGQ6IFwiKyBCb2FyZC5zY29yZS50b1N0cmluZygpICtcIjwvaDE+XCIpO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZVNjb3JlTmFtZSwgQm9hcmQuc2NvcmUudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cclxuXHRDYXJkQ2xpY2soaWRDYXJkOm51bWJlcikgOiB2b2lkIFxyXG5cdHtcclxuXHRcdGlmKHRoaXMuSWZIZXJvSXNOZWlnaGJvdXIoaWRDYXJkKSlcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5oZXJvID0gQm9hcmQuY2FyZHNbdGhpcy5oZXJvUG9zaXRpb25dIGFzIHVua25vd24gYXMgSGVybztcclxuXHRcdFx0Qm9hcmQuY2FyZHNbaWRDYXJkXS5Pbkhlcm9Nb3ZlT24odGhpcy5oZXJvKTtcclxuXHRcdFx0aWYoQm9hcmQuY2FyZHNbdGhpcy5oZXJvUG9zaXRpb25dLkhQPD0wKXRoaXMuRW5kR2FtZSgpO1xyXG5cdFx0XHRlbHNlIGlmKEJvYXJkLmNhcmRzW2lkQ2FyZF0uSWZIZXJvTW92ZU9uQ29udGFjdCh0aGlzLmhlcm8pKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5TdGFydE1vbmV5Q2hhaW5DaGVja2luZ1N5c3RlbSgpO1xyXG5cdFx0XHRcdHRoaXMuTW92ZUhlcm9JbkJvYXJkKGlkQ2FyZCk7XHRcclxuXHRcdFx0XHR0aGlzLlN0YXJ0VHJhcHNBY3RpdmF0aW9uKCk7XHJcblx0XHRcdFx0dGhpcy5TdGFydE1vbmV5Q2hhaW5DaGVja2luZ1N5c3RlbSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VCb2FyZE5hbWUsIEpTT04uc3RyaW5naWZ5KEJvYXJkLmNhcmRzKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRTdGFydE1vbmV5Q2hhaW5DaGVja2luZ1N5c3RlbSgpIDogdm9pZFxyXG5cdHtcclxuXHRcdGlmKEJvYXJkLklmQ2FyZE9uQm9hcmQoXCJDb2luXCIpKVxyXG5cdFx0e1xyXG5cdFx0XHRsZXQgbW9uZXlBcnI6bnVtYmVyW10gPSBDb2luLklmTW9uZXlDaGFpbigpO1xyXG5cdFx0XHRpZihtb25leUFyclsyXSE9bnVsbClDb2luLk1vbmV5Q2hhaW4obW9uZXlBcnIpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0U3RhcnRUcmFwc0FjdGl2YXRpb24oKSA6IHZvaWRcclxuXHR7XHJcblx0XHRpZihCb2FyZC5JZlR5cGVPbkJvYXJkKGNhcmRUeXBlLnRyYXApKVxyXG5cdFx0e1xyXG5cdFx0XHRUcmFwLkNoYW5nZUFsbEFjdGl2YWJsZVRyYXBTdGF0dXMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBJZkNhcmRPbkJvYXJkKGNhcmROYW1lOiBzdHJpbmcpIDogYm9vbGVhblxyXG5cdHtcclxuXHRcdGxldCBmbGFnOmJvb2xlYW49ZmFsc2U7XHJcblx0XHRCb2FyZC5jYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1x0XHRcdFxyXG5cdFx0XHRpZihjYXJkLm5hbWUgPT0gY2FyZE5hbWUpe2ZsYWc9dHJ1ZTt9XHJcblx0XHR9KTtcclxuXHRcdGlmKGZsYWcpcmV0dXJuIHRydWU7XHJcblx0XHRlbHNlIHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBJZlR5cGVPbkJvYXJkKGNhcmRUeXBlOiBjYXJkVHlwZSkgOiBib29sZWFuXHJcblx0e1xyXG5cdFx0bGV0IGZsYWc6Ym9vbGVhbj1mYWxzZTtcclxuXHRcdEJvYXJkLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XHRcdFx0XHJcblx0XHRcdGlmKGNhcmQuY2FyZFR5cGUgPT0gY2FyZFR5cGUpe2ZsYWc9dHJ1ZTt9XHJcblx0XHR9KTtcclxuXHRcdGlmKGZsYWcpcmV0dXJuIHRydWU7XHJcblx0XHRlbHNlIHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdElmSGVyb0lzTmVpZ2hib3VyKGlkQ2FyZDpudW1iZXIpIDogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiAtIDEgPT0gaWRDYXJkIHx8IHRoaXMuaGVyb1Bvc2l0aW9uICsgMSA9PSBpZENhcmQpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gMyB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDUpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uIC0gMyA9PSBpZENhcmQgfHwgdGhpcy5oZXJvUG9zaXRpb24gKyAzID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAwIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDMgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNilcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gKyAxID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDUgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gOClcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gLSAxID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAwIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gKyAzID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDcgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gOClcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gLSAzID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRNb3ZlQ2FyZEluQm9hcmQoY2FyZElkVG9Nb3ZlOm51bWJlciwgZGVzdGluYXRpb25JZDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHRCb2FyZC5jYXJkc1tjYXJkSWRUb01vdmVdLk1vdmVDYXJkKGRlc3RpbmF0aW9uSWQpO1xyXG5cdFx0Qm9hcmQuY2FyZHNbZGVzdGluYXRpb25JZF09Qm9hcmQuY2FyZHNbY2FyZElkVG9Nb3ZlXTtcdFx0XHJcblx0fVxyXG5cclxuXHRNb3ZlSGVyb0luQm9hcmQoZGVzdGluYXRpb246bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0aWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgJiYgZGVzdGluYXRpb24gPT0gMil8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAxICYmIGRlc3RpbmF0aW9uID09IDApfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNCAmJiBkZXN0aW5hdGlvbiA9PSA1KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgJiYgZGVzdGluYXRpb24gPT0gMyl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3ICYmIGRlc3RpbmF0aW9uID09IDgpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNyAmJiBkZXN0aW5hdGlvbiA9PSA2KSl0aGlzLk1vdmVDYXJkUGF1c2VTaWduKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbik7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzICYmIGRlc3RpbmF0aW9uID09IDYpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gMyAmJiBkZXN0aW5hdGlvbiA9PSAwKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgJiYgZGVzdGluYXRpb24gPT0gMSl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0ICYmIGRlc3RpbmF0aW9uID09IDcpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNSAmJiBkZXN0aW5hdGlvbiA9PSAyKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDUgJiYgZGVzdGluYXRpb24gPT0gOCkpdGhpcy5Nb3ZlQ2FyZFJldmVyc2VQYXVzZVNpZ24odGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgJiYgZGVzdGluYXRpb24gPT0gNCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3ICYmIGRlc3RpbmF0aW9uID09IDQpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gMyAmJiBkZXN0aW5hdGlvbiA9PSA0KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDUgJiYgZGVzdGluYXRpb24gPT0gNCkpdGhpcy5Nb3ZlQ2FyZFNtYWxsTCh0aGlzLmhlcm9Qb3NpdGlvbik7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAwICYmIGRlc3RpbmF0aW9uID09IDEpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gMiAmJiBkZXN0aW5hdGlvbiA9PSAxKSl0aGlzLk1vdmVDYXJkQmlnTCh0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24sIDEpO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gNiAmJiBkZXN0aW5hdGlvbiA9PSA3KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDggJiYgZGVzdGluYXRpb24gPT0gNykpdGhpcy5Nb3ZlQ2FyZEJpZ0wodGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uLCAyKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgJiYgZGVzdGluYXRpb24gPT0gMyl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2ICYmIGRlc3RpbmF0aW9uID09IDMpKXRoaXMuTW92ZUNhcmRCaWdMKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgMyk7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyICYmIGRlc3RpbmF0aW9uID09IDUpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gOCAmJiBkZXN0aW5hdGlvbiA9PSA1KSl0aGlzLk1vdmVDYXJkQmlnTCh0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24sIDQpO1xyXG5cdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcdFx0XHJcblxyXG4gICAgICAgIHRoaXMuaGVyb1Bvc2l0aW9uPWRlc3RpbmF0aW9uO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRCaWdMKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbklkOm51bWJlciwgc3dpdGNoTW9kZSA6IG51bWJlcikgOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbklkKTtcclxuICAgICAgICBsZXQgc3dpdGNoZXI6IG51bWJlcjtcclxuXHRcdHN3aXRjaCAoc3dpdGNoTW9kZSkgXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRzd2l0Y2hlcj0zO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0c3dpdGNoZXI9LTM7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHN3aXRjaGVyPTE7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdHN3aXRjaGVyPS0xO1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZStzd2l0Y2hlcixjYXJkVG9Nb3ZlKTtcdFxyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZStzd2l0Y2hlcitzd2l0Y2hlcixjYXJkVG9Nb3ZlK3N3aXRjaGVyKTtcdFxyXG5cdFx0Qm9hcmQuQWRkQ2FyZChjYXJkVG9Nb3ZlK3N3aXRjaGVyK3N3aXRjaGVyLGFsbFBsYXlhYmxlQ2FyZHMpO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRTbWFsbEwoY2FyZFRvTW92ZTpudW1iZXIsIGRlc3RpbmF0aW9uSWQ6bnVtYmVyID0gNCkgOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHNjZWNvbmRDYXJkOiBudW1iZXI7XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlLGRlc3RpbmF0aW9uSWQpO1xyXG5cdFx0c3dpdGNoIChjYXJkVG9Nb3ZlKSBcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHNjZWNvbmRDYXJkID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHNjZWNvbmRDYXJkID0gNjtcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDU6XHJcblx0XHRcdFx0c2NlY29uZENhcmQgPSAyO1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNzpcclxuXHRcdFx0XHRzY2Vjb25kQ2FyZCA9IDg7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0XHR9XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChzY2Vjb25kQ2FyZCxjYXJkVG9Nb3ZlKTtcclxuXHRcdEJvYXJkLkFkZENhcmQoc2NlY29uZENhcmQsYWxsUGxheWFibGVDYXJkcyk7XHJcblx0fVx0XHJcblxyXG5cdE1vdmVDYXJkUmV2ZXJzZVBhdXNlU2lnbihjYXJkVG9Nb3ZlOm51bWJlciwgZGVzdGluYXRpb246bnVtYmVyKSA6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbik7XHJcblx0XHRpZigoY2FyZFRvTW92ZSAtIGRlc3RpbmF0aW9uKSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUgKyAzLGNhcmRUb01vdmUpO1xyXG5cdFx0XHRjYXJkVG9Nb3ZlID0gY2FyZFRvTW92ZSArIDM7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKChjYXJkVG9Nb3ZlIC0gZGVzdGluYXRpb24pIDwgMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSAtIDMsY2FyZFRvTW92ZSk7XHJcblx0XHRcdGNhcmRUb01vdmUgPSBjYXJkVG9Nb3ZlIC0gMztcclxuXHRcdH1cclxuXHRcdEJvYXJkLkFkZENhcmQoY2FyZFRvTW92ZSxhbGxQbGF5YWJsZUNhcmRzKTtcclxuXHR9XHJcblxyXG5cdE1vdmVDYXJkUGF1c2VTaWduKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbjpudW1iZXIpIDogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUsZGVzdGluYXRpb24pO1xyXG5cdFx0aWYoKGNhcmRUb01vdmUgLSBkZXN0aW5hdGlvbikgPiAwKXRoaXMuTW92ZUNhcmRJbkJvYXJkKCsrY2FyZFRvTW92ZSxjYXJkVG9Nb3ZlIC0gMSk7XHJcblx0XHRlbHNlIGlmKChjYXJkVG9Nb3ZlIC0gZGVzdGluYXRpb24pIDwgMCl0aGlzLk1vdmVDYXJkSW5Cb2FyZCgtLWNhcmRUb01vdmUsY2FyZFRvTW92ZSArIDEpO1xyXG5cdFx0Qm9hcmQuQWRkQ2FyZChjYXJkVG9Nb3ZlLGFsbFBsYXlhYmxlQ2FyZHMpO1xyXG5cdH1cclxuXHJcblx0U2VsbEl0ZW0oKSA6IHZvaWRcclxuXHR7XHJcblx0XHRCb2FyZC5TZXRTY29yZSh0aGlzLmhlcm8uaG9sZEl0ZW1WYWx1ZSk7XHJcblx0XHRCb2FyZC5TZXRJdGVtVmFsdWUoMCk7XHRcdFxyXG5cdFx0dGhpcy5oZXJvLlNlbGxJdGVtKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgU2V0SXRlbVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkXHJcblx0e1xyXG5cdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpdGVtVmFsdWUnKSBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJIVE1MID0gKFwiPGgxPkhvbGQgaXRlbSB2YWx1ZTogXCIrIHZhbHVlLnRvU3RyaW5nKCkgK1wiPC9oMT5cIik7XHJcblx0fVxyXG5cclxuXHRFbmRHYW1lKCkgOiB2b2lkXHJcblx0e1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImluZGV4Lmh0bWxcIjtcclxuXHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VCb2FyZE5hbWUpO1xyXG5cdH1cclxufSIsImltcG9ydCB7Y2FyZFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDYXJkIHtcclxuICAgIGFic3RyYWN0IGNhcmRUeXBlIDogY2FyZFR5cGU7XHJcbiAgICBhYnN0cmFjdCBhdmF0YXJVUkwgOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBIUCA6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IG5hbWU6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGl0ZW1UaW1lcjogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgaXRlbVZhbHVlOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBob2xkSXRlbTogbnVtYmVyO1xyXG4gICAgY2FyZFBsZWFjZUlkIDogbnVtYmVyO1xyXG4gXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkUGxlYWNlSWQgPSBjYXJkUGxlYWNlSWQ7ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgSW5pdGlhbGl6ZShvYmo6Q2FyZCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5EcmF3SXRlbVRpbWVyKG9iai5pdGVtVGltZXIpO1xyXG4gICAgICAgIHRoaXMuRHJhd0hQKG9iai5IUCk7XHJcbiAgICAgICAgdGhpcy5EcmF3QXZhdGFyKG9iai5hdmF0YXJVUkwpO1xyXG4gICAgICAgIHRoaXMuRHJhd0hvbGRJdGVtKG9iai5ob2xkSXRlbSk7XHJcbiAgICAgICAgdGhpcy5EcmF3TmFtZShvYmoubmFtZSk7XHJcbiAgICAgICAgdGhpcy5EcmF3SXRlbVZhbHVlKG9iai5pdGVtVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIE1vdmVDYXJkKGRlc3RpbmF0aW9uOiBudW1iZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2FyZFBsZWFjZUlkID0gZGVzdGluYXRpb247XHJcbiAgICAgICAgdGhpcy5Jbml0aWFsaXplKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIFN3YXBDYXJkKCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgYWJzdHJhY3QgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuO1xyXG5cclxuICAgIGFic3RyYWN0IE9uSGVyb01vdmVPbihoZXJvIDogSGVybykgOiB2b2lkOyBcclxuXHJcbiAgICBEcmF3QXZhdGFyKHNyYyA6IHN0cmluZyA9IG51bGwpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXZhdGFySU1HXCIgKyB0aGlzLmNhcmRQbGVhY2VJZC50b1N0cmluZygpKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgICAgIGlmKHNyYyE9bnVsbClhdmF0YXIuc3JjID0gc3JjOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgRHJhd05hbWUodmFsdWU6c3RyaW5nID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgdGFyZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkXCIgKyB0aGlzLmNhcmRQbGVhY2VJZC50b1N0cmluZygpKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZEJvdHRvbVwiKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyZE5hbWVcIilbMF07XHJcbiAgICAgICAgaWYodmFsdWUhPW51bGwpdGFyZ2V0RGl2LmlubmVySFRNTCA9IHZhbHVlOyAgXHJcbiAgICB9XHJcblxyXG4gICAgRHJhd0hQKHZhbHVlOm51bWJlciA9IG51bGwpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuRHJhd051bWJlckluQ2xhc3MoXCJjYXJkVG9wXCIsIFwibGlmZVwiLCB2YWx1ZSk7ICAgICAgICAgICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiAgICBEcmF3SXRlbVRpbWVyKHZhbHVlOm51bWJlciA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRUb3BcIiwgXCJpdGVtVGltZXJcIiwgdmFsdWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3SXRlbVZhbHVlKHZhbHVlOm51bWJlciA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRCb3R0b21cIiwgXCJpdGVtVmFsdWVcIiwgdmFsdWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3SG9sZEl0ZW0odmFsdWU6bnVtYmVyID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuXHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRCb3R0b21cIiwgXCJob2xkSXRlbVwiLCB2YWx1ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdOdW1iZXJJbkNsYXNzKGNsYXNzQ1NTOnN0cmluZywgY2hpbGRDbGFzc0NTUzpzdHJpbmcsIHZhbHVlOm51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRhcmdldERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZFwiICsgdGhpcy5jYXJkUGxlYWNlSWQudG9TdHJpbmcoKSkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc0NTUylbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjaGlsZENsYXNzQ1NTKVswXTtcclxuICAgICAgICBpZih2YWx1ZSE9bnVsbCl0YXJnZXREaXYuaW5uZXJIVE1MID0gKHZhbHVlKS50b1N0cmluZygpOyBcclxuICAgICAgICBlbHNlIHRhcmdldERpdi5pbm5lckhUTUwgPSBcIiBcIjtcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIGNhcmRUeXBlIHtcclxuICBoZXJvLFxyXG4gIGVuZW15LFxyXG4gIGl0ZW0sXHJcbiAgdHJhcCxcclxuICBjaGVzdCxcclxuICBtb25leSxcclxuICBwb3Rpb25cclxufVxyXG5cclxuZXhwb3J0IGVudW0gZW5lbXlUeXBlIHtcclxuICB6b21iaWUsXHJcbiAgc2tlbGV0b24sXHJcbiAgb3JrLFxyXG4gIHdlcmV3b2xmXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGl0ZW1UeXBlIHtcclxuXHRzd29yZCxcclxuXHRzdGFmLFxyXG5cdGRhZ2dlcixcclxuXHRsaWdodFN3b3JkXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHRyYXBUeXBlIHtcclxuXHRzcGlrZVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBjaGVzdFR5cGUge1xyXG5cdGdvb2RDaGVzdCxcclxuXHRiYWRDaGVzdCxcclxuXHRjaGFvc0NoZXN0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIG1vbmV5VHlwZSB7XHJcblx0Y29pbixcclxuXHRydWJ5XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHBvdGlvblR5cGUge1xyXG5cdGhlYWwsXHJcblx0YmlnSGVhbCxcclxuXHRkb29tLFxyXG5cdHJpc2tcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFsbFBsYXlhYmxlQ2FyZHMgOiBzdHJpbmdbXSA9IFsnWm9tYmllJywgJ1NrZWxldG9uJywgJ1N0YWZmJywgJ1N3b3JkJywgJ0dvb2RDaGVzdCcsICdCYWRDaGVzdCcsJ0hlYWxQb3Rpb24nLCdEb29tUG90aW9uJywnU3Bpa2UnLCdDaGFvc0NoZXN0JywnT3JrJywnRGFnZ2VyJ107IFxyXG5cclxuIiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0NoZXN0fSBmcm9tICcuL2NoZXN0JztcclxuaW1wb3J0IHtjYXJkVHlwZSwgY2hlc3RUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgQ2hhb3NDaGVzdCBleHRlbmRzIENoZXN0IHtcclxuICAgIGNoZXN0VHlwZTogY2hlc3RUeXBlLmNoYW9zQ2hlc3Q7XHJcbiAgICBpdGVtUG9vbDogc3RyaW5nW10gPSBbXCJXZXJld29sZlwiLFwiTGlnaHRTd29yZFwiLFwiUmlza1BvdGlvblwiXTtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2NoYW9zQ2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNoYW9zIENoZXN0XCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgY2hlc3RUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2hlc3QgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZT0gY2FyZFR5cGUuY2hlc3Q7XHJcbiAgICBIUDpudW1iZXIgPSBudWxsO1xyXG4gICAgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcbiAgICBhYnN0cmFjdCBjaGVzdFR5cGU6IGNoZXN0VHlwZTtcclxuICAgIGFic3RyYWN0IGl0ZW1Qb29sOiBzdHJpbmdbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7IFxyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbigpOiB2b2lkIFxyXG4gICAge1xyXG5cclxuICAgIH1cdFxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICBCb2FyZC5BZGRDYXJkKHRoaXMuY2FyZFBsZWFjZUlkLHRoaXMuaXRlbVBvb2wpO1x0XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBPcGVuQ2hlc3QoKVxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFJhbmRvbUl0ZW0oKVxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIENyZWF0ZUl0ZW0oKVxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgIFxyXG59IiwiaW1wb3J0IHtNb25leX0gZnJvbSAnLi9tb25leSc7XHJcbmltcG9ydCB7bW9uZXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2luIGV4dGVuZHMgTW9uZXkge1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSA1O1xyXG4gICAgbW9uZXlUeXBlOiBtb25leVR5cGUuY29pbjsgXHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9jb2luLnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJDb2luXCI7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVx0XHJcblxyXG4gICAgc3RhdGljIElmTW9uZXlDaGFpbigpIDogbnVtYmVyW11cclxuICAgIHsgICAgICAgIFxyXG4gICAgICAgIGxldCBvdXQ6bnVtYmVyW10gPSBbbnVsbCxudWxsLG51bGxdO1xyXG4gICAgICAgIGZvcihsZXQgaSA6IG51bWJlciA9IDA7IGkgPD0gMjsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogOiBudW1iZXIgPSBpOyBqIDw9IGkrNjsgais9MylcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKEJvYXJkLmNhcmRzW2pdLm5hbWUgPT0gXCJDb2luXCIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0W2NvdW50ZXIrK10gPSBqO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvdXRbMl0hPW51bGwpcmV0dXJuIG91dDtcclxuICAgICAgICBmb3IobGV0IGkgOiBudW1iZXIgPSAwOyBpIDw9IDY7IGkrPTMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA6IG51bWJlciA9IGk7IGogPD0gaSsyOyBqKyspXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihCb2FyZC5jYXJkc1tqXS5uYW1lID09IFwiQ29pblwiKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dFtjb3VudGVyKytdID0gajsgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIE1vbmV5Q2hhaW4obW9uZXlBcnI6bnVtYmVyW10pIDogdm9pZFxyXG4gICAgeyAgICAgICAgXHJcbiAgICAgICAgZm9yKGxldCBpIDogbnVtYmVyID0gMDsgaSA8IG1vbmV5QXJyLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQm9hcmQuQWRkQ2FyZChtb25leUFycltpXSxbXCJSdWJ5XCJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoQm9hcmQuSWZDYXJkT25Cb2FyZChuYW1lKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBuZXdNb25leUFycjpudW1iZXJbXSA9IENvaW4uSWZNb25leUNoYWluKCk7XHJcblx0XHQgICAgaWYobmV3TW9uZXlBcnJbMl0hPW51bGwpQ29pbi5Nb25leUNoYWluKG5ld01vbmV5QXJyKTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtJdGVtfSBmcm9tICcuL2l0ZW0nO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBpdGVtVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgIGNsYXNzIERhZ2dlciBleHRlbmRzIEl0ZW17XHJcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUuZGFnZ2VyO1xyXG4gICAgbW9uZXRhcnlWYWx1ZTogbnVtYmVyID0gMjtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2RhZ2dlci5wbmdcIjtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gMztcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiRGFnZ2VyXCI7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVxyXG5cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge1BvdGlvbn0gZnJvbSAnLi9wb3Rpb24nO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBwb3Rpb25UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgRG9vbVBvdGlvbiBleHRlbmRzIFBvdGlvbntcclxuICAgIHBvdGlvblR5cGU6IHBvdGlvblR5cGUgPSBwb3Rpb25UeXBlLmRvb207XHJcbiAgICBIUDogbnVtYmVyID0gLTQ7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9kb29tUG90aW9uLnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJQb3Rpb24gT2YgRG9vbVwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cclxuXHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLmVuZW15O1xyXG4gICAgYWJzdHJhY3QgZW5lbXlUeXBlOiBlbmVteVR5cGU7XHJcbiAgICBhYnN0cmFjdCBIUDogbnVtYmVyO1xyXG4gICAgZHJvcDogc3RyaW5nID0gXCJDb2luXCI7XHJcbiAgICBpdGVtVGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBob2xkSXRlbTogbnVtYmVyID0gbnVsbDtcclxuICAgIGlmRGVhZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiB2b2lkIFxyXG4gICAge1xyXG4gICAgICAgIGhlcm8uRmlnaHQodGhpcyk7IFxyXG4gICAgfVx0XHJcblxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIGlmKGhlcm8uaWZJbkxhc3RQaGFzZUhhdmVJdGVtKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaWZEZWFkKUJvYXJkLkFkZENhcmQodGhpcy5jYXJkUGxlYWNlSWQsW3RoaXMuZHJvcF0pO1x0IFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7ICAgICAgICBcclxuICAgIH0gICAgXHJcbiAgIFxyXG4gICAgVGFrZURhbWFnZSh2YWx1ZSA6ICBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5IUC09dmFsdWU7XHJcbiAgICAgICAgc3VwZXIuRHJhd0hQKHRoaXMuSFApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICcuLi9zY3NzL2dhbWUuc2Nzcyc7XG5pbXBvcnQge0JvYXJkfSBmcm9tICcuL2JvYXJkJztcblxubGV0IGJvYXJkIDogQm9hcmQgPSBuZXcgQm9hcmQoKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkMFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soMCk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljaygxKTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDIpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkM1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soMyk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg0KTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDUpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkNlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNik7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg3KTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDhcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDgpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxsSXRlbVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5TZWxsSXRlbSgpO30pO1xuIiwiZXhwb3J0IGNvbnN0IHN0b3JhZ2VIZXJvTmFtZTpzdHJpbmcgPSAnSGVybyc7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlU2NvcmVOYW1lOnN0cmluZyA9ICdTY29yZSc7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlQm9hcmROYW1lOnN0cmluZyA9ICdCb2FyZCc7XHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlU2hvcE5hbWU6c3RyaW5nID0gJ0hlcm9lc1Nob3AnO1xyXG5leHBvcnQgY29uc3QgSGVyb0tuaWdodE5hbWU6c3RyaW5nID0gJ0tuaWdodCc7XHJcbmV4cG9ydCBjb25zdCBIZXJvTWVnYUtuaWdodE5hbWU6c3RyaW5nID0gJ01lZ2FLbmlnaHQnOyIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR29vZENoZXN0IGV4dGVuZHMgQ2hlc3Qge1xyXG4gICAgY2hlc3RUeXBlOiBjaGVzdFR5cGUuZ29vZENoZXN0O1xyXG4gICAgaXRlbVBvb2w6IHN0cmluZ1tdID0gW1wiQ29pblwiLCBcIlN3b3JkXCIsIFwiU3RhZmZcIiwgXCJSdWJ5XCIsXCJIZWFsUG90aW9uXCIsXCJCaWdIZWFsUG90aW9uXCIsXCJEYWdnZXJcIl07XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9nb29kQ2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNoZXN0XCJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7UG90aW9ufSBmcm9tICcuL3BvdGlvbic7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIHBvdGlvblR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBIZWFsUG90aW9uIGV4dGVuZHMgUG90aW9ue1xyXG4gICAgcG90aW9uVHlwZTogcG90aW9uVHlwZSA9IHBvdGlvblR5cGUuaGVhbDtcclxuICAgIEhQOiBudW1iZXIgPSA0O1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvaGVhbFBvdGlvbi5wbmdcIjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiSGVhbCBQb3Rpb25cIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblx0XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDYXJkIHtcclxuICAgIGFic3RyYWN0IEhQOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBtYXhIUDpudW1iZXI7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZztcclxuICAgIGFic3RyYWN0IGl0ZW1UaW1lcjogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgaXRlbVZhbHVlOiBudW1iZXI7IFxyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUuaGVybztcclxuICAgIGFic3RyYWN0IGhvbGRJdGVtIDogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgaWZIb2xkSXRlbSA6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBob2xkSXRlbVZhbHVlIDogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgaWZJbkxhc3RQaGFzZUhhdmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKGhlcm8gOiBIZXJvKTogdm9pZCB7fVx0XHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4ge3JldHVybiBmYWxzZTt9XHJcblxyXG4gICAgT25JdGVtR2V0KGl0ZW1EdXJhYmlsaXR5OiBudW1iZXIsIGl0ZW1WYWx1ZTogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaWZIb2xkSXRlbSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ob2xkSXRlbSA9IGl0ZW1EdXJhYmlsaXR5O1xyXG4gICAgICAgIHRoaXMuU2V0SXRlbVZhbHVlKGl0ZW1WYWx1ZSk7XHJcbiAgICAgICAgQm9hcmQuU2V0SXRlbVZhbHVlKGl0ZW1WYWx1ZSk7XHJcbiAgICAgICAgc3VwZXIuRHJhd0hvbGRJdGVtKHRoaXMuaG9sZEl0ZW0pO1xyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgRGVhbERhbWFnZVRvTW9uc3RlcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0SXRlbVZhbHVlKHZhbHVlOiBudW1iZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaG9sZEl0ZW1WYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEZpZ2h0KGVuZW15OiBFbmVteSk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZkluTGFzdFBoYXNlSGF2ZUl0ZW0gPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLmlmSG9sZEl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmlmSW5MYXN0UGhhc2VIYXZlSXRlbSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCB0bXA6bnVtYmVyO1xyXG4gICAgICAgICAgICB0bXAgPSB0aGlzLmhvbGRJdGVtIC0gZW5lbXkuSFA7XHJcbiAgICAgICAgICAgIGVuZW15LlRha2VEYW1hZ2UodGhpcy5ob2xkSXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuaG9sZEl0ZW0gPSB0bXA7XHJcbiAgICAgICAgICAgIGlmKGVuZW15LkhQPD0wKWVuZW15LmlmRGVhZD10cnVlO1xyXG4gICAgICAgICAgICBpZih0aGlzLmhvbGRJdGVtIDw9IDApIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvbGRJdGVtPTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlmSG9sZEl0ZW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2V0SXRlbVZhbHVlKDApO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN1cGVyLkRyYXdIb2xkSXRlbSh0aGlzLmhvbGRJdGVtKTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5IUC09ZW5lbXkuSFA7XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgfSAgICBcclxuXHJcbiAgICBTZWxsSXRlbSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5TZXRJdGVtVmFsdWUoMCk7XHJcbiAgICAgICAgdGhpcy5ob2xkSXRlbSA9IDA7XHJcbiAgICAgICAgdGhpcy5pZkhvbGRJdGVtID0gZmFsc2U7XHJcbiAgICAgICAgc3VwZXIuRHJhd0hvbGRJdGVtKHRoaXMuaG9sZEl0ZW0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBpdGVtVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLml0ZW07XHJcbiAgICBhYnN0cmFjdCBpdGVtVHlwZTogaXRlbVR5cGU7XHJcbiAgICBhYnN0cmFjdCBtb25ldGFyeVZhbHVlIDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgSFA6bnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYWJzdHJhY3QgaXRlbVZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGhlcm8uT25JdGVtR2V0KHRoaXMuaXRlbVZhbHVlLCB0aGlzLm1vbmV0YXJ5VmFsdWUpO1xyXG4gICAgfVx0XHJcbiAgICBcclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBLbmlnaHQgZXh0ZW5kcyBIZXJvIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiS25pZ2h0XCI7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9rbmlnaHQucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMTA7XHJcbiAgICBtYXhIUDpudW1iZXIgPSB0aGlzLkhQO1xyXG4gICAgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsOyBcclxuICAgIGhvbGRJdGVtIDogbnVtYmVyID0gMDtcclxuICAgIGlmSG9sZEl0ZW0gOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBob2xkSXRlbVZhbHVlIDogbnVtYmVyO1xyXG4gICAgaWZJbkxhc3RQaGFzZUhhdmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7IFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGl0ZW1UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgTGlnaHRTd29yZCBleHRlbmRzIEl0ZW17XHJcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUubGlnaHRTd29yZDtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDUwO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvbGlnaHRTd29yZC5wbmdcIjtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gMzA7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkxpZ2h0IFN3b3JkXCI7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVxyXG5cdFxyXG59IiwiaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lZ2FLbmlnaHQgZXh0ZW5kcyBIZXJvIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiTWVnYSBLbmlnaHRcIjtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL21lZ2FLbmlnaHQucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMTU7XHJcbiAgICBtYXhIUDpudW1iZXIgPSB0aGlzLkhQO1xyXG4gICAgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsOyBcclxuICAgIGhvbGRJdGVtIDogbnVtYmVyID0gMDtcclxuICAgIGlmSG9sZEl0ZW0gOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBob2xkSXRlbVZhbHVlIDogbnVtYmVyO1xyXG4gICAgaWZJbkxhc3RQaGFzZUhhdmVJdGVtOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLk9uSXRlbUdldCgxMCwwKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyBcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgbW9uZXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9uZXkgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLm1vbmV5O1xyXG4gICAgYWJzdHJhY3QgbW9uZXlUeXBlOiBtb25leVR5cGU7IFxyXG4gICAgYWJzdHJhY3QgaXRlbVZhbHVlOiBudW1iZXI7XHJcbiAgICBpdGVtVGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgICBIUDogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oKTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICBCb2FyZC5TZXRTY29yZSh0aGlzLml0ZW1WYWx1ZSk7XHJcbiAgICB9ICAgICAgXHJcblxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tICcuL2VuZW15JztcclxuaW1wb3J0IHtjYXJkVHlwZSwgZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBPcmsgZXh0ZW5kcyBFbmVteSB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIk9ya1wiOyBcclxuICAgIGVuZW15VHlwZTogZW5lbXlUeXBlID0gZW5lbXlUeXBlLm9yaztcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL29yay5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSAxMDsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyAgICAgICBcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIHBvdGlvblR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb3Rpb24gZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLnBvdGlvbjtcclxuICAgIGFic3RyYWN0IHBvdGlvblR5cGU6IHBvdGlvblR5cGU7XHJcbiAgICBhYnN0cmFjdCBIUDpudW1iZXI7XHJcbiAgICByZWFkb25seSBpdGVtVGltZXI6IG51bWJlciA9IG51bGw7XHJcbiAgICByZWFkb25seSBob2xkSXRlbTogbnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKGhlcm8gOiBIZXJvKTogdm9pZCB7XHJcbiAgICAgICAgaWYoaGVyby5IUCt0aGlzLkhQPmhlcm8ubWF4SFApIGhlcm8uSFA9aGVyby5tYXhIUDtcclxuICAgICAgICBlbHNlIGhlcm8uSFArPXRoaXMuSFA7XHJcbiAgICB9XHRcclxuICAgIFxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge1BvdGlvbn0gZnJvbSAnLi9wb3Rpb24nO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBwb3Rpb25UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcblxyXG5leHBvcnQgIGNsYXNzIFJpc2tQb3Rpb24gZXh0ZW5kcyBQb3Rpb257XHJcbiAgICBwb3Rpb25UeXBlOiBwb3Rpb25UeXBlID0gcG90aW9uVHlwZS5yaXNrO1xyXG4gICAgSFA6IG51bWJlciA9IG51bGw7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9yaXNrUG90aW9uLnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJSaXNrIFBvdGlvblwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgT25IZXJvTW92ZU9uKGhlcm8gOiBIZXJvKTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICBpZihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA8IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZXJvLkhQPWhlcm8ubWF4SFA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlcm8uSFA9MTtcclxuICAgICAgICB9XHJcbiAgICB9XHQgICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7TW9uZXl9IGZyb20gJy4vbW9uZXknO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBtb25leVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJ1YnkgZXh0ZW5kcyBNb25leSB7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IDEwO1xyXG4gICAgbW9uZXlUeXBlOiBtb25leVR5cGUucnVieTsgXHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9ydWJ5LnBuZ1wiO1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJSdWJ5XCI7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVx0XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7RW5lbXl9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBlbmVteVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNrZWxldG9uIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTa2VsZXRvblwiOyBcclxuICAgIGVuZW15VHlwZTogZW5lbXlUeXBlID0gZW5lbXlUeXBlLnNrZWxldG9uO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvc2tlbGV0b24ucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gNTsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyAgICAgICBcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7VHJhcH0gZnJvbSAnLi90cmFwJztcclxuaW1wb3J0IHtIZXJvfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQge2NhcmRUeXBlLCB0cmFwVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bpa2UgZXh0ZW5kcyBUcmFwIHsgICAgXHJcbiAgICByZWFkb25seSBpdGVtVGltZXI6IG51bWJlciA9IG51bGw7ICBcclxuICAgIHJlYWRvbmx5IGhhdmVUaW1lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcmVhZG9ubHkgIHRpbWVyOiBudW1iZXIgPSBudWxsOyAgIFxyXG4gICAgcmVhZG9ubHkgaWZBY3RpdmFibGUgPSB0cnVlO1xyXG4gICAgdHJhcFR5cGU6IHRyYXBUeXBlID0gdHJhcFR5cGUuc3Bpa2U7XHJcbiAgICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlOyBcclxuICAgIHNwaWtlT25VUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zcGlrZU9OLnBuZ1wiO1xyXG4gICAgc3Bpa2VPZmZVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zcGlrZU9GRi5wbmdcIjsgICBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gdGhpcy5zcGlrZU9uVVJMOyAgICBcclxuICAgIEhQOiBudW1iZXIgPSA2O1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTcGlrZVwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiB2b2lkIHtcclxuICAgICAgICBoZXJvLkhQLT10aGlzLkhQO1xyXG4gICAgfVx0XHJcblxyXG4gICAgQ2hhbmdlQWN0aXZlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5IUD0wO1xyXG4gICAgICAgICAgICB0aGlzLmF2YXRhclVSTD10aGlzLnNwaWtlT2ZmVVJMO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkhQPTY7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhdGFyVVJMPXRoaXMuc3Bpa2VPblVSTDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0VGltZXIoKTogdm9pZCB7fVxyXG5cclxuICAgIE9uRW5kdGltZXIoKTogdm9pZCB7fVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGl0ZW1UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgU3RhZmYgZXh0ZW5kcyBJdGVte1xyXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLnN0YWY7XHJcbiAgICBtb25ldGFyeVZhbHVlOiBudW1iZXIgPSA4O1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvc3RhZmYucG5nXCI7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IDY7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlN0YWZmXCI7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVxyXG5cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGl0ZW1UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgU3dvcmQgZXh0ZW5kcyBJdGVtIHtcclxuICAgIGl0ZW1UeXBlOiBpdGVtVHlwZS5zd29yZDtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDM7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zd29yZC5wbmdcIjtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gNTtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU3dvcmRcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgdHJhcFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmFwIGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGUgPSBjYXJkVHlwZS50cmFwO1xyXG4gICAgYWJzdHJhY3QgdHJhcFR5cGU6IHRyYXBUeXBlO1xyXG4gICAgYWJzdHJhY3QgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgaWZBY3RpdmFibGU6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBoYXZlVGltZXI6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCB0aW1lcjogbnVtYmVyOyBcclxuICAgIHJlYWRvbmx5IGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiB2b2lkO1xyXG4gICAgYWJzdHJhY3QgQ2hhbmdlQWN0aXZlKCk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3QgU2V0VGltZXIoKTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBPbkVuZHRpbWVyKCk6IHZvaWQ7XHJcblxyXG4gICAgc3RhdGljIENoYW5nZUFsbEFjdGl2YWJsZVRyYXBTdGF0dXMoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBCb2FyZC5jYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1x0XHRcdFxyXG4gICAgICAgICAgICBpZihjYXJkLmNhcmRUeXBlID09IGNhcmRUeXBlLnRyYXApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKChjYXJkIGFzIFRyYXApLmlmQWN0aXZhYmxlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIChjYXJkIGFzIFRyYXApLkNoYW5nZUFjdGl2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblx0XHR9KTtcclxuICAgIH1cclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7RW5lbXl9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBlbmVteVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdlcmV3b2xmIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJXZXJld29sZlwiOyBcclxuICAgIGVuZW15VHlwZTogZW5lbXlUeXBlID0gZW5lbXlUeXBlLndlcmV3b2xmO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvd2VyZXdvbGYucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMjU7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTsgICAgICAgXHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICAgIFxyXG4gICAgICAgIHRoaXMuZHJvcD1cIlJ1YnlcIjtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtFbmVteX0gZnJvbSAnLi9lbmVteSc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGVuZW15VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgWm9tYmllIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJab21iaWVcIjsgXHJcbiAgICBlbmVteVR5cGU6IGVuZW15VHlwZSA9IGVuZW15VHlwZS56b21iaWU7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy96b21iaWUucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMzsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyAgICAgICBcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9