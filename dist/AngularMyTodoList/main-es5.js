function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./feature/feature.module": ["./src/app/feature/feature.module.ts", "feature-feature-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/ag-grid-table/ag-grid-table.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ag-grid-table/ag-grid-table.component.ts ***!
    \**********************************************************/

  /*! exports provided: AgGridTableComponent */

  /***/
  function srcAppAgGridTableAgGridTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgGridTableComponent", function () {
      return AgGridTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/table.service */
    "./src/app/services/table.service.ts");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");

    var AgGridTableComponent = /*#__PURE__*/function () {
      function AgGridTableComponent(TableService) {
        _classCallCheck(this, AgGridTableComponent);

        this.TableService = TableService;
        this.columnDefs = [{
          headerName: 'Make',
          field: 'make',
          sortable: true
        }, {
          headerName: 'Model',
          field: 'model',
          sortable: true
        }, {
          headerName: 'Price',
          field: 'price',
          sortable: true
        }];
      }

      _createClass(AgGridTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTableList();
        }
      }, {
        key: "getTableList",
        value: function getTableList() {
          var _this = this;

          this.TableService.getTableList().subscribe(function (resp) {
            // const result: any = { ...resp.body };
            // console.log(result.list);
            // this.rowData = result.list;
            _this.rowData = resp;
          }, function (error) {
            return alert(error);
          });
        }
      }]);

      return AgGridTableComponent;
    }();

    AgGridTableComponent.ɵfac = function AgGridTableComponent_Factory(t) {
      return new (t || AgGridTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]));
    };

    AgGridTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AgGridTableComponent,
      selectors: [["app-ag-grid-table"]],
      decls: 1,
      vars: 2,
      consts: [[1, "ag-theme-alpine", 2, "width", "500px", "height", "500px", 3, "rowData", "columnDefs"]],
      template: function AgGridTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ag-grid-angular", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.rowData)("columnDefs", ctx.columnDefs);
        }
      },
      directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridAngular"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWctZ3JpZC10YWJsZS9hZy1ncmlkLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZy1ncmlkLXRhYmxlL2FnLWdyaWQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgGridTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ag-grid-table',
          templateUrl: './ag-grid-table.component.html',
          styleUrls: ['./ag-grid-table.component.css']
        }]
      }], function () {
        return [{
          type: _services_table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./todo-list/todo-list.component */
    "./src/app/todo-list/todo-list.component.ts");
    /* harmony import */


    var _guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./guest-book/guest-book.component */
    "./src/app/guest-book/guest-book.component.ts");
    /* harmony import */


    var _ag_grid_table_ag_grid_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./ag-grid-table/ag-grid-table.component */
    "./src/app/ag-grid-table/ag-grid-table.component.ts");

    var routes = [{
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
      children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
      }, {
        path: 'todo-list',
        component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"]
      }, {
        path: 'guest-book',
        component: _guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_6__["GuestBookComponent"]
      }, {
        path: 'ag-grid-table',
        component: _ag_grid_table_ag_grid_table_component__WEBPACK_IMPORTED_MODULE_7__["AgGridTableComponent"]
      }, {
        path: 'feature',
        loadChildren: './feature/feature.module#FeatureModule'
      }]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AngularMyTodoList';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ag-grid-angular */
    "./node_modules/ag-grid-angular/__ivy_ngcc__/fesm2015/ag-grid-angular.js");
    /* harmony import */


    var _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./todo-list/todo-list.module */
    "./src/app/todo-list/todo-list.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./guest-book/guest-book.component */
    "./src/app/guest-book/guest-book.component.ts");
    /* harmony import */


    var _ag_grid_table_ag_grid_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./ag-grid-table/ag-grid-table.component */
    "./src/app/ag-grid-table/ag-grid-table.component.ts");
    /* harmony import */


    var _home_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/detail/detail.component */
    "./src/app/home/detail/detail.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__["TodoListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"], _guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_11__["GuestBookComponent"], _ag_grid_table_ag_grid_table_component__WEBPACK_IMPORTED_MODULE_12__["AgGridTableComponent"], _home_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__["TodoListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_9__["LayoutComponent"], _guest_book_guest_book_component__WEBPACK_IMPORTED_MODULE_11__["GuestBookComponent"], _ag_grid_table_ag_grid_table_component__WEBPACK_IMPORTED_MODULE_12__["AgGridTableComponent"], _home_detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _todo_list_todo_list_module__WEBPACK_IMPORTED_MODULE_6__["TodoListModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_5__["AgGridModule"].withComponents([])],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/guest-book/guest-book.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/guest-book/guest-book.component.ts ***!
    \****************************************************/

  /*! exports provided: GuestBookComponent */

  /***/
  function srcAppGuestBookGuestBookComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GuestBookComponent", function () {
      return GuestBookComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./message */
    "./src/app/guest-book/message.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GuestBookComponent_ng_container_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var message_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u7559\u8A00\u4EBA\uFF1A", message_r1.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u8A0A\u606F\u5167\u5BB9\uFF1A", message_r1.content, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u6642\u9593\uFF1A", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, message_r1.date, "yyyy/MM/dd HH:mm:ss"), " ");
      }
    }

    var GuestBookComponent = /*#__PURE__*/function () {
      function GuestBookComponent() {
        _classCallCheck(this, GuestBookComponent);

        this.name = '';
        this.content = '';
        /**
        * 所有留言都放在這裡
        *
        * @type {Message[]}
        */

        this.messages = [];
      }

      _createClass(GuestBookComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
        * 新增留言
        *
        */

      }, {
        key: "addMessage",
        value: function addMessage() {
          // 防呆，避免名稱或內容是空值時也可以留言
          if (!this.name.trim() || !this.content.trim()) {
            return;
          } // 用名稱跟內容產生一個留言的資料物件


          var message = new _message__WEBPACK_IMPORTED_MODULE_1__["Message"](this.name, this.content); // 將留言的資料物件放進容器裡

          this.messages.push(message); // 清空內容

          this.content = '';
        }
      }]);

      return GuestBookComponent;
    }();

    GuestBookComponent.ɵfac = function GuestBookComponent_Factory(t) {
      return new (t || GuestBookComponent)();
    };

    GuestBookComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GuestBookComponent,
      selectors: [["app-guest-book"]],
      decls: 17,
      vars: 5,
      consts: [[3, "ngSubmit"], ["type", "text", "name", "name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "content", 3, "ngModel", "ngModelChange"], ["type", "submit"], [4, "ngFor", "ngForOf"]],
      template: function GuestBookComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GuestBookComponent_Template_form_ngSubmit_0_listener() {
            return ctx.addMessage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u540D\u7A31\uFF1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuestBookComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u5167\u5BB9\uFF1A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GuestBookComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.content = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u65B0\u589E\u7559\u8A00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u9810\u89BD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GuestBookComponent_ng_container_16_Template, 8, 6, "ng-container", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.content);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u7559\u8A00\u4EBA\uFF1A", ctx.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u8A0A\u606F\u5167\u5BB9\uFF1A", ctx.content, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1ZXN0LWJvb2svZ3Vlc3QtYm9vay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestBookComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-guest-book',
          templateUrl: './guest-book.component.html',
          styleUrls: ['./guest-book.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/guest-book/message.ts":
  /*!***************************************!*\
    !*** ./src/app/guest-book/message.ts ***!
    \***************************************/

  /*! exports provided: Message */

  /***/
  function srcAppGuestBookMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });

    var Message =
    /**
     * Creates an instance of Message.
     *
     * @param {string} name - 留言者的名稱
     * @param {string} content - 留言的內容
     * @memberof Message
     */
    function Message(name, content) {
      _classCallCheck(this, Message);

      this.name = name;
      this.content = content;
      this.date = new Date();
    };
    /***/

  },

  /***/
  "./src/app/home/detail/detail.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/detail/detail.component.ts ***!
    \*************************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppHomeDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
      return DetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DetailComponent = /*#__PURE__*/function () {
      function DetailComponent() {
        _classCallCheck(this, DetailComponent);
      }

      _createClass(DetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailComponent;
    }();

    DetailComponent.ɵfac = function DetailComponent_Factory(t) {
      return new (t || DetailComponent)();
    };

    DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DetailComponent,
      selectors: [["app-detail"]],
      decls: 2,
      vars: 0,
      template: function DetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "detail works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGV0YWlsL2RldGFpbC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-detail',
          templateUrl: './detail.component.html',
          styleUrls: ['./detail.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.router.config);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 17,
      vars: 0,
      consts: [["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/todo-list", "routerLinkActive", "active"], ["routerLink", "/guest-book", "routerLinkActive", "active"], ["routerLink", "/ag-grid-table", "routerLinkActive", "active"], ["routerLink", "/login", "routerLinkActive", "active"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "TodoList");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GuestBook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "AgGridTable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".active[_ngcontent-%COMP%] {\r\n  background-color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 2,
      vars: 0,
      consts: [["routerLink", "/home"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/table.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/table.service.ts ***!
    \*******************************************/

  /*! exports provided: TableService */

  /***/
  function srcAppServicesTableServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableService", function () {
      return TableService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TableService = /*#__PURE__*/function () {
      function TableService(http) {
        _classCallCheck(this, TableService);

        this.http = http;
      }

      _createClass(TableService, [{
        key: "getTableList",
        value: function getTableList() {
          return this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');
        }
      }]);

      return TableService;
    }();

    TableService.ɵfac = function TableService_Factory(t) {
      return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TableService,
      factory: TableService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo-list/todo-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/todo-list/todo-list.component.ts ***!
    \**************************************************/

  /*! exports provided: TodoListComponent */

  /***/
  function srcAppTodoListTodoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListComponent", function () {
      return TodoListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _todo_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./todo-list.service */
    "./src/app/todo-list/todo-list.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TodoListComponent_section_5_li_2_input_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 12, 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function TodoListComponent_section_5_li_2_input_6_Template_input_blur_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var todo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.update(todo_r2, _r5.value);
        })("keyup.enter", function TodoListComponent_section_5_li_2_input_6_Template_input_keyup_enter_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var todo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.update(todo_r2, _r5.value);
        })("keyup.escape", function TodoListComponent_section_5_li_2_input_6_Template_input_keyup_escape_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var todo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.cancelEditing(todo_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", todo_r2.getTitle());
      }
    }

    function TodoListComponent_section_5_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_section_5_li_2_Template_input_click_2_listener() {
          var todo_r2 = ctx.$implicit;
          return todo_r2.toggleCompletion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function TodoListComponent_section_5_li_2_Template_label_dblclick_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var todo_r2 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.edit(todo_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_section_5_li_2_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var i_r3 = ctx.index;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.remove(i_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TodoListComponent_section_5_li_2_input_6_Template, 2, 1, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var todo_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("completed", todo_r2.done)("editing", todo_r2.editing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", todo_r2.done);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](todo_r2.getTitle());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", todo_r2.editing);
      }
    }

    function TodoListComponent_section_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoListComponent_section_5_li_2_Template, 7, 7, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getList());
      }
    }

    var TodoListComponent = /*#__PURE__*/function () {
      function TodoListComponent(todoListService) {
        _classCallCheck(this, TodoListComponent);

        this.todoListService = todoListService;
      }

      _createClass(TodoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
        * 新增代辦事項
        *
        * @param {HTMLInputElement} inputRef - 輸入框的元素實體
        * @memberof TodoListComponent
        */

      }, {
        key: "addTodo",
        value: function addTodo(inputRef) {
          var todo = inputRef.value.trim();

          if (todo) {
            this.todoListService.add(todo);
            inputRef.value = '';
          }
        }
        /**
        * 取得待辦事項清單
        *
        * @returns {string[]}
        * @memberof TodoListComponent
        */

      }, {
        key: "getList",
        value: function getList() {
          return this.todoListService.getList();
        }
        /**
        * 移除待辦事項
        *
        * @param {number} index - 待辦事項的索引位置
        * @memberof TodoListComponent
        */

      }, {
        key: "remove",
        value: function remove(index) {
          this.todoListService.remove(index);
        }
        /**
        * 開始編輯待辦事項
        *
        * @param {Todo} todo
        * @memberof TodoListComponent
        */

      }, {
        key: "edit",
        value: function edit(todo) {
          todo.editable = true;
        }
        /**
         * 更新待辦事項
         *
         * @param {Todo} todo - 原本的待辦事項
         * @param {string} newTitle - 新的事項名稱
         * @memberof TodoListComponent
         */

      }, {
        key: "update",
        value: function update(todo, newTitle) {
          if (!todo.editing) {
            return;
          }

          var title = newTitle.trim(); // 如果有輸入名稱則修改事項名稱

          if (title) {
            todo.setTitle(title);
            todo.editable = false; // 如果沒有名稱則刪除該項待辦事項
          } else {
            var index = this.getList().indexOf(todo);

            if (index !== -1) {
              this.remove(index);
            }
          }
        }
        /**
         * 取消編輯狀態
         *
         * @param {Todo} todo - 欲取消編輯狀態的待辦事項
         * @memberof TodoListComponent
         */

      }, {
        key: "cancelEditing",
        value: function cancelEditing(todo) {
          todo.editable = false;
        }
      }]);

      return TodoListComponent;
    }();

    TodoListComponent.ɵfac = function TodoListComponent_Factory(t) {
      return new (t || TodoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_todo_list_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"]));
    };

    TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TodoListComponent,
      selectors: [["app-todo-list"]],
      decls: 6,
      vars: 1,
      consts: [[1, "todoapp"], [1, "header"], ["placeholder", "What needs to be done?", "autofocus", "", 1, "new-todo", 3, "keyup.enter"], ["class", "main", 4, "ngIf"], [1, "main"], [1, "todo-list"], [3, "completed", "editing", 4, "ngFor", "ngForOf"], [1, "view"], ["type", "checkbox", 1, "toggle", 3, "checked", "click"], [3, "dblclick"], [1, "destroy", 3, "click"], ["class", "edit", 3, "value", "blur", "keyup.enter", "keyup.escape", 4, "ngIf"], [1, "edit", 3, "value", "blur", "keyup.enter", "keyup.escape"], ["editedtodo", ""]],
      template: function TodoListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TodoListComponent_Template_input_keyup_enter_4_listener($event) {
            return ctx.addTodo($event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TodoListComponent_section_5_Template, 3, 1, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getList().length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".todoapp[_ngcontent-%COMP%] {\r\n\tbackground: #fff;\r\n\tmargin: 130px 0 40px 0;\r\n\tposition: relative;\r\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\r\n\t            0 25px 50px 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.todoapp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::input-placeholder {\r\n\tfont-style: italic;\r\n\tfont-weight: 300;\r\n\tcolor: #e6e6e6;\r\n}\r\n\r\n.todoapp[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: -155px;\r\n\twidth: 100%;\r\n\tfont-size: 100px;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tcolor: rgba(175, 47, 47, 0.15);\r\n\t-webkit-text-rendering: optimizeLegibility;\r\n\t-moz-text-rendering: optimizeLegibility;\r\n\ttext-rendering: optimizeLegibility;\r\n}\r\n\r\n.new-todo[_ngcontent-%COMP%], .edit[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tmargin: 0;\r\n\twidth: 100%;\r\n\tfont-size: 24px;\r\n\tfont-family: inherit;\r\n\tfont-weight: inherit;\r\n\tline-height: 1.4em;\r\n\tborder: 0;\r\n\tcolor: inherit;\r\n\tpadding: 6px;\r\n\tborder: 1px solid #999;\r\n\tbox-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\r\n\tbox-sizing: border-box;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.new-todo[_ngcontent-%COMP%] {\r\n\tpadding: 16px 16px 16px 60px;\r\n\tborder: none;\r\n\tbackground: rgba(0, 0, 0, 0.003);\r\n\tbox-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\r\n}\r\n\r\n.main[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.toggle-all[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tborder: none; \r\n\topacity: 0;\r\n\tposition: absolute;\r\n}\r\n\r\n.toggle-all[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n\twidth: 60px;\r\n\theight: 34px;\r\n\tfont-size: 0;\r\n\tposition: absolute;\r\n\ttop: -52px;\r\n\tleft: -13px;\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.toggle-all[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:before {\r\n\tcontent: '\u276F';\r\n\tfont-size: 22px;\r\n\tcolor: #e6e6e6;\r\n\tpadding: 10px 27px 10px 27px;\r\n}\r\n\r\n.toggle-all[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\r\n\tcolor: #737373;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tfont-size: 24px;\r\n\tborder-bottom: 1px solid #ededed;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n\tborder-bottom: none;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%] {\r\n\tborder-bottom: none;\r\n\tpadding: 0;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\twidth: 506px;\r\n\tpadding: 12px 16px;\r\n\tmargin: 0 0 0 43px;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\twidth: 40px;\r\n\t\r\n\theight: auto;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tmargin: auto 0;\r\n\tborder: none; \r\n\t-webkit-appearance: none;\r\n\t-moz-appearance: none;\r\n\t     appearance: none;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n\t\r\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center left;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tword-break: break-all;\r\n\tpadding: 15px 15px 15px 60px;\r\n\tdisplay: block;\r\n\tline-height: 1.2;\r\n\ttransition: color 0.4s;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li.completed[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tcolor: #d9d9d9;\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 10px;\r\n\tbottom: 0;\r\n\twidth: 40px;\r\n\theight: 40px;\r\n\tmargin: auto 0;\r\n\tfont-size: 30px;\r\n\tcolor: #cc9a9a;\r\n\tmargin-bottom: 11px;\r\n\ttransition: color 0.2s ease-out;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%]:hover {\r\n\tcolor: #af5b5e;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .destroy[_ngcontent-%COMP%]:after {\r\n\tcontent: '\xD7';\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .destroy[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .edit[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n}\r\n\r\n.todo-list[_ngcontent-%COMP%]   li.editing[_ngcontent-%COMP%]:last-child {\r\n\tmargin-bottom: -1px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n\tcolor: #777;\r\n\tpadding: 10px 15px;\r\n\theight: 20px;\r\n\ttext-align: center;\r\n\tborder-top: 1px solid #e6e6e6;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\theight: 50px;\r\n\toverflow: hidden;\r\n\tbox-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\r\n\t            0 8px 0 -3px #f6f6f6,\r\n\t            0 9px 1px -3px rgba(0, 0, 0, 0.2),\r\n\t            0 16px 0 -6px #f6f6f6,\r\n\t            0 17px 2px -6px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.todo-count[_ngcontent-%COMP%] {\r\n\tfloat: left;\r\n\ttext-align: left;\r\n}\r\n\r\n.todo-count[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n\tfont-weight: 300;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tleft: 0;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tdisplay: inline;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: inherit;\r\n\tmargin: 3px;\r\n\tpadding: 3px 7px;\r\n\ttext-decoration: none;\r\n\tborder: 1px solid transparent;\r\n\tborder-radius: 3px;\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tborder-color: rgba(175, 47, 47, 0.1);\r\n}\r\n\r\n.filters[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.selected[_ngcontent-%COMP%] {\r\n\tborder-color: rgba(175, 47, 47, 0.2);\r\n}\r\n\r\n.clear-completed[_ngcontent-%COMP%], html[_ngcontent-%COMP%]   .clear-completed[_ngcontent-%COMP%]:active {\r\n\tfloat: right;\r\n\tposition: relative;\r\n\tline-height: 20px;\r\n\ttext-decoration: none;\r\n\tcursor: pointer;\r\n}\r\n\r\n.clear-completed[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n\tmargin: 65px auto 0;\r\n\tcolor: #bfbfbf;\r\n\tfont-size: 10px;\r\n\ttext-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n\ttext-align: center;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tline-height: 1;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\ttext-decoration: underline;\r\n}\r\n\r\n\r\n\r\n@media screen and (-webkit-min-device-pixel-ratio:0) {\r\n\t.toggle-all[_ngcontent-%COMP%], .todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\r\n\t\tbackground: none;\r\n\t}\r\n\r\n\t.todo-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\r\n\t\theight: 40px;\r\n\t}\r\n}\r\n\r\n@media (max-width: 430px) {\r\n\t.footer[_ngcontent-%COMP%] {\r\n\t\theight: 50px;\r\n\t}\r\n\r\n\t.filters[_ngcontent-%COMP%] {\r\n\t\tbottom: 10px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCOzZDQUM0QztBQUM3Qzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5QiwwQ0FBMEM7Q0FDMUMsdUNBQXVDO0NBQ3ZDLGtDQUFrQztBQUNuQzs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7Q0FDWCxlQUFlO0NBQ2Ysb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGNBQWM7Q0FDZCxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGlEQUFpRDtDQUNqRCxzQkFBc0I7Q0FDdEIsbUNBQW1DO0NBQ25DLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1osZ0NBQWdDO0NBQ2hDLDZDQUE2QztBQUM5Qzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVksRUFBRSxrQkFBa0I7Q0FDaEMsVUFBVTtDQUNWLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUVYLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsY0FBYztDQUNkLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsY0FBYztDQUNkLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrRUFBa0U7Q0FDbEUsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sU0FBUztDQUNULGNBQWM7Q0FDZCxZQUFZLEVBQUUsa0JBQWtCO0NBQ2hDLHdCQUF3QjtDQUN4QixxQkFBZ0I7TUFBaEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0M7OztFQUdDO0NBQ0Qsb1VBQW9VO0NBQ3BVLDRCQUE0QjtDQUM1QixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyx5YUFBeWE7QUFDMWE7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsNEJBQTRCO0NBQzVCLGNBQWM7Q0FDZCxnQkFBZ0I7Q0FDaEIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsY0FBYztDQUNkLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWixjQUFjO0NBQ2QsZUFBZTtDQUNmLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxPQUFPO0NBQ1AsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQjs7OzsrQ0FJOEM7QUFDL0M7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7O0NBRUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIscUJBQXFCO0NBQ3JCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsY0FBYztDQUNkLGVBQWU7Q0FDZiw2Q0FBNkM7Q0FDN0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7OztDQUdDOztBQUNEO0NBQ0M7O0VBRUMsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsWUFBWTtDQUNiO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFlBQVk7Q0FDYjs7Q0FFQTtFQUNDLFlBQVk7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50b2RvYXBwIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdG1hcmdpbjogMTMwcHggMCA0MHB4IDA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuXHQgICAgICAgICAgICAwIDI1cHggNTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnRvZG9hcHAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdGNvbG9yOiAjZTZlNmU2O1xyXG59XHJcblxyXG4udG9kb2FwcCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0Y29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbi50b2RvYXBwIGlucHV0OjppbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0Y29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbi50b2RvYXBwIGgxIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTU1cHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Zm9udC1zaXplOiAxMDBweDtcclxuXHRmb250LXdlaWdodDogMTAwO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XHJcblx0LXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG5cdC1tb3otdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG59XHJcblxyXG4ubmV3LXRvZG8sXHJcbi5lZGl0IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRmb250LWZhbWlseTogaW5oZXJpdDtcclxuXHRmb250LXdlaWdodDogaW5oZXJpdDtcclxuXHRsaW5lLWhlaWdodDogMS40ZW07XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcblxyXG4ubmV3LXRvZG8ge1xyXG5cdHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDYwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAxcHggcmdiYSgwLDAsMCwwLjAzKTtcclxufVxyXG5cclxuLm1haW4ge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR6LWluZGV4OiAyO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG59XHJcblxyXG4udG9nZ2xlLWFsbCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udG9nZ2xlLWFsbCArIGxhYmVsIHtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDM0cHg7XHJcblx0Zm9udC1zaXplOiAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC01MnB4O1xyXG5cdGxlZnQ6IC0xM3B4O1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLnRvZ2dsZS1hbGwgKyBsYWJlbDpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICfina8nO1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHRjb2xvcjogI2U2ZTZlNjtcclxuXHRwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xyXG59XHJcblxyXG4udG9nZ2xlLWFsbDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcclxuXHRjb2xvcjogIzczNzM3MztcclxufVxyXG5cclxuLnRvZG8tbGlzdCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tbGlzdCBsaSB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWRlZDtcclxufVxyXG5cclxuLnRvZG8tbGlzdCBsaTpsYXN0LWNoaWxkIHtcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC5lZGl0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogNTA2cHg7XHJcblx0cGFkZGluZzogMTJweCAxNnB4O1xyXG5cdG1hcmdpbjogMCAwIDAgNDNweDtcclxufVxyXG5cclxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogNDBweDtcclxuXHQvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0Ym90dG9tOiAwO1xyXG5cdG1hcmdpbjogYXV0byAwO1xyXG5cdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHRhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xyXG5cdG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSArIGxhYmVsIHtcclxuXHQvKlxyXG5cdFx0RmlyZWZveCByZXF1aXJlcyBgI2AgdG8gYmUgZXNjYXBlZCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjQzM1xyXG5cdFx0SUUgYW5kIEVkZ2UgcmVxdWlyZXMgKmV2ZXJ5dGhpbmcqIHRvIGJlIGVzY2FwZWQgdG8gcmVuZGVyLCBzbyB3ZSBkbyB0aGF0IGluc3RlYWQgb2YganVzdCB0aGUgYCNgIC0gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNzE1NzQ1OS9cclxuXHQqL1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNlZGVkZWQlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQy9zdmclM0UnKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBsZWZ0O1xyXG59XHJcblxyXG4udG9kby1saXN0IGxpIC50b2dnbGU6Y2hlY2tlZCArIGxhYmVsIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzYmRkYWQ1JTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzVkYzJhZiUyMiUyMGQlM0QlMjJNNzIlMjAyNUw0MiUyMDcxJTIwMjclMjA1NmwtNCUyMDQlMjAyMCUyMDIwJTIwMzQtNTJ6JTIyLyUzRSUzQy9zdmclM0UnKTtcclxufVxyXG5cclxuLnRvZG8tbGlzdCBsaSBsYWJlbCB7XHJcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cdHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDYwcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxuXHR0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xyXG59XHJcblxyXG4udG9kby1saXN0IGxpLmNvbXBsZXRlZCBsYWJlbCB7XHJcblx0Y29sb3I6ICNkOWQ5ZDk7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRyaWdodDogMTBweDtcclxuXHRib3R0b206IDA7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdG1hcmdpbjogYXV0byAwO1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRjb2xvcjogI2NjOWE5YTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG5cdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xyXG5cdGNvbG9yOiAjYWY1YjVlO1xyXG59XHJcblxyXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcclxuXHRjb250ZW50OiAnw5cnO1xyXG59XHJcblxyXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnRvZG8tbGlzdCBsaSAuZWRpdCB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nOmxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG5cdGNvbG9yOiAjNzc3O1xyXG5cdHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHRoZWlnaHQ6IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xyXG59XHJcblxyXG4uZm9vdGVyOmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcblx0ICAgICAgICAgICAgMCA4cHggMCAtM3B4ICNmNmY2ZjYsXHJcblx0ICAgICAgICAgICAgMCA5cHggMXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG5cdCAgICAgICAgICAgIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcclxuXHQgICAgICAgICAgICAwIDE3cHggMnB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4udG9kby1jb3VudCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0dGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRvZG8tY291bnQgc3Ryb25nIHtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uZmlsdGVycyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0bGVmdDogMDtcclxufVxyXG5cclxuLmZpbHRlcnMgbGkge1xyXG5cdGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmZpbHRlcnMgbGkgYSB7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0bWFyZ2luOiAzcHg7XHJcblx0cGFkZGluZzogM3B4IDdweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uZmlsdGVycyBsaSBhOmhvdmVyIHtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XHJcbn1cclxuXHJcbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4yKTtcclxufVxyXG5cclxuLmNsZWFyLWNvbXBsZXRlZCxcclxuaHRtbCAuY2xlYXItY29tcGxldGVkOmFjdGl2ZSB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmluZm8ge1xyXG5cdG1hcmdpbjogNjVweCBhdXRvIDA7XHJcblx0Y29sb3I6ICNiZmJmYmY7XHJcblx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHAge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4uaW5mbyBhIHtcclxuXHRjb2xvcjogaW5oZXJpdDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmluZm8gYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8qXHJcblx0SGFjayB0byByZW1vdmUgYmFja2dyb3VuZCBmcm9tIE1vYmlsZSBTYWZhcmkuXHJcblx0Q2FuJ3QgdXNlIGl0IGdsb2JhbGx5IHNpbmNlIGl0IGRlc3Ryb3lzIGNoZWNrYm94ZXMgaW4gRmlyZWZveFxyXG4qL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcclxuXHQudG9nZ2xlLWFsbCxcclxuXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xyXG5cdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHR9XHJcblxyXG5cdC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcclxuXHQuZm9vdGVyIHtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHR9XHJcblxyXG5cdC5maWx0ZXJzIHtcclxuXHRcdGJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-todo-list',
          templateUrl: './todo-list.component.html',
          styleUrls: ['./todo-list.component.css']
        }]
      }], function () {
        return [{
          type: _todo_list_service__WEBPACK_IMPORTED_MODULE_1__["TodoListService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo-list/todo-list.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/todo-list/todo-list.module.ts ***!
    \***********************************************/

  /*! exports provided: TodoListModule */

  /***/
  function srcAppTodoListTodoListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListModule", function () {
      return TodoListModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./todo-list.component */
    "./src/app/todo-list/todo-list.component.ts");

    var TodoListModule = function TodoListModule() {
      _classCallCheck(this, TodoListModule);
    };

    TodoListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TodoListModule
    });
    TodoListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TodoListModule_Factory(t) {
        return new (t || TodoListModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoListModule, {
        declarations: [_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]],
          exports: [_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo-list/todo-list.service.ts":
  /*!************************************************!*\
    !*** ./src/app/todo-list/todo-list.service.ts ***!
    \************************************************/

  /*! exports provided: TodoListService */

  /***/
  function srcAppTodoListTodoListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListService", function () {
      return TodoListService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _todo_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./todo.model */
    "./src/app/todo-list/todo.model.ts"); // Class


    var TodoListService = /*#__PURE__*/function () {
      function TodoListService() {
        _classCallCheck(this, TodoListService);

        this.list = [];
      }
      /**
      * 取得待辦事項清單
      *
      * @returns {Todo[]}
      * @memberof TodoListService
      */


      _createClass(TodoListService, [{
        key: "getList",
        value: function getList() {
          return this.list;
        }
        /**
        * 新增待辦事項
        *
        * @param {string} title - 待辦事項的標題
        * @memberof TodoListService
        */

      }, {
        key: "add",
        value: function add(title) {
          // 避免傳入的 title 是無效值或空白字串，稍微判斷一下
          if (title || title.trim()) {
            this.list.push(new _todo_model__WEBPACK_IMPORTED_MODULE_1__["Todo"](title));
          }
        }
        /**
        * 移除待辦事項
        *
        * @param {number} index - 待辦事項的索引位置
        * @memberof TodoListService
        */

      }, {
        key: "remove",
        value: function remove(index) {
          this.list.splice(index, 1);
        }
      }]);

      return TodoListService;
    }();

    TodoListService.ɵfac = function TodoListService_Factory(t) {
      return new (t || TodoListService)();
    };

    TodoListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TodoListService,
      factory: TodoListService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/todo-list/todo.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/todo-list/todo.model.ts ***!
    \*****************************************/

  /*! exports provided: Todo */

  /***/
  function srcAppTodoListTodoModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });
    /**
     * 待辦事項的資料物件模型
     *
     * @export
     * @class Todo
     */


    var Todo = /*#__PURE__*/function () {
      /**
       * Creates an instance of Todo.
       *
       * @param {string} title - 待辦事項的名稱
       * @memberof Todo
       */
      function Todo(title) {
        _classCallCheck(this, Todo);

        /**
         * 事項名稱
         *
         * @private
         * @memberof Todo
         */
        this.title = '';
        /**
         * 完成與否
         *
         * @private
         * @memberof Todo
         */

        this.completed = false;
        /**
        * 是否處於編輯模式
        *
        * @private
        * @memberof Todo
        */

        this.editMode = false;
        this.title = title || ''; // 為避免傳入的值為 Falsy 值，稍作處理
      }
      /**
      * 此事項是否已經完成
      *
      * @readonly
      * @type {boolean}
      * @memberof Todo
      */


      _createClass(Todo, [{
        key: "getTitle",

        /**
         * 取得事項名稱
         *
         * @returns {string}
         * @memberof Todo
         */
        value: function getTitle() {
          return this.title;
        }
        /**
        * 來回切換完成狀態
        *
        * @memberof Todo
        */

      }, {
        key: "toggleCompletion",
        value: function toggleCompletion() {
          this.completed = !this.completed;
        }
        /**
        * 取得此事項是否處於編輯模式
        *
        * @readonly
        * @type {boolean}
        * @memberof Todo
        */

      }, {
        key: "setTitle",

        /**
        * 設定事項名稱
        *
        * @param {string} title
        * @memberof Todo
        */
        value: function setTitle(title) {
          this.title = title;
        }
      }, {
        key: "done",
        get: function get() {
          return this.completed;
        }
      }, {
        key: "editing",
        get: function get() {
          return this.editMode;
        }
        /**
         * 設定此事項是否可被編輯
         *
         * @memberof Todo
         */

      }, {
        key: "editable",
        set: function set(bl) {
          this.editMode = bl;
        }
      }]);

      return Todo;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Project\AngularMyTodoList\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map