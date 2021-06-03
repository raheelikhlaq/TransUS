(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-all-notifications-view-all-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-notifications/view-all-notifications.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-notifications/view-all-notifications.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Notifications</ion-title>\n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"notifications?.length >0\">\n    <ion-row class=\"pdtop\" *ngFor=\"let notification of notifications\" (click)=\"accptOffer(notification)\">\n    <ion-col size=\"2\" class=\"notify_image_main\">\n      <img src=\"{{base_url}}{{notification.sender_img_url}}\">\n    </ion-col>\n    <ion-col  class=\"notify_content\" size=\"10\">\n      <ion-row>\n        <ion-col size=\"6\" class=\"ion-text-left\">\n            <p class=\"notfy_title\">{{notification.sender_name}}</p>\n        </ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\">\n            <p  class=\"notify_time\">{{notification.time_added}}</p>\n        </ion-col>\n        <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\n            <p class=\"notify_desc\">{{notification.content}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n</ion-row>\n</ng-container>\n<ng-container *ngIf=\"notifications?.length == 0\">\n  <ion-row>\n    <ion-col class=\"ion-text-center\">\n        <h2>Data Not Found!</h2>\n    </ion-col>\n  </ion-row>\n</ng-container>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/view-all-notifications/view-all-notifications-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/view-all-notifications/view-all-notifications-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewAllNotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllNotificationsPageRoutingModule", function() { return ViewAllNotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_all_notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-all-notifications.page */ "./src/app/view-all-notifications/view-all-notifications.page.ts");




var routes = [
    {
        path: '',
        component: _view_all_notifications_page__WEBPACK_IMPORTED_MODULE_3__["ViewAllNotificationsPage"]
    }
];
var ViewAllNotificationsPageRoutingModule = /** @class */ (function () {
    function ViewAllNotificationsPageRoutingModule() {
    }
    ViewAllNotificationsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewAllNotificationsPageRoutingModule);
    return ViewAllNotificationsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-all-notifications/view-all-notifications.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/view-all-notifications/view-all-notifications.module.ts ***!
  \*************************************************************************/
/*! exports provided: ViewAllNotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllNotificationsPageModule", function() { return ViewAllNotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_all_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-all-notifications-routing.module */ "./src/app/view-all-notifications/view-all-notifications-routing.module.ts");
/* harmony import */ var _view_all_notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-all-notifications.page */ "./src/app/view-all-notifications/view-all-notifications.page.ts");







var ViewAllNotificationsPageModule = /** @class */ (function () {
    function ViewAllNotificationsPageModule() {
    }
    ViewAllNotificationsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_all_notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewAllNotificationsPageRoutingModule"]
            ],
            declarations: [_view_all_notifications_page__WEBPACK_IMPORTED_MODULE_6__["ViewAllNotificationsPage"]]
        })
    ], ViewAllNotificationsPageModule);
    return ViewAllNotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/view-all-notifications/view-all-notifications.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/view-all-notifications/view-all-notifications.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_content p {\n  margin: 0px;\n}\n\n.notify_desc {\n  font-size: 10px;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1a6bbe;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #c4932f;\n  font-size: 10px;\n}\n\n.notify_bg {\n  background: #f9f9f9;\n}\n\n.pdtop {\n  padding-right: 10px;\n  padding-left: 10px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1hbGwtbm90aWZpY2F0aW9ucy92aWV3LWFsbC1ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0FBS0o7O0FBSEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLG1CQUFBO0FBUUo7O0FBTkE7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFRSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctYWxsLW5vdGlmaWNhdGlvbnMvdmlldy1hbGwtbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLmJfbGlzdDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm5vdGlmeV9pbWFnZV9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm90aWZ5X2ltYWdlX21haW4gaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubm90aWZ5X2NvbnRlbnQgcCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4ubm90aWZ5X2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5ub3RpZnlfZGVzY19tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLm5vdGZ5X3RpdGxlIHtcbiAgICBjb2xvcjogIzFhNmJiZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4ubm90aWZ5X3RpbWUge1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5ub3RpZnlfYmcge1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG4ucGR0b3Age1xuICAgIC8vIHBhZGRpbmc6IDVweCAwZW07XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/view-all-notifications/view-all-notifications.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/view-all-notifications/view-all-notifications.page.ts ***!
  \***********************************************************************/
/*! exports provided: ViewAllNotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllNotificationsPage", function() { return ViewAllNotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _accept_offer_accept_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../accept-offer/accept-offer.page */ "./src/app/accept-offer/accept-offer.page.ts");







var ViewAllNotificationsPage = /** @class */ (function () {
    function ViewAllNotificationsPage(popoverController, restService, storage, router, menuCtrl) {
        this.popoverController = popoverController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
    }
    ViewAllNotificationsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.currencies_id = user_details.currencies_id;
            _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
                _this.viewAll();
            });
        });
        // this.callInterval = setInterval(() => {
        //   this.viewAll();
        // }, 3000
        // );
    };
    ViewAllNotificationsPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.callInterval);
        console.log('clear');
    };
    ViewAllNotificationsPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ViewAllNotificationsPage.prototype.viewAll = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "get_all",
            "usersID": this.userID,
            "limit": 100,
            "offset": 0,
            "readFilter": ''
        });
        console.log(stringy);
        this.restService.notifications(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            if (_this.response.status == 'NotFound') {
                _this.notifications = [];
            }
            else if (_this.response.status == 'Found') {
                _this.notifications = _this.response.notifications;
            }
        }, function (err) {
        });
    };
    ViewAllNotificationsPage.prototype.accptOffer = function (p) {
        var _this = this;
        console.log(p);
        if (p.offer_id) {
            this.readNotification(p);
            var stringy = JSON.stringify({
                "requestType": "check_offer_by_id",
                "customerID": this.userID,
                "offerID": p.offer_id,
                "currencyID": this.currencies_id
            });
            this.restService.inquire_charges(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response);
                if (_this.response.status == 'NotFound') {
                    console.log('NotFound');
                }
                else if (_this.response.status == 'Found') {
                    _this.offerPopup(_this.response.offers, p.offer_id);
                }
            }, function (err) {
            });
        }
        if (p.type_id == '1' || p.type_id == '3') {
            console.log('msggggggggggg', p);
            this.readNotification(p);
            var myData = JSON.stringify({
                userID: p.receiver_id,
                otherUserId: p.sender_id,
                user_name: p.sender_name,
                profile_img: p.sender_img_url
            });
            console.log(myData);
            this.router.navigate(['/chat-detail'], {
                queryParams: {
                    value: myData
                }
            });
        }
        if (p.type_id == '5' || p.type_id == '7') {
            //  this.readNotification(p);
            var vhDetails = JSON.stringify({
                requestType: "get_car_details_by_id",
                usersID: this.userID,
                vehicleID: p.vehicle_id,
                currencyID: this.currencies_id
            });
            console.log(vhDetails);
            this.router.navigate(['/listed-car']);
            // this.restService.list_vehicles(vhDetails).subscribe(vhRes =>{
            //   console.log(JSON.parse(vhRes['_body'])," resss wheel");
            //   this.gotoDetails =JSON.parse(vhRes['_body'])
            //   console.log(this.gotoDetails.vehicles_list[0], "listing")
            //   var myData = JSON.stringify({
            //     cars_list_result: this.gotoDetails.vehicles_list[0],
            //     redirect: '/notification'
            //   });
            //   this.router.navigate(['/car-detail'], {
            //     queryParams: {
            //       value: myData  
            //     },
            //   });
            // },(err)=>{
            //   console.log(err);
            // });
        }
    };
    ViewAllNotificationsPage.prototype.readNotification = function (notification) {
        var read = JSON.stringify({
            requestType: 'mark_read',
            usersID: this.userID,
            notifyID: notification.notifications_id
        });
        this.restService.notifications(read).subscribe(function (res) {
            console.log(res);
        }, function (readError) {
            console.log(readError);
        });
    };
    ViewAllNotificationsPage.prototype.offerPopup = function (p, offer_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _accept_offer_accept_offer_page__WEBPACK_IMPORTED_MODULE_6__["AcceptOfferPage"],
                            componentProps: {
                                "data": p,
                                "offer_id": offer_id
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
    ViewAllNotificationsPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ViewAllNotificationsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-all-notifications',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-all-notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-all-notifications/view-all-notifications.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-all-notifications.page.scss */ "./src/app/view-all-notifications/view-all-notifications.page.scss")).default]
        })
    ], ViewAllNotificationsPage);
    return ViewAllNotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-all-notifications-view-all-notifications-module.js.map