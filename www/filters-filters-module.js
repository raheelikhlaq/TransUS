(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filters-filters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filters/filters.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filters/filters.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n      \n    <ion-searchbar [(ngModel)]=\"source\" (ionInput)=\"UpdateSearchResults()\" placeholder=\"ENTER CITY, AIRPORT, OR ADDRESS\"></ion-searchbar>\n \n   </ion-toolbar>\n   <ion-list class=\"bg_list\" [hidden]=\"autocompleteItems.length == 0\">\n    <ion-item lines=\"full\" style=\"--padding-top: 4px; --padding-bottom: 4px;\" *ngFor=\"let item of autocompleteItems\" button=\"true\" (click)=\"SelectSearchResult(item.description)\">\n      <ion-label><h2>{{ item.description }}</h2></ion-label>\n    </ion-item>\n  </ion-list>\n</ion-header>\n<ion-content>\n    \n  <ion-row class=\"sort\">\n    <ion-col size=\"6\" class=\"ion-text-left\">\n      <p class=\"text1 SFUIText-HeavyItalic\">Sort</p>\n    </ion-col>\n    <ion-col size=\"6\" class=\"ion-text-right\">\n      <!--p class=\"text2\">Relevance <img src=\"assets/img/pecil_curve.svg\"></p-->\n    </ion-col>\n  </ion-row>\n  <div class=\"bg_grey calender_slider\">\n    <ion-row>\n      <ion-col size=\"3\" class=\"ion-text-right\">\n        <img src=\"assets/img/left.svg\" (click)=\"slidePrev()\" >\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-center\">\n        <h4 class=\"SFUIText-HeavyItalic calender_slider_text  dark_p_color\">{{start_date_month}} , {{currentYear}}</h4>\n      </ion-col>\n      <ion-col size=\"3\" class=\"ion-text-left\">\n        <img src=\"assets/img/right.svg\" (click)=\"slideNext()\">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-slides class=\"start_date\" [options]=\"option1\"   #startSlides>\n          <ion-slide class=\"dark_p_color\" *ngFor=\"let i of days\"  (click)=\"getStartIndex(i)\">\n              <span  *ngIf=\"i<=9\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n              <span  *ngIf=\"i>9\" class=\"num\" [class.activeState]=\"sliderStartBoolean == i\">{{i}}</span>\n          </ion-slide>\n          \n      </ion-slides>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-row class=\"m_price\">\n    <ion-col size=\"12\" class=\"price\">\n      <b class=\"SFUIText-HeavyItalic\">PRICE</b>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <!-- <ion-label class=\"huly\">{{currencySymbol}} {{min_price}}-{{currencySymbol}} {{max_price}}/hour</ion-label> -->\n      <ion-label class=\"huly\">{{currencySymbol}} {{lowerPrice}}-{{currencySymbol}} {{upperPrice}}/hour</ion-label>\n\n      <ion-range (ionChange)=\"onSliderChanged($event)\" id=\"dual-range\" min=\"{{min_price}}\" max=\"{{max_price}}\" [(ngModel)]=\"price\" dual-knobs pin color=\"primary\">\n      </ion-range>\n     </ion-col>\n  </ion-row>\n  <!--ion-row class=\"tog_main\">\n    <ion-col size=\"9\" class=\"tog1\">\n        <h4 class=\"SFUIText-HeavyItalic\">BOOK INSTANTLY</h4>\n        <p>Book without waiting for owner approval</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"tog_main bg_none\" >\n    <ion-col size=\"9\" class=\"tog1\">\n        <h4 class=\"SFUIText-HeavyItalic\">DELIVERY</h4>\n        <p>Get the car delivered directly to you</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row-->\n  <ion-row class=\"tog_main\" >\n    <ion-col size=\"9\" class=\"tog1\">\n        <h4 class=\"SFUIText-HeavyItalic\">BUSINESS CLASS</h4>\n        <p>Cars for business tarvel</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"tog_main bg_none\" >\n    <ion-col size=\"9\" class=\"tog1\">\n        <h4 class=\"SFUIText-HeavyItalic\">DELUXE CLASS</h4>\n        <p>Exclusive cars for guests ages 25+</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"tog_main\" >\n    <ion-col size=\"9\" class=\"tog1\">\n        <h4 class=\"SFUIText-HeavyItalic\">SUPER DELUXE CLASS</h4>\n        <p>Super exclusive cars for guests ages 30+</p>\n    </ion-col>\n    <ion-col size=\"3\" class=\"ion-text-right\">\n      <ion-item lines=\"none\">\n        <ion-toggle slot=\"start\" name=\"blueberry\" color=\"tertiary\" checked></ion-toggle>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <!--ion-row class=\"m_price\">\n    <ion-col size=\"12\" class=\"price\">\n      <b class=\"SFUIText-HeavyItalic\">MILES INCLUDED</b>\n    </ion-col>\n    <ion-col class=\"ion-text-center\">\n      <ion-label class=\"huly\">100 MI/day or more</ion-label>\n      \n      <ion-range min=\"-200\" max=\"200\" pin color=\"primary\">\n      </ion-range>\n     </ion-col>\n  </ion-row-->\n  <ion-row class=\"main_drop\" style=\"padding-top: 4px;\">\n    <!--ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openFeature()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">FEATURES</h5>\n          <p>{{featureText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"feature\" (ionChange)=\"getFeatureVal()\" [hidden]=\"featureShowList\" #featureSelect>\n        <ion-select-option value=\"test 1,test 1\" >test 1</ion-select-option>\n        <ion-select-option value=\"test 2,test 1\" >test 1</ion-select-option>\n      </ion-select>\n    </ion-col-->\n    \n    <ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openVehicle()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">VEHICLE TYPE</h5>\n          <p>{{vehicleTypeText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"vehicleType\" (ionChange)=\"getVehicleVal()\" [hidden]=\"vehicleShowList\" #vehicleSelect>\n        <ion-select-option value=\"{{p.vehicles_type_id}},{{p.type_name}}\" *ngFor=\"let p of vehicle_types; let i = index\">{{p.type_name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n    <ion-col size=\"6\" class=\"m_r\">\n      <ion-row class=\"m_s\" (click)=\"openTransmission()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">TRANSMISSION</h5>\n          <p>{{transmissionText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"transmission\" (ionChange)=\"getTransmissionVal()\" [hidden]=\"transmissionShowList\" #transmissionSelect>\n        <ion-select-option value=\"{{p.gear_type_id}},{{p.name}}\" *ngFor=\"let p of transmissions; let i = index\">{{p.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"main_drop\">\n    <ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openMake()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">MAKE</h5>\n          <p>{{makeText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"make\" (ionChange)=\"getMakeVal()\" [hidden]=\"makeShowList\" #makeSelect>\n        <ion-select-option value=\"{{p.veh_make_id}},{{p.name}}\" *ngFor=\"let p of makes; let i = index\">{{p.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n    <ion-col size=\"6\" class=\"m_r\">\n      <ion-row class=\"m_s\" (click)=\"openModel()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">MODEL</h5>\n          <p>{{modelText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"model\" (ionChange)=\"getModelVal()\" [hidden]=\"modelShowList\" #modelSelect>\n        <ion-select-option value=\"{{p.model_id}},{{p.name}}\" *ngFor=\"let p of models; let i = index\">{{p.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"main_drop\">\n    <ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openYears()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">YEARS</h5>\n          <p>{{yearsText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"years\" (ionChange)=\"getYearsVal()\" [hidden]=\"yearsShowList\" #yearsSelect>\n        <ion-select-option value=\"2018,2018\" >2018</ion-select-option>\n        <ion-select-option value=\"2020,2020\" >2020</ion-select-option>\n      </ion-select>\n    </ion-col>\n    <ion-col size=\"6\" class=\"m_r\">\n      <ion-row class=\"m_s\" (click)=\"openNos()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">NUMBER OF SEATS</h5>\n          <p>{{nosText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"nos\" (ionChange)=\"getnosVal()\" [hidden]=\"nosShowList\" #nosSelect>\n        <ion-select-option value=\"2,2\" >2</ion-select-option>\n        <ion-select-option value=\"4,4\" >4</ion-select-option>\n        <ion-select-option value=\"6,6\" >6</ion-select-option>\n        <ion-select-option value=\"8,8\" >8</ion-select-option>\n        <ion-select-option value=\"10,10\" >10</ion-select-option>\n      </ion-select>\n    </ion-col>\n  </ion-row>\n  <!--ion-row class=\"main_drop\">\n    <ion-col size=\"6\" class=\"m_f\">\n      <ion-row class=\"m_s\" (click)=\"openColor()\">\n        <ion-col size=\"10\" class=\"m_t\">\n          <h5 class=\"SFUIText-HeavyItalic\">COLOR</h5>\n          <p>{{colorText}}</p>\n        </ion-col>\n        <ion-col class=\"arrow_down\" size=\"2\">\n          <img src=\"assets/img/Arrow_Down.svg\">\n        </ion-col>\n      </ion-row>\n      <ion-select  [(ngModel)]=\"color\" (ionChange)=\"getColorVal()\" [hidden]=\"colorShowList\" #colorSelect>\n        <ion-select-option value=\"Red,Red\" >Red</ion-select-option>\n        <ion-select-option value=\"Blue,Blue\" >Blue</ion-select-option>\n      </ion-select>\n    </ion-col>\n    \n  </ion-row-->\n  <ion-row class=\"view_result\">\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"8\">\n      <ion-button color=\"secondary\" expand=\"block\" (click)=\"submitForm()\" shape=\"round\">View Result</ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/filters/filters-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/filters/filters-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FiltersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageRoutingModule", function() { return FiltersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters.page */ "./src/app/filters/filters.page.ts");




var routes = [
    {
        path: '',
        component: _filters_page__WEBPACK_IMPORTED_MODULE_3__["FiltersPage"]
    }
];
var FiltersPageRoutingModule = /** @class */ (function () {
    function FiltersPageRoutingModule() {
    }
    FiltersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FiltersPageRoutingModule);
    return FiltersPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/filters/filters.module.ts":
/*!*******************************************!*\
  !*** ./src/app/filters/filters.module.ts ***!
  \*******************************************/
/*! exports provided: FiltersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filters-routing.module */ "./src/app/filters/filters-routing.module.ts");
/* harmony import */ var _filters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.page */ "./src/app/filters/filters.page.ts");







var FiltersPageModule = /** @class */ (function () {
    function FiltersPageModule() {
    }
    FiltersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _filters_routing_module__WEBPACK_IMPORTED_MODULE_5__["FiltersPageRoutingModule"]
            ],
            declarations: [_filters_page__WEBPACK_IMPORTED_MODULE_6__["FiltersPage"]]
        })
    ], FiltersPageModule);
    return FiltersPageModule;
}());



/***/ }),

/***/ "./src/app/filters/filters.page.scss":
/*!*******************************************!*\
  !*** ./src/app/filters/filters.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-searchbar {\n  --border-radius: 22px;\n  --box-shadow: none;\n  padding: 0em 2em 0em 1.5em;\n}\n\n.bg_list {\n  background: #fff;\n  position: absolute;\n  height: 300px;\n  width: 100%;\n  z-index: 10;\n}\n\n.bg_list ion-item {\n  width: 100%;\n}\n\n.sort {\n  margin: 0.6em 0.4em;\n}\n\n.sort .text1 {\n  font-size: 18px;\n  margin: 0px;\n}\n\n.sort .text2 {\n  margin: 0px;\n  font-size: 14px;\n}\n\n.sort .text2 img {\n  position: relative;\n  top: 3px;\n  margin-left: 10px;\n}\n\n.month {\n  padding: 1em 0.4em 0.5em 0.4em;\n}\n\n.bg_grey {\n  background: #f9f9f9;\n  padding: 0em 0.4em;\n}\n\n.month_slider {\n  margin-top: 0px;\n  margin-bottom: 1em;\n  display: flex;\n  overflow: auto;\n}\n\n.month_slider span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.month_slider span:first-child {\n  margin-left: 0em;\n}\n\nion-range {\n  --bar-height: 6px;\n  --knob-size: 24px;\n  --knob-box-shadow: 0px 0px 0px 3px #fff;\n  padding: 0px 3px;\n  --bar-border-radius: 10px;\n}\n\n.m_price {\n  margin: 0.6em 0.4em;\n}\n\n.huly {\n  color: #272727;\n}\n\n.price {\n  padding: 1em 0.4em 0em 0.4em;\n}\n\n.tog1 {\n  font-size: 13px;\n  color: #272727;\n}\n\n.tog1 h4 {\n  margin: 0px;\n}\n\n.tog1 p {\n  margin: 0px;\n}\n\n.tog_main {\n  background: #f9f9f9;\n  padding: 1em 0.3em;\n}\n\nion-item {\n  --background: transparent;\n  float: right;\n}\n\nion-toggle {\n  height: 22px;\n  padding-right: 0px;\n  padding-top: 0px;\n}\n\n.bg_none {\n  background: none;\n}\n\n.main_drop {\n  background: #f9f9f9;\n}\n\n.m_f {\n  padding: 0px;\n  padding-right: 4px;\n  padding-bottom: 4px;\n}\n\n.m_s {\n  background: #fff;\n}\n\n.m_t {\n  padding: 1em 0.5em;\n}\n\n.m_t h5 {\n  margin: 0px;\n  font-size: 13px;\n}\n\n.m_t p {\n  margin: 0px;\n  font-size: 12px;\n  color: #272727;\n}\n\n.m_r {\n  padding-left: 4px;\n  padding-bottom: 4px;\n  padding: 0px;\n}\n\n.view_result {\n  background: #f9f9f9;\n  padding: 0.5em 0em;\n}\n\nion-toggle.toggle-checked::part(track) {\n  background: #c4932f !important;\n}\n\nion-range::part(bar) {\n  background: rgba(var(--ion-color-base-rgb), 1);\n}\n\n.arrow_down {\n  text-align: center;\n  margin-top: 1em;\n}\n\n.arrow_down img {\n  width: 8px;\n}\n\n.activeState {\n  background: #c4932f;\n  border: 1px solid #c4932f !important;\n  color: #fff !important;\n}\n\nion-slide span {\n  border: 1px solid #000;\n  border-radius: 22px;\n  padding: 8px 14px;\n  margin-left: 1em;\n}\n\n.num {\n  padding: 9px 10px !important;\n}\n\n.calender_slider {\n  background: #f9f9f9;\n  padding: 0.6em 0em;\n}\n\n.calender_slider_text {\n  margin: 0px;\n  position: relative;\n  top: -2px;\n  font-size: 18px;\n}\n\nion-slide {\n  margin-left: 0.6em;\n}\n\nion-slide:first-child {\n  margin-left: 0em;\n}\n\nion-select {\n  position: absolute;\n  color: #fff;\n  z-index: -10;\n}\n\nion-select::part(text) {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVycy9maWx0ZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksd0JBQUE7SUFDQSxxQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFIQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkE7RUFDSSw4QkFBQTtBQU9KOztBQUxBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVUo7O0FBUkE7RUFDSSw0QkFBQTtBQVdKOztBQVRBO0VBQ0ksZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFhSjs7QUFYQTtFQUNJLG1CQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0FBZUo7O0FBYkE7RUFDSSw0QkFBQTtBQWdCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBaUJKOztBQWZBO0VBQ0ksV0FBQTtBQWtCSjs7QUFoQkE7RUFDSSxXQUFBO0FBbUJKOztBQWpCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFvQko7O0FBbEJBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBcUJKOztBQW5CQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGdCQUFBO0FBdUJKOztBQXJCQTtFQUNJLG1CQUFBO0FBd0JKOztBQXRCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBeUJKOztBQXZCQTtFQUNJLGdCQUFBO0FBMEJKOztBQXhCQTtFQUNJLGtCQUFBO0FBMkJKOztBQXpCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBNEJKOztBQTFCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQTZCSjs7QUEzQkE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQThCSjs7QUE1QkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBK0JKOztBQTVCQTtFQUNJLDhCQUFBO0FBK0JKOztBQTdCQTtFQUNJLDhDQUFBO0FBZ0NKOztBQTlCQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQWlDSjs7QUEvQkE7RUFDSSxVQUFBO0FBa0NKOztBQWhDQTtFQUNJLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQW9DSjs7QUFsQ0E7RUFDSSw0QkFBQTtBQXFDSjs7QUFuQ0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBc0NKOztBQXBDQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBdUNKOztBQXJDQTtFQUNJLGtCQUFBO0FBd0NKOztBQXRDQTtFQUNJLGdCQUFBO0FBeUNKOztBQXZDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEwQ0o7O0FBeENBO0VBQ0ksYUFBQTtBQTJDSiIsImZpbGUiOiJzcmMvYXBwL2ZpbHRlcnMvZmlsdGVycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAwZW0gMmVtIDBlbSAxLjVlbTtcbn1cbi5iZ19saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwO1xufVxuLmJnX2xpc3QgaW9uLWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLnNvcnQge1xuICAgIG1hcmdpbjogMC42ZW0gMC40ZW07XG59XG4uc29ydCAudGV4dDEge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5zb3J0IC50ZXh0MiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNvcnQgLnRleHQyIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1vbnRoIHtcbiAgICBwYWRkaW5nOiAxZW0gMC40ZW0gMC41ZW0gMC40ZW07XG59XG4uYmdfZ3JleSB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiAwZW0gMC40ZW07XG59XG4ubW9udGhfc2xpZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubW9udGhfc2xpZGVyIHNwYW4ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLm51bSB7XG4gICAgcGFkZGluZzogOXB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5tb250aF9zbGlkZXIgc3BhbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cbmlvbi1yYW5nZSB7XG4gICAgLS1iYXItaGVpZ2h0OiA2cHg7XG4gICAgLS1rbm9iLXNpemU6IDI0cHg7XG4gICAgLS1rbm9iLWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDNweCAjZmZmO1xuICAgIHBhZGRpbmc6IDBweCAzcHg7XG4gICAgLS1iYXItYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5tX3ByaWNlIHtcbiAgICBtYXJnaW46IDAuNmVtIDAuNGVtO1xufVxuLmh1bHkge1xuICAgIGNvbG9yOiAjMjcyNzI3O1xufVxuLnByaWNlIHtcbiAgICBwYWRkaW5nOiAxZW0gMC40ZW0gMGVtIDAuNGVtO1xufVxuLnRvZzEge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzI3MjcyNztcbn1cbi50b2cxIGg0IHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi50b2cxIHAge1xuICAgIG1hcmdpbjogMHB4O1xufVxuLnRvZ19tYWluIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIHBhZGRpbmc6IDFlbSAwLjNlbTtcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZsb2F0OiByaWdodDtcbn1cbmlvbi10b2dnbGUge1xuICAgIGhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5iZ19ub25lIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLm1haW5fZHJvcCB7XG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cbi5tX2Yge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cbi5tX3Mge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubV90IHtcbiAgICBwYWRkaW5nOiAxZW0gMC41ZW07XG59XG4ubV90IGg1IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4ubV90IHAge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzI3MjcyNztcbn1cbi5tX3Ige1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLnZpZXdfcmVzdWx0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIHBhZGRpbmc6IDAuNWVtIDBlbTtcbn1cblxuaW9uLXRvZ2dsZS50b2dnbGUtY2hlY2tlZDo6cGFydCh0cmFjaykge1xuICAgIGJhY2tncm91bmQ6IHJnYigxOTYgMTQ3IDQ3KSAhaW1wb3J0YW50O1xufVxuaW9uLXJhbmdlOjpwYXJ0KGJhcikge1xuICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJhc2UtcmdiKSwgMSk7XG59XG4uYXJyb3dfZG93biB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5hcnJvd19kb3duIGltZyB7XG4gICAgd2lkdGg6IDhweDtcbn1cbi5hY3RpdmVTdGF0ZSB7XG4gICAgYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzQ5MzJmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbmlvbi1zbGlkZSBzcGFuIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgcGFkZGluZzogOHB4IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5udW0ge1xuICAgIHBhZGRpbmc6IDlweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uY2FsZW5kZXJfc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgIHBhZGRpbmc6IDAuNmVtIDBlbTtcbn1cbi5jYWxlbmRlcl9zbGlkZXJfdGV4dCB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTJweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tc2xpZGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjZlbTtcbn1cbmlvbi1zbGlkZTpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cbmlvbi1zZWxlY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiAtMTA7XG59XG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/filters/filters.page.ts":
/*!*****************************************!*\
  !*** ./src/app/filters/filters.page.ts ***!
  \*****************************************/
/*! exports provided: FiltersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPage", function() { return FiltersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var FiltersPage = /** @class */ (function () {
    function FiltersPage(storage, zone, router, toastController, restService, menuCtrl) {
        this.storage = storage;
        this.zone = zone;
        this.router = router;
        this.toastController = toastController;
        this.restService = restService;
        this.menuCtrl = menuCtrl;
        this.option1 = {
            loop: true,
            slidesPerView: 8
        };
        this.start_date_month = 'January';
        this.start_month_index = 1;
        this.monthCounter = 1;
        this.feature = 'All features';
        this.featureText = 'All features';
        this.vehicleType = 'All Types';
        this.vehicleTypeText = 'All Types';
        this.make = 'Select Make';
        this.makeText = 'Select Make';
        this.model = 'Select Model';
        this.modelText = 'Select Model';
        this.years = 'Select Year';
        this.yearsText = 'Select Year';
        this.nos = 'Select NOS';
        this.nosText = 'Select NOS';
        this.color = 'Select Color';
        this.colorText = 'Select Color';
        this.transmission = 'Select Transmission';
        this.transmissionText = 'Select Transmission';
        this.featureShowList = true;
        this.vehicleShowList = true;
        this.makeShowList = true;
        this.modelShowList = true;
        this.yearsShowList = true;
        this.nosShowList = true;
        this.colorShowList = true;
        this.transmissionShowList = true;
        this.lowerPrice = 0;
        this.upperPrice = 0;
        this.currencyID = '';
        this.NoDataFount = [];
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: '' };
        this.autocompleteItems = [];
        this.detinationCompleteItems = [];
        var date = new Date();
        var month = date.getMonth() + 1;
        var fMonth = this.monthList(month);
        var dDate = date.getDate();
        console.log(dDate);
        // this.getStartIndex(dDate);
        console.log(date);
        console.log(month);
        console.log(fMonth);
        this.start_date_month = fMonth;
        this.start_month_index = month;
    }
    FiltersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.days = Array.from({ length: 30 }, function (v, k) { return k + 1; });
        this.currentYear = new Date().getFullYear();
        this.getStartIndex(1);
        this.storage.get('user_details').then(function (user_details) {
            _this.storage.get('currency_symbol').then(function (currency_symbol) {
                console.log('currency_symbol', currency_symbol);
                _this.currencySymbol = currency_symbol;
                console.log('currency', _this.currencyID);
                _this.getDropDownData();
                if (user_details) {
                    console.log(user_details);
                    _this.userID = user_details.users_id;
                    _this.currencyID = user_details.currencies_id;
                }
                else {
                    _this.userID = '';
                }
            });
        });
    };
    FiltersPage.prototype.SelectSearchResult = function (address) {
        this.source = address; //May be delete
        console.log(this.source);
        this.autocompleteItems = [];
    };
    FiltersPage.prototype.UpdateSearchResults = function () {
        var _this = this;
        if (this.source == '') {
            this.autocompleteItems = [];
            return;
        }
        //componentRestrictions: {country: 'AE'}
        this.GoogleAutocomplete.getPlacePredictions({ input: this.source }, function (predictions, status) {
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                predictions.forEach(function (prediction) {
                    console.log(prediction);
                    _this.autocompleteItems.push(prediction);
                });
            });
        });
    };
    FiltersPage.prototype.getDropDownData = function () {
        var _this = this;
        var stringy = JSON.stringify({
            "requestType": "get_page_data",
            "currencyID": this.currencyID
        });
        console.log('data', stringy);
        this.restService.filters(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            _this.makes = _this.response.makes;
            _this.models = _this.response.models;
            _this.transmissions = _this.response.transmission;
            _this.vehicle_types = _this.response.vehicle_types;
            _this.max_price = _this.response.max_price;
            _this.min_price = _this.response.min_price;
            _this.upperPrice = _this.response.max_price;
            _this.lowerPrice = _this.response.min_price;
            console.log(_this.response);
        }, function (err) {
        });
    };
    /*getFeatureVal(){
      this.featureText = this.feature.split(',')[1];
      this.featureShowList = true;
    }
    openFeature(){
      this.featureShowList = false;
      this.featureSelect.open();
    } */
    FiltersPage.prototype.getStartIndex = function (i) {
        this.sliderStartBoolean = i;
    };
    FiltersPage.prototype.onSliderChanged = function (event) {
        console.log(this.price);
        console.log(this.price.lower);
        console.log(this.price.upper);
        this.lowerPrice = this.price.lower;
        this.upperPrice = this.price.upper;
        // this.max_price = this.price.upper;
        // this.min_price = this.price.lower
    };
    FiltersPage.prototype.getVehicleVal = function () {
        this.vehicleTypeText = this.vehicleType.split(',')[1];
        this.vehicleShowList = true;
    };
    FiltersPage.prototype.openVehicle = function () {
        this.vehicleShowList = false;
        this.vehicleSelect.open();
    };
    FiltersPage.prototype.getMakeVal = function () {
        this.makeText = this.make.split(',')[1];
        this.makeShowList = true;
    };
    FiltersPage.prototype.openMake = function () {
        this.makeShowList = false;
        this.makeSelect.open();
    };
    FiltersPage.prototype.getModelVal = function () {
        this.modelText = this.model.split(',')[1];
        this.modelShowList = true;
    };
    FiltersPage.prototype.openModel = function () {
        this.modelShowList = false;
        this.modelSelect.open();
    };
    FiltersPage.prototype.getYearsVal = function () {
        this.yearsText = this.years.split(',')[1];
        this.yearsShowList = true;
    };
    FiltersPage.prototype.openYears = function () {
        this.yearsShowList = false;
        this.yearsSelect.open();
    };
    FiltersPage.prototype.getnosVal = function () {
        this.nosText = this.nos.split(',')[1];
        this.nosShowList = true;
    };
    FiltersPage.prototype.openNos = function () {
        this.nosShowList = false;
        this.nosSelect.open();
    };
    /*getColorVal(){
      this.colorText = this.color.split(',')[1];
      this.colorShowList = true;
    }
    openColor(){
      this.colorShowList = false;
      this.colorSelect.open();
    }*/
    FiltersPage.prototype.getTransmissionVal = function () {
        this.transmissionText = this.transmission.split(',')[1];
        this.transmissionShowList = true;
    };
    FiltersPage.prototype.openTransmission = function () {
        this.transmissionShowList = false;
        this.transmissionSelect.open();
    };
    FiltersPage.prototype.slidePrev = function () {
        this.start_month_index--;
        if (this.start_month_index < 1) {
            this.currentYear = this.currentYear - 1;
            this.start_month_index = 12;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        // this.startSlides.slidePrev();
    };
    FiltersPage.prototype.slideNext = function () {
        this.start_month_index++;
        if (this.start_month_index == 13) {
            this.currentYear = this.currentYear + 1;
            this.start_month_index = 1;
        }
        this.start_date_month = this.monthList(this.start_month_index);
        // this.startSlides.slideNext();
    };
    FiltersPage.prototype.submitForm = function () {
        var _this = this;
        // var feature = this.feature.split(',')[0];
        var vehicleType = this.vehicleType.split(',')[0];
        var make = this.make.split(',')[0];
        var model = this.model.split(',')[0];
        var years = this.years.split(',')[0];
        var nos = this.nos.split(',')[0];
        // var color = this.color.split(',')[0];
        var transmission = this.transmission.split(',')[0];
        console.log(this.price);
        /*  if(feature == 'All features'){
            feature = '';
          }  */
        if (vehicleType == 'All Types') {
            vehicleType = '';
        }
        if (make == 'Select Make') {
            make = '';
        }
        if (model == 'Select Model') {
            model = '';
        }
        if (years == 'Select Year') {
            years = '';
        }
        if (nos == 'Select NOS') {
            nos = '';
        }
        /* if(color == 'Select Color'){
           color = '';
         }*/
        if (transmission == 'Select Transmission') {
            transmission = '';
        }
        if (this.price == undefined) {
            this.lowerPrice = 0;
            this.upperPrice = 0;
        }
        else if (this.price.lower == undefined && this.price.upper == undefined) {
            this.lowerPrice = 0;
            this.upperPrice = 0;
            //alert('2'+this.lowerPrice);
        }
        this.start_date = document.querySelector(".start_date .activeState").textContent;
        var stringy = JSON.stringify({
            "requestType": 'get_cars_list',
            "modelID": model,
            "makeID": make,
            "transmissionID": transmission,
            "vehTypeID": vehicleType,
            "minPrice": this.lowerPrice,
            "maxPrice": this.upperPrice,
            "choosenDate": this.currentYear + '-' + this.monthCounter + '-' + this.start_date,
            "numOfSeats": nos,
            "usersID": this.userID,
            "currencyID": this.currencyID
        });
        console.log(stringy);
        this.restService.filters(stringy).subscribe(function (response) {
            _this.response = JSON.parse(response['_body']);
            if (_this.response.status == 'NotFound') {
                var myData = JSON.stringify({
                    cars_list_result: _this.NoDataFount
                });
                _this.router.navigate(['/car-list'], {
                    queryParams: {
                        value: myData
                    },
                });
                // this.presentToast('Data Not Found!');
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
    FiltersPage.prototype.monthList = function (param) {
        // console.log(param);
        //param = parseInt(param)+1;
        this.monthCounter = param;
        if (param == 1) {
            this.month = 'January';
        }
        else if (param == 2) {
            this.month = 'February';
        }
        else if (param == 3) {
            this.month = 'March';
        }
        else if (param == 4) {
            this.month = 'April';
        }
        else if (param == 5) {
            this.month = 'May';
        }
        else if (param == 6) {
            this.month = 'June';
        }
        else if (param == 7) {
            this.month = 'July';
        }
        else if (param == 8) {
            this.month = 'August';
        }
        else if (param == 9) {
            this.month = 'September';
        }
        else if (param == 10) {
            this.month = 'October';
        }
        else if (param == 11) {
            this.month = 'November';
        }
        else if (param == 12) {
            this.month = 'December';
        }
        return this.month;
    };
    FiltersPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    FiltersPage.prototype.presentToast = function (msg) {
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
    FiltersPage.ctorParameters = function () { return [
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    FiltersPage.propDecorators = {
        startSlides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['startSlides',] }],
        featureSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['featureSelect',] }],
        vehicleSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['vehicleSelect',] }],
        makeSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['makeSelect',] }],
        modelSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['modelSelect',] }],
        yearsSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['yearsSelect',] }],
        nosSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['nosSelect',] }],
        colorSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['colorSelect',] }],
        transmissionSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['transmissionSelect',] }]
    };
    FiltersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filters',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filters/filters.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filters.page.scss */ "./src/app/filters/filters.page.scss")).default]
        })
    ], FiltersPage);
    return FiltersPage;
}());



/***/ })

}]);
//# sourceMappingURL=filters-filters-module.js.map