(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["other-booking-list-other-booking-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-booking-list/other-booking-list.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/other-booking-list/other-booking-list.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header_pd\">\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Arrow.svg\" (click)=\"back()\">\n    </ion-buttons>\n    <ion-title>Bookings</ion-title>\n    \n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar class=\"cstomHeader\" no-border-top>\n    <ion-segment [(ngModel)]=\"pet\">\n      <ion-segment-button class=\"dark_p_color\" value=\"previous\" (ionSelect)=\"getPrevious()\">\n        Previous  \n      </ion-segment-button>\n      <ion-segment-button class=\"dark_p_color\"  value=\"upcoming\" (ionSelect)=\"getUpcoming()\">\n       Upcoming\n      </ion-segment-button>\n      <ion-segment-button class=\"dark_p_color\"  value=\"pending\" (ionSelect)=\"getUpcoming()\">\n        Pending\n       </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n  <div [ngSwitch]=\"pet\">\n    <ion-list *ngSwitchCase=\"'previous'\">\n      <ng-container *ngIf=\"previousBooking?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of previousBooking; let i = index\">\n      <ng-container *ngIf=\"p.bookings_id\">\n        <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n          <ion-col size=\"4\" class=\"lambo\">\n              <h4>Car Name</h4>\n              <img src=\"assets/img/Lambo.svg\">\n          </ion-col>\n          <ion-col class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\">Trip Dates</p>\n              <p class=\"primary\">Start Date</p>\n              <p>{{p.start_date}}</p>\n              <p class=\"primary\">Total Cost</p>\n              <p>{{currency_symbol}}{{p.trip_cost}}</p>\n              <p class=\"give_rating\" (click)=\"giveRating(p.bookings_id)\" *ngIf=\"p.rated =='No'\">Give Ratings</p>\n              <div class=\"star\" *ngIf=\"p.rated =='Yes'\">\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === '5'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 4\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 3\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 2\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 1\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n              </div>\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n          <ion-col size=\"4\" class=\"lambo\">\n              <h4>Car Name</h4>\n              <img src=\"assets/img/Lambo.svg\">\n          </ion-col>\n          <ion-col class=\"trip_dates\" size=\"4\">\n              <p class=\"blue\">Trip Dates</p>\n              <p class=\"primary\">Start Date</p>\n              <p>{{p.start_date}}</p>\n              <p class=\"primary\">Total Cost</p>\n              <p>{{currency_symbol}}{{p.trip_cost}}</p>\n              <p class=\"give_rating\" (click)=\"giveRating(p.bookings_id)\" *ngIf=\"p.rated =='No'\">Give Ratings</p>\n              <div class=\"star\" *ngIf=\"p.rated =='Yes'\">\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === '5'\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 4\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 3\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 2\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n                <p class=\"star_list\" *ngIf=\"p.ratting_stars === 1\"> \n                  <img src=\"assets/img/yellow_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                  <img src=\"assets/img/grey_star.svg\">\n                </p>\n              </div>\n          </ion-col>\n          <ion-col class=\"trip_end_date\" size=\"4\">\n            <p class=\"primary\"> End Date</p>\n            <p>{{p.end_date}}</p>\n          </ion-col>\n        </ion-row> \n      </ng-container>\n      </ng-container> \n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'upcoming'\">\n      <ng-container *ngIf=\"upcomingBooking?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of upcomingBooking; let i = index\">\n      <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n        <ion-col size=\"4\" class=\"lambo\">\n            <h4>Car Name</h4>\n            <img src=\"assets/img/Lambo.svg\">\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date}}</p>\n            <p class=\"primary\">Total Cost</p>\n            <p>{{currency_symbol}}{{p.trip_cost}}</p>\n            <p class=\"danger\" (click)=\"cancelBooking(p)\">Cancel</p>\n            \n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\"> End Date</p>\n          <p>{{p.end_date}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n        <ion-col size=\"4\" class=\"lambo\">\n            <h4>Car Name</h4>\n            <img src=\"assets/img/Lambo.svg\">\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date}}</p>\n            <p class=\"primary\">Total Cost</p>\n            <p>{{currency_symbol}}{{p.trip_cost}}</p>\n            <p class=\"danger\" (click)=\"cancelBooking(p.bookings_id)\">Cancel</p>\n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\"> End Date</p>\n          <p>{{p.end_date}}</p>\n        </ion-col>\n      </ion-row> \n    </ng-container>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'pending'\">\n      <ng-container *ngIf=\"pending_bookings?.length == 0\">\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n              <h2>Data Not Found!</h2>\n          </ion-col>\n        </ion-row>\n      </ng-container>\n      <ng-container *ngFor=\"let p of pending_bookings; let i = index\">\n      <ion-row class=\"pd_bs\" *ngIf=\"i % 2 === 0\">\n        <ion-col size=\"4\" class=\"lambo\">\n            <h4>Car Name</h4>\n            <img src=\"assets/img/Lambo.svg\">\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date}}</p>\n            <p class=\"primary\">Total Cost</p>\n            <p>{{currency_symbol}}{{p.trip_cost}}</p>\n            <p class=\"danger\" (click)=\"cancelBooking(p.bookings_id)\">Cancel</p>\n            \n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\"> End Date</p>\n          <p>{{p.end_date}}</p>\n          <p class=\"primary\"> Booking Status</p>\n          <p>{{p.status}}</p>\n          <p *ngIf=\"p.status == 'Pending' \" (click)=\"pendingAlert()\"  class=\"give_rating-status-panding\"  >Pending</p>\n          <p   *ngIf=\"p.status == 'Accepted' \" (click)=\"paynow(p)\"  class=\"give_rating-status-approved\"  >Pay Now</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"pd_bs bg_grey\" *ngIf=\"i % 2 != 0\">\n        <ion-col size=\"4\" class=\"lambo\">\n            <h4>Car Name</h4>\n            <img src=\"assets/img/Lambo.svg\">\n        </ion-col>\n        <ion-col class=\"trip_dates\" size=\"4\">\n            <p class=\"blue\">Trip Dates</p>\n            <p class=\"primary\">Start Date</p>\n            <p>{{p.start_date}}</p>\n            <p class=\"primary\">Total Cost</p>\n            <p>{{currency_symbol}}{{p.trip_cost}}</p>\n            <p class=\"danger\" (click)=\"cancelBooking(p.bookings_id)\">Cancel</p>\n         \n        </ion-col>\n        <ion-col class=\"trip_end_date\" size=\"4\">\n          <p class=\"primary\"> End Date</p>\n          <p>{{p.end_date}}</p>\n          <p class=\"primary\"> Booking Status</p>\n          <p>{{p.status}}</p>\n          <p *ngIf=\"p.status == 'Pending' \" (click)=\"pendingAlert()\" class=\"give_rating-status-panding\"  >Pending</p>\n          <p *ngIf=\"p.status == 'Accepted' \"  (click)=\"paynow(p)\" class=\"give_rating-status-approved\"  >Pay Now</p>\n        </ion-col>\n      </ion-row> \n    </ng-container>\n    </ion-list>\n\n\n\n  </div>\n \n</ion-content>\n<ion-footer>\n  <div class=\"btn_fixed\">\n    <ion-button color=\"secondary\" expand=\"block\" shape=\"round\" (click)=\"BookNow()\">Book Now</ion-button>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/other-booking-list/other-booking-list-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/other-booking-list/other-booking-list-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OtherBookingListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBookingListPageRoutingModule", function() { return OtherBookingListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _other_booking_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./other-booking-list.page */ "./src/app/other-booking-list/other-booking-list.page.ts");




var routes = [
    {
        path: '',
        component: _other_booking_list_page__WEBPACK_IMPORTED_MODULE_3__["OtherBookingListPage"]
    }
];
var OtherBookingListPageRoutingModule = /** @class */ (function () {
    function OtherBookingListPageRoutingModule() {
    }
    OtherBookingListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], OtherBookingListPageRoutingModule);
    return OtherBookingListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/other-booking-list/other-booking-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/other-booking-list/other-booking-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: OtherBookingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBookingListPageModule", function() { return OtherBookingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _other_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./other-booking-list-routing.module */ "./src/app/other-booking-list/other-booking-list-routing.module.ts");
/* harmony import */ var _other_booking_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-booking-list.page */ "./src/app/other-booking-list/other-booking-list.page.ts");







var OtherBookingListPageModule = /** @class */ (function () {
    function OtherBookingListPageModule() {
    }
    OtherBookingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _other_booking_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtherBookingListPageRoutingModule"]
            ],
            declarations: [_other_booking_list_page__WEBPACK_IMPORTED_MODULE_6__["OtherBookingListPage"]]
        })
    ], OtherBookingListPageModule);
    return OtherBookingListPageModule;
}());



/***/ }),

/***/ "./src/app/other-booking-list/other-booking-list.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/other-booking-list/other-booking-list.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #C4932F;\n}\n\n.header_pd {\n  padding: 0.8em 0.1em 0 0;\n}\n\n@media only screen and (min-height: 800px) {\n  .header_pd {\n    padding: 3em 0.1em 8px 0;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\n.cstomHeader {\n  --background: #fff;\n}\n\n.segment-button-checked {\n  background: #F7F8FA;\n  color: #464646;\n}\n\n.bg_grey {\n  background: #F9F9F9;\n}\n\n.pd_bs {\n  padding: 0.7em 1em;\n}\n\n.lambo h4 {\n  margin: 0px;\n  margin-bottom: 3px;\n}\n\n.trip_dates {\n  font-size: 10px;\n  padding-top: 2.4em;\n  padding-left: 1.3em;\n}\n\n.trip_dates p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.blue {\n  color: #1A6BBE;\n}\n\n.primary {\n  color: #C4932F;\n}\n\n.trip_end_date {\n  font-size: 10px;\n  padding-top: 4.2em;\n  padding-left: 1.3em;\n}\n\n.trip_end_date p {\n  margin: 0px;\n  margin-top: 6px;\n}\n\n.star img:first-child {\n  margin-left: 0px !important;\n}\n\n.star img {\n  margin-left: 4px;\n}\n\n.give_rating {\n  background: #C4932F;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.danger {\n  background: #D93A3A;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.btn_fixed {\n  position: absolute;\n  bottom: 1em;\n  left: 3em;\n  right: 3em;\n  width: 75%;\n  text-align: center;\n}\n\n.give_rating-status-panding {\n  background: #0d0f0b;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n\n.give_rating-status-approved {\n  background: #82d93a;\n  color: #fff;\n  padding: 0.7em;\n  border-radius: 25px;\n  width: 100%;\n  text-align: center;\n  position: relative;\n  margin: 0px;\n  margin-top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXItYm9va2luZy1saXN0L290aGVyLWJvb2tpbmctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7RUFDTjtBQUNGOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBREE7RUFDSSxtQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5BO0VBQ0csV0FBQTtFQUNBLGVBQUE7QUFTSDs7QUFQQTtFQUNJLGNBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDRyxXQUFBO0VBQ0EsZUFBQTtBQWFIOztBQVhBO0VBQ0ksMkJBQUE7QUFjSjs7QUFaQTtFQUNJLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFnQko7O0FBZEE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFpQko7O0FBZkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFmQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLDJCQUFBO0FBaUJKOztBQWJBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsMkJBQUE7QUFlSiIsImZpbGUiOiJzcmMvYXBwL290aGVyLWJvb2tpbmctbGlzdC9vdGhlci1ib29raW5nLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjQzQ5MzJGO1xuICAgLy8gcGFkZGluZzogMC4zZW0gMC41ZW07XG59XG4uaGVhZGVyX3Bke1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuMWVtIDAgMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICAuaGVhZGVyX3BkIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgIH1cbn1cbmlvbi10aXRsZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuaW9uLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAtLXBhZGRpbmctdG9wOiAxLjVlbTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY3N0b21IZWFkZXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG4gICAgYmFja2dyb3VuZDogI0Y3RjhGQTtcbiAgICBjb2xvcjogIzQ2NDY0Njtcbn1cbi5iZ19ncmV5e1xuICAgIGJhY2tncm91bmQ6I0Y5RjlGOTtcbn1cbi5wZF9ic3tcbiAgICBwYWRkaW5nOiAwLjdlbSAxZW07XG59XG4ubGFtYm8gaDR7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLnRyaXBfZGF0ZXN7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyLjRlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xufVxuLnRyaXBfZGF0ZXMgcHtcbiAgIG1hcmdpbjogMHB4OyBcbiAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ibHVle1xuICAgIGNvbG9yOiMxQTZCQkU7XG59XG4ucHJpbWFyeXtcbiAgICBjb2xvcjojQzQ5MzJGO1xufVxuLnRyaXBfZW5kX2RhdGV7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiA0LjJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuM2VtO1xufVxuLnRyaXBfZW5kX2RhdGUgcHtcbiAgIG1hcmdpbjogMHB4OyBcbiAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5zdGFyIGltZzpmaXJzdC1jaGlsZHtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uc3RhciBpbWd7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5naXZlX3JhdGluZ3tcbiAgICBiYWNrZ3JvdW5kOiAjQzQ5MzJGO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cbi5kYW5nZXJ7XG4gICAgYmFja2dyb3VuZDogI0Q5M0EzQTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYnRuX2ZpeGVke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFlbTtcbiAgICBsZWZ0OiAzZW07XG4gICAgcmlnaHQ6IDNlbTtcbiAgICB3aWR0aDogNzUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdpdmVfcmF0aW5nLXN0YXR1cy1wYW5kaW5ne1xuICAgIGJhY2tncm91bmQ6ICMwZDBmMGI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cblxuLmdpdmVfcmF0aW5nLXN0YXR1cy1hcHByb3ZlZHtcbiAgICBiYWNrZ3JvdW5kOiAjODJkOTNhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/other-booking-list/other-booking-list.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/other-booking-list/other-booking-list.page.ts ***!
  \***************************************************************/
/*! exports provided: OtherBookingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherBookingListPage", function() { return OtherBookingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _give_rating_give_rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../give-rating/give-rating.page */ "./src/app/give-rating/give-rating.page.ts");
/* harmony import */ var _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../action-booking/action-booking.page */ "./src/app/action-booking/action-booking.page.ts");








var OtherBookingListPage = /** @class */ (function () {
    function OtherBookingListPage(toastController, popoverController, restService, storage, router, menuCtrl, activatedRoute, alertController) {
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.pet = "puppies";
    }
    OtherBookingListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.valres = res.value;
            console.log(res);
            console.log(_this.valres);
            if (_this.valres) {
                if (_this.valres == "pending") {
                    _this.pet = 'pending';
                }
                else if (_this.valres == "upcoming") {
                    _this.pet = 'upcoming';
                }
            }
            else {
                _this.pet = 'previous';
                console.log('previous');
            }
        });
        this.storage.get('user_details').then(function (user_details) {
            console.log(user_details);
            _this.userID = user_details.users_id;
            _this.Email = user_details.email;
            _this.currencyID = user_details.currencies_id;
            _this.getCarList();
            _this.storage.get('base_urls').then(function (base_url) {
                _this.base_url = base_url;
            });
            _this.storage.get('currency_symbol').then(function (currency_symbol) {
                _this.currency_symbol = currency_symbol;
            });
        });
    };
    OtherBookingListPage.prototype.ngOnInit = function () {
    };
    OtherBookingListPage.prototype.giveRating = function (bookingId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _give_rating_give_rating_page__WEBPACK_IMPORTED_MODULE_6__["GiveRatingPage"],
                            translucent: true,
                            componentProps: {
                                "data": bookingId,
                                "booking": 'cancel_booking'
                            },
                        })];
                    case 1:
                        popover = _a.sent();
                        popover.onWillDismiss().then(function (data) {
                            console.log(data);
                            console.log(data.data.val);
                            if (data.data.val == 'ok') {
                                _this.getCarList();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OtherBookingListPage.prototype.getCarList = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "others_cars",
            "usersID": this.userID,
            "currencyID": this.currencyID
        });
        console.log(stringy);
        this.restService.bookings(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            console.log(_this.response);
            _this.previousBooking = _this.response.previous_bookings;
            if (_this.previousBooking[0].bookings_id == null) {
                _this.previousBooking = [];
            }
            _this.upcomingBooking = _this.response.upcoming_bookings;
            if (_this.upcomingBooking.length != 0) {
                if (_this.upcomingBooking[0].bookings_id == null || undefined) {
                    _this.upcomingBooking = [];
                }
            }
            _this.pending_bookings = _this.response.pending_bookings;
            console.log(_this.pending_bookings);
            //  if(this.pending_bookings[0].bookings_id == null){
            //   this.upcomingBooking = [];
            //  }
        }, function (err) {
        });
    };
    OtherBookingListPage.prototype.cancelBooking = function (booking) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.data = booking;
                        return [4 /*yield*/, this.popoverController.create({
                                component: _action_booking_action_booking_page__WEBPACK_IMPORTED_MODULE_7__["ActionBookingPage"],
                                translucent: true,
                                componentProps: {
                                    "data": this.data.bookings_id,
                                    "booking": 'cancel_booking',
                                    "ownerID": this.data.veh_users_id,
                                    "userID": this.data.booked_by_users_id,
                                },
                            })];
                    case 1:
                        popover = _a.sent();
                        popover.onWillDismiss().then(function (data) {
                            console.log(data);
                            console.log(data.data.val);
                            if (data.data.val == 'ok') {
                                _this.getCarList();
                            }
                        });
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OtherBookingListPage.prototype.paynow = function (bookingdetails) {
        console.log(bookingdetails);
        console.log(bookingdetails.veh_imgs);
        var myData = JSON.stringify({
            booking_details: bookingdetails,
            vehicle_imgs: bookingdetails.veh_imgs
        });
        this.router.navigate(['/summary'], {
            queryParams: {
                value: myData
            },
        });
    };
    OtherBookingListPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    OtherBookingListPage.prototype.back = function () {
        this.router.navigate(['/bookings']);
    };
    OtherBookingListPage.prototype.BookNow = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": 'all_cars_list',
            "usersID": this.userID,
            "currencyID": this.currencyID
        });
        console.log(stringy);
        this.restService.filters(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            if (_this.response.status == 'NotFound') {
                _this.presentToast('Data Not Found!');
            }
            else if (_this.response.status == 'Found') {
                console.log(_this.response.cars_list_result);
                var myData = JSON.stringify({
                    cars_list_result: _this.response.cars_list_result
                });
                _this.router.navigate(['/car-list'], {
                    queryParams: {
                        value: myData
                    },
                });
            }
        }, function (err) {
        });
    };
    OtherBookingListPage.prototype.presentToast = function (msg) {
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
    OtherBookingListPage.prototype.pendingAlert = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert, role;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Booking Infomation',
                            subHeader: 'Booking Status Pending',
                            message: 'Your booking status is Pending, you can proceed when it is Accepted by the owner',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        role = (_a.sent()).role;
                        console.log('onDidDismiss resolved with role', role);
                        return [2 /*return*/];
                }
            });
        });
    };
    OtherBookingListPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    OtherBookingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other-booking-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./other-booking-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/other-booking-list/other-booking-list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./other-booking-list.page.scss */ "./src/app/other-booking-list/other-booking-list.page.scss")).default]
        })
    ], OtherBookingListPage);
    return OtherBookingListPage;
}());



/***/ })

}]);
//# sourceMappingURL=other-booking-list-other-booking-list-module.js.map