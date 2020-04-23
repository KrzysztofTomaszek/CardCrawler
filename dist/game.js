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
exports.push([module.i, ".gameBoard {\n  width: 940px;\n  margin: 0 auto;\n  padding: 30px;\n  background: green;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n\n.card {\n  height: 200px;\n  margin: 10px 1em;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: lightyellow;\n  flex: 0 1 20%; }\n\n.card:nth-child(3n+1) {\n  background: lightyellow; }\n\n.card:nth-child(3n-1) {\n  background: lemonchiffon; }\n\n.card:nth-child(3n) {\n  background: palegoldenrod; }\n\n.cardTop {\n  margin-top: 10px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n.cardBottom {\n  margin-bottom: 10px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n\n.cardMiddle {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center; }\n\n.cardName {\n  background: skyblue;\n  margin: 0;\n  text-align: center;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px; }\n\nimg {\n  max-height: 150px;\n  margin: 0; }\n", ""]);
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
        this.avatarURL = "./img/avatars/sample.png";
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
                this.AddCard(i);
            }
        }
    }
    CreateInstance(c, pleaceId) {
        return new c(pleaceId);
    }
    AddCard(cardPleaceId) {
        const randomElement = cardType_1.allPlayableCards[Math.floor(Math.random() * cardType_1.allPlayableCards.length)];
        switch (randomElement) {
            case "Zombie":
                Board.cards[cardPleaceId] = this.CreateInstance(zombie_1.Zombie, cardPleaceId);
                break;
            case "Sword":
                Board.cards[cardPleaceId] = this.CreateInstance(sword_1.Sword, cardPleaceId);
                break;
            case "Staff":
                Board.cards[cardPleaceId] = this.CreateInstance(staff_1.Staff, cardPleaceId);
                break;
            case "Spike":
                Board.cards[cardPleaceId] = this.CreateInstance(spike_1.Spike, cardPleaceId);
                break;
            case "Skeleton":
                Board.cards[cardPleaceId] = this.CreateInstance(skeleton_1.Skeleton, cardPleaceId);
                break;
            case "GoodChest":
                Board.cards[cardPleaceId] = this.CreateInstance(goodChest_1.GoodChest, cardPleaceId);
                break;
            case "Coin":
                Board.cards[cardPleaceId] = this.CreateInstance(coin_1.Coin, cardPleaceId);
                break;
            case "BadChest":
                Board.cards[cardPleaceId] = this.CreateInstance(badChest_1.BadChest, cardPleaceId);
                break;
        }
    }
    static SetScore(addToScore) {
        Board.score += addToScore;
        document.getElementById('score').innerHTML = ("<h1>Score: " + Board.score.toString() + "</h1>");
    }
    CardClick(idCard) {
        if (this.IfHeroIsNeighbour(idCard)) {
            Board.cards[idCard].OnHeroMoveOn(Board.cards[this.heroPosition]);
            if (Board.cards[this.heroPosition].HP <= 0)
                this.EndGame();
            else if (Board.cards[idCard].IfHeroMoveOnContact(Board.cards[this.heroPosition]))
                this.MoveHeroInBoard(idCard);
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
        this.AddCard(cardToMove + switcher + switcher);
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
        this.AddCard(scecondCard);
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
        this.AddCard(cardToMove);
    }
    MoveCardPauseSign(cardToMove, destination) {
        this.MoveCardInBoard(cardToMove, destination);
        if ((cardToMove - destination) > 0)
            this.MoveCardInBoard(++cardToMove, cardToMove - 1);
        else if ((cardToMove - destination) < 0)
            this.MoveCardInBoard(--cardToMove, cardToMove + 1);
        this.AddCard(cardToMove);
    }
    RemoveCard() {
        throw new Error("Method not implemented.");
    }
    EndGame() {
        window.location.href = "index.html";
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
exports.allPlayableCards = ['Zombie', 'Skeleton', 'Staff', 'Sword', 'Coin'];


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
        throw new Error("Method not implemented.");
    }
    IfHeroMoveOnContact(hero) {
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
    }
    OnHeroMoveOn(hero) {
        if (hero.ifHoldItem) {
            hero.SubDurability(this.HP);
        }
        else {
            hero.HP = hero.HP - this.HP;
        }
    }
    IfHeroMoveOnContact(hero) {
        if (hero.ifHoldItem) {
            board_1.Board.cards[this.cardPleaceId] = new coin_1.Coin(this.cardPleaceId);
            return false;
        }
        else
            return true;
    }
    DealDamage() {
        throw new Error("Method not implemented.");
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
        this.itemPool = ["Coin", "Sword"];
        this.avatarURL = "./img/avatars/chest.png";
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
        super.Initialize(this);
    }
    OnHeroMoveOn(hero) { }
    IfHeroMoveOnContact(hero) { return false; }
    OnItemGet(itemDurability) {
        this.ifHoldItem = true;
        this.holdItem = itemDurability;
        super.DrawHoldItem(this.holdItem);
    }
    DealDamageToMonster() {
        throw new Error("Method not implemented.");
    }
    SubDurability(durLoose) {
        if (durLoose <= this.holdItem) {
            this.holdItem -= durLoose;
            if (durLoose == 0)
                this.ifHoldItem = false;
            super.DrawHoldItem(this.holdItem);
            return false;
        }
        else {
            let tmp = durLoose - this.holdItem;
            this.holdItem = 0;
            this.HP -= tmp;
            this.ifHoldItem = false;
            super.DrawHoldItem(this.holdItem);
            return true;
        }
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
        hero.OnItemGet(this.itemValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2dhbWUuc2Nzcz9iMzZkIiwid2VicGFjazovLy8uL3NyYy90cy9iYWRDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmRUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29pbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dvb2RDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaGVyby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9uZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NrZWxldG9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zcGlrZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc3RhZmYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3N3b3JkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy90cmFwLnRzIiwid2VicGFjazovLy8uL3NyYy90cy96b21iaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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Q0M7Ozs7Ozs7Ozs7Ozs7OztBQzFDRCx3RUFBOEI7QUFDOUIsaUZBQStDO0FBRS9DLE1BQWEsTUFBTyxTQUFRLGFBQUs7SUFNN0IsWUFBWSxZQUFtQjtRQUUzQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFQeEIsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixjQUFTLEdBQWMsb0JBQVMsQ0FBQyxNQUFNLENBQUM7UUFDeEMsY0FBUyxHQUFXLDBCQUEwQixDQUFDO1FBQy9DLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFLWCxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQVhELHdCQVdDIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy90cy9nYW1lLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lQm9hcmQge1xcbiAgd2lkdGg6IDk0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogZ3JlZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmNhcmQge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogMTBweCAxZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7XFxuICBmbGV4OiAwIDEgMjAlOyB9XFxuXFxuLmNhcmQ6bnRoLWNoaWxkKDNuKzEpIHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93OyB9XFxuXFxuLmNhcmQ6bnRoLWNoaWxkKDNuLTEpIHtcXG4gIGJhY2tncm91bmQ6IGxlbW9uY2hpZmZvbjsgfVxcblxcbi5jYXJkOm50aC1jaGlsZCgzbikge1xcbiAgYmFja2dyb3VuZDogcGFsZWdvbGRlbnJvZDsgfVxcblxcbi5jYXJkVG9wIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYXJkQm90dG9tIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5jYXJkTWlkZGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2FyZE5hbWUge1xcbiAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7IH1cXG5cXG5pbWcge1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICBtYXJnaW46IDA7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0NoZXN0fSBmcm9tICcuL2NoZXN0JztcclxuaW1wb3J0IHtjYXJkVHlwZSwgY2hlc3RUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgQmFkQ2hlc3QgZXh0ZW5kcyBDaGVzdCB7XHJcbiAgICBjaGVzdFR5cGU6IGNoZXN0VHlwZS5iYWRDaGVzdDtcclxuICAgIGl0ZW1Qb29sOiBzdHJpbmdbXSA9IFtcIlpvbWJpZVwiLFwiU2tlbGV0b25cIl07XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zYW1wbGUucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkRhcmsgQ2hlc3RcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0hlcm99IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7Wm9tYmllfSBmcm9tICcuL3pvbWJpZSc7XHJcbmltcG9ydCB7U3dvcmR9IGZyb20gJy4vc3dvcmQnO1xyXG5pbXBvcnQge1N0YWZmfSBmcm9tICcuL3N0YWZmJztcclxuaW1wb3J0IHtTcGlrZX0gZnJvbSAnLi9zcGlrZSc7XHJcbmltcG9ydCB7U2tlbGV0b259IGZyb20gJy4vc2tlbGV0b24nO1xyXG5pbXBvcnQge0dvb2RDaGVzdH0gZnJvbSAnLi9nb29kQ2hlc3QnO1xyXG5pbXBvcnQge0NvaW59IGZyb20gJy4vY29pbic7XHJcbmltcG9ydCB7QmFkQ2hlc3R9IGZyb20gJy4vYmFkQ2hlc3QnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBhbGxQbGF5YWJsZUNhcmRzfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb2FyZCB7XHJcblx0XHJcblx0c3RhdGljIGNhcmRzOiBDYXJkW10gPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XHJcblx0c3RhdGljIHNjb3JlOiBudW1iZXIgPSAwO1xyXG5cdGhlcm9Qb3NpdGlvbjpudW1iZXIgPSA0O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuQ3JlYXRlQm9hcmQoKTtcclxuXHR9XHJcblxyXG5cdENyZWF0ZUJvYXJkKCkgOiB2b2lkXHJcblx0e1x0XHRcclxuXHRcdGZvcihsZXQgaTpudW1iZXIgPSAwOyBpIDwgOTsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihpPT10aGlzLmhlcm9Qb3NpdGlvbilCb2FyZC5jYXJkc1tpXSA9IG5ldyBIZXJvKGkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHR0aGlzLkFkZENhcmQoaSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdENyZWF0ZUluc3RhbmNlPFQgZXh0ZW5kcyBDYXJkPihjOiBuZXcgKGNhcmRQbGVhY2VJZDpudW1iZXIpID0+IFQsIHBsZWFjZUlkOm51bWJlcik6IFQgXHJcblx0e1xyXG4gICAgXHRyZXR1cm4gbmV3IGMocGxlYWNlSWQpO1xyXG5cdH1cclxuXHJcblx0QWRkQ2FyZChjYXJkUGxlYWNlSWQ6bnVtYmVyKSA6IHZvaWRcclxuXHR7XHJcblx0XHRjb25zdCByYW5kb21FbGVtZW50OiBTdHJpbmcgID0gYWxsUGxheWFibGVDYXJkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbGxQbGF5YWJsZUNhcmRzLmxlbmd0aCldO1x0XHJcblx0XHRcdFx0XHRcclxuXHRcdHN3aXRjaCAocmFuZG9tRWxlbWVudCkgXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgXCJab21iaWVcIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gdGhpcy5DcmVhdGVJbnN0YW5jZShab21iaWUsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlN3b3JkXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IHRoaXMuQ3JlYXRlSW5zdGFuY2UoU3dvcmQsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlN0YWZmXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IHRoaXMuQ3JlYXRlSW5zdGFuY2UoU3RhZmYsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlNwaWtlXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IHRoaXMuQ3JlYXRlSW5zdGFuY2UoU3Bpa2UsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFxyXG5cdFx0XHRjYXNlIFwiU2tlbGV0b25cIjpcclxuXHRcdFx0XHRCb2FyZC5jYXJkc1tjYXJkUGxlYWNlSWRdID0gdGhpcy5DcmVhdGVJbnN0YW5jZShTa2VsZXRvbixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiR29vZENoZXN0XCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IHRoaXMuQ3JlYXRlSW5zdGFuY2UoR29vZENoZXN0LGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJDb2luXCI6XHJcblx0XHRcdFx0Qm9hcmQuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IHRoaXMuQ3JlYXRlSW5zdGFuY2UoQ29pbixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHJcblx0XHRcdGNhc2UgXCJCYWRDaGVzdFwiOlxyXG5cdFx0XHRcdEJvYXJkLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSB0aGlzLkNyZWF0ZUluc3RhbmNlKEJhZENoZXN0LGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcdFx0XHJcblx0XHR9XHRcdFx0XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgU2V0U2NvcmUoYWRkVG9TY29yZTogbnVtYmVyKTogdm9pZFxyXG5cdHtcclxuXHRcdEJvYXJkLnNjb3JlKz1hZGRUb1Njb3JlO1xyXG5cdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZScpIGFzIEhUTUxEaXZFbGVtZW50KS5pbm5lckhUTUwgPSAoXCI8aDE+U2NvcmU6IFwiKyBCb2FyZC5zY29yZS50b1N0cmluZygpICtcIjwvaDE+XCIpO1xyXG5cdH1cclxuXHJcblx0Q2FyZENsaWNrKGlkQ2FyZDpudW1iZXIpIDogdm9pZCAgLy9QYW1pxJl0YWogYWJ5IHcgb2Rwb3dpZWRuaW0gcG9yenlwYWRrdSBwb3ByYXdpYcSHIHBvenljasSZIEhlcm9cclxuXHR7XHJcblx0XHRpZih0aGlzLklmSGVyb0lzTmVpZ2hib3VyKGlkQ2FyZCkpXHJcblx0XHR7XHJcblx0XHRcdC8vd3l3b8WCeXdhbmllIGFrY2ppIGthcnR5XHJcblxyXG5cdFx0XHRCb2FyZC5jYXJkc1tpZENhcmRdLk9uSGVyb01vdmVPbihCb2FyZC5jYXJkc1t0aGlzLmhlcm9Qb3NpdGlvbl0gYXMgdW5rbm93biBhcyBIZXJvKTtcclxuXHRcdFx0aWYoQm9hcmQuY2FyZHNbdGhpcy5oZXJvUG9zaXRpb25dLkhQPD0wKXRoaXMuRW5kR2FtZSgpO1xyXG5cdFx0XHRlbHNlIGlmKEJvYXJkLmNhcmRzW2lkQ2FyZF0uSWZIZXJvTW92ZU9uQ29udGFjdChCb2FyZC5jYXJkc1t0aGlzLmhlcm9Qb3NpdGlvbl0gYXMgdW5rbm93biBhcyBIZXJvKSl0aGlzLk1vdmVIZXJvSW5Cb2FyZChpZENhcmQpO1x0XHRcclxuXHRcdFx0XHJcblx0XHRcdC8vVG8gcmFjemVqIHBvd2lubm8gYnnEhyB3IGZ1bmNramkgT25IZXJvTW92ZU9uIHcgcG9ka2xhc2FjaFxyXG5cdFx0XHQvKlxyXG5cdFx0XHRpZihCb2FyZC5jYXJkc1tpZENhcmRdLmNhcmRUeXBlID09IGNhcmRUeXBlLmNoZXN0IHx8IEJvYXJkLmNhcmRzW2lkQ2FyZF0uY2FyZFR5cGUgPT0gY2FyZFR5cGUudHJhcClcclxuXHRcdFx0e1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKEJvYXJkLmNhcmRzW2lkQ2FyZF0uY2FyZFR5cGUgPT0gY2FyZFR5cGUuZW5lbXkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZigoQm9hcmQuY2FyZHNbdGhpcy5oZXJvUG9zaXRpb25dIGFzIEhlcm8gKS5pZkhvbGRJdGVtKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdC8vT2RiaWVyYW5pZSBpdGVtb3dpIGR1ciwgYnJhayBwb3J1c3phbmlhLCByZXNhcCBwaWVuacSFemthXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvL09kasSZY2llIMW8eWNpYSwgcGFydXN6YW5pZSwgYnJhayBwaWVuacSFemthXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vVEVTVCBQb3J1c3phbmlhXHJcblx0XHRcdFx0XHR0aGlzLk1vdmVIZXJvSW5Cb2FyZChpZENhcmQpO1xyXG5cdFx0XHRcdFx0Ly9cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0Ki9cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdElmSGVyb0lzTmVpZ2hib3VyKGlkQ2FyZDpudW1iZXIpIDogYm9vbGVhblxyXG5cdHtcclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiAtIDEgPT0gaWRDYXJkIHx8IHRoaXMuaGVyb1Bvc2l0aW9uICsgMSA9PSBpZENhcmQpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gMyB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDUpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uIC0gMyA9PSBpZENhcmQgfHwgdGhpcy5oZXJvUG9zaXRpb24gKyAzID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAwIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDMgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNilcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gKyAxID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDUgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gOClcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gLSAxID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAwIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gMilcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gKyAzID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDcgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gOClcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gLSAzID09IGlkQ2FyZCkgcmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRNb3ZlQ2FyZEluQm9hcmQoY2FyZElkVG9Nb3ZlOm51bWJlciwgZGVzdGluYXRpb25JZDpudW1iZXIpOnZvaWRcclxuXHR7XHJcblx0XHRCb2FyZC5jYXJkc1tjYXJkSWRUb01vdmVdLk1vdmVDYXJkKGRlc3RpbmF0aW9uSWQpO1xyXG5cdFx0Qm9hcmQuY2FyZHNbZGVzdGluYXRpb25JZF09Qm9hcmQuY2FyZHNbY2FyZElkVG9Nb3ZlXTtcdFx0XHJcblx0fVxyXG5cclxuXHRNb3ZlSGVyb0luQm9hcmQoZGVzdGluYXRpb246bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0aWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgJiYgZGVzdGluYXRpb24gPT0gMil8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAxICYmIGRlc3RpbmF0aW9uID09IDApfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNCAmJiBkZXN0aW5hdGlvbiA9PSA1KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgJiYgZGVzdGluYXRpb24gPT0gMyl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3ICYmIGRlc3RpbmF0aW9uID09IDgpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNyAmJiBkZXN0aW5hdGlvbiA9PSA2KSl0aGlzLk1vdmVDYXJkUGF1c2VTaWduKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbik7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzICYmIGRlc3RpbmF0aW9uID09IDYpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gMyAmJiBkZXN0aW5hdGlvbiA9PSAwKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgJiYgZGVzdGluYXRpb24gPT0gMSl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0ICYmIGRlc3RpbmF0aW9uID09IDcpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNSAmJiBkZXN0aW5hdGlvbiA9PSAyKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDUgJiYgZGVzdGluYXRpb24gPT0gOCkpdGhpcy5Nb3ZlQ2FyZFJldmVyc2VQYXVzZVNpZ24odGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDEgJiYgZGVzdGluYXRpb24gPT0gNCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3ICYmIGRlc3RpbmF0aW9uID09IDQpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gMyAmJiBkZXN0aW5hdGlvbiA9PSA0KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDUgJiYgZGVzdGluYXRpb24gPT0gNCkpdGhpcy5Nb3ZlQ2FyZFNtYWxsTCh0aGlzLmhlcm9Qb3NpdGlvbik7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAwICYmIGRlc3RpbmF0aW9uID09IDEpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gMiAmJiBkZXN0aW5hdGlvbiA9PSAxKSl0aGlzLk1vdmVDYXJkQmlnTCh0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24sIDEpO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gNiAmJiBkZXN0aW5hdGlvbiA9PSA3KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDggJiYgZGVzdGluYXRpb24gPT0gNykpdGhpcy5Nb3ZlQ2FyZEJpZ0wodGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uLCAyKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDAgJiYgZGVzdGluYXRpb24gPT0gMyl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA2ICYmIGRlc3RpbmF0aW9uID09IDMpKXRoaXMuTW92ZUNhcmRCaWdMKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgMyk7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAyICYmIGRlc3RpbmF0aW9uID09IDUpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gOCAmJiBkZXN0aW5hdGlvbiA9PSA1KSl0aGlzLk1vdmVDYXJkQmlnTCh0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24sIDQpO1xyXG5cdFx0ZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcdFx0XHJcblxyXG4gICAgICAgIHRoaXMuaGVyb1Bvc2l0aW9uPWRlc3RpbmF0aW9uO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRCaWdMKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbklkOm51bWJlciwgc3dpdGNoTW9kZSA6IG51bWJlcikgOiB2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbklkKTtcclxuICAgICAgICBsZXQgc3dpdGNoZXI6IG51bWJlcjtcclxuXHRcdHN3aXRjaCAoc3dpdGNoTW9kZSkgXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRzd2l0Y2hlcj0zO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0c3dpdGNoZXI9LTM7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHN3aXRjaGVyPTE7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdHN3aXRjaGVyPS0xO1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZStzd2l0Y2hlcixjYXJkVG9Nb3ZlKTtcdFxyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZStzd2l0Y2hlcitzd2l0Y2hlcixjYXJkVG9Nb3ZlK3N3aXRjaGVyKTtcdFxyXG5cdFx0dGhpcy5BZGRDYXJkKGNhcmRUb01vdmUrc3dpdGNoZXIrc3dpdGNoZXIpO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRTbWFsbEwoY2FyZFRvTW92ZTpudW1iZXIsIGRlc3RpbmF0aW9uSWQ6bnVtYmVyID0gNCkgOiB2b2lkXHJcblx0e1xyXG5cdFx0bGV0IHNjZWNvbmRDYXJkOiBudW1iZXI7XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlLGRlc3RpbmF0aW9uSWQpO1xyXG5cdFx0c3dpdGNoIChjYXJkVG9Nb3ZlKSBcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHNjZWNvbmRDYXJkID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHNjZWNvbmRDYXJkID0gNjtcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDU6XHJcblx0XHRcdFx0c2NlY29uZENhcmQgPSAyO1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNzpcclxuXHRcdFx0XHRzY2Vjb25kQ2FyZCA9IDg7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcdFx0XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0XHR9XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChzY2Vjb25kQ2FyZCxjYXJkVG9Nb3ZlKTtcclxuXHRcdHRoaXMuQWRkQ2FyZChzY2Vjb25kQ2FyZCk7XHJcblx0fVx0XHJcblxyXG5cdE1vdmVDYXJkUmV2ZXJzZVBhdXNlU2lnbihjYXJkVG9Nb3ZlOm51bWJlciwgZGVzdGluYXRpb246bnVtYmVyKSA6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbik7XHJcblx0XHRpZigoY2FyZFRvTW92ZSAtIGRlc3RpbmF0aW9uKSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUgKyAzLGNhcmRUb01vdmUpO1xyXG5cdFx0XHRjYXJkVG9Nb3ZlID0gY2FyZFRvTW92ZSArIDM7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKChjYXJkVG9Nb3ZlIC0gZGVzdGluYXRpb24pIDwgMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSAtIDMsY2FyZFRvTW92ZSk7XHJcblx0XHRcdGNhcmRUb01vdmUgPSBjYXJkVG9Nb3ZlIC0gMztcclxuXHRcdH1cclxuXHRcdHRoaXMuQWRkQ2FyZChjYXJkVG9Nb3ZlKTtcclxuXHR9XHJcblxyXG5cdE1vdmVDYXJkUGF1c2VTaWduKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbjpudW1iZXIpIDogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUsZGVzdGluYXRpb24pO1xyXG5cdFx0aWYoKGNhcmRUb01vdmUgLSBkZXN0aW5hdGlvbikgPiAwKXRoaXMuTW92ZUNhcmRJbkJvYXJkKCsrY2FyZFRvTW92ZSxjYXJkVG9Nb3ZlIC0gMSk7XHJcblx0XHRlbHNlIGlmKChjYXJkVG9Nb3ZlIC0gZGVzdGluYXRpb24pIDwgMCl0aGlzLk1vdmVDYXJkSW5Cb2FyZCgtLWNhcmRUb01vdmUsY2FyZFRvTW92ZSArIDEpO1xyXG5cdFx0dGhpcy5BZGRDYXJkKGNhcmRUb01vdmUpO1xyXG5cdH1cclxuXHJcblx0UmVtb3ZlQ2FyZCgpIDogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblxyXG5cdEVuZEdhbWUoKSA6IHZvaWRcclxuXHR7XHJcblx0XHQvL1phcGlzeXdhbmllIHBvc3TEmXDDs3dcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCI7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtjYXJkVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcmQge1xyXG4gICAgYWJzdHJhY3QgY2FyZFR5cGUgOiBjYXJkVHlwZTtcclxuICAgIGFic3RyYWN0IGF2YXRhclVSTCA6IHN0cmluZztcclxuICAgIGFic3RyYWN0IEhQIDogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgbmFtZTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgaXRlbVRpbWVyOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IGhvbGRJdGVtOiBudW1iZXI7XHJcbiAgICBjYXJkUGxlYWNlSWQgOiBudW1iZXI7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhcmRQbGVhY2VJZCA9IGNhcmRQbGVhY2VJZDsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBJbml0aWFsaXplKG9iajpDYXJkKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdJdGVtVGltZXIob2JqLml0ZW1UaW1lcik7XHJcbiAgICAgICAgdGhpcy5EcmF3SFAob2JqLkhQKTtcclxuICAgICAgICB0aGlzLkRyYXdBdmF0YXIob2JqLmF2YXRhclVSTCk7XHJcbiAgICAgICAgdGhpcy5EcmF3SG9sZEl0ZW0ob2JqLmhvbGRJdGVtKTtcclxuICAgICAgICB0aGlzLkRyYXdOYW1lKG9iai5uYW1lKTtcclxuICAgICAgICB0aGlzLkRyYXdJdGVtVmFsdWUob2JqLml0ZW1WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgTW92ZUNhcmQoZGVzdGluYXRpb246IG51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXJkUGxlYWNlSWQgPSBkZXN0aW5hdGlvbjtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgU3dhcENhcmQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgT25IZXJvTW92ZU9uKGhlcm8gOiBIZXJvKSA6IHZvaWQ7IFxyXG5cclxuICAgIERyYXdBdmF0YXIoc3JjIDogc3RyaW5nID0gbnVsbCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdmF0YXJJTUdcIiArIHRoaXMuY2FyZFBsZWFjZUlkLnRvU3RyaW5nKCkpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYoc3JjIT1udWxsKWF2YXRhci5zcmMgPSBzcmM7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3TmFtZSh2YWx1ZTpzdHJpbmcgPSBudWxsKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciB0YXJnZXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRcIiArIHRoaXMuY2FyZFBsZWFjZUlkLnRvU3RyaW5nKCkpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkQm90dG9tXCIpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkTmFtZVwiKVswXTtcclxuICAgICAgICBpZih2YWx1ZSE9bnVsbCl0YXJnZXREaXYuaW5uZXJIVE1MID0gdmFsdWU7ICBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3SFAodmFsdWU6bnVtYmVyID0gbnVsbCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRUb3BcIiwgXCJsaWZlXCIsIHZhbHVlKTsgICAgICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIERyYXdJdGVtVGltZXIodmFsdWU6bnVtYmVyID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdOdW1iZXJJbkNsYXNzKFwiY2FyZFRvcFwiLCBcIml0ZW1UaW1lclwiLCB2YWx1ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdJdGVtVmFsdWUodmFsdWU6bnVtYmVyID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdOdW1iZXJJbkNsYXNzKFwiY2FyZEJvdHRvbVwiLCBcIml0ZW1WYWx1ZVwiLCB2YWx1ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdIb2xkSXRlbSh2YWx1ZTpudW1iZXIgPSBudWxsKTogdm9pZFxyXG4gICAge1xyXG5cclxuICAgICAgICB0aGlzLkRyYXdOdW1iZXJJbkNsYXNzKFwiY2FyZEJvdHRvbVwiLCBcImhvbGRJdGVtXCIsIHZhbHVlKTsgXHJcbiAgICB9XHJcblxyXG4gICAgRHJhd051bWJlckluQ2xhc3MoY2xhc3NDU1M6c3RyaW5nLCBjaGlsZENsYXNzQ1NTOnN0cmluZywgdmFsdWU6bnVtYmVyKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB2YXIgdGFyZ2V0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkXCIgKyB0aGlzLmNhcmRQbGVhY2VJZC50b1N0cmluZygpKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzQ1NTKVswXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNoaWxkQ2xhc3NDU1MpWzBdO1xyXG4gICAgICAgIGlmKHZhbHVlIT1udWxsKXRhcmdldERpdi5pbm5lckhUTUwgPSAodmFsdWUpLnRvU3RyaW5nKCk7IFxyXG4gICAgICAgIGVsc2UgdGFyZ2V0RGl2LmlubmVySFRNTCA9IFwiIFwiO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gY2FyZFR5cGUge1xyXG4gIGhlcm8sXHJcbiAgZW5lbXksXHJcbiAgaXRlbSxcclxuICB0cmFwLFxyXG4gIGNoZXN0LFxyXG4gIG1vbmV5XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGVuZW15VHlwZSB7XHJcbiAgem9tYmllLFxyXG4gIHNrZWxldG9uXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGl0ZW1UeXBlIHtcclxuXHRzd29yZCxcclxuXHRzdGFmLFxyXG5cdGRhZ2dlclxyXG59XHJcblxyXG5leHBvcnQgZW51bSB0cmFwVHlwZSB7XHJcblx0c3Bpa2UsXHJcblx0Ym9tYlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBjaGVzdFR5cGUge1xyXG5cdGdvb2RDaGVzdCxcclxuXHRiYWRDaGVzdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBtb25leVR5cGUge1xyXG5cdGNvaW4sXHJcblx0cnVieVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWxsUGxheWFibGVDYXJkcyA6IFN0cmluZ1tdID0gWydab21iaWUnLCAnU2tlbGV0b24nLCAnU3RhZmYnLCAnU3dvcmQnLCAnQ29pbiddOyBcclxuLy9leHBvcnQgY29uc3QgYWxsUGxheWFibGVDYXJkcyA6IFN0cmluZ1tdID0gWydab21iaWUnLCAnU3dvcmQnLCAnU3RhZmYnLCAnU3Bpa2UnLCAnU2tlbGV0b24nLCAnR29vZENoZXN0JywgJ0NvaW4nLCAnQmFkQ2hlc3QnXTsgXHJcblxyXG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoZXN0IGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGU9IGNhcmRUeXBlLmNoZXN0O1xyXG4gICAgSFA6bnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYWJzdHJhY3QgY2hlc3RUeXBlOiBjaGVzdFR5cGU7XHJcbiAgICBhYnN0cmFjdCBpdGVtUG9vbDogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyBcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oKTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cdFxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIE9wZW5DaGVzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgUmFuZG9tSXRlbSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlSXRlbSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7TW9uZXl9IGZyb20gJy4vbW9uZXknO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBtb25leVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvaW4gZXh0ZW5kcyBNb25leSB7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IDU7XHJcbiAgICBtb25leVR5cGU6IG1vbmV5VHlwZS5jb2luOyBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL2NvaW4ucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNvaW5cIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XHJcbmltcG9ydCB7IENvaW4gfSBmcm9tICcuL2NvaW4nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVuZW15IGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGUgPSBjYXJkVHlwZS5lbmVteTtcclxuICAgIGFic3RyYWN0IGVuZW15VHlwZTogZW5lbXlUeXBlO1xyXG4gICAgYWJzdHJhY3QgSFA6IG51bWJlcjtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiB2b2lkIFxyXG4gICAge1xyXG4gICAgICAgIGlmKGhlcm8uaWZIb2xkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vT2RiaWVyYW5pZSBpdGVtb3dpIGR1ciwgYnJhayBwb3J1c3phbmlhLCByZXNwIHBpZW5pxIV6a2EgICBcclxuICAgICAgICAgICAgaGVyby5TdWJEdXJhYmlsaXR5KHRoaXMuSFApOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9PZGrEmWNpZSDFvHljaWEsIHBhcnVzemFuaWUsIGJyYWsgcGllbmnEhXprYVxyXG4gICAgICAgICAgICBoZXJvLkhQID0gaGVyby5IUCAtIHRoaXMuSFA7XHJcbiAgICAgICAgfVxyXG4gICAgfVx0XHJcblxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIGlmKGhlcm8uaWZIb2xkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJvYXJkLmNhcmRzW3RoaXMuY2FyZFBsZWFjZUlkXSA9IG5ldyBDb2luKHRoaXMuY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gICAgICAgICBcclxuICAgICAgICBlbHNlIHJldHVybiB0cnVlOyAgICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICBcclxuICAgIERlYWxEYW1hZ2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFN1YkhQKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnO1xuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi9ib2FyZCc7XG5cbmxldCBib2FyZCA6IEJvYXJkID0gbmV3IEJvYXJkKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDApO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soMSk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljaygyKTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDMpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNCk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg1KTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDYpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkN1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNyk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg4KTt9KTtcbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR29vZENoZXN0IGV4dGVuZHMgQ2hlc3Qge1xyXG4gICAgY2hlc3RUeXBlOiBjaGVzdFR5cGUuZ29vZENoZXN0O1xyXG4gICAgaXRlbVBvb2w6IHN0cmluZ1tdID0gW1wiQ29pblwiLCBcIlN3b3JkXCJdO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvY2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNoZXN0XCJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiS25pZ2h0XCI7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9rbmlnaHQucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMTA7XHJcbiAgICByZWFkb25seSBtYXhIUDpudW1iZXIgPSB0aGlzLkhQO1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsOyBcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLmhlcm87XHJcbiAgICBob2xkSXRlbSA6IG51bWJlciA9IDA7XHJcbiAgICBpZkhvbGRJdGVtIDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyBcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiB2b2lkIHt9XHRcclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiB7cmV0dXJuIGZhbHNlO31cclxuXHJcbiAgICBPbkl0ZW1HZXQoaXRlbUR1cmFiaWxpdHk6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlmSG9sZEl0ZW0gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaG9sZEl0ZW0gPSBpdGVtRHVyYWJpbGl0eTtcclxuICAgICAgICBzdXBlci5EcmF3SG9sZEl0ZW0odGhpcy5ob2xkSXRlbSk7XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBEZWFsRGFtYWdlVG9Nb25zdGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBTdWJEdXJhYmlsaXR5KGR1ckxvb3NlOm51bWJlcik6IGJvb2xlYW4gLy9EdXIgdG8gbGlmZSBkbGEgcHJ6ZWRtaW90w7N3IHp3cmFjYSBjenkgcG9zdGHEhyBkb3N0YcWCYSBvYnJhxbxlbmlhXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZHVyTG9vc2U8PXRoaXMuaG9sZEl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmhvbGRJdGVtIC09IGR1ckxvb3NlO1xyXG4gICAgICAgICAgICBpZihkdXJMb29zZSA9PSAwKSB0aGlzLmlmSG9sZEl0ZW0gPSBmYWxzZTtcclxuICAgICAgICAgICAgc3VwZXIuRHJhd0hvbGRJdGVtKHRoaXMuaG9sZEl0ZW0pOyAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdG1wOm51bWJlciA9IGR1ckxvb3NlIC0gdGhpcy5ob2xkSXRlbTtcclxuICAgICAgICAgICAgdGhpcy5ob2xkSXRlbSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuSFAtPXRtcDtcclxuICAgICAgICAgICAgdGhpcy5pZkhvbGRJdGVtID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHN1cGVyLkRyYXdIb2xkSXRlbSh0aGlzLmhvbGRJdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSAgICAgICAgICAgXHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBpdGVtVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLml0ZW07XHJcbiAgICBhYnN0cmFjdCBpdGVtVHlwZTogaXRlbVR5cGU7XHJcbiAgICBhYnN0cmFjdCBtb25ldGFyeVZhbHVlIDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgSFA6bnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYWJzdHJhY3QgaXRlbVZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQge1xyXG4gICAgICAgIGhlcm8uT25JdGVtR2V0KHRoaXMuaXRlbVZhbHVlKTtcclxuICAgIH1cdFxyXG4gICAgXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBtb25leVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL2JvYXJkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNb25leSBleHRlbmRzIENhcmQge1xyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUubW9uZXk7XHJcbiAgICBhYnN0cmFjdCBtb25leVR5cGU6IG1vbmV5VHlwZTsgXHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIEhQOiBudW1iZXIgPSBudWxsO1xyXG4gICAgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbigpOiB2b2lkIFxyXG4gICAge1xyXG4gICAgICAgIEJvYXJkLlNldFNjb3JlKHRoaXMuaXRlbVZhbHVlKTtcclxuICAgIH1cdFxyXG5cclxuICAgIE1vbmV5Q2hhaW4oKVxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBBZGRUb1B1cnNlKClcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tICcuL2VuZW15JztcclxuaW1wb3J0IHtjYXJkVHlwZSwgZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTa2VsZXRvbiBleHRlbmRzIEVuZW15IHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU2tlbGV0b25cIjsgXHJcbiAgICBlbmVteVR5cGU6IGVuZW15VHlwZSA9IGVuZW15VHlwZS5za2VsZXRvbjtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NrZWxldG9uLnBuZ1wiO1xyXG4gICAgSFA6IG51bWJlciA9IDU7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTsgICAgICAgXHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge1RyYXB9IGZyb20gJy4vdHJhcCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIHRyYXBUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlrZSBleHRlbmRzIFRyYXAge1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsOyAgXHJcbiAgICByZWFkb25seSBoYXZlVGltZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRyYXBUeXBlOiB0cmFwVHlwZSA9IHRyYXBUeXBlLnNwaWtlO1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgdGltZXI6IG51bWJlcjsgICBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NhbXBsZS5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSA0O1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTcGlrZVwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVx0XHJcbiAgICBcclxuICAgIERlYWxEYW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi9pdGVtJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgaXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBTdGFmZiBleHRlbmRzIEl0ZW17XHJcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUuc3RhZjtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDg7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zdGFmZi5wbmdcIjtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gNjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU3RhZmZcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblx0XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi9pdGVtJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgaXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBTd29yZCBleHRlbmRzIEl0ZW0ge1xyXG4gICAgaXRlbVR5cGU6IGl0ZW1UeXBlLnN3b3JkO1xyXG4gICAgbW9uZXRhcnlWYWx1ZTogbnVtYmVyID0gMztcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3N3b3JkLnBuZ1wiO1xyXG4gICAgaXRlbVZhbHVlOiBudW1iZXIgPSA1O1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTd29yZFwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCB0cmFwVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRyYXAgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLnRyYXA7XHJcbiAgICBhYnN0cmFjdCB0cmFwVHlwZTogdHJhcFR5cGU7XHJcbiAgICBhYnN0cmFjdCBhY3RpdmU6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCBoYXZlVGltZXI6IGJvb2xlYW47XHJcbiAgICBhYnN0cmFjdCB0aW1lcjogbnVtYmVyOyBcclxuICAgIHJlYWRvbmx5IGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHJlYWRvbmx5IGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHRcclxuICAgIFxyXG4gICAgYWJzdHJhY3QgRGVhbERhbWFnZSgpOiB2b2lkO1xyXG5cclxuICAgIFNldEFjdGl2ZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgU2V0VGltZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uRW5kdGltZXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtFbmVteX0gZnJvbSAnLi9lbmVteSc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGVuZW15VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgWm9tYmllIGV4dGVuZHMgRW5lbXkge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJab21iaWVcIjsgXHJcbiAgICBlbmVteVR5cGU6IGVuZW15VHlwZSA9IGVuZW15VHlwZS56b21iaWU7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy96b21iaWUucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMzsgICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyAgICAgICBcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9