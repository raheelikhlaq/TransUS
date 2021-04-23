(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["enter-offer-enter-offer-module"],{

/***/ "./src/app/enter-offer/enter-offer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/enter-offer/enter-offer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EnterOfferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOfferPageRoutingModule", function() { return EnterOfferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _enter_offer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enter-offer.page */ "./src/app/enter-offer/enter-offer.page.ts");




var routes = [
    {
        path: '',
        component: _enter_offer_page__WEBPACK_IMPORTED_MODULE_3__["EnterOfferPage"]
    }
];
var EnterOfferPageRoutingModule = /** @class */ (function () {
    function EnterOfferPageRoutingModule() {
    }
    EnterOfferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EnterOfferPageRoutingModule);
    return EnterOfferPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/enter-offer/enter-offer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/enter-offer/enter-offer.module.ts ***!
  \***************************************************/
/*! exports provided: EnterOfferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterOfferPageModule", function() { return EnterOfferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enter_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enter-offer-routing.module */ "./src/app/enter-offer/enter-offer-routing.module.ts");
/* harmony import */ var _enter_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter-offer.page */ "./src/app/enter-offer/enter-offer.page.ts");







var EnterOfferPageModule = /** @class */ (function () {
    function EnterOfferPageModule() {
    }
    EnterOfferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _enter_offer_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnterOfferPageRoutingModule"]
            ],
            declarations: [_enter_offer_page__WEBPACK_IMPORTED_MODULE_6__["EnterOfferPage"]]
        })
    ], EnterOfferPageModule);
    return EnterOfferPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=enter-offer-enter-offer-module.js.map