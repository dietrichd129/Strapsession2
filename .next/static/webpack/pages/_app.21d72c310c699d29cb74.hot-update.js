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
  riflescope: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["riflescope"],
  redDotscope: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["redDotscope"],
  nightvision: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["nightvision"],
  binoculars: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["binoculars"],
  rangefinder: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["rangefinder"],
  handgunsight: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["handgunsight"],
  flash: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["flash"],
  weaponlights: _json_data_products__WEBPACK_IMPORTED_MODULE_8__["weaponlights"],
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
    }) || state.riflescope.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    }) || state.topredDotscopeSellers.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
      return item.id === action.id;
    }) || state.topSellers.find(function (item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcmVkdWNlcnMuanMiXSwibmFtZXMiOlsic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0cyIsInNlbWlBdXRoIiwicmV2b2x2ZXIiLCJhayIsInRhY3RpY2FsIiwibGV2ZXJBY3Rpb24iLCJkZXJyaW5nZXIiLCJhcnMiLCJha3MiLCJib2x0QWN0aW9uIiwiaHVudGluZyIsInJmdGFjdGljYWwiLCJzZWxmZGVmZW5zZSIsInJpbSIsImhhbmRBbW11bmkiLCJyaWZsZWFtbXVuaSIsInRvcFNlbGxlcnMiLCJyaWZsZXNjb3BlIiwicmVkRG90c2NvcGUiLCJuaWdodHZpc2lvbiIsImJpbm9jdWxhcnMiLCJyYW5nZWZpbmRlciIsImhhbmRndW5zaWdodCIsImZsYXNoIiwid2VhcG9ubGlnaHRzIiwiYWRkZWRJdGVtcyIsImFkZGVkSXRlbXNUb0NvbXBhcmUiLCJ0b3RhbCIsInNoaXBwaW5nIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJBRERfVE9fQ0FSVCIsImFkZGVkSXRlbSIsImZpbmQiLCJpdGVtIiwiaWQiLCJ0b3ByZWREb3RzY29wZVNlbGxlcnMiLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsInByaWNlIiwibmV3VG90YWwiLCJBRERfVE9fQ09NUEFSRSIsImFkZGVkSXRlbVRvQ29tcGFyZSIsIkFERF9RVUFOVElUWV9XSVRIX05VTUJFUiIsInF0eSIsIlJFTU9WRV9JVEVNIiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwiUkVNT1ZFX0lURU1fRlJPTV9DT01QQVJFIiwiQUREX1FVQU5USVRZIiwiU1VCX1FVQU5USVRZIiwiQUREX1NISVBQSU5HIiwiUkVTRVRfQ0FSVCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwibWFrZVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUNnRDs7QUFHaEQ7QUE0QkEsSUFBSUEsS0FBSjtBQUVBO0FBWUEsSUFBTUMsWUFBWSxHQUFHO0FBQ2pCQyxVQUFRLEVBQUVBLDREQURPO0FBRWpCQyxVQUFRLEVBQUVBLDREQUZPO0FBR2pCQyxVQUFRLEVBQUVBLDREQUhPO0FBSWpCQyxJQUFFLEVBQUVBLHNEQUphO0FBS2pCQyxVQUFRLEVBQUVBLDREQUxPO0FBTWpCQyxhQUFXLEVBQUVBLCtEQU5JO0FBT2pCQyxXQUFTLEVBQUVBLDZEQVBNO0FBUWpCQyxLQUFHLEVBQUVBLHVEQVJZO0FBU2pCQyxLQUFHLEVBQUVBLHVEQVRZO0FBVWpCQyxZQUFVLEVBQUVBLDhEQVZLO0FBV2pCQyxTQUFPLEVBQUVBLDJEQVhRO0FBWWpCQyxZQUFVLEVBQUVBLDhEQVpLO0FBYWpCQyxhQUFXLEVBQUNBLCtEQWJLO0FBY2pCQyxLQUFHLEVBQUNBLHVEQWRhO0FBZWpCQyxZQUFVLEVBQUNBLDhEQWZNO0FBZ0JqQkMsYUFBVyxFQUFFQSwrREFoQkk7QUFpQmpCQyxZQUFVLEVBQUVBLDhEQWpCSztBQWtCakJDLFlBQVUsRUFBRUEsOERBbEJLO0FBbUJyQkMsYUFBVyxFQUFFQSwrREFuQlE7QUFvQnJCQyxhQUFXLEVBQUVBLCtEQXBCUTtBQXFCckJDLFlBQVUsRUFBRUEsOERBckJTO0FBc0JyQkMsYUFBVyxFQUFFQSwrREF0QlE7QUF1QnJCQyxjQUFZLEVBQUVBLGdFQXZCTztBQXdCckJDLE9BQUssRUFBRUEseURBeEJjO0FBeUJyQkMsY0FBWSxFQUFFQSxnRUF6Qk87QUEwQmpCQyxZQUFVLEVBQUMsRUExQk07QUEy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dGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMWQ3MmMzMTBjNjk5ZDI5Y2I3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJyAvLyBkZWZhdWx0cyB0byBsb2NhbFN0b3JhZ2UgZm9yIHdlYlxuIFxuXG5pbXBvcnQge1xuICAgIHByb2R1Y3RzLCBcbiAgICBzZW1pQXV0aCwgXG4gICAgcmV2b2x2ZXIsIFxuICAgIGFrLCBcbiAgICB0YWN0aWNhbCwgXG4gICAgbGV2ZXJBY3Rpb24sIFxuICAgIGRlcnJpbmdlcixcbiAgICBhcnMsXG4gICAgYWtzLFxuICAgIGJvbHRBY3Rpb24sXG4gICAgaHVudGluZyxcbiAgICByZnRhY3RpY2FsLFxuICAgIHNlbGZkZWZlbnNlLFxuICAgIHJpbSxcbiAgICBoYW5kQW1tdW5pLFxuICAgIHJpZmxlYW1tdW5pLFxuICAgIHRvcFNlbGxlcnMsXG4gICAgcmlmbGVzY29wZSxcbnJlZERvdHNjb3BlLFxubmlnaHR2aXNpb24sXG5iaW5vY3VsYXJzLFxucmFuZ2VmaW5kZXIsXG5oYW5kZ3Vuc2lnaHQsXG5mbGFzaCxcbndlYXBvbmxpZ2h0c1xufSBmcm9tICcuLi9qc29uLWRhdGEvcHJvZHVjdHMnO1xuXG5sZXQgc3RvcmVcblxuaW1wb3J0IHsgXG4gICAgQUREX1RPX0NBUlQsXG4gICAgUkVNT1ZFX0lURU0sXG4gICAgU1VCX1FVQU5USVRZLFxuICAgIEFERF9RVUFOVElUWSwgXG4gICAgQUREX1NISVBQSU5HLFxuICAgIEFERF9RVUFOVElUWV9XSVRIX05VTUJFUixcbiAgICBSRVNFVF9DQVJULFxuICAgIEFERF9UT19DT01QQVJFLFxuICAgIFJFTU9WRV9JVEVNX0ZST01fQ09NUEFSRVxufSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcy9hY3Rpb24tbmFtZXMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwcm9kdWN0czogcHJvZHVjdHMsXG4gICAgc2VtaUF1dGg6IHNlbWlBdXRoLFxuICAgIHJldm9sdmVyOiByZXZvbHZlcixcbiAgICBhazogYWssXG4gICAgdGFjdGljYWw6IHRhY3RpY2FsLFxuICAgIGxldmVyQWN0aW9uOiBsZXZlckFjdGlvbixcbiAgICBkZXJyaW5nZXI6IGRlcnJpbmdlcixcbiAgICBhcnM6IGFycyxcbiAgICBha3M6IGFrcyxcbiAgICBib2x0QWN0aW9uOiBib2x0QWN0aW9uLFxuICAgIGh1bnRpbmc6IGh1bnRpbmcsXG4gICAgcmZ0YWN0aWNhbDogcmZ0YWN0aWNhbCxcbiAgICBzZWxmZGVmZW5zZTpzZWxmZGVmZW5zZSxcbiAgICByaW06cmltLFxuICAgIGhhbmRBbW11bmk6aGFuZEFtbXVuaSxcbiAgICByaWZsZWFtbXVuaTogcmlmbGVhbW11bmksXG4gICAgdG9wU2VsbGVyczogdG9wU2VsbGVycyxcbiAgICByaWZsZXNjb3BlOiByaWZsZXNjb3BlLFxucmVkRG90c2NvcGU6IHJlZERvdHNjb3BlLFxubmlnaHR2aXNpb246IG5pZ2h0dmlzaW9uLFxuYmlub2N1bGFyczogYmlub2N1bGFycyxcbnJhbmdlZmluZGVyOiByYW5nZWZpbmRlcixcbmhhbmRndW5zaWdodDogaGFuZGd1bnNpZ2h0LFxuZmxhc2g6IGZsYXNoLFxud2VhcG9ubGlnaHRzOiB3ZWFwb25saWdodHMsXG4gICAgYWRkZWRJdGVtczpbXSxcbiAgICBhZGRlZEl0ZW1zVG9Db21wYXJlOltdLFxuICAgIHRvdGFsOiAwLFxuICAgIHNoaXBwaW5nOiAwXG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICBcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1RPX0NBUlQpe1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnNlbWlBdXRoLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnJldm9sdmVyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmxldmVyQWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmRlcnJpbmdlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hcnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYWtzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmJvbHRBY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuaHVudGluZy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnNlbGZkZWZlbnNlLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnJpbS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5oYW5kQW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5yaWZsZWFtbXVuaS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50b3BTZWxsZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnJpZmxlc2NvcGUuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUudG9wU2VsbGVycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50b3BTZWxsZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRvcHJlZERvdHNjb3BlU2VsbGVycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50b3BTZWxsZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRvcFNlbGxlcnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUudG9wU2VsbGVycy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50b3BTZWxsZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKXtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSAxO1xuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9UT19DT01QQVJFKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbVRvQ29tcGFyZSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnNlbWlBdXRoLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnJldm9sdmVyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmxldmVyQWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmRlcnJpbmdlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hcnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYWtzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmJvbHRBY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuaHVudGluZy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5zZWxmZGVmZW5zZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUucmltLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmhhbmRBbW11bmkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnJpZmxlYW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRvcFNlbGxlcnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcblxuICAgICAgICBcbiAgICAgICAgYWRkZWRJdGVtVG9Db21wYXJlLnF1YW50aXR5ID0gMTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXNUb0NvbXBhcmU6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zVG9Db21wYXJlLCBhZGRlZEl0ZW1Ub0NvbXBhcmVdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSKXtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnNlbWlBdXRoLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnJldm9sdmVyLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmxldmVyQWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmRlcnJpbmdlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hcnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYWtzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmJvbHRBY3Rpb24uZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuaHVudGluZy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZnRhY3RpY2FsLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5zZWxmZGVmZW5zZS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUucmltLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmhhbmRBbW11bmkuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnJpZmxlYW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLnRvcFNlbGxlcnMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSlcbiAgICAgICAge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlICogYWN0aW9uLnF0eVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSAqIGFjdGlvbi5xdHlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcbiAgICAgICAgICAgICAgICB0b3RhbCA6IG5ld1RvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTSl7XG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbT0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXG4gICAgICAgIFxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUucHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkgKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRU1PVkVfSVRFTV9GUk9NX0NPTVBBUkUpe1xuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtc1RvQ29tcGFyZS5maWx0ZXIoaXRlbT0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXNUb0NvbXBhcmU6IG5ld19pdGVtc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9RVUFOVElUWSl7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSBTVUJfUVVBTlRJVFkpeyAgXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5zZW1pQXV0aC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5yZXZvbHZlci5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5hay5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5sZXZlckFjdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5kZXJyaW5nZXIuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUuYXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmFrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5ib2x0QWN0aW9uLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIHx8IHN0YXRlLmh1bnRpbmcuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcbiAgICAgICAgfHwgc3RhdGUucmZ0YWN0aWNhbC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKSBcbiAgICAgICAgfHwgc3RhdGUuc2VsZmRlZmVuc2UuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkgXG4gICAgICAgIHx8IHN0YXRlLnJpbS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS5oYW5kQW1tdW5pLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxuICAgICAgICB8fCBzdGF0ZS5yaWZsZWFtbXVuaS5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxuICAgICAgICB8fCBzdGF0ZS50b3BTZWxsZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAgICBpZihhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpe1xuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW09Pml0ZW0uaWQgIT09IGFjdGlvbi5pZClcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLnByaWNlXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5wcmljZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1NISVBQSU5HKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDZcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJyl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSA2XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVTRVRfQ0FSVCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICBzaGlwcGluZzogMFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cblxuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICAgIGtleTogJ3ByaW1hcnknLFxuICAgIHN0b3JhZ2UsXG59XG4gIFxuICBjb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcmVkdWNlcnMpXG4gIFxuICBmdW5jdGlvbiBtYWtlU3RvcmUoaW5pdGlhbFN0YXRlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgICAgcGVyc2lzdGVkUmVkdWNlcixcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKCkpXG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKHByZWxvYWRlZFN0YXRlKSA9PiB7XG4gICAgbGV0IF9zdG9yZSA9IHN0b3JlID8/IG1ha2VTdG9yZShwcmVsb2FkZWRTdGF0ZSlcbiAgXG4gICAgLy8gQWZ0ZXIgbmF2aWdhdGluZyB0byBhIHBhZ2Ugd2l0aCBhbiBpbml0aWFsIFJlZHV4IHN0YXRlLCBtZXJnZSB0aGF0IHN0YXRlXG4gICAgLy8gd2l0aCB0aGUgY3VycmVudCBzdGF0ZSBpbiB0aGUgc3RvcmUsIGFuZCBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgICBpZiAocHJlbG9hZGVkU3RhdGUgJiYgc3RvcmUpIHtcbiAgICAgIF9zdG9yZSA9IG1ha2VTdG9yZSh7XG4gICAgICAgIC4uLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgIC4uLnByZWxvYWRlZFN0YXRlLFxuICAgICAgfSlcbiAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IHN0b3JlXG4gICAgICBzdG9yZSA9IHVuZGVmaW5lZFxuICAgIH1cbiAgXG4gICAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgc3RvcmVcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfc3RvcmVcbiAgICAvLyBDcmVhdGUgdGhlIHN0b3JlIG9uY2UgaW4gdGhlIGNsaWVudFxuICAgIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlXG4gIFxuICAgIHJldHVybiBfc3RvcmVcbiAgfVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIHVzZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pXG4gICAgcmV0dXJuIHN0b3JlXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9