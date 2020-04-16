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
        this.cards = [null, null, null, null, null, null, null, null, null];
        this.heroPosition = 4;
        this.CreateBoard();
    }
    CreateBoard() {
        for (let i = 0; i < 9; i++) {
            if (i == this.heroPosition)
                this.cards[i] = new hero_1.Hero(i);
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
                this.cards[cardPleaceId] = this.CreateInstance(zombie_1.Zombie, cardPleaceId);
                break;
            case "Sword":
                this.cards[cardPleaceId] = this.CreateInstance(sword_1.Sword, cardPleaceId);
                break;
            case "Staff":
                this.cards[cardPleaceId] = this.CreateInstance(staff_1.Staff, cardPleaceId);
                break;
            case "Spike":
                this.cards[cardPleaceId] = this.CreateInstance(spike_1.Spike, cardPleaceId);
                break;
            case "Skeleton":
                this.cards[cardPleaceId] = this.CreateInstance(skeleton_1.Skeleton, cardPleaceId);
                break;
            case "GoodChest":
                this.cards[cardPleaceId] = this.CreateInstance(goodChest_1.GoodChest, cardPleaceId);
                break;
            case "Coin":
                this.cards[cardPleaceId] = this.CreateInstance(coin_1.Coin, cardPleaceId);
                break;
            case "BadChest":
                this.cards[cardPleaceId] = this.CreateInstance(badChest_1.BadChest, cardPleaceId);
                break;
        }
    }
    CardClick(idCard) {
        if (this.IfHeroIsNeighbour(idCard)) {
            this.cards[idCard].OnHeroMoveOn(this.cards[this.heroPosition]);
            if (this.cards[this.heroPosition].HP <= 0)
                this.EndGame();
            else if (this.cards[idCard].IfHeroMoveOnContact(this.cards[this.heroPosition]))
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
        this.cards[cardIdToMove].MoveCard(destinationId);
        this.cards[destinationId] = this.cards[cardIdToMove];
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
    SetScore() {
        throw new Error("Method not implemented.");
    }
    EndGame() {
        window.location.href = "index.html";
    }
}
exports.Board = Board;


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
exports.allPlayableCards = ['Zombie', 'Skeleton'];


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
        this.avatarURL = "./img/avatars/sample.png";
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
            return false;
        }
        else {
            hero.HP = hero.HP - this.HP;
            return true;
        }
    }
    IfHeroMoveOnContact(hero) {
        if (hero.ifHoldItem)
            return false;
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
        this.ifHoldItem = false;
        super.Initialize(this);
    }
    OnHeroMoveOn(hero) { }
    IfHeroMoveOnContact(hero) { return false; }
    OnItemGet(itemDurability) {
        this.holdItem = itemDurability;
        super.DrawHoldItem(this.holdItem);
    }
    DealDamageToMonster() {
        throw new Error("Method not implemented.");
    }
    SubDurability() {
        throw new Error("Method not implemented.");
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
    OnHeroMoveOn() {
        throw new Error("Method not implemented.");
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
class Money extends card_1.Card {
    constructor(cardPleaceId) {
        super(cardPleaceId);
        this.cardType = cardType_1.cardType.money;
        this.itemTimer = null;
        this.HP = null;
        this.holdItem = null;
    }
    OnHeroMoveOn() {
        throw new Error("Method not implemented.");
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
        this.avatarURL = "./img/avatars/sample.png";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvZ2FtZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2dhbWUuc2Nzcz9iMzZkIiwid2VicGFjazovLy8uL3NyYy90cy9iYWRDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2NhcmRUeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9jaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvY29pbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZW5lbXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dvb2RDaGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaGVyby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaXRlbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbW9uZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NrZWxldG9uLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zcGlrZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc3RhZmYudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3N3b3JkLnRzIiwid2VicGFjazovLy8uL3NyYy90cy90cmFwLnRzIiwid2VicGFjazovLy8uL3NyYy90cy96b21iaWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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QUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQzthQUNwVixJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJQUFJLENBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2pPLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLElBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNuSixJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksV0FBVyxJ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O0FBdkNELG9CQXVDQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNELHdFQUE4QjtBQUM5QixpRkFBK0M7QUFFL0MsTUFBYSxNQUFPLFNBQVEsYUFBSztJQU03QixZQUFZLFlBQW1CO1FBRTNCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQVB4QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGNBQVMsR0FBYyxvQkFBUyxDQUFDLE1BQU0sQ0FBQztRQUN4QyxjQUFTLEdBQVcsMEJBQTBCLENBQUM7UUFDL0MsT0FBRSxHQUFXLENBQUMsQ0FBQztRQUtYLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNKO0FBWEQsd0JBV0MiLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3RzL2dhbWUudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVCb2FyZCB7XFxuICB3aWR0aDogOTQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uY2FyZCB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDFlbTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcXG4gIGZsZXg6IDAgMSAyMCU7IH1cXG5cXG4uY2FyZDpudGgtY2hpbGQoM24rMSkge1xcbiAgYmFja2dyb3VuZDogbGlnaHR5ZWxsb3c7IH1cXG5cXG4uY2FyZDpudGgtY2hpbGQoM24tMSkge1xcbiAgYmFja2dyb3VuZDogbGVtb25jaGlmZm9uOyB9XFxuXFxuLmNhcmQ6bnRoLWNoaWxkKDNuKSB7XFxuICBiYWNrZ3JvdW5kOiBwYWxlZ29sZGVucm9kOyB9XFxuXFxuLmNhcmRUb3Age1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNhcmRCb3R0b20ge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmNhcmRNaWRkbGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5jYXJkTmFtZSB7XFxuICBiYWNrZ3JvdW5kOiBza3libHVlO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDsgfVxcblxcbmltZyB7XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIG1hcmdpbjogMDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Q2hlc3R9IGZyb20gJy4vY2hlc3QnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBjaGVzdFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBCYWRDaGVzdCBleHRlbmRzIENoZXN0IHtcclxuICAgIGNoZXN0VHlwZTogY2hlc3RUeXBlLmJhZENoZXN0O1xyXG4gICAgaXRlbVBvb2w6IHN0cmluZ1tdID0gW1wiWm9tYmllXCIsXCJTa2VsZXRvblwiXTtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NhbXBsZS5wbmdcIjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiRGFyayBDaGVzdFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVx0XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7SGVyb30gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHtab21iaWV9IGZyb20gJy4vem9tYmllJztcclxuaW1wb3J0IHtTd29yZH0gZnJvbSAnLi9zd29yZCc7XHJcbmltcG9ydCB7U3RhZmZ9IGZyb20gJy4vc3RhZmYnO1xyXG5pbXBvcnQge1NwaWtlfSBmcm9tICcuL3NwaWtlJztcclxuaW1wb3J0IHtTa2VsZXRvbn0gZnJvbSAnLi9za2VsZXRvbic7XHJcbmltcG9ydCB7R29vZENoZXN0fSBmcm9tICcuL2dvb2RDaGVzdCc7XHJcbmltcG9ydCB7Q29pbn0gZnJvbSAnLi9jb2luJztcclxuaW1wb3J0IHtCYWRDaGVzdH0gZnJvbSAnLi9iYWRDaGVzdCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGFsbFBsYXlhYmxlQ2FyZHN9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuXHRcclxuXHRjYXJkczogQ2FyZFtdID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdO1xyXG5cdGhlcm9Qb3NpdGlvbjpudW1iZXIgPSA0O1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuQ3JlYXRlQm9hcmQoKTtcclxuXHR9XHJcblxyXG5cdENyZWF0ZUJvYXJkKCkgOiB2b2lkXHJcblx0e1x0XHRcclxuXHRcdGZvcihsZXQgaTpudW1iZXIgPSAwOyBpIDwgOTsgaSsrKVxyXG5cdFx0e1xyXG5cdFx0XHRpZihpPT10aGlzLmhlcm9Qb3NpdGlvbil0aGlzLmNhcmRzW2ldID0gbmV3IEhlcm8oaSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHRoaXMuQWRkQ2FyZChpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Q3JlYXRlSW5zdGFuY2U8VCBleHRlbmRzIENhcmQ+KGM6IG5ldyAoY2FyZFBsZWFjZUlkOm51bWJlcikgPT4gVCwgcGxlYWNlSWQ6bnVtYmVyKTogVCBcclxuXHR7XHJcbiAgICBcdHJldHVybiBuZXcgYyhwbGVhY2VJZCk7XHJcblx0fVxyXG5cclxuXHRBZGRDYXJkKGNhcmRQbGVhY2VJZDpudW1iZXIpIDogdm9pZFxyXG5cdHtcclxuXHRcdGNvbnN0IHJhbmRvbUVsZW1lbnQ6IFN0cmluZyAgPSBhbGxQbGF5YWJsZUNhcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFsbFBsYXlhYmxlQ2FyZHMubGVuZ3RoKV07XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0c3dpdGNoIChyYW5kb21FbGVtZW50KSBcclxuXHRcdHtcclxuXHRcdFx0Y2FzZSBcIlpvbWJpZVwiOlxyXG5cdFx0XHRcdHRoaXMuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IHRoaXMuQ3JlYXRlSW5zdGFuY2UoWm9tYmllLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJTd29yZFwiOlxyXG5cdFx0XHRcdHRoaXMuY2FyZHNbY2FyZFBsZWFjZUlkXSA9IHRoaXMuQ3JlYXRlSW5zdGFuY2UoU3dvcmQsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIlN0YWZmXCI6XHJcblx0XHRcdFx0dGhpcy5jYXJkc1tjYXJkUGxlYWNlSWRdID0gdGhpcy5DcmVhdGVJbnN0YW5jZShTdGFmZixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiU3Bpa2VcIjpcclxuXHRcdFx0XHR0aGlzLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSB0aGlzLkNyZWF0ZUluc3RhbmNlKFNwaWtlLGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcclxuXHRcdFx0Y2FzZSBcIlNrZWxldG9uXCI6XHJcblx0XHRcdFx0dGhpcy5jYXJkc1tjYXJkUGxlYWNlSWRdID0gdGhpcy5DcmVhdGVJbnN0YW5jZShTa2VsZXRvbixjYXJkUGxlYWNlSWQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiR29vZENoZXN0XCI6XHJcblx0XHRcdFx0dGhpcy5jYXJkc1tjYXJkUGxlYWNlSWRdID0gdGhpcy5DcmVhdGVJbnN0YW5jZShHb29kQ2hlc3QsY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIkNvaW5cIjpcclxuXHRcdFx0XHR0aGlzLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSB0aGlzLkNyZWF0ZUluc3RhbmNlKENvaW4sY2FyZFBsZWFjZUlkKTtcclxuXHRcdFx0XHRicmVhaztcdFx0XHRcdFxyXG5cdFx0XHRjYXNlIFwiQmFkQ2hlc3RcIjpcclxuXHRcdFx0XHR0aGlzLmNhcmRzW2NhcmRQbGVhY2VJZF0gPSB0aGlzLkNyZWF0ZUluc3RhbmNlKEJhZENoZXN0LGNhcmRQbGVhY2VJZCk7XHJcblx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcdFx0XHJcblx0XHR9XHRcdFx0XHJcblx0fVxyXG5cclxuXHRDYXJkQ2xpY2soaWRDYXJkOm51bWJlcikgOiB2b2lkICAvL1BhbWnEmXRhaiBhYnkgdyBvZHBvd2llZG5pbSBwb3J6eXBhZGt1IHBvcHJhd2lhxIcgcG96eWNqxJkgSGVyb1xyXG5cdHtcclxuXHRcdGlmKHRoaXMuSWZIZXJvSXNOZWlnaGJvdXIoaWRDYXJkKSlcclxuXHRcdHtcclxuXHRcdFx0Ly93eXdvxYJ5d2FuaWUgYWtjamkga2FydHlcclxuXHJcblx0XHRcdHRoaXMuY2FyZHNbaWRDYXJkXS5Pbkhlcm9Nb3ZlT24odGhpcy5jYXJkc1t0aGlzLmhlcm9Qb3NpdGlvbl0gYXMgdW5rbm93biBhcyBIZXJvKVxyXG5cdFx0XHRpZih0aGlzLmNhcmRzW3RoaXMuaGVyb1Bvc2l0aW9uXS5IUDw9MCl0aGlzLkVuZEdhbWUoKTtcclxuXHRcdFx0ZWxzZSBpZih0aGlzLmNhcmRzW2lkQ2FyZF0uSWZIZXJvTW92ZU9uQ29udGFjdCh0aGlzLmNhcmRzW3RoaXMuaGVyb1Bvc2l0aW9uXSBhcyB1bmtub3duIGFzIEhlcm8pKSB0aGlzLk1vdmVIZXJvSW5Cb2FyZChpZENhcmQpO1xyXG5cclxuXHRcdFx0Ly9UbyByYWN6ZWogcG93aW5ubyBiecSHIHcgZnVuY2tqaSBPbkhlcm9Nb3ZlT24gdyBwb2RrbGFzYWNoXHJcblx0XHRcdC8qXHJcblx0XHRcdGlmKHRoaXMuY2FyZHNbaWRDYXJkXS5jYXJkVHlwZSA9PSBjYXJkVHlwZS5jaGVzdCB8fCB0aGlzLmNhcmRzW2lkQ2FyZF0uY2FyZFR5cGUgPT0gY2FyZFR5cGUudHJhcClcclxuXHRcdFx0e1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKHRoaXMuY2FyZHNbaWRDYXJkXS5jYXJkVHlwZSA9PSBjYXJkVHlwZS5lbmVteSlcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGlmKCh0aGlzLmNhcmRzW3RoaXMuaGVyb1Bvc2l0aW9uXSBhcyBIZXJvICkuaWZIb2xkSXRlbSlcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQvL09kYmllcmFuaWUgaXRlbW93aSBkdXIsIGJyYWsgcG9ydXN6YW5pYSwgcmVzYXAgcGllbmnEhXprYVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0Ly9PZGrEmWNpZSDFvHljaWEsIHBhcnVzemFuaWUsIGJyYWsgcGllbmnEhXprYVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL1RFU1QgUG9ydXN6YW5pYVxyXG5cdFx0XHRcdFx0dGhpcy5Nb3ZlSGVyb0luQm9hcmQoaWRDYXJkKTtcclxuXHRcdFx0XHRcdC8vXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdCovXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRJZkhlcm9Jc05laWdoYm91cihpZENhcmQ6bnVtYmVyKSA6IGJvb2xlYW5cclxuXHR7XHJcblx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiA9PSAxIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNylcclxuXHRcdHtcclxuXHRcdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gLSAxID09IGlkQ2FyZCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiArIDEgPT0gaWRDYXJkKSByZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uID09IDMgfHwgdGhpcy5oZXJvUG9zaXRpb24gPT0gNCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA1KVxyXG5cdFx0e1xyXG5cdFx0XHRpZih0aGlzLmhlcm9Qb3NpdGlvbiAtIDMgPT0gaWRDYXJkIHx8IHRoaXMuaGVyb1Bvc2l0aW9uICsgMyA9PSBpZENhcmQpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gMCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSAzIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDYpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uICsgMSA9PSBpZENhcmQpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gMiB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA1IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDgpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uIC0gMSA9PSBpZENhcmQpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gMCB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSAxIHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDIpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uICsgMyA9PSBpZENhcmQpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5oZXJvUG9zaXRpb24gPT0gNiB8fCB0aGlzLmhlcm9Qb3NpdGlvbiA9PSA3IHx8IHRoaXMuaGVyb1Bvc2l0aW9uID09IDgpXHJcblx0XHR7XHJcblx0XHRcdGlmKHRoaXMuaGVyb1Bvc2l0aW9uIC0gMyA9PSBpZENhcmQpIHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0TW92ZUNhcmRJbkJvYXJkKGNhcmRJZFRvTW92ZTpudW1iZXIsIGRlc3RpbmF0aW9uSWQ6bnVtYmVyKTp2b2lkXHJcblx0e1xyXG5cdFx0dGhpcy5jYXJkc1tjYXJkSWRUb01vdmVdLk1vdmVDYXJkKGRlc3RpbmF0aW9uSWQpO1xyXG5cdFx0dGhpcy5jYXJkc1tkZXN0aW5hdGlvbklkXT10aGlzLmNhcmRzW2NhcmRJZFRvTW92ZV07XHRcdFxyXG5cdH1cclxuXHJcblx0TW92ZUhlcm9JbkJvYXJkKGRlc3RpbmF0aW9uOm51bWJlcik6dm9pZFxyXG5cdHtcclxuXHRcdGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAxICYmIGRlc3RpbmF0aW9uID09IDIpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gMSAmJiBkZXN0aW5hdGlvbiA9PSAwKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDQgJiYgZGVzdGluYXRpb24gPT0gNSl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0ICYmIGRlc3RpbmF0aW9uID09IDMpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNyAmJiBkZXN0aW5hdGlvbiA9PSA4KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDcgJiYgZGVzdGluYXRpb24gPT0gNikpdGhpcy5Nb3ZlQ2FyZFBhdXNlU2lnbih0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24pO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMyAmJiBkZXN0aW5hdGlvbiA9PSA2KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDMgJiYgZGVzdGluYXRpb24gPT0gMCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA0ICYmIGRlc3RpbmF0aW9uID09IDEpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNCAmJiBkZXN0aW5hdGlvbiA9PSA3KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDUgJiYgZGVzdGluYXRpb24gPT0gMil8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA1ICYmIGRlc3RpbmF0aW9uID09IDgpKXRoaXMuTW92ZUNhcmRSZXZlcnNlUGF1c2VTaWduKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbik7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAxICYmIGRlc3RpbmF0aW9uID09IDQpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNyAmJiBkZXN0aW5hdGlvbiA9PSA0KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDMgJiYgZGVzdGluYXRpb24gPT0gNCl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA1ICYmIGRlc3RpbmF0aW9uID09IDQpKXRoaXMuTW92ZUNhcmRTbWFsbEwodGhpcy5oZXJvUG9zaXRpb24pO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMCAmJiBkZXN0aW5hdGlvbiA9PSAxKXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDIgJiYgZGVzdGluYXRpb24gPT0gMSkpdGhpcy5Nb3ZlQ2FyZEJpZ0wodGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uLCAxKTtcclxuXHRcdGVsc2UgaWYoKHRoaXMuaGVyb1Bvc2l0aW9uID09IDYgJiYgZGVzdGluYXRpb24gPT0gNyl8fCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSA4ICYmIGRlc3RpbmF0aW9uID09IDcpKXRoaXMuTW92ZUNhcmRCaWdMKHRoaXMuaGVyb1Bvc2l0aW9uLCBkZXN0aW5hdGlvbiwgMik7XHJcblx0XHRlbHNlIGlmKCh0aGlzLmhlcm9Qb3NpdGlvbiA9PSAwICYmIGRlc3RpbmF0aW9uID09IDMpfHwodGhpcy5oZXJvUG9zaXRpb24gPT0gNiAmJiBkZXN0aW5hdGlvbiA9PSAzKSl0aGlzLk1vdmVDYXJkQmlnTCh0aGlzLmhlcm9Qb3NpdGlvbiwgZGVzdGluYXRpb24sIDMpO1xyXG5cdFx0ZWxzZSBpZigodGhpcy5oZXJvUG9zaXRpb24gPT0gMiAmJiBkZXN0aW5hdGlvbiA9PSA1KXx8KHRoaXMuaGVyb1Bvc2l0aW9uID09IDggJiYgZGVzdGluYXRpb24gPT0gNSkpdGhpcy5Nb3ZlQ2FyZEJpZ0wodGhpcy5oZXJvUG9zaXRpb24sIGRlc3RpbmF0aW9uLCA0KTtcclxuXHRcdGVsc2UgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHRcdFxyXG5cclxuICAgICAgICB0aGlzLmhlcm9Qb3NpdGlvbj1kZXN0aW5hdGlvbjtcclxuXHR9XHJcblxyXG5cdE1vdmVDYXJkQmlnTChjYXJkVG9Nb3ZlOm51bWJlciwgZGVzdGluYXRpb25JZDpudW1iZXIsIHN3aXRjaE1vZGUgOiBudW1iZXIpIDogdm9pZFxyXG5cdHtcclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUsZGVzdGluYXRpb25JZCk7XHJcbiAgICAgICAgbGV0IHN3aXRjaGVyOiBudW1iZXI7XHJcblx0XHRzd2l0Y2ggKHN3aXRjaE1vZGUpIFxyXG5cdFx0e1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0c3dpdGNoZXI9MztcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHN3aXRjaGVyPS0zO1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRzd2l0Y2hlcj0xO1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgNDpcclxuXHRcdFx0XHRzd2l0Y2hlcj0tMTtcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1x0XHRcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUrc3dpdGNoZXIsY2FyZFRvTW92ZSk7XHRcclxuXHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUrc3dpdGNoZXIrc3dpdGNoZXIsY2FyZFRvTW92ZStzd2l0Y2hlcik7XHRcclxuXHRcdHRoaXMuQWRkQ2FyZChjYXJkVG9Nb3ZlK3N3aXRjaGVyK3N3aXRjaGVyKTtcclxuXHR9XHJcblxyXG5cdE1vdmVDYXJkU21hbGxMKGNhcmRUb01vdmU6bnVtYmVyLCBkZXN0aW5hdGlvbklkOm51bWJlciA9IDQpIDogdm9pZFxyXG5cdHtcclxuXHRcdGxldCBzY2Vjb25kQ2FyZDogbnVtYmVyO1xyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoY2FyZFRvTW92ZSxkZXN0aW5hdGlvbklkKTtcclxuXHRcdHN3aXRjaCAoY2FyZFRvTW92ZSkgXHJcblx0XHR7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRzY2Vjb25kQ2FyZCA9IDA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRzY2Vjb25kQ2FyZCA9IDY7XHRcdFx0XHRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSA1OlxyXG5cdFx0XHRcdHNjZWNvbmRDYXJkID0gMjtcdFx0XHRcdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDc6XHJcblx0XHRcdFx0c2NlY29uZENhcmQgPSA4O1x0XHRcdFx0XHJcblx0XHRcdFx0YnJlYWs7XHRcdFxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5Nb3ZlQ2FyZEluQm9hcmQoc2NlY29uZENhcmQsY2FyZFRvTW92ZSk7XHJcblx0XHR0aGlzLkFkZENhcmQoc2NlY29uZENhcmQpO1xyXG5cdH1cdFxyXG5cclxuXHRNb3ZlQ2FyZFJldmVyc2VQYXVzZVNpZ24oY2FyZFRvTW92ZTpudW1iZXIsIGRlc3RpbmF0aW9uOm51bWJlcikgOiB2b2lkXHJcblx0e1xyXG4gICAgICAgIHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUsZGVzdGluYXRpb24pO1xyXG5cdFx0aWYoKGNhcmRUb01vdmUgLSBkZXN0aW5hdGlvbikgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlICsgMyxjYXJkVG9Nb3ZlKTtcclxuXHRcdFx0Y2FyZFRvTW92ZSA9IGNhcmRUb01vdmUgKyAzO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZigoY2FyZFRvTW92ZSAtIGRlc3RpbmF0aW9uKSA8IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuTW92ZUNhcmRJbkJvYXJkKGNhcmRUb01vdmUgLSAzLGNhcmRUb01vdmUpO1xyXG5cdFx0XHRjYXJkVG9Nb3ZlID0gY2FyZFRvTW92ZSAtIDM7XHJcblx0XHR9XHJcblx0XHR0aGlzLkFkZENhcmQoY2FyZFRvTW92ZSk7XHJcblx0fVxyXG5cclxuXHRNb3ZlQ2FyZFBhdXNlU2lnbihjYXJkVG9Nb3ZlOm51bWJlciwgZGVzdGluYXRpb246bnVtYmVyKSA6IHZvaWRcclxuXHR7XHJcblx0XHR0aGlzLk1vdmVDYXJkSW5Cb2FyZChjYXJkVG9Nb3ZlLGRlc3RpbmF0aW9uKTtcclxuXHRcdGlmKChjYXJkVG9Nb3ZlIC0gZGVzdGluYXRpb24pID4gMCl0aGlzLk1vdmVDYXJkSW5Cb2FyZCgrK2NhcmRUb01vdmUsY2FyZFRvTW92ZSAtIDEpO1xyXG5cdFx0ZWxzZSBpZigoY2FyZFRvTW92ZSAtIGRlc3RpbmF0aW9uKSA8IDApdGhpcy5Nb3ZlQ2FyZEluQm9hcmQoLS1jYXJkVG9Nb3ZlLGNhcmRUb01vdmUgKyAxKTtcclxuXHRcdHRoaXMuQWRkQ2FyZChjYXJkVG9Nb3ZlKTtcclxuXHR9XHJcblxyXG5cdFJlbW92ZUNhcmQoKSA6IHZvaWRcclxuXHR7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0fVxyXG5cclxuXHRTZXRTY29yZSgpIDogdm9pZFxyXG5cdHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblxyXG5cdEVuZEdhbWUoKSA6IHZvaWRcclxuXHR7XHJcblx0XHQvL1phcGlzeXdhbmllIHBvc3TEmXDDs3dcclxuXHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJpbmRleC5odG1sXCI7XHJcblx0fVxyXG59IiwiaW1wb3J0IHtjYXJkVHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENhcmQge1xyXG4gICAgYWJzdHJhY3QgY2FyZFR5cGUgOiBjYXJkVHlwZTtcclxuICAgIGFic3RyYWN0IGF2YXRhclVSTCA6IHN0cmluZztcclxuICAgIGFic3RyYWN0IEhQIDogbnVtYmVyO1xyXG4gICAgYWJzdHJhY3QgbmFtZTogc3RyaW5nO1xyXG4gICAgYWJzdHJhY3QgaXRlbVRpbWVyOiBudW1iZXI7XHJcbiAgICBhYnN0cmFjdCBpdGVtVmFsdWU6IG51bWJlcjtcclxuICAgIGFic3RyYWN0IGhvbGRJdGVtOiBudW1iZXI7XHJcbiAgICBjYXJkUGxlYWNlSWQgOiBudW1iZXI7XHJcbiBcclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNhcmRQbGVhY2VJZCA9IGNhcmRQbGVhY2VJZDsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBJbml0aWFsaXplKG9iajpDYXJkKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdJdGVtVGltZXIob2JqLml0ZW1UaW1lcik7XHJcbiAgICAgICAgdGhpcy5EcmF3SFAob2JqLkhQKTtcclxuICAgICAgICB0aGlzLkRyYXdBdmF0YXIob2JqLmF2YXRhclVSTCk7XHJcbiAgICAgICAgdGhpcy5EcmF3SG9sZEl0ZW0ob2JqLmhvbGRJdGVtKTtcclxuICAgICAgICB0aGlzLkRyYXdOYW1lKG9iai5uYW1lKTtcclxuICAgICAgICB0aGlzLkRyYXdJdGVtVmFsdWUob2JqLml0ZW1WYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgTW92ZUNhcmQoZGVzdGluYXRpb246IG51bWJlcikgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jYXJkUGxlYWNlSWQgPSBkZXN0aW5hdGlvbjtcclxuICAgICAgICB0aGlzLkluaXRpYWxpemUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgU3dhcENhcmQoKSA6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW47XHJcblxyXG4gICAgYWJzdHJhY3QgT25IZXJvTW92ZU9uKGhlcm8gOiBIZXJvKSA6IHZvaWQ7IFxyXG5cclxuICAgIERyYXdBdmF0YXIoc3JjIDogc3RyaW5nID0gbnVsbCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdmF0YXJJTUdcIiArIHRoaXMuY2FyZFBsZWFjZUlkLnRvU3RyaW5nKCkpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICAgICAgaWYoc3JjIT1udWxsKWF2YXRhci5zcmMgPSBzcmM7ICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3TmFtZSh2YWx1ZTpzdHJpbmcgPSBudWxsKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciB0YXJnZXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRcIiArIHRoaXMuY2FyZFBsZWFjZUlkLnRvU3RyaW5nKCkpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkQm90dG9tXCIpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjYXJkTmFtZVwiKVswXTtcclxuICAgICAgICBpZih2YWx1ZSE9bnVsbCl0YXJnZXREaXYuaW5uZXJIVE1MID0gdmFsdWU7ICBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3SFAodmFsdWU6bnVtYmVyID0gbnVsbCkgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5EcmF3TnVtYmVySW5DbGFzcyhcImNhcmRUb3BcIiwgXCJsaWZlXCIsIHZhbHVlKTsgICAgICAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIERyYXdJdGVtVGltZXIodmFsdWU6bnVtYmVyID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdOdW1iZXJJbkNsYXNzKFwiY2FyZFRvcFwiLCBcIml0ZW1UaW1lclwiLCB2YWx1ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdJdGVtVmFsdWUodmFsdWU6bnVtYmVyID0gbnVsbCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLkRyYXdOdW1iZXJJbkNsYXNzKFwiY2FyZEJvdHRvbVwiLCBcIml0ZW1WYWx1ZVwiLCB2YWx1ZSk7IFxyXG4gICAgfVxyXG5cclxuICAgIERyYXdIb2xkSXRlbSh2YWx1ZTpudW1iZXIgPSBudWxsKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuRHJhd051bWJlckluQ2xhc3MoXCJjYXJkQm90dG9tXCIsIFwiaG9sZEl0ZW1cIiwgdmFsdWUpOyBcclxuICAgIH1cclxuXHJcbiAgICBEcmF3TnVtYmVySW5DbGFzcyhjbGFzc0NTUzpzdHJpbmcsIGNoaWxkQ2xhc3NDU1M6c3RyaW5nLCB2YWx1ZTpudW1iZXIpIDogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHZhciB0YXJnZXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRcIiArIHRoaXMuY2FyZFBsZWFjZUlkLnRvU3RyaW5nKCkpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NDU1MpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2hpbGRDbGFzc0NTUylbMF07XHJcbiAgICAgICAgaWYodmFsdWUhPW51bGwpdGFyZ2V0RGl2LmlubmVySFRNTCA9ICh2YWx1ZSkudG9TdHJpbmcoKTsgXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBjYXJkVHlwZSB7XHJcbiAgaGVybyxcclxuICBlbmVteSxcclxuICBpdGVtLFxyXG4gIHRyYXAsXHJcbiAgY2hlc3QsXHJcbiAgbW9uZXlcclxufVxyXG5cclxuZXhwb3J0IGVudW0gZW5lbXlUeXBlIHtcclxuICB6b21iaWUsXHJcbiAgc2tlbGV0b25cclxufVxyXG5cclxuZXhwb3J0IGVudW0gaXRlbVR5cGUge1xyXG5cdHN3b3JkLFxyXG5cdHN0YWYsXHJcblx0ZGFnZ2VyXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIHRyYXBUeXBlIHtcclxuXHRzcGlrZSxcclxuXHRib21iXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIGNoZXN0VHlwZSB7XHJcblx0Z29vZENoZXN0LFxyXG5cdGJhZENoZXN0XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIG1vbmV5VHlwZSB7XHJcblx0Y29pbixcclxuXHRydWJ5XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhbGxQbGF5YWJsZUNhcmRzIDogU3RyaW5nW10gPSBbJ1pvbWJpZScsICdTa2VsZXRvbiddOyBcclxuLy9leHBvcnQgY29uc3QgYWxsUGxheWFibGVDYXJkcyA6IFN0cmluZ1tdID0gWydab21iaWUnLCAnU3dvcmQnLCAnU3RhZmYnLCAnU3Bpa2UnLCAnU2tlbGV0b24nLCAnR29vZENoZXN0JywgJ0NvaW4nLCAnQmFkQ2hlc3QnXTsgXHJcblxyXG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENoZXN0IGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGU9IGNhcmRUeXBlLmNoZXN0O1xyXG4gICAgSFA6bnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG4gICAgYWJzdHJhY3QgY2hlc3RUeXBlOiBjaGVzdFR5cGU7XHJcbiAgICBhYnN0cmFjdCBpdGVtUG9vbDogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpOyBcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oKTogdm9pZCBcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cdFxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIE9wZW5DaGVzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgUmFuZG9tSXRlbSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgQ3JlYXRlSXRlbSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7TW9uZXl9IGZyb20gJy4vbW9uZXknO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBtb25leVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvaW4gZXh0ZW5kcyBNb25leSB7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IDU7XHJcbiAgICBtb25leVR5cGU6IG1vbmV5VHlwZS5jb2luOyBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NhbXBsZS5wbmdcIjtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiQ29pblwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH1cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBlbmVteVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteSBleHRlbmRzIENhcmQge1xyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUuZW5lbXk7XHJcbiAgICBhYnN0cmFjdCBlbmVteVR5cGU6IGVuZW15VHlwZTtcclxuICAgIGl0ZW1UaW1lcjogbnVtYmVyID0gbnVsbDtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuICAgIGhvbGRJdGVtOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkhlcm9Nb3ZlT24oaGVybyA6IEhlcm8pOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIGlmKGhlcm8uaWZIb2xkSXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vT2RiaWVyYW5pZSBpdGVtb3dpIGR1ciwgYnJhayBwb3J1c3phbmlhLCByZXNwIHBpZW5pxIV6a2FcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9PZGrEmWNpZSDFvHljaWEsIHBhcnVzemFuaWUsIGJyYWsgcGllbmnEhXprYVxyXG4gICAgICAgICAgICBoZXJvLkhQID0gaGVyby5IUCAtIHRoaXMuSFA7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cdFxyXG5cclxuICAgIElmSGVyb01vdmVPbkNvbnRhY3QoaGVybyA6IEhlcm8pIDogYm9vbGVhbiBcclxuICAgIHtcclxuICAgICAgICBpZihoZXJvLmlmSG9sZEl0ZW0pIHJldHVybiBmYWxzZTtcclxuICAgICAgICBlbHNlIHJldHVybiB0cnVlOyAgICAgICAgXHJcbiAgICB9ICAgIFxyXG4gICBcclxuICAgIERlYWxEYW1hZ2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFN1YkhQKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi4vc2Nzcy9nYW1lLnNjc3MnO1xuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi9ib2FyZCc7XG5cbmxldCBib2FyZCA6IEJvYXJkID0gbmV3IEJvYXJkKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDApO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkMVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soMSk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQyXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljaygyKTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDMpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkNFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNCk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ1XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg1KTt9KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZDZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7Ym9hcmQuQ2FyZENsaWNrKDYpO30pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkN1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtib2FyZC5DYXJkQ2xpY2soNyk7fSk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQ4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe2JvYXJkLkNhcmRDbGljayg4KTt9KTtcbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtDaGVzdH0gZnJvbSAnLi9jaGVzdCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGNoZXN0VHlwZX0gZnJvbSAnLi9jYXJkVHlwZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR29vZENoZXN0IGV4dGVuZHMgQ2hlc3Qge1xyXG4gICAgY2hlc3RUeXBlOiBjaGVzdFR5cGUuZ29vZENoZXN0O1xyXG4gICAgaXRlbVBvb2w6IHN0cmluZ1tdID0gW1wiQ29pblwiLCBcIlN3b3JkXCJdO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvY2hlc3QucG5nXCI7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIkNoZXN0XCJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICBcclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm8gZXh0ZW5kcyBDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiS25pZ2h0XCI7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9rbmlnaHQucG5nXCI7XHJcbiAgICBIUDogbnVtYmVyID0gMTA7XHJcbiAgICByZWFkb25seSBtYXhIUDpudW1iZXIgPSB0aGlzLkhQO1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaXRlbVZhbHVlOiBudW1iZXIgPSBudWxsOyBcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLmhlcm87XHJcbiAgICBob2xkSXRlbSA6IG51bWJlcjtcclxuICAgIGlmSG9sZEl0ZW0gOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7IFxyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbihoZXJvIDogSGVybyk6IHZvaWQge31cdFxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIHtyZXR1cm4gZmFsc2U7fVxyXG5cclxuICAgIE9uSXRlbUdldChpdGVtRHVyYWJpbGl0eTogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaG9sZEl0ZW0gPSBpdGVtRHVyYWJpbGl0eTtcclxuICAgICAgICBzdXBlci5EcmF3SG9sZEl0ZW0odGhpcy5ob2xkSXRlbSk7XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBEZWFsRGFtYWdlVG9Nb25zdGVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBTdWJEdXJhYmlsaXR5KCk6IHZvaWQgLy9EdXIgdG8gbGlmZSBkbGEgcHJ6ZWRtaW90w7N3XHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGl0ZW1UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSXRlbSBleHRlbmRzIENhcmQge1xyXG4gICAgY2FyZFR5cGU6IGNhcmRUeXBlID0gY2FyZFR5cGUuaXRlbTtcclxuICAgIGFic3RyYWN0IGl0ZW1UeXBlOiBpdGVtVHlwZTtcclxuICAgIGFic3RyYWN0IG1vbmV0YXJ5VmFsdWUgOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBIUDpudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgcmVhZG9ubHkgaG9sZEl0ZW06IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIE9uSGVyb01vdmVPbigpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cdFxyXG4gICAgSWZIZXJvTW92ZU9uQ29udGFjdChoZXJvIDogSGVybykgOiBib29sZWFuIFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgbW9uZXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9uZXkgZXh0ZW5kcyBDYXJkIHtcclxuICAgIGNhcmRUeXBlOiBjYXJkVHlwZSA9IGNhcmRUeXBlLm1vbmV5O1xyXG4gICAgYWJzdHJhY3QgbW9uZXlUeXBlOiBtb25leVR5cGU7IFxyXG4gICAgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsO1xyXG4gICAgSFA6IG51bWJlciA9IG51bGw7XHJcbiAgICBob2xkSXRlbTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKCk6IHZvaWQgXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHRcclxuXHJcbiAgICBNb25leUNoYWluKClcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQWRkVG9QdXJzZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0VuZW15fSBmcm9tICcuL2VuZW15JztcclxuaW1wb3J0IHtjYXJkVHlwZSwgZW5lbXlUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTa2VsZXRvbiBleHRlbmRzIEVuZW15IHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU2tlbGV0b25cIjsgXHJcbiAgICBlbmVteVR5cGU6IGVuZW15VHlwZSA9IGVuZW15VHlwZS5za2VsZXRvbjtcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NrZWxldG9uLnBuZ1wiO1xyXG4gICAgSFA6IG51bWJlciA9IDU7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTsgICAgICAgXHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge1RyYXB9IGZyb20gJy4vdHJhcCc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIHRyYXBUeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlrZSBleHRlbmRzIFRyYXAge1xyXG4gICAgcmVhZG9ubHkgaXRlbVRpbWVyOiBudW1iZXIgPSBudWxsOyAgXHJcbiAgICByZWFkb25seSBoYXZlVGltZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRyYXBUeXBlOiB0cmFwVHlwZSA9IHRyYXBUeXBlLnNwaWtlO1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgdGltZXI6IG51bWJlcjsgICBcclxuICAgIGF2YXRhclVSTDogc3RyaW5nID0gXCIuL2ltZy9hdmF0YXJzL3NhbXBsZS5wbmdcIjtcclxuICAgIEhQOiBudW1iZXIgPSA0O1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJTcGlrZVwiOyBcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVx0XHJcbiAgICBcclxuICAgIERlYWxEYW1hZ2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7SXRlbX0gZnJvbSAnLi9pdGVtJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgaXRlbVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBTdGFmZiBleHRlbmRzIEl0ZW17XHJcbiAgICBpdGVtVHlwZTogaXRlbVR5cGUuc3RhZjtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDg7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zYW1wbGUucG5nXCI7XHJcbiAgICBpdGVtVmFsdWU6IG51bWJlciA9IDY7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlN0YWZmXCI7IFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTtcclxuICAgICAgICBzdXBlci5Jbml0aWFsaXplKHRoaXMpOyAgIFxyXG4gICAgfVxyXG5cdFxyXG59IiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xyXG5pbXBvcnQge0l0ZW19IGZyb20gJy4vaXRlbSc7XHJcbmltcG9ydCB7Y2FyZFR5cGUsIGl0ZW1UeXBlfSBmcm9tICcuL2NhcmRUeXBlJztcclxuXHJcbmV4cG9ydCAgY2xhc3MgU3dvcmQgZXh0ZW5kcyBJdGVtIHtcclxuICAgIGl0ZW1UeXBlOiBpdGVtVHlwZS5zd29yZDtcclxuICAgIG1vbmV0YXJ5VmFsdWU6IG51bWJlciA9IDM7XHJcbiAgICBhdmF0YXJVUkw6IHN0cmluZyA9IFwiLi9pbWcvYXZhdGFycy9zd29yZC5wbmdcIjtcclxuICAgIGl0ZW1WYWx1ZTogbnVtYmVyID0gNTtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiU3dvcmRcIjsgXHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FyZFBsZWFjZUlkOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihjYXJkUGxlYWNlSWQpO1xyXG4gICAgICAgIHN1cGVyLkluaXRpYWxpemUodGhpcyk7ICAgXHJcbiAgICB9XHRcclxufSIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcclxuaW1wb3J0IHtjYXJkVHlwZSwgdHJhcFR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmFwIGV4dGVuZHMgQ2FyZCB7XHJcbiAgICBjYXJkVHlwZTogY2FyZFR5cGUgPSBjYXJkVHlwZS50cmFwO1xyXG4gICAgYWJzdHJhY3QgdHJhcFR5cGU6IHRyYXBUeXBlO1xyXG4gICAgYWJzdHJhY3QgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgaGF2ZVRpbWVyOiBib29sZWFuO1xyXG4gICAgYWJzdHJhY3QgdGltZXI6IG51bWJlcjsgXHJcbiAgICByZWFkb25seSBpdGVtVmFsdWU6IG51bWJlciA9IG51bGw7XHJcbiAgICByZWFkb25seSBob2xkSXRlbTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJkUGxlYWNlSWQ6bnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKGNhcmRQbGVhY2VJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgT25IZXJvTW92ZU9uKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVx0XHJcbiAgICBcclxuICAgIGFic3RyYWN0IERlYWxEYW1hZ2UoKTogdm9pZDtcclxuXHJcbiAgICBTZXRBY3RpdmUoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIFNldFRpbWVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBPbkVuZHRpbWVyKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBJZkhlcm9Nb3ZlT25Db250YWN0KGhlcm8gOiBIZXJvKSA6IGJvb2xlYW4gXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XHJcbmltcG9ydCB7RW5lbXl9IGZyb20gJy4vZW5lbXknO1xyXG5pbXBvcnQge2NhcmRUeXBlLCBlbmVteVR5cGV9IGZyb20gJy4vY2FyZFR5cGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFpvbWJpZSBleHRlbmRzIEVuZW15IHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiWm9tYmllXCI7IFxyXG4gICAgZW5lbXlUeXBlOiBlbmVteVR5cGUgPSBlbmVteVR5cGUuem9tYmllO1xyXG4gICAgYXZhdGFyVVJMOiBzdHJpbmcgPSBcIi4vaW1nL2F2YXRhcnMvem9tYmllLnBuZ1wiO1xyXG4gICAgSFA6IG51bWJlciA9IDM7ICAgIFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhcmRQbGVhY2VJZDpudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoY2FyZFBsZWFjZUlkKTsgICAgICAgXHJcbiAgICAgICAgc3VwZXIuSW5pdGlhbGl6ZSh0aGlzKTsgICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==