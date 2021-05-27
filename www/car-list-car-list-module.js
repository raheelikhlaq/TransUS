(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-list-car-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-list/car-list.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-list/car-list.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header_pd\">\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-searchbar (ionChange)=\"onInput()\" placeholder=\"ENTER CITY, AIRPORT, OR ADDRESS\"></ion-searchbar>\n    <ion-buttons slot=\"end\" (click)=\"goToFilter()\" >\n      <img src=\"assets/img/filter.svg\">\n    </ion-buttons>\n   </ion-toolbar>\n  </ion-header>\n<ion-content>\n \n  <ng-container *ngIf=\"response.cars_list_result.length != 0 \">\n\n \n     <ion-grid *ngFor=\"let p of cars_list_result; let i = index\">\n      <ng-container *ngIf=\"p.veh_imgs\">\n    <ion-row >\n      <ion-col class=\"main_div\" (click)=\"gotoDetail(p)\">\n        <!-- <img src=\"{{base_urls}}{{p.veh_imgs[0]}}\" class=\"s_img\" /> -->\n      \n        <ng-container *ngFor=\"let image of p.veh_imgs;  let j = index\">\n          <img *ngIf=\"j == 0 \" style=\"border-radius: 12px;\" src=\"{{base_urls}}{{image}}\"   />\n        </ng-container>\n  \n        <div class=\"pentagon\">\n          <img src=\"assets/img/pentagon.svg\" class=\"\" />\n          <div class=\"badge\">\n            <span class=\"badge_dollar\">{{currency_symbol}}</span>\n            <span class=\"badge_price\">{{p.charge_per_day}}</span>\n            <span class=\"badge_per\">PER DAY</span>\n          </div>\n        </div>\n        <div class=\"bg_bottom\">\n          <ion-row>\n            <ion-col size=\"8\" class=\"fav_1\">\n              <h2>{{p.model_name}}</h2>\n              <h5>San Francisco, CA</h5>\n            </ion-col>\n       \n            <!-- <ion-col size=\"4\" class=\"fav_2\">\n             \n              <p class=\"star_list\" *ngIf=\"p.ratting_stars === '5'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"p.ratting_stars === '4'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"p.ratting_stars === '3'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"p.ratting_stars === '2'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"p.ratting_stars === '1'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p>269 trips</p>\n            </ion-col> -->\n         \n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ng-container>\n  </ion-grid>  \n</ng-container>\n  <ng-container *ngIf=\"response.cars_list_result.length == 0\">\n    <ion-row>\n      <ion-col style=\"text-align: center;\">\n        <img src=\"assets/img/noresult.PNG\">\n      </ion-col>\n    </ion-row>\n\n  </ng-container>\n\n\n    <!-- <ion-grid style=\"    position: relative;\" *ngFor=\"let p of cars_list_result; let i = index\">\n    <ion-row style=\"margin: 10px;\">\n      <ng-conatiner *ngFor=\"let image of p.veh_imgs;  let j = index\">\n        \n        <img *ngIf=\"j == 0 \" style=\"border-radius: 12px;\" src=\"{{base_urls}}{{image}}\"   />\n      </ng-conatiner>\n  \n      <div  style=\"position: absolute;margin: 10px;\">\n        <img src=\"assets/img/pentagon.svg\"   />\n        <div class=\"badge\">\n          <span class=\"badge_dollar\">{{currency_symbol}}</span>\n          <span class=\"badge_price\">{{p.charge_per_day}}</span>\n          <span class=\"badge_per\">PER DAY</span>\n        </div>\n      </div>\n      <div class=\"new-bottom\" >\n        <ion-row>\n          <ion-col size=\"12\" class=\"fav_1\">\n            <h2>{{p.model_name}}</h2>\n            <h5>San Francisco, CA</h5>\n          </ion-col>\n          </ion-row>\n          </div>\n\n    </ion-row>\n  </ion-grid>   -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/car-list/car-list-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/car-list/car-list-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CarListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPageRoutingModule", function() { return CarListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _car_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-list.page */ "./src/app/car-list/car-list.page.ts");




var routes = [
    {
        path: '',
        component: _car_list_page__WEBPACK_IMPORTED_MODULE_3__["CarListPage"]
    }
];
var CarListPageRoutingModule = /** @class */ (function () {
    function CarListPageRoutingModule() {
    }
    CarListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CarListPageRoutingModule);
    return CarListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/car-list/car-list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/car-list/car-list.module.ts ***!
  \*********************************************/
/*! exports provided: CarListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPageModule", function() { return CarListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _car_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-list-routing.module */ "./src/app/car-list/car-list-routing.module.ts");
/* harmony import */ var _car_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-list.page */ "./src/app/car-list/car-list.page.ts");







var CarListPageModule = /** @class */ (function () {
    function CarListPageModule() {
    }
    CarListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _car_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarListPageRoutingModule"]
            ],
            declarations: [_car_list_page__WEBPACK_IMPORTED_MODULE_6__["CarListPage"]]
        })
    ], CarListPageModule);
    return CarListPageModule;
}());



/***/ }),

/***/ "./src/app/car-list/car-list.page.scss":
/*!*********************************************!*\
  !*** ./src/app/car-list/car-list.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n.new-bottom {\n  position: relative;\n  bottom: 29px;\n  color: #ffffff;\n  background: #00000063;\n  width: 100%;\n  border-radius: 0px 0px 10px 10px;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n  padding: 0em 2em 0em 1.5em;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.s_img {\n  width: 100%;\n  border-radius: 12px;\n}\n\n.main_div {\n  width: 100%;\n  margin: 0px 8px;\n}\n\n.pentagon {\n  position: absolute;\n  top: 17px;\n  left: 17px;\n}\n\n.bg_bottom {\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  right: 1.2%;\n  left: 1.2%;\n  background: #00000063;\n  color: #fff;\n  border-bottom-right-radius: 10px;\n  bottom: 9px;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.fav_1 {\n  text-align: left;\n}\n\n.fav_2 {\n  text-align: right;\n}\n\n.fav_1 h2,\nh5 {\n  margin: 0px;\n}\n\n.fav_1 h5 {\n  font-size: 16px;\n}\n\n.fav_2 p {\n  margin: 0px;\n}\n\n.star_list img {\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.badge {\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n  display: block;\n}\n\n.badge_price {\n  font-size: 9px;\n  color: #c4932f;\n  position: relative;\n  top: -6px;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWxpc3QvY2FyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7QUFNSjs7QUFKQTs7RUFFSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0FBU0o7O0FBUEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBYUo7O0FBWEE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWNKIiwiZmlsZSI6InNyYy9hcHAvY2FyLWxpc3QvY2FyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbi5uZXctYm90dG9te1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDI5cHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDYzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24taGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHBhZGRpbmc6IDBlbSAyZW0gMGVtIDEuNWVtO1xufVxuLmJfbGlzdDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLm1haW5fZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweCA4cHg7XG59XG4ucGVudGFnb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3cHg7XG4gICAgbGVmdDogMTdweDtcbn1cbi5iZ19ib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxLjIlO1xuICAgIGxlZnQ6IDEuMiU7XG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDYzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvdHRvbTogOXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uZmF2XzEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZmF2XzIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZhdl8xIGgyLFxuaDUge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLmZhdl8xIGg1IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZmF2XzIgcCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uc3Rhcl9saXN0IGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDZweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmFkZ2VfZG9sbGFyIHtcbiAgICBjb2xvcjogI2M0OTMyZjtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5iYWRnZV9wcmljZSB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTZweDtcbn1cbi5iYWRnZV9wZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/car-list/car-list.page.ts":
/*!*******************************************!*\
  !*** ./src/app/car-list/car-list.page.ts ***!
  \*******************************************/
/*! exports provided: CarListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPage", function() { return CarListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





var CarListPage = /** @class */ (function () {
    function CarListPage(menuCtrl, storage, router, activatedRoute) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.queryParams.subscribe(function (res) {
            console.log(res, "getresponce");
            _this.response = JSON.parse(res.value);
            console.log(_this.response);
            console.log(_this.response.cars_list_result, "fom my searching");
            _this.storage.get('base_urls').then(function (base_urls) {
                _this.base_urls = base_urls;
                _this.storage.get('currency_symbol').then(function (currency_symbol) {
                    console.log('currency_symbol', currency_symbol);
                    _this.currency_symbol = currency_symbol;
                    _this.cars_list_result = _this.response.cars_list_result;
                });
            });
        });
    }
    CarListPage.prototype.gotoDetail = function (data) {
        var myData = JSON.stringify({
            cars_list_result: data,
            redirect: '/car-list'
        });
        this.router.navigate(['/car-detail'], {
            queryParams: {
                value: myData
            },
        });
    };
    CarListPage.prototype.ngOnInit = function () {
    };
    CarListPage.prototype.goToFilter = function () {
        this.router.navigate(['/filters']);
    };
    CarListPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    CarListPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CarListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./car-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-list/car-list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./car-list.page.scss */ "./src/app/car-list/car-list.page.scss")).default]
        })
    ], CarListPage);
    return CarListPage;
}());



/***/ })

}]);
//# sourceMappingURL=car-list-car-list-module.js.map