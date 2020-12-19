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
    value: "cashapp",
    style: {
      backgroundImage: "url(" + "https://www.pngfind.com/pngs/b/640-6407096_venmo-png.png" + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
  }, "Cashapp", " "), __jsx("option", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dC9DaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidG90YWwiLCJzaGlwcGluZyIsInByb2R1Y3RzIiwiaGFuZGxlT25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZmlyc3ROYW1lIiwic3RhdGUiLCJ2YWx1ZSIsImxhc3ROYW1lIiwiYWRkcmVzcyIsImNpdHkiLCJ6aXAiLCJlbWFpbCIsInBob25lIiwicGF5bWVudCIsImZvcm1EYXRhIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInJlc2V0Q2FydCIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwicmVkaXJlY3QiLCJ3aW5kb3ciLCJvcGVuIiwidG90YWxBbW91bnQiLCJ0b0ZpeGVkIiwic3RhdGVTY2hlbWEiLCJlcnJvciIsInZhbGlkYXRpb25TdGF0ZVNjaGVtYSIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwicmVnRXgiLCJ1c2VGb3JtIiwiaGFuZGxlT25DaGFuZ2UiLCJkaXNhYmxlIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJib3JkZXJSYWRpdXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhZGRlZEl0ZW1zIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxZ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RSxZQUFRLEVBQUVSLE9BSFo7QUFJRSxhQUFTO0FBSlgsNEJBekNGLENBekpGLENBREYsQ0FMRixDQURGLENBREY7QUF3TkQ7O0dBOVdRakQsWTtVQTRJb0MrQyxpRDs7O0tBNUlwQy9DLFk7O0FBZ1hULElBQU0wRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNqRCxLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMTixZQUFRLEVBQUVNLEtBQUssQ0FBQ2tELFVBRFg7QUFFTDFELFNBQUssRUFBRVEsS0FBSyxDQUFDUixLQUZSO0FBR0xDLFlBQVEsRUFBRU8sS0FBSyxDQUFDUDtBQUhYLEdBQVA7QUFLRCxDQU5EOztBQVFlMEQsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCMUQsWUFBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC42Y2UzZmY1NjI5MzQyNWRhZjhlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IE9yZGVyU3VtbWFyeSBmcm9tIFwiLi9PcmRlclN1bW1hcnlcIjtcbmltcG9ydCB1c2VGb3JtIGZyb20gXCIuL3VzZXJGb3JtXCI7XG4vLyBnZXQgb3VyIGZvbnRhd2Vzb21lIGltcG9ydHNcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhQml0Y29pbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zXCI7XG5cbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5pbXBvcnQgeyByZXNldENhcnQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSh7IHRvdGFsLCBzaGlwcGluZywgcHJvZHVjdHMgfSkge1xuICBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBkYXRhID0ge1xuICAgICAgZmlyc3ROYW1lOiBzdGF0ZS5maXJzdE5hbWUudmFsdWUsXG4gICAgICBsYXN0TmFtZTogc3RhdGUubGFzdE5hbWUudmFsdWUsXG4gICAgICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLnZhbHVlLFxuICAgICAgY2l0eTogc3RhdGUuY2l0eS52YWx1ZSxcbiAgICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZS52YWx1ZSxcbiAgICAgIHppcDogc3RhdGUuemlwLnZhbHVlLFxuICAgICAgZW1haWw6IHN0YXRlLmVtYWlsLnZhbHVlLFxuICAgICAgcGhvbmU6IHN0YXRlLnBob25lLnZhbHVlLFxuICAgICAgcGF5bWVudDogc3RhdGUucGF5bWVudC52YWx1ZSxcbiAgICB9O1xuICAgIGxldCBmb3JtRGF0YSA9IFtkYXRhLCBwcm9kdWN0c107XG4gICAgYXhpb3Moe1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIHVybDogXCIvYXBpL3BheW1lbnRcIixcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UuZGF0YSA9PT0gXCJzdWNjZXNzXCIpIHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIk9yZGVyIGhhcyBiZWVuIEluaXRpYXRlZFwiLCB7XG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgICAgICAgIGF1dG9DbG9zZTogNDAwMCxcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVzZXRDYXJ0KCk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvdGhhbmt5b3VcIik7XG4gICAgICAgIH0sIDQwMDApO1xuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhID09PSBcImJhZGRkZFwiKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXG4gICAgICAgICAgXCJBbiBFcnJvciBPY2N1cnJlZCBQbGVhc2UgUmV0cnk6IERpZCB5b3UgdXNlIGEgdmFsaWQgZW1haWw/XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA0MDAwLFxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWRpcmVjdCh1cmwpIHtcbiAgICBpZiAodXJsKVxuICAgICAgcmV0dXJuIHdpbmRvdy5vcGVuKFxuICAgICAgICB1cmwsXG4gICAgICAgIFwiX2JsYW5rXCIsXG4gICAgICAgIFwidG9vbGJhcj15ZXMsc2Nyb2xsYmFycz15ZXMscmVzaXphYmxlPXllcyx0b3A9NTAwLGxlZnQ9NTAwLHdpZHRoPTQwMCxoZWlnaHQ9NzAwXCJcbiAgICAgICk7XG4gIH1cblxuICBsZXQgdG90YWxBbW91bnQgPSAodG90YWwgKyBzaGlwcGluZykudG9GaXhlZCgyKTtcblxuICBjb25zdCBzdGF0ZVNjaGVtYSA9IHtcbiAgICBmaXJzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgbGFzdE5hbWU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXG4gICAgYWRkcmVzczogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBjaXR5OiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHN0YXRlOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICAgIHppcDogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBlbWFpbDogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBwaG9uZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcbiAgICBwYXltZW50OiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcbiAgICBmaXJzdE5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGZpcnN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgbGFzdE5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBhZGRyZXNzOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHZhbGlkYXRvcjoge1xuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGFkZHJlc3MgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgY2l0eToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3RhdGU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIHppcDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eXFxkezV9JHxeXFxkezV9LVxcZHs0fSQvLFxuICAgICAgICBlcnJvcjogXCJJbnZhbGlkIHppcCBmb3JtYXQsIHVzZSBsaWtlIDEyMzQ1LlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgZW1haWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiB7XG4gICAgICAgIHJlZ0V4OiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBlbWFpbCBmb3JtYXQuXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBwaG9uZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB2YWxpZGF0b3I6IHtcbiAgICAgICAgcmVnRXg6IC9eXFwrWzAtOV0/KClbMC05XShcXHN8XFxTKShcXGRbMC05XXs5fSkkLyxcbiAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBwaG9uZSBudW1iZXIgZm9ybWF0IHVzZSBsaWtlICsyOTIzNDMyNDMyNDMyLlwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgcGF5bWVudDoge1xuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgeyBzdGF0ZSwgaGFuZGxlT25DaGFuZ2UsIGRpc2FibGUgfSA9IHVzZUZvcm0oXG4gICAgc3RhdGVTY2hlbWEsXG4gICAgdmFsaWRhdGlvblN0YXRlU2NoZW1hXG4gICk7XG5cbiAgY29uc3QgZXJyb3JTdHlsZSA9IHtcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBmb250U2l6ZTogXCIxM3B4XCIsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGVja291dC1hcmVhIHB0Yi02MFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsaW5nLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5CaWxsaW5nIERldGFpbHM8L2gzPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgRmlyc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5maXJzdE5hbWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZmlyc3ROYW1lLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuZmlyc3ROYW1lLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIExhc3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmxhc3ROYW1lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmxhc3ROYW1lLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUubGFzdE5hbWUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmFkZHJlc3MudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYWRkcmVzcy5lcnJvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmFkZHJlc3MuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvd24gLyBDaXR5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jaXR5LnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmNpdHkuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5jaXR5LmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlIC8gQ291bnR5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc3RhdGUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zdGF0ZS5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0Y29kZSAvIFppcCA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ6aXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS56aXAudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuemlwLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuemlwLmVycm9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIEFkZHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuZW1haWwudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuZW1haWwuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5lbWFpbC5lcnJvcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBQaG9uZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBob25lLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnBob25lLmVycm9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUucGhvbmUuZXJyb3J9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPllvdXIgT3JkZXI8L2gzPlxuXG4gICAgICAgICAgICAgICAgPE9yZGVyU3VtbWFyeSAvPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXJzXCI+Q2hvb3NlIEEgUGF5bWVudCBPcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBpZD1cInBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBheW1lbnRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBheW1lbnQudmFsdWV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtY3NzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU2VsZWN0XCI+UGxlYXNlIFNlbGVjdCBBIFBheW1lbnQgT3B0aW9uPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiY2FzaGFwcFwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5wbmdmaW5kLmNvbS9wbmdzL2IvNjQwLTY0MDcwOTZfdmVubW8tcG5nLnBuZ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENhc2hhcHB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJaZWxsZVwiPlplbGxlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXBwbGUgUGF5XCI+QXBwbGUgUGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQml0Y29pblwiPkJpdGNvaW48L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiZ3JlZW5cIiB9fT5cbiAgICAgICAgICAgICAgICAgIFBheW1lbnQgYnV0dG9uIG9ubHkgd29ya3Mgd2hlbiBhbGwgZmllbGRzIGluIHRoZSBmb3JtIG1hcmtlZFxuICAgICAgICAgICAgICAgICAgd2l0aCA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT4qPC9zcGFuPiBhcmUgZmlsbGVkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiZ29sZFwiLCBib3JkZXJSYWRpdXM6IFwiMTAlXCIgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXN1Y2Nlc3NgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VuZCBQYXltZW50IFJlcXVlc3RcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcbiAgICB0b3RhbDogc3RhdGUudG90YWwsXG4gICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENoZWNrb3V0Rm9ybSk7XG4iXSwic291cmNlUm9vdCI6IiJ9