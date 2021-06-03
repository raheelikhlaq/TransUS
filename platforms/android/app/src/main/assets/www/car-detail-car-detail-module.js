(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["car-detail-car-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar *ngIf=\"showSlide == 'no'\">\n  <ion-buttons style=\"padding-left: 10px;\" slot=\"start\">\n    <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n  </ion-buttons>\n\n  <ion-title>{{model_name}}</ion-title>\n\n  <ion-buttons style=\"padding-right: 10px;\" slot=\"end\" (click)=\"share()\">\n    <img src=\"assets/img/share.svg\">\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content>\n\n  <div *ngIf=\"showSlide == 'no'\">\n\n    <ion-row>\n      <ion-col class=\"slider_main\">\n        <ion-slides pager=\"true\">\n          <ng-container *ngIf=\"veh_imgs?.length >0\">\n            <ion-slide *ngFor=\"let p of veh_imgs; let i = index\">\n              <div class=\"slide\">\n                <img (click)=\"previewImage(p)\" src=\"{{base_urls}}{{p}}\" class=\"s_img\" />\n                <div (click)=\"previewImage(p)\" class=\"pentagon\">\n                  <img src=\"assets/img/pentagon.svg\" class=\"\" />\n                  <div class=\"badge\">\n                    <span class=\"badge_dollar\">{{currency_symbol}}</span>\n                    <span class=\"badge_price\">{{charge_per_day}}</span>\n                    <span class=\"badge_per\">PER DAY</span>\n                  </div>\n                </div>\n                <div class=\"heart\">\n                  <img src=\"assets/img/heart.svg\" class=\"\" (click)=\"favourite('add_fav',cars_list_result.vehicles_id)\"\n                    *ngIf=\"favouriteVehicle == false\" />\n                  <img src=\"assets/img/heart_red.svg\" class=\"\"\n                    (click)=\"favourite('remove_fav',cars_list_result.vehicles_id)\" *ngIf=\"favouriteVehicle\" />\n                </div>\n              </div>\n            </ion-slide>\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"descr\">\n        <h3>Description</h3>\n        <p>{{description}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"descr\">\n        <h3>Owner’s Details</h3>\n        <small>About</small>\n        <p>{{about_owner}}</p>\n        <small>Lives</small>\n        <p>{{country_name}}</p>\n        <ion-row>\n          <ion-col size=\"6\" style=\"padding-left: 0px;\">\n            <small>Work</small>\n            <p>{{owner_work}}</p>\n          </ion-col>\n          <ion-col size=\"6\">\n            <small>Language</small>\n            <p>{{language_name}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"rating\">\n      <ion-col size=\"6\">\n        <h3>Ratings</h3>\n      </ion-col>\n      <ion-col size=\"6\">\n        <h3 class=\"view_all\">View All</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"stars\">\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '5'\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '4'\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '3'\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '2'\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n        </p>\n        <p class=\"star_list\" *ngIf=\"ratting_stars === '1'\">\n          <img src=\"assets/img/yellow_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n          <img src=\"assets/img/grey_star.svg\">\n        </p>\n        <span class=\"left_star\">{{total_trips}} trips</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"btn_footer\">\n      <ion-col size=\"6\">\n        <ion-button color=\"primary\" (click)=\"chatRequest()\" expand=\"block\" shape=\"round\">Chat</ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button color=\"secondary\" (click)=\"bookNow()\" expand=\"block\" shape=\"round\">Book Now</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"info\">\n      <ion-col class=\"ion-text-center\" (click)=\"info()\">\n        <img src=\"assets/img/info.svg\">\n        <p>Further Details</p>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n  <div *ngIf=\"showSlide == 'yes'\" style=\"background: #000000f5; height: 100%;\">\n\n    <ion-row>\n      <ion-col style=\"padding-left: 20px;\n    padding-top: 20px;\">\n        <img src=\"assets/img/close.png\" (click)=\"closeModel()\" style=\"height: 20px;\n        width: 20px;\n        padding: 3px;\n        border-radius: 10px;\">\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row class=\"center\">\n      <ion-col class=\"slider_main_slide\">\n        <ion-slides (ionSlideDidChange)=\"slideChanged($event)\" #slides>\n\n          <ng-container *ngIf=\"veh_imgs.length >0\">\n            <ion-slide *ngFor=\"let p of veh_imgs; let i = index\">\n\n              <img src=\"{{base_urls}}{{p}}\" class=\"s_img_slide\">\n\n            </ion-slide>\n\n          </ng-container>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row style=\"position: absolute;\n        text-align: center;\n        bottom: 25px; width: 100%;\">\n      <ion-col style=\"text-align: center;\">\n        <ion-text style=\"color: white; \">{{indexOfSLide}} of {{veh_imgs.length}}</ion-text>\n      </ion-col>\n    </ion-row>\n\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/car-detail/car-detail-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/car-detail/car-detail-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CarDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailPageRoutingModule", function() { return CarDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _car_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-detail.page */ "./src/app/car-detail/car-detail.page.ts");




var routes = [
    {
        path: '',
        component: _car_detail_page__WEBPACK_IMPORTED_MODULE_3__["CarDetailPage"]
    }
];
var CarDetailPageRoutingModule = /** @class */ (function () {
    function CarDetailPageRoutingModule() {
    }
    CarDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CarDetailPageRoutingModule);
    return CarDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/car-detail/car-detail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/car-detail/car-detail.module.ts ***!
  \*************************************************/
/*! exports provided: CarDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailPageModule", function() { return CarDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _car_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-detail-routing.module */ "./src/app/car-detail/car-detail-routing.module.ts");
/* harmony import */ var _car_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./car-detail.page */ "./src/app/car-detail/car-detail.page.ts");







var CarDetailPageModule = /** @class */ (function () {
    function CarDetailPageModule() {
    }
    CarDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _car_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarDetailPageRoutingModule"]
            ],
            declarations: [_car_detail_page__WEBPACK_IMPORTED_MODULE_6__["CarDetailPage"]]
        })
    ], CarDetailPageModule);
    return CarDetailPageModule;
}());



/***/ }),

/***/ "./src/app/car-detail/car-detail.page.scss":
/*!*************************************************!*\
  !*** ./src/app/car-detail/car-detail.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.slider_main {\n  padding: 1em 0.6em;\n}\n\n.s_img {\n  width: 100%;\n  border-radius: 14px;\n}\n\n.slide {\n  width: 100%;\n}\n\n.slider_main_slide {\n  padding: 0em 0em;\n}\n\n.s_img_slide {\n  width: 100%;\n  border-radius: 0px;\n}\n\n.slide_slide {\n  width: 100%;\n}\n\n.pentagon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n\n.badge {\n  position: absolute;\n  top: 7px;\n  left: 0px;\n  right: 0px;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n  display: block;\n}\n\n.badge_price {\n  font-size: 9px;\n  color: #c4932f;\n  position: relative;\n  top: -9px;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -11px;\n}\n\n.descr {\n  padding: 0em 0.6em;\n}\n\n.descr h3 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.descr p {\n  font-size: 12px;\n  margin-top: 0px;\n}\n\n.descr small {\n  color: #c4932f;\n}\n\n.rating {\n  padding: 0em 0.3em;\n}\n\n.view_all {\n  font-size: 10px;\n  text-align: right;\n  padding-right: 1em;\n  color: #c4932f;\n  padding-top: 1em;\n}\n\n.stars img {\n  margin-left: 4px;\n}\n\n.left_star {\n  margin-left: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n  margin-bottom: 2.5em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.heart {\n  position: absolute;\n  right: 1em;\n  top: 1.3em;\n  z-index: 10;\n}\n\n.heart img {\n  z-index: 9999;\n  width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyLWRldGFpbC9jYXItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFZSjs7QUFWQTtFQUNJLGNBQUE7QUFhSjs7QUFYQTtFQUNJLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWVKOztBQWJBO0VBQ0ksZ0JBQUE7QUFnQko7O0FBZEE7RUFDSSxnQkFBQTtBQWlCSjs7QUFmQTtFQUNJLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSw0QkFBQTtFQUNBLG9CQUFBO0FBbUJKOztBQWpCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFvQko7O0FBbEJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBcUJKOztBQW5CQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBc0JKOztBQXBCQTtFQUNJLGFBQUE7RUFFQSxXQUFBO0FBc0JKIiwiZmlsZSI6InNyYy9hcHAvY2FyLWRldGFpbC9jYXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4uc2xpZGVyX21haW4ge1xuICAgIHBhZGRpbmc6IDFlbSAwLjZlbTtcbn1cbi5zX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbn1cbi5zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXJfbWFpbl9zbGlkZSB7XG4gICAgcGFkZGluZzogMGVtIDBlbTtcbn1cbi5zX2ltZ19zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLnNsaWRlX3NsaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5wZW50YWdvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbiAgICBsZWZ0OiAxMnB4O1xufVxuXG4uYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDdweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbn1cbi5iYWRnZV9kb2xsYXIge1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLmJhZGdlX3ByaWNlIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBjb2xvcjogI2M0OTMyZjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtOXB4O1xufVxuLmJhZGdlX3BlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA2cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAtMTFweDtcbn1cbi5kZXNjciB7XG4gICAgcGFkZGluZzogMGVtIDAuNmVtO1xufVxuLmRlc2NyIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmRlc2NyIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uZGVzY3Igc21hbGwge1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xufVxuLnJhdGluZyB7XG4gICAgcGFkZGluZzogMGVtIDAuM2VtO1xufVxuLnZpZXdfYWxsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG59XG4uc3RhcnMgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmxlZnRfc3RhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5idG5fZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW0gMS4yZW0gMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNWVtO1xufVxuLmluZm8ge1xuICAgIGJhY2tncm91bmQ6ICM2ZTZkNmQ7XG4gICAgcGFkZGluZzogMC40ZW0gMGVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbn1cbi5pbmZvIHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5oZWFydCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxZW07XG4gICAgdG9wOiAxLjNlbTtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi5oZWFydCBpbWcge1xuICAgIHotaW5kZXg6IDk5OTk7XG5cbiAgICB3aWR0aDogMjRweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/car-detail/car-detail.page.ts":
/*!***********************************************!*\
  !*** ./src/app/car-detail/car-detail.page.ts ***!
  \***********************************************/
/*! exports provided: CarDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailPage", function() { return CarDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");








var CarDetailPage = /** @class */ (function () {
    function CarDetailPage(photoViewer, restService, storage, router, activatedRoute, modalCtrl, socialSharing) {
        var _this = this;
        this.photoViewer = photoViewer;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.favouriteVehicle = false;
        this.showSlide = 'no';
        this.total_trips = 0;
        this.indexOfSLide = 1;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            _this.storage.get('base_urls').then(function (base_urls) {
                _this.base_urls = base_urls;
                if (_this.response.redirect != "/notification") {
                    _this.cars_list_result = _this.response.cars_list_result;
                    _this.model_name = _this.cars_list_result.model_name;
                    _this.veh_imgs = _this.cars_list_result.veh_imgs;
                    _this.charge_per_day = _this.cars_list_result.charge_per_day;
                    _this.description = _this.cars_list_result.description;
                    _this.about_owner = _this.cars_list_result.about_owner;
                    _this.country_name = _this.cars_list_result.country_name;
                    _this.owner_work = _this.cars_list_result.owner_work;
                    _this.language_name = _this.cars_list_result.language_name;
                    _this.ratting_stars = _this.cars_list_result.ratting_stars;
                    _this.total_trips = _this.cars_list_result.total_trips;
                    _this.redirect = _this.response.redirect;
                    if (_this.cars_list_result.favourite == 'Yes') {
                        _this.favouriteVehicle = true;
                    }
                    else {
                        _this.favouriteVehicle = false;
                    }
                    console.log(_this.response);
                }
                else {
                    _this.cars_list_result = _this.response.cars_list_result;
                    _this.model_name = _this.cars_list_result.model_name;
                    _this.veh_imgs = _this.cars_list_result.vehicle_imgs;
                    _this.charge_per_day = _this.cars_list_result.charge_per_day;
                    _this.description = _this.cars_list_result.description;
                    _this.about_owner = _this.cars_list_result.about;
                    _this.country_name = _this.cars_list_result.country_name;
                    _this.owner_work = _this.cars_list_result.owner_work;
                    _this.language_name = _this.cars_list_result.language_name;
                    _this.ratting_stars = _this.cars_list_result.ratting_stars;
                    _this.redirect = _this.response.redirect;
                    if (_this.cars_list_result.favourite == 'Yes') {
                        _this.favouriteVehicle = true;
                    }
                    else {
                        _this.favouriteVehicle = false;
                    }
                    console.log(_this.response);
                }
            });
        });
    }
    CarDetailPage.prototype.ionViewWillEnter = function () {
        this.showSlide = 'no';
    };
    CarDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('base_urls').then(function (base_urls) {
            _this.base_urls = base_urls;
            _this.storage.get('user_details').then(function (user_details) {
                console.log(user_details);
                if (user_details) {
                    _this.userID = user_details.users_id;
                }
                _this.storage.get('currency_symbol').then(function (currency_symbol) {
                    console.log('currency_symbol', currency_symbol);
                    _this.currency_symbol = currency_symbol;
                });
            });
        });
    };
    CarDetailPage.prototype.share = function () {
        var text = "Owner :\t" + this.about_owner + "\n Lives : \t" + this.country_name + "\n Image : \t" + this.base_urls + this.veh_imgs[0] + "\n";
        var options = {
            message: text + "\nAppstore -> https://apps.apple.com/de/app/trans-US/id1497697781\n\nPlaystore -> https://play.google.com/store/apps/details?id=com.transus.app",
        };
        this.socialSharing.shareWithOptions(options).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    CarDetailPage.prototype.previewImage = function (p) {
        console.log('photo viewer');
        this.showSlide = 'yes';
        this.indexOfSLide = 1;
        //this.photoViewer.show(this.base_urls + '' + p);
    };
    CarDetailPage.prototype.closeModel = function () {
        this.showSlide = 'no';
    };
    CarDetailPage.prototype.slideChanged = function (e) {
        var _this = this;
        this.slides.getActiveIndex().then(function (index) {
            console.log('index -----------', index);
            _this.indexOfSLide = index + 1;
        });
    };
    // async openMapModel() {
    //   let modal = await this.modalCtrl.create({
    //     component: PhotoviewerPage,
    //     cssClass: 'map-model',
    //     backdropDismiss: false,
    //     componentProps: {
    //       veh_imgs: this.veh_imgs,
    //     }
    //   })
    //   modal.present()
    // }
    CarDetailPage.prototype.favourite = function (request, vehicle_id) {
        var _this = this;
        if (this.userID) {
            console.log(vehicle_id);
            var stringy = JSON.stringify({
                "requestType": request,
                "vehicleID": vehicle_id,
                "usersID": this.userID
            });
            console.log(stringy);
            this.restService.favourite_settings(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response.status);
                if (_this.response.status == 'error') {
                }
                else if (_this.response.status == 'success') {
                    if (request == 'add_fav') {
                        _this.favouriteVehicle = true;
                    }
                    else {
                        _this.favouriteVehicle = false;
                    }
                }
            }, function (err) {
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    CarDetailPage.prototype.chatRequest = function () {
        var _this = this;
        if (this.userID) {
            var stringy = JSON.stringify({
                "requestType": 'chatRequest',
                "otherUserId": this.cars_list_result.users_id,
                "usersID": this.userID
            });
            console.log(stringy);
            this.restService.update_messages(stringy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                console.log(_this.response);
                if (_this.response.status == 'error') {
                }
                else if (_this.response.status == 'AlreadySent' || _this.response.status == 'RequestSend') {
                    var myData = JSON.stringify({
                        otherUserId: _this.cars_list_result.users_id,
                        userID: _this.userID,
                        user_name: _this.response.user_name,
                        profile_img: _this.response.profile_img
                    });
                    console.log(myData);
                    _this.router.navigate(['/chat-detail'], {
                        queryParams: {
                            value: myData
                        },
                    });
                }
            }, function (err) {
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    CarDetailPage.prototype.goToHome = function () {
        this.router.navigate([this.redirect]);
    };
    CarDetailPage.prototype.furtherDetail = function () {
        this.router.navigate(['/further-detail']);
    };
    CarDetailPage.prototype.gotoDetail = function () {
    };
    CarDetailPage.prototype.bookNow = function () {
        if (this.userID) {
            var myData = JSON.stringify({
                vehicle_id: this.cars_list_result.vehicles_id,
                start_date: this.cars_list_result.start_date,
                end_date: this.cars_list_result.end_date,
                model_name: this.model_name
            });
            this.router.navigate(['/car-booking'], {
                queryParams: {
                    value: myData
                },
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    CarDetailPage.prototype.info = function () {
        var myData = JSON.stringify({
            cars_list_result: this.cars_list_result
        });
        this.router.navigate(['/further-detail'], {
            queryParams: {
                value: myData
            },
        });
    };
    CarDetailPage.ctorParameters = function () { return [
        { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoViewer"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"] }
    ]; };
    CarDetailPage.propDecorators = {
        slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['slides', { static: false },] }]
    };
    CarDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./car-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/car-detail/car-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./car-detail.page.scss */ "./src/app/car-detail/car-detail.page.scss")).default]
        })
    ], CarDetailPage);
    return CarDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=car-detail-car-detail-module.js.map