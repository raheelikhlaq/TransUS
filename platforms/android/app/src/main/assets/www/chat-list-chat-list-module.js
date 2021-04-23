(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-list-chat-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-list/chat-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-list/chat-list.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons class=\"mf\"  slot=\"start\">\n      <img src=\"assets/img/Menu.svg\" class=\"mleft\" (click)=\"toggleMenu()\">\n    </ion-buttons>\n    <ion-title>Messages</ion-title>\n    \n   </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row *ngIf=\"chatData?.length == 0\">\n    <ion-col class=\"ion-text-center\">\n        <p class=\"not_found\" >No chat found!</p>\n    </ion-col>\n  </ion-row>\n  <ion-list  class=\"list_top\" *ngIf=\"chatData?.length > 0\" no-padding >\n    <ion-item *ngFor=\"let chat of chatData\" (click)=\"Detail(chat.user_id,chat.profile_image,chat.name)\" lines=\"none\">\n      <div class=\"borderBottomLine\"></div>\n      <div class=\"listSection\">\n        <div class=\"UserimgSection\">\n          <ion-avatar class=\"chatImage\" slot=\"start\">\n            <ion-img src=\"{{base_url}}{{chat.profile_image}}\"></ion-img>\n            <!--<span class=\"onlineOffline_icon\" [ngStyle]=\"{'background-color':(chat.status === 'online'? '#4cd137' : '#c23616')}\"></span>-->\n          </ion-avatar>\n        </div>\n        <div class=\"usernameSection\" padding-start padding>\n          <h5 class=\"alura\">\n           <!--<ion-icon *ngIf=\"chat.group\" name=\"people\" color=\"medium\"></ion-icon>--> \n           <!-- <ion-icon name=\"microphone\" *ngIf=\"chat.broadcast\" color=\"medium\"></ion-icon>-->\n             {{chat.name}}\n            </h5>\n       <p class=\"descText alura\" no-margin no-padding>{{chat.message}}</p>\n        </div>\n      </div>\n      <!--div slot=\"end\" class=\"lastSection\">\n         <ion-note *ngIf=\"chat.badge || !chat.time\" class=\"sendTime\">{{chat.sendTime}}</ion-note>\n         <ion-badge slot=\"end\" class=\"userBadge\" *ngIf=\"chat.badge\">{{chat.badge}}</ion-badge>\n          <ion-note slot=\"end\" *ngIf=\"chat.time\">{{chat.time}}</ion-note>\n      </div-->\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/chat-list/chat-list-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/chat-list/chat-list-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChatListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPageRoutingModule", function() { return ChatListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-list.page */ "./src/app/chat-list/chat-list.page.ts");




var routes = [
    {
        path: '',
        component: _chat_list_page__WEBPACK_IMPORTED_MODULE_3__["ChatListPage"]
    }
];
var ChatListPageRoutingModule = /** @class */ (function () {
    function ChatListPageRoutingModule() {
    }
    ChatListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatListPageRoutingModule);
    return ChatListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/chat-list/chat-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-list/chat-list.module.ts ***!
  \***********************************************/
/*! exports provided: ChatListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPageModule", function() { return ChatListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-list-routing.module */ "./src/app/chat-list/chat-list-routing.module.ts");
/* harmony import */ var _chat_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-list.page */ "./src/app/chat-list/chat-list.page.ts");







var ChatListPageModule = /** @class */ (function () {
    function ChatListPageModule() {
    }
    ChatListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _chat_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatListPageRoutingModule"]
            ],
            declarations: [_chat_list_page__WEBPACK_IMPORTED_MODULE_6__["ChatListPage"]]
        })
    ], ChatListPageModule);
    return ChatListPageModule;
}());



/***/ }),

/***/ "./src/app/chat-list/chat-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/chat-list/chat-list.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\nion-content {\n  --background: #f7f8fa;\n}\n\n.mleft {\n  position: relative;\n  left: 10px;\n}\n\n.contentBg {\n  --background: #2f517c;\n  /* fallback for old browsers */\n  --background: -webkit-linear-gradient(to bottom, #2f517c, #56b4d3);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --background: linear-gradient(\n      to bottom,\n      #2f517c,\n      #56b4d3\n  );\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-bottom: 0 !important;\n  --padding-bootm: 0 !important;\n}\n\n.onlineOffline_icon {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  bottom: 0.2em;\n  right: 0;\n  border: 1.5px solid white;\n}\n\n.UserimgSection {\n  position: relative;\n}\n\n.userBadge {\n  border-radius: 90px;\n  width: 24px;\n  height: 24px;\n  background: #fff;\n  color: #000;\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  position: absolute;\n  top: 2.6em;\n}\n\n.usernameSection {\n  overflow: hidden;\n  padding-top: 0;\n  padding-bottom: 15px;\n}\n\n.descText {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  color: #000;\n  font-size: 14px;\n  margin: 0px;\n}\n\nion-img {\n  width: 90%;\n  height: 90%;\n  border: 1px solid #fff;\n}\n\n.listSection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.7em;\n  padding-bottom: 0.7em;\n}\n\n.borderBottomLine {\n  display: block;\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  left: 0%;\n}\n\n.lastSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 73%;\n  padding-top: 2px;\n}\n\n.fontSize {\n  font-size: 30px;\n}\n\nh5 {\n  margin-top: 12px;\n}\n\nion-note {\n  font-size: 14px;\n}\n\n.bg_img {\n  background: #000;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 999;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.header_text {\n  font-size: 35px;\n  color: #fff;\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n}\n\n.num {\n  font-size: 31px;\n  background: #8d8d8d;\n  color: #fff;\n  border-radius: 50%;\n  padding: 4px 0px;\n  width: 51px;\n  height: 50px;\n}\n\n.both_pad {\n  padding: 0px 1em;\n}\n\n.num_div {\n  position: relative;\n  top: 0.3em;\n}\n\n.query {\n  font-size: 18px;\n  color: #000;\n}\n\n.chk {\n  position: relative;\n  top: -4px;\n  left: 5px;\n  color: #8d8d8d;\n  font-size: 13px;\n}\n\nion-checkbox {\n  --border-width: 1px;\n  --border-radius: 5px;\n  --background-checked: #bebebe;\n  --checkmark-color: #fff;\n  --border-color-checked: #bebebe;\n}\n\n.b_botom {\n  border-bottom: 0.1px solid #bebebe;\n}\n\n.subtitle {\n  color: #8d8d8d;\n  width: 100%;\n}\n\n.bg_grey {\n  background: #e3e3e3;\n  text-align: center;\n  padding: 3em 0em;\n  border-radius: 10px;\n}\n\n.white {\n  color: #fff;\n  font-size: 37px;\n  font-weight: bold;\n}\n\nh5 {\n  color: #1a6bbe;\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\nion-avatar {\n  margin-right: 0.5em;\n}\n\nion-item {\n  --ion-background-color: #fff;\n}\n\nion-list {\n  background: transparent;\n}\n\n.not_found {\n  color: #969696;\n  width: 100%;\n  margin-top: 17%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUdKOztBQUFBO0VBQ0kscUJBQUE7RUFBdUIsOEJBQUE7RUFDdkIsa0VBQUE7RUFBb0UsK0JBQUE7RUFDcEU7Ozs7R0FBQTtFQUlHLHFFQUFBO0VBQ0gsNEJBQUE7RUFDQSw2QkFBQTtBQU1KOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFNSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBTUo7O0FBSkE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBUUo7O0FBTkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7QUFRSjs7QUFMQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsUUFBQTtBQU9KOztBQUxBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7QUFhSjs7QUFYQTtFQUNJLGdCQUFBO0FBY0o7O0FBWkE7RUFDSSxpQkFBQTtBQWVKOztBQWJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFnQko7O0FBZEE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaUJKOztBQWZBO0VBQ0ksZ0JBQUE7QUFrQko7O0FBaEJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBbUJKOztBQWpCQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBb0JKOztBQWxCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXFCSjs7QUFuQkE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGtDQUFBO0FBdUJKOztBQXJCQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FBd0JKOztBQXJCQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBd0JKOztBQXRCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUF5Qko7O0FBdkJBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXlCSjs7QUF0QkE7RUFDSSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSw0QkFBQTtBQTBCSjs7QUF4QkE7RUFDSSx1QkFBQTtBQTJCSjs7QUF6QkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBNEJKIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICAgIH1cbn1cblxuaW9uLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgLS1wYWRkaW5nLXRvcDogMS41ZW07XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2Y3ZjhmYTtcbn1cbi5tbGVmdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDEwcHg7XG59XG5cbi5jb250ZW50Qmcge1xuICAgIC0tYmFja2dyb3VuZDogIzJmNTE3YzsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xuICAgIC0tYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmY1MTdjLCAjNTZiNGQzKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgdG8gYm90dG9tLFxuICAgICAgICAjMmY1MTdjLFxuICAgICAgICAjNTZiNGQzXG4gICAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgLS1wYWRkaW5nLWJvb3RtOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5vbmxpbmVPZmZsaW5lX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3R0b206IDAuMmVtO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgd2hpdGU7XG59XG4uVXNlcmltZ1NlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVzZXJCYWRnZSB7XG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIuNmVtO1xufVxuXG4udXNlcm5hbWVTZWN0aW9uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLmRlc2NUZXh0IHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLWltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuLmxpc3RTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gd2lkdGg6IDk3JTtcbiAgICBwYWRkaW5nLXRvcDogMC43ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuN2VtO1xufVxuXG4uYm9yZGVyQm90dG9tTGluZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJlMmUyZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMCU7XG59XG4ubGFzdFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogNzMlO1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG59XG4uZm9udFNpemUge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbmg1IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuaW9uLW5vdGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5iZ19pbWcge1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5oZWFkZXJfdGV4dCB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubnVtIHtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgYmFja2dyb3VuZDogIzhkOGQ4ZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogNHB4IDBweDtcbiAgICB3aWR0aDogNTFweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4uYm90aF9wYWQge1xuICAgIHBhZGRpbmc6IDBweCAxZW07XG59XG4ubnVtX2RpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMC4zZW07XG59XG4ucXVlcnkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cbi5jaGsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC00cHg7XG4gICAgbGVmdDogNXB4O1xuICAgIGNvbG9yOiAjOGQ4ZDhkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbn1cbmlvbi1jaGVja2JveCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogI2JlYmViZTtcbiAgICAtLWNoZWNrbWFyay1jb2xvcjogI2ZmZjtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjYmViZWJlO1xufVxuLmJfYm90b20ge1xuICAgIGJvcmRlci1ib3R0b206IDAuMXB4IHNvbGlkICNiZWJlYmU7XG59XG4uc3VidGl0bGUge1xuICAgIGNvbG9yOiAjOGQ4ZDhkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYmdfZ3JleSB7XG4gICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM2VtIDBlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLndoaXRlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDM3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5oNSB7XG4gICAgLy9mb250LWZhbWlseTogXCJBbGx1cmEtUmVndWxhclwiICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMxYTZiYmU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLWF2YXRhciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbmlvbi1pdGVtIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuaW9uLWxpc3Qge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm5vdF9mb3VuZCB7XG4gICAgY29sb3I6ICM5Njk2OTY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTclO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/chat-list/chat-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/chat-list/chat-list.page.ts ***!
  \*********************************************/
/*! exports provided: ChatListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListPage", function() { return ChatListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






var ChatListPage = /** @class */ (function () {
    function ChatListPage(menuCtrl, router, restService, storage) {
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.restService = restService;
        this.storage = storage;
        this.loader = false;
    }
    ChatListPage.prototype.ngOnInit = function () {
    };
    ChatListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('base_urls').then(function (base_urls) {
            _this.base_url = base_urls;
            _this.storage.get('user_details').then(function (user_details) {
                _this.userId = user_details.users_id;
                _this.getChatList();
                _this.callInterval = setInterval(function () {
                    _this.callApi();
                }, 2000);
            });
        });
    };
    ChatListPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.callInterval);
        console.log('clear');
    };
    ChatListPage.prototype.getChatList = function () {
        var _this = this;
        this.loader = true;
        var stringy = JSON.stringify({
            requestType: 'getChatList',
            usersID: this.userId
        });
        this.restService.update_messages(stringy).subscribe(function (response) {
            _this.getResponse = JSON.parse(response['_body']);
            if (_this.getResponse.status == "NoListFound") {
                console.log(_this.getResponse);
            }
            else {
                _this.chatData = _this.getResponse.chat_list_details;
            }
            _this.loader = false;
            //this.router.navigate(['/matches']);
        });
    };
    ChatListPage.prototype.callApi = function () {
        var _this = this;
        var stringy = JSON.stringify({
            requestType: 'getChatList',
            usersID: this.userId
        });
        this.restService.update_messages(stringy).subscribe(function (response) {
            _this.apiResponse = JSON.parse(response['_body']);
            if (_this.apiResponse.status == "NoListFound") {
                console.log(_this.getResponse);
                _this.chatData = [];
            }
            else {
                _this.chatListLength = _this.apiResponse.chat_length;
                console.log(_this.chatListLength, _this.chatData.length);
                // if(this.chatListLength != this.chatData.length){
                _this.chatData = _this.apiResponse.chat_list_details;
                // }
                //this.router.navigate(['/matches']);
            }
        });
    };
    ChatListPage.prototype.Detail = function (user_id, profile_img, user_name) {
        clearInterval(this.callInterval);
        console.log(profile_img, user_name);
        var myData = JSON.stringify({
            userID: this.userId,
            otherUserId: user_id,
            user_name: user_name,
            profile_img: profile_img
        });
        console.log(myData);
        this.router.navigate(['/chat-detail'], {
            queryParams: {
                value: myData
            }
        });
    };
    ChatListPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    ChatListPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
    ]; };
    ChatListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-list',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-list/chat-list.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-list.page.scss */ "./src/app/chat-list/chat-list.page.scss")).default]
        })
    ], ChatListPage);
    return ChatListPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-list-chat-list-module.js.map