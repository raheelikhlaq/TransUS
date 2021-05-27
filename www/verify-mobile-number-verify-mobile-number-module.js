(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-mobile-number-verify-mobile-number-module"],{

/***/ "./src/app/verify-mobile-number/verify-mobile-number-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/verify-mobile-number/verify-mobile-number-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: VerifyMobileNumberPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyMobileNumberPageRoutingModule", function() { return VerifyMobileNumberPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-mobile-number.page */ "./src/app/verify-mobile-number/verify-mobile-number.page.ts");




var routes = [
    {
        path: '',
        component: _verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_3__["VerifyMobileNumberPage"]
    }
];
var VerifyMobileNumberPageRoutingModule = /** @class */ (function () {
    function VerifyMobileNumberPageRoutingModule() {
    }
    VerifyMobileNumberPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VerifyMobileNumberPageRoutingModule);
    return VerifyMobileNumberPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/verify-mobile-number/verify-mobile-number.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/verify-mobile-number/verify-mobile-number.module.ts ***!
  \*********************************************************************/
/*! exports provided: VerifyMobileNumberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyMobileNumberPageModule", function() { return VerifyMobileNumberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _verify_mobile_number_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-mobile-number-routing.module */ "./src/app/verify-mobile-number/verify-mobile-number-routing.module.ts");
/* harmony import */ var _verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-mobile-number.page */ "./src/app/verify-mobile-number/verify-mobile-number.page.ts");







var VerifyMobileNumberPageModule = /** @class */ (function () {
    function VerifyMobileNumberPageModule() {
    }
    VerifyMobileNumberPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _verify_mobile_number_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyMobileNumberPageRoutingModule"]
            ],
            declarations: [_verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_6__["VerifyMobileNumberPage"]]
        })
    ], VerifyMobileNumberPageModule);
    return VerifyMobileNumberPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=verify-mobile-number-verify-mobile-number-module.js.map