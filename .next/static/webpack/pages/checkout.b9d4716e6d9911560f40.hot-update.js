webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/checkout/CheckoutForm.js":
/*!*********************************************!*\
  !*** ./components/checkout/CheckoutForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _OrderSummary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OrderSummary */ "./components/checkout/OrderSummary.js");
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userForm */ "./components/checkout/userForm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/actions */ "./store/actions/actions.js");
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // get our fontawesome imports






function CheckoutForm(_ref) {
  _s();

  var total = _ref.total,
      shipping = _ref.shipping,
      products = _ref.products;

  function handleOnSubmit(e) {
    e.preventDefault();
    var data = {
      firstName: state.firstName.value,
      lastName: state.lastName.value,
      address: state.address.value,
      city: state.city.value,
      state: state.state.value,
      zip: state.zip.value,
      email: state.email.value,
      phone: state.phone.value,
      payment: state.payment.value
    };
    var formData = [data, products];

    if (payment == "") {}

    ;
    axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "POST",
      url: "/api/payment",
      data: formData
    }).then(function (response) {
      if (response.data === "success") {
        react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].success("Order has been Initiated", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        Object(_store_actions_actions__WEBPACK_IMPORTED_MODULE_10__["resetCart"])();
        setTimeout(function () {
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/thankyou");
        }, 4000);
      } else if (response.data === "badddd") {
        react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].success("An Error Occurred Please Retry: Did you use a valid email?", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  }

  function redirect(url) {
    if (url) return window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=700");
  }

  var totalAmount = (total + shipping).toFixed(2);
  var stateSchema = {
    firstName: {
      value: "",
      error: ""
    },
    lastName: {
      value: "",
      error: ""
    },
    address: {
      value: "",
      error: ""
    },
    city: {
      value: "",
      error: ""
    },
    state: {
      value: "",
      error: ""
    },
    zip: {
      value: "",
      error: ""
    },
    email: {
      value: "",
      error: ""
    },
    phone: {
      value: "",
      error: ""
    },
    payment: {
      value: "",
      error: ""
    }
  };
  var validationStateSchema = {
    firstName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid first name format."
      }
    },
    lastName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Invalid last name format."
      }
    },
    address: {
      required: true,
      validator: {
        error: "Invalid address format."
      }
    },
    city: {
      required: true,
      validator: {
        error: "Invalid last name format."
      }
    },
    state: {
      required: true,
      validator: {
        error: "Invalid last name format."
      }
    },
    zip: {
      required: true,
      validator: {
        regEx: /^\d{5}$|^\d{5}-\d{4}$/,
        error: "Invalid zip format, use like 12345."
      }
    },
    email: {
      required: true,
      validator: {
        regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        error: "Invalid email format."
      }
    },
    phone: {
      required: true,
      validator: {
        regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
        error: "Invalid phone number format use like +2923432432432."
      }
    },
    payment: {
      required: false
    }
  };

  var _useForm = Object(_userForm__WEBPACK_IMPORTED_MODULE_6__["default"])(stateSchema, validationStateSchema),
      state = _useForm.state,
      handleOnChange = _useForm.handleOnChange,
      disable = _useForm.disable;

  var errorStyle = {
    color: "red",
    fontSize: "13px"
  };
  return __jsx("section", {
    className: "checkout-area ptb-60"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-12 col-md-12"
  })), __jsx("form", {
    onSubmit: handleOnSubmit
  }, __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 col-md-12"
  }, __jsx("div", {
    className: "billing-details"
  }, __jsx("h3", {
    className: "title"
  }, "Billing Details"), __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "First Name ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "firstName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.firstName.value
  }), state.firstName.error && __jsx("p", {
    style: errorStyle
  }, state.firstName.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Last Name ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "lastName",
    className: "form-control",
    onChange: handleOnChange,
    value: state.lastName.value
  }), state.lastName.error && __jsx("p", {
    style: errorStyle
  }, state.lastName.error))), __jsx("div", {
    className: "col-lg-12 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Address ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "address",
    className: "form-control",
    onChange: handleOnChange,
    value: state.address.value
  }), state.address.error && __jsx("p", {
    style: errorStyle
  }, state.address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Town / City ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "city",
    className: "form-control",
    onChange: handleOnChange,
    value: state.city.value
  }), state.city.error && __jsx("p", {
    style: errorStyle
  }, state.city.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "State / County ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "state",
    className: "form-control",
    onChange: handleOnChange,
    value: state.state.value
  }), state.state.error && __jsx("p", {
    style: errorStyle
  }, state.state.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Postcode / Zip ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "zip",
    className: "form-control",
    onChange: handleOnChange,
    value: state.zip.value
  }), state.zip.error && __jsx("p", {
    style: errorStyle
  }, state.zip.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Email Address ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "email",
    name: "email",
    className: "form-control",
    onChange: handleOnChange,
    value: state.email.value
  }), state.email.error && __jsx("p", {
    style: errorStyle
  }, state.email.error))), __jsx("div", {
    className: "col-lg-6 col-md-6"
  }, __jsx("div", {
    className: "form-group"
  }, __jsx("label", null, "Phone ", __jsx("span", {
    className: "required"
  }, "*")), __jsx("input", {
    type: "text",
    name: "phone",
    className: "form-control",
    onChange: handleOnChange,
    value: state.phone.value
  }), state.phone.error && __jsx("p", {
    style: errorStyle
  }, state.phone.error)))))), __jsx("div", {
    className: "col-lg-6 col-md-12"
  }, __jsx("div", {
    className: "order-details"
  }, __jsx("h3", {
    className: "title"
  }, "Your Order"), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("br", null), __jsx("label", {
    "for": "cars"
  }, "Choose A Payment Option:"), __jsx("select", {
    id: "payment",
    name: "payment",
    onChange: handleOnChange,
    value: state.payment.value,
    className: "select-css"
  }, __jsx("option", {
    value: "Select"
  }, "Please Select A Payment Option"), __jsx("option", {
    value: "cashapp"
  }, "Cashapp "), __jsx("option", {
    value: "Zelle"
  }, "Zelle"), __jsx("option", {
    value: "Apple Pay"
  }, "Apple Pay"), __jsx("option", {
    value: "Bitcoin"
  }, "Bitcoin")), __jsx("div", {
    style: {
      color: "red"
    }
  }), __jsx("div", {
    style: {
      color: "green"
    }
  }, "Payment button only works when all fields in the form marked with ", __jsx("span", {
    style: {
      color: "red"
    }
  }, "*"), " are filled")), __jsx("br", null), __jsx("button", {
    style: {
      color: "gold",
      borderRadius: "10%"
    },
    type: "submit",
    disabled: disable,
    className: "btn btn-success"
  }, "Send Payment Request"))))));
}

_s(CheckoutForm, "trinq64LqzZ820N+TM+ZXQneoqU=", false, function () {
  return [_userForm__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = CheckoutForm;

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems,
    total: state.total,
    shipping: state.shipping
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(CheckoutForm));

var _c;

$RefreshReg$(_c, "CheckoutForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidG90YWwiLCJzaGlwcGluZyIsInByb2R1Y3RzIiwiaGFuZGxlT25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZmlyc3ROYW1lIiwic3RhdGUiLCJ2YWx1ZSIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXAiLCJlbWFpbCIsInBob25lIiwicGF5bWVudCIsImZvcm1EYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInJlc2V0Q2FydCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJvcGVuIiwidG90YWxBbW91bnQiLCJ0b0ZpeGVkIiwic3RhdGVTY2hlbWEiLCJlcnJvciIsInZhbGlkYXRpb25TdGF0ZVNjaGVtYSIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwicmVnRXgiLCJ1c2VGb3JtIiwiaGFuZGxlT25DaGFuZ2UiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhZGRlZEl0ZW1zIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQXFEO0FBQUE7O0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFB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QUNMTixZQUFRLEVBQUVNLEtBQUssQ0FBQzhDLFVBRFg7QUFFTHRELFNBQUssRUFBRVEsS0FBSyxDQUFDUixLQUZSO0FBR0xDLFlBQVEsRUFBRU8sS0FBSyxDQUFDUDtBQUhYLEdBQVA7QUFLRCxDQU5EOztBQVFlc0QsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCdEQsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC5iOWQ0NzE2ZTZkOTkxMTU2MGY0MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tIFwiLi9PcmRlclN1bW1hcnlcIjtcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuL3VzZXJGb3JtXCI7XG4vLyBnZXQgb3VyIGZvbnRhd2Vzb21lIGltcG9ydHNcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQml0Y29pbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSh7IHRvdGFsLCBzaGlwcGluZywgcHJvZHVjdHMgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgZmlyc3ROYW1lOiBzdGF0ZS5maXJzdE5hbWUudmFsdWUsXG4gICAgICBsYXN0TmFtZTogc3RhdGUubGFzdE5hbWUudmFsdWUsXG4gICAgICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLnZhbHVlLFxuICAgICAgY2l0eTogc3RhdGUuY2l0eS52YWx1ZSxcbiAgICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZS52YWx1ZSxcbiAgICAgIHppcDogc3RhdGUuemlwLnZhbHVlLFxuICAgICAgZW1haWw6IHN0YXRlLmVtYWlsLnZhbHVlLFxuICAgICAgcGhvbmU6IHN0YXRlLnBob25lLnZhbHVlLFxuICAgICAgcGF5bWVudDogc3RhdGUucGF5bWVudC52YWx1ZSxcbiAgICB9O1xuICAgIGxldCBmb3JtRGF0YSA9IFtkYXRhLCBwcm9kdWN0c107XG4gICAgaWYgKHBheW1lbnQ9PVwiXCIpe1xuXG4gICAgfTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvcGF5bWVudFwiLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiT3JkZXIgaGFzIGJlZW4gSW5pdGlhdGVkXCIsIHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgICAgYXV0b0Nsb3NlOiA0MDAwLFxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXNldENhcnQoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi90aGFua3lvdVwiKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEgPT09IFwiYmFkZGRkXCIpIHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcbiAgICAgICAgICBcIkFuIEVycm9yIE9jY3VycmVkIFBsZWFzZSBSZXRyeTogRGlkIHlvdSB1c2UgYSB2YWxpZCBlbWFpbD9cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDQwMDAsXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0KHVybCkge1xuICAgIGlmICh1cmwpXG4gICAgICByZXR1cm4gd2luZG93Lm9wZW4oXG4gICAgICAgIHVybCxcbiAgICAgICAgXCJfYmxhbmtcIixcbiAgICAgICAgXCJ0b29sYmFyPXllcyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHRvcD01MDAsbGVmdD01MDAsd2lkdGg9NDAwLGhlaWdodD03MDBcIlxuICAgICAgKTtcbiAgfVxuXG4gIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IHN0YXRlU2NoZW1hID0ge1xuICAgIGZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBsYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBhZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGNpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgc3RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgemlwOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGVtYWlsOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHBob25lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHBheW1lbnQ6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGlvblN0YXRlU2NoZW1hID0ge1xuICAgIGZpcnN0TmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgZmlyc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBsYXN0TmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGFkZHJlc3M6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgYWRkcmVzcyBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjaXR5OiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgemlwOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICByZWdFeDogL15cXGR7NX0kfF5cXGR7NX0tXFxkezR9JC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgemlwIGZvcm1hdCwgdXNlIGxpa2UgMTIzNDUuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBlbWFpbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHBob25lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICByZWdFeDogL15cXCtbMC05XT8oKVswLTldKFxcc3xcXFMpKFxcZFswLTldezl9KSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBmb3JtYXQgdXNlIGxpa2UgKzI5MjM0MzI0MzI0MzIuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwYXltZW50OiB7XG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgZGlzYWJsZSB9ID0gdXNlRm9ybShcbiAgICBzdGF0ZVNjaGVtYSxcbiAgICB2YWxpZGF0aW9uU3RhdGVTY2hlbWFcbiAgKTtcblxuICBjb25zdCBlcnJvclN0eWxlID0ge1xuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoZWNrb3V0LWFyZWEgcHRiLTYwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpbGxpbmctZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkJpbGxpbmcgRGV0YWlsczwvaDM+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmZpcnN0TmFtZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5maXJzdE5hbWUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5maXJzdE5hbWUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubGFzdE5hbWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubGFzdE5hbWUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5sYXN0TmFtZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYWRkcmVzcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5hZGRyZXNzLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuYWRkcmVzcy5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgVG93biAvIENpdHkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmNpdHkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuY2l0eS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmNpdHkuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGUgLyBDb3VudHkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zdGF0ZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnN0YXRlLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3Rjb2RlIC8gWmlwIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnppcC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS56aXAuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS56aXAuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5lbWFpbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5lbWFpbC5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmVtYWlsLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGhvbmUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUucGhvbmUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5waG9uZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciBPcmRlcjwvaDM+XG5cbiAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcnNcIj5DaG9vc2UgQSBQYXltZW50IE9wdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGF5bWVudC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdC1jc3NcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZWxlY3RcIj5QbGVhc2UgU2VsZWN0IEEgUGF5bWVudCBPcHRpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYXNoYXBwXCI+Q2FzaGFwcCA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJaZWxsZVwiPlplbGxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXBwbGUgUGF5XCI+QXBwbGUgUGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQml0Y29pblwiPkJpdGNvaW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgIFBheW1lbnQgYnV0dG9uIG9ubHkgd29ya3Mgd2hlbiBhbGwgZmllbGRzIGluIHRoZSBmb3JtIG1hcmtlZFxuICAgICAgICAgICAgICAgICAgd2l0aCA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT4qPC9zcGFuPiBhcmUgZmlsbGVkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ29sZFwiLCBib3JkZXJSYWRpdXM6IFwiMTAlXCIgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXN1Y2Nlc3NgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VuZCBQYXltZW50IFJlcXVlc3RcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcbiAgICB0b3RhbDogc3RhdGUudG90YWwsXG4gICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoZWNrb3V0Rm9ybSk7XG4iXSwic291cmNlUm9vdCI6IiJ9