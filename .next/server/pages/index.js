"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,635];
exports.modules = {

/***/ 748:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AccountSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(577);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_0__]);
framer_motion__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const App = () => {
  const [ladderVisible, setLadderVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
  const [buyChange, setBuyChange] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
  const [sellChange, setSellChange] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null); // const sellValue = pricesLadder?.bid[1]?.price;
  // const buyValue = pricesLadder?.offer[1]?.price;

  const [buyValue, setBuyValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1000.0);
  const [sellValue, setSellValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(950.0);
  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
    const interval = setInterval(() => {
      setBuyValue(prev => {
        const newValue = Math.random() > 0.5 ? prev + Math.random() : prev - Math.random();

        if (newValue > prev) {
          setBuyChange('up');
          setTimeout(() => {
            setBuyChange(null);
          }, 350);
        }

        if (newValue < prev) {
          setBuyChange('down');
          setTimeout(() => {
            setBuyChange(null);
          }, 350);
        }

        return newValue;
      });
      setSellValue(prev => {
        const newValue = Math.random() > 0.5 ? prev + Math.random() : prev - Math.random();

        if (newValue > prev) {
          setSellChange('up');
          setTimeout(() => {
            setSellChange(null);
          }, 350);
        }

        if (newValue < prev) {
          setSellChange('down');
          setTimeout(() => {
            setSellChange(null);
          }, 350);
        }

        return newValue;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLadderShowClick = () => {
    setLadderVisible(!ladderVisible);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: "container",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("header", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          value: "CP",
          children: "3M Copper"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          value: "AA",
          children: "3M Alum"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          value: "SN",
          children: "3M Tin"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          value: "ZN",
          children: "3M Zinc"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
      className: "price-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "price-box sell",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
          children: "SELL"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
          className: "price",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "most-sig",
            children: sellValue.toFixed(2).split('.')[0].slice(0, -2)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mid-sig",
            children: [sellValue.toFixed(2).split('.')[0].slice(-2), "."]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "least-sig",
            children: sellValue.toFixed(2).split('.')[1]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.AnimatePresence, {
          children: buyChange !== null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
            className: `change ${buyChange}`,
            initial: {
              opacity: 1
            },
            animate: {
              opacity: 0
            },
            exit: {
              opacity: 0
            }
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "price-box buy",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h2", {
          children: "BUY"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
          className: "price",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "most-sig",
            children: buyValue.toFixed(2).split('.')[0].slice(0, -2)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "mid-sig",
            children: [buyValue.toFixed(2).split('.')[0].slice(-2), "."]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "least-sig",
            children: buyValue.toFixed(2).split('.')[1]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.AnimatePresence, {
          children: sellChange !== null && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
            className: `change ${sellChange}`,
            initial: {
              opacity: 1
            },
            animate: {
              opacity: 0
            },
            exit: {
              opacity: 0
            }
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
      className: "inputs",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_AccountSearch__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
        className: "half-width",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          children: "XLME"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          children: "XALT"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          children: "JLQD"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
        className: "half-width",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          children: "FOK"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          children: "IOC"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("input", {
        className: "half-width",
        type: "number"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
        className: "half-width",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          children: "tonne"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("option", {
          children: "lot"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        className: "half-width sell",
        children: "sell"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
        className: "half-width buy",
        children: "buy "
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
        whileHover: {
          transform: 'rotate(180deg)',
          backgroundColor: 'var(--stonex-primary-mid-blue)',
          color: 'var(--stonex-neutral-grey-3)'
        },
        transition: {
          type: 'spring',
          stiffness: 250
        },
        className: "expand-icon",
        onClick: handleLadderShowClick,
        children: ladderVisible ? '-' : '+'
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.AnimatePresence, {
      children: ladderVisible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.section, {
        className: "ladder-wrapper",
        initial: {
          height: 0,
          opacity: 0,
          scale: 0.2
        },
        animate: {
          height: 'auto',
          opacity: 1,
          scale: 1
        },
        exit: {
          height: 0,
          scale: 0
        },
        transition: [{
          type: 'spring',
          stiffness: 300,
          duration: 2
        }],
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
          id: "price-ladder-table",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "4"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(950).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: Number(960).toFixed(2)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
              children: "10"
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
});

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("@reach/combobox");

/***/ }),

/***/ 875:
/***/ ((module) => {

module.exports = require("match-sorter");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 755:
/***/ ((module) => {

module.exports = require("react-use");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [890,577], () => (__webpack_exec__(748)));
module.exports = __webpack_exports__;

})();