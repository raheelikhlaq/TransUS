(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content >\n  <!-- style=\"--background:url(assets/img/Background.png)   0 0/100% 100% no-repeat;\" -->\n  <ion-row class=\"mm\">\n    <ion-col size=\"2\" class=\"back_arrow\">\n      <img src=\"assets/img/Arrow.svg\" class=\"back_arrow\" (click)=\"Gotologin()\">\n    </ion-col>\n    <ion-col size=\"8\" class=\"ion-text-center\">\n      <img src=\"assets/img/logo.png\" class=\"logo\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center icon_top\">\n      <img src=\"assets/img/usericon.svg\" class=\"usericon\" (click)=\"uploadProfile()\" *ngIf=\"profileImage == undefined\">\n      <img src=\"{{profileImage}}\" (click)=\"uploadProfile()\" *ngIf=\"profileImage\" class=\"solid_img\">\n      <span *ngIf=\"picError\" class=\"error ion-padding\" style=\"display: grid;\">\n        Profile image is required.\n      </span>\n    </ion-col>\n  </ion-row>\n  <div class=\"bp\">\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"Username\" class=\"rm_auto\" [(ngModel)]=\"name\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"nameError\" class=\"error ion-padding\">\n          Name is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"number\" placeholder=\"Mobile number\" class=\"rm_auto\" [(ngModel)]=\"mobileNumber\"\n          (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"mobileNumberError\" class=\"error ion-padding\">\n          Mobile Number is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"Email\" [(ngModel)]=\"email\" class=\"rm_auto\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"emailError\" class=\"error ion-padding\">\n          Email is required.\n        </span>\n        <span *ngIf=\"invalidEmailError\" class=\"error ion-padding\">\n          Please provide valid email id.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"password\" placeholder=\"Password\" class=\"rm_auto\" [(ngModel)]=\"password\"\n          (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"passwordError\" class=\"error ion-padding\">\n          Password is required.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mit2\">\n      <ion-col size=\"1\">\n        <ion-checkbox [(ngModel)]=\"terms\" (ionChange)=\"changeTerms($event)\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"11\" class=\"fix-ios\">\n        <p class=\"white agree\">I agree to the terms of service and privacy policy</p>\n        <p class=\"views\">View terms of service and privacy policy</p>\n      </ion-col>\n      <ion-col size=\"1\" class=\"mit\">\n        <ion-checkbox [(ngModel)]=\"offers\"></ion-checkbox>\n      </ion-col>\n      <ion-col size=\"11\" class=\"mit fix-ios\">\n        <p class=\"white agree\" style=\"margin-top: 3px;\">Email me with news, offers, and awesome cars</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span *ngIf=\"termsError\" class=\"error ion-padding\" style=\"font-size: 12px;\">\n          Please accept privacy policies to signup\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center parent_btn\">\n        <ion-button color=\"primary\" shape=\"round\" expand=\"block\" (click)=\"submitForm()\">Sign up</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"bb_top\">\n      <ion-col size=\"5\">\n        <hr class=\"bb\">\n      </ion-col>\n      <ion-col size=\"2\" class=\"white ion-text-center\">OR</ion-col>\n      <ion-col size=\"5\">\n        <hr class=\"bb\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" class=\"ion-text-left\">\n        <ion-button class=\"fb\">\n          <img src=\"assets/img/Facebook.svg\" (click)=\"LoginWithFacebook()\">\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\" (click)=\"LoginWithGoogle()\">\n        <ion-button class=\"google\">\n          <img src=\"assets/img/google.svg\">\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col class=\"ion-text-center\" (click)=\"Gotologin()\">\n      <p class=\"white signup_text\">Already got an account? Login</p>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
var SignupPageRoutingModule = /** @class */ (function () {
    function SignupPageRoutingModule() {
    }
    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SignupPageRoutingModule);
    return SignupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-color: #000000;\n  --background-color: #000000;\n  --background:none;\n  background: url('Background.png') no-repeat 0 0;\n  background-size: cover;\n}\n\n.back_arrow {\n  margin-top: 0.7em;\n  padding-left: 1em;\n}\n\n.logo {\n  width: 70%;\n}\n\n.mm {\n  margin-top: 1em;\n}\n\nion-input {\n  border: 1px solid #fff;\n  border-radius: 25px;\n  --padding-bottom: 1em;\n  --padding-top: 1em;\n  --color: #fff;\n  --padding-start: 1em;\n  margin-top: 0.4em;\n}\n\n.bp {\n  padding: 0em 15%;\n}\n\n.white {\n  color: #fff;\n}\n\nion-button {\n  --padding-bottom: 1.45em;\n  --padding-top: 1.45em;\n  --box-shadow: none;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.parent_btn {\n  margin: 0 1em;\n}\n\n.bb {\n  border-bottom: 1px solid #fff;\n}\n\n.bb_top {\n  margin: 1.5em 0em;\n}\n\n.fb {\n  --background: #3245B8;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.google {\n  --background: #F04336;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.signup_text {\n  margin-top: 4em;\n}\n\n.agree {\n  margin: 0px;\n  font-size: 11px;\n}\n\n.views {\n  margin: 0px;\n  color: #c4932f;\n  font-size: 11px;\n}\n\n.mit {\n  margin-top: 0.7em;\n}\n\n.mit2 {\n  margin-bottom: 4px;\n}\n\n.usericon {\n  width: 25%;\n}\n\n.icon_top {\n  margin: 0.5em 0em;\n}\n\n.error {\n  color: red;\n}\n\n.solid_img {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0FBQUo7O0FBRUE7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0FBQ0g7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBT0o7O0FBTEE7RUFDSSxhQUFBO0FBUUo7O0FBTkE7RUFDSSw2QkFBQTtBQVNKOztBQVBBO0VBQ0csaUJBQUE7QUFVSDs7QUFSQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBV0o7O0FBVEE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtBQWFKOztBQVhBO0VBQ0ssV0FBQTtFQUNELGVBQUE7QUFjSjs7QUFaQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWVKOztBQWJBO0VBQ0ksaUJBQUE7QUFnQko7O0FBZEE7RUFDSSxrQkFBQTtBQWlCSjs7QUFmQTtFQUNLLFVBQUE7QUFrQkw7O0FBaEJBO0VBQ0ksaUJBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBcUJKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAtLWJhY2tncm91bmQ6bm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9CYWNrZ3JvdW5kLnBuZykgbm8tcmVwZWF0IDAgMDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLmJhY2tfYXJyb3d7XG4gICBtYXJnaW4tdG9wOiAwLjdlbTtcbiAgIHBhZGRpbmctbGVmdDogMWVtO1xufVxuLmxvZ297XG4gICAgd2lkdGg6IDcwJTtcbn1cbi5tbXtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5pb24taW5wdXR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxZW07XG4gICAgLS1jb2xvcjogI2ZmZjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjRlbTtcbn1cbi5icHtcbiAgICBwYWRkaW5nOiAwZW0gMTUlO1xufVxuLndoaXRle1xuICAgIGNvbG9yOiAjZmZmO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjQ1ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS40NWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucGFyZW50X2J0bntcbiAgICBtYXJnaW46IDAgMWVtO1xufVxuLmJie1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuLmJiX3RvcHtcbiAgIG1hcmdpbjogMS41ZW0gMGVtO1xufVxuLmZie1xuICAgIC0tYmFja2dyb3VuZDogIzMyNDVCODtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxZW07XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmdvb2dsZXtcbiAgICAtLWJhY2tncm91bmQ6ICNGMDQzMzY7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMWVtO1xuICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5zaWdudXBfdGV4dHtcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG59XG4uYWdyZWV7XG4gICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbn1cbi52aWV3c3tcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2M0OTMyZjtcbiAgICBmb250LXNpemU6IDExcHg7XG59XG4ubWl0e1xuICAgIG1hcmdpbi10b3A6IDAuN2VtO1xufVxuLm1pdDJ7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLnVzZXJpY29ue1xuICAgICB3aWR0aDogMjUlO1xufVxuLmljb25fdG9we1xuICAgIG1hcmdpbjogMC41ZW0gMGVtO1xufVxuLmVycm9ye1xuICAgIGNvbG9yOnJlZDtcbn1cbi5zb2xpZF9pbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _verify_mobile_number_verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../verify-mobile-number/verify-mobile-number.page */ "./src/app/verify-mobile-number/verify-mobile-number.page.ts");
/* harmony import */ var _subject_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../subject-events.service */ "./src/app/subject-events.service.ts");











//$ ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, loadingController, subjectEvents, popoverController, storage, toastController, router, restService, alertCtrl, imageService, facebook, googlePlus) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.subjectEvents = subjectEvents;
        this.popoverController = popoverController;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.imageService = imageService;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.isSubmitted = false;
        this.nameError = false;
        this.mobileNumberError = false;
        this.emailError = false;
        this.passwordError = false;
        this.invalidEmailError = false;
        this.picError = false;
        this.validation = false;
        this.terms = false;
        this.offers = false;
        this.baseUrl = 'https://app.transusdrives.com/';
        this.stringyOfSignup = '';
        this.otp = '';
        this.otpArr = '';
        this.otpMsg = '';
        this.responseOfOtp = '';
    }
    SignupPage.prototype.ngOnInit = function () {
        // this.base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
        // this.profileImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        // this.base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
    };
    SignupPage.prototype.submitForm = function () {
        var _this = this;
        this.validation = true;
        if (this.validateForm() == true) {
            var profileImg = this.profileImage.split(',')[1];
            //alert('true');
            this.stringyOfSignup = JSON.stringify({
                "userName": this.name,
                "mobileNo": this.mobileNumber,
                "email": this.email,
                "password": this.password,
                "profilePic": profileImg,
                "subscribedAlerts": "Yes",
                "requestType": "signup",
                "loginWith": 'Email'
            });
            console.log(this.stringyOfSignup);
            var ss = JSON.stringify({
                requestType: 'send_otp',
                phone_number: this.mobileNumber
            });
            this.present();
            this.restService.auth_userAPI(ss).subscribe(function (ress) {
                console.log(ress);
                _this.responseOfOtp = JSON.parse(ress['_body']);
                console.log('respooooo', _this.responseOfOtp);
                if (_this.responseOfOtp.status == 'success') {
                    _this.otp = _this.responseOfOtp.otp_code;
                    _this.otpArr = _this.responseOfOtp.otp_code_array;
                    _this.otpMsg = _this.responseOfOtp.msg;
                    _this.verifyNumber();
                }
                else {
                    _this.otpMsg = _this.responseOfOtp.msg;
                    _this.presentToast(_this.otpMsg);
                }
                _this.dismiss();
            });
            // this.present();
            // this.restService.authenticate(stringy).subscribe(response => {
            //   this.response = JSON.parse(response['_body']);
            //   console.log(this.response.status);
            //   if (this.response.status == 'error') {
            //     this.presentToast(this.response.msg);
            //     this.dismiss();
            //   } else if (this.response.status == 'success') {
            //     //this.router.navigate(['/']);
            //     this.dismiss();
            //     
            //   }
            // }, err => {
            //   this.dismiss();
            // });
        }
    };
    SignupPage.prototype.validateForm = function () {
        console.log(this.offers);
        if (this.validation) {
            this.nameError = false;
            this.mobileNumberError = false;
            this.emailError = false;
            this.passwordError = false;
            this.invalidEmailError = false;
            this.picError = false;
            this.termsError = false;
            if (this.name == '' || this.name == undefined) {
                this.nameError = true;
                return false;
            }
            else if (this.mobileNumber == '' || this.mobileNumber == undefined) {
                this.mobileNumberError = true;
                return false;
            }
            else if (this.email == '' || this.email == undefined) {
                this.emailError = true;
                return false;
            }
            else if (this.ValidateEmail(this.email) == false) {
                this.invalidEmailError = true;
                return false;
            }
            else if (this.password == '' || this.password == undefined) {
                this.passwordError = true;
                return false;
            }
            else if (this.base64 == '' || this.base64 == undefined) {
                this.picError = true;
                return false;
            }
            else if (this.terms == false) {
                this.termsError = true;
                return false;
            }
            else {
                return true;
            }
        }
    };
    SignupPage.prototype.changeTerms = function (e) {
        if (e.detail.checked) {
            this.terms = true;
        }
        else {
            this.terms = false;
        }
        console.log(this.terms);
    };
    SignupPage.prototype.ValidateEmail = function (mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return (true);
        }
        else {
            //alert("You have entered an invalid email address!")
            return (false);
        }
    };
    SignupPage.prototype.LoginWithFacebook = function () {
        var _this = this;
        this.facebook.login(['public_profile', 'email']).then(function (res) {
            console.log('Logged into Facebook!', res);
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(626).height(939).as(picture_large)', []).then(function (profile) {
                console.log(profile);
                var stringy = JSON.stringify({
                    "userName": profile['name'],
                    "email": profile['email'],
                    "profilePic": profile.picture_large.data.url,
                    "requestType": "signup",
                    "loginWith": 'Facebook'
                });
                _this.restService.authenticate(stringy).subscribe(function (response) {
                    _this.response = JSON.parse(response['_body']);
                    console.log(_this.response.status);
                    if (_this.response.status == 'error') {
                        _this.presentToast(_this.response.msg);
                    }
                    else if (_this.response.status == 'success') {
                        //this.presentToast(this.response.msg);
                        //this.router.navigate(['/']);
                        _this.verifyNumber();
                    }
                });
                //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
            });
        }).catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    SignupPage.prototype.LoginWithGoogle = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            var stringy = JSON.stringify({
                "userName": res.displayName,
                "email": res.email,
                "profilePic": '',
                "requestType": "signup",
                "loginWith": 'Gmail'
            });
            _this.restService.authenticate(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response.status);
                if (_this.response.status == 'error') {
                    _this.presentToast(_this.response.msg);
                }
                else if (_this.response.status == 'success') {
                    // this.presentToast(this.response.msg);
                    //this.router.navigate(['/']);
                    _this.verifyNumber();
                }
            });
        }).catch(function (err) { return console.log(err); });
    };
    SignupPage.prototype.verifyNumber = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _verify_mobile_number_verify_mobile_number_page__WEBPACK_IMPORTED_MODULE_9__["VerifyMobileNumberPage"],
                            translucent: true,
                            componentProps: {
                                stringyOfSignup: this.stringyOfSignup,
                                otp: this.otp,
                                otpArr: this.otpArr,
                                otpMsg: this.otpMsg,
                                mobileNumber: this.mobileNumber
                            }
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onWillDismiss().then(function (data) {
                            console.log(data);
                            console.log(data.data.val);
                            if (data.data.val == 'ok') {
                                _this.presentToast('Account Created Successfully');
                                _this.storage.set('user_details', _this.response.user_details);
                                _this.storage.set('currency_symbol', _this.response.user_details.symbol);
                                _this.storage.set('profile_img_url', _this.response.profile_img_url);
                                _this.storage.set('base_urls', _this.baseUrl);
                                _this.subjectEvents.publishSomeData({
                                    sidebar: 'sidebar'
                                });
                                _this.navCtrl.navigateRoot('/');
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SignupPage.prototype.uploadProfile = function () {
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
                                        _this.takeImageFromCamera();
                                    }
                                },
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
    SignupPage.prototype.takeImageFromCamera = function () {
        var _this = this;
        this.imageService.selectImageInCamera().then(function (imageData) {
            _this.profileImage = "data:image/png;base64," + imageData;
            _this.base64 = "" + imageData;
            _this.validateForm();
        }).catch(function (err) { return console.error(err); });
    };
    SignupPage.prototype.getImageFromGallery = function () {
        var _this = this;
        this.imageService.selectImageInGallery().then(function (imageData) {
            _this.profileImage = "data:image/png;base64," + imageData;
            _this.base64 = "" + imageData;
            _this.validateForm();
        }).catch(function (err) { return console.error(err); });
    };
    SignupPage.prototype.presentToast = function (msg) {
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
    SignupPage.prototype.Gotologin = function () {
        this.router.navigate(['/login']);
    };
    SignupPage.prototype.present = function () {
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
    SignupPage.prototype.dismiss = function () {
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
    SignupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _subject_events_service__WEBPACK_IMPORTED_MODULE_10__["SubjectEventsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__["Facebook"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_7__["GooglePlus"] }
    ]; };
    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
        })
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map