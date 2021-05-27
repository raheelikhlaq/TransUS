(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-motor-edit-motor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-motor/edit-motor.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-motor/edit-motor.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n    </ion-buttons>\n    <ion-title>Edit motor</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Motor Info</h3>\n        <p class=\"upload_images\">Upload Images of Number Plate</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(1)\" *ngIf=\"document_one =='' || document_one ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\">\n              <p>Vehicle's Number Plate</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"img_h\" *ngIf=\"document_one\">\n              <img src=\"{{document_one}}\">\n            </ion-col>\n            <span *ngIf=\"vehicleNumberPlateError\" class=\"error ion-padding\">\n              Vehicle's Number Plate is required.\n            </span>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Documents</h3>\n        <p class=\"upload_images\">Upload Driver’s License and Insurance documents</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(2)\"  *ngIf=\"document_two =='' || document_two ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\">\n              <p>Driver's License</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"img_h\" *ngIf=\"document_two\">\n              <img src=\"{{document_two}}\">\n            </ion-col>\n            <span *ngIf=\"driverLicenseError\" class=\"error ion-padding\" >\n              Driver's License  is required.\n            </span>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(3)\" *ngIf=\"document_three =='' || document_three ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\">\n              <p>Insurance document</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"img_h\" *ngIf=\"document_three\">\n              <img src=\"{{document_three}}\">\n            </ion-col>\n            <span *ngIf=\"insuranceDocumentError\" class=\"error ion-padding\">\n              Insurance document  is required.\n            </span>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Set Availability</h3>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"tog_main\">\n    <ion-col size=\"9\" class=\"tog1\">\n        <p >Available</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" [(ngModel)]=\"availability\"></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Done</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/edit-motor/edit-motor-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit-motor/edit-motor-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditMotorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMotorPageRoutingModule", function() { return EditMotorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_motor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-motor.page */ "./src/app/edit-motor/edit-motor.page.ts");




var routes = [
    {
        path: '',
        component: _edit_motor_page__WEBPACK_IMPORTED_MODULE_3__["EditMotorPage"]
    }
];
var EditMotorPageRoutingModule = /** @class */ (function () {
    function EditMotorPageRoutingModule() {
    }
    EditMotorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], EditMotorPageRoutingModule);
    return EditMotorPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/edit-motor/edit-motor.module.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-motor/edit-motor.module.ts ***!
  \*************************************************/
/*! exports provided: EditMotorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMotorPageModule", function() { return EditMotorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_motor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-motor-routing.module */ "./src/app/edit-motor/edit-motor-routing.module.ts");
/* harmony import */ var _edit_motor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-motor.page */ "./src/app/edit-motor/edit-motor.page.ts");







var EditMotorPageModule = /** @class */ (function () {
    function EditMotorPageModule() {
    }
    EditMotorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _edit_motor_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditMotorPageRoutingModule"]
            ],
            declarations: [_edit_motor_page__WEBPACK_IMPORTED_MODULE_6__["EditMotorPage"]]
        })
    ], EditMotorPageModule);
    return EditMotorPageModule;
}());



/***/ }),

/***/ "./src/app/edit-motor/edit-motor.page.scss":
/*!*************************************************!*\
  !*** ./src/app/edit-motor/edit-motor.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #d4dce1;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #c4932f;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #f7f8fa;\n  border: 1px dashed #d4dce1;\n  border-radius: 10px;\n  padding: 25% 0em 23% 0em;\n}\n\n.list_2 p {\n  color: #d2d6d8;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #d4dce1;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f7f8fa;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.tog_main {\n  background: #f9f9f9;\n  padding: 0em 0.3em;\n}\n\n.tog1 {\n  font-size: 13px;\n  color: #272727;\n}\n\n.tog1 h4 {\n  margin: 0px;\n}\n\n.tog1 p {\n  margin: 0px;\n  margin-left: 4%;\n  margin-top: 5%;\n  font-size: 14px;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\n.img_h img {\n  height: 256px;\n  width: 100%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1tb3Rvci9lZGl0LW1vdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSw2QkFBQTtBQUVKOztBQUFBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFFQSx3QkFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtBQUtKOztBQUhBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBTUo7O0FBSkE7RUFDSSx5QkFBQTtBQU9KOztBQUxBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFOQTtFQUNJLDRCQUFBO0FBU0o7O0FBUEE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksZ0JBQUE7QUFhSjs7QUFYQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWNKOztBQVpBO0VBQ0ksNEJBQUE7QUFlSjs7QUFiQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFpQko7O0FBZEE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFrQko7O0FBaEJBO0VBQ0ksV0FBQTtBQW1CSjs7QUFqQkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLDhCQUFBO0FBcUJKOztBQW5CQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBdUJKIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1tb3Rvci9lZGl0LW1vdG9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4ubGlzdF8xIHtcbiAgICBwYWRkaW5nOiAwZW0gMWVtO1xufVxuLmxpc3RfMSBoMyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi5sZWZ0XzQge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjdlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X2xpc3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogI2Q0ZGNlMTtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLnVwbG9hZF9pbWFnZXMge1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG59XG4ubGlzdF8yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgI2Q0ZGNlMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vIHBhZGRpbmc6IDIuNWVtIDBlbTtcbiAgICBwYWRkaW5nOiAyNSUgMGVtIDIzJSAwZW07XG59XG4ubGlzdF8yIHAge1xuICAgIGNvbG9yOiAjZDJkNmQ4O1xufVxuLmxpc3RfMyB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6ICNkNGRjZTE7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG59XG4uYnRuX2Zvb3RlciB7XG4gICAgbWFyZ2luOiAwLjdlbSAwZW0gMWVtIDBlbTtcbn1cbmlvbi1zbGlkZSBzcGFuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5udW0ge1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FsZW5kZXJfc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIHBhZGRpbmc6IDAuNmVtIDBlbTtcbn1cbi5jYWxlbmRlcl9zbGlkZXJfdGV4dCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbn1cbmlvbi1zbGlkZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNmVtO1xufVxuaW9uLXNsaWRlOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bl9mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzZlNmQ2ZDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG59XG4uaW5mbyBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbi50b2dfbWFpbiB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAwZW0gMC4zZW07XG59XG4udG9nMSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMjcyNzI3O1xufVxuLnRvZzEgaDQge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnRvZzEgcCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi10b2dnbGUudG9nZ2xlLWNoZWNrZWQ6OnBhcnQodHJhY2spIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk2IDE0NyA0NykgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5pbWdfaCBpbWcge1xuICAgIGhlaWdodDogMjU2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/edit-motor/edit-motor.page.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-motor/edit-motor.page.ts ***!
  \***********************************************/
/*! exports provided: EditMotorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMotorPage", function() { return EditMotorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









var EditMotorPage = /** @class */ (function () {
    function EditMotorPage(activatedRoute, loadingController, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, location) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.imageService = imageService;
        this.menuCtrl = menuCtrl;
        this.imageCompress = imageCompress;
        this.location = location;
        this.option1 = {
            slidesPerView: 8
        };
        this.availability = false;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            console.log(_this.response);
            _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
                _this.document_one = _this.base_url + '' + _this.response.booking_details.number_plate_img;
                _this.document_two = _this.base_url + '' + _this.response.booking_details.license_no_img;
                _this.document_three = _this.base_url + '' + _this.response.booking_details.insurance_img;
                _this.vehicles_id = _this.response.booking_details.vehicles_id;
                _this.available = _this.response.booking_details.available;
                if (_this.available == 'Yes') {
                    _this.availability = true;
                }
                else {
                    _this.availability = false;
                }
            });
        });
    }
    EditMotorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
        });
    };
    EditMotorPage.prototype.submitForm = function () {
        var _this = this;
        if (this.validateForm() == true) {
            if (this.availability) {
                this.avail = 1;
            }
            else {
                this.avail = 0;
            }
            var d_one = '';
            if (this.documentOneUpdate) {
                d_one = this.document_one.split(',')[1];
            }
            else {
                d_one = '';
            }
            var d_two = '';
            if (this.documentTwoUpdate) {
                d_two = this.document_two.split(',')[1];
            }
            else {
                d_two = '';
            }
            var d_three = '';
            if (this.documentThreeUpdate) {
                d_three = this.document_three.split(',')[1];
            }
            else {
                d_three = '';
            }
            //alert('true');
            var stringy = JSON.stringify({
                "requestType": "edit_list_motor",
                "licensePlateNoImg": d_one,
                "driverLicenseNoImg": d_two,
                "insuranceImg": d_three,
                "availability": this.avail,
                "usersID": this.userID,
                "email": this.Email,
                "vehicleID": this.vehicles_id
            });
            console.log(stringy);
            this.present();
            this.restService.saveListVehicles(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response.status);
                if (_this.response.status == 'error') {
                    _this.presentToast('Oops!something went wrong.');
                }
                else if (_this.response.status == 'success') {
                    _this.presentToast('Motor Info Updated successfully!');
                }
                _this.router.navigate(['/listed-motor']);
                _this.dismiss();
            }, function (err) {
            });
        }
    };
    EditMotorPage.prototype.validateForm = function () {
        /* this.documentOneUpdate = true;
         this.documentTwoUpdate = true;
         this.documentThreeUpdate = true;
         this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_two = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
         this.document_three = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
       */
        this.vehicleNumberPlateError = false;
        this.driverLicenseError = false;
        this.insuranceDocumentError = false;
        if (this.document_one == '' || this.document_one == undefined) {
            this.vehicleNumberPlateError = true;
            return false;
        }
        else if (this.document_two == '' || this.document_two == undefined) {
            this.driverLicenseError = true;
            return false;
        }
        else if (this.document_three == '' || this.document_three == undefined) {
            this.insuranceDocumentError = true;
            return false;
        }
        else {
            return true;
        }
    };
    EditMotorPage.prototype.uploadDocument = function (param) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Upload Profile Photo?',
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
    EditMotorPage.prototype.takeImageFromCamera = function (param) {
        var _this = this;
        this.imageService.selectImageInCamera().then(function (imageData) {
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                if (param == 1) {
                    _this.document_one = result;
                    _this.documentOneUpdate = true;
                }
                else if (param == 2) {
                    _this.document_two = result;
                    _this.documentTwoUpdate = true;
                }
                else if (param == 3) {
                    _this.document_three = result;
                    _this.documentThreeUpdate = true;
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    EditMotorPage.prototype.getImageFromGallery = function (param) {
        var _this = this;
        this.imageService.selectImageInGallery().then(function (imageData) {
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                if (param == 1) {
                    _this.document_one = result;
                    _this.documentOneUpdate = true;
                }
                else if (param == 2) {
                    _this.document_two = result;
                    _this.documentTwoUpdate = true;
                }
                else if (param == 3) {
                    _this.document_three = result;
                    _this.documentThreeUpdate = true;
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    EditMotorPage.prototype.goToHome = function () {
        this.location.back();
        // this.router.navigate(['/']);
    };
    EditMotorPage.prototype.presentToast = function (msg) {
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
    EditMotorPage.prototype.present = function () {
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
    EditMotorPage.prototype.dismiss = function () {
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
    EditMotorPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_2__["CameraimageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] },
        { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_5__["NgxImageCompressService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
    ]; };
    EditMotorPage.propDecorators = {
        startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
        endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['endSlides',] }]
    };
    EditMotorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-motor',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-motor.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-motor/edit-motor.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-motor.page.scss */ "./src/app/edit-motor/edit-motor.page.scss")).default]
        })
    ], EditMotorPage);
    return EditMotorPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-motor-edit-motor-module.js.map