(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["summary-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\n    </ion-buttons>\n    <ion-title>{{booking_details.model_name}}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col class=\"slider_main\">\n      <ion-slides pager=\"true\" >\n\n        <ion-slide *ngFor=\"let p of vehicle_imgs; let i = index\">\n          <div class=\"slide\" >\n            <img src=\"{{base_url}}{{p}}\" class=\"s_img\" (click)=\"previewImage(p)\"/>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"trip_cost\">\n    <ion-col size=\"6\" >\n      <h4>TRIP COST</h4>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-right\">\n      <h4 class=\"primary_color\">{{currency_symbol}}{{booking_details.trip_cost}}</h4>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr bg_white\" >\n    <ion-col size=\"12\">\n      <h4>Trip Dates</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Start Date</small>\n      <p>{{booking_details.start_date}}</p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>End Date</small>\n      <p>{{booking_details.end_date}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr\">\n    <ion-col size=\"12\">\n      <h4>Trip Time</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Start Time</small>\n      <p>{{start_time}}</p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>End Time</small>\n      <p>{{end_time}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr bg_white\">\n    <ion-col size=\"12\">\n      <h4>Location</h4>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Pickup</small>\n      <p>{{booking_details.pickup_location}}</p>\n    </ion-col>\n    <ion-col size=\"6\">\n      <small>Dropoff</small>\n      <p>{{booking_details.dropoff_location}}</p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"descr bg_white\">\n    <ion-col size=\"12\">\n      <h4>Driving License</h4>\n    </ion-col>\n    <ion-col size=\"12\">\n      <img src=\"{{base_url}}{{booking_details.license_img_url}}\">\n    </ion-col>\n    \n  </ion-row>\n  <ion-row class=\"btn_footer\"> \n    <ion-col size=\"2\">\n    </ion-col>\n    <ion-col size=\"8\">\n      <ng-conatiner *ngIf=\"booking_details.status == 'Pending'\">\n        <!-- <ion-button *ngIf=\"booking_details.status == 'Accepted' \" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"flutterWaves()\">Make Payment</ion-button> -->\n        <ion-button *ngIf=\"booking_details.status == 'Pending' \" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"bookingpage('pending')\">View Booking</ion-button>\n      </ng-conatiner>\n\n      <ng-conatiner *ngIf=\"booking_details.status == 'Accepted'\">\n        <ion-button *ngIf=\"!paymentDone\" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"flutterWaves()\">Make Payment</ion-button>\n        <ion-button *ngIf=\"paymentDone\" color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"bookingpage('upcoming')\">View Booking</ion-button>\n      </ng-conatiner>\n     \n     \n    </ion-col>\n  </ion-row>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/summary/summary-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/summary/summary-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary.page */ "./src/app/summary/summary.page.ts");




var routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"]
    }
];
var SummaryPageRoutingModule = /** @class */ (function () {
    function SummaryPageRoutingModule() {
    }
    SummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SummaryPageRoutingModule);
    return SummaryPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/summary/summary.module.ts":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.module.ts ***!
  \*******************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-routing.module */ "./src/app/summary/summary-routing.module.ts");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/summary/summary.page.ts");







var SummaryPageModule = /** @class */ (function () {
    function SummaryPageModule() {
    }
    SummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]
            ],
            declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
        })
    ], SummaryPageModule);
    return SummaryPageModule;
}());



/***/ }),

/***/ "./src/app/summary/summary.page.scss":
/*!*******************************************!*\
  !*** ./src/app/summary/summary.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-content {\n  --background: #f9f9f9;\n}\n\n.slider_main {\n  padding: 1em 0.6em 0em 0.6em;\n}\n\n.primary_color {\n  color: #c4932f;\n}\n\n.trip_cost {\n  padding: 0em 0.4em 5px 0.4em;\n}\n\n.trip_cost h4 {\n  margin: 0px;\n}\n\n.s_img {\n  width: 100%;\n}\n\n.slide {\n  width: 100%;\n  height: 170px;\n}\n\n.pentagon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n\n.heart {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n}\n\n.badge {\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  right: 0px;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n}\n\n.badge_price {\n  font-size: 20px;\n  color: #c4932f;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -2px;\n}\n\n.descr {\n  padding: 0em 0.6em;\n}\n\n.bg_white {\n  background: #fff;\n}\n\n.descr h3 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.descr h4 {\n  margin: 10px 0px;\n}\n\n.descr p {\n  font-size: 12px;\n}\n\n.descr small {\n  color: #c4932f;\n}\n\n.rating {\n  padding: 0em 0.3em;\n}\n\n.view_all {\n  font-size: 10px;\n  text-align: right;\n  padding-right: 1em;\n  color: #c4932f;\n  padding-top: 1em;\n}\n\n.stars img {\n  margin-left: 4px;\n}\n\n.left_star {\n  margin-left: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nimg {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksNEJBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLDRCQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQU9KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBVUo7O0FBUkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVdKOztBQVRBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0FBY0o7O0FBWkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFlSjs7QUFiQTtFQUNJLGdCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksZUFBQTtBQWlCSjs7QUFmQTtFQUNJLGNBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksZ0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksZ0JBQUE7QUFzQko7O0FBcEJBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBdUJKOztBQXJCQTtFQUNJLDRCQUFBO0FBd0JKOztBQXRCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBMEJKOztBQXhCQTtFQUNJLG1CQUFBO0FBMkJKIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5pb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuLnNsaWRlcl9tYWluIHtcbiAgICBwYWRkaW5nOiAxZW0gMC42ZW0gMGVtIDAuNmVtO1xufVxuLnByaW1hcnlfY29sb3Ige1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xufVxuLnRyaXBfY29zdCB7XG4gICAgcGFkZGluZzogMGVtIDAuNGVtIDVweCAwLjRlbTtcbn1cbi50cmlwX2Nvc3QgaDQge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnNfaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxNzBweDtcblxufVxuLnBlbnRhZ29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMnB4O1xuICAgIGxlZnQ6IDEycHg7XG59XG4uaGVhcnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMWVtO1xuICAgIGJvdHRvbTogMWVtO1xufVxuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG4uYmFkZ2VfZG9sbGFyIHtcbiAgICBjb2xvcjogI2M0OTMyZjtcbiAgICBmb250LXNpemU6IDlweDtcbn1cbi5iYWRnZV9wcmljZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xufVxuLmJhZGdlX3BlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA2cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmRlc2NyIHtcbiAgICBwYWRkaW5nOiAwZW0gMC42ZW07XG59XG4uYmdfd2hpdGUge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZGVzY3IgaDMge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uZGVzY3IgaDQge1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG4uZGVzY3IgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRlc2NyIHNtYWxsIHtcbiAgICBjb2xvcjogI2M0OTMyZjtcbn1cbi5yYXRpbmcge1xuICAgIHBhZGRpbmc6IDBlbSAwLjNlbTtcbn1cbi52aWV3X2FsbCB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICBjb2xvcjogI2M0OTMyZjtcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xufVxuLnN0YXJzIGltZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5sZWZ0X3N0YXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuX2Zvb3RlciB7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtIDEuMmVtIDFlbTtcbn1cbi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiAjNmU2ZDZkO1xuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcbn1cbi5pbmZvIHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbmltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/summary/summary.page.ts":
/*!*****************************************!*\
  !*** ./src/app/summary/summary.page.ts ***!
  \*****************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flutterwave-angular-v3 */ "./node_modules/flutterwave-angular-v3/__ivy_ngcc__/flutterwave-angular-v3.js");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");








var SummaryPage = /** @class */ (function () {
    function SummaryPage(photoViewer, storage, router, activatedRoute, flutterwave, restService, uniqueID) {
        var _this = this;
        this.photoViewer = photoViewer;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.flutterwave = flutterwave;
        this.restService = restService;
        this.uniqueID = uniqueID;
        this.customerDetails = { name: '', email: '', phone_number: '' };
        this.customizations = { title: 'TransUS', description: 'Pay now for confrim your booking', logo: 'https://flutterwave.com/images/logo-colored.svg' };
        this.meta = { counsumer_id: '', consumer_mac: '' };
        this.paymentDone = false;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            console.log(_this.response);
            _this.booking_details = _this.response.booking_details;
            _this.vehicle_imgs = _this.response.vehicle_imgs;
            _this.trip_cost = _this.booking_details.trip_cost;
            _this.booking_id = _this.booking_details.bookings_id;
            _this.publicKey = _this.booking_details.flutterWave_public_key;
            _this.start_time = _this.converTime(_this.booking_details.start_time);
            _this.end_time = _this.converTime(_this.booking_details.end_time);
        });
    }
    SummaryPage.prototype.ngOnInit = function () {
        var _this = this;
        this.uniqueID.get()
            .then(function (uuid) {
            console.log(uuid, "uniquedevideID");
            _this.meta.consumer_mac = uuid;
        })
            .catch(function (error) { return console.log(error); });
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
            _this.meta.counsumer_id = _this.userID;
            _this.customerDetails.name = user_details.user_name;
            _this.customerDetails.email = user_details.email;
            _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
            });
            _this.storage.get('currency_symbol').then(function (currency_symbol) {
                _this.currency_symbol = currency_symbol;
            });
        });
    };
    SummaryPage.prototype.converTime = function (time) {
        var hour = (time.split(':'))[0];
        var min = (time.split(':'))[1];
        var part = hour > 12 ? 'pm' : 'am';
        min = (min + '').length == 1 ? '0' + min : min;
        hour = hour > 12 ? hour - 12 : hour;
        hour = (hour + '').length == 1 ? '0' + hour : hour;
        return (hour + ':' + min + ' ' + part);
    };
    SummaryPage.prototype.previewImage = function (p) {
        this.photoViewer.show(this.base_url + '' + p);
    };
    SummaryPage.prototype.back = function () {
        this.router.navigate(['/']);
    };
    SummaryPage.prototype.paymentss = function () {
        var _this = this;
        var JsData = JSON.stringify({
            currencyID: "1",
            requestType: "payment_process",
            email: this.Email,
            amount: this.trip_cost,
            booking_id: this.booking_id
        });
        this.restService.payementAPi(JsData).subscribe(function (res) {
            console.log(res, "get responce from booking getway");
            _this.hostedRes = JSON.parse(res['_body']);
            _this.ForLink = _this.hostedRes.flutter_reponse;
            console.log(_this.ForLink);
            console.log(_this.ForLink.data.link);
            _this.fLink = _this.ForLink.data.link;
            console.log(_this.fLink);
            //   const browser = this.iab.create(this.fLink, '_blank', { location: 'no', footer: 'yes', zoom: 'no', usewkwebview: 'yes', toolbar: 'yes' ,closebuttoncaption:'CLOSE WINDOW'});
        }, function (err) {
            console.log(err);
        });
    };
    SummaryPage.prototype.bookingpage = function (getValue) {
        this.router.navigate(['/other-booking-list'], {
            queryParams: {
                value: getValue
            },
        });
    };
    SummaryPage.prototype.payment = function () {
        var myData = JSON.stringify({
            booking_details: this.booking_details
        });
        // this.router.navigate(['/payment-detail'],{
        this.router.navigate(['/flutter-waves'], {
            queryParams: {
                value: myData
            },
        });
    };
    SummaryPage.prototype.flutterWaves = function () {
        var _this = this;
        var paymentData = {
            public_key: this.publicKey,
            tx_ref: this.generateReference(),
            amount: this.trip_cost,
            currency: 'USD',
            payment_options: 'card',
            meta: this.meta,
            customer: this.customerDetails,
            customizations: this.customizations,
        };
        console.log("complete result = ", paymentData);
        this.flutterwave.asyncInlinePay(paymentData).then(function (response) {
            console.log("Promise Res line 88", response);
            _this.getRespo = response;
            _this.flutterwave.closePaymentModal(5);
            if (_this.getRespo.status == "successful") {
                console.log("success condition");
                var sucFul = JSON.stringify({
                    requestType: "payment_process",
                    amount: _this.getRespo.amount,
                    customer_userid: _this.userID,
                    flw_ref: _this.getRespo.flw_ref,
                    transaction_id: _this.getRespo.transaction_id,
                    bookings_id: _this.booking_id,
                    ownerID: _this.booking_details.veh_users_id,
                    currency: "USD",
                    currencyID: "1"
                });
                _this.restService.paidbooking(sucFul).subscribe(function (res) {
                    console.log(res, "paid save in webservice");
                    _this.paymentDone = true;
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    SummaryPage.prototype.closedPaymentModal = function () {
        console.log('payment is closed');
    };
    SummaryPage.prototype.generateReference = function () {
        var date = new Date();
        return date.getTime().toString();
    };
    SummaryPage.ctorParameters = function () { return [
        { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_4__["PhotoViewer"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_6__["Flutterwave"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
        { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__["UniqueDeviceID"] }
    ]; };
    SummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-summary',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./summary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/summary/summary.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./summary.page.scss */ "./src/app/summary/summary.page.scss")).default]
        })
    ], SummaryPage);
    return SummaryPage;
}());



/***/ })

}]);
//# sourceMappingURL=summary-summary-module.js.map