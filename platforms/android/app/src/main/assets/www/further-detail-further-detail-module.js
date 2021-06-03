(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["further-detail-further-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/further-detail/further-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/further-detail/further-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <img style=\"margin-left: 13px;\" src=\"assets/img/Arrow.svg\" (click)=\"back()\">\n  </ion-buttons>\n  <ion-title>{{cars_list_result.model_name}}</ion-title>\n\n</ion-toolbar>\n\n<ion-content>\n  <div class=\"f_2\">\n    <ion-row>\n      <ion-col class=\"ion-text-center f_1\">\n        <h4 style=\"color: rgb(0, 0, 0);\">Date and Location</h4>\n        <p>Pick Up and Return</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\" class=\"ion-text-center\">\n        <p class=\"f_5\">{{start_date}} </p>\n        <p class=\"f_4\">{{cars_list_result.pickup_location}}</p>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-text-center f_3\">\n        <img src=\"assets/img/Label.svg\">\n      </ion-col>\n      <ion-col size=\"5\" class=\"ion-text-center\">\n        <p class=\"f_5\"> {{end_date}} </p>\n        <p class=\"f_4\">{{cars_list_result.dropoff_location}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"f_10\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <h4>TRIP COST</h4>\n      </ion-col>\n    </ion-row>\n    <!-- discount  -->\n    <!-- <ion-row>\n      <ion-col class=\"ion-text-left\" size=\"6\">\n        <span>Weekly discount savings</span>\n      </ion-col>\n      <ion-col class=\"ion-text-right\" size=\"6\">\n        <span>15%</span>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col class=\"ion-text-left f_7\" size=\"6\">\n        <h5>DISTANCE INCLUDED</h5>\n        <p class=\"dark_white_light_black\">$0.54 charge for each additional mile</p>\n      </ion-col>\n      <ion-col class=\"ion-text-right f_8\" size=\"6\">\n        <p class=\"dark_white_light_black\">1000 MI</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"f_2\">\n    <ion-row>\n      <ion-col class=\"ion-text-center f_1\">\n        <h4 style=\"color: black;\">Location</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"5\" class=\"ion-text-center\">\n        <p class=\"f_5\">Pickup</p>\n        <p class=\"f_4\">{{cars_list_result.pickup_location}}</p>\n      </ion-col>\n      <ion-col size=\"2\" class=\"ion-text-center f_3\">\n        <img src=\"assets/img/Label.svg\">\n      </ion-col>\n      <ion-col size=\"5\" class=\"ion-text-center\">\n        <p class=\"f_5\"> Drop off</p>\n        <p class=\"f_4\">{{cars_list_result.dropoff_location}}</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"f_10 f_bottom\">\n    <ion-row>\n      <ion-col class=\"ion-text-center\">\n        <h4>FEATURES</h4>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"f_11\">\n      <ion-col class=\"ion-text-left\" size=\"3\">\n        <p class=\"dark_white_light_black\">{{cars_list_result.no_of_seats}} seats</p>\n      </ion-col>\n      <ion-col class=\"ion-text-left\" size=\"3\">\n        <p class=\"dark_white_light_black\">{{cars_list_result.no_of_doors}} doors</p>\n      </ion-col>\n      <ion-col class=\"ion-text-left\" size=\"3\">\n        <p class=\"dark_white_light_black\">Gas (Regular)</p>\n      </ion-col>\n      <ion-col class=\"ion-text-left\" size=\"3\">\n        <p class=\"dark_white_light_black\">Automatic</p>\n      </ion-col>\n      <ion-col class=\"ion-text-left\" size=\"3\">\n        <p class=\"dark_white_light_black\">Convertable</p>\n      </ion-col>\n      <ion-col class=\"ion-text-left\" size=\"3\">\n        <p class=\"dark_white_light_black\">{{cars_list_result.no_of_wheels}} wheel drive</p>\n      </ion-col>\n\n    </ion-row>\n  </div>\n  <ion-row class=\"info\">\n    <ion-col class=\"ion-text-center\">\n      <img src=\"assets/img/Info_yellow.svg\">\n      <p>Further Details</p>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/further-detail/further-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/further-detail/further-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FurtherDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurtherDetailPageRoutingModule", function() { return FurtherDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _further_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./further-detail.page */ "./src/app/further-detail/further-detail.page.ts");




var routes = [
    {
        path: '',
        component: _further_detail_page__WEBPACK_IMPORTED_MODULE_3__["FurtherDetailPage"]
    }
];
var FurtherDetailPageRoutingModule = /** @class */ (function () {
    function FurtherDetailPageRoutingModule() {
    }
    FurtherDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FurtherDetailPageRoutingModule);
    return FurtherDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/further-detail/further-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/further-detail/further-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: FurtherDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurtherDetailPageModule", function() { return FurtherDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _further_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./further-detail-routing.module */ "./src/app/further-detail/further-detail-routing.module.ts");
/* harmony import */ var _further_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./further-detail.page */ "./src/app/further-detail/further-detail.page.ts");







var FurtherDetailPageModule = /** @class */ (function () {
    function FurtherDetailPageModule() {
    }
    FurtherDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _further_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["FurtherDetailPageRoutingModule"]
            ],
            declarations: [_further_detail_page__WEBPACK_IMPORTED_MODULE_6__["FurtherDetailPage"]]
        })
    ], FurtherDetailPageModule);
    return FurtherDetailPageModule;
}());



/***/ }),

/***/ "./src/app/further-detail/further-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/further-detail/further-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.f_1 h4 {\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.f_1 p {\n  margin: 0px;\n  font-size: 12px;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n}\n\n.info p {\n  margin: 0px;\n  color: #c4932f;\n  font-size: 10px;\n}\n\n.f_2 {\n  background: #f9f9f9;\n  padding: 0em 2.5em;\n}\n\n.f_3 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.f_4 {\n  font-size: 12px;\n}\n\n.f_5 {\n  margin: 0px;\n  margin-top: 4px;\n  font-size: 14px;\n}\n\n.f_6 {\n  padding: 0em 2.5em;\n}\n\n.f_6 span {\n  font-size: 12px;\n}\n\n.f_7 h5 {\n  font-size: 14px;\n}\n\n.f_7 p {\n  font-size: 10px;\n  margin: 0px;\n}\n\n.f_8 p {\n  font-size: 13px;\n}\n\n.f_10 {\n  padding: 0em 2.5em;\n}\n\n.f_11 p {\n  margin: 4px 0px;\n  font-size: 12px;\n}\n\n.f_bottom {\n  margin-bottom: 4em;\n}\n\np {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVydGhlci1kZXRhaWwvZnVydGhlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSw0QkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFRSjs7QUFOQTtFQUNJLGVBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7QUFZSjs7QUFWQTtFQUNJLGVBQUE7QUFhSjs7QUFYQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBY0o7O0FBWkE7RUFDSSxlQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7QUFrQko7O0FBZkE7RUFDSSxZQUFBO0FBa0JKIiwiZmlsZSI6InNyYy9hcHAvZnVydGhlci1kZXRhaWwvZnVydGhlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mXzEgaDQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cbi5mXzEgcCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmJ0bl9mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzZlNmQ2ZDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xufVxuLmluZm8gcCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZfMiB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAwZW0gMi41ZW07XG59XG4uZl8zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZl80IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZl81IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZfNiB7XG4gICAgcGFkZGluZzogMGVtIDIuNWVtO1xufVxuLmZfNiBzcGFuIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZl83IGg1IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uZl83IHAge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5mXzggcCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmZfMTAge1xuICAgIHBhZGRpbmc6IDBlbSAyLjVlbTtcbn1cbi5mXzExIHAge1xuICAgIG1hcmdpbjogNHB4IDBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG4uZl9ib3R0b20ge1xuICAgIG1hcmdpbi1ib3R0b206IDRlbTtcbn1cblxucCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/further-detail/further-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/further-detail/further-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: FurtherDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurtherDetailPage", function() { return FurtherDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var FurtherDetailPage = /** @class */ (function () {
    function FurtherDetailPage(activatedRoute, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            _this.cars_list_result = _this.response.cars_list_result;
            console.log(_this.response);
            if (_this.cars_list_result.start_date) {
                var sDate = new Date(_this.cars_list_result.start_date);
                var eDate = new Date(_this.cars_list_result.end_date);
                _this.start_date = _this.formatDate(sDate);
                _this.end_date = _this.formatDate(eDate);
            }
        });
    }
    FurtherDetailPage.prototype.ngOnInit = function () {
    };
    FurtherDetailPage.prototype.formatDate = function (dateObj) {
        var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        var months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var dateOrdinal = function (dom) {
            if (dom == 31 || dom == 21 || dom == 1)
                return dom + "st";
            else if (dom == 22 || dom == 2)
                return dom + "nd";
            else if (dom == 23 || dom == 3)
                return dom + "rd";
            else
                return dom + "th";
        };
        //dateObj.getDate())+', '+
        return days[dateObj.getDay()] + ', ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
    };
    FurtherDetailPage.prototype.back = function () {
        this.router.navigate(['/car-detail']);
    };
    FurtherDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FurtherDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-further-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./further-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/further-detail/further-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./further-detail.page.scss */ "./src/app/further-detail/further-detail.page.scss")).default]
        })
    ], FurtherDetailPage);
    return FurtherDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=further-detail-further-detail-module.js.map