webpackHotUpdate_N_E("pages/contact-us",{

/***/ "./pages/contact-us.js":
/*!*****************************!*\
  !*** ./pages/contact-us.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Common_Facility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Common/Facility */ "./components/Common/Facility.js");
/* harmony import */ var _components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Common/Breadcrumb */ "./components/Common/Breadcrumb.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOnChange", function (e) {
      var _this$setState;

      _this.setState((_this$setState = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, e.target.name, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, e.target.email, e.target.value), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$setState, e.target.mes, e.target.value), _this$setState));
    });

    _this.state = {
      name: "",
      email: "",
      mes: ""
    };
    _this.handleOnChange = _this.handleOnChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleOnSubmit = _this.handleOnSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "handleOnSubmit",
    value: function () {
      var _handleOnSubmit = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                axios__WEBPACK_IMPORTED_MODULE_15___default()({
                  method: "POST",
                  url: "/api/contact",
                  data: this.state
                }).then(function (response) {
                  if (response.data === "success") {
                    react_toastify__WEBPACK_IMPORTED_MODULE_17__["toast"].success('Message Has Been Sent Successfully', {
                      position: "top-center",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true
                    });

                    _this2.resetForm();

                    setTimeout(function () {
                      next_router__WEBPACK_IMPORTED_MODULE_16___default.a.push('/');
                    }, 4000);
                  } else if (response.data === "badddd") {
                    react_toastify__WEBPACK_IMPORTED_MODULE_17__["toast"].success('Message did not deliver: Please Check if you entered a valid email', {
                      position: "top-center",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true
                    });
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleOnSubmit(_x) {
        return _handleOnSubmit.apply(this, arguments);
      }

      return handleOnSubmit;
    }()
  }, {
    key: "resetForm",
    value: function resetForm() {
      this.setState({
        name: "",
        email: "",
        mes: ""
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _jsx;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_14___default.a, null, __jsx("title", null, "STRAPSESSIONS "), __jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], null), __jsx(_components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
      }, "+1(619) 324-3574")), __jsx("li", null, __jsx("i", {
        className: "far fa-envelope"
      }), " Email Us:", " ", __jsx("a", {
        href: "#"
      }, "support@strapsessions.com")), __jsx("li", null, __jsx("i", {
        className: "fa fa-map-marker"
      }), "Address: San Diego CA")), __jsx("h3", null, "Opening Hours:"), __jsx("ul", {
        className: "opening-hours"
      }, __jsx("li", null, __jsx("span", null, "Monday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Tuesday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Wednesday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Thursday - Friday:"), " 8AM - 6AM"), __jsx("li", null, __jsx("span", null, "Sunday:"), " Closed")))), __jsx("div", {
        className: "col-lg-7 col-md-12"
      }, __jsx("div", {
        className: "contact-form"
      }, __jsx("h3", null, "Drop Us A Line"), __jsx("p", null, "We\u2019re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have."), __jsx("form", {
        id: "contactForm",
        name: "contact",
        onSubmit: this.handleOnSubmit
      }, __jsx("input", {
        type: "hidden",
        name: "form-name",
        value: this.state.name
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
        placeholder: "Enter your name",
        value: this.state.name,
        onChange: this.handleOnChange.bind(this)
      }), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Email ", __jsx("span", null, "(required)*")), __jsx("input", (_jsx = {
        type: "email",
        name: "email",
        id: "email",
        className: "form-control",
        required: true,
        value: this.state.email,
        onChange: this.handleOnChange.bind(this)
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "required", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "data-error", "Please enter your email"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_jsx, "placeholder", "Enter your Email Address"), _jsx)), __jsx("div", {
        className: "help-block with-errors"
      }))), __jsx("div", {
        className: "col-lg-12 col-md-12"
      }, __jsx("div", {
        className: "form-group"
      }, __jsx("label", null, "Your Message ", __jsx("span", null, "(required)*")), __jsx("textarea", {
        name: "mes",
        id: "mes",
        cols: "30",
        rows: "8",
        value: this.state.mes,
        onChange: this.handleOnChange.bind(this),
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
      }))))))))), __jsx(_components_Common_Facility__WEBPACK_IMPORTED_MODULE_12__["default"], null), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC11cy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJtZXMiLCJzdGF0ZSIsImhhbmRsZU9uQ2hhbmdlIiwiYmluZCIsImhhbmRsZU9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInJlc2V0Rm9ybSIsInNldFRpbWVvdXQiLCJSb3V0ZXIiLCJwdXNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztJQUdNQSxLOzs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQix5TkFXRixVQUFDQyxDQUFELEVBQU87QUFBQTs7QUFDdEIsWUFBS0MsUUFBTCxpSUFDR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBRFosRUFDbUJILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUQ1Qiw2R0FFR0osQ0FBQyxDQUFDRSxNQUFGLENBQVNHLEtBRlosRUFFb0JMLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUY3Qiw2R0FHR0osQ0FBQyxDQUFDRSxNQUFGLENBQVNJLEdBSFosRUFHa0JOLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUgzQjtBQUtELEtBakJrQjs7QUFFakIsVUFBS0csS0FBTCxHQUFhO0FBQ1hKLFVBQUksRUFBRSxFQURLO0FB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ZGM4MTFlZTAyN2RiNjhmYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyXCI7XG5pbXBvcnQgRmFjaWxpdHkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5XCI7XG5pbXBvcnQgQnJlYWRjcnVtYiBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYlwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIG1lczogXCJcIixcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVPblN1Ym1pdCA9IHRoaXMuaGFuZGxlT25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgICBbZS50YXJnZXQuZW1haWxdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIFtlLnRhcmdldC5tZXNdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgYXN5bmMgaGFuZGxlT25TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgZGF0YTogdGhpcy5zdGF0ZSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01lc3NhZ2UgSGFzIEJlZW4gU2VudCBTdWNjZXNzZnVsbHknLCB7XG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgICAgICAgIGF1dG9DbG9zZTogNDAwMCxcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgICAgXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgUm91dGVyLnB1c2goJy8nKTsgfSwgNDAwMCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmRhdGEgPT09IFwiYmFkZGRkXCIpIHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnTWVzc2FnZSBkaWQgbm90IGRlbGl2ZXI6IFBsZWFzZSBDaGVjayBpZiB5b3UgZW50ZXJlZCBhIHZhbGlkIGVtYWlsJywge1xuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcC1jZW50ZXJcIixcbiAgICAgICAgICBhdXRvQ2xvc2U6IDQwMDAsXG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXNldEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBtZXM6IFwiXCIgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlNUUkFQU0VTU0lPTlMgPC90aXRsZT5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9XCJDb250YWN0IFVzXCIgLz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdC1hcmVhIHB0Yi02MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPjwvc3Bhbj4gQ29udGFjdCBVc1xuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgIDxoMz5IZXJlIHRvIEhlbHA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIEhhdmUgYSBxdWVzdGlvbj8gWW91IG1heSBmaW5kIGFuIGFuc3dlciBpbiBvdXIgRkFRcy4gQnV0IHlvdVxuICAgICAgICAgICAgICAgICAgICBjYW4gYWxzbyBjb250YWN0IHVzLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29udGFjdC1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGhvbmVcIj48L2k+IENhbGwgVXMvV2hhdHNhcHA6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+KzEoNjE5KSAzMjQtMzU3NDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1lbnZlbG9wZVwiPjwvaT4gRW1haWwgVXM6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+c3VwcG9ydEBzdHJhcHNlc3Npb25zLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgQWRkcmVzczogU2FuIERpZWdvIENBXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICA8aDM+T3BlbmluZyBIb3Vyczo8L2gzPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wZW5pbmctaG91cnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk1vbmRheTo8L3NwYW4+IDhBTSAtIDZBTVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VHVlc2RheTo8L3NwYW4+IDhBTSAtIDZBTVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2VkbmVzZGF5Ojwvc3Bhbj4gOEFNIC0gNkFNXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5UaHVyc2RheSAtIEZyaWRheTo8L3NwYW4+IDhBTSAtIDZBTVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VuZGF5Ojwvc3Bhbj4gQ2xvc2VkXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+RHJvcCBVcyBBIExpbmU8L2gzPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFdl4oCZcmUgaGFwcHkgdG8gYW5zd2VyIGFueSBxdWVzdGlvbnMgeW91IGhhdmUgb3IgcHJvdmlkZSB5b3VcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBhbiBlc3RpbWF0ZS4gSnVzdCBzZW5kIHVzIGEgbWVzc2FnZSBpbiB0aGUgZm9ybSBiZWxvd1xuICAgICAgICAgICAgICAgICAgICB3aXRoIGFueSBxdWVzdGlvbnMgeW91IG1heSBoYXZlLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RGb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17dGhpcy5oYW5kbGVPblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZSA8c3Bhbj4ocmVxdWlyZWQpKjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9jayB3aXRoLWVycm9yc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgPHNwYW4+KHJlcXVpcmVkKSo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWVycm9yPVwiUGxlYXNlIGVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxwLWJsb2NrIHdpdGgtZXJyb3JzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIE1lc3NhZ2UgPHNwYW4+KHJlcXVpcmVkKSo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5tZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlT25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWVycm9yPVwiUGxlYXNlIGVudGVyIHlvdXIgbWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9jayB3aXRoLWVycm9yc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTZW5kIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1zZ1N1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgzIHRleHQtY2VudGVyIGhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxGYWNpbGl0eSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9