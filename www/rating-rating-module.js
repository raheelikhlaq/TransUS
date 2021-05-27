(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rating-rating-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"mf\" slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>User Reviews & Ratings</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar class=\"cstomHeader\" no-border-top>\n    <ion-segment [(ngModel)]=\"pet\">\n      <ion-segment-button class=\"dark_p_color\" value=\"byYou\">\n        Reviews by you\n      </ion-segment-button>\n      <ion-segment-button class=\"dark_p_color\" value=\"forYou\">\n        Reviews for you\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <div [ngSwitch]=\"pet\">\n    <ion-list *ngSwitchCase=\"'byYou'\">\n      <ng-container *ngIf=\"owns_reviews?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ion-row class=\"pdtop\" *ngFor=\"let review of owns_reviews\">\n        <ion-col size=\"2\" class=\"notify_image_main\">\n          <img src=\"{{profileImage}}\">\n        </ion-col>\n        <ion-col class=\"notify_content\" size=\"10\">\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-text-left\">\n              <p class=\"notfy_title\">{{review.user_name}}</p>\n            </ion-col>\n            <ion-col size=\"12\" class=\"ion-text-left notify_desc_main\">\n              <p class=\"notify_desc\">{{review.feedback}}</p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '5'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '4'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '3'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '2'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n              <p class=\"star_list\" *ngIf=\"review.ratting_stars === '1'\">\n                <img src=\"assets/img/yellow_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n                <img src=\"assets/img/grey_star.svg\">\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'forYou'\">\n      <div class=\"pb5\">\n        <ion-row>\n          <ion-col>\n            <h4>User Reviews</h4>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"8\">\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                5\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpFive == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpFive}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpFive > 0\" color=\"success\" class=\"pb1\" value=\"{{fillUpFive}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_five}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                4\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpFour == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpFour}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpFour > 0\"  color=\"success\" class=\"pb1\" value=\"{{fillUpFour}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_four}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                3\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpThree == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpThree}}\"></ion-progress-bar>\n                <ion-progress-bar  *ngIf=\"fillUpThree > 0\" color=\"warning\" class=\"pb1\" value=\"{{fillUpThree}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_three}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                2\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpTwo == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpTwo}}\"></ion-progress-bar>\n                <ion-progress-bar  *ngIf=\"fillUpTwo > 0\" color=\"danger\" class=\"pb1\" value=\"{{fillUpTwo}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_two}}\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"progres_bar\">\n              <ion-col size=\"1\">\n                1\n              </ion-col>\n              <ion-col size=\"1\">\n                <img src=\"assets/img/Gray_star.svg\">\n              </ion-col>\n              <ion-col size=\"8\">\n                <ion-progress-bar *ngIf=\"fillUpOne == 0\" color=\"dark\" class=\"pb1\" value=\"{{fillUpOne}}\"></ion-progress-bar>\n                <ion-progress-bar *ngIf=\"fillUpOne > 0\" color=\"danger\" class=\"pb1\" value=\"{{fillUpOne}}\"></ion-progress-bar>\n              </ion-col>\n              <ion-col size=\"2\">\n                {{count_stars_one}}\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-row>\n              <ion-col size=\"12\" class=\"ion-text-center\">\n                <img src=\"assets/img/Main_star.svg\">\n                <div class=\"pb2\">\n                  <h4>{{avg_total_rating}}</h4>\n                </div>\n                <p class=\"pb3\">Based on</p>\n                <p class=\"pb4\">{{count_total_ratings}} Reviews</p>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"pb7\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-label class=\"pb6 dark_p_color\" (click)=\"Reviews('Helpful')\">Most Helpful</ion-label>\n            <ion-label class=\"pb6 dark_p_color\" (click)=\"Reviews('Recent')\">Recent</ion-label>\n            <ion-label class=\"pb6 dark_p_color\" (click)=\"Reviews('Critical')\">Critical</ion-label>\n          </ion-col>\n        </ion-row>\n        <ng-container *ngIf=\"others_reviews?.length == 0\">\n          <ion-row>\n            <ion-col class=\"ion-text-center\">\n              <h2  class=\"dark_p_color\">Data Not Found!</h2>\n            </ion-col>\n          </ion-row>\n        </ng-container>\n        <ion-row *ngFor=\"let review of others_reviews; let i = index\">\n          <ion-col size=\"12\">\n            <p class=\"pb10\"><img src=\"assets/img/cot_Star.svg \"><span class=\"pb8\">{{review.ratting_stars}} out\n                5.0</span></p>\n            <p class=\"pb9\" class=\"feedback_{{review.ratings_id}}\">\n              {{review.feedback}} ..<span (click)=\"View('view_review',review.ratings_id,i)\">View More</span>\n            <p>\n          </ion-col>\n          <ion-col size=\"2\">\n            <img src=\"assets/img/Profile.svg\">\n          </ion-col>\n          <ion-col size=\"10\">\n            <h5 class=\"pb11\">{{review.user_name}}</h5>\n            <p class=\"pb12\">Nov 10,2020</p>\n          </ion-col>\n          <ion-col class=\"lce\" size=\"12\">\n            <img src=\"assets/img/like.svg\" (click)=\"favourite('like_review',review.ratings_id,i)\"\n              *ngIf=\"review.is_liked ==0\">\n            <img src=\"assets/img/heart_red.svg\" (click)=\"favourite('unlike_review',review.ratings_id,i)\"\n              *ngIf=\"review.is_liked ==1\">\n            <span class=\"like_count_{{review.ratings_id}}\">{{review.count_hearts}}</span>\n\n            <img src=\"assets/img/eye.svg\"><span class=\"view_count_{{review.ratings_id}}\">{{review.count_views}}</span>\n          </ion-col>\n          <div class=\"pb13\"></div>\n        </ion-row>\n\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/rating/rating-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/rating/rating-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RatingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageRoutingModule", function() { return RatingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rating.page */ "./src/app/rating/rating.page.ts");




var routes = [
    {
        path: '',
        component: _rating_page__WEBPACK_IMPORTED_MODULE_3__["RatingPage"]
    }
];
var RatingPageRoutingModule = /** @class */ (function () {
    function RatingPageRoutingModule() {
    }
    RatingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RatingPageRoutingModule);
    return RatingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/rating/rating.module.ts":
/*!*****************************************!*\
  !*** ./src/app/rating/rating.module.ts ***!
  \*****************************************/
/*! exports provided: RatingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPageModule", function() { return RatingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating-routing.module */ "./src/app/rating/rating-routing.module.ts");
/* harmony import */ var _rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rating.page */ "./src/app/rating/rating.page.ts");







var RatingPageModule = /** @class */ (function () {
    function RatingPageModule() {
    }
    RatingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingPageRoutingModule"]
            ],
            declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_6__["RatingPage"]]
        })
    ], RatingPageModule);
    return RatingPageModule;
}());



/***/ }),

/***/ "./src/app/rating/rating.page.scss":
/*!*****************************************!*\
  !*** ./src/app/rating/rating.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.progres_bar {\n  color: #b0b0b0;\n  font-size: 14px;\n}\n\n.pb1 {\n  margin-top: 6px;\n}\n\n.pb2 {\n  position: absolute;\n  top: 13%;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  color: #fff;\n}\n\n.pb3 {\n  margin: 0px;\n}\n\n.pb4 {\n  margin: 0px;\n  font-size: 13px;\n  color: #1A6BBE;\n}\n\n.pb5 {\n  padding: 0em 1em;\n}\n\n.pb6 {\n  color: #464646;\n  background: #fff;\n  box-shadow: 1px 1px 5px 1px #00000014;\n  border-radius: 10px;\n  padding: 4px 16px;\n  font-size: 13px;\n  margin-right: 10px;\n}\n\n.pb7 {\n  padding: 0.5em 1em;\n  background: #fefefe;\n  border-top: 7px solid #F7F8FA;\n}\n\n.pb8 {\n  position: relative;\n  left: 3%;\n  top: -4px;\n}\n\n.pb9 {\n  font-size: 13px;\n  margin-top: 0px;\n}\n\n.pb10 {\n  margin-bottom: 5px;\n}\n\n.pb11 {\n  margin: 0px;\n  font-size: 14px;\n  margin-top: 7px;\n}\n\n.pb12 {\n  margin: 0px;\n  color: #B0B0B0;\n  font-size: 10px;\n}\n\n.pb13 {\n  border-bottom: 2px solid #D3D3D3;\n  width: 100%;\n  height: 2px;\n  margin: 0.7em 0em;\n}\n\n.lce span {\n  font-size: 14px;\n  position: relative;\n  margin-right: 10px;\n  margin-left: 6px;\n  top: -1px;\n}\n\n.mf {\n  margin-left: 0.5em;\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #F7F8FA;\n  color: #464646;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #C4932F;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.btn_fixed {\n  position: fixed;\n  bottom: 1em;\n  left: 3em;\n  right: 3em;\n  text-align: center;\n}\n\n.notify_image_main {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.notify_image_main img {\n  border-radius: 50%;\n}\n\n.notify_content p {\n  margin: 0px;\n}\n\n.notify_desc {\n  font-size: 10px;\n  color: #0091EA;\n}\n\n.notify_desc_main {\n  padding-top: 0px;\n}\n\n.notfy_title {\n  color: #1A6BBE;\n  font-size: 10px;\n}\n\n.notify_time {\n  color: #C4932F;\n  font-size: 10px;\n}\n\n.notify_bg {\n  background: #F9F9F9;\n}\n\n.pdtop {\n  padding: 5px 0em;\n}\n\n.star_list img {\n  margin-right: 5px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmF0aW5nL3JhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxnQkFBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBYUo7O0FBWEE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFjSjs7QUFaQTtFQUNJLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWVKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFnQko7O0FBYkE7RUFDSSxrQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGtCQUFBO0FBaUJKOztBQWZBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWhCQTtFQUNJLG1CQUFBO0FBbUJKOztBQWpCQTtFQUNJLGtCQUFBO0FBb0JKOztBQWxCQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXNCSjs7QUFwQkE7RUFDRyxXQUFBO0VBQ0EsZUFBQTtBQXVCSDs7QUFyQkE7RUFDSSxjQUFBO0FBd0JKOztBQXRCQTtFQUNJLGNBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUEwQko7O0FBeEJBO0VBQ0csV0FBQTtFQUNBLGVBQUE7QUEyQkg7O0FBekJBO0VBQ0ksMkJBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksZ0JBQUE7QUE2Qko7O0FBM0JBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FBOEJKOztBQTVCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQStCSjs7QUE3QkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFnQ0o7O0FBN0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFnQ0o7O0FBOUJBO0VBQ0ksa0JBQUE7QUFpQ0o7O0FBL0JBO0VBQ0ksV0FBQTtBQWtDSjs7QUFoQ0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQW1DSjs7QUFqQ0E7RUFDSyxnQkFBQTtBQW9DTDs7QUFsQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXFDSjs7QUFuQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxtQkFBQTtBQXVDSjs7QUFyQ0E7RUFDSSxnQkFBQTtBQXdDSjs7QUF0Q0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUF5Q0oiLCJmaWxlIjoic3JjL2FwcC9yYXRpbmcvcmF0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGV7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbmlvbi1idXR0b257XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnByb2dyZXNfYmFye1xuICAgIGNvbG9yOiAjYjBiMGIwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYjF7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnBiMntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMyU7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLnBiM3tcbiAgICBtYXJnaW46IDBweDtcbn1cbi5wYjR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiMxQTZCQkU7XG59XG4ucGI1e1xuICAgIHBhZGRpbmc6IDBlbSAxZW07XG59XG4ucGI2e1xuICAgIGNvbG9yOiAjNDY0NjQ2O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMXB4ICMwMDAwMDAxNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6NHB4IDE2cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5wYjd7XG4gICAgcGFkZGluZzogMC41ZW0gMWVtO1xuICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICNGN0Y4RkE7XG59XG4ucGI4e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAzJTtcbiAgICB0b3A6IC00cHg7XG59XG4ucGI5e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ucGIxMHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHhcbn1cbi5wYjExe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG59XG4ucGIxMntcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI0IwQjBCMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4ucGIxM3tcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0QzRDNEMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBtYXJnaW46IDAuN2VtIDBlbTtcbn1cbi5sY2Ugc3BhbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIHRvcDogLTFweDtcbn1cblxuLm1me1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cbi5jc3RvbUhlYWRlcntcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG4uc2VnbWVudC1idXR0b24tY2hlY2tlZHtcbiAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xuICAgIGNvbG9yOiAjNDY0NjQ2O1xufVxuLmJnX2dyZXl7XG4gICAgYmFja2dyb3VuZDojRjlGOUY5O1xufVxuLnBkX2Jze1xuICAgIHBhZGRpbmc6IDAuN2VtIDFlbTtcbn1cbi5sYW1ibyBoNHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG4udHJpcF9kYXRlc3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDIuNGVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9kYXRlcyBwe1xuICAgbWFyZ2luOiAwcHg7IFxuICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJsdWV7XG4gICAgY29sb3I6IzFBNkJCRTtcbn1cbi5wcmltYXJ5e1xuICAgIGNvbG9yOiNDNDkzMkY7XG59XG4udHJpcF9lbmRfZGF0ZXtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDQuMmVtO1xuICAgIHBhZGRpbmctbGVmdDogMS4zZW07XG59XG4udHJpcF9lbmRfZGF0ZSBwe1xuICAgbWFyZ2luOiAwcHg7IFxuICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnN0YXIgaW1nOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5zdGFyIGltZ3tcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmdpdmVfcmF0aW5ne1xuICAgIGJhY2tncm91bmQ6ICNDNDkzMkY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuLmRhbmdlcntcbiAgICBiYWNrZ3JvdW5kOiAjRDkzQTNBO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbi5idG5fZml4ZWR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIGxlZnQ6IDNlbTtcbiAgICByaWdodDogM2VtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdGlmeV9pbWFnZV9tYWlue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ub3RpZnlfaW1hZ2VfbWFpbiBpbWd7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLm5vdGlmeV9jb250ZW50IHB7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4ubm90aWZ5X2Rlc2N7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiAjMDA5MUVBO1xufVxuLm5vdGlmeV9kZXNjX21haW57XG4gICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG4ubm90ZnlfdGl0bGV7XG4gICAgY29sb3I6IzFBNkJCRTtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4ubm90aWZ5X3RpbWV7XG4gICAgY29sb3I6I0M0OTMyRjtcbiAgICBmb250LXNpemU6IDEwcHg7ICBcbn1cbi5ub3RpZnlfYmd7XG4gICAgYmFja2dyb3VuZDogI0Y5RjlGOTtcbn1cbi5wZHRvcHtcbiAgICBwYWRkaW5nOiA1cHggMGVtO1xufVxuLnN0YXJfbGlzdCBpbWd7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/rating/rating.page.ts":
/*!***************************************!*\
  !*** ./src/app/rating/rating.page.ts ***!
  \***************************************/
/*! exports provided: RatingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingPage", function() { return RatingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");






var RatingPage = /** @class */ (function () {
    function RatingPage(restService, storage, router, menuCtrl) {
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.pet = "puppies";
        this.count_total_ratings = 0;
        this.avg_total_rating = 0;
        this.fillUpOne = 0;
        this.fillUpTwo = 0;
        this.fillUpThree = 0;
        this.fillUpFour = 0;
        this.fillUpFive = 0;
        this.pet = 'byYou';
        //console.log(Number((6.688689).toFixed(1)));
    }
    RatingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.giveRating();
        });
    };
    RatingPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    RatingPage.prototype.BookNow = function () {
        this.router.navigate(['/car-booking']);
    };
    RatingPage.prototype.giveRating = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "get_reviews",
            "usersID": this.userID
        });
        console.log(stringy);
        this.restService.reviews(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.others_reviews = _this.response.others_reviews;
            _this.owns_reviews = _this.response.owns_reviews;
            _this.critical_ratings_others = _this.response.critical_ratings_others;
            if (_this.response.review_for_you_stats) {
                _this.each_row = _this.response.review_for_you_stats.each_row;
                _this.count_total_ratings = _this.response.review_for_you_stats.count_total_ratings;
                _this.avg_total_rating = _this.response.review_for_you_stats.average;
                _this.avg_total_rating = (_this.avg_total_rating).toFixed(1);
                _this.rating_star_one = _this.each_row[0].ratting_stars;
                _this.count_stars_one = _this.each_row[0].count_stars;
                _this.fillUpOne = (_this.each_row[0].count_stars * 100) / _this.count_total_ratings;
                _this.fillUpOne = Number((_this.fillUpOne / 10).toFixed(1));
                _this.rating_star_two = _this.each_row[1].ratting_stars;
                _this.count_stars_two = _this.each_row[1].count_stars;
                _this.fillUpTwo = (_this.each_row[1].count_stars * 100) / _this.count_total_ratings;
                _this.fillUpTwo = Number((_this.fillUpTwo / 10).toFixed(1));
                _this.rating_star_three = _this.each_row[2].ratting_stars;
                _this.count_stars_three = _this.each_row[2].count_stars;
                _this.fillUpThree = (_this.each_row[2].count_stars * 100) / _this.count_total_ratings;
                _this.fillUpThree = Number((_this.fillUpThree / 10).toFixed(1));
                _this.rating_star_four = _this.each_row[3].ratting_stars;
                _this.count_stars_four = _this.each_row[3].count_stars;
                _this.fillUpFour = (_this.each_row[3].count_stars * 100) / _this.count_total_ratings;
                _this.fillUpFour = Number((_this.fillUpFour / 10).toFixed(1));
                _this.rating_star_five = _this.each_row[4].ratting_stars;
                _this.count_stars_five = _this.each_row[4].count_stars;
                _this.fillUpFive = (_this.each_row[4].count_stars * 100) / _this.count_total_ratings;
                _this.fillUpFive = Number((_this.fillUpFive / 10).toFixed(1));
            }
            console.log(_this.others_reviews);
            _this.storage.get('profile_img_url').then(function (profile_img_url) {
                _this.storage.get('base_urls').then(function (base_url) {
                    _this.profileImage = base_url + '' + profile_img_url;
                    console.log(_this.profileImage);
                });
            });
        }, function (err) {
        });
    };
    RatingPage.prototype.favourite = function (request, ratingsID, i) {
        var _this = this;
        if (this.userID) {
            console.log(ratingsID);
            var stringy = JSON.stringify({
                "requestType": request,
                "ratingsID": ratingsID,
                "usersID": this.userID
            });
            console.log(stringy);
            this.restService.reviews(stringy).subscribe(function (response) {
                _this.favResponse = JSON.parse(response['_body']);
                console.log(_this.favResponse.status);
                if (_this.favResponse.status == 'error') {
                }
                else if (_this.favResponse.status == 'success') {
                    if (request == 'like_review') {
                        var count = document.querySelector('.like_count_' + ratingsID).textContent;
                        var newCount = parseInt(count) + 1;
                        document.querySelector('.like_count_' + ratingsID).textContent = newCount.toString();
                        _this.others_reviews[i].is_liked = 1;
                        _this.others_reviews = _this.others_reviews;
                    }
                    else if (request == 'unlike_review') {
                        var count = document.querySelector('.like_count_' + ratingsID).textContent;
                        var newCount = parseInt(count) - 1;
                        document.querySelector('.like_count_' + ratingsID).textContent = newCount.toString();
                        _this.others_reviews[i].is_liked = 0;
                        _this.others_reviews = _this.others_reviews;
                    }
                }
            }, function (err) {
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    RatingPage.prototype.View = function (request, ratingsID, feedback) {
        var _this = this;
        if (this.userID) {
            console.log(feedback);
            var stringy = JSON.stringify({
                "requestType": request,
                "ratingsID": ratingsID,
                "usersID": this.userID
            });
            console.log(stringy);
            this.restService.reviews(stringy).subscribe(function (response) {
                _this.viewResponse = JSON.parse(response['_body']);
                console.log(_this.viewResponse.status);
                if (_this.viewResponse.status == 'error') {
                }
                else if (_this.viewResponse.status == 'success') {
                    if (request == 'view_review') {
                        document.querySelector('.feedback_' + ratingsID).textContent = _this.others_reviews[feedback].feedback;
                        var count = document.querySelector('.view_count_' + ratingsID).textContent;
                        var newCount = parseInt(count) + 1;
                        document.querySelector('.view_count_' + ratingsID).textContent = newCount.toString();
                    }
                }
            }, function (err) {
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    RatingPage.prototype.Reviews = function (title) {
        if (title == 'Helpful') {
            this.others_reviews = this.response.others_reviews;
        }
        else if (title == 'Recent') {
            this.others_reviews = this.response.others_reviews;
        }
        else if (title == 'Critical') {
            console.log(this.response.critical_ratings_others);
            this.others_reviews = this.response.critical_ratings_others;
            // alert(title);
        }
    };
    RatingPage.prototype.selectIndex = function (i) {
        this.sliderStartBoolean = i;
    };
    RatingPage.ctorParameters = function () { return [
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_5__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    RatingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rating.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rating/rating.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./rating.page.scss */ "./src/app/rating/rating.page.scss")).default]
        })
    ], RatingPage);
    return RatingPage;
}());



/***/ })

}]);
//# sourceMappingURL=rating-rating-module.js.map