webpackHotUpdate_N_E("pages/contact-us",{

/***/ "./pages/contact-us.js":
/*!*****************************!*\
  !*** ./pages/contact-us.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Common_Facility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Common/Facility */ "./components/Common/Facility.js");
/* harmony import */ var _components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/Breadcrumb */ "./components/Common/Breadcrumb.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.state = {
      submitting: false,
      submitted: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "submitForm",
    value: function submitForm(data) {
      console.log("submitted");
      {
        /** 
         fetch("/api/contact", {
         method: "post",
         headers: {
           Accept: "application/json, text/plain, ",
           "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
        }).then((res) => {
         res.status === 200 ? this.setState({ submitted: true }) : "";
        });*/
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, __jsx("title", null, "STRAPSESSIONS "), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "Contact Us"
      }), __jsx("section", {
        className: "contact-area ptb-60"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "section-title"
      }, __jsx("h2", null, __jsx("span", {
        className: "dot"
      }), " Contact Us")), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-lg-5 col-md-12"
      }, __jsx("div", {
        className: "contact-info"
      }, __jsx("h3", null, "Here to Help"), __jsx("p", null, "Have a question? You may find an answer in our FAQs. But you can also contact us."), __jsx("ul", {
        className: "contact-list"
      }, __jsx("li", null, __jsx("i", {
        className: "fas fa-phone"
      }), " Call Us/Whatsapp:", " ", __jsx("a", {
        href: "#"
      }, "(+161) 932-43574")), __jsx("li", null, __jsx("i", {
        className: "far fa-envelope"
      }), " Email Us:", " ", __jsx("a", {
        href: "#"
      }, "support@strapsessions.com")), __jsx("li", null, __jsx("i", {
        className: "fa fa-map-marker"
      }), "Address:", " ", "San Diego CA")), __jsx("h3", null, "Opening Hours:"), __jsx("ul", {
        className: "opening-hours"
      }, __jsx("li", null, __jsx("span", null, "Monday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Tuesday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Wednesday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Thursday - Friday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Sunday:"), " Closed")))), __jsx("div", {
        className: "col-lg-7 col-md-12"
      }, __jsx("div", {
        className: "contact-form"
      }, __jsx("h3", null, "Drop Us A Line"), __jsx("p", null, "We\u2019re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have."), __jsx("form", {
        id: "contactForm",
        name: "contact",
        onSubmit: function onSubmit(e) {
          e.preventDefault();

          _this2.submitForm();
        }
      }, __jsx("input", {
        type: "hidden",
        name: "form-name",
        value: "contact"
      }), __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Name ", __jsx("span", null, "(required)*")), __jsx("input", {
        type: "text",
        name: "name",
        id: "name",
        className: "form-control",
        required: true,
        "data-error": "Please enter your name",
        placeholder: "Enter your name"
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Email ", __jsx("span", null, "(required)*")), __jsx("input", {
        type: "email",
        name: "email",
        id: "email",
        className: "form-control",
        required: true,
        "data-error": "Please enter your email",
        placeholder: "Enter your Email Address"
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Phone Number ", __jsx("span", null, "(required)*")), __jsx("input", {
        type: "text",
        name: "phone_number",
        id: "phone_number",
        className: "form-control",
        required: true,
        "data-error": "Please enter your phone number",
        placeholder: "Enter your Phone Number"
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Your Message ", __jsx("span", null, "(required)*")), __jsx("textarea", {
        name: "message",
        id: "message",
        cols: "30",
        rows: "8",
        required: true,
        "data-error": "Please enter your message",
        className: "form-control",
        placeholder: "Enter your Message"
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("button", {
        type: "submit",
        className: "btn btn-primary"
      }, "Send Message"), __jsx("div", {
        id: "msgSubmit",
        className: "h3 text-center hidden"
      }), __jsx("div", {
        className: "clearfix"
      }))))))))), __jsx(_components_Common_Facility__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC11cy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwic3RhdGUiLCJzdWJtaXR0aW5nIiwic3VibWl0dGVkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJtaXRGb3JtIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQUFFLEtBREQ7QUFFWEMsZUFBUyxFQUFFO0FBRkEsS0FBYjtBQUZpQjtBQU1sQjs7OzsrQkFDVUMsSSxFQUFNO0FBQ2ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDQTtBQUFDO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBVztBQUNSOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFLE1BQUMsNENBQUQsQ0FBTyxRQUFQLFFBQ0UsTUFBQyxpREFBRCxRQUNBLHNDQURBLEVBRUE7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUIsUUFGQSxDQURGLEVBS0UsTUFBQyxpRUFBRCxPQUxGLEVBTUUsTUFBQyxxRUFBRDtBQUFZLGFBQUssRUFBQztBQUFsQixRQU5GLEVBT0U7QUFBUyxpQkFBUyxFQUFDO0FBQW5CLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLGtCQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQixRQURGLGdCQURGLENBREYsRUFPRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSxpQ0FERixFQUVFLHFHQUZGLEVBT0U7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRSxrQkFDRTtBQUFHLGlCQUFTLEVBQUM7QUFBYixRQURGLHdCQUNxRCxHQURyRCxFQUVFO0FBQUcsWUFBSSxFQUFDO0FBQVIsNEJBRkYsQ0FERixFQUtFLGtCQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiLFFBREYsZ0JBQ2dELEdBRGhELEVBRUU7QUFBRyxZQUFJLEVBQUM7QUFBUixxQ0FGRixDQUxGLEVBU0Usa0JBQ0E7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFEQSxjQUVTLEdBRlQsaUJBVEYsQ0FQRixFQXVCRSxtQ0F2QkYsRUF3QkU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRSxrQkFDRSw4QkFERixlQURGLEVBSUUsa0JBQ0UsK0JBREYsZUFKRixFQU9FLGtCQUNFLGlDQURGLGVBUEYsRUFVRSxrQkFDRSx5Q0FERixlQVZGLEVBYUUsa0JBQ0UsOEJBREYsWUFiRixDQXhCRixDQURGLENBREYsRUE4Q0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLG1DQURGLEVBRUUsZ0xBRkYsRUFRRTtBQUNFLFVBQUUsRUFBQyxhQURMO0FBRUUsWUFBSSxFQUFDLFNBRlA7QUFHRSxnQkFBUSxFQUFFLGtCQUFDQyxDQUFELEVBQU87QUFDZkEsV0FBQyxDQUFDQyxjQUFGOztBQUNBLGdCQUFJLENBQUNDLFVBQUw7QUFDRDtBQU5ILFNBUUU7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixZQUFJLEVBQUMsV0FBMUI7QUFBc0MsYUFBSyxFQUFDO0FBQTVDLFFBUkYsRUFTRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSw4QkFDTyxrQ0FEUCxDQURGLEVBSUU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLFlBQUksRUFBQyxNQUZQO0FBR0UsVUFBRSxFQUFDLE1BSEw7QUFJRSxpQkFBUyxFQUFDLGNBSlo7QUFLRSxnQkFBUSxFQUFFLElBTFo7QUFNRSxzQkFBVyx3QkFOYjtBQU9FLG1CQUFXLEVBQUM7QUFQZCxRQUpGLEVBYUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFiRixDQURGLENBREYsRUFtQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLCtCQUNRLGtDQURSLENBREYsRUFJRTtBQUNFLFlBQUksRUFBQyxPQURQO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxVQUFFLEVBQUMsT0FITDtBQUlFLGlCQUFTLEVBQUMsY0FKWjtBQUtFLGdCQUFRLEVBQUUsSUFMWjtBQU1FLHNCQUFXLHlCQU5iO0FBT0UsbUJBQVcsRUFBQztBQVBkLFFBSkYsRUFhRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQWJGLENBREYsQ0FuQkYsRUFxQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLHNDQUNlLGtDQURmLENBREYsRUFJRTtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFDLGNBRlA7QUFHRSxVQUFFLEVBQUMsY0FITDtBQUlFLGlCQUFTLEVBQUMsY0FKWjtBQUtFLGdCQUFRLEVBQUUsSUFMWjtBQU1FLHNCQUFXLGdDQU5iO0FBT0UsbUJBQVcsRUFBQztBQVBkLFFBSkYsRUFhRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQWJGLENBREYsQ0FyQ0YsRUF1REU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLHNDQUNlLGtDQURmLENBREYsRUFJRTtBQUNFLFlBQUksRUFBQyxTQURQO0FBRUUsVUFBRSxFQUFDLFNBRkw7QUFHRSxZQUFJLEVBQUMsSUFIUDtBQUlFLFlBQUksRUFBQyxHQUpQO0FBS0UsZ0JBQVEsRUFBRSxJQUxaO0FBTUUsc0JBQVcsMkJBTmI7QUFPRSxpQkFBUyxFQUFDLGNBUFo7QUFRRSxtQkFBVyxFQUFDO0FBUmQsUUFKRixFQWNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBZEYsQ0FERixDQXZERixFQTBFRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQztBQUFoQyx3QkFERixFQUlFO0FBQ0UsVUFBRSxFQUFDLFdBREw7QUFFRSxpQkFBUyxFQUFDO0FBRlosUUFKRixFQVFFO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBUkYsQ0ExRUYsQ0FURixDQVJGLENBREYsQ0E5Q0YsQ0FQRixDQURGLENBUEYsRUEwS0UsTUFBQyxtRUFBRCxPQTFLRixFQTJLRSxNQUFDLGlFQUFELE9BM0tGLENBREY7QUErS0Q7Ozs7RUF2TWlCQywrQzs7QUEwTUxYLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QtdXMuYjZhZWQ4MjYzODRkYjlhNGM4Y2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyXCI7XG5pbXBvcnQgRmFjaWxpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5XCI7XG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYlwiO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIHN1Ym1pdHRlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBzdWJtaXRGb3JtKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1Ym1pdHRlZFwiKVxuICAgIHsvKiogXG4gICAgICBmZXRjaChcIi9hcGkvY29udGFjdFwiLCB7XG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwID8gdGhpcy5zZXRTdGF0ZSh7IHN1Ym1pdHRlZDogdHJ1ZSB9KSA6IFwiXCI7XG4gICAgfSk7Ki8gfVxuICB9XG4gXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNUUkFQU0VTU0lPTlMgPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxCcmVhZGNydW1iIHRpdGxlPVwiQ29udGFjdCBVc1wiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3QtYXJlYSBwdGItNjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IENvbnRhY3QgVXNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+SGVyZSB0byBIZWxwPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBIYXZlIGEgcXVlc3Rpb24/IFlvdSBtYXkgZmluZCBhbiBhbnN3ZXIgaW4gb3VyIEZBUXMuIEJ1dCB5b3VcbiAgICAgICAgICAgICAgICAgICAgY2FuIGFsc28gY29udGFjdCB1cy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRhY3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lXCI+PC9pPiBDYWxsIFVzL1doYXRzYXBwOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPigrMTYxKSA5MzItNDM1NzQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIj48L2k+IEVtYWlsIFVzOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnN1cHBvcnRAc3RyYXBzZXNzaW9ucy5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlclwiID48L2k+XG4gICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgIFNhbiBEaWVnbyBDQVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgIDxoMz5PcGVuaW5nIEhvdXJzOjwvaDM+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwib3BlbmluZy1ob3Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TW9uZGF5Ojwvc3Bhbj4gOEFNIC0gNkFNXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UdWVzZGF5Ojwvc3Bhbj4gOEFNIC0gNkFNXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5XZWRuZXNkYXk6PC9zcGFuPiA4QU0gLSA2QU1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRodXJzZGF5IC0gRnJpZGF5Ojwvc3Bhbj4gOEFNIC0gNkFNXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5TdW5kYXk6PC9zcGFuPiBDbG9zZWRcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5Ecm9wIFVzIEEgTGluZTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgV2XigJlyZSBoYXBweSB0byBhbnN3ZXIgYW55IHF1ZXN0aW9ucyB5b3UgaGF2ZSBvciBwcm92aWRlIHlvdVxuICAgICAgICAgICAgICAgICAgICB3aXRoIGFuIGVzdGltYXRlLiBKdXN0IHNlbmQgdXMgYSBtZXNzYWdlIGluIHRoZSBmb3JtIGJlbG93XG4gICAgICAgICAgICAgICAgICAgIHdpdGggYW55IHF1ZXN0aW9ucyB5b3UgbWF5IGhhdmUuXG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29udGFjdEZvcm1cIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSA8c3Bhbj4ocmVxdWlyZWQpKjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrIHdpdGgtZXJyb3JzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCA8c3Bhbj4ocmVxdWlyZWQpKjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9jayB3aXRoLWVycm9yc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvbmUgTnVtYmVyIDxzcGFuPihyZXF1aXJlZCkqPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwaG9uZV9udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSBlbnRlciB5b3VyIHBob25lIG51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIFBob25lIE51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9jayB3aXRoLWVycm9yc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBNZXNzYWdlIDxzcGFuPihyZXF1aXJlZCkqPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWVycm9yPVwiUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9jayB3aXRoLWVycm9yc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1zZ1N1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgzIHRleHQtY2VudGVyIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGYWNpbGl0eSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9