(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content  >\n  <!-- style=\"--background:url(assets/img/Background.png)  0 0/100% 100% no-repeat;\" -->\n  <ion-row>\n    <ion-col class=\"back_arrow\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center logo\">\n      <img src=\"assets/img/logo.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf=\"ShowLoading\" style=\"position: absolute; width: 100%; z-index: 9999;\">\n    <ion-col style=\"text-align: center;\">\n      <img style=\"width: 90px;\" src=\"assets/img/Loader.gif\">\n    </ion-col>\n  </ion-row>\n  <div class=\"bp\">\n\n  \n\n    <ion-row>\n      <ion-col>\n        <ion-input placeholder=\"Email\" class=\"rm_auto\" [(ngModel)]=\"email\" (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"emailError\" class=\"error ion-padding\">\n          Email is required.\n        </span>\n        <span *ngIf=\"invalidEmailError\" class=\"error ion-padding\">\n          Please provide valid email id.\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-input type=\"password\" class=\"rm_auto\" placeholder=\"password\" [(ngModel)]=\"password\"\n          (ionBlur)=\"validateForm()\"></ion-input>\n        <span *ngIf=\"passwordError\" class=\"error ion-padding\">\n          Password is required.\n        </span>\n        <!--span class=\"error ion-padding\" >\n            Password should be min 6 chars long.\n          </span-->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-right\">\n        <p class=\"white\" (click)=\"forgotPassword()\">Forgot your password?</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-text-center parent_btn\">\n        <ion-button color=\"primary\" shape=\"round\" expand=\"block\" (click)=\"submitForm()\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"bb_top\">\n      <ion-col size=\"5\">\n        <hr class=\"bb\">\n      </ion-col>\n      <ion-col size=\"2\" class=\"white ion-text-center\">OR</ion-col>\n      <ion-col size=\"5\">\n        <hr class=\"bb\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\" class=\"ion-text-left\">\n        <ion-button class=\"fb\">\n          <img src=\"assets/img/Facebook.svg\" (click)=\"LoginWithFacebook()\">\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-right\">\n        <ion-button class=\"google\">\n          <img src=\"assets/img/google.svg\" (click)=\"LoginWithGoogle()\">\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row>\n    <ion-col class=\"ion-text-center\" (click)=\"GotoSignup()\">\n      <p class=\"white signup_text\">Don't have an account? Sign up</p>\n    </ion-col>\n  </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --color: #fff;\n  --background:none;\n  background-color: #000000;\n  --background-color: #000000;\n  background: url('Background.png') no-repeat 0 0;\n  background-size: cover;\n}\n\n.background-image {\n  --background: url(\"/assets/img/Background.png\") 0 0/100% 100% no-repeat;\n  background-size: cover;\n}\n\n.back_arrow {\n  margin-top: 1.5em;\n  margin-left: 1em;\n}\n\n.logo {\n  margin: 2em 0em;\n}\n\nion-input {\n  border: 1px solid #fff;\n  border-radius: 25px;\n  --padding-bottom: 1em;\n  --padding-top: 1em;\n  --color: #fff;\n  --padding-start: 1em;\n  margin-top: 0.4em;\n}\n\n.bp {\n  padding: 0em 15%;\n}\n\n.white {\n  color: #fff;\n}\n\nion-button {\n  --padding-bottom: 1.45em;\n  --padding-top: 1.45em;\n  --box-shadow: none;\n  font-size: 18px;\n  text-transform: capitalize;\n}\n\n.parent_btn {\n  margin: 0 1em;\n}\n\n.bb {\n  border-bottom: 1px solid #fff;\n}\n\n.bb_top {\n  margin: 1.5em 0em;\n}\n\n.fb {\n  --background: #3245b8;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.google {\n  --background: #f04336;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --border-radius: 25px;\n}\n\n.signup_text {\n  margin-top: 4em;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0FBZko7O0FBa0JBO0VBQ0ksdUVBQUE7RUFDQSxzQkFBQTtBQWZKOztBQWlCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFkSjs7QUFnQkE7RUFDSSxlQUFBO0FBYko7O0FBZUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBWko7O0FBY0E7RUFDSSxnQkFBQTtBQVhKOztBQWFBO0VBQ0ksV0FBQTtBQVZKOztBQVlBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FBVEo7O0FBV0E7RUFDSSxhQUFBO0FBUko7O0FBVUE7RUFDSSw2QkFBQTtBQVBKOztBQVNBO0VBQ0ksaUJBQUE7QUFOSjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU1BO0VBQ0ksZUFBQTtBQUhKOztBQUtBO0VBQ0ksVUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNvbnRlbnQge1xuLy8gICAgIC3igJNjb2xvcjogI2ZmZjtcbi8vICAgICAt4oCTYmFja2dyb3VuZDogbm9uZTtcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwo4oCmL+KApi9hc3NldHMvaW1nL0JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgMCAwO1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4vLyB9XG5cbi8vIGlvbi1jb250ZW50IHtcbi8vICAgICAvLyAtLWJhY2tncm91bmQ6IHVybChcImFzc2V0cy9pbWdzL2JnUy5zdmdcIikgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG5cbi8vICAgICAtLWJhY2tncm91bmQ6IHVybChcImFzc2V0cy9pbWdzL2JnLnBuZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcblxuLy8gICAgIC8vIC0tYmFja2dyb3VuZDogYmxhY2s7XG4vLyB9XG5cbiBcbmlvbi1jb250ZW50IHtcbiAgICAtLWNvbG9yOiAjZmZmO1xuICAgIC0tYmFja2dyb3VuZDpub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvaW1nL0JhY2tncm91bmQucG5nKSBuby1yZXBlYXQgMCAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdle1xuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9CYWNrZ3JvdW5kLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uYmFja19hcnJvdyB7XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5sb2dvIHtcbiAgICBtYXJnaW46IDJlbSAwZW07XG59XG5pb24taW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMWVtO1xuICAgIC0tY29sb3I6ICNmZmY7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLXRvcDogMC40ZW07XG59XG4uYnAge1xuICAgIHBhZGRpbmc6IDBlbSAxNSU7XG59XG4ud2hpdGUge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS40NWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNDVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnBhcmVudF9idG4ge1xuICAgIG1hcmdpbjogMCAxZW07XG59XG4uYmIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuLmJiX3RvcCB7XG4gICAgbWFyZ2luOiAxLjVlbSAwZW07XG59XG4uZmIge1xuICAgIC0tYmFja2dyb3VuZDogIzMyNDViODtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAxZW07XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmdvb2dsZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjA0MzM2O1xuICAgIC0tcGFkZGluZy1zdGFydDogMWVtO1xuICAgIC0tcGFkZGluZy1lbmQ6IDFlbTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uc2lnbnVwX3RleHQge1xuICAgIG1hcmdpbi10b3A6IDRlbTtcbn1cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forgot-password/forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _subject_events_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../subject-events.service */ "./src/app/subject-events.service.ts");










//167698651548-6fcki9irrlk2p6mmjaqnee4iq0tr10sr.apps.googleusercontent.com
//ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="2427294527578148" --variable APP_NAME="myApplication"
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, loadingController, 
    //private events: Events,
    subjectEvents, toastController, storage, popoverController, router, restService, facebook, googlePlus) {
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.subjectEvents = subjectEvents;
        this.toastController = toastController;
        this.storage = storage;
        this.popoverController = popoverController;
        this.router = router;
        this.restService = restService;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.isSubmitted = false;
        this.emailError = false;
        this.passwordError = false;
        this.invalidEmailError = false;
        this.validation = false;
        this.baseUrl = 'https://app.transusdrives.com/';
        this.ShowLoading = false;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.submitForm = function () {
        var _this = this;
        // this.validation = true;
        if (this.validateForm() == true) {
            var stringy = JSON.stringify({
                "requestType": "login",
                "loginWith": "Email",
                "email": this.email,
                "password": this.password
            });
            console.log(stringy);
            // this.present();
            this.ShowLoading = true;
            this.restService.authenticate(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response);
                if (_this.response.status == 'NotFound') {
                    _this.presentToast('Invalid email or password');
                    _this.ShowLoading = false;
                }
                else if (_this.response.status == 'Found') {
                    _this.presentToast('Login successfully!');
                    _this.storage.set('user_details', _this.response.user_details);
                    _this.storage.set('profile_img_url', _this.response.profile_img_url);
                    _this.storage.set('country_name', _this.response.country_name);
                    _this.storage.set('base_urls', _this.baseUrl);
                    _this.storage.set('currency_symbol', _this.response.user_details.symbol);
                    _this.subjectEvents.publishSomeData({
                        sidebar: 'sidebar'
                    });
                    _this.navCtrl.navigateRoot('/');
                }
                // this.dismiss();
                _this.ShowLoading = false;
            }, function (err) {
                _this.presentToast('Oops!somthing went wrong.');
                // this.dismiss();
                _this.ShowLoading = false;
            });
        }
    };
    LoginPage.prototype.LoginWithFacebook = function () {
        var _this = this;
        this.ShowLoading = true;
        this.facebook.login(['public_profile', 'email']).then(function (res) {
            console.log('Logged into Facebook!', res);
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(626).height(939).as(picture_large)', []).then(function (profile) {
                console.log(profile);
                var stringy = JSON.stringify({
                    requestType: 'fb_login',
                    "loginWith": "Facebook",
                    email: profile['email']
                });
                _this.restService.authenticate(stringy).subscribe(function (response) {
                    _this.response = JSON.parse(response['_body']);
                    console.log(_this.response.status);
                    if (_this.response.status == 'NotFound') {
                        _this.presentToast('Inavlid email or password');
                    }
                    else if (_this.response.status == 'Found') {
                        _this.presentToast('Login successfully!');
                        _this.storage.set('user_details', _this.response.user_details);
                        _this.storage.set('profile_img_url', _this.response.profile_img_url);
                        _this.storage.set('country_name', _this.response.country_name);
                        _this.storage.set('base_urls', _this.baseUrl);
                        // this.events.publish('sidebar', 'sidebar');
                        _this.subjectEvents.publishSomeData({
                            sidebar: 'sidebar'
                        });
                        _this.navCtrl.navigateRoot('/');
                    }
                    _this.ShowLoading = false;
                });
                //this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
                _this.ShowLoading = false;
            });
        }).catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.LoginWithGoogle = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            var stringy = JSON.stringify({
                requestType: 'google_login',
                "loginWith": "Gmail",
                email: res.email
            });
            _this.restService.authenticate(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response);
                if (_this.response.status == 'NotFound') {
                    _this.presentToast('Inavlid email or password');
                }
                else if (_this.response.status == 'Found') {
                    _this.presentToast('Login successfully!');
                    console.log(_this.response.user_details);
                    _this.storage.set('user_details', _this.response.user_details);
                    _this.storage.set('profile_img_url', _this.response.profile_img_url);
                    _this.storage.set('country_name', _this.response.country_name);
                    _this.storage.set('base_urls', _this.baseUrl);
                    //  this.events.publish('sidebar', 'sidebar');
                    _this.subjectEvents.publishSomeData({
                        sidebar: 'sidebar'
                    });
                    _this.navCtrl.navigateRoot('/');
                }
            });
        }).catch(function (err) { return console.log(err); });
    };
    LoginPage.prototype.validateForm = function () {
        // if(this.validation){
        this.emailError = false;
        this.passwordError = false;
        this.invalidEmailError = false;
        if (this.email == '' || this.email == undefined) {
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
        else {
            return true;
        }
        //  }
    };
    LoginPage.prototype.ValidateEmail = function (mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return (true);
        }
        else {
            //alert("You have entered an invalid email address!")
            return (false);
        }
    };
    LoginPage.prototype.forgotPassword = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"],
                            componentProps: {
                            //"data": extra_info
                            },
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onWillDismiss().then(function (data) {
                            // console.log('dismiss');
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoginPage.prototype.presentToast = function (msg) {
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
    LoginPage.prototype.GotoSignup = function () {
        this.router.navigate(['/signup']);
    };
    LoginPage.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    LoginPage.prototype.present = function () {
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
    LoginPage.prototype.dismiss = function () {
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
    LoginPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"] },
        { type: _subject_events_service__WEBPACK_IMPORTED_MODULE_9__["SubjectEventsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
        { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_4__["Facebook"] },
        { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
        })
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map