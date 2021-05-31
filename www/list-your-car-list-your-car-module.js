(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-your-car-list-your-car-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-car/list-your-car.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-car/list-your-car.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\r\n    </ion-buttons>\r\n    <ion-title>List your car</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"list_1\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Vehicle Info</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Model\" [(ngModel)]=\"Model\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.model_id}}\" *ngFor=\"let p of model; let i = index\">{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"ModelError\" class=\"error ion-padding\">\r\n          Model is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Make\" [(ngModel)]=\"Make\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.veh_make_id}}\" *ngFor=\"let p of make; let i = index\">{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"MakeError\" class=\"error ion-padding\">\r\n          Make is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input placeholder=\"License Plate\" [(ngModel)]=\"LicensePlate\" class=\"input_list\" (ionBlur)=\"validateForm()\">\r\n        </ion-input>\r\n        <span *ngIf=\"LicensePlateError\" class=\"error ion-padding\">\r\n          License Plate is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <p class=\"upload_images\">Upload Images</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocumentsPhotos(1)\"\r\n            *ngIf=\"document_one =='' || document_one ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"uploadDocumentsPhotos(1)\" *ngIf=\"document_one\">\r\n            <img src=\"{{document_one}}\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocumentsPhotos(2)\"\r\n            *ngIf=\"document_two =='' || document_two ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"uploadDocumentsPhotos(2)\" *ngIf=\"document_two\">\r\n            <img src=\"{{document_two}}\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocumentsPhotos(3)\"\r\n            *ngIf=\"document_three =='' || document_three ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"uploadDocumentsPhotos(3)\" *ngIf=\"document_three\">\r\n            <img src=\"{{document_three}}\">\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_twoError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_threeError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocumentsPhotos(6)\"\r\n            *ngIf=\"document_six =='' || document_six ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"uploadDocumentsPhotos(6)\" *ngIf=\"document_six\">\r\n            <img src=\"{{document_six}}\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocumentsPhotos(7)\"\r\n            *ngIf=\"document_seven =='' || document_seven ==undefined\">\r\n            <img src=\"assets/img/plus.svg\">\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image\" (click)=\"uploadDocumentsPhotos(7)\" *ngIf=\"document_seven\">\r\n            <img src=\"{{document_seven}}\">\r\n          </ion-col>\r\n\r\n        </ion-row>\r\n      </ion-col>\r\n      <span *ngIf=\"document_sixError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n      <span *ngIf=\"document_sevenError\" class=\"error ion-padding\">\r\n        Document is required.\r\n      </span>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea rows=\"6\" placeholder=\"Description\" [(ngModel)]=\"Description\" class=\"list_3\"\r\n          (ionBlur)=\"validateForm()\"></ion-textarea>\r\n        <span *ngIf=\"DescriptionError\" class=\"error ion-padding\">\r\n          Description is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"No. of seats\" [(ngModel)]=\"Seats\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"1\">1</ion-select-option>\r\n          <ion-select-option value=\"2\">2</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\r\n          Seat is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"No. of Door\" [(ngModel)]=\"Door\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"1\">1</ion-select-option>\r\n          <ion-select-option value=\"2\">2</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"DoorError\" class=\"error ion-padding\">\r\n          Door is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Gas\" [(ngModel)]=\"Gas\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.fuel_type_id}}\" *ngFor=\"let p of fuel_type; let i = index\">{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"GasError\" class=\"error ion-padding\">\r\n          Fuel Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Gear Type\" [(ngModel)]=\"GearType\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.gear_type_id}}\" *ngFor=\"let p of gear_type; let i = index\">{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"GearTypeError\" class=\"error ion-padding\">\r\n          Gear Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Convertable\" [(ngModel)]=\"Convertable\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.engine_type_id}}\" *ngFor=\"let p of roof_type; let i = index\">{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"ConvertableError\" class=\"error ion-padding\">\r\n          Roof Type is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"No. of wheels\" [(ngModel)]=\"wheels\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"1\">1</ion-select-option>\r\n          <ion-select-option value=\"2\">2</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"wheelsError\" class=\"error ion-padding\">\r\n          wheel is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea rows=\"6\" placeholder=\"Other features\" [(ngModel)]=\"other_features\" class=\"list_3\"\r\n          (ionBlur)=\"validateForm()\"> </ion-textarea>\r\n        <span *ngIf=\"other_featuresError\" class=\"error ion-padding\">\r\n          other features is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Documents</h3>\r\n        <p class=\"upload_images\">Upload Road Worthy and Insurance documents</p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_9\" (click)=\"uploadDocument(4)\"\r\n            *ngIf=\"document_four =='' || document_four ==undefined\">\r\n            <img src=\"assets/img/Menu_Plus.svg\">\r\n            <p>Road Worthy</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image_2\" (click)=\"uploadDocument(4)\" *ngIf=\"document_four\">\r\n            <img src=\"{{document_four}}\">\r\n          </ion-col>\r\n          <span *ngIf=\"document_fourError\" class=\"error ion-padding\">\r\n            Document is required.\r\n          </span>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"list_9\" (click)=\"uploadDocument(5)\"\r\n            *ngIf=\"document_five =='' || document_five ==undefined\">\r\n            <img src=\"assets/img/Menu_Plus.svg\">\r\n            <p>Insurance</p>\r\n          </ion-col>\r\n          <ion-col size=\"12\" class=\"real_image_2\" (click)=\"uploadDocument(5)\" *ngIf=\"document_five\">\r\n            <img src=\"{{document_five}}\">\r\n          </ion-col>\r\n          <span *ngIf=\"document_fiveError\" class=\"error ion-padding\">\r\n            Document is required.\r\n          </span>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Owner’s Details</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-textarea rows=\"6\" placeholder=\"About\" [(ngModel)]=\"about\" class=\"list_3\" (ionBlur)=\"validateForm()\">\r\n        </ion-textarea>\r\n        <span *ngIf=\"aboutError\" class=\"error ion-padding\">\r\n          about is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Lives\" [(ngModel)]=\"Lives\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.id}}\" *ngFor=\"let p of countries; let i = index\">{{p.name}}</ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"LivesError\" class=\"error ion-padding\">\r\n          Lives is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input placeholder=\"Work\" [(ngModel)]=\"work\" class=\"input_list\" (ionBlur)=\"validateForm()\"></ion-input>\r\n        <span *ngIf=\"workError\" class=\"error ion-padding\">\r\n          Work is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-select placeholder=\"Language\" [(ngModel)]=\"Language\" (ionBlur)=\"validateForm()\">\r\n          <ion-select-option value=\"{{p.languages_id}}\" *ngFor=\"let p of languages; let i = index\">{{p.name}}\r\n          </ion-select-option>\r\n        </ion-select>\r\n        <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\r\n          Language is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Location Info</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"list_4\">\r\n        <ion-row>\r\n          <ion-col size=\"1\">\r\n            <div class=\"list_7\"></div>\r\n            <div class=\"list_5\"></div>\r\n            <div class=\"list_8\"></div>\r\n          </ion-col>\r\n          <ion-col size=\"11\">\r\n            <span (click)=\"goToLocation()\">Pickup</span>\r\n            <p class=\"list_6\" (click)=\"goToLocation()\">{{pickup}}</p>\r\n            <span (click)=\"goToLocation()\">Dropoff</span>\r\n            <p (click)=\"goToLocation()\">{{dropoff}}</p>\r\n          </ion-col>\r\n        </ion-row>\r\n        <span *ngIf=\"RouteError\" class=\"error ion-padding\">\r\n          Route is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Charges Info - ({{currency_symbol}})</h3>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-input type=\"number\" placeholder=\"Charges/day\" class=\"input_list\" [(ngModel)]=\"ChargesInfo\"\r\n          (ionBlur)=\"validateForm()\"></ion-input>\r\n        <span *ngIf=\"ChargesInfoError\" class=\"error ion-padding\">\r\n          Charges Info is required.\r\n        </span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <h3>Availability Calender</h3>\r\n        <p class=\"upload_images left_4\">Start Date</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"calender_slider\">\r\n    <ion-row>\r\n      <ion-col size=\"3\" class=\"ion-text-right\">\r\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev()\">\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text dark_p_color\">{{start_date_month}} , {{currentYear}}</h4>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-left\">\r\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext()\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-slides class=\"start_date\" [options]=\"option1\" #startSlides>\r\n          <ion-slide class=\"dark_p_color\" *ngFor=\"let i of days\" (click)=\"getStartIndex(i)\">\r\n            <span *ngIf=\"i<=9\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\r\n            <span *ngIf=\"i>9\" class=\"num\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\r\n          </ion-slide>\r\n\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"list_1\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <p class=\"upload_images left_4\">End Date</p>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div class=\"calender_slider\">\r\n    <ion-row>\r\n      <ion-col size=\"3\" class=\"ion-text-right\">\r\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev2()\">\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center\">\r\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text dark_p_color\">{{end_date_month}} , {{currentYearTwo}}</h4>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-text-left\">\r\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext2()\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-slides class=\"end_date\" [options]=\"option1\" #endSlides>\r\n          <ion-slide class=\"dark_p_color\" *ngFor=\"let i of days\" (click)=\"getEndIndex(i)\">\r\n            <span *ngIf=\"i<=9\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\r\n            <span *ngIf=\"i>9\" class=\"num\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <p *ngIf=\"dateStartError\" class=\"error ion-padding ion-text-center sz\" style=\"padding: 0px;\">\r\n    End Date Cannot be smaller then Start Date\r\n  </p>\r\n  <ion-row>\r\n    <ion-col>\r\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\r\n        Please fill all the required fields.\r\n      </span>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"btn_footer\">\r\n    <ion-col size=\"2\"></ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Done</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/list-your-car/list-your-car-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/list-your-car/list-your-car-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ListYourCarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListYourCarPageRoutingModule", function() { return ListYourCarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_your_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-your-car.page */ "./src/app/list-your-car/list-your-car.page.ts");




var routes = [
    {
        path: '',
        component: _list_your_car_page__WEBPACK_IMPORTED_MODULE_3__["ListYourCarPage"]
    }
];
var ListYourCarPageRoutingModule = /** @class */ (function () {
    function ListYourCarPageRoutingModule() {
    }
    ListYourCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListYourCarPageRoutingModule);
    return ListYourCarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/list-your-car/list-your-car.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-your-car/list-your-car.module.ts ***!
  \*******************************************************/
/*! exports provided: ListYourCarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListYourCarPageModule", function() { return ListYourCarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-your-car-routing.module */ "./src/app/list-your-car/list-your-car-routing.module.ts");
/* harmony import */ var _list_your_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-your-car.page */ "./src/app/list-your-car/list-your-car.page.ts");







var ListYourCarPageModule = /** @class */ (function () {
    function ListYourCarPageModule() {
    }
    ListYourCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListYourCarPageRoutingModule"]
            ],
            declarations: [_list_your_car_page__WEBPACK_IMPORTED_MODULE_6__["ListYourCarPage"]]
        })
    ], ListYourCarPageModule);
    return ListYourCarPageModule;
}());



/***/ }),

/***/ "./src/app/list-your-car/list-your-car.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/list-your-car/list-your-car.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 100%;\n  height: 132px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 2.7em 0em 2.5em 0em;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #F7F8FA;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 12px;\n  color: #D4DCE1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC15b3VyLWNhci9saXN0LXlvdXItY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKQTtFQUNJLDZCQUFBO0FBT0o7O0FBTEE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBUUo7O0FBTkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUFXSjs7QUFUQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBWUo7O0FBVkE7RUFDSSx5QkFBQTtBQWFKOztBQVhBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFjSjs7QUFaQTtFQUNJLDRCQUFBO0FBZUo7O0FBYkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBZ0JKOztBQWRBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFpQko7O0FBZkE7RUFDSSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksNEJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUF1Qko7O0FBckJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBd0JKOztBQXRCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBeUJKOztBQXZCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBMEJKOztBQXhCQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTJCSjs7QUF6QkE7RUFDSSw2QkFBQTtBQTRCSjs7QUExQkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTZCSjs7QUEzQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUE4Qko7O0FBNUJBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBK0JKOztBQTdCQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWdDSiIsImZpbGUiOiJzcmMvYXBwL2xpc3QteW91ci1jYXIvbGlzdC15b3VyLWNhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5lcnJvcntcbiAgICBjb2xvcjpyZWQ7XG59XG4ucmVhbF9pbWFnZXtcbiAgICBwYWRkaW5nOjBweDtcbn1cbi5yZWFsX2ltYWdlIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuLnJlYWxfaW1hZ2VfMntcbiAgICBwYWRkaW5nOjBweDtcbn1cbi5yZWFsX2ltYWdlXzIgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTMycHg7XG59XG4ubGlzdF8xe1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG59XG4ubGlzdF8xIGgze1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuLmxlZnRfNHtcbiAgICBtYXJnaW4tbGVmdDowLjdlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X2xpc3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbi51cGxvYWRfaW1hZ2Vze1xuICAgIGNvbG9yOiNDNDkzMkY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cbi5saXN0XzJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyLjVlbSAwZW07XG59XG4ubGlzdF85e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRDREQ0UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzoyLjdlbSAwZW0gMi41ZW0gMGVtO1xufVxuLmxpc3RfOSBwe1xuICAgIFxuICAgIGNvbG9yOiAjZDJkNmQ4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubGlzdF8ze1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG59XG4uYnRuX2Zvb3RlcntcbiAgICBtYXJnaW46IDAuN2VtIDBlbSAxZW0gMGVtO1xufVxuaW9uLXNsaWRlIHNwYW57XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ubnVte1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FsZW5kZXJfc2xpZGVye1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgcGFkZGluZzogMC42ZW0gMGVtO1xufVxuLmNhbGVuZGVyX3NsaWRlcl90ZXh0e1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLXNsaWRle1xuICAgIG1hcmdpbi1sZWZ0OiAwLjZlbTtcbn1cbmlvbi1zbGlkZTpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuX2Zvb3RlcntcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xufVxuLmluZm97XG4gICAgYmFja2dyb3VuZDogIzZFNkQ2RDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG59XG4uaW5mbyBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbmlvbi1zZWxlY3R7XG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDREQ0UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxLjVlbTtcbn1cbi5saXN0XzR7XG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDREQ0UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgY29sb3I6ICNENERDRTE7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmxpc3RfNCBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiMwMDA7XG59XG4ubGlzdF81e1xuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICNjN2M3Yzc7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmxpc3RfNntcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcbn1cbi5saXN0Xzd7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmxpc3RfOHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uYWN0aXZlU3RhdGV7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5hY3RpdmVFbmRTdGF0ZXtcbiAgICBiYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjNDkzMmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50OyBcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/list-your-car/list-your-car.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/list-your-car/list-your-car.page.ts ***!
  \*****************************************************/
/*! exports provided: ListYourCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListYourCarPage", function() { return ListYourCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");










var ListYourCarPage = /** @class */ (function () {
    function ListYourCarPage(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, imagePicker, platform) {
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.popoverController = popoverController;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.imageService = imageService;
        this.menuCtrl = menuCtrl;
        this.imageCompress = imageCompress;
        this.imagePicker = imagePicker;
        this.platform = platform;
        this.option1 = {
            loop: true,
            slidesPerView: 8
        };
        this.start_date_month = '';
        this.end_date_month = '';
        this.start_month_index = 1;
        this.end_month_index = 1;
        this.documentBase64 = [];
        this.days = [];
        this.monthCounter = 1;
        this.validation = false;
        this.fieldMissing = false;
        this.endmonthCounter = 1;
        this.active_start_date = 1;
        this.startmonthCounter = 1;
        this.image1 = '';
        this.image2 = '';
        this.image3 = '';
        this.image4 = '';
        this.image5 = '';
        this.image6 = '';
        this.image7 = '';
        var month = new Date().getMonth() + 1;
        console.log(month, "date From Month");
        var getname = this.monthList(month);
        console.log("getmonth from monthlist", getname);
        this.start_date_month = getname;
        this.end_date_month = getname;
        this.end_month_index = month;
        this.startMonthCounter = month;
        this.endMonthCounter = month;
        /* this.activatedRoute.queryParams.subscribe((res)=>{
           
             this.response = JSON.parse(res.value);
             console.log(this.response);
             if(this.response){
               this.pickup = this.response.pickup;
               this.dropoff = this.response.dropoff;
               console.log(this.pickup);
             }
         });  */
        this.days = Array.from({ length: 30 }, function (v, k) { return k + 1; });
    }
    ListYourCarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getDropDownData();
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
            _this.about = user_details.about;
            _this.work = user_details.work;
            _this.currencyID = user_details.currencies_id;
            setTimeout(function () {
                _this.Language = user_details.languages_id;
                _this.Lives = user_details.countries_id;
                console.log('ok');
            }, 2000);
            _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
                _this.storage.get('currency_symbol').then(function (currency_symbol) {
                    _this.currency_symbol = currency_symbol;
                });
            });
        });
        this.currentYear = new Date().getFullYear();
        this.currentYearTwo = new Date().getFullYear();
        this.getStartIndex(1);
        this.getEndIndex(1);
    };
    ListYourCarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('pickup').then(function (pickup) {
            _this.storage.get('dropoff').then(function (dropoff) {
                _this.storage.get('pickuplong').then(function (pickuplong) {
                    _this.storage.get('pickuplat').then(function (pickuplat) {
                        _this.storage.get('dropofflong').then(function (dropofflong) {
                            _this.storage.get('dropofflat').then(function (dropofflat) {
                                _this.pickup = pickup;
                                _this.dropoff = dropoff;
                                _this.pickuplong = pickuplong;
                                _this.pickuplat = pickuplat;
                                _this.dropofflong = dropofflong;
                                _this.dropofflat = dropofflat;
                            });
                        });
                    });
                });
            });
        });
    };
    ListYourCarPage.prototype.getStartIndex = function (i) {
        this.sliderStartBoolean = i;
        console.log(this.sliderEndBoolean, "nice days start");
        this.validateStartDate();
    };
    ListYourCarPage.prototype.getEndIndex = function (i) {
        this.sliderEndBoolean = i;
        console.log(this.sliderEndBoolean, "nice days ");
        this.validateEndDate();
    };
    ListYourCarPage.prototype.goToLocation = function () {
        var myData = JSON.stringify({
            location: '/list-your-car'
        });
        this.router.navigate(['/location'], {
            queryParams: {
                value: myData
            },
        });
    };
    ListYourCarPage.prototype.getDropDownData = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "list_car_page"
        });
        console.log(stringy);
        this.restService.getDdlData(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.model = _this.response.model;
            _this.make = _this.response.make;
            _this.fuel_type = _this.response.fuel_type;
            _this.gear_type = _this.response.gear_type;
            _this.roof_type = _this.response.roof_type;
            _this.countries = _this.response.countries;
            _this.languages = _this.response.languages;
            console.log(_this.response);
        }, function (err) {
        });
    };
    ListYourCarPage.prototype.validateForm = function () {
        // this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.document_two = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.document_three = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.document_four = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.document_five = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.document_six = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.document_seven = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.document_one = 'data1';
        // this.document_two = 'data2';
        // this.document_three = 'data3';
        // this.document_four = 'data4';
        // this.document_five = 'data5'
        // this.document_six = 'data6';
        // this.document_seven = 'data7'
        if (this.validation) {
            this.active_start_date = document.querySelector(".start_date .activeState").textContent;
            var cStartDate = new Date(this.currentYear, this.startmonthCounter - 1, this.active_start_date).getTime();
            this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
            var cDate = new Date(this.currentYear, this.endmonthCounter - 1, this.active_end_date).getTime();
            this.ModelError = false;
            this.MakeError = false;
            this.LicensePlateError = false;
            this.document_oneError = false;
            this.document_twoError = false;
            this.document_threeError = false;
            this.document_sixError = false;
            this.document_sevenError = false;
            this.DoorError = false;
            this.document_fourError = false;
            this.document_fiveError = false;
            this.DescriptionError = false;
            this.SeatsError = false;
            this.GasError = false;
            this.GearTypeError = false;
            this.ConvertableError = false;
            this.wheelsError = false;
            this.other_featuresError = false;
            this.aboutError = false;
            this.LivesError = false;
            this.workError = false;
            this.LanguageError = false;
            this.RouteError = false;
            this.ChargesInfoError = false;
            if (this.Model == '' || this.Model == undefined) {
                this.ModelError = true;
                return false;
            }
            else if (this.Make == '' || this.Make == undefined) {
                this.MakeError = true;
                return false;
            }
            else if (this.LicensePlate == '' || this.LicensePlate == undefined) {
                this.LicensePlateError = true;
                return false;
            }
            //  else if (this.document_one == '' || this.document_one == undefined) {
            //   this.document_oneError = true;
            //   return false;
            // } else if (this.document_two == '' || this.document_two == undefined) {
            //   this.document_twoError = true;
            //   return false;
            // } else if (this.document_three == '' || this.document_three == undefined) {
            //   this.document_threeError = true;
            //   return false;
            // } else if (this.document_six == '' || this.document_six == undefined) {
            //   this.document_sixError = true;
            //   return false;
            // } else if (this.document_seven == '' || this.document_seven == undefined) {
            //   this.document_sevenError = true;
            //   return false;
            // } 
            else if (this.Description == '' || this.Description == undefined) {
                this.DescriptionError = true;
                return false;
            }
            else if (this.Seats == '' || this.Seats == undefined) {
                this.SeatsError = true;
                return false;
            }
            else if (this.Door == '' || this.Door == undefined) {
                this.DoorError = true;
                return false;
            }
            else if (this.Gas == '' || this.Gas == undefined) {
                this.GasError = true;
                return false;
            }
            else if (this.GearType == '' || this.GearType == undefined) {
                this.GearTypeError = true;
                return false;
            }
            else if (this.Convertable == '' || this.Convertable == undefined) {
                this.ConvertableError = true;
                return false;
            }
            else if (this.wheels == '' || this.wheels == undefined) {
                this.wheelsError = true;
                return false;
            }
            else if (this.other_features == '' || this.other_features == undefined) {
                this.other_featuresError = true;
                return false;
            }
            else if (this.document_four == '' || this.document_four == undefined) {
                this.document_fourError = true;
                return false;
            }
            else if (this.document_five == '' || this.document_five == undefined) {
                this.document_fiveError = true;
                return false;
            }
            else if (this.about == '' || this.about == undefined) {
                this.aboutError = true;
                return false;
            }
            else if (this.Lives == '' || this.Lives == undefined) {
                this.LivesError = true;
                return false;
            }
            else if (this.work == '' || this.work == undefined) {
                this.workError = true;
                return false;
            }
            else if (this.Language == '' || this.Language == undefined) {
                this.LanguageError = true;
                return false;
            }
            else if (this.pickup == '' || this.pickup == undefined) {
                this.RouteError = true;
                return false;
            }
            else if (this.dropoff == '' || this.dropoff == undefined) {
                this.RouteError = true;
                return false;
            }
            else if (this.ChargesInfo == '' || this.ChargesInfo == undefined) {
                this.ChargesInfoError = true;
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
        }
    };
    ListYourCarPage.prototype.submitForms = function () {
        this.start_date = document.querySelector(".start_date .activeState").textContent;
        this.end_date = document.querySelector(".end_date .activeEndState").textContent;
        console.log(this.currentYear + '-' + this.startMonthCounter + '-' + this.start_date);
        console.log(this.currentYearTwo + '-' + this.endMonthCounter + '-' + this.end_date);
    };
    ListYourCarPage.prototype.submitForm = function () {
        var _this = this;
        if (this.platform.is("android")) {
            this.validation = true;
            // console.log(this.document_four);
            if (this.validateForm() == true) {
                this.fieldMissing = false;
                //alert('true');
                this.start_date = document.querySelector(".start_date .activeState").textContent;
                this.end_date = document.querySelector(".end_date .activeEndState").textContent;
                this.document_one = this.document_one.split(',')[1];
                this.document_two = this.document_two.split(',')[1];
                this.document_three = this.document_three.split(',')[1];
                this.document_six = this.document_six.split(',')[1];
                this.document_seven = this.document_seven.split(',')[1];
                this.documentBase64.push(this.document_one);
                this.documentBase64.push(this.document_two);
                this.documentBase64.push(this.document_three);
                this.documentBase64.push(this.document_six);
                this.documentBase64.push(this.document_seven);
                var roadworthy = this.document_four.split(',')[1];
                var insurance = this.document_five.split(',')[1];
                // var roadworthy = this.image4;
                // var insurance = this.image5;
                var stringy = JSON.stringify({
                    "requestType": 'list_car',
                    "modelID": this.Model,
                    "makeID": this.Make,
                    "licensePlate": this.LicensePlate,
                    "carImages": this.documentBase64,
                    "noOfSeats": this.Seats,
                    "description": this.Description,
                    "noOfDoors": this.Door,
                    "fuelTypeID": this.Gas,
                    "gearTypeID": this.GearType,
                    "noOfWheels": this.wheels,
                    "roofTypeID": this.Convertable,
                    "otherFeatures": this.other_features,
                    "roadWorthy": roadworthy,
                    "insurance": insurance,
                    "chargePerDay": this.ChargesInfo,
                    "countriesID": this.Lives,
                    "about": this.about,
                    "work": this.work,
                    "languagesId": this.Language,
                    "pickupLocationName": this.pickup,
                    "dropoffLocationName": this.dropoff,
                    "start_date": this.currentYear + '-' + this.startMonthCounter + '-' + this.start_date,
                    "end_date": this.currentYearTwo + '-' + this.endMonthCounter + '-' + this.end_date,
                    "pickupLatitude": this.pickuplat,
                    "pickupLongitude": this.pickuplong,
                    "dropoffLatitude": this.dropofflat,
                    "dropoffLongitude": this.dropofflong,
                    "usersID": this.userID,
                    "email": this.Email,
                    "currencyID": this.currencyID
                });
                console.log(stringy);
                //    alert(stringy)
                this.present();
                this.restService.saveListVehicles(stringy).subscribe(function (response) {
                    _this.response = JSON.parse(response['_body']);
                    console.log(response['_body']);
                    //     alert(response['_body'])
                    console.log(_this.response.status);
                    if (_this.response.status == 'error') {
                        _this.dismiss();
                        _this.presentToast(_this.response.msg);
                    }
                    else if (_this.response.status == 'success') {
                        _this.presentToast('Vehicle Added Successfully');
                        _this.Model = '';
                        _this.Make = '';
                        _this.LicensePlate = '';
                        _this.documentBase64 = [];
                        _this.Seats = '';
                        _this.Description = '';
                        _this.Door = '';
                        _this.Gas = '';
                        _this.GearType = '';
                        _this.wheels = '';
                        _this.Convertable = '';
                        _this.other_features = '';
                        roadworthy = '';
                        insurance = '';
                        _this.ChargesInfo = '';
                        _this.Lives = '';
                        _this.about = '';
                        _this.work = '';
                        _this.Language = '';
                        _this.pickup = '';
                        _this.dropoff = '';
                        _this.document_one = '';
                        _this.document_two = '';
                        _this.document_three = '';
                        _this.document_four = '';
                        _this.document_five = '';
                        _this.document_six = '';
                        _this.document_seven = '';
                        _this.storage.set('pickup', null);
                        _this.storage.set('dropoff', null);
                        _this.router.navigate(['/']);
                        _this.dismiss();
                    }
                }, function (err) {
                    alert('request error');
                    _this.dismiss();
                });
            }
            else {
                this.fieldMissing = true;
            }
        }
        else if (this.platform.is("ios")) {
            // console.log(this.document_four);
            //alert('true');
            this.start_date = document.querySelector(".start_date .activeState").textContent;
            this.end_date = document.querySelector(".end_date .activeEndState").textContent;
            this.document_one = this.document_one.split(',')[1];
            this.document_two = this.document_two.split(',')[1];
            this.document_three = this.document_three.split(',')[1];
            this.document_six = this.document_six.split(',')[1];
            this.document_seven = this.document_seven.split(',')[1];
            this.documentBase64.push(this.document_one);
            this.documentBase64.push(this.document_two);
            this.documentBase64.push(this.document_three);
            this.documentBase64.push(this.document_six);
            this.documentBase64.push(this.document_seven);
            var roadworthy = this.document_four.split(',')[1];
            var insurance = this.document_five.split(',')[1];
            // var roadworthy = this.image4;
            // var insurance = this.image5;
            var stringy = JSON.stringify({
                "requestType": 'list_car',
                "modelID": this.Model,
                "makeID": this.Make,
                "licensePlate": this.LicensePlate,
                "carImages": "",
                "noOfSeats": this.Seats,
                "description": this.Description,
                "noOfDoors": this.Door,
                "fuelTypeID": this.Gas,
                "gearTypeID": this.GearType,
                "noOfWheels": this.wheels,
                "roofTypeID": this.Convertable,
                "otherFeatures": this.other_features,
                "roadWorthy": roadworthy,
                "insurance": insurance,
                "chargePerDay": this.ChargesInfo,
                "countriesID": this.Lives,
                "about": this.about,
                "work": this.work,
                "languagesId": this.Language,
                "pickupLocationName": this.pickup,
                "dropoffLocationName": this.dropoff,
                "start_date": this.currentYear + '-' + this.startMonthCounter + '-' + this.start_date,
                "end_date": this.currentYearTwo + '-' + this.endMonthCounter + '-' + this.end_date,
                "pickupLatitude": this.pickuplat,
                "pickupLongitude": this.pickuplong,
                "dropoffLatitude": this.dropofflat,
                "dropoffLongitude": this.dropofflong,
                "usersID": this.userID,
                "email": this.Email,
                "currencyID": this.currencyID
            });
            console.log(stringy);
            //  alert(stringy)
            this.present();
            this.restService.saveListVehicles(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(response['_body']);
                // alert(response['_body'])
                console.log(_this.response.status);
                if (_this.response.status == 'error') {
                    _this.dismiss();
                    _this.presentToast(_this.response.msg);
                }
                else if (_this.response.status == 'success') {
                    var carid = _this.response.vehicle_id;
                    var _loop_1 = function (i) {
                        St = JSON.stringify({
                            requestType: "single_car",
                            userID: _this.userID,
                            carID: carid,
                            imageIndex: i,
                            carImage: _this.documentBase64[i],
                        });
                        _this.restService.imgesForIos(St).subscribe(function (res) {
                            console.log(res, "added car ");
                            if (i == 4) {
                                _this.Model = '';
                                _this.Make = '';
                                _this.LicensePlate = '';
                                _this.documentBase64 = [];
                                _this.Seats = '';
                                _this.Description = '';
                                _this.Door = '';
                                _this.Gas = '';
                                _this.GearType = '';
                                _this.wheels = '';
                                _this.Convertable = '';
                                _this.other_features = '';
                                roadworthy = '';
                                insurance = '';
                                _this.ChargesInfo = '';
                                _this.Lives = '';
                                _this.about = '';
                                _this.work = '';
                                _this.Language = '';
                                _this.pickup = '';
                                _this.dropoff = '';
                                _this.document_one = '';
                                _this.document_two = '';
                                _this.document_three = '';
                                _this.document_four = '';
                                _this.document_five = '';
                                _this.document_six = '';
                                _this.document_seven = '';
                                _this.storage.set('pickup', null);
                                _this.storage.set('dropoff', null);
                                _this.presentToast('Vehicle Added Successfully');
                                _this.router.navigate(['/']);
                                _this.dismiss();
                            }
                        }, function (err) {
                            console.log(err);
                        });
                    };
                    var St;
                    for (var i = 0; i < _this.documentBase64.length; i++) {
                        _loop_1(i);
                    }
                    // this.dismiss();
                }
            }, function (err) {
                alert('request error');
                _this.dismiss();
            });
        }
    };
    ListYourCarPage.prototype.uploadDocument = function (param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Upload Photo?',
                            buttons: [
                                {
                                    text: 'Take image from camera',
                                    handler: function () {
                                        _this.takeImageFromCamera(param);
                                    }
                                },
                                {
                                    text: 'Upload image from gallery',
                                    handler: function () {
                                        _this.takeImageFromCamera(param);
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
    ListYourCarPage.prototype.uploadDocumentsPhotos = function (params) {
        var _this = this;
        console.log("params", params);
        var options = {
            maximumImagesCount: 5,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: sucessed' + results[i]);
                if (i == 0) {
                    var base640 = "data:image/png;base64," + results[0];
                    _this.image1 = results[0];
                    _this.document_one = base640;
                }
                if (i == 1) {
                    var base641 = "data:image/png;base64," + results[1];
                    _this.image2 = results[1];
                    _this.document_two = base641;
                }
                if (i == 2) {
                    var base642 = "data:image/png;base64," + results[2];
                    _this.image3 = results[2];
                    _this.document_three = base642;
                }
                if (i == 3) {
                    var base643 = "data:image/png;base64," + results[3];
                    _this.image6 = results[3];
                    _this.document_six = base643;
                }
                if (i == 4) {
                    var base644 = "data:image/png;base64," + results[4];
                    _this.image7 = results[4];
                    _this.document_seven = base644;
                }
            }
        }, function (err) {
            console.log(err, "error in images??");
        });
    };
    // hasReadPermission() {
    //   window.imagePicker.hasReadPermission(
    //     function (result) {
    //       // if this is 'false' you probably want to call 'requestReadPermission' now
    //       alert(result);
    //     }
    //   )
    // }
    // requestReadPermission() {
    //   // no callbacks required as this opens a popup which returns async
    //   window.imagePicker.requestReadPermission();
    // }
    ListYourCarPage.prototype.takeImageFromCamera = function (param) {
        //this.imageService.selectImageInCamera().then((imageData) => {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (imageData) {
            console.log('Image URI: ' + imageData);
            //    alert('Image URI: ' + imageData)
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                console.log(result);
                console.log('Size in bytes is now:', _this.imageCompress.byteCount(result));
                if (param == 1) {
                    _this.image1 = imageData;
                    _this.document_one = result;
                }
                else if (param == 2) {
                    _this.image2 = imageData;
                    _this.document_two = result;
                }
                else if (param == 3) {
                    _this.image3 = imageData;
                    _this.document_three = result;
                }
                else if (param == 4) {
                    _this.image4 = imageData;
                    _this.document_four = result;
                }
                else if (param == 5) {
                    _this.image5 = imageData;
                    _this.document_five = result;
                }
                else if (param == 6) {
                    _this.image6 = imageData;
                    _this.document_six = result;
                }
                else if (param == 7) {
                    _this.image7 = imageData;
                    _this.document_seven = result;
                }
            });
        }, function (err) {
            console.log('imagepicker  now:', err);
        });
        //   }).catch(err => console.error(err));
    };
    ListYourCarPage.prototype.getImageFromGallery = function (param) {
        var _this = this;
        this.imageService.selectImageInGallery().then(function (imageData) {
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                console.log(result);
                console.log('Size in bytes is now:', _this.imageCompress.byteCount(result));
                if (param == 1) {
                    _this.image1 = imageData;
                    _this.document_one = result;
                }
                else if (param == 2) {
                    _this.image2 = imageData;
                    _this.document_two = result;
                }
                else if (param == 3) {
                    _this.image3 = imageData;
                    _this.document_three = result;
                }
                else if (param == 4) {
                    _this.image4 = imageData;
                    _this.document_four = result;
                }
                else if (param == 5) {
                    _this.image5 = imageData;
                    _this.document_five = result;
                }
                else if (param == 6) {
                    _this.image6 = imageData;
                    _this.document_six = result;
                }
                else if (param == 7) {
                    _this.image7 = imageData;
                    _this.document_seven = result;
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    ListYourCarPage.prototype.validateStartDate = function () {
        var _this = this;
        setTimeout(function () {
            _this.dateStartError = false;
            /**** end date ****/
            _this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
            var cEndDate = new Date(_this.currentYear, _this.endmonthCounter - 1, _this.active_end_date).getTime();
            /**** end date ****/
            _this.active_start_date = document.querySelector(".start_date .activeState").textContent;
            var cDate = new Date(_this.currentYear, _this.startmonthCounter - 1, _this.active_start_date).getTime();
            if (cDate > cEndDate) {
                console.log('start date ');
                _this.dateStartError = true;
                console.log(_this.dateStartError);
                //this.validateEndDate();
            }
        }, 300);
    };
    ListYourCarPage.prototype.validateEndDate = function () {
        var _this = this;
        setTimeout(function () {
            _this.dateStartError = false;
            _this.active_start_date = document.querySelector(".start_date .activeState").textContent;
            var cStartDate = new Date(_this.currentYear, _this.startmonthCounter - 1, _this.active_start_date).getTime();
            _this.active_end_date = document.querySelector(".end_date .activeEndState").textContent;
            var cDate = new Date(_this.currentYear, _this.endmonthCounter - 1, _this.active_end_date).getTime();
            if (cStartDate > cDate) {
                console.log('end date ');
                _this.dateStartError = true;
                console.log(_this.dateStartError);
            }
        }, 300);
    };
    ListYourCarPage.prototype.goToHome = function () {
        this.router.navigate(['/listed-car']);
    };
    ListYourCarPage.prototype.slidePrev = function () {
        this.start_month_index--;
        if (this.start_month_index < 1) {
            this.currentYear = this.currentYear - 1;
            this.start_month_index = 12;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startMonthCounter = this.start_month_index;
        // this.startSlides.slidePrev();
        this.validateStartDate();
    };
    ListYourCarPage.prototype.slideNext = function () {
        this.start_month_index++;
        if (this.start_month_index == 13) {
            this.currentYear = this.currentYear + 1;
            this.start_month_index = 1;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startMonthCounter = this.start_month_index;
        this.validateStartDate();
        // this.startSlides.slideNext();
    };
    ListYourCarPage.prototype.slidePrev2 = function () {
        this.end_month_index--;
        if (this.end_month_index < 1) {
            this.currentYearTwo = this.currentYearTwo - 1;
            this.end_month_index = 12;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endMonthCounter = this.end_month_index;
        this.validateEndDate();
        // end_month_index 
        // this.endSlides.slidePrev();
    };
    ListYourCarPage.prototype.slideNext2 = function () {
        this.end_month_index++;
        if (this.end_month_index == 13) {
            this.currentYearTwo = this.currentYearTwo + 1;
            this.end_month_index = 1;
        }
        this.end_date_month = this.monthList(this.end_month_index);
        this.endMonthCounter = this.end_month_index;
        this.validateEndDate();
        // this.endSlides.slideNext();
    };
    ListYourCarPage.prototype.monthList = function (param) {
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
    ListYourCarPage.prototype.presentToast = function (msg) {
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
    ListYourCarPage.prototype.present = function () {
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
    ListYourCarPage.prototype.dismiss = function () {
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
    ListYourCarPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"] },
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
    ]; };
    ListYourCarPage.propDecorators = {
        startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
        endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['endSlides',] }]
    };
    ListYourCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-your-car',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-your-car.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-car/list-your-car.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-your-car.page.scss */ "./src/app/list-your-car/list-your-car.page.scss")).default]
        })
    ], ListYourCarPage);
    return ListYourCarPage;
}());



/***/ })

}]);
//# sourceMappingURL=list-your-car-list-your-car-module.js.map