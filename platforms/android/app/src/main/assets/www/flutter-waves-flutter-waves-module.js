(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flutter-waves-flutter-waves-module"],{

/***/ "./src/app/flutter-waves/flutter-waves-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FlutterWavesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterWavesPageRoutingModule", function() { return FlutterWavesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _flutter_waves_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flutter-waves.page */ "./src/app/flutter-waves/flutter-waves.page.ts");




var routes = [
    {
        path: '',
        component: _flutter_waves_page__WEBPACK_IMPORTED_MODULE_3__["FlutterWavesPage"]
    }
];
var FlutterWavesPageRoutingModule = /** @class */ (function () {
    function FlutterWavesPageRoutingModule() {
    }
    FlutterWavesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FlutterWavesPageRoutingModule);
    return FlutterWavesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/flutter-waves/flutter-waves.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves.module.ts ***!
  \*******************************************************/
/*! exports provided: FlutterWavesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterWavesPageModule", function() { return FlutterWavesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _flutter_waves_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flutter-waves-routing.module */ "./src/app/flutter-waves/flutter-waves-routing.module.ts");
/* harmony import */ var _flutter_waves_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flutter-waves.page */ "./src/app/flutter-waves/flutter-waves.page.ts");







var FlutterWavesPageModule = /** @class */ (function () {
    function FlutterWavesPageModule() {
    }
    FlutterWavesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _flutter_waves_routing_module__WEBPACK_IMPORTED_MODULE_5__["FlutterWavesPageRoutingModule"]
            ],
            declarations: [_flutter_waves_page__WEBPACK_IMPORTED_MODULE_6__["FlutterWavesPage"]]
        })
    ], FlutterWavesPageModule);
    return FlutterWavesPageModule;
}());



/***/ }),

/***/ "./src/app/flutter-waves/flutter-waves.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZsdXR0ZXItd2F2ZXMvZmx1dHRlci13YXZlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/flutter-waves/flutter-waves.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flutter-waves/flutter-waves.page.ts ***!
  \*****************************************************/
/*! exports provided: FlutterWavesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterWavesPage", function() { return FlutterWavesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flutterwave-angular-v3 */ "./node_modules/flutterwave-angular-v3/__ivy_ngcc__/flutterwave-angular-v3.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");







var FlutterWavesPage = /** @class */ (function () {
    function FlutterWavesPage(toastController, flutterwave, loadingController, storage, restService, activatedRoute, router, menuCtrl) {
        this.toastController = toastController;
        this.flutterwave = flutterwave;
        this.loadingController = loadingController;
        this.storage = storage;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.trip_cost = 77;
        this.date = '';
        this.publicKey = "FLWPUBK_TEST-24a82587c83dda8d3c3a9ea64dd6e405-X";
        this.customerDetails = { name: '', email: '', phone_number: '' };
        this.customizations = { title: 'TransUS', description: 'Pay now for confrim your booking', logo: 'https://flutterwave.com/images/logo-colored.svg' };
        this.meta = { 'counsumer_id': '7898', 'consumer_mac': 'kjs9s8ss7dd' };
        this.paymentData = {
            public_key: this.publicKey,
            tx_ref: this.generateReference(),
            amount: this.trip_cost,
            currency: 'NGN',
            payment_options: 'card',
            meta: this.meta,
            customer: this.customerDetails,
            customizations: this.customizations,
        };
    }
    FlutterWavesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            console.log(_this.response);
            _this.booking_details = _this.response.booking_details;
            _this.trip_cost = parseInt(_this.booking_details.trip_cost);
            _this.booking_id = _this.booking_details.bookings_id;
            console.log(_this.trip_cost);
            _this.storage.get('user_details').then(function (user_details) {
                console.log(user_details);
                _this.wallet_amount = user_details.wallet_amount;
                _this.userID = user_details.users_id;
                _this.Email = user_details.email;
                _this.name = user_details.user_name;
                _this.customerDetails.name = _this.name;
                _this.customerDetails.email = _this.Email;
                _this.date = new Date();
                _this.date.getTime().toString();
                console.log(_this.customerDetails);
            });
            /*var date1 = new Date(this.booking_details.start_date);
            var date2 = new Date(this.booking_details.end_date);
            var Difference_In_Time = date2.getTime() - date1.getTime();
        
            // To calculate the no. of days between two dates
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
              console.log('dieffernce in days: '+Difference_In_Days);*/
        });
    };
    FlutterWavesPage.prototype.payViaPromise = function () {
        var _this = this;
        this.flutterwave.asyncInlinePay(this.paymentData).then(function (response) {
            console.log("Promise Res line 88", response);
            _this.getRespo = response;
            _this.flutterwave.closePaymentModal(5);
            if (_this.getRespo.status == "successful") {
            }
        });
    };
    FlutterWavesPage.prototype.makePaymentCallback = function (response) {
        console.log("Pay", response);
        this.flutterwave.closePaymentModal(5);
    };
    FlutterWavesPage.prototype.closedPaymentModal = function () {
        console.log('payment is closed');
    };
    FlutterWavesPage.prototype.generateReference = function () {
        var date = new Date();
        return date.getTime().toString();
    };
    FlutterWavesPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_5__["Flutterwave"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_6__["RestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    FlutterWavesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flutter-waves',
            // templateUrl: './flutter-waves.page.html',
            template: " <button (click)=\"payViaPromise()\" >Pay via Promise </button>",
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./flutter-waves.page.scss */ "./src/app/flutter-waves/flutter-waves.page.scss")).default]
        })
    ], FlutterWavesPage);
    return FlutterWavesPage;
}());



/***/ })

}]);
//# sourceMappingURL=flutter-waves-flutter-waves-module.js.map