webpackHotUpdate("static/development/pages/candidates/Form/[id].js",{

/***/ "./pages/candidates/Form/[id].jsx":
/*!****************************************!*\
  !*** ./pages/candidates/Form/[id].jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_fieldset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/fieldset */ "./components/fieldset/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layout */ "./layout/index.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/context */ "./lib/context.js");
/* harmony import */ var _components_forms_CandidatesForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/forms/CandidatesForm */ "./components/forms/CandidatesForm.jsx");
/* harmony import */ var _components_loader_CircularLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/loader/CircularLoader */ "./components/loader/CircularLoader.jsx");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _components_tabs_TabPanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/tabs/TabPanel */ "./components/tabs/TabPanel.jsx");
var _jsxFileName = "/home/bipin/allPros/pages/candidates/Form/[id].jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
















var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    accountPaper: {
      padding: 20
    },
    margin: {
      margin: "60px 0"
    },
    deleteButton: {
      color: "white",
      backgroundColor: theme.palette.danger.main,
      "&:hover": {
        backgroundColor: theme.palette.danger.main
      }
    },
    dialogActions: {
      padding: 20
    }
  };
});

function ViewOwner() {
  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    id: 1,
    firstName: "John",
    lastName: "Smith",
    email: "john@co",
    phone: "987123123"
  }),
      candidate = _useState[0],
      setCandidate = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      dialogOpen = _useState2[0],
      setDialogOpen = _useState2[1];

  var _useSnackbar = Object(_lib_context__WEBPACK_IMPORTED_MODULE_10__["useSnackbar"])(),
      openSnackbar = _useSnackbar.openSnackbar;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("questionnaire"),
      selectedtab = _useState3[0],
      setSelectedTab = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {//   const fetchData = async () => {
    //     const { data } = await api.get(`/Members/${router.query.id}`);
    //     setMember(data);
    //   };
    //   fetchData();
  }, [router.query.id]);

  function openDialog() {
    setDialogOpen(true);
  }

  function handleDialogClose() {
    setDialogOpen(false);
  }

  var handleTabChange = function handleTabChange(event, newValue) {
    setSelectedTab(newValue);
  }; // const handleUpdate = async (values, actions) => {
  //   try {
  //     await api.put(`/Members`, values);
  //     openSnackbar('success', 'Member updated.');
  //     router.push('/Members');
  //   } catch (error) {
  //     openSnackbar('error',error.response.data.errors[0]);
  //     actions.setSubmitting(false);
  //   }
  // };


  if (!candidate) {
    return __jsx(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      pageName: "View Candidate",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(_components_loader_CircularLoader__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }));
  }

  return __jsx(_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    pageName: "View Candidate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: selectedtab,
    onChange: handleTabChange,
    indicatorColor: "primary",
    textColor: "primary",
    variant: "fullWidth",
    style: {
      backgroundColor: "#3f0f3f"
    } // centered
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: "questionnaire",
    label: "Questionnaire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: "application",
    label: "Draft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    className: classes.accountPaper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Candidate Details"), __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"] //   validationSchema={validationSchema}
  , {
    initialValues: candidate //   onSubmit={handleUpdate}
    ,
    component: _components_forms_CandidatesForm__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (ViewOwner);

/***/ })

})
//# sourceMappingURL=[id].js.ed92ddcd33c3aaeedadb.hot-update.js.map