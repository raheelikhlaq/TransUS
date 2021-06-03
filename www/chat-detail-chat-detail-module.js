(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-detail-chat-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-detail/chat-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header no-border>\n  <ion-toolbar class=\"bg_header\">\n    <img src=\"assets/img/Arrow.svg\" class=\"img_title\" slot=\"start\" (click)=\"back()\">\n      <ion-title class=\"alura\">\n        <img src=\"{{profileImg}}\" class=\"img_avatar\">\n        <span style=\"font-size: 17px;\" class=\"imgtitle\">{{sender_name}}</span> \n      </ion-title>\n      <ion-button color=\"secondary\" shape=\"round\"  slot=\"end\" class=\"send_price\" (click)=\"sendOffer()\" *ngIf=\"btnSendPrice\">Send Price</ion-button>\n  </ion-toolbar>\n</ion-header>\n<ion-content #IonContent padding>\n \n  <!--<ion-card class=\"card_div\">\n    <ion-card-content class=\"chatDivHeight\">-->\n    <ion-list>\n     <div *ngFor=\"let chat of msgList; let i = index; \">\n      <ion-row *ngIf=\"chat.date\">\n        <ion-col>\n          <ion-text>{{chat.date}}</ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"chat.userId == User\">\n        <ion-col class=\"right\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\n          <div class=\"imageAvatarRight\">\n            <div class=\"imageAvatarBottom\">\n              <!--<ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\n                <div class=\"imageAvatarBottomIcon\">\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n                </div>\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\n              </ion-avatar>-->\n            </div>\n            <ion-label color=\"light\">\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\n                <p class=\"reciver\"  text-wrap padding>{{chat.message}} \n                </p>\n              </div>\n            </ion-label>\n            <span class=\"lefttime\">{{chat.time }} </span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"chat.userId == toUser\">\n        <ion-col class=\"left\" no-padding [ngClass]=\"{'clubbed':((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])}\">\n          <div class=\"imageAvatarLeft\">\n            <span class=\"righttime\">{{chat.time }} </span>\n            <ion-label color=\"light\">\n              <div class=\"chatDiv\" [ngClass]=\"{'sharper':((msgList[i+1] && msgList[i+1].userId == chat.userId) && \n              (msgList[i-1] && msgList[i-1].userId == chat.userId)),\n              'sharper-top':(msgList[i-1] && msgList[i-1].userId == chat.userId),\n              'sharper-bottom':(msgList[i+1] && msgList[i+1].userId == chat.userId)}\">\n                <p class=\"sender\"   text-wrap padding>{{chat.message}} </p>\n                <!--<div class=\"corner-parent-left\">\n                  <div class=\"corner-child-left\">\n\n                  </div>\n                </div>-->\n              </div>\n            </ion-label>\n            <div class=\"imageAvatarBottom\">\n              <!-- <ion-icon class=\"imageAvatarBottomIcon\" name=\"add\" expand=\"icon-only\" color=\"success\"></ion-icon> -->\n              <!--<ion-avatar class=\"avatar\" [ngClass]=\"(msgList[i+1] && msgList[i+1].userId == chat.userId)?'hidden':''\">\n                <div class=\"imageAvatarBottomIcon\">\n                  <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n                </div>\n                <ion-img [src]=\"chat.userAvatar\"></ion-img>\n              </ion-avatar>-->\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <!--<ion-row *ngIf=\"((msgList[i+1] && msgList[i+1].userId != chat.userId)|| !msgList[i+1])\">\n        <ion-col>\n          <ion-text>{{chat.time}}</ion-text>\n        </ion-col>\n      </ion-row>-->\n    </div>\n  </ion-list>\n<!--</ion-card-content>\n</ion-card>-->\n  <!--<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\" sendMsg()\">\n      <ion-icon name=\"send\" expand=\"icon-only\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>-->\n\n  <ion-row *ngIf=\"loader\">\n    <ion-col no-padding class=\"loading-col\">\n      <div class=\"imageAvatarRight\">\n        <div class=\"imageAvatarBottomLoader\">\n          <!--<ion-avatar class=\"avatar\">\n            <div class=\"imageAvatarBottomIcon\">\n              <ion-icon name=\"add\" expand=\"icon-only\" color=\"light\"> </ion-icon>\n            </div>\n            <ion-img src=\"assets/img/chat/chat5.jpg\"></ion-img>\n          </ion-avatar>-->\n        </div>\n        <ion-label>\n          <div class=\"chatDivLoader\">\n              <ion-spinner name=\"dots\" color=\"light\"></ion-spinner>\n            <!-- <ion-img src=\"../../assets/chat/loader.gif\"></ion-img> -->\n            <!-- <p text-wrap padding> {{paramData.name || 'Pam'}} is typing...</p> -->\n            <div class=\"corner-parent-right\">\n              <div class=\"corner-child-right\">\n\n              </div>\n            </div>\n          </div>\n        </ion-label>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer translucent>\n  <ion-item class=\"chat\" lines=\"none\">\n    <ion-icon slot=\"end\" name=\"send\" expand=\"icon-only\" (click)=\" sendMsg()\" class=\"footerIcon\"></ion-icon>\n    <ion-input class=\"input-box\" type=\"text\" placeholder=\"Type your message here\" [(ngModel)]=\"user_input\" (keypress)=\"userTyping($event)\"></ion-input>\n  </ion-item>\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-header .ios {\n  height: 65px;\n}\n\nion-toolbar .ios {\n  height: 65px;\n}\n\nion-header.md.header-md.header-collapse-none.hydrated {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n\n.bg_header {\n  --background: #c4932f;\n  color: #fff;\n}\n\nion-title {\n  text-align: left;\n  font-size: 20px;\n  margin-right: 1em;\n  height: 43px;\n}\n\n.ios ion-title {\n  text-align: center;\n  font-size: 21px;\n  margin-right: 1em;\n  height: 43px;\n}\n\n.img_title {\n  margin-left: 1em;\n  margin-top: 10px;\n}\n\n.b_both {\n  background-color: #efeeee;\n  height: 20px;\n  position: fixed;\n  width: 100%;\n  margin-top: -2px;\n}\n\n.b_div {\n  background-color: #000;\n  height: 23px;\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  margin-top: 0em;\n  position: fixed;\n  width: 100%;\n}\n\nion-header {\n  overflow: hidden;\n}\n\nion-toolbar {\n  padding: 0.8em 0.1em 0 0;\n  --background: #c4932f;\n}\n\n@media only screen and (min-height: 800px) {\n  ion-toolbar {\n    padding: 3em 0.1em 8px 0;\n    --background: #c4932f;\n  }\n}\n\nion-item {\n  --background: #f7f8fa;\n}\n\nion-list {\n  background: transparent;\n  padding-top: 20px;\n  margin-bottom: 0;\n}\n\n.imageAvatarRight {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.imageAvatarRight .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarRight .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarRight .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarRight .chatDiv {\n  text-align: justify;\n  position: relative;\n  background: #fff;\n  color: #000;\n  border-radius: 6px;\n  border-bottom-left-radius: 0;\n  max-width: 72vw;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.04);\n  padding: 15px;\n  border-radius: 20px;\n}\n\n.imageAvatarRight ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarRight .sharper.chatDiv {\n  border-radius: 20px;\n}\n\n.imageAvatarLeft {\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.imageAvatarLeft .imageAvatarBottom {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 6px;\n  z-index: 11;\n}\n\n.imageAvatarLeft .avatar {\n  width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarLeft .imageAvatarBottomIcon {\n  width: 12px;\n  height: 12px;\n  border-radius: 50px;\n  background: var(--ion-color-tertiary-tint);\n  position: absolute;\n  top: 17%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 10.1%;\n  color: white;\n}\n\n.imageAvatarLeft .chatDiv {\n  text-align: left;\n  position: relative;\n  background: #efeeee;\n  border-radius: 20px;\n  max-width: 72vw;\n  padding: 15px;\n}\n\n.imageAvatarLeft ion-img {\n  width: 35px;\n  height: 35px;\n}\n\n.imageAvatarLeft .sharper.chatDiv {\n  border-radius: 20px;\n}\n\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important;\n}\n\nion-fab {\n  bottom: 0px !important;\n}\n\n.footerIcon {\n  color: #000;\n}\n\nion-input {\n  --placeholder-color: rgba(244, 245, 248, 0.7);\n}\n\n.chatDivLoader {\n  position: relative;\n  background: #9164ac7a;\n  border-radius: 16px;\n  min-width: 80px;\n  max-width: 80px;\n  display: flex;\n  align-items: center;\n  color: white;\n  padding: 2px;\n  display: flex;\n  justify-content: center;\n}\n\n.chatDivLoader .corner-parent-right {\n  background: #9164ac7a;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  left: -4px;\n  bottom: -2px;\n  border-radius: 0;\n  border-radius: 5px;\n}\n\n.chatDivLoader .corner-parent-right .corner-child-right {\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background: #9164ac7a;\n  position: absolute;\n  top: 7px;\n  left: -7px;\n}\n\nion-text {\n  font-size: 12px;\n  color: #e3e3e3;\n}\n\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageAvatarBottomLoader {\n  max-width: 214px;\n  align-items: flex-end;\n  display: flex;\n  border-radius: 50%;\n  position: relative;\n  top: 8px;\n  z-index: 11;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.loading-col {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.right {\n  justify-content: flex-start;\n  padding-left: 20px;\n}\n\n.left {\n  justify-content: flex-end;\n  padding-right: 20px;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  left: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarRight .chatDiv .corner-parent-right .corner-child-right {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: 15px 12px 0 0px #9164ac7a;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left {\n  height: 30px;\n  width: 30px;\n  background: transparent;\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 0;\n}\n\n.clubbed .imageAvatarLeft .chatDiv .corner-parent-left .corner-child-left {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background: transparent;\n  box-shadow: -15px 12px 0 0px #20b1d4;\n}\n\n.input-box {\n  color: #000;\n}\n\n.bg_img {\n  background: #000;\n  position: fixed;\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.header_text {\n  font-size: 29px;\n  color: #fff;\n  position: absolute;\n  bottom: 25%;\n  text-align: left;\n  width: 100%;\n  left: 3%;\n}\n\n.num {\n  font-size: 31px;\n  background: #8d8d8d;\n  color: #fff;\n  border-radius: 50%;\n  padding: 4px 0px;\n  width: 51px;\n  height: 50px;\n}\n\n.both_pad {\n  padding: 0px 1em;\n}\n\n.num_div {\n  position: relative;\n  top: 0.3em;\n  font-family: \"RobotoSlab-Regular\";\n}\n\n.chat {\n  padding: 9px 9px;\n  --border-radius: 12px;\n}\n\nion-input {\n  --placeholder-color: #b0b0b0;\n  --placeholder-opacity: 1;\n}\n\n.card_div {\n  position: relative;\n  top: 15%;\n  border-radius: 15px;\n}\n\n/*ion-content {\n    --overflow: hidden;\n  }\n  .chatDivHeight{\n    overflow-y: scroll;\n    height: 36em;\n  }*/\n\n.country {\n  font-size: 12px;\n  color: #dedede;\n  margin-top: 0px;\n}\n\n.p_img {\n  height: 60px;\n  width: 56px;\n  border-radius: 14px;\n  border: 2px solid #e3e3e3;\n}\n\n.display {\n  display: block;\n}\n\n.heading {\n  margin: 0px;\n}\n\nion-footer {\n  background-color: #f7f8fa;\n}\n\n.img_avatar {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  position: relative;\n  top: 7px;\n  border: 1px solid #fff;\n  margin-right: 12px;\n  margin-bottom: 2px;\n}\n\n.ios .img_avatar {\n  width: 40px;\n  border-radius: 50%;\n  height: 40px;\n  position: relative;\n  top: 8px;\n  border: 2px solid #fff;\n  margin-right: 12px;\n}\n\n.imgtitle {\n  position: relative;\n  top: -9px;\n}\n\n.ios .imgtitle {\n  position: relative;\n  top: -7px;\n}\n\n.righttime {\n  color: #1a6bbe;\n  font-size: 12px;\n  margin-right: 10px;\n  margin-bottom: 1.5em;\n}\n\n.lefttime {\n  color: #1a6bbe;\n  font-size: 12px;\n  margin-left: 10px;\n  margin-bottom: 1.5em;\n}\n\n.sender {\n  color: #000;\n}\n\n.send_price {\n  font-size: 10px;\n  --padding-start: 14px;\n  --padding-end: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFGQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxxQkFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUpFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VB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Y0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0FBVEY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVJGIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciAuaW9zIHtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuXG5pb24tdG9vbGJhciAuaW9zIHtcbiAgaGVpZ2h0OiA2NXB4O1xufVxuaW9uLWhlYWRlci5tZC5oZWFkZXItbWQuaGVhZGVyLWNvbGxhcHNlLW5vbmUuaHlkcmF0ZWR7XG4gIHBhZGRpbmctdG9wOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4uYmdfaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICBjb2xvcjogI2ZmZjtcbiAgLy8gLS1wYWRkaW5nLXRvcDogMS4yZW07XG4gIC8vIC0tcGFkZGluZy1ib3R0b206IDIuNWVtO1xufVxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgaGVpZ2h0OiA0M3B4O1xufVxuXG4uaW9zIGlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgaGVpZ2h0OiA0M3B4O1xufVxuXG4uaW1nX3RpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5iX2JvdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZWVlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG4uYl9kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBoZWlnaHQ6IDIzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24taGVhZGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMC44ZW0gMC4xZW0gMCAwO1xuICAtLWJhY2tncm91bmQ6ICNjNDkzMmY7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQobWluLWhlaWdodCA6IDgwMHB4KSB7XG4gIGlvbi10b29sYmFyIHtcbiAgICBwYWRkaW5nOiAzZW0gMC4xZW0gOHB4IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiAjYzQ5MzJmO1xuICB9XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmOGZhO1xufVxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8vIG1hcmdpbi10b3A6IDMzJTtcbn1cbi5pbWFnZUF2YXRhclJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLmltYWdlQXZhdGFyQm90dG9tIHtcbiAgICBtYXgtd2lkdGg6IDIxNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNUIyNTczO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDZweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgfVxuICAuYXZhdGFyIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5pbWFnZUF2YXRhckJvdHRvbUljb24ge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJpZ2h0OiAxMC4xJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmNoYXREaXYge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDJweCByZ2IoMCAwIDAgLyA0JSk7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIGlvbi1pbWcge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICAuc2hhcnBlciB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuICB9XG4gIC5zaGFycGVyLWJvdHRvbSB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAvLyAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG4gIC5zaGFycGVyLXRvcCB7XG4gICAgJi5jaGF0RGl2IHtcbiAgICAgIC8vICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgLy8gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uaW1hZ2VBdmF0YXJMZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAuaW1hZ2VBdmF0YXJCb3R0b20ge1xuICAgIG1heC13aWR0aDogMjE0cHg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8vIGJhY2tncm91bmQ6ICM1QjI1NzM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xuICAgIHotaW5kZXg6IDExO1xuICB9XG4gIC5hdmF0YXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmltYWdlQXZhdGFyQm90dG9tSWNvbiB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE3JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcmlnaHQ6IDEwLjElO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuY2hhdERpdiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2VmZWVlZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC8vYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgbWF4LXdpZHRoOiA3MnZ3O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgaW9uLWltZyB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG4gIC5zaGFycGVyIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG4gIH1cbiAgLnNoYXJwZXItYm90dG9tIHtcbiAgICAmLmNoYXREaXYge1xuICAgICAgLy8gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAvLyAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuICAuc2hhcnBlci10b3Age1xuICAgICYuY2hhdERpdiB7XG4gICAgICAvLyAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAvLyAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxufVxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ3cHggIWltcG9ydGFudDtcbn1cbmlvbi1mYWIge1xuICBib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuLmZvb3Rlckljb24ge1xuICBjb2xvcjogIzAwMDtcbn1cbmlvbi1pbnB1dCB7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMjQ0LCAyNDUsIDI0OCwgMC43KTtcbn1cbi5jaGF0RGl2TG9hZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWF4LXdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kOiAjOTE2NGFjN2E7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAtNHB4O1xuICAgIGJvdHRvbTogLTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAuY29ybmVyLWNoaWxkLXJpZ2h0IHtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBoZWlnaHQ6IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIGJhY2tncm91bmQ6ICM5MTY0YWM3YTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogN3B4O1xuICAgICAgbGVmdDogLTdweDtcbiAgICB9XG4gIH1cbn1cbmlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2UzZTNlMztcbn1cbmlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWFnZUF2YXRhckJvdHRvbUxvYWRlciB7XG4gIG1heC13aWR0aDogMjE0cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xuICB6LWluZGV4OiAxMTtcbn1cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubG9hZGluZy1jb2wge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLnJpZ2h0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ubGVmdCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5jbHViYmVkIHtcbiAgLmltYWdlQXZhdGFyUmlnaHQge1xuICAgIC5jaGF0RGl2IHtcbiAgICAgIC5jb3JuZXItcGFyZW50LXJpZ2h0IHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogLTMwcHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgLmNvcm5lci1jaGlsZC1yaWdodCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogMTVweCAxMnB4IDAgMHB4ICM5MTY0YWM3YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaW1hZ2VBdmF0YXJMZWZ0IHtcbiAgICAuY2hhdERpdiB7XG4gICAgICAuY29ybmVyLXBhcmVudC1sZWZ0IHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0zMHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC5jb3JuZXItY2hpbGQtbGVmdCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogLTE1cHggMTJweCAwIDBweCAjMjBiMWQ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uaW5wdXQtYm94IHtcbiAgY29sb3I6ICMwMDA7XG59XG4uYmdfaW1nIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgLy8gIHBhZGRpbmctYm90dG9tOiAxMyU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaGVhZGVyX3RleHQge1xuICBmb250LXNpemU6IDI5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMyU7XG59XG4ubnVtIHtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBiYWNrZ3JvdW5kOiAjOGQ4ZDhkO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA0cHggMHB4O1xuICB3aWR0aDogNTFweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmJvdGhfcGFkIHtcbiAgcGFkZGluZzogMHB4IDFlbTtcbn1cbi5udW1fZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuM2VtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9TbGFiLVJlZ3VsYXJcIjtcbn1cbi5jaGF0IHtcbiAgcGFkZGluZzogOXB4IDlweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuaW9uLWlucHV0IHtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogI2IwYjBiMDtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuLmNhcmRfZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE1JTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLyppb24tY29udGVudCB7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5jaGF0RGl2SGVpZ2h0e1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDM2ZW07XG4gIH0qL1xuLmNvdW50cnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZGVkZWRlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ucF9pbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA1NnB4O1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTNlM2UzO1xufVxuLmRpc3BsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkaW5nIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmYTtcbn1cbi5pbWdfYXZhdGFyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmlvcyAuaW1nX2F2YXRhciB7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaW1ndGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTlweDtcbn1cblxuLmlvcyAuaW1ndGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTdweDtcbn1cbi5yaWdodHRpbWUge1xuICBjb2xvcjogIzFhNmJiZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuLmxlZnR0aW1lIHtcbiAgY29sb3I6ICMxYTZiYmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG4uc2VuZGVyIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uc2VuZF9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xuICAtLXBhZGRpbmctZW5kOiAxNHB4O1xufVxuIl19 */");

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