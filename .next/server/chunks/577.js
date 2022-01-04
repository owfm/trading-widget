exports.id = 577;
exports.ids = [577];
exports.modules = {

/***/ 577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Example)
/* harmony export */ });
/* harmony import */ var _reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(473);
/* harmony import */ var _reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_combobox_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_combobox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var _reach_combobox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_combobox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(875);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(match_sorter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(755);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(890);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








function Example() {
  const [term, setTerm] = react__WEBPACK_IMPORTED_MODULE_3__.useState('');
  const results = useCityMatch(term);

  const handleChange = event => setTerm(event.target.value);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_reach_combobox__WEBPACK_IMPORTED_MODULE_1__.Combobox, {
    className: "combobox-wrapper",
    "aria-label": "Accounts",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_reach_combobox__WEBPACK_IMPORTED_MODULE_1__.ComboboxInput, {
      placeholder: "Account Search",
      className: "combobox-input",
      onChange: handleChange
    }), results && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_reach_combobox__WEBPACK_IMPORTED_MODULE_1__.ComboboxPopover, {
      className: "shadow-popup",
      children: results.length > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_reach_combobox__WEBPACK_IMPORTED_MODULE_1__.ComboboxList, {
        children: results.slice(0, 10).map((result, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_reach_combobox__WEBPACK_IMPORTED_MODULE_1__.ComboboxOption, {
          value: `${result.code} (${result.AccountName})`
        }, index))
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        style: {
          display: 'block',
          margin: 8
        },
        children: "No results found"
      })
    })]
  });
}

function useCityMatch(term) {
  const throttledTerm = (0,react_use__WEBPACK_IMPORTED_MODULE_4__.useThrottle)(term, 100);
  return react__WEBPACK_IMPORTED_MODULE_3__.useMemo(() => term.trim() === '' ? null : (0,match_sorter__WEBPACK_IMPORTED_MODULE_2__.matchSorter)(_accounts__WEBPACK_IMPORTED_MODULE_5__.accounts, term, {
    keys: [item => `${item.code} (${item.AccountName})`]
  }), [throttledTerm]);
}

/***/ }),

/***/ 473:
/***/ (() => {



/***/ })

};
;