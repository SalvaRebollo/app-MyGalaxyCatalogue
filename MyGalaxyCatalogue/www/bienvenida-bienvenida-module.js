(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bienvenida-bienvenida-module"],{

/***/ "./src/app/bienvenida/bienvenida.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bienvenida/bienvenida.module.ts ***!
  \*************************************************/
/*! exports provided: BienvenidaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaPageModule", function() { return BienvenidaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _bienvenida_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bienvenida.page */ "./src/app/bienvenida/bienvenida.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _bienvenida_page__WEBPACK_IMPORTED_MODULE_5__["BienvenidaPage"]
    }
];
var BienvenidaPageModule = /** @class */ (function () {
    function BienvenidaPageModule() {
    }
    BienvenidaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_bienvenida_page__WEBPACK_IMPORTED_MODULE_5__["BienvenidaPage"]]
        })
    ], BienvenidaPageModule);
    return BienvenidaPageModule;
}());



/***/ }),

/***/ "./src/app/bienvenida/bienvenida.page.html":
/*!*************************************************!*\
  !*** ./src/app/bienvenida/bienvenida.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content >\n\n<div class=\"Absolute-Center\">\n  <img alt=\"logo\" style=\"height:15em;\" src=\"../../assets/logo.png\">\n\n  <ion-button style=\"color:white;\" color=\"light\" href=\"/home\" routerDirection=\"forward\">\n    Entrar\n  </ion-button>\n  \n  <ion-button size=\"small\" color=\"dark\" href=\"http://GitHub.com/SalvaRebollo\" shape=\"round\">\n    <ion-icon style=\"color:white\" slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n  </ion-button>\n\n  \n</div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/bienvenida/bienvenida.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bienvenida/bienvenida.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  background-image: url('galaxy.jpg');\n  background-size: cover; }\n\n.Absolute-Center {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n  flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/bienvenida/bienvenida.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bienvenida/bienvenida.page.ts ***!
  \***********************************************/
/*! exports provided: BienvenidaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BienvenidaPage", function() { return BienvenidaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BienvenidaPage = /** @class */ (function () {
    function BienvenidaPage() {
    }
    BienvenidaPage.prototype.ngOnInit = function () {
    };
    BienvenidaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bienvenida',
            template: __webpack_require__(/*! ./bienvenida.page.html */ "./src/app/bienvenida/bienvenida.page.html"),
            styles: [__webpack_require__(/*! ./bienvenida.page.scss */ "./src/app/bienvenida/bienvenida.page.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], BienvenidaPage);
    return BienvenidaPage;
}());



/***/ })

}]);
//# sourceMappingURL=bienvenida-bienvenida-module.js.map