(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-your-bike-list-your-bike-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-bike/list-your-bike.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-bike/list-your-bike.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n    </ion-buttons>\n    <ion-title>List your motor</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"list_1\">\n    <ion-row>\n      <ion-col>\n        <h3>Motor Info</h3>\n        <p class=\"upload_images\">Upload Images of Number Plate</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(1)\" *ngIf=\"document_one =='' || document_one ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\">\n              <p>Vehicle's Number Plate</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"img_h\" *ngIf=\"document_one\">\n              <img src=\"{{document_one}}\">\n            </ion-col>\n            <span *ngIf=\"vehicleNumberPlateError\" class=\"error ion-padding\">\n              Vehicle's Number Plate is required.\n            </span>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Documents</h3>\n        <p class=\"upload_images\">Upload Driver’s License and Insurance documents</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(2)\"  *ngIf=\"document_two =='' || document_two ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\">\n              <p>Driver's License</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"img_h\" *ngIf=\"document_two\">\n              <img src=\"{{document_two}}\">\n            </ion-col>\n            <span *ngIf=\"driverLicenseError\" class=\"error ion-padding\" >\n              Driver's License  is required.\n            </span>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n          <ion-row>\n            <ion-col size=\"12\" class=\"list_2\" (click)=\"uploadDocument(3)\" *ngIf=\"document_three =='' || document_three ==undefined\">\n              <img src=\"assets/img/Menu_Plus.svg\">\n              <p>Insurance document</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"img_h\" *ngIf=\"document_three\">\n              <img src=\"{{document_three}}\">\n            </ion-col>\n            <span *ngIf=\"insuranceDocumentError\" class=\"error ion-padding\">\n              Insurance document  is required.\n            </span>\n          </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h3>Set Availability</h3>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"tog_main\">\n    <ion-col size=\"9\" class=\"tog1\">\n        <p >Available</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" [(ngModel)]=\"availability\"></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Done</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/list-your-bike/list-your-bike-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/list-your-bike/list-your-bike-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListYourBikePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListYourBikePageRoutingModule", function() { return ListYourBikePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _list_your_bike_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-your-bike.page */ "./src/app/list-your-bike/list-your-bike.page.ts");




var routes = [
    {
        path: '',
        component: _list_your_bike_page__WEBPACK_IMPORTED_MODULE_3__["ListYourBikePage"]
    }
];
var ListYourBikePageRoutingModule = /** @class */ (function () {
    function ListYourBikePageRoutingModule() {
    }
    ListYourBikePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListYourBikePageRoutingModule);
    return ListYourBikePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/list-your-bike/list-your-bike.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-your-bike/list-your-bike.module.ts ***!
  \*********************************************************/
/*! exports provided: ListYourBikePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListYourBikePageModule", function() { return ListYourBikePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_your_bike_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-your-bike-routing.module */ "./src/app/list-your-bike/list-your-bike-routing.module.ts");
/* harmony import */ var _list_your_bike_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-your-bike.page */ "./src/app/list-your-bike/list-your-bike.page.ts");







var ListYourBikePageModule = /** @class */ (function () {
    function ListYourBikePageModule() {
    }
    ListYourBikePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _list_your_bike_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListYourBikePageRoutingModule"]
            ],
            declarations: [_list_your_bike_page__WEBPACK_IMPORTED_MODULE_6__["ListYourBikePage"]]
        })
    ], ListYourBikePageModule);
    return ListYourBikePageModule;
}());



/***/ }),

/***/ "./src/app/list-your-bike/list-your-bike.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/list-your-bike/list-your-bike.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.list_1 {\n  padding: 0em 1em;\n}\n\n.list_1 h3 {\n  margin: 0px;\n  margin-top: 0.5em;\n}\n\n.left_4 {\n  margin-left: 0.7em !important;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #d4dce1;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.upload_images {\n  color: #C4932F;\n  font-size: 12px;\n  margin: 5px 0px;\n}\n\n.list_2 {\n  text-align: center;\n  background: #F7F8FA;\n  border: 1px dashed #D4DCE1;\n  border-radius: 10px;\n  padding: 25% 0em 23% 0em;\n}\n\n.list_2 p {\n  color: #d2d6d8;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  color: #D4DCE1;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\n.btn_footer {\n  margin: 0.7em 0em 1em 0em;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #F7F8FA;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6E6D6D;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.tog_main {\n  background: #F9F9F9;\n  padding: 0em 0.3em;\n}\n\n.tog1 {\n  font-size: 13px;\n  color: #272727;\n}\n\n.tog1 h4 {\n  margin: 0px;\n}\n\n.tog1 p {\n  margin: 0px;\n  margin-left: 4%;\n  margin-top: 5%;\n  font-size: 14px;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\n.img_h img {\n  height: 256px;\n  width: 100%;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC15b3VyLWJpa2UvbGlzdC15b3VyLWJpa2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx3QkFBQTtJQUNBLHFCQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLDZCQUFBO0FBRUo7O0FBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUVBLHdCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0FBS0o7O0FBSEE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFNSjs7QUFKQTtFQUNJLHlCQUFBO0FBT0o7O0FBTEE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksNEJBQUE7QUFTSjs7QUFQQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFVSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFXSjs7QUFUQTtFQUNJLGtCQUFBO0FBWUo7O0FBVkE7RUFDSSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSw0QkFBQTtBQWVKOztBQWJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQWdCSjs7QUFkQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWlCSjs7QUFkQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFpQko7O0FBZkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0FBbUJKOztBQWpCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFvQko7O0FBbEJBO0VBQ0ksOEJBQUE7QUFxQko7O0FBbkJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBc0JKOztBQXBCQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUF1QkoiLCJmaWxlIjoic3JjL2FwcC9saXN0LXlvdXItYmlrZS9saXN0LXlvdXItYmlrZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4ubGlzdF8xe1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG59XG4ubGlzdF8xIGgze1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4ubGVmdF80e1xuICAgIG1hcmdpbi1sZWZ0OjAuN2VtICFpbXBvcnRhbnQ7XG59XG4uaW5wdXRfbGlzdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNkNGRjZTE7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbn1cbi51cGxvYWRfaW1hZ2Vze1xuICAgIGNvbG9yOiNDNDkzMkY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbjogNXB4IDBweDtcbn1cbi5saXN0XzJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgIC8vIHBhZGRpbmc6IDIuNWVtIDBlbTtcbiAgICBwYWRkaW5nOiAyNSUgMGVtIDIzJSAwZW07XG59XG4ubGlzdF8yIHB7XG4gICAgY29sb3I6ICNkMmQ2ZDg7XG59XG4ubGlzdF8ze1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RENFMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiAjRDREQ0UxO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuLmJ0bl9mb290ZXJ7XG4gICAgbWFyZ2luOiAwLjdlbSAwZW0gMWVtIDBlbTtcbn1cbmlvbi1zbGlkZSBzcGFue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm51bXtcbiAgICBwYWRkaW5nOiA5cHggMTBweCAhaW1wb3J0YW50O1xufVxuLmNhbGVuZGVyX3NsaWRlcntcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIHBhZGRpbmc6IDAuNmVtIDBlbTtcbn1cbi5jYWxlbmRlcl9zbGlkZXJfdGV4dHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMnB4O1xufVxuaW9uLXNsaWRle1xuICAgIG1hcmdpbi1sZWZ0OiAwLjZlbTtcbn1cbmlvbi1zbGlkZTpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uYnRuX2Zvb3RlcntcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xufVxuLmluZm97XG4gICAgYmFja2dyb3VuZDogIzZFNkQ2RDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG59XG4uaW5mbyBwe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnRvZ19tYWlue1xuICAgIGJhY2tncm91bmQ6ICNGOUY5Rjk7XG4gICAgcGFkZGluZzogMGVtIDAuM2VtO1xufVxuLnRvZzF7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjMjcyNzI3O1xufVxuLnRvZzEgaDR7XG4gICAgbWFyZ2luOjBweDtcbn1cbi50b2cxIHB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuaW9uLXRvZ2dsZS50b2dnbGUtY2hlY2tlZDo6cGFydCh0cmFjaykgIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTk2IDE0NyA0NykgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVte1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmltZ19oIGltZ3tcbiAgICBoZWlnaHQ6IDI1NnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/list-your-bike/list-your-bike.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-your-bike/list-your-bike.page.ts ***!
  \*******************************************************/
/*! exports provided: ListYourBikePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListYourBikePage", function() { return ListYourBikePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/__ivy_ngcc__/fesm2015/ngx-image-compress.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









var ListYourBikePage = /** @class */ (function () {
    function ListYourBikePage(loadingController, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl, imageCompress, location) {
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
    }
    ListYourBikePage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
        });
    };
    ListYourBikePage.prototype.submitForm = function () {
        var _this = this;
        if (this.validateForm() == true) {
            if (this.availability) {
                this.avail = 1;
            }
            else {
                this.avail = 0;
            }
            var d_one = this.document_one.split(',')[1];
            var d_two = this.document_two.split(',')[1];
            var d_three = this.document_three.split(',')[1];
            //alert('true');
            var stringy = JSON.stringify({
                "requestType": "list_motor",
                "licensePlateNoImg": d_one,
                "driverLicenseNoImg": d_two,
                "insuranceImg": d_three,
                "availability": this.avail,
                "usersID": this.userID,
                "email": this.Email
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
                    _this.presentToast('Motor Added successfully!');
                    _this.router.navigate(['/listed-motor']);
                    _this.dismiss();
                }
            }, function (err) {
            });
        }
    };
    ListYourBikePage.prototype.validateForm = function () {
        // this.document_one = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
        // this.document_two = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
        // this.document_three = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
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
    ListYourBikePage.prototype.uploadDocument = function (param) {
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
    ListYourBikePage.prototype.takeImageFromCamera = function (param) {
        var _this = this;
        this.imageService.selectImageInCamera().then(function (imageData) {
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                if (param == 1) {
                    _this.document_one = result;
                }
                else if (param == 2) {
                    _this.document_two = result;
                }
                else if (param == 3) {
                    _this.document_three = result;
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    ListYourBikePage.prototype.getImageFromGallery = function (param) {
        var _this = this;
        this.imageService.selectImageInGallery().then(function (imageData) {
            var base64 = "data:image/png;base64," + imageData;
            _this.imageCompress.compressFile(base64, 0, 50, 50).then(function (result) {
                if (param == 1) {
                    _this.document_one = result;
                }
                else if (param == 2) {
                    _this.document_two = result;
                }
                else if (param == 3) {
                    _this.document_three = result;
                }
            });
        }).catch(function (err) { return console.error(err); });
    };
    ListYourBikePage.prototype.goToHome = function () {
        this.location.back();
        //this.router.navigate(['/']);
    };
    ListYourBikePage.prototype.presentToast = function (msg) {
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
    ListYourBikePage.prototype.present = function () {
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
    ListYourBikePage.prototype.dismiss = function () {
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
    ListYourBikePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_7__["NgxImageCompressService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
    ]; };
    ListYourBikePage.propDecorators = {
        startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
        endSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['endSlides',] }]
    };
    ListYourBikePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-your-bike',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-your-bike.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-your-bike/list-your-bike.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-your-bike.page.scss */ "./src/app/list-your-bike/list-your-bike.page.scss")).default]
        })
    ], ListYourBikePage);
    return ListYourBikePage;
}());



/***/ })

}]);
//# sourceMappingURL=list-your-bike-list-your-bike-module.js.map