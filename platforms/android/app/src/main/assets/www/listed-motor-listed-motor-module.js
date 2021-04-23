(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listed-motor-listed-motor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-motor/listed-motor.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listed-motor/listed-motor.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Listed Motor</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ng-container *ngIf=\"vehicles_list?.length >0\">\n    <ng-container *ngFor=\"let p of vehicles_list; let i = index\">\n      <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n        <ion-col size=\"4\" class=\"lambo\">\n            <img src=\"{{base_url}}{{p.license_no_img}}\">\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n            <h4>License Number</h4>\n            <p class=\"blue\">Availability Status</p>\n            <p class=\"b_list7\" *ngIf=\"p.available == 'Yes'\"><b class=\"bullet\"></b> Available</p>\n            <p class=\"b_list7\" *ngIf=\"p.available == 'No'\"><b class=\"bullet\"></b> Unavailable</p>\n            <p class=\"give_rating\" (click)=\"goToEdit(p)\">Edit Details</p>\n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <ion-item lines=\"none\">\n            <ng-container *ngIf=\"p.available == 'Yes'\">\n              <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n            </ng-container>\n            <ng-container *ngIf=\"p.available == 'No'\">\n              <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" ></ion-toggle>\n            </ng-container>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n        <ion-col size=\"4\" class=\"lambo\">\n            <img src=\"{{base_url}}{{p.license_no_img}}\">\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n            <h4>License Number</h4>\n            <p class=\"blue\">Availability Status</p>\n            <p class=\"b_list7\" *ngIf=\"p.available == 'Yes'\"><b class=\"bullet\"></b> Available</p>\n            <p class=\"b_list7\" *ngIf=\"p.available == 'No'\"><b class=\"bullet\"></b> Unavailable</p>\n            <p class=\"give_rating\" (click)=\"goToEdit(p)\">Edit Details</p>\n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <ion-item lines=\"none\">\n            <ng-container *ngIf=\"p.available == 'Yes'\">\n              <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n            </ng-container>\n            <ng-container *ngIf=\"p.available == 'No'\">\n              <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" ></ion-toggle>\n            </ng-container>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n  </ng-container>\n</ng-container>\n<ng-container *ngIf=\"vehicles_list?.length == 0\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n        <h2>Data Not Found!</h2>\n    </ion-col>\n  </ion-row>\n</ng-container>\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToBikeList()\">List a Motor</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/listed-motor/listed-motor-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/listed-motor/listed-motor-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListedMotorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedMotorPageRoutingModule", function() { return ListedMotorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listed_motor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listed-motor.page */ "./src/app/listed-motor/listed-motor.page.ts");




var routes = [
    {
        path: '',
        component: _listed_motor_page__WEBPACK_IMPORTED_MODULE_3__["ListedMotorPage"]
    }
];
var ListedMotorPageRoutingModule = /** @class */ (function () {
    function ListedMotorPageRoutingModule() {
    }
    ListedMotorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListedMotorPageRoutingModule);
    return ListedMotorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/listed-motor/listed-motor.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/listed-motor/listed-motor.module.ts ***!
  \*****************************************************/
/*! exports provided: ListedMotorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedMotorPageModule", function() { return ListedMotorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listed_motor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listed-motor-routing.module */ "./src/app/listed-motor/listed-motor-routing.module.ts");
/* harmony import */ var _listed_motor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listed-motor.page */ "./src/app/listed-motor/listed-motor.page.ts");







var ListedMotorPageModule = /** @class */ (function () {
    function ListedMotorPageModule() {
    }
    ListedMotorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _listed_motor_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListedMotorPageRoutingModule"]
            ],
            declarations: [_listed_motor_page__WEBPACK_IMPORTED_MODULE_6__["ListedMotorPage"]]
        })
    ], ListedMotorPageModule);
    return ListedMotorPageModule;
}());



/***/ }),

/***/ "./src/app/listed-motor/listed-motor.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/listed-motor/listed-motor.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-header {\n  margin-bottom: 10px;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n  font-size: 16px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 0em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.trip_dates h4 {\n  font-size: 14px;\n  margin: 5px 0px 0px 0px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 2.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.b_list7 {\n  margin: 0px;\n  font-size: 12px;\n}\n\n.b_list7 span {\n  color: #E2AC3C;\n}\n\n.bullet {\n  height: 8px;\n  width: 8px;\n  background: #0ec10e;\n  margin: 0px;\n  display: inline-grid;\n  border-radius: 16px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\nion-toggle {\n  height: 22px;\n  padding-right: 0px;\n  padding-top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGVkLW1vdG9yL2xpc3RlZC1tb3Rvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUZBO0VBQ0csV0FBQTtFQUNBLGVBQUE7QUFLSDs7QUFIQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFQQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0FBVUg7O0FBUkE7RUFDSSwyQkFBQTtBQVdKOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQWFKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBY0o7O0FBWEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksY0FBQTtBQWVKOztBQWJBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBZ0JKOztBQWRBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksOEJBQUE7QUFrQko7O0FBaEJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBbUJKOztBQWpCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBb0JKIiwiZmlsZSI6InNyYy9hcHAvbGlzdGVkLW1vdG9yL2xpc3RlZC1tb3Rvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24taGVhZGVye1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYmdfZ3JleXtcbiAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XG59XG4ucGRfYnN7XG4gICAgcGFkZGluZzogMC43ZW0gMWVtO1xufVxuLmxhbWJvIGg0e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4udHJpcF9kYXRlc3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDBlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xufVxuXG4udHJpcF9kYXRlcyBwe1xuICAgbWFyZ2luOiAwcHg7IFxuICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnRyaXBfZGF0ZXMgaDR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogNXB4IDBweCAwcHggMHB4O1xufVxuLmJsdWV7XG4gICAgY29sb3I6IzFBNkJCRTtcbn1cbi5wcmltYXJ5e1xuICAgIGNvbG9yOiNDNDkzMkY7XG59XG4udHJpcF9lbmRfZGF0ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIuMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9lbmRfZGF0ZSBwe1xuICAgbWFyZ2luOiAwcHg7IFxuICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnN0YXIgaW1nOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdGFyIGltZ3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmdpdmVfcmF0aW5ne1xuICAgIGJhY2tncm91bmQ6ICNEOTNBM0E7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLmRhbmdlcntcbiAgICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmJfbGlzdDd7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJfbGlzdDcgc3BhbntcbiAgICBjb2xvcjojRTJBQzNDO1xufVxuLmJ1bGxldHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGJhY2tncm91bmQ6ICMwZWMxMGU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuaW9uLXRvZ2dsZS50b2dnbGUtY2hlY2tlZDo6cGFydCh0cmFjaykgIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk2IDE0NyA0NykgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLXRvZ2dsZXtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/listed-motor/listed-motor.page.ts":
/*!***************************************************!*\
  !*** ./src/app/listed-motor/listed-motor.page.ts ***!
  \***************************************************/
/*! exports provided: ListedMotorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListedMotorPage", function() { return ListedMotorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var ListedMotorPage = /** @class */ (function () {
    function ListedMotorPage(loadingController, restService, storage, router, menuCtrl) {
        this.loadingController = loadingController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ListedMotorPage.prototype.ngOnInit = function () {
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
    ListedMotorPage.prototype.ionViewWillEnter = function () {
        if (this.userID) {
            this.getCarList();
        }
    };
    ListedMotorPage.prototype.getCarList = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "get_motors_list",
            "usersID": this.userID
        });
        console.log(stringy);
        this.restService.list_vehicles(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.vehicles_list = _this.response.vehicles_list;
            console.log(_this.response);
        }, function (err) {
        });
    };
    ListedMotorPage.prototype.goToEdit = function (data) {
        var myData = JSON.stringify({
            booking_details: data
        });
        this.router.navigate(['/edit-motor'], {
            queryParams: {
                value: myData
            },
        });
    };
    ListedMotorPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ListedMotorPage.prototype.goToBikeList = function () {
        this.router.navigate(['/list-your-bike']);
    };
    ListedMotorPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ListedMotorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listed-motor',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listed-motor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/listed-motor/listed-motor.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listed-motor.page.scss */ "./src/app/listed-motor/listed-motor.page.scss")).default]
        })
    ], ListedMotorPage);
    return ListedMotorPage;
}());



/***/ })

}]);
//# sourceMappingURL=listed-motor-listed-motor-module.js.map