(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-list-your-car-edit-list-your-car-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-list-your-car/edit-list-your-car.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-list-your-car/edit-list-your-car.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n    </ion-buttons>\n    <ion-title>Edit Car</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Vehicle Info</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Model\" [(ngModel)]=\"Model\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"{{p.model_id}}\" *ngFor=\"let p of model; let i = index\">{{p.name}}</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"ModelError\" class=\"error ion-padding\">\n          Model is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Make\" [(ngModel)]=\"Make\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"{{p.veh_make_id}}\" *ngFor=\"let p of make; let i = index\">{{p.name}}</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"MakeError\" class=\"error ion-padding\">\n          Make is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"License Plate\" [(ngModel)]=\"LicensePlate\" class=\"input_list\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"LicensePlateError\" class=\"error ion-padding\">\n          License Plate is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images\">Upload Images</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(1)\" *ngIf=\"document_one =='' || document_one ==undefined\">\n              <img src=\"assets/img/plus.svg\" >\n            </ion-col>\n            <ion-icon name=\"trash\" class=\"bin\" (click)=\"removeImage(document_one_id,1)\" *ngIf=\"document_one\"></ion-icon>\n            <ion-col size=\"12\" class=\"real_image\"  *ngIf=\"document_one\">\n              <img src=\"{{document_one}}\" >\n            </ion-col>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(2)\" *ngIf=\"document_two =='' || document_two ==undefined\">\n            <img src=\"assets/img/plus.svg\" >\n          </ion-col>\n          <ion-icon name=\"trash\" class=\"bin\" (click)=\"removeImage(document_two_id,2)\" *ngIf=\"document_two\"></ion-icon>\n          <ion-col size=\"12\" class=\"real_image\"  *ngIf=\"document_two\">\n            <img src=\"{{document_two}}\" >\n          </ion-col>\n        </ion-row>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-row>\n        <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(3)\" *ngIf=\"document_three =='' || document_three ==undefined\">\n          <img src=\"assets/img/plus.svg\" >\n        </ion-col>\n        <ion-icon name=\"trash\" class=\"bin\" (click)=\"removeImage(document_three_id,3)\" *ngIf=\"document_three\"></ion-icon>\n        <ion-col size=\"12\" class=\"real_image\"  *ngIf=\"document_three\">\n          <img src=\"{{document_three}}\" >\n        </ion-col>\n      </ion-row>\n    </ion-col>\n      <span *ngIf=\"document_oneError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_twoError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_threeError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"4\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(6)\" *ngIf=\"document_six =='' || document_six ==undefined\">\n              <img src=\"assets/img/plus.svg\" >\n            </ion-col>\n            <ion-icon name=\"trash\" class=\"bin\" (click)=\"removeImage(document_six_id,6)\" *ngIf=\"document_six\"></ion-icon>\n            <ion-col size=\"12\" class=\"real_image\"  *ngIf=\"document_six\">\n              <img src=\"{{document_six}}\" >\n            </ion-col>\n           \n          </ion-row>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-row>\n          <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(7)\" *ngIf=\"document_seven =='' || document_seven ==undefined\">\n            <img src=\"assets/img/plus.svg\" >\n          </ion-col>\n          <ion-icon name=\"trash\" class=\"bin\" (click)=\"removeImage(document_seven_id,7)\" *ngIf=\"document_seven\"></ion-icon>\n          <ion-col size=\"12\" class=\"real_image\" *ngIf=\"document_seven\">\n            <img src=\"{{document_seven}}\" >\n          </ion-col>\n         \n        </ion-row>\n      </ion-col>\n      <span *ngIf=\"document_sixError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n      <span *ngIf=\"document_sevenError\" class=\"error ion-padding\">\n        Document is required.\n      </span>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-textarea rows=\"6\" placeholder=\"Description\" [(ngModel)]=\"Description\"  class=\"list_3\" (ionBlur)=\"validateForm()\"></ion-textarea>\n        <span *ngIf=\"DescriptionError\" class=\"error ion-padding\">\n          Description is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"No. of seats\" [(ngModel)]=\"Seats\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"SeatsError\" class=\"error ion-padding\">\n          Seat is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"No. of Door\" [(ngModel)]=\"Door\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"DoorError\" class=\"error ion-padding\">\n          Door is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n          <ion-select placeholder=\"Gas\" [(ngModel)]=\"Gas\" (ionBlur)=\"validateForm()\">\n            <ion-select-option value=\"{{p.fuel_type_id}}\" *ngFor=\"let p of fuel_type; let i = index\">{{p.name}}</ion-select-option>\n          </ion-select>\n          <span *ngIf=\"GasError\" class=\"error ion-padding\">\n            Fuel Type is required.\n          </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Gear Type\" [(ngModel)]=\"GearType\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"{{p.gear_type_id}}\" *ngFor=\"let p of gear_type; let i = index\">{{p.name}}</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"GearTypeError\" class=\"error ion-padding\">\n          Gear Type is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Convertable\" [(ngModel)]=\"Convertable\" (ionBlur)=\"validateForm()\" >\n          <ion-select-option value=\"{{p.engine_type_id}}\" *ngFor=\"let p of roof_type; let i = index\">{{p.name}}</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"ConvertableError\" class=\"error ion-padding\">\n          Roof Type is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"No. of wheels\" [(ngModel)]=\"wheels\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"wheelsError\" class=\"error ion-padding\">\n          wheel is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-textarea rows=\"6\" placeholder=\"Other features\" [(ngModel)]=\"other_features\" class=\"list_3\" (ionBlur)=\"validateForm()\"> </ion-textarea>\n        <span *ngIf=\"other_featuresError\" class=\"error ion-padding\">\n          other features is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Documents</h3>\n        <p class=\"upload_images\">Upload Road Worthy and Insurance documents</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n          <ion-row>\n            <!-- uploadDocument()  -->\n            <ion-col size=\"12\" class=\"list_9\" (click)=\"takeImageFromCamerass(4)\" *ngIf=\"document_four =='' || document_four ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\">\n              <p>Road Worthy</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"real_image_2\" (click)=\"takeImageFromCamerass(4)\" *ngIf=\"document_four\">\n              <img src=\"{{document_four}}\" >\n            </ion-col>\n            <span *ngIf=\"document_fourError\" class=\"error ion-padding\">\n              Document is required.\n            </span>\n          </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row>\n          <!-- uploadDocument() -->\n          <ion-col size=\"12\" class=\"list_9\" (click)=\"takeImageFromCamerass(5)\" *ngIf=\"document_five =='' || document_five ==undefined\">\n            <img src=\"assets/img/Menu_Plus.svg\">\n            <p>Insurance</p>\n          </ion-col>\n          <ion-col size=\"12\" class=\"real_image_2\" (click)=\"takeImageFromCamerass(5)\" *ngIf=\"document_five\">\n            <img src=\"{{document_five}}\" >\n          </ion-col>\n          <span *ngIf=\"document_fiveError\" class=\"error ion-padding\">\n            Document is required.\n          </span>\n        </ion-row>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Owner’s Details</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-textarea rows=\"6\" placeholder=\"About\" [(ngModel)]=\"about\" class=\"list_3\" (ionBlur)=\"validateForm()\"></ion-textarea>\n        <span *ngIf=\"aboutError\" class=\"error ion-padding\">\n          about is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n         <ion-select placeholder=\"Lives\" [(ngModel)]=\"Lives\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"{{p.id}}\" *ngFor=\"let p of countries; let i = index\">{{p.name}}</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"LivesError\" class=\"error ion-padding\">\n          Lives is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"Work\" [(ngModel)]=\"work\" class=\"input_list\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"workError\" class=\"error ion-padding\">\n          Work is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-select placeholder=\"Language\" [(ngModel)]=\"Language\" (ionBlur)=\"validateForm()\">\n          <ion-select-option value=\"{{p.languages_id}}\" *ngFor=\"let p of languages; let i = index\">{{p.name}}</ion-select-option>\n        </ion-select>\n        <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\n          Language is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Location Info</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"list_4\">\n        <ion-row>\n          <ion-col size=\"1\">\n            <div class=\"list_7\"></div>\n            <div class=\"list_5\"></div>\n            <div class=\"list_8\"></div>\n          </ion-col>\n          <ion-col size=\"11\">\n            <span (click)=\"goToLocation()\">Pickup</span>\n            <p class=\"list_6\" (click)=\"goToLocation()\">{{pickup}}</p>\n            <span (click)=\"goToLocation()\">Dropoff</span>\n            <p (click)=\"goToLocation()\">{{dropoff}}</p>\n          </ion-col>\n        </ion-row>\n        <span *ngIf=\"RouteError\" class=\"error ion-padding\">\n          Route is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Charges Info - ({{currency_symbol}})</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"Charges/day\" class=\"input_list\" [(ngModel)]=\"ChargesInfo\"  (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"ChargesInfoError\" class=\"error ion-padding\">\n          Charges Info is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Availability Calender</h3>\n        <p class=\"upload_images left_4\">Start Date</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"calender_slider\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev()\" >\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text\">{{start_date_month}} , {{currentYear}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"start_date\" [options]=\"option1\"   #startSlides>\n          <ion-slide *ngFor=\"let i of days\"  (click)=\"getStartIndex(i)\">\n              <span  *ngIf=\"i<=9\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n              <span  *ngIf=\"i>9\" class=\"num\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n          </ion-slide>\n         \n      </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <p class=\"upload_images left_4\">End Date</p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"calender_slider\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev2()\" >\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text\">{{end_date_month}} , {{currentYearTwo}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext2()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"end_date\"  [options]=\"option1\" #endSlides>\n          <ion-slide *ngFor=\"let i of days\" (click)=\"getEndIndex(i)\">\n            <span  *ngIf=\"i<=9\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\n            <span  *ngIf=\"i>9\" class=\"num\" [class.activeEndState]=\"sliderEndBoolean == i\">{{i}}</span>\n        </ion-slide>\n      </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col>\n      <span *ngIf=\"fieldMissing\" class=\"error ion-padding ion-text-center\">\n        Please fill all the required fields.\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Done</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditListYourCarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListYourCarPageRoutingModule", function() { return EditListYourCarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-list-your-car.page */ "./src/app/edit-list-your-car/edit-list-your-car.page.ts");




var routes = [
    {
        path: '',
        component: _edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_3__["EditListYourCarPage"]
    }
];
var EditListYourCarPageRoutingModule = /** @class */ (function () {
    function EditListYourCarPageRoutingModule() {
    }
    EditListYourCarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditListYourCarPageRoutingModule);
    return EditListYourCarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditListYourCarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListYourCarPageModule", function() { return EditListYourCarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-list-your-car-routing.module */ "./src/app/edit-list-your-car/edit-list-your-car-routing.module.ts");
/* harmony import */ var _edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-list-your-car.page */ "./src/app/edit-list-your-car/edit-list-your-car.page.ts");







var EditListYourCarPageModule = /** @class */ (function () {
    function EditListYourCarPageModule() {
    }
    EditListYourCarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _edit_list_your_car_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditListYourCarPageRoutingModule"]
            ],
            declarations: [_edit_list_your_car_page__WEBPACK_IMPORTED_MODULE_6__["EditListYourCarPage"]]
        })
    ], EditListYourCarPageModule);
    return EditListYourCarPageModule;
}());



/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.error {\n  color: red;\n}\n\n.real_image {\n  padding: 0px;\n}\n\n.real_image img {\n  width: 100%;\n  height: 100px;\n}\n\n.real_image_2 {\n  padding: 0px;\n}\n\n.real_image_2 img {\n  width: 100%;\n  height: 132px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #c4932f;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 2.5em 0em;\n}\n\n.list_9 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 2.7em 0em 2.5em 0em;\n}\n\n.list_9 p {\n  color: #d2d6d8;\n  font-size: 12px;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f7f8fa;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\nion-select {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 30px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n}\n\n.list_4 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 12px;\n  color: #d4dce1;\n  font-size: 13px;\n}\n\n.list_4 p {\n  margin: 0px;\n  color: #000;\n}\n\n.list_5 {\n  border-left: 1px dashed #c7c7c7;\n  height: 48px;\n  float: right;\n  margin-top: 12px;\n}\n\n.list_6 {\n  margin-bottom: 2em !important;\n}\n\n.list_7 {\n  height: 10px;\n  background: green;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n  margin-top: 3px;\n}\n\n.list_8 {\n  height: 10px;\n  background: red;\n  width: 10px;\n  float: right;\n  position: relative;\n  right: 5px;\n  border-radius: 50%;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.activeEndState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\n.bin {\n  position: absolute;\n  right: 5px;\n  background: #c4932f;\n  padding: 4px;\n  color: #fff;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1saXN0LXlvdXItY2FyL2VkaXQtbGlzdC15b3VyLWNhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSw2QkFBQTtBQU9KOztBQUxBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQWFKOztBQVhBO0VBQ0kseUJBQUE7QUFjSjs7QUFaQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSw0QkFBQTtBQWdCSjs7QUFkQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxrQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxnQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFxQko7O0FBbkJBO0VBQ0ksNEJBQUE7QUFzQko7O0FBcEJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBeUJKOztBQXZCQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBMEJKOztBQXhCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBMkJKOztBQXpCQTtFQUNJLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTRCSjs7QUExQkE7RUFDSSw2QkFBQTtBQTZCSjs7QUEzQkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQThCSjs7QUE1QkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUErQko7O0FBN0JBO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0FBZ0NKOztBQTlCQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQWlDSjs7QUEvQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQWtDSiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbGlzdC15b3VyLWNhci9lZGl0LWxpc3QteW91ci1jYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuLnJlYWxfaW1hZ2Uge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5yZWFsX2ltYWdlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbi5yZWFsX2ltYWdlXzIge1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5yZWFsX2ltYWdlXzIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEzMnB4O1xufVxuLmxpc3RfMSB7XG4gICAgcGFkZGluZzogMGVtIDFlbTtcbn1cbi5saXN0XzEgaDMge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuLmxlZnRfNCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuN2VtICFpbXBvcnRhbnQ7XG59XG4uaW5wdXRfbGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbi51cGxvYWRfaW1hZ2VzIHtcbiAgICBjb2xvcjogI2M0OTMyZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuLmxpc3RfMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNkNGRjZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyLjVlbSAwZW07XG59XG4ubGlzdF85IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2Q0ZGNlMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIuN2VtIDBlbSAyLjVlbSAwZW07XG59XG4ubGlzdF85IHAge1xuICAgIGNvbG9yOiAjZDJkNmQ4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubGlzdF8zIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLmJ0bl9mb290ZXIge1xuICAgIG1hcmdpbjogMC43ZW0gMGVtIDFlbSAwZW07XG59XG5pb24tc2xpZGUgc3BhbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4ubnVtIHtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xufVxuLmNhbGVuZGVyX3NsaWRlciB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBwYWRkaW5nOiAwLjZlbSAwZW07XG59XG4uY2FsZW5kZXJfc2xpZGVyX3RleHQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuaW9uLXNsaWRlIHtcbiAgICBtYXJnaW4tbGVmdDogMC42ZW07XG59XG5pb24tc2xpZGU6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwZW07XG59XG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuX2Zvb3RlciB7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtIDEuMmVtIDFlbTtcbn1cbi5pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiAjNmU2ZDZkO1xuICAgIHBhZGRpbmc6IDAuNGVtIDBlbTtcbn1cbi5pbmZvIHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIGJhY2tncm91bmQ6ICNmN2Y4ZmE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNiMmIyYjQ7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMS41ZW07XG59XG4ubGlzdF80IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBjb2xvcjogI2Q0ZGNlMTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ubGlzdF80IHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLmxpc3RfNSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgI2M3YzdjNztcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubGlzdF82IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW0gIWltcG9ydGFudDtcbn1cbi5saXN0Xzcge1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICB3aWR0aDogMTBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbi5saXN0Xzgge1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5hY3RpdmVTdGF0ZSB7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5hY3RpdmVFbmRTdGF0ZSB7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5iaW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/edit-list-your-car/edit-list-your-car.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/edit-list-your-car/edit-list-your-car.page.ts ***!
  \***************************************************************/
/*! exports provided: EditListYourCarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListYourCarPage", function() { return EditListYourCarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");










var EditListYourCarPage = /** @class */ (function () {
    function EditListYourCarPage(loadingController, activatedRoute, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, imagePicker) {
        var _this = this;
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
        this.option1 = {
            loop: true,
            slidesPerView: 8
        };
        this.start_date_month = 'January';
        this.end_date_month = 'January';
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
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            _this.vehicles_id = _this.response.booking_details.vehicles_id;
            console.log(_this.response);
        });
        this.days = Array.from({ length: 30 }, function (v, k) { return k + 1; });
    }
    EditListYourCarPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
            _this.about = user_details.about;
            _this.work = user_details.work;
            _this.currencyID = user_details.currencies_id;
            /*setTimeout(() => {
              this.Language = user_details.languages_id;
              this.Lives = user_details.countries_id;
              console.log('ok');
             }, 2000); */
            //  this.getVehicleDetails();
            _this.getDropDownData();
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
    EditListYourCarPage.prototype.ionViewWillEnter = function () {
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
    EditListYourCarPage.prototype.getVehicleDetails = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "get_car_details_by_id",
            "usersID": this.userID,
            "vehicleID": this.vehicles_id,
            "currencyID": this.currencyID
        });
        console.log(stringy);
        this.present();
        this.restService.list_vehicles(stringy).subscribe(function (response) {
            _this.dismiss();
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            /*  this.fuel_type  = this.response.fuel_type;
              this.gear_type  = this.response.gear_type;
              this.roof_type  = this.response.roof_type;
              this.countries  = this.response.countries;
              this.languages  = this.response.languages;
              this.model = this.response.vehicle_model;
              this.make  = this.response.vehicle_make; */
            _this.vehicles_list = _this.response.vehicles_list[0];
            _this.Model = _this.vehicles_list.model_id;
            console.log(_this.Model);
            _this.Make = _this.vehicles_list.make_id;
            _this.LicensePlate = _this.vehicles_list.license_no_plate;
            _this.Description = _this.vehicles_list.description;
            _this.Seats = _this.vehicles_list.no_of_seats;
            _this.Door = _this.vehicles_list.no_of_doors;
            _this.Gas = _this.vehicles_list.fuel_type_id;
            _this.GearType = _this.vehicles_list.gear_type_id;
            _this.Convertable = _this.vehicles_list.roof_type_id;
            _this.wheels = _this.vehicles_list.no_of_wheels;
            _this.other_features = _this.vehicles_list.other_features;
            _this.about = _this.vehicles_list.about;
            _this.Lives = _this.vehicles_list.countries_id;
            _this.work = _this.vehicles_list.work;
            _this.Language = _this.vehicles_list.languages_id;
            _this.pickup = _this.vehicles_list.pickup_location;
            _this.dropoff = _this.vehicles_list.dropoff_location;
            _this.ChargesInfo = _this.vehicles_list.charge_per_day;
            _this.document_four = _this.vehicles_list.roadworthy_doc_img;
            _this.document_five = _this.vehicles_list.insurance_img;
            _this.vehiclesID = _this.vehicles_list.vehicles_id;
            _this.dbStartDate = _this.vehicles_list.start_date.split('-');
            _this.dbEndDate = _this.vehicles_list.end_date.split('-');
            console.log(_this.dbStartDate);
            _this.start_month_index = parseInt(_this.dbStartDate[1]);
            _this.start_date_month = _this.monthList(_this.start_month_index);
            _this.startMonthCounter = _this.start_month_index;
            _this.getStartIndex(parseInt(_this.dbStartDate[2]));
            _this.currentYear = _this.dbStartDate[0];
            _this.end_month_index = parseInt(_this.dbEndDate[1]);
            _this.end_date_month = _this.monthList(_this.end_month_index);
            _this.endMonthCounter = _this.end_month_index;
            _this.getEndIndex(parseInt(_this.dbEndDate[2]));
            _this.currentYearTwo = _this.dbEndDate[0];
            _this.document_one = _this.vehicles_list.vehicle_imgs[0].img;
            _this.document_two = _this.vehicles_list.vehicle_imgs[1].img;
            _this.document_three = _this.vehicles_list.vehicle_imgs[2].img;
            _this.document_six = _this.vehicles_list.vehicle_imgs[3].img;
            _this.document_seven = _this.vehicles_list.vehicle_imgs[4].img;
            _this.document_six = _this.vehicles_list.vehicle_imgs[3].img;
            _this.document_one_id = _this.vehicles_list.vehicle_imgs[0].veh_img_id;
            _this.document_two_id = _this.vehicles_list.vehicle_imgs[1].veh_img_id;
            _this.document_three_id = _this.vehicles_list.vehicle_imgs[2].veh_img_id;
            _this.document_six_id = _this.vehicles_list.vehicle_imgs[3].veh_img_id;
            _this.document_seven_id = _this.vehicles_list.vehicle_imgs[4].veh_img_id;
        }, function (err) {
        });
    };
    EditListYourCarPage.prototype.getStartIndex = function (i) {
        this.sliderStartBoolean = i;
        this.validateStartDate();
    };
    EditListYourCarPage.prototype.getEndIndex = function (i) {
        this.sliderEndBoolean = i;
        this.validateEndDate();
    };
    EditListYourCarPage.prototype.goToLocation = function () {
        var myData = JSON.stringify({
            location: '/edit-list-your-car'
        });
        this.router.navigate(['/location'], {
            queryParams: {
                value: myData
            },
        });
    };
    EditListYourCarPage.prototype.removeImage = function (id, index) {
        var _this = this;
        //alert(id);
        var stringy = JSON.stringify({
            "requestType": "delete_vehicle_images",
            "usersID": this.userID,
            "vehImgID": id
        });
        console.log(stringy);
        this.restService.deleteImage(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            if (_this.response.status) {
                if (index == 1) {
                    _this.document_one = '';
                }
                else if (index == 2) {
                    _this.document_two = '';
                }
                else if (index == 3) {
                    _this.document_three = '';
                }
                else if (index == 4) {
                    _this.document_four = '';
                }
                else if (index == 5) {
                    _this.document_five = '';
                }
            }
        }, function (err) {
        });
    };
    EditListYourCarPage.prototype.getDropDownData = function () {
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
            _this.getVehicleDetails();
            console.log(_this.response);
        }, function (err) {
        });
    };
    EditListYourCarPage.prototype.validateForm = function () {
        /*  this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_two = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_three = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_four = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_five = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_six = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_seven = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        */
        if (this.validation) {
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
            else if (this.document_one == '' || this.document_one == undefined) {
                this.document_oneError = true;
                return false;
            }
            else if (this.document_two == '' || this.document_two == undefined) {
                this.document_twoError = true;
                return false;
            }
            else if (this.document_three == '' || this.document_three == undefined) {
                this.document_threeError = true;
                return false;
            }
            else if (this.document_six == '' || this.document_six == undefined) {
                this.document_sixError = true;
                return false;
            }
            else if (this.document_seven == '' || this.document_seven == undefined) {
                this.document_sevenError = true;
                return false;
            }
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
                return true;
            }
        }
    };
    EditListYourCarPage.prototype.submitForm = function () {
        var _this = this;
        this.validation = true;
        // console.log(this.document_four);
        if (this.validateForm() == true) {
            this.fieldMissing = false;
            //alert('true');
            this.start_date = document.querySelector(".start_date .activeState").textContent;
            this.end_date = document.querySelector(".end_date .activeEndState").textContent;
            if (this.documentUploadOne) {
                this.document_one = this.document_one.split(',')[1];
                this.documentBase64.push(this.document_one);
            }
            else {
                this.document_one = '';
            }
            if (this.documentUploadTwo) {
                this.document_two = this.document_two.split(',')[1];
                this.documentBase64.push(this.document_two);
            }
            else {
                this.document_two = '';
            }
            if (this.documentUploadThree) {
                this.document_three = this.document_three.split(',')[1];
                this.documentBase64.push(this.document_three);
            }
            else {
                this.document_three = '';
            }
            if (this.documentUploadSix) {
                this.document_six = this.document_six.split(',')[1];
                this.documentBase64.push(this.document_six);
            }
            else {
                this.document_six = '';
            }
            if (this.documentUploadSeven) {
                this.document_seven = this.document_seven.split(',')[1];
                this.documentBase64.push(this.document_seven);
            }
            else {
                this.document_seven = '';
            }
            var roadworthy;
            if (this.documentUploadFour) {
                roadworthy = this.document_four.split(',')[1];
            }
            else {
                roadworthy = '';
            }
            var insurance;
            if (this.documentUploadFive) {
                insurance = this.document_five.split(',')[1];
            }
            else {
                insurance = '';
            }
            var stringy = JSON.stringify({
                "requestType": 'edit_list_car',
                "vehicleID": this.vehiclesID,
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
            this.present();
            this.restService.saveListVehicles(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response.status);
                if (_this.response.status == 'error') {
                    _this.presentToast('Oops!something went wrong');
                }
                else if (_this.response.status == 'success') {
                    _this.presentToast('Vehicle Updated Successfully');
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
                }
                _this.dismiss();
            }, function (err) {
                _this.dismiss();
            });
        }
        else {
            this.fieldMissing = true;
        }
    };
    EditListYourCarPage.prototype.uploadDocument = function (param) {
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
                                        _this.getImageFromGallery(param);
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
    EditListYourCarPage.prototype.takeImageFromCamerass = function (param) {
        var _this = this;
        var options = {
            maximumImagesCount: 1,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (imageData) {
            console.log('Image URI: ' + imageData);
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                console.log(result);
                console.log('Size in bytes is now:', _this.imageCompress.byteCount(result));
                if (param == 1) {
                    _this.document_one = result;
                    _this.documentUploadOne = true;
                }
                else if (param == 2) {
                    _this.document_two = result;
                    _this.documentUploadTwo = true;
                }
                else if (param == 3) {
                    _this.document_three = result;
                    _this.documentUploadThree = true;
                }
                else if (param == 4) {
                    _this.document_four = result;
                    _this.documentUploadFour = true;
                }
                else if (param == 5) {
                    _this.document_five = result;
                    _this.documentUploadFive = true;
                }
                else if (param == 6) {
                    _this.document_six = result;
                    _this.documentUploadSix = true;
                }
                else if (param == 7) {
                    _this.document_seven = result;
                    _this.documentUploadSeven = true;
                }
            });
        }, function (err) {
            console.log('imagepicker  now:', err);
        });
        // this.imageService.selectImageInCamera().then((imageData) => {
        //   var base64 = `data:image/png;base64,${imageData}`;
        //   this.imageCompress.compressFile(base64,0, 50, 50).then(
        //    result => {
        //      console.log(result);
        //      console.log('Size in bytes is now:', this.imageCompress.byteCount(result));
        //       if(param == 1){
        //         this.document_one   = result;
        //         this.documentUploadOne = true;
        //       }else if(param == 2){
        //           this.document_two = result;
        //           this.documentUploadTwo = true;
        //       }else if(param == 3){
        //         this.document_three = result;
        //         this.documentUploadThree = true;
        //       }else if(param == 4){
        //         this.document_four  = result;
        //         this.documentUploadFour = true;
        //       }else if(param == 5){
        //         this.document_five  = result;
        //         this.documentUploadFive = true;
        //       }else if(param == 6){
        //         this.document_six = result;
        //         this.documentUploadSix = true;
        //       }else if(param == 7){
        //         this.document_seven = result;
        //         this.documentUploadSeven = true;
        //       }
        //     }
        //    );
        //   }).catch(err => console.error(err));
    };
    EditListYourCarPage.prototype.takeImageFromCamera = function (param) {
        var _this = this;
        this.imageService.selectImageInCamera().then(function (imageData) {
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                console.log(result);
                console.log('Size in bytes is now:', _this.imageCompress.byteCount(result));
                if (param == 1) {
                    _this.document_one = result;
                    _this.documentUploadOne = true;
                }
                else if (param == 2) {
                    _this.document_two = result;
                    _this.documentUploadTwo = true;
                }
                else if (param == 3) {
                    _this.document_three = result;
                    _this.documentUploadThree = true;
                }
                else if (param == 4) {
                    _this.document_four = result;
                    _this.documentUploadFour = true;
                }
                else if (param == 5) {
                    _this.document_five = result;
                    _this.documentUploadFive = true;
                }
                else if (param == 6) {
                    _this.document_six = result;
                    _this.documentUploadSix = true;
                }
                else if (param == 7) {
                    _this.document_seven = result;
                    _this.documentUploadSeven = true;
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    EditListYourCarPage.prototype.getImageFromGallery = function (param) {
        var _this = this;
        this.imageService.selectImageInGallery().then(function (imageData) {
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                console.log(result);
                console.log('Size in bytes is now:', _this.imageCompress.byteCount(result));
                if (param == 1) {
                    _this.document_one = result;
                }
                else if (param == 2) {
                    _this.document_two = result;
                }
                else if (param == 3) {
                    _this.document_three = result;
                }
                else if (param == 4) {
                    _this.document_four = result;
                }
                else if (param == 5) {
                    _this.document_five = result;
                }
                else if (param == 6) {
                    _this.document_six = result;
                }
                else if (param == 7) {
                    _this.document_seven = result;
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    EditListYourCarPage.prototype.goToHome = function () {
        this.router.navigate(['/listed-car']);
    };
    EditListYourCarPage.prototype.validateStartDate = function () {
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
    EditListYourCarPage.prototype.validateEndDate = function () {
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
    EditListYourCarPage.prototype.slidePrev = function () {
        this.start_month_index--;
        if (this.start_month_index < 1) {
            this.currentYear = this.currentYear - 1;
            this.start_month_index = 12;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        this.startMonthCounter = this.start_month_index;
        this.validateStartDate();
        // this.startSlides.slidePrev();
    };
    EditListYourCarPage.prototype.slideNext = function () {
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
    EditListYourCarPage.prototype.slidePrev2 = function () {
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
    EditListYourCarPage.prototype.slideNext2 = function () {
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
    EditListYourCarPage.prototype.monthList = function (param) {
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
    EditListYourCarPage.prototype.presentToast = function (msg) {
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
    EditListYourCarPage.prototype.present = function () {
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
    EditListYourCarPage.prototype.dismiss = function () {
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
    EditListYourCarPage.ctorParameters = function () { return [
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
        { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_8__["ImagePicker"] }
    ]; };
    EditListYourCarPage.propDecorators = {
        startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
        endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['endSlides',] }]
    };
    EditListYourCarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-list-your-car',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-list-your-car.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-list-your-car/edit-list-your-car.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-list-your-car.page.scss */ "./src/app/edit-list-your-car/edit-list-your-car.page.scss")).default]
        })
    ], EditListYourCarPage);
    return EditListYourCarPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-list-your-car-edit-list-your-car-module.js.map