(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-support-contact-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-support/contact-support.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-support/contact-support.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Customer Support</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n      <img src=\"assets/img/Vector.svg\">\n    </ion-col>\n  </ion-row>\n  <div class=\"b_m\">\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder=\"Email\" class=\"input_list ot_auto\" [(ngModel)]=\"Email\" (ionBlur)=\"validateForm()\"></ion-input>\n      <span *ngIf=\"EmailError\" class=\"error ion-padding\">\n        Email is required.\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-input placeholder=\"Subject\" class=\"input_list ot_auto\" [(ngModel)]=\"Subject\" (ionBlur)=\"validateForm()\"></ion-input>\n      <span *ngIf=\"SubjectError\" class=\"error ion-padding\">\n        Subject is required.\n      </span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <ion-textarea rows=\"6\" placeholder=\"Description\" class=\"list_3\" [(ngModel)]=\"Description\" (ionBlur)=\"validateForm()\"></ion-textarea>\n      <span *ngIf=\"DescriptionError\" class=\"error ion-padding\">\n        Description is required.\n      </span>\n    </ion-col>\n  </ion-row>\n  </div>  \n  <ion-row class=\"btn_footer\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Send</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/contact-support/contact-support-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/contact-support/contact-support-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactSupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSupportPageRoutingModule", function() { return ContactSupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-support.page */ "./src/app/contact-support/contact-support.page.ts");




var routes = [
    {
        path: '',
        component: _contact_support_page__WEBPACK_IMPORTED_MODULE_3__["ContactSupportPage"]
    }
];
var ContactSupportPageRoutingModule = /** @class */ (function () {
    function ContactSupportPageRoutingModule() {
    }
    ContactSupportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ContactSupportPageRoutingModule);
    return ContactSupportPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/contact-support/contact-support.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/contact-support/contact-support.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactSupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSupportPageModule", function() { return ContactSupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-support-routing.module */ "./src/app/contact-support/contact-support-routing.module.ts");
/* harmony import */ var _contact_support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-support.page */ "./src/app/contact-support/contact-support.page.ts");







var ContactSupportPageModule = /** @class */ (function () {
    function ContactSupportPageModule() {
    }
    ContactSupportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _contact_support_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactSupportPageRoutingModule"]
            ],
            declarations: [_contact_support_page__WEBPACK_IMPORTED_MODULE_6__["ContactSupportPage"]]
        })
    ], ContactSupportPageModule);
    return ContactSupportPageModule;
}());



/***/ }),

/***/ "./src/app/contact-support/contact-support.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/contact-support/contact-support.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #F7F8FA;\n  border-radius: 28px;\n  font-size: 13px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  margin-top: 0.6em;\n}\n\n.list_3 {\n  background: #F7F8FA;\n  border: 1px solid #D4DCE1;\n  border-radius: 10px;\n  --placeholder-color: #b2b2b4;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.b_m {\n  margin: 1em 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1zdXBwb3J0L2NvbnRhY3Qtc3VwcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Qtc3VwcG9ydC9jb250YWN0LXN1cHBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uaW5wdXRfbGlzdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkY2UxO1xuICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IyYjJiNDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNmVtO1xufVxuLmxpc3RfM3tcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENERDRTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjJiMmI0O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG4uYl9te1xuICAgIG1hcmdpbjogMWVtIDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact-support/contact-support.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/contact-support/contact-support.page.ts ***!
  \*********************************************************/
/*! exports provided: ContactSupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSupportPage", function() { return ContactSupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var ContactSupportPage = /** @class */ (function () {
    function ContactSupportPage(loadingController, activatedRoute, storage, toastController, router, restService, alertCtrl, menuCtrl) {
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.validation = false;
        this.userID = '';
    }
    ContactSupportPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            if (_this.userID) {
            }
            else {
                _this.userID = '';
            }
        });
    };
    ContactSupportPage.prototype.validateForm = function () {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.validation) {
            if (re.test(this.Email)) {
                this.EmailError = false;
                this.SubjectError = false;
                this.DescriptionError = false;
                if (this.Email == '' || this.Email == undefined) {
                    this.EmailError = true;
                    return false;
                }
                else if (this.Subject == '' || this.Subject == undefined) {
                    this.SubjectError = true;
                    return false;
                }
                else if (this.Description == '' || this.Description == undefined) {
                    this.DescriptionError = true;
                    return false;
                }
                else {
                    return true;
                }
            }
            else {
                this.presentToast('Invalid Email');
            }
        }
        else {
            this.presentToast('Invalid Email');
        }
    };
    ContactSupportPage.prototype.submitForm = function () {
        var _this = this;
        this.validation = true;
        // console.log(this.document_four);
        if (this.validateForm() == true) {
            //alert('true');
            var stringy = JSON.stringify({
                "requestType": 'send_request',
                "email": this.Email,
                "usersID": this.userID,
                "subject": this.Subject,
                "description": this.Description
            });
            console.log(stringy);
            this.present();
            this.restService.customer_support(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response.status);
                if (_this.response.status == 'error') {
                    _this.presentToast('Oops!something went wrong.');
                }
                else if (_this.response.status == 'success') {
                    _this.presentToast('We received your query. We will try to get back to you as soon as possible. Thanks');
                    _this.router.navigate(['/']);
                }
                _this.dismiss();
            }, function (err) {
                _this.dismiss();
            });
        }
    };
    ContactSupportPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ContactSupportPage.prototype.carDetail = function () {
        this.router.navigate(['/car-detail']);
    };
    ContactSupportPage.prototype.presentToast = function (msg) {
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
    ContactSupportPage.prototype.present = function () {
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
    ContactSupportPage.prototype.dismiss = function () {
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
    ContactSupportPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ContactSupportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-support',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-support.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-support/contact-support.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-support.page.scss */ "./src/app/contact-support/contact-support.page.scss")).default]
        })
    ], ContactSupportPage);
    return ContactSupportPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-support-contact-support-module.js.map