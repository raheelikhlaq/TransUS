(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-booking-car-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\n    </ion-buttons>\n    <ion-title>{{model_name}}</ion-title>\n    \n   </ion-toolbar>\n</ion-header>\n<ion-content>\n \n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3 style=\"color: black;\">Trip Dates</h3>\n        <p class=\"upload_images left_4\">Start Date</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"calender_slider\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev()\" >\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 style=\"color: black;\" class=\"SFUIText-HeavyItalic calender_slider_text\">{{start_date_month}} , {{currentYear}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"start_date\" [options]=\"option1\"   #startSlides>\n          <ion-slide *ngFor=\"let i of days\" (click)=\"getStartIndex(i)\">\n              <span style=\"color: black;\"   *ngIf=\"i<=9\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n              <span  *ngIf=\"i>9\" class=\"num\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p  class=\"upload_images left_4\">End Date</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"calender_slider\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev2()\" >\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 style=\"color: black;\" class=\"SFUIText-HeavyItalic calender_slider_text\">{{end_date_month}} , {{currentYearTwo}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext2()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"end_date\"  [options]=\"option1\" #endSlides>\n          <ion-slide *ngFor=\"let i of days\" (click)=\"getEndIndex(i)\">\n            <span style=\"color: black;\"  *ngIf=\"i<=9\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\n            <span  *ngIf=\"i>9\" class=\"num\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\n        </ion-slide>\n      </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div>\n  <p *ngIf=\"dateError\" class=\"error ion-padding ion-text-center sz\">\n    Vehicle available from: {{db_start_date}} -  to: {{db_end_date}}\n  </p>\n  <p *ngIf=\"dateStartError\" class=\"error ion-padding ion-text-center sz\">\n    End Date Cannot be smaller then Start Date\n  </p>\n  \n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">Start Time</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"bg_white\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides class=\"vertical_slider s_hours\" [options]=\"option\"  >\n        <ion-slide  *ngFor=\"let i of hours\" >\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides class=\"vertical_slider s_mints\" [options]=\"option\"  >\n        <ion-slide  *ngFor=\"let i of mints\" >\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list s_v\">\n      <ion-slides class=\"vertical_slider\" [options]=\"option\"  >\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">End Time</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"bg_white\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides class=\"vertical_slider e_hours\" [options]=\"option\"  >\n        <ion-slide  *ngFor=\"let i of hours\" >\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides class=\"vertical_slider e_mints\" [options]=\"option\"  >\n        <ion-slide  *ngFor=\"let i of mints\" >\n          <ng-container *ngIf=\"i<=9\">\n            <p>0{{i}}</p>\n          </ng-container>\n          <ng-container *ngIf=\"i>9\">\n            <p>{{i}}</p>\n          </ng-container>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"2\" class=\"vertical_list\">\n      <ion-slides class=\"vertical_slider e_v\" [options]=\"option\"  >\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>AM</p>\n        </ion-slide>\n        <ion-slide>\n          <p>PM</p>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Driving License</h3>\n        <p class=\"upload_images left_4\">Upload your driving license ID</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument()\" *ngIf=\"document_one =='' || document_one ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\" >\n            </ion-col>\n            <ion-col size=\"12\" class=\"real_image\" (click)=\"uploadDocument()\" *ngIf=\"document_one\">\n              <img src=\"{{document_one}}\" class=\"imgh\">\n            </ion-col>\n            <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\n              Document is required.\n            </span>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Book Now</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/car-booking/car-booking-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/car-booking/car-booking-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CarBookingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookingPageRoutingModule", function() { return CarBookingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _car_booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-booking.page */ "./src/app/car-booking/car-booking.page.ts");




var routes = [
    {
        path: '',
        component: _car_booking_page__WEBPACK_IMPORTED_MODULE_3__["CarBookingPage"]
    }
];
var CarBookingPageRoutingModule = /** @class */ (function () {
    function CarBookingPageRoutingModule() {
    }
    CarBookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CarBookingPageRoutingModule);
    return CarBookingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/car-booking/car-booking.module.ts":
/*!***************************************************!*\
  !*** ./src/app/car-booking/car-booking.module.ts ***!
  \***************************************************/
/*! exports provided: CarBookingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookingPageModule", function() { return CarBookingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-booking-routing.module */ "./src/app/car-booking/car-booking-routing.module.ts");
/* harmony import */ var _car_booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-booking.page */ "./src/app/car-booking/car-booking.page.ts");







var CarBookingPageModule = /** @class */ (function () {
    function CarBookingPageModule() {
    }
    CarBookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _car_booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarBookingPageRoutingModule"],
            ],
            declarations: [_car_booking_page__WEBPACK_IMPORTED_MODULE_6__["CarBookingPage"]]
        })
    ], CarBookingPageModule);
    return CarBookingPageModule;
}());



/***/ }),

/***/ "./src/app/car-booking/car-booking.page.scss":
/*!***************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\nion-content {\n  --background: #F7F8FA;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #d4dce1;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 5.5em 0em;\n}\n\n.list_2 p {\n  color: #d2d6d8;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #D4DCE1;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  padding: 0.6em 0em;\n  background: #fff;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.tog_main {\n  background: #F9F9F9;\n  padding: 0em 0.3em;\n}\n\n.tog1 {\n  font-size: 13px;\n  color: #272727;\n}\n\n.tog1 h4 {\n  margin: 0px;\n}\n\n.tog1 p {\n  margin: 0px;\n  margin-left: 4%;\n  margin-top: 5%;\n  font-size: 14px;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\n.vertical_list {\n  text-align: center;\n  height: 100px;\n  overflow: hidden;\n  overflow-y: scroll;\n  padding: 0em 6px;\n}\n\n.vertical_slider ion-slide {\n  margin-left: 0em !important;\n  color: #B0B0B0;\n  border-top: 1px solid #B0B0B0;\n  border-bottom: 1px solid #B0B0B0;\n  font-size: 16px;\n  padding: 1em 0em;\n}\n\n.vertical_slider ion-slide.swiper-slide-active {\n  color: #000 !important;\n  font-size: 18px !important;\n}\n\n.bg_white {\n  padding: 0.6em 0em;\n  background: #fff;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.error {\n  color: red;\n}\n\n.imgh {\n  width: 100%;\n  height: 12em;\n  border-radius: 10px;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.sz {\n  font-size: 12px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWJvb2tpbmcvY2FyLWJvb2tpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFISjs7QUFLQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBRko7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTEE7RUFDSSw0QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0FBV0o7O0FBUkE7RUFDSSxnQkFBQTtBQVdKOztBQVRBO0VBQ0ksNEJBQUE7QUFZSjs7QUFWQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFYQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVhBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFlSjs7QUFiQTtFQUNJLFdBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWZBO0VBQ0ksOEJBQUE7QUFrQko7O0FBaEJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQW9CSjs7QUFmQTtFQUNJLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQko7O0FBZEE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FBaUJKOztBQWZBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcUJKOztBQW5CQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQXVCSiIsImZpbGUiOiJzcmMvYXBwL2Nhci1ib29raW5nL2Nhci1ib29raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5cblxuXG5pb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWNvbnRlbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGOEZBO1xufVxuLmxpc3RfMXtcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xufVxuLmxpc3RfMSBoM3tcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLmxlZnRfNHtcbiAgICBtYXJnaW4tbGVmdDowLjdlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X2xpc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjZDRkY2UxO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG59XG4udXBsb2FkX2ltYWdlc3tcbiAgICBjb2xvcjojQzQ5MzJGO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4ubGlzdF8ye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNS41ZW0gMGVtO1xuICAgLy8gcGFkZGluZzogMjUlIDBlbSAyMyUgMGVtO1xufVxuLmxpc3RfMiBwe1xuICAgIGNvbG9yOiAjZDJkNmQ4O1xufVxuLmxpc3RfM3tcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogI0Q0RENFMTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbi5idG5fZm9vdGVye1xuICAgIG1hcmdpbjogMC43ZW0gMGVtIDFlbSAwZW07XG59XG5pb24tc2xpZGUgc3BhbntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5udW17XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5jYWxlbmRlcl9zbGlkZXJ7XG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2FsZW5kZXJfc2xpZGVyX3RleHR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tc2xpZGV7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xuICAgIFxufVxuaW9uLXNsaWRlOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwZW07XG59XG4uYnRuX2Zvb3RlcntcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xufVxuLmluZm97XG4gICAgYmFja2dyb3VuZDogIzZFNkQ2RDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG59XG4uaW5mbyBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRvZ19tYWlue1xuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gICAgcGFkZGluZzogMGVtIDAuM2VtO1xufVxuLnRvZzF7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMjcyNzI3O1xufVxuLnRvZzEgaDR7XG4gICAgbWFyZ2luOjBweDtcbn1cbi50b2cxIHB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLXRvZ2dsZS50b2dnbGUtY2hlY2tlZDo6cGFydCh0cmFjaykgIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk2IDE0NyA0NykgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnZlcnRpY2FsX2xpc3R7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzowZW0gNnB4O1xufVxuLnZlcnRpY2FsX2xpc3QgcCB7ICBcbiAgICAvL21hcmdpbjogMHB4O1xufVxuLnZlcnRpY2FsX3NsaWRlciBpb24tc2xpZGV7XG4gICAgbWFyZ2luLWxlZnQ6IDBlbSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiNCMEIwQjA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNCMEIwQjA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCMEIwQjA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHBhZGRpbmc6IDFlbSAwZW07XG4gICAgXG59XG5cbi52ZXJ0aWNhbF9zbGlkZXIgaW9uLXNsaWRlLnN3aXBlci1zbGlkZS1hY3RpdmV7XG4gICAgY29sb3I6IzAwMCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuLmJnX3doaXRle1xuICAgIHBhZGRpbmc6IDAuNmVtIDBlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmFjdGl2ZVN0YXRle1xuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M0OTMyZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4uZXJyb3J7XG4gICAgY29sb3I6cmVkO1xufVxuLmltZ2h7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYWN0aXZlRW5kU3RhdGV7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDsgXG59XG4uc3p7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/car-booking/car-booking.page.ts":
/*!*************************************************!*\
  !*** ./src/app/car-booking/car-booking.page.ts ***!
  \*************************************************/
/*! exports provided: CarBookingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBookingPage", function() { return CarBookingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");









var CarBookingPage = /** @class */ (function () {
    function CarBookingPage(activatedRoute, loadingController, storage, toastController, restService, alertCtrl, router, imageService, imagePicker, location) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.storage = storage;
        this.toastController = toastController;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.imageService = imageService;
        this.imagePicker = imagePicker;
        this.location = location;
        this.option1 = {
            slidesPerView: 8,
            loop: true,
        };
        this.option = {
            loop: true,
            direction: 'vertical',
            slidesPerView: 3
        };
        this.hours = [];
        this.mints = [];
        this.start_date_month = '';
        this.end_date_month = '';
        this.start_month_index = 1;
        this.end_month_index = 1;
        this.days = [];
        this.monthCounter = 1;
        this.active_start_date = 1;
        this.dateError = false;
        this.endmonthCounter = 1;
        this.startmonthCounter = 1;
        var date = new Date();
        var month = date.getMonth() + 1;
        var fMonth = this.monthList(month);
        this.end_date_month = fMonth;
        this.start_date_month = fMonth;
        this.startmonthCounter = month;
        this.endmonthCounter = month;
        this.start_month_index = month;
        this.end_month_index = month;
        console.log(month, "monthsssssssssssssss");
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            _this.vehicle_id = _this.response.vehicle_id;
            _this.db_start_date = _this.response.start_date;
            _this.db_end_date = _this.response.end_date;
            _this.model_name = _this.response.model_name;
            console.log(_this.response);
        });
    }
    CarBookingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
            _this.currencyID = user_details.currencies_id;
            console.log("currncy ID" + _this.currencyID);
        });
        this.hours = Array.from({ length: 12 }, function (v, k) { return k + 1; });
        this.mints = Array.from({ length: 60 }, function (v, k) { return k + 1; });
        this.days = Array.from({ length: 30 }, function (v, k) { return k + 1; });
        this.currentYear = new Date().getFullYear();
        this.currentYearTwo = new Date().getFullYear();
        this.getStartIndex(1);
        this.getEndIndex(1);
        //this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    };
    CarBookingPage.prototype.back = function () {
        this.location.back();
        //this.router.navigate(['/car-list']);
    };
    CarBookingPage.prototype.getStartIndex = function (i) {
        this.sliderStartBoolean = i;
        this.validateStartDate();
    };
    CarBookingPage.prototype.getEndIndex = function (i) {
        this.sliderEndBoolean = i;
        this.validateEndDate();
    };
    CarBookingPage.prototype.validateForm = function () {
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        this.active_start_date = document.querySelector(".start_date .activeState").textContent;
        var cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date, Number(this.sHours), Number(this.sMints)).getTime();
        this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
        var cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date, Number(this.eHours), Number(this.eMints)).getTime();
        this.document_oneError = false;
        console.log(' Number(this.eHours)---------- ', this.eHours);
        console.log('active_start_date---------- ', this.active_start_date);
        console.log('start time---------- ', cStartDate);
        console.log('End time---------- ', cDate);
        // if (this.dateError) {
        //   console.log('date error');
        //   this.presentToast('End Time should be greater than Start Time.')
        // } else 
        if (this.document_one == '' || this.document_one == undefined) {
            this.document_oneError = true;
            return false;
        }
        else {
            if (cStartDate > cDate) {
                this.dateStartError = true;
                console.log(this.dateStartError);
            }
            else {
                return true;
            }
        }
    };
    CarBookingPage.prototype.submitFormsss = function () {
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        this.active_start_date = document.querySelector(".start_date .activeState").textContent;
        var cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date, Number(this.sHours), Number(this.sMints)).getTime();
        this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
        var cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date, Number(this.eHours), Number(this.eMints)).getTime();
        this.document_oneError = false;
        this.start_date = document.querySelector(".start_date .activeState").textContent;
        this.end_date = document.querySelector(".end_date .activeEndState").textContent;
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        // var licenseImg = this.document_one.split(',')[1];
        var stringy = JSON.stringify({
            "requestType": 'book_by_car_id',
            "usersID": this.userID,
            "vehicleID": this.vehicle_id,
            "startDate": this.currentYear + '-' + this.startmonthCounter + '-' + this.start_date,
            "endDate": this.currentYearTwo + '-' + this.endmonthCounter + '-' + this.end_date,
            "startTime": this.sHours + ':' + this.sMints + ' ' + this.sV,
            "endTime": this.eHours + ':' + this.eMints + ' ' + this.eV,
            // "licenseImg": licenseImg,
            "currencyID": this.currencyID
        });
        console.log(stringy, "final");
    };
    CarBookingPage.prototype.submitForm = function () {
        var _this = this;
        this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
        this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
        this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
        this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
        this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
        this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
        this.active_start_date = document.querySelector(".start_date .activeState").textContent;
        var cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date, Number(this.sHours), Number(this.sMints)).getTime();
        this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
        var cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date, Number(this.eHours), Number(this.eMints)).getTime();
        this.document_oneError = false;
        console.log(' Number(this.eHours)---------- ', this.eHours);
        console.log('active_start_date---------- ', this.active_start_date);
        console.log('start time---------- ', cStartDate);
        console.log('End time---------- ', cDate);
        if (cDate > cStartDate) {
            if (this.validateForm() == true) {
                this.start_date = document.querySelector(".start_date .activeState").textContent;
                this.end_date = document.querySelector(".end_date .activeEndState").textContent;
                this.sHours = document.querySelector(".s_hours .swiper-slide-active p").textContent;
                this.sMints = document.querySelector(".s_mints .swiper-slide-active p").textContent;
                this.sV = document.querySelector(".s_v .swiper-slide-active p").textContent;
                this.eHours = document.querySelector(".e_hours .swiper-slide-active p").textContent;
                this.eMints = document.querySelector(".e_mints .swiper-slide-active p").textContent;
                this.eV = document.querySelector(".e_v .swiper-slide-active p").textContent;
                var licenseImg = this.document_one.split(',')[1];
                var stringy = JSON.stringify({
                    "requestType": 'book_by_car_id',
                    "usersID": this.userID,
                    "vehicleID": this.vehicle_id,
                    "startDate": this.currentYear + '-' + this.startmonthCounter + '-' + this.start_date,
                    "endDate": this.currentYearTwo + '-' + this.endmonthCounter + '-' + this.end_date,
                    "startTime": this.sHours + ':' + this.sMints + ' ' + this.sV,
                    "endTime": this.eHours + ':' + this.eMints + ' ' + this.eV,
                    "licenseImg": licenseImg,
                    "currencyID": this.currencyID
                });
                this.present();
                console.log(stringy);
                this.restService.bookings(stringy).subscribe(function (response) {
                    _this.response = JSON.parse(response['_body']);
                    console.log(_this.response);
                    if (_this.response.status == 'error') {
                        _this.presentToast('Vehicle is not Available on this date');
                    }
                    else if (_this.response.status == 'success') {
                        _this.presentToast(_this.response.msg);
                        _this.document_one = '';
                        var myData = JSON.stringify({
                            booking_details: _this.response.booking_details,
                            vehicle_imgs: _this.response.vehicle_imgs
                        });
                        _this.router.navigate(['/summary'], {
                            queryParams: {
                                value: myData
                            },
                        });
                    }
                    _this.dismiss();
                }, function (err) {
                    _this.dismiss();
                });
            }
        }
        else {
            this.presentToast('End Time Should greater then End Time');
        }
    };
    CarBookingPage.prototype.slidePrev = function () {
        this.start_month_index--;
        if (this.start_month_index < 1) {
            this.currentYear = this.currentYear - 1;
            this.start_month_index = 12;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startmonthCounter = this.start_month_index;
        this.validateStartDate();
        // this.startSlides.slidePrev();
    };
    CarBookingPage.prototype.slideNext = function () {
        this.start_month_index++;
        if (this.start_month_index == 13) {
            this.currentYear = this.currentYear + 1;
            this.start_month_index = 1;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startmonthCounter = this.start_month_index;
        this.validateStartDate();
        // this.startSlides.slideNext();
    };
    CarBookingPage.prototype.slidePrev2 = function () {
        this.end_month_index--;
        if (this.end_month_index < 1) {
            this.currentYearTwo = this.currentYearTwo - 1;
            this.end_month_index = 12;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endmonthCounter = this.end_month_index;
        this.validateEndDate();
        // end_month_index 
        // this.endSlides.slidePrev();
    };
    CarBookingPage.prototype.slideNext2 = function () {
        this.end_month_index++;
        if (this.end_month_index == 13) {
            this.currentYearTwo = this.currentYearTwo + 1;
            this.end_month_index = 1;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endmonthCounter = this.end_month_index;
        this.validateEndDate();
        // this.endSlides.slideNext();
    };
    CarBookingPage.prototype.validateStartDate = function () {
        var _this = this;
        setTimeout(function () {
            _this.dateError = true;
            _this.dateStartError = false;
            /**** end date ****/
            _this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
            var cEndDate = new Date(_this.currentYear, _this.endmonthCounter - 1, _this.active_end_date).getTime();
            /**** end date ****/
            _this.active_start_date = document.querySelector(".start_date .activeState").textContent;
            var cDate = new Date(_this.currentYear, _this.startmonthCounter - 1, _this.active_start_date).getTime();
            var sDate = new Date(_this.db_start_date).setHours(0, 0, 0, 0);
            var eDate = new Date(_this.db_end_date).setHours(0, 0, 0, 0);
            if (cDate >= sDate && cDate < eDate) {
                console.log('ok');
                _this.dateError = false;
            }
            else {
                console.log('NotOk');
                _this.dateError = true;
            }
            if (cDate >= cEndDate && _this.dateError == false) {
                console.log('start date ');
                _this.dateStartError = true;
                console.log(_this.dateStartError);
                //this.validateEndDate();
            }
        }, 300);
    };
    CarBookingPage.prototype.validateEndDate = function () {
        var _this = this;
        setTimeout(function () {
            _this.dateError = true;
            _this.dateStartError = false;
            _this.active_start_date = document.querySelector(".start_date .activeState").textContent;
            var cStartDate = new Date(_this.currentYear, _this.startmonthCounter - 1, _this.active_start_date).getTime();
            _this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
            var cDate = new Date(_this.currentYear, _this.endmonthCounter - 1, _this.active_end_date).getTime();
            var sDate = new Date(_this.db_start_date).setHours(0, 0, 0, 0);
            var eDate = new Date(_this.db_end_date).setHours(0, 0, 0, 0);
            if (cDate > sDate && cDate <= eDate) {
                console.log('ok');
                _this.dateError = false;
            }
            else {
                console.log('NotOk');
                _this.dateError = true;
            }
            if (cStartDate >= cDate && _this.dateError == false) {
                console.log('end date ');
                _this.dateStartError = true;
                console.log(_this.dateStartError);
            }
        }, 300);
    };
    CarBookingPage.prototype.monthList = function (param) {
        // console.log(param);
        //param = parseInt(param)+1;
        if (param == 1) {
            this.month = 'January';
        }
        else if (param == 2) {
            this.month = 'February';
        }
        else if (param == 3) {
            this.month = 'March';
        }
        else if (param == 4) {
            this.month = 'April';
        }
        else if (param == 5) {
            this.month = 'May';
        }
        else if (param == 6) {
            this.month = 'June';
        }
        else if (param == 7) {
            this.month = 'July';
        }
        else if (param == 8) {
            this.month = 'August';
        }
        else if (param == 9) {
            this.month = 'September';
        }
        else if (param == 10) {
            this.month = 'October';
        }
        else if (param == 11) {
            this.month = 'November';
        }
        else if (param == 12) {
            this.month = 'December';
        }
        return this.month;
    };
    CarBookingPage.prototype.uploadDocument = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Upload Profile Photo?',
                            buttons: [
                                // {
                                //   text: 'Take image from camera',
                                //   handler: () => {
                                //     this.takeImageFromCamera();
                                //   }
                                // },
                                {
                                    text: 'Upload image from gallery',
                                    handler: function () {
                                        _this.getImageFromGallery();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CarBookingPage.prototype.takeImageFromCamera = function () {
        var _this = this;
        this.imageService.selectImageInCamera().then(function (imageData) {
            _this.document_one = "data:image/png;base64," + imageData;
        }).catch(function (err) { return console.error(err); });
    };
    CarBookingPage.prototype.getImageFromGallery = function () {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (imageData) {
            console.log('Image URI: ' + imageData);
            //    alert('Image URI: ' + imageData)
            _this.document_one = "data:image/png;base64," + imageData;
        }, function (err) {
            console.log('imagepicker  now:', err);
        });
    };
    CarBookingPage.prototype.goToSummary = function () {
        this.router.navigate(['/summary']);
    };
    CarBookingPage.prototype.present = function () {
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
    CarBookingPage.prototype.dismiss = function () {
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
    CarBookingPage.prototype.presentToast = function (msg) {
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
    CarBookingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
    ]; };
    CarBookingPage.propDecorators = {
        startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
        endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['endSlides',] }]
    };
    CarBookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-booking',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./car-booking.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-booking/car-booking.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./car-booking.page.scss */ "./src/app/car-booking/car-booking.page.scss")).default]
        })
    ], CarBookingPage);
    return CarBookingPage;
}());



/***/ })

}]);
//# sourceMappingURL=car-booking-car-booking-module.js.map