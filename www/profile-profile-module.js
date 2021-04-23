(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-row class=\"bys\">\n    <ion-col size=\"3\" class=\"ion-text-center\">\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-center\">\n      <ng-container *ngIf=\"profileImage == '' || profileImage == undefined\">\n        <img src=\"assets/img/place_holder.svg\">\n        <img src=\"assets/img/Edit_button.svg\" class=\"btn_edit_profile\" (click)=\"uploadProfile()\">\n      </ng-container>\n      <ng-container *ngIf=\"profileImage\">\n        <img src=\"{{profileImage}}\" class=\"solid_img\">\n        <img src=\"assets/img/Edit_button.svg\" class=\"btn_edit_profile\" (click)=\"uploadProfile()\">\n      </ng-container>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-center\">\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-textarea rows=\"6\" placeholder=\"About\" [(ngModel)]=\"About\" class=\"list_3\" (ionBlur)=\"validateForm()\">\n      </ion-textarea>\n      <span *ngIf=\"AboutError\" class=\"error ion-padding\">\n        About is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input placeholder=\"Email\" class=\"input_list ot_auto\" [(ngModel)]=\"Email\" (ionBlur)=\"validateForm()\"\n        readonly=\"\"></ion-input>\n      <span *ngIf=\"EmailError\" class=\"error ion-padding\">\n        Email is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-input placeholder=\"Works\" class=\"input_list ot_auto\" [(ngModel)]=\"Works\" (ionBlur)=\"validateForm()\">\n      </ion-input>\n      <span *ngIf=\"WorksError\" class=\"error ion-padding\">\n        Works is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-select placeholder=\"Language\" [(ngModel)]=\"Language\" (ionBlur)=\"validateForm()\">\n        <ion-select-option value=\"{{p.languages_id}}\" *ngFor=\"let p of languages; let i = index\">{{p.name}}\n        </ion-select-option>\n      </ion-select>\n      <span *ngIf=\"LanguageError\" class=\"error ion-padding\">\n        Language is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-select placeholder=\"Lives\" [(ngModel)]=\"Lives\" placeholder=\"Lives\" (ionBlur)=\"validateForm()\">\n        <ion-select-option value=\"{{p.id}}\" *ngFor=\"let p of countries; let i = index\">{{p.name}}</ion-select-option>\n      </ion-select>\n      <span *ngIf=\"LivesError\" class=\"error ion-padding\">\n        Lives is required.\n      </span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <ion-select placeholder=\"currencies\" [(ngModel)]=\"Currencies\" placeholder=\"Currencies\" (ionBlur)=\"validateForm()\">\n        <ion-select-option value=\"{{p.currencies_id}}\" *ngFor=\"let p of currencies; let i = index\">{{p.name}} -\n          ({{p.symbol}})</ion-select-option>\n      </ion-select>\n      <span *ngIf=\"CurrencyError\" class=\"error ion-padding\">\n        Currency is required.\n      </span>\n    </ion-col>\n    <!-- <ion-col size=\"12\">\n      <ion-input placeholder=\"Account Number\" class=\"input_list ot_auto\" [(ngModel)]=\"accountNumber\"\n        (ionBlur)=\"validateForm()\"></ion-input>\n      <span *ngIf=\"accountNumberError\" class=\"error ion-padding\">\n        Account Number is required.\n      </span>\n    </ion-col> -->\n    <!-- <ion-col size=\"12\">\n      <ion-input placeholder=\"Account Title\" class=\"input_list ot_auto\" [(ngModel)]=\"accountTitle\"\n        (ionBlur)=\"validateForm()\"></ion-input>\n      <span *ngIf=\"accountTitleError\" class=\"error ion-padding\">\n        Account Title is required.\n      </span>\n    </ion-col> -->\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"submitForm()\">Update</ion-button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
var ProfilePageRoutingModule = /** @class */ (function () {
    function ProfilePageRoutingModule() {
    }
    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProfilePageRoutingModule);
    return ProfilePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.input_list {\n  border: 1px solid #d4dce1;\n  background: #f7f8fa;\n  border-radius: 28px;\n  font-size: 13px;\n  --placeholder-color: #a6a6a8;\n  color: #000;\n  --padding-bottom: 1.5em;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  margin-top: 0.5em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_edit_profile {\n  position: absolute;\n  bottom: 3%;\n  right: 18%;\n}\n\n.bys {\n  padding: 0em 1em 1.5em 1em;\n  margin-top: 3em;\n}\n\n.list_3 {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 10px;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --placeholder-color: #a6a6a8;\n}\n\nion-select {\n  background: #f7f8fa;\n  border: 1px solid #d4dce1;\n  border-radius: 30px;\n  --placeholder-color: #a6a6a8;\n  color: #000;\n  font-size: 13px;\n  --padding-start: 1.5em;\n  --padding-top: 1.5em;\n  --padding-bottom: 1.5em;\n  --padding-end: 1.5em;\n  margin-top: 0.5em;\n}\n\n.error {\n  color: red;\n}\n\n.solid_img {\n  border-radius: 50%;\n  height: 150px;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUE7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0FBSUo7O0FBREE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQURBO0VBQ0ksVUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUtKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uaW5wdXRfbGlzdCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZGNlMTtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6ICNhNmE2YTg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bl9lZGl0X3Byb2ZpbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDMlO1xuICAgIHJpZ2h0OiAxOCU7XG59XG4uYnlzIHtcbiAgICBwYWRkaW5nOiAwZW0gMWVtIDEuNWVtIDFlbTtcbiAgICBtYXJnaW4tdG9wOiAzZW07XG59XG4ubGlzdF8zIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYTZhNmE4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjdmOGZhO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGRjZTE7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYTZhNmE4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG4uc29saWRfaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cameraimage.service */ "./src/app/cameraimage.service.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _subject_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subject-events.service */ "./src/app/subject-events.service.ts");








var ProfilePage = /** @class */ (function () {
    function ProfilePage(loadingController, subjectEvents, popoverController, storage, toastController, router, restService, alertCtrl, imageService, menuCtrl) {
        this.loadingController = loadingController;
        this.subjectEvents = subjectEvents;
        this.popoverController = popoverController;
        this.storage = storage;
        this.toastController = toastController;
        this.router = router;
        this.restService = restService;
        this.alertCtrl = alertCtrl;
        this.imageService = imageService;
        this.menuCtrl = menuCtrl;
        this.base64 = '';
        this.AboutError = false;
        this.LivesError = false;
        this.WorksError = false;
        this.EmailError = false;
        this.LanguageError = false;
        this.base64Error = false;
        this.validation = false;
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.getDropDownData();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.About = user_details.about;
            _this.Works = user_details.work;
            _this.accountNumber = user_details.bank_acc_no;
            _this.accountTitle = user_details.bank_acc_title;
            //  this.base64 = user_details.profile_image;
            _this.Email = user_details.email;
            setTimeout(function () {
                _this.Language = user_details.languages_id;
                _this.Lives = user_details.countries_id;
                _this.Currencies = user_details.currencies_id;
                console.log('ok');
            }, 2000);
        });
        this.storage.get('profile_img_url').then(function (profile_img_url) {
            _this.storage.get('base_urls').then(function (base_url) {
                _this.profileImage = base_url + '' + profile_img_url;
                console.log(_this.profileImage);
            });
        });
    };
    ProfilePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ProfilePage.prototype.getDropDownData = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "profile_page"
        });
        console.log(stringy);
        this.restService.getDdlData(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.languages = _this.response.languages;
            _this.countries = _this.response.countries;
            _this.currencies = _this.response.system_currencies;
            console.log(_this.response);
        }, function (err) {
        });
    };
    ProfilePage.prototype.submitForm = function () {
        var _this = this;
        console.log('update');
        // this.validation = true;
        if (this.validateForm() == true) {
            //alert('true');
            this.present();
            var stringy = JSON.stringify({
                "usersID": this.userID,
                "email": this.Email,
                "about": this.About,
                "countriesID": this.Lives,
                "works": this.Works,
                "languagesID": this.Language,
                "profilePic": this.base64,
                "currencyID": this.Currencies,
                "accountNumber": this.accountNumber,
                "accountTitle": this.accountTitle,
                "requestType": "update"
            });
            console.log(stringy);
            this.restService.editProfile(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response.status);
                if (_this.response.status == 'error') {
                    _this.presentToast(_this.response.msg);
                }
                else if (_this.response.status == 'success') {
                    _this.presentToast(_this.response.msg);
                    _this.getUserDetail();
                }
                _this.dismiss();
            }, function (err) {
                _this.dismiss();
            });
        }
        else {
            console.log('update else');
        }
    };
    ProfilePage.prototype.getUserDetail = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "usersID": this.userID,
            "requestType": 'withID'
        });
        console.log(stringy);
        this.restService.getUserDetails(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            if (_this.response.status == 'NotFound') {
            }
            else if (_this.response.status == 'Found') {
                _this.storage.set('user_details', _this.response.user_details);
                _this.storage.set('profile_img_url', _this.response.profile_img_url);
                _this.storage.set('country_name', _this.response.country_name);
                console.log('currency_symbol', _this.response.user_details.symbol);
                _this.storage.set('currency_symbol', _this.response.user_details.symbol);
                _this.subjectEvents.publishSomeData({
                    sidebar: 'sidebar'
                });
            }
        }, function (err) {
        });
    };
    ProfilePage.prototype.validateForm = function () {
        //this.base64 = 'iVBORw0KGgoAAAANSUhEUgAAAyAAAAIVBAMAAADbnobxAAAAFVBMVEX///8AI5XtKTlVbbgAF4/zcXvsHS5RBH79AAAFK0lEQVR42uzRMRHCQABFwTQIYAYFKEAT/kUk1fsWrti1sNf7AJ/fdYDX/3sAIUKECBEiRIgQIQ8hERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhEXKzR8cEAAAACIP6t/abJaACEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSERMvbomAAAAABhUP/WfrMEVCBCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJEIi5IRESISckAiJkBMSIRFyQiIkQk5IhETICYmQCDkhERIhJyRCIuSEREiEnJAIiZATEiERckIiJEJOSIREyAmJkAg5IRESISckQiLkhERIhJyQCImQExIhEXJCIiRCTkiERMgJiZAIOSEREiEnJELWHh0TAADAMAzy73pfqmAfWCBCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZAREiERMkIiJEJGSIREyAiJkAgZIRESISMkQiJkhERIhIyQCImQERIhETJCIiRCRkiERMgIiZAIGSEREiEjJEIiZIRESISMkAiJkBESIREyQiIkQkZIhETICImQCBkhERIhIyRCImSEREiEjJAIiZBHB3nlJ4w8GGmeAAAAAElFTkSuQmCC';
        //if(this.validation){
        this.AboutError = false;
        this.LivesError = false;
        this.WorksError = false;
        this.LanguageError = false;
        this.base64Error = false;
        this.accountTitleError = false;
        this.accountNumberError = false;
        this.CurrenciesError = false;
        if (this.About == '' || this.About == undefined) {
            this.AboutError = true;
            return false;
        }
        else if (this.Email == '' || this.Email == undefined) {
            this.EmailError = true;
            return false;
        }
        else if (this.Lives == '' || this.Lives == undefined) {
            this.LivesError = true;
            return false;
        }
        else if (this.Works == '' || this.Works == undefined) {
            this.WorksError = true;
            return false;
        }
        else if (this.Language == '' || this.Language == undefined) {
            this.LanguageError = true;
            return false;
        }
        else if (this.Currencies == '' || this.Currencies == undefined) {
            this.CurrenciesError = true;
            return false;
        }
        //  else if (this.accountNumber == '' || this.accountNumber == undefined) {
        //   this.accountNumberError = true;
        //   return false;
        // } else if (this.accountTitle == '' || this.accountTitle == undefined) {
        //   this.accountTitleError = true;
        //   return false;
        // }
        else {
            return true;
        }
        // }
    };
    ProfilePage.prototype.uploadProfile = function () {
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
    ProfilePage.prototype.takeImageFromCamera = function () {
        var _this = this;
        this.imageService.selectImageInCamera().then(function (imageData) {
            _this.profileImage = "data:image/png;base64," + imageData;
            _this.base64 = "" + imageData;
        }).catch(function (err) { return console.error(err); });
    };
    ProfilePage.prototype.getImageFromGallery = function () {
        var _this = this;
        this.imageService.selectImageInGallery().then(function (imageData) {
            _this.profileImage = "data:image/png;base64," + imageData;
            _this.base64 = "" + imageData;
        }).catch(function (err) { return console.error(err); });
    };
    ProfilePage.prototype.presentToast = function (msg) {
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
    ProfilePage.prototype.present = function () {
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
    ProfilePage.prototype.dismiss = function () {
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
    ProfilePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _subject_events_service__WEBPACK_IMPORTED_MODULE_7__["SubjectEventsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _cameraimage_service__WEBPACK_IMPORTED_MODULE_4__["CameraimageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
        })
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map