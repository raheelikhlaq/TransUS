(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listed-car-listed-car-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Listed Cars</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n<ng-container *ngIf=\"vehicles_list?.length >0\">\n  <ng-container *ngFor=\"let p of vehicles_list; let i = index\">\n      <ng-container *ngIf=\"p.vehicle_imgs\"> \n\n    \n    <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\" >\n      <ion-col size=\"4\" class=\"lambo\">\n          <h4>License Plate</h4>\n          <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\">\n          <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\">\n          \n      </ion-col>\n      <ion-col class=\"trip_dates\" size=\"4\">\n          <p class=\"blue\">Trip Dates</p>\n          <p class=\"primary\">Start Date</p>\n          <p>{{p.start_date}}</p>\n          <p class=\"primary\">Total Cost</p>\n          <p>${{p.charge_per_day}}</p>\n          <p class=\"give_rating\" (click)=\"editDetail(p)\">Edit Details</p>\n      </ion-col>\n      <ion-col class=\"trip_end_date\" size=\"4\">\n        <p class=\"primary\"> End Date</p>\n        <p>{{p.end_date}}</p>\n\n        <p *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved\"  >Approved</p>\n        <p *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding\"  >Pending</p>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n      <ion-col size=\"4\" class=\"lambo\">\n          <h4>License Plate</h4>\n          <!-- <img src=\"{{base_url}}{{p.vehicle_imgs[0]}}\"> -->\n          <img *ngIf=\"!p.vehicle_imgs\" src=\"assets/img/car_3.svg\">\n          <img *ngIf=\"p.vehicle_imgs\" src=\"{{base_url}}{{p.vehicle_imgs[0]}}\">\n      </ion-col>\n      <ion-col class=\"trip_dates\" size=\"4\">\n          <p class=\"blue\">Trip Dates</p>\n          <p class=\"primary\">Start Date</p>\n          <p>{{p.start_date}}</p>\n          <p class=\"primary\">Total Cost</p>\n          <p>${{p.charge_per_day}}</p>\n          <p class=\"give_rating\" (click)=\"editDetail(p)\">Edit Details</p>\n      </ion-col>\n      <ion-col class=\"trip_end_date\" size=\"4\">\n        <p class=\"primary\"> End Date</p>\n        <p>{{p.end_date}}</p>\n\n        <p *ngIf=\"p.admin_status == 'Approved' \" class=\"give_rating-status-aproved\"  >Approved</p>\n        <p *ngIf=\"p.admin_status == 'Pending' \" class=\"give_rating-status-panding\"  >Pending</p>\n      </ion-col>\n    </ion-row>  \n   </ng-container>  \n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"vehicles_list?.length == 0\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n          <h2>Data Not Found!</h2>\n      </ion-col>\n    </ion-row>\n</ng-container>\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToCarList()\">List a Car</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/listed-car/listed-car-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/listed-car/listed-car-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ListedCarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedCarPageRoutingModule", function() { return ListedCarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listed_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listed-car.page */ "./src/app/listed-car/listed-car.page.ts");




var routes = [
    {
        path: '',
        component: _listed_car_page__WEBPACK_IMPORTED_MODULE_3__["ListedCarPage"]
    }
];
var ListedCarPageRoutingModule = /** @class */ (function () {
    function ListedCarPageRoutingModule() {
    }
    ListedCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListedCarPageRoutingModule);
    return ListedCarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/listed-car/listed-car.module.ts":
/*!*************************************************!*\
  !*** ./src/app/listed-car/listed-car.module.ts ***!
  \*************************************************/
/*! exports provided: ListedCarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedCarPageModule", function() { return ListedCarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listed_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listed-car-routing.module */ "./src/app/listed-car/listed-car-routing.module.ts");
/* harmony import */ var _listed_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listed-car.page */ "./src/app/listed-car/listed-car.page.ts");







var ListedCarPageModule = /** @class */ (function () {
    function ListedCarPageModule() {
    }
    ListedCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _listed_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListedCarPageRoutingModule"]
            ],
            declarations: [_listed_car_page__WEBPACK_IMPORTED_MODULE_6__["ListedCarPage"]]
        })
    ], ListedCarPageModule);
    return ListedCarPageModule;
}());



/***/ }),

/***/ "./src/app/listed-car/listed-car.page.scss":
/*!*************************************************!*\
  !*** ./src/app/listed-car/listed-car.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n  font-size: 16px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.give_rating-status-aproved {\n  background: #82d93a;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  top: 3.5em;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.give_rating-status-panding {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  top: 3.5em;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGVkLWNhci9saXN0ZWQtY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEE7RUFDRyxXQUFBO0VBQ0EsZUFBQTtBQU1IOztBQUpBO0VBQ0ksY0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0FBVUg7O0FBUkE7RUFDSSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBY0o7O0FBWkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFlSjs7QUFiQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQWdCSjs7QUFkQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWlCSiIsImZpbGUiOiJzcmMvYXBwL2xpc3RlZC1jYXIvbGlzdGVkLWNhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24taGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYmdfZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XG59XG4ucGRfYnN7XG4gICAgcGFkZGluZzogMC43ZW0gMWVtO1xufVxuLmxhbWJvIGg0e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4udHJpcF9kYXRlc3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIuNGVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9kYXRlcyBwe1xuICAgbWFyZ2luOiAwcHg7IFxuICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJsdWV7XG4gICAgY29sb3I6IzFBNkJCRTtcbn1cbi5wcmltYXJ5e1xuICAgIGNvbG9yOiNDNDkzMkY7XG59XG4udHJpcF9lbmRfZGF0ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDQuMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9lbmRfZGF0ZSBwe1xuICAgbWFyZ2luOiAwcHg7IFxuICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnN0YXIgaW1nOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdGFyIGltZ3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmdpdmVfcmF0aW5ne1xuICAgIGJhY2tncm91bmQ6ICNEOTNBM0E7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLmdpdmVfcmF0aW5nLXN0YXR1cy1hcHJvdmVke1xuICAgIGJhY2tncm91bmQ6ICM4MmQ5M2E7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMy41ZW07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLmdpdmVfcmF0aW5nLXN0YXR1cy1wYW5kaW5ne1xuICAgIGJhY2tncm91bmQ6ICMwZDBmMGI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMy41ZW07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLmRhbmdlcntcbiAgICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/listed-car/listed-car.page.ts":
/*!***********************************************!*\
  !*** ./src/app/listed-car/listed-car.page.ts ***!
  \***********************************************/
/*! exports provided: ListedCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedCarPage", function() { return ListedCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");






var ListedCarPage = /** @class */ (function () {
    function ListedCarPage(loadingController, restService, storage, router, menuCtrl) {
        this.loadingController = loadingController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ListedCarPage.prototype.ngOnInit = function () {
    };
    ListedCarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
            _this.getCarList();
            _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
            });
        });
    };
    ListedCarPage.prototype.getCarList = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "get_cars_list",
            "usersID": this.userID
        });
        console.log(stringy);
        this.present();
        this.restService.list_vehicles(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.vehicles_list = _this.response.vehicles_list;
            _this.dismiss();
            console.log(_this.response);
            console.log(_this.vehicles_list);
            _this.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    ListedCarPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ListedCarPage.prototype.goToCarList = function () {
        this.router.navigate(['/list-your-car']);
    };
    ListedCarPage.prototype.editDetail = function (booking_details) {
        var myData = JSON.stringify({
            booking_details: booking_details
        });
        this.router.navigate(['/edit-list-your-car'], {
            queryParams: {
                value: myData
            },
        });
    };
    ListedCarPage.prototype.present = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Please wait...',
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListedCarPage.prototype.dismiss = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListedCarPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ListedCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listed-car',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listed-car.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-car/listed-car.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listed-car.page.scss */ "./src/app/listed-car/listed-car.page.scss")).default]
        })
    ], ListedCarPage);
    return ListedCarPage;
}());



/***/ })

}]);
//# sourceMappingURL=listed-car-listed-car-module.js.map