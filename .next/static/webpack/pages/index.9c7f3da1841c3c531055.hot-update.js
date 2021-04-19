webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Contact.jsx":
/*!********************************!*\
  !*** ./components/Contact.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/contact.module.scss */ "./components/styles/contact.module.scss");
/* harmony import */ var _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\React js project\\Portfolio_dwiky_baru\\components\\Contact.jsx",
    _s = $RefreshSig$();





var formSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
  username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("name cannot be empty").max(25, "maximum to 25 characters"),
  email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("email cannot be empty").max(100, "maximum to 100 characters"),
  message: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required("minimum to 5 characters").min(5, "minimum to 5 characters")
});

function Contact() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      form = _useState[0],
      setForm = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
    id: "contact",
    className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__top,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__top__title,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      initialValues: {
        username: "",
        email: "",
        message: ""
      },
      validationSchema: formSchema,
      onSubmit: function onSubmit(values) {
        setForm(values);
        console.log(form);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__form,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          type: "text",
          name: "username",
          "aria-label": "name",
          placeholder: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
          name: "username",
          component: "span",
          className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__form__messageError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          type: "email",
          name: "email",
          "aria-label": "email",
          placeholder: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
          name: "email",
          component: "span",
          className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__form__messageError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          component: "textarea",
          cols: "50",
          rows: "6",
          name: "message",
          "aria-label": "message",
          placeholder: "Message"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_3__["ErrorMessage"], {
          name: "message",
          component: "span",
          className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__form__messageError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_contact_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container__form__btn,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            type: "submit",
            children: "Send Message"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

_s(Contact, "I6iEyuLe3H6qjcrvzHpM3hg7SPo=");

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c;

$RefreshReg$(_c, "Contact");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LmpzeCJdLCJuYW1lcyI6WyJmb3JtU2NoZW1hIiwiWXVwIiwic2hhcGUiLCJ1c2VybmFtZSIsInJlcXVpcmVkIiwibWF4IiwiZW1haWwiLCJtZXNzYWdlIiwibWluIiwiQ29udGFjdCIsInVzZVN0YXRlIiwiZm9ybSIsInNldEZvcm0iLCJzdHlsZXMiLCJjb250YWluZXIiLCJjb250YWluZXJfX3RvcCIsImNvbnRhaW5lcl9fdG9wX190aXRsZSIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJjb250YWluZXJfX2Zvcm0iLCJjb250YWluZXJfX2Zvcm1fX21lc3NhZ2VFcnJvciIsImNvbnRhaW5lcl9fZm9ybV9fYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsMENBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUNsQ0MsVUFBUSxFQUFFRiwwQ0FBQSxHQUNMRyxRQURLLENBQ0ksc0JBREosRUFFTEMsR0FGSyxDQUVELEVBRkMsRUFFRywwQkFGSCxDQUR3QjtBQUlsQ0MsT0FBSyxFQUFFTCwwQ0FBQSxHQUNGRyxRQURFLENBQ08sdUJBRFAsRUFFRkMsR0FGRSxDQUVFLEdBRkYsRUFFTywyQkFGUCxDQUoyQjtBQU9sQ0UsU0FBTyxFQUFFTiwwQ0FBQSxHQUFhRyxRQUFiLENBQXNCLHlCQUF0QixFQUFpREksR0FBakQsQ0FBcUQsQ0FBckQsRUFBd0QseUJBQXhEO0FBUHlCLENBQW5CLENBQW5COztBQVVBLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxFQUFELENBRGpCO0FBQUEsTUFDUkMsSUFEUTtBQUFBLE1BQ0ZDLE9BREU7O0FBR2Ysc0JBQ0k7QUFBUyxNQUFFLEVBQUMsU0FBWjtBQUFzQixhQUFTLEVBQUVDLGtFQUFNLENBQUNDLFNBQXhDO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVELGtFQUFNLENBQUNFLGNBQXZCO0FBQUEsNkJBQ0k7QUFBSyxpQkFBUyxFQUFFRixrRUFBTSxDQUFDRyxxQkFBdkI7QUFBQSwrQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSSxxRUFBQyw2Q0FBRDtBQUNJLG1CQUFhLEVBQUU7QUFDWGIsZ0JBQVEsRUFBRSxFQURDO0FBRVhHLGFBQUssRUFBRSxFQUZJO0FBR1hDLGVBQU8sRUFBRTtBQUhFLE9BRG5CO0FBTUksc0JBQWdCLEVBQUVQLFVBTnRCO0FBT0ksY0FBUSxFQUFFLGtCQUFDaUIsTUFBRCxFQUFZO0FBQ2xCTCxlQUFPLENBQUNLLE1BQUQsQ0FBUDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjtBQUNILE9BVkw7QUFBQSw2QkFZSSxxRUFBQywyQ0FBRDtBQUFNLGlCQUFTLEVBQUVFLGtFQUFNLENBQUNPLGVBQXhCO0FBQUEsZ0NBQ0kscUVBQUMsNENBQUQ7QUFDSSxjQUFJLEVBQUMsTUFEVDtBQUVJLGNBQUksRUFBQyxVQUZUO0FBR0ksd0JBQVcsTUFIZjtBQUlJLHFCQUFXLEVBQUM7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQU9JLHFFQUFDLG1EQUFEO0FBQ0ksY0FBSSxFQUFDLFVBRFQ7QUFFSSxtQkFBUyxFQUFDLE1BRmQ7QUFHSSxtQkFBUyxFQUFFUCxrRUFBTSxDQUFDUTtBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBYUkscUVBQUMsNENBQUQ7QUFDSSxjQUFJLEVBQUMsT0FEVDtBQUVJLGNBQUksRUFBQyxPQUZUO0FBR0ksd0JBQVcsT0FIZjtBQUlJLHFCQUFXLEVBQUM7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiSixlQW1CSSxxRUFBQyxtREFBRDtBQUNJLGNBQUksRUFBQyxPQURUO0FBRUksbUJBQVMsRUFBQyxNQUZkO0FBR0ksbUJBQVMsRUFBRVIsa0VBQU0sQ0FBQ1E7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQkosZUF3QkkscUVBQUMsNENBQUQ7QUFDSSxtQkFBUyxFQUFDLFVBRGQ7QUFFSSxjQUFJLEVBQUMsSUFGVDtBQUdJLGNBQUksRUFBQyxHQUhUO0FBSUksY0FBSSxFQUFDLFNBSlQ7QUFLSSx3QkFBVyxTQUxmO0FBTUkscUJBQVcsRUFBQztBQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXhCSixlQWdDSSxxRUFBQyxtREFBRDtBQUNJLGNBQUksRUFBQyxTQURUO0FBRUksbUJBQVMsRUFBQyxNQUZkO0FBR0ksbUJBQVMsRUFBRVIsa0VBQU0sQ0FBQ1E7QUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQ0osZUFxQ0k7QUFBSyxtQkFBUyxFQUFFUixrRUFBTSxDQUFDUyxvQkFBdkI7QUFBQSxpQ0FDSTtBQUFRLGdCQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQStESDs7R0FsRVFiLE87O0tBQUFBLE87QUFvRU1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjljN2YzZGExODQxYzNjNTMxMDU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9jb250YWN0Lm1vZHVsZS5zY3NzXCJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcbmltcG9ydCB7IEZvcm1paywgRmllbGQsIEZvcm0sIEVycm9yTWVzc2FnZSB9IGZyb20gXCJmb3JtaWtcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBmb3JtU2NoZW1hID0gWXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgICB1c2VybmFtZTogWXVwLnN0cmluZygpXG4gICAgICAgIC5yZXF1aXJlZChcIm5hbWUgY2Fubm90IGJlIGVtcHR5XCIpXG4gICAgICAgIC5tYXgoMjUsIFwibWF4aW11bSB0byAyNSBjaGFyYWN0ZXJzXCIpLFxuICAgIGVtYWlsOiBZdXAuc3RyaW5nKClcbiAgICAgICAgLnJlcXVpcmVkKFwiZW1haWwgY2Fubm90IGJlIGVtcHR5XCIpXG4gICAgICAgIC5tYXgoMTAwLCBcIm1heGltdW0gdG8gMTAwIGNoYXJhY3RlcnNcIiksXG4gICAgbWVzc2FnZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKFwibWluaW11bSB0byA1IGNoYXJhY3RlcnNcIikubWluKDUsIFwibWluaW11bSB0byA1IGNoYXJhY3RlcnNcIiksXG59KVxuXG5mdW5jdGlvbiBDb250YWN0KCkge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKFwiXCIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3RvcH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX3RvcF9fdGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+Q29udGFjdDwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb3JtaWtcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2Zvcm1TY2hlbWF9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybSh2YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2Zvcm19PlxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2Zvcm1fX21lc3NhZ2VFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RXJyb3JNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2Zvcm1fX21lc3NhZ2VFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJ0ZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2Zvcm1fX21lc3NhZ2VFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfX2Zvcm1fX2J0bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZW5kIE1lc3NhZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=