(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~change-password-change-password-module~login-login-module~verify-new-code-verify-new-code-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <div style=\"padding: 10px !important;\">\n  <ion-row>\n    <ion-col class=\"text-right\">\n      <img src=\"assets/img/minimize.svg\" (click)=\"ok()\">\n    </ion-col>\n  </ion-row>\n\n  \n  <ion-row *ngIf=\"ShowLoading\" style=\"position: absolute; width: 100%; z-index: 9999;\">\n    <ion-col style=\"text-align: center;\">\n      <img style=\"width: 90px;\" src=\"assets/img/Loader.gif\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"text-center\" size=\"12\">\n      <h1 class=\"alura\">Enter Code</h1>\n      <p class=\"alura m_0\"> Enter the 4 digit code that you received on your mobile number</p>\n    </ion-col>\n  </ion-row>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item >\n          <ion-input type=\"tel\" placeholder=\"0\"  [(ngModel)]=\"a1\" maxlength=\"1\" tabindex=\"1\" (keyup)=\"moveFocus(b)\"  ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col >\n        <ion-item>\n          <ion-input type=\"tel\" placeholder=\"0\" [(ngModel)]=\"b1\" maxlength=\"1\"  tabindex=\"2\" #b (keyup)=\"moveFocus(c)\"  ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col >\n        <ion-item>\n          <ion-input type=\"tel\" placeholder=\"0\" [(ngModel)]=\"c1\" maxlength=\"1\"  tabindex=\"3\" #c (keyup)=\"moveFocus(d)\"  ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col >\n        <ion-item>\n          <ion-input type=\"tel\" placeholder=\"0\" [(ngModel)]=\"d1\" maxlength=\"1\"  tabindex=\"4\" #d  ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n  <ion-row>\n     <ion-col  size=\"3\">\n\n     </ion-col>\n     <ion-col size=\"6\" class=\"ion-text-center\">\n        <ion-button color=\"primary\" class=\"alura\"  (click)=\"goToHome()\" shape=\"round\" expand=\"block\">Verification</ion-button>  \n        <!-- <p class=\"alura\" (click)=\"resend()\">Resend</p> -->\n    </ion-col>\n  </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/verify-new-code/verify-new-code.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/verify-new-code/verify-new-code.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.m_0 {\n  margin: 0px;\n  padding: 0em 18%;\n}\n\n.select_color {\n  border: 1px solid #000;\n  border-radius: 25px;\n  padding: 12px 12px;\n}\n\nh1 {\n  color: #1A6BBE;\n  margin-top: 0px;\n}\n\nion-item {\n  border: 1px solid #d4dce1;\n  text-align: center;\n  border-radius: 40px;\n  --background: #F7F8FA;\n  --color: #d4dce1;\n  margin: 0em 0.3em;\n}\n\nion-input {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LW5ldy1jb2RlL3ZlcmlmeS1uZXctY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLFlBQUE7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1uZXctY29kZS92ZXJpZnktbmV3LWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XHJcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtcmlnaHR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4ubV8we1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6IDBlbSAxOCU7XHJcbn1cclxuXHJcbi5zZWxlY3RfY29sb3J7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHBhZGRpbmc6IDEycHggMTJweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOiMxQTZCQkU7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgLS1jb2xvcjogI2Q0ZGNlMTtcclxuICAgIG1hcmdpbjogMGVtIDAuM2VtO1xyXG59XHJcblxyXG5pb24taW5wdXR7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/verify-new-code/verify-new-code.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/verify-new-code/verify-new-code.page.ts ***!
  \*********************************************************/
/*! exports provided: VerifyNewCodePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyNewCodePage", function() { return VerifyNewCodePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");





var VerifyNewCodePage = /** @class */ (function () {
    function VerifyNewCodePage(navCtrl, router, popoverController, restService, toastController, loadingController, navParams) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.popoverController = popoverController;
        this.restService = restService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.navParams = navParams;
        this.ShowLoading = false;
        this.response = '';
        this.stringyOfSignup = '';
        this.loading = '';
        this.otp = '';
        this.otpArr = '';
        this.otpMsg = '';
        this.mobileNumber = '';
        this.responseOfOtp = '';
        this.otpCodeOfthisScreen = '';
    }
    VerifyNewCodePage.prototype.ngOnInit = function () {
        this.email = localStorage.getItem("restWithEmail");
        // alert('in the popup');
        // alert(this.navParams.get('stringyOfSignup'));
        this.stringyOfSignup = this.navParams.get('stringyOfSignup');
        this.otp = this.navParams.get('otp');
        this.otpArr = this.navParams.get('otpArr');
        this.otpMsg = this.navParams.get('otpMsg');
        this.mobileNumber = this.navParams.get('mobileNumber');
    };
    VerifyNewCodePage.prototype.ok = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.dismiss()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerifyNewCodePage.prototype.goToHome = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.otpCodeOfthisScreen = this.a1.toString() + this.b1.toString() + this.c1.toString() + this.d1.toString();
                console.log(this.otpCodeOfthisScreen);
                // if (this.otpCodeOfthisScreen == this.otp) {
                // this.present();
                this.ShowLoading = true;
                console.log(this.stringyOfSignup);
                data = JSON.stringify({
                    "email": this.email,
                    "requestType": "verify_code",
                    "code": this.otpCodeOfthisScreen
                });
                this.restService.forgotPassword(data).subscribe(function (response) {
                    _this.response = JSON.parse(response['_body']);
                    console.log(_this.response);
                    console.log(_this.response.status);
                    if (_this.response.status == 'NotFound') {
                        _this.presentToast("Code does not match");
                        _this.ShowLoading = false;
                        // this.dismiss();
                    }
                    else if (_this.response.status == 'Found') {
                        localStorage.setItem("oldpass", _this.response.old_pass);
                        // await this.popoverController.dismiss();
                        _this.popoverController.dismiss({
                            //val
                            displayoldPass: true,
                            old_pass: _this.response.old_pass,
                            userID: _this.response.user_id
                        });
                        var myData = JSON.stringify({
                            displayoldPass: true,
                            old_pass: _this.response.old_pass,
                            userID: _this.response.user_id
                        });
                        _this.router.navigate(['/change-password'], {
                            queryParams: {
                                value: myData
                            },
                        });
                        //  this.router.navigate(['/change-password']);
                        // this.router.navigate(['/']);
                        // this.dismiss();
                        _this.ShowLoading = false;
                    }
                }, function (err) {
                    // this.dismiss();
                    _this.ShowLoading = false;
                });
                return [2 /*return*/];
            });
        });
    };
    VerifyNewCodePage.prototype.moveFocus = function (nextElement) {
        nextElement.focus();
    };
    VerifyNewCodePage.prototype.presentToast = function (msg) {
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
    VerifyNewCodePage.prototype.present = function () {
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
    VerifyNewCodePage.prototype.dismiss = function () {
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
    VerifyNewCodePage.prototype.resend = function () {
        var _this = this;
        var ss = JSON.stringify({
            requestType: 'send_otp',
            phone_number: this.mobileNumber
        });
        // this.present()
        this.ShowLoading = true;
        this.restService.auth_userAPI(ss).subscribe(function (ress) {
            console.log(ress);
            _this.responseOfOtp = JSON.parse(ress['_body']);
            console.log('respooooo', _this.responseOfOtp);
            if (_this.responseOfOtp.status == 'success') {
                _this.otp = _this.responseOfOtp.otp_code;
                _this.otpArr = _this.responseOfOtp.otp_code_array;
                _this.otpMsg = _this.responseOfOtp.msg;
                _this.a1 = _this.otpArr[0];
                _this.b1 = _this.otpArr[1];
                _this.c1 = _this.otpArr[2];
                _this.d1 = _this.otpArr[3];
            }
            else {
                _this.otpMsg = _this.responseOfOtp.msg;
                _this.presentToast(_this.otpMsg);
            }
            // this.dismiss()
            _this.ShowLoading = false;
        });
    };
    VerifyNewCodePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] }
    ]; };
    VerifyNewCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-new-code',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./verify-new-code.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-new-code/verify-new-code.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./verify-new-code.page.scss */ "./src/app/verify-new-code/verify-new-code.page.scss")).default]
        })
    ], VerifyNewCodePage);
    return VerifyNewCodePage;
}());



/***/ })

}]);
//# sourceMappingURL=default~change-password-change-password-module~login-login-module~verify-new-code-verify-new-code-module.js.map