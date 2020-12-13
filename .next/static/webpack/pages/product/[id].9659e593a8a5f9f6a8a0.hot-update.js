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
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state.topSellers.find(function (item) {
    return item.id === action.id;
  }) || state.riflescope.find(function (item) {
    return item.id === action.id;
  }) || state.redDotscope.find(function (item) {
    return item.id === action.id;
  }) || state.nightvision.find(function (item) {
    return item.id === action.id;
  }) || state.binoculars.find(function (item) {
    return item.id === action.id;
  }) || state.rangefinder.find(function (item) {
    return item.id === action.id;
  }) || state.handgunsight.find(function (item) {
    return item.id === action.id;
  }) || state.flash.find(function (item) {
    return item.id === action.id;
  }) || state.weaponlights.find(function (item) {
    return item.id === action.id;
  })) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])() || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])() || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])() || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])() || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])() || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])() || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])();
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

_s(Product, "7PePYrajDELX2fiGOshez4cYHcQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8uanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0cyIsImZpbmQiLCJpdGVtIiwicGFyc2VJbnQiLCJzZW1pQXV0aCIsInJldm9sdmVyIiwiYWsiLCJ0YWN0aWNhbCIsImxldmVyQWN0aW9uIiwiZGVycmluZ2VyIiwiYXJzIiwiYWtzIiwiYm9sdEFjdGlvbiIsImh1bnRpbmciLCJyZnRhY3RpY2FsIiwic2VsZmRlZmVuc2UiLCJyaW0iLCJoYW5kQW1tdW5pIiwicmlmbGVhbW11bmkiLCJ0b3BTZWxsZXJzIiwiYWN0aW9uIiwicmlmbGVzY29wZSIsInJlZERvdHNjb3BlIiwibmlnaHR2aXNpb24iLCJiaW5vY3VsYXJzIiwicmFuZ2VmaW5kZXIiLCJoYW5kZ3Vuc2lnaHQiLCJmbGFzaCIsIndlYXBvbmxpZ2h0cyIsImFkZGVkSXRlbXNUb0NvbXBhcmUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGtCLE1BRVZDLEVBRlUsR0FFSEYsTUFBTSxDQUFDRyxLQUZKLENBRVZELEVBRlU7QUFHbEJFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxNQUFNLENBQUNHLEtBQW5CO0FBQ0EsTUFBTUcsT0FBTyxHQUFFQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsSUFBZixDQUFvQixVQUFBQyxJQUFJO0FBQUEsYUFB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RkFBRDtBQUFpQixZQUFRLEVBQUVHLFFBQTNCO0FBQXFDLG1CQUFlLEVBQUU2QjtBQUF0RCxJQVhKLEVBYUksTUFBQyw0RUFBRCxPQWJKLENBUkosRUF3QkksTUFBQyxpRUFBRCxPQXhCSixDQURKO0FBNEJILENBbkVEOztHQUFNdkMsTztVQUNhRSxxRCxFQUdBTSx1RCxFQUNaQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQVNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUNBQSx1RCxFQUVjQSx1RCxFQUNXQSx1RDs7O0tBdEMxQlIsTztBQXFFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9baWRdLjk2NTllNTkzYThhNWY5ZjZhOGEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC9OYXZiYXInO1xuaW1wb3J0IEJyZWFkY3J1bWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vQnJlYWRjcnVtYic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0L0Zvb3Rlcic7XG5pbXBvcnQgUHJvZHVjdEltYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL1Byb2R1Y3RJbWFnZSc7XG5pbXBvcnQgUHJvZHVjdENvbnRlbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvUHJvZHVjdENvbnRlbnQnO1xuaW1wb3J0IERldGFpbHNUYWIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvRGV0YWlsc1RhYic7XG5pbXBvcnQgUmVsYXRlZFByb2R1Y3RzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL1JlbGF0ZWRQcm9kdWN0cyc7XG5pbXBvcnQgRmFjaWxpdHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zaG9wLXN0eWxlLW9uZS9GYWNpbGl0eSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpO1xuICAgIGNvbnN0IHByb2R1Y3Q9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJldm9sdmVyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWsuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmxldmVyQWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZGVycmluZ2VyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWtzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYm9sdEFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2VsZmRlZmVuc2UuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yaW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5oYW5kQW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmlmbGVhbW11bmkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3Ioc3RhdGUudG9wU2VsbGVycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgIHx8IHN0YXRlLnJpZmxlc2NvcGUuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICB8fCBzdGF0ZS5yZWREb3RzY29wZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgIHx8IHN0YXRlLm5pZ2h0dmlzaW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgfHwgc3RhdGUuYmlub2N1bGFycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgIHx8IHN0YXRlLnJhbmdlZmluZGVyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgfHwgc3RhdGUuaGFuZGd1bnNpZ2h0LmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgfHwgc3RhdGUuZmxhc2guZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICB8fCBzdGF0ZS53ZWFwb25saWdodHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKVxuICAgIHx8IHVzZVNlbGVjdG9yKClcbiAgICB8fCB1c2VTZWxlY3RvcigpXG4gICAgfHwgdXNlU2VsZWN0b3IoKVxuICAgIHx8IHVzZVNlbGVjdG9yKClcbiAgICB8fCB1c2VTZWxlY3RvcigpXG4gICAgfHwgdXNlU2VsZWN0b3IoKVxuXG4gICAgY29uc3QgcHJvZHVjdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzKVxuICAgIGNvbnN0IGFkZGVkSXRlbXNUb0NvbXBhcmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFkZGVkSXRlbXNUb0NvbXBhcmUpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvZHVjdC50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYiB0aXRsZT17cHJvZHVjdC50aXRsZX0gLz5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdHMtZGV0YWlscy1hcmVhIHB0LTYwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SW1hZ2UgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0Q29udGVudCBwcm9kdWN0PXtwcm9kdWN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbHNUYWIgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxSZWxhdGVkUHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSBDb21wYXJlUHJvZHVjdHM9e2FkZGVkSXRlbXNUb0NvbXBhcmV9IC8+XG5cbiAgICAgICAgICAgICAgICA8RmFjaWxpdHkgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9