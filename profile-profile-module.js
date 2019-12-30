(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/cash-account/cash-account.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/cash-account/cash-account.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <p>No Cash account!</p>\r\n            <small>Click on open account button to open cash account.</small>\r\n                <br>\r\n             <button class=\"primary\">Open Account</button>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/no-data-found.gif\" class=\"norecord\">\r\n       \r\n               <p>You can't deposit now!</p>\r\n\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/margin-account/margin-account.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/margin-account/margin-account.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <p>No Margin account!</p>\r\n            <small>Click on open account button to open margin account.</small>\r\n                <br>\r\n             <button class=\"primary\" routerLink=\"../account-opening\">Open Account</button>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/overview/profile-overview.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/overview/profile-overview.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-3 pr-0\">\r\n          <div class=\"tab\">\r\n            <button class=\"tablinks\" \r\n                    id=\"defaultOpen\" \r\n                    (click)=\"isMarginAccount=true\" \r\n                    [class.active]=\"isMarginAccount\">Margin Account</button>\r\n            <button class=\"tablinks\"\r\n                    (click)=\"isMarginAccount=false\" \r\n                    [class.active]=\"!isMarginAccount\">Cash Account</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9 pl-0\">\r\n          <div *ngIf=\"isMarginAccount\">\r\n                <margin-account ></margin-account>\r\n          </div>\r\n          <div *ngIf=\"!isMarginAccount\">\r\n                 <cash-account></cash-account>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-desktop.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-desktop.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"profile-header-desktop\">\r\n    <img class=\"avatar\" src=\"../assets/images/avatar.png\" alt=\"aryan\" />\r\n    <div class=\"image-box__overlay\"></div>\r\n    <div class=\"who\">\r\n        <h1>Lawrence Lau</h1>\r\n        <small>{{profile.user.email}}</small>\r\n        <br>\r\n        <small>Gender: {{lookupSvc.getGender(profile.user.info.gender_id)}}</small>\r\n        <h2>CHD</h2>\r\n        <p>\r\n           <!--  <ij-rating rating=\"5\"></ij-rating> -->\r\n            <span class=\"review-count\">5 5</span>\r\n        </p>\r\n    </div>\r\n\r\n    <div class=\"misc\">\r\n <!--        <ij-industry-score class=\"profile-score-section\" score=\"70\" [showAnimation]=\"true\"></ij-industry-score> -->\r\n        <label class=\"ind-score\">Credit Balance</label>\r\n        <br>\r\n        <span  class=\"score {{size}}\">465</span>\r\n\r\n        <ul  class=\"actions profile-score-section\">\r\n            <li >\r\n                <button  class=\"action contact\">Contact</button>\r\n            </li>\r\n            <li >\r\n                <button class=\"action about\" (click)=\"logout()\">Logout</button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</header>\r\n\r\n<nav id=\"profile-tabs\">\r\n    <ul>\r\n        <li><a routerLink=\"overview\" routerLinkActive=\"active\">Account Overview</a></li>\r\n        <li ><a routerLink=\"history\" routerLinkActive=\"active\">History</a></li>\r\n        <li >\r\n        <div class=\"dropdown\">\r\n          <a class=\"pointer\">Fund related</a>\r\n            <div class=\"dropdown-content\">\r\n                <a routerLink=\"fund-deposit\">Deposit funds</a>\r\n                <a routerLink=\"fund-withdraw\">Withdraw funds</a>\r\n            </div>\r\n        </div>\r\n        </li>\r\n         <li >\r\n        <div class=\"dropdown\">\r\n          <a class=\"pointer\">Stock related</a>\r\n            <div class=\"dropdown-content\">\r\n                <a routerLink=\"transfer-to-stock\">Transfer to stock</a>\r\n                <a routerLink=\"stock-history\">Stock history</a>\r\n            </div>\r\n        </div>\r\n        </li>\r\n           <li >\r\n        <div class=\"dropdown\">\r\n          <a class=\"pointer\">Settings</a>\r\n            <div class=\"dropdown-content\">\r\n                <a routerLink=\"setting/profile-info\">Profile</a>\r\n                <a routerLink=\"setting/personal-info\">Personal Info</a>\r\n                <a routerLink=\"setting/password\">Change password</a>\r\n            </div>\r\n        </div>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-mobile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-mobile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"profile-header-mobile\">\r\n    <nav>\r\n        <div class=\"dropdown\">\r\n            <button class=\"dropbtn\">Overview</button>\r\n            <div class=\"dropdown-content\">\r\n                <a routerLink=\"../overview\" routerLinkActive=\"active\">Overview</a>\r\n                <a routerLink=\"../deposit-funds\" routerLinkActive=\"active\">Deposit funds</a>\r\n                <a routerLink=\"../withdraw-funds\" routerLinkActive=\"active\">Withdraw funds</a>\r\n                <a routerLink=\"../transfer-to-stock\" routerLinkActive=\"active\">Transfer to stock</a>\r\n                <a routerLink=\"../stock-history\" routerLinkActive=\"active\">Stock history</a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n    <img class=\"avatar\" src=\"../assets/images/avatar.png\" alt=\"aryan\" />\r\n\r\n    <div class=\"who\">\r\n        <h1>Lawrence Lau</h1>\r\n        <h2>CHD</h2>\r\n    </div>\r\n\r\n    <footer>\r\n        <div  class=\"budget\">\r\n            <img src=\"../assets/images/icon-budget.png\" alt=\"4\" />\r\n            <p>454</p>\r\n        </div>\r\n\r\n        <div class=\"industryscore\">\r\n            <span class=\"num\">888</span>\r\n            <p>Credit Balance</p>\r\n        </div>\r\n    </footer>\r\n</header>\r\n\r\n<div class=\"header-action-buttons\">\r\n    <ul  class=\"actions\">\r\n        <li >\r\n            <button  class=\"action contact\">Contact</button>\r\n        </li>\r\n        <li >\r\n            <button class=\"action about\" (click)=\"logout()\">Logout</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/profile.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container show-on-desktop\">\r\n        <profile-header-desktop [profile]=\"profile\"></profile-header-desktop>\r\n    </div>\r\n</div>\r\n\r\n<profile-header-mobile [profile]=\"profile\" class=\"hide-on-desktop\"></profile-header-mobile>\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/password/password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/password/password.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <h1>Password Setting</h1>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/personal-info/personal-info.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/personal-info/personal-info.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n          <h1>Personal Info Setting</h1>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/profile-info/profile-info.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/profile-info/profile-info.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n          <h1>Profile Info Setting</h1>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/stock-history/stock-history.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/stock-history/stock-history.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/no-data-found.gif\" class=\"norecord\">\r\n       \r\n           <p>No history found!</p>\r\n\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/transfer-to-stock/transfer-to-stock.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/transfer-to-stock/transfer-to-stock.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/no-data-found.gif\" class=\"norecord\">\r\n       \r\n           <p>No record found!</p>\r\n\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/withdraw-fund/withdraw-fund.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/withdraw-fund/withdraw-fund.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/no-data-found.gif\" class=\"norecord\">\r\n       \r\n           <p>You can't withdraw now!</p>\r\n\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/profile/BaseProfileComponent.ts":
/*!*********************************************!*\
  !*** ./src/profile/BaseProfileComponent.ts ***!
  \*********************************************/
/*! exports provided: BaseProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseProfileComponent", function() { return BaseProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var BaseProfileComponent = /** @class */ (function () {
    function BaseProfileComponent(route, router) {
        this.route = route;
        this.router = router;
        this.routerSub = this.router.events.subscribe(function () { return window.scrollTo(0, 0); });
    }
    BaseProfileComponent.prototype.ngOnInit = function () {
    };
    BaseProfileComponent.prototype.ngOnDestroy = function () {
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
    };
    BaseProfileComponent.prototype.logout = function () {
        //this.authSvc.logout();
        localStorage.clear();
        this.router.navigate(['/account/signIn']);
    };
    return BaseProfileComponent;
}());



/***/ }),

/***/ "./src/profile/cash-account/cash-account.component.ts":
/*!************************************************************!*\
  !*** ./src/profile/cash-account/cash-account.component.ts ***!
  \************************************************************/
/*! exports provided: CashAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAccountComponent", function() { return CashAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var CashAccountComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CashAccountComponent, _super);
    function CashAccountComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    CashAccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CashAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cash-account',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/cash-account/cash-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], CashAccountComponent);
    return CashAccountComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/deposit-fund/deposit-fund.component.ts":
/*!************************************************************!*\
  !*** ./src/profile/deposit-fund/deposit-fund.component.ts ***!
  \************************************************************/
/*! exports provided: DepositFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositFundComponent", function() { return DepositFundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var DepositFundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DepositFundComponent, _super);
    function DepositFundComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    DepositFundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DepositFundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'deposit-fund',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deposit-fund.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], DepositFundComponent);
    return DepositFundComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/margin-account/margin-account.component.ts":
/*!****************************************************************!*\
  !*** ./src/profile/margin-account/margin-account.component.ts ***!
  \****************************************************************/
/*! exports provided: MarginAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginAccountComponent", function() { return MarginAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var MarginAccountComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarginAccountComponent, _super);
    function MarginAccountComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    MarginAccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MarginAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'margin-account',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./margin-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/margin-account/margin-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], MarginAccountComponent);
    return MarginAccountComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/overview/profile-overview.component.ts":
/*!************************************************************!*\
  !*** ./src/profile/overview/profile-overview.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileOverviewComponent", function() { return ProfileOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var ProfileOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileOverviewComponent, _super);
    function ProfileOverviewComponent(route, router) {
        var _this = _super.call(this, route, router) || this;
        _this.isMarginAccount = true;
        return _this;
    }
    ProfileOverviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProfileOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-overview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/overview/profile-overview.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/common.less */ "./src/profile/overview/styles/common.less")).default]
        })
    ], ProfileOverviewComponent);
    return ProfileOverviewComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/overview/styles/common.less":
/*!*************************************************!*\
  !*** ./src/profile/overview/styles/common.less ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 1024px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  .area {\n    text-align: center;\n  }\n}\n.header-common {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.header-common h1,\n.header-common h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\nbutton.action {\n  font-size: 16px;\n  color: #fff;\n  letter-spacing: 0.4px;\n}\nbutton.action.funds {\n  background: #A622F9;\n}\nbutton.action.availability {\n  background: #70CF3F;\n}\nbutton.action.contact {\n  background: #FF8410;\n}\nbutton.action.about {\n  background: #3F93F4;\n}\n/* Style the tab */\n.tab {\n  float: left;\n  border: 1px solid #E2E2E2;\n  background: linear-gradient(to bottom, #fdfbfb 0%, #eae8e8cc 100%);\n  width: 100%;\n  height: 300px;\n}\n/* Style the buttons inside the tab */\n.tab button {\n  display: block;\n  background-color: inherit;\n  color: black;\n  padding: 22px 16px;\n  width: 100%;\n  border: none;\n  outline: none;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.3s;\n  margin-bottom: 1px;\n  font-size: 17px;\n  border-bottom: 1px solid #E2E2E2;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #3F93F4;\n  color: #fff;\n}\n/* Create an active/current \"tab button\" class */\n.tab button.active {\n  background-color: #3F93F4;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvZm9udHMubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy93aWRnZXRzLmxlc3MiLCJzcmMvcHJvZmlsZS9vdmVydmlldy9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3NwYWNpbmcubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvYnV0dG9ucy5sZXNzIiwic3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9oZWFkZXItY29tbW9uLmxlc3MiLCJzcmMvcHJvZmlsZS9vdmVydmlldy9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7QUNISjtBQ3FDQTtFQUFtQix5QkFBQTtBRGxDbkI7QUNtQ0E7RUFBbUIsd0JBQUE7QURoQ25CO0FDa0NBO0VBQ0k7SUFBbUIsd0JBQUE7RUQvQnJCO0VDZ0NFO0lBQW1CLHlCQUFBO0VEN0JyQjtBQUNGO0FFYkE7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FGZUo7QUViSTtFQUNJLGFBQUE7QUZlUjtBRVNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FGUEo7QUVVQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBRlJKO0FFVUk7OztFQUdJLFVBQUE7RUFDQSxxQkFBQTtBRlJSO0FFWUE7RUFDSSwyQkFBQTtFRlZGLGVBQWU7RUVXYix5QkFBQTtFRlRGLFdBQVc7RUFFWCxtQkFBbUI7RUVTZCxzQkFBQTtFRlBMLFlBQVk7RUVRTixxQkFBQTtFRk5OLDJCQUEyQjtFRU9qQixpQkFBQTtFRkxWO2lFQUMrRDtBQUNqRTtBRzFFQTtFQUFjLHdCQUFBO0FINkVkO0FHNUVBO0VBQWMsMkJBQUE7QUgrRWQ7QUc5RUE7RUFBVSxnQkFBQTtBSGlGVjtBR2hGQTtFQUFVLGdCQUFBO0FIbUZWO0FHbEZBO0VBQWMsY0FBQTtBSHFGZDtBR3BGQTtFQUFVLFNBQUE7RUFBVyxVQUFBO0FId0ZyQjtBSTdGQTtFQUFtQixjQUFBO0FKZ0duQjtBSS9GQTtFQUFtQixhQUFBO0FKa0duQjtBSWhHQTtFQUNJO0lBQW1CLGFBQUE7RUptR3JCO0VJbEdFO0lBQW1CLGNBQUE7RUpxR3JCO0FBQ0Y7QUtuR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VOUEEsZ0JBQUE7QUM2R0o7QUtsR0E7Ozs7Ozs7RUZYVSxTQUFBO0VBQVcsVUFBQTtBSHVIckI7QUt4R0E7RUFDSSxTQUFBO0FMMEdKO0FLOUZBO0VBQ0ksbUJBQUE7RUFFQSx1R0FBQTtFQUlBLGdFQUFBO0VBQ0Esa0hBQUE7QUxnR0o7QUs3RkE7RUFFSSw2QkFBQTtBTDhGSjtBSzVGSTtFQUNJLFNBQUE7QUw4RlI7QUsxRkE7RUFDSSxrQkFBQTtBTDRGSjtBS3pGQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUFvQixZQUFBO0FMNEZ4QjtBS2hHQTtFQU9RLGNBQUE7QUw0RlI7QUt4RkE7RUFDSSxrQkFBQTtBTDBGSjtBSzNGQTtFQ2pFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBTitKSjtBQzFKSTtFQUFBO0lJK0RJLGNBQUE7SUFBb0IsWUFBQTtFTGdHMUI7QUFDRjtBSy9GSTtFQUFBO0lBQ0ksNEJBQUE7SUFBaUMsV0FBQTtFTG1HdkM7QUFDRjtBS2hHQTtFRjlFVSxTQUFBO0VBQVcsVUFBQTtFRWdGakIsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FMbUdKO0FLakdBO0VBQ0ksZUFBQTtBTG1HSjtBS2hHQTtFQUNJLGdCQUFBO0FMa0dKO0FLaEdBO0VBQ0UsdUJBQUE7QUxrR0Y7QUtoR0E7RUFDSTtJQUNJLGtCQUFBO0VMa0dOO0FBQ0Y7QU9wTUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QVBzTUo7QU8zTUE7O0VBUVEsaUJBQUE7RVJQSixnQkFBQTtBQytNSjtBT25NQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QVBxTUo7QU9uTUk7RUFDSSxtQkFBQTtBUHFNUjtBT2xNSTtFQUNJLG1CQUFBO0FQb01SO0FPak1JO0VBQ0ksbUJBQUE7QVBtTVI7QU9oTUk7RUFDSSxtQkFBQTtBUGtNUjtBQUNBLGtCQUFrQjtBUXBPbEI7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrRUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FSc09GO0FBQ0EscUNBQXFDO0FRbk9yQztFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QVJxT0Y7QUFDQSxnREFBZ0Q7QVFsT2hEO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FSb09GO0FBQ0EsZ0RBQWdEO0FRak9oRDtFQUNHLHlCQUFBO0VBQ0EsV0FBQTtBUm1PSCIsImZpbGUiOiJzcmMvcHJvZmlsZS9vdmVydmlldy9zdHlsZXMvY29tbW9uLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZvbnQtcmVndWxhciB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvbnQteGJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiLmZvbnQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG4uZm9udC1saWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZm9udC1yZWd1bGFyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQteGJvbGQge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLnNob3ctb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uaGlkZS1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zaG93LW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4uc2VsZWN0LWFycm93IHtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0ZXh0LW92ZXJmbG93OiAnJztcbn1cbi5zZWxlY3QtYXJyb3c6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJldGEtdmVyc2lvbiB7XG4gIHBhZGRpbmc6IDNweCA0cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMjhjMzU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcbn1cbmEubm8tb3V0bGluZSB7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEubm8tb3V0bGluZTpob3ZlcixcbmEubm8tb3V0bGluZTpmb2N1cyxcbmEubm8tb3V0bGluZTphY3RpdmUge1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubm8tc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn1cbi5uby1tYXItdG9wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLm5vLW1hci1idG0ge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubWFyLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYXItMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1hci0xMC12ZXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5uby1tYXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2hvdy1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGlkZS1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zaG93LW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhpZGUtb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5oZWFkZXItbm90aWZpY2F0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMjc2MDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yZW0gMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5oMSxcbmgyLFxucDpub3QoLmhlbHAtYmxvY2spLFxudWw6bm90KC5kcm9wZG93bi1tZW51KSxcbmxpLFxuYnV0dG9uLFxubGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5idXR0b24ge1xuICBib3JkZXI6IDA7XG59XG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZmZmZmZmKSwgY29sb3Itc3RvcCgxMDAlLCAjZjVmNWY1KSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2Y1ZjVmNScsIEdyYWRpZW50VHlwZT0wKTtcbn1cbi5ncmFkaWVudDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMkUyRTI7XG59XG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSA+IC5jb250YWluZXIge1xuICB0b3A6IC0xcHg7XG59XG4uYXJlYSB7XG4gIHBhZGRpbmc6IDIwcHggMTZweDtcbn1cbi5hcmVhLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzY1NjU2NTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uYXJlYS10aXRsZSAuY291bnQge1xuICBjb2xvcjogIzQzOTJFRjtcbn1cbi5hcmVhLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcmVhLWZvb3RlciBidXR0b24ubW9yZSB7XG4gIGNvbG9yOiAjNUU1RTVFO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHggMzVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFyZWEtZm9vdGVyIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB3aWR0aDogNjU0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcmVhLWZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuLnBkZi1jb250YWluZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5wbC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxucHItMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5pbWcubm9yZWNvcmQge1xuICBoZWlnaHQ6IDE4MHB4IWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1OXB4KSB7XG4gIC5hcmVhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbi5oZWFkZXItY29tbW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzE4RjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItY29tbW9uIGgxLFxuLmhlYWRlci1jb21tb24gaDIge1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbmJ1dHRvbi5hY3Rpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5idXR0b24uYWN0aW9uLmZ1bmRzIHtcbiAgYmFja2dyb3VuZDogI0E2MjJGOTtcbn1cbmJ1dHRvbi5hY3Rpb24uYXZhaWxhYmlsaXR5IHtcbiAgYmFja2dyb3VuZDogIzcwQ0YzRjtcbn1cbmJ1dHRvbi5hY3Rpb24uY29udGFjdCB7XG4gIGJhY2tncm91bmQ6ICNGRjg0MTA7XG59XG5idXR0b24uYWN0aW9uLmFib3V0IHtcbiAgYmFja2dyb3VuZDogIzNGOTNGNDtcbn1cbi8qIFN0eWxlIHRoZSB0YWIgKi9cbi50YWIge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTJFMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmJmYiAwJSwgI2VhZThlOGNjIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cbi8qIFN0eWxlIHRoZSBidXR0b25zIGluc2lkZSB0aGUgdGFiICovXG4udGFiIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDIycHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMkUyRTI7XG59XG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXG4udGFiIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjkzRjQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IFwidGFiIGJ1dHRvblwiIGNsYXNzICovXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y5M0Y0O1xuICBjb2xvcjogI2ZmZjtcbn1cbiIsIkBicmVha3BvaW50LXNtYWxsLWRvd246IDU3NXB4O1xuQGJyZWFwb2ludC1waG9uZS1kb3duOiA3NjdweDtcbkBicmVha3BvaW50LXRhYmxldC1kb3duOiA5OTFweDtcbkBicmVha3BvaW50LWRlc2t0b3AtZG93bjogMTE5OXB4O1xuQGJyZWFrcG9pbnQtc21hbGwtdXA6IDU3NnB4O1xuQGJyZWFwb2ludC1waG9uZS11cDogNzY4cHg7XG5AYnJlYWtwb2ludC10YWJsZXQtdXA6IDk5MnB4O1xuQGJyZWFrcG9pbnQtZGVza3RvcC11cDogMTIwMHB4O1xuQGJyZWFwb2ludC1waG9uZS1taW4tZG93bjogNzU5cHg7XG5AYnJlYWtwb2ludC1taW5pLXNtYWxsOiA0MjBweDtcbkBicmVha3BvaW50LXRhYmxldC1sYW5kc2NhcGUtdXA6IDEwMjRweDtcblxuLnJlc3BvbnNpdmUtbWF4KEBtYXhXaWR0aDsgQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAbWF4V2lkdGgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4ucmVzcG9uc2l2ZS1taW4oQG1heFdpZHRoOyBAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IEBtYXhXaWR0aCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5vbi1kZXNrdG9wKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1pbihAYnJlYWtwb2ludC1kZXNrdG9wLWRvd24sIEBydWxlcyk7XG59XG5cbi5vbi1sYXJnZS1zY3JlZW4oQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWluKEBicmVhcG9pbnQtcGhvbmUtdXAsIEBydWxlcyk7XG59XG5cbi5vbi10YWJsZXQoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVha3BvaW50LWRlc2t0b3AtdXAsIEBydWxlcyk7XG59XG5cbi5vbi1tb2JpbGUoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVha3BvaW50LXRhYmxldC11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLWlwYWQoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVha3BvaW50LXRhYmxldC1sYW5kc2NhcGUtdXAsIEBydWxlcyk7XG59XG5cbi5vbi1tb2JpbGUtZG93bihAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFwb2ludC1waG9uZS1taW4tZG93biwgQHJ1bGVzKTtcbn1cbi5vbi1taW5pLXNtYWxsLW1vYmlsZShAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtbWluaS1zbWFsbCwgQHJ1bGVzKTtcbn1cblxuLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbi5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cCkge1xuICAgIC5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgICAuaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxufVxuXG4iLCIudWwtbmF2LWRlZmF1bHRzKCkge1xuICAgIC5uby1tYXIoKTtcbiAgICBcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBAbmF2LWNvbG9yO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWxlY3QtYXJyb3cge1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0ZXh0LW92ZXJmbG93OiAnJztcblxuICAgICY6Oi1tcy1leHBhbmQgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXG4gICAgfVxufVxuXG4uc2VsZWN0LWFycm93LWJsYWNrKEBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmKSB7XG4gICAgLnNlbGVjdC1hcnJvdygpO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VsZWN0LWFycm93LWJsYWNrLnBuZycpXG4gICAgICAgICAgICAgICAgbm8tcmVwZWF0IDk1JSA1MCUgQGJhY2tncm91bmQtY29sb3I7XG59XG5cbi5zZWxlY3QtYXJyb3ctd2hpdGUoQGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50KSB7XG4gICAgLnNlbGVjdC1hcnJvdygpO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VsZWN0LWFycm93LXdoaXRlLnBuZycpXG4gICAgICAgICAgICAgICAgbm8tcmVwZWF0IDk1JSA1MCUgQGJhY2tncm91bmQtY29sb3I7XG59XG5cbi5pbmxpbmUtbGlzdCgpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG59XG5cbi5iZXRhLXZlcnNpb24ge1xuICAgIHBhZGRpbmc6IDNweCA0cHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2YyOGMzNTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG59XG5cbmEubm8tb3V0bGluZSB7XG4gICAgb3V0bGluZTogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG4ubm8tc2VsZWN0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG59IiwiLm5vLW1hci10b3AgeyBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7IH1cbi5uby1tYXItYnRtIHsgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4ubWFyLTIwIHsgbWFyZ2luLXRvcDogMjBweDsgfVxuLm1hci0zMCB7IG1hcmdpbi10b3A6IDMwcHg7IH1cbi5tYXItMTAtdmVyIHsgbWFyZ2luOiAxMHB4IDA7IH07XG4ubm8tbWFyIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG4iLCIuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgfVxuLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFrcG9pbnQtdGFibGV0LXVwKSB7XG4gICAgLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAuaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2s7IH1cbn1cblxuIiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMvYWxsJztcbkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2FsbCc7XG5AaW1wb3J0ICcuL3Jlc3BvbnNpdmUnO1xuXG5AYXJlYS1nYXA6IDIwcHg7XG5AYXJlYS1icmVhay1wb2ludDogNzU5cHg7XG5Ac2NhbGUtaW1nLXdpZHRoOiAzNnB4O1xuXG4uaGVhZGVyLW5vdGlmaWNhdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LW9yYW5nZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjJlbSAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC5mb250LWxpZ2h0KCk7XG59XG5cbmgxLCBoMiwgcDpub3QoLmhlbHAtYmxvY2spLCB1bDpub3QoLmRyb3Bkb3duLW1lbnUpLCBsaSwgYnV0dG9uLCBsYWJlbCB7XG4gICAgLm5vLW1hcigpO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmlucHV0LWJ0bigpIHtcbiAgICAuZm9udC1ib2xkKCk7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNWY1ZjUnLCBHcmFkaWVudFR5cGU9MCApO1xufVxuXG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgQGJvcmRlci1zaXplOiAxcHg7XG4gICAgYm9yZGVyLXRvcDogQGJvcmRlci1zaXplIHNvbGlkICNFMkUyRTI7XG5cbiAgICAmPiAuY29udGFpbmVyIHtcbiAgICAgICAgdG9wOiAtKEBib3JkZXItc2l6ZSk7XG4gICAgfVxufVxuXG4uYXJlYSB7XG4gICAgcGFkZGluZzogQGFyZWEtZ2FwIDE2cHg7XG59XG5cbi5hcmVhLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM2NTY1NjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7aGVpZ2h0OjI0cHg7XG4gICAgXG4gICAgLmNvdW50IHtcbiAgICAgICAgY29sb3I6IEBwcmltYXJ5LWJsdWU7XG4gICAgfVxufVxuXG4uYXJlYS1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBidXR0b24ubW9yZSB7XG4gICAgICAgIC5tb3JlKCk7XG4gICAgfVxuXG4gICAgLm9uLW1vYmlsZSh7XG4gICAgICAgIG1hcmdpbjogQGFyZWEtZ2FwIDA7d2lkdGg6NjU0cHg7XG4gICAgfSk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFwb2ludC1waG9uZS11cCkge1xuICAgICAgICBtYXJnaW46IEBhcmVhLWdhcCBhdXRvIWltcG9ydGFudDt3aWR0aDphdXRvO1xuICAgfVxufVxuXG4ucGRmLWNvbnRhaW5lciB7XG4gICAgLm5vLW1hcigpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xufVxucGwtMHtcbiAgICBwYWRkaW5nLWxlZnQ6MDtcbn1cblxucHItMHtcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XG59XG5pbWcubm9yZWNvcmR7XG4gIGhlaWdodDogMTgwcHghaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGFyZWEtYnJlYWstcG9pbnQpIHtcbiAgICAuYXJlYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4iLCJAaW1wb3J0ICcuLi92YXJpYWJsZXMvYWxsJztcblxuLm1vcmUoKSB7XG4gICAgY29sb3I6ICM1RTVFNUU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmJ0bigpIHtcbiAgICAuZm9udC1ib2xkKCk7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5wcmltYXJ5KCkge1xuICAgICAuYnRuKCk7XG4gICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQHByaW1hcnktYmx1ZS1kYXJrO1xuICAgIH1cbn1cblxuLnNhdmUoKSB7XG4gICAgLmJ0bigpO1xuICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1saWdodDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQHByaW1hcnktb3JhbmdlLWRhcmtlcjtcbiAgICB9XG59IiwiQGltcG9ydCAnLi9jb21tb24nO1xuXG5AaGVhZGVyLWJnLWhlaWdodDogMjAwcHg7XG5cbi5oZWFkZXItY29tbW9uIHsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzE4RjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgaDEsIGgyIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIC5mb250LWxpZ2h0KCk7IFxuICAgIH1cbn1cblxuYnV0dG9uLmFjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICBcbiAgICAmLmZ1bmRzIHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJ0bi1yZWZlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJpbGl0eSB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4tYXZhaWxhYmlsaXR5LWNvbG9yO1xuICAgIH1cblxuICAgICYuY29udGFjdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1saWdodDtcbiAgICB9XG5cbiAgICAmLmFib3V0IHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJ0bi1oaXJlLWNvbG9yO1xuICAgIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMvaGVhZGVyLWNvbW1vbic7XG4vKiBTdHlsZSB0aGUgdGFiICovXG4udGFiIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMkUyRTI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGZiZmIgMCUsICNlYWU4ZThjYyAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b25zIGluc2lkZSB0aGUgdGFiICovXG4udGFiIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDIycHggMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMkUyRTI7XG59XG5cbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cbi50YWIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGOTNGNDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qIENyZWF0ZSBhbiBhY3RpdmUvY3VycmVudCBcInRhYiBidXR0b25cIiBjbGFzcyAqL1xuLnRhYiBidXR0b24uYWN0aXZlIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICMzRjkzRjQ7XG4gICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/profile/profile-header-desktop.component.ts":
/*!*********************************************************!*\
  !*** ./src/profile/profile-header-desktop.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileHeaderDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHeaderDesktopComponent", function() { return ProfileHeaderDesktopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");





var ProfileHeaderDesktopComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileHeaderDesktopComponent, _super);
    function ProfileHeaderDesktopComponent(route, router, lookupSvc) {
        var _this = _super.call(this, route, router) || this;
        _this.lookupSvc = lookupSvc;
        return _this;
    }
    ProfileHeaderDesktopComponent.prototype.ngOnInit = function () {
    };
    ProfileHeaderDesktopComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProfileHeaderDesktopComponent.prototype, "profile", void 0);
    ProfileHeaderDesktopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-header-desktop',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-header-desktop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-desktop.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/header-desktop.less */ "./src/profile/styles/header-desktop.less")).default]
        })
    ], ProfileHeaderDesktopComponent);
    return ProfileHeaderDesktopComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/profile-header-mobile.component.ts":
/*!********************************************************!*\
  !*** ./src/profile/profile-header-mobile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileHeaderMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileHeaderMobileComponent", function() { return ProfileHeaderMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var ProfileHeaderMobileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileHeaderMobileComponent, _super);
    function ProfileHeaderMobileComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    ProfileHeaderMobileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProfileHeaderMobileComponent.prototype, "profile", void 0);
    ProfileHeaderMobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-header-mobile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-header-mobile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-mobile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/header-mobile.less */ "./src/profile/styles/header-mobile.less")).default]
        })
    ], ProfileHeaderMobileComponent);
    return ProfileHeaderMobileComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/profile-resolver.service.ts":
/*!*************************************************!*\
  !*** ./src/profile/profile-resolver.service.ts ***!
  \*************************************************/
/*! exports provided: ProfileResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolverService", function() { return ProfileResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.service */ "./src/profile/profile.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");







var ProfileResolverService = /** @class */ (function () {
    function ProfileResolverService(profileSvc, router, route) {
        this.profileSvc = profileSvc;
        this.router = router;
        this.route = route;
    }
    ProfileResolverService.prototype.resolve = function (route, state) {
        var _this = this;
        var viewingProfileSysId = parseInt(route.paramMap.get('profileSysId'));
        return this.profileSvc.getProfile(viewingProfileSysId)
            .map(function (profile) {
            if (profile) {
                return profile;
            }
            else {
                _this.router.navigate(['/']);
                return null;
            }
        })
            .catch(function (error) {
            _this.router.navigate(['/']);
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"].of(null);
        });
    };
    ProfileResolverService.ctorParameters = function () { return [
        { type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ProfileResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProfileResolverService);
    return ProfileResolverService;
}());



/***/ }),

/***/ "./src/profile/profile-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/profile/profile-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-resolver.service */ "./src/profile/profile-resolver.service.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/profile/profile.component.ts");
/* harmony import */ var _overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview/profile-overview.component */ "./src/profile/overview/profile-overview.component.ts");
/* harmony import */ var _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withdraw-fund/withdraw-fund.component */ "./src/profile/withdraw-fund/withdraw-fund.component.ts");
/* harmony import */ var _deposit_fund_deposit_fund_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deposit-fund/deposit-fund.component */ "./src/profile/deposit-fund/deposit-fund.component.ts");
/* harmony import */ var _stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-history/stock-history.component */ "./src/profile/stock-history/stock-history.component.ts");
/* harmony import */ var _transfer_to_stock_transfer_to_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transfer-to-stock/transfer-to-stock.component */ "./src/profile/transfer-to-stock/transfer-to-stock.component.ts");
/* harmony import */ var _settings_password_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings/password/password.component */ "./src/profile/settings/password/password.component.ts");
/* harmony import */ var _settings_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/profile-info/profile-info.component */ "./src/profile/settings/profile-info/profile-info.component.ts");
/* harmony import */ var _settings_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/personal-info/personal-info.component */ "./src/profile/settings/personal-info/personal-info.component.ts");













var routes = [
    {
        path: ':profileSysId',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        resolve: { profile: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__["ProfileResolverService"] },
        children: [{
                path: '',
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: _overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_5__["ProfileOverviewComponent"] },
                    { path: 'fund-deposit', component: _deposit_fund_deposit_fund_component__WEBPACK_IMPORTED_MODULE_7__["DepositFundComponent"] },
                    { path: 'fund-withdraw', component: _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_6__["WithdrawFundComponent"] },
                    { path: 'stock-history', component: _stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_8__["StockHistoryComponent"] },
                    { path: 'transfer-to-stock', component: _transfer_to_stock_transfer_to_stock_component__WEBPACK_IMPORTED_MODULE_9__["TransferToStockComponent"] },
                    { path: 'setting/personal-info', component: _settings_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_12__["PersonalInfoSettingComponent"] },
                    { path: 'setting/profile-info', component: _settings_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_11__["ProfileInfoSettingComponent"] },
                    { path: 'setting/password', component: _settings_password_password_component__WEBPACK_IMPORTED_MODULE_10__["PasswordSettingComponent"] },
                    { path: 'account-opening', loadChildren: function () { return __webpack_require__.e(/*! import() | finance-account-opening-margin-account-account-form-module */ "finance-account-opening-margin-account-account-form-module").then(__webpack_require__.bind(null, /*! ../finance-account-opening/margin-account/account-form.module */ "./src/finance-account-opening/margin-account/account-form.module.ts")).then(function (m) { return m.AccountFormModule; }); } }
                ]
            }]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_profile_resolver_service__WEBPACK_IMPORTED_MODULE_3__["ProfileResolverService"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/profile/profile.component.ts":
/*!******************************************!*\
  !*** ./src/profile/profile.component.ts ***!
  \******************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route) {
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.data.subscribe(function (data) {
            _this.profile = data.profile;
            console.log(_this.profile);
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'crm-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile.component.html")).default
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/profile/profile.module.ts":
/*!***************************************!*\
  !*** ./src/profile/profile.module.ts ***!
  \***************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.component */ "./src/profile/profile.component.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/profile/profile-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _profile_header_desktop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-header-desktop.component */ "./src/profile/profile-header-desktop.component.ts");
/* harmony import */ var _profile_header_mobile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-header-mobile.component */ "./src/profile/profile-header-mobile.component.ts");
/* harmony import */ var _overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overview/profile-overview.component */ "./src/profile/overview/profile-overview.component.ts");
/* harmony import */ var _margin_account_margin_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./margin-account/margin-account.component */ "./src/profile/margin-account/margin-account.component.ts");
/* harmony import */ var _cash_account_cash_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cash-account/cash-account.component */ "./src/profile/cash-account/cash-account.component.ts");
/* harmony import */ var _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./withdraw-fund/withdraw-fund.component */ "./src/profile/withdraw-fund/withdraw-fund.component.ts");
/* harmony import */ var _deposit_fund_deposit_fund_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deposit-fund/deposit-fund.component */ "./src/profile/deposit-fund/deposit-fund.component.ts");
/* harmony import */ var _stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stock-history/stock-history.component */ "./src/profile/stock-history/stock-history.component.ts");
/* harmony import */ var _transfer_to_stock_transfer_to_stock_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transfer-to-stock/transfer-to-stock.component */ "./src/profile/transfer-to-stock/transfer-to-stock.component.ts");
/* harmony import */ var _settings_password_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./settings/password/password.component */ "./src/profile/settings/password/password.component.ts");
/* harmony import */ var _settings_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/profile-info/profile-info.component */ "./src/profile/settings/profile-info/profile-info.component.ts");
/* harmony import */ var _settings_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/personal-info/personal-info.component */ "./src/profile/settings/personal-info/personal-info.component.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile.service */ "./src/profile/profile.service.ts");




// entry point



// profile headers


// overview section







//settings




var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"]
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _profile_header_desktop_component__WEBPACK_IMPORTED_MODULE_7__["ProfileHeaderDesktopComponent"],
                _profile_header_mobile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileHeaderMobileComponent"],
                _overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_9__["ProfileOverviewComponent"],
                _margin_account_margin_account_component__WEBPACK_IMPORTED_MODULE_10__["MarginAccountComponent"],
                _cash_account_cash_account_component__WEBPACK_IMPORTED_MODULE_11__["CashAccountComponent"],
                _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_12__["WithdrawFundComponent"],
                _deposit_fund_deposit_fund_component__WEBPACK_IMPORTED_MODULE_13__["DepositFundComponent"],
                _stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_14__["StockHistoryComponent"],
                _transfer_to_stock_transfer_to_stock_component__WEBPACK_IMPORTED_MODULE_15__["TransferToStockComponent"],
                _settings_password_password_component__WEBPACK_IMPORTED_MODULE_16__["PasswordSettingComponent"],
                _settings_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_17__["ProfileInfoSettingComponent"],
                _settings_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_18__["PersonalInfoSettingComponent"]
            ],
            exports: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
            ],
            providers: [
                _profile_service__WEBPACK_IMPORTED_MODULE_19__["ProfileService"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/profile/profile.service.ts":
/*!****************************************!*\
  !*** ./src/profile/profile.service.ts ***!
  \****************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getProfile = function (profileSysId) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoints.profile.profile(profileSysId);
        return this.http
            .get(url)
            .map(function (r) { return _this.onGetSuccessful(r); });
    };
    ProfileService.prototype.onGetSuccessful = function (response) {
        return response || null;
    };
    ProfileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/profile/settings/password/password.component.ts":
/*!*************************************************************!*\
  !*** ./src/profile/settings/password/password.component.ts ***!
  \*************************************************************/
/*! exports provided: PasswordSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordSettingComponent", function() { return PasswordSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var PasswordSettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PasswordSettingComponent, _super);
    function PasswordSettingComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    PasswordSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PasswordSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'password-reset',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/password/password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], PasswordSettingComponent);
    return PasswordSettingComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/settings/personal-info/personal-info.component.ts":
/*!***********************************************************************!*\
  !*** ./src/profile/settings/personal-info/personal-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: PersonalInfoSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoSettingComponent", function() { return PersonalInfoSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var PersonalInfoSettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PersonalInfoSettingComponent, _super);
    function PersonalInfoSettingComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    PersonalInfoSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PersonalInfoSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'personal-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/personal-info/personal-info.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], PersonalInfoSettingComponent);
    return PersonalInfoSettingComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/settings/profile-info/profile-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/profile/settings/profile-info/profile-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileInfoSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoSettingComponent", function() { return ProfileInfoSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var ProfileInfoSettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileInfoSettingComponent, _super);
    function ProfileInfoSettingComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    ProfileInfoSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProfileInfoSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/profile-info/profile-info.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], ProfileInfoSettingComponent);
    return ProfileInfoSettingComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/stock-history/stock-history.component.ts":
/*!**************************************************************!*\
  !*** ./src/profile/stock-history/stock-history.component.ts ***!
  \**************************************************************/
/*! exports provided: StockHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockHistoryComponent", function() { return StockHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var StockHistoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StockHistoryComponent, _super);
    function StockHistoryComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    StockHistoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    StockHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'stock-history',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/stock-history/stock-history.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], StockHistoryComponent);
    return StockHistoryComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/styles/common.less":
/*!****************************************!*\
  !*** ./src/profile/styles/common.less ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 1024px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  .area {\n    text-align: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvZm9udHMubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy93aWRnZXRzLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3NwYWNpbmcubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvYnV0dG9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7QUNISjtBQ3FDQTtFQUFtQix5QkFBQTtBRGxDbkI7QUNtQ0E7RUFBbUIsd0JBQUE7QURoQ25CO0FDa0NBO0VBQ0k7SUFBbUIsd0JBQUE7RUQvQnJCO0VDZ0NFO0lBQW1CLHlCQUFBO0VEN0JyQjtBQUNGO0FFYkE7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FGZUo7QUViSTtFQUNJLGFBQUE7QUZlUjtBRVNBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FGUEo7QUVVQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBRlJKO0FFVUk7OztFQUdJLFVBQUE7RUFDQSxxQkFBQTtBRlJSO0FFWUE7RUFDSSwyQkFBQTtFRlZGLGVBQWU7RUVXYix5QkFBQTtFRlRGLFdBQVc7RUFFWCxtQkFBbUI7RUVTZCxzQkFBQTtFRlBMLFlBQVk7RUVRTixxQkFBQTtFRk5OLDJCQUEyQjtFRU9qQixpQkFBQTtFRkxWO2lFQUMrRDtBQUNqRTtBRzFFQTtFQUFjLHdCQUFBO0FINkVkO0FHNUVBO0VBQWMsMkJBQUE7QUgrRWQ7QUc5RUE7RUFBVSxnQkFBQTtBSGlGVjtBR2hGQTtFQUFVLGdCQUFBO0FIbUZWO0FHbEZBO0VBQWMsY0FBQTtBSHFGZDtBR3BGQTtFQUFVLFNBQUE7RUFBVyxVQUFBO0FId0ZyQjtBSTdGQTtFQUFtQixjQUFBO0FKZ0duQjtBSS9GQTtFQUFtQixhQUFBO0FKa0duQjtBSWhHQTtFQUNJO0lBQW1CLGFBQUE7RUptR3JCO0VJbEdFO0lBQW1CLGNBQUE7RUpxR3JCO0FBQ0Y7QUtuR0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VOUEEsZ0JBQUE7QUM2R0o7QUtsR0E7Ozs7Ozs7RUZYVSxTQUFBO0VBQVcsVUFBQTtBSHVIckI7QUt4R0E7RUFDSSxTQUFBO0FMMEdKO0FLOUZBO0VBQ0ksbUJBQUE7RUFFQSx1R0FBQTtFQUlBLGdFQUFBO0VBQ0Esa0hBQUE7QUxnR0o7QUs3RkE7RUFFSSw2QkFBQTtBTDhGSjtBSzVGSTtFQUNJLFNBQUE7QUw4RlI7QUsxRkE7RUFDSSxrQkFBQTtBTDRGSjtBS3pGQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUFvQixZQUFBO0FMNEZ4QjtBS2hHQTtFQU9RLGNBQUE7QUw0RlI7QUt4RkE7RUFDSSxrQkFBQTtBTDBGSjtBSzNGQTtFQ2pFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBTitKSjtBQzFKSTtFQUFBO0lJK0RJLGNBQUE7SUFBb0IsWUFBQTtFTGdHMUI7QUFDRjtBSy9GSTtFQUFBO0lBQ0ksNEJBQUE7SUFBaUMsV0FBQTtFTG1HdkM7QUFDRjtBS2hHQTtFRjlFVSxTQUFBO0VBQVcsVUFBQTtFRWdGakIsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FMbUdKO0FLakdBO0VBQ0ksZUFBQTtBTG1HSjtBS2hHQTtFQUNJLGdCQUFBO0FMa0dKO0FLaEdBO0VBQ0UsdUJBQUE7QUxrR0Y7QUtoR0E7RUFDSTtJQUNJLGtCQUFBO0VMa0dOO0FBQ0YiLCJmaWxlIjoic3JjL3Byb2ZpbGUvc3R5bGVzL2NvbW1vbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnQtbGlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5mb250LXJlZ3VsYXIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb250LWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mb250LXhib2xkIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xufSIsIi5mb250LW5hbWUge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuLmZvbnQtbGlnaHQge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmZvbnQtcmVndWxhciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb250LXhib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5zaG93LW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmhpZGUtb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhpZGUtb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnNlbGVjdC1hcnJvdyB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdGV4dC1vdmVyZmxvdzogJyc7XG59XG4uc2VsZWN0LWFycm93OjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5iZXRhLXZlcnNpb24ge1xuICBwYWRkaW5nOiAzcHggNHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjI4YzM1O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG59XG5hLm5vLW91dGxpbmUge1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLm5vLW91dGxpbmU6aG92ZXIsXG5hLm5vLW91dGxpbmU6Zm9jdXMsXG5hLm5vLW91dGxpbmU6YWN0aXZlIHtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5vLXNlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBTYWZhcmkgKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG59XG4ubm8tbWFyLXRvcCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5uby1tYXItYnRtIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLm1hci0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFyLTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYXItMTAtdmVyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ubm8tbWFyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNob3ctb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhpZGUtb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaGVhZGVyLW5vdGlmaWNhdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI3NjAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuaDEsXG5oMixcbnA6bm90KC5oZWxwLWJsb2NrKSxcbnVsOm5vdCguZHJvcGRvd24tbWVudSksXG5saSxcbmJ1dHRvbixcbmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xufVxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2ZmZmZmZiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y1ZjVmNSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNWY1ZjUnLCBHcmFkaWVudFR5cGU9MCk7XG59XG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTJFMkUyO1xufVxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUgPiAuY29udGFpbmVyIHtcbiAgdG9wOiAtMXB4O1xufVxuLmFyZWEge1xuICBwYWRkaW5nOiAyMHB4IDE2cHg7XG59XG4uYXJlYS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmFyZWEtdGl0bGUgLmNvdW50IHtcbiAgY29sb3I6ICM0MzkyRUY7XG59XG4uYXJlYS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXJlYS1mb290ZXIgYnV0dG9uLm1vcmUge1xuICBjb2xvcjogIzVFNUU1RTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hcmVhLWZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgd2lkdGg6IDY1NHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXJlYS1mb290ZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5wZGYtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxucGwtMCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnByLTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuaW1nLm5vcmVjb3JkIHtcbiAgaGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTlweCkge1xuICAuYXJlYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCJAYnJlYWtwb2ludC1zbWFsbC1kb3duOiA1NzVweDtcbkBicmVhcG9pbnQtcGhvbmUtZG93bjogNzY3cHg7XG5AYnJlYWtwb2ludC10YWJsZXQtZG93bjogOTkxcHg7XG5AYnJlYWtwb2ludC1kZXNrdG9wLWRvd246IDExOTlweDtcbkBicmVha3BvaW50LXNtYWxsLXVwOiA1NzZweDtcbkBicmVhcG9pbnQtcGhvbmUtdXA6IDc2OHB4O1xuQGJyZWFrcG9pbnQtdGFibGV0LXVwOiA5OTJweDtcbkBicmVha3BvaW50LWRlc2t0b3AtdXA6IDEyMDBweDtcbkBicmVhcG9pbnQtcGhvbmUtbWluLWRvd246IDc1OXB4O1xuQGJyZWFrcG9pbnQtbWluaS1zbWFsbDogNDIwcHg7XG5AYnJlYWtwb2ludC10YWJsZXQtbGFuZHNjYXBlLXVwOiAxMDI0cHg7XG5cbi5yZXNwb25zaXZlLW1heChAbWF4V2lkdGg7IEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogQG1heFdpZHRoKSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLnJlc3BvbnNpdmUtbWluKEBtYXhXaWR0aDsgQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBAbWF4V2lkdGgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4ub24tZGVza3RvcChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1taW4oQGJyZWFrcG9pbnQtZGVza3RvcC1kb3duLCBAcnVsZXMpO1xufVxuXG4ub24tbGFyZ2Utc2NyZWVuKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1pbihAYnJlYXBvaW50LXBob25lLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tdGFibGV0KEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC1kZXNrdG9wLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tbW9iaWxlKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC10YWJsZXQtdXAsIEBydWxlcyk7XG59XG5cbi5vbi1pcGFkKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC10YWJsZXQtbGFuZHNjYXBlLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tbW9iaWxlLWRvd24oQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVhcG9pbnQtcGhvbmUtbWluLWRvd24sIEBydWxlcyk7XG59XG4ub24tbWluaS1zbWFsbC1tb2JpbGUoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVha3BvaW50LW1pbmktc21hbGwsIEBydWxlcyk7XG59XG5cbi5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4uaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVha3BvaW50LXRhYmxldC1sYW5kc2NhcGUtdXApIHtcbiAgICAuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbn1cblxuIiwiLnVsLW5hdi1kZWZhdWx0cygpIHtcbiAgICAubm8tbWFyKCk7XG4gICAgXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogQG5hdi1jb2xvcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0LWFycm93IHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogJyc7XG5cbiAgICAmOjotbXMtZXhwYW5kIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxuICAgIH1cbn1cblxuLnNlbGVjdC1hcnJvdy1ibGFjayhAYmFja2dyb3VuZC1jb2xvcjogI2ZmZikge1xuICAgIC5zZWxlY3QtYXJyb3coKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy1ibGFjay5wbmcnKVxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdCA5NSUgNTAlIEBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uc2VsZWN0LWFycm93LXdoaXRlKEBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCkge1xuICAgIC5zZWxlY3QtYXJyb3coKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy13aGl0ZS5wbmcnKVxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdCA5NSUgNTAlIEBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uaW5saW5lLWxpc3QoKSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG4uYmV0YS12ZXJzaW9uIHtcbiAgICBwYWRkaW5nOiAzcHggNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMjhjMzU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xufVxuXG5hLm5vLW91dGxpbmUge1xuICAgIG91dGxpbmU6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cblxuLm5vLXNlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xufSIsIi5uby1tYXItdG9wIHsgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyB9XG4ubm8tbWFyLWJ0bSB7IG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuLm1hci0yMCB7IG1hcmdpbi10b3A6IDIwcHg7IH1cbi5tYXItMzAgeyBtYXJnaW4tdG9wOiAzMHB4OyB9XG4ubWFyLTEwLXZlciB7IG1hcmdpbjogMTBweCAwOyB9O1xuLm5vLW1hciB7IG1hcmdpbjogMDsgcGFkZGluZzogMDsgfVxuIiwiLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrIH1cbi5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBub25lOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVha3BvaW50LXRhYmxldC11cCkge1xuICAgIC5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrOyB9XG59XG5cbiIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzL2FsbCc7XG5AaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL21peGlucy9hbGwnO1xuQGltcG9ydCAnLi9yZXNwb25zaXZlJztcblxuQGFyZWEtZ2FwOiAyMHB4O1xuQGFyZWEtYnJlYWstcG9pbnQ6IDc1OXB4O1xuQHNjYWxlLWltZy13aWR0aDogMzZweDtcblxuLmhlYWRlci1ub3RpZmljYXRpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJpbWFyeS1vcmFuZ2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4yZW0gMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAuZm9udC1saWdodCgpO1xufVxuXG5oMSwgaDIsIHA6bm90KC5oZWxwLWJsb2NrKSwgdWw6bm90KC5kcm9wZG93bi1tZW51KSwgbGksIGJ1dHRvbiwgbGFiZWwge1xuICAgIC5uby1tYXIoKTtcbn1cblxuYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5pbnB1dC1idG4oKSB7XG4gICAgLmZvbnQtYm9sZCgpO1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZjVmNWY1JywgR3JhZGllbnRUeXBlPTAgKTtcbn1cblxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUge1xuICAgIEBib3JkZXItc2l6ZTogMXB4O1xuICAgIGJvcmRlci10b3A6IEBib3JkZXItc2l6ZSBzb2xpZCAjRTJFMkUyO1xuXG4gICAgJj4gLmNvbnRhaW5lciB7XG4gICAgICAgIHRvcDogLShAYm9yZGVyLXNpemUpO1xuICAgIH1cbn1cblxuLmFyZWEge1xuICAgIHBhZGRpbmc6IEBhcmVhLWdhcCAxNnB4O1xufVxuXG4uYXJlYS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O2hlaWdodDoyNHB4O1xuICAgIFxuICAgIC5jb3VudCB7XG4gICAgICAgIGNvbG9yOiBAcHJpbWFyeS1ibHVlO1xuICAgIH1cbn1cblxuLmFyZWEtZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgYnV0dG9uLm1vcmUge1xuICAgICAgICAubW9yZSgpO1xuICAgIH1cblxuICAgIC5vbi1tb2JpbGUoe1xuICAgICAgICBtYXJnaW46IEBhcmVhLWdhcCAwO3dpZHRoOjY1NHB4O1xuICAgIH0pO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVhcG9pbnQtcGhvbmUtdXApIHtcbiAgICAgICAgbWFyZ2luOiBAYXJlYS1nYXAgYXV0byFpbXBvcnRhbnQ7d2lkdGg6YXV0bztcbiAgIH1cbn1cblxuLnBkZi1jb250YWluZXIge1xuICAgIC5uby1tYXIoKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbnBsLTB7XG4gICAgcGFkZGluZy1sZWZ0OjA7XG59XG5cbnByLTB7XG4gICAgcGFkZGluZy1yaWdodDowO1xufVxuaW1nLm5vcmVjb3Jke1xuICBoZWlnaHQ6IDE4MHB4IWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBhcmVhLWJyZWFrLXBvaW50KSB7XG4gICAgLmFyZWEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuIiwiQGltcG9ydCAnLi4vdmFyaWFibGVzL2FsbCc7XG5cbi5tb3JlKCkge1xuICAgIGNvbG9yOiAjNUU1RTVFO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idG4oKSB7XG4gICAgLmZvbnQtYm9sZCgpO1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4ucHJpbWFyeSgpIHtcbiAgICAgLmJ0bigpO1xuICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1ibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LWJsdWUtZGFyaztcbiAgICB9XG59XG5cbi5zYXZlKCkge1xuICAgIC5idG4oKTtcbiAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtbGlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1kYXJrZXI7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/profile/styles/header-desktop.less":
/*!************************************************!*\
  !*** ./src/profile/styles/header-desktop.less ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  .area {\n    text-align: center;\n  }\n}\n.header-common {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.header-common h1,\n.header-common h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\nbutton.action {\n  font-size: 16px;\n  color: #fff;\n  letter-spacing: 0.4px;\n}\nbutton.action.funds {\n  background: #A622F9;\n}\nbutton.action.availability {\n  background: #70CF3F;\n}\nbutton.action.contact {\n  background: #FF8410;\n}\nbutton.action.about {\n  background: #3F93F4;\n}\n.font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 1024px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n  background: url('/assets/images/select-arrow-white.png') no-repeat 95% 50% transparent;\n}\n.dropdown::-ms-expand {\n  display: none;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n.dropdown .dropbtn {\n  width: 180px;\n  font-weight: 300;\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 10px 0;\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 0.02em;\n}\n.dropdown .dropdown-content {\n  min-width: 180px;\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n.dropdown .dropdown-content a {\n  display: block;\n  color: #333;\n  padding: 15px;\n  text-decoration: none;\n  text-align: left;\n}\n.dropdown .dropdown-content a:not(:last-of-type) {\n  border-bottom: 1px solid #eee;\n}\n.dropdown .dropdown-content a:hover {\n  background-color: #4392EF;\n  color: #fff;\n}\n#profile-header-desktop {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #fff;\n  height: 200px;\n  padding: 0 40px 40px 0;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), #116fbfad), url('profile-bg-new.jpg');\n  background-size: cover;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n#profile-header-desktop h1,\n#profile-header-desktop h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\n#profile-header-desktop label {\n  margin-top: -20px !important;\n}\n#profile-header-desktop .who {\n  top: 40px;\n  position: relative;\n  width: 25em;\n  flex-grow: 2;\n  margin-left: 23px;\n}\n#profile-header-desktop .who h1 {\n  font-size: 2.5em;\n}\n#profile-header-desktop .who h2 {\n  margin-bottom: 10px;\n  font-size: 1.8em;\n}\n#profile-header-desktop .who p {\n  margin-bottom: 15px;\n}\n#profile-header-desktop .who .review-count {\n  margin-left: 0.6em;\n}\n#profile-header-desktop .avatar {\n  width: 211px;\n  height: 215px;\n  border-top: 1px solid #fff;\n  border-right: 1px solid #fff;\n  top: 90px;\n  position: relative;\n}\n#profile-header-desktop .misc {\n  text-align: right;\n  /*\n            <ul class=\"actions\">\n                <li><button/></li>\n            </ul>\n        */\n}\n#profile-header-desktop .misc .profile-score-section {\n  position: relative;\n  left: 15px;\n  top: 25px;\n}\n#profile-header-desktop .misc .actions {\n  list-style-type: none;\n  margin-top: 10px;\n}\n#profile-header-desktop .misc .actions li {\n  display: inline-block;\n}\n#profile-header-desktop .misc .actions li:not(:last-of-type) {\n  margin-right: 10px;\n}\n#profile-header-desktop .misc .actions button.action {\n  height: 50px;\n  border-radius: 5px;\n  padding: 0 25px;\n  /*\n                .on-tablet({\n                    padding: 0 0.3em;\n                    height: 3em;\n                });\n                */\n}\n#profile-tabs {\n  margin-left: 211px;\n  height: 50px;\n  border-right: 1px solid #EBEBEB;\n  border-bottom: 1px solid #EBEBEB;\n  background: #fff;\n}\n#profile-tabs ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n#profile-tabs ul li {\n  display: inline-block;\n}\n#profile-tabs ul li a {\n  color: #555555;\n  letter-spacing: 0;\n}\n#profile-tabs ul li a {\n  font-weight: 400;\n  display: inline-block;\n  padding: 11px 1.5em;\n  color: #949494;\n  outline: 0;\n}\n#profile-tabs ul li a.active,\n#profile-tabs ul li a:hover {\n  color: #F27601;\n  border-bottom: 0.2em solid #F27601;\n  text-decoration: none;\n}\n#profile-tabs ul li .dropdown-content a {\n  width: 100%!important;\n}\n#profile-tabs ul li .dropdown-content a.active,\n#profile-tabs ul li .dropdown-content a:hover {\n  color: #ffff !important;\n  border-bottom: unset!important;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL2hlYWRlci1kZXNrdG9wLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3Byb2ZpbGUvc3R5bGVzL2NvbW1vbi5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy9mb250cy5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy9zcGFjaW5nLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2J1dHRvbnMubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9oZWFkZXItY29tbW9uLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3dpZGdldHMubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvZHJvcGRvd24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvaGVhZGVyLWRlc2t0b3AubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixjQUFBO0FDRW5CO0FEREE7RUFBbUIsYUFBQTtBQ0luQjtBREZBO0VBQ0k7SUFBbUIsYUFBQTtFQ0tyQjtFREpFO0lBQW1CLGNBQUE7RUNPckI7QUFDRjtBQ0xBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQ1BBLGdCQUFBO0FGZUo7QUNKQTs7Ozs7OztFRVhVLFNBQUE7RUFBVyxVQUFBO0FIeUJyQjtBQ1ZBO0VBQ0ksU0FBQTtBRFlKO0FDQUE7RUFDSSxtQkFBQTtFQUVBLHVHQUFBO0VBSUEsZ0VBQUE7RUFDQSxrSEFBQTtBREVKO0FDQ0E7RUFFSSw2QkFBQTtBREFKO0FDRUk7RUFDSSxTQUFBO0FEQVI7QUNJQTtFQUNJLGtCQUFBO0FERko7QUNLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUFvQixZQUFBO0FERnhCO0FDRkE7RUFPUSxjQUFBO0FERlI7QUNNQTtFQUNJLGtCQUFBO0FESko7QUNHQTtFR2pFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBSmlFSjtBSzVESTtFQUFBO0lKK0RJLGNBQUE7SUFBb0IsWUFBQTtFREUxQjtBQUNGO0FDREk7RUFBQTtJQUNJLDRCQUFBO0lBQWlDLFdBQUE7RURLdkM7QUFDRjtBQ0ZBO0VFOUVVLFNBQUE7RUFBVyxVQUFBO0VGZ0ZqQixhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURLSjtBQ0hBO0VBQ0ksZUFBQTtBREtKO0FDRkE7RUFDSSxnQkFBQTtBRElKO0FDRkE7RUFDRSx1QkFBQTtBRElGO0FDRkE7RUFDSTtJQUNJLGtCQUFBO0VESU47QUFDRjtBTXRHQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBTndHSjtBTTdHQTs7RUFRUSxpQkFBQTtFSlBKLGdCQUFBO0FGaUhKO0FNckdBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBTnVHSjtBTXJHSTtFQUNJLG1CQUFBO0FOdUdSO0FNcEdJO0VBQ0ksbUJBQUE7QU5zR1I7QU1uR0k7RUFDSSxtQkFBQTtBTnFHUjtBTWxHSTtFQUNJLG1CQUFBO0FOb0dSO0FFdklBO0VBQ0ksK0JBQUE7QUZ5SUo7QUV0SUE7RUFDSSxnQkFBQTtBRndJSjtBRXJJQTtFQUNJLGdCQUFBO0FGdUlKO0FFcElBO0VBQ0ksZ0JBQUE7QUZzSUo7QUVuSUE7RUFDSSxnQkFBQTtBRnFJSjtBS25HQTtFQUFtQix5QkFBQTtBTHNHbkI7QUtyR0E7RUFBbUIsd0JBQUE7QUx3R25CO0FLdEdBO0VBQ0k7SUFBbUIsd0JBQUE7RUx5R3JCO0VLeEdFO0lBQW1CLHlCQUFBO0VMMkdyQjtBQUNGO0FPckpBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBUHVKSjtBT3JKSTtFQUNJLGFBQUE7QVB1SlI7QU8vSEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QVBpSUo7QU85SEE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QVBnSUo7QU85SEk7OztFQUdJLFVBQUE7RUFDQSxxQkFBQTtBUGdJUjtBTzVIQTtFQUNJLDJCQUFBO0VQOEhGLGVBQWU7RU83SGIseUJBQUE7RVArSEYsV0FBVztFQUVYLG1CQUFtQjtFTy9IZCxzQkFBQTtFUGlJTCxZQUFZO0VPaElOLHFCQUFBO0VQa0lOLDJCQUEyQjtFT2pJakIsaUJBQUE7RVBtSVY7aUVBQytEO0FBQ2pFO0FHbE5BO0VBQWMsd0JBQUE7QUhxTmQ7QUdwTkE7RUFBYywyQkFBQTtBSHVOZDtBR3ROQTtFQUFVLGdCQUFBO0FIeU5WO0FHeE5BO0VBQVUsZ0JBQUE7QUgyTlY7QUcxTkE7RUFBYyxjQUFBO0FINk5kO0FHNU5BO0VBQVUsU0FBQTtFQUFXLFVBQUE7QUhnT3JCO0FRbE9BO0VBR0ksa0JBQUE7RUFDQSxxQkFBQTtFRFNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFlQSxzRkFBQTtBUDRNSjtBT3pOSTtFQUNJLGFBQUE7QVAyTlI7QVF2T0k7RUFDSSxjQUFBO0FSeU9SO0FRbFBBO0VBYVEsWUFBQTtFTlhKLGdCQUFBO0VNY0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBUnVPUjtBUS9QQTtFQTRCUSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSxXQUFBO0FScU9SO0FRdlFBO0VBc0NRLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QVJvT1I7QVFsT1E7RUFDSSw2QkFBQTtBUm9PWjtBUWpSQTtFQWtEUSx5QkFBQTtFQUNBLFdBQUE7QVJrT1I7QVNsUkE7RUhESSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSxXQUFBO0VHSUEsYUFBQTtFQUNBLHNCQUFBO0VBR0EsMkZBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FUZ1JKO0FTL1JBOztFSE1RLGlCQUFBO0VKUEosZ0JBQUE7QUZxU0o7QVNwU0E7RUFJUSw0QkFBQTtBVG1TUjtBU3ZTQTtFQWtCUSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FUdVJSO0FTOVNBO0VBeUJhLGdCQUFBO0FUd1JiO0FTalRBO0VBMEJhLG1CQUFBO0VBQXFCLGdCQUFBO0FUMlJsQztBU3JUQTtFQTJCYSxtQkFBQTtBVDZSYjtBU3hUQTtFQTZCd0Isa0JBQUE7QVQ4UnhCO0FTM1RBO0VBa0NRLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUVBLFNBQUE7RUFDQSxrQkFBQTtBVDJSUjtBU25VQTtFQTRDUSxpQkFBQTtFVDBSTjs7OztTQUlPO0FBQ1Q7QVMzVUE7RUFxRFksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBVHlSWjtBU2hWQTtFRmtDSSxxQkFBQTtFRTJCUSxnQkFBQTtBVHVSWjtBU3BWQTtFRnFDUSxxQkFBQTtBUGtUUjtBU3ZWQTtFQWdFZ0Isa0JBQUE7QVQwUmhCO0FTMVZBO0VBb0VnQixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VUeVJkOzs7OztpQkFLZTtBQUNqQjtBU2xSQTtFQUdJLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBVGlSSjtBU3pSQTtFTnBGVSxTQUFBO0VBQVcsVUFBQTtFSUZqQixxQkFBQTtBUG9YSjtBUzlSQTtFRm5GUSxxQkFBQTtBUG9YUjtBU2pTQTtFRmhGWSxjQUFBO0VBQ0EsaUJBQUE7QVBvWFo7QVNyU0E7RVBoRkksZ0JBQUE7RU9pR1kscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FUd1JoQjtBU3RSZ0I7O0VBRUksY0FBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7QVR3UnBCO0FTbFRBO0VBZ0NZLHFCQUFBO0FUcVJaO0FTcFJhOztFQUVPLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBVHNScEIiLCJmaWxlIjoic3JjL3Byb2ZpbGUvc3R5bGVzL2hlYWRlci1kZXNrdG9wLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgfVxuLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFrcG9pbnQtdGFibGV0LXVwKSB7XG4gICAgLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAuaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2s7IH1cbn1cblxuIiwiLnNob3ctb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhpZGUtb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaGVhZGVyLW5vdGlmaWNhdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI3NjAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuaDEsXG5oMixcbnA6bm90KC5oZWxwLWJsb2NrKSxcbnVsOm5vdCguZHJvcGRvd24tbWVudSksXG5saSxcbmJ1dHRvbixcbmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xufVxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2ZmZmZmZiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y1ZjVmNSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNWY1ZjUnLCBHcmFkaWVudFR5cGU9MCk7XG59XG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTJFMkUyO1xufVxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUgPiAuY29udGFpbmVyIHtcbiAgdG9wOiAtMXB4O1xufVxuLmFyZWEge1xuICBwYWRkaW5nOiAyMHB4IDE2cHg7XG59XG4uYXJlYS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmFyZWEtdGl0bGUgLmNvdW50IHtcbiAgY29sb3I6ICM0MzkyRUY7XG59XG4uYXJlYS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXJlYS1mb290ZXIgYnV0dG9uLm1vcmUge1xuICBjb2xvcjogIzVFNUU1RTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hcmVhLWZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgd2lkdGg6IDY1NHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXJlYS1mb290ZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5wZGYtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxucGwtMCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnByLTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuaW1nLm5vcmVjb3JkIHtcbiAgaGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTlweCkge1xuICAuYXJlYSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLWNvbW1vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDcxOEY7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyLWNvbW1vbiBoMSxcbi5oZWFkZXItY29tbW9uIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5idXR0b24uYWN0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuYnV0dG9uLmFjdGlvbi5mdW5kcyB7XG4gIGJhY2tncm91bmQ6ICNBNjIyRjk7XG59XG5idXR0b24uYWN0aW9uLmF2YWlsYWJpbGl0eSB7XG4gIGJhY2tncm91bmQ6ICM3MENGM0Y7XG59XG5idXR0b24uYWN0aW9uLmNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kOiAjRkY4NDEwO1xufVxuYnV0dG9uLmFjdGlvbi5hYm91dCB7XG4gIGJhY2tncm91bmQ6ICMzRjkzRjQ7XG59XG4uZm9udC1uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cbi5mb250LWxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5mb250LXJlZ3VsYXIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9udC14Ym9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uc2hvdy1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5oaWRlLW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnNob3ctb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zZWxlY3QtYXJyb3cge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtb3ZlcmZsb3c6ICcnO1xufVxuLnNlbGVjdC1hcnJvdzo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmV0YS12ZXJzaW9uIHtcbiAgcGFkZGluZzogM3B4IDRweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2YyOGMzNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nO1xufVxuYS5uby1vdXRsaW5lIHtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYS5uby1vdXRsaW5lOmhvdmVyLFxuYS5uby1vdXRsaW5lOmZvY3VzLFxuYS5uby1vdXRsaW5lOmFjdGl2ZSB7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uby1zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xufVxuLm5vLW1hci10b3Age1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4ubm8tbWFyLWJ0bSB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5tYXItMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1hci0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubWFyLTEwLXZlciB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLm5vLW1hciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtb3ZlcmZsb3c6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy13aGl0ZS5wbmcnKSBuby1yZXBlYXQgOTUlIDUwJSB0cmFuc3BhcmVudDtcbn1cbi5kcm9wZG93bjo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kcm9wZG93biAuZHJvcGJ0biB7XG4gIHdpZHRoOiAxODBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDEwO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCBhOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM5MkVGO1xuICBjb2xvcjogI2ZmZjtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzE4RjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMCA0MHB4IDQwcHggMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41KSwgIzExNmZiZmFkKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLWJnLW5ldy5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIGgxLFxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgaDIge1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIGxhYmVsIHtcbiAgbWFyZ2luLXRvcDogLTIwcHggIWltcG9ydGFudDtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC53aG8ge1xuICB0b3A6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDI1ZW07XG4gIGZsZXgtZ3JvdzogMjtcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAud2hvIGgxIHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC53aG8gaDIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLndobyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC53aG8gLnJldmlldy1jb3VudCB7XG4gIG1hcmdpbi1sZWZ0OiAwLjZlbTtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5hdmF0YXIge1xuICB3aWR0aDogMjExcHg7XG4gIGhlaWdodDogMjE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICB0b3A6IDkwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIC8qXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxidXR0b24vPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAqL1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLm1pc2MgLnByb2ZpbGUtc2NvcmUtc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTVweDtcbiAgdG9wOiAyNXB4O1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLm1pc2MgLmFjdGlvbnMge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIC5hY3Rpb25zIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIC5hY3Rpb25zIGJ1dHRvbi5hY3Rpb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMCAyNXB4O1xuICAvKlxuICAgICAgICAgICAgICAgIC5vbi10YWJsZXQoe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuM2VtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAqL1xufVxuI3Byb2ZpbGUtdGFicyB7XG4gIG1hcmdpbi1sZWZ0OiAyMTFweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRUJFQkVCO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUJFQjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiNwcm9maWxlLXRhYnMgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbiNwcm9maWxlLXRhYnMgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jcHJvZmlsZS10YWJzIHVsIGxpIGEge1xuICBjb2xvcjogIzU1NTU1NTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4jcHJvZmlsZS10YWJzIHVsIGxpIGEge1xuICBmb250LXdlaWdodDogNDAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDExcHggMS41ZW07XG4gIGNvbG9yOiAjOTQ5NDk0O1xuICBvdXRsaW5lOiAwO1xufVxuI3Byb2ZpbGUtdGFicyB1bCBsaSBhLmFjdGl2ZSxcbiNwcm9maWxlLXRhYnMgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjRjI3NjAxO1xuICBib3JkZXItYm90dG9tOiAwLjJlbSBzb2xpZCAjRjI3NjAxO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jcHJvZmlsZS10YWJzIHVsIGxpIC5kcm9wZG93bi1jb250ZW50IGEge1xuICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG59XG4jcHJvZmlsZS10YWJzIHVsIGxpIC5kcm9wZG93bi1jb250ZW50IGEuYWN0aXZlLFxuI3Byb2ZpbGUtdGFicyB1bCBsaSAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IHVuc2V0IWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMvYWxsJztcbkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2FsbCc7XG5AaW1wb3J0ICcuL3Jlc3BvbnNpdmUnO1xuXG5AYXJlYS1nYXA6IDIwcHg7XG5AYXJlYS1icmVhay1wb2ludDogNzU5cHg7XG5Ac2NhbGUtaW1nLXdpZHRoOiAzNnB4O1xuXG4uaGVhZGVyLW5vdGlmaWNhdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LW9yYW5nZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjJlbSAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC5mb250LWxpZ2h0KCk7XG59XG5cbmgxLCBoMiwgcDpub3QoLmhlbHAtYmxvY2spLCB1bDpub3QoLmRyb3Bkb3duLW1lbnUpLCBsaSwgYnV0dG9uLCBsYWJlbCB7XG4gICAgLm5vLW1hcigpO1xufVxuXG5idXR0b24ge1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmlucHV0LWJ0bigpIHtcbiAgICAuZm9udC1ib2xkKCk7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNWY1ZjUnLCBHcmFkaWVudFR5cGU9MCApO1xufVxuXG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgQGJvcmRlci1zaXplOiAxcHg7XG4gICAgYm9yZGVyLXRvcDogQGJvcmRlci1zaXplIHNvbGlkICNFMkUyRTI7XG5cbiAgICAmPiAuY29udGFpbmVyIHtcbiAgICAgICAgdG9wOiAtKEBib3JkZXItc2l6ZSk7XG4gICAgfVxufVxuXG4uYXJlYSB7XG4gICAgcGFkZGluZzogQGFyZWEtZ2FwIDE2cHg7XG59XG5cbi5hcmVhLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM2NTY1NjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7aGVpZ2h0OjI0cHg7XG4gICAgXG4gICAgLmNvdW50IHtcbiAgICAgICAgY29sb3I6IEBwcmltYXJ5LWJsdWU7XG4gICAgfVxufVxuXG4uYXJlYS1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBidXR0b24ubW9yZSB7XG4gICAgICAgIC5tb3JlKCk7XG4gICAgfVxuXG4gICAgLm9uLW1vYmlsZSh7XG4gICAgICAgIG1hcmdpbjogQGFyZWEtZ2FwIDA7d2lkdGg6NjU0cHg7XG4gICAgfSk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFwb2ludC1waG9uZS11cCkge1xuICAgICAgICBtYXJnaW46IEBhcmVhLWdhcCBhdXRvIWltcG9ydGFudDt3aWR0aDphdXRvO1xuICAgfVxufVxuXG4ucGRmLWNvbnRhaW5lciB7XG4gICAgLm5vLW1hcigpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xufVxucGwtMHtcbiAgICBwYWRkaW5nLWxlZnQ6MDtcbn1cblxucHItMHtcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XG59XG5pbWcubm9yZWNvcmR7XG4gIGhlaWdodDogMTgwcHghaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGFyZWEtYnJlYWstcG9pbnQpIHtcbiAgICAuYXJlYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG4iLCIuZm9udC1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZvbnQtcmVndWxhciB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvbnQteGJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiLm5vLW1hci10b3AgeyBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7IH1cbi5uby1tYXItYnRtIHsgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4ubWFyLTIwIHsgbWFyZ2luLXRvcDogMjBweDsgfVxuLm1hci0zMCB7IG1hcmdpbi10b3A6IDMwcHg7IH1cbi5tYXItMTAtdmVyIHsgbWFyZ2luOiAxMHB4IDA7IH07XG4ubm8tbWFyIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG4iLCJAaW1wb3J0ICcuLi92YXJpYWJsZXMvYWxsJztcblxuLm1vcmUoKSB7XG4gICAgY29sb3I6ICM1RTVFNUU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmJ0bigpIHtcbiAgICAuZm9udC1ib2xkKCk7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5wcmltYXJ5KCkge1xuICAgICAuYnRuKCk7XG4gICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQHByaW1hcnktYmx1ZS1kYXJrO1xuICAgIH1cbn1cblxuLnNhdmUoKSB7XG4gICAgLmJ0bigpO1xuICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1saWdodDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQHByaW1hcnktb3JhbmdlLWRhcmtlcjtcbiAgICB9XG59IiwiQGJyZWFrcG9pbnQtc21hbGwtZG93bjogNTc1cHg7XG5AYnJlYXBvaW50LXBob25lLWRvd246IDc2N3B4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWRvd246IDk5MXB4O1xuQGJyZWFrcG9pbnQtZGVza3RvcC1kb3duOiAxMTk5cHg7XG5AYnJlYWtwb2ludC1zbWFsbC11cDogNTc2cHg7XG5AYnJlYXBvaW50LXBob25lLXVwOiA3NjhweDtcbkBicmVha3BvaW50LXRhYmxldC11cDogOTkycHg7XG5AYnJlYWtwb2ludC1kZXNrdG9wLXVwOiAxMjAwcHg7XG5AYnJlYXBvaW50LXBob25lLW1pbi1kb3duOiA3NTlweDtcbkBicmVha3BvaW50LW1pbmktc21hbGw6IDQyMHB4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cDogMTAyNHB4O1xuXG4ucmVzcG9uc2l2ZS1tYXgoQG1heFdpZHRoOyBAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBtYXhXaWR0aCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5yZXNwb25zaXZlLW1pbihAbWF4V2lkdGg7IEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogQG1heFdpZHRoKSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm9uLWRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWluKEBicmVha3BvaW50LWRlc2t0b3AtZG93biwgQHJ1bGVzKTtcbn1cblxuLm9uLWxhcmdlLXNjcmVlbihAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1taW4oQGJyZWFwb2ludC1waG9uZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLXRhYmxldChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtZGVza3RvcC11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZShAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LXVwLCBAcnVsZXMpO1xufVxuXG4ub24taXBhZChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZS1kb3duKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYXBvaW50LXBob25lLW1pbi1kb3duLCBAcnVsZXMpO1xufVxuLm9uLW1pbmktc21hbGwtbW9iaWxlKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC1taW5pLXNtYWxsLCBAcnVsZXMpO1xufVxuXG4uc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYWtwb2ludC10YWJsZXQtbGFuZHNjYXBlLXVwKSB7XG4gICAgLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG59XG5cbiIsIkBpbXBvcnQgJy4vY29tbW9uJztcblxuQGhlYWRlci1iZy1oZWlnaHQ6IDIwMHB4O1xuXG4uaGVhZGVyLWNvbW1vbiB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDcxOEY7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIGgxLCBoMiB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAuZm9udC1saWdodCgpOyBcbiAgICB9XG59XG5cbmJ1dHRvbi5hY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgXG4gICAgJi5mdW5kcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4tcmVmZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5hdmFpbGFiaWxpdHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAYnRuLWF2YWlsYWJpbGl0eS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmNvbnRhY3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtbGlnaHQ7XG4gICAgfVxuXG4gICAgJi5hYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4taGlyZS1jb2xvcjtcbiAgICB9XG59IiwiLnVsLW5hdi1kZWZhdWx0cygpIHtcbiAgICAubm8tbWFyKCk7XG4gICAgXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogQG5hdi1jb2xvcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0LWFycm93IHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogJyc7XG5cbiAgICAmOjotbXMtZXhwYW5kIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxuICAgIH1cbn1cblxuLnNlbGVjdC1hcnJvdy1ibGFjayhAYmFja2dyb3VuZC1jb2xvcjogI2ZmZikge1xuICAgIC5zZWxlY3QtYXJyb3coKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy1ibGFjay5wbmcnKVxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdCA5NSUgNTAlIEBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uc2VsZWN0LWFycm93LXdoaXRlKEBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCkge1xuICAgIC5zZWxlY3QtYXJyb3coKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy13aGl0ZS5wbmcnKVxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdCA5NSUgNTAlIEBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uaW5saW5lLWxpc3QoKSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG4uYmV0YS12ZXJzaW9uIHtcbiAgICBwYWRkaW5nOiAzcHggNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMjhjMzU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xufVxuXG5hLm5vLW91dGxpbmUge1xuICAgIG91dGxpbmU6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cblxuLm5vLXNlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzL2FsbCc7XG5AaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL21peGlucy9hbGwnO1xuXG4uZHJvcGRvd24ge1xuICAgIEB3aWR0aDogMTgwcHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxuICAgIC5zZWxlY3QtYXJyb3ctd2hpdGUoKTtcblxuICAgICY6aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZHJvcGJ0biB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIC5mb250LWxpZ2h0KCk7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgbWluLXdpZHRoOiBAd2lkdGg7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHsgXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LWJsdWU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbn0iLCJAaW1wb3J0ICcuL2hlYWRlci1jb21tb24nO1xuQGltcG9ydCAnLi9kcm9wZG93bic7XG5AaGVhZGVyLXBhZGRpbmc6IDQwcHg7XG5AdGFicy1oZWlnaHQ6IDUwcHg7XG5AYWN0aW9uLXNwYWNpbmc6IDEwcHg7XG5AYWN0aW9uLWJ0bi1oZWlnaHQ6IDUwcHg7XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCB7XG4gICAgLmhlYWRlci1jb21tb24oKTtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBoZWlnaHQ6IEBoZWFkZXItYmctaGVpZ2h0O1xuICAgIHBhZGRpbmc6IDAgQGhlYWRlci1wYWRkaW5nIEBoZWFkZXItcGFkZGluZyAwO1xuXG4gICAgXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41KSwgIzExNmZiZmFkKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLWJnLW5ldy5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLndobyB7XG4gICAgICAgIHRvcDogQGhlYWRlci1wYWRkaW5nO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAyNWVtO1xuXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIzcHg7XG5cbiAgICAgICAgaDEgeyBmb250LXNpemU6IDIuNWVtOyB9XG4gICAgICAgIGgyIHsgbWFyZ2luLWJvdHRvbTogMTBweDsgZm9udC1zaXplOiAxLjhlbTsgfVxuICAgICAgICBwICB7IG1hcmdpbi1ib3R0b206IDE1cHg7IH1cblxuICAgICAgICAucmV2aWV3LWNvdW50IHsgbWFyZ2luLWxlZnQ6IC42ZW07IH1cbiAgICB9XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgICAgQGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgIHdpZHRoOiBAcHJvZmlsZS1waWMtbGctd2lkdGg7XG4gICAgICAgIGhlaWdodDogQHByb2ZpbGUtcGljLWxnLWhlaWdodDtcbiAgICAgICAgYm9yZGVyLXRvcDogQGJvcmRlcjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBAYm9yZGVyO1xuICAgICAgICBcbiAgICAgICAgdG9wOiAoQHRhYnMtaGVpZ2h0ICsgQGhlYWRlci1wYWRkaW5nKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5taXNjIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKi9cbiAgICAgICAgXG4gICAgICAgIC5wcm9maWxlLXNjb3JlLXNlY3Rpb24ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMTVweDtcbiAgICAgICAgICAgIHRvcDogMjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgICAgIC5pbmxpbmUtbGlzdCgpO1xuXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBAYWN0aW9uLXNwYWNpbmc7XG5cbiAgICAgICAgICAgIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBAYWN0aW9uLXNwYWNpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbi5hY3Rpb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogQGFjdGlvbi1idG4taGVpZ2h0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHg7XG5cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIC5vbi10YWJsZXQoe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAuM2VtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4jcHJvZmlsZS10YWJzIHtcbiAgICBAYm9yZGVyOiAxcHggc29saWQgI0VCRUJFQjtcblxuICAgIG1hcmdpbi1sZWZ0OiBAcHJvZmlsZS1waWMtbGctd2lkdGg7XG4gICAgaGVpZ2h0OiBAdGFicy1oZWlnaHQ7XG5cbiAgICBib3JkZXItcmlnaHQ6IEBib3JkZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogQGJvcmRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgdWwge1xuICAgICAgICAudWwtbmF2LWRlZmF1bHRzKCk7XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgLmZvbnQtcmVndWxhcigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMXB4IDEuNWVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTQ5NDk0O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IEBwcmltYXJ5LW9yYW5nZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogLjJlbSBzb2xpZCBAcHJpbWFyeS1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZiFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0IWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/profile/styles/header-mobile.less":
/*!***********************************************!*\
  !*** ./src/profile/styles/header-mobile.less ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  .area {\n    text-align: center;\n  }\n}\n.header-common {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.header-common h1,\n.header-common h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\nbutton.action {\n  font-size: 16px;\n  color: #fff;\n  letter-spacing: 0.4px;\n}\nbutton.action.funds {\n  background: #A622F9;\n}\nbutton.action.availability {\n  background: #70CF3F;\n}\nbutton.action.contact {\n  background: #FF8410;\n}\nbutton.action.about {\n  background: #3F93F4;\n}\n.font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 1024px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n  background: url('/assets/images/select-arrow-white.png') no-repeat 95% 50% transparent;\n}\n.dropdown::-ms-expand {\n  display: none;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n.dropdown .dropbtn {\n  width: 180px;\n  font-weight: 300;\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 10px 0;\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 0.02em;\n}\n.dropdown .dropdown-content {\n  min-width: 180px;\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n.dropdown .dropdown-content a {\n  display: block;\n  color: #333;\n  padding: 15px;\n  text-decoration: none;\n  text-align: left;\n}\n.dropdown .dropdown-content a:not(:last-of-type) {\n  border-bottom: 1px solid #eee;\n}\n.dropdown .dropdown-content a:hover {\n  background-color: #4392EF;\n  color: #fff;\n}\n#profile-header-mobile {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #fff;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), #116fbfad), url('profile-bg-new.jpg');\n  background-size: cover;\n  text-align: center;\n}\n#profile-header-mobile h1,\n#profile-header-mobile h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\n#profile-header-mobile .avatar {\n  margin-top: 20px;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}\n#profile-header-mobile .who h1 {\n  font-weight: 400;\n  margin-top: 10px;\n  font-size: 30px;\n}\n#profile-header-mobile .who h2 {\n  margin-top: 5px;\n  font-size: 20px;\n}\n#profile-header-mobile p {\n  margin-top: 5px;\n}\n#profile-header-mobile footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n  padding: 10px 0;\n  color: #dedede;\n  border-top: 1px solid #6D8691;\n}\n#profile-header-mobile footer:before {\n  content: '';\n}\n#profile-header-mobile footer .industryscore {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n#profile-header-mobile footer .budget,\n#profile-header-mobile footer .industryscore {\n  margin: 0 1em;\n  text-align: center;\n}\n.actions {\n  list-style-type: none;\n  -moz-column-count: 2;\n       column-count: 2;\n  -moz-column-gap: 1px;\n       column-gap: 1px;\n  margin-top: 1px;\n}\n.actions .action {\n  margin-bottom: 1px;\n  text-align: center;\n  height: 50px;\n  width: 100%;\n}\n.header-action-buttons .actions {\n  -moz-column-count: 1;\n       column-count: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL2hlYWRlci1tb2JpbGUubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvY29tbW9uLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2ZvbnRzLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3NwYWNpbmcubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvYnV0dG9ucy5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy9yZXNwb25zaXZlLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3Byb2ZpbGUvc3R5bGVzL2hlYWRlci1jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvd2lkZ2V0cy5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9kcm9wZG93bi5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9oZWFkZXItbW9iaWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsY0FBQTtBQ0VuQjtBRERBO0VBQW1CLGFBQUE7QUNJbkI7QURGQTtFQUNJO0lBQW1CLGFBQUE7RUNLckI7RURKRTtJQUFtQixjQUFBO0VDT3JCO0FBQ0Y7QUNMQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUNQQSxnQkFBQTtBRmVKO0FDSkE7Ozs7Ozs7RUVYVSxTQUFBO0VBQVcsVUFBQTtBSHlCckI7QUNWQTtFQUNJLFNBQUE7QURZSjtBQ0FBO0VBQ0ksbUJBQUE7RUFFQSx1R0FBQTtFQUlBLGdFQUFBO0VBQ0Esa0hBQUE7QURFSjtBQ0NBO0VBRUksNkJBQUE7QURBSjtBQ0VJO0VBQ0ksU0FBQTtBREFSO0FDSUE7RUFDSSxrQkFBQTtBREZKO0FDS0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFBb0IsWUFBQTtBREZ4QjtBQ0ZBO0VBT1EsY0FBQTtBREZSO0FDTUE7RUFDSSxrQkFBQTtBREpKO0FDR0E7RUdqRUksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUppRUo7QUs1REk7RUFBQTtJSitESSxjQUFBO0lBQW9CLFlBQUE7RURFMUI7QUFDRjtBQ0RJO0VBQUE7SUFDSSw0QkFBQTtJQUFpQyxXQUFBO0VES3ZDO0FBQ0Y7QUNGQTtFRTlFVSxTQUFBO0VBQVcsVUFBQTtFRmdGakIsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FES0o7QUNIQTtFQUNJLGVBQUE7QURLSjtBQ0ZBO0VBQ0ksZ0JBQUE7QURJSjtBQ0ZBO0VBQ0UsdUJBQUE7QURJRjtBQ0ZBO0VBQ0k7SUFDSSxrQkFBQTtFRElOO0FBQ0Y7QU10R0E7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QU53R0o7QU03R0E7O0VBUVEsaUJBQUE7RUpQSixnQkFBQTtBRmlISjtBTXJHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QU51R0o7QU1yR0k7RUFDSSxtQkFBQTtBTnVHUjtBTXBHSTtFQUNJLG1CQUFBO0FOc0dSO0FNbkdJO0VBQ0ksbUJBQUE7QU5xR1I7QU1sR0k7RUFDSSxtQkFBQTtBTm9HUjtBRXZJQTtFQUNJLCtCQUFBO0FGeUlKO0FFdElBO0VBQ0ksZ0JBQUE7QUZ3SUo7QUVySUE7RUFDSSxnQkFBQTtBRnVJSjtBRXBJQTtFQUNJLGdCQUFBO0FGc0lKO0FFbklBO0VBQ0ksZ0JBQUE7QUZxSUo7QUtuR0E7RUFBbUIseUJBQUE7QUxzR25CO0FLckdBO0VBQW1CLHdCQUFBO0FMd0duQjtBS3RHQTtFQUNJO0lBQW1CLHdCQUFBO0VMeUdyQjtFS3hHRTtJQUFtQix5QkFBQTtFTDJHckI7QUFDRjtBT3JKQTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QVB1Sko7QU9ySkk7RUFDSSxhQUFBO0FQdUpSO0FPL0hBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FQaUlKO0FPOUhBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FQZ0lKO0FPOUhJOzs7RUFHSSxVQUFBO0VBQ0EscUJBQUE7QVBnSVI7QU81SEE7RUFDSSwyQkFBQTtFUDhIRixlQUFlO0VPN0hiLHlCQUFBO0VQK0hGLFdBQVc7RUFFWCxtQkFBbUI7RU8vSGQsc0JBQUE7RVBpSUwsWUFBWTtFT2hJTixxQkFBQTtFUGtJTiwyQkFBMkI7RU9qSWpCLGlCQUFBO0VQbUlWO2lFQUMrRDtBQUNqRTtBR2xOQTtFQUFjLHdCQUFBO0FIcU5kO0FHcE5BO0VBQWMsMkJBQUE7QUh1TmQ7QUd0TkE7RUFBVSxnQkFBQTtBSHlOVjtBR3hOQTtFQUFVLGdCQUFBO0FIMk5WO0FHMU5BO0VBQWMsY0FBQTtBSDZOZDtBRzVOQTtFQUFVLFNBQUE7RUFBVyxVQUFBO0FIZ09yQjtBUWxPQTtFQUdJLGtCQUFBO0VBQ0EscUJBQUE7RURTQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBZUEsc0ZBQUE7QVA0TUo7QU96Tkk7RUFDSSxhQUFBO0FQMk5SO0FRdk9JO0VBQ0ksY0FBQTtBUnlPUjtBUWxQQTtFQWFRLFlBQUE7RU5YSixnQkFBQTtFTWNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QVJ1T1I7QVEvUEE7RUE0QlEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBUnFPUjtBUXZRQTtFQXNDUSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FSb09SO0FRbE9RO0VBQ0ksNkJBQUE7QVJvT1o7QVFqUkE7RUFrRFEseUJBQUE7RUFDQSxXQUFBO0FSa09SO0FTblJBO0VIQUkseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBRUEsV0FBQTtFR0RBLDJGQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBVHVSSjtBUzVSQTs7RUhPUSxpQkFBQTtFSlBKLGdCQUFBO0FGaVNKO0FTalNBO0VBUVEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FUNFJSO0FTdlNBO0VQSUksZ0JBQUE7RU9hUSxnQkFBQTtFQUNBLGVBQUE7QVQwUlo7QVM1U0E7RUFzQlksZUFBQTtFQUNBLGVBQUE7QVR5Ulo7QVNoVEE7RUE0QlEsZUFBQTtBVHVSUjtBU25UQTtFQXNDUSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7RUFDQSw2QkFBQTtBVDhRUjtBUzFSUTtFQUNJLFdBQUE7QVQ0Ulo7QVMvVEE7RUFpRFksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QVRpUlo7QVNwVUE7O0VBd0RZLGFBQUE7RUFDQSxrQkFBQTtBVGdSWjtBUzNRQTtFQUVJLHFCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0EsZUFBQTtBVDRRSjtBU2pSQTtFQVFRLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBVDJRUjtBU3ZRQTtFQUVRLG9CQUFBO09BQUEsZUFBQTtBVHdRUiIsImZpbGUiOiJzcmMvcHJvZmlsZS9zdHlsZXMvaGVhZGVyLW1vYmlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrIH1cbi5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBub25lOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVha3BvaW50LXRhYmxldC11cCkge1xuICAgIC5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrOyB9XG59XG5cbiIsIi5zaG93LW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oaWRlLW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNob3ctb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmhlYWRlci1ub3RpZmljYXRpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyNzYwMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjJlbSAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbmgxLFxuaDIsXG5wOm5vdCguaGVscC1ibG9jayksXG51bDpub3QoLmRyb3Bkb3duLW1lbnUpLFxubGksXG5idXR0b24sXG5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbn1cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNmZmZmZmYpLCBjb2xvci1zdG9wKDEwMCUsICNmNWY1ZjUpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZjVmNWY1JywgR3JhZGllbnRUeXBlPTApO1xufVxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UyRTJFMjtcbn1cbi5ncmFkaWVudDpmaXJzdC1vZi10eXBlID4gLmNvbnRhaW5lciB7XG4gIHRvcDogLTFweDtcbn1cbi5hcmVhIHtcbiAgcGFkZGluZzogMjBweCAxNnB4O1xufVxuLmFyZWEtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNjU2NTY1O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5hcmVhLXRpdGxlIC5jb3VudCB7XG4gIGNvbG9yOiAjNDM5MkVGO1xufVxuLmFyZWEtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFyZWEtZm9vdGVyIGJ1dHRvbi5tb3JlIHtcbiAgY29sb3I6ICM1RTVFNUU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweCAzNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYXJlYS1mb290ZXIge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHdpZHRoOiA2NTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFyZWEtZm9vdGVyIHtcbiAgICBtYXJnaW46IDIwcHggYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG4ucGRmLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnBsLTAge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5wci0wIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbmltZy5ub3JlY29yZCB7XG4gIGhlaWdodDogMTgwcHghaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzU5cHgpIHtcbiAgLmFyZWEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmhlYWRlci1jb21tb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ3MThGO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWRlci1jb21tb24gaDEsXG4uaGVhZGVyLWNvbW1vbiBoMiB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuYnV0dG9uLmFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cbmJ1dHRvbi5hY3Rpb24uZnVuZHMge1xuICBiYWNrZ3JvdW5kOiAjQTYyMkY5O1xufVxuYnV0dG9uLmFjdGlvbi5hdmFpbGFiaWxpdHkge1xuICBiYWNrZ3JvdW5kOiAjNzBDRjNGO1xufVxuYnV0dG9uLmFjdGlvbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZDogI0ZGODQxMDtcbn1cbmJ1dHRvbi5hY3Rpb24uYWJvdXQge1xuICBiYWNrZ3JvdW5kOiAjM0Y5M0Y0O1xufVxuLmZvbnQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG4uZm9udC1saWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZm9udC1yZWd1bGFyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQteGJvbGQge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLnNob3ctb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uaGlkZS1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5zaG93LW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4uc2VsZWN0LWFycm93IHtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0ZXh0LW92ZXJmbG93OiAnJztcbn1cbi5zZWxlY3QtYXJyb3c6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJldGEtdmVyc2lvbiB7XG4gIHBhZGRpbmc6IDNweCA0cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMjhjMzU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcbn1cbmEubm8tb3V0bGluZSB7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEubm8tb3V0bGluZTpob3ZlcixcbmEubm8tb3V0bGluZTpmb2N1cyxcbmEubm8tb3V0bGluZTphY3RpdmUge1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubm8tc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn1cbi5uby1tYXItdG9wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLm5vLW1hci1idG0ge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubWFyLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYXItMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1hci0xMC12ZXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5uby1tYXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0ZXh0LW92ZXJmbG93OiAnJztcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctd2hpdGUucG5nJykgbm8tcmVwZWF0IDk1JSA1MCUgdHJhbnNwYXJlbnQ7XG59XG4uZHJvcGRvd246Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZHJvcGRvd24gLmRyb3BidG4ge1xuICB3aWR0aDogMTgwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxMDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQgYTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzOTJFRjtcbiAgY29sb3I6ICNmZmY7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzE4RjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41KSwgIzExNmZiZmFkKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLWJnLW5ldy5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIGgxLFxuI3Byb2ZpbGUtaGVhZGVyLW1vYmlsZSBoMiB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuI3Byb2ZpbGUtaGVhZGVyLW1vYmlsZSAuYXZhdGFyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuI3Byb2ZpbGUtaGVhZGVyLW1vYmlsZSAud2hvIGgxIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuI3Byb2ZpbGUtaGVhZGVyLW1vYmlsZSAud2hvIGgyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIGZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiAjZGVkZWRlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzZEODY5MTtcbn1cbiNwcm9maWxlLWhlYWRlci1tb2JpbGUgZm9vdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xufVxuI3Byb2ZpbGUtaGVhZGVyLW1vYmlsZSBmb290ZXIgLmluZHVzdHJ5c2NvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIGZvb3RlciAuYnVkZ2V0LFxuI3Byb2ZpbGUtaGVhZGVyLW1vYmlsZSBmb290ZXIgLmluZHVzdHJ5c2NvcmUge1xuICBtYXJnaW46IDAgMWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWN0aW9ucyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sdW1uLWNvdW50OiAyO1xuICBjb2x1bW4tZ2FwOiAxcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5hY3Rpb25zIC5hY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXItYWN0aW9uLWJ1dHRvbnMgLmFjdGlvbnMge1xuICBjb2x1bW4tY291bnQ6IDE7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy9hbGwnO1xuQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMvYWxsJztcbkBpbXBvcnQgJy4vcmVzcG9uc2l2ZSc7XG5cbkBhcmVhLWdhcDogMjBweDtcbkBhcmVhLWJyZWFrLXBvaW50OiA3NTlweDtcbkBzY2FsZS1pbWctd2lkdGg6IDM2cHg7XG5cbi5oZWFkZXItbm90aWZpY2F0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktb3JhbmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuMmVtIDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLmZvbnQtbGlnaHQoKTtcbn1cblxuaDEsIGgyLCBwOm5vdCguaGVscC1ibG9jayksIHVsOm5vdCguZHJvcGRvd24tbWVudSksIGxpLCBidXR0b24sIGxhYmVsIHtcbiAgICAubm8tbWFyKCk7XG59XG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaW5wdXQtYnRuKCkge1xuICAgIC5mb250LWJvbGQoKTtcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSkpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2Y1ZjVmNScsIEdyYWRpZW50VHlwZT0wICk7XG59XG5cbi5ncmFkaWVudDpmaXJzdC1vZi10eXBlIHtcbiAgICBAYm9yZGVyLXNpemU6IDFweDtcbiAgICBib3JkZXItdG9wOiBAYm9yZGVyLXNpemUgc29saWQgI0UyRTJFMjtcblxuICAgICY+IC5jb250YWluZXIge1xuICAgICAgICB0b3A6IC0oQGJvcmRlci1zaXplKTtcbiAgICB9XG59XG5cbi5hcmVhIHtcbiAgICBwYWRkaW5nOiBAYXJlYS1nYXAgMTZweDtcbn1cblxuLmFyZWEtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY1NjU2NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtoZWlnaHQ6MjRweDtcbiAgICBcbiAgICAuY291bnQge1xuICAgICAgICBjb2xvcjogQHByaW1hcnktYmx1ZTtcbiAgICB9XG59XG5cbi5hcmVhLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIGJ1dHRvbi5tb3JlIHtcbiAgICAgICAgLm1vcmUoKTtcbiAgICB9XG5cbiAgICAub24tbW9iaWxlKHtcbiAgICAgICAgbWFyZ2luOiBAYXJlYS1nYXAgMDt3aWR0aDo2NTRweDtcbiAgICB9KTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYXBvaW50LXBob25lLXVwKSB7XG4gICAgICAgIG1hcmdpbjogQGFyZWEtZ2FwIGF1dG8haW1wb3J0YW50O3dpZHRoOmF1dG87XG4gICB9XG59XG5cbi5wZGYtY29udGFpbmVyIHtcbiAgICAubm8tbWFyKCk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5wbC0we1xuICAgIHBhZGRpbmctbGVmdDowO1xufVxuXG5wci0we1xuICAgIHBhZGRpbmctcmlnaHQ6MDtcbn1cbmltZy5ub3JlY29yZHtcbiAgaGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYXJlYS1icmVhay1wb2ludCkge1xuICAgIC5hcmVhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiIsIi5mb250LW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi5mb250LWxpZ2h0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9udC1yZWd1bGFyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9udC14Ym9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn0iLCIubm8tbWFyLXRvcCB7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgfVxuLm5vLW1hci1idG0geyBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbi5tYXItMjAgeyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4ubWFyLTMwIHsgbWFyZ2luLXRvcDogMzBweDsgfVxuLm1hci0xMC12ZXIgeyBtYXJnaW46IDEwcHggMDsgfTtcbi5uby1tYXIgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cbiIsIkBpbXBvcnQgJy4uL3ZhcmlhYmxlcy9hbGwnO1xuXG4ubW9yZSgpIHtcbiAgICBjb2xvcjogIzVFNUU1RTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMzVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYnRuKCkge1xuICAgIC5mb250LWJvbGQoKTtcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLnByaW1hcnkoKSB7XG4gICAgIC5idG4oKTtcbiAgICAgYmFja2dyb3VuZDogQHByaW1hcnktYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1ibHVlLWRhcms7XG4gICAgfVxufVxuXG4uc2F2ZSgpIHtcbiAgICAuYnRuKCk7XG4gICAgYmFja2dyb3VuZDogQHByaW1hcnktb3JhbmdlLWxpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtZGFya2VyO1xuICAgIH1cbn0iLCJAYnJlYWtwb2ludC1zbWFsbC1kb3duOiA1NzVweDtcbkBicmVhcG9pbnQtcGhvbmUtZG93bjogNzY3cHg7XG5AYnJlYWtwb2ludC10YWJsZXQtZG93bjogOTkxcHg7XG5AYnJlYWtwb2ludC1kZXNrdG9wLWRvd246IDExOTlweDtcbkBicmVha3BvaW50LXNtYWxsLXVwOiA1NzZweDtcbkBicmVhcG9pbnQtcGhvbmUtdXA6IDc2OHB4O1xuQGJyZWFrcG9pbnQtdGFibGV0LXVwOiA5OTJweDtcbkBicmVha3BvaW50LWRlc2t0b3AtdXA6IDEyMDBweDtcbkBicmVhcG9pbnQtcGhvbmUtbWluLWRvd246IDc1OXB4O1xuQGJyZWFrcG9pbnQtbWluaS1zbWFsbDogNDIwcHg7XG5AYnJlYWtwb2ludC10YWJsZXQtbGFuZHNjYXBlLXVwOiAxMDI0cHg7XG5cbi5yZXNwb25zaXZlLW1heChAbWF4V2lkdGg7IEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogQG1heFdpZHRoKSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLnJlc3BvbnNpdmUtbWluKEBtYXhXaWR0aDsgQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBAbWF4V2lkdGgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4ub24tZGVza3RvcChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1taW4oQGJyZWFrcG9pbnQtZGVza3RvcC1kb3duLCBAcnVsZXMpO1xufVxuXG4ub24tbGFyZ2Utc2NyZWVuKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1pbihAYnJlYXBvaW50LXBob25lLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tdGFibGV0KEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC1kZXNrdG9wLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tbW9iaWxlKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC10YWJsZXQtdXAsIEBydWxlcyk7XG59XG5cbi5vbi1pcGFkKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC10YWJsZXQtbGFuZHNjYXBlLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tbW9iaWxlLWRvd24oQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVhcG9pbnQtcGhvbmUtbWluLWRvd24sIEBydWxlcyk7XG59XG4ub24tbWluaS1zbWFsbC1tb2JpbGUoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVha3BvaW50LW1pbmktc21hbGwsIEBydWxlcyk7XG59XG5cbi5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4uaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVha3BvaW50LXRhYmxldC1sYW5kc2NhcGUtdXApIHtcbiAgICAuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbn1cblxuIiwiQGltcG9ydCAnLi9jb21tb24nO1xuXG5AaGVhZGVyLWJnLWhlaWdodDogMjAwcHg7XG5cbi5oZWFkZXItY29tbW9uIHsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzE4RjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgaDEsIGgyIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIC5mb250LWxpZ2h0KCk7IFxuICAgIH1cbn1cblxuYnV0dG9uLmFjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICBcbiAgICAmLmZ1bmRzIHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJ0bi1yZWZlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJpbGl0eSB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4tYXZhaWxhYmlsaXR5LWNvbG9yO1xuICAgIH1cblxuICAgICYuY29udGFjdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1saWdodDtcbiAgICB9XG5cbiAgICAmLmFib3V0IHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJ0bi1oaXJlLWNvbG9yO1xuICAgIH1cbn0iLCIudWwtbmF2LWRlZmF1bHRzKCkge1xuICAgIC5uby1tYXIoKTtcbiAgICBcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBAbmF2LWNvbG9yO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWxlY3QtYXJyb3cge1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0ZXh0LW92ZXJmbG93OiAnJztcblxuICAgICY6Oi1tcy1leHBhbmQgeyBcbiAgICAgICAgZGlzcGxheTogbm9uZTsgXG4gICAgfVxufVxuXG4uc2VsZWN0LWFycm93LWJsYWNrKEBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmKSB7XG4gICAgLnNlbGVjdC1hcnJvdygpO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VsZWN0LWFycm93LWJsYWNrLnBuZycpXG4gICAgICAgICAgICAgICAgbm8tcmVwZWF0IDk1JSA1MCUgQGJhY2tncm91bmQtY29sb3I7XG59XG5cbi5zZWxlY3QtYXJyb3ctd2hpdGUoQGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50KSB7XG4gICAgLnNlbGVjdC1hcnJvdygpO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VsZWN0LWFycm93LXdoaXRlLnBuZycpXG4gICAgICAgICAgICAgICAgbm8tcmVwZWF0IDk1JSA1MCUgQGJhY2tncm91bmQtY29sb3I7XG59XG5cbi5pbmxpbmUtbGlzdCgpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG59XG5cbi5iZXRhLXZlcnNpb24ge1xuICAgIHBhZGRpbmc6IDNweCA0cHg7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2YyOGMzNTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG59XG5cbmEubm8tb3V0bGluZSB7XG4gICAgb3V0bGluZTogMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG4ubm8tc2VsZWN0IHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cbiAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG59IiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMvYWxsJztcbkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2FsbCc7XG5cbi5kcm9wZG93biB7XG4gICAgQHdpZHRoOiAxODBweDtcblxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgXG4gICAgLnNlbGVjdC1hcnJvdy13aGl0ZSgpO1xuXG4gICAgJjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5kcm9wYnRuIHtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgLmZvbnQtbGlnaHQoKTtcbiAgICAgICAgXG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBtaW4td2lkdGg6IEB3aWR0aDtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1jb250ZW50IGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIgeyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktYmx1ZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4vaGVhZGVyLWNvbW1vbic7XG5AaW1wb3J0ICcuL2Ryb3Bkb3duJztcblxuQHZlci1zcGFjaW5nOiAyMHB4O1xuXG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIHtcbiAgICAuaGVhZGVyLWNvbW1vbigpO1xuXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41KSwgIzExNmZiZmFkKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLWJnLW5ldy5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmF2YXRhciB7XG4gICAgICAgIG1hcmdpbi10b3A6IEB2ZXItc3BhY2luZztcbiAgICAgICAgd2lkdGg6IEBwcm9maWxlLXBpYy1tZC13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiBAcHJvZmlsZS1waWMtbWQtaGVpZ2h0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLndobyB7XG4gICAgICAgIGgxIHtcbiAgICAgICAgICAgIC5mb250LXJlZ3VsYXIoKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cblxuIFxuXG4gICAgZm9vdGVyIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBtYXJnaW4tdG9wOiBAdmVyLXNwYWNpbmc7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcblxuICAgICAgICBjb2xvcjogI2RlZGVkZTtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2RDg2OTE7XG5cbiAgICAgICAgLmluZHVzdHJ5c2NvcmUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYnVkZ2V0LFxuICAgICAgICAuaW5kdXN0cnlzY29yZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMWVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWN0aW9ucyB7XG4gICAgQGdhcDogMXB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBjb2x1bW4tY291bnQ6IDI7XG4gICAgY29sdW1uLWdhcDogQGdhcDtcbiAgICBtYXJnaW4tdG9wOiBAZ2FwO1xuXG4gICAgLmFjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBnYXA7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmhlYWRlci1hY3Rpb24tYnV0dG9uc3tcbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIGNvbHVtbi1jb3VudDogMTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/profile/transfer-to-stock/transfer-to-stock.component.ts":
/*!**********************************************************************!*\
  !*** ./src/profile/transfer-to-stock/transfer-to-stock.component.ts ***!
  \**********************************************************************/
/*! exports provided: TransferToStockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferToStockComponent", function() { return TransferToStockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var TransferToStockComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransferToStockComponent, _super);
    function TransferToStockComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    TransferToStockComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TransferToStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'transfer-to-stock',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transfer-to-stock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/transfer-to-stock/transfer-to-stock.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], TransferToStockComponent);
    return TransferToStockComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/withdraw-fund/withdraw-fund.component.ts":
/*!**************************************************************!*\
  !*** ./src/profile/withdraw-fund/withdraw-fund.component.ts ***!
  \**************************************************************/
/*! exports provided: WithdrawFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawFundComponent", function() { return WithdrawFundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var WithdrawFundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithdrawFundComponent, _super);
    function WithdrawFundComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    WithdrawFundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    WithdrawFundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'withdraw-fund',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./withdraw-fund.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/withdraw-fund/withdraw-fund.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], WithdrawFundComponent);
    return WithdrawFundComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map