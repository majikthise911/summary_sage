"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_buildspace_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/buildspace-logo.png */ \"./assets/buildspace-logo.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [apiOutput, setApiOutput] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isGenerating, setIsGenerating] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const callGenerateEndpoint = async ()=>{\n        setIsGenerating(true);\n        console.log(\"Calling OpenAI...\");\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                userInput\n            })\n        });\n        const data = await response.json();\n        const { output  } = data;\n        console.log(\"OpenAI replied...\", output.text);\n        setApiOutput(\"\".concat(output.text));\n        setIsGenerating(false);\n    };\n    const onUserChangedText = (event)=>{\n        console.log(event.target.value);\n        setUserInput(event.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"root\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"GPT-3 Writer | SummarySage\"\n                }, void 0, false, {\n                    fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"header\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-title\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: \"sup, welcome to summary sage\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"header-subtitle\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"dump your messy notes below, we'll do the rest.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                lineNumber: 45,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"prompt-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"start typing here\",\n                                className: \"prompt-box\",\n                                value: userInput,\n                                onChange: onUserChangedText\n                            }, void 0, false, {\n                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"prompt-buttons\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: isGenerating ? \"generate-button loading\" : \"generate-button\",\n                                    onClick: callGenerateEndpoint,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"generate\",\n                                        children: isGenerating ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"loader\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 10\n                                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Generate\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 8\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 6\n                            }, undefined),\n                            apiOutput && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"output\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-header-container\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"output-header\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: \"Output\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                                lineNumber: 80,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"output-content\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: apiOutput\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"badge-container grow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://github.com/majikthise911/SummarySage\",\n                    target: \"_blank\",\n                    rel: \"noreferrer\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"badge\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_buildspace_logo_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"buildspace logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"check out other projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                    lineNumber: 91,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jordanclayton/code/summary_sage/pages/index.js\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Home, \"OPWmoErMOs8tLChUCF5yZfQXfoM=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUM0QjtBQUMxQjtBQUVqQyxNQUFNSSxPQUFPLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNJLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDTSxjQUFjQyxnQkFBZ0IsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUV0RCxNQUFNUSx1QkFBdUIsVUFBWTtRQUN4Q0QsZ0JBQWdCLElBQUk7UUFDcEJFLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxpQkFBaUI7WUFDN0NDLFFBQVE7WUFDUkMsU0FBUztnQkFDUixnQkFBZ0I7WUFDakI7WUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFZjtZQUFVO1FBQ2xDO1FBQ0EsTUFBTWdCLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtRQUNoQyxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHRjtRQUNuQlQsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQlUsT0FBT0MsSUFBSTtRQUM1Q2hCLGFBQWEsR0FBZSxPQUFaZSxPQUFPQyxJQUFJO1FBQzNCZCxnQkFBZ0IsS0FBSztJQUN0QjtJQUdBLE1BQU1lLG9CQUFvQixDQUFDQyxRQUFVO1FBQ3BDZCxRQUFRQyxHQUFHLENBQUNhLE1BQU1DLE1BQU0sQ0FBQ0MsS0FBSztRQUM5QnRCLGFBQWFvQixNQUFNQyxNQUFNLENBQUNDLEtBQUs7SUFDaEM7SUFFQSxxQkFDQyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2QsOERBQUM5QixrREFBSUE7MEJBQ0osNEVBQUMrQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDZCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FFZCw0RUFBQ0U7OENBQUc7Ozs7Ozs7Ozs7OzBDQUVMLDhEQUFDSDtnQ0FBSUMsV0FBVTswQ0FDZCw0RUFBQ0c7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1OLDhEQUFDSjt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUNJO2dDQUNBQyxhQUFZO2dDQUNaTCxXQUFVO2dDQUNWRixPQUFPdkI7Z0NBQ1ArQixVQUFVWDs7Ozs7OzBDQUVYLDhEQUFDSTtnQ0FBSUMsV0FBVTswQ0FDZCw0RUFBQ087b0NBQ0FQLFdBQ0NyQixlQUFlLDRCQUE0QixpQkFBaUI7b0NBRTdENkIsU0FBUzNCOzhDQUVULDRFQUFDa0I7d0NBQUlDLFdBQVU7a0RBQ2JyQiw2QkFDQSw4REFBQzhCOzRDQUFLVCxXQUFVOzs7OztzRUFFaEIsOERBQUNVO3NEQUFFOzs7OztxREFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFLSGpDLDJCQUNBLDhEQUFDc0I7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDZCw0RUFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2QsNEVBQUNXOzBEQUFHOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUdOLDhEQUFDWjt3Q0FBSUMsV0FBVTtrREFDZCw0RUFBQ1U7c0RBQUdqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTVQsOERBQUNzQjtnQkFBSUMsV0FBVTswQkFDZCw0RUFBQ087b0JBQ0FLLE1BQUs7b0JBQ0xmLFFBQU87b0JBQ1BnQixLQUFJOzhCQUVKLDRFQUFDZDt3QkFBSUMsV0FBVTs7MENBQ2QsOERBQUM3QixtREFBS0E7Z0NBQUMyQyxLQUFLMUMsbUVBQWNBO2dDQUFFMkMsS0FBSTs7Ozs7OzBDQUNoQyw4REFBQ0w7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQWxHTXBDO0tBQUFBO0FBb0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgYnVpbGRzcGFjZUxvZ28gZnJvbSBcIi4uL2Fzc2V0cy9idWlsZHNwYWNlLWxvZ28ucG5nXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG5cdGNvbnN0IFthcGlPdXRwdXQsIHNldEFwaU91dHB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblx0Y29uc3QgW2lzR2VuZXJhdGluZywgc2V0SXNHZW5lcmF0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHRjb25zdCBjYWxsR2VuZXJhdGVFbmRwb2ludCA9IGFzeW5jICgpID0+IHtcblx0XHRzZXRJc0dlbmVyYXRpbmcodHJ1ZSk7XG5cdFx0Y29uc29sZS5sb2coXCJDYWxsaW5nIE9wZW5BSS4uLlwiKTtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJJbnB1dCB9KSxcblx0XHR9KTtcblx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnN0IHsgb3V0cHV0IH0gPSBkYXRhO1xuXHRcdGNvbnNvbGUubG9nKFwiT3BlbkFJIHJlcGxpZWQuLi5cIiwgb3V0cHV0LnRleHQpO1xuXHRcdHNldEFwaU91dHB1dChgJHtvdXRwdXQudGV4dH1gKTtcblx0XHRzZXRJc0dlbmVyYXRpbmcoZmFsc2UpO1xuXHR9O1xuXHRcblxuXHRjb25zdCBvblVzZXJDaGFuZ2VkVGV4dCA9IChldmVudCkgPT4ge1xuXHRcdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0c2V0VXNlcklucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+R1BULTMgV3JpdGVyIHwgU3VtbWFyeVNhZ2U8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlxuXHRcdFx0XHRcdFx0ey8qIENoYW5nZSB5b3VyIGhlYWRsaW5lIGhlcmUgKi99XG5cdFx0XHRcdFx0XHQ8aDE+c3VwLCB3ZWxjb21lIHRvIHN1bW1hcnkgc2FnZTwvaDE+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc3VidGl0bGVcIj5cblx0XHRcdFx0XHRcdDxoMj5cblx0XHRcdFx0XHRcdFx0ZHVtcCB5b3VyIG1lc3N5IG5vdGVzIGJlbG93LCB3ZSdsbCBkbyB0aGUgcmVzdC5cblx0XHRcdFx0XHRcdDwvaDI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHJvbXB0LWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDx0ZXh0YXJlYVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJzdGFydCB0eXBpbmcgaGVyZVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwcm9tcHQtYm94XCJcblx0XHRcdFx0XHRcdHZhbHVlPXt1c2VySW5wdXR9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25Vc2VyQ2hhbmdlZFRleHR9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInByb21wdC1idXR0b25zXCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e1xuXHRcdFx0XHRcdFx0XHRcdGlzR2VuZXJhdGluZyA/IFwiZ2VuZXJhdGUtYnV0dG9uIGxvYWRpbmdcIiA6IFwiZ2VuZXJhdGUtYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtjYWxsR2VuZXJhdGVFbmRwb2ludH1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdHtpc0dlbmVyYXRpbmcgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsb2FkZXJcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxwPkdlbmVyYXRlPC9wPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHsvKiBOZXcgY29kZSBJIGFkZGVkIGhlcmUgKi99XG5cdFx0XHRcdFx0e2FwaU91dHB1dCAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm91dHB1dC1oZWFkZXItY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDM+T3V0cHV0PC9oMz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0LWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD57YXBpT3V0cHV0fTwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYWRnZS1jb250YWluZXIgZ3Jvd1wiPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFqaWt0aGlzZTkxMS9TdW1tYXJ5U2FnZVwiXG5cdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFkZ2VcIj5cblx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e2J1aWxkc3BhY2VMb2dvfSBhbHQ9XCJidWlsZHNwYWNlIGxvZ29cIiAvPlxuXHRcdFx0XHRcdFx0PHA+Y2hlY2sgb3V0IG90aGVyIHByb2plY3RzPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwiYnVpbGRzcGFjZUxvZ28iLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ1c2VySW5wdXQiLCJzZXRVc2VySW5wdXQiLCJhcGlPdXRwdXQiLCJzZXRBcGlPdXRwdXQiLCJpc0dlbmVyYXRpbmciLCJzZXRJc0dlbmVyYXRpbmciLCJjYWxsR2VuZXJhdGVFbmRwb2ludCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJvdXRwdXQiLCJ0ZXh0Iiwib25Vc2VyQ2hhbmdlZFRleHQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJoMSIsImgyIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYSIsIm9uQ2xpY2siLCJzcGFuIiwicCIsImgzIiwiaHJlZiIsInJlbCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});