"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(default)/page",{

/***/ "(app-client)/./components/modal-video.tsx":
/*!************************************!*\
  !*** ./components/modal-video.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ModalVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// modal-video.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction ModalVideo(param) {\n    let { thumb, thumbWidth, thumbHeight, thumbAlt, video, videoWidth, videoHeight } = param;\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex justify-center items-center\",\n        \"data-aos\": \"fade-up\",\n        \"data-aos-delay\": \"200\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            ref: videoRef,\n            width: videoWidth,\n            height: videoHeight,\n            autoPlay: true,\n            muted: true,\n            loop: true,\n            controls: true,\n            className: \"absolute z-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: video,\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/marcusgraves/repodex_corpsite/components/modal-video.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                \"Your browser does not support the video tag.\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/marcusgraves/repodex_corpsite/components/modal-video.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/marcusgraves/repodex_corpsite/components/modal-video.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(ModalVideo, \"0CLVWOVx+8g0ODBjgEMJWUwEryM=\");\n_c = ModalVideo;\nvar _c;\n$RefreshReg$(_c, \"ModalVideo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9tb2RhbC12aWRlby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLGtCQUFrQjs7O0FBSW1CO0FBY3RCLFNBQVNFLFdBQVcsS0FRakI7UUFSaUIsRUFDakNDLEtBQUssRUFDTEMsVUFBVSxFQUNWQyxXQUFXLEVBQ1hDLFFBQVEsRUFDUkMsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLFdBQVcsRUFDSyxHQVJpQjs7SUFVakMsTUFBTUMsV0FBV1QsNkNBQU1BLENBQW1CO0lBRTFDLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVO1FBQTRDQyxZQUFTO1FBQVVDLGtCQUFlO2tCQUczRiw0RUFBQ1A7WUFDQ1EsS0FBS0w7WUFDTE0sT0FBT1I7WUFDUFMsUUFBUVI7WUFDUlMsUUFBUTtZQUNSQyxLQUFLO1lBQ0xDLElBQUk7WUFDSkMsUUFBUTtZQUNSVCxXQUFVOzs4QkFFViw4REFBQ1U7b0JBQU9DLEtBQUtoQjtvQkFBT2lCLE1BQUs7Ozs7OztnQkFBYzs7Ozs7Ozs7Ozs7O0FBUS9DO0dBbEN3QnRCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9kYWwtdmlkZW8udHN4P2RmNjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9kYWwtdmlkZW8udHN4XG5cbid1c2UgY2xpZW50J1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IFN0YXRpY0ltYWdlRGF0YSB9IGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuaW50ZXJmYWNlIE1vZGFsVmlkZW9Qcm9wcyB7XG4gIHRodW1iOiBTdGF0aWNJbWFnZURhdGFcbiAgdGh1bWJXaWR0aDogbnVtYmVyXG4gIHRodW1iSGVpZ2h0OiBudW1iZXJcbiAgdGh1bWJBbHQ6IHN0cmluZ1xuICB2aWRlbzogc3RyaW5nXG4gIHZpZGVvV2lkdGg6IG51bWJlclxuICB2aWRlb0hlaWdodDogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsVmlkZW8oe1xuICB0aHVtYixcbiAgdGh1bWJXaWR0aCxcbiAgdGh1bWJIZWlnaHQsXG4gIHRodW1iQWx0LFxuICB2aWRlbyxcbiAgdmlkZW9XaWR0aCxcbiAgdmlkZW9IZWlnaHQsXG59OiBNb2RhbFZpZGVvUHJvcHMpIHtcbiAgXG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KG51bGwpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIj5cbiAgICAgIFxuICAgICAgey8qIFZpZGVvICovfVxuICAgICAgPHZpZGVvIFxuICAgICAgICByZWY9e3ZpZGVvUmVmfSBcbiAgICAgICAgd2lkdGg9e3ZpZGVvV2lkdGh9IFxuICAgICAgICBoZWlnaHQ9e3ZpZGVvSGVpZ2h0fSBcbiAgICAgICAgYXV0b1BsYXkgXG4gICAgICAgIG11dGVkIFxuICAgICAgICBsb29wXG4gICAgICAgIGNvbnRyb2xzIFxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwXCJcbiAgICAgID5cbiAgICAgICAgPHNvdXJjZSBzcmM9e3ZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIHZpZGVvIHRhZy5cbiAgICAgIDwvdmlkZW8+XG5cbiAgICAgIHsvKiBUaHVtYm5haWwgKHRoaXMgY2FuIGJlIHJlbW92ZWQgaWYgeW91IGRvbid0IG5lZWQgaXQsIG9yIGNhbiBiZSB1c2VkIGFzIGEgZmFsbGJhY2spICovfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIk1vZGFsVmlkZW8iLCJ0aHVtYiIsInRodW1iV2lkdGgiLCJ0aHVtYkhlaWdodCIsInRodW1iQWx0IiwidmlkZW8iLCJ2aWRlb1dpZHRoIiwidmlkZW9IZWlnaHQiLCJ2aWRlb1JlZiIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtYW9zIiwiZGF0YS1hb3MtZGVsYXkiLCJyZWYiLCJ3aWR0aCIsImhlaWdodCIsImF1dG9QbGF5IiwibXV0ZWQiLCJsb29wIiwiY29udHJvbHMiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/modal-video.tsx\n"));

/***/ })

});