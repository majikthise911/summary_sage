"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n// Prompt #1\nconst basePromptPrefix = `\nWrite me a detailed table of contents for a blog post with the title below.\n\nTitle:\n`;\nconst generateAction = async (req, res)=>{\n    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);\n    const baseCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${basePromptPrefix}${req.body.userInput}\\n`,\n        temperature: 0.8,\n        max_tokens: 250\n    });\n    const basePromptOutput = baseCompletion.data.choices.pop();\n    // I build Prompt #2.\n    const secondPrompt = `\n\tTake the table of contents and title of the blog post below and generate a blog post written in the style of Paul Graham. Make it feel like a story. Don't just list the points. Go deep into each one. Explain why.\n\n Title: ${req.body.userInput}\n\n Table of Contents: ${basePromptOutput.text}\n\n Blog Post:\n `;\n    // I call the OpenAI API a second time with Prompt #2\n    const secondPromptCompletion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: `${secondPrompt}`,\n        // I set a higher temperature for this one. Up to you!\n        temperature: 0.85,\n        // I also increase max_tokens.\n        max_tokens: 1500\n    });\n    // Get the output\n    const secondPromptOutput = secondPromptCompletion.data.choices.pop();\n    // Send over the Prompt #2's output to our UI instead of Prompt #1's.\n    res.status(200).json({\n        output: secondPromptOutput\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAction);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN2Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQ25DO0FBRUEsTUFBTUMsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsWUFBWTtBQUNaLE1BQU1NLG1CQUFtQixDQUFDOzs7O0FBSTFCLENBQUM7QUFFRCxNQUFNQyxpQkFBaUIsT0FBT0MsS0FBS0MsTUFBUTtJQUMxQ0MsUUFBUUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFTCxpQkFBaUIsRUFBRUUsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUUzRCxNQUFNQyxpQkFBaUIsTUFBTVQsT0FBT1UsZ0JBQWdCLENBQUM7UUFDcERDLE9BQU87UUFDUEMsUUFBUSxDQUFDLEVBQUVYLGlCQUFpQixFQUFFRSxJQUFJSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDcERLLGFBQWE7UUFDYkMsWUFBWTtJQUNiO0lBRUEsTUFBTUMsbUJBQW1CTixlQUFlTyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRztJQUV4RCxxQkFBcUI7SUFDckIsTUFBTUMsZUFBZSxDQUFDOzs7UUFHZixFQUFFaEIsSUFBSUksSUFBSSxDQUFDQyxTQUFTLENBQUM7O29CQUVULEVBQUVPLGlCQUFpQkssSUFBSSxDQUFDOzs7Q0FHM0MsQ0FBQztJQUVELHFEQUFxRDtJQUNyRCxNQUFNQyx5QkFBeUIsTUFBTXJCLE9BQU9VLGdCQUFnQixDQUFDO1FBQzVEQyxPQUFPO1FBQ1BDLFFBQVEsQ0FBQyxFQUFFTyxhQUFhLENBQUM7UUFDekIsc0RBQXNEO1FBQ3RETixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCQyxZQUFZO0lBQ2I7SUFFQSxpQkFBaUI7SUFDakIsTUFBTVEscUJBQXFCRCx1QkFBdUJMLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHO0lBRWxFLHFFQUFxRTtJQUNyRWQsSUFBSW1CLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUUg7SUFBbUI7QUFDbkQ7QUFFQSxpRUFBZXBCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY3JhdGNocGFkLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuXHRhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbi8vIFByb21wdCAjMVxuY29uc3QgYmFzZVByb21wdFByZWZpeCA9IGBcbldyaXRlIG1lIGEgZGV0YWlsZWQgdGFibGUgb2YgY29udGVudHMgZm9yIGEgYmxvZyBwb3N0IHdpdGggdGhlIHRpdGxlIGJlbG93LlxuXG5UaXRsZTpcbmA7XG5cbmNvbnN0IGdlbmVyYXRlQWN0aW9uID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG5cdGNvbnNvbGUubG9nKGBBUEk6ICR7YmFzZVByb21wdFByZWZpeH0ke3JlcS5ib2R5LnVzZXJJbnB1dH1gKTtcblxuXHRjb25zdCBiYXNlQ29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcblx0XHRtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG5cdFx0cHJvbXB0OiBgJHtiYXNlUHJvbXB0UHJlZml4fSR7cmVxLmJvZHkudXNlcklucHV0fVxcbmAsXG5cdFx0dGVtcGVyYXR1cmU6IDAuOCxcblx0XHRtYXhfdG9rZW5zOiAyNTAsXG5cdH0pO1xuXG5cdGNvbnN0IGJhc2VQcm9tcHRPdXRwdXQgPSBiYXNlQ29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cblx0Ly8gSSBidWlsZCBQcm9tcHQgIzIuXG5cdGNvbnN0IHNlY29uZFByb21wdCA9IGBcblx0VGFrZSB0aGUgdGFibGUgb2YgY29udGVudHMgYW5kIHRpdGxlIG9mIHRoZSBibG9nIHBvc3QgYmVsb3cgYW5kIGdlbmVyYXRlIGEgYmxvZyBwb3N0IHdyaXR0ZW4gaW4gdGhlIHN0eWxlIG9mIFBhdWwgR3JhaGFtLiBNYWtlIGl0IGZlZWwgbGlrZSBhIHN0b3J5LiBEb24ndCBqdXN0IGxpc3QgdGhlIHBvaW50cy4gR28gZGVlcCBpbnRvIGVhY2ggb25lLiBFeHBsYWluIHdoeS5cblxuIFRpdGxlOiAke3JlcS5ib2R5LnVzZXJJbnB1dH1cblxuIFRhYmxlIG9mIENvbnRlbnRzOiAke2Jhc2VQcm9tcHRPdXRwdXQudGV4dH1cblxuIEJsb2cgUG9zdDpcbiBgO1xuXG5cdC8vIEkgY2FsbCB0aGUgT3BlbkFJIEFQSSBhIHNlY29uZCB0aW1lIHdpdGggUHJvbXB0ICMyXG5cdGNvbnN0IHNlY29uZFByb21wdENvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG5cdFx0bW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuXHRcdHByb21wdDogYCR7c2Vjb25kUHJvbXB0fWAsXG5cdFx0Ly8gSSBzZXQgYSBoaWdoZXIgdGVtcGVyYXR1cmUgZm9yIHRoaXMgb25lLiBVcCB0byB5b3UhXG5cdFx0dGVtcGVyYXR1cmU6IDAuODUsXG5cdFx0Ly8gSSBhbHNvIGluY3JlYXNlIG1heF90b2tlbnMuXG5cdFx0bWF4X3Rva2VuczogMTUwMCxcblx0fSk7XG5cblx0Ly8gR2V0IHRoZSBvdXRwdXRcblx0Y29uc3Qgc2Vjb25kUHJvbXB0T3V0cHV0ID0gc2Vjb25kUHJvbXB0Q29tcGxldGlvbi5kYXRhLmNob2ljZXMucG9wKCk7XG5cblx0Ly8gU2VuZCBvdmVyIHRoZSBQcm9tcHQgIzIncyBvdXRwdXQgdG8gb3VyIFVJIGluc3RlYWQgb2YgUHJvbXB0ICMxJ3MuXG5cdHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgb3V0cHV0OiBzZWNvbmRQcm9tcHRPdXRwdXQgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUFjdGlvbjtcbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsImJhc2VQcm9tcHRQcmVmaXgiLCJnZW5lcmF0ZUFjdGlvbiIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwidXNlcklucHV0IiwiYmFzZUNvbXBsZXRpb24iLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJiYXNlUHJvbXB0T3V0cHV0IiwiZGF0YSIsImNob2ljZXMiLCJwb3AiLCJzZWNvbmRQcm9tcHQiLCJ0ZXh0Iiwic2Vjb25kUHJvbXB0Q29tcGxldGlvbiIsInNlY29uZFByb21wdE91dHB1dCIsInN0YXR1cyIsImpzb24iLCJvdXRwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();