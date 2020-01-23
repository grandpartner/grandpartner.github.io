(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">     \r\n          <p-card header=\"Deposit Fund\" styleClass=\"ui-card-shadow\">\r\n\t\t  <div>\t\r\n\t\t  <form class=\"custom\" #depositForm=\"ngForm\"  novalidate>\r\n\t\t  \t  <label for=\"bank\">Bank</label><br>\r\n\t            <div class=\"group selectOtn\"> \r\n\t                <select class=\"form-control\" required name=\"bank\" #bank=\"ngModel\" [(ngModel)]=\"deposit.bank\" required=\"true\">\r\n\t                     <option class=\"option\" value=\"0\" disabled=\"true\" selected=\"true\">Select country</option>\r\n\t                    <option class=\"option\"\r\n\t                        *ngFor=\"let g of lookupSvc.getAttributeValues('attrBank')\"\r\n\t                        [ngValue]=\"g.id\" >{{g.name}}</option>\r\n\t                </select>\r\n\t            </div>\r\n\t\t\t  <label for=\"currency\">Currency</label>\r\n\t\t\t  <input type=\"text\" \r\n\t\t\t         id=\"currency\" \r\n\t\t\t         name=\"currency\" \r\n\t\t\t         disabled=\"true\" \r\n\t\t\t         [(ngModel)]=\"deposit.currency\" \r\n\t\t\t         #currency=\"ngModel\" \r\n\t\t\t         placeholder=\"Currency\" \r\n\t\t\t         required />\r\n\r\n\t\t\t  <label for=\"amount\">Amount</label>\r\n\t\t\t  <input type=\"text\" \r\n\t\t\t         id=\"amount\" \r\n\t\t\t         name=\"amount\" \r\n\t\t\t         [(ngModel)]=\"deposit.amount\" \r\n\t\t\t         #amount=\"ngModel\"\r\n\t\t\t         placeholder=\"0.00\" \r\n\t\t\t         required  \r\n\t\t\t         appTwoDigitDecimaNumber />\r\n\r\n              <label for=\"dateTime\">Deposit time</label>\r\n\t\t\t  <input type=\"date\" \r\n\t\t\t         id=\"dateTime\" \r\n\t\t\t         name=\"dateTime\" \r\n\t\t\t         #dateTime=\"ngModel\"\r\n\t\t\t         required\r\n\t\t\t         [(ngModel)]=\"deposit.dateTime\">\r\n\r\n\r\n              <label for=\"dateTime\">Bank receipt </label>\r\n              <input type='file' required=\"true\" #fileInput (change)=\"onFileChanged($event);\" accept=\"image/*\" required=\"true\" />            \r\n\r\n              <textarea rows=\"5\" cols=\"30\" name=\"remark\" [(ngModel)]=\"deposit.remark\" autoResize=\"autoResize\" style=\"resize: none;width:100%;padding:10px\" placeholder=\"Remark\"></textarea>\r\n\r\n\r\n              <div class=\"alert alert-danger\" *ngIf=\"submitted && !deposit.doc\">*Bank receipt required!</div>\r\n\t\t\t  <button type=\"submit\" \r\n\t\t\t          class=\"primary\" \r\n\t\t\t          (click)=\"depositApply(depositForm)\"\r\n\t\t\t          >Request deposit</button>\r\n\r\n             <p-progressSpinner *ngIf=\"isApplying\" [style]=\"{width: '50px', height: '50px', position:'absolute'}\" strokeWidth=\"2\" fill=\"#EEEEEE\" animationDuration=\".8s\"></p-progressSpinner>\r\n\r\n\r\n\t\t\t</form>\r\n\r\n\t\t    </div>\r\n\t\t   </p-card>\r\n        </div>\r\n          <div class=\"col-md-7\">\r\n          <p-card subheader=\"Transactions\" styleClass=\"ui-card-shadow\">\r\n          \t<p class=\"loading\" *ngIf=\"isLoading\">Loading...</p>\r\n            <transaction-list *ngIf=\"!isLoading\" [transaction]=\"transaction\"></transaction-list>\r\n         </p-card>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/overview/profile-overview.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/overview/profile-overview.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-3 pr-0 pl-0\">\r\n          <div class=\"tab\">\r\n            <button class=\"tablinks\" \r\n                    id=\"defaultOpen\" \r\n                    (click)=\"isMarginAccount=true\" \r\n                    [class.active]=\"isMarginAccount\">Margin Account</button>\r\n            <button class=\"tablinks\"\r\n                    (click)=\"isMarginAccount=false\" \r\n                    [class.active]=\"!isMarginAccount\">Cash Account</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-9 pl-0 pr-0\">\r\n          <div *ngIf=\"isMarginAccount\">\r\n                <margin-account></margin-account>\r\n          </div>\r\n          <div *ngIf=\"!isMarginAccount\">\r\n                 <cash-account></cash-account>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-desktop.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-desktop.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<header id=\"profile-header-desktop\">\r\n    <img class=\"avatar\" src=\"../assets/images/avatar.png\" alt=\"aryan\" />\r\n    <div class=\"image-box__overlay\"></div>\r\n\r\n    <div class=\"who\">\r\n        <h1>{{profile.user.name_english}}</h1>\r\n        <small>{{profile.user.email}}</small>\r\n        <br>\r\n        <p-fieldset legend=\"Verified\">\r\n        <span class=\"verfication\"> Email </span> <span class=\"ij icon icon-x\"></span> \r\n        <span class=\"verfication\"> Mobile </span> <span class=\"ij icon icon-y\"></span> \r\n        <span class=\"verfication\"> Identity </span> <span class=\"ij icon icon-x\"></span> \r\n        <span class=\"verfication\"> Address </span> <span class=\"ij icon icon-y\"></span> \r\n       </p-fieldset>\r\n\r\n    </div>\r\n\r\n    <div class=\"misc\">\r\n        <label class=\"ind-score\">Annual Income</label>\r\n        <br>\r\n        <span  class=\"score {{size}}\"></span>\r\n\r\n        <ul  class=\"actions profile-score-section\">\r\n            <li >\r\n                <button  class=\"action contact\">Contact</button>\r\n            </li>\r\n            <li >\r\n                <button class=\"action about\" (click)=\"logout()\">Logout</button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</header>\r\n\r\n<nav id=\"profile-tabs\">\r\n    <ul>\r\n        <li><a routerLink=\"overview\" routerLinkActive=\"active\">Account Overview</a></li>\r\n        <li >\r\n        <div class=\"dropdown\">\r\n          <a class=\"pointer\">Fund related</a>\r\n            <div class=\"dropdown-content\">\r\n                <a routerLink=\"fund-deposit\">Deposit funds</a>\r\n                <a routerLink=\"fund-withdraw\">Withdraw funds</a>\r\n            </div>\r\n        </div>\r\n        </li>\r\n         <li >\r\n        <div class=\"dropdown\">\r\n          <a class=\"pointer\">Stock related</a>\r\n            <div class=\"dropdown-content\">\r\n                <a routerLink=\"transfer-to-stock\">Transfer to stock</a>\r\n                <a routerLink=\"stock-history\">Stock history</a>\r\n            </div>\r\n        </div>\r\n        </li>\r\n           <li >\r\n        <div class=\"dropdown\">\r\n          <a class=\"pointer\">Settings</a>\r\n            <div class=\"dropdown-content\">\r\n                <a routerLink=\"setting/profile-info\">Profile</a>\r\n                <a routerLink=\"setting/personal-info\">Personal Info</a>\r\n                <a routerLink=\"setting/password\">Change password</a>\r\n            </div>\r\n        </div>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-mobile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/profile-header-mobile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header id=\"profile-header-mobile\">\r\n    <nav>\r\n        <div class=\"dropdown mobile\">\r\n            <button class=\"dropbtn\" (click)=\"activeNav=true\">{{title}}</button>\r\n            <div class=\"dropdown-content\" [class.inactive]=\"!activeNav\" (click)=\"activeNav=false\">\r\n                <a routerLink=\"overview\" routerLinkActive=\"active\" (click)=\"setTitle('Overview')\">Overview</a>\r\n                <a routerLink=\"fund-deposit\" routerLinkActive=\"active\" (click)=\"setTitle('Deposit funds')\">Deposit funds</a>\r\n                <a routerLink=\"fund-withdraw\" routerLinkActive=\"active\" (click)=\"setTitle('Withdraw funds')\">Withdraw funds</a>\r\n                <a routerLink=\"transfer-to-stock\" routerLinkActive=\"active\" \r\n                   (click)=\"setTitle('Transfer to stock')\">Transfer to stock</a>\r\n                <a routerLink=\"stock-history\" routerLinkActive=\"active\" (click)=\"setTitle('Stock history')\">Stock history</a>\r\n                <a routerLink=\"setting/profile-info\" routerLinkActive=\"active\" (click)=\"setTitle('Profile setting')\">Profile setting</a>\r\n                <a routerLink=\"setting/password\" routerLinkActive=\"active\" (click)=\"setTitle('Change password')\">Change password</a>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n\r\n    <img class=\"avatar\" src=\"../assets/images/avatar.png\" alt=\"aryan\" />\r\n\r\n    <div class=\"who\">\r\n        <h1>{{profile.user.name_english}}</h1>\r\n        <div style=\"border-top: 1px solid #6D8691;padding: 5px;\">\r\n        <span class=\"verfication\"> Email </span> <span class=\"ij icon icon-x\"></span> \r\n        <span class=\"verfication\"> Mobile </span> <span class=\"ij icon icon-y\"></span> \r\n        <span class=\"verfication\"> Identity </span> <span class=\"ij icon icon-x\"></span> \r\n        <span class=\"verfication\"> Address </span> <span class=\"ij icon icon-y\"></span> \r\n       </div> \r\n    </div>\r\n\r\n    <footer>\r\n        <div  class=\"budget\">\r\n            <img src=\"../assets/images/icon-budget.png\" alt=\"4\" />\r\n            <p></p>\r\n        </div>\r\n\r\n        <div class=\"industryscore\">\r\n            <span class=\"num\"></span>\r\n            <p>Annual Income</p>\r\n        </div>\r\n    </footer>\r\n</header>\r\n\r\n<div class=\"header-action-buttons\">\r\n    <ul  class=\"actions\">\r\n        <li >\r\n            <button  class=\"action contact\">Contact</button>\r\n        </li>\r\n        <li >\r\n            <button class=\"action about\" (click)=\"logout()\">Logout</button>\r\n        </li>\r\n    </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/profile.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"headerDiv headerLogo\">\r\n      <img src=\"../assets/images/GPSL_logo.jpg\">\r\n    </div>\r\n    <div class=\"headerDiv headerLanguage\">\r\n      <span style=\"color: #2d2c2c\">Language:&nbsp;</span>\r\n      <a href=\"javascript:void(0)\" \r\n         class=\"language\" \r\n         (click)=\"changeLanguage('zh_HK')\" \r\n         [class.active]=\"activeLanguage==='zh_HK'\">繁体</a>&nbsp;|&nbsp;\r\n      <a href=\"javascript:void(0)\" \r\n         class=\"language\" \r\n         (click)=\"changeLanguage('en_US')\" \r\n         [class.active]=\"activeLanguage==='en_US'\">EN</a>\r\n    </div>\r\n\r\n</div>\r\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\r\n<div class=\"gradient\">\r\n    <div class=\"container show-on-desktop\">\r\n        <profile-header-desktop [profile]=\"profile\"></profile-header-desktop>\r\n    </div>\r\n</div>\r\n\r\n<profile-header-mobile [profile]=\"profile\" class=\"hide-on-desktop\"></profile-header-mobile>\r\n\r\n<router-outlet></router-outlet>\r\n<success-dialog></success-dialog>\r\n<error-dialog></error-dialog>\r\n<indentity-varification-dialog></indentity-varification-dialog>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/password/password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/password/password.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #passwordForm=\"ngForm\" class=\"editForm\" novalidate>\r\n\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">     \r\n          <p-card header=\"Settings\" styleClass=\"ui-card-shadow\">\r\n\r\n\t\t   </p-card>\r\n        </div>\r\n          <div class=\"col-md-9\">\r\n          <p-card subheader=\"Change password\" styleClass=\"ui-card-shadow\">\r\n          <div class='row settings'>\r\n            <div class='col-md-12'>\r\n            \t<small>(Password changes will immediately log you off the site.)</small>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"new_password\">\r\n                            New Password</label>  \r\n                            <input  id=\"new_password\"\r\n\t\t\t\t                    name=\"new_password\"\r\n\t\t\t\t                    #new_password=\"ngModel\"\r\n\t\t\t\t                    type=\"password\" \r\n\t\t\t\t                    autocomplete=\"off\"\r\n\t\t\t\t                    placeholder=\"New password\" \r\n\t\t\t\t                    required\r\n\t\t\t\t                    [(ngModel)]=\"model.newPassword\" pInputText >   \r\n\t\t\t\t             <div class=\"alert alert-danger\" *ngIf=\"submitted && new_password.invalid\">*Required</div>\r\n                           \r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"confirm_password\">Confirm Password</label>\r\n                            <input  id=\"confirm_password\"\r\n\t\t\t\t                    name=\"confirm_password\"\r\n\t\t\t\t                    #confirm_password=\"ngModel\"\r\n\t\t\t\t                    type=\"password\" \r\n\t\t\t\t                    autocomplete=\"off\"\r\n\t\t\t\t                    placeholder=\"Confirm password\" \r\n\t\t\t\t                    required\r\n\t\t\t\t                    validateEqual=\"new_password\" \r\n\t\t\t\t                    [(ngModel)]=\"model.confirmPassword\" pInputText >\r\n\t\t\t\t            <div class=\"alert alert-danger\" *ngIf=\"submitted && confirm_password.invalid\">*Required</div>   \r\n\t\t\t\t            <div class=\"alert alert-danger\" *ngIf=\"submitted && model.newPassword !=model.confirmPassword\">*Password should be matched.</div>  \r\n                           </div>\r\n                    </div>   \r\n                </div>\r\n                <div class=\"row\" *ngIf=\"showSaveErrored\">\r\n                      <div class='col-md-12'>\r\n                          <div class=\"form-group\">\r\n                           <div class=\"alert alert-danger\">\r\n                              <div *ngIf=\"errors.length > 0 then errorList else errorGeneric\"></div>\r\n\r\n                              <ng-template #errorList>\r\n                                  <ul>\r\n                                      <li *ngFor=\"let error of errors\">{{error}}</li>\r\n                                  </ul>\r\n                              </ng-template>\r\n\r\n                              <ng-template #errorGeneric>\r\n                                  <li *ngFor=\"let error of errors\">{{error}}</li>\r\n                              </ng-template>\r\n                          </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n                <div class=\"form-group text-center\">\r\n                    <button class=\"primary\"  (click)=\"onChangePassword(passwordForm)\"> Change password <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\r\n                </div>\r\n            </div>\r\n          </div>\r\n         </p-card>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/personal-info/personal-info.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/personal-info/personal-info.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">     \r\n          <p-card header=\"Settings\" styleClass=\"ui-card-shadow\">\r\n\t\t   </p-card>\r\n        </div>\r\n          <div class=\"col-md-9\">\r\n          <p-card subheader=\"Personal Info setting\" styleClass=\"ui-card-shadow\">\r\n            coming soon.\r\n         </p-card>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/profile-info/profile-info.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/profile-info/profile-info.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-3\">     \r\n          <p-card header=\"Settings\" styleClass=\"ui-card-shadow\">\r\n\t\t   </p-card>\r\n        </div>\r\n          <div class=\"col-md-9\">\r\n          <p-card subheader=\"Profile Info setting\" styleClass=\"ui-card-shadow\">\r\n          <p-panel header=\"Basic Information\" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n\t        <form #personalBasicForm=\"ngForm\" class=\"editForm\" novalidate>\r\n\t\t        <div class=\"tab-pane active settings\">\r\n\t\t        <br/>\r\n\t\t        <div class='row'>\r\n\t            <div class='col-md-12'>\r\n\t                <div class=\"row\">\r\n\t                    <div class='col-xs-12 col-sm-6'>\r\n\t                        <div class=\"form-group\">\r\n\t                            <label class=\"control-label\" for=\"chineseName\">{{lookupSvc.txt('chinese_name_txt')}}</label>  \r\n\t                            <input  #chineseName=\"ngModel\" required id=\"chineseName\" name=\"chineseName\" type=\"text\" placeholder=\"Chinese name\" [(ngModel)]=\"name_chinese\" pInputText >   \r\n\t                            <div class=\"alert alert-danger\" *ngIf=\"personalBasicForm.submitted && chineseName.invalid\">*Required</div>\r\n\t                        </div>\r\n\t                    </div>\r\n\t                    <div class='col-xs-12 col-sm-6'>\r\n\t                        <div class=\"form-group\">\r\n\t                            <label class=\"control-label\" for=\"englishName\">{{lookupSvc.txt('english_name_txt')}}</label>  \r\n\t                            <input #englishName=\"ngModel\" required id=\"englishName\" name=\"englishName\" type=\"text\" placeholder=\"English name\" [(ngModel)]=\"name_english\" pInputText>\r\n\t                            <div class=\"alert alert-danger\" *ngIf=\"personalBasicForm.submitted && englishName.invalid\">*Required</div>\r\n\t                        </div>\r\n\t                    </div>\r\n\t                </div>\r\n\r\n                    <button pButton\r\n                                (click)=\"savePersonalInfo(personalBasicForm)\" \r\n                                type=\"button\" \r\n                                label=\"Save\" \r\n                                class=\"ui-button-info mb-3\" \r\n                                style=\"margin-right: .25em\">    \r\n                                </button>\r\n\t\t\t\t            </div>\r\n\t\t\t\t        </div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</form>\r\n\r\n\t\t   </p-panel>\r\n            <p-panel header=\"Identity Information\" [toggleable]=\"true\" [style]=\"{'margin-bottom':'20px'}\">\r\n            \t<div class=\"row mt-3\">\r\n                      <div class=\"col-md-12 text-center\">\r\n                       <p-selectButton [options]=\"types\"  name=\"document\" [(ngModel)]=\"selectedType\"></p-selectButton>\r\n                      </div>\r\n                </div>\r\n                   <div class=\"row mt-3 identityInformation\" [ngSwitch]=\"selectedType\">\r\n                    <ng-template [ngSwitchCase]= \"'id_card'\"> \r\n                     <div class=\"col-md-12 text-center\"  *ngIf=\"!docs['id_card']\">\r\n                       <h2 class=\"text-danger\">\r\n                          Pending!\r\n                         ID proof not uploaded by you. \r\n\r\n                       </h2>\r\n                        <button class=\"primary\" \r\n                                (click)=\"identityVarification('id_card')\" \r\n                                 >Upload now</button>\r\n                      </div>\r\n                    <div class=\"container\" *ngIf=\"docs['id_card']\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                         <div class=\"row\">\r\n                          <div class=\"col-md-12 text-center\">\r\n                        \t<label class=\"control-label\" for=\"idCardStatus\">\r\n                            Status: </label>  \r\n                            <span> {{idCard.status}}</span>\t\r\n                            <br>\r\n                            <label class=\"control-label\" for=\"idCardReason\">\r\n                            Reason: </label>\r\n                              <span> {{(idCard.reason)?idCard.reason:'Under review'}}</span>\r\n                          </div>\r\n                          </div>\r\n                         <div class=\"row\">\r\n                         <div class=\"col-md-12 text-center\">\r\n                          <a [href]=\"idCard.doc_url\" target=\"_blank\" *ngIf=\"!checkURL(idCard.doc_url)\" style=\"word-break: break-all;\">{{idCard.doc_url}}</a>\r\n                          <a [href]=\"idCard.doc_url\"  target=\"_blank\" *ngIf=\"checkURL(idCard.doc_url)\"><img [src]=\"idCard.doc_url\"></a>\r\n                          </div>\r\n                         </div>\r\n                        </div>\r\n                       </div> \r\n                   </div>\r\n                    </ng-template>\r\n                    <ng-template [ngSwitchCase]= \"'address'\"> \r\n                       <div class=\"col-md-12 text-center\" *ngIf=\"!docs['address']\"> \r\n                        <h2 class=\"text-danger\">\r\n                          Pending!\r\n                         Address document not uploaded by you. \r\n                       </h2>\r\n                       <button class=\"primary\" \r\n                                (click)=\"identityVarification('address')\" \r\n                                 >Upload now</button>\r\n                       </div>\r\n                       <div class=\"container\" *ngIf=\"docs['address']\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                         <div class=\"row\">\r\n                          <div class=\"col-md-12 text-center\">\r\n                        \t<label class=\"control-label\" for=\"addressStatus\">\r\n                            Status: </label>  \r\n                            <span> {{address.status}}</span>\t\r\n                            <br>\r\n                            <label class=\"control-label\" for=\"addressReason\">\r\n                            Reason: </label>\r\n                              <span> {{(address.reason)?address.reason:'Under review'}}</span>\r\n                          </div>\r\n                          </div>\r\n                         <div class=\"row\">\r\n                         <div class=\"col-md-12 text-center\">\r\n                          <a [href]=\"address.doc_url\" target=\"_blank\" *ngIf=\"!checkURL(address.doc_url)\" style=\"word-break: break-all;\">{{address.doc_url}}</a>\r\n                          <a [href]=\"address.doc_url\"  target=\"_blank\" *ngIf=\"checkURL(address.doc_url)\"><img [src]=\"address.doc_url\"></a>\r\n                          </div>\r\n                         </div>\r\n                        </div>\r\n                       </div> \r\n                   </div>\r\n                    </ng-template>\r\n                    <ng-template ngSwitchDefault> No Documents </ng-template>\r\n                  </div> \r\n\t\t   </p-panel>\r\n\r\n\r\n         </p-card>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/cash-account/cash-account.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/cash-account/cash-account.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\" *ngIf=\"!profileSvc.hasCashAccount\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <p>No Cash account!</p>\r\n            <small>Click on open account button to open cash account.</small>\r\n                <br>\r\n             <button class=\"primary\" routerLink=\"../account-opening/cash\">Open Account</button>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\" *ngIf=\"profileSvc.hasCashAccount\">\r\n          <p-card subheader=\"Cash account\" styleClass=\"ui-card-shadow\">\r\n            <br>\r\n            <h4>Net Asset value (HK $)</h4>\r\n            <h4>{{profileSvc.balanceInCashAccount}}</h4>\r\n            <br>\r\n            <button class=\"primary\" \r\n                    (click)=\"identityVarification()\" \r\n                    *ngIf=\"!profileSvc.isIdentityVerified && profileSvc.isCashAccountCompleted\"\r\n                    >Open Account</button>\r\n                    <p class=\"text-danger\" *ngIf=\"!profileSvc.isIdentityVerified && profileSvc.isCashAccountCompleted\">\r\n                      Identity verification pending, click on above button to upload identity document or go to setting/profile to upload identity document.\r\n                    </p>\r\n         </p-card>\r\n\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/margin-account/margin-account.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/margin-account/margin-account.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\" *ngIf=\"!profileSvc.hasMarginAccount\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <p>No Margin account!</p>\r\n            <small>Click on open account button to open margin account.</small>\r\n                <br>\r\n             <button class=\"primary\" routerLink=\"../account-opening/margin\">Open Account</button>\r\n        </div>\r\n      <div class=\"col-md-12\" \r\n           *ngIf=\"profileSvc.hasMarginAccount\">\r\n          <p-card subheader=\"Margin account\" styleClass=\"ui-card-shadow\">\r\n            <br>\r\n            <h4>Net Asset value (HK $)</h4>\r\n             <h4>{{profileSvc.balanceInMarginAccount}}</h4>\r\n              <br>\r\n            <button class=\"primary\"  \r\n                    (click)=\"identityVarification()\"  \r\n                    *ngIf=\"!profileSvc.isIdentityVerified && profileSvc.isMarginAccountCompleted\"\r\n                    >\r\n                    Open Account</button>\r\n                    <p class=\"text-danger\" *ngIf=\"!profileSvc.isIdentityVerified && profileSvc.isMarginAccountCompleted\">\r\n                      Identity verification pending, click on above button to upload identity document or go to setting/profile to upload identity document.\r\n                    </p>\r\n         </p-card>\r\n\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/transaction-list/transaction-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/transaction-list/transaction-list.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n       <div style=\"width:100%\">\r\n          <p class=\"loading\" *ngIf=\"!(data && data.length)\">\r\n            <img src=\"../../../assets/images/no-data-found.gif\" class=\"norecord\">\r\n            <small>No transations</small>\r\n          </p>\r\n         <table class=\"my_table\" *ngIf=\"(data && data.length)\">\r\n          <tr>\r\n            <th>Type</th>\r\n            <th>Currency</th>\r\n            <th>Amount</th>\r\n            <th>Status</th>\r\n            <th>Remark</th>\r\n          </tr>\r\n            <tr *ngFor=\"let trans of data\">\r\n            <td>{{trans.type}}</td>\r\n            <td>{{trans.currency}}</td>\r\n            <td>{{trans.amount}}</td>\r\n            <td>{{trans.status}}</td>\r\n            <td>{{trans.client_remark}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n       </div>\r\n    </div>\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">     \r\n          <p-card header=\"Withdraw Fund\" styleClass=\"ui-card-shadow\">\r\n\t\t       <div>   \t\r\n\t\t        <form class=\"custom\" #withdrawForm=\"ngForm\"  novalidate>\r\n      \t\t\t  <label for=\"currency\">Currency</label>\r\n      \t\t\t  <input type=\"text\" id=\"currency\" name=\"currency\" disabled=\"true\" [(ngModel)]=\"withdraw.currency\" placeholder=\"Currency\" required />\r\n\r\n      \t\t\t  <label for=\"amount\">Amount</label>\r\n      \t\t\t  <input type=\"text\" id=\"amount\" name=\"amount\" [(ngModel)]=\"withdraw.amount\" placeholder=\"0.00\" required />\r\n\r\n              <label for=\"bankName\">Bank name</label>\r\n              <input type=\"text\" id=\"bankName\" name=\"bankName\" [(ngModel)]=\"withdraw.bankName\" placeholder=\"Bank name\" required />\r\n\r\n              <label for=\"accNumber\">Account Number</label>\r\n              <input type=\"text\" id=\"accNumber\" name=\"accNumber\" [(ngModel)]=\"withdraw.accNumber\" placeholder=\"Account number\" required />\r\n\r\n              <label for=\"accountHolder\">Account holder name</label>\r\n              <input type=\"text\" id=\"accountHolder\" name=\"accountHolder\" [(ngModel)]=\"withdraw.accountHolder\" placeholder=\"Holder name\" required />\r\n\r\n              <textarea rows=\"5\" cols=\"30\" name=\"remark\" [(ngModel)]=\"withdraw.remark\" autoResize=\"autoResize\" style=\"resize: none;width:100%;padding:10px\" placeholder=\"Remark\"></textarea>\r\n\r\n      \t\t\t  <button type=\"submit\" \r\n                      class=\"primary\" \r\n                      value=\"Withdraw\"  \r\n                      (click)=\"withdrawApply(withdrawForm)\">Withdraw</button>\r\n                      \r\n              <p-progressSpinner *ngIf=\"isApplying\" \r\n                     [style]=\"{width: '50px', height: '50px', position:'absolute'}\" \r\n                     strokeWidth=\"2\" \r\n                     fill=\"#EEEEEE\" \r\n                     animationDuration=\".8s\">\r\n                       \r\n                     </p-progressSpinner>\r\n\t\t\t</form>\r\n\r\n\t\t    </div>\r\n\t\t   </p-card>\r\n        </div>\r\n          <div class=\"col-md-7\">\r\n          <p-card subheader=\"Transactions\" styleClass=\"ui-card-shadow\">\r\n          \t<p class=\"loading\" *ngIf=\"isLoading\">Loading...</p>\r\n            <transaction-list  *ngIf=\"!isLoading\" \r\n                               [transaction]=\"transaction\">\r\n                               </transaction-list>\r\n         </p-card>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

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
/* harmony import */ var _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/SiteApiResponse */ "./src/shared/services/SiteApiResponse.ts");
/* harmony import */ var _shared_dialogs_success_dialog_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dialogs/success-dialog/models */ "./src/shared/dialogs/success-dialog/models.ts");
/* harmony import */ var _shared_dialogs_error_dialog_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dialogs/error-dialog/models */ "./src/shared/dialogs/error-dialog/models.ts");




var BaseProfileComponent = /** @class */ (function () {
    function BaseProfileComponent(route, router, successDialogSvc, errorDialogSvc) {
        this.route = route;
        this.router = router;
        this.successDialogSvc = successDialogSvc;
        this.errorDialogSvc = errorDialogSvc;
        this.respUtils = new _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_1__["SiteApiResponseUtilities"]();
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
    BaseProfileComponent.prototype.onError = function (error) {
        var errors = this.respUtils.getErrors(error);
        if (errors.length === 0) {
            errors.push("An unknown error occurred. Please try again.");
        }
        this.errors = errors;
        console.log(this.errors);
    };
    BaseProfileComponent.prototype.showSuccessDialog = function (title, msg, isPublic) {
        this.errors = [];
        var successDialog = new _shared_dialogs_success_dialog_models__WEBPACK_IMPORTED_MODULE_2__["SuccessDialog"]();
        successDialog.title = title;
        successDialog.message = msg;
        successDialog.isPublic = isPublic;
        this.successDialogSvc.showDialog(successDialog);
    };
    BaseProfileComponent.prototype.showErrorDialog = function (title, msg, isPublic) {
        var errorDialog = new _shared_dialogs_error_dialog_models__WEBPACK_IMPORTED_MODULE_3__["ErrorDialog"]();
        errorDialog.title = title;
        errorDialog.message = msg;
        errorDialog.isPublic = isPublic;
        this.errorDialogSvc.showDialog(errorDialog);
    };
    return BaseProfileComponent;
}());



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
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/profile/deposit-fund/modal.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/stock-account.service */ "./src/shared/services/stock-account.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");











var DepositFundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DepositFundComponent, _super);
    function DepositFundComponent(route, router, successDialogSvc, errorDialogSvc, stockAccountSvc, lookupSvc, profileSvc, authSvc, ref) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.stockAccountSvc = stockAccountSvc;
        _this.lookupSvc = lookupSvc;
        _this.profileSvc = profileSvc;
        _this.authSvc = authSvc;
        _this.ref = ref;
        _this.deposit = new _modal__WEBPACK_IMPORTED_MODULE_3__["Deposit"]();
        _this.transaction = [];
        _this.output = null;
        _this.selectedFile = null;
        return _this;
    }
    DepositFundComponent.prototype.ngOnInit = function () {
        this.transactionList();
    };
    DepositFundComponent.prototype.transactionList = function () {
        var _this = this;
        this.isLoading = true;
        this.stockAccountSvc.transactionList("deposit").subscribe(function (res) {
            _this.isLoading = false;
            _this.transaction = res['list'];
            _this.ref.detectChanges();
        }, function (err) {
            _this.onError(err);
            console.log(_this.errors);
        });
    };
    DepositFundComponent.prototype.onFileChanged = function (event) {
        var that = this;
        this.selectedFile = event.target.files[0];
        this.deposit.doc = this.selectedFile;
        var reader = new FileReader();
        reader.onloadend = function () {
            that.output = reader.result;
        };
        reader.readAsDataURL(this.selectedFile);
    };
    DepositFundComponent.prototype.depositApply = function (form) {
        var _this = this;
        this.submitted = true;
        if (!form.valid) {
            return false;
        }
        if (!this.deposit.doc) {
            return false;
        }
        this.isApplying = true;
        this.stockAccountSvc.depositApply(this.deposit)
            .subscribe(function (res) {
            _this.onRequestSuccess();
        }, function (err) {
            _this.onRequestFailed(err);
        });
    };
    DepositFundComponent.prototype.onRequestSuccess = function () {
        this.transactionList();
        this.profileSvc.getProfileInfo(this.authSvc.profileSysId);
        this.isApplying = false;
        this.errors = [];
        this.submitted = false;
        var title = 'Success';
        var message = 'Congratulation! Your deposit request sent successfully.';
        var isPublic = true;
        this.showSuccessDialog(title, message, isPublic);
    };
    DepositFundComponent.prototype.onRequestFailed = function (err) {
        this.onError(err);
        this.isApplying = false;
        var title = 'Error';
        var message = "Failed! Your request sent failed. " + this.errors.toString();
        var isPublic = true;
        this.showErrorDialog(title, message, isPublic);
    };
    DepositFundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_9__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_10__["ErrorDialogService"] },
        { type: _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_5__["StockAccountService"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    DepositFundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'deposit-fund',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deposit-fund.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], DepositFundComponent);
    return DepositFundComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_4__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/deposit-fund/modal.ts":
/*!*******************************************!*\
  !*** ./src/profile/deposit-fund/modal.ts ***!
  \*******************************************/
/*! exports provided: Deposit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deposit", function() { return Deposit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Deposit = /** @class */ (function () {
    function Deposit() {
        this.currency = 'HKD';
        this.remark = '';
        this.doc = null;
        this.bank = 1;
    }
    return Deposit;
}());



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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/loading-response-progress.service */ "./src/shared/services/loading-response-progress.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/stock-account.service */ "./src/shared/services/stock-account.service.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");









var ProfileOverviewComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileOverviewComponent, _super);
    function ProfileOverviewComponent(route, router, successDialogSvc, errorDialogSvc, stockAccountSvc, profileSvc, responseProgress) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.stockAccountSvc = stockAccountSvc;
        _this.profileSvc = profileSvc;
        _this.responseProgress = responseProgress;
        _this.isMarginAccount = true;
        _this.profile = {};
        return _this;
    }
    ProfileOverviewComponent.prototype.ngOnInit = function () {
    };
    ProfileOverviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] },
        { type: _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_7__["StockAccountService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] },
        { type: _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_5__["ProgressLoadingService"] }
    ]; };
    ProfileOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-overview',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/overview/profile-overview.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/common.less */ "./src/profile/overview/styles/common.less")).default]
        })
    ], ProfileOverviewComponent);
    return ProfileOverviewComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_6__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/overview/styles/common.less":
/*!*************************************************!*\
  !*** ./src/profile/overview/styles/common.less ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 768px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 992px) {\n  #profile-tabs ul li a {\n    font-size: 12px!important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\ndiv.settings label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\ndiv.settings input {\n  width: 100%;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  /* .area {\n        text-align: center;\n    }*/\n}\n.identityInformation img {\n  height: 100%;\n  width: 100%;\n  border: 1px solid;\n}\n.header-common {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.header-common h1,\n.header-common h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\nbutton.action {\n  font-size: 16px;\n  color: #fff;\n  letter-spacing: 0.4px;\n}\nbutton.action.funds {\n  background: #A622F9;\n}\nbutton.action.availability {\n  background: #70CF3F;\n}\nbutton.action.contact {\n  background: #FF8410;\n}\nbutton.action.about {\n  background: #3F93F4;\n}\n.verfication {\n  font-size: 13px;\n}\n.verified {\n  display: block;\n}\n@media only screen and (max-width: 992px) {\n  #profile-header-desktop .misc .actions li:not(:last-of-type) {\n    margin-right: 0px!important;\n    margin-bottom: 5px!important;\n  }\n  #profile-header-desktop .misc .actions li button {\n    width: 107px!important;\n  }\n}\n/* Style the tab */\n.tab {\n  float: left;\n  border: 1px solid #E2E2E2;\n  background: linear-gradient(to bottom, #fdfbfb 0%, #eae8e8cc 100%);\n  width: 100%;\n}\n/* Style the buttons inside the tab */\n.tab button {\n  display: block;\n  background-color: inherit;\n  color: black;\n  padding: 22px 16px;\n  width: 100%;\n  border: none;\n  outline: none;\n  text-align: left;\n  cursor: pointer;\n  transition: 0.3s;\n  margin-bottom: 1px;\n  font-size: 17px;\n  border-bottom: 1px solid #b0adad;\n}\n/* Change background color of buttons on hover */\n.tab button:hover {\n  background-color: #3F93F4;\n  color: #fff;\n}\n/* Create an active/current \"tab button\" class */\n.tab button.active {\n  background-color: #3F93F4;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvZm9udHMubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy93aWRnZXRzLmxlc3MiLCJzcmMvcHJvZmlsZS9vdmVydmlldy9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3NwYWNpbmcubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL292ZXJ2aWV3L3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvYnV0dG9ucy5sZXNzIiwic3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9oZWFkZXItY29tbW9uLmxlc3MiLCJzcmMvcHJvZmlsZS9vdmVydmlldy9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7QUNISjtBQ3FDQTtFQUFtQix5QkFBQTtBRGxDbkI7QUNtQ0E7RUFBbUIsd0JBQUE7QURoQ25CO0FDa0NBO0VBQ0k7SUFBbUIsd0JBQUE7RUQvQnJCO0VDZ0NFO0lBQW1CLHlCQUFBO0VEN0JyQjtBQUNGO0FDK0JBO0VBQ0E7SUFFRyx5QkFBQTtFRDlCRDtBQUNGO0FFbEJBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBRm9CSjtBRWxCSTtFQUNJLGFBQUE7QUZvQlI7QUVTQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRlBKO0FFVUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUZSSjtBRVVJOzs7RUFHSSxVQUFBO0VBQ0EscUJBQUE7QUZSUjtBRVlBO0VBQ0ksMkJBQUE7RUZWRixlQUFlO0VFV2IseUJBQUE7RUZURixXQUFXO0VBRVgsbUJBQW1CO0VFU2Qsc0JBQUE7RUZQTCxZQUFZO0VFUU4scUJBQUE7RUZOTiwyQkFBMkI7RUVPakIsaUJBQUE7RUZMVjtpRUFDK0Q7QUFDakU7QUcvRUE7RUFBYyx3QkFBQTtBSGtGZDtBR2pGQTtFQUFjLDJCQUFBO0FIb0ZkO0FHbkZBO0VBQVUsZ0JBQUE7QUhzRlY7QUdyRkE7RUFBVSxnQkFBQTtBSHdGVjtBR3ZGQTtFQUFjLGNBQUE7QUgwRmQ7QUd6RkE7RUFBVSxTQUFBO0VBQVcsVUFBQTtBSDZGckI7QUlsR0E7RUFBbUIsY0FBQTtBSnFHbkI7QUlwR0E7RUFBbUIsYUFBQTtBSnVHbkI7QUlyR0E7RUFDSTtJQUFtQixhQUFBO0VKd0dyQjtFSXZHRTtJQUFtQixjQUFBO0VKMEdyQjtBQUNGO0FLeEdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFTlBBLGdCQUFBO0FDa0hKO0FLdkdBOzs7Ozs7O0VGWFUsU0FBQTtFQUFXLFVBQUE7QUg0SHJCO0FLOUdBO0VBQ1csY0FBQTtFQUNQLHFCQUFBO0FMZ0hKO0FLbEhBO0VBS0csV0FBQTtBTGdISDtBSzVHQTtFQUNJLFNBQUE7QUw4R0o7QUtsR0E7RUFDSSxtQkFBQTtFQUVBLHVHQUFBO0VBSUEsZ0VBQUE7RUFDQSxrSEFBQTtBTG9HSjtBS2pHQTtFQUVJLDZCQUFBO0FMa0dKO0FLaEdJO0VBQ0ksU0FBQTtBTGtHUjtBSzlGQTtFQUNJLGtCQUFBO0FMZ0dKO0FLN0ZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQW9CLFlBQUE7QUxnR3hCO0FLcEdBO0VBT1EsY0FBQTtBTGdHUjtBSzVGQTtFQUNJLGtCQUFBO0FMOEZKO0FLL0ZBO0VDekVJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FOMktKO0FDdEtJO0VBQUE7SUl1RUksY0FBQTtJQUFvQixZQUFBO0VMb0cxQjtBQUNGO0FLbkdJO0VBQUE7SUFDSSw0QkFBQTtJQUFpQyxXQUFBO0VMdUd2QztBQUNGO0FLcEdBO0VGdEZVLFNBQUE7RUFBVyxVQUFBO0VFd0ZqQixhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUx1R0o7QUtyR0E7RUFDSSxlQUFBO0FMdUdKO0FLcEdBO0VBQ0ksZ0JBQUE7QUxzR0o7QUtwR0E7RUFDRSx1QkFBQTtBTHNHRjtBS3BHQTtFTHNHRTs7TUFFSTtBQUNOO0FLbkdBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBTG9HSjtBT3JOQTtFQUNJLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBUHVOSjtBTzVOQTs7RUFRUSxpQkFBQTtFUlBKLGdCQUFBO0FDZ09KO0FPcE5BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBUHNOSjtBT3BOSTtFQUNJLG1CQUFBO0FQc05SO0FPbk5JO0VBQ0ksbUJBQUE7QVBxTlI7QU9sTkk7RUFDSSxtQkFBQTtBUG9OUjtBT2pOSTtFQUNJLG1CQUFBO0FQbU5SO0FPaE5BO0VBQ0ksZUFBQTtBUGtOSjtBT2hOQTtFQUNJLGNBQUE7QVBrTko7QU8vTUE7RUFDQTtJQUNJLDJCQUFBO0lBQ0EsNEJBQUE7RVBpTkY7RU8vTUY7SUFFSyxzQkFBQTtFUGdOSDtBQUNGO0FBQ0Esa0JBQWtCO0FRcFFsQjtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsV0FBQTtBUnNRRjtBQUNBLHFDQUFxQztBUW5RckM7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FScVFGO0FBQ0EsZ0RBQWdEO0FRbFFoRDtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBUm9RRjtBQUNBLGdEQUFnRDtBUWpRaEQ7RUFDRyx5QkFBQTtFQUNBLFdBQUE7QVJtUUgiLCJmaWxlIjoic3JjL3Byb2ZpbGUvb3ZlcnZpZXcvc3R5bGVzL2NvbW1vbi5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLmZvbnQtbGlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5mb250LXJlZ3VsYXIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5mb250LWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mb250LXhib2xkIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xufSIsIi5mb250LW5hbWUge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuLmZvbnQtbGlnaHQge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmZvbnQtcmVndWxhciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb250LXhib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5zaG93LW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmhpZGUtb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaG93LW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjcHJvZmlsZS10YWJzIHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zZWxlY3QtYXJyb3cge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtb3ZlcmZsb3c6ICcnO1xufVxuLnNlbGVjdC1hcnJvdzo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmV0YS12ZXJzaW9uIHtcbiAgcGFkZGluZzogM3B4IDRweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2YyOGMzNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nO1xufVxuYS5uby1vdXRsaW5lIHtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYS5uby1vdXRsaW5lOmhvdmVyLFxuYS5uby1vdXRsaW5lOmZvY3VzLFxuYS5uby1vdXRsaW5lOmFjdGl2ZSB7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uby1zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xufVxuLm5vLW1hci10b3Age1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4ubm8tbWFyLWJ0bSB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5tYXItMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1hci0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubWFyLTEwLXZlciB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLm5vLW1hciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zaG93LW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oaWRlLW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnNob3ctb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLmhlYWRlci1ub3RpZmljYXRpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyNzYwMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjJlbSAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbmgxLFxuaDIsXG5wOm5vdCguaGVscC1ibG9jayksXG51bDpub3QoLmRyb3Bkb3duLW1lbnUpLFxubGksXG5idXR0b24sXG5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbmRpdi5zZXR0aW5ncyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5kaXYuc2V0dGluZ3MgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbmJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbn1cbi5ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsICNmZmZmZmYpLCBjb2xvci1zdG9wKDEwMCUsICNmNWY1ZjUpKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZjVmNWY1JywgR3JhZGllbnRUeXBlPTApO1xufVxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UyRTJFMjtcbn1cbi5ncmFkaWVudDpmaXJzdC1vZi10eXBlID4gLmNvbnRhaW5lciB7XG4gIHRvcDogLTFweDtcbn1cbi5hcmVhIHtcbiAgcGFkZGluZzogMjBweCAxNnB4O1xufVxuLmFyZWEtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNjU2NTY1O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5hcmVhLXRpdGxlIC5jb3VudCB7XG4gIGNvbG9yOiAjNDM5MkVGO1xufVxuLmFyZWEtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFyZWEtZm9vdGVyIGJ1dHRvbi5tb3JlIHtcbiAgY29sb3I6ICM1RTVFNUU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweCAzNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4zNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYXJlYS1mb290ZXIge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICAgIHdpZHRoOiA2NTRweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFyZWEtZm9vdGVyIHtcbiAgICBtYXJnaW46IDIwcHggYXV0byAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG4ucGRmLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cbnBsLTAge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5wci0wIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbmltZy5ub3JlY29yZCB7XG4gIGhlaWdodDogMTgwcHghaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzU5cHgpIHtcbiAgLyogLmFyZWEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfSovXG59XG4uaWRlbnRpdHlJbmZvcm1hdGlvbiBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5oZWFkZXItY29tbW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzE4RjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5oZWFkZXItY29tbW9uIGgxLFxuLmhlYWRlci1jb21tb24gaDIge1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbmJ1dHRvbi5hY3Rpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG59XG5idXR0b24uYWN0aW9uLmZ1bmRzIHtcbiAgYmFja2dyb3VuZDogI0E2MjJGOTtcbn1cbmJ1dHRvbi5hY3Rpb24uYXZhaWxhYmlsaXR5IHtcbiAgYmFja2dyb3VuZDogIzcwQ0YzRjtcbn1cbmJ1dHRvbi5hY3Rpb24uY29udGFjdCB7XG4gIGJhY2tncm91bmQ6ICNGRjg0MTA7XG59XG5idXR0b24uYWN0aW9uLmFib3V0IHtcbiAgYmFja2dyb3VuZDogIzNGOTNGNDtcbn1cbi52ZXJmaWNhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi52ZXJpZmllZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHghaW1wb3J0YW50O1xuICB9XG4gICNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIC5hY3Rpb25zIGxpIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwN3B4IWltcG9ydGFudDtcbiAgfVxufVxuLyogU3R5bGUgdGhlIHRhYiAqL1xuLnRhYiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRmYmZiIDAlLCAjZWFlOGU4Y2MgMTAwJSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cbi50YWIgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjJweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IwYWRhZDtcbn1cbi8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cbi50YWIgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGOTNGNDtcbiAgY29sb3I6ICNmZmY7XG59XG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgXCJ0YWIgYnV0dG9uXCIgY2xhc3MgKi9cbi50YWIgYnV0dG9uLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjkzRjQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuIiwiQGJyZWFrcG9pbnQtc21hbGwtZG93bjogNTc1cHg7XG5AYnJlYXBvaW50LXBob25lLWRvd246IDc2N3B4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWRvd246IDk5MXB4O1xuQGJyZWFrcG9pbnQtZGVza3RvcC1kb3duOiAxMTk5cHg7XG5AYnJlYWtwb2ludC1zbWFsbC11cDogNTc2cHg7XG5AYnJlYXBvaW50LXBob25lLXVwOiA3NjhweDtcbkBicmVha3BvaW50LXRhYmxldC11cDogOTkycHg7XG5AYnJlYWtwb2ludC1kZXNrdG9wLXVwOiAxMjAwcHg7XG5AYnJlYXBvaW50LXBob25lLW1pbi1kb3duOiA3NTlweDtcbkBicmVha3BvaW50LW1pbmktc21hbGw6IDQyMHB4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cDogMTAyNHB4O1xuXG4ucmVzcG9uc2l2ZS1tYXgoQG1heFdpZHRoOyBAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBtYXhXaWR0aCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5yZXNwb25zaXZlLW1pbihAbWF4V2lkdGg7IEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogQG1heFdpZHRoKSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm9uLWRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWluKEBicmVha3BvaW50LWRlc2t0b3AtZG93biwgQHJ1bGVzKTtcbn1cblxuLm9uLWxhcmdlLXNjcmVlbihAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1taW4oQGJyZWFwb2ludC1waG9uZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLXRhYmxldChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtZGVza3RvcC11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZShAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LXVwLCBAcnVsZXMpO1xufVxuXG4ub24taXBhZChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZS1kb3duKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYXBvaW50LXBob25lLW1pbi1kb3duLCBAcnVsZXMpO1xufVxuLm9uLW1pbmktc21hbGwtbW9iaWxlKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC1taW5pLXNtYWxsLCBAcnVsZXMpO1xufVxuXG4uc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYXBvaW50LXBob25lLXVwKSB7XG4gICAgLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVha3BvaW50LXRhYmxldC11cCkge1xuI3Byb2ZpbGUtdGFic3tcbiAgIHVsIGxpIGEge1xuICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcbiAgIH1cbn0gXG59XG5cbiIsIi51bC1uYXYtZGVmYXVsdHMoKSB7XG4gICAgLm5vLW1hcigpO1xuICAgIFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IEBuYXYtY29sb3I7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlbGVjdC1hcnJvdyB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xuXG4gICAgJjo6LW1zLWV4cGFuZCB7IFxuICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICB9XG59XG5cbi5zZWxlY3QtYXJyb3ctYmxhY2soQGJhY2tncm91bmQtY29sb3I6ICNmZmYpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctYmxhY2sucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLnNlbGVjdC1hcnJvdy13aGl0ZShAYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctd2hpdGUucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cbi5zZWxlY3QtYXJyb3ctd2hpdGUtbW9iaWxlKEBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzNjRlNWMpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctd2hpdGUucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLmlubGluZS1saXN0KCkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cblxuLmJldGEtdmVyc2lvbiB7XG4gICAgcGFkZGluZzogM3B4IDRweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjI4YzM1O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbn1cblxuYS5uby1vdXRsaW5lIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59XG5cbi5uby1zZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn0iLCIubm8tbWFyLXRvcCB7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgfVxuLm5vLW1hci1idG0geyBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbi5tYXItMjAgeyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4ubWFyLTMwIHsgbWFyZ2luLXRvcDogMzBweDsgfVxuLm1hci0xMC12ZXIgeyBtYXJnaW46IDEwcHggMDsgfTtcbi5uby1tYXIgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cbiIsIi5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayB9XG4uaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYWtwb2ludC10YWJsZXQtdXApIHtcbiAgICAuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZTsgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jazsgfVxufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy9hbGwnO1xuQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMvYWxsJztcbkBpbXBvcnQgJy4vcmVzcG9uc2l2ZSc7XG5cbkBhcmVhLWdhcDogMjBweDtcbkBhcmVhLWJyZWFrLXBvaW50OiA3NTlweDtcbkBzY2FsZS1pbWctd2lkdGg6IDM2cHg7XG5cbi5oZWFkZXItbm90aWZpY2F0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktb3JhbmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuMmVtIDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLmZvbnQtbGlnaHQoKTtcbn1cblxuaDEsIGgyLCBwOm5vdCguaGVscC1ibG9jayksIHVsOm5vdCguZHJvcGRvd24tbWVudSksIGxpLCBidXR0b24sIGxhYmVsIHtcbiAgICAubm8tbWFyKCk7XG59XG5kaXYuc2V0dGluZ3Mge1xuICAgbGFiZWwgeyBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgIH1cbiAgIGlucHV0e1xuICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgIH1cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaW5wdXQtYnRuKCkge1xuICAgIC5mb250LWJvbGQoKTtcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSkpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2Y1ZjVmNScsIEdyYWRpZW50VHlwZT0wICk7XG59XG5cbi5ncmFkaWVudDpmaXJzdC1vZi10eXBlIHtcbiAgICBAYm9yZGVyLXNpemU6IDFweDtcbiAgICBib3JkZXItdG9wOiBAYm9yZGVyLXNpemUgc29saWQgI0UyRTJFMjtcblxuICAgICY+IC5jb250YWluZXIge1xuICAgICAgICB0b3A6IC0oQGJvcmRlci1zaXplKTtcbiAgICB9XG59XG5cbi5hcmVhIHtcbiAgICBwYWRkaW5nOiBAYXJlYS1nYXAgMTZweDtcbn1cblxuLmFyZWEtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY1NjU2NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtoZWlnaHQ6MjRweDtcbiAgICBcbiAgICAuY291bnQge1xuICAgICAgICBjb2xvcjogQHByaW1hcnktYmx1ZTtcbiAgICB9XG59XG5cbi5hcmVhLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIGJ1dHRvbi5tb3JlIHtcbiAgICAgICAgLm1vcmUoKTtcbiAgICB9XG5cbiAgICAub24tbW9iaWxlKHtcbiAgICAgICAgbWFyZ2luOiBAYXJlYS1nYXAgMDt3aWR0aDo2NTRweDtcbiAgICB9KTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYXBvaW50LXBob25lLXVwKSB7XG4gICAgICAgIG1hcmdpbjogQGFyZWEtZ2FwIGF1dG8haW1wb3J0YW50O3dpZHRoOmF1dG87XG4gICB9XG59XG5cbi5wZGYtY29udGFpbmVyIHtcbiAgICAubm8tbWFyKCk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5wbC0we1xuICAgIHBhZGRpbmctbGVmdDowO1xufVxuXG5wci0we1xuICAgIHBhZGRpbmctcmlnaHQ6MDtcbn1cbmltZy5ub3JlY29yZHtcbiAgaGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYXJlYS1icmVhay1wb2ludCkge1xuICAgLyogLmFyZWEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfSovXG59XG5cbi5pZGVudGl0eUluZm9ybWF0aW9uIHtcbiAgIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCAnLi4vdmFyaWFibGVzL2FsbCc7XG5cbi5tb3JlKCkge1xuICAgIGNvbG9yOiAjNUU1RTVFO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idG4oKSB7XG4gICAgLmZvbnQtYm9sZCgpO1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4ucHJpbWFyeSgpIHtcbiAgICAgLmJ0bigpO1xuICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1ibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LWJsdWUtZGFyaztcbiAgICB9XG59XG4uZGFuZ2VyKCkge1xuICAgICAuYnRuKCk7XG4gICAgIGJhY2tncm91bmQ6IEBkYW5nZXItcmVkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LXJlZDtcbiAgICB9XG59XG5cbi5zYXZlKCkge1xuICAgIC5idG4oKTtcbiAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtbGlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1kYXJrZXI7XG4gICAgfVxufSIsIkBpbXBvcnQgJy4vY29tbW9uJztcblxuQGhlYWRlci1iZy1oZWlnaHQ6IDIwMHB4O1xuXG4uaGVhZGVyLWNvbW1vbiB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDcxOEY7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIGgxLCBoMiB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAuZm9udC1saWdodCgpOyBcbiAgICB9XG59XG5cbmJ1dHRvbi5hY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgXG4gICAgJi5mdW5kcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4tcmVmZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5hdmFpbGFiaWxpdHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAYnRuLWF2YWlsYWJpbGl0eS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmNvbnRhY3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtbGlnaHQ7XG4gICAgfVxuXG4gICAgJi5hYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4taGlyZS1jb2xvcjtcbiAgICB9XG59XG4udmVyZmljYXRpb257XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnZlcmlmaWVke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHghaW1wb3J0YW50O1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLm1pc2MgLmFjdGlvbnMgbGl7XG4gICAgYnV0dG9ue1xuICAgICB3aWR0aDogMTA3cHghaW1wb3J0YW50O1xuICAgIH1cbn1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9oZWFkZXItY29tbW9uJztcbi8qIFN0eWxlIHRoZSB0YWIgKi9cbi50YWIge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTJFMjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkZmJmYiAwJSwgI2VhZThlOGNjIDEwMCUpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cbi50YWIgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMjJweCAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2IwYWRhZDtcbn1cblxuLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xuLnRhYiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y5M0Y0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IFwidGFiIGJ1dHRvblwiIGNsYXNzICovXG4udGFiIGJ1dHRvbi5hY3RpdmUge1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzNGOTNGNDtcbiAgIGNvbG9yOiAjZmZmO1xufVxuIl19 */");

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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");







var ProfileHeaderDesktopComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileHeaderDesktopComponent, _super);
    function ProfileHeaderDesktopComponent(route, router, successDialogSvc, errorDialogSvc, lookupSvc) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.lookupSvc = lookupSvc;
        return _this;
    }
    ProfileHeaderDesktopComponent.prototype.ngOnInit = function () {
    };
    ProfileHeaderDesktopComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogService"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"] }
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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");






var ProfileHeaderMobileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileHeaderMobileComponent, _super);
    function ProfileHeaderMobileComponent(route, router, successDialogSvc, errorDialogSvc) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.title = 'Overview';
        return _this;
    }
    ProfileHeaderMobileComponent.prototype.setTitle = function (title) {
        this.title = title;
    };
    ProfileHeaderMobileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ErrorDialogService"] }
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
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/profile.service */ "./src/shared/services/profile.service.ts");
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
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
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
                    { path: 'account-opening/margin',
                        loadChildren: function () { return Promise.all(/*! import() | finance-account-opening-account-margin-margin-account-form-module */[__webpack_require__.e("default~finance-account-opening-account-cash-cash-account-form-module~finance-account-opening-accoun~ffa58c64"), __webpack_require__.e("finance-account-opening-account-margin-margin-account-form-module")]).then(__webpack_require__.bind(null, /*! ../finance-account-opening/account/margin/margin-account-form.module */ "./src/finance-account-opening/account/margin/margin-account-form.module.ts"))
                            .then(function (m) { return m.MarginAccountFormModule; }); } },
                    { path: 'account-opening/cash',
                        loadChildren: function () { return Promise.all(/*! import() | finance-account-opening-account-cash-cash-account-form-module */[__webpack_require__.e("default~finance-account-opening-account-cash-cash-account-form-module~finance-account-opening-accoun~ffa58c64"), __webpack_require__.e("finance-account-opening-account-cash-cash-account-form-module")]).then(__webpack_require__.bind(null, /*! ../finance-account-opening/account/cash/cash-account-form.module */ "./src/finance-account-opening/account/cash/cash-account-form.module.ts"))
                            .then(function (m) { return m.CashAccountFormModule; }); } }
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
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/profile.service */ "./src/shared/services/profile.service.ts");
/* harmony import */ var _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/loading-response-progress.service */ "./src/shared/services/loading-response-progress.service.ts");
/* harmony import */ var _shared_services_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/types */ "./src/shared/services/types.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, profileSvc, responseProgress) {
        var _this = this;
        this.route = route;
        this.profileSvc = profileSvc;
        this.responseProgress = responseProgress;
        this.profileSub = this.profileSvc.getProfileInfo$.subscribe(function (res) {
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].profileData = res;
            _this.profile = res;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.data.subscribe(function (data) {
            _this.profile = data.profile;
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].profileData = data.profile;
            console.log(_this.profile);
        });
    };
    ProfileComponent.prototype.changeLanguage = function (lType) {
        if (lType === _shared_services_types__WEBPACK_IMPORTED_MODULE_5__["LanguageType"].en_US) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].storage.language, lType);
        }
        else {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].storage.language, lType);
        }
        window.location.reload();
    };
    Object.defineProperty(ProfileComponent.prototype, "activeLanguage", {
        get: function () {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].storage.language);
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (this.routeSub) {
            this.routeSub.unsubscribe();
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
        { type: _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_4__["ProgressLoadingService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'crm-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles.less */ "./src/profile/styles.less")).default]
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
/* harmony import */ var _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withdraw-fund/withdraw-fund.component */ "./src/profile/withdraw-fund/withdraw-fund.component.ts");
/* harmony import */ var _deposit_fund_deposit_fund_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deposit-fund/deposit-fund.component */ "./src/profile/deposit-fund/deposit-fund.component.ts");
/* harmony import */ var _stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stock-history/stock-history.component */ "./src/profile/stock-history/stock-history.component.ts");
/* harmony import */ var _transfer_to_stock_transfer_to_stock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transfer-to-stock/transfer-to-stock.component */ "./src/profile/transfer-to-stock/transfer-to-stock.component.ts");
/* harmony import */ var _shared_margin_account_margin_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/margin-account/margin-account.component */ "./src/profile/shared/margin-account/margin-account.component.ts");
/* harmony import */ var _shared_cash_account_cash_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/cash-account/cash-account.component */ "./src/profile/shared/cash-account/cash-account.component.ts");
/* harmony import */ var _shared_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/transaction-list/transaction-list.component */ "./src/profile/shared/transaction-list/transaction-list.component.ts");
/* harmony import */ var _settings_password_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/password/password.component */ "./src/profile/settings/password/password.component.ts");
/* harmony import */ var _settings_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/profile-info/profile-info.component */ "./src/profile/settings/profile-info/profile-info.component.ts");
/* harmony import */ var _settings_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/personal-info/personal-info.component */ "./src/profile/settings/personal-info/personal-info.component.ts");




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
                _shared_margin_account_margin_account_component__WEBPACK_IMPORTED_MODULE_14__["MarginAccountComponent"],
                _shared_cash_account_cash_account_component__WEBPACK_IMPORTED_MODULE_15__["CashAccountComponent"],
                _shared_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_16__["TransactionListComponent"],
                _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_10__["WithdrawFundComponent"],
                _deposit_fund_deposit_fund_component__WEBPACK_IMPORTED_MODULE_11__["DepositFundComponent"],
                _stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_12__["StockHistoryComponent"],
                _transfer_to_stock_transfer_to_stock_component__WEBPACK_IMPORTED_MODULE_13__["TransferToStockComponent"],
                _settings_password_password_component__WEBPACK_IMPORTED_MODULE_17__["PasswordSettingComponent"],
                _settings_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_18__["ProfileInfoSettingComponent"],
                _settings_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_19__["PersonalInfoSettingComponent"]
            ],
            exports: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
            ],
            providers: []
        })
    ], ProfileModule);
    return ProfileModule;
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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/loading-response-progress.service */ "./src/shared/services/loading-response-progress.service.ts");









var PasswordSettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PasswordSettingComponent, _super);
    function PasswordSettingComponent(route, router, successDialogSvc, errorDialogSvc, profileSvc, authSvc, responseProgress) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.profileSvc = profileSvc;
        _this.authSvc = authSvc;
        _this.responseProgress = responseProgress;
        _this.model = {
            newPassword: null,
            confirmPassword: null
        };
        return _this;
    }
    PasswordSettingComponent.prototype.onChangePassword = function (f) {
        var _this = this;
        this.submitted = true;
        if (!f.valid) {
            return;
        }
        if (this.model.newPassword != this.model.confirmPassword) {
            return;
        }
        this.responseProgress.progressResponse(true);
        this.profileSvc.updatePassword(this.model).subscribe(function (res) {
            _this.onRequestSuccess();
        }, function (err) {
            _this.onRequestFailed(err);
        });
    };
    PasswordSettingComponent.prototype.onRequestSuccess = function () {
        this.authSvc.clearLocal();
        this.errors = [];
        this.submitted = false;
        var title = 'Success';
        var message = 'Congratulation! Password change successfully.';
        var isPublic = false;
        this.responseProgress.progressResponse(false);
        this.showSuccessDialog(title, message, isPublic);
    };
    PasswordSettingComponent.prototype.onRequestFailed = function (err) {
        this.onError(err);
        var title = 'Error';
        var message = 'Failed! Your request sent failed.';
        var isPublic = true;
        this.showErrorDialog(title, message, isPublic);
    };
    PasswordSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_8__["ProgressLoadingService"] }
    ]; };
    PasswordSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'password-reset',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/password/password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], PasswordSettingComponent);
    return PasswordSettingComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");






var PersonalInfoSettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PersonalInfoSettingComponent, _super);
    function PersonalInfoSettingComponent(route, router, successDialogSvc, errorDialogSvc) {
        return _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
    }
    PersonalInfoSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] }
    ]; };
    PersonalInfoSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'personal-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/personal-info/personal-info.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], PersonalInfoSettingComponent);
    return PersonalInfoSettingComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");
/* harmony import */ var _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/lookup.service */ "./src/shared/services/lookup.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var _shared_dialogs_identity_preview_dialog_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/dialogs/identity-preview-dialog/models */ "./src/shared/dialogs/identity-preview-dialog/models.ts");
/* harmony import */ var _shared_dialogs_identity_varification_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/dialogs/identity-varification-dialog/dialog.service */ "./src/shared/dialogs/identity-varification-dialog/dialog.service.ts");













var ProfileInfoSettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileInfoSettingComponent, _super);
    function ProfileInfoSettingComponent(route, router, successDialogSvc, errorDialogSvc, profileSvc, messageSvc, identityDialogSvc, authSvc, lookupSvc) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.profileSvc = profileSvc;
        _this.messageSvc = messageSvc;
        _this.identityDialogSvc = identityDialogSvc;
        _this.authSvc = authSvc;
        _this.lookupSvc = lookupSvc;
        _this.name_chinese = '';
        _this.name_english = '';
        _this.selectedType = 'id_card';
        _this.docs = null;
        _this.types = [
            { label: 'ID', value: 'id_card', icon: 'fa fa-fw fa-id-badge' },
            { label: 'Address', value: 'address', icon: 'fa fa-fw fa-id-card' },
        ];
        _this.profileSub = _this.profileSvc.getProfileInfo$.subscribe(function (res) {
            _this.getInfo();
        });
        return _this;
    }
    ProfileInfoSettingComponent.prototype.ngOnInit = function () {
        this.getInfo();
    };
    ProfileInfoSettingComponent.prototype.getInfo = function () {
        var user = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].profileData['user'];
        //basic
        this.name_chinese = user['name_chinese'];
        this.name_english = user['name_english'];
        this.docs = user['docs'];
        this.idCard = new _shared_dialogs_identity_preview_dialog_models__WEBPACK_IMPORTED_MODULE_11__["IdentityPreview"]();
        this.address = new _shared_dialogs_identity_preview_dialog_models__WEBPACK_IMPORTED_MODULE_11__["IdentityPreview"]();
        if (this.docs['id_card']) {
            var idDoc = this.docs['id_card'];
            this.idCard.doc_id = idDoc['id'];
            this.idCard.user_id = idDoc['user_id'];
            this.idCard.doc_url = idDoc['doc_url'];
            this.idCard.status = idDoc['status'];
            this.idCard.reason = idDoc['reason'];
        }
        if (this.docs['address']) {
            var addDoc = this.docs['address'];
            this.address.doc_id = addDoc['id'];
            this.address.user_id = addDoc['user_id'];
            this.address.doc_url = addDoc['doc_url'];
            this.address.status = addDoc['status'];
            this.address.reason = addDoc['reason'];
        }
    };
    ProfileInfoSettingComponent.prototype.savePersonalInfo = function (form) {
        var _this = this;
        if (!form.valid) {
            return false;
        }
        this.profileSvc.updateUser(this.name_chinese, this.name_english).subscribe(function (res) {
            _this.onRequestSuccess();
        }, function (err) {
            _this.onRequestFailed(err);
        });
    };
    ProfileInfoSettingComponent.prototype.checkURL = function (url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    };
    ProfileInfoSettingComponent.prototype.identityVarification = function (docType) {
        this.identityDialogSvc.showDialog(docType);
    };
    ProfileInfoSettingComponent.prototype.onRequestSuccess = function () {
        this.profileSvc.getProfileInfo(this.authSvc.profileSysId);
        this.submitted = false;
        var title = 'Success';
        var message = 'Congratulation! Updated successfully.';
        var isPublic = true;
        this.showSuccessDialog(title, message, isPublic);
    };
    ProfileInfoSettingComponent.prototype.onRequestFailed = function (err) {
        this.onError(err);
        var title = 'Error';
        var message = this.errors.toString();
        var isPublic = true;
        this.showErrorDialog(title, message, isPublic);
    };
    ProfileInfoSettingComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_10__["MessageService"] },
        { type: _shared_dialogs_identity_varification_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_12__["IdentityVarificationDialogService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
        { type: _shared_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__["LookupService"] }
    ]; };
    ProfileInfoSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'profile-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/settings/profile-info/profile-info.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], ProfileInfoSettingComponent);
    return ProfileInfoSettingComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/shared/cash-account/cash-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/profile/shared/cash-account/cash-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: CashAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashAccountComponent", function() { return CashAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _shared_dialogs_identity_varification_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/dialogs/identity-varification-dialog/dialog.service */ "./src/shared/dialogs/identity-varification-dialog/dialog.service.ts");
/* harmony import */ var _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/stock-account.service */ "./src/shared/services/stock-account.service.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");









var CashAccountComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CashAccountComponent, _super);
    function CashAccountComponent(route, router, successDialogSvc, errorDialogSvc, identityDialogSvc, stockAccountSvc, profileSvc) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.identityDialogSvc = identityDialogSvc;
        _this.stockAccountSvc = stockAccountSvc;
        _this.profileSvc = profileSvc;
        return _this;
    }
    CashAccountComponent.prototype.ngOnInit = function () {
        this.hasAccount = this.profileSvc.hasCashAccount;
        this.isIdentityVerified = this.profileSvc.isIdentityVerified;
        this.isAccountCompleted = this.profileSvc.isCashAccountCompleted;
        console.log('----cash account-----');
        console.log('hasAccount:', this.hasAccount);
        console.log('isIdentityVerified', this.isIdentityVerified);
        console.log('isAccountCompeted', this.isAccountCompleted);
        console.log('----end-----');
    };
    // ngOnChanges(){
    //     this.data = this.cashData;
    //     this.isLoading = this.isCashDataLoading;
    //     let acc =  this.data['account'];
    //     if(acc){
    //        this.isAccountCompleted = acc['complete']; 
    //         console.log(this.isAccountCompleted);
    //     }
    //     console.log(this.data['account']);
    // }
    CashAccountComponent.prototype.identityVarification = function () {
        if (!this.profileSvc.isAddressProofUploaded || !this.profileSvc.isIdCardUploaded) {
            if (!this.profileSvc.isAddressProofUploaded) {
                this.identityDialogSvc.showDialog('address');
            }
            else {
                this.identityDialogSvc.showDialog('id_card');
            }
        }
        else {
            this.showSuccessDialog('Information', 'Identity Information is not verified, Documents under verification proccess.', true);
        }
    };
    CashAccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] },
        { type: _shared_dialogs_identity_varification_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["IdentityVarificationDialogService"] },
        { type: _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_7__["StockAccountService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CashAccountComponent.prototype, "profile", void 0);
    CashAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cash-account',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/cash-account/cash-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], CashAccountComponent);
    return CashAccountComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/shared/margin-account/margin-account.component.ts":
/*!***********************************************************************!*\
  !*** ./src/profile/shared/margin-account/margin-account.component.ts ***!
  \***********************************************************************/
/*! exports provided: MarginAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginAccountComponent", function() { return MarginAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/stock-account.service */ "./src/shared/services/stock-account.service.ts");
/* harmony import */ var _shared_dialogs_identity_varification_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dialogs/identity-varification-dialog/dialog.service */ "./src/shared/dialogs/identity-varification-dialog/dialog.service.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");









var MarginAccountComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarginAccountComponent, _super);
    function MarginAccountComponent(route, router, successDialogSvc, errorDialogSvc, identityDialogSvc, stockAccountSvc, profileSvc) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.identityDialogSvc = identityDialogSvc;
        _this.stockAccountSvc = stockAccountSvc;
        _this.profileSvc = profileSvc;
        return _this;
    }
    MarginAccountComponent.prototype.ngOnInit = function () {
        this.hasAccount = this.profileSvc.hasMarginAccount;
        this.isIdentityVerified = this.profileSvc.isIdentityVerified;
        this.isAccountCompleted = this.profileSvc.isMarginAccountCompleted;
        console.log('----margin account-----');
        console.log('hasAccount:', this.hasAccount);
        console.log('isIdentityVerified', this.isIdentityVerified);
        console.log('isAccountCompeted', this.isAccountCompleted);
        console.log('----end-----');
    };
    MarginAccountComponent.prototype.identityVarification = function () {
        if (!this.profileSvc.isAddressProofUploaded || !this.profileSvc.isIdCardUploaded) {
            if (!this.profileSvc.isAddressProofUploaded) {
                this.identityDialogSvc.showDialog('address');
            }
            else {
                this.identityDialogSvc.showDialog('id_card');
            }
        }
        else {
            this.showSuccessDialog('Information', 'Identity Information is not verified, Documents under verification proccess.', true);
        }
    };
    MarginAccountComponent.prototype.ngOnChanges = function () {
        // this.data = this.marginData;
        // this.isLoading = this.isMarginDataLoading;
        // let acc =  this.data['account'];
        // if(acc){
        //       this.isAccountCompleted = acc['complete']; 
        // }
        // console.log(this.data['account']);
    };
    MarginAccountComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] },
        { type: _shared_dialogs_identity_varification_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["IdentityVarificationDialogService"] },
        { type: _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_6__["StockAccountService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_8__["ProfileService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MarginAccountComponent.prototype, "profile", void 0);
    MarginAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'margin-account',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./margin-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/margin-account/margin-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], MarginAccountComponent);
    return MarginAccountComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/shared/transaction-list/style.less":
/*!********************************************************!*\
  !*** ./src/profile/shared/transaction-list/style.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  border-collapse: collapse;\n  table-layout: fixed!important;\n  width: 100%;\n}\nth {\n  background: #ccc;\n}\nth,\ntd {\n  border: 1px solid #ccc;\n  padding: 4px;\n  word-break: break-all !important;\n}\ntr:nth-child(even) {\n  background: #efefef;\n}\ntr:hover {\n  background: #d1d1d1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL3NoYXJlZC90cmFuc2FjdGlvbi1saXN0L0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3NoYXJlZC90cmFuc2FjdGlvbi1saXN0L3N0eWxlLmxlc3MiLCJzcmMvcHJvZmlsZS9zaGFyZWQvdHJhbnNhY3Rpb24tbGlzdC9zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNDRjtBRENDO0VBQ0MsZ0JBQUE7QUNDRjtBREVBOztFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO0FDQUY7QURHQTtFQUNFLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL3Byb2ZpbGUvc2hhcmVkL3RyYW5zYWN0aW9uLWxpc3Qvc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZCFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuIHRoIHtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxudGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogNHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGwhaW1wb3J0YW50O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkMWQxZDE7XG59IiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG50aCB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG50aCxcbnRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogNHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGwgIWltcG9ydGFudDtcbn1cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkMWQxZDE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/profile/shared/transaction-list/transaction-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/profile/shared/transaction-list/transaction-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: TransactionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionListComponent", function() { return TransactionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");






var TransactionListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransactionListComponent, _super);
    function TransactionListComponent(route, router, successDialogSvc, errorDialogSvc) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.data = [];
        return _this;
    }
    TransactionListComponent.prototype.ngOnChanges = function () {
        this.data = this.transaction;
    };
    TransactionListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TransactionListComponent.prototype, "transaction", void 0);
    TransactionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'transaction-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transaction-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/transaction-list/transaction-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./style.less */ "./src/profile/shared/transaction-list/style.less")).default]
        })
    ], TransactionListComponent);
    return TransactionListComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");






var StockHistoryComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StockHistoryComponent, _super);
    function StockHistoryComponent(route, router, successDialogSvc, errorDialogSvc) {
        return _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
    }
    StockHistoryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] }
    ]; };
    StockHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'stock-history',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/stock-history/stock-history.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], StockHistoryComponent);
    return StockHistoryComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/styles.less":
/*!*********************************!*\
  !*** ./src/profile/styles.less ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headerDiv {\n  display: inline-flex;\n}\n.headerDiv img {\n  width: 250px;\n}\n.headerDiv.headerLanguage {\n  float: right;\n}\n.headerDiv.headerLanguage a.language {\n  color: #595656;\n}\n.headerDiv.headerLanguage a.language.active {\n  color: #007ad9;\n}\n@media only screen and (max-width: 445px) {\n  .headerLanguage span {\n    color: #ebebe4 !important;\n  }\n  .headerLanguage a.language {\n    color: #000000 !important;\n  }\n  .headerLanguage a.language.active {\n    color: #ffffff !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxvQkFBQTtBQ0NEO0FERkE7RUFHTSxZQUFBO0FDRU47QURBQztFQUNBLFlBQUE7QUNFRDtBREhDO0VBR0MsY0FBQTtBQ0dGO0FETkM7RUFNQyxjQUFBO0FDR0Y7QURDQTtFQUNHO0lBRUMseUJBQUE7RUNBRjtFREZDO0lBS0EseUJBQUE7RUNBRDtFRExDO0lBUUQseUJBQUE7RUNBQTtBQUNGIiwiZmlsZSI6InNyYy9wcm9maWxlL3N0eWxlcy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlckRpdntcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdGltZ3tcblx0ICAgICB3aWR0aDogMjUwcHg7XG5cdH1cblx0Ji5oZWFkZXJMYW5ndWFnZXtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRhLmxhbmd1YWdlIHtcblx0XHRjb2xvcjogIzU5NTY1Njtcblx0XHR9XG5cdGEubGFuZ3VhZ2UuYWN0aXZlIHtcblx0XHRjb2xvcjogIzAwN2FkOTtcblx0XHR9XG5cdH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ1cHgpIHtcbiAgIC5oZWFkZXJMYW5ndWFnZXtcblx0c3BhbiB7XG5cdCAgIGNvbG9yOiAjZWJlYmU0IWltcG9ydGFudDtcblx0IH1cblx0YS5sYW5ndWFnZSB7XG5cdFx0IGNvbG9yOiAjMDAwMDAwIWltcG9ydGFudDtcblx0XHR9XG5cdGEubGFuZ3VhZ2UuYWN0aXZlIHtcblx0XHRjb2xvcjogI2ZmZmZmZiFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG59XG5cbiIsIi5oZWFkZXJEaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5oZWFkZXJEaXYgaW1nIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuLmhlYWRlckRpdi5oZWFkZXJMYW5ndWFnZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5oZWFkZXJEaXYuaGVhZGVyTGFuZ3VhZ2UgYS5sYW5ndWFnZSB7XG4gIGNvbG9yOiAjNTk1NjU2O1xufVxuLmhlYWRlckRpdi5oZWFkZXJMYW5ndWFnZSBhLmxhbmd1YWdlLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDA3YWQ5O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDVweCkge1xuICAuaGVhZGVyTGFuZ3VhZ2Ugc3BhbiB7XG4gICAgY29sb3I6ICNlYmViZTQgIWltcG9ydGFudDtcbiAgfVxuICAuaGVhZGVyTGFuZ3VhZ2UgYS5sYW5ndWFnZSB7XG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbiAgfVxuICAuaGVhZGVyTGFuZ3VhZ2UgYS5sYW5ndWFnZS5hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/profile/styles/common.less":
/*!****************************************!*\
  !*** ./src/profile/styles/common.less ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 768px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 992px) {\n  #profile-tabs ul li a {\n    font-size: 12px!important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\ndiv.settings label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\ndiv.settings input {\n  width: 100%;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  /* .area {\n        text-align: center;\n    }*/\n}\n.identityInformation img {\n  height: 100%;\n  width: 100%;\n  border: 1px solid;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvZm9udHMubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy93aWRnZXRzLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3NwYWNpbmcubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvYnV0dG9ucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7QUNISjtBQ3FDQTtFQUFtQix5QkFBQTtBRGxDbkI7QUNtQ0E7RUFBbUIsd0JBQUE7QURoQ25CO0FDa0NBO0VBQ0k7SUFBbUIsd0JBQUE7RUQvQnJCO0VDZ0NFO0lBQW1CLHlCQUFBO0VEN0JyQjtBQUNGO0FDK0JBO0VBQ0E7SUFFRyx5QkFBQTtFRDlCRDtBQUNGO0FFbEJBO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBRm9CSjtBRWxCSTtFQUNJLGFBQUE7QUZvQlI7QUVTQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRlBKO0FFVUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUZSSjtBRVVJOzs7RUFHSSxVQUFBO0VBQ0EscUJBQUE7QUZSUjtBRVlBO0VBQ0ksMkJBQUE7RUZWRixlQUFlO0VFV2IseUJBQUE7RUZURixXQUFXO0VBRVgsbUJBQW1CO0VFU2Qsc0JBQUE7RUZQTCxZQUFZO0VFUU4scUJBQUE7RUZOTiwyQkFBMkI7RUVPakIsaUJBQUE7RUZMVjtpRUFDK0Q7QUFDakU7QUcvRUE7RUFBYyx3QkFBQTtBSGtGZDtBR2pGQTtFQUFjLDJCQUFBO0FIb0ZkO0FHbkZBO0VBQVUsZ0JBQUE7QUhzRlY7QUdyRkE7RUFBVSxnQkFBQTtBSHdGVjtBR3ZGQTtFQUFjLGNBQUE7QUgwRmQ7QUd6RkE7RUFBVSxTQUFBO0VBQVcsVUFBQTtBSDZGckI7QUlsR0E7RUFBbUIsY0FBQTtBSnFHbkI7QUlwR0E7RUFBbUIsYUFBQTtBSnVHbkI7QUlyR0E7RUFDSTtJQUFtQixhQUFBO0VKd0dyQjtFSXZHRTtJQUFtQixjQUFBO0VKMEdyQjtBQUNGO0FLeEdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFTlBBLGdCQUFBO0FDa0hKO0FLdkdBOzs7Ozs7O0VGWFUsU0FBQTtFQUFXLFVBQUE7QUg0SHJCO0FLOUdBO0VBQ1csY0FBQTtFQUNQLHFCQUFBO0FMZ0hKO0FLbEhBO0VBS0csV0FBQTtBTGdISDtBSzVHQTtFQUNJLFNBQUE7QUw4R0o7QUtsR0E7RUFDSSxtQkFBQTtFQUVBLHVHQUFBO0VBSUEsZ0VBQUE7RUFDQSxrSEFBQTtBTG9HSjtBS2pHQTtFQUVJLDZCQUFBO0FMa0dKO0FLaEdJO0VBQ0ksU0FBQTtBTGtHUjtBSzlGQTtFQUNJLGtCQUFBO0FMZ0dKO0FLN0ZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQW9CLFlBQUE7QUxnR3hCO0FLcEdBO0VBT1EsY0FBQTtBTGdHUjtBSzVGQTtFQUNJLGtCQUFBO0FMOEZKO0FLL0ZBO0VDekVJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FOMktKO0FDdEtJO0VBQUE7SUl1RUksY0FBQTtJQUFvQixZQUFBO0VMb0cxQjtBQUNGO0FLbkdJO0VBQUE7SUFDSSw0QkFBQTtJQUFpQyxXQUFBO0VMdUd2QztBQUNGO0FLcEdBO0VGdEZVLFNBQUE7RUFBVyxVQUFBO0VFd0ZqQixhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUx1R0o7QUtyR0E7RUFDSSxlQUFBO0FMdUdKO0FLcEdBO0VBQ0ksZ0JBQUE7QUxzR0o7QUtwR0E7RUFDRSx1QkFBQTtBTHNHRjtBS3BHQTtFTHNHRTs7TUFFSTtBQUNOO0FLbkdBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBTG9HSiIsImZpbGUiOiJzcmMvcHJvZmlsZS9zdHlsZXMvY29tbW9uLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZvbnQtcmVndWxhciB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvbnQteGJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiLmZvbnQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG4uZm9udC1saWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZm9udC1yZWd1bGFyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mb250LWJvbGQge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvbnQteGJvbGQge1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLnNob3ctb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4uaGlkZS1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNob3ctb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNwcm9maWxlLXRhYnMgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcbiAgfVxufVxuLnNlbGVjdC1hcnJvdyB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdGV4dC1vdmVyZmxvdzogJyc7XG59XG4uc2VsZWN0LWFycm93OjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5iZXRhLXZlcnNpb24ge1xuICBwYWRkaW5nOiAzcHggNHB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjI4YzM1O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XG59XG5hLm5vLW91dGxpbmUge1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hLm5vLW91dGxpbmU6aG92ZXIsXG5hLm5vLW91dGxpbmU6Zm9jdXMsXG5hLm5vLW91dGxpbmU6YWN0aXZlIHtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5vLXNlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBTYWZhcmkgKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBGaXJlZm94ICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnRlZCBieSBDaHJvbWUgYW5kIE9wZXJhICovXG59XG4ubm8tbWFyLXRvcCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi5uby1tYXItYnRtIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuLm1hci0yMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFyLTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tYXItMTAtdmVyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ubm8tbWFyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnNob3ctb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhpZGUtb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaGVhZGVyLW5vdGlmaWNhdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI3NjAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuaDEsXG5oMixcbnA6bm90KC5oZWxwLWJsb2NrKSxcbnVsOm5vdCguZHJvcGRvd24tbWVudSksXG5saSxcbmJ1dHRvbixcbmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuZGl2LnNldHRpbmdzIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbmRpdi5zZXR0aW5ncyBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xufVxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2ZmZmZmZiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y1ZjVmNSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNWY1ZjUnLCBHcmFkaWVudFR5cGU9MCk7XG59XG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTJFMkUyO1xufVxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUgPiAuY29udGFpbmVyIHtcbiAgdG9wOiAtMXB4O1xufVxuLmFyZWEge1xuICBwYWRkaW5nOiAyMHB4IDE2cHg7XG59XG4uYXJlYS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmFyZWEtdGl0bGUgLmNvdW50IHtcbiAgY29sb3I6ICM0MzkyRUY7XG59XG4uYXJlYS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXJlYS1mb290ZXIgYnV0dG9uLm1vcmUge1xuICBjb2xvcjogIzVFNUU1RTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hcmVhLWZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgd2lkdGg6IDY1NHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXJlYS1mb290ZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5wZGYtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxucGwtMCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnByLTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuaW1nLm5vcmVjb3JkIHtcbiAgaGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTlweCkge1xuICAvKiAuYXJlYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9Ki9cbn1cbi5pZGVudGl0eUluZm9ybWF0aW9uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuIiwiQGJyZWFrcG9pbnQtc21hbGwtZG93bjogNTc1cHg7XG5AYnJlYXBvaW50LXBob25lLWRvd246IDc2N3B4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWRvd246IDk5MXB4O1xuQGJyZWFrcG9pbnQtZGVza3RvcC1kb3duOiAxMTk5cHg7XG5AYnJlYWtwb2ludC1zbWFsbC11cDogNTc2cHg7XG5AYnJlYXBvaW50LXBob25lLXVwOiA3NjhweDtcbkBicmVha3BvaW50LXRhYmxldC11cDogOTkycHg7XG5AYnJlYWtwb2ludC1kZXNrdG9wLXVwOiAxMjAwcHg7XG5AYnJlYXBvaW50LXBob25lLW1pbi1kb3duOiA3NTlweDtcbkBicmVha3BvaW50LW1pbmktc21hbGw6IDQyMHB4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cDogMTAyNHB4O1xuXG4ucmVzcG9uc2l2ZS1tYXgoQG1heFdpZHRoOyBAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBtYXhXaWR0aCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5yZXNwb25zaXZlLW1pbihAbWF4V2lkdGg7IEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogQG1heFdpZHRoKSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm9uLWRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWluKEBicmVha3BvaW50LWRlc2t0b3AtZG93biwgQHJ1bGVzKTtcbn1cblxuLm9uLWxhcmdlLXNjcmVlbihAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1taW4oQGJyZWFwb2ludC1waG9uZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLXRhYmxldChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtZGVza3RvcC11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZShAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LXVwLCBAcnVsZXMpO1xufVxuXG4ub24taXBhZChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZS1kb3duKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYXBvaW50LXBob25lLW1pbi1kb3duLCBAcnVsZXMpO1xufVxuLm9uLW1pbmktc21hbGwtbW9iaWxlKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC1taW5pLXNtYWxsLCBAcnVsZXMpO1xufVxuXG4uc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYXBvaW50LXBob25lLXVwKSB7XG4gICAgLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVha3BvaW50LXRhYmxldC11cCkge1xuI3Byb2ZpbGUtdGFic3tcbiAgIHVsIGxpIGEge1xuICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcbiAgIH1cbn0gXG59XG5cbiIsIi51bC1uYXYtZGVmYXVsdHMoKSB7XG4gICAgLm5vLW1hcigpO1xuICAgIFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IEBuYXYtY29sb3I7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlbGVjdC1hcnJvdyB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xuXG4gICAgJjo6LW1zLWV4cGFuZCB7IFxuICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICB9XG59XG5cbi5zZWxlY3QtYXJyb3ctYmxhY2soQGJhY2tncm91bmQtY29sb3I6ICNmZmYpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctYmxhY2sucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLnNlbGVjdC1hcnJvdy13aGl0ZShAYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctd2hpdGUucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cbi5zZWxlY3QtYXJyb3ctd2hpdGUtbW9iaWxlKEBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzNjRlNWMpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctd2hpdGUucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLmlubGluZS1saXN0KCkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cblxuLmJldGEtdmVyc2lvbiB7XG4gICAgcGFkZGluZzogM3B4IDRweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjI4YzM1O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbn1cblxuYS5uby1vdXRsaW5lIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59XG5cbi5uby1zZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn0iLCIubm8tbWFyLXRvcCB7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgfVxuLm5vLW1hci1idG0geyBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbi5tYXItMjAgeyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4ubWFyLTMwIHsgbWFyZ2luLXRvcDogMzBweDsgfVxuLm1hci0xMC12ZXIgeyBtYXJnaW46IDEwcHggMDsgfTtcbi5uby1tYXIgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cbiIsIi5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayB9XG4uaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYWtwb2ludC10YWJsZXQtdXApIHtcbiAgICAuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZTsgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jazsgfVxufVxuXG4iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy9hbGwnO1xuQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMvYWxsJztcbkBpbXBvcnQgJy4vcmVzcG9uc2l2ZSc7XG5cbkBhcmVhLWdhcDogMjBweDtcbkBhcmVhLWJyZWFrLXBvaW50OiA3NTlweDtcbkBzY2FsZS1pbWctd2lkdGg6IDM2cHg7XG5cbi5oZWFkZXItbm90aWZpY2F0aW9ucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktb3JhbmdlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuMmVtIDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgLmZvbnQtbGlnaHQoKTtcbn1cblxuaDEsIGgyLCBwOm5vdCguaGVscC1ibG9jayksIHVsOm5vdCguZHJvcGRvd24tbWVudSksIGxpLCBidXR0b24sIGxhYmVsIHtcbiAgICAubm8tbWFyKCk7XG59XG5kaXYuc2V0dGluZ3Mge1xuICAgbGFiZWwgeyBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgIH1cbiAgIGlucHV0e1xuICAgd2lkdGg6IDEwMCU7XG4gICB9XG5cbiAgIH1cbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xufVxuXG4uaW5wdXQtYnRuKCkge1xuICAgIC5mb250LWJvbGQoKTtcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNTUsMjU1LDI1NSwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSkpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2Y1ZjVmNScsIEdyYWRpZW50VHlwZT0wICk7XG59XG5cbi5ncmFkaWVudDpmaXJzdC1vZi10eXBlIHtcbiAgICBAYm9yZGVyLXNpemU6IDFweDtcbiAgICBib3JkZXItdG9wOiBAYm9yZGVyLXNpemUgc29saWQgI0UyRTJFMjtcblxuICAgICY+IC5jb250YWluZXIge1xuICAgICAgICB0b3A6IC0oQGJvcmRlci1zaXplKTtcbiAgICB9XG59XG5cbi5hcmVhIHtcbiAgICBwYWRkaW5nOiBAYXJlYS1nYXAgMTZweDtcbn1cblxuLmFyZWEtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogIzY1NjU2NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtoZWlnaHQ6MjRweDtcbiAgICBcbiAgICAuY291bnQge1xuICAgICAgICBjb2xvcjogQHByaW1hcnktYmx1ZTtcbiAgICB9XG59XG5cbi5hcmVhLWZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIGJ1dHRvbi5tb3JlIHtcbiAgICAgICAgLm1vcmUoKTtcbiAgICB9XG5cbiAgICAub24tbW9iaWxlKHtcbiAgICAgICAgbWFyZ2luOiBAYXJlYS1nYXAgMDt3aWR0aDo2NTRweDtcbiAgICB9KTtcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYXBvaW50LXBob25lLXVwKSB7XG4gICAgICAgIG1hcmdpbjogQGFyZWEtZ2FwIGF1dG8haW1wb3J0YW50O3dpZHRoOmF1dG87XG4gICB9XG59XG5cbi5wZGYtY29udGFpbmVyIHtcbiAgICAubm8tbWFyKCk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5wbC0we1xuICAgIHBhZGRpbmctbGVmdDowO1xufVxuXG5wci0we1xuICAgIHBhZGRpbmctcmlnaHQ6MDtcbn1cbmltZy5ub3JlY29yZHtcbiAgaGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYXJlYS1icmVhay1wb2ludCkge1xuICAgLyogLmFyZWEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfSovXG59XG5cbi5pZGVudGl0eUluZm9ybWF0aW9uIHtcbiAgIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCAnLi4vdmFyaWFibGVzL2FsbCc7XG5cbi5tb3JlKCkge1xuICAgIGNvbG9yOiAjNUU1RTVFO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEOUQ5RDk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHggMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zNXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idG4oKSB7XG4gICAgLmZvbnQtYm9sZCgpO1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4ucHJpbWFyeSgpIHtcbiAgICAgLmJ0bigpO1xuICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1ibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LWJsdWUtZGFyaztcbiAgICB9XG59XG4uZGFuZ2VyKCkge1xuICAgICAuYnRuKCk7XG4gICAgIGJhY2tncm91bmQ6IEBkYW5nZXItcmVkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LXJlZDtcbiAgICB9XG59XG5cbi5zYXZlKCkge1xuICAgIC5idG4oKTtcbiAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtbGlnaHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1kYXJrZXI7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/profile/styles/header-desktop.less":
/*!************************************************!*\
  !*** ./src/profile/styles/header-desktop.less ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\ndiv.settings label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\ndiv.settings input {\n  width: 100%;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  /* .area {\n        text-align: center;\n    }*/\n}\n.identityInformation img {\n  height: 100%;\n  width: 100%;\n  border: 1px solid;\n}\n.header-common {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.header-common h1,\n.header-common h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\nbutton.action {\n  font-size: 16px;\n  color: #fff;\n  letter-spacing: 0.4px;\n}\nbutton.action.funds {\n  background: #A622F9;\n}\nbutton.action.availability {\n  background: #70CF3F;\n}\nbutton.action.contact {\n  background: #FF8410;\n}\nbutton.action.about {\n  background: #3F93F4;\n}\n.verfication {\n  font-size: 13px;\n}\n.verified {\n  display: block;\n}\n@media only screen and (max-width: 992px) {\n  #profile-header-desktop .misc .actions li:not(:last-of-type) {\n    margin-right: 0px!important;\n    margin-bottom: 5px!important;\n  }\n  #profile-header-desktop .misc .actions li button {\n    width: 107px!important;\n  }\n}\n.font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 768px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 992px) {\n  #profile-tabs ul li a {\n    font-size: 12px!important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n  background: url('/assets/images/select-arrow-black.png') no-repeat 95% 50% #fff;\n}\n.dropdown::-ms-expand {\n  display: none;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n.dropdown .dropbtn {\n  width: 180px;\n  font-weight: 300;\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 10px 0;\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 0.02em;\n}\n.dropdown .dropdown-content {\n  min-width: 180px;\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n.dropdown .dropdown-content a {\n  display: block;\n  color: #333;\n  padding: 15px;\n  text-decoration: none;\n  text-align: left;\n}\n.dropdown .dropdown-content a:not(:last-of-type) {\n  border-bottom: 1px solid #eee;\n}\n.dropdown .dropdown-content a:hover {\n  background-color: #4392EF;\n  color: #fff;\n}\n.dropdown.mobile {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n  background: url('/assets/images/select-arrow-white.png') no-repeat 95% 50% #21364e5c;\n  width: 100%!important;\n}\n.dropdown.mobile::-ms-expand {\n  display: none;\n}\n.dropdown.mobile .dropbtn {\n  width: 100%!important;\n}\n.dropdown.mobile .dropdown-content {\n  min-width: 100%!important;\n  width: 100!important;\n}\n.dropdown.mobile .dropdown-content.inactive {\n  display: none!important;\n}\n#profile-header-desktop {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #fff;\n  height: 200px;\n  padding: 0 40px 45px 0;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), #116fbfad), url('profile-bg-new.jpg');\n  background-size: cover;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n#profile-header-desktop h1,\n#profile-header-desktop h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\n#profile-header-desktop label {\n  margin-top: -20px !important;\n}\n#profile-header-desktop .who {\n  top: 60px;\n  position: relative;\n  flex-grow: 2;\n  margin-left: 23px;\n}\n#profile-header-desktop .who h1 {\n  font-size: 2.5em;\n}\n#profile-header-desktop .who h2 {\n  margin-bottom: 10px;\n  font-size: 1.8em;\n}\n#profile-header-desktop .who p {\n  margin-bottom: 15px;\n}\n#profile-header-desktop .who .review-count {\n  margin-left: 0.6em;\n}\n#profile-header-desktop .avatar {\n  width: 165px;\n  height: 170px;\n  border-top: 1px solid #fff;\n  border-right: 1px solid #fff;\n  top: 90px;\n  position: relative;\n}\n#profile-header-desktop .misc {\n  text-align: right;\n  /*\n            <ul class=\"actions\">\n                <li><button/></li>\n            </ul>\n        */\n}\n#profile-header-desktop .misc .profile-score-section {\n  position: relative;\n  left: 15px;\n  top: 25px;\n}\n#profile-header-desktop .misc .actions {\n  list-style-type: none;\n  margin-top: 10px;\n}\n#profile-header-desktop .misc .actions li {\n  display: inline-block;\n}\n#profile-header-desktop .misc .actions li:not(:last-of-type) {\n  margin-right: 10px;\n}\n#profile-header-desktop .misc .actions button.action {\n  height: 50px;\n  border-radius: 5px;\n  padding: 0 25px;\n  /*\n                .on-tablet({\n                    padding: 0 0.3em;\n                    height: 3em;\n                });\n                */\n}\n#profile-tabs {\n  margin-left: 165px;\n  height: 50px;\n  border-right: 1px solid #EBEBEB;\n  border-bottom: 1px solid #EBEBEB;\n  background: #fff;\n}\n#profile-tabs ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n#profile-tabs ul li {\n  display: inline-block;\n}\n#profile-tabs ul li a {\n  color: #555555;\n  letter-spacing: 0;\n}\n#profile-tabs ul li a {\n  font-weight: 400;\n  display: inline-block;\n  padding: 11px 1.5em;\n  color: #949494;\n  outline: 0;\n}\n#profile-tabs ul li a.active,\n#profile-tabs ul li a:hover {\n  color: #F27601;\n  border-bottom: 0.2em solid #F27601;\n  text-decoration: none;\n}\n#profile-tabs ul li .dropdown-content a {\n  width: 100%!important;\n}\n#profile-tabs ul li .dropdown-content a.active,\n#profile-tabs ul li .dropdown-content a:hover {\n  color: #ffff !important;\n  border-bottom: unset!important;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL2hlYWRlci1kZXNrdG9wLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3Byb2ZpbGUvc3R5bGVzL2NvbW1vbi5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy9mb250cy5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy9zcGFjaW5nLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2J1dHRvbnMubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9oZWFkZXItY29tbW9uLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3dpZGdldHMubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvZHJvcGRvd24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvaGVhZGVyLWRlc2t0b3AubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQixjQUFBO0FDRW5CO0FEREE7RUFBbUIsYUFBQTtBQ0luQjtBREZBO0VBQ0k7SUFBbUIsYUFBQTtFQ0tyQjtFREpFO0lBQW1CLGNBQUE7RUNPckI7QUFDRjtBQ0xBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQ1BBLGdCQUFBO0FGZUo7QUNKQTs7Ozs7OztFRVhVLFNBQUE7RUFBVyxVQUFBO0FIeUJyQjtBQ1hBO0VBQ1csY0FBQTtFQUNQLHFCQUFBO0FEYUo7QUNmQTtFQUtHLFdBQUE7QURhSDtBQ1RBO0VBQ0ksU0FBQTtBRFdKO0FDQ0E7RUFDSSxtQkFBQTtFQUVBLHVHQUFBO0VBSUEsZ0VBQUE7RUFDQSxrSEFBQTtBRENKO0FDRUE7RUFFSSw2QkFBQTtBRERKO0FDR0k7RUFDSSxTQUFBO0FERFI7QUNLQTtFQUNJLGtCQUFBO0FESEo7QUNNQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUFvQixZQUFBO0FESHhCO0FDREE7RUFPUSxjQUFBO0FESFI7QUNPQTtFQUNJLGtCQUFBO0FETEo7QUNJQTtFR3pFSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBSndFSjtBS25FSTtFQUFBO0lKdUVJLGNBQUE7SUFBb0IsWUFBQTtFREMxQjtBQUNGO0FDQUk7RUFBQTtJQUNJLDRCQUFBO0lBQWlDLFdBQUE7RURJdkM7QUFDRjtBQ0RBO0VFdEZVLFNBQUE7RUFBVyxVQUFBO0VGd0ZqQixhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURJSjtBQ0ZBO0VBQ0ksZUFBQTtBRElKO0FDREE7RUFDSSxnQkFBQTtBREdKO0FDREE7RUFDRSx1QkFBQTtBREdGO0FDREE7RURHRTs7TUFFSTtBQUNOO0FDQUE7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEQ0o7QU1sSEE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QU5vSEo7QU16SEE7O0VBUVEsaUJBQUE7RUpQSixnQkFBQTtBRjZISjtBTWpIQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QU5tSEo7QU1qSEk7RUFDSSxtQkFBQTtBTm1IUjtBTWhISTtFQUNJLG1CQUFBO0FOa0hSO0FNL0dJO0VBQ0ksbUJBQUE7QU5pSFI7QU05R0k7RUFDSSxtQkFBQTtBTmdIUjtBTTdHQTtFQUNJLGVBQUE7QU4rR0o7QU03R0E7RUFDSSxjQUFBO0FOK0dKO0FNNUdBO0VBQ0E7SUFDSSwyQkFBQTtJQUNBLDRCQUFBO0VOOEdGO0VNNUdGO0lBRUssc0JBQUE7RU42R0g7QUFDRjtBRWxLQTtFQUNJLCtCQUFBO0FGb0tKO0FFaktBO0VBQ0ksZ0JBQUE7QUZtS0o7QUVoS0E7RUFDSSxnQkFBQTtBRmtLSjtBRS9KQTtFQUNJLGdCQUFBO0FGaUtKO0FFOUpBO0VBQ0ksZ0JBQUE7QUZnS0o7QUs5SEE7RUFBbUIseUJBQUE7QUxpSW5CO0FLaElBO0VBQW1CLHdCQUFBO0FMbUluQjtBS2pJQTtFQUNJO0lBQW1CLHdCQUFBO0VMb0lyQjtFS25JRTtJQUFtQix5QkFBQTtFTHNJckI7QUFDRjtBS3BJQTtFQUNBO0lBRUcseUJBQUE7RUxxSUQ7QUFDRjtBT3JMQTtFQUNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QVB1TEo7QU9yTEk7RUFDSSxhQUFBO0FQdUxSO0FPMUpBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FQNEpKO0FPekpBO0VBQ0ksVUFBQTtFQUNBLHFCQUFBO0FQMkpKO0FPekpJOzs7RUFHSSxVQUFBO0VBQ0EscUJBQUE7QVAySlI7QU92SkE7RUFDSSwyQkFBQTtFUHlKRixlQUFlO0VPeEpiLHlCQUFBO0VQMEpGLFdBQVc7RUFFWCxtQkFBbUI7RU8xSmQsc0JBQUE7RVA0SkwsWUFBWTtFTzNKTixxQkFBQTtFUDZKTiwyQkFBMkI7RU81SmpCLGlCQUFBO0VQOEpWO2lFQUMrRDtBQUNqRTtBR2xQQTtFQUFjLHdCQUFBO0FIcVBkO0FHcFBBO0VBQWMsMkJBQUE7QUh1UGQ7QUd0UEE7RUFBVSxnQkFBQTtBSHlQVjtBR3hQQTtFQUFVLGdCQUFBO0FIMlBWO0FHMVBBO0VBQWMsY0FBQTtBSDZQZDtBRzVQQTtFQUFVLFNBQUE7RUFBVyxVQUFBO0FIZ1FyQjtBUWxRQTtFQUdJLGtCQUFBO0VBQ0EscUJBQUE7RURTQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBU0EsK0VBQUE7QVBrUEo7QU96UEk7RUFDSSxhQUFBO0FQMlBSO0FRdlFJO0VBQ0ksY0FBQTtBUnlRUjtBUWxSQTtFQWFRLFlBQUE7RU5YSixnQkFBQTtFTWNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QVJ1UVI7QVEvUkE7RUE0QlEsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0EsV0FBQTtBUnFRUjtBUXZTQTtFQXNDUSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FSb1FSO0FRbFFRO0VBQ0ksNkJBQUE7QVJvUVo7QVFqVEE7RUFpRFEseUJBQUE7RUFDQSxXQUFBO0FSbVFSO0FRL1BBO0VEekNJLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFvQkEsb0ZBQUE7RUNtQkMscUJBQUE7QVJzUUw7QU8zU0k7RUFDSSxhQUFBO0FQNlNSO0FRM1FBO0VBSU0scUJBQUE7QVIwUU47QVE5UUE7RUFPTSx5QkFBQTtFQUNBLG9CQUFBO0FSMFFOO0FRbFJBO0VBV1EsdUJBQUE7QVIwUVI7QVN4VUE7RUhESSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFFQSxXQUFBO0VHSUEsYUFBQTtFQUNBLHNCQUFBO0VBR0EsMkZBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FUc1VKO0FTclZBOztFSE1RLGlCQUFBO0VKUEosZ0JBQUE7QUYyVko7QVMxVkE7RUFJUSw0QkFBQTtBVHlWUjtBUzdWQTtFQWtCUSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QVQ4VVI7QVNuV0E7RUF1QmEsZ0JBQUE7QVQrVWI7QVN0V0E7RUF3QmEsbUJBQUE7RUFBcUIsZ0JBQUE7QVRrVmxDO0FTMVdBO0VBeUJhLG1CQUFBO0FUb1ZiO0FTN1dBO0VBMkJ3QixrQkFBQTtBVHFWeEI7QVNoWEE7RUFnQ1EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBRUEsU0FBQTtFQUNBLGtCQUFBO0FUa1ZSO0FTeFhBO0VBMENRLGlCQUFBO0VUaVZOOzs7O1NBSU87QUFDVDtBU2hZQTtFQW1EWSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FUZ1ZaO0FTcllBO0VGdUNJLHFCQUFBO0VFb0JRLGdCQUFBO0FUOFVaO0FTellBO0VGMENRLHFCQUFBO0FQa1dSO0FTNVlBO0VBOERnQixrQkFBQTtBVGlWaEI7QVMvWUE7RUFrRWdCLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RVRnVmQ7Ozs7O2lCQUtlO0FBQ2pCO0FTelVBO0VBR0ksa0JBQUE7RUFDQSxZQUFBO0VBRUEsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FUd1VKO0FTaFZBO0VObEZVLFNBQUE7RUFBVyxVQUFBO0VJRmpCLHFCQUFBO0FQeWFKO0FTclZBO0VGakZRLHFCQUFBO0FQeWFSO0FTeFZBO0VGOUVZLGNBQUE7RUFDQSxpQkFBQTtBUHlhWjtBUzVWQTtFUDlFSSxnQkFBQTtFTytGWSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QVQrVWhCO0FTN1VnQjs7RUFFSSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtBVCtVcEI7QVN6V0E7RUFnQ1kscUJBQUE7QVQ0VVo7QVMzVWE7O0VBRU8sdUJBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FUNlVwQiIsImZpbGUiOiJzcmMvcHJvZmlsZS9zdHlsZXMvaGVhZGVyLWRlc2t0b3AubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayB9XG4uaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYWtwb2ludC10YWJsZXQtdXApIHtcbiAgICAuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZTsgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jazsgfVxufVxuXG4iLCIuc2hvdy1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaGlkZS1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5zaG93LW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmhpZGUtb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5oZWFkZXItbm90aWZpY2F0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMjc2MDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yZW0gMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5oMSxcbmgyLFxucDpub3QoLmhlbHAtYmxvY2spLFxudWw6bm90KC5kcm9wZG93bi1tZW51KSxcbmxpLFxuYnV0dG9uLFxubGFiZWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5kaXYuc2V0dGluZ3MgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuZGl2LnNldHRpbmdzIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5idXR0b24ge1xuICBib3JkZXI6IDA7XG59XG4uZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCAjZmZmZmZmKSwgY29sb3Itc3RvcCgxMDAlLCAjZjVmNWY1KSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZmZmZiAwJSwgI2Y1ZjVmNSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyNmZmZmZmYnLCBlbmRDb2xvcnN0cj0nI2Y1ZjVmNScsIEdyYWRpZW50VHlwZT0wKTtcbn1cbi5ncmFkaWVudDpmaXJzdC1vZi10eXBlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFMkUyRTI7XG59XG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSA+IC5jb250YWluZXIge1xuICB0b3A6IC0xcHg7XG59XG4uYXJlYSB7XG4gIHBhZGRpbmc6IDIwcHggMTZweDtcbn1cbi5hcmVhLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzY1NjU2NTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uYXJlYS10aXRsZSAuY291bnQge1xuICBjb2xvcjogIzQzOTJFRjtcbn1cbi5hcmVhLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcmVhLWZvb3RlciBidXR0b24ubW9yZSB7XG4gIGNvbG9yOiAjNUU1RTVFO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHggMzVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmFyZWEtZm9vdGVyIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICB3aWR0aDogNjU0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcmVhLWZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuLnBkZi1jb250YWluZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5wbC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxucHItMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5pbWcubm9yZWNvcmQge1xuICBoZWlnaHQ6IDE4MHB4IWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1OXB4KSB7XG4gIC8qIC5hcmVhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH0qL1xufVxuLmlkZW50aXR5SW5mb3JtYXRpb24gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG4uaGVhZGVyLWNvbW1vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDcxOEY7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyLWNvbW1vbiBoMSxcbi5oZWFkZXItY29tbW9uIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5idXR0b24uYWN0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xufVxuYnV0dG9uLmFjdGlvbi5mdW5kcyB7XG4gIGJhY2tncm91bmQ6ICNBNjIyRjk7XG59XG5idXR0b24uYWN0aW9uLmF2YWlsYWJpbGl0eSB7XG4gIGJhY2tncm91bmQ6ICM3MENGM0Y7XG59XG5idXR0b24uYWN0aW9uLmNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kOiAjRkY4NDEwO1xufVxuYnV0dG9uLmFjdGlvbi5hYm91dCB7XG4gIGJhY2tncm91bmQ6ICMzRjkzRjQ7XG59XG4udmVyZmljYXRpb24ge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4udmVyaWZpZWQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLm1pc2MgLmFjdGlvbnMgbGk6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4IWltcG9ydGFudDtcbiAgfVxuICAjcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBsaSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDdweCFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5mb250LW5hbWUge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuLmZvbnQtbGlnaHQge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmZvbnQtcmVndWxhciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb250LXhib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5zaG93LW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmhpZGUtb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaG93LW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAuaGlkZS1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAjcHJvZmlsZS10YWJzIHVsIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zZWxlY3QtYXJyb3cge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtb3ZlcmZsb3c6ICcnO1xufVxuLnNlbGVjdC1hcnJvdzo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYmV0YS12ZXJzaW9uIHtcbiAgcGFkZGluZzogM3B4IDRweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogI2YyOGMzNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogJ0xhdG8nO1xufVxuYS5uby1vdXRsaW5lIHtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYS5uby1vdXRsaW5lOmhvdmVyLFxuYS5uby1vdXRsaW5lOmZvY3VzLFxuYS5uby1vdXRsaW5lOmFjdGl2ZSB7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uby1zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xufVxuLm5vLW1hci10b3Age1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4ubm8tbWFyLWJ0bSB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5tYXItMjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1hci0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubWFyLTEwLXZlciB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLm5vLW1hciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtb3ZlcmZsb3c6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy1ibGFjay5wbmcnKSBuby1yZXBlYXQgOTUlIDUwJSAjZmZmO1xufVxuLmRyb3Bkb3duOjotbXMtZXhwYW5kIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcbiAgd2lkdGg6IDE4MHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTA7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IGE6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG4uZHJvcGRvd24gLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzkyRUY7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmRyb3Bkb3duLm1vYmlsZSB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgdGV4dC1vdmVyZmxvdzogJyc7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VsZWN0LWFycm93LXdoaXRlLnBuZycpIG5vLXJlcGVhdCA5NSUgNTAlICMyMTM2NGU1YztcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duLm1vYmlsZTo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcGRvd24ubW9iaWxlIC5kcm9wYnRuIHtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duLm1vYmlsZSAuZHJvcGRvd24tY29udGVudCB7XG4gIG1pbi13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duLm1vYmlsZSAuZHJvcGRvd24tY29udGVudC5pbmFjdGl2ZSB7XG4gIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ3MThGO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAwIDQwcHggNDVweCAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjUpLCAjMTE2ZmJmYWQpLCB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlL3Byb2ZpbGUtYmctbmV3LmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgaDEsXG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCBoMiB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgbGFiZWwge1xuICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLndobyB7XG4gIHRvcDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWdyb3c6IDI7XG4gIG1hcmdpbi1sZWZ0OiAyM3B4O1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLndobyBoMSB7XG4gIGZvbnQtc2l6ZTogMi41ZW07XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAud2hvIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC53aG8gcCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAud2hvIC5yZXZpZXctY291bnQge1xuICBtYXJnaW4tbGVmdDogMC42ZW07XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAuYXZhdGFyIHtcbiAgd2lkdGg6IDE2NXB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgdG9wOiA5MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAvKlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uLz48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgKi9cbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIC5wcm9maWxlLXNjb3JlLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE1cHg7XG4gIHRvcDogMjVweDtcbn1cbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIC5hY3Rpb25zIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLm1pc2MgLmFjdGlvbnMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBidXR0b24uYWN0aW9uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgLypcbiAgICAgICAgICAgICAgICAub24tdGFibGV0KHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgKi9cbn1cbiNwcm9maWxlLXRhYnMge1xuICBtYXJnaW4tbGVmdDogMTY1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0VCRUJFQjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVCRUI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4jcHJvZmlsZS10YWJzIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4jcHJvZmlsZS10YWJzIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI3Byb2ZpbGUtdGFicyB1bCBsaSBhIHtcbiAgY29sb3I6ICM1NTU1NTU7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuI3Byb2ZpbGUtdGFicyB1bCBsaSBhIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMXB4IDEuNWVtO1xuICBjb2xvcjogIzk0OTQ5NDtcbiAgb3V0bGluZTogMDtcbn1cbiNwcm9maWxlLXRhYnMgdWwgbGkgYS5hY3RpdmUsXG4jcHJvZmlsZS10YWJzIHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI0YyNzYwMTtcbiAgYm9yZGVyLWJvdHRvbTogMC4yZW0gc29saWQgI0YyNzYwMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuI3Byb2ZpbGUtdGFicyB1bCBsaSAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuI3Byb2ZpbGUtdGFicyB1bCBsaSAuZHJvcGRvd24tY29udGVudCBhLmFjdGl2ZSxcbiNwcm9maWxlLXRhYnMgdWwgbGkgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiB1bnNldCFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzL2FsbCc7XG5AaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL21peGlucy9hbGwnO1xuQGltcG9ydCAnLi9yZXNwb25zaXZlJztcblxuQGFyZWEtZ2FwOiAyMHB4O1xuQGFyZWEtYnJlYWstcG9pbnQ6IDc1OXB4O1xuQHNjYWxlLWltZy13aWR0aDogMzZweDtcblxuLmhlYWRlci1ub3RpZmljYXRpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJpbWFyeS1vcmFuZ2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4yZW0gMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAuZm9udC1saWdodCgpO1xufVxuXG5oMSwgaDIsIHA6bm90KC5oZWxwLWJsb2NrKSwgdWw6bm90KC5kcm9wZG93bi1tZW51KSwgbGksIGJ1dHRvbiwgbGFiZWwge1xuICAgIC5uby1tYXIoKTtcbn1cbmRpdi5zZXR0aW5ncyB7XG4gICBsYWJlbCB7IGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgfVxuICAgaW5wdXR7XG4gICB3aWR0aDogMTAwJTtcbiAgIH1cblxuICAgfVxuYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5pbnB1dC1idG4oKSB7XG4gICAgLmZvbnQtYm9sZCgpO1xuICAgIG1pbi13aWR0aDogMTEwcHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpKSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZmZmZmZicsIGVuZENvbG9yc3RyPScjZjVmNWY1JywgR3JhZGllbnRUeXBlPTAgKTtcbn1cblxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUge1xuICAgIEBib3JkZXItc2l6ZTogMXB4O1xuICAgIGJvcmRlci10b3A6IEBib3JkZXItc2l6ZSBzb2xpZCAjRTJFMkUyO1xuXG4gICAgJj4gLmNvbnRhaW5lciB7XG4gICAgICAgIHRvcDogLShAYm9yZGVyLXNpemUpO1xuICAgIH1cbn1cblxuLmFyZWEge1xuICAgIHBhZGRpbmc6IEBhcmVhLWdhcCAxNnB4O1xufVxuXG4uYXJlYS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjNjU2NTY1O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O2hlaWdodDoyNHB4O1xuICAgIFxuICAgIC5jb3VudCB7XG4gICAgICAgIGNvbG9yOiBAcHJpbWFyeS1ibHVlO1xuICAgIH1cbn1cblxuLmFyZWEtZm9vdGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgYnV0dG9uLm1vcmUge1xuICAgICAgICAubW9yZSgpO1xuICAgIH1cblxuICAgIC5vbi1tb2JpbGUoe1xuICAgICAgICBtYXJnaW46IEBhcmVhLWdhcCAwO3dpZHRoOjY1NHB4O1xuICAgIH0pO1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVhcG9pbnQtcGhvbmUtdXApIHtcbiAgICAgICAgbWFyZ2luOiBAYXJlYS1nYXAgYXV0byFpbXBvcnRhbnQ7d2lkdGg6YXV0bztcbiAgIH1cbn1cblxuLnBkZi1jb250YWluZXIge1xuICAgIC5uby1tYXIoKTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbnBsLTB7XG4gICAgcGFkZGluZy1sZWZ0OjA7XG59XG5cbnByLTB7XG4gICAgcGFkZGluZy1yaWdodDowO1xufVxuaW1nLm5vcmVjb3Jke1xuICBoZWlnaHQ6IDE4MHB4IWltcG9ydGFudDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBhcmVhLWJyZWFrLXBvaW50KSB7XG4gICAvKiAuYXJlYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9Ki9cbn1cblxuLmlkZW50aXR5SW5mb3JtYXRpb24ge1xuICAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICB9XG59XG4iLCIuZm9udC1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9udC1saWdodCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZvbnQtcmVndWxhciB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvbnQtYm9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvbnQteGJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59IiwiLm5vLW1hci10b3AgeyBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7IH1cbi5uby1tYXItYnRtIHsgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4ubWFyLTIwIHsgbWFyZ2luLXRvcDogMjBweDsgfVxuLm1hci0zMCB7IG1hcmdpbi10b3A6IDMwcHg7IH1cbi5tYXItMTAtdmVyIHsgbWFyZ2luOiAxMHB4IDA7IH07XG4ubm8tbWFyIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XG4iLCJAaW1wb3J0ICcuLi92YXJpYWJsZXMvYWxsJztcblxuLm1vcmUoKSB7XG4gICAgY29sb3I6ICM1RTVFNUU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTVweCAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmJ0bigpIHtcbiAgICAuZm9udC1ib2xkKCk7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5wcmltYXJ5KCkge1xuICAgICAuYnRuKCk7XG4gICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQHByaW1hcnktYmx1ZS1kYXJrO1xuICAgIH1cbn1cbi5kYW5nZXIoKSB7XG4gICAgIC5idG4oKTtcbiAgICAgYmFja2dyb3VuZDogQGRhbmdlci1yZWQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQHByaW1hcnktcmVkO1xuICAgIH1cbn1cblxuLnNhdmUoKSB7XG4gICAgLmJ0bigpO1xuICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1saWdodDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogQHByaW1hcnktb3JhbmdlLWRhcmtlcjtcbiAgICB9XG59IiwiQGJyZWFrcG9pbnQtc21hbGwtZG93bjogNTc1cHg7XG5AYnJlYXBvaW50LXBob25lLWRvd246IDc2N3B4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWRvd246IDk5MXB4O1xuQGJyZWFrcG9pbnQtZGVza3RvcC1kb3duOiAxMTk5cHg7XG5AYnJlYWtwb2ludC1zbWFsbC11cDogNTc2cHg7XG5AYnJlYXBvaW50LXBob25lLXVwOiA3NjhweDtcbkBicmVha3BvaW50LXRhYmxldC11cDogOTkycHg7XG5AYnJlYWtwb2ludC1kZXNrdG9wLXVwOiAxMjAwcHg7XG5AYnJlYXBvaW50LXBob25lLW1pbi1kb3duOiA3NTlweDtcbkBicmVha3BvaW50LW1pbmktc21hbGw6IDQyMHB4O1xuQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cDogMTAyNHB4O1xuXG4ucmVzcG9uc2l2ZS1tYXgoQG1heFdpZHRoOyBAcnVsZXMpIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBtYXhXaWR0aCkge1xuICAgICAgICBAcnVsZXMoKTtcbiAgICB9XG59XG5cbi5yZXNwb25zaXZlLW1pbihAbWF4V2lkdGg7IEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogQG1heFdpZHRoKSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLm9uLWRlc2t0b3AoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWluKEBicmVha3BvaW50LWRlc2t0b3AtZG93biwgQHJ1bGVzKTtcbn1cblxuLm9uLWxhcmdlLXNjcmVlbihAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1taW4oQGJyZWFwb2ludC1waG9uZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLXRhYmxldChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtZGVza3RvcC11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZShAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LXVwLCBAcnVsZXMpO1xufVxuXG4ub24taXBhZChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1tYXgoQGJyZWFrcG9pbnQtdGFibGV0LWxhbmRzY2FwZS11cCwgQHJ1bGVzKTtcbn1cblxuLm9uLW1vYmlsZS1kb3duKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYXBvaW50LXBob25lLW1pbi1kb3duLCBAcnVsZXMpO1xufVxuLm9uLW1pbmktc21hbGwtbW9iaWxlKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC1taW5pLXNtYWxsLCBAcnVsZXMpO1xufVxuXG4uc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBAYnJlYXBvaW50LXBob25lLXVwKSB7XG4gICAgLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAgIC5oaWRlLW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVha3BvaW50LXRhYmxldC11cCkge1xuI3Byb2ZpbGUtdGFic3tcbiAgIHVsIGxpIGEge1xuICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcbiAgIH1cbn0gXG59XG5cbiIsIkBpbXBvcnQgJy4vY29tbW9uJztcblxuQGhlYWRlci1iZy1oZWlnaHQ6IDIwMHB4O1xuXG4uaGVhZGVyLWNvbW1vbiB7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDcxOEY7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBjb2xvcjogI2ZmZjtcblxuICAgIGgxLCBoMiB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAuZm9udC1saWdodCgpOyBcbiAgICB9XG59XG5cbmJ1dHRvbi5hY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgXG4gICAgJi5mdW5kcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4tcmVmZXItY29sb3I7XG4gICAgfVxuXG4gICAgJi5hdmFpbGFiaWxpdHkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAYnRuLWF2YWlsYWJpbGl0eS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmNvbnRhY3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtbGlnaHQ7XG4gICAgfVxuXG4gICAgJi5hYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4taGlyZS1jb2xvcjtcbiAgICB9XG59XG4udmVyZmljYXRpb257XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLnZlcmlmaWVke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgIG1hcmdpbi1yaWdodDogMHB4IWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHghaW1wb3J0YW50O1xufVxuI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLm1pc2MgLmFjdGlvbnMgbGl7XG4gICAgYnV0dG9ue1xuICAgICB3aWR0aDogMTA3cHghaW1wb3J0YW50O1xuICAgIH1cbn1cbn1cbiIsIi51bC1uYXYtZGVmYXVsdHMoKSB7XG4gICAgLm5vLW1hcigpO1xuICAgIFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IEBuYXYtY29sb3I7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlbGVjdC1hcnJvdyB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHRleHQtb3ZlcmZsb3c6ICcnO1xuXG4gICAgJjo6LW1zLWV4cGFuZCB7IFxuICAgICAgICBkaXNwbGF5OiBub25lOyBcbiAgICB9XG59XG5cbi5zZWxlY3QtYXJyb3ctYmxhY2soQGJhY2tncm91bmQtY29sb3I6ICNmZmYpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctYmxhY2sucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLnNlbGVjdC1hcnJvdy13aGl0ZShAYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctd2hpdGUucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cbi5zZWxlY3QtYXJyb3ctd2hpdGUtbW9iaWxlKEBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEzNjRlNWMpIHtcbiAgICAuc2VsZWN0LWFycm93KCk7XG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctd2hpdGUucG5nJylcbiAgICAgICAgICAgICAgICBuby1yZXBlYXQgOTUlIDUwJSBAYmFja2dyb3VuZC1jb2xvcjtcbn1cblxuLmlubGluZS1saXN0KCkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblxuICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbn1cblxuLmJldGEtdmVyc2lvbiB7XG4gICAgcGFkZGluZzogM3B4IDRweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjI4YzM1O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbn1cblxuYS5uby1vdXRsaW5lIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59XG5cbi5uby1zZWxlY3Qge1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xuICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn0iLCJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy9hbGwnO1xuQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy9taXhpbnMvYWxsJztcblxuLmRyb3Bkb3duIHtcbiAgICBAd2lkdGg6IDE4MHB4O1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcbiAgICAuc2VsZWN0LWFycm93LWJsYWNrKCk7XG5cbiAgICAmOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmRyb3BidG4ge1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICAuZm9udC1saWdodCgpO1xuICAgICAgICBcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgIG1pbi13aWR0aDogQHdpZHRoO1xuICAgICAgICBcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIgeyBcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHByaW1hcnktYmx1ZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxufVxuXG4uZHJvcGRvd24ubW9iaWxlIHtcbiAgICAgLnNlbGVjdC1hcnJvdy13aGl0ZS1tb2JpbGUoKTtcbiAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgICAuZHJvcGJ0biB7XG4gICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgIH1cbiAgICAgLmRyb3Bkb3duLWNvbnRlbnR7XG4gICAgICBtaW4td2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDEwMCFpbXBvcnRhbnQ7XG4gICAgIH1cbiAgICAuZHJvcGRvd24tY29udGVudC5pbmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xuICAgfVxufSIsIkBpbXBvcnQgJy4vaGVhZGVyLWNvbW1vbic7XG5AaW1wb3J0ICcuL2Ryb3Bkb3duJztcbkBoZWFkZXItcGFkZGluZzogNDBweDtcbkB0YWJzLWhlaWdodDogNTBweDtcbkBhY3Rpb24tc3BhY2luZzogMTBweDtcbkBhY3Rpb24tYnRuLWhlaWdodDogNTBweDtcbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIHtcbiAgICAuaGVhZGVyLWNvbW1vbigpO1xuXG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGhlaWdodDogQGhlYWRlci1iZy1oZWlnaHQ7XG4gICAgcGFkZGluZzogMCBAaGVhZGVyLXBhZGRpbmcgNDVweCAwO1xuXG4gICAgXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMCwgMCwgMCwgMC41KSwgIzExNmZiZmFkKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvZmlsZS9wcm9maWxlLWJnLW5ldy5qcGcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLndobyB7XG4gICAgICAgIHRvcDogNjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmbGV4LWdyb3c6IDI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyM3B4O1xuXG4gICAgICAgIGgxIHsgZm9udC1zaXplOiAyLjVlbTsgfVxuICAgICAgICBoMiB7IG1hcmdpbi1ib3R0b206IDEwcHg7IGZvbnQtc2l6ZTogMS44ZW07IH1cbiAgICAgICAgcCAgeyBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XG5cbiAgICAgICAgLnJldmlldy1jb3VudCB7IG1hcmdpbi1sZWZ0OiAuNmVtOyB9XG4gICAgfVxuXG4gICAgLmF2YXRhciB7XG4gICAgICAgIEBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICB3aWR0aDogQHByb2ZpbGUtcGljLWxnLXdpZHRoO1xuICAgICAgICBoZWlnaHQ6IEBwcm9maWxlLXBpYy1sZy1oZWlnaHQ7XG4gICAgICAgIGJvcmRlci10b3A6IEBib3JkZXI7XG4gICAgICAgIGJvcmRlci1yaWdodDogQGJvcmRlcjtcbiAgICAgICAgXG4gICAgICAgIHRvcDogKEB0YWJzLWhlaWdodCArIEBoZWFkZXItcGFkZGluZyk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAubWlzYyB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBcbiAgICAgICAgLypcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbi8+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICovXG4gICAgICAgIFxuICAgICAgICAucHJvZmlsZS1zY29yZS1zZWN0aW9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aW9ucyB7XG4gICAgICAgICAgICAuaW5saW5lLWxpc3QoKTtcblxuICAgICAgICAgICAgbWFyZ2luLXRvcDogQGFjdGlvbi1zcGFjaW5nO1xuXG4gICAgICAgICAgICBsaTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogQGFjdGlvbi1zcGFjaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24uYWN0aW9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IEBhY3Rpb24tYnRuLWhlaWdodDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAub24tdGFibGV0KHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjNlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuI3Byb2ZpbGUtdGFicyB7XG4gICAgQGJvcmRlcjogMXB4IHNvbGlkICNFQkVCRUI7XG5cbiAgICBtYXJnaW4tbGVmdDogQHByb2ZpbGUtcGljLWxnLXdpZHRoO1xuICAgIGhlaWdodDogQHRhYnMtaGVpZ2h0O1xuXG4gICAgYm9yZGVyLXJpZ2h0OiBAYm9yZGVyO1xuICAgIGJvcmRlci1ib3R0b206IEBib3JkZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIHVsIHtcbiAgICAgICAgLnVsLW5hdi1kZWZhdWx0cygpO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIC5mb250LXJlZ3VsYXIoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTFweCAxLjVlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk0OTQ5NDtcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUsXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBAcHJpbWFyeS1vcmFuZ2U7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IC4yZW0gc29saWQgQHByaW1hcnktb3JhbmdlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgICAgICBhe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICAgICAgICAgICAgICYuYWN0aXZlLFxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmYhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiB1bnNldCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/profile/styles/header-mobile.less":
/*!***********************************************!*\
  !*** ./src/profile/styles/header-mobile.less ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".show-on-desktop {\n  display: block;\n}\n.hide-on-desktop {\n  display: none;\n}\n@media screen and (max-width: 992px) {\n  .show-on-desktop {\n    display: none;\n  }\n  .hide-on-desktop {\n    display: block;\n  }\n}\n.header-notifications {\n  background-color: #F27601;\n  text-align: center;\n  padding: 0.2em 0;\n  color: #fff;\n  font-weight: 300;\n}\nh1,\nh2,\np:not(.help-block),\nul:not(.dropdown-menu),\nli,\nbutton,\nlabel {\n  margin: 0;\n  padding: 0;\n}\ndiv.settings label {\n  display: block;\n  margin-bottom: 0.5rem;\n}\ndiv.settings input {\n  width: 100%;\n}\nbutton {\n  border: 0;\n}\n.gradient {\n  background: #ffffff;\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #ffffff), color-stop(100%, #f5f5f5));\n  background: linear-gradient(to bottom, #ffffff 0%, #f5f5f5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);\n}\n.gradient:first-of-type {\n  border-top: 1px solid #E2E2E2;\n}\n.gradient:first-of-type > .container {\n  top: -1px;\n}\n.area {\n  padding: 20px 16px;\n}\n.area-title {\n  font-size: 20px;\n  color: #656565;\n  letter-spacing: 0.5px;\n  margin-bottom: 16px;\n  height: 24px;\n}\n.area-title .count {\n  color: #4392EF;\n}\n.area-footer {\n  text-align: center;\n}\n.area-footer button.more {\n  color: #5E5E5E;\n  border: 1px solid #D9D9D9;\n  border-radius: 5px;\n  padding: 15px 35px;\n  letter-spacing: 0.35px;\n  background: #fff;\n}\n@media only screen and (max-width: 992px) {\n  .area-footer {\n    margin: 20px 0;\n    width: 654px;\n  }\n}\n@media screen and (max-width: 768px) {\n  .area-footer {\n    margin: 20px auto !important;\n    width: auto;\n  }\n}\n.pdf-container {\n  margin: 0;\n  padding: 0;\n  height: 100vh;\n  width: 100%;\n  border: none;\n}\npl-0 {\n  padding-left: 0;\n}\npr-0 {\n  padding-right: 0;\n}\nimg.norecord {\n  height: 180px!important;\n}\n@media screen and (max-width: 759px) {\n  /* .area {\n        text-align: center;\n    }*/\n}\n.identityInformation img {\n  height: 100%;\n  width: 100%;\n  border: 1px solid;\n}\n.header-common {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n}\n.header-common h1,\n.header-common h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\nbutton.action {\n  font-size: 16px;\n  color: #fff;\n  letter-spacing: 0.4px;\n}\nbutton.action.funds {\n  background: #A622F9;\n}\nbutton.action.availability {\n  background: #70CF3F;\n}\nbutton.action.contact {\n  background: #FF8410;\n}\nbutton.action.about {\n  background: #3F93F4;\n}\n.verfication {\n  font-size: 13px;\n}\n.verified {\n  display: block;\n}\n@media only screen and (max-width: 992px) {\n  #profile-header-desktop .misc .actions li:not(:last-of-type) {\n    margin-right: 0px!important;\n    margin-bottom: 5px!important;\n  }\n  #profile-header-desktop .misc .actions li button {\n    width: 107px!important;\n  }\n}\n.font-name {\n  font-family: 'Lato', sans-serif;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-regular {\n  font-weight: 400;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-xbold {\n  font-weight: 900;\n}\n.show-on-desktop {\n  display: block !important;\n}\n.hide-on-desktop {\n  display: none !important;\n}\n@media screen and (max-width: 768px) {\n  .show-on-desktop {\n    display: none !important;\n  }\n  .hide-on-desktop {\n    display: block !important;\n  }\n}\n@media screen and (max-width: 992px) {\n  #profile-tabs ul li a {\n    font-size: 12px!important;\n  }\n}\n.select-arrow {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n}\n.select-arrow::-ms-expand {\n  display: none;\n}\n.beta-version {\n  padding: 3px 4px;\n  margin-top: 3px;\n  color: #fff;\n  border-radius: 10px;\n  background: #f28c35;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-size: 10px;\n  font-family: 'Lato';\n}\na.no-outline {\n  outline: 0;\n  text-decoration: none;\n}\na.no-outline:hover,\na.no-outline:focus,\na.no-outline:active {\n  outline: 0;\n  text-decoration: none;\n}\n.no-select {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome and Opera */\n}\n.no-mar-top {\n  margin-top: 0 !important;\n}\n.no-mar-btm {\n  margin-bottom: 0 !important;\n}\n.mar-20 {\n  margin-top: 20px;\n}\n.mar-30 {\n  margin-top: 30px;\n}\n.mar-10-ver {\n  margin: 10px 0;\n}\n.no-mar {\n  margin: 0;\n  padding: 0;\n}\n.dropdown {\n  position: relative;\n  display: inline-block;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n  background: url('/assets/images/select-arrow-black.png') no-repeat 95% 50% #fff;\n}\n.dropdown::-ms-expand {\n  display: none;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n.dropdown .dropbtn {\n  width: 180px;\n  font-weight: 300;\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  padding: 10px 0;\n  font-size: 16px;\n  text-align: center;\n  letter-spacing: 0.02em;\n}\n.dropdown .dropdown-content {\n  min-width: 180px;\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 10;\n}\n.dropdown .dropdown-content a {\n  display: block;\n  color: #333;\n  padding: 15px;\n  text-decoration: none;\n  text-align: left;\n}\n.dropdown .dropdown-content a:not(:last-of-type) {\n  border-bottom: 1px solid #eee;\n}\n.dropdown .dropdown-content a:hover {\n  background-color: #4392EF;\n  color: #fff;\n}\n.dropdown.mobile {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  -webkit-border-radius: 0px;\n  background-repeat: no-repeat;\n  text-overflow: '';\n  background: url('/assets/images/select-arrow-white.png') no-repeat 95% 50% #21364e5c;\n  width: 100%!important;\n}\n.dropdown.mobile::-ms-expand {\n  display: none;\n}\n.dropdown.mobile .dropbtn {\n  width: 100%!important;\n}\n.dropdown.mobile .dropdown-content {\n  min-width: 100%!important;\n  width: 100!important;\n}\n.dropdown.mobile .dropdown-content.inactive {\n  display: none!important;\n}\n#profile-header-mobile {\n  background-color: #54718F;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #fff;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), #116fbfad), url('profile-bg-new.jpg');\n  background-size: cover;\n  text-align: center;\n}\n#profile-header-mobile h1,\n#profile-header-mobile h2 {\n  letter-spacing: 0;\n  font-weight: 300;\n}\n#profile-header-mobile .avatar {\n  margin-top: 20px;\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}\n#profile-header-mobile .who h1 {\n  font-weight: 400;\n  margin-top: 10px;\n  font-size: 30px;\n}\n#profile-header-mobile .who h2 {\n  margin-top: 5px;\n  font-size: 20px;\n}\n#profile-header-mobile p {\n  margin-top: 5px;\n}\n#profile-header-mobile footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0px;\n  padding: 10px 0;\n  color: #dedede;\n  border-top: 1px solid #6D8691;\n}\n#profile-header-mobile footer:before {\n  content: '';\n}\n#profile-header-mobile footer .industryscore {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n#profile-header-mobile footer .budget,\n#profile-header-mobile footer .industryscore {\n  margin: 0 1em;\n  text-align: center;\n}\n.actions {\n  list-style-type: none;\n  -moz-column-count: 2;\n       column-count: 2;\n  -moz-column-gap: 1px;\n       column-gap: 1px;\n  margin-top: 1px;\n}\n.actions .action {\n  margin-bottom: 1px;\n  text-align: center;\n  height: 50px;\n  width: 100%;\n}\n.header-action-buttons .actions {\n  -moz-column-count: 1;\n       column-count: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvcmVzcG9uc2l2ZS5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL2hlYWRlci1tb2JpbGUubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvcHJvZmlsZS9zdHlsZXMvY29tbW9uLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2ZvbnRzLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3NoYXJlZC9zdHlsZXMvbWl4aW5zL3NwYWNpbmcubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvYnV0dG9ucy5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9zaGFyZWQvc3R5bGVzL21peGlucy9yZXNwb25zaXZlLmxlc3MiLCJzcmMvcHJvZmlsZS9zdHlsZXMvRDovUHJvamVjdHMvcGFydG5lci9ncmFuZC1wYXJ0bmVycy13ZWIvc3JjL3Byb2ZpbGUvc3R5bGVzL2hlYWRlci1jb21tb24ubGVzcyIsInNyYy9wcm9maWxlL3N0eWxlcy9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvc2hhcmVkL3N0eWxlcy9taXhpbnMvd2lkZ2V0cy5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9kcm9wZG93bi5sZXNzIiwic3JjL3Byb2ZpbGUvc3R5bGVzL0Q6L1Byb2plY3RzL3BhcnRuZXIvZ3JhbmQtcGFydG5lcnMtd2ViL3NyYy9wcm9maWxlL3N0eWxlcy9oZWFkZXItbW9iaWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBbUIsY0FBQTtBQ0VuQjtBRERBO0VBQW1CLGFBQUE7QUNJbkI7QURGQTtFQUNJO0lBQW1CLGFBQUE7RUNLckI7RURKRTtJQUFtQixjQUFBO0VDT3JCO0FBQ0Y7QUNMQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUNQQSxnQkFBQTtBRmVKO0FDSkE7Ozs7Ozs7RUVYVSxTQUFBO0VBQVcsVUFBQTtBSHlCckI7QUNYQTtFQUNXLGNBQUE7RUFDUCxxQkFBQTtBRGFKO0FDZkE7RUFLRyxXQUFBO0FEYUg7QUNUQTtFQUNJLFNBQUE7QURXSjtBQ0NBO0VBQ0ksbUJBQUE7RUFFQSx1R0FBQTtFQUlBLGdFQUFBO0VBQ0Esa0hBQUE7QURDSjtBQ0VBO0VBRUksNkJBQUE7QURESjtBQ0dJO0VBQ0ksU0FBQTtBRERSO0FDS0E7RUFDSSxrQkFBQTtBREhKO0FDTUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFBb0IsWUFBQTtBREh4QjtBQ0RBO0VBT1EsY0FBQTtBREhSO0FDT0E7RUFDSSxrQkFBQTtBRExKO0FDSUE7RUd6RUksY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUp3RUo7QUtuRUk7RUFBQTtJSnVFSSxjQUFBO0lBQW9CLFlBQUE7RURDMUI7QUFDRjtBQ0FJO0VBQUE7SUFDSSw0QkFBQTtJQUFpQyxXQUFBO0VESXZDO0FBQ0Y7QUNEQTtFRXRGVSxTQUFBO0VBQVcsVUFBQTtFRndGakIsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FESUo7QUNGQTtFQUNJLGVBQUE7QURJSjtBQ0RBO0VBQ0ksZ0JBQUE7QURHSjtBQ0RBO0VBQ0UsdUJBQUE7QURHRjtBQ0RBO0VER0U7O01BRUk7QUFDTjtBQ0FBO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRENKO0FNbEhBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FOb0hKO0FNekhBOztFQVFRLGlCQUFBO0VKUEosZ0JBQUE7QUY2SEo7QU1qSEE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FObUhKO0FNakhJO0VBQ0ksbUJBQUE7QU5tSFI7QU1oSEk7RUFDSSxtQkFBQTtBTmtIUjtBTS9HSTtFQUNJLG1CQUFBO0FOaUhSO0FNOUdJO0VBQ0ksbUJBQUE7QU5nSFI7QU03R0E7RUFDSSxlQUFBO0FOK0dKO0FNN0dBO0VBQ0ksY0FBQTtBTitHSjtBTTVHQTtFQUNBO0lBQ0ksMkJBQUE7SUFDQSw0QkFBQTtFTjhHRjtFTTVHRjtJQUVLLHNCQUFBO0VONkdIO0FBQ0Y7QUVsS0E7RUFDSSwrQkFBQTtBRm9LSjtBRWpLQTtFQUNJLGdCQUFBO0FGbUtKO0FFaEtBO0VBQ0ksZ0JBQUE7QUZrS0o7QUUvSkE7RUFDSSxnQkFBQTtBRmlLSjtBRTlKQTtFQUNJLGdCQUFBO0FGZ0tKO0FLOUhBO0VBQW1CLHlCQUFBO0FMaUluQjtBS2hJQTtFQUFtQix3QkFBQTtBTG1JbkI7QUtqSUE7RUFDSTtJQUFtQix3QkFBQTtFTG9JckI7RUtuSUU7SUFBbUIseUJBQUE7RUxzSXJCO0FBQ0Y7QUtwSUE7RUFDQTtJQUVHLHlCQUFBO0VMcUlEO0FBQ0Y7QU9yTEE7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FQdUxKO0FPckxJO0VBQ0ksYUFBQTtBUHVMUjtBTzFKQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBUDRKSjtBT3pKQTtFQUNJLFVBQUE7RUFDQSxxQkFBQTtBUDJKSjtBT3pKSTs7O0VBR0ksVUFBQTtFQUNBLHFCQUFBO0FQMkpSO0FPdkpBO0VBQ0ksMkJBQUE7RVB5SkYsZUFBZTtFT3hKYix5QkFBQTtFUDBKRixXQUFXO0VBRVgsbUJBQW1CO0VPMUpkLHNCQUFBO0VQNEpMLFlBQVk7RU8zSk4scUJBQUE7RVA2Sk4sMkJBQTJCO0VPNUpqQixpQkFBQTtFUDhKVjtpRUFDK0Q7QUFDakU7QUdsUEE7RUFBYyx3QkFBQTtBSHFQZDtBR3BQQTtFQUFjLDJCQUFBO0FIdVBkO0FHdFBBO0VBQVUsZ0JBQUE7QUh5UFY7QUd4UEE7RUFBVSxnQkFBQTtBSDJQVjtBRzFQQTtFQUFjLGNBQUE7QUg2UGQ7QUc1UEE7RUFBVSxTQUFBO0VBQVcsVUFBQTtBSGdRckI7QVFsUUE7RUFHSSxrQkFBQTtFQUNBLHFCQUFBO0VEU0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQVNBLCtFQUFBO0FQa1BKO0FPelBJO0VBQ0ksYUFBQTtBUDJQUjtBUXZRSTtFQUNJLGNBQUE7QVJ5UVI7QVFsUkE7RUFhUSxZQUFBO0VOWEosZ0JBQUE7RU1jSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FSdVFSO0FRL1JBO0VBNEJRLGdCQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFdBQUE7QVJxUVI7QVF2U0E7RUFzQ1EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBUm9RUjtBUWxRUTtFQUNJLDZCQUFBO0FSb1FaO0FRalRBO0VBaURRLHlCQUFBO0VBQ0EsV0FBQTtBUm1RUjtBUS9QQTtFRHpDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBb0JBLG9GQUFBO0VDbUJDLHFCQUFBO0FSc1FMO0FPM1NJO0VBQ0ksYUFBQTtBUDZTUjtBUTNRQTtFQUlNLHFCQUFBO0FSMFFOO0FROVFBO0VBT00seUJBQUE7RUFDQSxvQkFBQTtBUjBRTjtBUWxSQTtFQVdRLHVCQUFBO0FSMFFSO0FTelVBO0VIQUkseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBRUEsV0FBQTtFR0RBLDJGQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBVDZVSjtBU2xWQTs7RUhPUSxpQkFBQTtFSlBKLGdCQUFBO0FGdVZKO0FTdlZBO0VBUVEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FUa1ZSO0FTN1ZBO0VQSUksZ0JBQUE7RU9hUSxnQkFBQTtFQUNBLGVBQUE7QVRnVlo7QVNsV0E7RUFzQlksZUFBQTtFQUNBLGVBQUE7QVQrVVo7QVN0V0E7RUE0QlEsZUFBQTtBVDZVUjtBU3pXQTtFQXNDUSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtFQUNBLDZCQUFBO0FUb1VSO0FTaFZRO0VBQ0ksV0FBQTtBVGtWWjtBU3JYQTtFQWlEWSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBVHVVWjtBUzFYQTs7RUF3RFksYUFBQTtFQUNBLGtCQUFBO0FUc1VaO0FTalVBO0VBRUkscUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxlQUFBO0FUa1VKO0FTdlVBO0VBUVEsa0JBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FUaVVSO0FTN1RBO0VBRVEsb0JBQUE7T0FBQSxlQUFBO0FUOFRSIiwiZmlsZSI6InNyYy9wcm9maWxlL3N0eWxlcy9oZWFkZXItbW9iaWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2sgfVxuLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFrcG9pbnQtdGFibGV0LXVwKSB7XG4gICAgLnNob3ctb24tZGVza3RvcCB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAuaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogYmxvY2s7IH1cbn1cblxuIiwiLnNob3ctb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhpZGUtb24tZGVza3RvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5oaWRlLW9uLWRlc2t0b3Age1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uaGVhZGVyLW5vdGlmaWNhdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjI3NjAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuMmVtIDA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuaDEsXG5oMixcbnA6bm90KC5oZWxwLWJsb2NrKSxcbnVsOm5vdCguZHJvcGRvd24tbWVudSksXG5saSxcbmJ1dHRvbixcbmxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuZGl2LnNldHRpbmdzIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbmRpdi5zZXR0aW5ncyBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xufVxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgI2ZmZmZmZiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y1ZjVmNSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmZmZmYgMCUsICNmNWY1ZjUgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmIDAlLCAjZjVmNWY1IDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNWY1ZjUnLCBHcmFkaWVudFR5cGU9MCk7XG59XG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTJFMkUyO1xufVxuLmdyYWRpZW50OmZpcnN0LW9mLXR5cGUgPiAuY29udGFpbmVyIHtcbiAgdG9wOiAtMXB4O1xufVxuLmFyZWEge1xuICBwYWRkaW5nOiAyMHB4IDE2cHg7XG59XG4uYXJlYS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmFyZWEtdGl0bGUgLmNvdW50IHtcbiAgY29sb3I6ICM0MzkyRUY7XG59XG4uYXJlYS1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXJlYS1mb290ZXIgYnV0dG9uLm1vcmUge1xuICBjb2xvcjogIzVFNUU1RTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjM1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hcmVhLWZvb3RlciB7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgd2lkdGg6IDY1NHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXJlYS1mb290ZXIge1xuICAgIG1hcmdpbjogMjBweCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5wZGYtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxucGwtMCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbnByLTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuaW1nLm5vcmVjb3JkIHtcbiAgaGVpZ2h0OiAxODBweCFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTlweCkge1xuICAvKiAuYXJlYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9Ki9cbn1cbi5pZGVudGl0eUluZm9ybWF0aW9uIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xufVxuLmhlYWRlci1jb21tb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ3MThGO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhlYWRlci1jb21tb24gaDEsXG4uaGVhZGVyLWNvbW1vbiBoMiB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuYnV0dG9uLmFjdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cbmJ1dHRvbi5hY3Rpb24uZnVuZHMge1xuICBiYWNrZ3JvdW5kOiAjQTYyMkY5O1xufVxuYnV0dG9uLmFjdGlvbi5hdmFpbGFiaWxpdHkge1xuICBiYWNrZ3JvdW5kOiAjNzBDRjNGO1xufVxuYnV0dG9uLmFjdGlvbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZDogI0ZGODQxMDtcbn1cbmJ1dHRvbi5hY3Rpb24uYWJvdXQge1xuICBiYWNrZ3JvdW5kOiAjM0Y5M0Y0O1xufVxuLnZlcmZpY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnZlcmlmaWVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIC5hY3Rpb25zIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDVweCFpbXBvcnRhbnQ7XG4gIH1cbiAgI3Byb2ZpbGUtaGVhZGVyLWRlc2t0b3AgLm1pc2MgLmFjdGlvbnMgbGkgYnV0dG9uIHtcbiAgICB3aWR0aDogMTA3cHghaW1wb3J0YW50O1xuICB9XG59XG4uZm9udC1uYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbn1cbi5mb250LWxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5mb250LXJlZ3VsYXIge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmZvbnQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9udC14Ym9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uc2hvdy1vbi1kZXNrdG9wIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5oaWRlLW9uLWRlc2t0b3Age1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2hvdy1vbi1kZXNrdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmhpZGUtb24tZGVza3RvcCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgI3Byb2ZpbGUtdGFicyB1bCBsaSBhIHtcbiAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xuICB9XG59XG4uc2VsZWN0LWFycm93IHtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0ZXh0LW92ZXJmbG93OiAnJztcbn1cbi5zZWxlY3QtYXJyb3c6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJldGEtdmVyc2lvbiB7XG4gIHBhZGRpbmc6IDNweCA0cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmMjhjMzU7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJztcbn1cbmEubm8tb3V0bGluZSB7XG4gIG91dGxpbmU6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmEubm8tb3V0bGluZTpob3ZlcixcbmEubm8tb3V0bGluZTpmb2N1cyxcbmEubm8tb3V0bGluZTphY3RpdmUge1xuICBvdXRsaW5lOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubm8tc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAvKiBpT1MgU2FmYXJpICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIFNhZmFyaSAqL1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEtvbnF1ZXJvciBIVE1MICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSBhbmQgT3BlcmEgKi9cbn1cbi5uby1tYXItdG9wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLm5vLW1hci1idG0ge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubWFyLTIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYXItMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLm1hci0xMC12ZXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5uby1tYXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB0ZXh0LW92ZXJmbG93OiAnJztcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9zZWxlY3QtYXJyb3ctYmxhY2sucG5nJykgbm8tcmVwZWF0IDk1JSA1MCUgI2ZmZjtcbn1cbi5kcm9wZG93bjo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kcm9wZG93biAuZHJvcGJ0biB7XG4gIHdpZHRoOiAxODBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDEwO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kcm9wZG93biAuZHJvcGRvd24tY29udGVudCBhOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xufVxuLmRyb3Bkb3duIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM5MkVGO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5kcm9wZG93bi5tb2JpbGUge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRleHQtb3ZlcmZsb3c6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy13aGl0ZS5wbmcnKSBuby1yZXBlYXQgOTUlIDUwJSAjMjEzNjRlNWM7XG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbn1cbi5kcm9wZG93bi5tb2JpbGU6Oi1tcy1leHBhbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmRyb3Bkb3duLm1vYmlsZSAuZHJvcGJ0biB7XG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbn1cbi5kcm9wZG93bi5tb2JpbGUgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBtaW4td2lkdGg6IDEwMCUhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwIWltcG9ydGFudDtcbn1cbi5kcm9wZG93bi5tb2JpbGUgLmRyb3Bkb3duLWNvbnRlbnQuaW5hY3RpdmUge1xuICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcbn1cbiNwcm9maWxlLWhlYWRlci1tb2JpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ3MThGO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjUpLCAjMTE2ZmJmYWQpLCB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlL3Byb2ZpbGUtYmctbmV3LmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNwcm9maWxlLWhlYWRlci1tb2JpbGUgaDEsXG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIC5hdmF0YXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIC53aG8gaDEge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIC53aG8gaDIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNwcm9maWxlLWhlYWRlci1tb2JpbGUgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNwcm9maWxlLWhlYWRlci1tb2JpbGUgZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBjb2xvcjogI2RlZGVkZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2RDg2OTE7XG59XG4jcHJvZmlsZS1oZWFkZXItbW9iaWxlIGZvb3RlcjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbn1cbiNwcm9maWxlLWhlYWRlci1tb2JpbGUgZm9vdGVyIC5pbmR1c3RyeXNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuI3Byb2ZpbGUtaGVhZGVyLW1vYmlsZSBmb290ZXIgLmJ1ZGdldCxcbiNwcm9maWxlLWhlYWRlci1tb2JpbGUgZm9vdGVyIC5pbmR1c3RyeXNjb3JlIHtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFjdGlvbnMge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGNvbHVtbi1jb3VudDogMjtcbiAgY29sdW1uLWdhcDogMXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uYWN0aW9ucyAuYWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaGVhZGVyLWFjdGlvbi1idXR0b25zIC5hY3Rpb25zIHtcbiAgY29sdW1uLWNvdW50OiAxO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMvYWxsJztcbkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvbWl4aW5zL2FsbCc7XG5AaW1wb3J0ICcuL3Jlc3BvbnNpdmUnO1xuXG5AYXJlYS1nYXA6IDIwcHg7XG5AYXJlYS1icmVhay1wb2ludDogNzU5cHg7XG5Ac2NhbGUtaW1nLXdpZHRoOiAzNnB4O1xuXG4uaGVhZGVyLW5vdGlmaWNhdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBwcmltYXJ5LW9yYW5nZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjJlbSAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIC5mb250LWxpZ2h0KCk7XG59XG5cbmgxLCBoMiwgcDpub3QoLmhlbHAtYmxvY2spLCB1bDpub3QoLmRyb3Bkb3duLW1lbnUpLCBsaSwgYnV0dG9uLCBsYWJlbCB7XG4gICAgLm5vLW1hcigpO1xufVxuZGl2LnNldHRpbmdzIHtcbiAgIGxhYmVsIHsgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gICB9XG4gICBpbnB1dHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgfVxuXG4gICB9XG5idXR0b24ge1xuICAgIGJvcmRlcjogMDtcbn1cblxuLmlucHV0LWJ0bigpIHtcbiAgICAuZm9udC1ib2xkKCk7XG4gICAgbWluLXdpZHRoOiAxMTBweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkpKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQ1LDI0NSwyNDUsMSkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyNDUsMjQ1LDI0NSwxKSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI0NSwyNDUsMjQ1LDEpIDEwMCUpO1xuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZmZmZmZmJywgZW5kQ29sb3JzdHI9JyNmNWY1ZjUnLCBHcmFkaWVudFR5cGU9MCApO1xufVxuXG4uZ3JhZGllbnQ6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgQGJvcmRlci1zaXplOiAxcHg7XG4gICAgYm9yZGVyLXRvcDogQGJvcmRlci1zaXplIHNvbGlkICNFMkUyRTI7XG5cbiAgICAmPiAuY29udGFpbmVyIHtcbiAgICAgICAgdG9wOiAtKEBib3JkZXItc2l6ZSk7XG4gICAgfVxufVxuXG4uYXJlYSB7XG4gICAgcGFkZGluZzogQGFyZWEtZ2FwIDE2cHg7XG59XG5cbi5hcmVhLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6ICM2NTY1NjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7aGVpZ2h0OjI0cHg7XG4gICAgXG4gICAgLmNvdW50IHtcbiAgICAgICAgY29sb3I6IEBwcmltYXJ5LWJsdWU7XG4gICAgfVxufVxuXG4uYXJlYS1mb290ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBidXR0b24ubW9yZSB7XG4gICAgICAgIC5tb3JlKCk7XG4gICAgfVxuXG4gICAgLm9uLW1vYmlsZSh7XG4gICAgICAgIG1hcmdpbjogQGFyZWEtZ2FwIDA7d2lkdGg6NjU0cHg7XG4gICAgfSk7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFwb2ludC1waG9uZS11cCkge1xuICAgICAgICBtYXJnaW46IEBhcmVhLWdhcCBhdXRvIWltcG9ydGFudDt3aWR0aDphdXRvO1xuICAgfVxufVxuXG4ucGRmLWNvbnRhaW5lciB7XG4gICAgLm5vLW1hcigpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xufVxucGwtMHtcbiAgICBwYWRkaW5nLWxlZnQ6MDtcbn1cblxucHItMHtcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XG59XG5pbWcubm9yZWNvcmR7XG4gIGhlaWdodDogMTgwcHghaW1wb3J0YW50O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGFyZWEtYnJlYWstcG9pbnQpIHtcbiAgIC8qIC5hcmVhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH0qL1xufVxuXG4uaWRlbnRpdHlJbmZvcm1hdGlvbiB7XG4gICBpbWcge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIH1cbn1cbiIsIi5mb250LW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG59XG5cbi5mb250LWxpZ2h0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZm9udC1yZWd1bGFyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uZm9udC1ib2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZm9udC14Ym9sZCB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn0iLCIubm8tbWFyLXRvcCB7IG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsgfVxuLm5vLW1hci1idG0geyBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbi5tYXItMjAgeyBtYXJnaW4tdG9wOiAyMHB4OyB9XG4ubWFyLTMwIHsgbWFyZ2luLXRvcDogMzBweDsgfVxuLm1hci0xMC12ZXIgeyBtYXJnaW46IDEwcHggMDsgfTtcbi5uby1tYXIgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7IH1cbiIsIkBpbXBvcnQgJy4uL3ZhcmlhYmxlcy9hbGwnO1xuXG4ubW9yZSgpIHtcbiAgICBjb2xvcjogIzVFNUU1RTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxNXB4IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMzVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uYnRuKCkge1xuICAgIC5mb250LWJvbGQoKTtcbiAgICBtaW4td2lkdGg6IDExMHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLnByaW1hcnkoKSB7XG4gICAgIC5idG4oKTtcbiAgICAgYmFja2dyb3VuZDogQHByaW1hcnktYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1ibHVlLWRhcms7XG4gICAgfVxufVxuLmRhbmdlcigpIHtcbiAgICAgLmJ0bigpO1xuICAgICBiYWNrZ3JvdW5kOiBAZGFuZ2VyLXJlZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1yZWQ7XG4gICAgfVxufVxuXG4uc2F2ZSgpIHtcbiAgICAuYnRuKCk7XG4gICAgYmFja2dyb3VuZDogQHByaW1hcnktb3JhbmdlLWxpZ2h0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBAcHJpbWFyeS1vcmFuZ2UtZGFya2VyO1xuICAgIH1cbn0iLCJAYnJlYWtwb2ludC1zbWFsbC1kb3duOiA1NzVweDtcbkBicmVhcG9pbnQtcGhvbmUtZG93bjogNzY3cHg7XG5AYnJlYWtwb2ludC10YWJsZXQtZG93bjogOTkxcHg7XG5AYnJlYWtwb2ludC1kZXNrdG9wLWRvd246IDExOTlweDtcbkBicmVha3BvaW50LXNtYWxsLXVwOiA1NzZweDtcbkBicmVhcG9pbnQtcGhvbmUtdXA6IDc2OHB4O1xuQGJyZWFrcG9pbnQtdGFibGV0LXVwOiA5OTJweDtcbkBicmVha3BvaW50LWRlc2t0b3AtdXA6IDEyMDBweDtcbkBicmVhcG9pbnQtcGhvbmUtbWluLWRvd246IDc1OXB4O1xuQGJyZWFrcG9pbnQtbWluaS1zbWFsbDogNDIwcHg7XG5AYnJlYWtwb2ludC10YWJsZXQtbGFuZHNjYXBlLXVwOiAxMDI0cHg7XG5cbi5yZXNwb25zaXZlLW1heChAbWF4V2lkdGg7IEBydWxlcykge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogQG1heFdpZHRoKSB7XG4gICAgICAgIEBydWxlcygpO1xuICAgIH1cbn1cblxuLnJlc3BvbnNpdmUtbWluKEBtYXhXaWR0aDsgQHJ1bGVzKSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBAbWF4V2lkdGgpIHtcbiAgICAgICAgQHJ1bGVzKCk7XG4gICAgfVxufVxuXG4ub24tZGVza3RvcChAcnVsZXMpIHtcbiAgICAucmVzcG9uc2l2ZS1taW4oQGJyZWFrcG9pbnQtZGVza3RvcC1kb3duLCBAcnVsZXMpO1xufVxuXG4ub24tbGFyZ2Utc2NyZWVuKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1pbihAYnJlYXBvaW50LXBob25lLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tdGFibGV0KEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC1kZXNrdG9wLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tbW9iaWxlKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC10YWJsZXQtdXAsIEBydWxlcyk7XG59XG5cbi5vbi1pcGFkKEBydWxlcykge1xuICAgIC5yZXNwb25zaXZlLW1heChAYnJlYWtwb2ludC10YWJsZXQtbGFuZHNjYXBlLXVwLCBAcnVsZXMpO1xufVxuXG4ub24tbW9iaWxlLWRvd24oQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVhcG9pbnQtcGhvbmUtbWluLWRvd24sIEBydWxlcyk7XG59XG4ub24tbWluaS1zbWFsbC1tb2JpbGUoQHJ1bGVzKSB7XG4gICAgLnJlc3BvbnNpdmUtbWF4KEBicmVha3BvaW50LW1pbmktc21hbGwsIEBydWxlcyk7XG59XG5cbi5zaG93LW9uLWRlc2t0b3AgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4uaGlkZS1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBicmVhcG9pbnQtcGhvbmUtdXApIHtcbiAgICAuc2hvdy1vbi1kZXNrdG9wIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgLmhpZGUtb24tZGVza3RvcCB7IGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogQGJyZWFrcG9pbnQtdGFibGV0LXVwKSB7XG4jcHJvZmlsZS10YWJze1xuICAgdWwgbGkgYSB7XG4gICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xuICAgfVxufSBcbn1cblxuIiwiQGltcG9ydCAnLi9jb21tb24nO1xuXG5AaGVhZGVyLWJnLWhlaWdodDogMjAwcHg7XG5cbi5oZWFkZXItY29tbW9uIHsgICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzE4RjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgaDEsIGgyIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIC5mb250LWxpZ2h0KCk7IFxuICAgIH1cbn1cblxuYnV0dG9uLmFjdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgICBcbiAgICAmLmZ1bmRzIHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJ0bi1yZWZlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJpbGl0eSB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBidG4tYXZhaWxhYmlsaXR5LWNvbG9yO1xuICAgIH1cblxuICAgICYuY29udGFjdCB7XG4gICAgICAgIGJhY2tncm91bmQ6IEBwcmltYXJ5LW9yYW5nZS1saWdodDtcbiAgICB9XG5cbiAgICAmLmFib3V0IHtcbiAgICAgICAgYmFja2dyb3VuZDogQGJ0bi1oaXJlLWNvbG9yO1xuICAgIH1cbn1cbi52ZXJmaWNhdGlvbntcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4udmVyaWZpZWR7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiNwcm9maWxlLWhlYWRlci1kZXNrdG9wIC5taXNjIC5hY3Rpb25zIGxpOm5vdCg6bGFzdC1vZi10eXBlKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHghaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDVweCFpbXBvcnRhbnQ7XG59XG4jcHJvZmlsZS1oZWFkZXItZGVza3RvcCAubWlzYyAuYWN0aW9ucyBsaXtcbiAgICBidXR0b257XG4gICAgIHdpZHRoOiAxMDdweCFpbXBvcnRhbnQ7XG4gICAgfVxufVxufVxuIiwiLnVsLW5hdi1kZWZhdWx0cygpIHtcbiAgICAubm8tbWFyKCk7XG4gICAgXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogQG5hdi1jb2xvcjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VsZWN0LWFycm93IHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdGV4dC1vdmVyZmxvdzogJyc7XG5cbiAgICAmOjotbXMtZXhwYW5kIHsgXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IFxuICAgIH1cbn1cblxuLnNlbGVjdC1hcnJvdy1ibGFjayhAYmFja2dyb3VuZC1jb2xvcjogI2ZmZikge1xuICAgIC5zZWxlY3QtYXJyb3coKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy1ibGFjay5wbmcnKVxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdCA5NSUgNTAlIEBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uc2VsZWN0LWFycm93LXdoaXRlKEBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCkge1xuICAgIC5zZWxlY3QtYXJyb3coKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy13aGl0ZS5wbmcnKVxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdCA5NSUgNTAlIEBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuLnNlbGVjdC1hcnJvdy13aGl0ZS1tb2JpbGUoQGJhY2tncm91bmQtY29sb3I6ICMyMTM2NGU1Yykge1xuICAgIC5zZWxlY3QtYXJyb3coKTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3NlbGVjdC1hcnJvdy13aGl0ZS5wbmcnKVxuICAgICAgICAgICAgICAgIG5vLXJlcGVhdCA5NSUgNTAlIEBiYWNrZ3JvdW5kLWNvbG9yO1xufVxuXG4uaW5saW5lLWxpc3QoKSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuXG4gICAgbGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG4uYmV0YS12ZXJzaW9uIHtcbiAgICBwYWRkaW5nOiAzcHggNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmMjhjMzU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xufVxuXG5hLm5vLW91dGxpbmUge1xuICAgIG91dGxpbmU6IDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICY6YWN0aXZlIHtcbiAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbn1cblxuLm5vLXNlbGVjdCB7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTsgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIvRWRnZSAqL1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lIGFuZCBPcGVyYSAqL1xufSIsIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zdHlsZXMvdmFyaWFibGVzL2FsbCc7XG5AaW1wb3J0ICcuLi8uLi9zaGFyZWQvc3R5bGVzL21peGlucy9hbGwnO1xuXG4uZHJvcGRvd24ge1xuICAgIEB3aWR0aDogMTgwcHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIFxuICAgIC5zZWxlY3QtYXJyb3ctYmxhY2soKTtcblxuICAgICY6aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuZHJvcGJ0biB7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIC5mb250LWxpZ2h0KCk7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgbWluLXdpZHRoOiBAd2lkdGg7XG4gICAgICAgIFxuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAcHJpbWFyeS1ibHVlO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5kcm9wZG93bi5tb2JpbGUge1xuICAgICAuc2VsZWN0LWFycm93LXdoaXRlLW1vYmlsZSgpO1xuICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgIC5kcm9wYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgICAgfVxuICAgICAuZHJvcGRvd24tY29udGVudHtcbiAgICAgIG1pbi13aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTAwIWltcG9ydGFudDtcbiAgICAgfVxuICAgIC5kcm9wZG93bi1jb250ZW50LmluYWN0aXZlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG4gICB9XG59IiwiQGltcG9ydCAnLi9oZWFkZXItY29tbW9uJztcbkBpbXBvcnQgJy4vZHJvcGRvd24nO1xuXG5AdmVyLXNwYWNpbmc6IDIwcHg7XG5cbiNwcm9maWxlLWhlYWRlci1tb2JpbGUge1xuICAgIC5oZWFkZXItY29tbW9uKCk7XG5cbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgwLCAwLCAwLCAwLjUpLCAjMTE2ZmJmYWQpLCB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9wcm9maWxlL3Byb2ZpbGUtYmctbmV3LmpwZyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuYXZhdGFyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHZlci1zcGFjaW5nO1xuICAgICAgICB3aWR0aDogQHByb2ZpbGUtcGljLW1kLXdpZHRoO1xuICAgICAgICBoZWlnaHQ6IEBwcm9maWxlLXBpYy1tZC1oZWlnaHQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG5cbiAgICAud2hvIHtcbiAgICAgICAgaDEge1xuICAgICAgICAgICAgLmZvbnQtcmVndWxhcigpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuXG4gXG5cbiAgICBmb290ZXIge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuXG4gICAgICAgIGNvbG9yOiAjZGVkZWRlO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzZEODY5MTtcblxuICAgICAgICAuaW5kdXN0cnlzY29yZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idWRnZXQsXG4gICAgICAgIC5pbmR1c3RyeXNjb3JlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgICBAZ2FwOiAxcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGNvbHVtbi1jb3VudDogMjtcbiAgICBjb2x1bW4tZ2FwOiBAZ2FwO1xuICAgIG1hcmdpbi10b3A6IEBnYXA7XG5cbiAgICAuYWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQGdhcDtcblxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uaGVhZGVyLWFjdGlvbi1idXR0b25ze1xuICAgIC5hY3Rpb25zIHtcbiAgICAgICAgY29sdW1uLWNvdW50OiAxO1xuICAgIH1cbn0iXX0= */");

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
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");






var TransferToStockComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TransferToStockComponent, _super);
    function TransferToStockComponent(route, router, successDialogSvc, errorDialogSvc) {
        return _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
    }
    TransferToStockComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_3__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ErrorDialogService"] }
    ]; };
    TransferToStockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'transfer-to-stock',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transfer-to-stock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/transfer-to-stock/transfer-to-stock.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], TransferToStockComponent);
    return TransferToStockComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_5__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/withdraw-fund/modal.ts":
/*!********************************************!*\
  !*** ./src/profile/withdraw-fund/modal.ts ***!
  \********************************************/
/*! exports provided: Withdraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Withdraw", function() { return Withdraw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Withdraw = /** @class */ (function () {
    function Withdraw() {
        this.currency = 'HKD';
    }
    return Withdraw;
}());



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
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/profile/withdraw-fund/modal.ts");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");
/* harmony import */ var _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/profile.service */ "./src/shared/services/profile.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/dialogs/success-dialog/dialog.service */ "./src/shared/dialogs/success-dialog/dialog.service.ts");
/* harmony import */ var _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/dialogs/error-dialog/dialog.service */ "./src/shared/dialogs/error-dialog/dialog.service.ts");
/* harmony import */ var _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/stock-account.service */ "./src/shared/services/stock-account.service.ts");










var WithdrawFundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithdrawFundComponent, _super);
    function WithdrawFundComponent(route, router, successDialogSvc, errorDialogSvc, profileSvc, authSvc, stockAccountSvc, ref) {
        var _this = _super.call(this, route, router, successDialogSvc, errorDialogSvc) || this;
        _this.profileSvc = profileSvc;
        _this.authSvc = authSvc;
        _this.stockAccountSvc = stockAccountSvc;
        _this.ref = ref;
        _this.withdraw = new _modal__WEBPACK_IMPORTED_MODULE_3__["Withdraw"]();
        _this.transaction = [];
        return _this;
    }
    WithdrawFundComponent.prototype.ngOnInit = function () {
        this.transactionList();
    };
    WithdrawFundComponent.prototype.transactionList = function () {
        var _this = this;
        this.isLoading = true;
        this.stockAccountSvc.transactionList("withdraw").subscribe(function (res) {
            _this.transaction = res['list'];
            _this.isLoading = false;
            _this.ref.detectChanges();
        }, function (err) {
            _this.onError(err);
            console.log(_this.errors);
        });
    };
    WithdrawFundComponent.prototype.withdrawApply = function (form) {
        var _this = this;
        this.submitted = true;
        if (!form.valid) {
            return false;
        }
        this.isApplying = true;
        this.stockAccountSvc.withdrawApply(this.withdraw)
            .subscribe(function (res) {
            _this.onRequestSuccess();
        }, function (err) {
            _this.onRequestFailed(err);
        });
    };
    WithdrawFundComponent.prototype.onRequestSuccess = function () {
        this.transactionList();
        this.profileSvc.getProfileInfo(this.authSvc.profileSysId);
        this.submitted = false;
        this.isApplying = false;
        var title = 'Success';
        var message = 'Congratulation! Your withdraw request sent successfully.';
        var isPublic = true;
        this.showSuccessDialog(title, message, isPublic);
    };
    WithdrawFundComponent.prototype.onRequestFailed = function (err) {
        this.isApplying = false;
        this.onError(err);
        var title = 'Error';
        var message = "Failed! Your request sent failed. " + this.errors.toString();
        var isPublic = true;
        this.showErrorDialog(title, message, isPublic);
    };
    WithdrawFundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_dialogs_success_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_7__["SuccessDialogService"] },
        { type: _shared_dialogs_error_dialog_dialog_service__WEBPACK_IMPORTED_MODULE_8__["ErrorDialogService"] },
        { type: _shared_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_9__["StockAccountService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    WithdrawFundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'withdraw-fund',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./withdraw-fund.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/withdraw-fund/withdraw-fund.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], WithdrawFundComponent);
    return WithdrawFundComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_4__["BaseProfileComponent"]));



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map