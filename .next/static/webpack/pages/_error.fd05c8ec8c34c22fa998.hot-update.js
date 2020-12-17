webpackHotUpdate_N_E("pages/_error",{

/***/ "./components/Common/Breadcrumb.js":
/*!*****************************************!*\
  !*** ./components/Common/Breadcrumb.js ***!
  \*****************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Breadcrumb = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Breadcrumb, _Component);

  var _super = _createSuper(Breadcrumb);

  function Breadcrumb() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Breadcrumb);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Breadcrumb, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "page-title-area"
      }, __jsx("div", {
        className: "container"
      }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/"
      }, __jsx("a", null, "Home"))), __jsx("li", null, this.props.title))));
    }
  }]);

  return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

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

/***/ }),

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
        href: "/handgun-sight"
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
      }, __jsx("a", null, "Rifle"))))), __jsx("div", {
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

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
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
/* harmony import */ var _TopPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopPanel */ "./components/Layout/TopPanel.js");
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopHeader */ "./components/Layout/TopHeader.js");
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MegaMenu */ "./components/Layout/MegaMenu.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Navbar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Navbar, _Component);

  var _super = _createSuper(Navbar);

  function Navbar() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_MegaMenu__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

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

/***/ }),

/***/ "./components/Layout/TopHeader.js":
/*!****************************************!*\
  !*** ./components/Layout/TopHeader.js ***!
  \****************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Modal_Wishlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Modal/Wishlist */ "./components/Modal/Wishlist.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var TopHeader = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(TopHeader, _Component);

  var _super = _createSuper(TopHeader);

  function TopHeader() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TopHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      display: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleWishlist", function () {
      _this.setState(function (prevState) {
        return {
          display: !prevState.display
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TopHeader, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "top-header"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row align-items-center"
      }, __jsx("div", {
        className: "col-lg-7 col-md-6"
      }, __jsx("ul", {
        className: "top-header-nav"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/about"
      }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, __jsx("a", null, "Our Stores"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/faq"
      }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/contact-us"
      }, __jsx("a", null, "Contact"))))), __jsx("div", {
        className: "col-lg-5 col-md-6"
      }, __jsx("ul", {
        className: "top-header-right-nav"
      }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, __jsx("a", {
        "data-toggle": "modal",
        "data-target": "#shoppingWishlistModal",
        onClick: function onClick(e) {
          e.preventDefault();

          _this2.handleWishlist();
        }
      }, "Wishlist ", __jsx("i", {
        className: "far fa-heart"
      })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/compare"
      }, __jsx("a", null, "Compare ", __jsx("i", {
        className: "fas fa-balance-scale"
      })))), __jsx("li", null, __jsx("div", {
        className: "languages-list"
      }, __jsx("select", null, __jsx("option", {
        value: "1"
      }, "Eng"), __jsx("option", {
        value: "2"
      }, "Ger"), __jsx("option", {
        value: "3"
      }, "Span"))))))))), this.state.display ? __jsx(_Modal_Wishlist__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.handleWishlist
      }) : '');
    }
  }]);

  return TopHeader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TopHeader);

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

/***/ }),

/***/ "./images/404.png":
/*!************************!*\
  !*** ./images/404.png ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/404-69268244f1f9b751ddbc6c1b236d2cd8.png";

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CHP%20eliteworkstation%5CDesktop%5Clambo%5Cnovine-react%5Cpages%5C_error.js!./":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CHP%20eliteworkstation%5CDesktop%5Clambo%5Cnovine-react%5Cpages%5C_error.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Common_Facility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/Facility */ "./components/Common/Facility.js");
/* harmony import */ var _components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/Breadcrumb */ "./components/Common/Breadcrumb.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Error = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Error, _Component);

  var _super = _createSuper(Error);

  function Error() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Error);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Error, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "404 Not Found"
      }), __jsx("section", {
        className: "error-area ptb-60"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "error-content"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../images/404.png */ "./images/404.png"),
        alt: "error"
      }), __jsx("h3", null, this.props.statusCode, " Page Not Found"), __jsx("p", null, "The page you are looking for might have been removed had its name changed or is temporarily unavailable."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/"
      }, __jsx("a", {
        className: "btn btn-light"
      }, "Go to Home"))))), __jsx(_components_Common_Facility__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Error);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTWVnYU1lbnUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvVG9wSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9pbWFnZXMvNDA0LnBuZyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fZXJyb3IuanMiXSwibmFtZXMiOlsiQnJlYWRjcnVtYiIsInByb3BzIiwidGl0bGUiLCJDb21wb25lbnQiLCJNZWdhTWVudVR3byIsImRpc3BsYXkiLCJzZWFyY2hGb3JtIiwiY29sbGFwc2VkIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzdGF0ZSIsImVsZW1lbnRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvIiwiY2xhc3NPbmUiLCJjbGFzc1R3byIsInByb2R1Y3RzIiwicmVxdWlyZSIsInRvZ2dsZU5hdmJhciIsImhhbmRsZVNlYXJjaEZvcm0iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDYXJ0IiwibGVuZ3RoIiwibWFwU3RhdGVUb1Byb3BzIiwiYWRkZWRJdGVtcyIsImNvbm5lY3QiLCJOYXZiYXIiLCJUb3BIZWFkZXIiLCJoYW5kbGVXaXNobGlzdCIsIkVycm9yIiwic3RhdHVzQ29kZSIsInJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QkFBSyxLQUFLdkIsS0FBTCxDQUFXcUMsVUFBaEIsb0JBSEosRUFJSSw0SEFKSixFQU1JLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUM7QUFBWCxTQUNJO0FBQUcsaUJBQVMsRUFBQztBQUFiLHNCQURKLENBTkosQ0FESixDQURKLENBSEosRUFpQkksTUFBQyxtRUFBRCxPQWpCSixFQWtCSSxNQUFDLGlFQUFELE9BbEJKLENBREo7QUFzQkg7OzswQ0E1Qm9DO0FBQUEsVUFBWkMsR0FBWSxRQUFaQSxHQUFZO0FBQUEsVUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ2pDLFVBQU1GLFVBQVUsR0FBR0MsR0FBRyxHQUFHQSxHQUFHLENBQUNELFVBQVAsR0FBb0JFLEdBQUcsR0FBR0EsR0FBRyxDQUFDRixVQUFQLEdBQW9CLElBQWpFO0FBQ0EsYUFBTztBQUFFQSxrQkFBVSxFQUFWQTtBQUFGLE9BQVA7QUFDSDs7OztFQUxlbkMsK0M7O0FBaUNMa0Msb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2Vycm9yLmZkMDVjOGVjOGMzNGMyMmZhOTk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY2xhc3MgQnJlYWRjcnVtYiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlLWFyZWFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPnt0aGlzLnByb3BzLnRpdGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vTW9kYWwvQ2FydFwiO1xuXG5jbGFzcyBNZWdhTWVudVR3byBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgIHNlYXJjaEZvcm06IGZhbHNlLFxuICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgfTtcblxuICBoYW5kbGVDYXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogIXByZXZTdGF0ZS5kaXNwbGF5LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBoYW5kbGVTZWFyY2hGb3JtID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VhcmNoRm9ybTogIXByZXZTdGF0ZS5zZWFyY2hGb3JtLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICB0b2dnbGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZCxcbiAgICB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgZWxlbWVudElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcbiAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5hZGQoXCJpcy1zdGlja3lcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50SWQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXN0aWNreVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xsYXBzZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY2xhc3NPbmUgPSBjb2xsYXBzZWRcbiAgICAgID8gXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIlxuICAgICAgOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZSBzaG93XCI7XG4gICAgY29uc3QgY2xhc3NUd28gPSBjb2xsYXBzZWRcbiAgICAgID8gXCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodCBjb2xsYXBzZWRcIlxuICAgICAgOiBcIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0XCI7XG5cbiAgICBsZXQgeyBwcm9kdWN0cyB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1hcmVhIGJnLWJsYWNrXCI+XG4gICAgICAgICAgPGRpdiBpZD1cIm5hdmJhclwiIGNsYXNzTmFtZT1cImNvbWVyby1uYXZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbWQgbmF2YmFyLWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3doaXRlLWxvZ28ucG5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTmF2YmFyfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc1R3b31cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NPbmV9IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCI+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG1lZ2FtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEZJUkVBUk1TIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5IQU5ER1VOUzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlbWktYXV0b21hdGljXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBTZW1pLUF1dG9tYXRpYyA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jldm9sdmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBSZXZvbHZlciA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYXItYWstcGlzdG9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5BUi9BSyBQaXN0b2xzIFRhY3RpY2FsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xldmVyLWFjdGlvbi1oYW5kZ3Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5MZXZlciBBY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGVycmluZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBEZXJyaW5nZXI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlJJRkxFUzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gQVJzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Frc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gQUtzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2JvbHQtYWN0aW9uLXJpZmxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gQm9sdCBBY3Rpb248L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaHVudGluZy1yaWZsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEh1bnRpbmc8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGFjdGljYWwtcmlmbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlRhY3RpY2FsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj4gU0hPVEdVTlM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZWxmLWRlZmVuc2Utc2hvdGd1bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VsZiBEZWZlbnNlXG4gICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcG9ydGluZy1zaG90Z3Vuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5TcG9ydGluZ1xuICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBPUFRJQ1MgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPlNjb3BlczwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JpZmxlLXNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJpZmxlIFNjb3BlczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWQtZG90LXNjb3BlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJlZCBEb3QgT3B0aWNzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25pZ2h0LXZpc2lvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5OaWdodCBWaXNpb24gLyBUaGVybWFsPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jpbm9jdWxhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEJpbm9jdWxhcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmFuZ2UtZmluZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJhbmdlIEZpbmRlcnM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj4gU0lHSFRTPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaGFuZGd1bi1zaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5IYW5kZ3VuIFNpZ2h0czwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+QWNjZXNzb3JpZXM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mbGFzaFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gIEZMQVNIIFxuICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dlYXBvbi1saWdodHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IExJR0hUUyBXRUFQT04gXG4gICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBBTU1VTklUSU9OIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JpbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SSU08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaGFuZGd1bi1hbW11bml0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkZpcmUgSGFuZGd1bjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yaWZsZS1hbW11bml0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlJpZmxlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG57LyoqIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvdGd1bi1hbW11bml0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnNob3RndW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPiA8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPiA8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtdHJlbmRpbmctcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9hbW11bml0aW9uL3JpbS9jY2ktNzQuanBnXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlRvcCBUcmVuZGluZzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZHVjdC8yMzVcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZS10cmVuZGluZy1wcm9kdWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2FtbXVuaXRpb24vaGFuZGd1bi8xNDEwOTkxNTUwLTkwMjgyLTltbS1sdWdlci0xNDctZ3IteHRwLmpwZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Qb3B1bGFyIFByb2R1Y3RzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0LzIxNVwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gcC1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQmxvZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3RoZXJzLW9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1idG4gZmFzIGZhLXNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnNlYXJjaEZvcm0gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPjwvaT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjbG9zZS1idG4gZmFzIGZhLXRpbWVzICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2VhcmNoRm9ybSA/IFwiYWN0aXZlXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLW92ZXJsYXkgc2VhcmNoLXBvcHVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuc2VhcmNoRm9ybSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zZWFyY2hcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2FydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBDYXJ0KHtwcm9kdWN0cy5sZW5ndGh9KXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNob3BwaW5nLWJhZ1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gPENhcnQgb25DbGljaz17dGhpcy5oYW5kbGVDYXJ0fSAvPiA6IFwiXCJ9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcHJvZHVjdHM6IHN0YXRlLmFkZGVkSXRlbXMsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTWVnYU1lbnVUd28pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb3BQYW5lbCBmcm9tICcuL1RvcFBhbmVsJztcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi9Ub3BIZWFkZXInO1xuaW1wb3J0IE1lZ2FNZW51IGZyb20gJy4vTWVnYU1lbnUnO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxNZWdhTWVudSAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4uL01vZGFsL1dpc2hsaXN0JztcblxuY2xhc3MgVG9wSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgIH07XG5cbiAgICBoYW5kbGVXaXNobGlzdCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSggcHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogIXByZXZTdGF0ZS5kaXNwbGF5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy03IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3AtaGVhZGVyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL1wiPjxhPk91ciBTdG9yZXM8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9mYXFcIj48YT5GQVEnczwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2NvbnRhY3QtdXNcIj48YT5Db250YWN0PC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wLWhlYWRlci1yaWdodC1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI3Nob3BwaW5nV2lzaGxpc3RNb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXaXNobGlzdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaXNobGlzdCA8aSBjbGFzc05hbWU9XCJmYXIgZmEtaGVhcnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tcGFyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Db21wYXJlIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1iYWxhbmNlLXNjYWxlXCI+PC9pPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VzLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+RW5nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkdlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5TcGFuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyA8V2lzaGxpc3Qgb25DbGljaz17dGhpcy5oYW5kbGVXaXNobGlzdH0gLz4gOiAnJ31cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BIZWFkZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvNDA0LTY5MjY4MjQ0ZjFmOWI3NTFkZGJjNmMxYjIzNmQyY2Q4LnBuZ1wiOyIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcSFAgZWxpdGV3b3Jrc3RhdGlvblxcXFxEZXNrdG9wXFxcXGxhbWJvXFxcXG5vdmluZS1yZWFjdFxcXFxwYWdlc1xcXFxfZXJyb3IuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xuaW1wb3J0IEZhY2lsaXR5IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5JztcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0JyZWFkY3J1bWInO1xuXG5jbGFzcyBFcnJvciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBlcnIgfSkge1xuICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IG51bGw7XG4gICAgICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1iIHRpdGxlPVwiNDA0IE5vdCBGb3VuZFwiIC8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZXJyb3ItYXJlYSBwdGItNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vaW1hZ2VzLzQwNC5wbmdcIil9IGFsdD1cImVycm9yXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSBQYWdlIE5vdCBGb3VuZDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZCBoYWQgaXRzIG5hbWUgY2hhbmdlZCBvciBpcyB0ZW1wb3JhcmlseSB1bmF2YWlsYWJsZS48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLWxpZ2h0XCI+R28gdG8gSG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxGYWNpbGl0eSAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=