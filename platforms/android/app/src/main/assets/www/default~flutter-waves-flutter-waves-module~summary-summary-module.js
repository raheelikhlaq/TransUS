(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~flutter-waves-flutter-waves-module~summary-summary-module"],{

/***/ "./node_modules/flutterwave-angular-v3/__ivy_ngcc__/flutterwave-angular-v3.js":
/*!************************************************************************************!*\
  !*** ./node_modules/flutterwave-angular-v3/__ivy_ngcc__/flutterwave-angular-v3.js ***!
  \************************************************************************************/
/*! exports provided: FlutterwaveModule, Flutterwave, InlinePaymentOptions, PaymentSuccessResponse, AsyncPaymentOptions, MakePaymentComponent, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlutterwaveModule", function() { return FlutterwaveModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flutterwave", function() { return Flutterwave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlinePaymentOptions", function() { return InlinePaymentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessResponse", function() { return PaymentSuccessResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncPaymentOptions", function() { return AsyncPaymentOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentComponent", function() { return MakePaymentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ApiTracking; });
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * Payment data object
 * \@property public_key {String}
 * \@property callbackContext {Object}  The context of the
 * component or service that has the callback method.
 * The value must always be 'this'.
 * Using any other value might lead to error.
 * \@property tx_ref {String}
 * \@property amount {Number}
 * \@property currency {String}
 * \@property payment_options {String}
 * \@property payment_plan {String}
 * \@property redirect_url {String}
 * \@property meta {Object}
 * \@property customer {Object}
 * \@property customizations {Object}
 * \@property callback {Function}
 * \@property onclose {Function}
 */




var InlinePaymentOptions = function InlinePaymentOptions() {
  Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InlinePaymentOptions);
};
/**
 * Async Payment data object
 * \@property public_key {String}
 * \@property tx_ref {String}
 * \@property amount {Number}
 * \@property currency {String}
 * \@property payment_options {String}
 * \@property meta {Object}
 * \@property customer {Object}
 * \@property customizations {Object}
 * \@property payment_plan {String}
 */


var AsyncPaymentOptions = function AsyncPaymentOptions() {
  Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AsyncPaymentOptions);
};
/**
 * Payment Response
 * \@property amount {String}
 * \@property currency {Number}
 * \@property customer {Object}
 * \@property flw_ref {String}
 * \@property status {String}
 * \@property transaction_id {String}
 * \@property tx_ref {String}
 * \@property payment_plan {String}
 */


var PaymentSuccessResponse = function PaymentSuccessResponse() {
  Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PaymentSuccessResponse);
};

var ApiTracking = /*#__PURE__*/function () {
  function ApiTracking() {
    Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ApiTracking);

    this.trackingEndPoint = 'https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent';
    this.packageVersion = '1.2.1';
    this.language = 'Angular V3';
  }
  /**
   * @param {?} data
   * @return {?}
   */


  Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ApiTracking, [{
    key: "track",
    value: function track(data) {
      var
      /** @type {?} */
      trackingData = {
        publicKey: data.paymentData.public_key,
        language: this.language,
        version: this.packageVersion,
        title: '',
        message: '0' // data.responseTime

      };
      var
      /** @type {?} */
      paymentOptions = data.paymentData.payment_options || '';
      var
      /** @type {?} */
      paymentOptionsArray = paymentOptions ? paymentOptions.split(',') : [];
      var
      /** @type {?} */
      title = '';

      if (paymentOptionsArray.length === 0) {
        title = 'Initiate-Charge-Dashboard';
      } else if (paymentOptionsArray.length === 1) {
        title = 'Initiate-Charge-' + paymentOptions;
      } else {
        title = 'Initiate-Charge-Multiple';
      }

      trackingData.title = data.response.status === 'successful' ? title : title + '-error';
      this.submitTracking(trackingData);
    }
    /**
     * @param {?} data
     * @return {?}
     */

  }, {
    key: "submitTracking",
    value: function submitTracking(data) {
      fetch(this.trackingEndPoint, {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(function (res) {});
    }
  }]);

  return ApiTracking;
}();

ApiTracking.ɵfac = function ApiTracking_Factory(t) {
  return new (t || ApiTracking)();
};

ApiTracking.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ApiTracking,
  factory: ApiTracking.ɵfac
});
/**
 * @nocollapse
 */

ApiTracking.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ApiTracking, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
  }], function () {
    return [];
  }, null);
})();

var Flutterwave = /*#__PURE__*/function () {
  /**
   * @param {?} tracker
   */
  function Flutterwave(tracker) {
    Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Flutterwave);

    this.tracker = tracker;
  }
  /**
   * @param {?} paymentData
   * @return {?}
   */


  Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Flutterwave, [{
    key: "inlinePay",
    value: function inlinePay(paymentData) {
      var _this = this;

      var
      /** @type {?} */
      data = Object.assign({}, paymentData, {
        callback: function callback(response) {
          _this.submitToTracker(paymentData, response, 10000);

          paymentData.callbackContext[paymentData.callback.name](response);
        },
        onclose: function onclose() {
          try {
            paymentData.callbackContext[paymentData.onclose.name]();
          } catch (e) {}
        }
      });
      FlutterwaveCheckout(data);
    }
    /**
     * @param {?} paymentData
     * @return {?}
     */

  }, {
    key: "asyncInlinePay",
    value: function asyncInlinePay(paymentData) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        paymentData = Object.assign({}, paymentData, {
          callback: function callback($event) {
            _this2.submitToTracker(paymentData, $event, 10000);

            resolve($event);
          },
          onclose: function onclose() {
            return resolve('closed');
          }
        });
        FlutterwaveCheckout(paymentData);
      });
    }
    /**
     * @param {?} paymentData
     * @param {?} response
     * @param {?} responseTime
     * @return {?}
     */

  }, {
    key: "submitToTracker",
    value: function submitToTracker(paymentData, response, responseTime) {
      this.tracker.track({
        paymentData: paymentData,
        response: response,
        responseTime: responseTime
      });
    }
    /**
     *
     * @param {?=} waitDuration {Number} Seconds before closing payment modal
     * @return {?}
     */

  }, {
    key: "closePaymentModal",
    value: function closePaymentModal() {
      var waitDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      setTimeout(function () {
        document.getElementsByName('checkout')[0].setAttribute('style', 'position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;');
        document.body.style.overflow = ''; // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
      }, waitDuration * 1000);
    }
  }]);

  return Flutterwave;
}();

Flutterwave.ɵfac = function Flutterwave_Factory(t) {
  return new (t || Flutterwave)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ApiTracking));
};

Flutterwave.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: Flutterwave,
  factory: Flutterwave.ɵfac
});
/**
 * @nocollapse
 */

Flutterwave.ctorParameters = function () {
  return [{
    type: ApiTracking
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Flutterwave, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
  }], function () {
    return [{
      type: ApiTracking
    }];
  }, null);
})();

var MakePaymentComponent = /*#__PURE__*/function () {
  /**
   * @param {?} flutterwave
   */
  function MakePaymentComponent(flutterwave) {
    Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MakePaymentComponent);

    this.flutterwave = flutterwave;
    this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    this.customer_defaults = {
      email: '',
      phone_number: '',
      name: ''
    };
    this.meta_defaults = {
      consumer_id: '',
      consumer_mac: ''
    };
    this.customizations_defaults = {
      title: '',
      description: '',
      logo: ''
    };
  }
  /**
   * @return {?}
   */


  Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MakePaymentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
    /**
     * @return {?}
     */

  }, {
    key: "makePayment",
    value: function makePayment() {
      this.prepareForPayment();
      FlutterwaveCheckout(this.inlinePaymentOptions);
    }
    /**
     * @return {?}
     */

  }, {
    key: "prepareForPayment",
    value: function prepareForPayment() {
      var _this3 = this;

      this.customer = this.customer || {};
      this.meta = this.meta || {};
      this.customizations = this.customizations || {};

      if (this.data) {
        this.inlinePaymentOptions = Object.assign({}, this.data, {
          callback: function callback(response) {
            _this3.flutterwave.submitToTracker(_this3.data, response, 10000);

            _this3.data.callbackContext[_this3.data.callback.name](response);
          },
          onclose: function onclose() {
            try {
              _this3.data.callbackContext[_this3.data.onclose.name]();
            } catch (e) {}
          }
        });
      } else {
        this.inlinePaymentOptions = {
          callbackContext: null,
          public_key: this.public_key,
          tx_ref: this.tx_ref,
          amount: this.amount,
          currency: this.currency || 'NGN',
          payment_options: this.payment_options || 'card, mobilemoney, ussd',
          redirect_url: this.redirect_url || '',
          meta: Object.assign({}, this.meta_defaults, this.meta),
          customer: Object.assign({}, this.customer_defaults, this.customer),
          callback: function callback(response) {
            _this3.flutterwave.submitToTracker(_this3.inlinePaymentOptions, response, 10000);

            _this3.callback.emit(response);
          },
          onclose: function onclose() {
            return _this3.close.emit();
          },
          customizations: Object.assign({}, this.customizations_defaults, this.customizations)
        };

        if (this.payment_plan) {
          this.inlinePaymentOptions.payment_plan = this.payment_plan;
        }

        if (this.subaccounts) {
          this.inlinePaymentOptions.subaccounts = this.subaccounts;
        }

        if (this.integrity_hash) {
          this.inlinePaymentOptions.integrity_hash = this.integrity_hash;
        }
      }
    }
  }]);

  return MakePaymentComponent;
}();

MakePaymentComponent.ɵfac = function MakePaymentComponent_Factory(t) {
  return new (t || MakePaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](Flutterwave));
};

MakePaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MakePaymentComponent,
  selectors: [["flutterwave-make-payment"]],
  inputs: {
    customer: "customer",
    meta: "meta",
    customizations: "customizations",
    public_key: "public_key",
    tx_ref: "tx_ref",
    amount: "amount",
    currency: "currency",
    payment_options: "payment_options",
    payment_plan: "payment_plan",
    subaccounts: "subaccounts",
    integrity_hash: "integrity_hash",
    redirect_url: "redirect_url",
    text: "text",
    style: "style",
    className: "className",
    data: "data"
  },
  outputs: {
    callback: "callback",
    close: "close"
  },
  decls: 2,
  vars: 5,
  consts: [[3, "ngClass", "click"]],
  template: function MakePaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MakePaymentComponent_Template_button_click_0_listener() {
        return ctx.makePayment();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx.style);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.className ? ctx.className : "flutterwave-pay-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.text || "Pay", " ");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
  styles: [".flutterwave-pay-button[_ngcontent-%COMP%]{\n      background-color: #f5a623;\n      border-radius: 4px;\n      border-color: #f5a623;\n      -webkit-box-shadow: 0 2px 3px 0 #ccc;\n              box-shadow: 0 2px 3px 0 #ccc;\n      color: #fff;\n      display: block;\n      font-size: 12px;\n      font-weight: 700;\n      padding: 14px 22px;\n      text-align: center;\n      text-decoration: none;\n      -webkit-transition: all .3s ease-in-out;\n      transition: all .3s ease-in-out;\n\n    }"]
});
/**
 * @nocollapse
 */

MakePaymentComponent.ctorParameters = function () {
  return [{
    type: Flutterwave
  }];
};

MakePaymentComponent.propDecorators = {
  'public_key': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'tx_ref': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'amount': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'currency': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'payment_options': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'payment_plan': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'subaccounts': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'integrity_hash': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'redirect_url': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'meta': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'customer': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'callback': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  'close': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
  }],
  'customizations': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'text': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'style': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'className': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }],
  'data': [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MakePaymentComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      // tslint:disable-next-line:component-selector
      selector: 'flutterwave-make-payment',
      template: "\n    <button\n      style=\"{{style}}\"\n      [ngClass]=\"className ? className : 'flutterwave-pay-button' \"\n      (click)=\"makePayment()\">\n      {{text || 'Pay'}}\n    </button>\n  ",
      styles: ["\n    .flutterwave-pay-button{\n      background-color: #f5a623;\n      border-radius: 4px;\n      border-color: #f5a623;\n      -webkit-box-shadow: 0 2px 3px 0 #ccc;\n              box-shadow: 0 2px 3px 0 #ccc;\n      color: #fff;\n      display: block;\n      font-size: 12px;\n      font-weight: 700;\n      padding: 14px 22px;\n      text-align: center;\n      text-decoration: none;\n      -webkit-transition: all .3s ease-in-out;\n      transition: all .3s ease-in-out;\n\n    }\n  "]
    }]
  }], function () {
    return [{
      type: Flutterwave
    }];
  }, {
    callback: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    close: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
    }],
    customer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    meta: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    customizations: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    public_key: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    tx_ref: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    amount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    currency: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    payment_options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    payment_plan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    subaccounts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    integrity_hash: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    redirect_url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    text: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    style: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    className: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
    }]
  });
})();

var FlutterwaveModule = function FlutterwaveModule() {
  Object(D_Github_Projects_TransUS_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FlutterwaveModule);

  var inlineSdk = 'https://checkout.flutterwave.com/v3.js';
  var script = document.createElement('script');
  script.src = inlineSdk;

  if (!document.querySelector("[src=\"".concat(inlineSdk, "\"]"))) {
    document.body.appendChild(script);
  }
};

FlutterwaveModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: FlutterwaveModule
});
FlutterwaveModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  factory: function FlutterwaveModule_Factory(t) {
    return new (t || FlutterwaveModule)();
  },
  providers: [Flutterwave, ApiTracking],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]]
});
/**
 * @nocollapse
 */

FlutterwaveModule.ctorParameters = function () {
  return [];
};

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FlutterwaveModule, {
    declarations: function declarations() {
      return [MakePaymentComponent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]];
    },
    exports: function exports() {
      return [MakePaymentComponent];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FlutterwaveModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
      declarations: [MakePaymentComponent],
      providers: [Flutterwave, ApiTracking],
      exports: [MakePaymentComponent]
    }]
  }], function () {
    return [];
  }, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~flutter-waves-flutter-waves-module~summary-summary-module.js.map