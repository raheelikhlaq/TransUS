(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["earning-earning-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/earning/earning.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/earning/earning.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"mf\"  slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" class=\"mleft\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Earnings</ion-title>\n    \n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"wallet_main\">\n    <ion-row class=\"wallet_inner\">\n      <ion-col size=\"6\">\n        <p class=\"dark_p_color\">Wallet Balance</p>\n        <h3 class=\"dark_p_color\">{{currency_symbol}}{{wallet_amount}}</h3>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"withdrawRequest()\">Withdraw</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n \n  <ion-row class=\"graph_main\">\n    <ion-col size=\"12\" class=\"graph_inner\">\n      <div style=\"display: block;\">\n        <canvas baseChart \n          height=\"350\"\n          [colors]=\"chartColors\"\n          [datasets]=\"barChartData\"\n          [labels]=\"barChartLabels\"\n          [options]=\"barChartOptions\"\n          [plugins]=\"barChartPlugins\"\n          [legend]=\"barChartLegend\"\n          [chartType]=\"barChartType\">\n        </canvas>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class=\"total_main alura\">\n    <ion-row>\n      <ion-col size=\"6\">Earnings</ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">{{currency_symbol}}{{total_earning}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Trip Earnings</ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">{{currency_symbol}}{{total_trip_cost}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Taxes</ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">{{currency_symbol}}{{total_tax}}</ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">Refund</ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">{{currency_symbol}}{{total_refund}}</ion-col>\n    </ion-row>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/earning/earning-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/earning/earning-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EarningPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPageRoutingModule", function() { return EarningPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _earning_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./earning.page */ "./src/app/earning/earning.page.ts");




var routes = [
    {
        path: '',
        component: _earning_page__WEBPACK_IMPORTED_MODULE_3__["EarningPage"]
    }
];
var EarningPageRoutingModule = /** @class */ (function () {
    function EarningPageRoutingModule() {
    }
    EarningPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EarningPageRoutingModule);
    return EarningPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/earning/earning.module.ts":
/*!*******************************************!*\
  !*** ./src/app/earning/earning.module.ts ***!
  \*******************************************/
/*! exports provided: EarningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPageModule", function() { return EarningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _earning_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./earning-routing.module */ "./src/app/earning/earning-routing.module.ts");
/* harmony import */ var _earning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./earning.page */ "./src/app/earning/earning.page.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");








var EarningPageModule = /** @class */ (function () {
    function EarningPageModule() {
    }
    EarningPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _earning_routing_module__WEBPACK_IMPORTED_MODULE_5__["EarningPageRoutingModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]
            ],
            declarations: [_earning_page__WEBPACK_IMPORTED_MODULE_6__["EarningPage"]]
        })
    ], EarningPageModule);
    return EarningPageModule;
}());



/***/ }),

/***/ "./src/app/earning/earning.page.scss":
/*!*******************************************!*\
  !*** ./src/app/earning/earning.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.mleft {\n  position: relative;\n  left: 10px;\n}\n\nion-button {\n  --padding-bottom: 1em;\n  --padding-top: 1em;\n  --box-shadow: none;\n}\n\n.wallet_main {\n  background: #c4932f;\n  padding: 1em 2em 5em 2em;\n}\n\n.wallet_inner {\n  background: #fff;\n  border-radius: 12px;\n  padding: 1em 1em;\n}\n\n.wallet_inner p,\nh3 {\n  margin: 0px;\n}\n\nion-content {\n  --background: #f7f8fa;\n}\n\n.graph_main {\n  padding: 0em 2em;\n  margin-top: -4em;\n}\n\n.graph_inner {\n  background: #fff;\n  border-radius: 12px;\n  padding: 1em 1em;\n}\n\n.total_main {\n  background: #fff;\n  border-radius: 12px;\n  margin: 1em 2em;\n  padding: 1em 1em;\n}\n\n.header-md::after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWFybmluZy9lYXJuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSx3QkFBQTtBQUdKOztBQURBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBRkE7O0VBRUksV0FBQTtBQUtKOztBQUhBO0VBQ0kscUJBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksYUFBQTtBQVVKIiwiZmlsZSI6InNyYy9hcHAvZWFybmluZy9lYXJuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWxlZnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi53YWxsZXRfbWFpbiB7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDVlbSAyZW07XG59XG4ud2FsbGV0X2lubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMWVtIDFlbTtcbn1cbi53YWxsZXRfaW5uZXIgcCxcbmgzIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y4ZmE7XG59XG4uZ3JhcGhfbWFpbiB7XG4gICAgcGFkZGluZzogMGVtIDJlbTtcbiAgICBtYXJnaW4tdG9wOiAtNGVtO1xufVxuLmdyYXBoX2lubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgcGFkZGluZzogMWVtIDFlbTtcbn1cbi50b3RhbF9tYWluIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luOiAxZW0gMmVtO1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG59XG4uaGVhZGVyLW1kOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/earning/earning.page.ts":
/*!*****************************************!*\
  !*** ./src/app/earning/earning.page.ts ***!
  \*****************************************/
/*! exports provided: EarningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarningPage", function() { return EarningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var EarningPage = /** @class */ (function () {
    function EarningPage(loadingController, toastController, storage, restService, themeService, menuCtrl) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.storage = storage;
        this.restService = restService;
        this.themeService = themeService;
        this.menuCtrl = menuCtrl;
        /* animation: {
                  onComplete: function () {
                      var chartInstance = this.chart,
                      ctx = chartInstance.ctx;
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
                      this.data.datasets.forEach(function (dataset, i) {
                          var meta = chartInstance.controller.getDatasetMeta(i);
                          meta.data.forEach(function (bar, index) {
                              var data = dataset.data[index];
                              if (data > 0) {
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);
                             }
                          });
                      });
                  }
              } */
        this.barChartOptions = {
            responsive: true,
            scales: {
                yAxes: [
                    {
                        display: false,
                    }
                ]
            },
            // legend: { display: false },
            animation: {
                onComplete: function () {
                    var chartInstance = this.chart, ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                },
                onProgress: function () {
                    var chartInstance = this.chart, ctx = chartInstance.ctx;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'bottom';
                    this.data.datasets.forEach(function (dataset, i) {
                        var meta = chartInstance.controller.getDatasetMeta(i);
                        meta.data.forEach(function (bar, index) {
                            var data = dataset.data[index];
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    });
                }
            }
        };
        this.barChartLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        this.barChartType = 'bar';
        this.barChartLegend = false;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: [0, 0, 0, 0, 0, 0, 0], label: 'Series A' }
        ];
        this.chartColors = [
            {
                backgroundColor: '#E2AC3C',
                borderColor: '#E2AC3C',
                pointBackgroundColor: '#E2AC3C',
                pointBorderColor: '#E2AC3C',
                pointHoverBackgroundColor: '#E2AC3C',
                pointHoverBorderColor: '#E2AC3C'
            }
        ];
        this.total_earning = 0;
        this.total_tax = 0;
        this.total_refund = 0;
        this.total_trip_cost = 0;
        this.sundayEarning = 0;
        this.mondayEarning = 0;
        this.tuesdayEarning = 0;
        this.wednesdayEarning = 0;
        this.thursdayEarning = 0;
        this.fridayEarning = 0;
        this.saturdayEarning = 0;
    }
    EarningPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('currency_symbol').then(function (currency_symbol) {
            _this.currency_symbol = currency_symbol;
        });
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.currencies_id = user_details.currencies_id;
            _this.earning_stats();
        });
    };
    EarningPage.prototype.earning_stats = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "owner_earning",
            "usersID": this.userID,
            "currencyID": this.currencies_id
        });
        console.log(stringy);
        this.restService.transactions(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            if (_this.response.status == 'NotFound') {
            }
            else if (_this.response.status == 'Found') {
                _this.total_earning = _this.response.total_earning;
                _this.total_tax = _this.response.total_tax;
                _this.total_trip_cost = _this.response.total_trip_cost;
                _this.total_refund = _this.response.total_refund;
                _this.wallet_amount = _this.response.wallet_amount;
                _this.earning_details = _this.response.earning_details;
                for (var i = 0; i < _this.earning_details.length; i++) {
                    if (_this.earning_details[i].day_name == 'Sunday') {
                        _this.sundayEarning = _this.sundayEarning + Number(_this.earning_details[i].earning);
                    }
                    else if (_this.earning_details[i].day_name == 'Monday') {
                        _this.mondayEarning = _this.mondayEarning + Number(_this.earning_details[i].earning);
                    }
                    else if (_this.earning_details[i].day_name == 'Tuesday') {
                        _this.tuesdayEarning = _this.tuesdayEarning + Number(_this.earning_details[i].earning);
                    }
                    else if (_this.earning_details[i].day_name == 'Wednesday') {
                        _this.wednesdayEarning = _this.wednesdayEarning + Number(_this.earning_details[i].earning);
                    }
                    else if (_this.earning_details[i].day_name == 'Thursday') {
                        _this.thursdayEarning = _this.thursdayEarning + Number(_this.earning_details[i].earning);
                    }
                    else if (_this.earning_details[i].day_name == 'Friday') {
                        _this.fridayEarning = _this.fridayEarning + Number(_this.earning_details[i].earning);
                    }
                    else if (_this.earning_details[i].day_name == 'Saturday') {
                        _this.saturdayEarning = _this.saturdayEarning + Number(_this.earning_details[i].earning);
                    }
                    _this.barChartData = [
                        { data: [_this.sundayEarning, _this.mondayEarning, _this.tuesdayEarning, _this.wednesdayEarning, _this.thursdayEarning, _this.fridayEarning, _this.saturdayEarning], label: 'Earning(' + _this.currency_symbol + ')' }
                    ];
                }
                console.log(_this.sundayEarning);
            }
        }, function (err) {
        });
    };
    EarningPage.prototype.withdrawRequest = function () {
        var _this = this;
        this.present();
        var stringy = JSON.stringify({
            "usersID": this.userID,
            "currencyID": this.currencies_id,
            "requestType": "get_all_requests"
        });
        console.log(stringy);
        this.restService.withdrawal(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response.status);
            if (_this.response.status == 'NotFound') {
                _this.presentToast('Oops!something went wrong.');
            }
            else if (_this.response.status == 'Found') {
                _this.presentToast('Withdraw request submitted successfully!');
            }
            _this.dismiss();
        }, function (err) {
            _this.dismiss();
        });
    };
    EarningPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    EarningPage.prototype.presentToast = function (msg) {
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
    EarningPage.prototype.present = function () {
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
    EarningPage.prototype.dismiss = function () {
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
    EarningPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    EarningPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-earning',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./earning.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/earning/earning.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./earning.page.scss */ "./src/app/earning/earning.page.scss")).default]
        })
    ], EarningPage);
    return EarningPage;
}());



/***/ })

}]);
//# sourceMappingURL=earning-earning-module.js.map