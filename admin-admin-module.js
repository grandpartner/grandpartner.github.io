(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/admin/admin.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/admin/admin.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header role=\"banner\">\r\n    <h1>Admin Panel</h1>\r\n    <ul class=\"utilities\">\r\n      <li class=\"users\">\r\n        <div class=\"half\">\r\n          <label for=\"profile2\" class=\"profile-dropdown\">\r\n            <input type=\"checkbox\" id=\"profile2\">\r\n            <img src=\"https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png\">\r\n            <span>John Doe</span>\r\n            <label for=\"profile2\"><i class=\"fa fa-bars\"></i></label>\r\n            <ul>\r\n              <li><a href=\"#\"><i class=\"mdi mdi-email-outline\"></i>Messages</a></li>\r\n              <li><a href=\"#\"><i class=\"mdi mdi-account\"></i>Account</a></li>\r\n              <li><a href=\"#\"><i class=\"mdi mdi-settings\"></i>Settings</a></li>\r\n              <li><a href=\"javascript:void(0)\" (click)=\"logout()\"><i class=\"mdi mdi-logout\"></i>Logout</a></li>\r\n            </ul>\r\n          </label>\r\n        </div>\r\n      \r\n      </li>\r\n    </ul>\r\n  </header>\r\n  \r\n  <nav role=\"navigation\">\r\n    <ul class=\"main\">\r\n      <li class=\"dashboard\"><a routerLink=\"dashboard\" routerLinkActive=\"active-link\"><i class=\"fa fa-th\"></i> Dashboard</a></li>\r\n      <li class=\"write\"><a routerLink=\"clients-management\" routerLinkActive=\"active-link\"> <i class=\"fa fa-users\"></i> Manage clients</a></li>\r\n      <li class=\"edit\"><a routerLink=\"transaction-management\" routerLinkActive=\"active-link\"><i class=\"fa fa-history\"></i> Manage transaction</a></li>\r\n      <li class=\"comments\"><a routerLink=\"account-management\" routerLinkActive=\"active-link\"> <i class=\"fa fa-tasks\"></i> Account management</a></li>\r\n      <li class=\"users\"><a ><i class=\"fa fa-calendar-minus\"></i> Transaction history</a></li>\r\n    </ul>\r\n  </nav>\r\n  \r\n   <main role=\"main\" class=\"admin-main\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n  <footer role=\"contentinfo\">&copy; Copyright 2020, Grand partner</footer>\r\n  <indentity-preview-dialog></indentity-preview-dialog>\r\n  <success-dialog></success-dialog>\r\n  <error-dialog></error-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/admin/dashboard/dashboard.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/admin/dashboard/dashboard.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Dashboard</h2>\r\n<div class=\"row dashboardCard\">\r\n\t<div class=\"col-lg-3 col-md-6 col-xs-12\">\r\n\t\t<a routerLink=\"../clients-management\" routerLinkActive=\"active-link\">\r\n\t\t\t<p-card header=\"Users - {{totalRecords}}\">\r\n\t\t\t    <div>users/clients or profiles management</div>\r\n\t\t\t</p-card>\r\n\t    </a>\r\n\t</div>\r\n\t<div class=\"col-lg-3 col-md-6 col-xs-12\">\r\n\t\t<a routerLink=\"../account-management\" routerLinkActive=\"active-link\">\r\n\t\t\t<p-card header=\"Stock account\">\r\n\t\t\t    <div>Stock accounts related management </div>\r\n\t\t\t</p-card>\r\n\t    </a>\r\n\t</div>\r\n    <div class=\"col-lg-3 col-md-6 col-xs-12\">\r\n\t    <a routerLink=\"../transaction-management\" routerLinkActive=\"active-link\">\t\r\n\t\t\t<p-card header=\"Transaction\">\r\n\t\t\t    <div>Transaction like deposit/withdraw management</div>\r\n\t\t\t</p-card>\r\n\t    </a>\r\n\t</div>\r\n\t<div class=\"col-lg-3 col-md-6 col-xs-12\">\r\n\t  <a routerLink=\"../clients-management\" routerLinkActive=\"active-link\">\t\r\n\t\t\t<p-card header=\"Logs\">\r\n\t\t\t    <div>Recent logs</div>\r\n\t\t\t</p-card>\r\n\t  </a>\r\n\t</div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/admin/login/admin-login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/admin/login/admin-login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"admin\" #f=\"ngForm\" (ngSubmit)=\"login(f.form.valid)\" novalidate autocomplete=\"off\">\r\n\t\r\n\t<h2>Admin Login</h2>\r\n\t\r\n\t<input #email=\"ngModel\" \r\n\t       type=\"email\" \r\n\t       name=\"email\" \r\n\t       [(ngModel)]=\"credentials.email\" \r\n\t       placeholder=\"Email\" \r\n\t       required email maxlength=\"256\" \r\n\t       class=\"text-field\" />\r\n\r\n\r\n    <input #password=\"ngModel\" \r\n           type=\"password\" \r\n           name=\"password\" \r\n           [(ngModel)]=\"credentials.password\" \r\n           placeholder=\"Password\"\r\n           required maxlength=\"100\" \r\n           class=\"text-field\"/>\r\n\r\n    <a href=\"javascript:void(0)\">\r\n    \t<input type=\"submit\"  class=\"button\" value=\"Log In\" />\r\n    </a>\r\n      <div class=\"validation-summary text-left\" *ngIf=\"error\">\r\n            {{error}}    \r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-account/manage-account.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-account/manage-account.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-messages [(value)]=\"msgs\"></p-messages>\r\n<h2>Account Management</h2>\r\n<p-table [value]=\"accounts\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" \r\n    [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [rowsPerPageOptions]=\"pageSizeOptions\" [defaultSortOrder]=\"-1\" dataKey=\"id\">\r\n    <ng-template pTemplate=\"header\" let-columns let-expanded=\"expanded\">\r\n        <tr>\r\n            <th style=\"width:3em\"></th>\r\n            <th style=\"width:2.5em\"></th>\r\n            <th style=\"width:10%\">ID</th>\r\n            <th>User ID</th>\r\n            <th>Type</th>\r\n            <th>Balance</th>\r\n            <th>Approved</th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\"  let-expanded=\"expanded\">\r\n        <tr [pReorderableRow]=\"index\">\r\n          <td >\r\n            <a href=\"#\" [pRowToggler]=\"rowData\" (click)=\"getAccountInfo(!expanded, rowData.id)\" id=\"expandedID-{{rowData.id}}\">\r\n              <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n            </a>\r\n          </td>\r\n          <td>\r\n            <i class=\"fa fa-bars\" pReorderableRowHandle></i>\r\n          </td>\r\n          <td>{{rowData.id}}</td>\r\n          <td>{{rowData.user_id}}</td>\r\n          <td>{{rowData.type}}</td>\r\n          <td>{{rowData.balance}}</td>\r\n          <td>{{rowData.approved_user_id}}</td>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td [attr.colspan]=\"'7'\">\r\n                <div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\">\r\n                    <div class=\"col-md-8\" *ngIf=\"accountInfo\">\r\n                      <p-fieldset legend=\"Account info\">\r\n                      <form #accountForm=\"ngForm\" class=\"editForm\" novalidate>\r\n                      <div class=\"tab-pane active\">\r\n                        <h4 class=\"head text-center\">Personal Information</h4>\r\n                        <br/>\r\n                        <div class='row'>\r\n                            <div class='col-md-12'>\r\n                                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"chineseName\">Chinese name</label>  \r\n                            <input  #chineseName=\"ngModel\" required id=\"chineseName\" name=\"chineseName\" type=\"text\" placeholder=\"Chinese name\" [(ngModel)]=\"accountInfo.name_chinese\" pInputText >   \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && chineseName.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"englishName\">English name</label>  \r\n                            <input #englishName=\"ngModel\" required id=\"englishName\" name=\"englishName\" type=\"text\" placeholder=\"English name\" [(ngModel)]=\"accountInfo.name_english\" pInputText>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && englishName.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"gender\">\r\n                            Gender</label>  \r\n                            <div class=\"group selectOtn\"> \r\n                                <select class=\"form-control\" required name=\"gender\" #gender=\"ngModel\" [(ngModel)]=\"accountInfo.gender_id\" required=\"true\">\r\n                                     <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select gender</option>\r\n                                    <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrGender')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && gender.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>  \r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"email\">Email</label>  \r\n                            <input #email=\"ngModel\" required id=\"email\" name=\"email\" type=\"email\" placeholder=\"Email\" [(ngModel)]=\"accountInfo.email\" pInputText>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && email.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>                                      \r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"country\">Country/Region</label>\r\n                                <div class=\"group selectOtn\"> \r\n                                    <select class=\"form-control\" required name=\"country\" #country=\"ngModel\" [(ngModel)]=\"accountInfo.identification_country_id\" required=\"true\">\r\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select country</option>\r\n                                        <option class=\"option\"\r\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\r\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            <div class=\"alert alert-danger\" \r\n                                  *ngIf=\"accountForm.submitted && country.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"identificationNumber\">\r\n                            Identification number</label>  \r\n                            <input #identificationNumber=\"ngModel\" required id=\"identificationNumber\" name=\"identificationNumber\" type=\"text\" placeholder=\"Indentification\" [(ngModel)]=\"accountInfo.identification_number\" pInputText>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && identificationNumber.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"highestEducation\">\r\n                            Highest Education</label>  \r\n                            <div class=\"group selectOtn\"> \r\n                                <select class=\"form-control\" required name=\"highestEducation\" #highestEducation=\"ngModel\" [(ngModel)]=\"accountInfo.highest_education_id\" required=\"true\">\r\n                                     <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select education</option>\r\n                                    <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrEducation')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && highestEducation.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"dob\">\r\n                            Date of birth</label>  \r\n                              <input type=\"date\" \r\n                                     id=\"dob\" \r\n                                     name=\"dob\" \r\n                                     #dob=\"ngModel\"\r\n                                     required\r\n                                     [(ngModel)]=\"accountInfo.dob\">\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && dob.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"dobPlace\">Birth place</label>\r\n                                <div class=\"group selectOtn\"> \r\n                                    <select class=\"form-control\" required name=\"dobPlace\" #dobPlace=\"ngModel\" [(ngModel)]=\"accountInfo.place_of_birth_country_id\" required=\"true\">\r\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select country</option>\r\n                                        <option class=\"option\"\r\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\r\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            <div class=\"alert alert-danger\" \r\n                                  *ngIf=\"accountForm.submitted && dobPlace.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-md-12'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"address\">Address</label>\r\n                              <textarea rows=\"3\" id=\"address\" #address=\"ngModel\" cols=\"30\" name=\"address\" [(ngModel)]=\"accountInfo.address\" required=\"true\" autoResize=\"autoResize\" style=\"resize: none;width:100%;padding:10px\" placeholder=\"Address\"></textarea>\r\n                            <div class=\"alert alert-danger\" \r\n                                  *ngIf=\"accountForm.submitted && address.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"email\" style=\"margin-right: 35px\">Permanent residence</label>\r\n                    <div class=\"mr-2\" style=\"display: inline-block;\">\r\n                        <p-radioButton name=\"residence\" value=\"1\" label=\"Yes\" [(ngModel)]=\"accountInfo.is_permanent_resident\">\r\n                        </p-radioButton> \r\n                    </div>\r\n                   <div class=\"mr-2\" style=\"display: inline-block;\">\r\n                        <p-radioButton name=\"residence\" value=\"0\" [(ngModel)]=\"accountInfo.is_permanent_resident\" label=\"No\">\r\n                        </p-radioButton> \r\n                   </div>\r\n \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n        <div class=\"tab-pane active\">\r\n        <h4 class=\"head text-center\">Employment Status</h4>\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-md-12'>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"professionalStatus\">\r\n                             Professional status</label> \r\n                                <div class=\"group selectOtn\"> \r\n                                    <select class=\"form-control\" required name=\"professionalStatus\" #professionalStatus=\"ngModel\" [(ngModel)]=\"accountInfo.professional_status_id\" required=\"true\">\r\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select status</option>\r\n                                        <option class=\"option\"\r\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrProfessionalStatus')\"\r\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && professionalStatus.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"companyName\">Company name</label>  \r\n                            <input #companyName=\"ngModel\" required id=\"companyName\" name=\"companyName\" type=\"text\" placeholder=\"Company name\" [(ngModel)]=\"accountInfo.company_name\" pInputText>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && companyName.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"carrerPosition\">\r\n                            Career position</label>  \r\n                            <input #carrerPosition=\"ngModel\" required id=\"carrerPosition\" name=\"carrerPosition\" type=\"text\" placeholder=\"Career position\" [(ngModel)]=\"accountInfo.career_position\" pInputText>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && carrerPosition.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"bussinessNature\">\r\n                            Business nature</label>  \r\n                               <div class=\"group selectOtn\"> \r\n                                    <select class=\"form-control\" required name=\"bussinessNature\" #bussinessNature=\"ngModel\" [(ngModel)]=\"accountInfo.business_nature_id\" required=\"true\">\r\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select business nature</option>\r\n                                        <option class=\"option\"\r\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrBusinessNature')\"\r\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                    </select>\r\n                                </div>          \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && bussinessNature.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n        <div class=\"tab-pane active\">\r\n        <h4 class=\"head text-center\">Financial and investment status</h4>\r\n        <br/>\r\n        <div class=\"row\">\r\n        <div class='col-md-12'>\r\n            <h6 class=\"subTitle\">Personal finances</h6>\r\n        </div>\r\n        </div>\r\n        <div class='row mt-3'>\r\n          <div class='col-md-12'>\r\n            <div class=\"row\">\r\n               <div class='col-xs-12 col-sm-6'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"annualIncome\">\r\n                        Annual Income</label> \r\n                       <div class=\"group selectOtn\"> \r\n                          <select class=\"form-control\"\r\n                                    id=\"annualIncome\"  \r\n                                    required \r\n                                    name=\"annualIncome\" \r\n                                    #annualIncome=\"ngModel\" \r\n                                    [(ngModel)]=\"accountInfo.annual_income_id\" \r\n                                    >\r\n                            <option class=\"option\" \r\n                                     value=\"0\" \r\n                                     disabled=\"true\" \r\n                                     >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrAnnualIncome')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                         </select>\r\n                        </div>             \r\n                         <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && annualIncome.invalid\">*Required</div>\r\n                    </div>\r\n                </div>\r\n               <div class='col-xs-12 col-sm-6'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"totalNetAssets\">\r\n                        Total net asset value</label> \r\n                       <div class=\"group selectOtn\"> \r\n                          <select class=\"form-control\"\r\n                                    id=\"totalNetAssets\"  \r\n                                    required \r\n                                    name=\"totalNetAssets\" \r\n                                    #totalNetAssets=\"ngModel\" \r\n                                    [(ngModel)]=\"accountInfo.total_net_asset_value_id\" \r\n                                    >\r\n                            <option class=\"option\" \r\n                                     value=\"0\" \r\n                                     disabled=\"true\" \r\n                                     >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrTotalNetAssetValue')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                         </select>\r\n                        </div>             \r\n                         <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && totalNetAssets.invalid\">*Required</div>\r\n                    </div>\r\n                </div>\r\n               <div class='col-xs-12 col-sm-6'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"sourceOfFunds\">\r\n                        Sources of funds</label> \r\n                     <div class=\"form-group accountForm\">\r\n                     <p-checkbox name=\"disclosure\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrSourcesOfFund')\" \r\n                     [value]=\"item.id\" [label]=\"item.name\" (onChange)=\"accountInfo.sources_of_found_ids=sourceOfFunds.toString()\" [(ngModel)]=\"sourceOfFunds\"></p-checkbox>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && sourceOfFunds.length==0\">*Required</div>\r\n                   </div>            \r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-12 col-sm-6'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"investmentKnowledge\">\r\n                        Investment knowledge</label> \r\n                       <div class=\"group selectOtn\"> \r\n                          <select class=\"form-control\"\r\n                                    id=\"investmentKnowledge\"  \r\n                                    required \r\n                                    name=\"investmentKnowledge\" \r\n                                    #investmentKnowledge=\"ngModel\" \r\n                                    [(ngModel)]=\"accountInfo.investment_knowledge_id\" \r\n                                    >\r\n                            <option class=\"option\" \r\n                                     value=\"0\" \r\n                                     disabled=\"true\" \r\n                                     >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrInvestmentKnowledge')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                         </select>\r\n                        </div>             \r\n                         <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && investmentKnowledge.invalid\">*Required</div>\r\n                    </div>\r\n                </div>\r\n               <div class='col-xs-12 col-sm-6'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"investmentObjective\">\r\n                        Investment objective</label> \r\n                       <div class=\"group selectOtn\"> \r\n                          <select class=\"form-control\"\r\n                                    id=\"investmentObjective\"  \r\n                                    required \r\n                                    name=\"investmentObjective\" \r\n                                    #investmentObjective=\"ngModel\" \r\n                                    [(ngModel)]=\"accountInfo.investment_objective_id\" \r\n                                    >\r\n                            <option class=\"option\" \r\n                                     value=\"0\" \r\n                                     disabled=\"true\" \r\n                                     >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrInvestmentObjective')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                         </select>\r\n                        </div>             \r\n                         <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && investmentObjective.invalid\">*Required</div>\r\n                    </div>\r\n                </div>\r\n               <div class='col-xs-12 col-sm-6'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"frequencyOfTransaction\">\r\n                        Frequency of transaction per month</label> \r\n                       <div class=\"group selectOtn\"> \r\n                          <select class=\"form-control\"\r\n                                    id=\"frequencyOfTransaction\"  \r\n                                    required \r\n                                    name=\"frequencyOfTransaction\" \r\n                                    #frequencyOfTransaction=\"ngModel\" \r\n                                    [(ngModel)]=\"accountInfo.frequency_of_transactions_per_month_id\" \r\n                                    >\r\n                            <option class=\"option\" \r\n                                     value=\"0\" \r\n                                     disabled=\"true\" \r\n                                     >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrFrequencyOfTransactions')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                         </select>\r\n                        </div>             \r\n                         <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && frequencyOfTransaction.invalid\">*Required</div>\r\n                    </div>\r\n                </div>\r\n               <div class='col-xs-12 col-sm-6'>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"riskTolerance\">\r\n                        Risk of tolerance</label> \r\n                       <div class=\"group selectOtn\"> \r\n                          <select class=\"form-control\"\r\n                                    id=\"riskTolerance\"  \r\n                                    required \r\n                                    name=\"riskTolerance\" \r\n                                    #riskTolerance=\"ngModel\" \r\n                                    [(ngModel)]=\"accountInfo.risk_tolerance_id\" \r\n                                    >\r\n                            <option class=\"option\" \r\n                                     value=\"0\" \r\n                                     disabled=\"true\" \r\n                                     >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrRiskTolerance')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                         </select>\r\n                        </div>             \r\n                         <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && riskTolerance.invalid\">*Required</div>\r\n                    </div>\r\n                </div>                                                                                               \r\n               </div>\r\n             </div> \r\n        </div>  \r\n        <div class=\"row mt-3\">\r\n        <div class='col-md-12'>\r\n            <h6 class=\"subTitle\">Investment experience</h6>\r\n        </div>\r\n        </div>\r\n        <div class='row mt-3'>\r\n            <div class='col-md-12'>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"stock\">\r\n                             Stock</label> \r\n                               <div class=\"group selectOtn\"> \r\n                                    <select class=\"form-control\"\r\n                                            id=\"stock\"  \r\n                                            required \r\n                                            name=\"stock\" \r\n                                            #stock=\"ngModel\" \r\n                                            [(ngModel)]=\"accountInfo.stock_experience_id\" \r\n                                            >\r\n                                         <option class=\"option\" \r\n                                                 value=\"0\" \r\n                                                 disabled=\"true\" \r\n                                                 >Select</option>\r\n                                         <option class=\"option\"\r\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\r\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                    </select>\r\n                               </div>             \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && stock.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                         <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"structuredProduct\">\r\n                             Structured product</label> \r\n                                <div class=\"group selectOtn\"> \r\n                                    <select class=\"form-control\" \r\n                                            id=\"structuredProduct\" \r\n                                            required \r\n                                            name=\"structuredProduct\" \r\n                                            #structuredProduct=\"ngModel\" \r\n                                            [(ngModel)]=\"accountInfo.structured_product_experience_id\" \r\n                                            >\r\n                                         <option class=\"option\" \r\n                                                 value=\"0\" \r\n                                                 disabled=\"true\" \r\n                                                 >Select</option>\r\n                                         <option class=\"option\"\r\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\r\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                    </select>\r\n                               </div>              \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && structuredProduct.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"foreignCurrency\">\r\n                             Foreign currency/Gold</label> \r\n                                <div class=\"group selectOtn\"> \r\n                                    <select class=\"form-control\" \r\n                                            id=\"foreignCurrency\" \r\n                                            required \r\n                                            name=\"foreignCurrency\" \r\n                                            #foreignCurrency=\"ngModel\" \r\n                                            [(ngModel)]=\"accountInfo.foreign_currency_gold_experience_id\" \r\n                                            >\r\n                                         <option class=\"option\" \r\n                                                 value=\"0\" \r\n                                                 disabled=\"true\" \r\n                                                 >Select</option>\r\n                                         <option class=\"option\"\r\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\r\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                    </select>\r\n                               </div>             \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && foreignCurrency.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"warrants\">\r\n                             Warrants</label> \r\n                              <div class=\"group selectOtn\"> \r\n                                 <select class=\"form-control\" \r\n                                        id=\"warrants\" \r\n                                        required \r\n                                        name=\"warrants\" \r\n                                        #warrants=\"ngModel\" \r\n                                        [(ngModel)]=\"accountInfo.warrants_experience_id\" \r\n                                        >\r\n                                     <option class=\"option\" \r\n                                             value=\"0\" \r\n                                             disabled=\"true\" \r\n                                             >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                 </select>\r\n                              </div> \r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && warrants.invalid\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                  <div class='col-xs-12 col-sm-6'>\r\n                      <div class=\"form-group\">\r\n                           <label class=\"control-label\" for=\"futures\">\r\n                             Futures/Options</label> \r\n                              <div class=\"group selectOtn\"> \r\n                                 <select class=\"form-control\" \r\n                                        id=\"futures\" \r\n                                        required \r\n                                        name=\"futures\" \r\n                                        #futures=\"ngModel\" \r\n                                        [(ngModel)]=\"accountInfo.futures_options_experience_id\" \r\n                                        >\r\n                                     <option class=\"option\" \r\n                                             value=\"0\" \r\n                                             disabled=\"true\" \r\n                                             >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                 </select>\r\n                              </div>          \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && futures.invalid\">*Required</div>\r\n                      </div>\r\n                  </div>\r\n                  <div class='col-xs-12 col-sm-6'>\r\n                      <div class=\"form-group\">\r\n                           <label class=\"control-label\" for=\"other\">\r\n                             Other</label> \r\n                              <div class=\"group selectOtn\"> \r\n                                 <select class=\"form-control\" \r\n                                        id=\"other\" \r\n                                        required \r\n                                        name=\"other\" \r\n                                        #other=\"ngModel\" \r\n                                        [(ngModel)]=\"accountInfo.other_experience_id\" \r\n                                        >\r\n                                     <option class=\"option\" \r\n                                             value=\"0\" \r\n                                             disabled=\"true\" \r\n                                             >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                 </select>\r\n                              </div>          \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && other.invalid\">*Required</div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                  <div class=\"row mb-3\">\r\n                    <div class=\"col-md-12\">\r\n                      <span style=\"color: #949494;\">Derivatives Warrants / CBBCs / ETF / Options, etc.) Cognitive Evaluation</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                   <div class='col-xs-12 col-sm-6'>\r\n                      <div class=\"form-group\">\r\n                           <label class=\"control-label\" for=\"derivativesTrading\">\r\n                             Derivatives trading</label> \r\n                              <div class=\"group selectOtn\"> \r\n                                 <select class=\"form-control\" \r\n                                        id=\"derivativesTrading\" \r\n                                        required \r\n                                        name=\"derivativesTrading\" \r\n                                        #derivativesTrading=\"ngModel\" \r\n                                        [(ngModel)]=\"accountInfo.derivatives_trading_id\" \r\n                                        >\r\n                                     <option class=\"option\" \r\n                                             value=\"0\" \r\n                                             disabled=\"true\" \r\n                                             >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrDerivativesTrading')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                 </select>\r\n                              </div>           \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && derivativesTrading.invalid\">*Required</div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n        <div class=\"tab-pane active\">\r\n        <h4 class=\"head text-center\">Other Information</h4>\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-md-12'>\r\n               <div class=\"row mb-3\">\r\n                  <div class=\"col-md-12\">\r\n                   <h6 class=\"subTitle\">Other information disclosure</h6>\r\n                  </div>\r\n                </div>\r\n              <div class=\"row\">\r\n                 <div class='col-md-12'>\r\n                  <div class=\"form-group accountForm\">\r\n                     <p-checkbox name=\"disclosure\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrTaxInformation')\" \r\n                     [value]=\"item.id\" [label]=\"item.name\" (onChange)=\"accountInfo.other_information_disclosure_ids=selectedDisclosureValues.toString()\" [(ngModel)]=\"selectedDisclosureValues\"></p-checkbox>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && selectedDisclosureValues.length==0\">*Required</div>\r\n                   </div>\r\n                </div>\r\n              </div>\r\n                <div class=\"row mb-3\">\r\n                  <div class=\"col-md-12\">\r\n                    <h6 class=\"subTitle\">Tax Information</h6>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"taxInformation\">\r\n                             Tax information</label> \r\n                              <div class=\"group selectOtn\"> \r\n                                 <select class=\"form-control\" \r\n                                        id=\"taxInformation\" \r\n                                        required \r\n                                        name=\"taxInformation\" \r\n                                        #taxInformation=\"ngModel\" \r\n                                        [(ngModel)]=\"accountInfo.tax_information_id\" \r\n                                        >\r\n                                     <option class=\"option\" \r\n                                             value=\"0\" \r\n                                             disabled=\"true\" \r\n                                             >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrTaxInformation')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                 </select>\r\n                              </div>            \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && taxInformation.invalid\">*Required</div>\r\n                        </div>\r\n                      </div>\r\n                      <div class='col-xs-12 col-sm-6'>\r\n                       <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"taxCountry\">\r\n                             Country / region </label> \r\n                              <div class=\"group selectOtn\"> \r\n                                 <select class=\"form-control\" \r\n                                        id=\"taxCountry\" \r\n                                        required \r\n                                        name=\"taxCountry\" \r\n                                        #taxCountry=\"ngModel\" \r\n                                        [(ngModel)]=\"accountInfo.tax_country_id\" \r\n                                        >\r\n                                     <option class=\"option\" \r\n                                             value=\"0\" \r\n                                             disabled=\"true\" \r\n                                             >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                 </select>\r\n                              </div> \r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && taxCountry.invalid\">*Required</div>\r\n                        </div> \r\n                      </div>\r\n                       <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"taxId\">\r\n                             Tax ID </label> \r\n                                <input #taxId=\"ngModel\" required id=\"taxId\" name=\"taxId\" type=\"text\" placeholder=\"Tax ID\" [(ngModel)]=\"accountInfo.tax_id\" pInputText>\r\n\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && taxId.invalid\">*Required</div>\r\n                        </div> \r\n                      </div> \r\n                </div>\r\n                <div class=\"row\">\r\n                <div class='col-md-12'>\r\n                  <p style=\"color: #949494;\">A tax resident is a tax resident in a certain place because he has a resident status in a certain place and is responsible for paying taxes locally.</p>\r\n                </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                <div class='col-md-12'>\r\n                    <h6 class=\"subTitle\">W-8BEN</h6>\r\n                </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                          <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"w8benCountry\">\r\n                             Country / region </label> \r\n                              <div class=\"group selectOtn\"> \r\n                                 <select class=\"form-control\" \r\n                                        id=\"w8benCountry\" \r\n                                        required \r\n                                        name=\"w8benCountry\" \r\n                                        #w8benCountry=\"ngModel\" \r\n                                        [(ngModel)]=\"accountInfo.w8ben_country_id\" \r\n                                        >\r\n                                     <option class=\"option\" \r\n                                             value=\"0\" \r\n                                             disabled=\"true\" \r\n                                             >Select</option>\r\n                                     <option class=\"option\"\r\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\r\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n                                 </select>\r\n                              </div>          \r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && w8benCountry.invalid\">*Required</div>\r\n                        </div> \r\n                      </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                <div class='col-md-12'>\r\n                  <p style=\"color: #949494;\">Your country or territory is within the meaning of the income tax agreement between the United States and that country.</p>\r\n                </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n        <div class=\"tab-pane active\">\r\n        <h4 class=\"head text-center\">Account to open</h4>\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-md-12'>\r\n              <div class=\"row\">\r\n                 <div class='col-md-12'>\r\n                  <div class=\"form-group\">\r\n                       <label class=\"control-label\" for=\"securitiesAccount\">\r\n                     Securities account</label> \r\n                     <p-checkbox name=\"securitiesAccount\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrSecuritiesAccount')\" \r\n                     [value]=\"item.id\" [label]=\"item.name\" [(ngModel)]=\"selectedSecuritiesAccount\" (onChange)=\"accountInfo.securities_account_ids=selectedSecuritiesAccount.toString()\" ></p-checkbox>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && selectedSecuritiesAccount.length==0\">*Required</div>\r\n                   </div>\r\n                </div>\r\n              </div>\r\n                <div class=\"row\">\r\n                    <div class='col-md-12'>\r\n                        <div class=\"form-group\">\r\n                             <label class=\"control-label\" for=\"fundAccount\">\r\n                             Fund account</label> \r\n                              <p-checkbox name=\"fundAccount\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrFoundAccount')\" \r\n                               [value]=\"item.id\" [label]=\"item.name\" [(ngModel)]=\"selectedFundAccount\" (onChange)=\"accountInfo.found_account_ids=selectedFundAccount.toString()\"></p-checkbox>\r\n                            <div class=\"alert alert-danger\" *ngIf=\"accountForm.submitted && selectedFundAccount.length==0\">*Required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                  <div class=\"row\" *ngIf=\"showSaveErrored\">\r\n                      <div class='col-md-12'>\r\n                          <div class=\"form-group\">\r\n                           <div class=\"alert alert-danger\">\r\n                              <div *ngIf=\"errors.length > 0 then errorList else errorGeneric\"></div>\r\n\r\n                              <ng-template #errorList>\r\n                                  <ul>\r\n                                      <li *ngFor=\"let error of errors\">{{error}}</li>\r\n                                  </ul>\r\n                              </ng-template>\r\n\r\n                              <ng-template #errorGeneric>\r\n                                  <li *ngFor=\"let error of errors\">{{error}}</li>\r\n                              </ng-template>\r\n                          </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <div class=\"form-group text-center\">\r\n                    <button class=\"primary\"  (click)=\"submitForm(accountForm)\"> Update <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </form>\r\n</p-fieldset>\r\n                    </div>\r\n                    <div class=\"col-md-4\" *ngIf=\"account\">\r\n                      <p-fieldset legend=\"Account\">\r\n                     <div class=\"row\" >\r\n                        <div class=\"col-md-12\">\r\n                          <p>Approved</p>\r\n                          <input type=\"radio\" \r\n                                   name=\"accountComplete\" \r\n                                   id=\"accountComplete-1\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"1\"\r\n                                   [checked] = \"account.approved == 1\"\r\n                                   (change)=\"account.approved = 1\"/>\r\n                          <label for=\"accountComplete-1\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Yes\r\n                          </label>\r\n                          <input type=\"radio\" \r\n                                   name=\"accountComplete\" \r\n                                   id=\"accountComplete-2\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"0\"\r\n                                   [checked] = \"account.approved == 0\"\r\n                                   (change)=\"account.approved = 0\"\r\n                                    />\r\n                          <label for=\"accountComplete-2\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>No\r\n                          </label>\r\n                        </div>\r\n                      </div>\r\n                     <div class=\"row\">\r\n                          <div class=\"col-md-\">\r\n                           <button type=\"button\" \r\n                               class=\"primary\" (click)=\"updateAccount()\">Update</button>\r\n                          </div>                        \r\n                        </div>\r\n                      </p-fieldset>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n</p-table>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-client/manage-client.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-client/manage-client.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Profile Management</h2>\r\n<p-messages [(value)]=\"msgs\"></p-messages>\r\n<p-table  [value]=\"users\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" \r\n    [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [rowsPerPageOptions]=\"pageSizeOptions\" [defaultSortOrder]=\"-1\" dataKey=\"id\">\r\n    <ng-template pTemplate=\"header\" let-columns let-expanded=\"expanded\">\r\n        <tr>\r\n            <th style=\"width:3em\"></th>\r\n            <th style=\"width:2.5em\"></th>\r\n            <th style=\"width:10%\">ID</th>\r\n            <th>English name</th>\r\n            <th>Chinese name</th>\r\n            <th style=\"width:30%\">Email</th>\r\n            <th>Created</th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\"  let-expanded=\"expanded\">\r\n        <tr [pReorderableRow]=\"index\">\r\n          <td >\r\n            <a href=\"#\" [pRowToggler]=\"rowData\"  (click)=\"toggleExpand(!expanded, rowData.id)\" id=\"expandedID-{{rowData.id}}\">\r\n              <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n            </a>\r\n          </td>\r\n          <td>\r\n            <i class=\"fa fa-bars\" pReorderableRowHandle></i>\r\n          </td>\r\n          <td>{{rowData.id}}</td>\r\n          <td>{{rowData.name_english}}</td>\r\n          <td>{{rowData.name_chinese}}</td>\r\n          <td>{{rowData.email}}</td>\r\n          <td>{{rowData.create_time}}</td>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td [attr.colspan]=\"'7'\">\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-12\">\r\n                      <p-fieldset [legend]=\"rowData.email\">\r\n                        <div class=\"row\">\r\n                        <div class=\"col-lg-5 col-md-6 col-xs-12\">\r\n                          <p>Verified Email</p>\r\n                          <input type=\"radio\" \r\n                                   name=\"emailVerified{{rowData.id}}\" \r\n                                   id=\"emailVerified-1-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"1\"\r\n                                   [checked] = \"rowData.verified_email == 1\"\r\n                                   (change)=\"rowData.verified_email = 1\"/>\r\n                          <label for=\"emailVerified-1-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Varified\r\n                          </label>\r\n                          <input type=\"radio\" \r\n                                   name=\"emailVerified{{rowData.id}}\" \r\n                                   id=\"emailVerified-2-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"0\"\r\n                                   [checked] = \"rowData.verified_email == 0\"\r\n                                   (change)=\"rowData.verified_email = 0\"\r\n                                    />\r\n                          <label for=\"emailVerified-2-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Not verified\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-xs-12\">\r\n                          <p>Verified Identity <a href=\"javascript:void(0)\" (click)=\"openDocument(rowData.docs)\"> (view document)</a></p>\r\n                          <input type=\"radio\" \r\n                                   name=\"verified_identity{{rowData.id}}\" \r\n                                   id=\"verified_identity-1-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"1\"\r\n                                   [checked] = \"rowData.verified_identity == 1\"\r\n                                   (change)=\"rowData.verified_identity = 1\"/>\r\n                          <label for=\"verified_identity-1-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Varified\r\n                          </label>\r\n                          <input type=\"radio\" \r\n                                   name=\"verified_identity{{rowData.id}}\" \r\n                                   id=\"verified_identity-2-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"0\"\r\n                                   [checked] = \"rowData.verified_identity == 0\"\r\n                                   (change)=\"rowData.verified_identity = 0\"\r\n                                    />\r\n                          <label for=\"verified_identity-2-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Not verified\r\n                          </label>\r\n                        </div>\r\n                        <div class=\"col-lg-5 col-md-6 col-xs-12\">\r\n                          <p>Verified Mobile</p>\r\n                          <input type=\"radio\" \r\n                                   name=\"verified_mobile{{rowData.id}}\" \r\n                                   id=\"verified_mobile-1-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"1\"\r\n                                   [checked] = \"rowData.verified_mobile == 1\"\r\n                                   (change)=\"rowData.verified_mobile = 1\"/>\r\n                          <label for=\"verified_mobile-1-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Varified\r\n                          </label>\r\n                          <input type=\"radio\" \r\n                                   name=\"verified_mobile{{rowData.id}}\" \r\n                                   id=\"verified_mobile-2-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"0\"\r\n                                   [checked] = \"rowData.verified_mobile == 0\"\r\n                                   (change)=\"rowData.verified_mobile = 0\"\r\n                                    />\r\n                          <label for=\"verified_mobile-2-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Not verified\r\n                          </label>\r\n                        </div> \r\n                        <div class=\"col-lg-5 col-md-6 col-xs-12\">\r\n                          <p>Verified Address</p>\r\n                          <input type=\"radio\" \r\n                                   name=\"verified_address{{rowData.id}}\" \r\n                                   id=\"verified_address-1-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"1\"\r\n                                   [checked] = \"rowData.verified_address == 1\"\r\n                                   (change)=\"rowData.verified_address = 1\"/>\r\n                          <label for=\"verified_address-1-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Varified\r\n                          </label>\r\n                          <input type=\"radio\" \r\n                                   name=\"verified_address{{rowData.id}}\" \r\n                                   id=\"verified_address-2-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"0\"\r\n                                   [checked] = \"rowData.verified_address == 0\"\r\n                                   (change)=\"rowData.verified_address = 0\"\r\n                                    />\r\n                          <label for=\"verified_address-2-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Not verified\r\n                          </label>\r\n                        </div>   \r\n                        <div class=\"col-lg-5 col-md-6 col-xs-12\">\r\n                          <p>Account</p>\r\n                          <input type=\"radio\" \r\n                                   name=\"active{{rowData.id}}\" \r\n                                   id=\"active-1-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"1\"\r\n                                   [checked] = \"rowData.active == 1\"\r\n                                   (change)=\"rowData.active = 1\"/>\r\n                          <label for=\"active-1-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>Active\r\n                          </label>\r\n                          <input type=\"radio\" \r\n                                   name=\"active{{rowData.id}}\" \r\n                                   id=\"active-2-{{rowData.id}}\" \r\n                                   class=\"radio-button\"\r\n                                   value=\"0\"\r\n                                   [checked] = \"rowData.active == 0\"\r\n                                   (change)=\"rowData.active = 0\"\r\n                                    />\r\n                          <label for=\"active-2-{{rowData.id}}\" \r\n                                 class=\"radio-button-click-target\">\r\n                            <span class=\"radio-button-circle\"></span>De-active\r\n                          </label>\r\n                        </div> \r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-\">\r\n                           <button type=\"button\" \r\n                               class=\"primary\" (click)=\"updateUser(rowData)\">Update</button>\r\n                          </div>\r\n                          <div class=\"col-md-4\">\r\n                           <button type=\"button\" \r\n                               class=\"danger\" (click)=\"deleteUser(rowData.id)\">Delete user</button>\r\n                          </div>                          \r\n                        </div>\r\n                    </p-fieldset>\r\n                   </div>\r\n                  </div>\r\n                    </div>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n</p-table>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-transaction/manage-transaction.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-transaction/manage-transaction.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Transaction Management</h2>\r\n<p-table [value]=\"transactions\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" \r\n    [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\" [rowsPerPageOptions]=\"pageSizeOptions\" [defaultSortOrder]=\"-1\" dataKey=\"id\">\r\n    <ng-template pTemplate=\"header\" let-columns let-expanded=\"expanded\">\r\n        <tr>\r\n            <th style=\"width:3em\"></th>\r\n            <th style=\"width:2.5em\"></th>\r\n            <th style=\"width:10%\">ID</th>\r\n            <th>Type</th>\r\n            <th>Currency</th>\r\n            <th>Amount</th>\r\n            <th>Status</th>\r\n            <th>Date</th>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\"  let-expanded=\"expanded\">\r\n        <tr [pReorderableRow]=\"index\">\r\n          <td >\r\n            <a href=\"#\" [pRowToggler]=\"rowData\">\r\n              <i [ngClass]=\"expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'\"></i>\r\n            </a>\r\n          </td>\r\n          <td>\r\n            <i class=\"fa fa-bars\" pReorderableRowHandle></i>\r\n          </td>\r\n          <td>{{rowData.id}}</td>\r\n          <td>{{rowData.type}}</td>\r\n          <td>{{rowData.currency}}</td>\r\n          <td>{{rowData.amount}}</td>\r\n          <td>{{rowData.status}}</td>\r\n          <td>{{rowData.success_time}}</td>\r\n        </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td [attr.colspan]=\"'8'\">\r\n                <div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\">\r\n                    <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\r\n\r\n                    </div>\r\n                    <div class=\"ui-g-12 ui-md-9\">\r\n                        <div class=\"ui-g\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </tr>\r\n    </ng-template>\r\n</p-table>\r\n\r\n");

/***/ }),

/***/ "./src/admin/BaseAdminComponent.ts":
/*!*****************************************!*\
  !*** ./src/admin/BaseAdminComponent.ts ***!
  \*****************************************/
/*! exports provided: BaseAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAdminComponent", function() { return BaseAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/SiteApiResponse */ "./src/shared/services/SiteApiResponse.ts");


var BaseAdminComponent = /** @class */ (function () {
    function BaseAdminComponent(route, router) {
        this.route = route;
        this.router = router;
        this.respUtils = new _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_1__["SiteApiResponseUtilities"]();
        this.msgs = [];
        this.routerSub = this.router.events.subscribe(function () { return window.scrollTo(0, 0); });
    }
    BaseAdminComponent.prototype.ngOnInit = function () {
    };
    BaseAdminComponent.prototype.ngOnDestroy = function () {
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
    };
    BaseAdminComponent.prototype.onError = function (error) {
        var errors = this.respUtils.getErrors(error);
        if (errors.length === 0) {
            errors.push("An unknown error occurred. Please try again.");
        }
        this.errors = errors;
        console.log(this.errors);
    };
    BaseAdminComponent.prototype.onSuccess = function () {
        this.errors = [];
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'updated successfully.' });
    };
    BaseAdminComponent.prototype.onRequestFailed = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: this.errors.toString() });
    };
    return BaseAdminComponent;
}());



/***/ }),

/***/ "./src/admin/admin-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/admin/admin-routing.module.ts ***!
  \*******************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.guard */ "./src/admin/admin.guard.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/admin/admin.component.ts");
/* harmony import */ var _login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/admin-login.component */ "./src/admin/login/admin-login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _manage_client_manage_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-client/manage-client.component */ "./src/admin/manage-client/manage-client.component.ts");
/* harmony import */ var _manage_transaction_manage_transaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./manage-transaction/manage-transaction.component */ "./src/admin/manage-transaction/manage-transaction.component.ts");
/* harmony import */ var _manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-account/manage-account.component */ "./src/admin/manage-account/manage-account.component.ts");










var routes = [
    { path: 'login', component: _login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"] },
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"], canLoad: [_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
        canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
        children: [{
                path: '',
                children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
                    { path: 'clients-management', component: _manage_client_manage_client_component__WEBPACK_IMPORTED_MODULE_7__["ManageClientsComponent"] },
                    { path: 'account-management', component: _manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_9__["ManageAccountComponent"] },
                    { path: 'transaction-management', component: _manage_transaction_manage_transaction_component__WEBPACK_IMPORTED_MODULE_8__["ManageTransactionComponent"] }
                ]
            }]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/admin/admin.component.ts":
/*!**************************************!*\
  !*** ./src/admin/admin.component.ts ***!
  \**************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AdminComponent = /** @class */ (function () {
    function AdminComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    AdminComponent.prototype.logout = function () {
        //this.authSvc.logout();
        localStorage.clear();
        this.router.navigate(['/admin/login']);
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/admin/admin.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/layout.less */ "./src/admin/styles/layout.less")).default]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/admin/admin.guard.ts":
/*!**********************************!*\
  !*** ./src/admin/admin.guard.ts ***!
  \**********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/auth/auth.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authSvc.isLoggedIn && this.authSvc.accountType == 'admin') {
            return true;
        }
        this.router.navigate(['/admin/login']);
        return false;
    };
    AdminGuard.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/admin/admin.module.ts":
/*!***********************************!*\
  !*** ./src/admin/admin.module.ts ***!
  \***********************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/admin/admin-routing.module.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.guard */ "./src/admin/admin.guard.ts");
/* harmony import */ var _login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/admin-login.component */ "./src/admin/login/admin-login.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.component */ "./src/admin/admin.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _manage_client_manage_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage-client/manage-client.component */ "./src/admin/manage-client/manage-client.component.ts");
/* harmony import */ var _manage_transaction_manage_transaction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./manage-transaction/manage-transaction.component */ "./src/admin/manage-transaction/manage-transaction.component.ts");
/* harmony import */ var _manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manage-account/manage-account.component */ "./src/admin/manage-account/manage-account.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/admin.service */ "./src/admin/services/admin.service.ts");














var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _login_admin_login_component__WEBPACK_IMPORTED_MODULE_6__["AdminLoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _manage_client_manage_client_component__WEBPACK_IMPORTED_MODULE_9__["ManageClientsComponent"],
                _manage_transaction_manage_transaction_component__WEBPACK_IMPORTED_MODULE_10__["ManageTransactionComponent"],
                _manage_account_manage_account_component__WEBPACK_IMPORTED_MODULE_11__["ManageAccountComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ],
            exports: [_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"]],
            providers: [_admin_guard__WEBPACK_IMPORTED_MODULE_5__["AdminGuard"], _services_admin_service__WEBPACK_IMPORTED_MODULE_13__["AdminService"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/admin/dashboard/dashboard.component.ts":
/*!****************************************************!*\
  !*** ./src/admin/dashboard/dashboard.component.ts ***!
  \****************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/admin/services/admin.service.ts");
/* harmony import */ var _BaseAdminComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BaseAdminComponent */ "./src/admin/BaseAdminComponent.ts");





var DashboardComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DashboardComponent, _super);
    function DashboardComponent(route, router, adminSvc, ref) {
        var _this = _super.call(this, route, router) || this;
        _this.adminSvc = adminSvc;
        _this.ref = ref;
        _this.users = [];
        _this.totalRecords = 0;
        return _this;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminSvc.getProfileList().subscribe(function (res) {
            _this.users = res['list'];
            _this.totalRecords = _this.users.length;
            _this.ref.detectChanges();
        }, function (err) {
            _this.onError(err);
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/admin/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/admin/styles/common.less")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}(_BaseAdminComponent__WEBPACK_IMPORTED_MODULE_4__["BaseAdminComponent"]));



/***/ }),

/***/ "./src/admin/login/admin-login.component.ts":
/*!**************************************************!*\
  !*** ./src/admin/login/admin-login.component.ts ***!
  \**************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/admin/login/modal.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/loading-response-progress.service */ "./src/shared/services/loading-response-progress.service.ts");
/* harmony import */ var _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/SiteApiResponse */ "./src/shared/services/SiteApiResponse.ts");







var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(route, router, authService, responseProgress) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.responseProgress = responseProgress;
        this.respUtils = new _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_6__["SiteApiResponseUtilities"]();
        this.error = '';
        this.credentials = new _modal__WEBPACK_IMPORTED_MODULE_3__["Credentials"]();
    }
    AdminLoginComponent.prototype.login = function (valid) {
        var _this = this;
        this.submitted = true;
        if (!valid)
            return;
        this.responseProgress.progressResponse(true);
        this.authService
            .login(this.credentials).subscribe(function (r) { return _this.onLogin(r); }, function (e) {
            _this.onError(e);
            _this.responseProgress.progressResponse(false);
        });
    };
    AdminLoginComponent.prototype.onLogin = function (result) {
        var _this = this;
        this.submitted = false;
        if (result == _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthResult"].Success) {
            this.error = null;
            this.router.navigate(['admin']);
        }
        else if (result == _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthResult"].ServerOffline) {
            this.error = "The server is offline. Please try again later.";
        }
        else if (result == _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthResult"].InvalidCredentials) {
            this.error = "The username or password is incorrect.";
        }
        setTimeout(function () {
            _this.responseProgress.progressResponse(false);
        }, 500);
    };
    AdminLoginComponent.prototype.onError = function (error) {
        var errors = this.respUtils.getErrors(error);
        if (errors.length === 0) {
            errors.push("An unknown error occurred. Please try again.");
        }
        this.errors = errors;
        console.log(this.errors);
    };
    AdminLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressLoadingService"] }
    ]; };
    AdminLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/admin/login/admin-login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./style.less */ "./src/admin/login/style.less")).default]
        })
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/admin/login/modal.ts":
/*!**********************************!*\
  !*** ./src/admin/login/modal.ts ***!
  \**********************************/
/*! exports provided: Credentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credentials", function() { return Credentials; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Credentials = /** @class */ (function () {
    function Credentials() {
        this.type = 'admin';
    }
    return Credentials;
}());



/***/ }),

/***/ "./src/admin/login/style.less":
/*!************************************!*\
  !*** ./src/admin/login/style.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form.admin {\n  width: 280px;\n  height: 260px;\n  margin: 200px auto;\n  background: white;\n  border-radius: 3px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n  text-align: center;\n  padding-top: 1px;\n}\nform.admin .text-field {\n  border: 1px solid #a6a6a6;\n  width: 230px;\n  height: 40px;\n  border-radius: 3px;\n  margin-top: 10px;\n  padding-left: 10px;\n  color: #6c6c6c;\n  background: #fcfcfc;\n  outline: none;\n}\nform.admin input.ng-dirty.ng-invalid.ng-touched {\n  border: 1px solid #8e0606 !important;\n}\nform.admin .text-field:focus {\n  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);\n  color: #a6a6a6;\n  background: white;\n}\nform.admin .button {\n  border-radius: 3px;\n  border: 1px solid #2a3542;\n  box-shadow: inset 0 1px 0 #2a3542;\n  width: 242px;\n  height: 40px;\n  margin-top: 20px;\n  background: #2a3542;\n  cursor: pointer;\n  color: white;\n  font-weight: bold;\n  text-shadow: 0 -1px 0 #2a3542;\n  font-size: 13px;\n}\nform.admin .button:hover {\n  background: #2a3542e0;\n}\nform.admin .button:active {\n  background: #2a3542e0;\n  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3), 0 1px 0 white;\n}\nform.admin h2 {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZG1pbi9sb2dpbi9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvYWRtaW4vbG9naW4vc3R5bGUubGVzcyIsInNyYy9hZG1pbi9sb2dpbi9zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRDtBRFJBO0VBV0MseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNBRDtBRG5CQTtFQXVCSyxvQ0FBQTtBQ0RMO0FEdEJBO0VBMkJDLDRDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDRkQ7QUQzQkE7RUFpQ0Msa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBRUEsZUFBQTtBQ05EO0FEekNBO0VBa0RNLHFCQUFBO0FDTk47QUQ1Q0E7RUFxREUscUJBQUE7RUFFRCwyREFBQTtBQ1BEO0FEaERBO0VBMkRLLGFBQUE7QUNSTCIsImZpbGUiOiJzcmMvYWRtaW4vbG9naW4vc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZm9ybS5hZG1pbiB7XG5cdHdpZHRoOiAyODBweDtcblx0aGVpZ2h0OiAyNjBweDtcblx0bWFyZ2luOiAyMDBweCBhdXRvO1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLCAuNCk7IFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOiAxcHg7XG4gIFxuICAgLnRleHQtZmllbGQge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcblx0Ym9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcblx0d2lkdGg6IDIzMHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0bWFyZ2luLXRvcDogMTBweDtcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRjb2xvcjogIzZjNmM2Yztcblx0YmFja2dyb3VuZDogI2ZjZmNmYztcblx0b3V0bGluZTogbm9uZTtcblx0fVxuXG5cdGlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQubmctdG91Y2hlZHtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgIzhlMDYwNiFpbXBvcnRhbnQ7XG4gICAgfVxuICAgXG4gICAudGV4dC1maWVsZDpmb2N1cyB7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLDAsMCwgLjMpO1xuXHRjb2xvcjogI2E2YTZhNjtcblx0YmFja2dyb3VuZDogd2hpdGU7XG5cdH1cbiAgXG4gICAuYnV0dG9uIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMyYTM1NDI7XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgIzJhMzU0Mjtcblx0d2lkdGg6IDI0MnB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdFxuXHRiYWNrZ3JvdW5kOiAjMmEzNTQyO1xuXHRcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LXNoYWRvdzogMCAtMXB4IDAgIzJhMzU0Mjtcblx0XG5cdGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLmJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmEzNTQyZTA7XG4gICAgfVxuICAgIC5idXR0b246YWN0aXZlIHtcblx0IGJhY2tncm91bmQ6ICMyYTM1NDJlMDtcblx0XG5cdGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLDAsMCwgLjMpLCAwIDFweCAwIHdoaXRlO1xuXHR9XG5cblx0aDIge1xuXHQgICAgcGFkZGluZzogMTBweDtcblx0fVxufSIsImZvcm0uYWRtaW4ge1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMjYwcHg7XG4gIG1hcmdpbjogMjAwcHggYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5mb3JtLmFkbWluIC50ZXh0LWZpZWxkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzZjNmM2YztcbiAgYmFja2dyb3VuZDogI2ZjZmNmYztcbiAgb3V0bGluZTogbm9uZTtcbn1cbmZvcm0uYWRtaW4gaW5wdXQubmctZGlydHkubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhlMDYwNiAhaW1wb3J0YW50O1xufVxuZm9ybS5hZG1pbiAudGV4dC1maWVsZDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBjb2xvcjogI2E2YTZhNjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5mb3JtLmFkbWluIC5idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYTM1NDI7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgIzJhMzU0MjtcbiAgd2lkdGg6IDI0MnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMyYTM1NDI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwICMyYTM1NDI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmZvcm0uYWRtaW4gLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyYTM1NDJlMDtcbn1cbmZvcm0uYWRtaW4gLmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMmEzNTQyZTA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDFweCAwIHdoaXRlO1xufVxuZm9ybS5hZG1pbiBoMiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/admin/manage-account/manage-account.component.ts":
/*!**************************************************************!*\
  !*** ./src/admin/manage-account/manage-account.component.ts ***!
  \**************************************************************/
/*! exports provided: ManageAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAccountComponent", function() { return ManageAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseAdminComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseAdminComponent */ "./src/admin/BaseAdminComponent.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/admin/services/admin.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");






var ManageAccountComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageAccountComponent, _super);
    function ManageAccountComponent(route, router, adminSvc, lookupSvc, ref) {
        var _this = _super.call(this, route, router) || this;
        _this.adminSvc = adminSvc;
        _this.lookupSvc = lookupSvc;
        _this.ref = ref;
        _this.accounts = [];
        _this.datasource = [];
        _this.pageSizeOptions = [10, 25, 50, { showAll: 'All' }];
        _this.disable = false;
        _this.sourceOfFunds = [];
        _this.selectedDisclosureValues = [];
        _this.selectedFundAccount = [];
        _this.selectedSecuritiesAccount = [];
        setTimeout(function () { _this.disable = true; }, 5000);
        return _this;
    }
    ManageAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        //datasource imitation
        this.adminSvc.getAccountList().subscribe(function (res) {
            _this.datasource = res['list'];
            _this.totalRecords = _this.datasource.length;
        }, function (err) {
            _this.onError(err);
        });
        this.loading = true;
    };
    ManageAccountComponent.prototype.loadCarsLazy = function (event) {
        var _this = this;
        this.loading = true;
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.accounts = _this.datasource.slice(event.first, (event.first + event.rows));
                _this.loading = false;
                _this.ref.detectChanges();
            }
        }, 2000);
    };
    ManageAccountComponent.prototype.getAccountInfo = function (isExpanded, accountID) {
        var _this = this;
        if (isExpanded) {
            if ($('i.pi.pi-chevron-down').length) {
                var el = $('i.pi.pi-chevron-down').parent()[0];
                el.click();
            }
            this.adminSvc.accountInfo(accountID).subscribe(function (res) {
                _this.accountInfo = res['account_info'];
                _this.account = res['account'];
                _this.sourceOfFunds = _this.accountInfo.sources_of_found_ids ? _this.accountInfo.sources_of_found_ids.split(',').map(Number) : [];
                _this.selectedDisclosureValues = _this.accountInfo.other_information_disclosure_ids ? _this.accountInfo.other_information_disclosure_ids.split(',').map(Number) : [];
                _this.selectedFundAccount = _this.accountInfo.found_account_ids ? _this.accountInfo.found_account_ids.split(',').map(Number) : [];
                _this.selectedSecuritiesAccount = _this.accountInfo.securities_account_ids ? _this.accountInfo.securities_account_ids.split(',').map(Number) : [];
                console.log(_this.accountInfo);
                _this.ref.detectChanges();
            });
        }
        console.log(isExpanded, accountID);
    };
    ManageAccountComponent.prototype.submitForm = function (form) {
        var _this = this;
        if (!form.valid) {
            return false;
        }
        this.adminSvc.updateAccountInfo(this.accountInfo).subscribe(function (res) {
            _this.onSuccess();
        }, function (err) {
            _this.onError(err);
            _this.onRequestFailed();
        });
    };
    ManageAccountComponent.prototype.updateAccount = function () {
        var _this = this;
        this.adminSvc.updateAccount(this.account).subscribe(function (res) {
            _this.onSuccess();
        }, function (err) {
            _this.onError(err);
            _this.onRequestFailed();
        });
    };
    ManageAccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ManageAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-account',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-account/manage-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/admin/styles/common.less")).default]
        })
    ], ManageAccountComponent);
    return ManageAccountComponent;
}(_BaseAdminComponent__WEBPACK_IMPORTED_MODULE_3__["BaseAdminComponent"]));



/***/ }),

/***/ "./src/admin/manage-client/manage-client.component.ts":
/*!************************************************************!*\
  !*** ./src/admin/manage-client/manage-client.component.ts ***!
  \************************************************************/
/*! exports provided: ManageClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageClientsComponent", function() { return ManageClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseAdminComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseAdminComponent */ "./src/admin/BaseAdminComponent.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/admin/services/admin.service.ts");
/* harmony import */ var _shared_dialogs_identity_preview_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/dialogs/identity-preview-dialog/dialog.service */ "./src/shared/dialogs/identity-preview-dialog/dialog.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");







var ManageClientsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageClientsComponent, _super);
    function ManageClientsComponent(route, router, adminSvc, ref, messageSvc, identityPreviewDialogSvc) {
        var _this = _super.call(this, route, router) || this;
        _this.adminSvc = adminSvc;
        _this.ref = ref;
        _this.messageSvc = messageSvc;
        _this.identityPreviewDialogSvc = identityPreviewDialogSvc;
        _this.users = [];
        _this.datasource = [];
        _this.pageSizeOptions = [10, 25, 50, { showAll: 'All' }];
        _this.disable = false;
        setTimeout(function () { _this.disable = true; }, 5000);
        return _this;
    }
    ManageClientsComponent.prototype.ngOnInit = function () {
        this.getClientList();
    };
    ManageClientsComponent.prototype.getClientList = function () {
        var _this = this;
        //datasource imitation
        this.adminSvc.getProfileList().subscribe(function (res) {
            _this.datasource = res['list'];
            _this.totalRecords = _this.datasource.length;
        }, function (err) {
            _this.onError(err);
        });
        this.loading = true;
    };
    ManageClientsComponent.prototype.loadCarsLazy = function (event) {
        var _this = this;
        this.loading = true;
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.users = _this.datasource.slice(event.first, (event.first + event.rows));
                _this.loading = false;
                _this.ref.detectChanges();
            }
        }, 2000);
    };
    ManageClientsComponent.prototype.toggleExpand = function (isExpanded, accountID) {
        if (isExpanded) {
            if ($('i.pi.pi-chevron-down').length) {
                var el = $('i.pi.pi-chevron-down').parent()[0];
                el.click();
            }
        }
    };
    ManageClientsComponent.prototype.updateUser = function (user) {
        var _this = this;
        debugger;
        this.adminSvc.updateUser(user).subscribe(function (res) {
            _this.onSuccess();
        }, function (err) {
            _this.onError(err);
            _this.onRequestFailed();
        });
    };
    ManageClientsComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.adminSvc.deleteUser(id).subscribe(function (res) {
            _this.onSuccess();
            window.location.reload();
        }, function (err) {
            _this.onError(err);
            _this.onRequestFailed();
        });
    };
    ManageClientsComponent.prototype.openDocument = function (data) {
        this.identityPreviewDialogSvc.showDialog(data);
    };
    ManageClientsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"] },
        { type: _shared_dialogs_identity_preview_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["IdentityPreviewDialogService"] }
    ]; };
    ManageClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-clients',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-client/manage-client.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["MessageService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/admin/styles/common.less")).default]
        })
    ], ManageClientsComponent);
    return ManageClientsComponent;
}(_BaseAdminComponent__WEBPACK_IMPORTED_MODULE_3__["BaseAdminComponent"]));



/***/ }),

/***/ "./src/admin/manage-transaction/manage-transaction.component.ts":
/*!**********************************************************************!*\
  !*** ./src/admin/manage-transaction/manage-transaction.component.ts ***!
  \**********************************************************************/
/*! exports provided: ManageTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTransactionComponent", function() { return ManageTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseAdminComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BaseAdminComponent */ "./src/admin/BaseAdminComponent.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/admin/services/admin.service.ts");





var ManageTransactionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ManageTransactionComponent, _super);
    function ManageTransactionComponent(route, router, adminSvc, ref) {
        var _this = _super.call(this, route, router) || this;
        _this.adminSvc = adminSvc;
        _this.ref = ref;
        _this.transactions = [];
        _this.datasource = [];
        _this.pageSizeOptions = [10, 25, 50, { showAll: 'All' }];
        _this.disable = false;
        setTimeout(function () { _this.disable = true; }, 5000);
        return _this;
    }
    ManageTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        //datasource imitation
        this.adminSvc.getTransactionList().subscribe(function (res) {
            _this.datasource = res['list'];
            _this.totalRecords = _this.datasource.length;
        }, function (err) {
            _this.onError(err);
        });
        this.loading = true;
    };
    ManageTransactionComponent.prototype.loadCarsLazy = function (event) {
        var _this = this;
        this.loading = true;
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.transactions = _this.datasource.slice(event.first, (event.first + event.rows));
                _this.loading = false;
                _this.ref.detectChanges();
            }
        }, 2000);
    };
    ManageTransactionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    ManageTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'manage-transaction',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/admin/manage-transaction/manage-transaction.component.html")).default
        })
    ], ManageTransactionComponent);
    return ManageTransactionComponent;
}(_BaseAdminComponent__WEBPACK_IMPORTED_MODULE_3__["BaseAdminComponent"]));



/***/ }),

/***/ "./src/admin/styles/common.less":
/*!**************************************!*\
  !*** ./src/admin/styles/common.less ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboardCard a:hover {\n  color: transparent!important;\n}\n.radio-button {\n  display: none;\n}\n.radio-button-click-target {\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 1.5;\n  padding: 14px 14px 14px 32px;\n  position: relative;\n}\n.radio-button-click-target:hover .radio-button-circle:before,\n.radio-button-click-target:focus .radio-button-circle:before {\n  border-color: #444;\n}\n.radio-button-click-target:active .radio-button-circle:before {\n  transform: scale(1.1);\n}\n.radio-button-circle {\n  border-radius: 50%;\n  cursor: pointer;\n  display: block;\n  height: 8px;\n  left: 4px;\n  position: absolute;\n  top: 20px;\n  transition: background-color 0.1s ease-out;\n  vertical-align: middle;\n  width: 8px;\n}\n.radio-button-circle:before {\n  border: 3px solid #ccc;\n  border-radius: 50%;\n  content: '';\n  display: inline-block;\n  height: 20px;\n  position: absolute;\n  top: -6px;\n  transition: border-color 0.1s ease-out, transform 0.1s ease-out;\n  left: -6px;\n  width: 20px;\n}\n.radio-button:checked + .radio-button-click-target .radio-button-circle {\n  background-color: #444;\n}\n.radio-button:disabled + .radio-button-click-target {\n  cursor: not-allowed;\n}\n.radio-button:disabled + .radio-button-click-target .radio-button-circle:before {\n  border-color: #e2e2e2;\n}\n.radio-button:disabled + .radio-button-click-target:active .radio-button-circle:before {\n  transform: none;\n}\n.ui-messages {\n  position: absolute!important;\n  z-inde: 9!important;\n}\ninput[type=\"date\"] {\n  display: block;\n  width: 100%;\n  height: 35px;\n  border: 1px solid #a6a6a6;\n  border-radius: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZG1pbi9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL2FkbWluL3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9hZG1pbi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFFSSw0QkFBQTtBQ0FMO0FER0U7RUFDQSxhQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNGRjtBRElBOztFQUNFLGtCQUFBO0FDREY7QURHQTtFQUVVLHFCQUFBO0FDRFY7QURJQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FDRkY7QURJQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBRUEsK0RBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZGO0FES0E7RUFDRSxzQkFBQTtBQ0hGO0FETUE7RUFDRSxtQkFBQTtBQ0pGO0FETUE7RUFDRSxxQkFBQTtBQ0pGO0FETUE7RUFFVSxlQUFBO0FDSlY7QURPQTtFQUNDLDRCQUFBO0VBQ0EsbUJBQUE7QUNMRDtBRE9BO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hZG1pbi9zdHlsZXMvY29tbW9uLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmRhc2hib2FyZENhcmQge1xuXHQgYTpob3ZlciB7XG5cdCAgICBjb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xuXHR9XG4gIH1cbiAgLnJhZGlvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yYWRpby1idXR0b24tY2xpY2stdGFyZ2V0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMTRweCAxNHB4IDE0cHggMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJhZGlvLWJ1dHRvbi1jbGljay10YXJnZXQ6aG92ZXIgLnJhZGlvLWJ1dHRvbi1jaXJjbGU6YmVmb3JlLCAucmFkaW8tYnV0dG9uLWNsaWNrLXRhcmdldDpmb2N1cyAucmFkaW8tYnV0dG9uLWNpcmNsZTpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM0NDQ7XG59XG4ucmFkaW8tYnV0dG9uLWNsaWNrLXRhcmdldDphY3RpdmUgLnJhZGlvLWJ1dHRvbi1jaXJjbGU6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ucmFkaW8tYnV0dG9uLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA4cHg7XG4gIGxlZnQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzIGVhc2Utb3V0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogOHB4O1xufVxuLnJhZGlvLWJ1dHRvbi1jaXJjbGU6YmVmb3JlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjFzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuMXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAuMXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAuMXMgZWFzZS1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIC4xcyBlYXNlLW91dDtcbiAgbGVmdDogLTZweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5yYWRpby1idXR0b246Y2hlY2tlZCArIC5yYWRpby1idXR0b24tY2xpY2stdGFyZ2V0IC5yYWRpby1idXR0b24tY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcbn1cblxuLnJhZGlvLWJ1dHRvbjpkaXNhYmxlZCArIC5yYWRpby1idXR0b24tY2xpY2stdGFyZ2V0IHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5yYWRpby1idXR0b246ZGlzYWJsZWQgKyAucmFkaW8tYnV0dG9uLWNsaWNrLXRhcmdldCAucmFkaW8tYnV0dG9uLWNpcmNsZTpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNlMmUyZTI7XG59XG4ucmFkaW8tYnV0dG9uOmRpc2FibGVkICsgLnJhZGlvLWJ1dHRvbi1jbGljay10YXJnZXQ6YWN0aXZlIC5yYWRpby1idXR0b24tY2lyY2xlOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLnVpLW1lc3NhZ2Vze1xuXHRwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xuXHR6LWluZGU6OSFpbXBvcnRhbnQ7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2E2YTZhNjtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfSIsIi5kYXNoYm9hcmRDYXJkIGE6aG92ZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuLnJhZGlvLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmFkaW8tYnV0dG9uLWNsaWNrLXRhcmdldCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDE0cHggMTRweCAxNHB4IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yYWRpby1idXR0b24tY2xpY2stdGFyZ2V0OmhvdmVyIC5yYWRpby1idXR0b24tY2lyY2xlOmJlZm9yZSxcbi5yYWRpby1idXR0b24tY2xpY2stdGFyZ2V0OmZvY3VzIC5yYWRpby1idXR0b24tY2lyY2xlOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzQ0NDtcbn1cbi5yYWRpby1idXR0b24tY2xpY2stdGFyZ2V0OmFjdGl2ZSAucmFkaW8tYnV0dG9uLWNpcmNsZTpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLnJhZGlvLWJ1dHRvbi1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogOHB4O1xuICBsZWZ0OiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgZWFzZS1vdXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiA4cHg7XG59XG4ucmFkaW8tYnV0dG9uLWNpcmNsZTpiZWZvcmUge1xuICBib3JkZXI6IDNweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC02cHg7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjFzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xcyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuMXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4xcyBlYXNlLW91dDtcbiAgbGVmdDogLTZweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4ucmFkaW8tYnV0dG9uOmNoZWNrZWQgKyAucmFkaW8tYnV0dG9uLWNsaWNrLXRhcmdldCAucmFkaW8tYnV0dG9uLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG59XG4ucmFkaW8tYnV0dG9uOmRpc2FibGVkICsgLnJhZGlvLWJ1dHRvbi1jbGljay10YXJnZXQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLnJhZGlvLWJ1dHRvbjpkaXNhYmxlZCArIC5yYWRpby1idXR0b24tY2xpY2stdGFyZ2V0IC5yYWRpby1idXR0b24tY2lyY2xlOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcbn1cbi5yYWRpby1idXR0b246ZGlzYWJsZWQgKyAucmFkaW8tYnV0dG9uLWNsaWNrLXRhcmdldDphY3RpdmUgLnJhZGlvLWJ1dHRvbi1jaXJjbGU6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cbi51aS1tZXNzYWdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XG4gIHotaW5kZTogOSFpbXBvcnRhbnQ7XG59XG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTZhNmE2O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/admin/styles/layout.less":
/*!**************************************!*\
  !*** ./src/admin/styles/layout.less ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  margin: 0;\n  font-family: Verdana, Geneva, sans-serif;\n}\n/* header */\nheader[role=banner] {\n  background: white;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);\n}\nheader[role=banner] h1 {\n  margin: 0;\n  font-weight: 300;\n  padding: 1rem;\n}\nheader[role=banner] .utilities li a {\n  padding: 0.7em;\n  display: block;\n}\nnav[role=navigation] {\n  background: #2a3542;\n  color: #ddd;\n  /* icons */\n}\nnav[role=navigation] li {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\nnav[role=navigation] li a {\n  color: #ddd;\n  text-decoration: none;\n  display: block;\n  padding: 0.7em;\n}\nnav[role=navigation] li a.active-link {\n  background: #2196f3ad;\n}\nnav[role=navigation] li a:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\nfooter[role=contentinfo] {\n  background: slategray;\n  color: #ddd;\n  font-size: 0.8em;\n  text-align: center;\n  padding: 0.2em;\n}\nul,\nli {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\nmain li {\n  position: relative;\n  padding-left: 1.2em;\n  margin: 0.5em 0;\n}\nmain li:before {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  left: 0;\n  top: 0.3em;\n  border-left: solid 10px #dde;\n  border-top: solid 5px transparent;\n  border-bottom: solid 5px transparent;\n}\n@media screen and (min-width: 600px) {\n  header[role=banner] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 99;\n    height: 60px;\n  }\n  header[role=banner] .utilities {\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: transparent;\n    color: darkslategray;\n    width: auto;\n  }\n  header[role=banner] .utilities li {\n    display: inline-block;\n  }\n  header[role=banner] .utilities li a {\n    padding: 0.5em 1em;\n  }\n  nav[role=navigation] {\n    position: fixed;\n    width: 230px;\n    top: 60px;\n    bottom: 0px;\n  }\n  main[role=main] {\n    margin: 75px 0 40px 235px;\n  }\n  main[role=main]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n  footer[role=contentinfo] {\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    left: 0px;\n    margin: 0;\n  }\n}\n@media screen and (min-width: 900px) {\n  footer[role=contentinfo] {\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    left: 0px;\n    margin: 0;\n  }\n}\n/* Profile */\n.profile-dropdown {\n  display: inline-block;\n  position: relative;\n  background: #f2f2f2;\n  width: 100%;\n  margin: auto;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 1.3rem;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.profile-dropdown * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.profile-dropdown input[type=\"checkbox\"] {\n  display: none;\n}\n.profile-dropdown input[type=\"checkbox\"]:checked ~ ul {\n  display: block;\n  -webkit-animation: pulse 0.5s;\n          animation: pulse 0.5s;\n}\n.profile-dropdown input[type=\"checkbox\"]:checked ~ img {\n  background: #2a3542;\n}\n.profile-dropdown input[type=\"checkbox\"]:checked ~ label {\n  background: #2a3542;\n}\n.profile-dropdown input[type=\"checkbox\"]:checked ~ label i {\n  color: #f2f2f2;\n}\n.profile-dropdown input[type=\"checkbox\"]:checked ~ label:after {\n  content: '';\n  position: absolute;\n  top: 100%;\n  right: calc(50% - 10px);\n  display: block;\n  border-style: solid;\n  border-width: 7px 10px 0 10px;\n  border-color: #2a3542 transparent transparent transparent;\n  width: 0;\n  height: 0;\n  z-index: 9;\n}\n.profile-dropdown img {\n  display: inline-block;\n  background: #d9d9d9;\n  height: 2.5rem;\n  vertical-align: middle;\n  margin-right: 1rem;\n  margin: 0.5rem 0.75rem 0.5rem 0.5rem;\n  border-radius: 50%;\n}\n.profile-dropdown span {\n  display: inline-block;\n  vertical-align: sub;\n  width: 125px;\n  margin-right: 2rem;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.profile-dropdown ul {\n  display: none;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 100%;\n  border: 1px solid #f2f2f2;\n}\n.profile-dropdown ul li {\n  display: block!important;\n}\n.profile-dropdown ul li a {\n  display: block!important;\n  padding: 0.75rem 1rem;\n  text-decoration: none;\n  color: #737373;\n  font-size: 1rem;\n}\n.profile-dropdown ul li a i {\n  font-size: 1.3rem;\n  vertical-align: middle;\n  margin: 0 0.75rem 0 -0.25rem;\n}\n.profile-dropdown ul li a:hover {\n  background: #e5e5e5;\n}\n.profile-dropdown > label {\n  position: relative;\n  height: 3.5rem;\n  display: block;\n  cursor: pointer;\n  text-decoration: none;\n  background: transparent;\n  color: #333;\n  box-sizing: border-box;\n  padding: 0.9rem;\n  float: right;\n}\n.profile-dropdown > label i {\n  color: #b2b2b2;\n  font-size: 1.75rem;\n}\n.profile-dropdown:after {\n  content: '';\n  display: table;\n  clear: both;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZG1pbi9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL2FkbWluL3N0eWxlcy9sYXlvdXQubGVzcyIsInNyYy9hZG1pbi9zdHlsZXMvbGF5b3V0Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0Esd0NBQUE7QUNDSjtBQUNBLFdBQVc7QURDVDtFQUNFLGlCQUFBO0VBQ0EsMkNBQUE7QUNDSjtBRENFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NKO0FERUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0U7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUNERixVQUFVO0FBQ1o7QURHRTtFQUNFLGtEQUFBO0FDREo7QURHRTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7QURFSTtFQUNJLHFCQUFBO0FDQVI7QURHRTtFQUNFLDJDQUFBO0FDREo7QURJRTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRko7QURLRTs7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSEo7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUNISjtBRE1FO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNKSjtFRE1FO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsUUFBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSxXQUFBO0VDSko7RURNRTtJQUNFLHFCQUFBO0VDSko7RURNRTtJQUNFLGtCQUFBO0VDSko7RURPRTtJQUNFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUNMSjtFRFFFO0lBQ0UseUJBQUE7RUNOSjtFRFFFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7SUFDQSxXQUFBO0VDTko7RURTRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0VDUEo7QUFDRjtBRFNFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtFQ1BKO0FBQ0Y7QUFDQSxZQUFZO0FEYVY7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1hKO0FEYUU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ1hKO0FEYUU7RUFDRSxhQUFBO0FDWEo7QURhRTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDWEo7QURhRTtFQUNFLG1CQUFBO0FDWEo7QURhRTtFQUNFLG1CQUFBO0FDWEo7QURhRTtFQUNFLGNBQUE7QUNYSjtBRGFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5REFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1hKO0FEYUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FDWEo7QURhRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNYSjtBRGFFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNYSjtBRGFFO0VBQ0Usd0JBQUE7QUNYSjtBRGNFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNaSjtBRGNFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDWko7QURjRTtFQUNFLG1CQUFBO0FDWko7QURlRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDYko7QURlRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ2JKO0FEZUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNiSiIsImZpbGUiOiJzcmMvYWRtaW4vc3R5bGVzL2xheW91dC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWZcbiAgfVxuICAvKiBoZWFkZXIgKi9cbiAgaGVhZGVyW3JvbGU9YmFubmVyXSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgfVxuICBoZWFkZXJbcm9sZT1iYW5uZXJdIGgxIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIFxuICBoZWFkZXJbcm9sZT1iYW5uZXJdIC51dGlsaXRpZXMgbGkgYSB7XG4gICAgcGFkZGluZzogLjdlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgbmF2W3JvbGU9bmF2aWdhdGlvbl0ge1xuICAgIGJhY2tncm91bmQ6ICMyYTM1NDI7XG4gICAgY29sb3I6ICNkZGQ7XG4gICAgLyogaWNvbnMgKi9cbiAgfVxuICBuYXZbcm9sZT1uYXZpZ2F0aW9uXSBsaSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gIH1cbiAgbmF2W3JvbGU9bmF2aWdhdGlvbl0gbGkgYSB7XG4gICAgY29sb3I6ICNkZGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IC43ZW07XG4gICAgJi5hY3RpdmUtbGlua3tcbiAgICAgICAgYmFja2dyb3VuZDogIzIxOTZmM2FkOyBcbiAgICB9XG4gIH1cbiAgbmF2W3JvbGU9bmF2aWdhdGlvbl0gbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgfVxuICBcbiAgZm9vdGVyW3JvbGU9Y29udGVudGluZm9dIHtcbiAgICBiYWNrZ3JvdW5kOiBzbGF0ZWdyYXk7XG4gICAgY29sb3I6ICNkZGQ7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuMmVtO1xuICB9XG4gIFxuICB1bCwgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgbWFpbiBsaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMS4yZW07XG4gICAgbWFyZ2luOiAuNWVtICAwO1xuICB9XG4gIG1haW4gbGk6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAuM2VtO1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxMHB4ICNkZGU7XG4gICAgYm9yZGVyLXRvcDogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICBoZWFkZXJbcm9sZT1iYW5uZXJdIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgIH1cbiAgICBoZWFkZXJbcm9sZT1iYW5uZXJdIC51dGlsaXRpZXMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIGhlYWRlcltyb2xlPWJhbm5lcl0gLnV0aWxpdGllcyBsaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIGhlYWRlcltyb2xlPWJhbm5lcl0gLnV0aWxpdGllcyBsaSBhIHtcbiAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xuICAgIH1cbiAgXG4gICAgbmF2W3JvbGU9bmF2aWdhdGlvbl0ge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgdG9wOiA2MHB4O1xuICAgICAgYm90dG9tOiAwcHg7XG4gICAgfVxuICBcbiAgICBtYWluW3JvbGU9bWFpbl0ge1xuICAgICAgbWFyZ2luOiA3NXB4IDAgNDBweCAyMzVweDtcbiAgICB9XG4gICAgbWFpbltyb2xlPW1haW5dOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgXG4gICAgZm9vdGVyW3JvbGU9Y29udGVudGluZm9dIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIGZvb3Rlcltyb2xlPWNvbnRlbnRpbmZvXSB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBcbiAgLyogUHJvZmlsZSAqL1xuICBcbiAgLnByb2ZpbGUtZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIC5wcm9maWxlLWRyb3Bkb3duICoge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLnByb2ZpbGUtZHJvcGRvd24gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5wcm9maWxlLWRyb3Bkb3duIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gdWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFuaW1hdGlvbjogcHVsc2UgMC41cztcbiAgfVxuICAucHJvZmlsZS1kcm9wZG93biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGltZyB7XG4gICAgYmFja2dyb3VuZDogIzJhMzU0MjtcbiAgfVxuICAucHJvZmlsZS1kcm9wZG93biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmEzNTQyO1xuICB9XG4gIC5wcm9maWxlLWRyb3Bkb3duIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gbGFiZWwgaSB7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gIH1cbiAgLnByb2ZpbGUtZHJvcGRvd24gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogN3B4IDEwcHggMCAxMHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzJhMzU0MiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgei1pbmRleDogOTtcbiAgfVxuICAucHJvZmlsZS1kcm9wZG93biBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbjogLjVyZW0gLjc1cmVtIC41cmVtIC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICAucHJvZmlsZS1kcm9wZG93biBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICB3aWR0aDogMTI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuICAucHJvZmlsZS1kcm9wZG93biB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuICB9XG4gIC5wcm9maWxlLWRyb3Bkb3duIHVsIGxpICB7XG4gICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICBcbiAgfVxuICAucHJvZmlsZS1kcm9wZG93biB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogLjc1cmVtIDFyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNzM3MzczO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuICAucHJvZmlsZS1kcm9wZG93biB1bCBsaSBhIGkge1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luOiAwIC43NXJlbSAwIC0uMjVyZW07XG4gIH1cbiAgLnByb2ZpbGUtZHJvcGRvd24gdWwgbGkgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgfVxuICBcbiAgLnByb2ZpbGUtZHJvcGRvd24gPiBsYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAuOXJlbTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgLnByb2ZpbGUtZHJvcGRvd24gPiBsYWJlbCBpIHtcbiAgICBjb2xvcjogI2IyYjJiMjtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cbiAgLnByb2ZpbGUtZHJvcGRvd246YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG5cblxuXG5cbiAgICAiLCJib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmO1xufVxuLyogaGVhZGVyICovXG5oZWFkZXJbcm9sZT1iYW5uZXJdIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5oZWFkZXJbcm9sZT1iYW5uZXJdIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuaGVhZGVyW3JvbGU9YmFubmVyXSAudXRpbGl0aWVzIGxpIGEge1xuICBwYWRkaW5nOiAwLjdlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5uYXZbcm9sZT1uYXZpZ2F0aW9uXSB7XG4gIGJhY2tncm91bmQ6ICMyYTM1NDI7XG4gIGNvbG9yOiAjZGRkO1xuICAvKiBpY29ucyAqL1xufVxubmF2W3JvbGU9bmF2aWdhdGlvbl0gbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbn1cbm5hdltyb2xlPW5hdmlnYXRpb25dIGxpIGEge1xuICBjb2xvcjogI2RkZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC43ZW07XG59XG5uYXZbcm9sZT1uYXZpZ2F0aW9uXSBsaSBhLmFjdGl2ZS1saW5rIHtcbiAgYmFja2dyb3VuZDogIzIxOTZmM2FkO1xufVxubmF2W3JvbGU9bmF2aWdhdGlvbl0gbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5mb290ZXJbcm9sZT1jb250ZW50aW5mb10ge1xuICBiYWNrZ3JvdW5kOiBzbGF0ZWdyYXk7XG4gIGNvbG9yOiAjZGRkO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtO1xufVxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxubWFpbiBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAxLjJlbTtcbiAgbWFyZ2luOiAwLjVlbSAwO1xufVxubWFpbiBsaTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDAuM2VtO1xuICBib3JkZXItbGVmdDogc29saWQgMTBweCAjZGRlO1xuICBib3JkZXItdG9wOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGhlYWRlcltyb2xlPWJhbm5lcl0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgaGVhZGVyW3JvbGU9YmFubmVyXSAudXRpbGl0aWVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIGhlYWRlcltyb2xlPWJhbm5lcl0gLnV0aWxpdGllcyBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIGhlYWRlcltyb2xlPWJhbm5lcl0gLnV0aWxpdGllcyBsaSBhIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIH1cbiAgbmF2W3JvbGU9bmF2aWdhdGlvbl0ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgdG9wOiA2MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICB9XG4gIG1haW5bcm9sZT1tYWluXSB7XG4gICAgbWFyZ2luOiA3NXB4IDAgNDBweCAyMzVweDtcbiAgfVxuICBtYWluW3JvbGU9bWFpbl06YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgZm9vdGVyW3JvbGU9Y29udGVudGluZm9dIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIGZvb3Rlcltyb2xlPWNvbnRlbnRpbmZvXSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG4vKiBQcm9maWxlICovXG4ucHJvZmlsZS1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnByb2ZpbGUtZHJvcGRvd24gKiB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ucHJvZmlsZS1kcm9wZG93biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2ZpbGUtZHJvcGRvd24gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IHB1bHNlIDAuNXM7XG59XG4ucHJvZmlsZS1kcm9wZG93biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGltZyB7XG4gIGJhY2tncm91bmQ6ICMyYTM1NDI7XG59XG4ucHJvZmlsZS1kcm9wZG93biBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGxhYmVsIHtcbiAgYmFja2dyb3VuZDogIzJhMzU0Mjtcbn1cbi5wcm9maWxlLWRyb3Bkb3duIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gbGFiZWwgaSB7XG4gIGNvbG9yOiAjZjJmMmYyO1xufVxuLnByb2ZpbGUtZHJvcGRvd24gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IGNhbGMoNTAlIC0gMTBweCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDdweCAxMHB4IDAgMTBweDtcbiAgYm9yZGVyLWNvbG9yOiAjMmEzNTQyIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB6LWluZGV4OiA5O1xufVxuLnByb2ZpbGUtZHJvcGRvd24gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW46IDAuNXJlbSAwLjc1cmVtIDAuNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wcm9maWxlLWRyb3Bkb3duIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIHdpZHRoOiAxMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wcm9maWxlLWRyb3Bkb3duIHVsIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xufVxuLnByb2ZpbGUtZHJvcGRvd24gdWwgbGkge1xuICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XG59XG4ucHJvZmlsZS1kcm9wZG93biB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5wcm9maWxlLWRyb3Bkb3duIHVsIGxpIGEgaSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgMC43NXJlbSAwIC0wLjI1cmVtO1xufVxuLnByb2ZpbGUtZHJvcGRvd24gdWwgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG59XG4ucHJvZmlsZS1kcm9wZG93biA+IGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDMuNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAuOXJlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2ZpbGUtZHJvcGRvd24gPiBsYWJlbCBpIHtcbiAgY29sb3I6ICNiMmIyYjI7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cbi5wcm9maWxlLWRyb3Bkb3duOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map