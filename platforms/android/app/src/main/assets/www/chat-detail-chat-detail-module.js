(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-chat-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header no-border>\n  <ion-toolbar class=\"bg_header\">\n    <img src=\"assets/img/Arrow.svg\" class=\"img_title\" slot=\"start\" (click)=\"back()\">\n      <ion-title class=\"alura\">\n        <img src=\"{{profileImg}}\" class=\"img_avatar\">\n        <span class=\"imgtitle\">{{sender_name}}</span> \n      </ion-title>\n      <ion-button color=\"secondary\" shape=\"round\"  slot=\"end\" class=\"send_price\" (click)=\"sendOffer()\" *ngIf=\"btnSendPrice\">Send Price</ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content #IonContent padding>\n \n  <!--<ion-card class=\"card_div\">\n    <ion-card-content class=\"chatDivHeight\">-->\n    <ion-list>\n     <div *ngFor=\"let chat of msgList; let i = index; \">\n      <ion-row *ngIf=\"chat.date\">\n        <ion-col>\n          <ion-text>{{chat.date}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"chat.userId == User\">\n        <ion-col class=\"right\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\n          <div class=\"imageAvatarRight\">\n            <div class=\"imageAvatarBottom\">\n              <!--<ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\n                <div class=\"imageAvatarBottomIcon\">\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n                </div>\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\n              </ion-avatar>-->\n            </div>\n            <ion-label color=\"light\">\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\n                <p class=\"reciver\"  text-wrap padding>{{chat.message}} \n                </p>\n              </div>\n            </ion-label>\n            <span class=\"lefttime\">{{chat.time}}</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"chat.userId == toUser\">\n        <ion-col class=\"left\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\n          <div class=\"imageAvatarLeft\">\n            <span class=\"righttime\">{{chat.time}}</span>\n            <ion-label color=\"light\">\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\n                <p class=\"sender\"   text-wrap padding>{{chat.message}} </p>\n                <!--<div class=\"corner-parent-left\">\n                  <div class=\"corner-child-left\">\n\n                  </div>\n                </div>-->\n              </div>\n            </ion-label>\n            <div class=\"imageAvatarBottom\">\n              <!-- <ion-icon class=\"imageAvatarBottomIcon\" name=\"add\" expand=\"icon-only\" color=\"success\"></ion-icon> -->\n              <!--<ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\n                <div class=\"imageAvatarBottomIcon\">\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n                </div>\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\n              </ion-avatar>-->\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!--<ion-row *ngIf=\"((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])\">\n        <ion-col>\n          <ion-text>{{chat.time}}</ion-text>\n        </ion-col>\n      </ion-row>-->\n    </div>\n  </ion-list>\n<!--</ion-card-content>\n</ion-card>-->\n  <!--<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\" sendMsg()\">\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>-->\n\n  <ion-row *ngIf=\"loader\">\n    <ion-col no-padding class=\"loading-col\">\n      <div class=\"imageAvatarRight\">\n        <div class=\"imageAvatarBottomLoader\">\n          <!--<ion-avatar class=\"avatar\">\n            <div class=\"imageAvatarBottomIcon\">\n              <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n            </div>\n            <ion-img src=\"assets/img/chat/chat5.jpg\"></ion-img>\n          </ion-avatar>-->\n        </div>\n        <ion-label>\n          <div class=\"chatDivLoader\">\n              <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n            <!-- <ion-img src=\"../../assets/chat/loader.gif\"></ion-img> -->\n            <!-- <p text-wrap padding> {{paramData.name || 'Pam'}} is typing...</p> -->\n            <div class=\"corner-parent-right\">\n              <div class=\"corner-child-right\">\n\n              </div>\n            </div>\n          </div>\n        </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer translucent>\n  <ion-item class=\"chat\" lines=\"none\">\n    <ion-icon slot=\"end\" name=\"send\" expand=\"icon-only\" (click)=\" sendMsg()\" class=\"footerIcon\"></ion-icon>\n    <ion-input class=\"input-box\" type=\"text\" placeholder=\"Type your message here\" [(ngModel)]=\"user_input\" (keypress)=\"userTyping($event)\"></ion-input>\n  </ion-item>\n</ion-footer>");

/***/ }),

/***/ "./src/app/chat-detail/chat-detail-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat-detail/chat-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChatDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageRoutingModule", function() { return ChatDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chat-detail/chat-detail.page.ts");




var routes = [
    {
        path: '',
        component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"]
    }
];
var ChatDetailPageRoutingModule = /** @class */ (function () {
    function ChatDetailPageRoutingModule() {
    }
    ChatDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatDetailPageRoutingModule);
    return ChatDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/chat-detail/chat-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.module.ts ***!
  \***************************************************/
/*! exports provided: ChatDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function() { return ChatDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-detail-routing.module */ "./src/app/chat-detail/chat-detail-routing.module.ts");
/* harmony import */ var _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-detail.page */ "./src/app/chat-detail/chat-detail.page.ts");







var ChatDetailPageModule = /** @class */ (function () {
    function ChatDetailPageModule() {
    }
    ChatDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatDetailPageRoutingModule"]
            ],
            declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]]
        })
    ], ChatDetailPageModule);
    return ChatDetailPageModule;
}());



/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .ios {\n  height: 65px;\n}\n\nion-toolbar .ios {\n  height: 65px;\n}\n\n.bg_header {\n  --background: #c4932f;\n  color: #fff;\n  --padding-top: 1.2em;\n  --padding-bottom: 2.5em;\n}\n\nion-title {\n  text-align: left;\n  font-size: 29px;\n  margin-right: 1em;\n  height: 43px;\n}\n\n.ios ion-title {\n  text-align: center;\n  font-size: 21px;\n  margin-right: 1em;\n  height: 43px;\n}\n\n.img_title {\n  margin-left: 1em;\n  margin-top: 10px;\n}\n\n.b_both {\n  background-color: #efeeee;\n  height: 20px;\n  position: fixed;\n  width: 100%;\n  margin-top: -2px;\n}\n\n.b_div {\n  background-color: #000;\n  height: 23px;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  margin-top: 0em;\n  position: fixed;\n  width: 100%;\n}\n\nion-header {\n  overflow: hidden;\n}\n\nion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-item {\n  --background: #f7f8fa;\n}\n\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0;\n  margin-top: 33%;\n}\n\n.imageAvatarRight {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.imageAvatarRight .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarRight .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarRight .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarRight .chatDiv {\n  text-align: justify;\n  position: relative;\n  background: #fff;\n  color: #000;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 72vw;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.04);\n  padding: 15px;\n  border-radius: 20px;\n}\n\n.imageAvatarRight ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarRight .sharper.chatDiv {\n  border-radius: 20px;\n}\n\n.imageAvatarLeft {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.imageAvatarLeft .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarLeft .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarLeft .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarLeft .chatDiv {\n  text-align: left;\n  position: relative;\n  background: #efeeee;\n  border-radius: 20px;\n  max-width: 72vw;\n  padding: 15px;\n}\n\n.imageAvatarLeft ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarLeft .sharper.chatDiv {\n  border-radius: 20px;\n}\n\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important;\n}\n\nion-fab {\n  bottom: 0px !important;\n}\n\n.footerIcon {\n  color: #000;\n}\n\nion-input {\n  --placeholder-color: rgba(244, 245, 248, 0.7);\n}\n\n.chatDivLoader {\n  position: relative;\n  background: #9164ac7a;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n}\n\n.chatDivLoader .corner-parent-right {\n  background: #9164ac7a;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  left: -4px;\n  bottom: -2px;\n  border-radius: 0;\n  border-radius: 5px;\n}\n\n.chatDivLoader .corner-parent-right .corner-child-right {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #9164ac7a;\n  position: absolute;\n  top: 7px;\n  left: -7px;\n}\n\nion-text {\n  font-size: 12px;\n  color: #e3e3e3;\n}\n\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.loading-col {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.right {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.left {\n  justify-content: flex-end;\n  padding-right: 20px;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  left: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: 15px 12px 0 0px #9164ac7a;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: -15px 12px 0 0px #20b1d4;\n}\n\n.input-box {\n  color: #000;\n}\n\n.bg_img {\n  background: #000;\n  position: fixed;\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.header_text {\n  font-size: 29px;\n  color: #fff;\n  position: absolute;\n  bottom: 25%;\n  text-align: left;\n  width: 100%;\n  left: 3%;\n}\n\n.num {\n  font-size: 31px;\n  background: #8d8d8d;\n  color: #fff;\n  border-radius: 50%;\n  padding: 4px 0px;\n  width: 51px;\n  height: 50px;\n}\n\n.both_pad {\n  padding: 0px 1em;\n}\n\n.num_div {\n  position: relative;\n  top: 0.3em;\n  font-family: \"RobotoSlab-Regular\";\n}\n\n.chat {\n  padding: 9px 9px;\n  --border-radius: 12px;\n}\n\nion-input {\n  --placeholder-color: #b0b0b0;\n  --placeholder-opacity: 1;\n}\n\n.card_div {\n  position: relative;\n  top: 15%;\n  border-radius: 15px;\n}\n\n/*ion-content {\n    --overflow: hidden;\n  }\n  .chatDivHeight{\n    overflow-y: scroll;\n    height: 36em;\n  }*/\n\n.country {\n  font-size: 12px;\n  color: #dedede;\n  margin-top: 0px;\n}\n\n.p_img {\n  height: 60px;\n  width: 56px;\n  border-radius: 14px;\n  border: 2px solid #e3e3e3;\n}\n\n.display {\n  display: block;\n}\n\n.heading {\n  margin: 0px;\n}\n\nion-footer {\n  background-color: #f7f8fa;\n}\n\n.img_avatar {\n  width: 50px;\n  border-radius: 50%;\n  height: 50px;\n  position: relative;\n  top: 10px;\n  border: 1px solid #fff;\n  margin-right: 12px;\n  margin-bottom: 2px;\n}\n\n.ios .img_avatar {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  position: relative;\n  top: 8px;\n  border: 2px solid #fff;\n  margin-right: 12px;\n}\n\n.imgtitle {\n  position: relative;\n  top: -9px;\n}\n\n.ios .imgtitle {\n  position: relative;\n  top: -7px;\n}\n\n.righttime {\n  color: #1a6bbe;\n  font-size: 12px;\n  margin-right: 10px;\n  margin-bottom: 1.5em;\n}\n\n.lefttime {\n  color: #1a6bbe;\n  font-size: 12px;\n  margin-left: 10px;\n  margin-bottom: 1.5em;\n}\n\n.sender {\n  color: #000;\n}\n\n.send_price {\n  font-size: 10px;\n  --padding-start: 14px;\n  --padding-end: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0FBTUY7O0FBSEE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EscUJBQUE7RUFNRjtBQUNGOztBQUhBO0VBQ0UscUJBQUE7QUFLRjs7QUFIQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBT0Y7O0FBTkU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQU9KOztBQUxFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBT0o7O0FBSkk7RUFDRSxtQkFBQTtBQU1OOztBQVdBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFURjs7QUFVRTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBVEo7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBVEo7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0FBVko7O0FBWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVZKOztBQWFJO0VBQ0UsbUJBQUE7QUFYTjs7QUEyQkE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBekJGOztBQTJCQTtFQUNFLHNCQUFBO0FBeEJGOztBQTBCQTtFQUNFLFdBQUE7QUF2QkY7O0FBeUJBO0VBQ0UsNkNBQUE7QUF0QkY7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQXJCRjs7QUFzQkU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFwQko7O0FBcUJJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQW5CTjs7QUF1QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQXBCRjs7QUFzQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQW5CRjs7QUFxQkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFvQkE7RUFDRSxrQkFBQTtBQWpCRjs7QUFtQkE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FBaEJGOztBQW1CQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFoQkY7O0FBa0JBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQWZGOztBQXFCTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWxCUjs7QUFtQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtBQWpCVjs7QUF3Qk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF0QlI7O0FBdUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFyQlY7O0FBMkJBO0VBQ0UsV0FBQTtBQXhCRjs7QUEwQkE7RUFDRSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxXQUFBO0FBeEJGOztBQTBCQTtFQUNFLGtCQUFBO0FBdkJGOztBQXlCQTtFQUNFLGdCQUFBO0FBdEJGOztBQXdCQTtFQUNFLGlCQUFBO0FBckJGOztBQXVCQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQXBCRjs7QUFzQkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBbkJGOztBQXFCQTtFQUNFLGdCQUFBO0FBbEJGOztBQW9CQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FBakJGOztBQW1CQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUFoQkY7O0FBa0JBO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtBQWZGOztBQWlCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FBZEY7O0FBaUJBOzs7Ozs7SUFBQTs7QUFPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWRGOztBQWdCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQWJGOztBQWVBO0VBQ0UsY0FBQTtBQVpGOztBQWNBO0VBQ0UsV0FBQTtBQVhGOztBQWFBO0VBQ0UseUJBQUE7QUFWRjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFURjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQVRGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBUkY7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFQRjs7QUFVQTtFQUNFLFdBQUE7QUFQRjs7QUFTQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9jaGF0LWRldGFpbC9jaGF0LWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIC5pb3Mge1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbmlvbi10b29sYmFyIC5pb3Mge1xuICBoZWlnaHQ6IDY1cHg7XG59XG5cbi5iZ19oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gIGNvbG9yOiAjZmZmO1xuICAtLXBhZGRpbmctdG9wOiAxLjJlbTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMi41ZW07XG59XG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDI5cHg7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBoZWlnaHQ6IDQzcHg7XG59XG5cbi5pb3MgaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIxcHg7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBoZWlnaHQ6IDQzcHg7XG59XG5cbi5pbWdfdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJfYm90aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVlZWU7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cbi5iX2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGhlaWdodDogMjNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1oZWFkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwLjhlbSAwLjFlbSAwIDA7XG4gIC0tYmFja2dyb3VuZDogI2M0OTMyZjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZChtaW4taGVpZ2h0IDogODAwcHgpIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDNlbSAwLjFlbSA4cHggMDtcbiAgICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG4gIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICNmN2Y4ZmE7XG59XG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMzMlO1xufVxuLmltYWdlQXZhdGFyUmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAuaW1hZ2VBdmF0YXJCb3R0b20ge1xuICAgIG1heC13aWR0aDogMjE0cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIGJhY2tncm91bmQ6ICM1QjI1NzM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICAgIHotaW5kZXg6IDExO1xuICB9XG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmlnaHQ6IDEwLjElO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2hhdERpdiB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBtYXgtd2lkdGg6IDcydnc7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA1cHggMnB4IHJnYigwIDAgMCAvIDQlKTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIH1cbiAgaW9uLWltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIC5zaGFycGVyIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cbiAgLnNoYXJwZXItYm90dG9tIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgIC8vICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICB9XG4gIH1cbiAgLnNoYXJwZXItdG9wIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgLy8gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAvLyAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG59XG5cbi5pbWFnZUF2YXRhckxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC5pbWFnZUF2YXRhckJvdHRvbSB7XG4gICAgbWF4LXdpZHRoOiAyMTRweDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLy8gYmFja2dyb3VuZDogIzVCMjU3MztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA2cHg7XG4gICAgei1pbmRleDogMTE7XG4gIH1cbiAgLmF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuaW1hZ2VBdmF0YXJCb3R0b21JY29uIHtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTclO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByaWdodDogMTAuMSU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5jaGF0RGl2IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLy9ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICBtYXgtd2lkdGg6IDcydnc7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiAgLnNoYXJwZXIge1xuICAgICYuY2hhdERpdiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgfVxuICAuc2hhcnBlci1ib3R0b20ge1xuICAgICYuY2hhdERpdiB7XG4gICAgICAvLyAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICAgIC8vICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG4gIC5zaGFycGVyLXRvcCB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIC8vICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgIC8vICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG59XG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50O1xufVxuaW9uLWZhYiB7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZm9vdGVySWNvbiB7XG4gIGNvbG9yOiAjMDAwO1xufVxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgyNDQsIDI0NSwgMjQ4LCAwLjcpO1xufVxuLmNoYXREaXZMb2FkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICM5MTY0YWM3YTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xuICAgIGJhY2tncm91bmQ6ICM5MTY0YWM3YTtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC00cHg7XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC5jb3JuZXItY2hpbGQtcmlnaHQge1xuICAgICAgd2lkdGg6IDZweDtcbiAgICAgIGhlaWdodDogNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgYmFja2dyb3VuZDogIzkxNjRhYzdhO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA3cHg7XG4gICAgICBsZWZ0OiAtN3B4O1xuICAgIH1cbiAgfVxufVxuaW9uLXRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZTNlM2UzO1xufVxuaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmltYWdlQXZhdGFyQm90dG9tTG9hZGVyIHtcbiAgbWF4LXdpZHRoOiAyMTRweDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG4gIHotaW5kZXg6IDExO1xufVxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5sb2FkaW5nLWNvbCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4ucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5sZWZ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmNsdWJiZWQge1xuICAuaW1hZ2VBdmF0YXJSaWdodCB7XG4gICAgLmNoYXREaXYge1xuICAgICAgLmNvcm5lci1wYXJlbnQtcmlnaHQge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2hhZG93OiAxNXB4IDEycHggMCAwcHggIzkxNjRhYzdhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbWFnZUF2YXRhckxlZnQge1xuICAgIC5jaGF0RGl2IHtcbiAgICAgIC5jb3JuZXItcGFyZW50LWxlZnQge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgLmNvcm5lci1jaGlsZC1sZWZ0IHtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTVweCAxMnB4IDAgMHB4ICMyMGIxZDQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5pbnB1dC1ib3gge1xuICBjb2xvcjogIzAwMDtcbn1cbi5iZ19pbWcge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAvLyAgcGFkZGluZy1ib3R0b206IDEzJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5oZWFkZXJfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMjlweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAzJTtcbn1cbi5udW0ge1xuICBmb250LXNpemU6IDMxcHg7XG4gIGJhY2tncm91bmQ6ICM4ZDhkOGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDRweCAwcHg7XG4gIHdpZHRoOiA1MXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uYm90aF9wYWQge1xuICBwYWRkaW5nOiAwcHggMWVtO1xufVxuLm51bV9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMC4zZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1NsYWItUmVndWxhclwiO1xufVxuLmNoYXQge1xuICBwYWRkaW5nOiA5cHggOXB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5pb24taW5wdXQge1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjYjBiMGIwO1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG4uY2FyZF9kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4vKmlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmNoYXREaXZIZWlnaHR7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGhlaWdodDogMzZlbTtcbiAgfSovXG4uY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNkZWRlZGU7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5wX2ltZyB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDU2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlM2UzZTM7XG59XG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlYWRpbmcge1xuICBtYXJnaW46IDBweDtcbn1cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZhO1xufVxuLmltZ19hdmF0YXIge1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmlvcyAuaW1nX2F2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaW1ndGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTlweDtcbn1cblxuLmlvcyAuaW1ndGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTdweDtcbn1cbi5yaWdodHRpbWUge1xuICBjb2xvcjogIzFhNmJiZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuLmxlZnR0aW1lIHtcbiAgY29sb3I6ICMxYTZiYmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG4uc2VuZGVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VuZF9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/chat-detail/chat-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-detail/chat-detail.page.ts ***!
  \*************************************************/
/*! exports provided: ChatDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function() { return ChatDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _enter_offer_enter_offer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enter-offer/enter-offer.page */ "./src/app/enter-offer/enter-offer.page.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








var ChatDetailPage = /** @class */ (function () {
    function ChatDetailPage(popoverController, restService, storage, router, activatedRoute, location) {
        var _this = this;
        this.popoverController = popoverController;
        this.restService = restService;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.user_input = "";
        this.User = 0;
        this.toUser = 0;
        this.btnSendPrice = false;
        this.activatedRoute.queryParams.subscribe(function (res) {
            _this.storage.get('base_urls').then(function (base_urls) {
                _this.base_url = base_urls;
                _this.userData = JSON.parse(res.value);
                console.log(res);
                _this.sender_id = _this.userData.userID;
                _this.receiver_id = _this.userData.otherUserId;
                _this.toUser = _this.sender_id;
                _this.User = _this.receiver_id;
                _this.profileImg = _this.base_url + '' + _this.userData.profile_img;
                _this.sender_name = _this.userData.user_name;
                console.log(_this.sender_name);
                if (_this.userData.motor_detail) {
                    console.log(_this.userData.motor_detail);
                    _this.btnSendPrice = true;
                }
            });
        });
    }
    ChatDetailPage.prototype.ngOnInit = function () {
        //this.sendOffer();
    };
    ChatDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('base_urls').then(function (base_urls) {
            _this.base_url = base_urls;
            _this.storage.get('user_details').then(function (user_details) {
                console.log(user_details);
                /* if(user_details){
                   this.storage.get('profile_img_url').then((profile_img_url) => {
                      this.profileImg = this.base_url+''+profile_img_url;
                   });
                 }*/
                //  this.sender_name = user_details.user_name;
                _this.userId = user_details.users_id;
                _this.autoSaveInterval = setInterval(function () {
                    _this.senderSends();
                }, 2000);
                _this.getMesges();
            });
        });
    };
    ChatDetailPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.autoSaveInterval);
        console.log('clear');
    };
    ChatDetailPage.prototype.sendOffer = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var popover;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _enter_offer_enter_offer_page__WEBPACK_IMPORTED_MODULE_6__["EnterOfferPage"],
                            componentProps: {
                                "data": this.userData.motor_detail
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
    ChatDetailPage.prototype.getMesges = function () {
        var _this = this;
        var stringy = JSON.stringify({
            requestType: 'getMessages',
            usersID: this.receiver_id,
            otherUserId: this.sender_id
        });
        this.restService.update_messages(stringy).subscribe(function (response) {
            _this.getMessages = JSON.parse(response['_body']);
            _this.msgList = _this.getMessages.chat_messages;
            console.log(_this.getMessages);
            _this.scrollDown();
            //this.router.navigate(['/matches']);
        });
    };
    ChatDetailPage.prototype.sendMsg = function () {
        var _this = this;
        var now = new Date();
        //var date = now.toLocaleDateString();
        console.log(now);
        var time = now.toLocaleTimeString();
        //+' '+time.split(' ')[1]
        this.currentTime = time.split(':')[0] + ':' + time.split(':')[1];
        if (this.user_input !== '') {
            this.msgList.push({
                userId: this.toUser,
                time: this.currentTime,
                message: this.user_input
            });
            var stringy = JSON.stringify({
                requestType: 'sendMessage',
                usersID: this.sender_id,
                otherUserId: this.receiver_id,
                chatMsg: this.user_input,
                time_send: this.currentTime
            });
            this.user_input = "";
            this.restService.update_messages(stringy).subscribe(function (response) {
                _this.getResponse = JSON.parse(response['_body']);
                console.log(_this.getMessages);
                if (_this.getResponse.status) {
                    /*this.msgList.push({
                      userId: this.toUser,
                      time:  this.currentTime,
                      message: this.user_input
                    })
                    this.user_input = ""; */
                    _this.scrollDown();
                }
                else {
                    _this.msgList.splice(_this.msgList.length - 1, 1);
                }
                //this.router.navigate(['/matches']);
            });
            /* setTimeout(() => {
               this.senderSends()
             }, 500); */
        }
    };
    ChatDetailPage.prototype.senderSends = function () {
        var _this = this;
        //this.loader = true;
        var stringy = JSON.stringify({
            requestType: 'unreadMessages',
            usersID: this.sender_id,
            otherUserId: this.receiver_id,
            chatMsg: this.user_input
        });
        this.restService.update_messages(stringy).subscribe(function (response) {
            _this.getResponse = JSON.parse(response['_body']);
            _this.unreadMessages = _this.getResponse.unread_messages;
            _this.chatLength = _this.getResponse.chat_length;
            console.log(_this.msgList.length + '--' + _this.chatLength);
            if (_this.msgList.length > 0) {
                if (_this.chatLength != _this.msgList.length) {
                    for (var i = 0; i < _this.unreadMessages.length; i++) {
                        console.log(i);
                        _this.msgList.push({
                            userId: _this.unreadMessages[i].userId,
                            time: _this.unreadMessages[i].time,
                            message: _this.unreadMessages[i].message
                        });
                    }
                    _this.scrollDown();
                }
            }
            //this.loader = false;
        });
        //  this.scrollDown()
    };
    ChatDetailPage.prototype.scrollDown = function () {
        var _this = this;
        // document.querySelector('.chat_8').scrollIntoView();
        setTimeout(function () {
            // this.content.scrollToBottom(50)
            _this.content.scrollToBottom(50);
        }, 170);
    };
    ChatDetailPage.prototype.userTyping = function (event) {
        console.log(event);
        this.start_typing = event.target.value;
        // this.scrollDown()
    };
    ChatDetailPage.prototype.back = function () {
        clearInterval(this.autoSaveInterval);
        //this.router.navigate(['/chat-list']);
        this.location.back();
    };
    ChatDetailPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"] },
        { type: _rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
    ]; };
    ChatDetailPage.propDecorators = {
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['IonContent', { static: true },] }]
    };
    ChatDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-detail',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat-detail.page.scss */ "./src/app/chat-detail/chat-detail.page.scss")).default]
        })
    ], ChatDetailPage);
    return ChatDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=chat-detail-chat-detail-module.js.map