webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/reducers.js":
/*!************************************!*\
  !*** ./store/reducers/reducers.js ***!
  \************************************/
/*! exports provided: reducers, initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _json_data_products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../json-data/products */ "./store/json-data/products.js");
/* harmony import */ var _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/action-types/action-names */ "./store/actions/action-types/action-names.js");



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // defaults to localStorage for web


var store;

var initialState = {
  products: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["products"],
  semiAuth: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["semiAuth"],
  revolver: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["revolver"],
  ak: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["ak"],
  tactical: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["tactical"],
  leverAction: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["leverAction"],
  derringer: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["derringer"],
  ars: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["ars"],
  aks: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["aks"],
  boltAction: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["boltAction"],
  hunting: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["hunting"],
  rftactical: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["rftactical"],
  selfdefense: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["selfdefense"],
  rim: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["rim"],
  handAmmuni: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["handAmmuni"],
  rifleammuni: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["rifleammuni"],
  topSellers: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["topSellers"],
  addedItems: [],
  addedItemsToCompare: [],
  total: 0,
  shipping: 0
};
var reducers = function reducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_TO_CART"]) {
    var addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    }) || state.rftactical.find(function (item) {
      return item.id === action.id;
    }) || state.selfdefense.find(function (item) {
      return item.id === action.id;
    }) || state.rim.find(function (item) {
      return item.id === action.id;
    }) || state.handAmmuni.find(function (item) {
      return item.id === action.id;
    }) || state.rifleammuni.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems

    var existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      var newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItems), [addedItem]),
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_TO_COMPARE"]) {
    var addedItemToCompare = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    }) || state.rftactical.find(function (item) {
      return item.id === action.id;
    }) || state.selfdefense.find(function (item) {
      return item.id === action.id;
    }) || state.rim.find(function (item) {
      return item.id === action.id;
    }) || state.handAmmuni.find(function (item) {
      return item.id === action.id;
    }) || state.rifleammuni.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    });
    addedItemToCompare.quantity = 1;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItemsToCompare: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItemsToCompare), [addedItemToCompare])
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_QUANTITY_WITH_NUMBER"]) {
    var _addedItem = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    }) || state.rftactical.find(function (item) {
      return item.id === action.id;
    }) || state.selfdefense.find(function (item) {
      return item.id === action.id;
    }) || state.rim.find(function (item) {
      return item.id === action.id;
    }) || state.handAmmuni.find(function (item) {
      return item.id === action.id;
    }) || state.rifleammuni.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    }); //check if the action id exists in the addedItems


    var _existed_item = state.addedItems.find(function (item) {
      return action.id === item.id;
    });

    if (_existed_item) {
      _addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + _addedItem.price * action.qty
      });
    } else {
      _addedItem.quantity = action.qty; //calculating the total

      var _newTotal = state.total + _addedItem.price * action.qty;

      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addedItems), [_addedItem]),
        total: _newTotal
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["REMOVE_ITEM"]) {
    var itemToRemove = state.addedItems.find(function (item) {
      return action.id === item.id;
    });
    var new_items = state.addedItems.filter(function (item) {
      return action.id !== item.id;
    }); //calculating the total

    var _newTotal2 = state.total - itemToRemove.price * itemToRemove.quantity;

    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: _newTotal2
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["REMOVE_ITEM_FROM_COMPARE"]) {
    var _new_items = state.addedItemsToCompare.filter(function (item) {
      return action.id !== item.id;
    });

    return _objectSpread(_objectSpread({}, state), {}, {
      addedItemsToCompare: _new_items
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_QUANTITY"]) {
    var _addedItem2 = state.products.find(function (item) {
      return item.id === action.id;
    });

    _addedItem2.quantity += 1;

    var _newTotal3 = state.total + _addedItem2.price;

    return _objectSpread(_objectSpread({}, state), {}, {
      total: _newTotal3
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["SUB_QUANTITY"]) {
    var _addedItem3 = state.products.find(function (item) {
      return item.id === action.id;
    }) || state.semiAuth.find(function (item) {
      return item.id === action.id;
    }) || state.revolver.find(function (item) {
      return item.id === action.id;
    }) || state.ak.find(function (item) {
      return item.id === action.id;
    }) || state.tactical.find(function (item) {
      return item.id === action.id;
    }) || state.leverAction.find(function (item) {
      return item.id === action.id;
    }) || state.derringer.find(function (item) {
      return item.id === action.id;
    }) || state.ars.find(function (item) {
      return item.id === action.id;
    }) || state.aks.find(function (item) {
      return item.id === action.id;
    }) || state.boltAction.find(function (item) {
      return item.id === action.id;
    }) || state.hunting.find(function (item) {
      return item.id === action.id;
    }) || state.rftactical.find(function (item) {
      return item.id === action.id;
    }) || state.selfdefense.find(function (item) {
      return item.id === action.id;
    }) || state.rim.find(function (item) {
      return item.id === action.id;
    }) || state.handAmmuni.find(function (item) {
      return item.id === action.id;
    }) || state.rifleammuni.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    }); //if the qt == 0 then it should be removed


    if (_addedItem3.quantity === 1) {
      var _new_items2 = state.addedItems.filter(function (item) {
        return item.id !== action.id;
      });

      var _newTotal4 = state.total - _addedItem3.price;

      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: _new_items2,
        total: _newTotal4
      });
    } else {
      _addedItem3.quantity -= 1;

      var _newTotal5 = state.total - _addedItem3.price;

      return _objectSpread(_objectSpread({}, state), {}, {
        total: _newTotal5
      });
    }
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_action_names__WEBPACK_IMPORTED_MODULE_9__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};
var persistConfig = {
  key: 'primary',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_7___default.a
};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistReducer"])(persistConfig, reducers);

function makeStore(initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_4__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])()));
}

var initializeStore = function initializeStore(preloadedState) {
  var _store2;

  var _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : makeStore(preloadedState); // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store


  if (preloadedState && store) {
    _store = makeStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState)); // Reset the current store

    store = undefined;
  } // For SSG and SSR always create a new store


  if (false) {} // Create the store once in the client

  if (!store) store = _store;
  return _store;
};
function useStore(initialState) {
  _s();

  var store = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return initializeStore(initialState);
  }, [initialState]);
  return store;
}

_s(useStore, "K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcmVkdWNlcnMuanMiXSwibmFtZXMiOlsic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsInNlbWlBdXRoIiwicmV2b2x2ZXIiLCJhayIsInRhY3RpY2FsIiwibGV2ZXJBY3Rpb24iLCJkZXJyaW5nZXIiLCJhcnMiLCJha3MiLCJib2x0QWN0aW9uIiwiaHVudGluZyIsInJmdGFjdGljYWwiLCJzZWxmZGVmZW5zZSIsInJpbSIsImhhbmRBbW11bmkiLCJyaWZsZWFtbXVuaSIsInRvcFNlbGxlcnMiLCJhZGRlZEl0ZW1zIiwiYWRkZWRJdGVtc1RvQ29tcGFyZSIsInRvdGFsIiwic2hpcHBpbmciLCJyZWR1Y2VycyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9UT19DQVJUIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJpZCIsImV4aXN0ZWRfaXRlbSIsInF1YW50aXR5IiwicHJpY2UiLCJuZXdUb3RhbCIsIkFERF9UT19DT01QQVJFIiwiYWRkZWRJdGVtVG9Db21wYXJlIiwiQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSIiwicXR5IiwiUkVNT1ZFX0lURU0iLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkUiLCJBRERfUVVBTlRJVFkiLCJTVUJfUVVBTlRJVFkiLCJBRERfU0hJUFBJTkciLCJSRVNFVF9DQVJUIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJtYWtlU3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJpbml0aWFsaXplU3RvcmUiLCJwcmVsb2FkZWRTdGF0ZSIsIl9zdG9yZSIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwidXNlU3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBp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QUFjLElBQUkzRCxLQUF0QixFQUE2QjtBQUMzQjRELFVBQU0sR0FBR04sU0FBUyxpQ0FDYnRELEtBQUssQ0FBQzZELFFBQU4sRUFEYSxHQUViRixjQUZhLEVBQWxCLENBRDJCLENBSzNCOztBQUNBM0QsU0FBSyxHQUFHOEQsU0FBUjtBQUNELEdBWmdELENBY2pEOzs7QUFDQSxhQUFtQyxFQWZjLENBZ0JqRDs7QUFDQSxNQUFJLENBQUM5RCxLQUFMLEVBQVlBLEtBQUssR0FBRzRELE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FwQk07QUFzQkEsU0FBU0csUUFBVCxDQUFrQjlELFlBQWxCLEVBQWdDO0FBQUE7O0FBQ3JDLE1BQU1ELEtBQUssR0FBR2dFLHFEQUFPLENBQUM7QUFBQSxXQUFNTixlQUFlLENBQUN6RCxZQUFELENBQXJCO0FBQUEsR0FBRCxFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT0QsS0FBUDtBQUNEOztHQUhlK0QsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE4YzcyYzE4ZGU4NmZiMzNiN2Q1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCdcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnIC8vIGRlZmF1bHRzIHRvIGxvY2FsU3RvcmFnZSBmb3Igd2ViXG4gXG5cbmltcG9ydCB7XG4gICAgcHJvZHVjdHMsIFxuICAgIHNlbWlBdXRoLCBcbiAgICByZXZvbHZlciwgXG4gICAgYWssIFxuICAgIHRhY3RpY2FsLCBcbiAgICBsZXZlckFjdGlvbiwgXG4gICAgZGVycmluZ2VyLFxuICAgIGFycyxcbiAgICBha3MsXG4gICAgYm9sdEFjdGlvbixcbiAgICBodW50aW5nLFxuICAgIHJmdGFjdGljYWwsXG4gICAgc2VsZmRlZmVuc2UsXG4gICAgcmltLFxuICAgIGhhbmRBbW11bmksXG4gICAgcmlmbGVhbW11bmksXG4gICAgdG9wU2VsbGVycyxcbiAgICByaWZsZXNjb3BlLFxucmVkRG90c2NvcGUsXG5uaWdodHZpc2lvbixcbmJpbm9jdWxhcnMsXG5yYW5nZWZpbmRlcixcbmhhbmRndW5zaWdodCxcbmZsYXNoLFxud2VhcG9ubGlnaHRzXG59IGZyb20gJy4uL2pzb24tZGF0YS9wcm9kdWN0cyc7XG5cbmxldCBzdG9yZVxuXG5pbXBvcnQgeyBcbiAgICBBRERfVE9fQ0FSVCxcbiAgICBSRU1PVkVfSVRFTSxcbiAgICBTVUJfUVVBTlRJVFksXG4gICAgQUREX1FVQU5USVRZLCBcbiAgICBBRERfU0hJUFBJTkcsXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxuICAgIFJFU0VUX0NBUlQsXG4gICAgQUREX1RPX0NPTVBBUkUsXG4gICAgUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFXG59IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2FjdGlvbi1uYW1lcydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHByb2R1Y3RzOiBwcm9kdWN0cyxcbiAgICBzZW1pQXV0aDogc2VtaUF1dGgsXG4gICAgcmV2b2x2ZXI6IHJldm9sdmVyLFxuICAgIGFrOiBhayxcbiAgICB0YWN0aWNhbDogdGFjdGljYWwsXG4gICAgbGV2ZXJBY3Rpb246IGxldmVyQWN0aW9uLFxuICAgIGRlcnJpbmdlcjogZGVycmluZ2VyLFxuICAgIGFyczogYXJzLFxuICAgIGFrczogYWtzLFxuICAgIGJvbHRBY3Rpb246IGJvbHRBY3Rpb24sXG4gICAgaHVudGluZzogaHVudGluZyxcbiAgICByZnRhY3RpY2FsOiByZnRhY3RpY2FsLFxuICAgIHNlbGZkZWZlbnNlOnNlbGZkZWZlbnNlLFxuICAgIHJpbTpyaW0sXG4gICAgaGFuZEFtbXVuaTpoYW5kQW1tdW5pLFxuICAgIHJpZmxlYW1tdW5pOiByaWZsZWFtbXVuaSxcbiAgICB0b3BTZWxsZXJzOiB0b3BTZWxsZXJzLFxuICAgIGFkZGVkSXRlbXM6W10sXG4gICAgYWRkZWRJdGVtc1RvQ29tcGFyZTpbXSxcbiAgICB0b3RhbDogMCxcbiAgICBzaGlwcGluZzogMFxufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlcnMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DQVJUKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hay5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5kZXJyaW5nZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ib2x0QWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUucmZ0YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5zZWxmZGVmZW5zZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yaW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuaGFuZEFtbXVuaS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUucmlmbGVhbW11bmkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUudG9wU2VsbGVycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSl7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ09NUEFSRSl7XG4gICAgICAgIGxldCBhZGRlZEl0ZW1Ub0NvbXBhcmUgPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hay5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5kZXJyaW5nZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ib2x0QWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUucmZ0YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUuc2VsZmRlZmVuc2UuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnJpbS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5oYW5kQW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5yaWZsZWFtbXVuaS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50b3BTZWxsZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG5cbiAgICAgICAgXG4gICAgICAgIGFkZGVkSXRlbVRvQ29tcGFyZS5xdWFudGl0eSA9IDE7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zVG9Db21wYXJlOiBbLi4uc3RhdGUuYWRkZWRJdGVtc1RvQ29tcGFyZSwgYWRkZWRJdGVtVG9Db21wYXJlXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUil7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hay5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5kZXJyaW5nZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ib2x0QWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUucmZ0YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUuc2VsZmRlZmVuc2UuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnJpbS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5oYW5kQW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5yaWZsZWFtbXVuaS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50b3BTZWxsZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxuICAgICAgICBpZihleGlzdGVkX2l0ZW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSAqIGFjdGlvbi5xdHlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgKiBhY3Rpb24ucXR5XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXG4gICAgICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU0pe1xuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxuICAgICAgICBcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLnByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFKXtcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXNUb0NvbXBhcmUuZmlsdGVyKGl0ZW09PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zVG9Db21wYXJlOiBuZXdfaXRlbXNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfUVVBTlRJVFkpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMSBcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2VcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gU1VCX1FVQU5USVRZKXsgIFxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUuc2VtaUF1dGguZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUucmV2b2x2ZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYWsuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUudGFjdGljYWwuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUubGV2ZXJBY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuZGVycmluZ2VyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ha3MuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYm9sdEFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5odW50aW5nLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnJmdGFjdGljYWwuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnNlbGZkZWZlbnNlLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5yaW0uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuaGFuZEFtbXVuaS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUucmlmbGVhbW11bmkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUudG9wU2VsbGVycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICAgICAgaWYoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKXtcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT5pdGVtLmlkICE9PSBhY3Rpb24uaWQpXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5wcmljZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ucHJpY2VcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9TSElQUElORyl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSA2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gNlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IFJFU0VUX0NBUlQpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcbiAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgc2hpcHBpbmc6IDBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufVxuXG5cblxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcbiAgICBrZXk6ICdwcmltYXJ5JyxcbiAgICBzdG9yYWdlLFxufVxuICBcbiAgY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJlZHVjZXJzKVxuICBcbiAgZnVuY3Rpb24gbWFrZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAgIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICAgIHBlcnNpc3RlZFJlZHVjZXIsXG4gICAgICBpbml0aWFsU3RhdGUsXG4gICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSgpKVxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZSkgPT4ge1xuICAgIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBtYWtlU3RvcmUocHJlbG9hZGVkU3RhdGUpXG4gIFxuICAgIC8vIEFmdGVyIG5hdmlnYXRpbmcgdG8gYSBwYWdlIHdpdGggYW4gaW5pdGlhbCBSZWR1eCBzdGF0ZSwgbWVyZ2UgdGhhdCBzdGF0ZVxuICAgIC8vIHdpdGggdGhlIGN1cnJlbnQgc3RhdGUgaW4gdGhlIHN0b3JlLCBhbmQgY3JlYXRlIGEgbmV3IHN0b3JlXG4gICAgaWYgKHByZWxvYWRlZFN0YXRlICYmIHN0b3JlKSB7XG4gICAgICBfc3RvcmUgPSBtYWtlU3RvcmUoe1xuICAgICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAuLi5wcmVsb2FkZWRTdGF0ZSxcbiAgICAgIH0pXG4gICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBzdG9yZVxuICAgICAgc3RvcmUgPSB1bmRlZmluZWRcbiAgICB9XG4gIFxuICAgIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IHN0b3JlXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gX3N0b3JlXG4gICAgLy8gQ3JlYXRlIHRoZSBzdG9yZSBvbmNlIGluIHRoZSBjbGllbnRcbiAgICBpZiAoIXN0b3JlKSBzdG9yZSA9IF9zdG9yZVxuICBcbiAgICByZXR1cm4gX3N0b3JlXG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiB1c2VTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKVxuICAgIHJldHVybiBzdG9yZVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==