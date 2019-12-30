(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-account-opening-margin-account-account-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/account-form.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/account-form.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"background:#efefe9;\">\r\n    <div class=\"container\" style=\"z-index: unset\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"> \r\n            <div class=\"box arrow-right\">\r\n              Margin Account\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n            <div class=\"board\">\r\n            <!-- Navigation Area (Circular Tabs) -->\r\n            <msw-navbar></msw-navbar>\r\n            <!-- End Navigation Area (Circular Tabs) -->\r\n  \r\n            <!-- Content Area -->\r\n            <div class=\"tab-content\">\r\n                <!-- Nested view  -->\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <!-- End Content Area -->\r\n           </div>\r\n              <!-- For Debugging: show our valid formData -->\r\n             <!--    <pre>{{ formData | json }}</pre> -->\r\n            </div>\r\n            \r\n        </div>\r\n   \r\n  \r\n     \r\n    </div>\r\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/address/address.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/address/address.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #addressForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-md-12'>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"street\">Street Address</label>  \n                    <input class=\"input-md\" #street=\"ngModel\" required id=\"street\" name=\"street\" type=\"text\" placeholder=\"Street Address\" [(ngModel)]=\"address.street\">\n                 <!--    <div class=\"alert alert-danger\" [hidden]=\"street.valid\">Street Address is required</div> -->\n                </div>   \n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-4'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"city\">City</label>  \n                            <input class=\"input-md\" #city=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\" placeholder=\"City\" [(ngModel)]=\"address.city\">\n                           <!--  <div class=\"alert alert-danger\" [hidden]=\"city.valid\">City is required</div> -->\n                        </div>\n                    </div>\n                    <div class='col-xs-4 col-sm-offset-1 col-sm-3'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"state\">State</label>  \n                            <input class=\"input-md\" #state=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\" placeholder=\"State\" [(ngModel)]=\"address.state\">\n                          <!--   <div class=\"alert alert-danger\" [hidden]=\"state.valid\">State is required</div> -->\n                        </div>\n                    </div>\n                    <div class='col-xs-offset-1 col-xs-7 col-sm-offset-1 col-sm-3'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"zip\">Zip</label>  \n                            <input class=\"input-md\" #zip=\"ngModel\" required id=\"zip\" name=\"zip\" type=\"text\" placeholder=\"Zip\" [(ngModel)]=\"address.zip\">\n                          <!--   <div class=\"alert alert-danger\" [hidden]=\"zip.valid\">Zip is required</div> -->\n                        </div>  \n                    </div> \n                </div>\n            </div>\n\n            <div class=\"form-group text-center\">\n                <button class=\"primary\" (click)=\"goToPrevious(addressForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"primary\" [disabled]=\"!addressForm.valid\" (click)=\"goToNext(addressForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    \n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/navbar/navbar.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/navbar/navbar.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n                    \n        <!-- circular user icon -->\n        <li>\n            <a routerLink=\"personal\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"personal\">\n                <span class=\"round-tabs three\">\n                    1\n                </span>\n            </a>\n        </li>\n\n        <!-- circular tasks icon -->\n         <li>\n            <a routerLink=\"work\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"work\">\n                <span class=\"round-tabs three\">\n                   2\n                </span> \n            </a>\n        </li>\n\n        <!-- circular home icon -->\n        <li>\n            <a routerLink=\"address\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"address\">\n                <span class=\"round-tabs three\">\n                   3\n                </span>\n            </a>\n        </li>\n\n        <!-- circular ok icon -->\n        <li>\n            <a routerLink=\"result\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"completed\">\n                <span class=\"round-tabs three\">\n                  4\n                </span>\n            </a>\n        </li>\n                \n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"assets/js/loading-bars.js\"></script>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/personal/personal.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/personal/personal.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-md-12'>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"firstname\">First Name</label>  \n                            <input class=\"input-md\" #firstname=\"ngModel\" required id=\"firstname\" name=\"firstname\" type=\"text\" placeholder=\"First Name\" [(ngModel)]=\"personal.firstName\">   \n                         <!--    <div class=\"alert alert-danger\" [hidden]=\"firstname.valid\">First Name is required</div> -->\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"lastname\">Last Name</label>  \n                            <input class=\" input-md\" #lastname=\"ngModel\" required id=\"lastname\" name=\"lastname\" type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"personal.lastName\">\n                          <!--   <div class=\"alert alert-danger\" [hidden]=\"lastname.valid\">Last Name is required</div> -->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\">Email</label>\n                    <input class=\"input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" id=\"email\" name=\"email\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"personal.email\">\n                    <!-- <div class=\"alert alert-danger\" [hidden]=\"email.valid\">Email is required and must be valid</div> -->\n                </div>\n                    \n                <div class=\"form-group text-center\">\n                    <button class=\"primary\" [disabled]=\"!personalForm.valid\"  (click)=\"goToNext(personalForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/result/result.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/result/result.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-pane  active\">\n    <h3 class=\"head text-center\">{{title}}</h3>\n   \n    <div class=\"text-center\">\n        <button class=\"primary\" [disabled]=\"!isFormValid\" (click)=\"submit()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/work/work.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/work/work.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #workForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"form-horizontal\">\n        <div class=\"tab-pane  active\">\n            <h4 class=\"head text-center\">{{title}}</h4>\n            <br/>\n            <div class='row'>\n                <div class='col-md-12'>\n                  <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"work\">Last Name</label>  \n                            <input class=\" input-md\" #work=\"ngModel\" required id=\"work\" name=\"work\" type=\"text\" placeholder=\"work\" [(ngModel)]=\"workType\">\n                          <!--   <div class=\"alert alert-danger\" [hidden]=\"lastname.valid\">Last Name is required</div> -->\n                        </div>\n                </div>\n            </div>\n            <div class=\"form-group text-center space-20\">\n                <button class=\"primary\" (click)=\"goToPrevious(workForm)\"> <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                <button class=\"primary\" [disabled]=\"!workForm.valid\" (click)=\"goToNext(workForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./src/finance-account-opening/margin-account/account-form.component.ts":
/*!******************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/account-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFormComponent", function() { return AccountFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/formData.service */ "./src/finance-account-opening/margin-account/data/formData.service.ts");



var AccountFormComponent = /** @class */ (function () {
    function AccountFormComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Multi-Step Wizard';
    }
    AccountFormComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    AccountFormComponent.ctorParameters = function () { return [
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AccountFormComponent.prototype, "formData", void 0);
    AccountFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'multi-step-wizard-app',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/account-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../style.less */ "./src/finance-account-opening/style.less")).default]
        })
    ], AccountFormComponent);
    return AccountFormComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/account-form.module.ts":
/*!***************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/account-form.module.ts ***!
  \***************************************************************************/
/*! exports provided: AccountFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFormModule", function() { return AccountFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/finance-account-opening/margin-account/navbar/navbar.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal/personal.component */ "./src/finance-account-opening/margin-account/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/finance-account-opening/margin-account/work/work.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address/address.component */ "./src/finance-account-opening/margin-account/address/address.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./result/result.component */ "./src/finance-account-opening/margin-account/result/result.component.ts");
/* harmony import */ var _account_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-form.component */ "./src/finance-account-opening/margin-account/account-form.component.ts");
/* harmony import */ var _account_form_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-form.routing */ "./src/finance-account-opening/margin-account/account-form.routing.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/formData.service */ "./src/finance-account-opening/margin-account/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/finance-account-opening/margin-account/workflow/workflow.service.ts");





/* Feature Components */





/* Routing Module */

/* Shared Service */


var AccountFormModule = /** @class */ (function () {
    function AccountFormModule() {
    }
    AccountFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _account_form_routing__WEBPACK_IMPORTED_MODULE_10__["AccountFormRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
            ],
            providers: [_data_formData_service__WEBPACK_IMPORTED_MODULE_11__["FormDataService"],
                _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_12__["WorkflowService"]],
            declarations: [_account_form_component__WEBPACK_IMPORTED_MODULE_9__["AccountFormComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__["PersonalComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _address_address_component__WEBPACK_IMPORTED_MODULE_7__["AddressComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_8__["ResultComponent"]]
        })
    ], AccountFormModule);
    return AccountFormModule;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/account-form.routing.ts":
/*!****************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/account-form.routing.ts ***!
  \****************************************************************************/
/*! exports provided: appRoutes, AccountFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFormRoutingModule", function() { return AccountFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal/personal.component */ "./src/finance-account-opening/margin-account/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work.component */ "./src/finance-account-opening/margin-account/work/work.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address/address.component */ "./src/finance-account-opening/margin-account/address/address.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ "./src/finance-account-opening/margin-account/result/result.component.ts");
/* harmony import */ var _account_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-form.component */ "./src/finance-account-opening/margin-account/account-form.component.ts");
/* harmony import */ var _workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workflow/workflow-guard.service */ "./src/finance-account-opening/margin-account/workflow/workflow-guard.service.ts");









var appRoutes = [
    {
        path: '',
        component: _account_form_component__WEBPACK_IMPORTED_MODULE_7__["AccountFormComponent"],
        children: [{
                path: '',
                children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },
                    { path: 'personal', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__["PersonalComponent"] },
                    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_8__["WorkflowGuard"]] },
                    { path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_5__["AddressComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_8__["WorkflowGuard"]] },
                    { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_8__["WorkflowGuard"]] }
                ]
            }]
    }
];
var AccountFormRoutingModule = /** @class */ (function () {
    function AccountFormRoutingModule() {
    }
    AccountFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_8__["WorkflowGuard"]]
        })
    ], AccountFormRoutingModule);
    return AccountFormRoutingModule;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/address/address.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/address/address.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/margin-account/data/formData.service.ts");




var AddressComponent = /** @class */ (function () {
    function AddressComponent(router, route, formDataService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.title = 'Where do you live?';
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.address = this.formDataService.getAddress();
        console.log('Address feature loaded!');
    };
    AddressComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setAddress(this.address);
        return true;
    };
    AddressComponent.prototype.goToPrevious = function (form) {
        //if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['../work'], { relativeTo: this.route });
        //}
    };
    AddressComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['../result'], { relativeTo: this.route });
        }
    };
    AddressComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }
    ]; };
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-wizard-address',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/address/address.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/style.less")).default]
        })
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/data/formData.model.ts":
/*!***************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/data/formData.model.ts ***!
  \***************************************************************************/
/*! exports provided: FormData, Personal, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personal", function() { return Personal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FormData = /** @class */ (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    return FormData;
}());

var Personal = /** @class */ (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
    return Personal;
}());

var Address = /** @class */ (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/data/formData.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/data/formData.service.ts ***!
  \*****************************************************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formData.model */ "./src/finance-account-opening/margin-account/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/finance-account-opening/margin-account/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/finance-account-opening/margin-account/workflow/workflow.model.ts");





var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_2__["FormData"]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].personal);
    };
    FormDataService.prototype.getWork = function () {
        // Return the work type
        return this.formData.work;
    };
    FormDataService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].work);
    };
    FormDataService.prototype.getAddress = function () {
        // Return the Address data
        var address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    };
    FormDataService.prototype.setAddress = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].address);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    };
    FormDataService.ctorParameters = function () { return [
        { type: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"] }
    ]; };
    FormDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/navbar/navbar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/navbar/navbar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'msw-navbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/navbar/navbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/style.less")).default]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/personal/personal.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/personal/personal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/margin-account/data/formData.service.ts");




var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(router, route, formDataService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.title = 'Please tell us about yourself.';
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setPersonal(this.personal);
        return true;
    };
    PersonalComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['../work'], { relativeTo: this.route });
        }
    };
    PersonalComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }
    ]; };
    PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-wizard-personal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/personal/personal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/style.less")).default]
        })
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/result/result.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/result/result.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/margin-account/data/formData.service.ts");



var ResultComponent = /** @class */ (function () {
    function ResultComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Thanks for staying tuned!';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');
    };
    ResultComponent.prototype.submit = function () {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    ResultComponent.ctorParameters = function () { return [
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ResultComponent.prototype, "formData", void 0);
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-wizard-result',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/result/result.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/style.less")).default]
        })
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/work/work.component.ts":
/*!***************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/work/work.component.ts ***!
  \***************************************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/margin-account/data/formData.service.ts");




var WorkComponent = /** @class */ (function () {
    function WorkComponent(router, route, formDataService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.title = 'What do you do?';
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
        console.log('Work feature loaded!');
    };
    WorkComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setWork(this.workType);
        return true;
    };
    WorkComponent.prototype.goToPrevious = function (form) {
        //if (this.save(form)) {
        // Navigate to the personal page
        this.router.navigate(['../personal'], { relativeTo: this.route });
        //}
    };
    WorkComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['../address'], { relativeTo: this.route });
        }
    };
    WorkComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }
    ]; };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-wizard-work',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/margin-account/work/work.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/style.less")).default]
        })
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/workflow/workflow-guard.service.ts":
/*!***************************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/workflow/workflow-guard.service.ts ***!
  \***************************************************************************************/
/*! exports provided: WorkflowGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowGuard", function() { return WorkflowGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workflow.service */ "./src/finance-account-opening/margin-account/workflow/workflow.service.ts");




var WorkflowGuard = /** @class */ (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        this.profileSysId = parseInt(route.paramMap.get('profileSysId'));
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "profile/" + this.profileSysId + "/account-opening/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    WorkflowGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"] }
    ]; };
    WorkflowGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WorkflowGuard);
    return WorkflowGuard;
}());



/***/ }),

/***/ "./src/finance-account-opening/margin-account/workflow/workflow.model.ts":
/*!*******************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/workflow/workflow.model.ts ***!
  \*******************************************************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var STEPS = {
    personal: 'personal',
    work: 'work',
    address: 'address',
    result: 'result'
};


/***/ }),

/***/ "./src/finance-account-opening/margin-account/workflow/workflow.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/finance-account-opening/margin-account/workflow/workflow.service.ts ***!
  \*********************************************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow.model */ "./src/finance-account-opening/margin-account/workflow/workflow.model.ts");



var WorkflowService = /** @class */ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].personal, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].work, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].address, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].result, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        debugger;
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WorkflowService);
    return WorkflowService;
}());



/***/ }),

/***/ "./src/finance-account-opening/style.less":
/*!************************************************!*\
  !*** ./src/finance-account-opening/style.less ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-default {\n  border-color: #ccc;\n}\n.tab-content .choice {\n  text-align: center;\n  cursor: pointer;\n  margin-top: 38px;\n}\n.tab-content .choice i {\n  font-size: 32px;\n  line-height: 55px;\n}\n.btn-radio {\n  width: 100%;\n}\n.img-radio {\n  opacity: 0.8;\n  margin-bottom: 5px;\n}\n.space-20 {\n  margin-top: 20px;\n}\n/* active buttons */\n#status-buttons a.active span.round-tabs.three {\n  background: #374b60;\n  color: #fff;\n}\n.board {\n  margin: 20px auto;\n  background: white;\n}\n.board .nav-tabs {\n  position: relative;\n  margin: 40px auto;\n  margin-bottom: 0;\n  box-sizing: border-box;\n}\np.narrow {\n  width: 60%;\n  margin: 10px auto;\n}\n.liner {\n  height: 2px;\n  background: #ddd;\n  position: absolute;\n  width: 80%;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: 75px;\n  z-index: 0;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555555;\n  cursor: default;\n  border: 0;\n  border-bottom-color: transparent;\n}\nspan.round-tabs {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  display: inline-block;\n  border-radius: 100px;\n  background: white;\n  z-index: 2;\n  left: 0;\n  text-align: center;\n  font-size: 25px;\n}\nspan.round-tabs.three {\n  color: #3e5e9a;\n  border: 2px solid #374b60;\n}\nli.active span.round-tabs.three {\n  background: #fff !important;\n  border: 2px solid #ddd;\n  color: #3e5e9a;\n}\n.nav-tabs > li.active > a span.round-tabs {\n  background: #374b60;\n}\n.nav-tabs > li {\n  /*width: 20%;*/\n  width: 25%;\n  z-index: 1;\n}\n/*li.active:before {\n    content: \" \";\n    position: absolute;\n    left: 45%;\n    opacity:0;\n    margin: 0 auto;\n    bottom: -2px;\n    border: 10px solid transparent;\n    border-bottom-color: #fff;\n    z-index: 1;\n    transition:0.2s ease-in-out;\n}*/\n.nav-tabs > li:after {\n  content: \" \";\n  position: absolute;\n  left: 45%;\n  opacity: 0;\n  margin: 0 auto;\n  bottom: 0px;\n  border: 5px solid transparent;\n  border-bottom-color: #ddd;\n  transition: 0.1s ease-in-out;\n}\n.nav-tabs > li.active:after {\n  content: \" \";\n  position: absolute;\n  left: 45%;\n  opacity: 1;\n  margin: 0 auto;\n  bottom: 0px;\n  border: 10px solid transparent;\n  border-bottom-color: #ddd;\n}\n.nav-tabs > li a {\n  width: 70px;\n  height: 70px;\n  margin: 20px auto;\n  border-radius: 100%;\n  padding: 0;\n}\n.nav-tabs > li a:hover {\n  background: transparent;\n}\n.tab-content .tab-pane {\n  position: relative;\n  padding-top: 50px;\n}\n.tab-content .head {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 25px;\n  text-transform: uppercase;\n  padding-bottom: 10px;\n}\n.btn-outline-rounded {\n  padding: 10px 40px;\n  margin: 20px 0;\n  border: 2px solid transparent;\n  border-radius: 25px;\n}\n.btn.green {\n  background-color: #5cb85c;\n  /*border: 2px solid #5cb85c;*/\n  color: #ffffff;\n}\n@media (max-width: 585px) {\n  .board {\n    width: 90%;\n    height: auto !important;\n  }\n  span.round-tabs {\n    font-size: 16px;\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n  }\n  .tab-content .head {\n    font-size: 20px;\n  }\n  .nav-tabs > li a {\n    width: 50px;\n    height: 50px;\n    line-height: 50px;\n  }\n  .nav-tabs > li.active:after {\n    content: \" \";\n    position: absolute;\n    left: 35%;\n  }\n  .btn-outline-rounded {\n    padding: 12px 20px;\n  }\n}\n.splash {\n  position: absolute;\n  z-index: 2000;\n  background: white;\n  color: gray;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.splash-title {\n  text-align: center;\n  max-width: 500px;\n  margin: 15% auto;\n  padding: 20px;\n}\n.splash-title h1 {\n  font-size: 26px;\n}\n.color-line {\n  border-radius: 4px 4px 0 0;\n}\n.tab-content .tab-pane {\n  padding-top: 20px;\n}\n.alert {\n  padding: 8px;\n  margin-bottom: 8px;\n}\ninput:not([type=submit]):not([type=button]) {\n  outline: 0;\n  display: block;\n  font-size: 14px;\n  padding: 0.625em 0.625em 0.725em 0.625em;\n  width: 100%;\n  border: 1px solid #AAAAAA;\n}\ninput:not([type=submit]):not([type=button]):focus {\n  border: 1px solid #116fbf;\n}\n.nav-tabs {\n  border-bottom: none!important;\n  text-align: center;\n  padding: 35px;\n}\nform {\n  padding: 0px 50px;\n}\n.box {\n  width: 100%;\n  background-color: #374b60;\n  color: #fff;\n  padding: 20px;\n  position: relative;\n  margin: 40px auto;\n  float: left;\n}\n.box.arrow-right:after {\n  content: \" \";\n  position: absolute;\n  right: -15px;\n  top: 15px;\n  border-top: 15px solid transparent;\n  border-right: none;\n  border-left: 15px solid #374b60;\n  border-bottom: 15px solid transparent;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9maW5hbmNlLWFjY291bnQtb3BlbmluZy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvZmluYW5jZS1hY2NvdW50LW9wZW5pbmcvc3R5bGUubGVzcyIsInNyYy9maW5hbmNlLWFjY291bnQtb3BlbmluZy9zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDREo7QURJQTtFQUNDLFdBQUE7QUNGRDtBRElBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0FDRkQ7QURLQTtFQUNJLGdCQUFBO0FDSEo7QUFDQSxtQkFBbUI7QURRbkI7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNOSjtBRFNBO0VBQ0ksaUJBQUE7RUFDSSxpQkFBQTtBQ1BSO0FEU0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEWUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNYSjtBRGNBOzs7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ1ZKO0FEYUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNaSjtBRGlCQTtFQUNJLGNBQUE7RUFBZSx5QkFBQTtBQ2RuQjtBRGlCQTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDZko7QURrQkE7RUFDSSxtQkFBQTtBQ2hCSjtBRGtCQTtFQ2hCRSxjQUFjO0VEa0JaLFVBQUE7RUFDQSxVQUFBO0FDaEJKO0FBQ0E7Ozs7Ozs7Ozs7O0VBV0U7QURrQkY7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0QsVUFBQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDaEJKO0FEbUJBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNELFVBQUE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUNqQko7QURvQkE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDbEJIO0FEcUJBO0VBQ0ksdUJBQUE7QUNuQko7QURzQkE7RUFDRyxrQkFBQTtFQUNILGlCQUFBO0FDcEJBO0FEc0JBO0VBQ0ksMkNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ3BCSjtBRHNCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtFQ3JCRiw2QkFBNkI7RUR1QjNCLGNBQUE7QUNyQko7QUQwQkE7RUFFSTtJQUNKLFVBQUE7SUFDQSx1QkFBQTtFQ3pCRTtFRDJCRTtJQUNJLGVBQUE7SUFDUixXQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDekJFO0VEMkJFO0lBQ0ksZUFBQTtFQ3pCTjtFRDJCRTtJQUNKLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUN6QkU7RUQ0QkY7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0VDMUJFO0VENkJGO0lBQ0ksa0JBQUE7RUMzQkY7QUFDRjtBRCtCQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUM3Qko7QURnQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDOUJKO0FEaUNBO0VBQ0ksZUFBQTtBQy9CSjtBRGtDQTtFQUNJLDBCQUFBO0FDaENKO0FEbUNBO0VBQ0ksaUJBQUE7QUNqQ0o7QURvQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNsQ0Y7QUQ2Q0M7RUFDVyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQzNDWjtBRDZDQTtFQUNHLHlCQUFBO0FDM0NIO0FENkNBO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUMzQ0o7QUQ4Q0E7RUFDTSxpQkFBQTtBQzVDTjtBRCtDQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUM3Q0Y7QUQrQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0FDN0NGIiwiZmlsZSI6InNyYy9maW5hbmNlLWFjY291bnQtb3BlbmluZy9zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1kZWZhdWx0IHtcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XG59XG5cbi50YWItY29udGVudCAuY2hvaWNlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi10b3A6IDM4cHg7XG59XG5cbi50YWItY29udGVudCAuY2hvaWNlIGkge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogNTVweDtcbn1cblxuLmJ0bi1yYWRpbyB7XG5cdHdpZHRoOiAxMDAlO1xufVxuLmltZy1yYWRpbyB7XG5cdG9wYWNpdHk6IDAuODtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3BhY2UtMjAge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8qIGFjdGl2ZSBidXR0b25zICovXG5cblxuI3N0YXR1cy1idXR0b25zIGEuYWN0aXZlIHNwYW4ucm91bmQtdGFicy50aHJlZSB7IFxuICAgIGJhY2tncm91bmQ6ICMzNzRiNjA7IFxuICAgIGNvbG9yOiAjZmZmXG59XG5cbi5ib2FyZHtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4uYm9hcmQgLm5hdi10YWJzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG59XG5cblxucC5uYXJyb3d7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbn1cblxuLmxpbmVye1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDc1cHg7XG4gICAgei1pbmRleDogMDtcbn1cblxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSwgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpob3ZlciwgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpmb2N1cyB7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuc3Bhbi5yb3VuZC10YWJze1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgei1pbmRleDogMjtcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cblxuXG5zcGFuLnJvdW5kLXRhYnMudGhyZWV7XG4gICAgY29sb3I6ICMzZTVlOWE7Ym9yZGVyOiAycHggc29saWQgIzM3NGI2MDtcbn1cblxubGkuYWN0aXZlIHNwYW4ucm91bmQtdGFicy50aHJlZXtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogIzNlNWU5YTtcbn1cblxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSBzcGFuLnJvdW5kLXRhYnN7XG4gICAgYmFja2dyb3VuZDogIzM3NGI2MDtcbn1cbi5uYXYtdGFicyA+IGxpIHtcbiAgICAvKndpZHRoOiAyMCU7Ki9cbiAgICB3aWR0aDogMjUlO1xuICAgIHotaW5kZXg6MTtcbn1cbi8qbGkuYWN0aXZlOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICBvcGFjaXR5OjA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjowLjJzIGVhc2UtaW4tb3V0O1xufSovXG4ubmF2LXRhYnMgPiBsaTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgIG9wYWNpdHk6MDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3R0b206IDBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xuICAgIHRyYW5zaXRpb246MC4xcyBlYXNlLWluLW91dDtcbiAgICBcbn1cbi5uYXYtdGFicyA+IGxpLmFjdGl2ZTphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgIG9wYWNpdHk6MTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3R0b206IDBweDtcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RkZDtcbiAgICBcbn1cbi5uYXYtdGFicyA+IGxpIGF7XG4gICB3aWR0aDogNzBweDtcbiAgIGhlaWdodDogNzBweDtcbiAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgIHBhZGRpbmc6IDA7XG59XG5cbi5uYXYtdGFicyA+IGxpIGE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi50YWItY29udGVudCAudGFiLXBhbmV7XG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XG5wYWRkaW5nLXRvcDogNTBweDtcbn1cbi50YWItY29udGVudCAuaGVhZHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmJ0bi1vdXRsaW5lLXJvdW5kZWR7XG4gICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5idG4uZ3JlZW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNWNiODVjO1xuICAgIC8qYm9yZGVyOiAycHggc29saWQgIzVjYjg1YzsqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5cblxuQG1lZGlhKCBtYXgtd2lkdGggOiA1ODVweCApe1xuICAgIFxuICAgIC5ib2FyZCB7XG53aWR0aDogOTAlO1xuaGVpZ2h0OmF1dG8gIWltcG9ydGFudDtcbn1cbiAgICBzcGFuLnJvdW5kLXRhYnMge1xuICAgICAgICBmb250LXNpemU6MTZweDtcbndpZHRoOiA1MHB4O1xuaGVpZ2h0OiA1MHB4O1xubGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC50YWItY29udGVudCAuaGVhZHtcbiAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgIH1cbiAgICAubmF2LXRhYnMgPiBsaSBhIHtcbndpZHRoOiA1MHB4O1xuaGVpZ2h0OiA1MHB4O1xubGluZS1oZWlnaHQ6NTBweDtcbn1cblxuLm5hdi10YWJzID4gbGkuYWN0aXZlOmFmdGVyIHtcbmNvbnRlbnQ6IFwiIFwiO1xucG9zaXRpb246IGFic29sdXRlO1xubGVmdDogMzUlO1xufVxuXG4uYnRuLW91dGxpbmUtcm91bmRlZCB7XG4gICAgcGFkZGluZzoxMnB4IDIwcHg7XG4gICAgfVxufVxuXG5cbi5zcGxhc2gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMFxufVxuXG4uc3BsYXNoLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDE1JSBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHhcbn1cblxuLnNwbGFzaC10aXRsZSBoMXtcbiAgICBmb250LXNpemU6IDI2cHhcbn1cblxuLmNvbG9yLWxpbmUge1xuICAgIGJvcmRlci1yYWRpdXM6NHB4IDRweCAwIDBcbn1cblxuLnRhYi1jb250ZW50IC50YWItcGFuZXtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmFsZXJ0IHtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5uZy12YWxpZFtyZXF1aXJlZF0sIC5uZy12YWxpZC5yZXF1aXJlZCAge1xuICAvL2JvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODsgLyogZ3JlZW4gKi9cbn1cbi5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xuIC8vIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjsgLyogcmVkICovXG59XG5cblxuIGlucHV0Om5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9YnV0dG9uXSkge1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMC42MjVlbSAwLjYyNWVtIDAuNzI1ZW0gMC42MjVlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0FBQUFBQTtcbiAgICAgICAgICAgIH1cbmlucHV0Om5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9YnV0dG9uXSk6Zm9jdXMge1xuICAgYm9yZGVyOiAxcHggc29saWQgIzExNmZiZjtcbn1cbi5uYXYtdGFicyB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDM1cHg7XG59XG5cbmZvcm0ge1xuICAgICAgcGFkZGluZzogMHB4IDUwcHg7XG59XG5cbi5ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NGI2MDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJveC5hcnJvdy1yaWdodDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTVweDtcbiAgdG9wOiAxNXB4O1xuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICMzNzRiNjA7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4iLCIuYnRuLWRlZmF1bHQge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG59XG4udGFiLWNvbnRlbnQgLmNob2ljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tdG9wOiAzOHB4O1xufVxuLnRhYi1jb250ZW50IC5jaG9pY2UgaSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDU1cHg7XG59XG4uYnRuLXJhZGlvIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW1nLXJhZGlvIHtcbiAgb3BhY2l0eTogMC44O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc3BhY2UtMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLyogYWN0aXZlIGJ1dHRvbnMgKi9cbiNzdGF0dXMtYnV0dG9ucyBhLmFjdGl2ZSBzcGFuLnJvdW5kLXRhYnMudGhyZWUge1xuICBiYWNrZ3JvdW5kOiAjMzc0YjYwO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ib2FyZCB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5ib2FyZCAubmF2LXRhYnMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxucC5uYXJyb3cge1xuICB3aWR0aDogNjAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cbi5saW5lciB7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA3NXB4O1xuICB6LWluZGV4OiAwO1xufVxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSxcbi5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIsXG4ubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbnNwYW4ucm91bmQtdGFicyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgei1pbmRleDogMjtcbiAgbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5zcGFuLnJvdW5kLXRhYnMudGhyZWUge1xuICBjb2xvcjogIzNlNWU5YTtcbiAgYm9yZGVyOiAycHggc29saWQgIzM3NGI2MDtcbn1cbmxpLmFjdGl2ZSBzcGFuLnJvdW5kLXRhYnMudGhyZWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XG4gIGNvbG9yOiAjM2U1ZTlhO1xufVxuLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSBzcGFuLnJvdW5kLXRhYnMge1xuICBiYWNrZ3JvdW5kOiAjMzc0YjYwO1xufVxuLm5hdi10YWJzID4gbGkge1xuICAvKndpZHRoOiAyMCU7Ki9cbiAgd2lkdGg6IDI1JTtcbiAgei1pbmRleDogMTtcbn1cbi8qbGkuYWN0aXZlOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICBvcGFjaXR5OjA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm90dG9tOiAtMnB4O1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdHJhbnNpdGlvbjowLjJzIGVhc2UtaW4tb3V0O1xufSovXG4ubmF2LXRhYnMgPiBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ1JTtcbiAgb3BhY2l0eTogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvdHRvbTogMHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RkZDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcbn1cbi5uYXYtdGFicyA+IGxpLmFjdGl2ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQ1JTtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvdHRvbTogMHB4O1xuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkZGQ7XG59XG4ubmF2LXRhYnMgPiBsaSBhIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG59XG4ubmF2LXRhYnMgPiBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4udGFiLWNvbnRlbnQgLnRhYi1wYW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi50YWItY29udGVudCAuaGVhZCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYnRuLW91dGxpbmUtcm91bmRlZCB7XG4gIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuLmJ0bi5ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XG4gIC8qYm9yZGVyOiAycHggc29saWQgIzVjYjg1YzsqL1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1ODVweCkge1xuICAuYm9hcmQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbiAgc3Bhbi5yb3VuZC10YWJzIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC50YWItY29udGVudCAuaGVhZCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5uYXYtdGFicyA+IGxpIGEge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgfVxuICAubmF2LXRhYnMgPiBsaS5hY3RpdmU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNSU7XG4gIH1cbiAgLmJ0bi1vdXRsaW5lLXJvdW5kZWQge1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgfVxufVxuLnNwbGFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBncmF5O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uc3BsYXNoLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDE1JSBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnNwbGFzaC10aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jb2xvci1saW5lIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG4udGFiLWNvbnRlbnQgLnRhYi1wYW5lIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uYWxlcnQge1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbmlucHV0Om5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9YnV0dG9uXSkge1xuICBvdXRsaW5lOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwLjYyNWVtIDAuNjI1ZW0gMC43MjVlbSAwLjYyNWVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0FBQUFBQTtcbn1cbmlucHV0Om5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9YnV0dG9uXSk6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTE2ZmJmO1xufVxuLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMzVweDtcbn1cbmZvcm0ge1xuICBwYWRkaW5nOiAwcHggNTBweDtcbn1cbi5ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NGI2MDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmJveC5hcnJvdy1yaWdodDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTVweDtcbiAgdG9wOiAxNXB4O1xuICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICMzNzRiNjA7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=finance-account-opening-margin-account-account-form-module.js.map