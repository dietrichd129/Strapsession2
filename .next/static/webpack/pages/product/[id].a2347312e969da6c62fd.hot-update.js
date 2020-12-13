webpackHotUpdate_N_E("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout/Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var _components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Common/Breadcrumb */ "./components/Common/Breadcrumb.js");
/* harmony import */ var _components_Layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout/Footer */ "./components/Layout/Footer.js");
/* harmony import */ var _components_product_details_ProductImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/product-details/ProductImage */ "./components/product-details/ProductImage.js");
/* harmony import */ var _components_product_details_ProductContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/product-details/ProductContent */ "./components/product-details/ProductContent.js");
/* harmony import */ var _components_product_details_DetailsTab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/product-details/DetailsTab */ "./components/product-details/DetailsTab.js");
/* harmony import */ var _components_product_details_RelatedProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/product-details/RelatedProducts */ "./components/product-details/RelatedProducts.js");
/* harmony import */ var _components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/shop-style-one/Facility */ "./components/shop-style-one/Facility.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
var _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var Product = function Product() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  console.log(router.query);
  var product = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.semiAuth.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.revolver.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ak.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.tactical.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.leverAction.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.derringer.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.ars.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.aks.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.boltAction.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.hunting.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.rftactical.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.selfdefense.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.rim.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.handAmmuni.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.rifleammuni.find(function (item) {
      return item.id === parseInt(id);
    });
  });
  var products = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.products;
  });
  var addedItemsToCompare = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.addedItemsToCompare;
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, null, __jsx("title", null, product.title), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), __jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: product.title
  }), __jsx("section", {
    className: "products-details-area pt-60"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, __jsx(_components_product_details_ProductImage__WEBPACK_IMPORTED_MODULE_6__["default"], {
    product: product
  }), __jsx(_components_product_details_ProductContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    product: product
  }), __jsx(_components_product_details_DetailsTab__WEBPACK_IMPORTED_MODULE_8__["default"], {
    product: product
  }))), __jsx(_components_product_details_RelatedProducts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    products: products,
    CompareProducts: addedItemsToCompare
  }), __jsx(_components_shop_style_one_Facility__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx(_components_Layout_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

_s(Product, "m2BcEboYcGSW2KKi2UTJhyGgBUc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8uanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0cyIsImZpbmQiLCJpdGVtIiwicGFyc2VJbnQiLCJzZW1pQXV0aCIsInJldm9sdmVyIiwiYWsiLCJ0YWN0aWNhbCIsImxldmVyQWN0aW9uIiwiZGVycmluZ2VyIiwiYXJzIiwiYWtzIiwiYm9sdEFjdGlvbiIsImh1bnRpbmciLCJyZnRhY3RpY2FsIiwic2VsZmRlZmVuc2UiLCJyaW0iLCJoYW5kQW1tdW5pIiwicmlmbGVhbW11bmkiLCJhZGRlZEl0ZW1zVG9Db21wYXJlIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURrQixNQUVWQyxFQUZVLEdBRUhGLE1BQU0sQ0FBQ0csS0FGSixDQUVWRCxFQUZVO0FBR2xCRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsTUFBTSxDQUFDRyxLQUFuQjtBQUNBLE1BQU1HLE9BQU8sR0FBRUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLElBQWYsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ1QsRUFBTCxLQUFZVSxRQUFRLENBQUNWLEVBQUQsQ0FBeEI7QUFBQSxLQUF4QixDQUFYO0FBQUEsR0FBRCxDQUFYLElBQ1pLLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ss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Q0FBRCxDQUFPLFFBQVAsUUFDSSxNQUFDLGlEQUFELFFBQ0oscUJBQVF0QixPQUFPLENBQUN1QixLQUFoQixDQURJLEVBRUo7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUM7QUFBOUIsSUFGSSxDQURKLEVBS0ksTUFBQyxpRUFBRCxPQUxKLEVBTUksTUFBQyxxRUFBRDtBQUFZLFNBQUssRUFBRXZCLE9BQU8sQ0FBQ3VCO0FBQTNCLElBTkosRUFRSTtBQUFTLGFBQVMsRUFBQztBQUFuQixLQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBRUEsTUFBQyxnRkFBRDtBQUFjLFdBQU8sRUFBRXZCO0FBQXZCLElBRkEsRUFHSSxNQUFDLGtGQUFEO0FBQWdCLFdBQU8sRUFBRUE7QUFBekIsSUFISixFQUlJLE1BQUMsOEVBQUQ7QUFBWSxXQUFPLEVBQUVBO0FBQXJCLElBSkosQ0FESixDQURKLEVBV0ksTUFBQyxtRkFBRDtBQUFpQixZQUFRLEVBQUVHLFFBQTNCO0FBQXFDLG1CQUFlLEVBQUVtQjtBQUF0RCxJQVhKLEVBYUksTUFBQyw0RUFBRCxPQWJKLENBUkosRUF3QkksTUFBQyxpRUFBRCxPQXhCSixDQURKO0FBNEJILENBcEREOztHQUFNN0IsTztVQUNhRSxxRCxFQUdBTSx1RCxFQUNaQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUdjQSx1RCxFQUNXQSx1RDs7O0tBdkIxQlIsTztBQXNEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLmEyMzQ3MzEyZTk2OWRhNmM2MmZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXInO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgUHJvZHVjdEltYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL1Byb2R1Y3RJbWFnZSc7XG5pbXBvcnQgUHJvZHVjdENvbnRlbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvUHJvZHVjdENvbnRlbnQnO1xuaW1wb3J0IERldGFpbHNUYWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvRGV0YWlsc1RhYic7XG5pbXBvcnQgUmVsYXRlZFByb2R1Y3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL1JlbGF0ZWRQcm9kdWN0cyc7XG5pbXBvcnQgRmFjaWxpdHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9GYWNpbGl0eSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuICAgIGNvbnN0IHByb2R1Y3Q9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJldm9sdmVyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWsuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxldmVyQWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGVycmluZ2VyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWtzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYm9sdEFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2VsZmRlZmVuc2UuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yaW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5oYW5kQW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmlmbGVhbW11bmkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gIFxuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzKVxuICAgIGNvbnN0IGFkZGVkSXRlbXNUb0NvbXBhcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFkZGVkSXRlbXNUb0NvbXBhcmUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvZHVjdC50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYiB0aXRsZT17cHJvZHVjdC50aXRsZX0gLz5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdHMtZGV0YWlscy1hcmVhIHB0LTYwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2UgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q29udGVudCBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbHNUYWIgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxSZWxhdGVkUHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSBDb21wYXJlUHJvZHVjdHM9e2FkZGVkSXRlbXNUb0NvbXBhcmV9IC8+XG5cbiAgICAgICAgICAgICAgICA8RmFjaWxpdHkgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9