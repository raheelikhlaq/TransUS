(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-favorite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Favorite</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"cars_list_result?.length >0\">\n    \n  <ion-row  *ngFor=\"let p of cars_list_result; let i = index\">\n    <ion-col class=\"main_div\" (click)=\"gotoDetail(p)\">\n      <img src=\"{{base_urls}}{{p.veh_imgs[0]}}\" class=\"s_img\" />\n      <div class=\"pentagon\">\n        <img src=\"assets/img/pentagon.svg\" class=\"\" />\n        <div class=\"badge\">\n          <span class=\"badge_dollar\">{{currency_symbol}}</span>\n          <span class=\"badge_price\">{{p.charge_per_day}}</span>\n          <span class=\"badge_per\">PER DAY</span>\n        </div>\n      </div>\n      <div class=\"bg_bottom\">\n        <ion-row>\n          <ion-col size=\"8\" class=\"fav_1\">\n            <h2>{{p.model_name}}</h2>\n            <h5>{{p.country_name}}</h5>\n          </ion-col>\n          <ion-col size=\"4\" class=\"fav_2\">\n            <p class=\"star_list\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/yellow_star.svg\">\n              <img src=\"assets/img/grey_star.svg\">\n            </p>\n            <p>269 trips</p>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n</ng-container>\n<ng-container *ngIf=\"cars_list_result?.length == 0\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <img src=\"assets/img/heart_empty.svg\">\n    </ion-col>\n  </ion-row>\n</ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/favorite/favorite-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/favorite/favorite-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageRoutingModule", function() { return FavoritePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorite.page */ "./src/app/favorite/favorite.page.ts");




var routes = [
    {
        path: '',
        component: _favorite_page__WEBPACK_IMPORTED_MODULE_3__["FavoritePage"]
    }
];
var FavoritePageRoutingModule = /** @class */ (function () {
    function FavoritePageRoutingModule() {
    }
    FavoritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FavoritePageRoutingModule);
    return FavoritePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.module.ts":
/*!*********************************************!*\
  !*** ./src/app/favorite/favorite.module.ts ***!
  \*********************************************/
/*! exports provided: FavoritePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePageModule", function() { return FavoritePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorite-routing.module */ "./src/app/favorite/favorite-routing.module.ts");
/* harmony import */ var _favorite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite.page */ "./src/app/favorite/favorite.page.ts");







var FavoritePageModule = /** @class */ (function () {
    function FavoritePageModule() {
    }
    FavoritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _favorite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritePageRoutingModule"]
            ],
            declarations: [_favorite_page__WEBPACK_IMPORTED_MODULE_6__["FavoritePage"]]
        })
    ], FavoritePageModule);
    return FavoritePageModule;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.page.scss":
/*!*********************************************!*\
  !*** ./src/app/favorite/favorite.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.s_img {\n  width: 100%;\n  border-radius: 12px;\n}\n\n.main_div {\n  width: 100%;\n  margin: 0px 8px;\n}\n\n.pentagon {\n  position: absolute;\n  top: 17px;\n  left: 17px;\n}\n\n.bg_bottom {\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  right: 1.2%;\n  left: 1.2%;\n  background: #00000063;\n  color: #fff;\n  border-bottom-right-radius: 10px;\n  bottom: 9px;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.fav_1 {\n  text-align: left;\n}\n\n.fav_2 {\n  text-align: right;\n}\n\n.fav_1 h2,\nh5 {\n  margin: 0px;\n}\n\n.fav_1 h5 {\n  font-size: 16px;\n}\n\n.fav_2 p {\n  margin: 0px;\n}\n\n.star_list img {\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.badge {\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n  display: block;\n}\n\n.badge_price {\n  font-size: 9px;\n  color: #c4932f;\n  position: relative;\n  top: -6px;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtBQU9KOztBQUxBOztFQUVJLFdBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFjSjs7QUFaQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFlSiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlL2Zhdm9yaXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24taGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmJfbGlzdDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLm1haW5fZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweCA4cHg7XG59XG4ucGVudGFnb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3cHg7XG4gICAgbGVmdDogMTdweDtcbn1cbi5iZ19ib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxLjIlO1xuICAgIGxlZnQ6IDEuMiU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDYzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvdHRvbTogOXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmZhdl8xIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmZhdl8yIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mYXZfMSBoMixcbmg1IHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5mYXZfMSBoNSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZhdl8yIHAge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnN0YXJfbGlzdCBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhZGdlX2RvbGxhciB7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYmFkZ2VfcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02cHg7XG59XG4uYmFkZ2VfcGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/favorite/favorite.page.ts":
/*!*******************************************!*\
  !*** ./src/app/favorite/favorite.page.ts ***!
  \*******************************************/
/*! exports provided: FavoritePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritePage", function() { return FavoritePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");






var FavoritePage = /** @class */ (function () {
    function FavoritePage(router, restService, storage, menuCtrl) {
        this.router = router;
        this.restService = restService;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.cars_list_result = [];
    }
    FavoritePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('base_urls').then(function (base_urls) {
            _this.base_urls = base_urls;
        });
    };
    FavoritePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            _this.storage.get('currency_symbol').then(function (currency_symbol) {
                _this.currency_symbol = currency_symbol;
                console.log(user_details);
                _this.userID = user_details.users_id;
                _this.Currencies = user_details.currencies_id;
                _this.favourite();
            });
        });
    };
    FavoritePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    FavoritePage.prototype.favourite = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": 'get_fav_cars_list',
            "usersID": this.userID,
            "currencyID": this.Currencies
        });
        console.log(stringy);
        this.restService.list_vehicles(stringy).subscribe(function (response) {
            _this.listVehicles = JSON.parse(response['_body']);
            _this.cars_list_result = _this.listVehicles.cars_list_result;
            console.log(_this.cars_list_result);
            if (_this.cars_list_result == undefined) {
                _this.cars_list_result = [];
            }
        }, function (err) {
        });
    };
    FavoritePage.prototype.gotoDetail = function (data) {
        var myData = JSON.stringify({
            cars_list_result: data,
            redirect: '/favorite'
        });
        this.router.navigate(['/car-detail'], {
            queryParams: {
                value: myData
            },
        });
    };
    FavoritePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    FavoritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favorite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/favorite/favorite.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favorite.page.scss */ "./src/app/favorite/favorite.page.scss")).default]
        })
    ], FavoritePage);
    return FavoritePage;
}());



/***/ })

}]);
//# sourceMappingURL=favorite-favorite-module.js.map