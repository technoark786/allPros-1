webpackHotUpdate("static\\development\\pages\\candidates.js",{

/***/ "./pages/candidates/index.js":
/*!***********************************!*\
  !*** ./pages/candidates/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_tables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/tables */ "./components/tables/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layout */ "./layout/index.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _components_loader_CircularLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/loader/CircularLoader */ "./components/loader/CircularLoader.jsx");


var _jsxFileName = "F:\\Shrinath\\Technoark\\allPros\\pages\\candidates\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;












function CandidatesPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]),
      customer = _useState[0],
      setCustomer = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref2, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _lib_api__WEBPACK_IMPORTED_MODULE_9__["default"].get('/customers');

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                setCustomer(data);
                setIsLoading(false);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  var addCustomer = function addCustomer() {
    router.push('/customers/add');
  };

  if (!customer) {
    return __jsx(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      pageName: "Customer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(_components_loader_CircularLoader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }

  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    pageName: "Candidates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    padding: 3,
    clone: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Candidates"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    onClick: addCustomer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    padding: 3,
    clone: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_components_tables__WEBPACK_IMPORTED_MODULE_7__["Table"], {
    columns: [{
      title: 'Name',
      field: 'name'
    }, {
      title: 'Email',
      field: 'email'
    }, {
      title: 'Cantact',
      field: 'contact'
    }] // data={customer}
    ,
    options: {
      pageSize: 25,
      pageSizeOptions: [5, 10, 25, 50, 75, 100],
      toolbar: true,
      paging: true,
      actionsColumnIndex: -1,
      headerStyle: {
        backgroundColor: '#3f0f3f',
        color: '#FFF'
      }
    },
    isLoading: isLoading // data={query =>
    //   new Promise((resolve, reject) => {
    //     // let url = 'https://reqres.in/api/users?'
    //     // url += 'per_page=' + query.pageSize
    //     // url += '&page=' + (query.page + 1)
    //     // fetch(url)
    //     api.get('/customers')
    //       // .then(response => response.json())
    //       .then(result => {
    //         resolve({
    //           data: result.data,
    //           page: result.page - 1,
    //           totalCount: result.total,
    //         })
    //       })
    //   })
    // }
    ,
    data: {
      name: "John",
      email: "john@co",
      contact: "123123"
    },
    actions: [{
      icon: function icon() {
        return __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_4___default.a, {
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        });
      },
      tooltip: 'Edit Customer',
      onClick: function onClick(event, rowData) {
        router.push("/customers/edit/[id]", "/customers/edit/".concat(rowData.id));
      }
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (CandidatesPage);

/***/ })

})
//# sourceMappingURL=candidates.js.c8c3df53784d76b3c9ee.hot-update.js.map