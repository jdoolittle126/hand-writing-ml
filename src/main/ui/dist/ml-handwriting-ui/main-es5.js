function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
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

    var routes = [];

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

  /*! exports provided: AppState, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppState", function () {
      return AppState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _model_builder_model_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./model-builder/model-builder.component */
    "./src/app/model-builder/model-builder.component.ts");
    /* harmony import */


    var _model_tester_model_tester_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./model-tester/model-tester.component */
    "./src/app/model-tester/model-tester.component.ts");

    function AppComponent_model_builder_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "model-builder", 10);
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onTrained", ctx_r11.boundedNextState);
      }
    }

    function AppComponent_model_tester_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "model-tester", 11);
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sessionName", ctx_r12.session);
      }
    }

    var AppState;

    (function (AppState) {
      AppState[AppState["WELCOME"] = 0] = "WELCOME";
      AppState[AppState["TRAINING"] = 1] = "TRAINING";
      AppState[AppState["TESTING"] = 2] = "TESTING";
    })(AppState || (AppState = {}));

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'ml-handwriting-ui';
        this.appState = AppState.WELCOME;
        this.session = '';
        this.boundedNextState = this.nextState.bind(this);
      }

      _createClass(AppComponent, [{
        key: "startTraining",
        value: function startTraining() {
          if (this.appState == AppState.WELCOME) {
            this.nextState();
          }
        }
      }, {
        key: "nextState",
        value: function nextState() {
          var session = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.session = session;

          switch (this.appState) {
            case AppState.WELCOME:
              this.appState = AppState.TRAINING;
              break;

            case AppState.TRAINING:
              this.appState = AppState.TESTING;
              break;

            default:
              this.appState = AppState.TESTING;
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 17,
      vars: 2,
      consts: [[1, "d-flex", "flex-column"], [1, "container-fluid", "flex-fill", "px-0", "bg-secondary", "pb-4"], [1, "jumbotron", "text-center", "mb-4", "rounded-0"], [1, "container"], [1, "jumbotron-heading"], [1, "lead", "text-muted"], ["href", "#", 1, "btn", "btn-primary", "m-2", 3, "click"], ["href", "#", 1, "btn", "btn-secondary", "m-2", "disabled"], [3, "onTrained", 4, "ngIf"], [3, "sessionName", 4, "ngIf"], [3, "onTrained"], [3, "sessionName"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " This site allows you to train a machine learning model to recognize your handwriting! It was built using Angular and Java Spring Boot. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() {
            return ctx.startTraining();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Build a new model");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Load from existing session");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_model_builder_14_Template, 1, 1, "model-builder", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_model_tester_15_Template, 1, 1, "model-tester", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appState > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appState > 1);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _model_builder_model_builder_component__WEBPACK_IMPORTED_MODULE_4__["ModelBuilderComponent"], _model_tester_model_tester_component__WEBPACK_IMPORTED_MODULE_5__["ModelTesterComponent"]],
      styles: [".mrgnbtm[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  min-height:100vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1yZ25idG0ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuYm9keSB7XHJcbiAgbWluLWhlaWdodDoxMDB2aDtcclxufSJdfQ== */"]
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./canvas/canvas.component */
    "./src/app/canvas/canvas.component.ts");
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./input/input.component */
    "./src/app/input/input.component.ts");
    /* harmony import */


    var _model_builder_model_builder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./model-builder/model-builder.component */
    "./src/app/model-builder/model-builder.component.ts");
    /* harmony import */


    var _model_tester_model_tester_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./model-tester/model-tester.component */
    "./src/app/model-tester/model-tester.component.ts");
    /* harmony import */


    var _network_visualizer_network_visualizer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./network-visualizer/network-visualizer.component */
    "./src/app/network-visualizer/network-visualizer.component.ts");
    /* harmony import */


    var _grid_canvas_grid_canvas_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./grid-canvas/grid-canvas.component */
    "./src/app/grid-canvas/grid-canvas.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // state related imports
    // import { StoreModule } from '@ngrx/store';
    // import { StoreDevtoolsModule } from '@ngrx/store-devtools';
    // import { reducers, metaReducers } from './app-state/reducers';
    // import { CustomRouterStateSerializer } from './app-state/shared/utils';
    // import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_9__["CanvasComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _model_builder_model_builder_component__WEBPACK_IMPORTED_MODULE_11__["ModelBuilderComponent"], _model_tester_model_tester_component__WEBPACK_IMPORTED_MODULE_12__["ModelTesterComponent"], _network_visualizer_network_visualizer_component__WEBPACK_IMPORTED_MODULE_13__["NetworkVisualizerComponent"], _grid_canvas_grid_canvas_component__WEBPACK_IMPORTED_MODULE_14__["GridCanvasComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_9__["CanvasComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _model_builder_model_builder_component__WEBPACK_IMPORTED_MODULE_11__["ModelBuilderComponent"], _model_tester_model_tester_component__WEBPACK_IMPORTED_MODULE_12__["ModelTesterComponent"], _network_visualizer_network_visualizer_component__WEBPACK_IMPORTED_MODULE_13__["NetworkVisualizerComponent"], _grid_canvas_grid_canvas_component__WEBPACK_IMPORTED_MODULE_14__["GridCanvasComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_model_tester_model_tester_component__WEBPACK_IMPORTED_MODULE_12__["ModelTesterComponent"], [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_9__["CanvasComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_10__["InputComponent"], _model_builder_model_builder_component__WEBPACK_IMPORTED_MODULE_11__["ModelBuilderComponent"], _model_tester_model_tester_component__WEBPACK_IMPORTED_MODULE_12__["ModelTesterComponent"], _network_visualizer_network_visualizer_component__WEBPACK_IMPORTED_MODULE_13__["NetworkVisualizerComponent"], _grid_canvas_grid_canvas_component__WEBPACK_IMPORTED_MODULE_14__["GridCanvasComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"]], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppService =
    /*#__PURE__*/
    function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.rootURL = 'http://ml-handwriting-env.eba-6d8svthj.us-east-2.elasticbeanstalk.com/api';
      }

      _createClass(AppService, [{
        key: "trainingRequest",
        value: function trainingRequest(request) {
          return this.http.post(this.rootURL + '/train', request);
        }
      }, {
        key: "recognitionRequest",
        value: function recognitionRequest(request) {
          return this.http.post(this.rootURL + '/identify', request);
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
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
  "./src/app/canvas/canvas.component.ts":
  /*!********************************************!*\
    !*** ./src/app/canvas/canvas.component.ts ***!
    \********************************************/

  /*! exports provided: CanvasComponent */

  /***/
  function srcAppCanvasCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasComponent", function () {
      return CanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _input_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../input/input.component */
    "./src/app/input/input.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CanvasComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Char:\xA0\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CanvasComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.charForm.value.selectedChar);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        smoothImage: a0,
        pixelImage: a1
      };
    };

    function CanvasComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-canvas", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r17 = ctx.$implicit;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", (ctx_r15.data == null ? null : ctx_r15.data.input[index_r17]) === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx_r15.data.input[index_r17].smoothImage, ctx_r15.data.input[index_r17].pixelImage));
      }
    }

    function CanvasComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CanvasComponent_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r16.charForm.valid);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "border border-light rounded": a0
      };
    };

    var CanvasComponent =
    /*#__PURE__*/
    function () {
      function CanvasComponent() {
        _classCallCheck(this, CanvasComponent);

        this.trials = 1;
        this.data = null;
        this.isAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.charForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          selectedChar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].nullValidator && _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
      }

      _createClass(CanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.samples = Array.from(Array(this.trials), function (x, i) {
            return i;
          });

          if (this.data != null) {
            this.locked = true;
            this.charForm.setValue({
              'selectedChar': this.data.character
            });
          } else {
            this.locked = false;
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "reset",
        value: function reset() {
          this.clear();
          this.charForm.reset();
        }
      }, {
        key: "clear",
        value: function clear() {
          this.components.forEach(function (item) {
            return item.clear();
          });
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          var _this = this;

          if (!this.charForm.valid) {
            return;
          }

          var character = this.charForm.value.selectedChar;
          var outputs = [];
          this.components.forEach(function (item) {
            item.getViewData(function (_ref) {
              var smoothImage = _ref.smoothImage,
                  pixelImage = _ref.pixelImage;
              var output = {
                smoothImage: smoothImage,
                pixelImage: pixelImage
              };
              outputs.push(output);

              _this.reset();

              if (outputs.length == _this.components.length) {
                console.log(_this.charForm.value.selectedChar);

                _this.isAdded.emit({
                  character: character,
                  input: outputs
                });
              }
            });
          });
        }
      }]);

      return CanvasComponent;
    }();

    CanvasComponent.ɵfac = function CanvasComponent_Factory(t) {
      return new (t || CanvasComponent)();
    };

    CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CanvasComponent,
      selectors: [["app-canvas"]],
      viewQuery: function CanvasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.components = _t);
        }
      },
      inputs: {
        trials: "trials",
        data: "data"
      },
      outputs: {
        isAdded: "isAdded"
      },
      decls: 6,
      vars: 8,
      consts: [[1, ""], [1, "d-flex", "flex-column", "m-2", "p-2", 3, "ngClass", "formGroup", "ngSubmit"], ["class", "d-flex flex-row form-group", 4, "ngIf"], ["class", "mb-0 text-center", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "d-flex flex-row justify-content-between", 4, "ngIf"], [1, "d-flex", "flex-row", "form-group"], ["type", "text", "name", "selectedChar", "formControlName", "selectedChar", "id", "selectedChar", "placeholder", "A", "maxlength", "1", 1, "form-control", "form-control-sm", 2, "width", "50px !important"], [1, "mb-0", "text-center"], [1, "h6"], [3, "data"], [1, "d-flex", "flex-row", "justify-content-between"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"]],
      template: function CanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CanvasComponent_Template_form_ngSubmit_1_listener() {
            return ctx.onAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CanvasComponent_div_2_Template, 3, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CanvasComponent_div_3_Template, 3, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CanvasComponent_div_4_Template, 2, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CanvasComponent_div_5_Template, 5, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, !ctx.locked))("formGroup", ctx.charForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.locked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.locked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.samples);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.locked);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"]],
      styles: [".nn[_ngcontent-%COMP%] {\r\n    image-rendering: optimizeSpeed;             \r\n    image-rendering: -moz-crisp-edges;           \r\n    image-rendering: -o-crisp-edges;            \r\n    image-rendering: pixelated;                 \r\n    -ms-interpolation-mode: nearest-neighbor;   \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCLGNBQWMsa0NBQWtDO0lBQzlFLGlDQUFpQyxXQUFXLGtDQUFrQyxFQUNsQyxrQ0FBa0M7SUFDOUUsK0JBQStCLGFBQWEsa0NBQWtDO0lBQzlFLDBCQUEwQixrQkFBa0Isa0NBQWtDO0lBQzlFLHdDQUF3QyxJQUFJLGtDQUFrQztBQUNsRiIsImZpbGUiOiJzcmMvYXBwL2NhbnZhcy9jYW52YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ubiB7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IG9wdGltaXplU3BlZWQ7ICAgICAgICAgICAgIC8qIE9sZGVyIHZlcnNpb25zIG9mIEZGICAgICAgICAgICovXHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IC1tb3otY3Jpc3AtZWRnZXM7ICAgICAgICAgIC8qIEZGIDYuMCsgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IC13ZWJraXQtb3B0aW1pemUtY29udHJhc3Q7IC8qIFNhZmFyaSAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IC1vLWNyaXNwLWVkZ2VzOyAgICAgICAgICAgIC8qIE9TIFggJiBXaW5kb3dzIE9wZXJhICgxMi4wMispICovXHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDsgICAgICAgICAgICAgICAgIC8qIEF3ZXNvbWUgZnV0dXJlLWJyb3dzZXJzICAgICAgICovXHJcbiAgICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBuZWFyZXN0LW5laWdoYm9yOyAgIC8qIElFICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-canvas',
          templateUrl: './canvas.component.html',
          styleUrls: ['./canvas.component.css']
        }]
      }], null, {
        components: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: [_input_input_component__WEBPACK_IMPORTED_MODULE_2__["InputComponent"]]
        }],
        trials: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.year = new Date().getFullYear();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 9,
      vars: 1,
      consts: [[1, "text-muted", "text-center"], [1, "container-fluid", "py-3", "row", "align-content-center"], [1, "col", "m-0"], ["href", "https://github.com/jdoolittle126/hand-writing-ml"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Check out the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GitHub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9 ", ctx.year, " Jonathan Doolittle");
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/grid-canvas/grid-canvas.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/grid-canvas/grid-canvas.component.ts ***!
    \******************************************************/

  /*! exports provided: GridCanvasComponent */

  /***/
  function srcAppGridCanvasGridCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridCanvasComponent", function () {
      return GridCanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["myCanvas"]; // TODO Add to module!

    var GridCanvasComponent =
    /*#__PURE__*/
    function () {
      function GridCanvasComponent() {
        _classCallCheck(this, GridCanvasComponent);

        this.cellSize = 10;
        this.borderSize = 1;
        this.gridHeight = 5;
        this.gridWidth = 5;
        this.gridColor = 'black';
      }

      _createClass(GridCanvasComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.canvasEl = this.canvas.nativeElement;
          this.canvasCx = this.canvasEl.getContext('2d');
          this.canvasCx.fillStyle = this.gridColor;
          this.canvasCx.strokeStyle = this.gridColor;
          this.canvasEl.width = (this.cellSize + this.borderSize) * this.gridWidth + this.borderSize * 2;
          this.canvasEl.height = (this.cellSize + this.borderSize) * this.gridHeight + this.borderSize * 2;
          this.clear();
        }
      }, {
        key: "clear",
        value: function clear() {
          var _this2 = this;

          this.grid = Array.from({
            length: this.gridWidth
          }, function () {
            return Array.from({
              length: _this2.gridHeight
            }, function () {
              return '';
            });
          });
          this.drawGrid();
        }
      }, {
        key: "set",
        value: function set(x, y, color) {
          var draw = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

          if (this.grid && typeof this.grid[x][y] !== 'undefined') {
            this.grid[x][y] = color;

            if (draw) {
              this.drawGrid();
            }
          }
        }
      }, {
        key: "drawGrid",
        value: function drawGrid() {
          var xStart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var yStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          this.canvasCx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
          var size = this.borderSize + this.cellSize;

          for (var x = 0; x < this.gridWidth; x++) {
            for (var y = 0; y < this.gridHeight; y++) {
              var cX = xStart + x * this.cellSize;
              var cY = yStart + y * this.cellSize;
              this.canvasCx.fillStyle = this.gridColor;
              this.canvasCx.strokeStyle = this.gridColor;
              this.canvasCx.fillRect(cX, cY, size, size);
              var color = this.grid && typeof this.grid[x][y] !== 'undefined' && this.grid[x][y] !== '' ? this.grid[x][y] : 'NONE';

              if (color == 'NONE') {
                this.canvasCx.clearRect(cX + this.borderSize, cY + this.borderSize, this.cellSize - this.borderSize, this.cellSize - this.borderSize);
              } else {
                this.canvasCx.fillStyle = color;
                this.canvasCx.strokeStyle = color;
                this.canvasCx.fillRect(cX + this.borderSize, cY + this.borderSize, this.cellSize - this.borderSize, this.cellSize - this.borderSize);
              }
            }
          }
        }
      }]);

      return GridCanvasComponent;
    }();

    GridCanvasComponent.ɵfac = function GridCanvasComponent_Factory(t) {
      return new (t || GridCanvasComponent)();
    };

    GridCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GridCanvasComponent,
      selectors: [["grid-canvas"]],
      viewQuery: function GridCanvasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        }
      },
      inputs: {
        cellSize: "cellSize",
        borderSize: "borderSize",
        gridHeight: "gridHeight",
        gridWidth: "gridWidth"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "nn"], ["myCanvas", ""]],
      template: function GridCanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
        }
      },
      styles: [".nn[_ngcontent-%COMP%] {\r\n    image-rendering: optimizeSpeed;\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: -o-crisp-edges;\r\n    image-rendering: pixelated;\r\n    -ms-interpolation-mode: nearest-neighbor;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC1jYW52YXMvZ3JpZC1jYW52YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFFakMsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQix3Q0FBd0M7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9ncmlkLWNhbnZhcy9ncmlkLWNhbnZhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5uIHtcclxuICAgIGltYWdlLXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcclxuICAgIGltYWdlLXJlbmRlcmluZzogLXdlYmtpdC1vcHRpbWl6ZS1jb250cmFzdDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogLW8tY3Jpc3AtZWRnZXM7XHJcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcclxuICAgIC1tcy1pbnRlcnBvbGF0aW9uLW1vZGU6IG5lYXJlc3QtbmVpZ2hib3I7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'grid-canvas',
          templateUrl: 'grid-canvas.component.html',
          styleUrls: ['./grid-canvas.component.css']
        }]
      }], null, {
        canvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['myCanvas']
        }],
        cellSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        borderSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gridHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gridWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      consts: [[1, "header"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hand Writing Recognition with Machine Learning!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 2%;\r\n  background-color: blueviolet;\r\n  color: white;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/input/input.component.ts":
  /*!******************************************!*\
    !*** ./src/app/input/input.component.ts ***!
    \******************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/ModelConfiguration */
    "./src/app/models/ModelConfiguration.ts");

    var _c0 = ["smoothCanvas"];
    var _c1 = ["pixelCanvas"];
    /*
     This code is based on https://medium.com/@tarik.nzl/creating-a-canvas-component-with-free-hand-drawing-with-rxjs-and-angular-61279f577415!
     */

    var InputComponent =
    /*#__PURE__*/
    function () {
      function InputComponent() {
        _classCallCheck(this, InputComponent);

        this.width = 100;
        this.height = 100;
        this.data = null;
        this.isAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isHovering = false;
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.locked = this.data != null;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.smoothCanvasEl = this.smoothCanvas.nativeElement;
          this.smoothCx = this.smoothCanvasEl.getContext('2d');
          this.pixelCanvasEl = this.pixelCanvas.nativeElement;
          this.pixelCx = this.pixelCanvasEl.getContext('2d');
          this.smoothCanvasEl.width = this.width;
          this.smoothCanvasEl.height = this.height;
          this.pixelCanvasEl.width = this.width;
          this.pixelCanvasEl.height = this.height;
          this.smoothCx.lineWidth = 15;
          this.smoothCx.lineCap = 'round';
          this.smoothCx.strokeStyle = '#000';
          this.smoothCx.imageSmoothingEnabled = false;
          this.pixelCx.imageSmoothingEnabled = false;
          this.captureEvents(this.smoothCanvasEl);

          if (this.locked) {
            this.loadImage(this.data.smoothImage, this.data.pixelImage);
          }
        }
      }, {
        key: "showPixel",
        value: function showPixel() {
          if (this.locked) {
            this.isHovering = true;
          }
        }
      }, {
        key: "showSmooth",
        value: function showSmooth() {
          if (this.locked) {
            this.isHovering = false;
          }
        }
      }, {
        key: "loadImage",
        value: function loadImage(smoothData, pixelData) {
          var _this3 = this;

          this.smoothCx.putImageData(smoothData, 0, 0);
          InputComponent.cropImageFromCanvas(this.smoothCx);
          var renderCanvasEl = ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["document"].createElement('canvas');
          renderCanvasEl.className = 'nn';
          renderCanvasEl.width = _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_WIDTH;
          renderCanvasEl.height = _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_HEIGHT;
          var context = renderCanvasEl.getContext('2d');
          context.putImageData(pixelData, 0, 0);
          var sImage = new Image(_models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_WIDTH, _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_HEIGHT);
          sImage.className = 'nn';
          sImage.src = renderCanvasEl.toDataURL();

          sImage.onload = function () {
            var nScaleX = _this3.smoothCanvasEl.width / _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_WIDTH;
            var nScaleY = _this3.smoothCanvasEl.height / _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_HEIGHT;

            _this3.pixelCx.scale(nScaleX, nScaleY);

            _this3.pixelCx.drawImage(renderCanvasEl, 0, 0);

            InputComponent.cropImageFromCanvas(_this3.pixelCx);
          };
        }
      }, {
        key: "clear",
        value: function clear() {
          this.smoothCanvasEl.getContext('2d').clearRect(0, 0, this.smoothCanvasEl.width, this.smoothCanvasEl.height);
        }
      }, {
        key: "getBlankRenderCanvas",
        value: function getBlankRenderCanvas() {
          var renderCanvasEl = ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["document"].createElement('canvas');
          renderCanvasEl.className = 'nn';
          renderCanvasEl.width = this.width;
          renderCanvasEl.height = this.height;
          var context = renderCanvasEl.getContext('2d');
          context.imageSmoothingEnabled = false;
          return {
            canvas: renderCanvasEl,
            context: context
          };
        }
      }, {
        key: "getViewData",
        value: function getViewData(callback) {
          var _this4 = this;

          var _this$getBlankRenderC = this.getBlankRenderCanvas(),
              canvas = _this$getBlankRenderC.canvas,
              context = _this$getBlankRenderC.context;

          context.putImageData(this.smoothCx.getImageData(0, 0, this.smoothCanvasEl.width, this.smoothCanvasEl.height), 0, 0);
          InputComponent.cropImageFromCanvas(context);
          var smoothImageData = context.getImageData(0, 0, canvas.width, canvas.height);
          var oldWidth = canvas.width;
          var oldHeight = canvas.height;
          var image = new Image();
          image.className = 'nn';
          image.src = canvas.toDataURL();

          image.onload = function () {
            var _this4$getBlankRender = _this4.getBlankRenderCanvas(),
                canvas = _this4$getBlankRender.canvas,
                context = _this4$getBlankRender.context;

            canvas.width = _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_WIDTH;
            canvas.height = _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_HEIGHT;
            var scaleX = _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_WIDTH / oldWidth;
            var scaleY = _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_GRID_HEIGHT / oldHeight;
            context.scale(scaleX, scaleY);
            context.drawImage(image, 0, 0);
            var pixelImageData = context.getImageData(0, 0, canvas.width, canvas.height);
            var data = pixelImageData.data;
            var length = data.length;

            for (var i = 0; i < length; i += 4) {
              var a = data[i + 3];

              if (a < _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_4__["ModelConfiguration"].PIXEL_ALPHA_THRESHOLD) {
                data[i + 0] = 255;
                data[i + 1] = 255;
                data[i + 2] = 255;
                data[i + 3] = 255;
              } else {
                data[i + 0] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;
                data[i + 3] = 255;
              }
            }

            var output = {
              smoothImage: smoothImageData,
              pixelImage: pixelImageData
            };
            callback(output);

            _this4.clear();
          };
        }
      }, {
        key: "captureEvents",
        value: function captureEvents(canvasEl) {
          var _this5 = this;

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])());
          })).subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            var prevPos = {
              x: res[0].clientX - rect.left,
              y: res[0].clientY - rect.top
            };
            var currentPos = {
              x: res[1].clientX - rect.left,
              y: res[1].clientY - rect.top
            };

            _this5.drawOnCanvas(prevPos, currentPos);
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'touchmove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'touchend')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(canvasEl, 'touchcancel')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])());
          })).subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            var prevPos = {
              x: res[0].touches[0].clientX - rect.left,
              y: res[0].touches[0].clientY - rect.top
            };
            var currentPos = {
              x: res[1].touches[0].clientX - rect.left,
              y: res[1].touches[0].clientY - rect.top
            };

            _this5.drawOnCanvas(prevPos, currentPos);
          });
        }
      }, {
        key: "drawOnCanvas",
        value: function drawOnCanvas(prevPos, currentPos) {
          if (!this.smoothCx || this.locked) {
            return;
          }

          this.smoothCx.beginPath();

          if (prevPos) {
            this.smoothCx.moveTo(prevPos.x, prevPos.y); // from

            this.smoothCx.lineTo(currentPos.x, currentPos.y);
            this.smoothCx.stroke();
          }
        }
      }], [{
        key: "cropImageFromCanvas",
        value: function cropImageFromCanvas(ctx) {
          var canvas = ctx.canvas,
              w = canvas.width,
              h = canvas.height,
              pix = {
            x: [],
            y: []
          },
              imageData = ctx.getImageData(0, 0, canvas.width, canvas.height),
              x,
              y,
              index;

          for (y = 0; y < h; y++) {
            for (x = 0; x < w; x++) {
              index = (y * w + x) * 4;

              if (imageData.data[index + 3] > 0) {
                pix.x.push(x);
                pix.y.push(y);
              }
            }
          }

          pix.x.sort(function (a, b) {
            return a - b;
          });
          pix.y.sort(function (a, b) {
            return a - b;
          });
          var n = pix.x.length - 1;
          w = 1 + pix.x[n] - pix.x[0];
          h = 1 + pix.y[n] - pix.y[0];
          var cut = ctx.getImageData(pix.x[0], pix.y[0], w, h);
          canvas.width = w;
          canvas.height = h;
          ctx.putImageData(cut, 0, 0);
        }
      }]);

      return InputComponent;
    }();

    InputComponent.ɵfac = function InputComponent_Factory(t) {
      return new (t || InputComponent)();
    };

    InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputComponent,
      selectors: [["input-canvas"]],
      viewQuery: function InputComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.smoothCanvas = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pixelCanvas = _t.first);
        }
      },
      inputs: {
        width: "width",
        height: "height",
        data: "data"
      },
      outputs: {
        isAdded: "isAdded"
      },
      decls: 5,
      vars: 2,
      consts: [[3, "mouseenter", "mouseleave"], [1, "nn", 2, "border", "1px solid #a8a8a8", "touch-action", "none", 3, "hidden"], ["smoothCanvas", ""], [1, "nn", 2, "border", "1px solid #a8a8a8", "width", "100px", "height", "100px", 3, "hidden"], ["pixelCanvas", ""]],
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function InputComponent_Template_div_mouseenter_0_listener() {
            return ctx.showPixel();
          })("mouseleave", function InputComponent_Template_div_mouseleave_0_listener() {
            return ctx.showSmooth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "canvas", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isHovering);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isHovering);
        }
      },
      styles: ["canvas[_ngcontent-%COMP%] {\r\n    width:100px;\r\n    height: 100px;\r\n}\r\n\r\n.nn[_ngcontent-%COMP%] {\r\n    image-rendering: optimizeSpeed;\r\n    image-rendering: -moz-crisp-edges;\r\n    image-rendering: -o-crisp-edges;\r\n    image-rendering: pixelated;\r\n    -ms-interpolation-mode: nearest-neighbor;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5wdXQvaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlDQUFpQztJQUVqQywrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLHdDQUF3QztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2lucHV0L2lucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ubm4ge1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiAtbW96LWNyaXNwLWVkZ2VzO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiAtby1jcmlzcC1lZGdlcztcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG4gICAgLW1zLWludGVycG9sYXRpb24tbW9kZTogbmVhcmVzdC1uZWlnaGJvcjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'input-canvas',
          templateUrl: './input.component.html',
          styleUrls: ['./input.component.css']
        }]
      }], null, {
        smoothCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['smoothCanvas']
        }],
        pixelCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['pixelCanvas']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isAdded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/model-builder/model-builder.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/model-builder/model-builder.component.ts ***!
    \**********************************************************/

  /*! exports provided: BuilderState, ModelBuilderComponent */

  /***/
  function srcAppModelBuilderModelBuilderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuilderState", function () {
      return BuilderState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelBuilderComponent", function () {
      return ModelBuilderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./src/app/util.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../canvas/canvas.component */
    "./src/app/canvas/canvas.component.ts");

    function ModelBuilderComponent_div_21_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-canvas", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r6 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", img_r6)("trials", ctx_r3.settingsForm.value.sampleNumber);
      }
    }

    function ModelBuilderComponent_div_21_app_canvas_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-canvas", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isAdded", function ModelBuilderComponent_div_21_app_canvas_7_Template_app_canvas_isAdded_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onAdd($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trials", ctx_r4.settingsForm.value.sampleNumber);
      }
    }

    function ModelBuilderComponent_div_21_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading... please wait!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModelBuilderComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Train the model");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModelBuilderComponent_div_21_div_6_Template, 3, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModelBuilderComponent_div_21_app_canvas_7_Template, 1, 1, "app-canvas", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelBuilderComponent_div_21_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.onTrain();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Train the Model!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModelBuilderComponent_div_21_p_11_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.images);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.builderState == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.builderState != 1 || ctx_r2.images.length == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.builderState == 2);
      }
    }

    var BuilderState;

    (function (BuilderState) {
      BuilderState[BuilderState["SETTINGS"] = 0] = "SETTINGS";
      BuilderState[BuilderState["TRAINING"] = 1] = "TRAINING";
      BuilderState[BuilderState["TRAINING_REQUESTED"] = 2] = "TRAINING_REQUESTED";
      BuilderState[BuilderState["TRAINED"] = 3] = "TRAINED";
    })(BuilderState || (BuilderState = {}));

    var ModelBuilderComponent =
    /*#__PURE__*/
    function () {
      function ModelBuilderComponent(appService) {
        _classCallCheck(this, ModelBuilderComponent);

        this.appService = appService;
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          sampleNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator && _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          sessionName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator && _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.builderState = BuilderState.SETTINGS;
        this.images = [];
        this.stepNumber = 0;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(ModelBuilderComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "nextState",
        value: function nextState() {
          switch (this.builderState) {
            case BuilderState.SETTINGS:
              this.builderState = BuilderState.TRAINING;
              break;

            case BuilderState.TRAINING:
              this.builderState = BuilderState.TRAINING_REQUESTED;
              break;

            case BuilderState.TRAINING_REQUESTED:
              this.builderState = BuilderState.TRAINED;
              break;

            default:
              this.builderState = BuilderState.TRAINED;
          }
        }
      }, {
        key: "onAdd",
        value: function onAdd(data) {
          this.images.push(data);
        }
      }, {
        key: "onTrain",
        value: function onTrain() {
          var _this6 = this;

          this.nextState();
          var requestData = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _step$value = _step.value,
                  character = _step$value.character,
                  input = _step$value.input;
              var pixelData = [];
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var _step2$value = _step2.value,
                      smoothImage = _step2$value.smoothImage,
                      pixelImage = _step2$value.pixelImage;
                  pixelData.push(_util__WEBPACK_IMPORTED_MODULE_2__["Util"].getPixelData(pixelImage));
                }
              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                    _iterator2.return();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              requestData.push({
                character: character,
                input: pixelData
              });
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var trainingRequest = {
            sessionName: this.settingsForm.value.sessionName,
            gridWidth: 5,
            gridHeight: 6,
            sampleCount: this.settingsForm.value.sampleNumber,
            requestData: requestData
          };
          this.appService.trainingRequest(trainingRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(function (data) {
            console.log(data);

            _this6.nextState();

            _this6.onTrained(_this6.settingsForm.value.sessionName);
          });
        }
      }]);

      return ModelBuilderComponent;
    }();

    ModelBuilderComponent.ɵfac = function ModelBuilderComponent_Factory(t) {
      return new (t || ModelBuilderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]));
    };

    ModelBuilderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModelBuilderComponent,
      selectors: [["model-builder"]],
      inputs: {
        onTrained: "onTrained"
      },
      decls: 22,
      vars: 3,
      consts: [[1, "container", "mt-2", 3, "formGroup"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row"], [1, "form-group", "col-md-6"], ["for", "sampleNumber"], ["type", "number", "name", "sampleNumber", "formControlName", "sampleNumber", "id", "sampleNumber", 1, "form-control", "form-control-sm"], ["for", "sessionName"], ["type", "text", "name", "sessionName", "formControlName", "sessionName", "id", "sessionName", 1, "form-control", "form-control-sm"], [1, "card-footer"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "container mt-2", 4, "ngIf"], [1, "container", "mt-2"], [4, "ngFor", "ngForOf"], [3, "trials", "isAdded", 4, "ngIf"], [4, "ngIf"], [1, "col-3"], [3, "data", "trials"], [3, "trials", "isAdded"]],
      template: function ModelBuilderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Training Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Number of Samples");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Session Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelBuilderComponent_Template_button_click_18_listener() {
            return ctx.nextState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ModelBuilderComponent_div_21_Template, 12, 4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.settingsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.builderState != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.builderState > 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLWJ1aWxkZXIvbW9kZWwtYnVpbGRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelBuilderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'model-builder',
          templateUrl: 'model-builder.component.html',
          styleUrls: ['./model-builder.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }];
      }, {
        onTrained: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/model-tester/model-tester.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/model-tester/model-tester.component.ts ***!
    \********************************************************/

  /*! exports provided: ModelTesterComponent */

  /***/
  function srcAppModelTesterModelTesterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelTesterComponent", function () {
      return ModelTesterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../util */
    "./src/app/util.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");

    var _c0 = ["input"];
    var _c1 = ["visual"];

    function ModelTesterComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input-canvas", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", img_r30.input);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r30.character);
      }
    }

    function ModelTesterComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModelTesterComponent_div_5_div_1_Template, 5, 2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.previousSamples);
      }
    }

    function ModelTesterComponent_network_visualizer_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "network-visualizer", 17, 18);
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputData", ctx_r28.networkResult)("colorEmpty", "#FF0000")("colorFull", "#0000FF");
      }
    } // TODO Add to module!


    var ModelTesterComponent =
    /*#__PURE__*/
    function () {
      function ModelTesterComponent(appService) {
        _classCallCheck(this, ModelTesterComponent);

        this.appService = appService;
        this.previousSamples = [];
        this.sample = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.networkResult = null;
      }

      _createClass(ModelTesterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next(true);
          this.destroy$.unsubscribe();
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.sampleInput.clear();
        }
      }, {
        key: "onTry",
        value: function onTry() {
          var _this7 = this;

          this.sampleInput.getViewData(function (_ref2) {
            var smoothImage = _ref2.smoothImage,
                pixelImage = _ref2.pixelImage;
            _this7.sample = {
              smoothImage: smoothImage,
              pixelImage: pixelImage
            };
            var recognitionRequest = {
              sessionName: _this7.sessionName,
              data: _util__WEBPACK_IMPORTED_MODULE_2__["Util"].getPixelData(_this7.sample.pixelImage)
            };

            _this7.appService.recognitionRequest(recognitionRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this7.destroy$)).subscribe(function (data) {
              var result = {
                guess: data['guess'],
                characters: data['characters'],
                inputs: data['inputs'],
                weights1: data['weights1'],
                hiddens: data['hiddens'],
                weights2: data['weights2'],
                confidence: data['confidence']
              };
              var networkResult = {
                inputsGrid: {
                  width: result.inputs.length,
                  height: 1,
                  data: result.inputs
                },
                weights1Grid: {
                  width: result.inputs.length,
                  height: result.hiddens.length,
                  data: result.weights1
                },
                hiddenGrid: {
                  width: 1,
                  height: result.hiddens.length,
                  data: result.hiddens
                },
                weights2Grid: {
                  width: result.characters.length,
                  height: result.hiddens.length,
                  data: result.weights2
                },
                outputGrid: {
                  width: result.confidence.length,
                  height: 1,
                  data: result.confidence
                }
              };
              console.log(networkResult.inputsGrid);
              _this7.networkResult = networkResult;

              _this7.previousSamples.push({
                character: data['guess'],
                input: {
                  smoothImage: smoothImage,
                  pixelImage: pixelImage
                }
              });
            });
          });
        }
      }]);

      return ModelTesterComponent;
    }();

    ModelTesterComponent.ɵfac = function ModelTesterComponent_Factory(t) {
      return new (t || ModelTesterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]));
    };

    ModelTesterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModelTesterComponent,
      selectors: [["model-tester"]],
      viewQuery: function ModelTesterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sampleInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.networkVisual = _t.first);
        }
      },
      inputs: {
        sessionName: "sessionName"
      },
      decls: 16,
      vars: 3,
      consts: [[1, "container", "mt-2"], [1, "card"], [1, "card-header"], [1, "card-body"], ["class", "row", 4, "ngIf"], [1, "row", "justify-content-around", "align-items-center"], [1, "col-4"], [1, "text-center", 3, "data"], ["input", ""], ["class", "col", 3, "inputData", "colorEmpty", "colorFull", 4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-danger", "mr-2", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-3"], [1, "text-center", "font-weight-bold"], [1, "col", 3, "inputData", "colorEmpty", "colorFull"], ["visual", ""]],
      template: function ModelTesterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Test your model!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModelTesterComponent_div_5_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input-canvas", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModelTesterComponent_network_visualizer_10_Template, 2, 3, "network-visualizer", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelTesterComponent_Template_button_click_12_listener() {
            return ctx.onClear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModelTesterComponent_Template_button_click_14_listener() {
            return ctx.onTry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previousSamples.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.sample);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.networkResult != null);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGVsLXRlc3Rlci9tb2RlbC10ZXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelTesterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'model-tester',
          templateUrl: 'model-tester.component.html',
          styleUrls: ['./model-tester.component.css']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]
        }];
      }, {
        sampleInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['input']
        }],
        networkVisual: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['visual']
        }],
        sessionName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/ModelConfiguration.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/ModelConfiguration.ts ***!
    \**********************************************/

  /*! exports provided: TrainingData, CanvasImageData, ModelConfiguration */

  /***/
  function srcAppModelsModelConfigurationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrainingData", function () {
      return TrainingData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasImageData", function () {
      return CanvasImageData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelConfiguration", function () {
      return ModelConfiguration;
    });

    var TrainingData = function TrainingData() {
      _classCallCheck(this, TrainingData);
    };

    var CanvasImageData = function CanvasImageData() {
      _classCallCheck(this, CanvasImageData);
    };

    var ModelConfiguration = function ModelConfiguration() {
      _classCallCheck(this, ModelConfiguration);
    };

    ModelConfiguration.PIXEL_GRID_WIDTH = 5;
    ModelConfiguration.PIXEL_GRID_HEIGHT = 6;
    ModelConfiguration.PIXEL_ALPHA_THRESHOLD = 100;
    /***/
  },

  /***/
  "./src/app/network-visualizer/network-visualizer.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/network-visualizer/network-visualizer.component.ts ***!
    \********************************************************************/

  /*! exports provided: NetworkVisualizerComponent */

  /***/
  function srcAppNetworkVisualizerNetworkVisualizerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkVisualizerComponent", function () {
      return NetworkVisualizerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../util */
    "./src/app/util.ts");
    /* harmony import */


    var _grid_canvas_grid_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../grid-canvas/grid-canvas.component */
    "./src/app/grid-canvas/grid-canvas.component.ts");

    var _c0 = ["inputs"];
    var _c1 = ["weights1"];
    var _c2 = ["hidden"];
    var _c3 = ["weights2"];
    var _c4 = ["outputs"];

    var NetworkVisualizerComponent =
    /*#__PURE__*/
    function () {
      function NetworkVisualizerComponent() {
        _classCallCheck(this, NetworkVisualizerComponent);

        this.inputData = null;
      }

      _createClass(NetworkVisualizerComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.render();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.render();
        }
      }, {
        key: "setFor",
        value: function setFor(component, data) {
          var index = 0;
          var min = Math.min.apply(Math, _toConsumableArray(data.data));
          var max = Math.max.apply(Math, _toConsumableArray(data.data));

          for (var x = 0; x < data.width; x++) {
            for (var y = 0; y < data.height; y++) {
              var percent = min == max ? 1 : (data.data[index] - min) / (max - min);

              var color = _util__WEBPACK_IMPORTED_MODULE_1__["Util"].newColor(this.colorEmpty, this.colorFull, percent);

              component.set(x, y, color, false);
              index++;
            }
          }

          component.drawGrid();
        }
      }, {
        key: "render",
        value: function render() {
          this.setFor(this.inputs, this.inputData.inputsGrid);
          this.setFor(this.weights1, this.inputData.weights1Grid);
          this.setFor(this.hidden, this.inputData.hiddenGrid);
          this.setFor(this.weights2, this.inputData.weights2Grid);
          this.setFor(this.outputs, this.inputData.outputGrid);
          this.inputs.drawGrid();
          this.weights1.drawGrid();
          this.hidden.drawGrid();
          this.weights2.drawGrid();
          this.outputs.drawGrid();
        }
      }]);

      return NetworkVisualizerComponent;
    }();

    NetworkVisualizerComponent.ɵfac = function NetworkVisualizerComponent_Factory(t) {
      return new (t || NetworkVisualizerComponent)();
    };

    NetworkVisualizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NetworkVisualizerComponent,
      selectors: [["network-visualizer"]],
      viewQuery: function NetworkVisualizerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputs = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.weights1 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hidden = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.weights2 = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outputs = _t.first);
        }
      },
      inputs: {
        inputData: "inputData",
        colorEmpty: "colorEmpty",
        colorFull: "colorFull"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()],
      decls: 27,
      vars: 10,
      consts: [[1, "container"], [1, "grid-container"], [1, "inputs"], [1, ""], [3, "gridWidth", "gridHeight"], ["inputs", ""], [1, "outputs"], ["outputs", ""], [1, "weights1"], ["weights1", ""], [1, "hiddens"], [1, "d-inline-block", 3, "gridWidth", "gridHeight"], ["hidden", ""], [1, "weights2"], ["weights2", ""]],
      template: function NetworkVisualizerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inputs:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "grid-canvas", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Outputs:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "grid-canvas", 4, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Weights:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "grid-canvas", 4, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hidden:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "grid-canvas", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Weights:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "grid-canvas", 4, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridWidth", ctx.inputData.inputsGrid.width)("gridHeight", ctx.inputData.inputsGrid.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridWidth", ctx.inputData.outputGrid.width)("gridHeight", ctx.inputData.outputGrid.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridWidth", ctx.inputData.weights1Grid.width)("gridHeight", ctx.inputData.weights1Grid.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridWidth", ctx.inputData.hiddenGrid.width)("gridHeight", ctx.inputData.hiddenGrid.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridWidth", ctx.inputData.weights2Grid.width)("gridHeight", ctx.inputData.weights2Grid.height);
        }
      },
      directives: [_grid_canvas_grid_canvas_component__WEBPACK_IMPORTED_MODULE_2__["GridCanvasComponent"]],
      styles: [".grid-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    grid-auto-columns: minmax(-webkit-min-content, -webkit-max-content);\r\n    grid-auto-columns: minmax(min-content, max-content);\r\n    gap: 1em 3em;\r\n    text-align: center;\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%] {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n}\r\n\r\n.outputs[_ngcontent-%COMP%] {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n}\r\n\r\n.weights1[_ngcontent-%COMP%] {\r\n    grid-column-start: 1;\r\n    grid-column-end: 1;\r\n}\r\n\r\n.hiddens[_ngcontent-%COMP%] {\r\n    grid-column-start: 2;\r\n    grid-column-end: 2;\r\n}\r\n\r\n.weights2[_ngcontent-%COMP%] {\r\n    grid-column-start: 3;\r\n    grid-column-end: 3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV0d29yay12aXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1FQUFtRDtJQUFuRCxtREFBbUQ7SUFDbkQsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmV0d29yay12aXN1YWxpemVyL25ldHdvcmstdmlzdWFsaXplci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogbWlubWF4KG1pbi1jb250ZW50LCBtYXgtY29udGVudCk7XHJcbiAgICBnYXA6IDFlbSAzZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dHMge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbn1cclxuXHJcbi5vdXRwdXRzIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG59XHJcblxyXG4ud2VpZ2h0czEge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDE7XHJcbn1cclxuXHJcbi5oaWRkZW5zIHtcclxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xyXG59XHJcblxyXG4ud2VpZ2h0czIge1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetworkVisualizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'network-visualizer',
          templateUrl: 'network-visualizer.component.html',
          styleUrls: ['./network-visualizer.component.css']
        }]
      }], null, {
        inputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['inputs']
        }],
        weights1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['weights1']
        }],
        hidden: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hidden']
        }],
        weights2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['weights2']
        }],
        outputs: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['outputs']
        }],
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colorEmpty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colorFull: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/util.ts":
  /*!*************************!*\
    !*** ./src/app/util.ts ***!
    \*************************/

  /*! exports provided: Util */

  /***/
  function srcAppUtilTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Util", function () {
      return Util;
    });
    /* harmony import */


    var _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./models/ModelConfiguration */
    "./src/app/models/ModelConfiguration.ts");

    var Util =
    /*#__PURE__*/
    function () {
      function Util() {
        _classCallCheck(this, Util);
      }

      _createClass(Util, null, [{
        key: "getPixelData",
        value: function getPixelData(pixelImageData) {
          var results = [];
          var data = pixelImageData.data;

          for (var x = 0; x < _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_0__["ModelConfiguration"].PIXEL_GRID_WIDTH; x++) {
            for (var y = 0; y < _models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_0__["ModelConfiguration"].PIXEL_GRID_HEIGHT; y++) {
              var index = 4 * (_models_ModelConfiguration__WEBPACK_IMPORTED_MODULE_0__["ModelConfiguration"].PIXEL_GRID_WIDTH * y + x);
              var isFilled = !(data[index] + data[index + 1] + data[index + 2] > 0);
              results.push(isFilled);
            }
          }

          return results;
        }
      }, {
        key: "newColor",
        value: function newColor(colorStart, colorEnd, mix) {
          var hexStart = this.hexToRgb(colorStart);
          var hexEnd = this.hexToRgb(colorEnd);
          var newRgb = [Math.ceil((1 - mix) * hexStart.r + mix * hexEnd.r), Math.ceil((1 - mix) * hexStart.g + mix * hexEnd.g), Math.ceil((1 - mix) * hexStart.b + mix * hexEnd.b)];
          return this.rgbToHex(newRgb[0], newRgb[1], newRgb[2]);
        }
      }, {
        key: "toHex",
        value: function toHex(c) {
          var hex = c.toString(16);
          return hex.length == 1 ? "0" + hex : hex;
        }
      }, {
        key: "hexToRgb",
        value: function hexToRgb(hex) {
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        }
      }, {
        key: "rgbToHex",
        value: function rgbToHex(r, g, b) {
          return "#" + this.toHex(r) + this.toHex(g) + this.toHex(b);
        }
      }]);

      return Util;
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! P:\hand-writing-ml\src\main\ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map