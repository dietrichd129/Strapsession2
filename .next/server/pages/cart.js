module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/cart": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/cart.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/Common/Breadcrumb.js":
/*!*****************************************!*\
  !*** ./components/Common/Breadcrumb.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Breadcrumb extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "page-title-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "Home"))), __jsx("li", null, this.props.title))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./components/Common/Facility.js":
/*!***************************************!*\
  !*** ./components/Common/Facility.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Facility extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "facility-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-plane"
    })), __jsx("h3", null, "Free Shipping World Wide"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-money-check-alt"
    })), __jsx("h3", null, "100% money back guarantee"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "far fa-credit-card"
    })), __jsx("h3", null, "Many payment gatways"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "facility-box"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "fas fa-headset"
    })), __jsx("h3", null, "24/7 online support"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Facility);

/***/ }),

/***/ "./components/Layout/Footer.js":
/*!*************************************!*\
  !*** ./components/Layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "yy", void 0);
  }

  render() {
    return __jsx("footer", {
      className: "footer-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("div", {
      className: "logo"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
      alt: "logo"
    })))), __jsx("p", null, "Biggest Online gun deals. One of the largest online gun stores with the selection of handguns, rifles, shotguns, ammo, optics & firearm accessories."))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Quick Links"), __jsx("ul", {
      className: "quick-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faq"
    }, __jsx("a", null, "Faq's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/customer-service"
    }, __jsx("a", null, "Customer Services"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us"
    }, __jsx("a", null, "Contact Us")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Information"), __jsx("ul", {
      className: "information-links"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us"
    }, __jsx("a", null, "Contact Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/customer-service"
    }, __jsx("a", null, "Customer Services")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Contact Us"), __jsx("ul", {
      className: "footer-contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "fas fa-phone"
    }), "Call Us/Whatsapp:", " ", __jsx("a", {
      href: "tel:(+161) 932-43574"
    }, "+1(619) 324-3574")), __jsx("li", null, __jsx("i", {
      className: "far fa-envelope"
    }), "Email Us:", " ", __jsx("a", {
      href: "support@strapsessions.com"
    }, "support@strapsessions.com")), __jsx("li", null, __jsx("i", {
      className: "fa fa-map-marker",
      "aria-hidden": "true"
    }), "Address:", " ", "San Diego CA")))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyright @ 2020 Strapsessions. All Rights Reserved ")), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", {
      className: "payment-card"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/visa.png */ "./images/visa.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/mastercard.png */ "./images/mastercard.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/mastercard2.png */ "./images/mastercard2.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/visa2.png */ "./images/visa2.png"),
      alt: "image"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      target: "_blank"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/expresscard.png */ "./images/expresscard.png"),
      alt: "image"
    }))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout/MegaMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/MegaMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Modal_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modal/Cart */ "./components/Modal/Cart.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MegaMenuTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      searchForm: false,
      collapsed: true
    });

    _defineProperty(this, "handleCart", () => {
      this.setState(prevState => {
        return {
          display: !prevState.display
        };
      });
    });

    _defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });
  }

  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  render() {
    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
    const classTwo = collapsed ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
    let {
      products
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "navbar-area bg-black"
    }, __jsx("div", {
      id: "navbar",
      className: "comero-nav"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "nav-link active"
    }, "Home"))), __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/semi-automatic"
    }, __jsx("a", null, " Semi-Automatic "))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/revolver"
    }, __jsx("a", null, " Revolver "))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/ar-ak-pistols"
    }, __jsx("a", null, "AR/AK Pistols Tactical"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/lever-action-handguns"
    }, __jsx("a", null, "Lever Action"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/derringer"
    }, __jsx("a", null, " Derringer"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "RIFLES"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/ars"
    }, __jsx("a", null, " ARs"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/aks"
    }, __jsx("a", null, " AKs"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/bolt-action-rifles"
    }, __jsx("a", null, " Bolt Action"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/hunting-rifles"
    }, __jsx("a", null, " Hunting"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/tactical-rifles"
    }, __jsx("a", null, "Tactical"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, " SHOTGUNS"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/self-defense-shotguns"
    }, __jsx("a", null, "Self Defense"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/sporting-shotguns"
    }, __jsx("a", null, "Sporting")))))))))), __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/rifle-scope"
    }, __jsx("a", null, "Rifle Scopes"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/red-dot-scope"
    }, __jsx("a", null, "Red Dot Optics"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/night-vision"
    }, __jsx("a", null, "Night Vision / Thermal"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/binoculars"
    }, __jsx("a", null, " Binoculars"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/range-finder"
    }, __jsx("a", null, "Range Finders"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, " SIGHTS"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/handgun-sight"
    }, __jsx("a", null, "Handgun Sights"))))), __jsx("div", {
      className: "col"
    }, __jsx("h6", {
      className: "submenu-title"
    }, "Accessories"), __jsx("ul", {
      className: "megamenu-submenu"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/flash"
    }, __jsx("a", null, "  FLASH"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/weapon-lights"
    }, __jsx("a", null, " LIGHTS WEAPON")))))))))), __jsx("li", {
      className: "nav-item megamenu"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/rim"
    }, __jsx("a", null, "RIM"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/handgun-ammunition"
    }, __jsx("a", null, "Fire Handgun"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      className: `close-btn fas fa-times ${this.state.searchForm ? "active" : ""}`
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
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.handleCart();
      }
    }, "Cart(", products.length, ")", " ", __jsx("i", {
      className: "fas fa-shopping-bag"
    })))))))))), this.state.display ? __jsx(_Modal_Cart__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: this.handleCart
    }) : "");
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(MegaMenuTwo));

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopPanel */ "./components/Layout/TopPanel.js");
/* harmony import */ var _TopHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopHeader */ "./components/Layout/TopHeader.js");
/* harmony import */ var _MegaMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MegaMenu */ "./components/Layout/MegaMenu.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Navbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_MegaMenu__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/TopHeader.js":
/*!****************************************!*\
  !*** ./components/Layout/TopHeader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal_Wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal/Wishlist */ "./components/Modal/Wishlist.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class TopHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "handleWishlist", () => {
      this.setState(prevState => {
        return {
          display: !prevState.display
        };
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "top-header"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-6"
    }, __jsx("ul", {
      className: "top-header-nav"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "Our Stores"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faq"
    }, __jsx("a", null, "FAQ's"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact-us"
    }, __jsx("a", null, "Contact"))))), __jsx("div", {
      className: "col-lg-5 col-md-6"
    }, __jsx("ul", {
      className: "top-header-right-nav"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      "data-toggle": "modal",
      "data-target": "#shoppingWishlistModal",
      onClick: e => {
        e.preventDefault();
        this.handleWishlist();
      }
    }, "Wishlist ", __jsx("i", {
      className: "far fa-heart"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, "Span"))))))))), this.state.display ? __jsx(_Modal_Wishlist__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: this.handleWishlist
    }) : '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TopHeader);

/***/ }),

/***/ "./components/Layout/TopPanel.js":
/*!***************************************!*\
  !*** ./components/Layout/TopPanel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "react-owl-carousel3", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel3 */ "react-owl-carousel3")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  items: 1,
  navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"]
};

class TopPanel extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false,
      panel: true
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    let {
      panel
    } = this.state;
    return __jsx("div", {
      className: `top-panel ${panel ? '' : 'hide'}`
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "panel-content"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "top-panel-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More")))), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More")))), __jsx("div", {
      className: "single-item-box"
    }, __jsx("p", null, __jsx("strong", null, "Enjoy an extra 20% off"), " select sales styles ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Read More"))))) : '', __jsx("i", {
      onClick: () => this.setState({
        panel: false
      }),
      className: "fas fa-times panel-close-btn"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TopPanel);

/***/ }),

/***/ "./components/Modal/Cart.js":
/*!**********************************!*\
  !*** ./components/Modal/Cart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "closeCart", () => {
      this.props.onClick(this.state.display);
    });
  }

  render() {
    let {
      products,
      total
    } = this.props;
    return __jsx("div", {
      className: "modal right fade show shoppingCartModal",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeCart
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Cart (", products.length, ")"), __jsx("div", {
      className: "product-cart-content"
    }, products.length > 0 ? products.map((product, idx) => __jsx("div", {
      className: "product-cart",
      key: idx
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: product.image,
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#"
    }, __jsx("a", null, product.title))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, product.quantity), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$", product.price))))) : 'Empty'), __jsx("div", {
      className: "product-cart-subtotal"
    }, __jsx("span", null, "Subtotal"), __jsx("span", {
      className: "subtotal"
    }, "$", total)), __jsx("div", {
      className: "product-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/checkout"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Proceed to Checkout")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/cart"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "View Shopping Cart")))))));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total //addedItems: state.addedItems

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Cart));

/***/ }),

/***/ "./components/Modal/Wishlist.js":
/*!**************************************!*\
  !*** ./components/Modal/Wishlist.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Wishlist extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });

    _defineProperty(this, "closeWishlist", () => {
      this.props.onClick(this.state.display);
    });
  }

  render() {
    return __jsx("div", {
      className: "modal right fade show shoppingWishlistModal",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeWishlist
    }, __jsx("span", {
      "aria-hidden": "true"
    }, "\xD7")), __jsx("div", {
      className: "modal-body"
    }, __jsx("h3", null, "My Wish List (3)"), __jsx("div", {
      className: "product-cart-content"
    }, __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img2.jpg */ "./images/img2.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00")))), __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img3.jpg */ "./images/img3.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00")))), __jsx("div", {
      className: "product-cart"
    }, __jsx("div", {
      className: "product-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/img4.jpg */ "./images/img4.jpg"),
      alt: "image"
    })), __jsx("div", {
      className: "product-content"
    }, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Belted chino trousers polo"))), __jsx("span", null, "Blue / XS"), __jsx("div", {
      className: "product-price"
    }, __jsx("span", null, "1"), __jsx("span", null, "x"), __jsx("span", {
      className: "price"
    }, "$191.00"))))), __jsx("div", {
      className: "product-cart-btn"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "View Shopping Cart")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Wishlist);

/***/ }),

/***/ "./components/cart/CartContent.js":
/*!****************************************!*\
  !*** ./components/cart/CartContent.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CartProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartProduct */ "./components/cart/CartProduct.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CartContent extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleChecked", e => {
      if (e.target.checked) {
        this.props.addShipping();
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success('Added $6 into total', {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      } else {
        this.props.substractShipping();
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('Removed $6 from total', {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    });
  }

  render() {
    return __jsx("section", {
      className: "cart-area ptb-60"
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
      transition: react_toastify__WEBPACK_IMPORTED_MODULE_4__["Slide"]
    }), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("form", null, __jsx("div", {
      className: "cart-table table-responsive"
    }, __jsx(_CartProduct__WEBPACK_IMPORTED_MODULE_3__["default"], null)), __jsx("div", {
      className: "cart-buttons"
    }, __jsx("div", {
      className: "row align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-7"
    }, __jsx("div", {
      className: "continue-shopping-box"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "Continue Shopping")))), __jsx("div", {
      className: "col-lg-5 col-md-5 text-right"
    }, __jsx("label", null, __jsx("input", {
      type: "checkbox",
      ref: "shipping",
      onChange: this.handleChecked
    }), __jsx("span", null, "Shipping(+6$)"))))), __jsx("div", {
      className: "cart-totals"
    }, __jsx("h3", null, "Cart Totals"), __jsx("ul", null, __jsx("li", null, "Subtotal ", __jsx("span", null, "$", this.props.total)), __jsx("li", null, "Shipping ", __jsx("span", null, "$", this.props.shipping)), __jsx("li", null, "Total ", __jsx("span", null, __jsx("b", null, "$", this.props.total + this.props.shipping)))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/checkout"
    }, __jsx("a", {
      className: "btn btn-light"
    }, "Proceed to Checkout"))))))));
  }

}

const mapStateToProps = state => {
  return {
    total: state.total,
    shipping: state.shipping
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({
        type: 'ADD_SHIPPING'
      });
    },
    substractShipping: () => {
      dispatch({
        type: 'SUB_SHIPPING'
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CartContent));

/***/ }),

/***/ "./components/cart/CartProduct.js":
/*!****************************************!*\
  !*** ./components/cart/CartProduct.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/actions */ "./store/actions/actions.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CartProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleRemove", id => {
      this.props.removeItem(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].error('Removed from cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    _defineProperty(this, "handleAddQuantity", id => {
      this.props.addQuantity(id);
    });

    _defineProperty(this, "handleSubtractQuantity", id => {
      this.props.subtractQuantity(id);
    });
  }

  render() {
    let cartItems = this.props.products.length ? this.props.products.map((data, idx) => {
      return __jsx("tr", {
        key: idx
      }, __jsx("td", {
        className: "product-thumbnail"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#"
      }, __jsx("a", null, __jsx("img", {
        src: data.image,
        alt: "item"
      })))), __jsx("td", {
        className: "product-name"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#"
      }, __jsx("a", null, data.title)), __jsx("ul", null, __jsx("li", null, "Color: ", __jsx("strong", null, "Light Blue")), __jsx("li", null, "Size: ", __jsx("strong", null, "XL")), __jsx("li", null, "Material: ", __jsx("strong", null, "Cotton")))), __jsx("td", {
        className: "product-price"
      }, __jsx("span", {
        className: "unit-amount"
      }, "$", data.price)), __jsx("td", {
        className: "product-quantity"
      }, __jsx("div", {
        className: "input-counter"
      }, __jsx("span", {
        className: "minus-btn",
        onClick: () => {
          this.handleSubtractQuantity(data.id);
        }
      }, __jsx("i", {
        className: "fas fa-minus"
      })), __jsx("input", {
        type: "text",
        value: data.quantity,
        min: "1",
        max: 10,
        readOnly: true,
        onChange: e => e
      }), __jsx("span", {
        className: "plus-btn",
        onClick: () => {
          this.handleAddQuantity(data.id);
        }
      }, __jsx("i", {
        className: "fas fa-plus"
      })))), __jsx("td", {
        className: "product-subtotal"
      }, __jsx("span", {
        className: "subtotal-amount"
      }, "$", data.price * data.quantity), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "remove",
        onClick: e => {
          e.preventDefault();
          this.handleRemove(data.id);
        }
      }, __jsx("i", {
        className: "far fa-trash-alt"
      })))));
    }) : __jsx("tr", null, __jsx("td", {
      className: "product-thumbnail",
      colspan: "5"
    }, __jsx("p", null, "Empty.")));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("table", {
      className: "table table-bordered"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      scope: "col"
    }, "Product"), __jsx("th", {
      scope: "col"
    }, "Name"), __jsx("th", {
      scope: "col"
    }, "Unit Price"), __jsx("th", {
      scope: "col"
    }, "Quantity"), __jsx("th", {
      scope: "col"
    }, "Total"))), __jsx("tbody", null, cartItems)));
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(Object(_store_actions_actions__WEBPACK_IMPORTED_MODULE_3__["removeItem"])(id));
    },
    addQuantity: id => {
      dispatch(Object(_store_actions_actions__WEBPACK_IMPORTED_MODULE_3__["addQuantity"])(id));
    },
    subtractQuantity: id => {
      dispatch(Object(_store_actions_actions__WEBPACK_IMPORTED_MODULE_3__["subtractQuantity"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(CartProduct));

/***/ }),

/***/ "./images/ammunition/handgun/1410991550-90282-9mm-luger-147-gr-xtp.jpg":
/*!*****************************************************************************!*\
  !*** ./images/ammunition/handgun/1410991550-90282-9mm-luger-147-gr-xtp.jpg ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/1410991550-90282-9mm-luger-147-gr-xtp-b553a88068581e6c582f25b6ec6cc3ec.jpg";

/***/ }),

/***/ "./images/ammunition/rim/cci-74.jpg":
/*!******************************************!*\
  !*** ./images/ammunition/rim/cci-74.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cci-74-28d054aa63ea014813a18f3a8fa07917.jpg";

/***/ }),

/***/ "./images/expresscard.png":
/*!********************************!*\
  !*** ./images/expresscard.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEVEQ0JEOTRBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEVEQ0JEOTNBNjA3MTFFOUJEMjJGMjRCRkRBQTU4NTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/img2.jpg":
/*!*************************!*\
  !*** ./images/img2.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAFAAQYBAREA/8QAGgABAQEBAQEBAAAAAAAAAAAAAAcIBgUDBP/EADUQAAEDBAEDAgQEBAcBAAAAAAABAgMEBQYRBwgSIRMxFCJBUQkVMkIjUmGBGCQzWGKU1Bb/2gAIAQEAAD8A1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACV879RWF8DUFubeqSvvF8vciw2my22NJKqrftE3r9re5zU35VVXTUcu0JXWda2XYYtLdeYOmXMMPxyqlbEt29f4pIVd+n1GLFH2L/xV3d4XSKvg0pb8ox26Y1BmVBeaWWx1FGlwjr/AFESFaZWd/qq5fZvb5VV1r6mcV61b7ltZXzcH9POV59YrbK6Ca8RzLSQyub7+k30nq/xpUaunaVNtTZT+BeofDufbRcJ7HR11pvNkmSnu1muDEbU0ci7RN6/U1Va5EXwu2qioi+DluVOrW1YZnjuKePOP75yJmMEaS1dvtXyRUjdIupZe12lRHNVdNVE2m1RfB5uGdY8E+eW/jbmXiq/cZ3q8uay2OuMqT0lU9V7WtSbsZpVcqNRUardrpVRdb0cDmuReRMU4qw64Z1mlx+DtVtYjpHI3ufI5V0yNjf3Pc5URE/r50iKqZ3b1sZ1JZ1zqLpVzV2Doz4j86+JT1fhvf1/Q9LXZrz3ep26892vJoXjTknEuWsNoM6wq4LV2y4NXt729kkT2rp8cjf2vavhU/uiqioqxfLOshjs3ufH/CvEmQcmXKxvWK5z2+VKejp5EVWq31ux+9ORybVEaqovarj1uJOrSzZ7nTuKc7wW9cfZqrFlp7XdvmZVNRqu1FJ2tVV7Uc5NtRFRPlVfKHY8589YZwJjdPe8oZVVtbcpvhbXaqJqPqa6bxtrEX2am29zl9tonlVRFkjetm94rcba/mzp7yvAbBdZmwQXmeVamKNzvKeqz0mKzxtVaiq7SLpq6NQU1TT1lPFV0k8c0E7GyRSRuRzXsVNo5FTwqKi7RT6AAAAAAAAmd74DxHIObrJzvc7jdJr1YKFaCjonvidRMaqSoj0YrO9Hosz133++l14OX60c/wARwnp+ymhyV8EtTkdDLabXRO0sk9TI3TXtb9otpIrvp2p9VRFhvIjMt4e/Des+LXpZ6S73WOGimY/aSQw1VXJUrC5F8ovor6bmr7bVD38G6mVwXBLTg/AXT5lPIFixWiioa68W9r4KSWqaxFndE5sUizOV6ucq6TaqqptFRVpHTLmfA/LV4yXlLjzFpLFmlY5tPk9LUyPSpY5VTSuZ3LGrXLGuntaiqrXbRFVUOz4r4DxHiXK8yzKyXG6XC55vXfH181xfFI6N3fI9WRqxjVRiulVdLv2b5XRnvr8uNDyJf+POBcNa2tzirvcdciwfNJb4Fjczb1TyxHdySr9mwdy6TSrSOrjLuc+KbbZ+W+Mb6tTjtknjTJbA+ip5Gz0/ei+skqxrKxF32P7XfKitciJpynPc29WlTccRwvHenOqbcc45JbDLa9RRyut1OrlR75WPRzEej2PjVHIrW+nK5f0JusZFwXauUuMLLgXOV2q8sq6B8VbV10T0ofXrWtcivRlOjGdiJI9rWq320q7d5OO596veJ+BVrcHraKquWQ09Axae0U9LqDtexfTbJI7TGs1raJtUT9qn4OhHjO5YF0+MguV7paibJq+e7sdbquOoZSskijia1sjFcxXokXculVEVde6KUngrgjEOn/Fq3FcQrLjWw19e+4T1VxfG+oe9zGtRrnMYxFREZ48fVfuZ253uNFyx1p8T4Zx+jaq6YHV/mOQ11P5bTwMmimdBI9P5WxuTS+O6oRvuqoejmrW5z+Irh9iuiJNQYdjzq+Cnf5YlQrJZEk1/Mjnwrv7xN+xcupvGqDK+n7kC1XCnZK2OwVlbCjk32z08TponJ9lR8bfJzXRHklbk/TFhVXcJnSz0cFRbu5y7/h09RJFEn9o2sT+xcwAAAAAAASjqE6hcY4CxmGur6aS7ZBdnrT2SyU6/xq2bwn0RVaxFc3btKvlERFVUQl3DvTpm2f5lT9QPVJOyvyNO2WyY1r/KWaPfczuZtU7090Z50vzPVz/0+t+IPjlbf+mm7VNFE6RbLcKO4yNam19NH+m5dfZEl2v2RFX6FJ6bX41JwHgLsSSBLb+QUiIkWtJMkaJP3a/f6vqd3/LuIFxRDSr+IlydNiCMS1ssSJdVg/0fi1Sk70XXjv8AVR6r9e5JP6nb9QHUpkVoyqLgngOzpkPJNybqV6IjqezRuTfqyqvy96NVHad8rUVFdvaNd7/Tr0zWzhxKzMcquz8n5Dvu5LvfahVeqK5duihV3lGb93L8z9JvSaa3tecORcP4t4vv2W5zDFVWyOlfTrQSaX8wkkarW0yIvhe/aovhURvcq+EUwP0psl6dOW8Wy3ljC6a02flC2SMsFykc5UtayS/I1Veq9iPasaKq7cjJY3K5EV6G7ObueMP4CslsyHNqC7zUN0r225ktBTskSGVWq5Fk7nt03ta5fG1+VdIdrcLPjmUWmajultt91ttyiT1Y5omTQ1Eat8KqKio5FT2/oZE6BJG23PuacQxSrkqcGtV+T8nX1FfEzc1QxqxuX9XdFHHtfqjGL9TouYOoDP8AkzOKvp66XomzXmHcOQ5Sq6prOzfa9rHoioj08or02qKitYiu8tq/AHTzh/AONyW6zOfcr3cVSW8Xqpb/AJiul8r917WIqrpm191VVc5VVYpmaswf8RXEb5dHJDQ5hjjqGCoeumLUIyViR7/mV0cSa+8rfuXHqbyWgxTp+5AutwqGRNksFZRQq5dd09RE6GJqfdVfI3wc10SY5WYx0xYVSV8To56ynqLirXJr+HUVEksS/wB43sX+5cwAAAAAAAZf5x6Ncp5g5dbyzbudazGamjhp4LVBT2d0slvSNvlY5kqWLtZHSP2jUVFfrzrZ5f8Ag66gf98eb/8AUqf/AHF74644uOM8YQcdcg5dUZ7KsVVT19yukTu+uimke7ska+SRVRGPSPSuXw36eyRKPonyPEZ66h4X6jsuwfHbhK6WSzsiWqZErv1elJ6sasXXhHaV+kTbl1srXBXAGE8B2CrteMPq664XWVKi63auej6qtlTelcqJpGp3O01PbuVVVVVVXP1D0Cck2fJ7xmNg6rr1aLvfppJ7hV0FkkglnV71e5HOZWIqp3LvXsez/g66gf8AfHm//Uqf/cUXmTpqm5wz3FL1mWdufiGMSNqFxhlu+Wun/c+Wf1fPdprden4Z3Iior1cdPz1wfjfPXHNVgN6lShf3Mnt1eyBJHUNQzw2RrNt7k7Vc1W7TbXKm0XSp+an4Npch4Ug4a5hvyZrFDTtpnXP4RaOdyRr/AAZP9SRUlYiInf3fNr5kXbtyOPoo5BpLR/8AE23quzSnwvtWBto+G3I2mXx6KTpMiI3XjtRnbr9uvBaMH4Rxjiri2t404umksbqmlqGMukjfXqPjJI1YlXJ5b6j2r2rpFammo1O1Nazjif4fnJOBxVMGE9Wl/sMdbIktS23WeWnSZ6JpHP7K1O5U2vv91OzxTpR5ysGU2e/XXrJzG8UVtuFPV1NunpahI6yKORrnwOVaxyI16IrV21U0vsvsVXnXgPC+fcbprLlD6qirbbMtTa7rRORtTRTLratVfCtXTe5q+/aippURUkzOia+ZTcLZHzb1CZVn9gtMzZ4LNPCtNFI5vhPVf6r1f42iu0jtKunJs1BTU1PR08VJSQRwQQMbHFFG1GsYxqaRrUTwiIiaRD6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="

/***/ }),

/***/ "./images/img3.jpg":
/*!*************************!*\
  !*** ./images/img3.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/wAALCAFAAQYBAREA/8QAGgABAQEBAQEBAAAAAAAAAAAAAAcIBgUDBP/EADUQAAEDBAEDAgQEBAcBAAAAAAABAgMEBQYRBwgSIRMxFCJBUQkVMkIjUmGBGCQzWGKU1Bb/2gAIAQEAAD8A1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACV879RWF8DUFubeqSvvF8vciw2my22NJKqrftE3r9re5zU35VVXTUcu0JXWda2XYYtLdeYOmXMMPxyqlbEt29f4pIVd+n1GLFH2L/xV3d4XSKvg0pb8ox26Y1BmVBeaWWx1FGlwjr/AFESFaZWd/qq5fZvb5VV1r6mcV61b7ltZXzcH9POV59YrbK6Ca8RzLSQyub7+k30nq/xpUaunaVNtTZT+BeofDufbRcJ7HR11pvNkmSnu1muDEbU0ci7RN6/U1Va5EXwu2qioi+DluVOrW1YZnjuKePOP75yJmMEaS1dvtXyRUjdIupZe12lRHNVdNVE2m1RfB5uGdY8E+eW/jbmXiq/cZ3q8uay2OuMqT0lU9V7WtSbsZpVcqNRUardrpVRdb0cDmuReRMU4qw64Z1mlx+DtVtYjpHI3ufI5V0yNjf3Pc5URE/r50iKqZ3b1sZ1JZ1zqLpVzV2Doz4j86+JT1fhvf1/Q9LXZrz3ep26892vJoXjTknEuWsNoM6wq4LV2y4NXt729kkT2rp8cjf2vavhU/uiqioqxfLOshjs3ufH/CvEmQcmXKxvWK5z2+VKejp5EVWq31ux+9ORybVEaqovarj1uJOrSzZ7nTuKc7wW9cfZqrFlp7XdvmZVNRqu1FJ2tVV7Uc5NtRFRPlVfKHY8589YZwJjdPe8oZVVtbcpvhbXaqJqPqa6bxtrEX2am29zl9tonlVRFkjetm94rcba/mzp7yvAbBdZmwQXmeVamKNzvKeqz0mKzxtVaiq7SLpq6NQU1TT1lPFV0k8c0E7GyRSRuRzXsVNo5FTwqKi7RT6AAAAAAAAmd74DxHIObrJzvc7jdJr1YKFaCjonvidRMaqSoj0YrO9Hosz133++l14OX60c/wARwnp+ymhyV8EtTkdDLabXRO0sk9TI3TXtb9otpIrvp2p9VRFhvIjMt4e/Des+LXpZ6S73WOGimY/aSQw1VXJUrC5F8ovor6bmr7bVD38G6mVwXBLTg/AXT5lPIFixWiioa68W9r4KSWqaxFndE5sUizOV6ucq6TaqqptFRVpHTLmfA/LV4yXlLjzFpLFmlY5tPk9LUyPSpY5VTSuZ3LGrXLGuntaiqrXbRFVUOz4r4DxHiXK8yzKyXG6XC55vXfH181xfFI6N3fI9WRqxjVRiulVdLv2b5XRnvr8uNDyJf+POBcNa2tzirvcdciwfNJb4Fjczb1TyxHdySr9mwdy6TSrSOrjLuc+KbbZ+W+Mb6tTjtknjTJbA+ip5Gz0/ei+skqxrKxF32P7XfKitciJpynPc29WlTccRwvHenOqbcc45JbDLa9RRyut1OrlR75WPRzEej2PjVHIrW+nK5f0JusZFwXauUuMLLgXOV2q8sq6B8VbV10T0ofXrWtcivRlOjGdiJI9rWq320q7d5OO596veJ+BVrcHraKquWQ09Axae0U9LqDtexfTbJI7TGs1raJtUT9qn4OhHjO5YF0+MguV7paibJq+e7sdbquOoZSskijia1sjFcxXokXculVEVde6KUngrgjEOn/Fq3FcQrLjWw19e+4T1VxfG+oe9zGtRrnMYxFREZ48fVfuZ253uNFyx1p8T4Zx+jaq6YHV/mOQ11P5bTwMmimdBI9P5WxuTS+O6oRvuqoejmrW5z+Irh9iuiJNQYdjzq+Cnf5YlQrJZEk1/Mjnwrv7xN+xcupvGqDK+n7kC1XCnZK2OwVlbCjk32z08TponJ9lR8bfJzXRHklbk/TFhVXcJnSz0cFRbu5y7/h09RJFEn9o2sT+xcwAAAAAAASjqE6hcY4CxmGur6aS7ZBdnrT2SyU6/xq2bwn0RVaxFc3btKvlERFVUQl3DvTpm2f5lT9QPVJOyvyNO2WyY1r/KWaPfczuZtU7090Z50vzPVz/0+t+IPjlbf+mm7VNFE6RbLcKO4yNam19NH+m5dfZEl2v2RFX6FJ6bX41JwHgLsSSBLb+QUiIkWtJMkaJP3a/f6vqd3/LuIFxRDSr+IlydNiCMS1ssSJdVg/0fi1Sk70XXjv8AVR6r9e5JP6nb9QHUpkVoyqLgngOzpkPJNybqV6IjqezRuTfqyqvy96NVHad8rUVFdvaNd7/Tr0zWzhxKzMcquz8n5Dvu5LvfahVeqK5duihV3lGb93L8z9JvSaa3tecORcP4t4vv2W5zDFVWyOlfTrQSaX8wkkarW0yIvhe/aovhURvcq+EUwP0psl6dOW8Wy3ljC6a02flC2SMsFykc5UtayS/I1Veq9iPasaKq7cjJY3K5EV6G7ObueMP4CslsyHNqC7zUN0r225ktBTskSGVWq5Fk7nt03ta5fG1+VdIdrcLPjmUWmajultt91ttyiT1Y5omTQ1Eat8KqKio5FT2/oZE6BJG23PuacQxSrkqcGtV+T8nX1FfEzc1QxqxuX9XdFHHtfqjGL9TouYOoDP8AkzOKvp66XomzXmHcOQ5Sq6prOzfa9rHoioj08or02qKitYiu8tq/AHTzh/AONyW6zOfcr3cVSW8Xqpb/AJiul8r917WIqrpm191VVc5VVYpmaswf8RXEb5dHJDQ5hjjqGCoeumLUIyViR7/mV0cSa+8rfuXHqbyWgxTp+5AutwqGRNksFZRQq5dd09RE6GJqfdVfI3wc10SY5WYx0xYVSV8To56ynqLirXJr+HUVEksS/wB43sX+5cwAAAAAAAZf5x6Ncp5g5dbyzbudazGamjhp4LVBT2d0slvSNvlY5kqWLtZHSP2jUVFfrzrZ5f8Ag66gf98eb/8AUqf/AHF74644uOM8YQcdcg5dUZ7KsVVT19yukTu+uimke7ska+SRVRGPSPSuXw36eyRKPonyPEZ66h4X6jsuwfHbhK6WSzsiWqZErv1elJ6sasXXhHaV+kTbl1srXBXAGE8B2CrteMPq664XWVKi63auej6qtlTelcqJpGp3O01PbuVVVVVVXP1D0Cck2fJ7xmNg6rr1aLvfppJ7hV0FkkglnV71e5HOZWIqp3LvXsez/g66gf8AfHm//Uqf/cUXmTpqm5wz3FL1mWdufiGMSNqFxhlu+Wun/c+Wf1fPdprden4Z3Iior1cdPz1wfjfPXHNVgN6lShf3Mnt1eyBJHUNQzw2RrNt7k7Vc1W7TbXKm0XSp+an4Npch4Ug4a5hvyZrFDTtpnXP4RaOdyRr/AAZP9SRUlYiInf3fNr5kXbtyOPoo5BpLR/8AE23quzSnwvtWBto+G3I2mXx6KTpMiI3XjtRnbr9uvBaMH4Rxjiri2t404umksbqmlqGMukjfXqPjJI1YlXJ5b6j2r2rpFammo1O1Nazjif4fnJOBxVMGE9Wl/sMdbIktS23WeWnSZ6JpHP7K1O5U2vv91OzxTpR5ysGU2e/XXrJzG8UVtuFPV1NunpahI6yKORrnwOVaxyI16IrV21U0vsvsVXnXgPC+fcbprLlD6qirbbMtTa7rRORtTRTLratVfCtXTe5q+/aippURUkzOia+ZTcLZHzb1CZVn9gtMzZ4LNPCtNFI5vhPVf6r1f42iu0jtKunJs1BTU1PR08VJSQRwQQMbHFFG1GsYxqaRrUTwiIiaRD6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k="

/***/ }),

/***/ "./images/img4.jpg":
/*!*************************!*\
  !*** ./images/img4.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAApCAYAAAC2hfIAAAAObUlEQVR4nO1ca2wV1RZefUKhtJZCaWmLUCnyBnmENlSgVAJExEuhARQRchMrt4mIiYr+MMSYAPF6Y2KKot4ULAZKQYo/hEQQvBoo8hCkIlKgiPJ+iCAore3cfMuuk3X2zDmctuOpwPmSyZnHnj2vb9Za31p7TphlWRbdxZDLDwsLu5tvQ6sj/C6/fg/u8vex1RH5V5xAdXU1RUZGUnx8PHXs2NG2/e8EWMIQCVsfrrvm9957jxYtWkQPPfQQtWvXjiIiImjChAn8e/XqVQoPD+eH39DQ4NkH67CM9ZjHKck6/ILUsl32le3oc8+ePTR79hM0bNhw2/kEipCLbl24SsSlS5fS1q1b6cyZM/T7779TUlISHTt2jAkJ0nTr1o1qa2upvr6eoqOjed0ff/xBdXV1Hsskk5AN89gHZMR+WI952QYcOnSICqbPpLVrSunQ/ypod2U1demSROExtXTyRiSFRSVQfIc2ZNXdpPZtoyk+PoFSUlIoPb0bRUVHcR8hIrYuXHfNDz/8MN28eZOKi4vp+vXr1LlzZ4qJiaEOHTrQ9OnT6fjx4/Tbb79R27ZteX1UVBQvg4wgGiZYT5APbv3y5ct06dIlbgeS4Peee+7h9iBlly5daNOmzXTmzDmqpwhKTYum+vS9VL9vJ+3ddYo2VBNVXyaKT0mkewdkUWpGD0rqnETtY2IpNT2NuvfoTv3796c2bdp4XoYQGYMPV4n45JNP0pIlS+jKlSts/WC1YPlg9UCgXbt20Y0bN3j9tWvXeB9YS7QBAcUSYsL82bNn2bJifwFIeuHCBW4Pwnz33XcUERFO/QcOJOvmJWoTHUVdM7rTlbNHKbNnGBVkJNOJ2iiqi+5ESb2zqEf/QdQ5sSPFto+ljokdafee3RQbG0t9+vRh8uM8Q7jNiQgrd99997F1GThwIP36669sFT///HMm1PDhw5lksGYACIjp9OnTlJqaysQS90uN7lKslBAP20AYzMOifvPNN7R//wF6dMpUioxsQydP3KDKyniKiZ1ByflplJmYSb3bxVN0eB1RfR21axvDL0JcfBwld0nm4wpAcn3cEIIHV4n4xRdf0Ntvv00vv/wytW/fnq3fgQMH2OqNGTOGunbtyjHj+fPnafTo0UzYmpoaJllycjITFG5dYkcQAi4dVgrkE4IKWXEMuO3a2ptUffgQUUQsZeTkU7ec/GZdGIgYUtCtA1eICIuG6YcffuCYbsWKFUy0kydPcpwHKwnrBTeK7YmJidwW1uzHH39kUbN+/XomIcgL4mEC4eLi4qhTp05MEiyTEhYQLSdOnGCSdoiL85xPSy5Ki6aQVQweXFHNq1evZnHy4IMPcqy1Zs0atnAQEniYECP4hevGulOnTnGbixcvsmWDpURc+csvv1BaWhr/gnggLOJEndYBsA9ICXJjHSwp3P8DDzxgO7fmIKSggw/X0jewdEeOHKFPPvmE9u/fz+STZDYsFtxxQUEBE23hwoXsomEJJ02axCQ8fPgw5x9HjRrFlvKVV17hxHhubi4VFRWxZdSCBuTDOlhFxJ9Dhw61nVNzESJi8OFajAjSZWVleaydWD7J+507d46Xt2/fziQEQLx58+ZxbIlYEkQFxo0bx/Hfa6+9xm4e88FEyD0HH67nEZGTAykhUGAJYbngkuGqq6qq6ODBg+xmQVqQEEAbUdKChIQEeuSRR4JOQgrVnVsFrg962Lt3rydviAlxHERIeno6l/1gKWEldTw3bNgwJilcsQBq2CRnsBCqPwcfrhIROcP333+fYzd5kMgTIn6E8u3Xrx8LEGDfvn1cmgPQvrCwkBW0AO4doqW1EHLJwYWrrrm0tJSrHr169eI0jJTsoIoRI86ZM4d/8/LyeCAEqjCwjCNGjOB9oJA//fRTtqpw61OmTLEdI1gIWcXgwjXVDFX8+OOPswWEOAGRdBIaeUMkr/Pz86msrMwjYD777DMeQYPkNlw5YsLu3bvT4MGDbccINkLqOXhwzSJu2rSJ4zqQSOrDeICI8yBOpHyG1A1ICCBenDlzpq2vEO4+uBYjfvnll5w7RH1Zks8gHyas++mnn1isoN4cQggmXLGIiOkwvAspGrGCANSyVFZgJTEQAq4a65sCkBrpoBDuXLhCxJ07d7JbhirGoFgIFMR7MuAVy3DZICuqKTLaOhBInIbPDnr27MlJ74kTJ3I6KIQ7B64QESU6EA+CBaNlYP2gmjH/888/sxoeOXIk16ErKips+wcC9IMBDlu2bGFBhKrL888/H6LiHYIWx4iI/Xbv3s2jpqF4x44dy9ZKSntQzhgEi9E4qKYI5PuTpk7UWLt+4YUX6JlnnrGdTwi3J1pMRIygQVoGFRS4YtSMkYgGKWEZpcQHa+hGnCfEBd566y2eQrj90WLXjLGGqC+jKgKCYFwiSAlrCFECNwprKR9LuQVJOMMqTp06lZPmTz/9tN/ekTpCrPrSSy+xq3dCTk4OzZo1y7Zl48aNnKJy6k+watUqzh44YdCgQfwphX4ZEb4899xz9O7yd3l52rRptG7dOjpYdZDjbYQiSPo7AbX4xYsXB9QPgL7mzpnLw+Uye2ZS19SuPN9g/flM8NFbeXm57UjvvPOO1/muXLmS3vzPm1R99M9ybPGyYs+YAaf7gPuD+6TX4V6Y++BhthglJSVWSkqKNWLECGvkyJFWdna2lZOTw8v9+vWzEhISrNdff90qLy+H8uApLCzMlQl9LVq0yKqqqrLCKMzq1bMX/zpNNTU1fKljRo/x2l5YWOi13+LFi7ldQ0MDT8CyZctsfeKYGthPb8dxCqYVeJYxr7Fw4UKvczD7PX/+vO16dDvBrfq5fv2655rxq69fUFlZabs+9CtAH/paSktLveb93Qfs66+91TjUqcXAgTZv3my9+uqr1osvvmgtWLDAmj9/vlVUVGSlpaUxWUaNGsXrhYiBTrciK9rk5uZaFRUVnptnPji5gQJ9UzBhX/PmgQSaiNK/PyLKy6AfpHmsLVu2eEgm60A2vaz71cSS89IkCqQfHFOfk17W0MdBXxr6RcQ5aeKabc37gLZyXubLKHBFNcPdjB8/nmvIqDVL2galO9SQ8YkAPjPFMnKJdIuyGRLiSPlgUIR8HuAPCAcgiOBytCASN2AOnvj222+9lpEW+nDVh17rkAHAQA2Bud0JX3/9tddauEWIOQ2ktwAM/hXAzWHACAQd3KWGuFsBPs/9oPQDzzUE0g/EpOCjdR+xGzcB162Rm5frWcK2on8Ved1TPVIKx8X5SBhw9OhRr74wwAVfSgJDhg6xHZvcHvSAuBAfrmvIyQkee+wx236+gHGNiOX8kVaAuA4TYhENxI5mPHLs6DGv5R49enBMpYF8pwAvl7mdHK7NJB0GdPiKGYWQAsSfa8vX8gsg/eK4Gk8VPsVLOoYNpB9NMpAG+dzjNce99kPdXwNkE2AklAaMC9JovgDDoLG2bC2n8gCM0HfC3/pPmGAZm9rOydqZ0KSC9cBD08A6sYZ4CXbs2MHzsLj+YFoVkNm0aOaLKoAAgLXT5AZhNERohYf5vi9O/ZhALhd9aaGlLRw1kk1Q8t8Sr22ooFXurLT1K0DmRAPW+eONH/MaX98VRYLtX331lWcgghOchkSJldIjVJwG8pjr4WpRJYHqQxJcfxSl94HiRmmwqXCydhomUe/vfb/Nai1Z6q1UxS3nT8unpUuW+jwjTTpfpM3OzuZf84HAUkG5IrzxrDPIsW/vPn6J8KIIAukHmQB9brgGuGcQVmDeA5CNGu+XKGQBSG6GEL7ug0Befu1pvJCXl9dkARHMyUmgmGKlT58+nqDXVK0mdKAubbSqlQBfhIoOsk3hoAFFbookU4mKGheYilirVMtQw/pc0XdT+jHPTQSahplJ8CXs0M4UIyKiTPFkTqao0QiXmm1zKx3NrY4EgkDbiqBxsnYm8KWhrzYH9h+wfSMjbnnyo5NtfWmYMRYs/hv/fsOzjNyeWQma+8+5XsumtTWtu1hqWLim9AMXrK0oNcaSGtrC6bby1zCCrOwsmxiB9RfrKmGOxLMaWgCZ8B1s/IVwIqfTFCgkrEBNW8N8YOQQvyDZKjceLmj58uVe4Ya4Zae+NEw3CjKIG4XKXbFyha2yNGPGDFs/+mUyY1mMZEeSGoOLm9IP8OyCZ72Wtfs024JsAvN+wS2bYkS/CJI5wP3Cy6ehBZCJO+IfYyUwNxWkkzDYtnWb1zJiFm0NdMVFq2XEUN8f/t7Wn8CMsUAYVC22bd/GKleTEKIG6h7HdrIc5EAOsdy4VukrkH7wx1eoCuETXV9xq2nh/AmdzMxMGznx7bl53miXO9bbAmoBZOK2JqJYLnz/Qg5kQPlRAyUqHXjjjUWdXAMuVSBuGZj9xGy/AbpJUn8PE+eJ/vB9jnzLbe7nZN1BPJQxIUYC7aekpISm/GMKu0xtuTRxTQsHEgm0sgYyMjK8Xmax1AIJJ9BuyBDvnKEIICfc9hYRXwCKazKtnXkTTdIhuWpag759+/KvdsvIucG6mXGWhq8Yyx+Q6BcVTY0vhsCMZWHdUXd2UqT++hHgTw205dJu0rRw+IRDgMEqJvTLbGYYxIMgZhwwYIDXNn8vJ76sc7X2G6xJlLuUzG5VgjNrpaJiTVW4YcMGVstaXUN1+lOKprqFOpS6thPMuqsuhYnKNVWslCC18rxVP5YqEaI/3Yecu5lF0GVIuW+iytGHPg7KfhpSBkR7ufdyz50yGBq3HRGFgNHR0VZZWZnnUpzSBfqGOhEJD8kkcHFxMRNRp2pw883UjSa607E1GUzIw5QHjF99rk7HckoB3aof6Uund0AI/ZI4HcMkGK5F94F5M/1j9iXbhZxmSslGxIkTJ/6t84hO0+TJk60jR47YLqal0IMc/krAGmGCtQGZ8dscBNIPSIf1aGcO0mgq0Jc/S99sWJb1f9dqGZrHD/x+AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./images/mastercard.png":
/*!*******************************!*\
  !*** ./images/mastercard.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEVBRjZDNjFBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEVBRjZDNjBBNjA3MTFFOUFEQjBCNTJEMjU3ODI4OTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/mastercard2.png":
/*!********************************!*\
  !*** ./images/mastercard2.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAlCAYAAAAEGWqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM0RTIzQTdBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzM0RTIzQTZBNjA3MTFFOThGMjlBMUEwQzU0MEU4MjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/visa.png":
/*!*************************!*\
  !*** ./images/visa.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAlCAYAAADSvLDKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ3MkI5QzFBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQ3MkI5QzBBNjA3MTFFOTkzOUREMEE1NDc3MDUyRDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/visa2.png":
/*!**************************!*\
  !*** ./images/visa2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAkCAYAAAAZ4GNvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RjFBNUNBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RjFBNUJBNjA3MTFFOUFEQjI4NzlGOUJBRTE0MjciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWViNWRhYzgtNGM1OS1hMjQ0LTlkYTctY2Q0MDIzYTNlMjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5NGYwZGMzLWY2NzYtOTA0Ny05MjM2LWExYjZlZDc0ZjRmYSIv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"

/***/ }),

/***/ "./images/white-logo.png":
/*!*******************************!*\
  !*** ./images/white-logo.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_Common_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/Facility */ "./components/Common/Facility.js");
/* harmony import */ var _components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/Breadcrumb */ "./components/Common/Breadcrumb.js");
/* harmony import */ var _components_cart_CartContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/cart/CartContent */ "./components/cart/CartContent.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, __jsx("title", null, "STRAPSESSIONS "), __jsx("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    })), __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Cart"
    }), __jsx(_components_cart_CartContent__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_Common_Facility__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store/actions/action-types/action-names.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/action-names.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART, ADD_TO_COMPARE, REMOVE_ITEM_FROM_COMPARE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_COMPARE", function() { return ADD_TO_COMPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM_FROM_COMPARE", function() { return REMOVE_ITEM_FROM_COMPARE; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';
const ADD_TO_COMPARE = 'ADD_TO_COMPARE';
const REMOVE_ITEM_FROM_COMPARE = 'REMOVE_ITEM_FROM_COMPARE';

/***/ }),

/***/ "./store/actions/actions.js":
/*!**********************************!*\
  !*** ./store/actions/actions.js ***!
  \**********************************/
/*! exports provided: addToCart, removeItem, subtractQuantity, addQuantity, addQuantityWithNumber, resetCart, addToCompare, removeItemFromCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtractQuantity", function() { return subtractQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantity", function() { return addQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addQuantityWithNumber", function() { return addQuantityWithNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetCart", function() { return resetCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCompare", function() { return addToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItemFromCompare", function() { return removeItemFromCompare; });
/* harmony import */ var _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-types/action-names */ "./store/actions/action-types/action-names.js");
 //add cart action

const addToCart = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
    id
  };
}; //remove item action

const removeItem = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM"],
    id
  };
}; //subtract qt action

const subtractQuantity = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["SUB_QUANTITY"],
    id
  };
}; //add qt action

const addQuantity = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY"],
    id
  };
}; //add qt action with quantity number

const addQuantityWithNumber = (id, qty) => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["ADD_QUANTITY_WITH_NUMBER"],
    id,
    qty
  };
}; // Reset cart after form submit

const resetCart = () => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["RESET_CART"]
  };
}; //add compare action

const addToCompare = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_COMPARE"],
    id
  };
}; //remove item from compare action

const removeItemFromCompare = id => {
  return {
    type: _action_types_action_names__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ITEM_FROM_COMPARE"],
    id
  };
};

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-owl-carousel3":
/*!**************************************!*\
  !*** external "react-owl-carousel3" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ29tbW9uL0JyZWFkY3J1bWIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L01lZ2FNZW51LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9Ub3BIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvVG9wUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2RhbC9DYXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWwvV2lzaGxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJ0L0NhcnRDb250ZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2FydC9DYXJ0UHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvYW1tdW5pdGlvbi9oYW5kZ3VuLzE0MTA5OTE1NTAtOTAyODItOW1tLWx1Z2VyLTE0Ny1nci14dHAuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9hbW11bml0aW9uL3JpbS9jY2ktNzQuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9leHByZXNzY2FyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2ltZzIuanBnIiwid2VicGFjazovLy8uL2ltYWdlcy9pbWczLmpwZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvaW1nNC5qcGciLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy9tYXN0ZXJjYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvbWFzdGVyY2FyZDIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy92aXNhLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWFnZXMvdmlzYTIucG5nIiwid2VicGFjazovLy8uL2ltYWdlcy93aGl0ZS1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJ0LmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2FjdGlvbi1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIl0sIm5hbWVzIjpbIkJyZWFkY3J1bWIiLCJDb21wb25lbnQiLCJyZW5kZXIiLCJwcm9wcyIsInRpdGxlIiwiRmFjaWxpdHkiLCJGb290ZXIiLCJyZXF1aXJlIiwiTWVnYU1lbnVUd28iLCJkaXNwbGF5Iiwic2VhcmNoRm9ybSIsImNvbGxhcHNlZCIsInNldFN0YXRlIiwicHJldlN0YXRlIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImVsZW1lbnRJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93Iiwic2Nyb2xsWSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInNjcm9sbFRvIiwiY2xhc3NPbmUiLCJjbGFzc1R3byIsInByb2R1Y3RzIiwidG9nZ2xlTmF2YmFyIiwiaGFuZGxlU2VhcmNoRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNhcnQiLCJsZW5ndGgiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhZGRlZEl0ZW1zIiwiY29ubmVjdCIsIk5hdmJhciIsIlRvcEhlYWRlciIsImhhbmRsZVdpc2hsaXN0IiwiT3dsQ2Fyb3VzZWwiLCJkeW5hbWljIiwib3B0aW9ucyIsImxvb3AiLCJuYXYiLCJkb3RzIiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwiYXV0b3BsYXkiLCJhbmltYXRlT3V0IiwiYW5pbWF0ZUluIiwiaXRlbXMiLCJuYXZUZXh0IiwiVG9wUGFuZWwiLCJwYW5lbCIsIkNhcnQiLCJvbkNsaWNrIiwidG90YWwiLCJwYWRkaW5nUmlnaHQiLCJjbG9zZUNhcnQiLCJtYXAiLCJwcm9kdWN0IiwiaWR4IiwiaW1hZ2UiLCJxdWFudGl0eSIsInByaWNlIiwiV2lzaGxpc3QiLCJjbG9zZVdpc2hsaXN0IiwiQ2FydENvbnRlbnQiLCJ0YXJnZXQiLCJjaGVja2VkIiwiYWRkU2hpcHBpbmciLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInN1YnN0cmFjdFNoaXBwaW5nIiwiZXJyb3IiLCJTbGlkZSIsImhhbmRsZUNoZWNrZWQiLCJzaGlwcGluZyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidHlwZSIsIkNhcnRQcm9kdWN0IiwiaWQiLCJyZW1vdmVJdGVtIiwiYWRkUXVhbnRpdHkiLCJzdWJ0cmFjdFF1YW50aXR5IiwiY2FydEl0ZW1zIiwiZGF0YSIsImhhbmRsZVN1YnRyYWN0UXVhbnRpdHkiLCJoYW5kbGVBZGRRdWFudGl0eSIsImhhbmRsZVJlbW92ZSIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXgiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9JVEVNIiwiU1VCX1FVQU5USVRZIiwiQUREX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwiT1JERVJfRk9STSIsIkNIRUNLT1VUX0NIQVJHRSIsIlJFU0VUX0NBUlQiLCJBRERfVE9fQ09NUEFSRSIsIlJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRSIsImFkZFRvQ2FydCIsImFkZFF1YW50aXR5V2l0aE51bWJlciIsInF0eSIsInJlc2V0Q2FydCIsImFkZFRvQ29tcGFyZSIsInJlbW92ZUl0ZW1Gcm9tQ29tcGFyZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3JHQSx3RTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFDL0JDLFFBQU0sR0FBRztBQUNMLFdBQ0k7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSSxrQkFDSSxrQkFDSSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDO0FBQVgsT0FDSSx3QkFESixDQURKLENBREosRUFN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SSxFQUFFK1MsdUVBREg7QUFFSDdTO0FBRkcsR0FBUDtBQUlILENBTE0sQyxDQU1QOztBQUNPLE1BQU1FLFdBQVcsR0FBSUYsRUFBRCxJQUFRO0FBQy9CLFNBQU87QUFDSEYsUUFBSSxFQUFFZ1QsdUVBREg7QUFFSDlTO0FBRkcsR0FBUDtBQUlILENBTE0sQyxDQU9QOztBQUNPLE1BQU11VCxxQkFBcUIsR0FBRyxDQUFDdlQsRUFBRCxFQUFLd1QsR0FBTCxLQUFhO0FBQzlDLFNBQU87QUFDSDFULFFBQUksRUFBRWtULG1GQURIO0FBRUhoVCxNQUZHO0FBR0h3VDtBQUhHLEdBQVA7QUFLSCxDQU5NLEMsQ0FRUDs7QUFDTyxNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUMzQixTQUFPO0FBQ0gzVCxRQUFJLEVBQUVxVCxxRUFBVUE7QUFEYixHQUFQO0FBR0gsQ0FKTSxDLENBTVA7O0FBQ08sTUFBTU8sWUFBWSxHQUFJMVQsRUFBRCxJQUFRO0FBQ2hDLFNBQU87QUFDSEYsUUFBSSxFQUFFc1QseUVBREg7QUFFSHBUO0FBRkcsR0FBUDtBQUlILENBTE0sQyxDQU1QOztBQUNPLE1BQU0yVCxxQkFBcUIsR0FBSTNULEVBQUQsSUFBUTtBQUN6QyxTQUFPO0FBQ0hGLFFBQUksRUFBRXVULG1GQURIO0FBRUhyVDtBQUZHLEdBQVA7QUFJSCxDQUxNLEM7Ozs7Ozs7Ozs7O0FDaEVQLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InBhZ2VzL2NhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9jYXJ0XCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2NhcnQuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jbGFzcyBCcmVhZGNydW1iIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGUtYXJlYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3RoaXMucHJvcHMudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYjtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZhY2lsaXR5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmYWNpbGl0eS1hcmVhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbGFuZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5GcmVlIFNoaXBwaW5nIFdvcmxkIFdpZGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVjay1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MTAwJSBtb25leSBiYWNrIGd1YXJhbnRlZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jcmVkaXQtY2FyZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NYW55IHBheW1lbnQgZ2F0d2F5czwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjaWxpdHktYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhlYWRzZXRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MjQvNyBvbmxpbmUgc3VwcG9ydDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNpbGl0eTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgeXk7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXItYXJlYVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWZvb3Rlci13aWRnZXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL2xvZ28ucG5nXCIpfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBCaWdnZXN0IE9ubGluZSBndW4gZGVhbHMuIE9uZSBvZiB0aGUgbGFyZ2VzdCBvbmxpbmUgZ3VuIHN0b3Jlc1xuICAgICAgICAgICAgICAgICAgd2l0aCB0aGUgc2VsZWN0aW9uIG9mIGhhbmRndW5zLCByaWZsZXMsIHNob3RndW5zLCBhbW1vLCBvcHRpY3NcbiAgICAgICAgICAgICAgICAgICYgZmlyZWFybSBhY2Nlc3Nvcmllcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDxoMz5RdWljayBMaW5rczwvaDM+XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicXVpY2stbGlua3NcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YT5GYXEnczwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jdXN0b21lci1zZXJ2aWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGE+Q3VzdG9tZXIgU2VydmljZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdC11c1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1mb290ZXItd2lkZ2V0XCI+XG4gICAgICAgICAgICAgICAgPGgzPkluZm9ybWF0aW9uPC9oMz5cblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJpbmZvcm1hdGlvbi1saW5rc1wiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3QtdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YT5Db250YWN0IFVzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY3VzdG9tZXItc2VydmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhPkN1c3RvbWVyIFNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtZm9vdGVyLXdpZGdldFwiPlxuICAgICAgICAgICAgICAgIDxoMz5Db250YWN0IFVzPC9oMz5cblxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmb290ZXItY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1waG9uZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgQ2FsbCBVcy9XaGF0c2FwcDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KCsxNjEpIDkzMi00MzU3NFwiPisxKDYxOSkgMzI0LTM1NzQ8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtZW52ZWxvcGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsIFVzOntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInN1cHBvcnRAc3RyYXBzZXNzaW9ucy5jb21cIj5cbiAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0QHN0cmFwc2Vzc2lvbnMuY29tXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIEFkZHJlc3M6e1wiIFwifVxuICAgICAgICAgICAgICAgICAgIFNhbiBEaWVnbyBDQVxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1hcmVhXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPHA+Q29weXJpZ2h0IEAgMjAyMCBTdHJhcHNlc3Npb25zLiBBbGwgUmlnaHRzIFJlc2VydmVkIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYXltZW50LWNhcmRcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL3Zpc2EucG5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL21hc3RlcmNhcmQucG5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtyZXF1aXJlKFwiLi4vLi4vaW1hZ2VzL21hc3RlcmNhcmQyLnBuZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy92aXNhMi5wbmdcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvZXhwcmVzc2NhcmQucG5nXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL01vZGFsL0NhcnRcIjtcblxuY2xhc3MgTWVnYU1lbnVUd28gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICBzZWFyY2hGb3JtOiBmYWxzZSxcbiAgICBjb2xsYXBzZWQ6IHRydWUsXG4gIH07XG5cbiAgaGFuZGxlQ2FydCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6ICFwcmV2U3RhdGUuZGlzcGxheSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgaGFuZGxlU2VhcmNoRm9ybSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNlYXJjaEZvcm06ICFwcmV2U3RhdGUuc2VhcmNoRm9ybSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG5cbiAgdG9nZ2xlTmF2YmFyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWQsXG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGVsZW1lbnRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2YmFyXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTcwKSB7XG4gICAgICAgIGVsZW1lbnRJZC5jbGFzc0xpc3QuYWRkKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudElkLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zdGlja3lcIik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sbGFwc2VkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGNsYXNzT25lID0gY29sbGFwc2VkXG4gICAgICA/IFwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCJcbiAgICAgIDogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2Ugc2hvd1wiO1xuICAgIGNvbnN0IGNsYXNzVHdvID0gY29sbGFwc2VkXG4gICAgICA/IFwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHQgY29sbGFwc2VkXCJcbiAgICAgIDogXCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodFwiO1xuXG4gICAgbGV0IHsgcHJvZHVjdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItYXJlYSBiZy1ibGFja1wiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJuYXZiYXJcIiBjbGFzc05hbWU9XCJjb21lcm8tbmF2XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy93aGl0ZS1sb2dvLnBuZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZU5hdmJhcn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NUd299XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzT25lfSBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBwLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGFjdGl2ZVwiPkhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBtZWdhbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBGSVJFQVJNUyA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+SEFOREdVTlM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZW1pLWF1dG9tYXRpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gU2VtaS1BdXRvbWF0aWMgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXZvbHZlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gUmV2b2x2ZXIgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FyLWFrLXBpc3RvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+QVIvQUsgUGlzdG9scyBUYWN0aWNhbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sZXZlci1hY3Rpb24taGFuZGd1bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TGV2ZXIgQWN0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RlcnJpbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT4gRGVycmluZ2VyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5SSUZMRVM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEFSczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ha3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEFLczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ib2x0LWFjdGlvbi1yaWZsZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+IEJvbHQgQWN0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2h1bnRpbmctcmlmbGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBIdW50aW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3RhY3RpY2FsLXJpZmxlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5UYWN0aWNhbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+IFNIT1RHVU5TPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VsZi1kZWZlbnNlLXNob3RndW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlNlbGYgRGVmZW5zZVxuICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BvcnRpbmctc2hvdGd1bnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+U3BvcnRpbmdcbiAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgT1BUSUNTIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj5TY29wZXM8L2g2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yaWZsZS1zY29wZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SaWZsZSBTY29wZXM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVkLWRvdC1zY29wZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SZWQgRG90IE9wdGljczwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uaWdodC12aXNpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+TmlnaHQgVmlzaW9uIC8gVGhlcm1hbDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9iaW5vY3VsYXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBCaW5vY3VsYXJzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JhbmdlLWZpbmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SYW5nZSBGaW5kZXJzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJzdWJtZW51LXRpdGxlXCI+IFNJR0hUUzwvaDY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hhbmRndW4tc2lnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+SGFuZGd1biBTaWdodHM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwic3VibWVudS10aXRsZVwiPkFjY2Vzc29yaWVzPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZmxhc2hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+ICBGTEFTSCBcbiAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93ZWFwb24tbGlnaHRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPiBMSUdIVFMgV0VBUE9OIFxuICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gbWVnYW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQU1NVU5JVElPTiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZWdhbWVudS1zdWJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yaW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+UklNPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hhbmRndW4tYW1tdW5pdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5GaXJlIEhhbmRndW48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmlmbGUtYW1tdW5pdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5SaWZsZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuey8qKiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3RndW4tYW1tdW5pdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5zaG90Z3VuPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj4gPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cInN1Ym1lbnUtdGl0bGVcIj4gPC9oNj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVnYW1lbnUtc3VibWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lZ2FtZW51LXN1Ym1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlLXRyZW5kaW5nLXByb2R1Y3RzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvYW1tdW5pdGlvbi9yaW0vY2NpLTc0LmpwZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Ub3AgVHJlbmRpbmc8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3QvMjM1XCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGUtdHJlbmRpbmctcHJvZHVjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uL2ltYWdlcy9hbW11bml0aW9uL2hhbmRndW4vMTQxMDk5MTU1MC05MDI4Mi05bW0tbHVnZXItMTQ3LWdyLXh0cC5qcGdcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UG9wdWxhciBQcm9kdWN0czwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZHVjdC8yMTVcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIHAtcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2cgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm90aGVycy1vcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYnRuIGZhcyBmYS1zZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGhpcy5zdGF0ZS5zZWFyY2hGb3JtID8gXCJub25lXCIgOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2xvc2UtYnRuIGZhcyBmYS10aW1lcyAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlYXJjaEZvcm0gPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPjwvaT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1vdmVybGF5IHNlYXJjaC1wb3B1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnNlYXJjaEZvcm0gPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNlYXJjaC1mb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInNlYXJjaC1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FydCh7cHJvZHVjdHMubGVuZ3RofSl7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaG9wcGluZy1iYWdcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IDxDYXJ0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FydH0gLz4gOiBcIlwifVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKE1lZ2FNZW51VHdvKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9wUGFuZWwgZnJvbSAnLi9Ub3BQYW5lbCc7XG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4vVG9wSGVhZGVyJztcbmltcG9ydCBNZWdhTWVudSBmcm9tICcuL01lZ2FNZW51JztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TWVnYU1lbnUgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBXaXNobGlzdCBmcm9tICcuLi9Nb2RhbC9XaXNobGlzdCc7XG5cbmNsYXNzIFRvcEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICB9O1xuXG4gICAgaGFuZGxlV2lzaGxpc3QgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoIHByZXZTdGF0ZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICFwcmV2U3RhdGUuZGlzcGxheVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9wLWhlYWRlci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TGluayBocmVmPVwiL2Fib3V0XCI+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9cIj48YT5PdXIgU3RvcmVzPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9XCIvZmFxXCI+PGE+RkFRJ3M8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PExpbmsgaHJlZj1cIi9jb250YWN0LXVzXCI+PGE+Q29udGFjdDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcC1oZWFkZXItcmlnaHQtbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNzaG9wcGluZ1dpc2hsaXN0TW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlV2lzaGxpc3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2lzaGxpc3QgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWhlYXJ0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbXBhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29tcGFyZSA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYmFsYW5jZS1zY2FsZVwiPjwvaT48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlcy1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkVuZzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5HZXI8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+U3Bhbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gPFdpc2hsaXN0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlV2lzaGxpc3R9IC8+IDogJyd9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydCgncmVhY3Qtb3dsLWNhcm91c2VsMycpKTtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBsb29wOiB0cnVlLFxuICAgIG5hdjogZmFsc2UsXG4gICAgZG90czogZmFsc2UsXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGFuaW1hdGVPdXQ6ICdzbGlkZU91dERvd24nLFxuICAgIGFuaW1hdGVJbjogJ2ZsaXBJblgnLFxuICAgIGl0ZW1zOiAxLFxuICAgIG5hdlRleHQ6IFtcbiAgICAgICAgXCI8aSBjbGFzcz0nZmFzIGZhLWNoZXZyb24tbGVmdCc+PC9pPlwiLFxuICAgICAgICBcIjxpIGNsYXNzPSdmYXMgZmEtY2hldnJvbi1yaWdodCc+PC9pPlwiXG4gICAgXVxufVxuXG5jbGFzcyBUb3BQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHsgXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICBwYW5lbDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpeyBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSkgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBwYW5lbCB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9wLXBhbmVsICR7cGFuZWwgPyAnJyA6ICdoaWRlJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRpc3BsYXkgPyA8T3dsQ2Fyb3VzZWwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLXBhbmVsLXNsaWRlcyBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpbmdsZS1pdGVtLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkVuam95IGFuIGV4dHJhIDIwJSBvZmY8L3N0cm9uZz4gc2VsZWN0IHNhbGVzIHN0eWxlcyA8TGluayBocmVmPVwiI1wiPjxhPlJlYWQgTW9yZTwvYT48L0xpbms+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtaXRlbS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5FbmpveSBhbiBleHRyYSAyMCUgb2ZmPC9zdHJvbmc+IHNlbGVjdCBzYWxlcyBzdHlsZXMgPExpbmsgaHJlZj1cIiNcIj48YT5SZWFkIE1vcmU8L2E+PC9MaW5rPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2luZ2xlLWl0ZW0tYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RW5qb3kgYW4gZXh0cmEgMjAlIG9mZjwvc3Ryb25nPiBzZWxlY3Qgc2FsZXMgc3R5bGVzIDxMaW5rIGhyZWY9XCIjXCI+PGE+UmVhZCBNb3JlPC9hPjwvTGluaz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L093bENhcm91c2VsPiA6ICcnfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwYW5lbDogZmFsc2V9KX0gY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIHBhbmVsLWNsb3NlLWJ0blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFBhbmVsO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIENhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgfTtcblxuICAgIGNsb3NlQ2FydCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMuc3RhdGUuZGlzcGxheSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgeyBwcm9kdWN0cywgdG90YWwgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIHJpZ2h0IGZhZGUgc2hvdyBzaG9wcGluZ0NhcnRNb2RhbFwiIFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIiwgcGFkZGluZ1JpZ2h0OiBcIjE2cHhcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNsb3NlQ2FydH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5NeSBDYXJ0ICh7cHJvZHVjdHMubGVuZ3RofSk8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnQtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5sZW5ndGggPiAwID8gcHJvZHVjdHMubWFwKChwcm9kdWN0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0XCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cHJvZHVjdC50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJsdWUgLyBYUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvZHVjdC5xdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj54PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4ke3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSA6ICdFbXB0eSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnQtc3VidG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VidG90YWw8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidG90YWxcIj4ke3RvdGFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Qcm9jZWVkIHRvIENoZWNrb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlZpZXcgU2hvcHBpbmcgQ2FydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpPT57XG4gICAgcmV0dXJue1xuICAgICAgICBwcm9kdWN0czogc3RhdGUuYWRkZWRJdGVtcyxcbiAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsXG4gICAgICAgIC8vYWRkZWRJdGVtczogc3RhdGUuYWRkZWRJdGVtc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENhcnQpIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNsYXNzIFdpc2hsaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgIH07XG5cbiAgICBjbG9zZVdpc2hsaXN0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5zdGF0ZS5kaXNwbGF5KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsIHJpZ2h0IGZhZGUgc2hvdyBzaG9wcGluZ1dpc2hsaXN0TW9kYWxcIiBcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsIHBhZGRpbmdSaWdodDogXCIxNnB4XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jbG9zZVdpc2hsaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPk15IFdpc2ggTGlzdCAoMyk8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcnQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvaW1nMi5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJlbHRlZCBjaGlubyB0cm91c2VycyBwb2xvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CbHVlIC8gWFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+JDE5MS4wMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvaW1nMy5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJlbHRlZCBjaGlubyB0cm91c2VycyBwb2xvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CbHVlIC8gWFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+JDE5MS4wMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoXCIuLi8uLi9pbWFnZXMvaW1nNC5qcGdcIil9IGFsdD1cImltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPkJlbHRlZCBjaGlubyB0cm91c2VycyBwb2xvPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CbHVlIC8gWFM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPng8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+JDE5MS4wMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJ0LWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlZpZXcgU2hvcHBpbmcgQ2FydDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaXNobGlzdDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBDYXJ0UHJvZHVjdCBmcm9tICcuL0NhcnRQcm9kdWN0JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCwgU2xpZGUgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5cbmNsYXNzIENhcnRDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vICAgICBpZih0aGlzLnJlZnMuc2hpcHBpbmcuY2hlY2tlZClcbiAgICAvLyAgICAgICAgIHRoaXMucHJvcHMuc3Vic3RyYWN0U2hpcHBpbmcoKVxuICAgIC8vIH1cblxuICAgIGhhbmRsZUNoZWNrZWQgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYWRkU2hpcHBpbmcoKTtcbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoJ0FkZGVkICQ2IGludG8gdG90YWwnLCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcbiAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IDIwMDAsXG4gICAgICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnN1YnN0cmFjdFNoaXBwaW5nKCk7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcignUmVtb3ZlZCAkNiBmcm9tIHRvdGFsJywge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXG4gICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiAyMDAwLFxuICAgICAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FydC1hcmVhIHB0Yi02MFwiPlxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciB0cmFuc2l0aW9uPXtTbGlkZX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC10YWJsZSB0YWJsZS1yZXNwb25zaXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FydFByb2R1Y3QgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250aW51ZS1zaG9wcGluZy1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPkNvbnRpbnVlIFNob3BwaW5nPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTUgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPVwic2hpcHBpbmdcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT0ge3RoaXMuaGFuZGxlQ2hlY2tlZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hpcHBpbmcoKzYkKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtdG90YWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q2FydCBUb3RhbHM8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN1YnRvdGFsIDxzcGFuPiR7dGhpcy5wcm9wcy50b3RhbH08L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2hpcHBpbmcgPHNwYW4+JHt0aGlzLnByb3BzLnNoaXBwaW5nfTwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Ub3RhbCA8c3Bhbj48Yj4ke3RoaXMucHJvcHMudG90YWwgKyB0aGlzLnByb3BzLnNoaXBwaW5nfTwvYj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saWdodFwiPlByb2NlZWQgdG8gQ2hlY2tvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCxcbiAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nXG4gICAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpPT57XG4gICAgcmV0dXJue1xuICAgICAgICBhZGRTaGlwcGluZzogKCk9PntkaXNwYXRjaCh7dHlwZTogJ0FERF9TSElQUElORyd9KX0sXG4gICAgICAgIHN1YnN0cmFjdFNoaXBwaW5nOiAoKT0+e2Rpc3BhdGNoKHt0eXBlOiAnU1VCX1NISVBQSU5HJ30pfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgICBtYXBTdGF0ZVRvUHJvcHMsXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKENhcnRDb250ZW50KVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyByZW1vdmVJdGVtLCBhZGRRdWFudGl0eSwgc3VidHJhY3RRdWFudGl0eSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvYWN0aW9ucyc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuY2xhc3MgQ2FydFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMucmVtb3ZlSXRlbShpZCk7XG5cbiAgICAgICAgdG9hc3QuZXJyb3IoJ1JlbW92ZWQgZnJvbSBjYXJ0Jywge1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcbiAgICAgICAgICAgIGhpZGVQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vdG8gYWRkIHRoZSBxdWFudGl0eVxuICAgIGhhbmRsZUFkZFF1YW50aXR5ID0gKGlkKT0+e1xuICAgICAgICB0aGlzLnByb3BzLmFkZFF1YW50aXR5KGlkKTtcbiAgICB9XG4gICAgLy90byBzdWJzdHJ1Y3QgZnJvbSB0aGUgcXVhbnRpdHlcbiAgICBoYW5kbGVTdWJ0cmFjdFF1YW50aXR5ID0gKGlkKT0+e1xuICAgICAgICB0aGlzLnByb3BzLnN1YnRyYWN0UXVhbnRpdHkoaWQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNhcnRJdGVtcyA9IHRoaXMucHJvcHMucHJvZHVjdHMubGVuZ3RoID9cbiAgICAgICAgKFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcm9kdWN0cy5tYXAoKGRhdGEsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHJvZHVjdC10aHVtYm5haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSBhbHQ9XCJpdGVtXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57ZGF0YS50aXRsZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNvbG9yOiA8c3Ryb25nPkxpZ2h0IEJsdWU8L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+U2l6ZTogPHN0cm9uZz5YTDwvc3Ryb25nPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5NYXRlcmlhbDogPHN0cm9uZz5Db3R0b248L3N0cm9uZz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuaXQtYW1vdW50XCI+JHtkYXRhLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwcm9kdWN0LXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb3VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWludXMtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5oYW5kbGVTdWJ0cmFjdFF1YW50aXR5KGRhdGEuaWQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1pbnVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS5xdWFudGl0eX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIxXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezEwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsdXMtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5oYW5kbGVBZGRRdWFudGl0eShkYXRhLmlkKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHJvZHVjdC1zdWJ0b3RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRvdGFsLWFtb3VudFwiPiR7ZGF0YS5wcmljZSAqIGRhdGEucXVhbnRpdHl9PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSk9PntlLnByZXZlbnREZWZhdWx0KCk7dGhpcy5oYW5kbGVSZW1vdmUoZGF0YS5pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICApOiAoXG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInByb2R1Y3QtdGh1bWJuYWlsXCIgY29sc3Bhbj1cIjVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+RW1wdHkuPC9wPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VW5pdCBQcmljZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UXVhbnRpdHk8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRvdGFsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0SXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvZHVjdHM6IHN0YXRlLmFkZGVkSXRlbXMsXG4gICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbFxuICAgIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVtb3ZlSXRlbTogKGlkKSA9PiB7ZGlzcGF0Y2gocmVtb3ZlSXRlbShpZCkpfSxcbiAgICAgICAgYWRkUXVhbnRpdHk6IChpZCkgPT4ge2Rpc3BhdGNoKGFkZFF1YW50aXR5KGlkKSl9LFxuICAgICAgICBzdWJ0cmFjdFF1YW50aXR5OiAoaWQpID0+IHtkaXNwYXRjaChzdWJ0cmFjdFF1YW50aXR5KGlkKSl9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAgIG1hcFN0YXRlVG9Qcm9wcywgXG4gICAgbWFwRGlzcGF0Y2hUb1Byb3BzXG4pKENhcnRQcm9kdWN0KVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzE0MTA5OTE1NTAtOTAyODItOW1tLWx1Z2VyLTE0Ny1nci14dHAtYjU1M2E4ODA2ODU4MWU2YzU4MmYyNWI2ZWM2Y2MzZWMuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NjaS03NC0yOGQwNTRhYTYzZWEwMTQ4MTNhMThmM2E4ZmEwNzkxNy5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUFrQ0FZQUFBRFBSYmtLQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEzWnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3pPVFJtTUdSak15MW1OamMyTFRrd05EY3RPVEl6TmkxaE1XSTJaV1EzTkdZMFptRWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPRVZFUTBKRU9UUkJOakEzTVRGRk9VSkVNakpHTWpSQ1JrUkJRVFU0TlRnaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk9FVkVRMEpFT1ROQk5qQTNNVEZGT1VKRU1qSkdNalJDUmtSQlFUVTROVGdpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRmRwYm1SdmQzTXBJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2WldWaU5XUmhZemd0TkdNMU9TMWhNalEwTFRsa1lUY3RZMlEwTURJellUTmxNakl6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pNNU5HWXdaR016TFdZMk56WXRPVEEwTnkwNU1qTTJMV0V4WWpabFpEYzBaalJtWVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1ByZUFOM29BQUF1alNVUkJWSGpheEZscGJCVG5HWDVtWm1jUDczcDluNEJ0aUtFeEtCQnpSSnhwQ0lsUTBpWW9WZHVrcmRUK2lDSlZha0hOang1cFU2bFNxRlRTSEcyVmtCKzVEOUlHUXBOQURvZ0p0ekVZekdHd01XRGpjMjJ2MTlldTk1amQyZDNwTTV0MU5KbXN1WnEwbGo1OTQ5MXZ2bm1mOTMzZTUzMi9XUUUzL2lkTWNhMy9hUm5XYS9nRy9vUWJ2TWM4ekh0cEdXWnRDaURhL3hKQXl1RCtjZVdSVThONElxNEpSVzZyb0RvbDlEdUVwTWNtSm5wbElkRWpKdFd1bUJMeEtLSHc0TERQNDkzOHd1YmhiZHUycVFZZ1h4c3c0VHFORjN1ODQzZnQ4MW0zanlpYTAyMlZJUEJUZ1kvU1owM1RJSEdXUkVDV3RBbW5tUFE1TEpvM1M0YlhLY1E3N0ZDN29hb2VMUmJzYld0cjg2eGJ0MjdVQk9wcXdMUWJCWkR5L0lYMnl4VUJ4L1FQVHcvSDV5VzVsVWlyOVM4U21wWmFFZWVIMFNRUWppY1JValdFRTBrRU9TTDhNc1oxaW9TNDA2SUZadG5ocjdKaGJLWkQ3Q3UzYTVjZFNiV0g0RG9HaHdhNzZ1dnJCelpzMkREQjVja000TDRDU3JnT3pvdmVNZVcxSnAvMmswcTNCVmE2ZWlDVWdDLzYrVjZCV0JKanRENUE0NVU0Z1NRMEJBa3N3T3RoZ3VubTU3MGN5WGdDMWtRQ1dmek9UY0Q1a29acE5qRTYzU0dGS2x4U3VDcmJNbEtXSmZTVk9jVU9PUmJZVVZsVmVTUU5KcGtCMURVREVEM0R3VjljQ0ZnMlhRNm85bmtGVnJTTnhyQ2d5SmJhSmtJdnU2d2kvQVNqMGloZkpJbkxvVGd1RVdDWGtrUTN3WG1UU1FnRUpTZmlzSEM5VENBaVozMElCQ25vTTRlVis5bkpTVGM1K1BqS1lsK2V2K1dYdDYxWXRZczJ4UFZnbTRGSTEyTDg0SUIzNmRtQS9lbTI4WGdCN1VRc1JSTU5Mb3VJVmdJWlZqUTArZVBvanlTUTc1RGc1ZDVPdTRqVkpUYk16N1ZnbWt1Q1JJKzdPSFRqTlRVSk5VWjd1SWZJWWRWb09POXhrSklXUGxGVkV3Z1R4a3pMaUhQbnk4L2tuajU3N2dOVEhud1JBY3ZWcUxOdjc3NjhFVEhuQ1l1c1Zkd3h6WVptWHd6bFdXS0s0eDU2T01jbTBjc0pKcktHYjlQZ2QzeFI5QkFJUDBJNXY3dTlVTVozaTZ5b2tvRjgyVTdRQWxyR291Z2FJL0J3QWdQK0dIckdsWlJQdzFGU2l5Nk5VSzhlckMzRzVaMVA0RUo3UnlmdHNCdnNtb3lBYnA5bXVaTHg2OWV2bCsxemx2ejJxYmJJYWgzdjJuSWJDbHdXT0trK2k0cEU1RE1jaHdsb2dnOWNtQy9qYUNDTzFtQWM1WFlKbFE0QlNWTG1zMEVGRGJ5NWhwSHdUREJuZ2pGVTUxang1SXBpZkh4NUFzUUlCZ1dlQUlFUTJLNExZeWdxTEVXeDV5QStQZFhRa2hTbGJiVEZsalphcDVDVW5sTjJTbGVpemhzNzYrNzc4NFg0eGpQakNadk1UMDZPeFJGaDVOc0NLaTRFay9EVHdBS0hpRHdDbVVOZzR6VDBvWEk3STZDbDFwUXowWHNKNkZjMTJTamhCZ2Y3STBqd0hsM0I5SWh0cU92RG5IdzcxczV5NFJJajkwQk5MbmEySzFoUnFxRmx5OGFZSXp2dm1WMjdkcmVralk5bnlJT01GRXA1djZPN1orYXp2ZGowNytGWTlueVhEQStKdnlSUHhsTFNRV0ZDVWtpdzJ4dERMK21TUTc2N3JBSnVZdnpMT1ArUWtSb3VzTURHbmJ4QkZTKzFqS2NlTkJwU1U2NmN4dlZIK29Lb3lTUHppV2JqZ1VITXlyUGh4ZVBEeUhNNUlaMTZHeFBCd043OTlZMU5hUnZGOVBpSzZFaVpqTis2ZFd0V2QvRzhaLy9ZR3JyZFJ1K08wbXN1V2NSOTlHNGZwZEpEWlVuUXV6K29zS2ZvVWszdkI4aUQzUU1LdG5TRjBEU2tZRUtKdzhta1hGbGlSYm5EZ2xsY2MvOU1GdzcxaHRBOEdNYjNhbkpReUh2ZmF4MUhJYjlmVXViQXE4MWhmQ2UzSDJkMnZEamdHUTY4MU5uWk9VUjc5QW9lTTR5NFVZa3lScUI2NWRwSGZuUTA5S0NOWWJiUzJ3RUNXRmZwd2xsNmM1d0s4ck1aV1hpOU40elJXQUpCSnZOd05JNUY1UGhQYTNNeHhPeHRab0llSGd4aGU3c2Y1WFRBTEtlTTFoRUZqeTB1eEtPTENqREM1TCtMdEhtTkNqYkNuSGhnVlNtZU8rckRrbElidkllMklLQnFuelkyTm5ZWWVKOHdVTWRZMEw1RW9SVHZlL3U5S3g0OUczN2NFNG9KYnB1TUVScjA4RXduY2hpckNScDhmNGtkcDBlalRFZ1ZTMW5RZ3ZUMG1rSXJQdkdFb1RBNkUxenZwTkw4ZW00dWNxMzVhUEpGME15SWxOaEUvT1dJRjJXVTJVcTNqRE1ESVN5WjdzUzJoNnJ4M3JsUkRBUVpMWnpFQjQzSFdyMWp3YnEwcDFYRHlGUUh2cUJRaWpvOS9VTUwvK2tSL3JhbFBWU2RSNldKa3hiNmdqWEZOcXdvc0xGTjBOQVhURkJHcFpSK1I2blhRVlpYUC9QZ0pxY0Z4d2NqcU1xV0VTSFF1cDRnc25sekwyVnlZYUVkNnhjVm9pcEhwb0tKNlBlck9OUVZ3TjVMZmpSMkIxRFhQb0VmejdQanhGc2JvN0l6NzVVREJ3NmM1Mk9qZXZmQkVVblBVUk9GdnRSSzZMUDAxd2J2SjV0YkEzY2xSQUV5aXhSckk1SzhEcEZDTTVuSWE4c2QxR2tSYzNObFdPamxObEtsTXN0Q0paSlltUldjcEtjZFhLOFh1QUltNnU2T0NTd3Z6NEtiUnVjd3VVZkNLdXlpaUh2bTVLU2NjN2c3aUU0ZkkyZk5Sazd6VzlqMTdwdDdqeDV2ZWlwdGNNZzBGQk9BVkFSRVkxL2ZGNUxXWkZudENMRWxDRkV2OVRLdjU0Q0xhenRaYlA1K2RneWJ6b3pnOTFRTG5SWjY2WCt1ZVJTMERjVTJDeDZyTFVRRmUrc2g4bHBsRkphVU9sQktnS3NyWEhpNXljY3VWWUNUVkRyVUdjQ2VpMzRNakNsWU1MTUEzNjlnRkxadkdaYXM5bjhaa2pacUdFWUthV1lWRWlabDZ2bmYvTHg4Y2E1V1BTM1BiWXRvTXZySmM0VUptdklxVitnamk5ZGhjcjNCRTBFakthTXlxWk1FV1VwYUZiTnZycVljV3FrKzc3V05ZWGF1RmN1WThDV2tsWjFST2RjZnd2SVpWS0tPQUM2TlJIRDdMRGZDRmdlMlBmMDdnaFBmcWR1enB5RnRjTVJFSDlYa2VjME1JRVVoVzFJNVlnbjAxOWZJQVdYTmRNZTB4VE1LWElJbGkwRGlDRElpRnQ1bTVVTGQ0M3JESlhNZmtYMU1pMC9CMGI0UWpqR1JkZjdQWTVPM29zS0pJb2VNQUpQNjlhWmh4QWkwZlNpQ08yZm5vb2FST2RJeEJsZCtFZHc5Ky9EeHRyZmJUalUzdjZBb1NpUnRkTVRFZmRXa1FsOXRsZE9LcE50bkx5c3R5Vmw0YTIzRjNYZmVjYys4MnR2dVU0cS9WWDF3MUNvZHBJWVBCUldpcHZHaWp2N3o4NEMrZFlKQUVveUV4bXRkaFc1bTBxK3F5TWI4c3F4VXNlb2VqNktZaVY1M2NSeWxuRWRVR2JJUXdhRW5IMDY0M2E0L3ZmL0Jqc2EwMFRyZmcrblpHSUdFMmZ2bUNBanAvNlZnTUNSY2FtK1A3S3JiYy82elBidjNTUDcraTZ1S05kdTlzd3R5SzR2eWJPR2tMUGpaTXNmMDB3dExzcDd1MXBRSG1QeWtqMFlnZXBOMnBOT1AvYXdGM2VTNjN2VGRSdnJNeUxYaElxVTFwekFmdlIvOUE4ckl3Szc5aHc1L0ZJMUdqYlNKbUpJMm8vRkdBREJFd2ppenBBZlZFMDBuZTdlK3UzMS95TmR6ZW1GT0lySm11czAxZDFxK1UzQTRKTC9LenBReXFpZXQzakxyN2JBK3k3eWRRc1NvYU9nZGorRVk1ZkxUMWpHTXNaMVl2YUFDMDRObjhlNHJ6L3NDNGVqbWpvNE9Yd2JqamNrNzVmbFlNbEhKZktnMm5vU1M1OXN1K3Q3LzhLTVQ1MDZmcUsrVUFrTXJTNUxpd2hrNTdwS0NIRnRDc3BMdlBJR0ZvanlnSkhnbS9ueEx2V25UVDI5MmpnZ2pkbXFRd3NCRFRlTmJtelQvNk1pYlJ4cU9Iak5wL2xVVDkwcTkwRlRHSnd5aFRBeDZ2Y0hQRGg0K3owN3hZSjQ2MW42TFUxRVdsY3V1dVRQeTNhN3NiT2hSR2ZKSEVWZlp2S1hQemZxTytwbjVsbG1sbUR1NkYrZnJkemUzZG5TK0VRb0dnMWZ3ZnNiRW5Tb0N5SERxU1dib1I3NEFva1Nqc2VNblQvZSt2M05uUTJKODZFeWVNakN3cEZTMHJaaGRWRkpSbG85SWtsTE01TldsV0kzSFlYTzZjVytWaWxOYm53ejRsZVNyclMwdDdSbU1OM3YvdWw2cm1GOVlpWk9KYlJoeVdyRW1WVXMyamtXM0xpaXFyYjExN3JKbHkrK2VYck40K1lCWVptL3d4SGxlRnJHMGpFZlBOLzhBYjc5bjU4RkQ5YnBzaG5sUDJGQnR3MU5WM090OUw1UUp5Q1FZMFFEQVlnRDBKVERsWmFYWml4Zld6bGkyYk5tYW0rY3Z1c016T0ZwY3QrTWRkSFYzSFFpR0l5OHdjVWZUWGcrYmpKK2t6eFc1ZjYydlZZUU05Y0lJUkxvYWtQU1FEUGRNVWpLV05uZ3lDcEhyNGY3VmtuaXF4RGJuaGpaVmZoaXVqZk5raXh3MUtJK1NRZk92eWZqLzV1V3V1VzVJcG53eFI4VmlXRFBwQUhQVHBsNnRhSDFkQUs1RUx5RkQwbHNNMTRMaDFVamNkR2lKbXc4cjN6U0FhMGw2WTc0WUQrV2FTWjV2eVBpdkU4RFZvaklKQUJsZVVDV25lSUg3ZndHUUNRZ3kvQmlpWlhwTmVDTS9kbnhUQUs3M0dUZjhLODEvQkJnQXo1c3FGQWFjQlVJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUVBQVFBQkFBRC8yd0JEQUFNQ0FnSUNBZ01DQWdJREF3TURCQVlFQkFRRUJBZ0dCZ1VHQ1FnS0Nna0lDUWtLREE4TUNnc09Dd2tKRFJFTkRnOFFFQkVRQ2d3U0V4SVFFdzhRRUJEL3dBQUxDQUZBQVFZQkFSRUEvOFFBR2dBQkFRRUJBUUVCQUFBQUFBQUFBQUFBQUFjSUJnVURCUC9FQURVUUFBRURCQUVEQWdRRUJBY0JBQUFBQUFBQkFnTUVCUVlSQndnU0lSTXhGQ0pCVVFrVk1rSWpVbUdCR0NReldHS1UxQmIvMmdBSUFRRUFBRDhBMUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDVjg3OVJXRjhEVUZ1YmVxU3Z2Rjh2Y2l3Mm15MjJOSktxcmZ0RTNyOXJlNXpVMzVWVlhUVWN1MEpYV2RhMlhZWXRMZGVZT21YTU1QeHlxbGJFdDI5ZjRwSVZkK24xR0xGSDJML3hWM2Q0WFNLdmcwcGI4b3gyNlkxQm1WQmVhV1d4MUZHbHdqci9BRkVTRmFaV2QvcXE1Zlp2YjVWVjFyNm1jVjYxYjdsdFpYemNIOVBPVjU5WXJiSzZDYThSekxTUXl1YjcrazMwbnEveHBVYXVuYVZOdFRaVCtCZW9mRHVmYlJjSjdIUjExcHZOa21TbnUxbXVERWJVMGNpN1JONi9VMVZhNUVYd3UycWlvaStEbHVWT3JXMVlabmp1S2VQT1A3NXlKbU1FYVMxZHZ0WHlSVWpkSXVwWmUxMmxSSE5WZE5WRTJtMVJmQjV1R2RZOEUrZVcvamJtWGlxL2NaM3E4dWF5Mk91TXFUMGxVOVY3V3RTYnNacFZjcU5SVWFyZHJwVlJkYjBjRG11UmVSTVU0cXc2NFoxbWx4K0R0VnRZanBISTN1Zkk1VjB5TmpmM1BjNVVSRS9yNTBpS3FaM2Ixc1oxSloxenFMcFZ6VjJEb3o0ajg2K0pUMWZodmYxL1E5TFhacnozZXAyNjg5MnZKb1hqVGtuRXVXc05vTTZ3cTRMVjJ5NE5YdDcyOWtrVDJycDhjamYydmF2aFUvdWlxaW9xeGZMT3NoanMzdWZIL0N2RW1RY21YS3h2V0s1ejIrVktlanA1RVZXcTMxdXgrOU9SeWJWRWFxb3ZhcmoxdUpPclN6WjduVHVLYzd3VzljZlpxckZscDdYZHZtWlZOUnF1MUZKMnRWVjdVYzVOdFJGUlBsVmZLSFk4NTg5WVp3SmpkUGU4b1pWVnRiY3B2aGJYYXFKcVBxYTZieHRyRVgyYW0yOXpsOXRvbmxWUkZramV0bTk0cmNiYS9tenA3eXZBYkJkWm13UVhtZVZhbUtOenZLZXF6MG1Lenh0VmFpcTdTTHBxNk5RVTFUVDFsUEZWMGs4YzBFN0d5UlNSdVJ6WHNWTm81RlR3cUtpN1JUNkFBQUFBQUFBbWQ3NER4SElPYnJKenZjN2pkSnIxWUtGYUNqb252aWRSTWFxU29qMFlyTzlIb3N6MTMzKytsMTRPWDYwYy93QVJ3bnAreW1oeVY4RXRUa2RETGFiWFJPMHNrOVRJM1RYdGI5b3RwSXJ2cDJwOVZSRmh2SWpNdDRlL0RlcytMWHBaNlM3M1dPR2ltWS9hU1F3MVZYSlVyQzVGOG92b3I2Ym1yN2JWRDM4RzZtVndYQkxUZy9BWFQ1bFBJRml4V2lpb2E2OFc5cjRLU1dxYXhGbmRFNXNVaXpPVjZ1Y3E2VGFxcXB0RlJWcEhUTG1mQS9MVjR5WGxManpGcExGbWxZNXRQazlMVXlQU3BZNVZUU3VaM0xHclhMR3VudGFpcXJYYlJGVlVPejRyNER4SGlYSzh5ekt5WEc2WEM1NXZYZkgxODF4ZkZJNk4zZkk5V1JxeGpWUml1bFZkTHYyYjVYUm52cjh1TkR5SmYrUE9CY05hMnR6aXJ2Y2RjaXdmTkpiNEZqY3piMVR5eEhkeVNyOW13ZHk2VFNyU09yakx1YytLYmJaK1crTWI2dFRqdGtualRKYkEraXA1R3owL2VpK3NrcXhyS3hGMzJQN1hmS2l0Y2lKcHluUGMyOVdsVGNjUnd2SGVuT3FiY2M0NUpiRExhOVJSeXV0MU9ybFI3NVdQUnpFZWoyUGpWSElyVytuSzVmMEp1c1pGd1hhdVV1TUxMZ1hPVjJxOHNxNkI4VmJWMTBUMG9mWHJXdGNpdlJsT2pHZGlKSTlyV3EzMjBxN2Q1T081OTZ2ZUorQlZyY0hyYUtxdVdRMDlBeGFlMFU5THFEdGV4ZlRiSkk3VEdzMXJhSnRVVDlxbjRPaEhqTzVZRjArTWd1VjdwYWliSnErZTdzZGJxdU9vWlNza2lqaWExc2pGY3hYb2tYY3VsVkVWZGU2S1VuZ3JnakVPbi9GcTNGY1FyTGpXdzE5ZSs0VDFWeGZHK29lOXpHdFJybk1ZeEZSRVo0OGZWZnVaMjUzdU5GeXgxcDhUNFp4K2phcTZZSFYvbU9RMTFQNWJUd01taW1kQkk5UDVXeHVUUytPNm9SdnVxb2VqbXJXNXorSXJoOWl1aUpOUVlkanpxK0NuZjVZbFFySlpFazEvTWpud3J2N3hOK3hjdXB2R3FESytuN2tDMVhDblpLMk93VmxiQ2prMzJ6MDhUcG9uSjlsUjhiZkp6WFJIa2xiay9URmhWWGNKblN6MGNGUmJ1NXk3L2gwOVJKRkVuOW8yc1QreGN3QUFBQUFBQVNqcUU2aGNZNEN4bUd1cjZhUzdaQmRuclQyU3lVNi94cTJid24wUlZheEZjM2J0S3ZsRVJGVlVRbDNEdlRwbTJmNWxUOVFQVkpPeXZ5Tk8yV3lZMXIvS1dhUGZjenVadFU3MDkwWjUwdnpQVnovMCt0K0lQamxiZittbTdWTkZFNlJiTGNLTzR5TmFtMTlOSCttNWRmWkVsMnYyUkZYNkZKNmJYNDFKd0hnTHNTU0JMYitRVWlJa1d0Sk1rYUpQM2EvZjZ2cWQzL0x1SUZ4UkRTcitJbHlkTmlDTVMxc3NTSmRWZy8wZmkxU2s3MFhYanY4QVZSNnI5ZTVKUDZuYjlRSFVwa1ZveXFMZ25nT3pwa1BKTnlicVY2SWpxZXpSdVRmcXlxdnk5Nk5WSGFkOHJVVkZkdmFOZDcvVHIweld6aHhLek1jcXV6OG41RHZ1NUx2ZmFoVmVxSzVkdWloVjNsR2I5M0w4ejlKdlNhYTN0ZWNPUmNQNHQ0dnYyVzV6REZWV3lPbGZUclFTYVg4d2trYXJXMHlJdmhlL2FvdmhVUnZjcStFVXdQMHBzbDZkT1c4V3kzbGpDNmEwMmZsQzJTTXNGeWtjNVV0YXlTL0kxVmVxOWlQYXNhS3E3Y2pKWTNLNUVWNkc3T2J1ZU1QNENzbHN5SE5xQzd6VU4wcjIyNWt0QlRza1NHVldxNUZrN250MDN0YTVmRzErVmRJZHJjTFBqbVVXbWFqdWx0dDkxdHR5aVQxWTVvbVRRMUVhdDhLcUtpbzVGVDIvb1pFNkJKRzIzUHVhY1F4U3JrcWNHdFYrVDhuWDFGZkV6YzFReHF4dVg5WGRGSEh0ZnFqR0w5VG91WU9vRFA4QWt6T0t2cDY2WG9telhtSGNPUTVTcTZwck96ZmE5ckhvaW9qMDhvcjAycUtpdFlpdTh0cS9BSFR6aC9BT055VzZ6T2ZjcjNjVlNXOFhxcGIvQUppdWw4cjkxN1dJcXJwbTE5MVZWYzVWVllwbWFzd2Y4UlhFYjVkSEpEUTVoampxR0NvZXVtTFVJeVZpUjcvbVYwY1NhKzhyZnVYSHFieVdneFRwKzVBdXR3cUdSTmtzRlpSUXE1ZGQwOVJFNkdKcWZkVmZJM3djMTBTWTVXWXgweFlWU1Y4VG81NnlucUxpclhKcitIVVZFa3NTL3dCNDNzWCs1Y3dBQUFBQUFBWmY1eDZOY3A1ZzVkYnl6YnVkYXpHYW1qaHA0TFZCVDJkMHNsdlNOdmxZNWtxV0x0WkhTUDJqVVZGZnJ6clo1ZjhBZzY2Z2Y5OGViLzhBVXFmL0FIRjc0NjQ0dU9NOFlRY2RjZzVkVVo3S3NWVlQxOXl1a1R1K3VpbWtlN3NrYStTUlZSR1BTUFN1WHczNmV5UktQb255UEVaNjZoNFg2anN1d2ZIYmhLNldTenNpV3FaRXJ2MWVsSjZzYXNYWGhIYVYra1RibDFzclhCWEFHRThCMkNydGVNUHE2NjRYV1ZLaTYzYXVlajZxdGxUZWxjcUpwR3AzTzAxUGJ1VlZWVlZWWFAxRDBDY2syZko3eG1OZzZycjFhTHZmcHBKN2hWMEZra2dsblY3MWU1SE9aV0lxcDNMdlhzZXovZzY2Z2Y4QWZIbS8vVXFmL2NVWG1UcHFtNXd6M0ZMMW1XZHVmaUdNU05xRnhobHUrV3VuL2MrV2YxZlBkcHJkZW40WjNJaW9yMWNkUHoxd2ZqZlBYSE5WZ042bFNoZjNNbnQxZXlCSkhVTlF6dzJSck50N2s3VmMxVzdUYlhLbTBYU3ArYW40TnBjaDRVZzRhNWh2eVpyRkRUdHBuWFA0UmFPZHlSci9BQVpQOVNSVWxZaUluZjNmTnI1a1hidHlPUG9vNUJwTFIvOEFFMjNxdXpTbnd2dFdCdG8rRzNJMm1YeDZLVHBNaUkzWGp0Um5icjl1dkJhTUg0UnhqaXJpMnQ0MDR1bWtzYnFtbHFHTXVramZYcVBqSkkxWWxYSjViNmoycjJycEZhbW1vMU8xTmF6amlmNGZuSk9CeFZNR0U5V2wvc01kYklrdFMyM1dlV25TWjZKcEhQN0sxTzVVMnZ2OTFPenhUcFI1eXNHVTJlL1hYckp6RzhVVnR1RlBWMU51bnBhaEk2eUtPUnJud09WYXh5STE2SXJWMjFVMHZzdnNWWG5YZ1BDK2ZjYnByTGxENnFpcmJiTXRUYTdyUk9SdFRSVExyYXRWZkN0WFRlNXErL2FpcHBVUlVrek9pYStaVGNMWkh6YjFDWlZuOWd0TXpaNExOUEN0TkZJNXZoUFZmNnIxZjQyaXUwanRLdW5KczFCVFUxUFIwOFZKU1FSd1FRTWJIRkZHMUdzWXhxYVJyVVR3aUlpYVJENkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEvOWs9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwvOWovNEFBUVNrWkpSZ0FCQVFFQUFRQUJBQUQvMndCREFBTUNBZ0lDQWdNQ0FnSURBd01EQkFZRUJBUUVCQWdHQmdVR0NRZ0tDZ2tJQ1FrS0RBOE1DZ3NPQ3drSkRSRU5EZzhRRUJFUUNnd1NFeElRRXc4UUVCRC93QUFMQ0FGQUFRWUJBUkVBLzhRQUdnQUJBUUVCQVFFQkFBQUFBQUFBQUFBQUFBY0lCZ1VEQlAvRUFEVVFBQUVEQkFFREFnUUVCQWNCQUFBQUFBQUJBZ01FQlFZUkJ3Z1NJUk14RkNKQlVRa1ZNa0lqVW1HQkdDUXpXR0tVMUJiLzJnQUlBUUVBQUQ4QTFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ1Y4NzlSV0Y4RFVGdWJlcVN2dkY4dmNpdzJteTIyTkpLcXJmdEUzcjlyZTV6VTM1VlZYVFVjdTBKWFdkYTJYWVl0TGRlWU9tWE1NUHh5cWxiRXQyOWY0cElWZCtuMUdMRkgyTC94VjNkNFhTS3ZnMHBiOG94MjZZMUJtVkJlYVdXeDFGR2x3anIvQUZFU0ZhWldkL3FxNWZadmI1VlYxcjZtY1Y2MWI3bHRaWHpjSDlQT1Y1OVlyYks2Q2E4UnpMU1F5dWI3K2szMG5xL3hwVWF1bmFWTnRUWlQrQmVvZkR1ZmJSY0o3SFIxMXB2TmttU251MW11REViVTBjaTdSTjYvVTFWYTVFWHd1MnFpb2krRGx1Vk9yVzFZWm5qdUtlUE9QNzV5Sm1NRWFTMWR2dFh5UlVqZEl1cFplMTJsUkhOVmROVkUybTFSZkI1dUdkWThFK2VXL2pibVhpcS9jWjNxOHVheTJPdU1xVDBsVTlWN1d0U2JzWnBWY3FOUlVhcmRycFZSZGIwY0RtdVJlUk1VNHF3NjRaMW1seCtEdFZ0WWpwSEkzdWZJNVYweU5qZjNQYzVVUkUvcjUwaUtxWjNiMXNaMUpaMXpxTHBWelYyRG96NGo4NitKVDFmaHZmMS9ROUxYWnJ6M2VwMjY4OTJ2Sm9YalRrbkV1V3NOb002d3E0TFYyeTROWHQ3Mjlra1QycnA4Y2pmMnZhdmhVL3VpcWlvcXhmTE9zaGpzM3VmSC9DdkVtUWNtWEt4dldLNXoyK1ZLZWpwNUVWV3EzMXV4KzlPUnliVkVhcW92YXJqMXVKT3JTelo3blR1S2M3d1c5Y2ZacXJGbHA3WGR2bVpWTlJxdTFGSjJ0VlY3VWM1TnRSRlJQbFZmS0hZODU4OVlad0pqZFBlOG9aVlZ0YmNwdmhiWGFxSnFQcWE2Ynh0ckVYMmFtMjl6bDl0b25sVlJGa2pldG05NHJjYmEvbXpwN3l2QWJCZFptd1FYbWVWYW1LTnp2S2VxejBtS3p4dFZhaXE3U0xwcTZOUVUxVFQxbFBGVjBrOGMwRTdHeVJTUnVSelhzVk5vNUZUd3FLaTdSVDZBQUFBQUFBQW1kNzREeEhJT2JySnp2YzdqZEpyMVlLRmFDam9udmlkUk1hcVNvajBZck85SG9zejEzMysrbDE0T1g2MGMvd0FSd25wK3ltaHlWOEV0VGtkRExhYlhSTzBzazlUSTNUWHRiOW90cElydnAycDlWUkZodklqTXQ0ZS9EZXMrTFhwWjZTNzNXT0dpbVkvYVNRdzFWWEpVckM1Rjhvdm9yNmJtcjdiVkQzOEc2bVZ3WEJMVGcvQVhUNWxQSUZpeFdpaW9hNjhXOXI0S1NXcWF4Rm5kRTVzVWl6T1Y2dWNxNlRhcXFwdEZSVnBIVExtZkEvTFY0eVhsTGp6RnBMRm1sWTV0UGs5TFV5UFNwWTVWVFN1WjNMR3JYTEd1bnRhaXFyWGJSRlZVT3o0cjREeEhpWEs4eXpLeVhHNlhDNTV2WGZIMTgxeGZGSTZOM2ZJOVdScXhqVlJpdWxWZEx2MmI1WFJudnI4dU5EeUpmK1BPQmNOYTJ0emlydmNkY2l3Zk5KYjRGamN6YjFUeXhIZHlTcjltd2R5NlRTclNPcmpMdWMrS2JiWitXK01iNnRUanRrbmpUSmJBK2lwNUd6MC9laStza3F4ckt4RjMyUDdYZktpdGNpSnB5blBjMjlXbFRjY1J3dkhlbk9xYmNjNDVKYkRMYTlSUnl1dDFPcmxSNzVXUFJ6RWVqMlBqVkhJclcrbks1ZjBKdXNaRndYYXVVdU1MTGdYT1YycThzcTZCOFZiVjEwVDBvZlhyV3RjaXZSbE9qR2RpSkk5cldxMzIwcTdkNU9PNTk2dmVKK0JWcmNIcmFLcXVXUTA5QXhhZTBVOUxxRHRleGZUYkpJN1RHczFyYUp0VVQ5cW40T2hIak81WUYwK01ndVY3cGFpYkpxK2U3c2RicXVPb1pTc2tpamlhMXNqRmN4WG9rWGN1bFZFVmRlNktVbmdyZ2pFT24vRnEzRmNRckxqV3cxOWUrNFQxVnhmRytvZTl6R3RScm5NWXhGUkVaNDhmVmZ1WjI1M3VORnl4MXA4VDRaeCtqYXE2WUhWL21PUTExUDViVHdNbWltZEJJOVA1V3h1VFMrTzZvUnZ1cW9lam1yVzV6K0lyaDlpdWlKTlFZZGp6cStDbmY1WWxRckpaRWsxL01qbndydjd4Tit4Y3VwdkdxREsrbjdrQzFYQ25aSzJPd1ZsYkNqazMyejA4VHBvbko5bFI4YmZKelhSSGtsYmsvVEZoVlhjSm5TejBjRlJidTV5Ny9oMDlSSkZFbjlvMnNUK3hjd0FBQUFBQUFTanFFNmhjWTRDeG1HdXI2YVM3WkJkbnJUMlN5VTYveHEyYnduMFJWYXhGYzNidEt2bEVSRlZVUWwzRHZUcG0yZjVsVDlRUFZKT3l2eU5PMld5WTFyL0tXYVBmY3p1WnRVNzA5MFo1MHZ6UFZ6LzArdCtJUGpsYmYrbW03Vk5GRTZSYkxjS080eU5hbTE5TkgrbTVkZlpFbDJ2MlJGWDZGSjZiWDQxSndIZ0xzU1NCTGIrUVVpSWtXdEpNa2FKUDNhL2Y2dnFkMy9MdUlGeFJEU3IrSWx5ZE5pQ01TMXNzU0pkVmcvMGZpMVNrNzBYWGp2OEFWUjZyOWU1SlA2bmI5UUhVcGtWb3lxTGduZ096cGtQSk55YnFWNklqcWV6UnVUZnF5cXZ5OTZOVkhhZDhyVVZGZHZhTmQ3L1RyMHpXemh4S3pNY3F1ejhuNUR2dTVMdmZhaFZlcUs1ZHVpaFYzbEdiOTNMOHo5SnZTYWEzdGVjT1JjUDR0NHZ2Mlc1ekRGVld5T2xmVHJRU2FYOHdra2FyVzB5SXZoZS9hb3ZoVVJ2Y3ErRVV3UDBwc2w2ZE9XOFd5M2xqQzZhMDJmbEMyU01zRnlrYzVVdGF5Uy9JMVZlcTlpUGFzYUtxN2NqSlkzSzVFVjZHN09idWVNUDRDc2xzeUhOcUM3elVOMHIyMjVrdEJUc2tTR1ZXcTVGazdudDAzdGE1ZkcxK1ZkSWRyY0xQam1VV21hanVsdHQ5MXR0eWlUMVk1b21UUTFFYXQ4S3FLaW81RlQyL29aRTZCSkcyM1B1YWNReFNya3FjR3RWK1Q4blgxRmZFemMxUXhxeHVYOVhkRkhIdGZxakdMOVRvdVlPb0RQOEFrek9LdnA2NlhvbXpYbUhjT1E1U3E2cHJPemZhOXJIb2lvajA4b3IwMnFLaXRZaXU4dHEvQUhUemgvQU9OeVc2ek9mY3IzY1ZTVzhYcXBiL0FKaXVsOHI5MTdXSXFycG0xOTFWVmM1VlZZcG1hc3dmOFJYRWI1ZEhKRFE1aGpqcUdDb2V1bUxVSXlWaVI3L21WMGNTYSs4cmZ1WEhxYnlXZ3hUcCs1QXV0d3FHUk5rc0ZaUlFxNWRkMDlSRTZHSnFmZFZmSTN3YzEwU1k1V1l4MHhZVlNWOFRvNTZ5bnFMaXJYSnIrSFVWRWtzUy93QjQzc1grNWN3QUFBQUFBQVpmNXg2TmNwNWc1ZGJ5emJ1ZGF6R2FtamhwNExWQlQyZDBzbHZTTnZsWTVrcVdMdFpIU1AyalVWRmZyenJaNWY4QWc2NmdmOThlYi84QVVxZi9BSEY3NDY0NHVPTThZUWNkY2c1ZFVaN0tzVlZUMTl5dWtUdSt1aW1rZTdza2ErU1JWUkdQU1BTdVh3MzZleVJLUG9ueVBFWjY2aDRYNmpzdXdmSGJoSzZXU3pzaVdxWkVydjFlbEo2c2FzWFhoSGFWK2tUYmwxc3JYQlhBR0U4QjJDcnRlTVBxNjY0WFdWS2k2M2F1ZWo2cXRsVGVsY3FKcEdwM08wMVBidVZWVlZWVlhQMUQwQ2NrMmZKN3htTmc2cnIxYUx2ZnBwSjdoVjBGa2tnbG5WNzFlNUhPWldJcXAzTHZYc2V6L2c2NmdmOEFmSG0vL1VxZi9jVVhtVHBxbTV3ejNGTDFtV2R1ZmlHTVNOcUZ4aGx1K1d1bi9jK1dmMWZQZHByZGVuNFozSWlvcjFjZFB6MXdmamZQWEhOVmdONmxTaGYzTW50MWV5QkpIVU5RencyUnJOdDdrN1ZjMVc3VGJYS20wWFNwK2FuNE5wY2g0VWc0YTVodnlackZEVHRwblhQNFJhT2R5UnIvQUFaUDlTUlVsWWlJbmYzZk5yNWtYYnR5T1BvbzVCcExSLzhBRTIzcXV6U253dnRXQnRvK0czSTJtWHg2S1RwTWlJM1hqdFJuYnI5dXZCYU1INFJ4amlyaTJ0NDA0dW1rc2JxbWxxR011a2pmWHFQakpJMVlsWEo1YjZqMnIycnBGYW1tbzFPMU5hemppZjRmbkpPQnhWTUdFOVdsL3NNZGJJa3RTMjNXZVduU1o2SnBIUDdLMU81VTJ2djkxT3p4VHBSNXlzR1UyZS9YWHJKekc4VVZ0dUZQVjFOdW5wYWhJNnlLT1JybndPVmF4eUkxNklyVjIxVTB2c3ZzVlhuWGdQQytmY2JwckxsRDZxaXJiYk10VGE3clJPUnRUUlRMcmF0VmZDdFhUZTVxKy9haXBwVVJVa3pPaWErWlRjTFpIemIxQ1pWbjlndE16WjRMTlBDdE5GSTV2aFBWZjZyMWY0Mml1MGp0S3VuSnMxQlRVMVBSMDhWSlNRUndRUU1iSEZGRzFHc1l4cWFSclVUd2lJaWFSRDZBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBLzlrPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsLzlqLzRBQVFTa1pKUmdBQkFRRUFBUUFCQUFELzJ3QkRBQU1DQWdJQ0FnTUNBZ0lEQXdNREJBWUVCQVFFQkFnR0JnVUdDUWdLQ2drSUNRa0tEQThNQ2dzT0N3a0pEUkVORGc4UUVCRVFDZ3dTRXhJUUV3OFFFQkQvd0FBTENBRkFBUVlCQVJFQS84UUFHZ0FCQVFFQkFRRUJBQUFBQUFBQUFBQUFBQWNJQmdVREJQL0VBRFVRQUFFREJBRURBZ1FFQkFjQkFBQUFBQUFCQWdNRUJRWVJCd2dTSVJNeEZDSkJVUWtWTWtJalVtR0JHQ1F6V0dLVTFCYi8yZ0FJQVFFQUFEOEExQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNWODc5UldGOERVRnViZXFTdnZGOHZjaXcybXkyMk5KS3FyZnRFM3I5cmU1elUzNVZWWFRVY3UwSlhXZGEyWFlZdExkZVlPbVhNTVB4eXFsYkV0MjlmNHBJVmQrbjFHTEZIMkwveFYzZDRYU0t2ZzBwYjhveDI2WTFCbVZCZWFXV3gxRkdsd2pyL0FGRVNGYVpXZC9xcTVmWnZiNVZWMXI2bWNWNjFiN2x0Wlh6Y0g5UE9WNTlZcmJLNkNhOFJ6TFNReXViNytrMzBucS94cFVhdW5hVk50VFpUK0Jlb2ZEdWZiUmNKN0hSMTFwdk5rbVNudTFtdURFYlUwY2k3Uk42L1UxVmE1RVh3dTJxaW9pK0RsdVZPclcxWVpuanVLZVBPUDc1eUptTUVhUzFkdnRYeVJVamRJdXBaZTEybFJITlZkTlZFMm0xUmZCNXVHZFk4RStlVy9qYm1YaXEvY1ozcTh1YXkyT3VNcVQwbFU5VjdXdFNic1pwVmNxTlJVYXJkcnBWUmRiMGNEbXVSZVJNVTRxdzY0WjFtbHgrRHRWdFlqcEhJM3VmSTVWMHlOamYzUGM1VVJFL3I1MGlLcVozYjFzWjFKWjF6cUxwVnpWMkRvejRqODYrSlQxZmh2ZjEvUTlMWFpyejNlcDI2ODkydkpvWGpUa25FdVdzTm9NNndxNExWMnk0Tlh0NzI5a2tUMnJwOGNqZjJ2YXZoVS91aXFpb3F4ZkxPc2hqczN1ZkgvQ3ZFbVFjbVhLeHZXSzV6MitWS2VqcDVFVldxMzF1eCs5T1J5YlZFYXFvdmFyajF1Sk9yU3paN25UdUtjN3dXOWNmWnFyRmxwN1hkdm1aVk5ScXUxRkoydFZWN1VjNU50UkZSUGxWZktIWTg1ODlZWndKamRQZThvWlZWdGJjcHZoYlhhcUpxUHFhNmJ4dHJFWDJhbTI5emw5dG9ubFZSRmtqZXRtOTRyY2JhL216cDd5dkFiQmRabXdRWG1lVmFtS056dktlcXowbUt6eHRWYWlxN1NMcHE2TlFVMVRUMWxQRlYwazhjMEU3R3lSU1J1UnpYc1ZObzVGVHdxS2k3UlQ2QUFBQUFBQUFtZDc0RHhISU9ickp6dmM3amRKcjFZS0ZhQ2pvbnZpZFJNYXFTb2owWXJPOUhvc3oxMzMrK2wxNE9YNjBjL3dBUnducCt5bWh5VjhFdFRrZERMYWJYUk8wc2s5VEkzVFh0YjlvdHBJcnZwMnA5VlJGaHZJak10NGUvRGVzK0xYcFo2UzczV09HaW1ZL2FTUXcxVlhKVXJDNUY4b3ZvcjZibXI3YlZEMzhHNm1Wd1hCTFRnL0FYVDVsUElGaXhXaWlvYTY4VzlyNEtTV3FheEZuZEU1c1Vpek9WNnVjcTZUYXFxcHRGUlZwSFRMbWZBL0xWNHlYbExqekZwTEZtbFk1dFBrOUxVeVBTcFk1VlRTdVozTEdyWExHdW50YWlxclhiUkZWVU96NHI0RHhIaVhLOHl6S3lYRzZYQzU1dlhmSDE4MXhmRkk2TjNmSTlXUnF4alZSaXVsVmRMdjJiNVhSbnZyOHVORHlKZitQT0JjTmEydHppcnZjZGNpd2ZOSmI0RmpjemIxVHl4SGR5U3I5bXdkeTZUU3JTT3JqTHVjK0tiYlorVytNYjZ0VGp0a25qVEpiQStpcDVHejAvZWkrc2txeHJLeEYzMlA3WGZLaXRjaUpweW5QYzI5V2xUY2NSd3ZIZW5PcWJjYzQ1SmJETGE5UlJ5dXQxT3JsUjc1V1BSekVlajJQalZISXJXK25LNWYwSnVzWkZ3WGF1VXVNTExnWE9WMnE4c3E2QjhWYlYxMFQwb2ZYcld0Y2l2UmxPakdkaUpJOXJXcTMyMHE3ZDVPTzU5NnZlSitCVnJjSHJhS3F1V1EwOUF4YWUwVTlMcUR0ZXhmVGJKSTdUR3MxcmFKdFVUOXFuNE9oSGpPNVlGMCtNZ3VWN3BhaWJKcStlN3NkYnF1T29aU3NraWppYTFzakZjeFhva1hjdWxWRVZkZTZLVW5ncmdqRU9uL0ZxM0ZjUXJMald3MTllKzRUMVZ4Zkcrb2U5ekd0UnJuTVl4RlJFWjQ4ZlZmdVoyNTN1TkZ5eDFwOFQ0WngramFxNllIVi9tT1ExMVA1YlR3TW1pbWRCSTlQNVd4dVRTK082b1J2dXFvZWptclc1eitJcmg5aXVpSk5RWWRqenErQ25mNVlsUXJKWkVrMS9Nam53cnY3eE4reGN1cHZHcURLK243a0MxWENuWksyT3dWbGJDamszMnowOFRwb25KOWxSOGJmSnpYUkhrbGJrL1RGaFZYY0puU3owY0ZSYnU1eTcvaDA5UkpGRW45bzJzVCt4Y3dBQUFBQUFBU2pxRTZoY1k0Q3htR3VyNmFTN1pCZG5yVDJTeVU2L3hxMmJ3bjBSVmF4RmMzYnRLdmxFUkZWVVFsM0R2VHBtMmY1bFQ5UVBWSk95dnlOTzJXeVkxci9LV2FQZmN6dVp0VTcwOTBaNTB2elBWei8wK3QrSVBqbGJmK21tN1ZORkU2UmJMY0tPNHlOYW0xOU5IK201ZGZaRWwydjJSRlg2Rko2Ylg0MUp3SGdMc1NTQkxiK1FVaUlrV3RKTWthSlAzYS9mNnZxZDMvTHVJRnhSRFNyK0lseWROaUNNUzFzc1NKZFZnLzBmaTFTazcwWFhqdjhBVlI2cjllNUpQNm5iOVFIVXBrVm95cUxnbmdPenBrUEpOeWJxVjZJanFlelJ1VGZxeXF2eTk2TlZIYWQ4clVWRmR2YU5kNy9UcjB6V3poeEt6TWNxdXo4bjVEdnU1THZmYWhWZXFLNWR1aWhWM2xHYjkzTDh6OUp2U2FhM3RlY09SY1A0dDR2djJXNXpERlZXeU9sZlRyUVNhWDh3a2thclcweUl2aGUvYW92aFVSdmNxK0VVd1AwcHNsNmRPVzhXeTNsakM2YTAyZmxDMlNNc0Z5a2M1VXRheVMvSTFWZXE5aVBhc2FLcTdjakpZM0s1RVY2RzdPYnVlTVA0Q3Nsc3lITnFDN3pVTjByMjI1a3RCVHNrU0dWV3E1Rms3bnQwM3RhNWZHMStWZElkcmNMUGptVVdtYWp1bHR0OTF0dHlpVDFZNW9tVFExRWF0OEtxS2lvNUZUMi9vWkU2QkpHMjNQdWFjUXhTcmtxY0d0VitUOG5YMUZmRXpjMVF4cXh1WDlYZEZISHRmcWpHTDlUb3VZT29EUDhBa3pPS3ZwNjZYb216WG1IY09RNVNxNnByT3pmYTlySG9pb2owOG9yMDJxS2l0WWl1OHRxL0FIVHpoL0FPTnlXNnpPZmNyM2NWU1c4WHFwYi9BSml1bDhyOTE3V0lxcnBtMTkxVlZjNVZWWXBtYXN3ZjhSWEViNWRISkRRNWhqanFHQ29ldW1MVUl5VmlSNy9tVjBjU2ErOHJmdVhIcWJ5V2d4VHArNUF1dHdxR1JOa3NGWlJRcTVkZDA5UkU2R0pxZmRWZkkzd2MxMFNZNVdZeDB4WVZTVjhUbzU2eW5xTGlyWEpyK0hVVkVrc1Mvd0I0M3NYKzVjd0FBQUFBQUFaZjV4Nk5jcDVnNWRieXpidWRhekdhbWpocDRMVkJUMmQwc2x2U052bFk1a3FXTHRaSFNQMmpVVkZmcnpyWjVmOEFnNjZnZjk4ZWIvOEFVcWYvQUhGNzQ2NDR1T004WVFjZGNnNWRVWjdLc1ZWVDE5eXVrVHUrdWlta2U3c2thK1NSVlJHUFNQU3VYdzM2ZXlSS1BvbnlQRVo2Nmg0WDZqc3V3ZkhiaEs2V1N6c2lXcVpFcnYxZWxKNnNhc1hYaEhhVitrVGJsMXNyWEJYQUdFOEIyQ3J0ZU1QcTY2NFhXVktpNjNhdWVqNnF0bFRlbGNxSnBHcDNPMDFQYnVWVlZWVlZYUDFEMENjazJmSjd4bU5nNnJyMWFMdmZwcEo3aFYwRmtrZ2xuVjcxZTVIT1pXSXFwM0x2WHNlei9nNjZnZjhBZkhtLy9VcWYvY1VYbVRwcW01d3ozRkwxbVdkdWZpR01TTnFGeGhsdStXdW4vYytXZjFmUGRwcmRlbjRaM0lpb3IxY2RQejF3ZmpmUFhITlZnTjZsU2hmM01udDFleUJKSFVOUXp3MlJyTnQ3azdWYzFXN1RiWEttMFhTcCthbjROcGNoNFVnNGE1aHZ5WnJGRFR0cG5YUDRSYU9keVJyL0FBWlA5U1JVbFlpSW5mM2ZOcjVrWGJ0eU9Qb281QnBMUi84QUUyM3F1elNud3Z0V0J0bytHM0kybVh4NktUcE1pSTNYanRSbmJyOXV2QmFNSDRSeGppcmkydDQwNHVta3NicW1scUdNdWtqZlhxUGpKSTFZbFhKNWI2ajJyMnJwRmFtbW8xTzFOYXpqaWY0Zm5KT0J4Vk1HRTlXbC9zTWRiSWt0UzIzV2VXblNaNkpwSFA3SzFPNVUydnY5MU96eFRwUjV5c0dVMmUvWFhySnpHOFVWdHVGUFYxTnVucGFoSTZ5S09Scm53T1ZheHlJMTZJclYyMVUwdnN2c1ZYblhnUEMrZmNicHJMbEQ2cWlyYmJNdFRhN3JST1J0VFJUTHJhdFZmQ3RYVGU1cSsvYWlwcFVSVWt6T2lhK1pUY0xaSHpiMUNaVm45Z3RNelo0TE5QQ3RORkk1dmhQVmY2cjFmNDJpdTBqdEt1bkpzMUJUVTFQUjA4VkpTUVJ3UVFNYkhGRkcxR3NZeHFhUnJVVHdpSWlhUkQ2QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQS85az1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUtJQUFBQXBDQVlBQUFDMmhmSUFBQUFPYlVsRVFWUjRuTzFjYTJ3VjFSWmVmVUtodEpaQ2FXbUxVQ255Qm5tRU5sU2dWQUpFeEV1aEFSUVJjaE1ydDRtSWlZcitNTVNZQVBGNlkyS0tvdDRVTEFaS1FZby9oRVFRdkJvbzhoQ2tJbEtnaVBKK2lDQW9yZTNjZk11dWszWDJ6RG1jdHVPcHdQbVN5Wm5IbmoydmI5WmEzMXA3VHBobFdSYmR4WkRMRHdzTHU1dHZRNnNqL0M2L2ZnL3U4dmV4MVJINVY1eEFkWFUxUlVaR1VueDhQSFhzMk5HMi9lOEVXTUlRQ1ZzZnJydm05OTU3anhZdFdrUVBQZlFRdFd2WGppSWlJbWpDaEFuOGUvWHFWUW9QRCtlSDM5RFE0TmtINjdDTTlaakhLY2s2L0lMVXNsMzJsZTNvYzgrZVBUUjc5aE0wYk5odzIva0VpcENMYmwyNFNzU2xTNWZTMXExYjZjeVpNL1Q3Nzc5VFVsSVNIVHQyakFrSjBuVHIxbzFxYTJ1cHZyNmVvcU9qZWQwZmYveEJkWFYxSHNza2s1QU44OWdIWk1SK1dJOTUyUVljT25TSUNxYlBwTFZyU3VuUS95cG9kMlUxZGVtU1JPRXh0WFR5UmlTRlJTVlFmSWMyWk5YZHBQWnRveWsrUG9GU1VsSW9QYjBiUlVWSGNSOGhJcll1WEhmTkR6LzhNTjI4ZVpPS2k0dnArdlhyMUxselo0cUppYUVPSFRyUTlPblQ2Zmp4NC9UYmI3OVIyN1p0ZVgxVVZCUXZnNHdnR2laWVQ1QVBidjN5NWN0MDZkSWxiZ2VTNFBlZWUrN2g5aUJsbHk1ZGFOT216WFRtekRtcXB3aEtUWXVtK3ZTOVZMOXZKKzNkZFlvMlZCTlZYeWFLVDBta2V3ZGtVV3BHRDBycW5FVHRZMklwTlQyTnV2Zm9UdjM3OTZjMmJkcDRYb1lRR1lNUFY0bjQ1Sk5QMHBJbFMraktsU3RzL1dDMVlQbGc5VUNnWGJ0MjBZMGJOM2o5dFd2WGVCOVlTN1FCQWNVU1lzTDgyYk5uMmJKaWZ3RklldUhDQlc0UHduejMzWGNVRVJGTy9RY09KT3ZtSldvVEhVVmRNN3JUbGJOSEtiTm5HQlZrSk5PSjJpaXFpKzVFU2IyenFFZi9RZFE1c1NQRnRvK2xqb2tkYWZlZTNSUWJHMHQ5K3ZSaDh1TThRN2pOaVFncmQ5OTk5N0YxR1Rod0lQMzY2NjlzRlQvLy9ITW0xUERodzVsa3NHWUFDSWpwOU9uVGxKcWF5c1FTOTB1TjdsS3NsQkFQMjBBWXpNT2lmdlBOTjdSLy93RjZkTXBVaW94c1F5ZFAzS0RLeW5pS2laMUJ5ZmxwbEptWVNiM2J4Vk4wZUIxUmZSMjFheHZETDBKY2ZCd2xkMG5tNHdwQWNuM2NFSUlIVjRuNHhSZGYwTnR2djAwdnYvd3l0Vy9mbnEzZmdRTUgyT3FOR1RPR3VuYnR5akhqK2ZQbmFmVG8wVXpZbXBvYUpsbHljaklURkc1ZFlrY1FBaTRkVmdya0U0SUtXWEVNdU8zYTJwdFVmZmdRVVVRc1plVGtVN2VjL0daZEdJZ1lVdEN0QTFlSUNJdUc2WWNmZnVDWWJzV0tGVXkwa3lkUGNwd0hLd25yQlRlSzdZbUppZHdXMXV6SEgzOWtVYk4rL1hvbUljZ0w0bUVDNGVMaTRxaFRwMDVNRWl5VEVoWVFMU2RPbkdDU2RvaUw4NXhQU3k1S2k2YVFWUXdlWEZITnExZXZabkh5NElNUGNxeTFaczBhdG5BUUVuaVlFQ1A0aGV2R3VsT25UbkdiaXhjdnNtV0RwVVJjK2NzdnYxQmFXaHIvZ25nZ0xPSkVuZFlCc0E5SUNYSmpIU3dwM1A4RER6eGdPN2ZtSUtTZ2d3L1gwamV3ZEVlT0hLRlBQdm1FOXUvZnorU1RaRFlzRnR4eFFVRUJFMjNod29Yc29tRUpKMDJheENROGZQZ3c1eDlIalJyRmx2S1ZWMTdoeEhodWJpNFZGUld4WmRTQ0J1VERPbGhGeEo5RGh3NjFuVk56RVNKaThPRmFqQWpTWldWbGVheWRXRDdKKzUwN2Q0Nlh0Mi9memlRRVFMeDU4K1p4YklsWUVrUUZ4bzBieC9IZmE2Kzl4bTRlODhGRXlEMEhINjduRVpHVEF5a2hVR0FKWWJuZ2t1R3FxNnFxNk9EQmcreG1RVnFRRUVBYlVkS0NoSVFFZXVTUlI0Sk9RZ3JWblZzRnJnOTYyTHQzcnlkdmlBbHhIRVJJZW5vNmwvMWdLV0VsZFR3M2JOZ3dKaWxjc1FCcTJDUm5zQkNxUHdjZnJoSVJPY1AzMzMrZll6ZDVrTWdUSW42RTh1M1hyeDhMRUdEZnZuMWNtZ1BRdnJDd2tCVzBBTzRkb3FXMUVITEp3WVdycnJtMHRKU3JIcjE2OWVJMGpKVHNvSW9SSTg2Wk00ZC84L0x5ZUNBRXFqQ3dqQ05Hak9COW9KQS8vZlJUdHFwdzYxT21UTEVkSTFnSVdjWGd3alhWREZYOCtPT1Bzd1dFT0FHUmRCSWFlVU1rci9Qejg2bXNyTXdqWUQ3NzdETWVRWVBrTmx3NVlzTHUzYnZUNE1HRGJjY0lOa0xxT1hod3pTSnUyclNKNHpxUVNPckRlSUNJOHlCT3BIeUcxQTFJQ0NCZW5EbHpwcTJ2RU80K3VCWWpmdm5sbDV3N1JIMVprczhnSHlhcysrbW5uMWlzb040Y1FnZ21YTEdJaU9rd3ZBc3BHckdDQU5TeVZGWmdKVEVRQXE0YTY1c0NrQnJwb0JEdVhMaEN4SjA3ZDdKYmhpckdvRmdJRk1SN011QVZ5M0RaSUN1cUtUTGFPaEJJbkliUERucjI3TWxKNzRrVEozSTZLSVE3QjY0UUVTVTZFQStDQmFObFlQMmdtakgvODg4L3N4b2VPWElrMTZFcktpcHMrd2NDOUlNQkRsdTJiR0ZCaEtyTDg4OC9INkxpSFlJV3g0aUkvWGJ2M3MyanBxRjR4NDRkeTlaS1NudFF6aGdFaTlFNHFLWUk1UHVUcGs3VVdMdCs0WVVYNkpsbm5yR2RUd2kzSjFwTVJJeWdRVm9HRlJTNFl0U01rWWdHS1dFWnBjUUhhK2hHbkNmRUJkNTY2eTJlUXJqOTBXTFhqTEdHcUMraktnS0NZRndpU0FsckNGRUNOd3ByS1I5THVRVkpPTU1xVHAwNmxaUG1Uei85dE4vZWtUcENyUHJTU3kreHEzZENUazRPelpvMXk3Wmw0OGFObktKeTZrK3dhdFVxemg0NFlkQ2dRZndwaFg0WkViNDg5OXh6OU83eWQzbDUyclJwdEc3ZE9qcFlkWkRqYllRaVNQbzdBYlg0eFlzWEI5UVBnTDdtenBuTHcrVXllMlpTMTlTdVBOOWcvZmxNOE5GYmVYbTU3VWp2dlBPTzEvbXVYTG1TM3Z6UG0xUjk5TTl5YlBHeVlzK1lBYWY3Z1B1RCs2VFg0VjZZKytCaHRoZ2xKU1ZXU2txS05XTEVDR3ZreUpGV2RuYTJsWk9Udzh2OSt2V3pFaElTck5kZmY5MHFMeStIOHVBcExDek1sUWw5TFZxMHlLcXFxckxDS016cTFiTVgvenBOTlRVMWZLbGpSby94Mmw1WVdPaTEzK0xGaTdsZFEwTURUOEN5WmN0c2ZlS1lHdGhQYjhkeENxWVZlSll4cjdGdzRVS3ZjekQ3UFgvK3ZPMTZkRHZCcmZxNWZ2MjY1NXJ4cTY5ZlVGbFphYnMrOUN0QUgvcGFTa3RMdmViOTNRZnM2Nis5MVRqVXFjWEFnVFp2M215OSt1cXIxb3N2dm1ndFdMREFtajkvdmxWVVZHU2xwYVV4V1VhTkdzWHJoWWlCVHJjaUs5cms1dVphRlJVVm5wdG5Qamk1Z1FKOVV6QmhYL1BtZ1FTYWlOSy9QeUxLeTZBZnBIbXNMVnUyZUVnbTYwQTJ2YXo3MWNTUzg5SWtDcVFmSEZPZmsxN1cwTWRCWHhyNlJjUTVhZUthYmMzN2dMWnlYdWJMS0hCRk5jUGRqQjgvbm12SXFEVkwyZ2FsTzlTUThZa0FQalBGTW5LSmRJdXlHUkxpU1BsZ1VJUjhIdUFQQ0FjZ2lPQnl0Q0FTTjJBT252ajIyMis5bHBFVytuRFZoMTdya0FIQVFBMkJ1ZDBKWDMvOXRkZGF1RVdJT1Eya3R3QU0vaFhBeldIQUNBUWQzS1dHdUZzQlBzLzlvUFFEenpVRTBnL0VwT0NqZFIreEd6Y0IxNjJSbTVmcldjSzJvbjhWZWQxVFBWSUt4OFg1U0JodzlPaFJyNzR3d0FWZlNnSkRoZzZ4SFp2Y0h2U0F1QkFmcm12SXlRa2VlK3d4MjM2K2dIR05pT1g4a1ZhQXVBNFRZaEVOeEk1bVBITHM2REd2NVI0OWVuQk1wWUY4cHdBdmw3bWRISzdOSkIwR2RQaUtHWVdRQXNTZmE4dlg4Z3NnL2VLNEdrOFZQc1ZMT29ZTnBCOU5NcEFHK2R6ak5jZTk5a1BkWHdOa0UyQWtsQWFNQzlKb3ZnRERvTEcyYkMybjhnQ00wSGZDMy9wUG1HQVptOXJPeWRxWjBLU0M5Y0JEMDhBNnNZWjRDWGJzMk1IenNMaitZRm9Wa05tMGFPYUxLb0FBZ0xYVDVBWmhORVJvaFlmNXZpOU8vWmhBTGhkOWFhR2xMUncxa2sxUTh0OFNyMjJvb0ZYdXJMVDFLMERtUkFQVytlT05IL01hWDk4VlJZTHRYMzMxbFdjZ2doT2Noa1NKbGRJalZKd0c4cGpyNFdwUkpZSHFReEpjZnhTbDk0SGlSbW13cVhDeWRob21VZS92ZmIvTmFpMVo2cTFVeFMzblQ4dW5wVXVXK2p3alRUcGZwTTNPenVaZjg0SEFVa0c1SXJ6eHJEUElzVy92UG42SjhLSUlBdWtIbVFCOWJyZ0d1R2NRVm1EZUE1Q05HdStYS0dRQlNHNkdFTDd1ZzBCZWZ1MXB2SkNYbDlka0FSSE15VW1nbUdLbFQ1OCtucURYVkswbWRLQXViYlNxbFFCZmhJb09zazNob0FGRmJvb2tVNG1LR2hlWWlsaXJWTXRRdy9wYzBYZFQrakhQVFFTYWhwbEo4Q1hzME00VUl5S2lUUEZrVHFhbzBRaVhtbTF6S3gzTnJZNEVna0RiaXFCeHNuWW04S1docnpZSDloK3dmU01qYm5ueW81TnRmV21ZTVJZcy9odi9mc096ak55ZVdRbWErOCs1WHN1bXRUV3R1MWhxV0xpbTlBTVhySzBvTmNhU0d0ckM2YmJ5MXpDQ3JPd3NteGlCOVJmckttR094TE1hV2dDWjhCMXMvSVZ3SXFmVEZDZ2tyRUJOVzhOOFlPUVF2eURaS2pjZUxtajU4dVZlNFlhNFphZStORXczQ2pLSUc0WEtYYkZ5aGEyeU5HUEdERnMvK21VeVkxbU1aRWVTR29PTG05SVA4T3lDWjcyV3RmczAyNEpzQXZOK3dTMmJZa1MvQ0pJNXdQM0N5NmVoQlpDSk8rSWZZeVV3TnhXa2t6RFl0bldiMXpKaUZtME5kTVZGcTJYRVVOOGYvdDdXbjhDTXNVQVlWQzIyYmQvR0tsZVRFS0lHNmg3SGRySWM1RUFPc2R5NFZ1a3JrSDd3eDFlb0N1RVRYVjl4cTJuaC9BbWR6TXhNR3pueDdibDUzbWlYTzliYkFtb0JaT0sySnFKWUxuei9RZzVrUVBsUkF5VXFIWGpqalVXZFhBTXVWU0J1R1pqOXhHeS9BYnBKVW44UEUrZUovdkI5am56TGJlN25aTjFCUEpReElVWUM3YWVrcElTbS9HTUt1MHh0dVRSeFRRc0hFZ20wc2dZeU1qSzhYbWF4MUFJSko5QnV5QkR2bktFSUlDZmM5aFlSWHdDS2F6S3RuWGtUVGRJaHVXcGFnNzU5Ky9LdmRzdkl1Y0c2bVhHV2hxOFl5eCtRNkJjVlRZMHZoc0NNWldIZFVYZDJVcVQrK2hIZ1R3MjA1ZEp1MHJSdytJUkRnTUVxSnZUTGJHWVl4SU1nWmh3d1lJRFhObjh2Sjc2c2M3WDJHNnhKbEx1VXpHNVZnak5ycGFKaVRWVzRZY01HVnN0YVhVTjErbE9LcHJxRk9wUzZ0aFBNdXFzdWhZbktOVldzbENDMThyeFZQNVlxRWFJLzNZZWN1NWxGMEdWSXVXK2l5dEdIUGc3S2ZocFNCa1I3dWZkeXo1MHlHQnEzSFJHRmdOSFIwVlpaV1publVwelNCZnFHT2hFSkQ4a2tjSEZ4TVJOUnAycHc4ODNValNhNjA3RTFHVXpJdzVRSGpGOTlyazdIY2tvQjNhb2Y2VXVuZDBBSS9aSTRIY01rR0s1Rjk0RjVNLzFqOWlYYmhaeG1Tc2xHeElrVEovNnQ4NGhPMCtUSms2MGpSNDdZTHFhbDBJTWMva3JBR21HQ3RRR1o4ZHNjQk5JUFNJZjFhR2NPMG1ncTBKYy9TOTlzV0piMWY5ZHFHWnJIRC94K0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQWxDQVlBQUFBRUdXcXZBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTNacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek9UUm1NR1JqTXkxbU5qYzJMVGt3TkRjdE9USXpOaTFoTVdJMlpXUTNOR1kwWm1FaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk5FVkJSalpETmpGQk5qQTNNVEZGT1VGRVFqQkNOVEpFTWpVM09ESTRPVElpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TkVWQlJqWkROakJCTmpBM01URkZPVUZFUWpCQ05USkVNalUzT0RJNE9USWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV1ZpTldSaFl6Z3ROR00xT1MxaE1qUTBMVGxrWVRjdFkyUTBNREl6WVRObE1qSXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak01TkdZd1pHTXpMV1kyTnpZdE9UQTBOeTA1TWpNMkxXRXhZalpsWkRjMFpqUm1ZU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHJmUkdHd0FBQXI3U1VSQlZIamF2Rmw1Y0JQWEdmK3RkblY1ZlVrWTJ4aU1UOExoSzlRR2tnQUJNZzNwaEltYlFETHRIODFGazJsVE1qa25rNWxrTWtEVEhLVk5Ba3c3VGZwSEJwcW1FeUFHT3cwMDBCZzd4dmdBRW9oTk1BWjhTcFpsU2Jac1dmZHE5L1ZKbHN4YVNPWk1kK2J6ZXQrK2ZlLzdmZC92TzNiRjRNWU81aXJYNUNyWHQreGdibkErRXlYeWUrUWF6N2NFR0hPZGM1bXpaenQwaFlYenRxbFU3RVpDdDVja01rNFV4QlFJQkxva1VlejErbnlYUEI1UHY5UHBNbzJOT0ViTlpyUDl3UWZYamRKbnBTZ1F0d1FZZHozS2I5KytVMWxRVVBoR1VIbUdqZ1JGb1dDU2lGK1lMNTAvUDErMFdxR2hnMGw1ZVNTcnNHQllFTVFCd1Y5a0hMVzdERDVCNlBGNXZYMHV0OU15WkxHYXZ6MTUwdmJ5eTgrTlh3Y3djak1lQ001VGpJNDZmNW1VeFA5ZG9VQkNjRkN5MnpHNi93QWNodzdCYy9Zc1JLc2xoRXFWbjQrMGpSdWhmK2FaS1ZvUlF2d1NJYmFBS0E2SmttUVRCYkhYNXhZdStmMCtrOFBoTUpwTXBvRVBQL3pMWUZYVlBrSCtXSlJNQWNOY3EvV05Sbk5SWm1iNkFaWmxDb0tEanBvYVdONTdENjdXRXhEOXZpbkJFRnlkU1VoRTNzZi9Rc292SGdEeERJQU1OVUFhL1FGRUdLT21VSU5KV1FBMnV4SkVuUTRpa25GUkpHT2lLSTFTU2xvRVFlaWpsT3gzT0VZYkN3cHlqb2U5Sk1tOE5RbUd1UmJsVzFwTzZjdkt5ajdTYUxqMXhPZkQwRHZ2d0xwekp3TFVBNHJRcEN1WEVlbjY2VStzUk9ZcmQwRzRzQi9FYWFhS2pvZG1oZ0F5V2lqMEM2QmE4aDZZakRXWHlYK1pLS0lnU1BZelowNi91bXhaeFQ1NkhRZ3RHd1hrV21KQXNXaFIwZE5VK1lla1lSdU1tNTZGZGM4ZXNQUUdHME54RWh4U0FVb2xRK09qRWY3VDFJQkVtckFHSjNNNzhVQzBuSWF2NVFXb1YzOUtQVkk4Y2UveWtxelA1MDVyYVdsK2l2NWZFOVNEaWhBR011a0J4ZFY0YnpiYlZ2R0o2bGNseXhCaitNTWY0VGgxQnBxTURDaFlscTR3bFo1Qk5kbEVJT054UUwrZTdqUk1SMFVKakRLOGt6engwbXRHVGU4UHQwSHNyNDRabzNWMTlhaXVQaEJVV0R0aGxsRFNZV1dyeFFVUW9VNzZqSm02UHl1OG5wU2ViVHRnMDJXRDNma3hkUC9ZaTlSMTYwTG1ra2VWZWk2Qk9nL3c5dEhyQUVIeVNycEJRaEJFL0YxQzBFZmFLRnJYbEZzMjJ6QjI3ZHJsMCt0MVFYUWFHWUFwcHVEaUtSK2NXRnBXK2hZSGNydnQ4LzB3Q2xyd0QvMEtDcDhEaHZaMjZKNTZBYW5adVJCdFZyaEdmTkNRTVNUcmFxR1pUK0ExVWw5VEVFSXZnV1oyR0FBWHc4aGh1aEMvazdMYlMrY2tUc2JCSjUvOEU0T0RwcTh2WHJ6UVJJZVVZZnBNc2Y1MGRZQVpHM005b2RFb0gzT1pMT2d4dUtGNTRHR2E0eVZ3UTBiNEJ3Y3hXUFJ6WkcvTXhsRFRTZkJsNVZEMnR0Tk1jemZzcDc1QWdzb005YkpSOEd0WFFaV1lBMC92RjJCY0F4TTJqSFVvRTBLWktYSjBkSnhIVlZXVlZhTlI3UnNlSGlaUmlqUFRGYktRNVEwR2N3WFBhOStnRjJ6ZjV3ZlIyOUtPUkpJSXo1SUt6TTZZaGFKVkt0Uit1aHY4SXcvUzFEZ0dzYnNUMG0zRnNNMWJBbC9xSGZCb0UrQ0ZrM3BFQlVGTXhjSmNIL3lkdTJnS2xVSnhFdHcxVkFRcHV3TlVGQ21GZEl5ZlNEMDBabmJzMkNuU2RIMm92djRiUXd5bHAvaVJqYWJPMGFNTk14WXN1RzJuVXNtV0I1VWIzdlFiYUpxT1FHeXRoZVhiZHBqZExGenB1WmlkbTBiemVENlNFdFd3Rzh5d0R3MUQ0TlJJVnZ2UlQzZ3NYam9BN3ZpTGFEMXhFVXp4RmlSbTVDSWdxcUhrS1UyOFF4QUVBaGQvSjlScGVlQ3kxMEdoS3cwcGNmandZZXpldmF1enA2ZjdyMjYzMjBPSC9GUjhZZkZIcGRNcm1qUEYrTGhuTTg5clhxY1dZcHkxUjlIOXM3VmdBdUprL25aUkphMjZYS2d6MHpCU3NnWWtZdzdtM244djFPZGF3VEVFNXBZMnpOLzBVK1FNUFFvM21ZbUJsRi9EaWxYUThtcWs2SkxBTXhha3FPMndXTjBoYStkeS93VlR1SWw2WVNFY0RpY3FLeXY5T2wzS085WFYxVUh1dTROYlVuR0d6KzR3RUNGU0QrUVVZa1pHSFBkcnRlcG5tWEJsOHB6K0RyUkJvK1NieURiQnYzekFoMlJySjIwYk9qSGJjQnpNb3duby92YzkwRkJycGpjZVFsLzZuU2pPSzBPMy8xMW9NeGZDYTNORHA1OER0YWNEbHE0dTVHUXhPRmh2eDZvTmxVaHRleEprUmhsWXFuencyTDc5QTBvdDZSdXFmR3ZZMm5JUlpKYWZyQU9jckZWWWxKakliNkhjUzQwZ0VpeFdlV1drVDB3NExGSkpXQ1hCakNFMzV1UjhDWUg1RXVwN2FmcURBMzFmQWQydW42QWloWWZFSmxOTG1HRHJPWUdzNG51UTJQYzJaczk2Qk1rWE4xT2Jkb05kL2xGb3piYTJzNmlwcVI1UnE5Vjd3OHBHVTBlUTBZZEVCekdqMSt0ZlZpb1ZpNmRFK015MCtIMHR4Y0l2WmVBeUFmWjJZTlpqTkZtWEU5d3oxZzdmZUR2bVVPZWFEaThLOFR3M3pZUXpsN0loNWp5T2hKTDNVZTZsN0RpNUc5eWFHakNxTlBqOWZtelpzZ1d6Wm1YdU9YandrRkZtOVZqY0p6RTk0UFA1UnhqS1lacTZKblZNWHJzVzNPKzNRblM2SnFNOThxUkkveEFIa1BrMEpaWkVRdWxBc0U2WVNVSHJaazVTQUhPRk52ajhiYUVVWDh6UGdhSE9DY3ZDK2RBcnE0Q0tENkJJWHhsYTg3UFA5c0ppR1RyYjI5dFRHMGY1aVBXbHFQWTdwRmNvZUl1S2l0cU5Sc09BeldiTDBtcjVESjVQQUplWkNaVmVEMmR6TXdJZXowVFlCeCtpbVNSMVhTWDRVaVdVYVdadytxbkxCbWtuaUJQbVlxazlXR3FtMmFrT1pPRjc4S05Ib1NsN0JkejgzNGJtOXZmM1kvUG16UjdhVW4vWTBkSFJRNGU4d2ZBTGl6Y3NjZ0JYNXYwd2tLRHAxZXZYYjhoZnZQajJsU1VsWlpVbHBhVjM1ZVRscU1TMk5yZ2FqOE0vYW9jeVBZTXFVQWIxdkhtQWVRZjhyWnNuNnVUVkRtcEhUcHNLNVpJL0FibFAwbDBuZlByYWE2K0RObXdIbTVxYS91YnorVnhSbWNjZEJ1Q1hBU0R4QUFUVlVJY2JKNzZnb0VDL2JObXlSWGNzWDdGdStlbzFkOTlXa0orV3dMRk1zSW1MSE5Mb0dmai9zNUlXS0dmc21rNGllVU5CNmJJRXlvcjM2Zm11eWR2SGp6ZmorZWVmTTZoVXluZWJtNXN2eEZEZUU1VTJTYXhDSnVzUEw0dmRiaGZiMjl0dFJ3NS9kZkpVUzNQRDRJQnBKQ0NTWkpWS3hXdTFHaVZMZ1RDYVRDZzBLUkJOamRSR3ZvbWxwY3VLRTZLQklta3VsQ1d2UXJXVXBzamtlWk1iT3h6ajJMcDFLNkVwZTA5OWZYMVRXRkh2Tk5RaHNWcFdOczdYQmx4K0N5UVNmZFViUDNhczRZY0QrNnUrc2xwdDlJWGR5UWJmdWVqQmE3SldRSmxWQVVhaSt6SVVsRm9ISmpFWGJNWUtjQXQrQjFYRm42REl1by91cEpteThiNTkrN0YzNzU0MitoYTVhNHcyWGpHNDc0dVIrK04ybmhFUGNHRlJoa1VWNTh5dFhYdGYwZXJWcSs4dUw2OVlXbFJhWHBpWnFhUHFVOC83eHlkWXFFcU5HdzRtMHlBMmJIallUWXZtVzNWMWRhZGsxSEhGcUxoaVBPdkxLUlFCSTgreGtneDlKQWNISWk3dDZ1cXkxTmJXZnRmUmNlNkUwZERYYjZHOWtGcWJxdGNtWmFsVW1vUnA0L25OTjkrbUlBeTFEUTBOTlZIVThVUUY3YlRLUjFOSVBrbUtBaUdYZ0V6RXdjRkJSMnRMUytlSjF1YVdya3NYMndlTWZTN2E0K2dwdlJKNW5yOWl3L3I2Qm16Yjl1NFF4M0VmVUdxT1RVT2R3TFY4SDJMajVBNFM5U1ZBaWdGbUNoQWFGOTV6NTg2WmpoMDdkdXJDaGM2Vy9uNmp5V0t4OEJUSHpPVGtGRWFoWUdpbmVRUXZ2ZlNpU05QMFIwZU9IUGsrckt3OGFHT2xUSElqWCthWU9ESENSa2trWGpoWmZFeEtYbDVlNnZMbEswcUtpMHNmT0gvK2ZHbGQzZGYyL1B6OFBZMk5qVjhMZ2hCUjJDM2pmU3o2M1BTblJTWUdFSVVNRUNlckkxeFVzQ3RsNDZ5TXFtSllVWThzMzN1aXVrNXlxd0RFODBvMEVEWXFpM0ZSSUNLdmhYSUE4Z0NPOUVEVHBzMmIvVG85SGIwVTA5QkwvamtFWVNXRnNNUnEyTWlQQ1NBZW1NaExOeHNIakVMbUFTSkxBUEkrWDd3ZTVXOEZnT25vRlExRy9qbEVpcW96WXF4VytmOEpZTHFnWitKOEVwR2k2ZzNCRGZ6ZzhXTUF3RFQ5RlJPajN1QkdsZit4QVZ6clBqZjFNOVAvQkJnQThhczJTbDBWeGY4QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQWxDQVlBQUFBRUdXcXZBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTNacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1UUXlJRGM1TGpFMk1Ea3lOQ3dnTWpBeE55OHdOeTh4TXkwd01Ub3dOam96T1NBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvek9UUm1NR1JqTXkxbU5qYzJMVGt3TkRjdE9USXpOaTFoTVdJMlpXUTNOR1kwWm1FaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk56TTBSVEl6UVRkQk5qQTNNVEZGT1RoR01qbEJNVUV3UXpVME1FVTRNak1pSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TnpNMFJUSXpRVFpCTmpBM01URkZPVGhHTWpsQk1VRXdRelUwTUVVNE1qTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRrZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZaV1ZpTldSaFl6Z3ROR00xT1MxaE1qUTBMVGxrWVRjdFkyUTBNREl6WVRObE1qSXpJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPak01TkdZd1pHTXpMV1kyTnpZdE9UQTBOeTA1TWpNMkxXRXhZalpsWkRjMFpqUm1ZU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHFoTjhvUUFBQXJDU1VSQlZIamF6RmtMY0ZUVkdmN3VZMTkzczV0TmxpUUVJazh4R1pGR2hJQ09pS2dnVnRxaGpxOHBZMnVyanJaak96cmE2ZENScWRxUmxtSkhweDBIUk1jZ1VvMFBXc2VnREJJaEpncUJtTkNFVnhJZ3IwMnltNUI5WkxQdisrelo1ZTV5czlsTmdvL2FPM055Nys2OWU4LzMvZi8zUDg0SmhXOTJVSlBjVi9BZEg5UTMrQTJWZHAwSnZKS0ZqUEo5RVVpQWRqaGNzd29MQ3piUk5MMUVrbVNYSUlqblk3SFkrVWdrMGpNNjZuZTUzUjVmUzh0eDM1TlAvaWFvSWFKOEY4U295d1hmM053NjdacHJGbGJwOWN5dHFWbVZpemNWS0RGRlVkeVNJUFh6Z3R3WDQ0VitRcXdyR28wTWtQT2d5K1VhM0xWcjUvQ3VYWlg4dDBXTXVoendaTkRoTVArU3lhVDdiYWFIQmtNQ1lwS000aHdkOURTZCtFNlc0d1NWa0N3ckYwUlJHaUllSTJleE94S0pkUXNDUHhBSUJQbzZPODhQckY5L3B6dU5WRFp5eXRjbFFJK01CTyszV014dkVHekc1QTBYQWIybjNZOURqZ0I2L0R4RVNVR0JtY1Y5WlRZOFdtNEhUVkhab2x1VUpTVWdTY3FJSkVram9pZ1BFb0tkaEZRUDhWaVAxenZTWFZYMVZ2ZldyVnZDY1R0a0kwZE4xZm9EQXhkK1VGQmdyOUxwNkxMNGw0S3NZRWVMRzl1YTNlajB4c0RIWDVjRVMrNFphUVViYnl2QnMwc0xnSEFFa2M0TzhMMDlrRU1oc0xaOEdLNVpCUDNNRW1obGVORmpDayt1dytRY0lkNGE2dTd1ZkhiaHdyS0Q1SmFrampGazJLbUFyNjdlbDJPMzV6M0RzaGZCRHdRRlBGSFRqNDg2L0JCcDhnaExneUxucERWa21rRlVwRkY3cEFNUE5iMEgzWkZER0RuWENmQ1J4TFR4SjJtckZiYTdOOEQrOEdPZ09TN0ZuV0VvUFRtUlFkbUkwNHRGVWZnYitieWNERkhGa3lTU29NeE93UVAwelRldityVmV6OTRUbitTY0w0cWZWZmZoV0c4QUZNY21ySjBBUlYyMG9rS3p5QlhDeUpjaUtPazlDV2RqSmFaSFBhQk1WbEFHWThvc2NpaUE0WC84RlRJdm92REpwMEF4ekxpSlNheGc1ODZkQzhpbGlZeFlwaFJOVDZaN2w4dTkwbXcyUGgwSE9CUVc4UE85RGh6cjh1TVhpM094WmhhSCtSWVdOaE1ET1NvbGZoRVAzaFh1ZGp6VitpNnVETGtRemk4R1l5THp4NE02L2hMcVlqNmdqQ2JRT1diNC8vMHVZbTF0R1FGOCtPRkhPSEdpcFpGY3hwa2J5TkRGbmFTdFFmUkUwbWxwT1RtRFNHY3JUVk1GRVZIRzd3NE40dWc1UHg0cU5lSXZTKzE0Wks0UmI2OHR4aS9MckNpMG1LQVBqT0xCaHJkdzlXQTdHbTFYRWtlTG1PbnBoaEFUQ082MGNDUHBpVFp4a0h6RGlKN3JHQWRnZUhnWWxaV1ZZWmJWdmFrUzBLdUtvZFZCWlpOUUttVmVkVlZwWFBkTDRuTy9TL1JlMWVyRytnVkdQTEU0SDc2d2lCS09SdGR3Q0V2cEtHWXZ6MGRkRzQ5MXRqSzB0YllqUDlTUDJiNCtTQVlPYkk0VkNBYkliT3lsUUU5RUxVMU9Nc1J3Y0J5SUhUdGVReWdVT0hEaXhJbFRLazVHQXp4bGpXd3hRUGw4d1FjTUJ0M0Q4ZmtHUXlKZUo5bkdSblI5VTc0Tkk2SUNTb2lCTStveHpQTW90K2h3WXhHRDViYVowSm11eE9tS0VLNFN2TGk2b1JwYzZZT2cvOU1BL29QZENRaUtLSkdnTlJNSkdhRVFEOUVNQzUzTk5tYnk1dWJqT0hEZ3dBRFA4OVYrdjEvT0JEd2JnWVRsbmM0TGl5d1c3Z1VpMjhUOUJtY0lqVU1Sc01UbEw1Nk5vS2dyakhKT3daMGtCaXJtRnNMcmk2RExHMEdiTzRKZXB4L3JGOCtFNTJRWFFpV2xCRndSNkJ2WEl2K0dsWWdkL1FKc05JalE2Wk9RTGppaEVQSjB2aDM2dWZOU0FJTEJJTFp0Mnk2WlRJWjlYM3hSMzVlVzk5UHJ3UmdDQ1laVlZlK2I4dkx5dHBCME5qTjVvOUVWaHNSTGtFaldHVklZREpHa2Z6b2lZWjgzaklJelBaZ2ZIY0dHNitlUyt6bUk1VlBnaVpYTHkrYUFQL1lsUWtQOTBKZVd3VFd0QkFVLytTbGNnZzV6N25CaStPbEhJWS82a1hQVExkQmZNVHNGNHVEQldqUTJOcDd4ZXQyZmFsS21xSTVrSFpBelpxSHJybHZDckZ2MzQ0MEdBN3NtK1YyTUJPK0ZJSjlJbHduM2tEODBRMEhXcy9DWWJFUkNGRlljMzR2WWk4K2g1NS92WVpuek5IU2ZmQUNuWDRTd1lCRnk3RllNTnphaFNLZkE5K0tmRWVydGd6TFVCem5nQjJQSlErNlA3aVpucXhxNGJtemZ2aTA0ZlhyaHY1eE9aeUJlTDhuZzFTR2tFWUMya0NXdzFkVFUvcERqREw4aXVrOFJZd2hpbzQ2K1ZDbzFQMUJrRVJZcGpJWTVGWmdXSGNWZDV6N0RqTVBiUWNzU3ZIVTFRR2twVEdlYTRLcTRDN081WEV4NzVERk1KeGk4ejc1RTJqNGUxbnZXdzd6aTV0UTdYMzExQjBoSGU2Uyt2cTVSQXp5bUlTQnFpdGdZQ1NYa2s1UEQvWUZJeHo0bVNBaUJGU1Ztdk1vU3F4UFp3TVJjU2lJaUJhdm5BdTd2ck1HQXBSQXNJNkhBUkVGZ1RNajFka0Q2L0NRVVJvZUN3OVhvRGc1aWRqNEw4ZFFKOEgyOTRDcXVoLzNSeDBrcXZWamNXbHRQWXMrZTk0YzVqbnRQWS9uWUJBVEdwTXo0WUVqdjRTWTUzNW9lNlFHaS84MkhYWGlseVkxUVRMNzRPSEZLQVpISERSakc0OVdiY1pQaktKRlVIa0k2MGhZa1MzT2lQYUtnRXlMZ2d5U081RVI1aFc3K0Fzelk4aks0OHV1Uy9RL3V2ZmMrQ0VKczI5NjllNnZKVjZUblFMeUppK2ZYa0hvZFRaUFJPQS9RSFIxbnR6SU04L1NzV2JQeWpFWjlpb0JGeitDNWxUTnc2endydmlJQkhSWVVsSkNXZWZGTUsrWU5ra1p0andjOXRCVzBnYVJIV1I3VG5aRldHcnlPVkdLckR0VElDRXpYTGtYaE0zK0NxZnphMVB0Mzc5Nk4vbjVIYTJkbjUyY1RXSDljQUNPdExETTFOVFV0cExCODJkL2Y1eE1FWWJyWmJMRVpqWWFVbE9iYkRGaFprb05iWjF0UVVjeWh4TXpBUEMwUC9JQUxvYThhQ0FFOUtKYTU5UHE0RndnaGFYUTAwY0FaMTkwTjAxUFB3TGJ3NmhSNGg2TVBHemR1ak5ydDlsZEkwWEtvbG82b0k2cXh2S2dKWG1RaVFIczhIcXF1cnM1VFcxdmIydHJhY29oOGRnUUNRYXZKWkxhYnpSeERxNHVVTWRXRWRKNkdSZVVrcTR5U251WU1sRWlFRkNzeGtlTkJScnlCTTErL0VrVy8veVBzR3g2QXFhaHdUT3A3L3ZrWDRQTjU5cEo1UHlYcmdtZ0dBbnltNEIzWE5xaGs5R3JURk8vK3VQZzVOemMzWiszYU81YXNXYk42M2JKbHk1Zk1uVHNuejJ3MjAwa3lxWU1JUE5UY2hIRGpZZExmZUVIcGpkRE5tZ051NlRJWTVzM0wyRzN1MzM4QW16ZS8wT2Z4dUo5dmEydnJWYlVlVXJVZlZrbkVWQS9JRXhHZ1ZBS3NTaUxaL1JrMTEvcFZxMWJOdWYzMk8xWlhWQ3k5c2JTMDdBcXlzRGNhRFBxdnRadEEwaVUyYkhoQUl0YmZUcXovc1FvMnBCbFpBemRkUXVtcW9ES1U3MFJGN09ucDhSMDgrRmtMS2ZGMVhxOXZnRWhNSVZrbWg2USt6bUF3WEJhQnlzbzM4Zm5udFUwdWw3TnFoS3hWTTBnbmxsWjlNeTdzbVVrMnBhUzBjcDY0SmhOR2poMDdldjZUVHo2dWQ3bGNIVU5EZy81b05NYVpURnlleFpJektmanU3aDVzMnJRcFNBTDN0YWFtcG00VnJEWm9Kd3pjcVJBWVovMU1RNVpsc2IyOXpVbXlWNVBENFdqcDZ1cnFjYnM5akY1dktMSmFyVFREWkg3OWxpMWJjZWJNcWYxSGpoejVXQTNTU05vUUpncmNxUkxRNWx3cG16ZTA4anA2dEtIOTFLbFRYNTA5MjNHOHI4L0Jrd3c2M1dyTk5TWlRjZng0L2ZVMzhNNDdienVJOVA0K05EVGtUNU9PTm1qRnFXeDBVVlBZUHFRMVFaN01Wc21BWjlWbDNyaVJtMnZqeXNwS2kyKzdiZlV0RlJYTFYrdjF1cEw5Ky9lVHpMTnZvTGk0ZUZ0OWZYMnpDamFzQ2Rwd0JnTEtOOW1ab3pLa1d6b0xrYXhrMGxaVVVMMG1hS3l2QmM5bjZubXlIWlB0U21oM3d5aU50SkxiRzdRNjJXUmVZVFhyV1MwQlBvTnNwTWtDOTl2ZW5kWjZoTlpZVzVkR1NPc0JXUVdicVdXZU1HMStHd1N5RWFIU2lEQWFNdHJkQkcyS0ZsWFFRb1lWRjc1ckFwa3FPcklFUFoyMk1FOVAwV0phMWxQKzF3UW1raGVWdnBlVFZtZmtUSXYxNzR0QU5xOVFHYlpGc20yajQvK0Z3T1hNOGJYLzVmUmZBUVlBM0NFLzFPZjJHS01BQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzhBQUFBbENBWUFBQURTdkxES0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBM1pwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOaTFqTVRReUlEYzVMakUyTURreU5Dd2dNakF4Tnk4d055OHhNeTB3TVRvd05qb3pPU0FnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG96T1RSbU1HUmpNeTFtTmpjMkxUa3dORGN0T1RJek5pMWhNV0kyWldRM05HWTBabUVpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2TkRRM01rSTVRekZCTmpBM01URkZPVGt6T1VSRU1FRTFORGMzTURVeVJEZ2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZORFEzTWtJNVF6QkJOakEzTVRGRk9Ua3pPVVJFTUVFMU5EYzNNRFV5UkRnaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVGtnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNlpXVmlOV1JoWXpndE5HTTFPUzFoTWpRMExUbGtZVGN0WTJRME1ESXpZVE5sTWpJeklpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSjRiWEF1Wkdsa09qTTVOR1l3WkdNekxXWTJOell0T1RBME55MDVNak0yTFdFeFlqWmxaRGMwWmpSbVlTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9Qa0pGMmhvQUFBdWpTVVJCVkhqYXhGa0xVRlRuR1QzN1hwWTN5MHRBaktEZ0N4UkZSRkNER3BzMEU0MUpPelZOMVRUTjA4WW1hV01tYVdxVnhLU2tOcU8xazZteG1VUk1nNGxpekdORWtTaEtCQkVWRVJWUUhzdDdZVUZnZWV4Nzc5NSs5KzV1Y2wwQk1USE5uZmxuOSs1OW5mUDk1enZmZC84VjRZZHRvbHNjWi9FamJxSWZjSTN3VXpRQ2FIWUVFdXhQQVo0SFdsVmRFOVJ1OFA1VGZLUjZVYWkvdk50cVorck1Gbk85MldSczd1M3IxWFhwdXZYRnhVWDZMVnN5VFM2Z3JBZVJPMEpLZEx2QUN3c0xWZGNHeHYyenBzMzZ4S2JWVStHcmxNSHVjRDVYQk5iZ1lObE94dTdRTWc1N0syTzNOVnV0bGlZYTJzSEJvYzZtcHNiT2RldWU3bWx2YjNQY0JpbjJUb0VYbjc2c1hiLzFrNnZiTXRkTUVNK2NFZ01MUTNlM094OGhGdE1IZlRvY3ppZUt2c1BTenpDTWpvN3BIQTZtdzJhek5kcnQ5aWF6MmRTdTErdmJ5c3BPYTU5OTlxbCtEMExzQ0lUWTJ3WFBBNitxYlVuUHltM0pmU0QxcnRCVnMwcWdiL29jck44U0tLT2VnRkl1aG9qQU94am5CV0lKZlNkU1ZydVQwQTAzRTNFRVdTc2RHV0JaVmsrRWFEaGFpVlFEa1dvMm1Rd2FyYmE5YWNHQ1ZBMmQ3cDZsbTJaTE5HYWQxOVJHNVpZYTlwanRiTWFXM3lXaHRhMEZ1aE16RUQ5dE1RSlR2a1JUaHdFYlA2aEFmTFEvVnQ4VGcrYXVJY1NHK3lJcVJNV1Rjai9KVGVnbVcyTGRuNnhaSkdJTnRHK3lXSXlIZzRKOFg2S2ZHZGR3Q0VtSXh3SThNek5UWHRVaGZ2RmEyMURHdWhWeGtGSlVkeDYxb0x3bkhZRXpYOExWVmhNZWVlTWJYTmIwWWQ3VVlHemNYWUhIczA2anE5OE1nOFdPSTJWYXZQZGxMZmFmYUlaR08vVHR6RXZwNlFvNURSa2drVGhuUkN3V0tVVWlzVnFwRkVkWnJlYW42RFFGRFRsM09qZWhyc0hqa280bDhnK3VlbnI1VzUvVVBmZk1pc21JRHZOR2k4NkFJMmVxa2ZYd0tsenFTTUNqcnhjaTJFK0dmWnNXSWp1L0FZZE90MkhYSDFNSklvdVZmejJCUzQxNkxxTFFEOWx3Lzl3SVpMOUtwUDNrTUZQQ2FOcU1JS0FJOUZGQUxwSHlNK0FrQVpTVUZITWd2V2hZQkhoc0x2Q3M5RlpSUDF0UkcvUEIwWmFzK2RPRDVmZk1HY2NmMkh1OGlhSlBZR1R6OGZMbVlzUkgrU0JuNDBMc1BkYUl0M0t1WU12anN6QTdYbzBIWGowT3BVS0M5MTZjQjRsWWhBUGZ0T0RYaSsvaWdmY09XUEQzVDZwdzhGUUx2T1FTdlBhYkJLeWlZemFDSnFkWXQ3UzBZdi8rZlgwdThDS0I3dDJ5Z1hRMDRMdDI3VkplYkhXOE0yQmtZdGMvTklVLzBOVnJ3ZUV6N1FSR2dTMGYxeUo5aGhydmIwakZZWkxHK2gxblNlOFRzZUdSYVhoanp5Vm9Pb2Z3ODVRSVpNd0tRNUNmQXN0VHgwTk1UMnpyTnVMbG5lZHhpTzZqVWtoaE5OdHA1aFI4YnZCSjcyQ3g1Nk9QMks2dXpqeVhiQmhYeE8ydTRUU0ZVU0l2VHBpLy9JV0RwOXBXYkg0c0VYS1o4OVJQQ3h0UjFhUW43UTdpb1FXUitQQ1ZORnlvN2NOaldTVllQRHNjMjU1TEp2MktNREhjQjhIK0NwVFg5ZUtkZmRVd1d4MDg4R3E2OXZHM1MzQ3lVb2Q3a3lOaHM3TllsaHlCOU1SUTNtS2xwUC95OGdzb09KcFBWbW81UUkrVXVZSXM4YXptNHBGc3NiRlZsN0h0czlvTnp5eVBRMHlFRDFqaWJqRGFjZlphRDYvSnpiOU54RnRQSnFHK2JSQ1BFWmdKQkhiSCtya0k4Slh6Ti9uVmtnbjRHWUc2cnJmd1pKVkUvbXpOZGF6NVd3a3UwLzcyZGNudzhaTEF4akM0bC9MQWkrVEYyYXpkWnNmMjdkdHNhblhRWjZXbHBiMkNCTDFwa3c0bmw0YUdoc2dQOHR1enBrWDdCNjFJajRMRjdEd2lKdlBldERZUkx6dzhCYlBqZ2pCSVpOWnRMK09uZmZjcjZjZy8xNDZzbk10WTkyQWNhVjJLYnIwWjNrb3BmckVvR2ljdmRtTDl2ODd5U1hvZzgyNUtVRG4rOE81NUpFMVNJMjFHTUs5aUx1bzVPYmxvYk5SVVZGZFhuZlNvdko1RjZ3YndQUEE1YytaSXFqb2tyMlVYYUpLM1Bac01raDhVcERxV3B0VE9pQkFYNmN1ZmFhY29pV2tLTnF5YWp0QkFCUTh5TzErREs0MTlPSEZSeDdzTDF6QzgvTWgwM2tHZWZPY011dnJNbUJMdGg1TExYYWhwN2ljcE1WZzZKNXdjekljSG9OTjFZK2ZPZncvNSsvdm5EQXdNV2x4YWQrdWM4U2hVdkk1dWtFdGhTZVhhekQxVmYyN3JNY291MVBmaC9OVmVxaFoyZUt0a1VIbUpJZU8wTDNLU2tWQjJ4VWY3WWx5UUYveFZDcVJNVVNNODBJdTN2ZVNwYXF4ZkdZK09IaE5lejY0ay9Tc1JOOTRQV3RvL2Rha0w5ZVQza1dvdlBFK3p5Tmt2dDIzYXRCa0d3K0FYUjQ3a0gzZlpvMWt3TElLa2RRZ2p6MGU5dnJralpjY1htbGN2MXZkNWNlNWdNTnR3NUd3NzhzcmFFQm1zUXRyMEVDeE5Dc2VNbUFDRUUyQS9ieGwvc2QzbW5JazVjV29rRXdIM3hqblQ1MlNGQ3hQRHNIRk5Ba1hkSDJlcXU3SDlRQTJLS2ZvSk1lSDhOZHhXOUUweFRwMHFva2JPK3BVTHBOVTFoS0Fab1h5RVBiazRyN1RsNE5xM3kxYlk3SGFFQlNqSkRzWDhBUVpjcldaZ010TTNDbmtzU1dkSjBqZ2tUUTVDWW13QVlpTjhJWk02Yzk5R2oyTWN6bkxQVldJWjVhL1Z5cEpiaWI1TnUwZTNGT05RYVN2ZWZUNEZhKytMQlVrRXExZXZacWpIMlpxWGwxZEVweGhwR0FURDZDSmhGUklRUmw0Y0hhTG9lZUxlaVNpNTZyUkNtODBDWHk4cGxXOHhyMmtGQVRUYkdJd1A4VUV6ZWZpSmlnNm82UGNGQ1dHWVJJUzR4SnNVNlFlWjY2WmNvbk5rcEdTZFpvdXpjakxFakV2b1piUEhrUnRGOHVkbFozK0UzdDZlMHVycTZqSkJ4SzBDd0tOcW5nZS9kR0ZLNWRRd1c4L2NXR1Y0WWx4NGlFVHVCVjJmQlgyRFpqNEJ4Ukl4U1NjVUUwaWpVcWtJUmd0SFJBVk54eERxMmdkUlJJbGFWTmtKRTNtNm10ekVuMW9Hcm1jaE4veDJOcmdhRUJQcGpTUnlLeCtWRkxXMTE3QjE2ejk2VENiamZ6UWFUYnRMM3liWEdGYnI3azFvL0pMOXVibm0vK2JrVkhqTDdLY21CRG5xNThlclZIY25SWVdIcUFNbDJqNHJqQ1liN3paQjVPVWNxUkNTVm1pUWtuY2QvYUNWYTZvUVJnbDdwS3dkWDUxdVJXV0Rub3FRQXhIQjNwVHdsT3hTWjYvUHRRQmM3MktqYVhuenpTeFFYLzlGVVZGUklkZFJEZ1BlNmdMdjhMUktJWGgzeHlhcHFMeGtPcFIzdVA3U3hmSml4dEJSUG0reWlsMjVZRUxvcE9oUVpXV1RRWFNsZVFCeWtsQUVKVEhuNVFORGRweW1SSnd4TVFBREJoc21FMEhPL282YzFmSVZkZStKSnRTMkRGQXJJQ0Z5U3NpcDkrZkFIenQrQXRtN1A2d2RHT2ovVUt2VjZrZUl1bWVpM3ZRbUpYWVJrYnJhVDZXckllS0dVaUtSS05QU1VxTit1WExGc21tSktVczZ6T3FJa3pVR3I4cUdmcjdZK0pDRm1zaVpPUDFQcEI1K1Ztd2dyalQxVS9HeVViNkkwRHRvbzFub2c0bnlaUkpWNjR5a0tDeWZHNERNdjd4Z3FhdHIySEh1M0xuakxzQzNURkpQMldDRVZRQjNKMGV6eVRMVTVRM21GeHk3VkZDUS8zVmtBTk4yMyt3ZythTEVNSlZVNXFXcTd6U2prMlRGU1VsTk90ZjJHSW1RREdWWHJ5UEFXNEhaNUVxY3gvdFNyVGhGRnRuWVRjN1ZlQXpsWjA2ZU9WOSs0V082ditWMm8rNlpzSjV2VnU0TDNGbk92ODBZREFaTHlla3ptcjJmN2l1VTJQdHJVbUxsZzh1U1FsUlRKb1lFaXFVS1hHNDI4RkVQSVJJUlZBdFU1RlltaTRPdkUrZXZYWWUyajhIdmwvbWo4TUNPWHBGVThXNVRVMU9YQUxpd0tObUhTOUxSd0hzdVF6QWV3eTdjdjN5bHF2UHpyL0xPYTFzMTV5Y0UyZHRUWWhXaVJUTWoxT0doZ2JLR1Rpc3VhdlM0V045RGIwd2l5Z3NyY290YXNPYitCUFNVdjAvV2FUbDR0T0RyazRKS09xWWtIV24xNElhQ0pVeGdRVDVJWEMycVRKQWY3bjFaYkd4TTROS01oZE9UazVNWGhOODFNNzNiRmhoY1dtZEJXVTAzZEwxVzNKTWFoNW55VXVUdTJkYlFxdTErUmFmVDlYa1VKS09MZ0VVUWRjZnRMSDE0a2hDNVFIc1NrUXFCQzRlZm41OHFQVzFlMU1LMHRQUnBNK2NzWmxUajQ3VTlWblRWbGVEd3dkM1hnMFBHYlQxYVVGRGhBaW9FYjdwVmtvNTEzY1p6T1U5SVJEaGtveEZKVEpnZW5KRnhkMnFuVnB0ZVZWVmxVdmtHSENKM3FSSEl4U2dZWmtGRmRkeHFCZTEyMW0xRXc5V0VzYzZHWVBiY3VXVDEwTHJKb3hWZzd4VDQwV1pETEFBbUhXRTJwSUtsQy9lTHRNMmo3WFVuS1RPV3FIL2ZWZUxoU0lnOFNBaG5RaW9nNVg3dGRMZ2liQldBdGdtY2pMMGRFSGRpcFhtMEJKZDR0Q0lPajdla1lidkcvd2Y0VzBsSzdMSFM1VmtBYjFyRyt6SC9YUGcrQ2U0NWhDL1R3eTEzLzZUZ1Ivc1haYXovbnZ6azRHLzF2Qi8wOTg3L0JCZ0EwUEdiOUp2VlNGNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDOEFBQUFrQ0FZQUFBQVo0R052QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUEzWnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVFF5SURjNUxqRTJNRGt5TkN3Z01qQXhOeTh3Tnk4eE15MHdNVG93Tmpvek9TQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Y0UxTk9rOXlhV2RwYm1Gc1JHOWpkVzFsYm5SSlJEMGllRzF3TG1ScFpEb3pPVFJtTUdSak15MW1OamMyTFRrd05EY3RPVEl6TmkxaE1XSTJaV1EzTkdZMFptRWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZOMFEwUmpGQk5VTkJOakEzTVRGRk9VRkVRakk0TnpsR09VSkJSVEUwTWpjaUlIaHRjRTFOT2tsdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk4wUTBSakZCTlVKQk5qQTNNVEZGT1VGRVFqSTROemxHT1VKQlJURTBNamNpSUhodGNEcERjbVZoZEc5eVZHOXZiRDBpUVdSdlltVWdVR2h2ZEc5emFHOXdJRU5ESURJd01Ua2dLRmRwYm1SdmQzTXBJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2WldWaU5XUmhZemd0TkdNMU9TMWhNalEwTFRsa1lUY3RZMlEwTURJellUTmxNakl6SWlCemRGSmxaanBrYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2pNNU5HWXdaR016TFdZMk56WXRPVEEwTnkwNU1qTTJMV0V4WWpabFpEYzBaalJtWVNJdlBpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNGdQQzl5WkdZNlVrUkdQaUE4TDNnNmVHMXdiV1YwWVQ0Z1BEOTRjR0ZqYTJWMElHVnVaRDBpY2lJL1BsUyt6czhBQUFzMVNVUkJWSGpheEZrSmNCUmxGdjY2NXo0eW1TUk1MbkloQVZrNUlnbm5nb1VjcmdXbHEydWhlNk40MUtLZ2hhNkZDQzY3SzU3QW9xS1VLS2kxcXhheXNGSXFGSkNFYXdOQk1CZ2dMQVJ5a1RCSkpzY2trN2w3ZXFaN1gzZG0ySFpNU0ZSd3UzalZUWGZQLzMvZmU5OTc3Lzg3REw3L3dRemlIUkhYOFdCK3dHOFloU252aXdPY3J4a3A1bnU4ejlqdExWbHBhYWxydXJxQ3QyZzBiRnRDZ3FhVzUvbTZRQ0JRNy9WNkc5cmIyeDJuVHAzcWVPU1JSM3JvZlVFQldMeVdwSmp2Q256Ly9vUEdHVE51K2VqMG1mYTdscThvZ1RWUmoxR2piTWpOc1NJNzI4Sm5aSmk2MDlKTWppU3J2b01JMmNQaGNCM0hjWmVKbUwybHBhVjU2OVp0clJzMnZCNjhGcVMrSzNpV2dLenlCNFJWRHp5MEU3dDJYWUFsUVErR25taTFLcGhNV2xpdGV0aHNKaUtTaUx4Y0syNFlaa1Z1YnBKL2FKYlpsVHJFMUtOU29aTUlYU0ppOVRSV1U0K3JwNjZ1dnZIeXdvVUxISzJ0TFVLVVZEeVp2c2dOR3J3TXZMdmJQVmVuTjN6OC9PcERsamZlUElhMFZETllsa0VrSWtaTlFFUVFJUXE5Y3pFTUs1TXltM3RKWmFZbklDYzNFZm5EazVHZm54TEp6ckVFTTlMTVBvdEY2eFlFb1kxSTFVdWtnc0ZnbmRQcHFuNzg4Y1huOXU4djVhT0FoWGdpekdEbFVsdmJrSk9ibS9PNXZkazc5cG5sKzNDK3VnTWVkeEJCVG9Bb2lqSUpsWW9sNi8ySkZBMjZEWUdJU0NhOTAwdE1laXlDY29XaXBvTXQxWVE4a3R4d0lqUnk1QkFNSDVZY1NVODNoNU9Takx6ZjczNHJMUzNsUmZwRkpHcmZpQXd6R09EcjFxM1hMVnEwK0IyVlN2dDdDUlRMQ3VqbzhLUDZRaWZPbm0zRG1hbzIxRGQwd2VuMG82c3JnSEJZQWlvUUFRWnFGWm1hbFluRkNNbXhKeGJrYmZsZG51KzlabGlLbElhQjNxREJwbzMzd1Rha1BUUitmR0VtdlI0bTQ2UG5Ld1RVZy9IOHd3OHZla2l0MXN5WEp1NDFGcG1aWnRUVWRLS3h5WVZYWHJxTlpLSER3WU1ONk80SjR2UXBCODZkNjRDenU1ZE1aNmNmb1ZDSXdBRWFkYStVSkVKcXRab00wT3RwRWthS0RvTzJOZy9HakJtS0NSUFM4TnlLNTZVNEdzZzRCUjQrZHFFZVNPZk56WTdKT3AzdUdScllFSHNnU1lQbkkzaDNTd1VjRGkvY25pQzJiNitDU3EyaVpEVmp5dFJzdlBqQ2JKU1hYMGIxeFU2NDNSeXF6amdvT3Qxd0VEaW5NNEJnTUV3UmxCSmREWjFPTFJNS0JFSWd1V0ROeXovSHNmTFBjYW5Sdmo4S0hncmRSd2J5dkN5WHNyS2pLVWxKS1M4UWg2d3JENWhlOEovdXZJQUdBclAwaWFuWTlNNVgwQk1Jam92Z3JZM0g4ZVNUVTdIeDdSTTRjcVFSUFJTSlg5dzlHbSsrTVE5ZUx3OTdpeHNYaU5EWEoxdHdnV1JYZjZrYjdlMCtkTHVJRUlGZnRtd09WU2NPSzFkdWNZWER3bGFhVXFlUURSczFwai9QeThDWExIbGNVMUJRdUpSaDFET1ZEN1Zhd0c1M1k4T0dZMkJKeHdjT1hjSnRzMjhnajNyeDBjZW44ZWRWTTNIMGFDUDJINmlYNWZSMXBRTStQdzhqbGRIYSttNTgrT0VwakJtZGhyK3NtZ1d2ajZQSStkQkFCQ3BQdFpLOGdsaThhQ0kyYlZwTDBUQitVVnE2cTBZS2ROVFl3UlFZNlFWVlY1Zjc3Z0FuK29OaFVRenlvaGdJaUNJWHBHdTZzZVNKM1NKVXE4UUhIOTRwMXRWM2llOXVyaEFMeG04VVMwcnF4SlpXajVoc2UwV2M4N08vaXlFdUlrb0hlVkI4NzcyVDR0aHhiNG9xN1NweDJmSmlNZjRnR1lwK2YxZzhkdXlvT0czYTlKb3BVNmI4bG5CTUk3dVpiQVJaQnBrMUtpUEo2VklLZmR2ckRRMU5lUWF6YVEzdktEYjRLeDRGMzdxWFNweWJ5bHNFWDU5eDRlRGhacno2OHUzNDI3cTUyTG56UE5hL1ZvN1gxcy9GbkRrM3dHTFJZZXpZVkp5cmJwZkxLUUhIOGhYRktDbXRoZEdvUVVGQkJwWXNuaVJQRmdpQXRFL1p5RUd1UnVHd2o3eStoVTlNVFBqOHl5Ky9iRlBVOUcrVnlYalp5TURYcmwydnMyVmtySWtFbWtZRXFwNUdwTHNLWE9NV3FNd2p3YVhkamhIV1dkaTdjeGF5OG5Ldzk0QVRYK3k1ak5kZnV4UGx4eTdMY3NyUFQ0WkFnRytiblE5L0lBeUtnRXhtL3Z3eFdQclVIcXorNnl4a1p5WEtvQm1GQ0tUcnp6NzdBdlgxZFJVblQxWWNqQUtPYWIydk92L05GZUlISC96RGNNODk4eC9UNnZoWGZSV1BNYUdtajhIcVNPUmloUDVGNUtGWURaVzI1TEVRcmJQQkdhZkRsRkVJblNVWFR6OXpIQ1VsdFRBYkJmemtSZ3RHM3pRRXUvZldvTDNWaXdtVHMrVHltVWZkZGZzL2YwVmVWbEhwL0I5NERZM1oybXJIZ2dYM3UramVDd2NPSERoRHQvMWtQakp2OUJ5SWxrdytSa0lKbm5YMStQNmdNeGhXY3pWdkpQdS9laElNNFdhb0UxSm05dll6NlMyQko4K0tzaDgwVkFmVWlXUEJKazJITVdNbWFqcEdRalRrZ1F1YnNHYnRRZHcxTDRzaWtJZGYvdVlUdVd6dUwxbUlxVk95WmJuRWdFdG5IWTN6N0xNcmNmcDA1WTQ5ZS9hOEZ3WHFWd0NYcnFYRlhLaS9Vc25vOVlhbGFqV1RITEdNZ25ia1FrUTZqeURpcVNITTFQMDBVaHBySkRheTk2R1J1bWdZZkdjVnhEWkpXdTlnZUhvaFdIMFJQT3dVdlBYU0ZLUmtqcEpuR1pZL0RCTW41c25BSlgzSGdFc05UMnBReDQrZndONjllNXBDSWU3VHFHZERVUzl6MFd0ZUNUcGVObExpcWh5T3p0V1UrQThtMjRiWXFHZUFjLzBIUWNjUlN0alBpRWdweEJDTkllR1hTRndKV0crL0Z5a2lZcmozdnhxOUR2ckVFUWdieHBDOFpzQ3RJaUxaTjBOdkpBUmhXWVh5R2tjcXV3STU0TDc3NW92VXdkZnMyTEhqb0VJdVBvWFhPWVhYcjRCWEtYWkRWQjZkRmQzZFhVZGJXNXA1TU9wTWkyMlUyWncrQWJxaGM2R3l6U092MmlBRzJ5RUVPK1RacFpZZUsxZ01veUpTWk5UMkJTTENlZHNSN2prTGdVaGIrV0tJcmtQZ1BCMFVOUXVGZUlnOG81WjhzSG56WnZMODhmTERodzl2cFZWbElDcVBZRlE2TWFtRTQ0SEhiK1VrQ1dtbGpwYVptV2twS2lyS3ZmWFdtZk1tVEp4NDUwMmp4NDlJVGpLcEpOZUcvRTd3N2FYZ21yWWgzUGx2R3RaTitFWEl2WjZKN3lQU3NqTFN1MFNXcG1TMVJDNEJyTFVJUXlhdFExMUhLaFl1bU8vVzYvVXJTMHRMTC9UaGRXV1NmZ3U4S282QTNNazhIZzl6OGVMRlFISHh2blBGKy9hVnREUTMxdmg5ZnIxT1owbzBXOU4xUnR2TmpDN3YxOUNtenlPcVZnaWNpNmFnM0JJNGViVW9henBHaE00TUswVkZXbFhTZWovb2c4NlFETzJOajJMbGM2K0NaY0xiU2twS3lpS1JpTkxqU3EvemZXeFFyb0JYUm9DTkk4TVFrWEJGUmNWbFNZOTJlOU1wbjljVG9QQW1HSFI2a3lsbG1NcVlNUnU2bkFmQVdHNmtrZW5uSVI5RW5yYXVrZDc4a3BhNVY0WWpmVE5xQTJ3enRtRDNZVGUyZjdMbEl1MTMzNmZ0WVU4ZndMbis1QklQUG41and2U3hrb3RVVjFkMzdONjlxNkt5c3ZLbzArbHM4M205dEx4Ulc4eUpTVHFUclFER25IdkJwczZtM01pQkpER1JJaUtHQWxKV3lvRVFhTGVWTlBKK2VGTVc0MDhyL3NocFZNejdSOHZMejBXQktvRUhveDVYZWgzOWdXZjYrZVlTVVlLUFdXdHJxNmVzck94OFNVbHhtYk9yczdhN3l4a0loWGl6MFdpMkpDVG5RcDgySGVxaGQ1TzJKMUJsVFNZZVhvaStEcWhNbVVpY3ZoVnZiOTZHMDVVbnlxcXFxdjdsOS9zRC9YaWR2NXJYKy9JMm8xaDJ4bFp6YW9WcEZJbXRVZG9kZDl3eG9yQ3dhTkxrU1pPbWp4azNibXhtVmhiVU5KclV6NExkNXhGeGxDTEJsb2NhVHlFZStOMjluVWFENFhucXBPZWpnR09kMUIrMTBHREFxNjd5cFV1SXM0aGlHeFpXNkZFMlNuQW5sYnV6SkswVEY2cXJxenJiT3hpTlJwTmhzYVNvelpZMDZHMlQwZWJQd0xLbmxnZ2VkODhPaXR5aHFJZVZYdWNHU3RMQmZQcGc0aXcrR3FxQm9wR2VucEZRVkZTWS9kT3AwK2FNS3lpWVliZmJVN2Z2MkJIMmVucDJFOUVQWEM2WFQ3RU1VQzRCdUxpOTZ2Zis2TVJjUlZMc1lFaEVUYm1oaUVVdXBQQzRmNkNhM3RjeDBBWTgvcXVWc3ZyRXdJZWpaejU2RHNVUlVTc0lNSXBDRUZKVUZxNi85Y3YxL05ES0twdmJWU1NsVnJ3VEE2OWNnSVVVeTREckN2NXFrbUxpOGtLbEFLNzB2S0Fnd01jVmdFRUIvNkhnQjVQZ3l2eGc0NXBmSk02RXF6V2s2d2wrb0dqRXdDc1BJUTZ3OEYwL2MxOXI4SDJSUUI5L2hCandDL0QvRS95UDh1ZWYvd293QUdxNnVHdVh0WWVMQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBS0lBQUFBcENBWUFBQUMyaGZJQUFBQVBKa2xFUVZSNG5PMWNEVXhVVnhhK2IzZzhodDhCQm9ZQlJqcUtVbG5SZ2lMNGc0TEtwaHBzb0RhMnpYWmJ0Y21taWQyMWRtTlMyMnhiekNZYm02YlJYWmVhYmNpQzJZMWhXLzlhRSt6dXBpcisxQjlBQjFiRlF2bi9HNEdSR2NBWlp0N012TTBaNzhQTGZXL1F5cUFWNTB0ZTVyMTd6ejMzM1B2T08rZWVjOThiNUljZmZ2amhCd1l6RlJQUjJOaW9aMW5XcVZLcCt0VnF0VjFDNE1kVEQwRVE3aWtody9oZUViLzQ0b3QzaW91TDkrYm41NThKQ1FteEJnUUVqSzVkdS9aUVFFQ0FlMmhvS0U2aFVMZ1loaEhjYnJjQ054R2dESzRaaG5IRE9RaUp5eGo0WlZuVzRYYTdBNkFlRHFERjlXaG9hRWhWVTFPei9JMDNYdCs3ZUhGV2pVUWdQMzZXb0JXUjlhV1F1M2Z2L3VOWFgzMzFhblIwTlByKysrOVhhalFhMU56Y2pDb3JLNHRBYVpLU2tzd09oNE56dVZ3S2p1TTh5dWQwT2dONW5tZEJHQkJPUElCZW9WQjR6aDBPQjJKWkZybGNMazg1bkl0MWdCczNiaUJqMzBBOFFtak45YXBEVzZvdk5xMklpOU8wS0lJZHRnNHI2MkFDbzRaVTRVRTJnYmZIaENvNWwwb1YxUjBmSDErZlBIdDJoMlFRZmp3VytGUVJnVjlCUWNFM2RyczlzcVNrNU0wN2QrNmcyTmhZRkJ3Y2pNTER3eDJ2dlBKS2FVdExTNDdOWmxNcGxVcEhjSER3VUdCZ0lHK3oyWko0bm85M3VWeEJMcGVMRFFnSThDZ2ZLUFR0MjdlUnlXUkNnWUdCbmljSGZpTWpJeEhQOHg2bGpJdUxjNTQ0OFMzYjIzc3JDUVJJMUhGUnJobTFXMXhYTHFEYVM5M29hQk55Tk4xR2pDcGVMVHd6ZjhsUTRxeVpJNXBZVFZkb2NOaXRMLy8xNVdYOVRQM3ByS3lzeTVLUitQRkk0Vk5GM0xScDB5ZTdkKy8rdTlsczFpY2xKYmtVQ2tVQXgzSEk2WFNDQWdtWExsMWFaN1ZhUXhVS2hYdDRlRmdEVmpra0pNVE9jUndMVmxJUUJCYVVDdzZ3ZGthakVZMk9qbnJhaXdBbDdlL3Y5MWhIVU15R2hnWTJJRUNCMGhZczZEbjFueTlWenY3cTBZUlplcmZaK0tOaXptd0diWnlsRmRvY2dYZDRMc2FtbWJ1a2RtYmFjOS9GcXFOdmhvV0d0VVdyb3h1cmE2clRKQVB4NDVIRHA0cW9WQ3J2SkNjbi94QVVGUFREZ2dVTGtrWkdSdFJnRmF1cXFrQ2hGSXNYTCs2R2RSL1A4N0EyZFhJY1orTTR6dEhUMC9Oc1ltSmlPOE13NFM2WEs5SHRkc2NpaEtJRVFXQkVseTBxSGlncFdFczRCMHRiWDErUERJWTZWUGppUzlkWk51aE9SNXZWZGZHaXFpSTQ3RldUZG9PdWRvNTZUdFBjRUpXWlUvQThjdkdLRUdXd1dhRlFPQ05VRVpaNGJUejQ5djlKQnVMSGs2MklaOCtlM2JCLy8vNmRIM3p3d1h1aG9hRnFxOVdLNnVycVVFaElDTXJMeStNVEVoS0dtNXViby9yNitqUzV1YmtWUVVGQjF0YlcxalNYeStYV2FyWDFQTStIMmUxMm85dnRqbk02bmRtQ0lJU0ZoNGQ3M0RFb0h5Z2hRRndyaG9hR2V0eTJ3MkZIVFRkdjZCazJIRXpuMy9EaHh4TUVueWhpZDNlM3JxZW5SM2Z4NHNXNXNLWXJMeS8vTURjM0YzVjBkSGpXZWNuSnlXQzlRaG9hR2w2NmZmdDJxMXF0N20xdmIzKzJ2cjQrcDdPek0wbWowZHc1ZlBqd05ydmRIbUsxV2dOQjhlQUFoWXVJaUVBeE1URWVsd3pYaUlpNElHaHBhMnZ6S0dsNFJFU25SREEvbmhqNEpIMXo4T0RCMzVTVWxQeHV4WW9WbDFOVFUyOVVWRlQ4UWF2VlJzWEZ4WGxjcU0xbTgvd3FsVW9JTGtCeGY2eW9xSmc5TUREZ3NXd0pDUW5JYkRZamk4V0NkRHFkM1dLeEJJSGlxZFZxenpvUjJwSlJNclFCcFFUWERHVTh6NXVycXFvV0xseTRzRlVpbkI4L1MweFpIdEZrTW9VMU5qWm1WbFpXdm1Fd0dBcHNOcHNHckNFQUxGWmZYeC9hdUhFaktCcmF1WE9ucTdtNU9VQ2owZkRyMTY4L2JEYWJOVGR2M2t3dExpN2V2bkxseXYvVzE5Y3YrdWlqai83UzFOU1V1bXJWcXNxMzMzNzdzNGlJQ0F0RTFJSWdCRUJPRVZJK0VSRVJmU3pMRG8yT2pyS1ptWmwrSlh5Q1FDdWl6M0hvMEtITmMrYk1FWEp5Y29UbHk1Y0xTNWN1RlZhc1dDRWtKeWNMTzNic0VBb0xDMEVDei9INTU1Ly9Gdm8vYytiTWluMzc5djJlbE9YOCtmTkwxcTFiOSsrUmtaR2dwLzJtVFVlUU9XT0F3dGRqVEV0THE0Nk9qaDZHQUFYV2VlQlN3U1ZydFZwMDdkbzF2cWFteGxPMmJObXkycTFidC80VjJ2QThyK1I1UHBqa0V4VVZaWDdoaFJlK0NRc0w4MjhSUGdYd3VTTFcxdGF1ZERxZFlXTEFBZXM0dTkyT1pzeVlNWmlmbjE4UkZ4Y0hXM1FvSXlQRElMYkp6TXc4ZmUzYXRUbU5qWTF6eFRLVHlSVEQ4enduNmNDUGFRbWZLdUxJeUFoVFdscjZQa1M2b3NtRmhEWkUwakV4TWIzejVzMzdUcTFXRDBMNWxTdFhGbCsvZnQyamVDcVZpbi9ycmJmMmRYWjI2a1JlRlJVVnIxc3NsbkJKSjM1TVMvaDBsYmgvLy83M1MwcEsvcFNTa21LM1dxMUJFS1FnbkdaUnFWVERaODZjQ2I5MTZ4WmFzMmJOMmJWcjExYlcxOWN2ek1qSXFNM096cTVLU1VtNWFqUWFaL1gyOWliVzF0WXVhV2xwMFcvYnR1MnorZlBuTjBnNjh1T0p4NVJGemJkdTNZcDk3YlhYREJ6SHhiTXN5NEFTa2tubzl2WjIxTnJhaWpaczJQRE5rU05IQ3FITWFEU0dueng1c2dqZW9JSGtkbUJnb0NNME5IUkVyOWMzWjJSaytIYzhwakdtN08yYkV5ZE8vTnBrTWlYbzlmcXgvV0hvQUY1T2dPQUU4b0tBblR0M0ZoODVjc1J6cnRWcWh4RkMvNUF3OCtPcGc4L1dpT2ZPbllQY0lhd1R4NUxQb0h4d1FGbFhWeGZLejg4L201V1ZkVlhTMkkrbkhqNVJ4SnFhbXB5V2xwWXNTTkdJVmhBQTBiSzRzd0pXc3JTMFZFZm1qM3g1K1BGa3d5ZUtlT0hDaFYrYVRLWncyS29ESlFTbFEzZnpneDRYRGR0eDRMSlpsbzBUazlrUGMvVDM5MXU3dXJvcUhRN0hlb2tRZnZnVjBXdzJ4MEhPRUxieDRHMFpTR0NETllSelVFYllMNTQ3ZCs1TnU5M2VLMm44RXhBYkd4dXMwK25XY1J4M3ZLdXI2N3d2WlBmajU0RkpLMkpuWjZlK3VycDZIYncxRGE5bHJWNjkrdHlNR1RPYzRpdjlFRGtQRHcrajNOemNRMkZoWVNjbERCNFNPcDF1V1VkSFI0dGZqNllISnEySUF3TUQydGJXMWlUWVFRSHJWMWRYdDloaXNiQ2dsT0Npb1F3c1pHcHFhZzNMc29NU0JwTkFVbExTeks2dXJ1K2V4aHMzM1REcDlFMXljdktOdExTMDg1MmRuY3NoTU9ucDZRa0NwUVJyQ080WmRsYkFXbkljWnhVRXdlZGJpanFkYmpYUDgyc1JRdC9pb0NWUFFuUVBab1poRElJZzZCRkNla250M1p6V2FVbmgzYnhYT2tJb2t1WkYxRU5kdXFUaFhSZ1loakhMOE55TTVURGczemFHWVk3aE9tL2pvUHZOdzJOdXcwV1JETVBzSmVxQkwvUmp4alFnNDE2UVIyWk1DTXZRUmhZUWNnTEtaZXBKUGdiTW01eVBNWjRnYjNkMzl3NTRQMGFVRitTUmpQSmhVRlpXdGpVK1BsN0l6czYyTDErKy9NN1NwVXY1bkp3Y1YzWjJ0akJ2M2p3aEtpcEsrUFRUVDk4ekdvM2x3aFNnbzZQaktvN0FpKzdEL1JTZWpLT1NtbnRveFJOTEs4MGdSVGRJMVcrWGNDSm84YzBrNmE5S3FPN0pwNWZVRUNCNDdKRlVqcS8zTmg5NVhzWWtrSExDUE9ENW9NZVNUbzFsa0c1UHpVZngvZVQxaVlWNitlV1hTOHZLeWdvS0NncjI1T1RrbEMxWnNxUjgwYUpGQnpJek13L0N5NjZEZzRQbytQSGpHKzEyZTQ2a3NRK2dWQ3BUTVpkYy9FdGJOUVAxK3pWVmY0dzRoeWYvcUl4VXh5UWxFOWViaVNjZG52b3liSjA4TjRtd0ZpOWlXa0FWdW11VndYcVVVL3hXRVhTaUZkcU9MM2NSWXliSFhrYVU3UklMQ2F0UHkxd3VsbUdMZHBTd2hPUllQcFpwSjBLOEI2TFZoRGt2djUrOFB0bFpDUWtKY1R6Ly9QT1ZjUFQyOW9yZktjTUg5YkVwS1NtWEd4b2FmbEZRVUhDSTQ3ZzNiVFliUE8yTU1FSHlEMzlnRDEvNFBkQ0RvbEtweExkMDB2SE5NbEF1K210Y1o4SFhiUlNMT29SUUVYRXQ1N1pwVjJrZ0wwQjVxQ0VaaVA1RWdMVUE2MUJJOVhVTTF5R3FuT1IvV2hDRTA0U2NwTHpQSVlRT2tESmlxeWU2U3hqN0Zoa0ZhcWV1RHhCTGlEMlVET1JZaXFoMmROMFc0cUg1R3M5TjhVVHkrZ1JUbGFTVzJIQXZzTnZ0Ym5UUGxjQnhpcUlFNWMvRFR6blFGVlAxRXBkQnpndm1TZU1VUlpNbnc1T1dRM1JSSk1EMWJTYnJaV2drdTFFeXZNWCtSZmRPajNHejZHWW40Q0hPRDcwMHVDcERtemNCbnlLaS95SXZOT1BrOWZVSDlvOEY0b3NWT0JCQjFKTnN4cTZPdElMUDNFZE8ybUp1a2xCSVFWdlJkaG5MSVFsWWlDQmw3QVVVMFlXVDh1QWJtczR3VExHRXcxM2tNUk8vYzcrSllaaVpNbjJQeVVaWVExcnV0Z2tDTVpvUG9pdytQWmZqNUIzN0VFNVNQUWtNRGc2ZWRqZ2NvZUI2WFM1WElQbWFHWlRoVTNEYkZvVkNBWXQ5SHUrd0tFUWFpS3daaG9IL3YxRW1KaVkrakRDUjFNU01jNkY0NFBTazBwSGp1OVIxa1JlWFQrSTU2cnBONWdhSmF6SURKY003MU5xT2xzOU11TXBpZ2tjZXhZTlVVZ1BGQXl4UXVoaHhZK3ZuYlo0S3FiWnRNc3BwOXNJSFlWcVBBaElSL3Yza25UeUV4d3liemVZV0J5SGpJc2NOVnNibHR4SlJYNnZvU2doNjBTMlhVZTZGZHMzZVhJK0VYbTRwUUZwQkdiY3F4ME11SWlZajNraEpyU0NVRWZWZTUwblNTa2FlQ2ZqOEpIbW43SnVWeHdISVdTTHYxbzUyRFhMV01ISUNldEV0MDVFMkRaS3ZHVC94NVBVVzR2clBrdGJTNElPRTJIWk1OcHh2cEdVdEpPck5NcEUzMllmc1BNbWxyaUFlbEtPbCtNamxYeDlZM21taGlPUi80OGpjUk5wRjBSTk4zaXc5cFVCSWRNdGlvbGtPMkpxUnloeEp1SFBnUDVOTUF1Tnorc2JsRXVmamxKcGhtSEtjdnRsRnRUbEFYZFBMQnJvK2tsQTBiL05FTDFQTU1tV2s3Q0lmV2phRXN4RVR5VE1tNzdSUVJKUEpSQVlCZE5xRFZrUjZQVU9uV0VnWG1ZNnZ6ZGgxeWFWMTVIanVZdTRpaW1HWUxlU3VDblpIMjJWdUhIbXpKV3MzU04rUXV4TllubklxQUNLajNtSmNSeXU4Mk0vOTVvbnNueDRmNlIzMDZGNXVrbjVZeGZYb2hQS2k2YUtJOExjN3hEbHBGZVFtTjVlNnB0ME8yVVoweTJiY2pyWU1jbjE2NjVma3VRZlR0TkZ0WkxiMkRIaTlkNHBZQStiaG5HQTZkZlBGZnZXNGZwT01GVElRUEI1RVhqcklhS084UXg3eXZsRkE5aldSdk5OREVSTVNFajdFcDVLMEIza2hsOXFSVVM0eXlTdTY1UXlHWVZaNVNiOGdtWFNRdDVRRkl0eHVIcVVrVlY3RzBJNFZONC9vWDNTSHVSUVAwZnFOOVlIZHVnaHhIOWpyUEdITDVtMmNpRnpyRW56RTlxVDFKZE5COTVQWE41REVRbzhRQXdNRG4rQklPTkxMdmlqcGF1WDJtT2syWWtLWWpHeUxpS1F6Q1QzZVU2WDNiUGQ0bTFpQzVpb2h6MVYwejRYUnZFU2FRWUtIR0tFUEVuSU9FbHVJWkpSTG5oYzk0RHlSWXlmM3hQY1FOQ1NmVnFKY3BELzFJUEpPU1I3eFVjTm9OUDVUcTlXK2g3dlY0eWR6bkRVaTFsVUlXei82S1R4QUpheEZkNUZPMExaaG1uRnQ4ZGJWTXpLdWpWNmsweEFUeEtLckVxMk1Yb2FYS0hNVlZTNWFtKzI0elJiNnJSamN6OGY0RjlhdHgvQzYxK3M4WWV6Qy9XN0dNa0xkdTVSTEp1ZWJsUG5QWHBZRXN2Sk9zTlA3MHlHVG01dFM5UGIyV3F4VzY2L28vMDk1VWtES1BCbjU1YlpGNVdnbTJ3L2RueTh3VG1hRTBQOEJ5QUE5V096Q3lzd0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJlxuICAgICAgICAgIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0J1xuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShhcywgcm91dGVyICYmIHJvdXRlci5sb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSlcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKFxuICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L05hdmJhcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgRmFjaWxpdHkgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHknO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYic7XG5pbXBvcnQgQ2FydENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0L0NhcnRDb250ZW50JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNUUkFQU0VTU0lPTlMgPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYiB0aXRsZT1cIkNhcnRcIiAvPlxuICAgICAgICAgICAgICAgIDxDYXJ0Q29udGVudCAvPlxuICAgICAgICAgICAgICAgIDxGYWNpbGl0eSAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiIsIi8vVHlwZXMgc2hvdWxkIGJlIGluIGNvbnN0IHRvIGF2b2lkIHR5cG9zIGFuZCBkdXBsaWNhdGlvbiBzaW5jZSBpdCdzIGEgc3RyaW5nIGFuZCBjb3VsZCBiZSBlYXNpbHkgbWlzcyBzcGVsbGVkXG5leHBvcnQgY29uc3QgQUREX1RPX0NBUlQgPSAnQUREX1RPX0NBUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcbmV4cG9ydCBjb25zdCBTVUJfUVVBTlRJVFkgPSAnU1VCX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFkgPSAnQUREX1FVQU5USVRZJztcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcbmV4cG9ydCBjb25zdCBBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVIgPSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJztcbmV4cG9ydCBjb25zdCBPUkRFUl9GT1JNID0gJ09SREVSX0ZPUk0nO1xuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xuZXhwb3J0IGNvbnN0IFJFU0VUX0NBUlQgPSAnUkVTRVRfQ0FSVCc7XG5leHBvcnQgY29uc3QgQUREX1RPX0NPTVBBUkUgPSAnQUREX1RPX0NPTVBBUkUnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRSA9ICdSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkUnOyIsImltcG9ydCB7IFxuICAgIEFERF9UT19DQVJULFxuICAgIFJFTU9WRV9JVEVNLFxuICAgIFNVQl9RVUFOVElUWSxcbiAgICBBRERfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgIFJFU0VUX0NBUlQsXG4gICAgQUREX1RPX0NPTVBBUkUsXG4gICAgUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFXG59IGZyb20gJy4vYWN0aW9uLXR5cGVzL2FjdGlvbi1uYW1lcydcblxuLy9hZGQgY2FydCBhY3Rpb25cbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfVE9fQ0FSVCxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL3JlbW92ZSBpdGVtIGFjdGlvblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSRU1PVkVfSVRFTSxcbiAgICAgICAgaWRcbiAgICB9XG59XG4vL3N1YnRyYWN0IHF0IGFjdGlvblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UXVhbnRpdHkgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTVUJfUVVBTlRJVFksXG4gICAgICAgIGlkXG4gICAgfVxufVxuLy9hZGQgcXQgYWN0aW9uXG5leHBvcnQgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBBRERfUVVBTlRJVFksXG4gICAgICAgIGlkXG4gICAgfVxufVxuXG4vL2FkZCBxdCBhY3Rpb24gd2l0aCBxdWFudGl0eSBudW1iZXJcbmV4cG9ydCBjb25zdCBhZGRRdWFudGl0eVdpdGhOdW1iZXIgPSAoaWQsIHF0eSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICAgICAgaWQsXG4gICAgICAgIHF0eVxuICAgIH1cbn1cblxuLy8gUmVzZXQgY2FydCBhZnRlciBmb3JtIHN1Ym1pdFxuZXhwb3J0IGNvbnN0IHJlc2V0Q2FydCA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSRVNFVF9DQVJUXG4gICAgfVxufVxuXG4vL2FkZCBjb21wYXJlIGFjdGlvblxuZXhwb3J0IGNvbnN0IGFkZFRvQ29tcGFyZSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9UT19DT01QQVJFLFxuICAgICAgICBpZFxuICAgIH1cbn1cbi8vcmVtb3ZlIGl0ZW0gZnJvbSBjb21wYXJlIGFjdGlvblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW1Gcm9tQ29tcGFyZSA9IChpZCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRSxcbiAgICAgICAgaWRcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW93bC1jYXJvdXNlbDNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==