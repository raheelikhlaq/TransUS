(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-detail-payment-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-detail/payment-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-detail/payment-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Payment</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"bg\">\n    <ion-col size=\"12\">\n      <h3>Method - ({{currency_symbol}} {{wallet_amount}})</h3>\n    </ion-col>\n    <ion-col size=\"4\" *ngFor=\"let p of payment_methods; let i = index\" (click)=\"getStartIndex(i)\">\n      <div class=\"ion-text-center bg_cell\" [class.bg_active]=\"sliderStartBoolean == i\">\n         <img src=\"{{base_url}}{{p.white_icon_url}}\" >\n      </div>\n    </ion-col>\n\n  </ion-row>\n  <ion-row class=\"bys\">\n    <ion-col size=\"12\">\n      <h3>Details</h3>\n    </ion-col>\n    <ion-col>\n      <ion-input  [(ngModel)]=\"desc\"  placeholder=\"Account Number\" class=\"input_list\"></ion-input>\n    </ion-col>\n    <span *ngIf=\"amount_error\" class=\"error ion-padding\">\n     Your wallet amount is insufficient.\n    </span>\n    </ion-row>\n    \n    <ion-row >\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"sendPayment()\">Done</ion-button>\n      </ion-col>\n    </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/payment-detail/payment-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/payment-detail/payment-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPageRoutingModule", function() { return PaymentDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-detail.page */ "./src/app/payment-detail/payment-detail.page.ts");




var routes = [
    {
        path: '',
        component: _payment_detail_page__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailPage"]
    }
];
var PaymentDetailPageRoutingModule = /** @class */ (function () {
    function PaymentDetailPageRoutingModule() {
    }
    PaymentDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PaymentDetailPageRoutingModule);
    return PaymentDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/payment-detail/payment-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment-detail/payment-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPageModule", function() { return PaymentDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-detail-routing.module */ "./src/app/payment-detail/payment-detail-routing.module.ts");
/* harmony import */ var _payment_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-detail.page */ "./src/app/payment-detail/payment-detail.page.ts");







var PaymentDetailPageModule = /** @class */ (function () {
    function PaymentDetailPageModule() {
    }
    PaymentDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _payment_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentDetailPageRoutingModule"]
            ],
            declarations: [_payment_detail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailPage"]]
        })
    ], PaymentDetailPageModule);
    return PaymentDetailPageModule;
}());



/***/ }),

/***/ "./src/app/payment-detail/payment-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/payment-detail/payment-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.bg {\n  background: #f9f9f9;\n  padding: 0em 1em 1.5em 1em;\n}\n\n.bg_active {\n  background: #1a6bbe !important;\n  border-radius: 6px;\n  box-shadow: 2px 2px 6px #00000059;\n  padding: 5px 10px;\n  height: 60px;\n}\n\n.bg_cell {\n  border-radius: 6px;\n  box-shadow: 2px 2px 6px #0000002b;\n  padding: 18px 10px;\n  background: #fff;\n  height: 60px;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #d4dce1;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.bys {\n  padding: 0em 1em 1.5em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudC1kZXRhaWwvcGF5bWVudC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBQUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLDBCQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50LWRldGFpbC9wYXltZW50LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmJnIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIHBhZGRpbmc6IDBlbSAxZW0gMS41ZW0gMWVtO1xufVxuLmJnX2FjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogIzFhNmJiZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAjMDAwMDAwNTk7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuLmJnX2NlbGwge1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCAjMDAwMDAwMmI7XG4gICAgcGFkZGluZzogMThweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uaW5wdXRfbGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjZDRkY2UxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG59XG5cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5ieXMge1xuICAgIHBhZGRpbmc6IDBlbSAxZW0gMS41ZW0gMWVtO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/payment-detail/payment-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/payment-detail/payment-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: PaymentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPage", function() { return PaymentDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var PaymentDetailPage = /** @class */ (function () {
    function PaymentDetailPage(toastController, loadingController, storage, restService, activatedRoute, router, menuCtrl) {
        var _this = this;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.restService = restService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.sliderStartBoolean = 0;
        this.amount_error = false;
        this.desc = '';
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            console.log(_this.response);
            _this.booking_details = _this.response.booking_details;
            _this.trip_cost = _this.booking_details.trip_cost;
            _this.booking_id = _this.booking_details.bookings_id;
            console.log(_this.trip_cost);
            /*var date1 = new Date(this.booking_details.start_date);
            var date2 = new Date(this.booking_details.end_date);
            var Difference_In_Time = date2.getTime() - date1.getTime();
        
            // To calculate the no. of days between two dates
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
              console.log('dieffernce in days: '+Difference_In_Days);*/
        });
    }
    PaymentDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('base_urls').then(function (base_url) {
            _this.base_url = base_url;
            _this.storage.get('user_details').then(function (user_details) {
                console.log(user_details);
                _this.wallet_amount = user_details.wallet_amount;
                _this.userID = user_details.users_id;
                _this.Email = user_details.email;
                _this.getUserDetail();
                _this.storage.get('currency_symbol').then(function (currency_symbol) {
                    _this.currency_symbol = currency_symbol;
                });
            });
            _this.get_payment_method_detail();
        });
    };
    PaymentDetailPage.prototype.getStartIndex = function (i) {
        var _this = this;
        document.querySelector('.bg_active img').setAttribute('src', this.base_url + '' + this.payment_methods[this.sliderStartBoolean].white_icon_url);
        this.sliderStartBoolean = i;
        setTimeout(function () {
            document.querySelector('.bg_active img').setAttribute('src', _this.base_url + '' + _this.payment_methods[_this.sliderStartBoolean].blue_icon_url);
        }, 100);
    };
    PaymentDetailPage.prototype.get_payment_method_detail = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "payment_methods"
        });
        console.log(stringy);
        this.restService.getDdlData(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.payment_methods = _this.response.payment_methods;
            console.log(_this.response);
            _this.getStartIndex(0);
        }, function (err) {
        });
    };
    PaymentDetailPage.prototype.getUserDetail = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "usersID": this.userID,
            "requestType": 'withID'
        });
        console.log(stringy);
        this.restService.getUserDetails(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            if (_this.response.status == 'NotFound') {
            }
            else if (_this.response.status == 'Found') {
                _this.storage.set('user_details', _this.response.user_details);
                _this.wallet_amount = _this.response.user_details.wallet_amount;
            }
        }, function (err) {
        });
    };
    PaymentDetailPage.prototype.sendPayment = function () {
        var _this = this;
        this.amount_error = false;
        var wallet_amount = parseFloat(this.response.user_details.wallet_amount.replace(/,/g, ''));
        var trip_cost = parseFloat(this.booking_details.trip_cost.replace(/,/g, ''));
        if (wallet_amount > trip_cost) {
            var stringy = JSON.stringify({
                "usersID": this.userID,
                "requestType": 'make_payment',
                "bookingID": this.booking_details.bookings_id,
                "paymentMethodID": this.payment_methods[0].payment_methods_id,
                "desc": this.desc
            });
            console.log(stringy);
            this.present();
            this.restService.transactions(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response);
                if (_this.response.status == 'success') {
                    _this.presentToast('Your payment has been received and admin will review your booking.');
                }
                else {
                    _this.presentToast('Oops! something went wrong!');
                }
                _this.dismiss();
                _this.router.navigate(['/']);
            }, function (err) {
                _this.dismiss();
            });
        }
        else {
            this.amount_error = true;
        }
    };
    PaymentDetailPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    PaymentDetailPage.prototype.presentToast = function (msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaymentDetailPage.prototype.present = function () {
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
    PaymentDetailPage.prototype.dismiss = function () {
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
    PaymentDetailPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    PaymentDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-detail/payment-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-detail.page.scss */ "./src/app/payment-detail/payment-detail.page.scss")).default]
        })
    ], PaymentDetailPage);
    return PaymentDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=payment-detail-payment-detail-module.js.map