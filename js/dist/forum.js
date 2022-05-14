module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/es-cookie/src/es-cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/es-cookie/src/es-cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function stringifyAttribute(name, value) {
    if (!value) {
        return '';
    }
    var stringified = '; ' + name;
    if (value === true) {
        return stringified; // boolean attributes shouldn't have a value
    }
    return stringified + '=' + value;
}
function stringifyAttributes(attributes) {
    if (typeof attributes.expires === 'number') {
        var expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
        attributes.expires = expires;
    }
    return stringifyAttribute('Expires', attributes.expires ? attributes.expires.toUTCString() : '')
        + stringifyAttribute('Domain', attributes.domain)
        + stringifyAttribute('Path', attributes.path)
        + stringifyAttribute('Secure', attributes.secure)
        + stringifyAttribute('SameSite', attributes.sameSite);
}
function encode(name, value, attributes) {
    return encodeURIComponent(name)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent) // allowed special characters
        .replace(/\(/g, '%28').replace(/\)/g, '%29') // replace opening and closing parens
        + '=' + encodeURIComponent(value)
        // allowed special characters
        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)
        + stringifyAttributes(attributes);
}
exports.encode = encode;
function parse(cookieString) {
    var result = {};
    var cookies = cookieString ? cookieString.split('; ') : [];
    var rdecode = /(%[\dA-F]{2})+/gi;
    for (var i = 0; i < cookies.length; i++) {
        var parts = cookies[i].split('=');
        var cookie = parts.slice(1).join('=');
        if (cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
        }
        try {
            var name_1 = parts[0].replace(rdecode, decodeURIComponent);
            result[name_1] = cookie.replace(rdecode, decodeURIComponent);
        }
        catch (e) {
            // ignore cookies with invalid name/value encoding
        }
    }
    return result;
}
exports.parse = parse;
function getAll() {
    return parse(document.cookie);
}
exports.getAll = getAll;
function get(name) {
    return getAll()[name];
}
exports.get = get;
function set(name, value, attributes) {
    document.cookie = encode(name, value, __assign({ path: '/' }, attributes));
}
exports.set = set;
function remove(name, attributes) {
    set(name, '', __assign(__assign({}, attributes), { expires: -1 }));
}
exports.remove = remove;


/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es-cookie */ "./node_modules/es-cookie/src/es-cookie.js");
/* harmony import */ var es_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionList */ "flarum/components/DiscussionList");
/* harmony import */ var flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/DiscussionPage */ "flarum/components/DiscussionPage");
/* harmony import */ var flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_listTemplate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/listTemplate */ "./src/forum/utils/listTemplate.js");
/* harmony import */ var _utils_gridTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/gridTemplate */ "./src/forum/utils/gridTemplate.js");









function modifyLayout() {
  if (es_cookie__WEBPACK_IMPORTED_MODULE_0__["get"]('grid') === 'true') {
    es_cookie__WEBPACK_IMPORTED_MODULE_0__["set"]('grid', 'false');
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'view', function () {
      var state = this.attrs.state;
      return Object(_utils_listTemplate__WEBPACK_IMPORTED_MODULE_6__["default"])(state);
    });
  } else {
    es_cookie__WEBPACK_IMPORTED_MODULE_0__["set"]('grid', 'true');
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'view', function () {
      var state = this.attrs.state;

      if (app.current.matches(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4___default.a)) {
        return Object(_utils_listTemplate__WEBPACK_IMPORTED_MODULE_6__["default"])(state);
      } else {
        return Object(_utils_gridTemplate__WEBPACK_IMPORTED_MODULE_7__["default"])(state);
      }
    });
  }
}

app.initializers.add('block-cat/list-grid-layouts', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_components_DiscussionList__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'view', function (original) {
    var state = this.attrs.state;

    if (es_cookie__WEBPACK_IMPORTED_MODULE_0__["get"]('grid') === 'true') {
      if (app.current.matches(flarum_components_DiscussionPage__WEBPACK_IMPORTED_MODULE_4___default.a)) {
        return Object(_utils_listTemplate__WEBPACK_IMPORTED_MODULE_6__["default"])(state);
      } else return Object(_utils_gridTemplate__WEBPACK_IMPORTED_MODULE_7__["default"])(state);
    } else {
      return original();
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_5___default.a.prototype, 'actionItems', function (items) {
    items.add('gridLayout', flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      title: es_cookie__WEBPACK_IMPORTED_MODULE_0__["get"]('grid') === 'true' ? app.translator.trans('list-grid-layouts.forum.index.list_tooltip') : app.translator.trans('list-grid-layouts.forum.index.grid_tooltip'),
      icon: es_cookie__WEBPACK_IMPORTED_MODULE_0__["get"]('grid') === 'true' ? 'fas fa-list-ul' : 'fas fa-th-large',
      className: 'Button Button--icon',
      onclick: modifyLayout.bind(this)
    }));
  });
});

/***/ }),

/***/ "./src/forum/utils/craftBadges.js":
/*!****************************************!*\
  !*** ./src/forum/utils/craftBadges.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return craftBadges; });
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_0__);

function craftBadges(badges) {
  if (badges.length) {
    return [m('.cardBadges', [badges.map(function (badge) {
      return [m('span.cardBadge.Badge.Badge--' + badge.attrs.type, {
        oncreate: function oncreate(vnode) {
          $(vnode.dom).tooltip({
            placement: 'right'
          });
        },
        title: badge.attrs.label[0]
      }, [flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_0___default()(badge.attrs.icon)])];
    })])];
  }
}
;

/***/ }),

/***/ "./src/forum/utils/getFirstImage.js":
/*!******************************************!*\
  !*** ./src/forum/utils/getFirstImage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getFirstImage; });
function getFirstImage(post) {
  var regex = /<img(?!.*?class="emoji").*?src=[\'"](.*?)[\'"].*?>/;
  var defaultImg = 'https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-autumnal-fall-big-tree-park-background-cartoon-design-backgroundfallbig-treefallen-leavespark-image_53954.jpg';

  if (post) {
    var src = regex.exec(post.contentHtml());

    if (src) {
      if (src[1].includes('imgur')) {
        var address_prefix = src[1].substring(0, src[1].lastIndexOf("."));
        var address_sufix = src[1].substring(src[1].lastIndexOf("."));
        return address_prefix + 'm' + address_sufix;
      } else {
        return src[1];
      }
    } else {
      return defaultImg;
    }
  }

  return defaultImg;
}
;

/***/ }),

/***/ "./src/forum/utils/gridTemplate.js":
/*!*****************************************!*\
  !*** ./src/forum/utils/gridTemplate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gridTemplate; });
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/DiscussionControls */ "flarum/utils/DiscussionControls");
/* harmony import */ var flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Link */ "flarum/components/Link");
/* harmony import */ var flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _craftBadges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./craftBadges */ "./src/forum/utils/craftBadges.js");
/* harmony import */ var _getFirstImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getFirstImage */ "./src/forum/utils/getFirstImage.js");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/utils/humanTime */ "flarum/utils/humanTime");
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_12__);














function previewText(text, lenght) {
  if (lenght === void 0) {
    lenght = 150;
  }

  var preview;

  if (text.length) {
    preview = m("div", {
      className: "previewPost"
    }, Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_12__["truncate"])(text, lenght));
  } else {
    preview = '';
  }

  return preview;
}

function gridTemplate(state) {
  var _this = this;

  var loading;

  if (state.isLoading()) {
    loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0___default.a.component();
  } else {
    if (state.moreResults) {
      loading = flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
        className: 'Button',
        onclick: state.loadMore.bind(state)
      }, app.translator.trans('core.forum.discussion_list.load_more_button'));
    }
  }

  if (state.empty()) {
    var text = app.translator.trans('core.forum.discussion_list.empty_text');
    return m("div", {
      className: "DiscussionList"
    }, flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      text: text
    }));
  }

  return m("div", {
    className: 'DiscussionList' + (state.isSearchResults() ? ' DiscussionList--searchResults' : '')
  }, m("div", {
    "class": "DiscussionList-discussions flexCard"
  }, state.discussions.map(function (discussion, i) {
    return m("div", {
      key: discussion.id(),
      "data-id": discussion.id(),
      className: 'CardsListItem smallCard' + (discussion.isHidden() ? ' DiscussionListItem--hidden' : '')
    }, flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.controls(discussion, _this).toArray().length ? flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      icon: 'fas fa-ellipsis-v',
      className: 'DiscussionListItem-controls',
      buttonClassName: 'Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right'
    }, flarum_utils_DiscussionControls__WEBPACK_IMPORTED_MODULE_3___default.a.controls(discussion, _this).toArray()) : '', m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: app.route.discussion(discussion, 0),
      className: "cardLink"
    }, Object(_craftBadges__WEBPACK_IMPORTED_MODULE_6__["default"])(discussion.badges().toArray()), m("img", {
      className: "previewCardImg",
      alt: discussion.title(),
      src: Object(_getFirstImage__WEBPACK_IMPORTED_MODULE_7__["default"])(discussion.firstPost())
    }), m("div", {
      className: "cardTitle"
    }, m("h2", null, discussion.title())), previewText(discussion.firstPost().contentPlain()), m("div", {
      className: "cardSpacer"
    }, m("div", {
      className: "cardFooter"
    }, m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: discussion.user() ? app.route.user(discussion.user()) : '#'
    }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_8___default()(discussion.user(), {
      className: 'Avatar--mini'
    })), m("div", {
      className: "actor"
    }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_9___default()(discussion.user()), m("div", {
      className: "date"
    }, flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_10___default()(discussion.createdAt()))), m(flarum_components_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: app.route.discussion(discussion, discussion.lastPostNumber()),
      "class": "replies",
      title: discussion.replyCount() > 0 ? app.translator.trans('list-grid-layouts.forum.index.last_reply') + flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_10___default()(discussion.lastPostedAt()) : ''
    }, m("div", {
      className: "commentIcon"
    }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_11___default()('far fa-comment-alt')), discussion.replyCount())))));
  })), m("div", {
    className: "DiscussionList-loadMore"
  }, loading));
}
;

/***/ }),

/***/ "./src/forum/utils/listTemplate.js":
/*!*****************************************!*\
  !*** ./src/forum/utils/listTemplate.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listTemplate; });
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Placeholder */ "flarum/components/Placeholder");
/* harmony import */ var flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionListItem */ "flarum/components/DiscussionListItem");
/* harmony import */ var flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3__);




function listTemplate(state) {
  var params = state.getParams();
  var loading;

  if (state.isLoading()) {
    loading = flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_0___default.a.component();
  } else {
    if (state.moreResults) {
      loading = flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
        className: 'Button',
        onclick: state.loadMore.bind(state)
      }, app.translator.trans('core.forum.discussion_list.load_more_button'));
    }
  }

  if (state.empty()) {
    var text = app.translator.trans('core.forum.discussion_list.empty_text');
    return m("div", {
      className: "DiscussionList"
    }, flarum_components_Placeholder__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      text: text
    }));
  }

  return m("div", {
    className: 'DiscussionList' + (state.isSearchResults() ? ' DiscussionList--searchResults' : '')
  }, m("ul", {
    className: "DiscussionList-discussions"
  }, state.discussions.map(function (discussion) {
    return m("li", {
      key: discussion.id(),
      "data-id": discussion.id()
    }, flarum_components_DiscussionListItem__WEBPACK_IMPORTED_MODULE_3___default.a.component({
      discussion: discussion,
      params: params
    }));
  })), m("div", {
    className: "DiscussionList-loadMore"
  }, loading));
}
;

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/DiscussionList":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionList']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionList'];

/***/ }),

/***/ "flarum/components/DiscussionListItem":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionListItem']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionListItem'];

/***/ }),

/***/ "flarum/components/DiscussionPage":
/*!******************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionPage']" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionPage'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/Link":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Link']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Link'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Placeholder":
/*!***************************************************************!*\
  !*** external "flarum.core.compat['components/Placeholder']" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Placeholder'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/utils/DiscussionControls":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['utils/DiscussionControls']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/DiscussionControls'];

/***/ }),

/***/ "flarum/utils/humanTime":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/humanTime']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/humanTime'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map