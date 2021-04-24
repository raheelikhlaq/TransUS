(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");




var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
  var currentTouchedButton;
  var initialTouchedButton;

  var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
    if (typeof document === 'undefined') {
      return;
    }

    var target = document.elementFromPoint(x, y);

    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }

    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };

  var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
    currentTouchedButton = button;

    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.add('ion-activated');
    });
    hapticFeedbackFn();
  };

  var clearActiveButton = function clearActiveButton() {
    var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (!currentTouchedButton) {
      return;
    }

    var buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
      return buttonToModify.classList.remove('ion-activated');
    });
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */

    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }

    currentTouchedButton = undefined;
  };

  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el: el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: function onStart(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
    },
    onMove: function onMove(ev) {
      return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
    },
    onEnd: function onEnd() {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");



var attachComponent = /*#__PURE__*/function () {
  var _ref = Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
    var el;
    return D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!delegate) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

          case 2:
            if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
              _context.next = 4;
              break;
            }

            throw new Error('framework delegate is missing');

          case 4:
            el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

            if (cssClasses) {
              cssClasses.forEach(function (c) {
                return el.classList.add(c);
              });
            }

            if (componentProps) {
              Object.assign(el, componentProps);
            }

            container.appendChild(el);

            if (!el.componentOnReady) {
              _context.next = 11;
              break;
            }

            _context.next = 11;
            return el.componentOnReady();

          case 11:
            return _context.abrupt("return", el);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var detachComponent = function detachComponent(delegate, element) {
  if (element) {
    if (delegate) {
      var container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine = {
  getEngine: function getEngine() {
    var win = window;
    return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
  },
  available: function available() {
    return !!this.getEngine();
  },
  isCordova: function isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor: function isCapacitor() {
    var win = window;
    return !!win.Capacitor;
  },
  impact: function impact(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({
      style: style
    });
  },
  notification: function notification(options) {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({
      style: style
    });
  },
  selection: function selection() {
    this.impact({
      style: 'light'
    });
  },
  selectionStart: function selectionStart() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionStart();
    } else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged: function selectionChanged() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionChanged();
    } else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd: function selectionEnd() {
    var engine = this.getEngine();

    if (!engine) {
      return;
    }

    if (this.isCapacitor()) {
      engine.selectionEnd();
    } else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */

var hapticSelection = function hapticSelection() {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


var hapticSelectionStart = function hapticSelectionStart() {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


var hapticSelectionChanged = function hapticSelectionChanged() {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


var hapticSelectionEnd = function hapticSelectionEnd() {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */


var hapticImpact = function hapticImpact(options) {
  HapticEngine.impact(options);
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: function fn(dur, index, total) {
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      var angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: function fn(dur, index, total) {
      var step = index / total;
      var animationDelay = "".concat(dur * step - dur, "ms");
      var angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': "".concat(9 * Math.sin(angle), "px"),
          'left': "".concat(9 * Math.cos(angle), "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: function fn() {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: function fn() {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: function fn(_, index) {
      var animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': "".concat(9 - 9 * index, "px"),
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: function fn(dur, index, total) {
      var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
      var animationDelay = "".concat(dur * index / total - dur, "ms");
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay
        }
      };
    }
  }
};
var SPINNERS = spinners;


/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




var hostContext = function hostContext(selector, el) {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


var createColorClasses = function createColorClasses(color, cssClassMap) {
  return typeof color === 'string' && color.length > 0 ? Object.assign(Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
    'ion-color': true
  }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
};

var getClassList = function getClassList(classes) {
  if (classes !== undefined) {
    var array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(function (c) {
      return c != null;
    }).map(function (c) {
      return c.trim();
    }).filter(function (c) {
      return c !== '';
    });
  }

  return [];
};

var getClassMap = function getClassMap(classes) {
  var map = {};
  getClassList(classes).forEach(function (c) {
    return map[c] = true;
  });
  return map;
};

var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

var openURL = /*#__PURE__*/function () {
  var _ref = Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, ev, direction, animation) {
    var router;
    return D_Github_Projects_TransUS_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
              _context.next = 5;
              break;
            }

            router = document.querySelector('ion-router');

            if (!router) {
              _context.next = 5;
              break;
            }

            if (ev != null) {
              ev.preventDefault();
            }

            return _context.abrupt("return", router.push(url, direction, animation));

          case 5:
            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/accept-offer/accept-offer.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/accept-offer/accept-offer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div style=\"padding: 10px !important;\">\n  <ion-row>\n    <ion-col class=\"text-right\">\n      <img src=\"assets/img/minimize.svg\" (click)=\"ok()\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\" size=\"12\">\n      <h1 class=\"alura\">{{currency_symbol}}{{price}}</h1>\n      <p class=\"alura m_0\">Do you want to accept this offer from the owner?</p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n     <ion-col  size=\"6\" class=\"ion-text-center\">\n      <ion-button color=\"danger\" class=\"alura\"  (click)=\"ok()\" shape=\"round\" expand=\"block\">Reject</ion-button>  \n     </ion-col>\n     <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button color=\"secondary\" class=\"alura\"  (click)=\"sendRequest()\" shape=\"round\" expand=\"block\">Accept</ion-button>  \n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/action-booking/action-booking.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/action-booking/action-booking.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div style=\"padding: 10px !important;\">\n  <ion-row>\n    <ion-col class=\"text-right\">\n      <img src=\"assets/img/minimize.svg\" (click)=\"ok()\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\" size=\"12\" *ngIf=\"booking_action =='cancel_booking'\">\n      <h1 class=\"alura\">Cancel?</h1>\n      <p class=\"alura m_0\"> Are you sure you want to cancel your booking?</p>\n    </ion-col>\n    <ion-col class=\"text-center\" size=\"12\" *ngIf=\"booking_action =='accept_booking'\">\n      <h1 class=\"alura\">Accept?</h1>\n      <p class=\"alura m_0\"> Are you sure you want to accept this booking?</p>\n    </ion-col>\n    <ion-col class=\"text-center\" size=\"12\" *ngIf=\"booking_action =='reject_booking'\">\n      <h1 class=\"alura\">Reject?</h1>\n      <p class=\"alura m_0\"> Are you sure you want to reject this request?</p>\n    </ion-col>\n    \n  </ion-row>\n\n  <ion-row class=\"btn_top\">\n     <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button color=\"primary\" class=\"alura\"  (click)=\"actionBooking()\" shape=\"round\" expand=\"block\">Yes</ion-button>  \n     </ion-col>\n     <ion-col size=\"6\" class=\"ion-text-center\">\n      <ion-button color=\"secondary\" class=\"alura\"  (click)=\"ok()\" shape=\"round\" expand=\"block\">No</ion-button>  \n   </ion-col>\n  </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/enter-offer/enter-offer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/enter-offer/enter-offer.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div style=\"padding: 10px !important;\">\n  <ion-row>\n    <ion-col class=\"text-right\">\n      <img src=\"assets/img/minimize.svg\" (click)=\"ok()\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\" size=\"12\">\n      <h1 class=\"alura\">Enter your offer</h1>\n    </ion-col>\n  </ion-row>\n  <ion-col size=\"12\">\n    <ion-input type=\"number\" placeholder=\"{{currency_symbol}}\"  [(ngModel)]=\"price\"  class=\"input_list ot_auto\"></ion-input>\n  </ion-col>\n  <ion-row>\n     <ion-col  size=\"6\" class=\"ion-text-center\">\n      <ion-button color=\"primary\" class=\"alura\"  (click)=\"ok()\" shape=\"round\" expand=\"block\">Cancel</ion-button>  \n     </ion-col>\n     <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button color=\"secondary\" class=\"alura\"  (click)=\"sendRequest()\" shape=\"round\" expand=\"block\">Send</ion-button>  \n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/give-rating/give-rating.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/give-rating/give-rating.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div style=\"padding:10px 10px 20px 10px!important;\">\n  <ion-row>\n    <ion-col class=\"text-right\">\n      <img src=\"assets/img/minimize.svg\" (click)=\"ok()\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\" size=\"12\">\n      <h1 class=\"alura\">Ratings</h1>\n      <p class=\"alura m_0\">Give your Ratings and Feedback</p>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center my_rating\">\n          <img src=\"assets/img/bg_star_active.svg\" (click)=\"logRatingChange(1)\" *ngIf=\"active_star_1\">\n          <img src=\"assets/img/bg_star_active.svg\" (click)=\"logRatingChange(2)\" *ngIf=\"active_star_2\">\n          <img src=\"assets/img/bg_star_active.svg\" (click)=\"logRatingChange(3)\" *ngIf=\"active_star_3\">\n          <img src=\"assets/img/bg_star_active.svg\" (click)=\"logRatingChange(4)\" *ngIf=\"active_star_4\">\n          <img src=\"assets/img/bg_star_active.svg\" (click)=\"logRatingChange(5)\" *ngIf=\"active_star_5\">\n          <img src=\"assets/img/bg_star_inactive.svg\" (click)=\"logRatingChange(1)\" *ngIf=\"active_star_1 == false\" >\n          <img src=\"assets/img/bg_star_inactive.svg\" (click)=\"logRatingChange(2)\" *ngIf=\"active_star_2 == false\" >\n          <img src=\"assets/img/bg_star_inactive.svg\" (click)=\"logRatingChange(3)\" *ngIf=\"active_star_3 == false\" >\n          <img src=\"assets/img/bg_star_inactive.svg\" (click)=\"logRatingChange(4)\" *ngIf=\"active_star_4 == false\" >\n          <img src=\"assets/img/bg_star_inactive.svg\" (click)=\"logRatingChange(5)\" *ngIf=\"active_star_5 == false\" >\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <ion-textarea rows=\"6\" placeholder=\"Enter your feedback Here!\" [(ngModel)]=\"Description\"  class=\"list_3\"></ion-textarea>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-row>\n     <ion-col  size=\"3\">\n\n     </ion-col>\n     <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button color=\"primary\" class=\"alura\"  (click)=\"giveRating()\" shape=\"round\" expand=\"block\">Ok</ion-button>  \n     </ion-col>\n  </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/accept-offer/accept-offer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/accept-offer/accept-offer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --padding-bottom: 1.7em;\n  --padding-top: 1.7em;\n  --box-shadow: none;\n  margin: 0.2em 0em 1.5em 0em;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.m_0 {\n  margin: 0px;\n  padding: 0em 18%;\n}\n\n.select_color {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 12px 12px;\n}\n\nh1 {\n  color: #1A6BBE;\n  margin-top: 0px;\n  padding: 0em 18%;\n}\n\nion-item {\n  border: 1px solid #d4dce1;\n  text-align: center;\n  border-radius: 40px;\n  --background: #F7F8FA;\n  --color: #d4dce1;\n  margin: 0em 0.3em;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXB0LW9mZmVyL2FjY2VwdC1vZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQURKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvYWNjZXB0LW9mZmVyL2FjY2VwdC1vZmZlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjdlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjdlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgbWFyZ2luOiAwLjJlbSAwZW0gMS41ZW0gMGVtO1xufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LXJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1fMHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6IDBlbSAxOCU7XG59XG5cbi5zZWxlY3RfY29sb3J7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMTJweDtcbn1cbmgxe1xuICAgIGNvbG9yOiMxQTZCQkU7XG4gICAgbWFyZ2luLXRvcDowcHg7XG4gICAgcGFkZGluZzogMGVtIDE4JTtcbn1cbmlvbi1pdGVte1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIC0tY29sb3I6ICNkNGRjZTE7XG4gICAgbWFyZ2luOiAwZW0gMC4zZW07XG59XG5cbi5pbnB1dF9saXN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/accept-offer/accept-offer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/accept-offer/accept-offer.page.ts ***!
  \***************************************************/
/*! exports provided: AcceptOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptOfferPage", function() { return AcceptOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var AcceptOfferPage = /** @class */ (function () {
    function AcceptOfferPage(navParams, storage, toastController, router, popoverController, restService) {
        this.navParams = navParams;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.popoverController = popoverController;
        this.restService = restService;
        this.offer_data = this.navParams.data.data;
        this.offer_id = this.navParams.data.offer_id;
        this.price = this.offer_data.price;
        console.log(this.offer_id);
    }
    AcceptOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('currency_symbol').then(function (currency_symbol) {
            _this.currency_symbol = currency_symbol;
        });
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userId = user_details.users_id;
            _this.currencies_id = user_details.currencies_id;
        });
    };
    AcceptOfferPage.prototype.ok = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcceptOfferPage.prototype.sendRequest = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var stringy;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                stringy = JSON.stringify({
                    "requestType": "accept_offer",
                    "offerID": this.offer_id,
                    "currencyID": this.currencies_id
                });
                console.log(stringy);
                this.restService.inquire_charges(stringy).subscribe(function (response) {
                    _this.response = JSON.parse(response['_body']);
                    console.log(_this.response.status);
                    if (_this.response.status == 'error') {
                        _this.presentToast('Oops!something went wrong');
                    }
                    else if (_this.response.status == 'success') {
                        _this.presentToast('offer Accepted successfully!');
                        _this.ok();
                    }
                }, function (err) {
                });
                return [2 /*return*/];
            });
        });
    };
    AcceptOfferPage.prototype.presentToast = function (msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AcceptOfferPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
    ]; };
    AcceptOfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accept-offer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accept-offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/accept-offer/accept-offer.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accept-offer.page.scss */ "./src/app/accept-offer/accept-offer.page.scss")).default]
        })
    ], AcceptOfferPage);
    return AcceptOfferPage;
}());



/***/ }),

/***/ "./src/app/action-booking/action-booking.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/action-booking/action-booking.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.m_0 {\n  margin: 0px;\n  padding: 0em 18%;\n}\n\n.select_color {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 12px 12px;\n}\n\nh1 {\n  color: #1A6BBE;\n  margin-top: 0px;\n}\n\nion-item {\n  border: 1px solid #d4dce1;\n  text-align: center;\n  border-radius: 40px;\n  --background: #F7F8FA;\n  --color: #d4dce1;\n  margin: 0em 0.3em;\n}\n\n.btn_top {\n  margin: 0.7em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aW9uLWJvb2tpbmcvYWN0aW9uLWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvYWN0aW9uLWJvb2tpbmcvYWN0aW9uLWJvb2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LXJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1fMHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6IDBlbSAxOCU7XG59XG5cbi5zZWxlY3RfY29sb3J7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMTJweDtcbn1cbmgxe1xuICAgIGNvbG9yOiMxQTZCQkU7XG4gICAgbWFyZ2luLXRvcDowcHg7XG59XG5pb24taXRlbXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIC0tYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICAtLWNvbG9yOiAjZDRkY2UxO1xuICAgIG1hcmdpbjogMGVtIDAuM2VtO1xufVxuLmJ0bl90b3B7XG4gICAgbWFyZ2luOiAwLjdlbSAxZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/action-booking/action-booking.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/action-booking/action-booking.page.ts ***!
  \*******************************************************/
/*! exports provided: ActionBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBookingPage", function() { return ActionBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





var ActionBookingPage = /** @class */ (function () {
    function ActionBookingPage(navParams, restService, navCtrl, router, popoverController) {
        this.navParams = navParams;
        this.restService = restService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.popoverController = popoverController;
        this.bookingId = this.navParams.data.data;
        this.booking_action = this.navParams.data.booking;
        this.ownerID = this.navParams.data.ownerID;
        this.userID = this.navParams.data.userID;
        console.log(this.ownerID);
        console.log(this.booking_action);
        console.log(this.userID);
        console.log(this.bookingId);
    }
    ActionBookingPage.prototype.ngOnInit = function () {
    };
    ActionBookingPage.prototype.ok = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionBookingPage.prototype.Hide = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // await this.popoverController.dismiss();
                this.popoverController.dismiss({
                    //val
                    val: 'ok'
                });
                return [2 /*return*/];
            });
        });
    };
    ActionBookingPage.prototype.actionBooking = function () {
        var _this = this;
        if (this.booking_action == 'cancel_booking') {
            var stringy = JSON.stringify({
                "requestType": "cancel_booking",
                "bookingID": this.bookingId,
                "usersID": this.userID,
                "ownerID": this.ownerID
            });
        }
        else if (this.booking_action == 'accept_booking') {
            var stringy = JSON.stringify({
                "requestType": "accept_booking",
                "bookingID": this.bookingId,
                "usersID": this.userID,
                "ownerID": this.ownerID
            });
        }
        else if (this.booking_action == 'reject_booking') {
            var stringy = JSON.stringify({
                "requestType": "reject_booking",
                "bookingID": this.bookingId,
                "usersID": this.userID,
                "ownerID": this.ownerID
            });
        }
        console.log(stringy);
        this.restService.booking_action(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            if (_this.response.status == 'success') {
                _this.Hide();
            }
            console.log(_this.response);
        }, function (err) {
        });
    };
    ActionBookingPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    ActionBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-action-booking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./action-booking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/action-booking/action-booking.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./action-booking.page.scss */ "./src/app/action-booking/action-booking.page.scss")).default]
        })
    ], ActionBookingPage);
    return ActionBookingPage;
}());



/***/ }),

/***/ "./src/app/cameraimage.service.ts":
/*!****************************************!*\
  !*** ./src/app/cameraimage.service.ts ***!
  \****************************************/
/*! exports provided: CameraimageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraimageService", function() { return CameraimageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");




var CameraimageService = /** @class */ (function () {
    function CameraimageService(http, camera) {
        this.http = http;
        this.camera = camera;
        console.log('Hello TakeimageProvider Provider');
    }
    // click image from camera
    CameraimageService.prototype.selectImageInCamera = function () {
        var CAMERA_OPTIONS = {
            // allowEdit: true,
            //correctOrientation: true,
            quality: 5,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        return this.camera.getPicture(CAMERA_OPTIONS);
    };
    // choose image from gallery
    CameraimageService.prototype.selectImageInGallery = function () {
        var CAMERA_OPTIONS = {
            //allowEdit: true,
            quality: 5,
            // targetHeight: 300,
            //targetWidth: 300,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        return this.camera.getPicture(CAMERA_OPTIONS);
    };
    CameraimageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] }
    ]; };
    CameraimageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], CameraimageService);
    return CameraimageService;
}());



/***/ }),

/***/ "./src/app/enter-offer/enter-offer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/enter-offer/enter-offer.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --padding-bottom: 1.7em;\n  --padding-top: 1.7em;\n  --box-shadow: none;\n  margin: 0.2em 0em 1.5em 0em;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.m_0 {\n  margin: 0px;\n  padding: 0em 18%;\n}\n\n.select_color {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 12px 12px;\n}\n\nh1 {\n  color: #1A6BBE;\n  margin-top: 0px;\n  padding: 0em 18%;\n}\n\nion-item {\n  border: 1px solid #d4dce1;\n  text-align: center;\n  border-radius: 40px;\n  --background: #F7F8FA;\n  --color: #d4dce1;\n  margin: 0em 0.3em;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50ZXItb2ZmZXIvZW50ZXItb2ZmZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL2VudGVyLW9mZmVyL2VudGVyLW9mZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tYnV0dG9ue1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuN2VtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuN2VtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDAuMmVtIDBlbSAxLjVlbSAwZW07XG59XG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubV8we1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzogMGVtIDE4JTtcbn1cblxuLnNlbGVjdF9jb2xvcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xufVxuaDF7XG4gICAgY29sb3I6IzFBNkJCRTtcbiAgICBtYXJnaW4tdG9wOjBweDtcbiAgICBwYWRkaW5nOiAwZW0gMTglO1xufVxuaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgLS1jb2xvcjogI2Q0ZGNlMTtcbiAgICBtYXJnaW46IDBlbSAwLjNlbTtcbn1cblxuLmlucHV0X2xpc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/enter-offer/enter-offer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/enter-offer/enter-offer.page.ts ***!
  \*************************************************/
/*! exports provided: EnterOfferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOfferPage", function() { return EnterOfferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var EnterOfferPage = /** @class */ (function () {
    function EnterOfferPage(navParams, storage, toastController, router, popoverController, restService) {
        this.navParams = navParams;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.popoverController = popoverController;
        this.restService = restService;
        this.booking_data = this.navParams.data.data;
        console.log(this.booking_data);
    }
    EnterOfferPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('currency_symbol').then(function (currency_symbol) {
            _this.currency_symbol = currency_symbol;
        });
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userId = user_details.users_id;
            _this.currencies_id = user_details.currencies_id;
        });
    };
    EnterOfferPage.prototype.ok = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnterOfferPage.prototype.sendRequest = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var stringy;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                stringy = JSON.stringify({
                    "requestType": "send_price",
                    "riderID": this.userId,
                    "customerID": this.booking_data.users_id,
                    "vehicleID": this.booking_data.vehicles_id,
                    "price": this.price,
                    "currencyID": this.currencies_id
                });
                console.log(stringy);
                this.restService.inquire_charges(stringy).subscribe(function (response) {
                    _this.response = JSON.parse(response['_body']);
                    console.log(_this.response.status);
                    if (_this.response.status == 'error') {
                        _this.presentToast('Oops!something went wrong');
                    }
                    else if (_this.response.status == 'success') {
                        _this.presentToast('offer submitted successfully!');
                        _this.ok();
                    }
                }, function (err) {
                });
                return [2 /*return*/];
            });
        });
    };
    EnterOfferPage.prototype.presentToast = function (msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EnterOfferPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
    ]; };
    EnterOfferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enter-offer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./enter-offer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/enter-offer/enter-offer.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./enter-offer.page.scss */ "./src/app/enter-offer/enter-offer.page.scss")).default]
        })
    ], EnterOfferPage);
    return EnterOfferPage;
}());



/***/ }),

/***/ "./src/app/give-rating/give-rating.page.scss":
/*!***************************************************!*\
  !*** ./src/app/give-rating/give-rating.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.m_0 {\n  margin: 0px;\n  padding: 0em 18%;\n}\n\n.select_color {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 12px 12px;\n}\n\nh1 {\n  color: #1A6BBE;\n  margin-top: 0px;\n}\n\nion-item {\n  border: 1px solid #d4dce1;\n  text-align: center;\n  border-radius: 40px;\n  --background: #F7F8FA;\n  --color: #d4dce1;\n  margin: 0em 0.3em;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #d4dce1;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.ionic5-star-rating button {\n  margin-top: 1em;\n}\n\n.my_rating img {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2l2ZS1yYXRpbmcvZ2l2ZS1yYXRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL2dpdmUtcmF0aW5nL2dpdmUtcmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tYnV0dG9ue1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tXzB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOiAwZW0gMTglO1xufVxuXG4uc2VsZWN0X2NvbG9ye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAxMnB4IDEycHg7XG59XG5oMXtcbiAgICBjb2xvcjojMUE2QkJFO1xuICAgIG1hcmdpbi10b3A6MHB4O1xufVxuaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAtLWJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgLS1jb2xvcjogI2Q0ZGNlMTtcbiAgICBtYXJnaW46IDBlbSAwLjNlbTtcbn1cblxuLmxpc3RfM3tcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZDRkY2UxO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLmlvbmljNS1zdGFyLXJhdGluZyBidXR0b257XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuLm15X3JhdGluZyBpbWd7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/give-rating/give-rating.page.ts":
/*!*************************************************!*\
  !*** ./src/app/give-rating/give-rating.page.ts ***!
  \*************************************************/
/*! exports provided: GiveRatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiveRatingPage", function() { return GiveRatingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");






var GiveRatingPage = /** @class */ (function () {
    function GiveRatingPage(restService, storage, navParams, navCtrl, router, popoverController) {
        var _this = this;
        this.restService = restService;
        this.storage = storage;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.router = router;
        this.popoverController = popoverController;
        this.activeRating = 0;
        this.active_star_1 = false;
        this.active_star_2 = false;
        this.active_star_3 = false;
        this.active_star_4 = false;
        this.active_star_5 = false;
        this.starts = 0;
        this.bookingId = this.navParams.data.data;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
        });
    }
    GiveRatingPage.prototype.ok = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GiveRatingPage.prototype.goToHome = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // await this.popoverController.dismiss();
                this.popoverController.dismiss({
                    //val
                    val: 'ok'
                });
                return [2 /*return*/];
            });
        });
    };
    GiveRatingPage.prototype.ngOnInit = function () {
    };
    GiveRatingPage.prototype.logRatingChange = function (rating) {
        console.log(rating);
        this.starts = rating;
        this.active_star_1 = false;
        this.active_star_2 = false;
        this.active_star_3 = false;
        this.active_star_4 = false;
        this.active_star_5 = false;
        if (rating == 1) {
            this.active_star_1 = true;
        }
        else if (rating == 2) {
            this.active_star_1 = true;
            this.active_star_2 = true;
        }
        else if (rating == 3) {
            this.active_star_1 = true;
            this.active_star_2 = true;
            this.active_star_3 = true;
        }
        else if (rating == 4) {
            this.active_star_1 = true;
            this.active_star_2 = true;
            this.active_star_3 = true;
            this.active_star_4 = true;
        }
        else if (rating == 5) {
            this.active_star_1 = true;
            this.active_star_2 = true;
            this.active_star_3 = true;
            this.active_star_4 = true;
            this.active_star_5 = true;
        }
        //var empty = 5 - rating;
        //console.log(empty);
        //  this.emtpy_rating = Array.from({length:4},(v,k)=>k+1);
    };
    GiveRatingPage.prototype.giveRating = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "add_review",
            "usersID": this.userID,
            "bookingID": this.bookingId,
            "feedback": this.Description,
            "stars": this.starts
        });
        console.log(stringy);
        this.restService.reviews(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            _this.goToHome();
        }, function (err) {
        });
    };
    GiveRatingPage.ctorParameters = function () { return [
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    GiveRatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-give-rating',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./give-rating.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/give-rating/give-rating.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./give-rating.page.scss */ "./src/app/give-rating/give-rating.page.scss")).default]
        })
    ], GiveRatingPage);
    return GiveRatingPage;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map