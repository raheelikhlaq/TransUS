(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n<ion-toolbar class=\"header_pd\">\n  <ion-buttons slot=\"start\">\n    <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n  </ion-buttons>\n  <ion-searchbar (click)=\"ifFound()\" (ionChange)=\"onInput()\" placeholder=\"ENTER CITY, AIRPORT, OR ADDRESS\"></ion-searchbar>\n  <ion-buttons slot=\"end\" (click)=\"goToFilter()\" >\n    <img src=\"assets/img/filter.svg\">\n  </ion-buttons>\n </ion-toolbar>\n</ion-header>\n<ion-content>\n  <!-- <ion-toolbar class=\"cstomHeader\" no-border-top>\n    <ion-segment [(ngModel)]=\"pet\">\n      <ion-segment-button class=\"dark_p_color\"  value=\"cars\" (ionSelect)=\"getAllCars()\" (click)=\"showCar()\">\n        Rent A car   \n      </ion-segment-button>\n      <ion-segment-button class=\"dark_p_color\"  value=\"bikes\" (ionSelect)=\"getAllbikes()\">\n        Motor Delivery\n      </ion-segment-button>\n    </ion-segment>\n    hellossssss\n  </ion-toolbar> -->\n\n  <div [ngSwitch]=\"pet\">\n    <ion-list *ngSwitchCase=\"'cars'\">\n     <div class=\"horizental_slider\">\n       <ng-container *ngIf=\"notifications?.length > 0\">\n        <ion-row>\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"8\" class=\"ion-text-center\">\n            <h4 style=\"color: black;\">Notifications</h4>\n          </ion-col>\n          <ion-col size=\"2\">\n            <p class=\"view_all\" (click)=\"viewAllNotifications()\">View all</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-slides [options]=\"option1\" pager=\"true\" >\n              <ion-slide *ngFor=\"let p of notifications; let i = index\" (click)=\"accptOffer(p)\">\n                <ion-row>\n                    <ion-col size=\"2\" class=\"notify_image_main\">\n                      <img src=\"{{base_urls}}{{p.sender_img_url}}\">\n                    </ion-col>\n                    <ion-col size=\"10\">\n                      <ion-row>\n                        <ion-col size=\"6\" class=\"ion-text-left\">\n                            <p class=\"notfy_title\">{{p.sender_name}}</p>\n                        </ion-col>\n                        <ion-col size=\"6\" class=\"ion-text-right\">\n                            <p  class=\"notify_time\">{{p.time_added}}</p>\n                        </ion-col>\n                        <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\n                            <p style=\"color: black;\" class=\"notify_desc\">{{p.content}}</p>\n                        </ion-col>\n                      </ion-row>\n                    </ion-col>\n                </ion-row>\n              </ion-slide>\n            </ion-slides>\n          </ion-col>\n        </ion-row>\n       </ng-container>\n       <ng-container *ngIf=\"notifications?.length == 0\">\n        <ion-row *ngIf=\"user_name\">\n          <ion-col class=\"ion-text-center\">\n            <h3 class=\"marginZero\">Welcome, {{user_name}}</h3>\n          </ion-col>\n        </ion-row>\n       </ng-container>\n    </div>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <h3 class=\"marginZero\">What are you looking for?</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <div class=\"h_slider\">\n          <!-- car_types -->\n          <!-- New_car_types -->\n          <ion-col size=\"3\" class=\" bg ion-text-center\" *ngFor=\"let p of New_car_types; let i = index\" (click)=\"getStartIndexClick(p,i)\" [class.bg_active]=\"sliderStartBoolean == i\"> \n            <img src=\"{{p.type_icon_img}}\">\n            <p  style=\"margin-top: 1.31em;\">{{p.name}}</p>\n           \n            <!-- <ng-container *ngIf=\"i == 3\" >\n            <img src=\"{{p.type_icon_img}}\">\n            <p  style=\"margin-top: 1.31em;\">{{p.name}}</p>\n          </ng-container>\n\n          <ng-container *ngIf=\"i == 1\">\n            <img src=\"{{p.type_icon_img}}\">\n            <p  style=\"margin-top: 1.31em;\">{{p.name}}</p>\n          </ng-container>\n\n          <ng-container *ngIf=\"i == 2\">\n            <img src=\"{{p.type_icon_img}}\">\n            <p  style=\"margin-top: 1.31em;\">{{p.name}}</p>\n          </ng-container>\n\n          <ng-container *ngIf=\"i == 0\">\n            <img src=\"{{p.type_icon_img}}\">\n            <p  style=\"margin-top: 1.31em;\">{{p.name}}</p>\n          </ng-container> -->\n\n\n          </ion-col>\n          \n        </div>\n      </ion-row>\n      <div class=\"main_penta\">\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <h3 class=\"marginZero\">Top Rented</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row >\n        <div class=\"c_slider\">\n          <ng-container *ngFor=\"let p of top_rated_cars; let i = index\">\n            <ion-col size=\"4\" >\n                <div class=\"ion-text-center\" (click)=\"gotoDetail(p)\">\n                  \n                  <div class=\"pentagon\" style=\"background: url({{base_urls}}{{p.veh_imgs[0]}});\"></div>\n                  <img src=\"assets/img/Polygon_New_2.svg\" class=\"bg_uper\">\n                  <div class=\"penta_main\">\n                    <span class=\"penta_1\">{{currency_symbol}}</span>\n                    <span class=\"penta_2\">{{p.charge_per_day}}</span>\n                    <span class=\"penta_3\">per day</span>\n                    <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '5'\"> \n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                    </p>\n                    <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '4'\"> \n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                    </p>\n                    <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '3'\"> \n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                    </p>\n                    <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '2'\"> \n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                    </p>\n                    <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '1'\"> \n                      <img src=\"assets/img/yellow_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                      <img src=\"assets/img/grey_star.svg\">\n                    </p>\n                    <p class=\"penta_5\">269 trips</p>\n                  </div>\n                  <p class=\"penta_6\">{{p.model_name}}</p>\n                  <p  class=\"penta_7\">{{p.make_name}}</p>\n                </div>\n            </ion-col>\n            <ion-col size=\"4\" >\n              <div class=\"ion-text-center\" (click)=\"gotoDetail(p)\">\n                \n                <div class=\"pentagon\" style=\"background: url({{base_urls}}{{p.veh_imgs[0]}});\"></div>\n                <img src=\"assets/img/Polygon_New_2.svg\" class=\"bg_uper\">\n                <div class=\"penta_main\">\n                  <span class=\"penta_1\">{{currency_symbol}}</span>\n                  <span class=\"penta_2\">{{p.charge_per_day}}</span>\n                  <span class=\"penta_3\">per day</span>\n                  <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '5'\"> \n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                  </p>\n                  <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '4'\"> \n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                  </p>\n                  <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '3'\"> \n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                  </p>\n                  <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '2'\"> \n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                  </p>\n                  <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '1'\"> \n                    <img src=\"assets/img/yellow_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                    <img src=\"assets/img/grey_star.svg\">\n                  </p>\n                  <p class=\"penta_5\">269 trips</p>\n                </div>\n                <p class=\"penta_6\">{{p.model_name}}</p>\n                <p  class=\"penta_7\">{{p.make_name}}</p>\n              </div>\n          </ion-col>\n          <ion-col size=\"4\" >\n            <div class=\"ion-text-center\" (click)=\"gotoDetail(p)\">\n              \n              <div class=\"pentagon\" style=\"background: url({{base_urls}}{{p.veh_imgs[0]}});\"></div>\n              <img src=\"assets/img/Polygon_New_2.svg\" class=\"bg_uper\">\n              <div class=\"penta_main\">\n                <span class=\"penta_1\">{{currency_symbol}}</span>\n                <span class=\"penta_2\">{{p.charge_per_day}}</span>\n                <span class=\"penta_3\">per day</span>\n                <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '5'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                </p>\n                <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '4'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '3'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '2'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '1'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"penta_5\">269 trips</p>\n              </div>\n              <p class=\"penta_6\">{{p.model_name}}</p>\n              <p  class=\"penta_7\">{{p.make_name}}</p>\n            </div>\n        </ion-col>\n        <ion-col size=\"4\" >\n          <div class=\"ion-text-center\" (click)=\"gotoDetail(p)\">\n            \n            <div class=\"pentagon\" style=\"background: url({{base_urls}}{{p.veh_imgs[0]}});\"></div>\n            <img src=\"assets/img/Polygon_New_2.svg\" class=\"bg_uper\">\n            <div class=\"penta_main\">\n              <span class=\"penta_1\">{{currency_symbol}}</span>\n              <span class=\"penta_2\">{{p.charge_per_day}}</span>\n              <span class=\"penta_3\">per day</span>\n              <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '5'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n              </p>\n              <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '4'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '3'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '2'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"penta_4\" *ngIf=\"p.ratting_stars === '1'\"> \n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"penta_5\">269 trips</p>\n            </div>\n            <p class=\"penta_6\">{{p.model_name}}</p>\n            <p  class=\"penta_7\">{{p.make_name}}</p>\n          </div>\n      </ion-col>\n          </ng-container>\n        \n      </div>\n      </ion-row>\n      </div>\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <h3 class=\"marginZero\">The car that pays<br> for itself</h3>\n          <p class=\"ft\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. typesetting, remaining essentially unchanged.</p>\n          <ion-row>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"8\">\n              <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"goToCarList()\">List your car</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"tup\">\n        <ion-col class=\"ion-text-center\">\n          <h3 class=\"marginZero\">Invite Friends</h3>\n          <p class=\"earn\">And earn credits</p>\n          <ion-row>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"8\">\n              <ion-button color=\"primary\" expand=\"block\" shape=\"round\">Invite</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'bikes'\">\n      <ion-row>\n        <ion-col class=\"ion-text-center\">\n          <h3 class=\"marginZero\">Available for Motor Delivery </h3>\n        </ion-col>\n      </ion-row>\n      <ng-container *ngFor=\"let p of top_rated_motors; let i = index\"> \n\n      <ion-row class=\"pd_8\" *ngIf=\"i % 2 === 0\">\n        <ion-col size=\"2\">\n          <div class=\"pentagon1\" style=\"background: url({{base_urls}}{{p.insurance_img}});\"></div>\n          <img src=\"assets/img/white.svg\" class=\"bg_uper_1\">\n        </ion-col>\n        <ion-col size=\"6\" class=\"b_list4\">\n            <p class=\"b_list1\">{{p.user_name}}</p>\n            <span class=\"view_details\" (click)=\"viewMotorDetail(p)\">View Details</span>\n            <!--p class=\"b_list2\"><span class=\"b_list3\">$6</span>/delivery</p-->\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <p class=\"b_list5\">\n            <img src=\"assets/img/Star_colored.svg\">\n            <span class=\"b_list6\">({{p.ratting_stars}})</span>\n          </p>\n          <p class=\"b_list7\"  *ngIf=\"availability == 'Yes'\"><b class=\"bullet\"></b> Available</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"b_list8  pd_8\" *ngIf=\"i % 2 != 0\">\n        <ion-col size=\"2\">\n          <div class=\"pentagon1\" style=\"background: url({{base_urls}}{{p.insurance_img}});\"></div>\n          <img src=\"assets/img/white.svg\" class=\"bg_uper_1\">\n        </ion-col>\n        <ion-col size=\"6\" class=\"b_list4\">\n            <p class=\"b_list1\">{{p.user_name}}</p>\n            <span class=\"view_details\" (click)=\"viewMotorDetail(p)\">View Details</span>\n            <!--p class=\"b_list2\"><span class=\"b_list3\">$6</span>/delivery</p-->\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <p class=\"b_list5\">\n            <img src=\"assets/img/Star_colored.svg\">\n            <span class=\"b_list6\">({{p.ratting_stars}})</span>\n          </p>\n          <p class=\"b_list7\"  *ngIf=\"availability == 'Yes'\"><b class=\"bullet\"></b> Available</p>\n        </ion-col>\n      </ion-row>\n      \n    </ng-container>\n      <ion-row class=\"b_list9\">\n        <ion-col class=\"ion-text-center\">\n          <h3 class=\"marginZero\">Fast Delivery Service</h3>\n          <p class=\"ft\">Earn Extra cash for deliveries.</p>\n          <ion-row>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"8\">\n              <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"GotoList()\">List your motor</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"tup\">\n        <ion-col class=\"ion-text-center\">\n          <h3 class=\"marginZero\">Invite Friends</h3>\n          <p class=\"earn\">And earn credits</p>\n          <ion-row>\n            <ion-col size=\"2\"></ion-col>\n            <ion-col size=\"8\">\n              <ion-button color=\"primary\" expand=\"block\" shape=\"round\">Invite</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
var HomePageRoutingModule = /** @class */ (function () {
    function HomePageRoutingModule() {
    }
    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], HomePageRoutingModule);
    return HomePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #c4932f;\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #f7f8fa;\n  color: #464646;\n}\n\n.marginZero {\n  margin: 0px;\n}\n\n.bg {\n  background: #efeeee;\n  padding: 1.5em 0.8em 0.7em 0.8em;\n  border-radius: 13px;\n  margin: 8px;\n}\n\n.bg p {\n  margin: 0px;\n  font-size: 12px;\n  margin-top: 4px;\n}\n\n.bg img {\n  width: 100%;\n}\n\n.h_slider {\n  display: flex;\n  overflow: auto;\n  width: 100%;\n  margin: 0em 9px;\n}\n\n.pentagon {\n  height: 125px;\n  margin: 0 auto;\n  width: 112px;\n  background-size: cover !important;\n  -webkit-clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n  clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n}\n\n.bg_uper {\n  position: absolute;\n  top: 4px;\n  left: 3px;\n  right: 0px;\n  width: 123px;\n  text-align: center;\n}\n\n.main_penta {\n  background-color: #f9f9f9;\n  margin: 1em 0em;\n  padding: 1em 0em;\n}\n\n.ft {\n  font-size: 12px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.tup {\n  background: #f9f9f9;\n  padding: 1em 0em;\n  margin-top: 1em;\n}\n\nion-list {\n  padding-bottom: 0px;\n}\n\n.earn {\n  margin-top: 5px;\n  margin-bottom: 7px;\n  font-size: 14px;\n}\n\n.bg_active {\n  background: #c4932f;\n  color: #fff;\n}\n\n.penta_main {\n  position: absolute;\n  top: 15%;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  color: #fff;\n}\n\n.penta_1 {\n  display: block;\n}\n\n.penta_2 {\n  font-size: 20px;\n}\n\n.penta_3 {\n  display: block;\n  font-size: 10px;\n}\n\n.penta_4 {\n  margin-top: 3px;\n  margin-bottom: 0px;\n}\n\n.penta_4 img {\n  width: 11px;\n  margin-right: 2px;\n}\n\n.penta_5 {\n  margin: 0px;\n  font-size: 7px;\n}\n\n.penta_6 {\n  color: #000;\n  margin: 0px;\n  font-size: 14px;\n}\n\n.penta_7 {\n  color: #000;\n  margin: 0px;\n  font-size: 10px;\n  margin-top: 7px;\n}\n\n.c_slider {\n  display: flex;\n  overflow: auto;\n}\n\n.b_list1 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.b_list2 {\n  color: #e2ac3c;\n  margin: 0px;\n  font-size: 14px;\n  margin-left: 10px;\n}\n\n.b_list3 {\n  font-size: 20px;\n}\n\n.pentagon1 {\n  width: 100%;\n  height: 55px;\n  margin: 0 auto;\n  background-size: cover !important;\n  -webkit-clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n  clip-path: polygon(50% 0%, 100% 30%, 100% 75%, 50% 100%, 0% 75%, 0% 28%);\n}\n\n.bg_uper_1 {\n  position: absolute;\n  top: 4px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.b_list4 {\n  padding-top: 1.2em;\n}\n\n.b_list5 {\n  margin-top: 13px;\n  margin-bottom: 0px;\n}\n\n.b_list5 img {\n  width: 13px;\n  margin-right: 2px;\n}\n\n.b_list6 {\n  font-size: 12px;\n  margin-left: 5px;\n}\n\n.b_list7 {\n  margin: 0px;\n  font-size: 12px;\n  text-align: right;\n}\n\n.b_list7 span {\n  color: #e2ac3c;\n}\n\n.b_list8 {\n  background: #f7f8fa;\n  padding-bottom: 4px;\n  padding-top: 2px;\n}\n\n.b_list9 {\n  margin-top: 0.8em;\n}\n\nion-slides {\n  height: 150px;\n  padding-right: 1.8em;\n  padding-left: 0.6em;\n}\n\nion-slide p {\n  margin: 0px;\n}\n\nion-slide {\n  border-top: 1px solid #fff;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_desc {\n  font-size: 10px;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1a6bbe;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #c4932f;\n  font-size: 10px;\n}\n\n.horizental_slider {\n  background: #efeeee;\n  margin: 0em 0.5em;\n  border-radius: 12px;\n}\n\n.view_all {\n  font-size: 12px;\n  color: #c4932f;\n  text-decoration: underline;\n  margin-top: 1.6em;\n}\n\n.pd_8 {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.bullet {\n  height: 8px;\n  width: 8px;\n  background: #0ec10e;\n  margin: 0px;\n  display: inline-grid;\n  border-radius: 16px;\n}\n\n.view_all_motor {\n  font-size: 12px;\n  color: #c4932f;\n  text-decoration: underline;\n  margin-top: 1.6em;\n  margin-left: 1em;\n}\n\n.view_details {\n  color: #fff;\n  background: #e2ae42;\n  padding: 3px 7px;\n  font-size: 11px;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFPSjs7QUFMQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBRUEsZ0ZBQUE7RUFDQSx3RUFBQTtBQU9KOztBQUxBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFOQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxlQUFBO0FBVUo7O0FBUkE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFUQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBWUo7O0FBVkE7RUFDSSxtQkFBQTtBQWFKOztBQVhBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBZUo7O0FBYkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7QUFpQko7O0FBZkE7RUFDSSxlQUFBO0FBa0JKOztBQWhCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBbUJKOztBQWpCQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFzQko7O0FBcEJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBdUJKOztBQXJCQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUEwQko7O0FBeEJBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUEyQko7O0FBekJBO0VBQ0ksZUFBQTtBQTRCSjs7QUExQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdGQUFBO0VBQ0Esd0VBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQThCSjs7QUE1QkE7RUFDSSxrQkFBQTtBQStCSjs7QUE3QkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBZ0NKOztBQTlCQTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQWlDSjs7QUEvQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxjQUFBO0FBb0NKOztBQWxDQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXFDSjs7QUFuQ0E7RUFDSSxpQkFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQXVDSjs7QUFyQ0E7RUFDSSxXQUFBO0FBd0NKOztBQXRDQTtFQUNJLDBCQUFBO0FBeUNKOztBQXZDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMENKOztBQXhDQTtFQUNJLGtCQUFBO0FBMkNKOztBQXpDQTtFQUNJLGVBQUE7QUE0Q0o7O0FBMUNBO0VBQ0ksZ0JBQUE7QUE2Q0o7O0FBM0NBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUE4Q0o7O0FBNUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUErQ0o7O0FBN0NBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBZ0RKOztBQTlDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQWlESjs7QUEvQ0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBa0RKOztBQWhEQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQW1ESjs7QUFqREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQW9ESjs7QUFsREE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXFESiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIC8vIHBhZGRpbmc6IDAuM2VtIDAuMmVtO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmNzdG9tSGVhZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBjb2xvcjogIzQ2NDY0Njtcbn1cbi5tYXJnaW5aZXJvIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5iZyB7XG4gICAgYmFja2dyb3VuZDogI2VmZWVlZTtcbiAgICBwYWRkaW5nOiAxLjVlbSAwLjhlbSAwLjdlbSAwLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICAgIG1hcmdpbjogOHB4O1xufVxuLmJnIHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uYmcgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5oX3NsaWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBlbSA5cHg7XG59XG4ucGVudGFnb24ge1xuICAgIGhlaWdodDogMTI1cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDExMnB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDMwJSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI4JSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAzMCUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyOCUpO1xufVxuLmJnX3VwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDRweDtcbiAgICBsZWZ0OiAzcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB3aWR0aDogMTIzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fcGVudGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgbWFyZ2luOiAxZW0gMGVtO1xuICAgIHBhZGRpbmc6IDFlbSAwZW07XG59XG4uZnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi50dXAge1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgcGFkZGluZzogMWVtIDBlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5pb24tbGlzdCB7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5lYXJuIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5iZ19hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgY29sb3I6ICNmZmY7XG59XG4ucGVudGFfbWFpbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUlO1xuICAgIGxlZnQ6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5wZW50YV8xIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5wZW50YV8yIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4ucGVudGFfMyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLnBlbnRhXzQge1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucGVudGFfNCBpbWcge1xuICAgIHdpZHRoOiAxMXB4O1xuICAgIG1hcmdpbi1yaWdodDogMnB4O1xufVxuLnBlbnRhXzUge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogN3B4O1xufVxuLnBlbnRhXzYgeyAgIFxuICAgIGNvbG9yOiAjMDAwO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wZW50YV83IHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuLmNfc2xpZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuLmJfbGlzdDEge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5iX2xpc3QyIHtcbiAgICBjb2xvcjogI2UyYWMzYztcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYl9saXN0MyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLnBlbnRhZ29uMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMzAlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCUgMjglKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDMwJSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI4JSk7XG59XG4uYmdfdXBlcl8xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJfbGlzdDQge1xuICAgIHBhZGRpbmctdG9wOiAxLjJlbTtcbn1cbi5iX2xpc3Q1IHtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5iX2xpc3Q1IGltZyB7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uYl9saXN0NiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uYl9saXN0NyB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmJfbGlzdDcgc3BhbiB7XG4gICAgY29sb3I6ICNlMmFjM2M7XG59XG4uYl9saXN0OCB7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjhmYTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG59XG4uYl9saXN0OSB7XG4gICAgbWFyZ2luLXRvcDogMC44ZW07XG59XG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuOGVtO1xuICAgIHBhZGRpbmctbGVmdDogMC42ZW07XG59XG5pb24tc2xpZGUgcCB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG5pb24tc2xpZGUge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xufVxuLm5vdGlmeV9pbWFnZV9tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm90aWZ5X2ltYWdlX21haW4gaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubm90aWZ5X2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5ub3RpZnlfZGVzY19tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLm5vdGZ5X3RpdGxlIHtcbiAgICBjb2xvcjogIzFhNmJiZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4ubm90aWZ5X3RpbWUge1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5ob3JpemVudGFsX3NsaWRlciB7XG4gICAgYmFja2dyb3VuZDogI2VmZWVlZTtcbiAgICBtYXJnaW46IDBlbSAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnZpZXdfYWxsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICNjNDkzMmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgbWFyZ2luLXRvcDogMS42ZW07XG59XG4ucGRfOCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uYnVsbGV0IHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICB3aWR0aDogOHB4O1xuICAgIGJhY2tncm91bmQ6ICMwZWMxMGU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbn1cbi52aWV3X2FsbF9tb3RvciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIG1hcmdpbi10b3A6IDEuNmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4udmlld19kZXRhaWxzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZTJhZTQyO1xuICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4vLyAgICAgLnBlbnRhZ29uIHtcbi8vICAgICAgICAgd2lkdGg6IDk2JTtcbi8vICAgICB9XG4vLyAgICAgLmJnX3VwZXIge1xuLy8gICAgICAgICBsZWZ0OiA0cHg7XG4vLyAgICAgfVxuLy8gfVxuLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbi8vICAgICAucGVudGFnb24ge1xuLy8gICAgICAgICB3aWR0aDogOTglO1xuLy8gICAgIH1cbi8vICAgICAuYmdfdXBlciB7XG4vLyAgICAgICAgIGxlZnQ6IDFweDtcbi8vICAgICB9XG4vLyB9XG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuLy8gICAgIC5wZW50YWdvbiB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBoZWlnaHQ6IDExMHB4O1xuLy8gICAgIH1cbi8vICAgICAuYmdfdXBlciB7XG4vLyAgICAgICAgIGxlZnQ6IDFweDtcbi8vICAgICB9XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _accept_offer_accept_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../accept-offer/accept-offer.page */ "./src/app/accept-offer/accept-offer.page.ts");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");








var HomePage = /** @class */ (function () {
    function HomePage(loadingController, storage, router, menuCtrl, restService, popoverController, oneSignal) {
        this.loadingController = loadingController;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.restService = restService;
        this.popoverController = popoverController;
        this.oneSignal = oneSignal;
        this.pet = "puppies";
        this.option1 = {
            loop: true,
            direction: 'vertical',
            slidesPerView: 2
        };
        this.userID = '';
        this.baseUrl = 'https://app.transusdrives.com/';
        this.currencies_id = '';
        this.New_car_types = [];
        this.pet = 'cars';
        this.storage.set('base_urls', this.baseUrl);
    }
    HomePage.prototype.ngOnInit = function () {
        // alert("this is new build")
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.present();
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details, "calling from home");
            if (user_details) {
                _this.userDetail = user_details;
                var get_Setting = JSON.stringify({
                    requestType: 'get_core_settings'
                });
                _this.restService.CoreSettingOneSignal(get_Setting).subscribe(function (res) {
                    console.log(res, "from onesignal");
                    _this.oneDataSet = JSON.parse(res['_body']);
                    console.log(_this.oneDataSet, "getiing from oneset");
                    _this.oneSignal.startInit(_this.oneDataSet.onesignal_app_key, _this.oneDataSet.onesignal_server_id);
                    _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.Notification);
                    _this.oneSignal.handleNotificationReceived().subscribe(function () {
                    });
                    _this.oneSignal.handleNotificationOpened().subscribe(function (res) {
                        console.log(res, "received notiiiiiiiiiiiiify");
                    });
                    _this.oneSignal.endInit();
                    _this.oneSignal.getIds().then(function (id) {
                        ////console.log(id);
                        _this.oneSignalData = id;
                        //   alert("one signal -: " + JSON.stringify(this.oneSignalData));
                        _this.OneSignal_userid = _this.oneSignalData.userId;
                        _this.oneSignal_pushToken = _this.oneSignalData.pushToken;
                        console.log(_this.OneSignal_userid);
                        //   alert("one signal -: " + JSON.stringify(this.OneSignal_userid));
                        //  alert("one signal -: " + JSON.stringify(this.oneSignal_pushToken));
                        console.log(_this.oneSignal_pushToken);
                        console.log(_this.oneSignalData);
                        var update = JSON.stringify({
                            requestType: 'user',
                            email: _this.userDetail.email,
                            oneSignalID: _this.OneSignal_userid
                        });
                        _this.restService.upDateOnesignal(update).subscribe(function (res) {
                            console.log(res, " update one signal");
                        }, function (err) {
                            console.log(err);
                        });
                    });
                }, function (err) {
                    console.log(err);
                });
                _this.userID = user_details.users_id;
                _this.currencies_id = user_details.currencies_id;
            }
        });
        this.storage.get('base_urls').then(function (base_urls) {
            _this.base_urls = base_urls;
            _this.storage.get('user_details').then(function (user_details) {
                _this.storage.get('currency_symbol').then(function (currency_symbol) {
                    _this.currency_symbol = currency_symbol;
                    console.log('currency_symbol', _this.currency_symbol);
                    console.log(user_details);
                    if (user_details) {
                        _this.userID = user_details.users_id;
                        _this.user_name = user_details.user_name;
                        _this.currencyID = user_details.currencies_id;
                        _this.homeData();
                    }
                    else {
                        _this.userID = '';
                        console.log('call');
                        _this.getDropDownData();
                    }
                    // this.homeData();
                    // this.getStartIndex(0);
                });
            });
        });
    };
    HomePage.prototype.showCar = function () {
        this.getStartIndex(this.sliderStartBoolean);
    };
    HomePage.prototype.getStartIndex = function (i) {
        var _this = this;
        console.log(this.sliderStartBoolean, "line");
        if (this.sliderStartBoolean == undefined) {
            this.sliderStartBoolean = i;
            setTimeout(function () {
                document.querySelector('.bg_active img').setAttribute('src', _this.New_car_types[_this.sliderStartBoolean].type_icon_img);
            }, 50);
        }
        else {
            document.querySelector('.bg_active img').setAttribute('src', this.New_car_types[this.sliderStartBoolean].type_icon_img);
        }
        console.log(i);
        this.sliderStartBoolean = i;
        setTimeout(function () {
            console.log(i);
            document.querySelector('.bg_active img').setAttribute('src', _this.New_car_types[_this.sliderStartBoolean].white_icon_img);
        }, 50);
    };
    HomePage.prototype.getStartIndexClick = function (data, i) {
        var _this = this;
        console.log(this.sliderStartBoolean, "line");
        console.log(data);
        console.log(data.car_types_id);
        if (this.sliderStartBoolean == undefined) {
            this.sliderStartBoolean = i;
            setTimeout(function () {
                document.querySelector('.bg_active img').setAttribute('src', _this.New_car_types[_this.sliderStartBoolean].type_icon_img);
                // this.ifFound();
                _this.filterFound(data.car_types_id);
            }, 50);
        }
        else {
            document.querySelector('.bg_active img').setAttribute('src', this.New_car_types[this.sliderStartBoolean].type_icon_img);
            // this.ifFound();
            this.filterFound(data.car_types_id);
        }
    };
    HomePage.prototype.getDropDownData = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "currencies"
        });
        console.log(stringy);
        this.restService.getDdlData(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.storage.set('currency_symbol', _this.response.default_currency.symbol);
            _this.currencyID = _this.response.default_currency.currencies_id;
            console.log(_this.response, "currency id");
            _this.homeData();
        }, function (err) {
        });
    };
    HomePage.prototype.homeData = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": 'home_page',
            "usersID": this.userID,
            "currencyID": this.currencyID
        });
        console.log(stringy);
        this.restService.homeData(stringy).subscribe(function (response) {
            _this.New_car_types = [];
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            _this.car_types = _this.response.car_types;
            console.log(_this.car_types, "types");
            if (_this.car_types[3].name == 'Car') {
                _this.New_car_types.push(_this.car_types[3]);
                console.log(_this.New_car_types, "finnal");
                if (_this.car_types[1].name == 'Suv') {
                    _this.New_car_types.push(_this.car_types[1]);
                    if (_this.car_types[0].name == 'Van') {
                        _this.New_car_types.push(_this.car_types[0]);
                        if (_this.car_types[2].name == 'Mini Van') {
                            _this.New_car_types.push(_this.car_types[2]);
                            console.log(_this.New_car_types, "finnal");
                        }
                    }
                }
            }
            _this.top_rated_cars = _this.response.top_rated_cars.cars_list_result;
            _this.top_rated_motors = _this.response.top_rated_motors.motors_list_result;
            var stringfy = JSON.stringify({
                "requestType": 'get_all',
                "usersID": _this.userID,
                "limit": 4,
                "offset": 0,
                'readFilter': "Unread"
            });
            console.log(stringy);
            _this.restService.notifications(stringfy).subscribe(function (response) {
                _this.response = JSON.parse(response['_body']);
                if (_this.sliderStartBoolean) {
                    _this.getStartIndex(_this.sliderStartBoolean);
                }
                else {
                    _this.getStartIndex(0);
                }
                _this.dismiss();
                _this.notifications = _this.response.notifications;
                // this.sliderStartBoolean = 0;
                // this.getStartIndex(0);
                console.log(_this.response);
            }, function (err) {
                _this.dismiss();
            });
        }, function (err) {
            _this.dismiss();
        });
        var SearchingData = JSON.stringify({
            "currencyID": this.currencyID,
            "requestType": "all_veh",
            "userID": this.userID
        });
        this.restService.allVehicles(SearchingData).subscribe(function (resSearching) {
            console.log(JSON.parse(resSearching['_body']), "searching DAta");
            _this.responsess = JSON.parse(resSearching['_body']);
            console.log(_this.responsess, "from body ");
            if (_this.responsess.status == 'NotFound') {
                // this.presentToast('Data Not Found!');
            }
            else if (_this.responsess.status == 'Found') {
                console.log(_this.responsess.all_approved_cars);
            }
        });
    };
    HomePage.prototype.ifFound = function () {
        var myData = JSON.stringify({
            cars_list_result: this.responsess.all_approved_cars
        });
        this.router.navigate(['/car-list'], {
            queryParams: {
                value: myData
            },
        });
    };
    HomePage.prototype.filterFound = function (id) {
        var _this = this;
        var data = JSON.stringify({
            "currencyID": this.currencyID,
            "requestType": "select_veh",
            "carTypeID": id,
            "userID": this.userID
        });
        console.log(data);
        this.restService.filterSearching(data).subscribe(function (res) {
            _this.filterCars = res;
            console.log(JSON.parse(_this.filterCars['_body']));
            _this.allser = JSON.parse(_this.filterCars['_body']);
            var myData = JSON.stringify({
                cars_list_result: _this.allser.selected_approved_car
            });
            _this.router.navigate(['/car-list'], {
                queryParams: {
                    value: myData
                },
            });
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.gotoDetail = function (data) {
        console.log(data);
        var myData = JSON.stringify({
            cars_list_result: data,
            redirect: '/'
        });
        this.router.navigate(['/car-detail'], {
            queryParams: {
                value: myData
            },
        });
    };
    HomePage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    HomePage.prototype.carDetail = function () {
        this.router.navigate(['/car-detail']);
    };
    HomePage.prototype.goToFilter = function () {
        this.router.navigate(['/filters']);
    };
    HomePage.prototype.GotoList = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            if (user_details) {
                _this.router.navigate(['/list-your-bike']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    HomePage.prototype.goToCarList = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            if (user_details) {
                _this.router.navigate(['/list-your-car']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    HomePage.prototype.viewMotorDetail = function (p) {
        var myData = JSON.stringify({
            motor_detail: p
        });
        console.log(myData);
        this.router.navigate(['/view-bike-detail'], {
            queryParams: {
                value: myData
            },
        });
    };
    HomePage.prototype.refer = function () {
        window.open("https://play.google.com/store/apps", '_system', 'location=yes');
    };
    HomePage.prototype.viewAllNotifications = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            if (user_details) {
                _this.router.navigate(['/view-all-notifications']);
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    HomePage.prototype.present = function () {
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
    HomePage.prototype.dismiss = function () {
        this.loading.dismiss();
    };
    HomePage.prototype.accptOffer = function (p) {
        console.log(p, "ok nice notificatino");
        if (p.type_id == '1') {
            this.router.navigate(['/chat-list']);
        }
        if (p.type_id == '2') {
            this.router.navigate(['/booking-list']);
        }
        if (p.type_id == '3') {
            this.router.navigate(['/chat-list']);
        }
        if (p.type_id == '5') {
            this.router.navigate(['/other-booking-list']);
        }
        if (p.type_id == '6') {
            this.router.navigate(['/listed-car']);
        }
        if (p.type_id == '7') {
            this.router.navigate(['/listed-car']);
        }
        if (p.type_id == '8') {
            this.router.navigate(['/listed-car']);
        }
        if (p.type_id == '9') {
            this.router.navigate(['/other-booking-list']);
        }
        if (p.type_id == '10') {
            this.router.navigate(['/other-booking-list']);
        }
        if (p.type_id == '11') {
            this.router.navigate(['//other-booking-list']);
        }
        if (p.type_id == '12') {
            this.router.navigate(['/other-booking-list']);
        }
        if (p.type_id == '13') {
            this.router.navigate(['/listed-car']);
        }
        // if (p.offer_id) {
        //   var stringy = JSON.stringify({
        //     "requestType": "check_offer_by_id",
        //     "customerID": this.userID,
        //     "offerID": p.offer_id,
        //     "currencyID": this.currencies_id
        //   });
        //   this.restService.inquire_charges(stringy).subscribe(response => {
        //     this.response = JSON.parse(response['_body']);
        //     console.log(this.response);
        //     if (this.response.status == 'NotFound') {
        //       console.log('NotFound');
        //     } else if (this.response.status == 'Found') {
        //       this.offerPopup(this.response.offers, p.offer_id);
        //     }
        //   }, err => {
        //   });
        // }
        // if (p.type_id == '1' || p.type_id == '3') {
        //   console.log('msggggggggggg', p);
        //   var myData = JSON.stringify({
        //     userID: p.receiver_id,
        //     otherUserId: p.sender_id,
        //     user_name: p.sender_name,
        //     profile_img: p.sender_img_url
        //   });
        //   console.log(myData);
        //   this.router.navigate(['/chat-detail'], {
        //     queryParams: {
        //       value: myData
        //     }
        //   });
        // }
    };
    HomePage.prototype.offerPopup = function (p, offer_id) {
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
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_3__["OneSignal"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map