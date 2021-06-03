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
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\nion-header.md.header-md.header-collapse-none.hydrated {\n  padding-top: 0;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-title {\n  text-align: center;\n  color: #fff;\n  font-size: 24px;\n  padding-left: 0px;\n}\n\nion-button {\n  --padding-bottom: 1.5em;\n  --padding-top: 1.5em;\n  --box-shadow: none;\n  text-transform: capitalize;\n}\n\nion-content {\n  --background: #f7f8fa;\n}\n\n.mleft {\n  position: relative;\n  left: 10px;\n}\n\n.contentBg {\n  --background: #2f517c;\n  /* fallback for old browsers */\n  --background: -webkit-linear-gradient(to bottom, #2f517c, #56b4d3);\n  /* Chrome 10-25, Safari 5.1-6 */\n  --background: linear-gradient(\n      to bottom,\n      #2f517c,\n      #56b4d3\n  );\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding-bottom: 0 !important;\n  --padding-bootm: 0 !important;\n}\n\n.onlineOffline_icon {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  bottom: 0.2em;\n  right: 0;\n  border: 1.5px solid white;\n}\n\n.UserimgSection {\n  position: relative;\n}\n\n.userBadge {\n  border-radius: 90px;\n  width: 24px;\n  height: 24px;\n  background: #fff;\n  color: #000;\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: center;\n  position: absolute;\n  top: 2.6em;\n}\n\n.usernameSection {\n  overflow: hidden;\n  padding-top: 0;\n  padding-bottom: 15px;\n}\n\n.descText {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  color: #000;\n  font-size: 14px;\n  margin: 0px;\n}\n\nion-img {\n  width: 90%;\n  height: 90%;\n  border: 1px solid #fff;\n}\n\n.listSection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 0.7em;\n  padding-bottom: 0.7em;\n}\n\n.borderBottomLine {\n  display: block;\n  width: 100%;\n  position: absolute;\n  height: 100%;\n  left: 0%;\n}\n\n.lastSection {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 73%;\n  padding-top: 2px;\n}\n\n.fontSize {\n  font-size: 30px;\n}\n\nh5 {\n  margin-top: 12px;\n}\n\nion-note {\n  font-size: 14px;\n}\n\n.bg_img {\n  background: #000;\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 999;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.header_text {\n  font-size: 35px;\n  color: #fff;\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  width: 100%;\n}\n\n.num {\n  font-size: 31px;\n  background: #8d8d8d;\n  color: #fff;\n  border-radius: 50%;\n  padding: 4px 0px;\n  width: 51px;\n  height: 50px;\n}\n\n.both_pad {\n  padding: 0px 1em;\n}\n\n.num_div {\n  position: relative;\n  top: 0.3em;\n}\n\n.query {\n  font-size: 18px;\n  color: #000;\n}\n\n.chk {\n  position: relative;\n  top: -4px;\n  left: 5px;\n  color: #8d8d8d;\n  font-size: 13px;\n}\n\nion-checkbox {\n  --border-width: 1px;\n  --border-radius: 5px;\n  --background-checked: #bebebe;\n  --checkmark-color: #fff;\n  --border-color-checked: #bebebe;\n}\n\n.b_botom {\n  border-bottom: 0.1px solid #bebebe;\n}\n\n.subtitle {\n  color: #8d8d8d;\n  width: 100%;\n}\n\n.bg_grey {\n  background: #e3e3e3;\n  text-align: center;\n  padding: 3em 0em;\n  border-radius: 10px;\n}\n\n.white {\n  color: #fff;\n  font-size: 37px;\n  font-weight: bold;\n}\n\nh5 {\n  color: #1a6bbe;\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n\nion-avatar {\n  margin-right: 0.5em;\n}\n\nion-item {\n  --ion-background-color: #fff;\n}\n\nion-list {\n  background: transparent;\n}\n\n.not_found {\n  color: #969696;\n  width: 100%;\n  margin-top: 17%;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1saXN0L2NoYXQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0FBRUo7O0FBQ0E7RUFDSTtJQUNJLHdCQUFBO0lBQ0EscUJBQUE7RUFFTjtBQUNGOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUVKOztBQUFBO0VBQ0kscUJBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQUlKOztBQURBO0VBQ0kscUJBQUE7RUFBdUIsOEJBQUE7RUFDdkIsa0VBQUE7RUFBb0UsK0JBQUE7RUFDcEU7Ozs7R0FBQTtFQUlHLHFFQUFBO0VBQ0gsNEJBQUE7RUFDQSw2QkFBQTtBQU9KOztBQUpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSx5QkFBQTtBQU1KOztBQUpBO0VBQ0ksa0JBQUE7QUFPSjs7QUFKQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFPSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBT0o7O0FBTEE7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUUo7O0FBTkE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBU0o7O0FBUEE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EscUJBQUE7QUFTSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsUUFBQTtBQVFKOztBQU5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVNKOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVJBO0VBQ0ksZ0JBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7QUFZSjs7QUFWQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVhBO0VBQ0ksa0JBQUE7QUFjSjs7QUFaQTtFQUNJLGdCQUFBO0FBZUo7O0FBYkE7RUFDSSxpQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBaUJKOztBQWZBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWtCSjs7QUFoQkE7RUFDSSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUFvQko7O0FBbEJBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFxQko7O0FBbkJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBc0JKOztBQXBCQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUF1Qko7O0FBckJBO0VBQ0ksa0NBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUF5Qko7O0FBdEJBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTBCSjs7QUF4QkE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBMEJKOztBQXZCQTtFQUNJLG1CQUFBO0FBMEJKOztBQXhCQTtFQUNJLDRCQUFBO0FBMkJKOztBQXpCQTtFQUNJLHVCQUFBO0FBNEJKOztBQTFCQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE2QkoiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWxpc3QvY2hhdC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xufVxuaW9uLWhlYWRlci5tZC5oZWFkZXItbWQuaGVhZGVyLWNvbGxhcHNlLW5vbmUuaHlkcmF0ZWR7XG4gICAgcGFkZGluZy10b3A6IDA7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbiAgICB9XG59XG5cbmlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbmlvbi1idXR0b24ge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgIC0tcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNmN2Y4ZmE7XG59XG4ubWxlZnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAxMHB4O1xufVxuXG4uY29udGVudEJnIHtcbiAgICAtLWJhY2tncm91bmQ6ICMyZjUxN2M7IC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgICAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJmNTE3YywgIzU2YjRkMyk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgIzJmNTE3YyxcbiAgICAgICAgIzU2YjRkM1xuICAgICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1ib290bTogMCAhaW1wb3J0YW50O1xufVxuXG4ub25saW5lT2ZmbGluZV9pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm90dG9tOiAwLjJlbTtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHdoaXRlO1xufVxuLlVzZXJpbWdTZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51c2VyQmFkZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyLjZlbTtcbn1cblxuLnVzZXJuYW1lU2VjdGlvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5kZXNjVGV4dCB7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbmlvbi1pbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cbi5saXN0U2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIHdpZHRoOiA5NyU7XG4gICAgcGFkZGluZy10b3A6IDAuN2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjdlbTtcbn1cblxuLmJvcmRlckJvdHRvbUxpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyZTJlMmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDAlO1xufVxuLmxhc3RTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDczJTtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xufVxuLmZvbnRTaXplIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5oNSB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbmlvbi1ub3RlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uYmdfaW1nIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaGVhZGVyX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm51bSB7XG4gICAgZm9udC1zaXplOiAzMXB4O1xuICAgIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDRweCAwcHg7XG4gICAgd2lkdGg6IDUxcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLmJvdGhfcGFkIHtcbiAgICBwYWRkaW5nOiAwcHggMWVtO1xufVxuLm51bV9kaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDAuM2VtO1xufVxuLnF1ZXJ5IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG4uY2hrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNHB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICBjb2xvcjogIzhkOGQ4ZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5pb24tY2hlY2tib3gge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNiZWJlYmU7XG4gICAgLS1jaGVja21hcmstY29sb3I6ICNmZmY7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2JlYmViZTtcbn1cbi5iX2JvdG9tIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjFweCBzb2xpZCAjYmViZWJlO1xufVxuLnN1YnRpdGxlIHtcbiAgICBjb2xvcjogIzhkOGQ4ZDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJnX2dyZXkge1xuICAgIGJhY2tncm91bmQ6ICNlM2UzZTM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDNlbSAwZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi53aGl0ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAzN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaDUge1xuICAgIC8vZm9udC1mYW1pbHk6IFwiQWxsdXJhLVJlZ3VsYXJcIiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMWE2YmJlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmlvbi1hdmF0YXIge1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5pb24taXRlbSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5ub3RfZm91bmQge1xuICAgIGNvbG9yOiAjOTY5Njk2O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE3JTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */");

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
                // this.callInterval = setInterval(() => {
                //   this.callApi();
                // }, 2000
                // );
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