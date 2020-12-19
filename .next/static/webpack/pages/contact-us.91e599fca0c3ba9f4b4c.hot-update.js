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
                    toast.success('Message Has Been Sent Successfully', {
                      position: "top-center",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true
                    });

                    _this2.resetForm();
                  } else if (response.data === "badddd") {
                    toast.success('Message did not deliver', {
                      position: "top-center",
                      autoClose: 3000,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC11cy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJtZXMiLCJzdGF0ZSIsImhhbmRsZU9uQ2hhbmdlIiwiYmluZCIsImhhbmRsZU9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJheGlvcyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInJlc2V0Rm9ybSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7SUFFTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIseU5BV0YsVUFBQ0MsQ0FBRCxFQUFPO0FBQUE7O0FBQ3RCLFlBQUtDLFFBQUwsaUlBQ0dELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQURaLEVBQ21CSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FENUIsNkdBRUdKLENBQUMsQ0FBQ0UsTUFBRixDQUFTRyxLQUZaLEVBRW9CTCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FGN0IsNkdBR0dKLENBQUMsQ0FBQ0UsTUFBRixDQUFTSSxHQUhaLEVBR2tCTixDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FIM0I7QUFLRCxLQWpCa0I7O0FBRWpCLFVBQUtHLEtBQUwsR0FBYTtBQUNYSixVQUFJLEVBQUUsRUFESztBQUVYRSxXQUFLLEVBQUUsRUFGSTtBQUdYQyxTQUFHLEVBQUU7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QVVjLDBCQVZkLFNBSkYsRUFnQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFoQkYsQ0FERixDQXJCRixFQTBDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0Usc0NBQ2Usa0NBRGYsQ0FERixFQUlFO0FBQ0UsWUFBSSxFQUFDLEtBRFA7QUFFRSxVQUFFLEVBQUMsS0FGTDtBQUdFLFlBQUksRUFBQyxJQUhQO0FBSUUsWUFBSSxFQUFDLEdBSlA7QUFLRSxhQUFLLEVBQUUsS0FBS0YsS0FBTCxDQUFXRCxHQUxwQjtBQU1FLGdCQUFRLEVBQUUsS0FBS0UsY0FBTCxDQUFvQkMsSUFBcEIsQ0FBeUIsSUFBekIsQ0FOWjtBQU9FLGdCQUFRLEVBQUUsSUFQWjtBQVFFLHNCQUFXLDJCQVJiO0FBU0UsaUJBQVMsRUFBQyxjQVRaO0FBVUUsbUJBQVcsRUFBQztBQVZkLFFBSkYsRUFnQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFoQkYsQ0FERixDQTFDRixFQStERTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsaUJBQVMsRUFBQztBQUFoQyx3QkFERixFQUlFO0FBQ0UsVUFBRSxFQUFDLFdBREw7QUFFRSxpQkFBUyxFQUFDO0FBRlosUUFKRixFQVFFO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBUkYsQ0EvREYsQ0FORixDQVJGLENBREYsQ0E3Q0YsQ0FQRixDQURGLENBVkYsRUE4SkUsTUFBQyxvRUFBRCxPQTlKRixFQStKRSxNQUFDLGtFQUFELE9BL0pGLENBREY7QUFtS0Q7Ozs7RUF6TmlCa0IsK0M7O0FBNE5MN0Isb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC11cy45MWU1OTlmY2EwYzNiYTlmNGI0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXJcIjtcbmltcG9ydCBGYWNpbGl0eSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHlcIjtcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9CcmVhZGNydW1iXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIG1lczogXCJcIixcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlT25DaGFuZ2UgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVPblN1Ym1pdCA9IHRoaXMuaGFuZGxlT25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgICBbZS50YXJnZXQuZW1haWxdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgIFtlLnRhcmdldC5tZXNdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcbiAgYXN5bmMgaGFuZGxlT25TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgdXJsOiBcIi9hcGkvY29udGFjdFwiLFxuICAgICAgZGF0YTogdGhpcy5zdGF0ZSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgPT09IFwic3VjY2Vzc1wiKSB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ01lc3NhZ2UgSGFzIEJlZW4gU2VudCBTdWNjZXNzZnVsbHknLCB7XG4gICAgICAgICAgcG9zaXRpb246IFwidG9wLWNlbnRlclwiLFxuICAgICAgICAgIGF1dG9DbG9zZTogNDAwMCxcbiAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxuICAgICAgICAgIGNsb3NlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YSA9PT0gXCJiYWRkZGRcIikge1xuICAgICAgICB0b2FzdC5zdWNjZXNzKCdNZXNzYWdlIGRpZCBub3QgZGVsaXZlcicsIHtcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3AtY2VudGVyXCIsXG4gICAgICAgICAgYXV0b0Nsb3NlOiAzMDAwLFxuICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVzZXRGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgbWVzOiBcIlwiIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TVFJBUFNFU1NJT05TIDwvdGl0bGU+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxCcmVhZGNydW1iIHRpdGxlPVwiQ29udGFjdCBVc1wiIC8+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3QtYXJlYSBwdGItNjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb3RcIj48L3NwYW4+IENvbnRhY3QgVXNcbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8aDM+SGVyZSB0byBIZWxwPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBIYXZlIGEgcXVlc3Rpb24/IFlvdSBtYXkgZmluZCBhbiBhbnN3ZXIgaW4gb3VyIEZBUXMuIEJ1dCB5b3VcbiAgICAgICAgICAgICAgICAgICAgY2FuIGFsc28gY29udGFjdCB1cy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbnRhY3QtbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lXCI+PC9pPiBDYWxsIFVzL1doYXRzYXBwOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPisxKDYxOSkgMzI0LTM1NzQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIj48L2k+IEVtYWlsIFVzOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPnN1cHBvcnRAc3RyYXBzZXNzaW9ucy5jb208L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6IFNhbiBEaWVnbyBDQVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgPGgzPk9wZW5pbmcgSG91cnM6PC9oMz5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJvcGVuaW5nLWhvdXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Nb25kYXk6PC9zcGFuPiA4QU0gLSA2QU1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlR1ZXNkYXk6PC9zcGFuPiA4QU0gLSA2QU1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlZG5lc2RheTo8L3NwYW4+IDhBTSAtIDZBTVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+VGh1cnNkYXkgLSBGcmlkYXk6PC9zcGFuPiA4QU0gLSA2QU1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN1bmRheTo8L3NwYW4+IENsb3NlZFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgPGgzPkRyb3AgVXMgQSBMaW5lPC9oMz5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBXZeKAmXJlIGhhcHB5IHRvIGFuc3dlciBhbnkgcXVlc3Rpb25zIHlvdSBoYXZlIG9yIHByb3ZpZGUgeW91XG4gICAgICAgICAgICAgICAgICAgIHdpdGggYW4gZXN0aW1hdGUuIEp1c3Qgc2VuZCB1cyBhIG1lc3NhZ2UgaW4gdGhlIGZvcm0gYmVsb3dcbiAgICAgICAgICAgICAgICAgICAgd2l0aCBhbnkgcXVlc3Rpb25zIHlvdSBtYXkgaGF2ZS5cbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb250YWN0Rm9ybVwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlT25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgPHNwYW4+KHJlcXVpcmVkKSo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXJyb3I9XCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2sgd2l0aC1lcnJvcnNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIDxzcGFuPihyZXF1aXJlZCkqPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgRW1haWwgQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9jayB3aXRoLWVycm9yc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBNZXNzYWdlIDxzcGFuPihyZXF1aXJlZCkqPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSBlbnRlciB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIE1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2sgd2l0aC1lcnJvcnNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU2VuZCBNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJtc2dTdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoMyB0ZXh0LWNlbnRlciBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8RmFjaWxpdHkgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==