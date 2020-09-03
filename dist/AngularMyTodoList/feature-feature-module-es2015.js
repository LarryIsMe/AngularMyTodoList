(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-feature-module"],{

/***/ "./src/app/feature/feature-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/feature/feature-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FeatureRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureRoutingModule", function() { return FeatureRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.component */ "./src/app/feature/feature.component.ts");





const routes = [
    {
        path: '',
        component: _feature_component__WEBPACK_IMPORTED_MODULE_2__["FeatureComponent"]
    }
];
class FeatureRoutingModule {
}
FeatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureRoutingModule });
FeatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeatureRoutingModule_Factory(t) { return new (t || FeatureRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/feature/feature.component.ts":
/*!**********************************************!*\
  !*** ./src/app/feature/feature.component.ts ***!
  \**********************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FeatureComponent {
    constructor() { }
    ngOnInit() {
    }
}
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(); };
FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatureComponent, selectors: [["app-feature"]], decls: 2, vars: 0, template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feature works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feature',
                templateUrl: './feature.component.html',
                styleUrls: ['./feature.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feature/feature.module.ts":
/*!*******************************************!*\
  !*** ./src/app/feature/feature.module.ts ***!
  \*******************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-routing.module */ "./src/app/feature/feature-routing.module.ts");
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature.component */ "./src/app/feature/feature.component.ts");





class FeatureModule {
}
FeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureModule });
FeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeatureModule_Factory(t) { return new (t || FeatureModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeatureRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureModule, { declarations: [_feature_component__WEBPACK_IMPORTED_MODULE_3__["FeatureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeatureRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_feature_component__WEBPACK_IMPORTED_MODULE_3__["FeatureComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeatureRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=feature-feature-module-es2015.js.map