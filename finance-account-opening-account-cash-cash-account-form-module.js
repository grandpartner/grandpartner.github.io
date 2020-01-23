(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finance-account-opening-account-cash-cash-account-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/cash-account-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/cash-account-form.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<section style=\"background:#efefe9;\">\r\n    <div class=\"container\" style=\"z-index: unset\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\"> \r\n            <div class=\"box arrow-right\">\r\n              Cash Account\r\n            </div>\r\n            </div>\r\n            <div class=\"col-md-9\">\r\n            <div class=\"board\">\r\n            <!-- Navigation Area (Circular Tabs) -->\r\n            <msw-navbar></msw-navbar>\r\n            <!-- End Navigation Area (Circular Tabs) -->\r\n  \r\n            <!-- Content Area -->\r\n            <div class=\"tab-content\">\r\n                <!-- Nested view  -->\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <!-- End Content Area -->\r\n           </div>\r\n              <!-- For Debugging: show our valid formData -->\r\n             <!--    <pre>{{ formData | json }}</pre> -->\r\n            </div>\r\n            \r\n        </div>\r\n   \r\n  \r\n     \r\n    </div>\r\n  </section>\r\n  <success-dialog></success-dialog>\r\n  <error-dialog></error-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/employment-status/employment-status.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/employment-status/employment-status.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #employmentStatusForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-md-12'>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"professionalStatus\">\n                             {{lookupSvc.txt('professional_status_txt')}}</label> \n                                <div class=\"group selectOtn\"> \n                                    <select class=\"form-control\" required name=\"professionalStatus\" #professionalStatus=\"ngModel\" [(ngModel)]=\"employmentStatus.professionalStatus\" required=\"true\">\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select status</option>\n                                        <option class=\"option\"\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrProfessionalStatus')\"\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\n                                    </select>\n                                </div>\n\n                            <div class=\"alert alert-danger\" *ngIf=\"employmentStatusForm.submitted && professionalStatus.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"companyName\">{{lookupSvc.txt('company_name_txt')}}</label>  \n                            <input #companyName=\"ngModel\" required id=\"companyName\" name=\"companyName\" type=\"text\" placeholder=\"Company name\" [(ngModel)]=\"employmentStatus.companyName\" pInputText>\n                            <div class=\"alert alert-danger\" *ngIf=\"employmentStatusForm.submitted && companyName.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"carrerPosition\">\n                             {{lookupSvc.txt('career_position_txt')}}</label>  \n                            <input #carrerPosition=\"ngModel\" required id=\"carrerPosition\" name=\"carrerPosition\" type=\"text\" placeholder=\"Career position\" [(ngModel)]=\"employmentStatus.carrerPosition\" pInputText>\n                            <div class=\"alert alert-danger\" *ngIf=\"employmentStatusForm.submitted && carrerPosition.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"bussinessNature\">\n                            {{lookupSvc.txt('business_nature_txt')}}</label>  \n                               <div class=\"group selectOtn\"> \n                                    <select class=\"form-control\" required name=\"bussinessNature\" #bussinessNature=\"ngModel\" [(ngModel)]=\"employmentStatus.bussinessNature\" required=\"true\">\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select business nature</option>\n                                        <option class=\"option\"\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrBusinessNature')\"\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\n                                    </select>\n                                </div>          \n                            <div class=\"alert alert-danger\" *ngIf=\"employmentStatusForm.submitted && bussinessNature.invalid\">*Required</div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"form-group text-center space-20\">\n                   <button class=\"primary actionnext\" style=\"width: 50%\" (click)=\"goToPrevious(employmentStatusForm)\"> <span  class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                    <button class=\"primary actionnext\" style=\"width: 50%\"  (click)=\"goToNext(employmentStatusForm)\"> Next <span class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/financial-investment-status/financial-investment-status.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/financial-investment-status/financial-investment-status.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #investmentExperienceForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class=\"row\">\n        <div class='col-md-12'>\n            <h6 class=\"subTitle\">Personal finances</h6>\n        </div>\n        </div>\n        <div class='row mt-3'>\n          <div class='col-md-12'>\n            <div class=\"row\">\n               <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"annualIncome\">\n                        Annual Income</label> \n                       <div class=\"group selectOtn\"> \n                          <select class=\"form-control\"\n                                    id=\"annualIncome\"  \n                                    required \n                                    name=\"annualIncome\" \n                                    #annualIncome=\"ngModel\" \n                                    [(ngModel)]=\"investmentExperience.annualIncome\" \n                                    >\n                            <option class=\"option\" \n                                     value=\"0\" \n                                     disabled=\"true\" \n                                     >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrAnnualIncome')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                         </select>\n                        </div>             \n                         <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && annualIncome.invalid\">*Required</div>\n                    </div>\n                </div>\n               <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"totalNetAssets\">\n                        Total net asset value</label> \n                       <div class=\"group selectOtn\"> \n                          <select class=\"form-control\"\n                                    id=\"totalNetAssets\"  \n                                    required \n                                    name=\"totalNetAssets\" \n                                    #totalNetAssets=\"ngModel\" \n                                    [(ngModel)]=\"investmentExperience.totalNetAssets\" \n                                    >\n                            <option class=\"option\" \n                                     value=\"0\" \n                                     disabled=\"true\" \n                                     >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrTotalNetAssetValue')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                         </select>\n                        </div>             \n                         <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && totalNetAssets.invalid\">*Required</div>\n                    </div>\n                </div>\n               <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"sourceOfFunds\">\n                        Sources of funds</label> \n                     <div class=\"form-group accountForm\">\n                     <p-checkbox name=\"disclosure\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrSourcesOfFund')\" \n                     [value]=\"item.id\" [label]=\"item.name\" (onChange)=\"investmentExperience.sourceOfFunds=sourceOfFunds.toString()\" [(ngModel)]=\"sourceOfFunds\"></p-checkbox>\n                      <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && sourceOfFunds.length==0\">*Required</div>\n                   </div>            \n                    </div>\n                </div>\n                <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"investmentKnowledge\">\n                        Investment knowledge</label> \n                       <div class=\"group selectOtn\"> \n                          <select class=\"form-control\"\n                                    id=\"investmentKnowledge\"  \n                                    required \n                                    name=\"investmentKnowledge\" \n                                    #investmentKnowledge=\"ngModel\" \n                                    [(ngModel)]=\"investmentExperience.investmentKnowledge\" \n                                    >\n                            <option class=\"option\" \n                                     value=\"0\" \n                                     disabled=\"true\" \n                                     >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrInvestmentKnowledge')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                         </select>\n                        </div>             \n                         <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && investmentKnowledge.invalid\">*Required</div>\n                    </div>\n                </div>\n               <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"investmentObjective\">\n                        Investment objective</label> \n                       <div class=\"group selectOtn\"> \n                          <select class=\"form-control\"\n                                    id=\"investmentObjective\"  \n                                    required \n                                    name=\"investmentObjective\" \n                                    #investmentObjective=\"ngModel\" \n                                    [(ngModel)]=\"investmentExperience.investmentObjective\" \n                                    >\n                            <option class=\"option\" \n                                     value=\"0\" \n                                     disabled=\"true\" \n                                     >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrInvestmentObjective')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                         </select>\n                        </div>             \n                         <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && investmentObjective.invalid\">*Required</div>\n                    </div>\n                </div>\n               <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"frequencyOfTransaction\">\n                        Frequency of transaction per month</label> \n                       <div class=\"group selectOtn\"> \n                          <select class=\"form-control\"\n                                    id=\"frequencyOfTransaction\"  \n                                    required \n                                    name=\"frequencyOfTransaction\" \n                                    #frequencyOfTransaction=\"ngModel\" \n                                    [(ngModel)]=\"investmentExperience.frequencyOfTransaction\" \n                                    >\n                            <option class=\"option\" \n                                     value=\"0\" \n                                     disabled=\"true\" \n                                     >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrFrequencyOfTransactions')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                         </select>\n                        </div>             \n                         <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && frequencyOfTransaction.invalid\">*Required</div>\n                    </div>\n                </div>\n               <div class='col-xs-12 col-sm-6'>\n                  <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"riskTolerance\">\n                        Risk of tolerance</label> \n                       <div class=\"group selectOtn\"> \n                          <select class=\"form-control\"\n                                    id=\"riskTolerance\"  \n                                    required \n                                    name=\"riskTolerance\" \n                                    #riskTolerance=\"ngModel\" \n                                    [(ngModel)]=\"investmentExperience.riskTolerance\" \n                                    >\n                            <option class=\"option\" \n                                     value=\"0\" \n                                     disabled=\"true\" \n                                     >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrRiskTolerance')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                         </select>\n                        </div>             \n                         <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && riskTolerance.invalid\">*Required</div>\n                    </div>\n                </div>                                                                                               \n               </div>\n             </div> \n        </div>  \n        <div class=\"row mt-3\">\n        <div class='col-md-12'>\n            <h6 class=\"subTitle\">Investment experience</h6>\n        </div>\n        </div>\n        <div class='row mt-3'>\n            <div class='col-md-12'>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"stock\">\n                             Stock</label> \n                               <div class=\"group selectOtn\"> \n                                    <select class=\"form-control\"\n                                            id=\"stock\"  \n                                            required \n                                            name=\"stock\" \n                                            #stock=\"ngModel\" \n                                            [(ngModel)]=\"investmentExperience.stock\" \n                                            >\n                                         <option class=\"option\" \n                                                 value=\"0\" \n                                                 disabled=\"true\" \n                                                 >Select</option>\n                                         <option class=\"option\"\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\n                                    </select>\n                               </div>             \n                            <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && stock.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                         <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"structuredProduct\">\n                             Structured product</label> \n                                <div class=\"group selectOtn\"> \n                                    <select class=\"form-control\" \n                                            id=\"structuredProduct\" \n                                            required \n                                            name=\"structuredProduct\" \n                                            #structuredProduct=\"ngModel\" \n                                            [(ngModel)]=\"investmentExperience.structuredProduct\" \n                                            >\n                                         <option class=\"option\" \n                                                 value=\"0\" \n                                                 disabled=\"true\" \n                                                 >Select</option>\n                                         <option class=\"option\"\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\n                                    </select>\n                               </div>              \n                            <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && structuredProduct.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"foreignCurrency\">\n                             Foreign currency/Gold</label> \n                                <div class=\"group selectOtn\"> \n                                    <select class=\"form-control\" \n                                            id=\"foreignCurrency\" \n                                            required \n                                            name=\"foreignCurrency\" \n                                            #foreignCurrency=\"ngModel\" \n                                            [(ngModel)]=\"investmentExperience.foreignCurrency\" \n                                            >\n                                         <option class=\"option\" \n                                                 value=\"0\" \n                                                 disabled=\"true\" \n                                                 >Select</option>\n                                         <option class=\"option\"\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\n                                    </select>\n                               </div>             \n                            <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && foreignCurrency.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"warrants\">\n                             Warrants</label> \n                              <div class=\"group selectOtn\"> \n                                 <select class=\"form-control\" \n                                        id=\"warrants\" \n                                        required \n                                        name=\"warrants\" \n                                        #warrants=\"ngModel\" \n                                        [(ngModel)]=\"investmentExperience.warrants\" \n                                        >\n                                     <option class=\"option\" \n                                             value=\"0\" \n                                             disabled=\"true\" \n                                             >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                 </select>\n                              </div> \n\n                            <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && warrants.invalid\">*Required</div>\n                        </div>\n                    </div>\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                           <label class=\"control-label\" for=\"futures\">\n                             Futures/Options</label> \n                              <div class=\"group selectOtn\"> \n                                 <select class=\"form-control\" \n                                        id=\"futures\" \n                                        required \n                                        name=\"futures\" \n                                        #futures=\"ngModel\" \n                                        [(ngModel)]=\"investmentExperience.futures\" \n                                        >\n                                     <option class=\"option\" \n                                             value=\"0\" \n                                             disabled=\"true\" \n                                             >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                 </select>\n                              </div>          \n                            <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && futures.invalid\">*Required</div>\n                      </div>\n                  </div>\n                  <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                           <label class=\"control-label\" for=\"other\">\n                             Other</label> \n                              <div class=\"group selectOtn\"> \n                                 <select class=\"form-control\" \n                                        id=\"other\" \n                                        required \n                                        name=\"other\" \n                                        #other=\"ngModel\" \n                                        [(ngModel)]=\"investmentExperience.other\" \n                                        >\n                                     <option class=\"option\" \n                                             value=\"0\" \n                                             disabled=\"true\" \n                                             >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrExperience')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                 </select>\n                              </div>          \n                            <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && other.invalid\">*Required</div>\n                      </div>\n                  </div>\n                </div>\n                  <div class=\"row mb-3\">\n                    <div class=\"col-md-12\">\n                      <span style=\"color: #949494;\">Derivatives Warrants / CBBCs / ETF / Options, etc.) Cognitive Evaluation</span>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                   <div class='col-xs-12 col-sm-6'>\n                      <div class=\"form-group\">\n                           <label class=\"control-label\" for=\"derivativesTrading\">\n                             Derivatives trading</label> \n                              <div class=\"group selectOtn\"> \n                                 <select class=\"form-control\" \n                                        id=\"derivativesTrading\" \n                                        required \n                                        name=\"derivativesTrading\" \n                                        #derivativesTrading=\"ngModel\" \n                                        [(ngModel)]=\"investmentExperience.derivativesTrading\" \n                                        >\n                                     <option class=\"option\" \n                                             value=\"0\" \n                                             disabled=\"true\" \n                                             >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrDerivativesTrading')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                 </select>\n                              </div>           \n                            <div class=\"alert alert-danger\" *ngIf=\"investmentExperienceForm.submitted && derivativesTrading.invalid\">*Required</div>\n                      </div>\n                  </div>\n                </div>\n                <div class=\"form-group text-center\">\n                    <button class=\"primary actionnext\" style=\"width: 50%\" (click)=\"goToPrevious(investmentExperienceForm)\"> <span  class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                    <button class=\"primary\"  (click)=\"goToNext(investmentExperienceForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/navbar/navbar.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/navbar/navbar.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board-inner\" id=\"status-buttons\">\n    <ul class=\"nav nav-tabs\" id=\"myTab\">\n        <div class=\"liner\"></div>\n                    \n        <li>\n            <a routerLink=\"personal\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"personal\">\n                <span class=\"round-tabs three\">\n                    1\n                </span>\n            </a>\n        </li>\n\n        <li>\n            <a routerLink=\"employmentStatus\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" data-toggle=\"tab\" title=\"employment status\">\n                <span class=\"round-tabs three\">\n                    2\n                </span>\n            </a>\n        </li>\n\n\n        <li>\n            <a routerLink=\"financialAndInvestmentStatus\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"Financial and investment status\">\n                <span class=\"round-tabs three\">\n                   3\n                </span>\n            </a>\n        </li>\n\n\n        <li>\n            <a routerLink=\"otherDisclosure\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"Disclosure\">\n                <span class=\"round-tabs three\">\n                  4\n                </span>\n            </a>\n        </li>\n\n         <li>\n            <a routerLink=\"selectAccount\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"Account\">\n                <span class=\"round-tabs three\">\n                  5\n                </span>\n            </a>\n        </li>\n                \n    </ul>\n    <div class=\"clearfix\"></div>\n</div>\n\n<!-- Close the Splash screen -->\n<script src=\"assets/js/loading-bars.js\"></script>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/other-disclosure/other-disclosure.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/other-disclosure/other-disclosure.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #otherDisclosureForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-md-12'>\n               <div class=\"row mb-3\">\n                  <div class=\"col-md-12\">\n                   <h6 class=\"subTitle\">Other information disclosure</h6>\n                  </div>\n                </div>\n              <div class=\"row\">\n                 <div class='col-md-12'>\n                  <div class=\"form-group accountForm\">\n                     <p-checkbox name=\"disclosure\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrTaxInformation')\" \n                     [value]=\"item.id\" [label]=\"item.name\" (onChange)=\"otherDisclosure.otherInformation=selectedDisclosureValues.toString()\" [(ngModel)]=\"selectedDisclosureValues\"></p-checkbox>\n                      <div class=\"alert alert-danger\" *ngIf=\"otherDisclosureForm.submitted && selectedDisclosureValues.length==0\">*Required</div>\n                   </div>\n                </div>\n              </div>\n                <div class=\"row mb-3\">\n                  <div class=\"col-md-12\">\n                    <h6 class=\"subTitle\">Tax Information</h6>\n                  </div>\n                </div>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"taxInformation\">\n                             Tax information</label> \n                              <div class=\"group selectOtn\"> \n                                 <select class=\"form-control\" \n                                        id=\"taxInformation\" \n                                        required \n                                        name=\"taxInformation\" \n                                        #taxInformation=\"ngModel\" \n                                        [(ngModel)]=\"otherDisclosure.taxInformation\" \n                                        >\n                                     <option class=\"option\" \n                                             value=\"0\" \n                                             disabled=\"true\" \n                                             >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrTaxInformation')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                 </select>\n                              </div>            \n                            <div class=\"alert alert-danger\" *ngIf=\"otherDisclosureForm.submitted && taxInformation.invalid\">*Required</div>\n                        </div>\n                      </div>\n                      <div class='col-xs-12 col-sm-6'>\n                       <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"taxCountry\">\n                             Country / region </label> \n                              <div class=\"group selectOtn\"> \n                                 <select class=\"form-control\" \n                                        id=\"taxCountry\" \n                                        required \n                                        name=\"taxCountry\" \n                                        #taxCountry=\"ngModel\" \n                                        [(ngModel)]=\"otherDisclosure.taxCountry\" \n                                        >\n                                     <option class=\"option\" \n                                             value=\"0\" \n                                             disabled=\"true\" \n                                             >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                 </select>\n                              </div> \n\n                            <div class=\"alert alert-danger\" *ngIf=\"otherDisclosureForm.submitted && taxCountry.invalid\">*Required</div>\n                        </div> \n                      </div>\n                       <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"taxId\">\n                             Tax ID </label> \n                                <input #taxId=\"ngModel\" required id=\"taxId\" name=\"taxId\" type=\"text\" placeholder=\"Tax ID\" [(ngModel)]=\"otherDisclosure.taxId\" pInputText>\n\n                            <div class=\"alert alert-danger\" *ngIf=\"otherDisclosureForm.submitted && taxId.invalid\">*Required</div>\n                        </div> \n                      </div> \n                </div>\n                <div class=\"row\">\n                <div class='col-md-12'>\n                  <p style=\"color: #949494;\">A tax resident is a tax resident in a certain place because he has a resident status in a certain place and is responsible for paying taxes locally.</p>\n                </div>\n                </div>\n                <div class=\"row\">\n                <div class='col-md-12'>\n                    <h6 class=\"subTitle\">W-8BEN</h6>\n                </div>\n                </div>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                          <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"w8benCountry\">\n                             Country / region </label> \n                              <div class=\"group selectOtn\"> \n                                 <select class=\"form-control\" \n                                        id=\"w8benCountry\" \n                                        required \n                                        name=\"w8benCountry\" \n                                        #w8benCountry=\"ngModel\" \n                                        [(ngModel)]=\"otherDisclosure.w8benCountry\" \n                                        >\n                                     <option class=\"option\" \n                                             value=\"0\" \n                                             disabled=\"true\" \n                                             >Select</option>\n                                     <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                 </select>\n                              </div>          \n                            <div class=\"alert alert-danger\" *ngIf=\"otherDisclosureForm.submitted && w8benCountry.invalid\">*Required</div>\n                        </div> \n                      </div>\n                </div>\n\n                <div class=\"row\">\n                <div class='col-md-12'>\n                  <p style=\"color: #949494;\">Your country or territory is within the meaning of the income tax agreement between the United States and that country.</p>\n                </div>\n                </div>\n                <div class=\"form-group text-center\">\n                   <button class=\"primary actionnext\" style=\"width: 50%\" (click)=\"goToPrevious(otherDisclosureForm)\"> <span  class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                    <button class=\"primary\"  (click)=\"goToNext(otherDisclosureForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/personal/personal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/personal/personal.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <h6 class=\"subTitle\">Identity information</h6>\n        <br/>\n        <div class='row'>\n            <div class='col-md-12'>\n                <div class=\"row\">\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"chineseName\">{{lookupSvc.txt('chinese_name_txt')}}</label>  \n                            <input  #chineseName=\"ngModel\" required id=\"chineseName\" name=\"chineseName\" type=\"text\" placeholder=\"{{lookupSvc.txt('chinese_name_txt')}}\" [(ngModel)]=\"personal.chineseName\" pInputText >   \n                            <div class=\"alert alert-danger\" *ngIf=\"personalForm.submitted && chineseName.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"englishName\">{{lookupSvc.txt('english_name_txt')}}</label>  \n                            <input #englishName=\"ngModel\" required id=\"englishName\" name=\"englishName\" type=\"text\" placeholder=\"{{lookupSvc.txt('english_name_txt')}}\" [(ngModel)]=\"personal.englishName\" pInputText>\n                            <div class=\"alert alert-danger\" *ngIf=\"personalForm.submitted && englishName.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"gender\">\n                            {{lookupSvc.txt('gender_txt')}}</label>  \n                            <div class=\"group selectOtn\"> \n                                <select class=\"form-control\" required name=\"gender\" #gender=\"ngModel\" [(ngModel)]=\"personal.gender\" required=\"true\">\n                                     <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select gender</option>\n                                    <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrGender')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                </select>\n                            </div>\n                            <div class=\"alert alert-danger\" *ngIf=\"personalForm.submitted && gender.invalid\">*Required</div>\n                        </div>\n                    </div>  \n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"email\">{{lookupSvc.txt('email_txt')}}</label>  \n                            <input #email=\"ngModel\" required id=\"email\" name=\"email\" type=\"email\" placeholder=\"{{lookupSvc.txt('email_txt')}}\" [(ngModel)]=\"personal.email\" pInputText>\n                            <div class=\"alert alert-danger\" *ngIf=\"personalForm.submitted && email.invalid\">*Required</div>\n                        </div>\n                    </div>                                      \n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"country\">{{lookupSvc.txt('country_text')}}/{{lookupSvc.txt('region_text')}}</label>\n                                <div class=\"group selectOtn\"> \n                                    <select class=\"form-control\" required name=\"country\" #country=\"ngModel\" [(ngModel)]=\"personal.country\" required=\"true\">\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select country</option>\n                                        <option class=\"option\"\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\n                                    </select>\n                                </div>\n                            <div class=\"alert alert-danger\" \n                                  *ngIf=\"personalForm.submitted && country.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    \n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"identificationNumber\">\n                             {{lookupSvc.txt('identification_number_txt')}}</label>  \n                            <input #identificationNumber=\"ngModel\" required id=\"identificationNumber\" name=\"identificationNumber\" type=\"text\" placeholder=\" {{lookupSvc.txt('identification_number_txt')}}\" [(ngModel)]=\"personal.identificationNumber\" pInputText>\n                            <div class=\"alert alert-danger\" *ngIf=\"personalForm.submitted && identificationNumber.invalid\">*Required</div>\n                        </div>\n                    </div>\n\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"highestEducation\">\n                              {{lookupSvc.txt('highest_education_txt')}}</label>  \n                            <div class=\"group selectOtn\"> \n                                <select class=\"form-control\" required name=\"highestEducation\" #highestEducation=\"ngModel\" [(ngModel)]=\"personal.highestEducation\" required=\"true\">\n                                     <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select education</option>\n                                    <option class=\"option\"\n                                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrEducation')\"\n                                        [ngValue]=\"g.id\" >{{g.name}}</option>\n                                </select>\n                            </div>\n                            <div class=\"alert alert-danger\" *ngIf=\"personalForm.submitted && highestEducation.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"dob\">\n                             {{lookupSvc.txt('dob_txt')}}</label>  \n                       <!--        <input type=\"date\" \n                                     id=\"dob\" \n                                     name=\"dob\" \n                                     #dob=\"ngModel\"\n                                     required\n                                     [(ngModel)]=\"personal.dob\"> -->\n                                     <p-calendar  id=\"dob\" \n                                     name=\"dob\" \n                                     #dob=\"ngModel\"\n                                     required [(ngModel)]=\"personal.dob\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" placeholder=\"YYYY/MM/DD\"></p-calendar>\n                            <div class=\"alert alert-danger\" *ngIf=\"personalForm.submitted && dob.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-xs-12 col-sm-6'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"dobPlace\">{{lookupSvc.txt('pob_country_txt')}}</label>\n                                <div class=\"group selectOtn\"> \n                                    <select class=\"form-control\" required name=\"dobPlace\" #dobPlace=\"ngModel\" [(ngModel)]=\"personal.dobPlace\" required=\"true\">\n                                         <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select country</option>\n                                        <option class=\"option\"\n                                            *ngFor=\"let g of lookupSvc.getAttributeValues('attrCountry')\"\n                                            [ngValue]=\"g.id\" >{{g.name}}</option>\n                                    </select>\n                                </div>\n                            <div class=\"alert alert-danger\" \n                                  *ngIf=\"personalForm.submitted && dobPlace.invalid\">*Required</div>\n                        </div>\n                    </div>\n                    <div class='col-md-12'>\n                        <div class=\"form-group\">\n                            <label class=\"control-label\" for=\"address\"> {{lookupSvc.txt('address_txt')}}</label>\n                              <textarea rows=\"3\" id=\"address\" #address=\"ngModel\" cols=\"30\" name=\"address\" [(ngModel)]=\"personal.address\" required=\"true\" autoResize=\"autoResize\" style=\"resize: none;width:100%;padding:10px\" placeholder=\" {{lookupSvc.txt('address_txt')}}\"></textarea>\n                            <div class=\"alert alert-danger\" \n                                  *ngIf=\"personalForm.submitted && address.invalid\">*Required</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"control-label\" for=\"email\" style=\"margin-right: 35px\">{{lookupSvc.txt('permanent_resident_txt')}}</label>\n                    <div class=\"mr-2\" style=\"display: inline-block;\">\n                        <p-radioButton name=\"residence\" value=\"1\" label=\"Yes\" [(ngModel)]=\"personal.isPermanentAddress\">\n                        </p-radioButton> \n                    </div>\n                   <div class=\"mr-2\" style=\"display: inline-block;\">\n                        <p-radioButton name=\"residence\" value=\"0\" [(ngModel)]=\"personal.isPermanentAddress\" label=\"No\">\n                        </p-radioButton> \n                   </div>\n \n                </div>\n                <div class=\"form-group text-center\">\n                    <button class=\"primary\"  (click)=\"goToNext(personalForm)\"> Next <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/select-account/select-account.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/select-account/select-account.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #selectAccountForm=\"ngForm\" class=\"editForm\" novalidate>\n    <div class=\"tab-pane active\">\n        <h4 class=\"head text-center\">{{title}}</h4>\n        <br/>\n        <div class='row'>\n            <div class='col-md-12'>\n              <div class=\"row\">\n                 <div class='col-md-12'>\n                  <div class=\"form-group\">\n                       <label class=\"control-label\" for=\"securitiesAccount\">\n                     Securities account</label> \n                     <p-checkbox name=\"securitiesAccount\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrSecuritiesAccount')\" \n                     [value]=\"item.id\" [label]=\"item.name\" [(ngModel)]=\"selectedSecuritiesAccount\" (onChange)=\"selectAccount.securitiesAccount=selectedSecuritiesAccount.toString()\" ></p-checkbox>\n                    <div class=\"alert alert-danger\" *ngIf=\"selectAccountForm.submitted && selectedSecuritiesAccount.length==0\">*Required</div>\n                   </div>\n                </div>\n              </div>\n                <div class=\"row\">\n                    <div class='col-md-12'>\n                        <div class=\"form-group\">\n                             <label class=\"control-label\" for=\"fundAccount\">\n                             Fund account</label> \n                              <p-checkbox name=\"fundAccount\" *ngFor=\"let item of lookupSvc.getAttributeValues('attrFoundAccount')\" \n                               [value]=\"item.id\" [label]=\"item.name\" [(ngModel)]=\"selectedFundAccount\" (onChange)=\"selectAccount.fundAccount=selectedFundAccount.toString()\"></p-checkbox>\n                            <div class=\"alert alert-danger\" *ngIf=\"selectAccountForm.submitted && selectedFundAccount.length==0\">*Required</div>\n                        </div>\n                    </div>\n                </div>\n                  <div class=\"row\" *ngIf=\"showSaveErrored\">\n                      <div class='col-md-12'>\n                          <div class=\"form-group\">\n                           <div class=\"alert alert-danger\">\n                              <div *ngIf=\"errors.length > 0 then errorList else errorGeneric\"></div>\n\n                              <ng-template #errorList>\n                                  <ul>\n                                      <li *ngFor=\"let error of errors\">{{error}}</li>\n                                  </ul>\n                              </ng-template>\n\n                              <ng-template #errorGeneric>\n                                  <li *ngFor=\"let error of errors\">{{error}}</li>\n                              </ng-template>\n                          </div>\n                  </div>\n                </div>\n              </div>\n                <div class=\"form-group text-center\">\n                   <button class=\"primary actionnext\" style=\"width: 50%\" (click)=\"goToPrevious(selectAccountForm)\"> <span  class=\"glyphicon glyphicon-arrow-left\"></span> Previous</button>\n                    <button class=\"primary\"  (click)=\"submitForm(selectAccountForm)\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./src/finance-account-opening/account/cash/cash-account-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/cash-account-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CashAccountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAccountFormComponent", function() { return CashAccountFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/formData.service */ "./src/finance-account-opening/account/cash/data/formData.service.ts");
/* harmony import */ var _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/loading-response-progress.service */ "./src/shared/services/loading-response-progress.service.ts");




var CashAccountFormComponent = /** @class */ (function () {
    function CashAccountFormComponent(formDataService, responseProgress) {
        var _this = this;
        this.formDataService = formDataService;
        this.responseProgress = responseProgress;
        this.title = 'Multi-Step Wizard';
        this.isResponseLoaded = true;
        this.responseProgressSub = this.responseProgress.progressResponse$.subscribe(function (res) {
            _this.isResponseLoaded = res;
        });
    }
    CashAccountFormComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    };
    CashAccountFormComponent.prototype.ngOnDestroy = function () {
        this.responseProgressSub.unsubscribe();
    };
    CashAccountFormComponent.ctorParameters = function () { return [
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"] },
        { type: _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_3__["ProgressLoadingService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CashAccountFormComponent.prototype, "formData", void 0);
    CashAccountFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'multi-step-wizard-app',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-account-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/cash-account-form.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../style.less */ "./src/finance-account-opening/account/style.less")).default]
        })
    ], CashAccountFormComponent);
    return CashAccountFormComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/cash-account-form.module.ts":
/*!******************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/cash-account-form.module.ts ***!
  \******************************************************************************/
/*! exports provided: CashAccountFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAccountFormModule", function() { return CashAccountFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/finance-account-opening/account/cash/navbar/navbar.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./personal/personal.component */ "./src/finance-account-opening/account/cash/personal/personal.component.ts");
/* harmony import */ var _employment_status_employment_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employment-status/employment-status.component */ "./src/finance-account-opening/account/cash/employment-status/employment-status.component.ts");
/* harmony import */ var _financial_investment_status_financial_investment_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./financial-investment-status/financial-investment-status.component */ "./src/finance-account-opening/account/cash/financial-investment-status/financial-investment-status.component.ts");
/* harmony import */ var _other_disclosure_other_disclosure_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./other-disclosure/other-disclosure.component */ "./src/finance-account-opening/account/cash/other-disclosure/other-disclosure.component.ts");
/* harmony import */ var _select_account_select_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select-account/select-account.component */ "./src/finance-account-opening/account/cash/select-account/select-account.component.ts");
/* harmony import */ var _cash_account_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cash-account-form.component */ "./src/finance-account-opening/account/cash/cash-account-form.component.ts");
/* harmony import */ var _cash_account_form_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cash-account-form.routing */ "./src/finance-account-opening/account/cash/cash-account-form.routing.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/formData.service */ "./src/finance-account-opening/account/cash/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/finance-account-opening/account/cash/workflow/workflow.service.ts");
/* harmony import */ var _cash_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cash-account.service */ "./src/finance-account-opening/account/cash/cash-account.service.ts");






/* Feature Components */






/* Routing Module */




var CashAccountFormModule = /** @class */ (function () {
    function CashAccountFormModule() {
    }
    CashAccountFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _cash_account_form_routing__WEBPACK_IMPORTED_MODULE_12__["CashAccountFormRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _cash_account_form_component__WEBPACK_IMPORTED_MODULE_11__["CashAccountFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _personal_personal_component__WEBPACK_IMPORTED_MODULE_6__["PersonalComponent"],
                _employment_status_employment_status_component__WEBPACK_IMPORTED_MODULE_7__["EmploymentStatusComponent"],
                _financial_investment_status_financial_investment_status_component__WEBPACK_IMPORTED_MODULE_8__["FinancialInvestmentComponent"],
                _other_disclosure_other_disclosure_component__WEBPACK_IMPORTED_MODULE_9__["OtherDisclosureComponent"],
                _select_account_select_account_component__WEBPACK_IMPORTED_MODULE_10__["SelectAccountComponent"]
            ],
            providers: [
                _data_formData_service__WEBPACK_IMPORTED_MODULE_13__["FormDataService"],
                _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_14__["WorkflowService"],
                _cash_account_service__WEBPACK_IMPORTED_MODULE_15__["CashAccountService"]
            ]
        })
    ], CashAccountFormModule);
    return CashAccountFormModule;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/cash-account-form.routing.ts":
/*!*******************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/cash-account-form.routing.ts ***!
  \*******************************************************************************/
/*! exports provided: appRoutes, CashAccountFormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAccountFormRoutingModule", function() { return CashAccountFormRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal/personal.component */ "./src/finance-account-opening/account/cash/personal/personal.component.ts");
/* harmony import */ var _employment_status_employment_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employment-status/employment-status.component */ "./src/finance-account-opening/account/cash/employment-status/employment-status.component.ts");
/* harmony import */ var _financial_investment_status_financial_investment_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./financial-investment-status/financial-investment-status.component */ "./src/finance-account-opening/account/cash/financial-investment-status/financial-investment-status.component.ts");
/* harmony import */ var _other_disclosure_other_disclosure_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./other-disclosure/other-disclosure.component */ "./src/finance-account-opening/account/cash/other-disclosure/other-disclosure.component.ts");
/* harmony import */ var _select_account_select_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-account/select-account.component */ "./src/finance-account-opening/account/cash/select-account/select-account.component.ts");
/* harmony import */ var _cash_account_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cash-account-form.component */ "./src/finance-account-opening/account/cash/cash-account-form.component.ts");
/* harmony import */ var _workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow/workflow-guard.service */ "./src/finance-account-opening/account/cash/workflow/workflow-guard.service.ts");










var appRoutes = [
    {
        path: '',
        component: _cash_account_form_component__WEBPACK_IMPORTED_MODULE_8__["CashAccountFormComponent"],
        children: [{
                path: '',
                children: [
                    { path: '', redirectTo: 'personal', pathMatch: 'full' },
                    { path: 'personal', component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__["PersonalComponent"] },
                    { path: 'employmentStatus', component: _employment_status_employment_status_component__WEBPACK_IMPORTED_MODULE_4__["EmploymentStatusComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowGuard"]] },
                    { path: 'financialAndInvestmentStatus', component: _financial_investment_status_financial_investment_status_component__WEBPACK_IMPORTED_MODULE_5__["FinancialInvestmentComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowGuard"]] },
                    { path: 'otherDisclosure', component: _other_disclosure_other_disclosure_component__WEBPACK_IMPORTED_MODULE_6__["OtherDisclosureComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowGuard"]] },
                    { path: 'selectAccount', component: _select_account_select_account_component__WEBPACK_IMPORTED_MODULE_7__["SelectAccountComponent"], canActivate: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowGuard"]] }
                ]
            }]
    }
];
var CashAccountFormRoutingModule = /** @class */ (function () {
    function CashAccountFormRoutingModule() {
    }
    CashAccountFormRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_workflow_workflow_guard_service__WEBPACK_IMPORTED_MODULE_9__["WorkflowGuard"]]
        })
    ], CashAccountFormRoutingModule);
    return CashAccountFormRoutingModule;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/cash-account.service.ts":
/*!**************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/cash-account.service.ts ***!
  \**************************************************************************/
/*! exports provided: CashAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAccountService", function() { return CashAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/SiteApiResponse */ "./src/shared/services/SiteApiResponse.ts");





var CashAccountService = /** @class */ (function () {
    function CashAccountService(http) {
        this.http = http;
        this.respUtils = new _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_4__["SiteApiResponseUtilities"]();
    }
    CashAccountService.prototype.accountOpening = function (personal, employmentStatus, financialAndInvestmentStatus, otherDisclosure, selectAccount) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.client_account.openAccount;
        var body = new URLSearchParams();
        body.set('account_type', 'cash');
        //personal info
        body.set('name_english', personal.englishName);
        body.set('name_chinese', personal.chineseName);
        body.set('gender_id', personal.gender.toString());
        body.set('email', personal.email);
        body.set('dob', personal.dob);
        body.set('place_of_birth_country_id', personal.dobPlace.toString());
        body.set('highest_education_id', personal.highestEducation.toString());
        body.set('identification_country_id', personal.country.toString());
        body.set('address', personal.address);
        body.set('identification_number', personal.identificationNumber.toString());
        body.set('is_permanent_resident', personal.isPermanentAddress.toString());
        //employment status
        body.set('professional_status_id', employmentStatus.professionalStatus.toString());
        body.set('company_name', employmentStatus.companyName);
        body.set('career_position', employmentStatus.carrerPosition);
        body.set('business_nature_id', employmentStatus.bussinessNature.toString());
        //Financial and Investment experience
        body.set('annual_income_id', financialAndInvestmentStatus.annualIncome.toString());
        body.set('total_net_asset_value_id', financialAndInvestmentStatus.totalNetAssets.toString());
        body.set('sources_of_found_ids', financialAndInvestmentStatus.sourceOfFunds.toString());
        body.set('investment_knowledge_id', financialAndInvestmentStatus.investmentKnowledge.toString());
        body.set('investment_objective_id', financialAndInvestmentStatus.investmentObjective.toString());
        body.set('frequency_of_transactions_per_month_id', financialAndInvestmentStatus.frequencyOfTransaction.toString());
        body.set('risk_tolerance_id', financialAndInvestmentStatus.riskTolerance.toString());
        body.set('stock_experience_id', financialAndInvestmentStatus.stock.toString());
        body.set('structured_product_experience_id', financialAndInvestmentStatus.structuredProduct.toString());
        body.set('foreign_currency_gold_experience_id', financialAndInvestmentStatus.foreignCurrency.toString());
        body.set('warrants_experience_id', financialAndInvestmentStatus.warrants.toString());
        body.set('futures_options_experience_id', financialAndInvestmentStatus.futures.toString());
        body.set('other_experience_id', financialAndInvestmentStatus.other.toString());
        body.set('derivatives_trading_id', financialAndInvestmentStatus.derivativesTrading.toString());
        //other disclosure
        body.set('other_information_disclosure_ids', otherDisclosure.otherInformation.toString());
        body.set('tax_information_id', otherDisclosure.taxInformation.toString());
        body.set('tax_country_id', otherDisclosure.taxCountry.toString());
        body.set('tax_id', otherDisclosure.taxId);
        body.set('w8ben_country_id', otherDisclosure.w8benCountry.toString());
        //select account
        body.set('securities_account_ids', selectAccount.securitiesAccount);
        body.set('found_account_ids', selectAccount.fundAccount);
        return this.http
            .post(url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .map(function (r) { return r; })
            .catch(function (r) { return _this.respUtils.onServiceError(r); });
    };
    CashAccountService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    CashAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CashAccountService);
    return CashAccountService;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/data/formData.model.ts":
/*!*************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/data/formData.model.ts ***!
  \*************************************************************************/
/*! exports provided: FormData, Personal, EmploymentStatus, FinancialAndInvestment, OtherDisclosure, SelectAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personal", function() { return Personal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentStatus", function() { return EmploymentStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialAndInvestment", function() { return FinancialAndInvestment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDisclosure", function() { return OtherDisclosure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAccount", function() { return SelectAccount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FormData = /** @class */ (function () {
    function FormData() {
        //personal info (step: 1)
        this.chineseName = '';
        this.englishName = '';
        this.country = 1;
        this.identificationNumber = '';
        this.gender = 1;
        this.email = '';
        this.highestEducation = 1;
        this.dob = '';
        this.dobPlace = 1;
        this.isPermanentAddress = 1; //default
        //employment nature (step: 2)
        this.professionalStatus = 1;
        this.companyName = '';
        this.carrerPosition = '';
        this.bussinessNature = 1;
        //Financial and Investment status (step: 3)
        //financial
        this.annualIncome = 1;
        this.totalNetAssets = 1;
        this.sourceOfFunds = 1;
        this.investmentKnowledge = 1;
        this.investmentObjective = 1;
        this.frequencyOfTransaction = 1;
        this.riskTolerance = 1;
        //investment
        this.stock = 1;
        this.structuredProduct = 1;
        this.foreignCurrency = 1;
        this.warrants = 1;
        this.futures = 1;
        this.other = 1;
        this.derivativesTrading = 1;
        //other disclosure (step: 4)
        this.otherInformation = '';
        this.taxInformation = 1;
        this.taxCountry = 1;
        this.taxId = '';
        this.w8benCountry = 1;
        //select account (step: 5)
        this.securitiesAccount = '';
        this.fundAccount = '';
    }
    FormData.prototype.clear = function () {
        this.chineseName = '';
        this.country = 1;
        this.isPermanentAddress = 1;
        this.englishName = '';
        this.gender = 1;
        this.email = '';
        this.highestEducation = 1;
        this.dob = '';
        this.dobPlace = 1;
        this.address = '';
        this.identificationNumber = '';
        this.professionalStatus = 1;
        this.companyName = '';
        this.carrerPosition = '';
        this.bussinessNature = 1;
        this.annualIncome = 1;
        this.totalNetAssets = 1;
        this.sourceOfFunds = 1;
        this.investmentKnowledge = 1;
        this.investmentObjective = 1;
        this.frequencyOfTransaction = 1;
        this.riskTolerance = 1;
        this.stock = 1;
        this.structuredProduct = 1;
        this.foreignCurrency = 1;
        this.warrants = 1;
        this.futures = 1;
        this.other = 1;
        this.derivativesTrading = 1;
        this.otherInformation = '';
        this.taxInformation = 1;
        this.taxCountry = 1;
        this.taxId = '';
        this.w8benCountry = 1;
        this.securitiesAccount = '';
        this.fundAccount = '';
    };
    return FormData;
}());

//step: 1
var Personal = /** @class */ (function () {
    function Personal() {
        this.chineseName = '';
        this.englishName = '';
        this.country = 1;
        this.identificationNumber = '';
        this.gender = 1;
        this.email = '';
        this.highestEducation = 1;
        this.dob = '';
        this.dobPlace = 1;
        this.isPermanentAddress = 1; //default
    }
    return Personal;
}());

//step: 2
var EmploymentStatus = /** @class */ (function () {
    function EmploymentStatus() {
        this.professionalStatus = 1;
        this.companyName = '';
        this.carrerPosition = '';
        this.bussinessNature = 1;
    }
    return EmploymentStatus;
}());

//step: 3
var FinancialAndInvestment = /** @class */ (function () {
    function FinancialAndInvestment() {
        //financial
        this.annualIncome = 1;
        this.totalNetAssets = 1;
        this.sourceOfFunds = 1;
        this.investmentKnowledge = 1;
        this.investmentObjective = 1;
        this.frequencyOfTransaction = 1;
        this.riskTolerance = 1;
        //investment
        this.stock = 1;
        this.structuredProduct = 1;
        this.foreignCurrency = 1;
        this.warrants = 1;
        this.futures = 1;
        this.other = 1;
        this.derivativesTrading = 1;
    }
    return FinancialAndInvestment;
}());

//step: 4
var OtherDisclosure = /** @class */ (function () {
    function OtherDisclosure() {
        this.otherInformation = '';
        this.taxInformation = 1;
        this.taxCountry = 1;
        this.taxId = '';
        this.w8benCountry = 1;
    }
    return OtherDisclosure;
}());

//step: 5
var SelectAccount = /** @class */ (function () {
    function SelectAccount() {
        this.securitiesAccount = '';
        this.fundAccount = '';
    }
    return SelectAccount;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/data/formData.service.ts":
/*!***************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/data/formData.service.ts ***!
  \***************************************************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formData.model */ "./src/finance-account-opening/account/cash/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/finance-account-opening/account/cash/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/finance-account-opening/account/cash/workflow/workflow.model.ts");





var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_2__["FormData"]();
        this.isPersonalFormValid = false;
        this.isEmploymentStatusFormValid = false;
        this.isFinancialAndInvestmentFormValid = false;
        this.isDisclosureFormValid = false;
        this.isAccountSelectionFormValid = false;
        this.isUploadFormValid = false;
    }
    //Personal Information
    FormDataService.prototype.getPersonal = function () {
        var personal = {
            chineseName: this.formData.chineseName,
            englishName: this.formData.englishName,
            country: this.formData.country,
            identificationNumber: this.formData.identificationNumber,
            gender: this.formData.gender,
            email: this.formData.email,
            highestEducation: this.formData.highestEducation,
            dob: this.formData.dob,
            dobPlace: this.formData.dobPlace,
            address: this.formData.address,
            isPermanentAddress: this.formData.isPermanentAddress
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        this.isPersonalFormValid = true;
        this.formData.chineseName = data.chineseName;
        this.formData.country = data.country;
        this.formData.isPermanentAddress = data.isPermanentAddress;
        this.formData.englishName = data.englishName;
        this.formData.identificationNumber = data.identificationNumber;
        this.formData.gender = data.gender;
        this.formData.email = data.email;
        this.formData.highestEducation = data.highestEducation;
        this.formData.dob = data.dob;
        this.formData.dobPlace = data.dobPlace;
        this.formData.address = data.address;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].personal);
    };
    //Employment status
    FormDataService.prototype.getEmploymentStatus = function () {
        var employmentStatus = {
            professionalStatus: this.formData.professionalStatus,
            companyName: this.formData.companyName,
            carrerPosition: this.formData.carrerPosition,
            bussinessNature: this.formData.bussinessNature,
        };
        return employmentStatus;
    };
    FormDataService.prototype.setEmploymentStatus = function (data) {
        this.isEmploymentStatusFormValid = true;
        this.formData.professionalStatus = data.professionalStatus;
        this.formData.companyName = data.companyName;
        this.formData.carrerPosition = data.carrerPosition;
        this.formData.bussinessNature = data.bussinessNature;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].employmentStatus);
    };
    //Financial and Investment experties
    FormDataService.prototype.getFinancialAndInvestmentStatus = function () {
        var investmentExperience = {
            annualIncome: this.formData.annualIncome,
            totalNetAssets: this.formData.totalNetAssets,
            sourceOfFunds: this.formData.sourceOfFunds,
            investmentKnowledge: this.formData.investmentKnowledge,
            investmentObjective: this.formData.investmentObjective,
            frequencyOfTransaction: this.formData.frequencyOfTransaction,
            riskTolerance: this.formData.riskTolerance,
            stock: this.formData.stock,
            structuredProduct: this.formData.structuredProduct,
            foreignCurrency: this.formData.foreignCurrency,
            warrants: this.formData.warrants,
            futures: this.formData.futures,
            other: this.formData.other,
            derivativesTrading: this.formData.derivativesTrading
        };
        return investmentExperience;
    };
    FormDataService.prototype.setFinancialAndInvestmentStatus = function (data) {
        this.isFinancialAndInvestmentFormValid = true;
        this.formData.annualIncome = data.annualIncome;
        this.formData.totalNetAssets = data.totalNetAssets;
        this.formData.sourceOfFunds = data.sourceOfFunds;
        this.formData.investmentKnowledge = data.investmentKnowledge;
        this.formData.investmentObjective = data.investmentObjective;
        this.formData.frequencyOfTransaction = data.frequencyOfTransaction;
        this.formData.riskTolerance = data.riskTolerance;
        this.formData.stock = data.stock;
        this.formData.structuredProduct = data.structuredProduct;
        this.formData.foreignCurrency = data.foreignCurrency;
        this.formData.warrants = data.warrants;
        this.formData.futures = data.futures;
        this.formData.other = data.other;
        this.formData.derivativesTrading = data.derivativesTrading;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].financialAndInvestmentStatus);
    };
    //Disclosure
    FormDataService.prototype.getOtherDisclosure = function () {
        var otherDisclosure = {
            otherInformation: this.formData.otherInformation,
            taxInformation: this.formData.taxInformation,
            taxCountry: this.formData.taxCountry,
            taxId: this.formData.taxId,
            w8benCountry: this.formData.w8benCountry
        };
        return otherDisclosure;
    };
    FormDataService.prototype.setOtherDisclosure = function (data) {
        this.isDisclosureFormValid = true;
        this.formData.otherInformation = data.otherInformation;
        this.formData.taxInformation = data.taxInformation;
        this.formData.taxCountry = data.taxCountry;
        this.formData.taxId = data.taxId;
        this.formData.w8benCountry = data.w8benCountry;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].otherDisclosure);
    };
    //Select Account
    FormDataService.prototype.getSelectAccount = function () {
        var selectAccount = {
            securitiesAccount: this.formData.securitiesAccount,
            fundAccount: this.formData.fundAccount
        };
        return selectAccount;
    };
    FormDataService.prototype.setSelectAccount = function (data) {
        this.isAccountSelectionFormValid = true;
        this.formData.securitiesAccount = data.securitiesAccount;
        this.formData.fundAccount = data.fundAccount;
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_4__["STEPS"].selectAccount);
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
        this.isPersonalFormValid = false;
        this.isEmploymentStatusFormValid = false;
        this.isFinancialAndInvestmentFormValid = false;
        this.isDisclosureFormValid = false;
        this.isAccountSelectionFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isEmploymentStatusFormValid &&
            this.isFinancialAndInvestmentFormValid &&
            this.isDisclosureFormValid &&
            this.isAccountSelectionFormValid;
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

/***/ "./src/finance-account-opening/account/cash/employment-status/employment-status.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/employment-status/employment-status.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: EmploymentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmploymentStatusComponent", function() { return EmploymentStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/account/cash/data/formData.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");





var EmploymentStatusComponent = /** @class */ (function () {
    function EmploymentStatusComponent(router, route, lookupSvc, formDataService) {
        this.router = router;
        this.route = route;
        this.lookupSvc = lookupSvc;
        this.formDataService = formDataService;
        this.title = 'Employment Status';
    }
    EmploymentStatusComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 200);
        this.employmentStatus = this.formDataService.getEmploymentStatus();
    };
    EmploymentStatusComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formDataService.setEmploymentStatus(this.employmentStatus);
        return true;
    };
    EmploymentStatusComponent.prototype.goToPrevious = function (form) {
        //if (this.save(form)) {
        // Navigate to the personal page
        this.router.navigate(['../personal'], { relativeTo: this.route });
        //}
    };
    EmploymentStatusComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the next page
            this.router.navigate(['../financialAndInvestmentStatus'], { relativeTo: this.route });
        }
    };
    EmploymentStatusComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }
    ]; };
    EmploymentStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'employment-status',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employment-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/employment-status/employment-status.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/account/style.less")).default]
        })
    ], EmploymentStatusComponent);
    return EmploymentStatusComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/financial-investment-status/financial-investment-status.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/financial-investment-status/financial-investment-status.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: FinancialInvestmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialInvestmentComponent", function() { return FinancialInvestmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/account/cash/data/formData.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");





var FinancialInvestmentComponent = /** @class */ (function () {
    function FinancialInvestmentComponent(router, route, lookupSvc, formDataService) {
        this.router = router;
        this.route = route;
        this.lookupSvc = lookupSvc;
        this.formDataService = formDataService;
        this.title = 'Financial and investment status';
        this.sourceOfFunds = [];
    }
    FinancialInvestmentComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 200);
        this.investmentExperience = this.formDataService.getFinancialAndInvestmentStatus();
    };
    FinancialInvestmentComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        if (this.sourceOfFunds.length == 0) {
            return false;
        }
        this.formDataService.setFinancialAndInvestmentStatus(this.investmentExperience);
        return true;
    };
    FinancialInvestmentComponent.prototype.goToPrevious = function (form) {
        //if (this.save(form)) {
        // Navigate to the prev page
        this.router.navigate(['../employmentStatus'], { relativeTo: this.route });
        //}
    };
    FinancialInvestmentComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the next page
            this.router.navigate(['../otherDisclosure'], { relativeTo: this.route });
        }
    };
    FinancialInvestmentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }
    ]; };
    FinancialInvestmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'financial-investment-status',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./financial-investment-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/financial-investment-status/financial-investment-status.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/account/style.less")).default]
        })
    ], FinancialInvestmentComponent);
    return FinancialInvestmentComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/navbar/navbar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/navbar/navbar.component.ts ***!
  \*****************************************************************************/
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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/navbar/navbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/account/style.less")).default]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/other-disclosure/other-disclosure.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/other-disclosure/other-disclosure.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: OtherDisclosureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherDisclosureComponent", function() { return OtherDisclosureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/account/cash/data/formData.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");





var OtherDisclosureComponent = /** @class */ (function () {
    function OtherDisclosureComponent(router, route, lookupSvc, formDataService) {
        this.router = router;
        this.route = route;
        this.lookupSvc = lookupSvc;
        this.formDataService = formDataService;
        this.title = 'Other Information';
        this.selectedDisclosureValues = [];
    }
    OtherDisclosureComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 200);
        this.otherDisclosure = this.formDataService.getOtherDisclosure();
    };
    OtherDisclosureComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        if (this.selectedDisclosureValues.length == 0) {
            return false;
        }
        this.formDataService.setOtherDisclosure(this.otherDisclosure);
        return true;
    };
    OtherDisclosureComponent.prototype.goToPrevious = function (form) {
        //if (this.save(form)) {
        // Navigate to the prev page
        this.router.navigate(['../financialAndInvestmentStatus'], { relativeTo: this.route });
        //}
    };
    OtherDisclosureComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the next page
            this.router.navigate(['../selectAccount'], { relativeTo: this.route });
        }
    };
    OtherDisclosureComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] }
    ]; };
    OtherDisclosureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'other-disclosure',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./other-disclosure.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/other-disclosure/other-disclosure.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/account/style.less")).default]
        })
    ], OtherDisclosureComponent);
    return OtherDisclosureComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/personal/personal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/personal/personal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/account/cash/data/formData.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/dialogs/error-dialog/models */ "./src/shared/dialogs/error-dialog/models.ts");








var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(router, route, lookupSvc, formDataService, profileSvc, errorDialogSvc) {
        this.router = router;
        this.route = route;
        this.lookupSvc = lookupSvc;
        this.formDataService = formDataService;
        this.profileSvc = profileSvc;
        this.errorDialogSvc = errorDialogSvc;
        this.title = 'Personal Information';
    }
    PersonalComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 200);
        this.personal = this.formDataService.getPersonal();
        if (this.profileSvc.hasCashAccount) {
            var err = new _shared_dialogs_error_dialog_models__WEBPACK_IMPORTED_MODULE_7__["ErrorDialog"]();
            err.title = 'Error';
            err.message = "Oops! Cash account aleady exist.";
            err.isPublic = false;
            this.errorDialogSvc.showDialog(err);
            return false;
        }
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
            this.router.navigate(['../employmentStatus'], { relativeTo: this.route });
        }
    };
    PersonalComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_3__["FormDataService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ErrorDialogService"] }
    ]; };
    PersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'personal',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/personal/personal.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/account/style.less")).default]
        })
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/select-account/select-account.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/select-account/select-account.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectAccountComponent", function() { return SelectAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/SiteApiResponse */ "./src/shared/services/SiteApiResponse.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/formData.service */ "./src/finance-account-opening/account/cash/data/formData.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");
/* harmony import */ var _cash_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cash-account.service */ "./src/finance-account-opening/account/cash/cash-account.service.ts");
/* harmony import */ var _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/loading-response-progress.service */ "./src/shared/services/loading-response-progress.service.ts");
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_success_dialog_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/dialogs/success-dialog/models */ "./src/shared/dialogs/success-dialog/models.ts");










var SelectAccountComponent = /** @class */ (function () {
    function SelectAccountComponent(router, route, lookupSvc, formDataService, cashAccountSvc, responseProgress, successDialogSvc) {
        this.router = router;
        this.route = route;
        this.lookupSvc = lookupSvc;
        this.formDataService = formDataService;
        this.cashAccountSvc = cashAccountSvc;
        this.responseProgress = responseProgress;
        this.successDialogSvc = successDialogSvc;
        this.title = 'Select an account to open';
        this.isFormValid = false;
        this.selectedSecuritiesAccount = [];
        this.selectedFundAccount = [];
        this.errors = [];
        this.respUtils = new _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_3__["SiteApiResponseUtilities"]();
    }
    SelectAccountComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 200);
        this.selectAccount = this.formDataService.getSelectAccount();
        console.log('EmploymentStatus feature loaded!');
    };
    SelectAccountComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        if (this.selectedSecuritiesAccount.length == 0 || this.selectedFundAccount.length == 0) {
            return false;
        }
        this.formDataService.setSelectAccount(this.selectAccount);
        return true;
    };
    SelectAccountComponent.prototype.goToPrevious = function (form) {
        //if (this.save(form)) {
        // Navigate to the prev page
        this.router.navigate(['../otherDisclosure'], { relativeTo: this.route });
        //}
    };
    SelectAccountComponent.prototype.submitForm = function (form) {
        var _this = this;
        if (this.save(form)) {
            this.personal = this.formDataService.getPersonal();
            this.employmentStatus = this.formDataService.getEmploymentStatus();
            this.financialAndInvestmentStatus = this.formDataService.getFinancialAndInvestmentStatus();
            this.otherDisclosure = this.formDataService.getOtherDisclosure();
            this.selectAccount = this.formDataService.getSelectAccount();
            this.isFormValid = this.formDataService.isFormValid();
            if (this.isFormValid) {
                this.responseProgress.progressResponse(true);
                this.cashAccountSvc.
                    accountOpening(this.personal, this.employmentStatus, this.financialAndInvestmentStatus, this.otherDisclosure, this.selectAccount).subscribe(function (res) {
                    console.log(res);
                    _this.onSaveSuccess();
                }, function (err) {
                    console.log(err);
                    _this.onSaveError(err);
                });
            }
        }
    };
    SelectAccountComponent.prototype.onSaveSuccess = function () {
        var successDialog = new _shared_dialogs_success_dialog_models__WEBPACK_IMPORTED_MODULE_9__["SuccessDialog"]();
        this.showSaveErrored = false;
        this.errors = [];
        this.responseProgress.progressResponse(false);
        successDialog.title = 'Success';
        successDialog.message = 'Congratulation! Your document submitted successfully. Under review';
        successDialog.isPublic = false;
        this.successDialogSvc.showDialog(successDialog);
        //this.router.navigate(['../../'],{relativeTo: this.route});
    };
    SelectAccountComponent.prototype.onSaveError = function (error) {
        if (error === void 0) { error = null; }
        if (typeof (error) === "string") {
            this.errors.push(error);
        }
        else {
            if (error) {
                this.errors = this.respUtils.getErrors(error);
            }
        }
        this.responseProgress.progressResponse(false);
        this.showSaveErrored = true;
    };
    SelectAccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
        { type: _data_formData_service__WEBPACK_IMPORTED_MODULE_4__["FormDataService"] },
        { type: _cash_account_service__WEBPACK_IMPORTED_MODULE_6__["CashAccountService"] },
        { type: _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_7__["ProgressLoadingService"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["SuccessDialogService"] }
    ]; };
    SelectAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'select-account',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/finance-account-opening/account/cash/select-account/select-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../style.less */ "./src/finance-account-opening/account/style.less")).default]
        })
    ], SelectAccountComponent);
    return SelectAccountComponent;
}());



/***/ }),

/***/ "./src/finance-account-opening/account/cash/workflow/workflow-guard.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/workflow/workflow-guard.service.ts ***!
  \*************************************************************************************/
/*! exports provided: WorkflowGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowGuard", function() { return WorkflowGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./workflow.service */ "./src/finance-account-opening/account/cash/workflow/workflow.service.ts");




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
            var url = "profile/" + this.profileSysId + "/account-opening/cash/" + firstPath;
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

/***/ "./src/finance-account-opening/account/cash/workflow/workflow.model.ts":
/*!*****************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/workflow/workflow.model.ts ***!
  \*****************************************************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var STEPS = {
    personal: 'personal',
    employmentStatus: 'employmentStatus',
    financialAndInvestmentStatus: 'financialAndInvestmentStatus',
    otherDisclosure: 'otherDisclosure',
    selectAccount: 'selectAccount'
};


/***/ }),

/***/ "./src/finance-account-opening/account/cash/workflow/workflow.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/finance-account-opening/account/cash/workflow/workflow.service.ts ***!
  \*******************************************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workflow.model */ "./src/finance-account-opening/account/cash/workflow/workflow.model.ts");



var WorkflowService = /** @class */ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].personal, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].employmentStatus, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].financialAndInvestmentStatus, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].otherDisclosure, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_2__["STEPS"].selectAccount, valid: false },
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



/***/ })

}]);
//# sourceMappingURL=finance-account-opening-account-cash-cash-account-form-module.js.map