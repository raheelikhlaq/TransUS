(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accept-offer-accept-offer-module"],{

/***/ "./src/app/accept-offer/accept-offer-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/accept-offer/accept-offer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AcceptOfferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptOfferPageRoutingModule", function() { return AcceptOfferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _accept_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accept-offer.page */ "./src/app/accept-offer/accept-offer.page.ts");




var routes = [
    {
        path: '',
        component: _accept_offer_page__WEBPACK_IMPORTED_MODULE_3__["AcceptOfferPage"]
    }
];
var AcceptOfferPageRoutingModule = /** @class */ (function () {
    function AcceptOfferPageRoutingModule() {
    }
    AcceptOfferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AcceptOfferPageRoutingModule);
    return AcceptOfferPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/accept-offer/accept-offer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/accept-offer/accept-offer.module.ts ***!
  \*****************************************************/
/*! exports provided: AcceptOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptOfferPageModule", function() { return AcceptOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _accept_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accept-offer-routing.module */ "./src/app/accept-offer/accept-offer-routing.module.ts");
/* harmony import */ var _accept_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accept-offer.page */ "./src/app/accept-offer/accept-offer.page.ts");







var AcceptOfferPageModule = /** @class */ (function () {
    function AcceptOfferPageModule() {
    }
    AcceptOfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _accept_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["AcceptOfferPageRoutingModule"]
            ],
            declarations: [_accept_offer_page__WEBPACK_IMPORTED_MODULE_6__["AcceptOfferPage"]]
        })
    ], AcceptOfferPageModule);
    return AcceptOfferPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=accept-offer-accept-offer-module.js.map