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
  }, __jsx("span", null, "Cashapp ", __jsx("img", {
    src: "https://www.pngfind.com/pngs/b/640-6407096_venmo-png.png"
  })), " "), __jsx("option", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidG90YWwiLCJzaGlwcGluZyIsInByb2R1Y3RzIiwiaGFuZGxlT25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZmlyc3ROYW1lIiwic3RhdGUiLCJ2YWx1ZSIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXAiLCJlbWFpbCIsInBob25lIiwicGF5bWVudCIsImZvcm1EYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInJlc2V0Q2FydCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJvcGVuIiwidG90YWxBbW91bnQiLCJ0b0ZpeGVkIiwic3RhdGVTY2hlbWEiLCJlcnJvciIsInZhbGlkYXRpb25TdGF0ZVNjaGVtYSIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwicmVnRXgiLCJ1c2VGb3JtIiwiaGFuZGxlT25DaGFuZ2UiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhZGRlZEl0ZW1zIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQXFEO0FBQUE7O0FBQUEsTUFBN0JDLEtBQTZCLFFBQTdCQSxLQUE2QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFB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Q0xOLFlBQVEsRUFBRU0sS0FBSyxDQUFDOEMsVUFEWDtBQUVMdEQsU0FBSyxFQUFFUSxLQUFLLENBQUNSLEtBRlI7QUFHTEMsWUFBUSxFQUFFTyxLQUFLLENBQUNQO0FBSFgsR0FBUDtBQUtELENBTkQ7O0FBUWVzRCwwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJ0RCxZQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjUzNGU4YmIwNDE3YTY1MzEwNjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gXCIuL09yZGVyU3VtbWFyeVwiO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4vdXNlckZvcm1cIjtcbi8vIGdldCBvdXIgZm9udGF3ZXNvbWUgaW1wb3J0c1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFCaXRjb2luIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnNcIjtcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmltcG9ydCB7IHJlc2V0Q2FydCB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnNcIjtcblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKHsgdG90YWwsIHNoaXBwaW5nLCBwcm9kdWN0cyB9KSB7XG4gIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBmaXJzdE5hbWU6IHN0YXRlLmZpcnN0TmFtZS52YWx1ZSxcbiAgICAgIGxhc3ROYW1lOiBzdGF0ZS5sYXN0TmFtZS52YWx1ZSxcbiAgICAgIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MudmFsdWUsXG4gICAgICBjaXR5OiBzdGF0ZS5jaXR5LnZhbHVlLFxuICAgICAgc3RhdGU6IHN0YXRlLnN0YXRlLnZhbHVlLFxuICAgICAgemlwOiBzdGF0ZS56aXAudmFsdWUsXG4gICAgICBlbWFpbDogc3RhdGUuZW1haWwudmFsdWUsXG4gICAgICBwaG9uZTogc3RhdGUucGhvbmUudmFsdWUsXG4gICAgICBwYXltZW50OiBzdGF0ZS5wYXltZW50LnZhbHVlLFxuICAgIH07XG4gICAgbGV0IGZvcm1EYXRhID0gW2RhdGEsIHByb2R1Y3RzXTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvcGF5bWVudFwiLFxuICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiT3JkZXIgaGFzIGJlZW4gSW5pdGlhdGVkXCIsIHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgICAgYXV0b0Nsb3NlOiA0MDAwLFxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXNldENhcnQoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaChcIi90aGFua3lvdVwiKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEgPT09IFwiYmFkZGRkXCIpIHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcbiAgICAgICAgICBcIkFuIEVycm9yIE9jY3VycmVkIFBsZWFzZSBSZXRyeTogRGlkIHlvdSB1c2UgYSB2YWxpZCBlbWFpbD9cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgICAgICBhdXRvQ2xvc2U6IDQwMDAsXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0KHVybCkge1xuICAgIGlmICh1cmwpXG4gICAgICByZXR1cm4gd2luZG93Lm9wZW4oXG4gICAgICAgIHVybCxcbiAgICAgICAgXCJfYmxhbmtcIixcbiAgICAgICAgXCJ0b29sYmFyPXllcyxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzLHRvcD01MDAsbGVmdD01MDAsd2lkdGg9NDAwLGhlaWdodD03MDBcIlxuICAgICAgKTtcbiAgfVxuXG4gIGxldCB0b3RhbEFtb3VudCA9ICh0b3RhbCArIHNoaXBwaW5nKS50b0ZpeGVkKDIpO1xuXG4gIGNvbnN0IHN0YXRlU2NoZW1hID0ge1xuICAgIGZpcnN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBsYXN0TmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBhZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGNpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgc3RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgemlwOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIGVtYWlsOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHBob25lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHBheW1lbnQ6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGlvblN0YXRlU2NoZW1hID0ge1xuICAgIGZpcnN0TmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgZmlyc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBsYXN0TmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eW2EtekEtWl0rJC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGFkZHJlc3M6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgYWRkcmVzcyBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBjaXR5OiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgemlwOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICByZWdFeDogL15cXGR7NX0kfF5cXGR7NX0tXFxkezR9JC8sXG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgemlwIGZvcm1hdCwgdXNlIGxpa2UgMTIzNDUuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBlbWFpbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHBob25lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICByZWdFeDogL15cXCtbMC05XT8oKVswLTldKFxcc3xcXFMpKFxcZFswLTldezl9KSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHBob25lIG51bWJlciBmb3JtYXQgdXNlIGxpa2UgKzI5MjM0MzI0MzI0MzIuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwYXltZW50OiB7XG4gICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSxcbiAgfTtcblxuICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgZGlzYWJsZSB9ID0gdXNlRm9ybShcbiAgICBzdGF0ZVNjaGVtYSxcbiAgICB2YWxpZGF0aW9uU3RhdGVTY2hlbWFcbiAgKTtcblxuICBjb25zdCBlcnJvclN0eWxlID0ge1xuICAgIGNvbG9yOiBcInJlZFwiLFxuICAgIGZvbnRTaXplOiBcIjEzcHhcIixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNoZWNrb3V0LWFyZWEgcHRiLTYwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJpbGxpbmctZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkJpbGxpbmcgRGV0YWlsczwvaDM+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBGaXJzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmZpcnN0TmFtZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5maXJzdE5hbWUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5maXJzdE5hbWUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGFzdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUubGFzdE5hbWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubGFzdE5hbWUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5sYXN0TmFtZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuYWRkcmVzcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5hZGRyZXNzLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuYWRkcmVzcy5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgVG93biAvIENpdHkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmNpdHkudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuY2l0eS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmNpdHkuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGUgLyBDb3VudHkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5zdGF0ZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLnN0YXRlLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3Rjb2RlIC8gWmlwIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnppcC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS56aXAuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS56aXAuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgQWRkcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5lbWFpbC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5lbWFpbC5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmVtYWlsLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob25lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGhvbmUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUucGhvbmUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5waG9uZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+WW91ciBPcmRlcjwvaDM+XG5cbiAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IC8+XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcnNcIj5DaG9vc2UgQSBQYXltZW50IE9wdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGlkPVwicGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGF5bWVudFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGF5bWVudC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdC1jc3NcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTZWxlY3RcIj5QbGVhc2UgU2VsZWN0IEEgUGF5bWVudCBPcHRpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjYXNoYXBwXCI+PHNwYW4+Q2FzaGFwcCA8aW1nIHNyYz1cImh0dHBzOi8vd3d3LnBuZ2ZpbmQuY29tL3BuZ3MvYi82NDAtNjQwNzA5Nl92ZW5tby1wbmcucG5nXCIvPjwvc3Bhbj4gPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiWmVsbGVcIj5aZWxsZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFwcGxlIFBheVwiPkFwcGxlIFBheTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkJpdGNvaW5cIj5CaXRjb2luPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICBQYXltZW50IGJ1dHRvbiBvbmx5IHdvcmtzIHdoZW4gYWxsIGZpZWxkcyBpbiB0aGUgZm9ybSBtYXJrZWRcbiAgICAgICAgICAgICAgICAgIHdpdGggPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+Kjwvc3Bhbj4gYXJlIGZpbGxlZFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdvbGRcIiwgYm9yZGVyUmFkaXVzOiBcIjEwJVwiIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zdWNjZXNzYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNlbmQgUGF5bWVudCBSZXF1ZXN0XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IHN0YXRlLmFkZGVkSXRlbXMsXG4gICAgdG90YWw6IHN0YXRlLnRvdGFsLFxuICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaGVja291dEZvcm0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==