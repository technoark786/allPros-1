webpackHotUpdate("static/development/pages/candidates/Form/[id].js",{

/***/ "./components/forms/CandidatesForm.jsx":
/*!*********************************************!*\
  !*** ./components/forms/CandidatesForm.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var formik_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik-material-ui */ "./node_modules/formik-material-ui/dist/formik-material-ui.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _formik_FormikSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../formik/FormikSelect */ "./components/formik/FormikSelect.jsx");
/* harmony import */ var _lib_mock_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/mock-data */ "./lib/mock-data.jsx");
/* harmony import */ var _lib_country_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/country-data */ "./lib/country-data.js");
/* harmony import */ var _components_formik_FormikRadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/formik/FormikRadioGroup */ "./components/formik/FormikRadioGroup.jsx");
var _jsxFileName = "/home/bipin/allPros/components/forms/CandidatesForm.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









 // import api from '../../lib/api';

var useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    form: {
      display: "flex",
      flexDirection: "column"
    },
    margin: {
      margin: "60px 0"
    },
    buttonGroup: {
      display: "flex"
    },
    button: {
      marginTop: 20,
      marginRight: 8,
      width: 120
    },
    buttonMarginRight: {
      marginRight: theme.spacing(1)
    }
  };
});

function CandidatesForm() {
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function handleCancel() {
    router.back();
  }

  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "firstName",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "First Name",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "lastName",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "Last Name",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "email",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "Email",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "phone",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "Phone Number",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "address",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "Address",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "managerType",
    label: "Manager Type",
    options: ["BOH Manager", "FOH Manager"],
    component: _components_formik_FormikRadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "yearsInHospitality",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "How many years have you been in the hospitality industry",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "currentRole",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "What is your current Role",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "yearsInHospitality",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "How many years have you been in the hospitality industry",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "yearsInHospitality",
    component: formik_material_ui__WEBPACK_IMPORTED_MODULE_3__["TextField"],
    label: "How many years have you been in the hospitality industry",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))), __jsx("div", {
    className: classes.buttonGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: classes.button,
    variant: "contained",
    color: "primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Save"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    className: classes.button,
    variant: "outlined",
    color: "primary",
    onClick: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Cancel")));
}

/* harmony default export */ __webpack_exports__["default"] = (CandidatesForm);

/***/ })

})
//# sourceMappingURL=[id].js.57010f1564b76bf22aae.hot-update.js.map