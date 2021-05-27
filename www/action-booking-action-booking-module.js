(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["action-booking-action-booking-module"],{

/***/ "./src/app/action-booking/action-booking-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/action-booking/action-booking-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ActionBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBookingPageRoutingModule", function() { return ActionBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _action_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action-booking.page */ "./src/app/action-booking/action-booking.page.ts");




var routes = [
    {
        path: '',
        component: _action_booking_page__WEBPACK_IMPORTED_MODULE_3__["ActionBookingPage"]
    }
];
var ActionBookingPageRoutingModule = /** @class */ (function () {
    function ActionBookingPageRoutingModule() {
    }
    ActionBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ActionBookingPageRoutingModule);
    return ActionBookingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/action-booking/action-booking.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/action-booking/action-booking.module.ts ***!
  \*********************************************************/
/*! exports provided: ActionBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBookingPageModule", function() { return ActionBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _action_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action-booking-routing.module */ "./src/app/action-booking/action-booking-routing.module.ts");
/* harmony import */ var _action_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-booking.page */ "./src/app/action-booking/action-booking.page.ts");







var ActionBookingPageModule = /** @class */ (function () {
    function ActionBookingPageModule() {
    }
    ActionBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _action_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionBookingPageRoutingModule"]
            ],
            declarations: [_action_booking_page__WEBPACK_IMPORTED_MODULE_6__["ActionBookingPage"]]
        })
    ], ActionBookingPageModule);
    return ActionBookingPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=action-booking-action-booking-module.js.map