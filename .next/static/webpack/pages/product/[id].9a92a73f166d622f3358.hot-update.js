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
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.riflescope.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.redDotscope.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.nightvision.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.binoculars.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.rangefinder.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.handgunsight.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.flash.find(function (item) {
      return item.id === parseInt(id);
    });
  }) || Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.weaponlights.find(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC8uanMiXSwibmFtZXMiOlsiUHJvZHVjdCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwcm9kdWN0cyIsImZpbmQiLCJpdGVtIiwicGFyc2VJbnQiLCJzZW1pQXV0aCIsInJldm9sdmVyIiwiYWsiLCJ0YWN0aWNhbCIsImxldmVyQWN0aW9uIiwiZGVycmluZ2VyIiwiYXJzIiwiYWtzIiwiYm9sdEFjdGlvbiIsImh1bnRpbmciLCJyZnRhY3RpY2FsIiwic2VsZmRlZmVuc2UiLCJyaW0iLCJoYW5kQW1tdW5pIiwicmlmbGVhbW11bmkiLCJyaWZsZXNjb3BlIiwicmVkRG90c2NvcGUiLCJuaWdodHZpc2lvbiIsImJpbm9jdWxhcnMiLCJyYW5nZWZpbmRlciIsImhhbmRndW5zaWdodCIsImZsYXNoIiwid2VhcG9ubGlnaHRzIiwiYWRkZWRJdGVtc1RvQ29tcGFyZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEa0IsTUFFVkMsRUFGVSxHQUVIRixNQUFNLENBQUNHLEtBRkosQ0FFVkQsRUFGVTtBQUdsQkUsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE1BQU0sQ0FBQ0csS0FBbkI7QUFDQSxNQUFNRyxPQUFPLEdBQUVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsUUFBTixDQUFlQyxJQUFmLENBQW9CLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNULEVBQUwsS0FB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YyxXQUFPLEVBQUUvQjtBQUF2QixJQUZBLEVBR0ksTUFBQyxrRkFBRDtBQUFnQixXQUFPLEVBQUVBO0FBQXpCLElBSEosRUFJSSxNQUFDLDhFQUFEO0FBQVksV0FBTyxFQUFFQTtBQUFyQixJQUpKLENBREosQ0FESixFQVdJLE1BQUMsbUZBQUQ7QUFBaUIsWUFBUSxFQUFFRyxRQUEzQjtBQUFxQyxtQkFBZSxFQUFFMkI7QUFBdEQsSUFYSixFQWFJLE1BQUMsNEVBQUQsT0FiSixDQVJKLEVBd0JJLE1BQUMsaUVBQUQsT0F4QkosQ0FESjtBQTRCSCxDQTNERDs7R0FBTXJDLE87VUFDYUUscUQsRUFHQU0sdUQsRUFDWkEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFDQUEsdUQsRUFFY0EsdUQsRUFDV0EsdUQ7OztLQTlCMUJSLE87QUE2RFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvW2lkXS45YTkyYTczZjE2NmQ2MjJmMzM1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyJztcbmltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL0JyZWFkY3J1bWInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC9Gb290ZXInO1xuaW1wb3J0IFByb2R1Y3RJbWFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9Qcm9kdWN0SW1hZ2UnO1xuaW1wb3J0IFByb2R1Y3RDb250ZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL1Byb2R1Y3RDb250ZW50JztcbmltcG9ydCBEZXRhaWxzVGFiIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL0RldGFpbHNUYWInO1xuaW1wb3J0IFJlbGF0ZWRQcm9kdWN0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9SZWxhdGVkUHJvZHVjdHMnO1xuaW1wb3J0IEZhY2lsaXR5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2hvcC1zdHlsZS1vbmUvRmFjaWxpdHknO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KTtcbiAgICBjb25zdCBwcm9kdWN0PSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2VtaUF1dGguZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFrLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudGFjdGljYWwuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmRlcnJpbmdlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmJvbHRBY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5odW50aW5nLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmZ0YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNlbGZkZWZlbnNlLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmltLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaGFuZEFtbXVuaS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJpZmxlYW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmlmbGVzY29wZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlZERvdHNjb3BlLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubmlnaHR2aXNpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5iaW5vY3VsYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludChpZCkpKVxuICAgIHx8IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmFuZ2VmaW5kZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5oYW5kZ3Vuc2lnaHQuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHBhcnNlSW50KGlkKSkpXG4gICAgfHwgdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mbGFzaC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcbiAgICB8fCB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLndlYXBvbmxpZ2h0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaWQpKSlcblxuICAgIGNvbnN0IHByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wcm9kdWN0cylcbiAgICBjb25zdCBhZGRlZEl0ZW1zVG9Db21wYXJlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hZGRlZEl0ZW1zVG9Db21wYXJlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb2R1Y3QudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgICAgPEJyZWFkY3J1bWIgdGl0bGU9e3Byb2R1Y3QudGl0bGV9IC8+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RzLWRldGFpbHMtYXJlYSBwdC02MFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdEltYWdlIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdENvbnRlbnQgcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxzVGFiIHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8UmVsYXRlZFByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0c30gQ29tcGFyZVByb2R1Y3RzPXthZGRlZEl0ZW1zVG9Db21wYXJlfSAvPlxuXG4gICAgICAgICAgICAgICAgPEZhY2lsaXR5IC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==