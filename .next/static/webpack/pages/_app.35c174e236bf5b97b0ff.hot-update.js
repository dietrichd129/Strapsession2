webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView, logEvent, logException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");

var initGA = function initGA() {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].initialize('G-J1T9E20VS3');
};
var logPageView = function logPageView() {
  console.log("Logging pageview for ".concat(window.location.pathname));
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].pageview(window.location.pathname);
};
var logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event({
      category: category,
      action: action
    });
  }
};
var logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].exception({
      description: description,
      fatal: fatal
    });
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYW5hbHl0aWNzLmpzIl0sIm5hbWVzIjpbImluaXRHQSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNldCIsInBhZ2UiLCJwYWdldmlldyIsImxvZ0V2ZW50IiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJldmVudCIsImxvZ0V4Y2VwdGlvbiIsImRlc2NyaXB0aW9uIiwiZmF0YWwiLCJleGNlcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUMsa0RBQU8sQ0FBQ0MsVUFBUixDQUFtQixjQUFuQjtBQUNELENBSE07QUFJQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQy9CSixTQUFPLENBQUNDLEdBQVIsZ0NBQW9DSSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQXBEO0FBQ0FMLGtEQUFPLENBQUNNLEdBQVIsQ0FBWTtBQUFFQyxRQUFJLEVBQUVKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkM7QUFBeEIsR0FBWjtBQUNBTCxrREFBTyxDQUFDUSxRQUFSLENBQWlCTCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLFFBQWpDO0FBQ0QsQ0FKTTtBQUtBLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQWdDO0FBQUEsTUFBL0JDLFFBQStCLHVFQUFwQixFQUFvQjtBQUFBLE1BQWhCQyxNQUFnQix1RUFBUCxFQUFPOztBQUN0RCxNQUFJRCxRQUFRLElBQUlDLE1BQWhCLEVBQXdCO0FBQ3RCWCxvREFBTyxDQUFDWSxLQUFSLENBQWM7QUFBRUYsY0FBUSxFQUFSQSxRQUFGO0FBQVlDLFlBQU0sRUFBTkE7QUFBWixLQUFkO0FBQ0Q7QUFDRixDQUpNO0FBS0EsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBcUM7QUFBQSxNQUFwQ0MsV0FBb0MsdUVBQXRCLEVBQXNCO0FBQUEsTUFBbEJDLEtBQWtCLHVFQUFWLEtBQVU7O0FBQy9ELE1BQUlELFdBQUosRUFBaUI7QUFDZmQsb0RBQU8sQ0FBQ2dCLFNBQVIsQ0FBa0I7QUFBRUYsaUJBQVcsRUFBWEEsV0FBRjtBQUFlQyxXQUFLLEVBQUxBO0FBQWYsS0FBbEI7QUFDRDtBQUNGLENBSk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNWMxNzRlMjM2YmY1Yjk3YjBmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXHJcbmV4cG9ydCBjb25zdCBpbml0R0EgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ0dBIGluaXQnKVxyXG4gIFJlYWN0R0EuaW5pdGlhbGl6ZSgnRy1KMVQ5RTIwVlMzJylcclxufVxyXG5leHBvcnQgY29uc3QgbG9nUGFnZVZpZXcgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYExvZ2dpbmcgcGFnZXZpZXcgZm9yICR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfWApXHJcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcclxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcclxufVxyXG5leHBvcnQgY29uc3QgbG9nRXZlbnQgPSAoY2F0ZWdvcnkgPSAnJywgYWN0aW9uID0gJycpID0+IHtcclxuICBpZiAoY2F0ZWdvcnkgJiYgYWN0aW9uKSB7XHJcbiAgICBSZWFjdEdBLmV2ZW50KHsgY2F0ZWdvcnksIGFjdGlvbiB9KVxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nRXhjZXB0aW9uID0gKGRlc2NyaXB0aW9uID0gJycsIGZhdGFsID0gZmFsc2UpID0+IHtcclxuICBpZiAoZGVzY3JpcHRpb24pIHtcclxuICAgIFJlYWN0R0EuZXhjZXB0aW9uKHsgZGVzY3JpcHRpb24sIGZhdGFsIH0pXHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==