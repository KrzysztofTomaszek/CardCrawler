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
exports.push([module.i, ".gameBoard {\n  width: 940px;\n  margin: 0 auto;\n  padding: 30px;\n  background: green;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n\n.card {\n  height: 200px;\n  margin: 10px 1em;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: lightyellow;\n  flex: 0 1 20%; }\n\n.card:nth-child(3n+1) {\n  background: lightyellow; }\n\n.card:nth-child(3n-1) {\n  background: lemonchiffon; }\n\n.card:nth-child(3n) {\n  background: palegoldenrod; }\n\n.cardTop {\n  margin-top: 10px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n.cardBottom {\n  margin-bottom: 10px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n.cardMiddle {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n\n.cardName {\n  background: skyblue;\n  margin: 0;\n  text-align: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\nimg {\n  max-height: 150px;\n  max-width: 150px;\n  margin: 0; }\n", ""]);
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
        this.itemPool = ["Zombie", "Skeleton"];
        this.avatarURL = "./img/avatars/badChest.png";
        this.name = "Dark Chest";
        super.Initialize(this);
    }
}
exports.BadChest = BadChest;


/***/ }),

/***/ "./src/ts/board.ts":
/*!*************************!*\
  !*** ./src/ts/board.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const hero_1 = __webpack_require__(/*! ./hero */ "./src/ts/hero.ts");
const zombie_1 = __webpack_require__(/*! ./zombie */ "./src/ts/zombie.ts");
const sword_1 = __webpack_require__(/*! ./sword */ "./src/ts/sword.ts");
const staff_1 = __webpack_require__(/*! ./staff */ "./src/ts/staff.ts");
const spike_1 = __webpack_require__(/*! ./spike */ "./src/ts/spike.ts");
const skeleton_1 = __webpack_require__(/*! ./skeleton */ "./src/ts/skeleton.ts");
const goodChest_1 = __webpack_require__(/*! ./goodChest */ "./src/ts/goodChest.ts");
const coin_1 = __webpack_require__(/*! ./coin */ "./src/ts/coin.ts");
const badChest_1 = __webpack_require__(/*! ./badChest */ "./src/ts/badChest.ts");
const cardType_1 = __webpack_require__(/*! ./cardType */ "./src/ts/cardType.ts");
class Board {
    constructor() {
        this.heroPosition = 4;
        this.CreateBoard();
    }
    CreateBoard() {
        for (let i = 0; i < 9; i++) {
            if (i == this.heroPosition)
                Board.cards[i] = new hero_1.Hero(i);
            else {
                Board.AddCard(i, cardType_1.allPlayableCards);
            }
        }
        if (localStorage.getItem('Score') == null)
            localStorage.setItem('Score', '0');
        Board.SetScore(parseInt(localStorage.getItem('Score')));
        alert(localStorage.getItem('Board'));
    }
    static CreateInstance(c, pleaceId) {
        return new c(pleaceId);
    }
    static AddCard(cardPleaceId, cardPool) {
        const randomElement = cardPool[Math.floor(Math.random() * cardType_1.allPlayableCards.length)];
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
            case "Spike":
                Board.cards[cardPleaceId] = Board.CreateInstance(spike_1.Spike, cardPleaceId);
                break;
            case "Skeleton":
                Board.cards[cardPleaceId] = Board.CreateInstance(skeleton_1.Skeleton, cardPleaceId);
                break;
            case "GoodChest":
                Board.cards[cardPleaceId] = Board.CreateInstance(goodChest_1.GoodChest, cardPleaceId);
                break;
            case "Coin":
                Board.cards[cardPleaceId] = Board.CreateInstance(coin_1.Coin, cardPleaceId);
                break;
            case "BadChest":
                Board.cards[cardPleaceId] = Board.CreateInstance(badChest_1.BadChest, cardPleaceId);
                break;
        }
    }
    static SetScore(addToScore) {
        Board.score += addToScore;
        document.getElementById('score').innerHTML = ("<h1>Score: " + Board.score.toString() + "</h1>");
        localStorage.setItem('Score', Board.score.toString());
    }
    CardClick(idCard) {
        if (this.IfHeroIsNeighbour(idCard)) {
            this.hero = Board.cards[this.heroPosition];
            Board.cards[idCard].OnHeroMoveOn(this.hero);
            if (Board.cards[this.heroPosition].HP <= 0)
                this.EndGame();
            else if (Board.cards[idCard].IfHeroMoveOnContact(this.hero))
                this.MoveHeroInBoard(idCard);
            localStorage.setItem('Board', JSON.stringify(Board.cards));
        }
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
    RemoveCard() {
        throw new Error("Method not implemented.");
    }
    EndGame() {
        window.location.href = "index.html";
        localStorage.removeItem('Board');
    }
}
exports.Board = Board;
Board.cards = [null, null, null, null, null, null, null, null, null];
Board.score = 0;


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
})(cardType = exports.cardType || (exports.cardType = {}));
var enemyType;
(function (enemyType) {
    enemyType[enemyType["zombie"] = 0] = "zombie";
    enemyType[enemyType["skeleton"] = 1] = "skeleton";
})(enemyType = exports.enemyType || (exports.enemyType = {}));
var itemType;
(function (itemType) {
    itemType[itemType["sword"] = 0] = "sword";
    itemType[itemType["staf"] = 1] = "staf";
    itemType[itemType["dagger"] = 2] = "dagger";
})(itemType = exports.itemType || (exports.itemType = {}));
var trapType;
(function (trapType) {
    trapType[trapType["spike"] = 0] = "spike";
    trapType[trapType["bomb"] = 1] = "bomb";
})(trapType = exports.trapType || (exports.trapType = {}));
var chestType;
(function (chestType) {
    chestType[chestType["goodChest"] = 0] = "goodChest";
    chestType[chestType["badChest"] = 1] = "badChest";
})(chestType = exports.chestType || (exports.chestType = {}));
var moneyType;
(function (moneyType) {
    moneyType[moneyType["coin"] = 0] = "coin";
    moneyType[moneyType["ruby"] = 1] = "ruby";
})(moneyType = exports.moneyType || (exports.moneyType = {}));
exports.allPlayableCards = ['Zombie', 'Skeleton', 'Staff', 'Sword', 'GoodChest', 'Coin', 'BadChest'];


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
class Coin extends money_1.Money {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.itemValue = 5;
        this.avatarURL = "./img/avatars/coin.png";
        this.name = "Coin";
        super.Initialize(this);
    }
}
exports.Coin = Coin;


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
const coin_1 = __webpack_require__(/*! ./coin */ "./src/ts/coin.ts");
class Enemy extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.enemy;
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
                board_1.Board.cards[this.cardPleaceId] = new coin_1.Coin(this.cardPleaceId);
            return false;
        }
        else
            return true;
    }
    TakeDamage(value) {
        this.HP -= value;
        super.DrawHP(this.HP);
    }
    SubHP() {
        throw new Error("Method not implemented.");
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
        this.itemPool = ["Coin", "Sword", "Staff"];
        this.avatarURL = "./img/avatars/goodChest.png";
        this.name = "Chest";
        super.Initialize(this);
    }
}
exports.GoodChest = GoodChest;


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
        this.name = "Knight";
        this.avatarURL = "./img/avatars/knight.png";
        this.HP = 10;
        this.maxHP = this.HP;
        this.itemTimer = null;
        this.itemValue = null;
        this.cardType = cardType_1.cardType.hero;
        this.holdItem = 0;
        this.ifHoldItem = false;
        this.ifInLastPhaseHaveItem = false;
        super.Initialize(this);
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
    MoneyChain() {
        throw new Error("Method not implemented.");
    }
    AddToPurse() {
        throw new Error("Method not implemented.");
    }
    IfHeroMoveOnContact(hero) {
        return true;
    }
}
exports.Money = Money;


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
        this.trapType = cardType_1.trapType.spike;
        this.avatarURL = "./img/avatars/sample.png";
        this.HP = 4;
        this.name = "Spike";
        this.active = true;
        super.Initialize(this);
    }
    OnHeroMoveOn() {
        throw new Error("Method not implemented.");
    }
    DealDamage() {
        throw new Error("Method not implemented.");
    }
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
class Trap extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.trap;
        this.itemValue = null;
        this.holdItem = null;
    }
    OnHeroMoveOn() {
        throw new Error("Method not implemented.");
    }
    SetActive() {
        throw new Error("Method not implemented.");
    }
    SetTimer() {
        throw new Error("Method not implemented.");
    }
    OnEndtimer() {
        throw new Error("Method not implemented.");
    }
    IfHeroMoveOnContact(hero) {
        return true;
    }
}
exports.Trap = Trap;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2dhbWUuc2Nzcz9iMzZkIiwid2VicGFjazovLy8uL3NyYy90cy9iYWRDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmRUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29pbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dvb2RDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaGVyby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9uZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NrZWxldG9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zcGlrZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc3RhZmYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3N3b3JkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy90cmFwLnRzIiwid2VicGFjazovLy8uL3NyYy90cy96b21iaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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QUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxlQUFlLENBQUMsV0FBa0I7UUFFakMsSUFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN4VSxJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FB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QixDQUFDO1FBQy9DLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFLWCxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQVhELHdCQVdDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9nYW1lLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lQm9hcmQge1xcbiAgd2lkdGg6IDk0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmNhcmQge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogMTBweCAxZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XFxuICBmbGV4OiAwIDEgMjAlOyB9XFxuXFxuLmNhcmQ6bnRoLWNoaWxkKDNuKzEpIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93OyB9XFxuXFxuLmNhcmQ6bnRoLWNoaWxkKDNuLTEpIHtcXG4gIGJhY2tncm91bmQ6IGxlbW9uY2hpZmZvbjsgfVxcblxcbi5jYXJkOm50aC1jaGlsZCgzbikge1xcbiAgYmFja2dyb3VuZDogcGFsZWdvbGRlbnJvZDsgfVxcblxcbi5jYXJkVG9wIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYXJkQm90dG9tIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYXJkTWlkZGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2FyZE5hbWUge1xcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7IH1cXG5cXG5pbWcge1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgbWFyZ2luOiAwOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgIGNsYXNzIEJhZENoZXN0IGV4dGVuZHMgQ2hlc3Qge1xyXG4gICAgY2hlc3RUeXBlOiBjaGVzdFR5cGUuYmFkQ2hlc3Q7XHJcbiAgICBpdGVtUG9vbDogc3RyaW5nW10gPSBbXCJab21iaWVcIixcIlNrZWxldG9uXCJdO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvYmFkQ2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkRhcmsgQ2hlc3RcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0hlcm99IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7Wm9tYmllfSBmcm9tICcuL3pvbWJpZSc7XHJcbmltcG9ydCB7U3dvcmR9IGZyb20gJy4vc3dvcmQnO1xyXG5pbXBvcnQge1N0YWZmfSBmcm9tICcuL3N0YWZmJztcclxuaW1wb3J0IHtTcGlrZX0gZnJvbSAnLi9zcGlrZSc7XHJcbmltcG9ydCB7U2tlbGV0b259IGZyb20gJy4vc2tlbGV0b24nO1xyXG5pbXBvcnQge0dvb2RDaGVzdH0gZnJvbSAnLi9nb29kQ2hlc3QnO1xyXG5pbXBvcnQge0NvaW59IGZyb20gJy4vY29pbic7XHJcbmltcG9ydCB7QmFkQ2hlc3R9IGZyb20gJy4vYmFkQ2hlc3QnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBhbGxQbGF5YWJsZUNhcmRzfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcblx0XHJcblx0c3RhdGljIGNhcmRzOiBDYXJkW10gPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcblx0c3RhdGljIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cdGhlcm9Qb3NpdGlvbjpudW1iZXIgPSA0O1xyXG5cdGhlcm86IEhlcm87XHJcblx0XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5DcmVhdGVCb2FyZCgpO1xyXG5cdH1cclxuXHJcblx0Q3JlYXRlQm9hcmQoKSA6IHZvaWRcclxuXHR7XHRcdFxyXG5cdFx0Zm9yKGxldCBpOm51bWJlciA9IDA7IGkgPCA5OyBpKyspXHJcblx0XHR7XHJcblx0XHRcdGlmKGk9PXRoaXMuaGVyb1Bvc2l0aW9uKUJvYXJkLmNhcmRzW2ldID0gbmV3IEhlcm8oaSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdEJvYXJkLkFkZENhcmQoaSxhbGxQbGF5YWJsZUNhcmRzKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ly9Db29raWVzLnNldCgnU2NvcmUnLCAnMTAnKTtcclxuXHRcdFxyXG5cdFx0aWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Njb3JlJykgPT0gbnVsbCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Njb3JlJywgJzAnKTtcclxuXHRcdEJvYXJkLlNldFNjb3JlKHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTY29yZScpKSk7XHJcblx0XHRhbGVydChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQm9hcmQnKSk7XHJcblx0XHQvL2lmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdCb2FyZCcpICE9IG51bGwpIEJvYXJkLmNhcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQm9hcmQnKSlcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBDcmVhdGVJbnN0YW5jZTxUIGV4dGVuZHMgQ2FyZD4oYzogbmV3IChjYXJkUGxlYWNlSWQ6bnVtYmVyKSA9PiBULCBwbGVhY2VJZDpudW1iZXIpOiBUIFxyXG5cdHtcclxuICAgIFx0cmV0dXJuIG5ldyBjKHBsZWFjZUlkKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBBZGRDYXJkKGNhcmRQbGVhY2VJZDpudW1iZXIsIGNhcmRQb29sOiBzdHJpbmdbXSkgOiB2b2lkXHJcblx0e1xyXG5cdFx0Y29uc3QgcmFuZG9tRWxlbWVudDogc3RyaW5nICA9IGNhcmRQb29sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbFBsYXlhYmxlQ2FyZHMubGVuZ3RoKV07XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0c3dpdGNoIChyYW5kb21FbGVtZW50KSBcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBcIlpvbWJpZVwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShab21iaWUsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlN3b3JkXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IEJvYXJkLkNyZWF0ZUluc3RhbmNlKFN3b3JkLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJTdGFmZlwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShTdGFmZixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiU3Bpa2VcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoU3Bpa2UsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRjYXNlIFwiU2tlbGV0b25cIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoU2tlbGV0b24sY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIkdvb2RDaGVzdFwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShHb29kQ2hlc3QsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIkNvaW5cIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gQm9hcmQuQ3JlYXRlSW5zdGFuY2UoQ29pbixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHJcblx0XHRcdGNhc2UgXCJCYWRDaGVzdFwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSBCb2FyZC5DcmVhdGVJbnN0YW5jZShCYWRDaGVzdCxjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHRcdFxyXG5cdFx0fVx0XHRcdFxyXG5cdH1cclxuXHJcblx0c3RhdGljIFNldFNjb3JlKGFkZFRvU2NvcmU6IG51bWJlcik6IHZvaWRcclxuXHR7XHJcblx0XHRCb2FyZC5zY29yZSs9YWRkVG9TY29yZTtcclxuXHRcdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKSBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJIVE1MID0gKFwiPGgxPlNjb3JlOiBcIisgQm9hcmQuc2NvcmUudG9TdHJpbmcoKSArXCI8L2gxPlwiKTtcclxuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTY29yZScsIEJvYXJkLnNjb3JlLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHJcblx0Q2FyZENsaWNrKGlkQ2FyZDpudW1iZXIpIDogdm9pZCBcclxuXHR7XHJcblx0XHRpZih0aGlzLklmSGVyb0lzTmVpZ2hib3VyKGlkQ2FyZCkpXHJcblx0XHR7XHJcblx0XHRcdC8vd3l3b8WCeXdhbmllIGFrY2ppIGthcnR5XHJcblx0XHRcdHRoaXMuaGVybyA9IEJvYXJkLmNhcmRzW3RoaXMuaGVyb1Bvc2l0aW9uXSBhcyB1bmtub3duIGFzIEhlcm87XHJcblx0XHRcdEJvYXJkLmNhcmRzW2lkQ2FyZF0uT25IZXJvTW92ZU9uKHRoaXMuaGVybyk7XHJcblx0XHRcdGlmKEJvYXJkLmNhcmRzW3RoaXMuaGVyb1Bvc2l0aW9uXS5IUDw9MCl0aGlzLkVuZEdhbWUoKTtcclxuXHRcdFx0ZWxzZSBpZihCb2FyZC5jYXJkc1tpZENhcmRdLklmSGVyb01vdmVPbkNvbnRhY3QodGhpcy5oZXJvKSl0aGlzLk1vdmVIZXJvSW5Cb2FyZChpZENhcmQpO1x0XHJcblxyXG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQm9hcmQnLCBKU09OLnN0cmluZ2lmeShCb2FyZC5jYXJkcykpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0SWZIZXJvSXNOZWlnaGJvdXIoaWRDYXJkOm51bWJlcikgOiBib29sZWFuXHJcblx0e1xyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gMSB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDcpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uIC0gMSA9PSBpZENhcmQgfHwgdGhpcy5oZXJvUG9zaXRpb24gKyAxID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNSlcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gLSAzID09IGlkQ2FyZCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiArIDMgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gMyB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiArIDEgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDIgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNSB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA4KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiAtIDEgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gMSB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyKVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiArIDMgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDYgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNyB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA4KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiAtIDMgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdE1vdmVDYXJkSW5Cb2FyZChjYXJkSWRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbklkOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdEJvYXJkLmNhcmRzW2NhcmRJZFRvTW92ZV0uTW92ZUNhcmQoZGVzdGluYXRpb25JZCk7XHJcblx0XHRCb2FyZC5jYXJkc1tkZXN0aW5hdGlvbklkXT1Cb2FyZC5jYXJkc1tjYXJkSWRUb01vdmVdO1x0XHRcclxuXHR9XHJcblxyXG5cdE1vdmVIZXJvSW5Cb2FyZChkZXN0aW5hdGlvbjpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHRpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMSAmJiBkZXN0aW5hdGlvbiA9PSAyKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgJiYgZGVzdGluYXRpb24gPT0gMCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0ICYmIGRlc3RpbmF0aW9uID09IDUpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNCAmJiBkZXN0aW5hdGlvbiA9PSAzKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDcgJiYgZGVzdGluYXRpb24gPT0gOCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3ICYmIGRlc3RpbmF0aW9uID09IDYpKXRoaXMuTW92ZUNhcmRQYXVzZVNpZ24odGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDMgJiYgZGVzdGluYXRpb24gPT0gNil8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzICYmIGRlc3RpbmF0aW9uID09IDApfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNCAmJiBkZXN0aW5hdGlvbiA9PSAxKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgJiYgZGVzdGluYXRpb24gPT0gNyl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA1ICYmIGRlc3RpbmF0aW9uID09IDIpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNSAmJiBkZXN0aW5hdGlvbiA9PSA4KSl0aGlzLk1vdmVDYXJkUmV2ZXJzZVBhdXNlU2lnbih0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24pO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMSAmJiBkZXN0aW5hdGlvbiA9PSA0KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDcgJiYgZGVzdGluYXRpb24gPT0gNCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzICYmIGRlc3RpbmF0aW9uID09IDQpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNSAmJiBkZXN0aW5hdGlvbiA9PSA0KSl0aGlzLk1vdmVDYXJkU21hbGxMKHRoaXMuaGVyb1Bvc2l0aW9uKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgJiYgZGVzdGluYXRpb24gPT0gMSl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyICYmIGRlc3RpbmF0aW9uID09IDEpKXRoaXMuTW92ZUNhcmRCaWdMKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgMSk7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2ICYmIGRlc3RpbmF0aW9uID09IDcpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gOCAmJiBkZXN0aW5hdGlvbiA9PSA3KSl0aGlzLk1vdmVDYXJkQmlnTCh0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24sIDIpO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMCAmJiBkZXN0aW5hdGlvbiA9PSAzKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDYgJiYgZGVzdGluYXRpb24gPT0gMykpdGhpcy5Nb3ZlQ2FyZEJpZ0wodGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uLCAzKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDIgJiYgZGVzdGluYXRpb24gPT0gNSl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA4ICYmIGRlc3RpbmF0aW9uID09IDUpKXRoaXMuTW92ZUNhcmRCaWdMKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgNCk7XHJcblx0XHRlbHNlIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1x0XHRcclxuXHJcbiAgICAgICAgdGhpcy5oZXJvUG9zaXRpb249ZGVzdGluYXRpb247XHJcblx0fVxyXG5cclxuXHRNb3ZlQ2FyZEJpZ0woY2FyZFRvTW92ZTpudW1iZXIsIGRlc3RpbmF0aW9uSWQ6bnVtYmVyLCBzd2l0Y2hNb2RlIDogbnVtYmVyKSA6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlLGRlc3RpbmF0aW9uSWQpO1xyXG4gICAgICAgIGxldCBzd2l0Y2hlcjogbnVtYmVyO1xyXG5cdFx0c3dpdGNoIChzd2l0Y2hNb2RlKSBcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHN3aXRjaGVyPTM7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRzd2l0Y2hlcj0tMztcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0c3dpdGNoZXI9MTtcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0c3dpdGNoZXI9LTE7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0XHR9XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlK3N3aXRjaGVyLGNhcmRUb01vdmUpO1x0XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlK3N3aXRjaGVyK3N3aXRjaGVyLGNhcmRUb01vdmUrc3dpdGNoZXIpO1x0XHJcblx0XHRCb2FyZC5BZGRDYXJkKGNhcmRUb01vdmUrc3dpdGNoZXIrc3dpdGNoZXIsYWxsUGxheWFibGVDYXJkcyk7XHJcblx0fVxyXG5cclxuXHRNb3ZlQ2FyZFNtYWxsTChjYXJkVG9Nb3ZlOm51bWJlciwgZGVzdGluYXRpb25JZDpudW1iZXIgPSA0KSA6IHZvaWRcclxuXHR7XHJcblx0XHRsZXQgc2NlY29uZENhcmQ6IG51bWJlcjtcclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUsZGVzdGluYXRpb25JZCk7XHJcblx0XHRzd2l0Y2ggKGNhcmRUb01vdmUpIFxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0c2NlY29uZENhcmQgPSAwO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0c2NlY29uZENhcmQgPSA2O1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNTpcclxuXHRcdFx0XHRzY2Vjb25kQ2FyZCA9IDI7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA3OlxyXG5cdFx0XHRcdHNjZWNvbmRDYXJkID0gODtcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1x0XHRcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKHNjZWNvbmRDYXJkLGNhcmRUb01vdmUpO1xyXG5cdFx0Qm9hcmQuQWRkQ2FyZChzY2Vjb25kQ2FyZCxhbGxQbGF5YWJsZUNhcmRzKTtcclxuXHR9XHRcclxuXHJcblx0TW92ZUNhcmRSZXZlcnNlUGF1c2VTaWduKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbjpudW1iZXIpIDogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlLGRlc3RpbmF0aW9uKTtcclxuXHRcdGlmKChjYXJkVG9Nb3ZlIC0gZGVzdGluYXRpb24pID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSArIDMsY2FyZFRvTW92ZSk7XHJcblx0XHRcdGNhcmRUb01vdmUgPSBjYXJkVG9Nb3ZlICsgMztcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYoKGNhcmRUb01vdmUgLSBkZXN0aW5hdGlvbikgPCAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlIC0gMyxjYXJkVG9Nb3ZlKTtcclxuXHRcdFx0Y2FyZFRvTW92ZSA9IGNhcmRUb01vdmUgLSAzO1xyXG5cdFx0fVxyXG5cdFx0Qm9hcmQuQWRkQ2FyZChjYXJkVG9Nb3ZlLGFsbFBsYXlhYmxlQ2FyZHMpO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRQYXVzZVNpZ24oY2FyZFRvTW92ZTpudW1iZXIsIGRlc3RpbmF0aW9uOm51bWJlcikgOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbik7XHJcblx0XHRpZigoY2FyZFRvTW92ZSAtIGRlc3RpbmF0aW9uKSA+IDApdGhpcy5Nb3ZlQ2FyZEluQm9hcmQoKytjYXJkVG9Nb3ZlLGNhcmRUb01vdmUgLSAxKTtcclxuXHRcdGVsc2UgaWYoKGNhcmRUb01vdmUgLSBkZXN0aW5hdGlvbikgPCAwKXRoaXMuTW92ZUNhcmRJbkJvYXJkKC0tY2FyZFRvTW92ZSxjYXJkVG9Nb3ZlICsgMSk7XHJcblx0XHRCb2FyZC5BZGRDYXJkKGNhcmRUb01vdmUsYWxsUGxheWFibGVDYXJkcyk7XHJcblx0fVxyXG5cclxuXHRTZWxsSXRlbSgpIDogdm9pZFxyXG5cdHtcclxuXHRcdEJvYXJkLlNldFNjb3JlKHRoaXMuaGVyby5ob2xkSXRlbVZhbHVlKTtcclxuXHRcdEJvYXJkLlNldEl0ZW1WYWx1ZSgwKTtcclxuXHRcdHRoaXMuaGVyby5TZWxsSXRlbSgpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIFNldEl0ZW1WYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaXRlbVZhbHVlJykgYXMgSFRNTERpdkVsZW1lbnQpLmlubmVySFRNTCA9IChcIjxoMT5Ib2xkIGl0ZW0gdmFsdWU6IFwiKyB2YWx1ZS50b1N0cmluZygpICtcIjwvaDE+XCIpO1xyXG5cdH1cclxuXHJcblx0UmVtb3ZlQ2FyZCgpIDogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblxyXG5cdEVuZEdhbWUoKSA6IHZvaWRcclxuXHR7XHJcblx0XHQvL1phcGlzeXdhbmllIHBvc3TEmXDDs3dcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCI7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQm9hcmQnKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge2NhcmRUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ2FyZCB7XHJcbiAgICBhYnN0cmFjdCBjYXJkVHlwZSA6IGNhcmRUeXBlO1xyXG4gICAgYWJzdHJhY3QgYXZhdGFyVVJMIDogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgSFAgOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBuYW1lOiBzdHJpbmc7XHJcbiAgICBhYnN0cmFjdCBpdGVtVGltZXI6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IGl0ZW1WYWx1ZTogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgaG9sZEl0ZW06IG51bWJlcjtcclxuICAgIGNhcmRQbGVhY2VJZCA6IG51bWJlcjtcclxuIFxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2FyZFBsZWFjZUlkID0gY2FyZFBsZWFjZUlkOyAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIEluaXRpYWxpemUob2JqOkNhcmQpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuRHJhd0l0ZW1UaW1lcihvYmouaXRlbVRpbWVyKTtcclxuICAgICAgICB0aGlzLkRyYXdIUChvYmouSFApO1xyXG4gICAgICAgIHRoaXMuRHJhd0F2YXRhcihvYmouYXZhdGFyVVJMKTtcclxuICAgICAgICB0aGlzLkRyYXdIb2xkSXRlbShvYmouaG9sZEl0ZW0pO1xyXG4gICAgICAgIHRoaXMuRHJhd05hbWUob2JqLm5hbWUpO1xyXG4gICAgICAgIHRoaXMuRHJhd0l0ZW1WYWx1ZShvYmouaXRlbVZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBNb3ZlQ2FyZChkZXN0aW5hdGlvbjogbnVtYmVyKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNhcmRQbGVhY2VJZCA9IGRlc3RpbmF0aW9uO1xyXG4gICAgICAgIHRoaXMuSW5pdGlhbGl6ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBTd2FwQ2FyZCgpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbjtcclxuXHJcbiAgICBhYnN0cmFjdCBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pIDogdm9pZDsgXHJcblxyXG4gICAgRHJhd0F2YXRhcihzcmMgOiBzdHJpbmcgPSBudWxsKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjb25zdCBhdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF2YXRhcklNR1wiICsgdGhpcy5jYXJkUGxlYWNlSWQudG9TdHJpbmcoKSkgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuICAgICAgICBpZihzcmMhPW51bGwpYXZhdGFyLnNyYyA9IHNyYzsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdOYW1lKHZhbHVlOnN0cmluZyA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRhcmdldERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZFwiICsgdGhpcy5jYXJkUGxlYWNlSWQudG9TdHJpbmcoKSkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmRCb3R0b21cIilbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNhcmROYW1lXCIpWzBdO1xyXG4gICAgICAgIGlmKHZhbHVlIT1udWxsKXRhcmdldERpdi5pbm5lckhUTUwgPSB2YWx1ZTsgIFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdIUCh2YWx1ZTpudW1iZXIgPSBudWxsKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdOdW1iZXJJbkNsYXNzKFwiY2FyZFRvcFwiLCBcImxpZmVcIiwgdmFsdWUpOyAgICAgICAgICAgICBcclxuICAgIH0gICAgXHJcblxyXG4gICAgRHJhd0l0ZW1UaW1lcih2YWx1ZTpudW1iZXIgPSBudWxsKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuRHJhd051bWJlckluQ2xhc3MoXCJjYXJkVG9wXCIsIFwiaXRlbVRpbWVyXCIsIHZhbHVlKTsgXHJcbiAgICB9XHJcblxyXG4gICAgRHJhd0l0ZW1WYWx1ZSh2YWx1ZTpudW1iZXIgPSBudWxsKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuRHJhd051bWJlckluQ2xhc3MoXCJjYXJkQm90dG9tXCIsIFwiaXRlbVZhbHVlXCIsIHZhbHVlKTsgXHJcbiAgICB9XHJcblxyXG4gICAgRHJhd0hvbGRJdGVtKHZhbHVlOm51bWJlciA9IG51bGwpOiB2b2lkXHJcbiAgICB7XHJcblxyXG4gICAgICAgIHRoaXMuRHJhd051bWJlckluQ2xhc3MoXCJjYXJkQm90dG9tXCIsIFwiaG9sZEl0ZW1cIiwgdmFsdWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3TnVtYmVySW5DbGFzcyhjbGFzc0NTUzpzdHJpbmcsIGNoaWxkQ2xhc3NDU1M6c3RyaW5nLCB2YWx1ZTpudW1iZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciB0YXJnZXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRcIiArIHRoaXMuY2FyZFBsZWFjZUlkLnRvU3RyaW5nKCkpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NDU1MpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2hpbGRDbGFzc0NTUylbMF07XHJcbiAgICAgICAgaWYodmFsdWUhPW51bGwpdGFyZ2V0RGl2LmlubmVySFRNTCA9ICh2YWx1ZSkudG9TdHJpbmcoKTsgXHJcbiAgICAgICAgZWxzZSB0YXJnZXREaXYuaW5uZXJIVE1MID0gXCIgXCI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBjYXJkVHlwZSB7XHJcbiAgaGVybyxcclxuICBlbmVteSxcclxuICBpdGVtLFxyXG4gIHRyYXAsXHJcbiAgY2hlc3QsXHJcbiAgbW9uZXlcclxufVxyXG5cclxuZXhwb3J0IGVudW0gZW5lbXlUeXBlIHtcclxuICB6b21iaWUsXHJcbiAgc2tlbGV0b25cclxufVxyXG5cclxuZXhwb3J0IGVudW0gaXRlbVR5cGUge1xyXG5cdHN3b3JkLFxyXG5cdHN0YWYsXHJcblx0ZGFnZ2VyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHRyYXBUeXBlIHtcclxuXHRzcGlrZSxcclxuXHRib21iXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGNoZXN0VHlwZSB7XHJcblx0Z29vZENoZXN0LFxyXG5cdGJhZENoZXN0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIG1vbmV5VHlwZSB7XHJcblx0Y29pbixcclxuXHRydWJ5XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhbGxQbGF5YWJsZUNhcmRzIDogc3RyaW5nW10gPSBbJ1pvbWJpZScsICdTa2VsZXRvbicsICdTdGFmZicsICdTd29yZCcsICdHb29kQ2hlc3QnLCAnQ29pbicsICdCYWRDaGVzdCddOyBcclxuLy9leHBvcnQgY29uc3QgYWxsUGxheWFibGVDYXJkcyA6IFN0cmluZ1tdID0gWydab21iaWUnLCAnU3dvcmQnLCAnU3RhZmYnLCAnU3Bpa2UnLCAnU2tlbGV0b24nLCAnR29vZENoZXN0JywgJ0NvaW4nLCAnQmFkQ2hlc3QnXTsgXHJcblxyXG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoZXN0IGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGU9IGNhcmRUeXBlLmNoZXN0O1xyXG4gICAgSFA6bnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYWJzdHJhY3QgY2hlc3RUeXBlOiBjaGVzdFR5cGU7XHJcbiAgICBhYnN0cmFjdCBpdGVtUG9vbDogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyBcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oKTogdm9pZCBcclxuICAgIHtcclxuXHJcbiAgICB9XHRcclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgQm9hcmQuQWRkQ2FyZCh0aGlzLmNhcmRQbGVhY2VJZCx0aGlzLml0ZW1Qb29sKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIE9wZW5DaGVzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgUmFuZG9tSXRlbSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlSXRlbSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7TW9uZXl9IGZyb20gJy4vbW9uZXknO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBtb25leVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvaW4gZXh0ZW5kcyBNb25leSB7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IDU7XHJcbiAgICBtb25leVR5cGU6IG1vbmV5VHlwZS5jb2luOyBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2NvaW4ucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNvaW5cIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcbmltcG9ydCB7IENvaW4gfSBmcm9tICcuL2NvaW4nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVuZW15IGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGUgPSBjYXJkVHlwZS5lbmVteTtcclxuICAgIGFic3RyYWN0IGVuZW15VHlwZTogZW5lbXlUeXBlO1xyXG4gICAgYWJzdHJhY3QgSFA6IG51bWJlcjtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaWZEZWFkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgaGVyby5GaWdodCh0aGlzKTsgXHJcbiAgICB9XHRcclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaGVyby5pZkluTGFzdFBoYXNlSGF2ZUl0ZW0pXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgaWYodGhpcy5pZkRlYWQpQm9hcmQuY2FyZHNbdGhpcy5jYXJkUGxlYWNlSWRdID0gbmV3IENvaW4odGhpcy5jYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgIGVsc2UgcmV0dXJuIHRydWU7ICAgICAgICBcclxuICAgIH0gICAgXHJcbiAgIFxyXG4gICAgVGFrZURhbWFnZSh2YWx1ZSA6ICBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5IUC09dmFsdWU7XHJcbiAgICAgICAgc3VwZXIuRHJhd0hQKHRoaXMuSFApO1xyXG4gICAgfVxyXG5cclxuICAgIFN1YkhQKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnO1xuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi9ib2FyZCc7XG5cbmxldCBib2FyZCA6IEJvYXJkID0gbmV3IEJvYXJkKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDApO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soMSk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljaygyKTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDMpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNCk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg1KTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDYpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkN1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNyk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg4KTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsbEl0ZW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuU2VsbEl0ZW0oKTt9KTtcbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR29vZENoZXN0IGV4dGVuZHMgQ2hlc3Qge1xyXG4gICAgY2hlc3RUeXBlOiBjaGVzdFR5cGUuZ29vZENoZXN0O1xyXG4gICAgaXRlbVBvb2w6IHN0cmluZ1tdID0gW1wiQ29pblwiLCBcIlN3b3JkXCIsIFwiU3RhZmZcIl07XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9nb29kQ2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNoZXN0XCJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiS25pZ2h0XCI7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9rbmlnaHQucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMTA7XHJcbiAgICByZWFkb25seSBtYXhIUDpudW1iZXIgPSB0aGlzLkhQO1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsOyBcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLmhlcm87XHJcbiAgICBob2xkSXRlbSA6IG51bWJlciA9IDA7XHJcbiAgICBpZkhvbGRJdGVtIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaG9sZEl0ZW1WYWx1ZSA6IG51bWJlcjtcclxuICAgIGlmSW5MYXN0UGhhc2VIYXZlSXRlbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyBcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiB2b2lkIHt9XHRcclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiB7cmV0dXJuIGZhbHNlO31cclxuXHJcbiAgICBPbkl0ZW1HZXQoaXRlbUR1cmFiaWxpdHk6IG51bWJlciwgaXRlbVZhbHVlOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZkhvbGRJdGVtID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhvbGRJdGVtID0gaXRlbUR1cmFiaWxpdHk7XHJcbiAgICAgICAgdGhpcy5TZXRJdGVtVmFsdWUoaXRlbVZhbHVlKTtcclxuICAgICAgICBCb2FyZC5TZXRJdGVtVmFsdWUoaXRlbVZhbHVlKTtcclxuICAgICAgICBzdXBlci5EcmF3SG9sZEl0ZW0odGhpcy5ob2xkSXRlbSk7XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBEZWFsRGFtYWdlVG9Nb25zdGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBTZXRJdGVtVmFsdWUodmFsdWU6IG51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ob2xkSXRlbVZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgRmlnaHQoZW5lbXk6IEVuZW15KTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlmSW5MYXN0UGhhc2VIYXZlSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuaWZIb2xkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaWZJbkxhc3RQaGFzZUhhdmVJdGVtID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHRtcDpudW1iZXI7XHJcbiAgICAgICAgICAgIHRtcCA9IHRoaXMuaG9sZEl0ZW0gLSBlbmVteS5IUDtcclxuICAgICAgICAgICAgZW5lbXkuVGFrZURhbWFnZSh0aGlzLmhvbGRJdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5ob2xkSXRlbSA9IHRtcDtcclxuICAgICAgICAgICAgaWYoZW5lbXkuSFA8PTApZW5lbXkuaWZEZWFkPXRydWU7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaG9sZEl0ZW0gPD0gMCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9sZEl0ZW09MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWZIb2xkSXRlbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZXRJdGVtVmFsdWUoMCk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3VwZXIuRHJhd0hvbGRJdGVtKHRoaXMuaG9sZEl0ZW0pOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLkhQLT1lbmVteS5IUDtcclxuICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIFNlbGxJdGVtKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLlNldEl0ZW1WYWx1ZSgwKTtcclxuICAgICAgICB0aGlzLmhvbGRJdGVtID0gMDtcclxuICAgICAgICB0aGlzLmlmSG9sZEl0ZW0gPSBmYWxzZTtcclxuICAgICAgICBzdXBlci5EcmF3SG9sZEl0ZW0odGhpcy5ob2xkSXRlbSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGl0ZW1UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbSBleHRlbmRzIENhcmQge1xyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUuaXRlbTtcclxuICAgIGFic3RyYWN0IGl0ZW1UeXBlOiBpdGVtVHlwZTtcclxuICAgIGFic3RyYWN0IG1vbmV0YXJ5VmFsdWUgOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBIUDpudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKGhlcm8gOiBIZXJvKTogdm9pZCB7XHJcbiAgICAgICAgaGVyby5Pbkl0ZW1HZXQodGhpcy5pdGVtVmFsdWUsIHRoaXMubW9uZXRhcnlWYWx1ZSk7XHJcbiAgICB9XHRcclxuICAgIFxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBtb25leVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNb25leSBleHRlbmRzIENhcmQge1xyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUubW9uZXk7XHJcbiAgICBhYnN0cmFjdCBtb25leVR5cGU6IG1vbmV5VHlwZTsgXHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIEhQOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbigpOiB2b2lkIFxyXG4gICAge1xyXG4gICAgICAgIEJvYXJkLlNldFNjb3JlKHRoaXMuaXRlbVZhbHVlKTtcclxuICAgIH1cdFxyXG5cclxuICAgIE1vbmV5Q2hhaW4oKVxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBBZGRUb1B1cnNlKClcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tICcuL2VuZW15JztcclxuaW1wb3J0IHtjYXJkVHlwZSwgZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTa2VsZXRvbiBleHRlbmRzIEVuZW15IHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU2tlbGV0b25cIjsgXHJcbiAgICBlbmVteVR5cGU6IGVuZW15VHlwZSA9IGVuZW15VHlwZS5za2VsZXRvbjtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NrZWxldG9uLnBuZ1wiO1xyXG4gICAgSFA6IG51bWJlciA9IDU7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTsgICAgICAgXHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge1RyYXB9IGZyb20gJy4vdHJhcCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIHRyYXBUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlrZSBleHRlbmRzIFRyYXAge1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsOyAgXHJcbiAgICByZWFkb25seSBoYXZlVGltZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRyYXBUeXBlOiB0cmFwVHlwZSA9IHRyYXBUeXBlLnNwaWtlO1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgdGltZXI6IG51bWJlcjsgICBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NhbXBsZS5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSA0O1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTcGlrZVwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVx0XHJcbiAgICBcclxuICAgIERlYWxEYW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi9pdGVtJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgaXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBTdGFmZiBleHRlbmRzIEl0ZW17XHJcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUuc3RhZjtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDg7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zdGFmZi5wbmdcIjtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gNjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU3RhZmZcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblx0XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi9pdGVtJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgaXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBTd29yZCBleHRlbmRzIEl0ZW0ge1xyXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLnN3b3JkO1xyXG4gICAgbW9uZXRhcnlWYWx1ZTogbnVtYmVyID0gMztcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3N3b3JkLnBuZ1wiO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSA1O1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTd29yZFwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCB0cmFwVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyYXAgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLnRyYXA7XHJcbiAgICBhYnN0cmFjdCB0cmFwVHlwZTogdHJhcFR5cGU7XHJcbiAgICBhYnN0cmFjdCBhY3RpdmU6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBoYXZlVGltZXI6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCB0aW1lcjogbnVtYmVyOyBcclxuICAgIHJlYWRvbmx5IGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHRcclxuICAgIFxyXG4gICAgYWJzdHJhY3QgRGVhbERhbWFnZSgpOiB2b2lkO1xyXG5cclxuICAgIFNldEFjdGl2ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0VGltZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRW5kdGltZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtFbmVteX0gZnJvbSAnLi9lbmVteSc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGVuZW15VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgWm9tYmllIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJab21iaWVcIjsgXHJcbiAgICBlbmVteVR5cGU6IGVuZW15VHlwZSA9IGVuZW15VHlwZS56b21iaWU7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy96b21iaWUucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMzsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyAgICAgICBcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9