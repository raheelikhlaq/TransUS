(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-password-change-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"ShowLoading\" style=\"position: absolute; width: 100%; z-index: 9999;top: 8em;\">\n    <ion-col style=\"text-align: center;\">\n      <img style=\"width: 90px;\" src=\"assets/img/Loader.gif\">\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"bys\">\n    <ion-col *ngIf=\"!displayOLD\" size=\"12\">\n      <ion-input type=\"password\" placeholder=\"Old Password\" class=\"input_list\" [(ngModel)]=\"oldPassword\" ></ion-input>\n      <span *ngIf=\"oldPasswordError\" class=\"error ion-padding\">\n        Old Password is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input type=\"password\" placeholder=\"New Password\" class=\"input_list\" [(ngModel)]=\"newPassword\" ></ion-input>\n      <span *ngIf=\"newPasswordError\" class=\"error ion-padding\">\n        New Password is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input type=\"password\" placeholder=\"Confirm Password\" class=\"input_list\" [(ngModel)]=\"ConfirmPassword\" ></ion-input>\n      <span *ngIf=\"confirmPasswordError\" class=\"error ion-padding\">\n        confirmPassword is required.\n      </span>\n      <span *ngIf=\"notSameError\" class=\"error error-texxt\">\n        New and confirm passwords are not same\n      </span>\n    </ion-col>\n    </ion-row>\n  \n    <ion-row >\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Save</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"text-align: center;\">\n        <p class=\"error forgot\" (click)=\"forgotPassword()\">Forgot your password?</p>\n      </ion-col>\n    </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/change-password/change-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/change-password/change-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");




var routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
var ChangePasswordPageRoutingModule = /** @class */ (function () {
    function ChangePasswordPageRoutingModule() {
    }
    ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChangePasswordPageRoutingModule);
    return ChangePasswordPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "./src/app/change-password/change-password-routing.module.ts");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "./src/app/change-password/change-password.page.ts");







var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]
            ],
            declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/change-password/change-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  color: #000;\n  --placeholder-color: #b2b2b4;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  margin-top: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.error-texxt {\n  text-align: center;\n  position: relative;\n  top: 9px;\n  left: 10px;\n}\n\n.bys {\n  padding: 0em 1em 1.5em 1em;\n  margin-top: 3em;\n}\n\n.error {\n  color: red;\n}\n\n.forgot {\n  position: absolute;\n  width: 100%;\n  top: -11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNBO0VBQ0ksVUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmlucHV0X2xpc3Qge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5lcnJvci10ZXh4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogOXB4O1xuICAgIGxlZnQ6IDEwcHg7XG59XG4uYnlzIHtcbiAgICBwYWRkaW5nOiAwZW0gMWVtIDEuNWVtIDFlbTtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cbi5mb3Jnb3R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogLTExcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/change-password/change-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/change-password/change-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _forgot_password_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forgot-password/forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");
/* harmony import */ var _subject_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subject-events.service */ "./src/app/subject-events.service.ts");
/* harmony import */ var _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../verify-new-code/verify-new-code.page */ "./src/app/verify-new-code/verify-new-code.page.ts");









var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(toastController, restService, storage, router, menuCtrl, activatedRoute, subjectEvents, navCtrl, popoverController) {
        this.toastController = toastController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.subjectEvents = subjectEvents;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.displayOLD = false;
        this.ShowLoading = false;
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            if (user_details) {
                console.log(user_details);
                _this.userID = user_details.users_id;
            }
        });
        this.activatedRoute.queryParams.subscribe(function (res) {
            if (res) {
                _this.response = JSON.parse(res.value);
                console.log(_this.response);
                console.log(_this.response.displayoldPass);
                console.log(_this.response.old_pass);
                _this.displayOLD = _this.response.displayoldPass;
                _this.oldPassword = _this.response.old_pass;
                _this.userID = _this.response.userID;
            }
        });
        this.email = localStorage.getItem("restWithEmail");
    };
    ChangePasswordPage.prototype.submitForm = function () {
        var _this = this;
        this.oldPasswordError = false;
        this.newPasswordError = false;
        this.confirmPasswordError = false;
        this.notSameError = false;
        this.ShowLoading = true;
        console.log('error');
        if (this.oldPassword == '' || this.oldPassword == undefined) {
            console.log('error');
            this.oldPasswordError = true;
            return false;
        }
        else if (this.newPassword == '' || this.newPassword == undefined) {
            this.newPasswordError = true;
            return false;
        }
        else if (this.ConfirmPassword == '' || this.ConfirmPassword == undefined) {
            this.confirmPasswordError = true;
            return false;
        }
        else if (this.newPassword != this.ConfirmPassword) {
            this.notSameError = true;
            return false;
        }
        var stringy = JSON.stringify({
            "requestType": "change_password",
            "usersID": this.userID,
            "oldPassword": this.oldPassword,
            "confirmPassword": this.ConfirmPassword
        });
        console.log(stringy);
        this.restService.forgotPassword(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            if (_this.response.status == 'error') {
                _this.presentToast(_this.response.msg);
                _this.ShowLoading = false;
            }
            else if (_this.response.status == 'success') {
                _this.presentToast('Password Updated Successfully').then(function (res) {
                    if (_this.displayOLD == false) {
                        setTimeout(function () {
                            _this.oldPassword = '';
                            _this.newPassword = '';
                            _this.ConfirmPassword = '';
                            _this.ShowLoading = false;
                            _this.navCtrl.navigateRoot('/setting');
                        }, 2000);
                    }
                    else {
                        _this.submitFormLogin();
                    }
                });
            }
        }, function (err) {
        });
    };
    ChangePasswordPage.prototype.presentToast = function (msg) {
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
    ChangePasswordPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ChangePasswordPage.prototype.forgotPassword = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
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
                            console.log(data);
                            if (data.data) {
                                _this.verifyCodeNewPass();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChangePasswordPage.prototype.verifyCodeNewPass = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _verify_new_code_verify_new_code_page__WEBPACK_IMPORTED_MODULE_8__["VerifyNewCodePage"],
                            componentProps: {
                            //"data": extra_info
                            },
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onWillDismiss().then(function (data) {
                            console.log(data);
                            _this.getRes = data;
                            console.log(_this.getRes.data.userID);
                            console.log(_this.getRes.data.old_pass);
                            console.log(_this.getRes.data.displayoldPass);
                            _this.ShowLoading = false;
                            _this.displayOLD = _this.getRes.data.displayoldPass;
                            _this.oldPassword = _this.getRes.data.old_pass;
                            _this.userID = _this.getRes.data.userID;
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ChangePasswordPage.prototype.submitFormLogin = function () {
        // this.validation = true;
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "login",
            "loginWith": "Email",
            "email": this.email,
            "password": this.ConfirmPassword
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
    };
    ChangePasswordPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _subject_events_service__WEBPACK_IMPORTED_MODULE_7__["SubjectEventsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./change-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./change-password.page.scss */ "./src/app/change-password/change-password.page.scss")).default]
        })
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=change-password-change-password-module.js.map