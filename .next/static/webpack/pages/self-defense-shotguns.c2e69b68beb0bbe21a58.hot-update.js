webpackHotUpdate_N_E("pages/self-defense-shotguns",{

/***/ "./components/Layout/MegaMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/MegaMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Modal_Cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modal/Cart */ "./components/Modal/Cart.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var MegaMenuTwo = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MegaMenuTwo, _Component);

  var _super = _createSuper(MegaMenuTwo);

  function MegaMenuTwo() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MegaMenuTwo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      display: false,
      searchForm: false,
      collapsed: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleCart", function () {
      _this.setState(function (prevState) {
        return {
          display: !prevState.display
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSearchForm", function () {
      _this.setState(function (prevState) {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleNavbar", function () {
      _this.setState({
        collapsed: !_this.state.collapsed
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MegaMenuTwo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var elementId = document.getElementById("navbar");
      document.addEventListener("scroll", function () {
        if (window.scrollY > 170) {
          elementId.classList.add("is-sticky");
        } else {
          elementId.classList.remove("is-sticky");
        }
      });
      window.scrollTo(0, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var collapsed = this.state.collapsed;
      var classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
      var classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
      var products = this.props.products;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "navbar-area bg-black"
      }, __jsx("div", {
        id: "navbar",
        className: "comero-nav"
      }, __jsx("div", {
        className: "container-fluid"
      }, __jsx("nav", {
        className: "navbar navbar-expand-md navbar-light"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "navbar-brand"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/white-logo.png */ "./images/white-logo.png"),
        alt: "logo"
      }))), __jsx("button", {
        onClick: this.toggleNavbar,
        className: classTwo,
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, __jsx("span", {
        className: "navbar-toggler-icon"
      })), __jsx("div", {
        className: classOne,
        id: "navbarSupportedContent"
      }, __jsx("ul", {
        className: "navbar-nav"
      }, __jsx("li", {
        className: "nav-item p-relative"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "nav-link active"
      }, "Home"))), __jsx("li", {
        className: "nav-item megamenu"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "nav-link"
      }, "FIREARMS ", __jsx("i", {
        className: "fas fa-chevron-down"
      }))), __jsx("ul", {
        className: "dropdown-menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, "HANDGUNS"), __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/semi-automatic"
      }, __jsx("a", null, " Semi-Automatic "))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/revolver"
      }, __jsx("a", null, " Revolver "))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/ar-ak-pistols"
      }, __jsx("a", null, "AR/AK Pistols Tactical"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/lever-action-handguns"
      }, __jsx("a", null, "Lever Action"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/derringer"
      }, __jsx("a", null, " Derringer"))))), __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, "RIFLES"), __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/ars"
      }, __jsx("a", null, " ARs"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/aks"
      }, __jsx("a", null, " AKs"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/bolt-action-rifles"
      }, __jsx("a", null, " Bolt Action"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/hunting-rifles"
      }, __jsx("a", null, " Hunting"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/tactical-rifles"
      }, __jsx("a", null, "Tactical"))))), __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, " SHOTGUNS"), __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/self-defense-shotguns"
      }, __jsx("a", null, "Self Defense"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/sporting-shotguns"
      }, __jsx("a", null, "Sporting")))))))))), __jsx("li", {
        className: "nav-item megamenu"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "nav-link"
      }, "OPTICS ", __jsx("i", {
        className: "fas fa-chevron-down"
      }))), __jsx("ul", {
        className: "dropdown-menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, "Scopes"), __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/rifle-scope"
      }, __jsx("a", null, "Rifle Scopes"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/red-dot-scope"
      }, __jsx("a", null, "Red Dot Optics"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/night-vision"
      }, __jsx("a", null, "Night Vision / Thermal"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/binoculars"
      }, __jsx("a", null, " Binoculars"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/range-finder"
      }, __jsx("a", null, "Range Finders"))))), __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, " SIGHTS"), __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/handgun-sights"
      }, __jsx("a", null, "Handgun Sights"))))), __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, "Accessories"), __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/flash"
      }, __jsx("a", null, "  FLASH"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/weapon-lights"
      }, __jsx("a", null, " LIGHTS WEAPON")))))))))), __jsx("li", {
        className: "nav-item megamenu"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "nav-link"
      }, "AMMUNITION ", __jsx("i", {
        className: "fas fa-chevron-down"
      }))), __jsx("ul", {
        className: "dropdown-menu"
      }, __jsx("li", {
        className: "nav-item"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col"
      }, __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/rim"
      }, __jsx("a", null, "RIM"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/handgun-ammunition"
      }, __jsx("a", null, "Fire Handgun"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/rifle-ammunition"
      }, __jsx("a", null, "Rifle"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/shotgun-ammunition"
      }, __jsx("a", null, "shotgun"))))), __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, " "), __jsx("ul", {
        className: "megamenu-submenu"
      })), __jsx("div", {
        className: "col"
      }, __jsx("h6", {
        className: "submenu-title"
      }, " "), __jsx("ul", {
        className: "megamenu-submenu"
      })), __jsx("div", {
        className: "col"
      }, __jsx("ul", {
        className: "megamenu-submenu"
      }, __jsx("li", null, __jsx("div", {
        className: "aside-trending-products"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/ammunition/rim/cci-74.jpg */ "./images/ammunition/rim/cci-74.jpg"),
        alt: "image"
      }), __jsx("div", {
        className: "category"
      }, __jsx("h4", null, "Top Trending")), __jsx("a", {
        href: "/product/235"
      })), __jsx("div", {
        className: "aside-trending-products"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/ammunition/handgun/1410991550-90282-9mm-luger-147-gr-xtp.jpg */ "./images/ammunition/handgun/1410991550-90282-9mm-luger-147-gr-xtp.jpg"),
        alt: "image"
      }), __jsx("div", {
        className: "category"
      }, __jsx("h4", null, "Popular Products")), __jsx("a", {
        href: "/product/215"
      })))))))))), __jsx("li", {
        className: "nav-item p-relative"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/blog"
      }, __jsx("a", {
        className: "nav-link"
      }, "Blog")))), __jsx("div", {
        className: "others-option"
      }, __jsx("div", {
        className: "option-item"
      }, __jsx("i", {
        onClick: this.handleSearchForm,
        className: "search-btn fas fa-search",
        style: {
          display: this.state.searchForm ? "none" : "block"
        }
      }), __jsx("i", {
        onClick: this.handleSearchForm,
        className: "close-btn fas fa-times ".concat(this.state.searchForm ? "active" : "")
      }), __jsx("div", {
        className: "search-overlay search-popup",
        style: {
          display: this.state.searchForm ? "block" : "none"
        }
      }, __jsx("div", {
        className: "search-box"
      }, __jsx("form", {
        className: "search-form"
      }, __jsx("input", {
        className: "search-input",
        name: "search",
        placeholder: "Search",
        type: "text"
      }), __jsx("button", {
        className: "search-button",
        type: "submit"
      }, __jsx("i", {
        className: "fas fa-search"
      })))))), __jsx("div", {
        className: "option-item"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "#"
      }, __jsx("a", {
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.handleCart();
        }
      }, "Cart(", products.length, ")", " ", __jsx("i", {
        className: "fas fa-shopping-bag"
      })))))))))), this.state.display ? __jsx(_Modal_Cart__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onClick: this.handleCart
      }) : "");
    }
  }]);

  return MegaMenuTwo;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(MegaMenuTwo));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTWVnYU1lbnUuanMiXSwibmFtZXMiOlsiTWVnYU1lbnVUd28iLCJkaXNwbGF5Iiwic2VhcmNoRm9ybSIsImNvbGxhcHNlZCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwic3RhdGUiLCJlbGVtZW50SWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInNjcm9sbFkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzY3JvbGxUbyIsImNsYXNzT25lIiwiY2xhc3NUd28iLCJwcm9kdWN0cyIsInByb3BzIiwicmVxdWlyZSIsInRvZ2dsZU5hdmJhciIsImhhbmRsZVNlYXJjaEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDYXJ0IiwibGVuZ3RoIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiYWRkZWRJdGVtcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxhQUFPLEVBQUUsS0FESDtBQUVOQyxnQkFBVSxFQUFFLEtBRk47QUFHTkMsZUFBUyxFQUFFO0FBSEwsSzs7cU5BTUssWUFBTTtBQUNqQixZQUFLQyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFlO0FBQzNCLGVBQU87QUFDTEosaUJBQU8sRUFBRSxDQUFDSSxTQUFTLENBQUNKO0FBRGYsU0FBUDtBQUdELE9BSkQ7QUFLRCxLOzsyTkFFa0IsWUFBTTtBQUN2QixZQUFLRyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFlO0FBQzNCLGVBQU87QUFDTEgsb0JBQVUsRUFBRSxDQUFDRyxTQUFTLENBQUNIO0FBRGxCLFNBQVA7QUFHRCxPQUpEO0FBS0QsSzs7dU5BRWMsWUFBTTtBQUNuQixZQUFLRSxRQUFM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QUFDO0FBQWhCLFNBQ0U7QUFDRSxpQkFBUyxFQUFDLGNBRFo7QUFFRSxZQUFJLEVBQUMsUUFGUDtBQUdFLG1CQUFXLEVBQUMsUUFIZDtBQUlFLFlBQUksRUFBQztBQUpQLFFBREYsRUFPRTtBQUFRLGlCQUFTLEVBQUMsZUFBbEI7QUFBa0MsWUFBSSxFQUFDO0FBQXZDLFNBQ0U7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFERixDQVBGLENBREYsQ0FORixDQWhCRixDQURGLEVBdUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQztBQUFYLFNBQ0U7QUFDRSxlQUFPLEVBQUUsaUJBQUNzQixDQUFELEVBQU87QUFDZEEsV0FBQyxDQUFDQyxjQUFGOztBQUNBLGdCQUFJLENBQUNDLFVBQUw7QUFDRDtBQUpILGtCQU1RUCxRQUFRLENBQUNRLE1BTmpCLE9BTTBCLEdBTjFCLEVBT0U7QUFBRyxpQkFBUyxFQUFDO0FBQWIsUUFQRixDQURGLENBREYsQ0F2Q0YsQ0FwVUYsQ0F2QkYsQ0FERixDQURGLENBREYsQ0FERixFQXlaRyxLQUFLckIsS0FBTCxDQUFXTCxPQUFYLEdBQXFCLE1BQUMsb0RBQUQ7QUFBTSxlQUFPLEVBQUUsS0FBS3lCO0FBQXBCLFFBQXJCLEdBQTBELEVBelo3RCxDQURGO0FBNlpEOzs7O0VBaGR1QkUsK0M7O0FBbWQxQixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN2QixLQUFELEVBQVc7QUFDakMsU0FBTztBQUNMYSxZQUFRLEVBQUViLEtBQUssQ0FBQ3dCO0FBRFgsR0FBUDtBQUdELENBSkQ7O0FBTWVDLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QjdCLFdBQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsZi1kZWZlbnNlLXNob3RndW5zLmMyZTY5YjY4YmViMGJiZTIxYTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vTW9kYWwvQ2FydFwiO1xuXG5jbGFzcyBNZWdhTWVudVR3byBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIHNlYXJjaEZvcm06IGZhbHNlLFxuICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgfTtcblxuICBoYW5kbGVDYXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogIXByZXZTdGF0ZS5kaXNwbGF5LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTZWFyY2hGb3JtID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VhcmNoRm9ybTogIXByZXZTdGF0ZS5zZWFyY2hGb3JtLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB0b2dnbGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZCxcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJpcy1zdGlja3lcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXN0aWNreVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY2xhc3NPbmUgPSBjb2xsYXBzZWRcbiAgICAgID8gXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIlxuICAgICAgOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93XCI7XG4gICAgY29uc3QgY2xhc3NUd28gPSBjb2xsYXBzZWRcbiAgICAgID8gXCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCBjb2xsYXBzZWRcIlxuICAgICAgOiBcIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0XCI7XG5cbiAgICBsZXQgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhIGJnLWJsYWNrXCI+XG4gICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cImNvbWVyby1uYXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3doaXRlLWxvZ28ucG5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2YmFyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1R3b31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NPbmV9IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZJUkVBUk1TIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5IQU5ER1VOUzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlbWktYXV0b21hdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBTZW1pLUF1dG9tYXRpYyA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jldm9sdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBSZXZvbHZlciA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXItYWstcGlzdG9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BUi9BSyBQaXN0b2xzIFRhY3RpY2FsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xldmVyLWFjdGlvbi1oYW5kZ3Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5MZXZlciBBY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVycmluZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBEZXJyaW5nZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlJJRkxFUzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gQVJzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Frc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gQUtzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2JvbHQtYWN0aW9uLXJpZmxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gQm9sdCBBY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaHVudGluZy1yaWZsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEh1bnRpbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFjdGljYWwtcmlmbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlRhY3RpY2FsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj4gU0hPVEdVTlM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZWxmLWRlZmVuc2Utc2hvdGd1bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VsZiBEZWZlbnNlXG4gICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcG9ydGluZy1zaG90Z3Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TcG9ydGluZ1xuICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBPUFRJQ1MgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlNjb3BlczwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JpZmxlLXNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJpZmxlIFNjb3BlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWQtZG90LXNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJlZCBEb3QgT3B0aWNzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25pZ2h0LXZpc2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5OaWdodCBWaXNpb24gLyBUaGVybWFsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jpbm9jdWxhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEJpbm9jdWxhcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmFuZ2UtZmluZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJhbmdlIEZpbmRlcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj4gU0lHSFRTPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaGFuZGd1bi1zaWdodHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SGFuZGd1biBTaWdodHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPkFjY2Vzc29yaWVzPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmxhc2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+ICBGTEFTSCBcbiAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93ZWFwb24tbGlnaHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBMSUdIVFMgV0VBUE9OIFxuICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQU1NVU5JVElPTiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yaW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UklNPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hhbmRndW4tYW1tdW5pdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5GaXJlIEhhbmRndW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmlmbGUtYW1tdW5pdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SaWZsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG90Z3VuLWFtbXVuaXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+c2hvdGd1bjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+IDwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+IDwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZS10cmVuZGluZy1wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2FtbXVuaXRpb24vcmltL2NjaS03NC5qcGdcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+VG9wIFRyZW5kaW5nPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0LzIzNVwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLXRyZW5kaW5nLXByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvYW1tdW5pdGlvbi9oYW5kZ3VuLzE0MTA5OTE1NTAtOTAyODItOW1tLWx1Z2VyLTE0Ny1nci14dHAuanBnXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBvcHVsYXIgUHJvZHVjdHM8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3QvMjE1XCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBCbG9nIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdGhlcnMtb3B0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJ0biBmYXMgZmEtc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuc2VhcmNoRm9ybSA/IFwibm9uZVwiIDogXCJibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNsb3NlLWJ0biBmYXMgZmEtdGltZXMgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hGb3JtID8gXCJhY3RpdmVcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgID48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtb3ZlcmxheSBzZWFyY2gtcG9wdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5zZWFyY2hGb3JtID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIENhcnQoe3Byb2R1Y3RzLmxlbmd0aH0pe1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2hvcHBpbmctYmFnXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyA8Q2FydCBvbkNsaWNrPXt0aGlzLmhhbmRsZUNhcnR9IC8+IDogXCJcIn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShNZWdhTWVudVR3byk7XG4iXSwic291cmNlUm9vdCI6IiJ9