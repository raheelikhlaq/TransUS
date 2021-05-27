(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-bike-detail-view-bike-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-bike-detail/view-bike-detail.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-bike-detail/view-bike-detail.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <img src=\"assets/img/Arrow.svg\" (click)=\"goToHome()\">\n  </ion-buttons>\n  <ion-title>Motor Delivery</ion-title>\n  <ion-buttons slot=\"end\" routerLink=\"/filters\" >\n    <img src=\"assets/img/share.svg\">\n  </ion-buttons>\n </ion-toolbar>\n\n<ion-content>\n  <ion-row>\n    <ion-col class=\"slider_main\">\n      <ion-slides pager=\"true\" >\n\n        <ion-slide>\n          <div class=\"slide\" >\n            <img src=\"assets/img/bike_img.svg\" class=\"s_img\" />\n            <!--div class=\"heart\">\n              <img src=\"assets/img/heart.svg\" class=\"\" />\n            </div-->\n          </div>\n        </ion-slide>\n    \n        <ion-slide>\n          <div class=\"slide\" >\n            <img src=\"assets/img/bike_img.svg\" class=\"s_img\" />\n            <!--div class=\"heart\">\n              <img src=\"assets/img/heart.svg\" class=\"\" />\n            </div-->\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"motor_detail.availability =='Yes'\">\n    <ion-col class=\"descr\">\n      <h3>Availabiliy</h3>\n      <p class=\"b_list7\"><b class=\"bullet\"></b> Available</p>\n    </ion-col>\n  </ion-row>\n  \n  <ion-row class=\"rating\">\n    <ion-col size=\"6\">\n      <h3>Ratings</h3>\n    </ion-col>\n    <!--ion-col size=\"6\">\n      <h3 class=\"view_all\">View All</h3>\n    </ion-col-->\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"stars\">\n      <p class=\"star_list\" *ngIf=\"motor_detail.ratting_stars === '5'\"> \n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n      </p>\n      <p class=\"star_list\" *ngIf=\"motor_detail.ratting_stars === '4'\"> \n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n      </p>\n      <p class=\"star_list\" *ngIf=\"motor_detail.ratting_stars === '3'\"> \n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n      </p>\n      <p class=\"star_list\" *ngIf=\"motor_detail.ratting_stars === '2'\"> \n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n      </p>\n      <p class=\"star_list\" *ngIf=\"motor_detail.ratting_stars === '1'\"> \n        <img src=\"assets/img/yellow_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n        <img src=\"assets/img/grey_star.svg\">\n      </p>\n      <span class=\"left_star\">269 trips</span>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"descr m_top\">\n      <h3>Driving License </h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center driv_lis\">\n        <img src=\"{{base_urls}}{{motor_detail.license_no_img}}\">\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"descr m_top\">\n      <h3>Insurance Document </h3>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col class=\"ion-text-center driv_lis\">\n        <img src=\"{{base_urls}}{{motor_detail.insurance_img}}\">\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"btn_footer\"> \n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"enquiryCharges()\">Inquire Charges</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/view-bike-detail/view-bike-detail-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/view-bike-detail/view-bike-detail-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewBikeDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBikeDetailPageRoutingModule", function() { return ViewBikeDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _view_bike_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-bike-detail.page */ "./src/app/view-bike-detail/view-bike-detail.page.ts");




var routes = [
    {
        path: '',
        component: _view_bike_detail_page__WEBPACK_IMPORTED_MODULE_3__["ViewBikeDetailPage"]
    }
];
var ViewBikeDetailPageRoutingModule = /** @class */ (function () {
    function ViewBikeDetailPageRoutingModule() {
    }
    ViewBikeDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ViewBikeDetailPageRoutingModule);
    return ViewBikeDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/view-bike-detail/view-bike-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/view-bike-detail/view-bike-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewBikeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBikeDetailPageModule", function() { return ViewBikeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _view_bike_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-bike-detail-routing.module */ "./src/app/view-bike-detail/view-bike-detail-routing.module.ts");
/* harmony import */ var _view_bike_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-bike-detail.page */ "./src/app/view-bike-detail/view-bike-detail.page.ts");







var ViewBikeDetailPageModule = /** @class */ (function () {
    function ViewBikeDetailPageModule() {
    }
    ViewBikeDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _view_bike_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewBikeDetailPageRoutingModule"]
            ],
            declarations: [_view_bike_detail_page__WEBPACK_IMPORTED_MODULE_6__["ViewBikeDetailPage"]]
        })
    ], ViewBikeDetailPageModule);
    return ViewBikeDetailPageModule;
}());



/***/ }),

/***/ "./src/app/view-bike-detail/view-bike-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/view-bike-detail/view-bike-detail.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n}\n\n.slider_main {\n  padding: 1em 0.6em;\n}\n\n.s_img {\n  width: 100%;\n}\n\n.slide {\n  width: 100%;\n}\n\n.pentagon {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n}\n\n.heart {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n}\n\n.badge {\n  position: absolute;\n  top: 6px;\n  left: 0px;\n  right: 0px;\n}\n\n.badge_dollar {\n  color: #c4932f;\n  font-size: 9px;\n}\n\n.badge_price {\n  font-size: 20px;\n  color: #c4932f;\n}\n\n.badge_per {\n  color: #fff;\n  font-size: 6px;\n  display: block;\n  margin-left: 1px;\n  margin-top: -2px;\n}\n\n.descr {\n  padding: 0em 0.6em;\n}\n\n.descr h3 {\n  margin-top: 0px;\n  margin-bottom: 5px;\n}\n\n.descr p {\n  font-size: 12px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.descr small {\n  color: #c4932f;\n}\n\n.rating {\n  padding: 0em 0.3em;\n}\n\n.view_all {\n  font-size: 10px;\n  text-align: right;\n  padding-right: 1em;\n  color: #c4932f;\n  padding-top: 1em;\n}\n\n.stars img {\n  margin-left: 4px;\n}\n\n.left_star {\n  margin-left: 1em;\n}\n\n.bullet {\n  height: 8px;\n  width: 8px;\n  background: #0ec10e;\n  margin: 0px;\n  display: inline-grid;\n  border-radius: 16px;\n}\n\n.b_list7 {\n  margin-left: 1em;\n}\n\n.m_top {\n  margin-top: 1em;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n}\n\n.btn_footer {\n  padding: 0.5em 1em 1.2em 1em;\n}\n\n.info {\n  background: #6e6d6d;\n  padding: 0.4em 0em;\n}\n\n.info p {\n  margin: 0px;\n  color: #fff;\n  font-size: 10px;\n}\n\n.driv_lis img {\n  width: 100%;\n  padding: 0em 0.4em;\n  height: 220px;\n  border-radius: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1iaWtlLWRldGFpbC92aWV3LWJpa2UtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFNSjs7QUFKQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksa0JBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVhBO0VBQ0ksa0JBQUE7QUFjSjs7QUFaQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSxnQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGdCQUFBO0FBaUJKOztBQWRBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBaUJKOztBQWZBO0VBQ0ksZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksZUFBQTtBQW1CSjs7QUFqQkE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFvQko7O0FBbEJBO0VBQ0ksNEJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUF1Qko7O0FBckJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBd0JKIiwiZmlsZSI6InNyYy9hcHAvdmlldy1iaWtlLWRldGFpbC92aWV3LWJpa2UtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kKG1pbi1oZWlnaHQgOiA4MDBweCkge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogM2VtIDAuMWVtIDhweCAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gICAgfVxufVxuXG5pb24tdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4uc2xpZGVyX21haW4ge1xuICAgIHBhZGRpbmc6IDFlbSAwLjZlbTtcbn1cbi5zX2ltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnBlbnRhZ29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMnB4O1xuICAgIGxlZnQ6IDEycHg7XG59XG4uaGVhcnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMWVtO1xuICAgIGJvdHRvbTogMWVtO1xufVxuLmJhZGdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG4uYmFkZ2VfZG9sbGFyIHtcbiAgICBjb2xvcjogI2M0OTMyZjtcbiAgICBmb250LXNpemU6IDlweDtcbn1cbi5iYWRnZV9wcmljZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xufVxuLmJhZGdlX3BlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiA2cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuLmRlc2NyIHtcbiAgICBwYWRkaW5nOiAwZW0gMC42ZW07XG59XG4uZGVzY3IgaDMge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uZGVzY3IgcCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uZGVzY3Igc21hbGwge1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xufVxuLnJhdGluZyB7XG4gICAgcGFkZGluZzogMGVtIDAuM2VtO1xufVxuLnZpZXdfYWxsIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIGNvbG9yOiAjYzQ5MzJmO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG59XG4uc3RhcnMgaW1nIHtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmxlZnRfc3RhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmJ1bGxldCB7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiAjMGVjMTBlO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uYl9saXN0NyB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5tX3RvcCB7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJ0bl9mb290ZXIge1xuICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAxLjJlbSAxZW07XG59XG4uaW5mbyB7XG4gICAgYmFja2dyb3VuZDogIzZlNmQ2ZDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwZW07XG59XG4uaW5mbyBwIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uZHJpdl9saXMgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwZW0gMC40ZW07XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/view-bike-detail/view-bike-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/view-bike-detail/view-bike-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: ViewBikeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewBikeDetailPage", function() { return ViewBikeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





var ViewBikeDetailPage = /** @class */ (function () {
    function ViewBikeDetailPage(storage, activatedRoute, router, menuCtrl) {
        var _this = this;
        this.storage = storage;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.response = JSON.parse(res.value);
            console.log(_this.response);
            _this.motor_detail = _this.response.motor_detail;
        });
    }
    ViewBikeDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('profile_img_url').then(function (profile_img_url) {
            _this.storage.get('base_urls').then(function (base_urls) {
                _this.base_urls = base_urls;
                _this.profileImage = profile_img_url;
                console.log(_this.profileImage);
            });
        });
    };
    ViewBikeDetailPage.prototype.enquiryCharges = function () {
        var _this = this;
        this.storage.get('user_details').then(function (user_details) {
            _this.userID = user_details.users_id;
            _this.user_name = user_details.user_name;
            if (user_details) {
                var myData = JSON.stringify({
                    userID: _this.motor_detail.users_id,
                    otherUserId: _this.userID,
                    user_name: _this.user_name,
                    profile_img: _this.profileImage,
                    motor_detail: _this.motor_detail
                });
                console.log(myData);
                _this.router.navigate(['/chat-detail'], {
                    queryParams: {
                        value: myData
                    }
                });
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
    };
    ViewBikeDetailPage.prototype.goToHome = function () {
        this.router.navigate(['/']);
    };
    ViewBikeDetailPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ViewBikeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-bike-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-bike-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-bike-detail/view-bike-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-bike-detail.page.scss */ "./src/app/view-bike-detail/view-bike-detail.page.scss")).default]
        })
    ], ViewBikeDetailPage);
    return ViewBikeDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=view-bike-detail-view-bike-detail-module.js.map