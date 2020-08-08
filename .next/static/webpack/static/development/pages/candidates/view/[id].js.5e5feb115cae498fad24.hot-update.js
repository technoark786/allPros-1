webpackHotUpdate("static\\development\\pages\\candidates\\view\\[id].js",{

/***/ "./pages/candidates/view/[id].js":
/*!***************************************!*\
  !*** ./pages/candidates/view/[id].js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_fieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/fieldset */ "./components/fieldset/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../layout */ "./layout/index.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/context */ "./lib/context.js");
/* harmony import */ var _components_forms_CustomerForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/forms/CustomerForm */ "./components/forms/CustomerForm.jsx");
/* harmony import */ var _components_loader_CircularLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../components/loader/CircularLoader */ "./components/loader/CircularLoader.jsx");


var _jsxFileName = "F:\\Shrinath\\Technoark\\allPros\\pages\\candidates\\view\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;













var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    accountPaper: {
      padding: 20
    },
    margin: {
      margin: '60px 0'
    },
    deleteButton: {
      color: 'white',
      backgroundColor: theme.palette.danger.main,
      '&:hover': {
        backgroundColor: theme.palette.danger.main
      }
    },
    dialogActions: {
      padding: 20
    }
  };
});
var validationSchema = yup__WEBPACK_IMPORTED_MODULE_8__["object"]().shape({
  companyName: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Company Name is required.'),
  firstName: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('First Name is required.'),
  lastName: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Last Country is required.'),
  country: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Country is required.'),
  state: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('State is required.'),
  city: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('City is required.'),
  zipCode: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Zipcode is required.'),
  address1: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Address 1 is required.'),
  address2: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Address 2 is required.'),
  linkedinUrl: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().url('Invalid url'),
  facebookUrl: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().url('Invalid url'),
  twitterUrl: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().url('Invalid url'),
  website: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().url('Invalid url'),
  currency: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Currency is required.'),
  chartOfAccounts: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Chart of Accounts is required.'),
  companyNumber: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Company Number is required.'),
  taxNumber: yup__WEBPACK_IMPORTED_MODULE_8__["string"]().required('Tax Number is required.')
});

function ViewCandidatePage() {
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      dialogOpen = _useState[0],
      setDialogOpen = _useState[1];

  var _useSnackbar = Object(_lib_context__WEBPACK_IMPORTED_MODULE_12__["useSnackbar"])(),
      openSnackbar = _useSnackbar.openSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
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
                return _lib_api__WEBPACK_IMPORTED_MODULE_11__["default"].get("/customers/".concat(router.query.id));

              case 2:
                _ref2 = _context.sent;
                data = _ref2.data;
                setCustomer(data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }(); //   fetchData();

  }, [router.query.id]);

  function openDialog() {
    setDialogOpen(true);
  }

  function handleDialogClose() {
    setDialogOpen(false);
  }

  var updateCustomerDetails =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(values, actions) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _lib_api__WEBPACK_IMPORTED_MODULE_11__["default"].put("/customers", values);

            case 3:
              openSnackbar('success', 'Customer updated.');
              router.push('/customers');
              _context2.next = 11;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              openSnackbar('error', _context2.t0.response.data.errors[0]);
              actions.setSubmitting(false);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function updateCustomerDetails(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }(); // if (!customer) {
  //   return <Layout pageName="View Candidate"><CircularLoader /></Layout>
  // }


  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    pageName: "View Candidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    className: classes.accountPaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Candidates Details"))));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewCandidatePage);

/***/ })

})
//# sourceMappingURL=[id].js.5e5feb115cae498fad24.hot-update.js.map