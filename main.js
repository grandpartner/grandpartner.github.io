(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../account/account.module": [
		"./src/account/account.module.ts",
		"account-account-module"
	],
	"../home/home.module": [
		"./src/home/home.module.ts"
	],
	"../maintenance/maintenance.module": [
		"./src/maintenance/maintenance.module.ts"
	],
	"../profile/profile.module": [
		"./src/profile/profile.module.ts",
		"profile-profile-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n<lib-ngx-notification></lib-ngx-notification>\r\n<ng-progress [color]=\"progressColor\"></ng-progress>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/home/home.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Home</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/maintenance/maintenance.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/maintenance/maintenance.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <article> \r\n   \t<img src=\"/assets/images/maintenance.png\" style=\"height:250px;\">\r\n   \t<h1>We&rsquo;ll be back soon!</h1>\r\n    <div>\r\n        <p>Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always <a href=\"mailto:#\">contact us</a>, otherwise we&rsquo;ll be back online shortly!</p>\r\n        <p>&mdash; The Team</p>\r\n    </div>\r\n</article>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-config.service.ts":
/*!***************************************!*\
  !*** ./src/app/app-config.service.ts ***!
  \***************************************/
/*! exports provided: AppConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigService", function() { return AppConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var AppConfigService = /** @class */ (function () {
    function AppConfigService(http) {
        this.http = http;
    }
    AppConfigService.prototype.loadAppConfig = function () {
        var _this = this;
        return this.http.get('/assets/configs/current.json?k=' + (new Date).getTime())
            .toPromise()
            .then(function (data) {
            _this.appConfig = data;
            Object.assign(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"], _this.appConfig);
            _this.http.get(data['siteApiUrl'] + "/index/startup").subscribe(function (res) {
                data['attributes'] = res['attributes'];
                _this.appConfig = data;
                Object.assign(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"], _this.appConfig);
            });
        });
    };
    AppConfigService.prototype.getConfig = function () {
        return this.appConfig;
    };
    AppConfigService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AppConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AppConfigService);
    return AppConfigService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', children: [
            { path: '', pathMatch: 'full', redirectTo: 'account' },
            { path: 'account', loadChildren: '../account/account.module#AccountModule' },
            { path: 'profile', loadChildren: '../profile/profile.module#ProfileModule' },
            { path: 'home', pathMatch: 'full', loadChildren: '../home/home.module#HomeModule' },
            { path: 'maintenance', loadChildren: '../maintenance/maintenance.module#MaintenanceModule' }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _shared_services_progress_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/progress-color.service */ "./src/shared/services/progress-color.service.ts");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(router, authSvc, progressSvc) {
        var _this = this;
        this.router = router;
        this.authSvc = authSvc;
        this.progressSvc = progressSvc;
        this.onFocus = function (event) {
            _this.authSvc.isOnCRMSite = 'true';
        };
        this.onBlur = function (event) {
            _this.authSvc.isOnCRMSite = 'false';
        };
        this.visibilityChange = function (event) {
            if (document.hidden) {
                _this.authSvc.isOnCRMSite = 'false';
            }
            else {
                _this.authSvc.isOnCRMSite = 'true';
            }
        };
        this.progressColor = this.progressSvc.color;
        this.progressSub = this.progressSvc.changed$.subscribe(function (c) {
            _this.progressColor = c;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authSvc.isOnCRMSite = 'true';
        window.addEventListener('focus', this.onFocus);
        window.addEventListener('blur', this.onBlur);
        document.addEventListener("visibilitychange", this.visibilityChange);
        this.routerSub = this.router.events
            .filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; })
            .subscribe(function (event) {
            _this.onNavigationEnd();
            window.scrollTo(0, 0);
        });
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].maintenance) {
            this.router.navigate(['/maintenance']);
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.routerSub.unsubscribe();
        this.progressSub.unsubscribe();
    };
    AppComponent.prototype.onNavigationEnd = function () {
        window.scrollTo(0, 0);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _shared_services_progress_color_service__WEBPACK_IMPORTED_MODULE_4__["ProgressColorService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-notification */ "./node_modules/ngx-notification/fesm5/ngx-notification.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-config.service */ "./src/app/app-config.service.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/home.module */ "./src/home/home.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../auth/auth-token.interceptor */ "./src/auth/auth-token.interceptor.ts");
/* harmony import */ var _auth_server_offline_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth/server-offline.interceptor */ "./src/auth/server-offline.interceptor.ts");
/* harmony import */ var _shared_services_progress_color_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/services/progress-color.service */ "./src/shared/services/progress-color.service.ts");
/* harmony import */ var _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/loading-response-progress.service */ "./src/shared/services/loading-response-progress.service.ts");
/* harmony import */ var _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-progressbar/core */ "./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-progressbar/http */ "./node_modules/@ngx-progressbar/http/esm5/ngx-progressbar-http.js");
/* harmony import */ var _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-progressbar/router */ "./node_modules/@ngx-progressbar/router/esm5/ngx-progressbar-router.js");
/* harmony import */ var _maintenance_maintenance_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../maintenance/maintenance.module */ "./src/maintenance/maintenance.module.ts");




















var appInitializerFn = function (appConfig) {
    return function () {
        return appConfig.loadAppConfig();
    };
};
var ServerOfflineInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
    useClass: _auth_server_offline_interceptor__WEBPACK_IMPORTED_MODULE_13__["ServerOfflineInterceptor"],
    multi: true,
};
var AuthTokenInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
    useClass: _auth_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthTokenInterceptor"],
    multi: true,
};
var AppConfigServiceProvider = {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
    useFactory: appInitializerFn,
    multi: true,
    deps: [_app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"]]
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _ngx_progressbar_core__WEBPACK_IMPORTED_MODULE_16__["NgProgressModule"].forRoot(),
                _ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_17__["NgProgressHttpModule"],
                _ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_18__["NgProgressRouterModule"],
                _maintenance_maintenance_module__WEBPACK_IMPORTED_MODULE_19__["MaintenanceModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                ngx_notification__WEBPACK_IMPORTED_MODULE_5__["NgxNotificationComponent"]
            ],
            providers: [
                _app_config_service__WEBPACK_IMPORTED_MODULE_8__["AppConfigService"],
                AppConfigServiceProvider,
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                ServerOfflineInterceptorProvider,
                AuthTokenInterceptorProvider,
                _shared_services_progress_color_service__WEBPACK_IMPORTED_MODULE_14__["ProgressColorService"],
                _shared_services_loading_response_progress_service__WEBPACK_IMPORTED_MODULE_15__["ProgressLoadingService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/auth/auth-token.interceptor.ts":
/*!********************************************!*\
  !*** ./src/auth/auth-token.interceptor.ts ***!
  \********************************************/
/*! exports provided: AuthTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function() { return AuthTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/add/operator/finally */ "./node_modules/rxjs-compat/_esm5/add/operator/finally.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");













var AuthTokenInterceptor = /** @class */ (function () {
    function AuthTokenInterceptor(inj, router) {
        this.inj = inj;
        this.router = router;
        this.isRefreshingToken = false;
    }
    AuthTokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        this.authSvc = this.inj.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var isSiteApi = req.url && req.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].site.api);
        var isAuthUrl = req.url && req.url == _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].endpoints.auth.url;
        if (this.authSvc.bearer && !req.headers.get('Authorization') && isSiteApi && !isAuthUrl) {
            var newAuthReq = req.clone({ headers: req.headers.set('Authorization', this.authSvc.bearer) });
            return next.handle(newAuthReq).catch(function (error) {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpErrorResponse"]) {
                    switch (error.status) {
                        case 401:
                            return _this.handle401Error(req, next);
                        default:
                            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
                    }
                }
                else {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
                }
            });
        }
        else {
            return next.handle(req);
        }
    };
    AuthTokenInterceptor.prototype.handle401Error = function (req, next) {
        var _this = this;
        if (!this.isRefreshingToken) {
            this.isRefreshingToken = true;
            // Reset here so that the following requests wait until the token
            return this.authSvc.getAccessToken()
                .switchMap(function (result) {
                if (result == _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthResult"].Success) {
                    var newAuthReq = req.clone({ headers: req.headers.set('Authorization', _this.authSvc.bearer) });
                    return next.handle(newAuthReq);
                }
                // If we don't get a new token, we are in trouble so logout.
                _this.authSvc.logout();
                _this.router.navigate(['/account']);
            })
                .catch(function (error) {
                // If there is an exception calling 'refreshToken', bad news so logout.
                _this.authSvc.logout();
                _this.router.navigate(['/account']);
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"].throw(error);
            })
                .finally(function () {
                _this.isRefreshingToken = false;
            });
        }
        else {
            var newAuthReq = req.clone({ headers: req.headers.set('Authorization', this.authSvc.bearer) });
            return next.handle(newAuthReq);
        }
    };
    AuthTokenInterceptor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AuthTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthTokenInterceptor);
    return AuthTokenInterceptor;
}());



/***/ }),

/***/ "./src/auth/auth.guard.ts":
/*!********************************!*\
  !*** ./src/auth/auth.guard.ts ***!
  \********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authSvc, router) {
        this.authSvc = authSvc;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authSvc.isLoggedIn) {
            return true;
        }
        this.authSvc.logout();
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canLoad = function (route) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].maintenance) {
            this.router.navigate(['/maintenance']);
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/auth/auth.service.ts":
/*!**********************************!*\
  !*** ./src/auth/auth.service.ts ***!
  \**********************************/
/*! exports provided: AuthResult, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResult", function() { return AuthResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/SiteApiResponse */ "./src/shared/services/SiteApiResponse.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");








var AuthResult;
(function (AuthResult) {
    AuthResult[AuthResult["Success"] = 0] = "Success";
    AuthResult[AuthResult["InvalidCredentials"] = 1] = "InvalidCredentials";
    AuthResult[AuthResult["EmailNotConfirmed"] = 2] = "EmailNotConfirmed";
    AuthResult[AuthResult["ServerOffline"] = 3] = "ServerOffline";
})(AuthResult || (AuthResult = {}));
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.respUtils = new _shared_services_SiteApiResponse__WEBPACK_IMPORTED_MODULE_5__["SiteApiResponseUtilities"]();
    }
    Object.defineProperty(AuthService.prototype, "profileSysId", {
        get: function () {
            return parseInt(localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.profileSysId));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.accessToken !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "bearer", {
        get: function () {
            if (!this.isLoggedIn) {
                return null;
            }
            return "" + this.accessToken;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (data) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.auth.url;
        var body = new URLSearchParams();
        body.set('type', data.type);
        body.set('email', data.email);
        body.set('password', data.password);
        return this.http
            .post(url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .map(function (r) { return _this.onLogin(r); })
            .catch(function (r) { return _this.onError(r); });
    };
    AuthService.prototype.signup = function (email) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.auth.signup;
        var body = new URLSearchParams();
        body.set('type', 'client');
        body.set('email', email);
        return this.http
            .post(url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .map(function (r) { return r; })
            .catch(function (r) { return _this.respUtils.onServiceError(r); });
    };
    AuthService.prototype.activateAccount = function (data) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.auth.activateAccount;
        var body = new URLSearchParams();
        body.set('password', data.password);
        return this.http
            .post(url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', data.token)
        })
            .map(function (r) { return r; })
            .catch(function (r) { return _this.respUtils.onServiceError(r); });
    };
    AuthService.prototype.requestPassword = function (email) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.auth.requestPassword;
        var body = new URLSearchParams();
        body.set('type', 'client');
        body.set('email', email);
        return this.http
            .post(url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .map(function (r) { return r; })
            .catch(function (r) { return _this.respUtils.onServiceError(r); });
    };
    AuthService.prototype.resetPassword = function (data) {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.profile.resetPassword;
        var body = new URLSearchParams();
        body.set('password', data.password);
        return this.http
            .put(url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
                .set('Authorization', data.token)
        })
            .map(function (r) { return r; })
            .catch(function (r) { return _this.respUtils.onServiceError(r); });
    };
    AuthService.prototype.getAccessToken = function () {
        var _this = this;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("refresh_token", this.refreshToken)
            .set("grant_type", "refresh_token");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set("Content-Type", "application/x-www-form-urlencoded");
        return this.http
            .post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].endpoints.auth.url, params, { headers: headers })
            .map(function (r) { return _this.onRefreshTokenSuccess(r); })
            .catch(function (error) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.statusText);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        setTimeout(function () {
            window.location.reload();
        });
    };
    AuthService.prototype.onLogin = function (response) {
        if (response.token) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.accessToken, response.token);
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.profileSysId, response.user.id);
            if (this.isLoggedInWithCRM == 'initiate') {
                localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.loginWithCRM, 'complete');
            }
            return AuthResult.Success;
        }
        else {
            return AuthResult.InvalidCredentials;
        }
    };
    Object.defineProperty(AuthService.prototype, "accessToken", {
        get: function () {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.accessToken);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "refreshToken", {
        get: function () {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.refreshtoken);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.onRefreshTokenSuccess = function (response) {
        if (response.access_token) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.accessToken, response.access_token);
            return AuthResult.Success;
        }
        else {
            return AuthResult.ServerOffline;
        }
    };
    AuthService.prototype.onError = function (error) {
        console.log(error);
        if (error.status == 606) {
            //let error_msg: string = error.error.body;
            //if (AuthResult[error_msg] == AuthResult.InvalidCredentials) {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(AuthResult.InvalidCredentials);
            //}
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(AuthResult.ServerOffline);
    };
    Object.defineProperty(AuthService.prototype, "isLoggedInWithCRM", {
        get: function () {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.loginWithCRM);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "isOnCRMSite", {
        get: function () {
            return localStorage.getItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.isOnCRMSite);
        },
        set: function (v) {
            localStorage.setItem(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].storage.auth.isOnCRMSite, v);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/auth/server-offline.interceptor.ts":
/*!************************************************!*\
  !*** ./src/auth/server-offline.interceptor.ts ***!
  \************************************************/
/*! exports provided: ServerOfflineInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerOfflineInterceptor", function() { return ServerOfflineInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");





var ServerOfflineInterceptor = /** @class */ (function () {
    function ServerOfflineInterceptor(router) {
        this.router = router;
    }
    ServerOfflineInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).do(function (event) { }, function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"] && err.status == 0) {
                _this.router.navigate(['/']);
            }
        });
    };
    ServerOfflineInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ServerOfflineInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ServerOfflineInterceptor);
    return ServerOfflineInterceptor;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var environment = {
    siteDescription: "Finance Institution",
    siteTitle: "Welcome to Finance Institution",
    siteApiUrl: null,
    siteUrl: null,
    siteImage: null,
    imageStorageUrl: null,
    pdfStorageUrl: null,
    intercomKey: null,
    production: null,
    maintenance: false,
    attributes: null,
    storage: {
        auth: {
            accessToken: "access_token",
            profileSysId: "profileSysId",
            thumbnailImageName: "thumbnailImageName",
            loginWithCRM: "loginWithCRM",
            refreshtoken: "refresh_token",
            userName: "username",
            isOnCRMSite: "isOnCRMSite",
            currentProfileSysId: "currentProfileSysId",
            fullName: "fullname",
        }
    },
    site: {
        get url() {
            return environment.siteUrl;
        },
        get api() {
            return environment.siteApiUrl;
        },
        get login() {
            return environment.siteUrl + "/login";
        },
        profileUrl: function (profileSysId) {
            if (profileSysId) {
                ;
                return "/profile/" + profileSysId;
            }
            return null;
        },
        pdfViewerUrl: function (url) {
            return "https://docs.google.com/viewer?url=" + url + "&embedded=true";
        },
        imageUrl: function (file) {
            return environment.imageStorageUrl + "/" + file;
        },
        pdfUrl: function (file) {
            return environment.pdfStorageUrl + "/" + file;
        }
    },
    endpoints: {
        auth: {
            get url() {
                return environment.siteApiUrl + "/authorise/emailLogin";
            },
            get siteApiUrl() {
                return environment.siteApiUrl;
            },
            get signup() {
                return environment.siteApiUrl + "/authorise/emailRegister";
            },
            get activateAccount() {
                return environment.siteApiUrl + "/authorise/activateAccount";
            },
            get requestPassword() {
                return environment.siteApiUrl + "/authorise/findPassword";
            }
        },
        profile: {
            profile: function (id) {
                return environment.siteApiUrl + "/client_profile/me?id=" + id;
            },
            get resetPassword() {
                return environment.siteApiUrl + "/client_profile/user";
            }
        }
    },
    attribute: {
        gender: function (id) {
            var arr = environment.attributes['attrGender'].filter(function (item) {
                return item.id == id;
            });
            if (arr.length) {
                return arr[0]['name'];
            }
            else {
                return 'NA';
            }
        }
    }
};


/***/ }),

/***/ "./src/home/home-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/home/home-routing.module.ts ***!
  \*****************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/home/home.component.ts");




var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/home/home.component.ts":
/*!************************************!*\
  !*** ./src/home/home.component.ts ***!
  \************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'site-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/home/home.component.html")).default
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/home/home.module.ts":
/*!*********************************!*\
  !*** ./src/home/home.module.ts ***!
  \*********************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/home/home.component.ts");







var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/maintenance/maintenance-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/maintenance/maintenance-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceRoutingModule", function() { return MaintenanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance.component */ "./src/maintenance/maintenance.component.ts");




var routes = [
    { path: '', component: _maintenance_component__WEBPACK_IMPORTED_MODULE_3__["MaintenanceComponent"] }
];
var MaintenanceRoutingModule = /** @class */ (function () {
    function MaintenanceRoutingModule() {
    }
    MaintenanceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MaintenanceRoutingModule);
    return MaintenanceRoutingModule;
}());



/***/ }),

/***/ "./src/maintenance/maintenance.component.ts":
/*!**************************************************!*\
  !*** ./src/maintenance/maintenance.component.ts ***!
  \**************************************************/
/*! exports provided: MaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceComponent", function() { return MaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaintenanceComponent = /** @class */ (function () {
    function MaintenanceComponent() {
    }
    MaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'site-maintenance',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/maintenance/maintenance.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles.less */ "./src/maintenance/styles.less")).default]
        })
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "./src/maintenance/maintenance.module.ts":
/*!***********************************************!*\
  !*** ./src/maintenance/maintenance.module.ts ***!
  \***********************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _maintenance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance.component */ "./src/maintenance/maintenance.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maintenance-routing.module */ "./src/maintenance/maintenance-routing.module.ts");





var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _maintenance_routing_module__WEBPACK_IMPORTED_MODULE_4__["MaintenanceRoutingModule"]
            ],
            declarations: [
                _maintenance_component__WEBPACK_IMPORTED_MODULE_2__["MaintenanceComponent"]
            ],
            exports: [
                _maintenance_component__WEBPACK_IMPORTED_MODULE_2__["MaintenanceComponent"]
            ],
            providers: []
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/maintenance/styles.less":
/*!*************************************!*\
  !*** ./src/maintenance/styles.less ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  text-align: center;\n  padding: 150px;\n  font: 20px Helvetica, sans-serif;\n  color: #333;\n}\nh1 {\n  font-size: 50px;\n}\narticle {\n  display: block;\n  text-align: left;\n  width: 650px;\n  margin: 0 auto;\n}\na {\n  color: #dc8100;\n  text-decoration: none;\n}\na:hover {\n  color: #333;\n  text-decoration: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWludGVuYW5jZS9EOi9Qcm9qZWN0cy9wYXJ0bmVyL2dyYW5kLXBhcnRuZXJzLXdlYi9zcmMvbWFpbnRlbmFuY2Uvc3R5bGVzLmxlc3MiLCJzcmMvbWFpbnRlbmFuY2Uvc3R5bGVzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUNDRjtBRENFO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL21haW50ZW5hbmNlL3N0eWxlcy5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiICBib2R5IHsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTUwcHg7XG4gIGZvbnQ6IDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMztcbiAgfVxuICBoMSB7IFxuICBmb250LXNpemU6IDUwcHg7IFxuICB9XG4gIGFydGljbGUgeyBcbiAgZGlzcGxheTogYmxvY2s7IFxuICB0ZXh0LWFsaWduOiBsZWZ0OyBcbiAgd2lkdGg6IDY1MHB4OyBcbiAgbWFyZ2luOiAwIGF1dG87IFxuICB9XG4gIGEgeyBcbiAgY29sb3I6ICNkYzgxMDA7IFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICB9XG4gIGE6aG92ZXIgeyBcbiAgY29sb3I6ICMzMzM7IFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxuICB9IiwiYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTUwcHg7XG4gIGZvbnQ6IDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMztcbn1cbmgxIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuYXJ0aWNsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogNjUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuYSB7XG4gIGNvbG9yOiAjZGM4MTAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/shared/services/SiteApiResponse.ts":
/*!************************************************!*\
  !*** ./src/shared/services/SiteApiResponse.ts ***!
  \************************************************/
/*! exports provided: SiteApiResponseUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteApiResponseUtilities", function() { return SiteApiResponseUtilities; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");




var SiteApiResponseUtilities = /** @class */ (function () {
    function SiteApiResponseUtilities() {
    }
    SiteApiResponseUtilities.prototype.getErrors = function (resp) {
        if (!resp)
            return [];
        var errors = [];
        if (resp.error) {
            errors.push(resp.error.body);
        }
        return errors;
    };
    SiteApiResponseUtilities.prototype.onServiceError = function (resp) {
        var data = {};
        if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            data = resp.error ? resp.error : {};
        }
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(data);
    };
    return SiteApiResponseUtilities;
}());



/***/ }),

/***/ "./src/shared/services/loading-response-progress.service.ts":
/*!******************************************************************!*\
  !*** ./src/shared/services/loading-response-progress.service.ts ***!
  \******************************************************************/
/*! exports provided: ProgressLoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressLoadingService", function() { return ProgressLoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");



var ProgressLoadingService = /** @class */ (function () {
    function ProgressLoadingService() {
        this.progressResponseSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.progressResponse$ = this.progressResponseSource.asObservable();
    }
    ProgressLoadingService.prototype.progressResponse = function (data) {
        this.progressResponseSource.next(data);
    };
    ProgressLoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProgressLoadingService);
    return ProgressLoadingService;
}());



/***/ }),

/***/ "./src/shared/services/lookup.service.ts":
/*!***********************************************!*\
  !*** ./src/shared/services/lookup.service.ts ***!
  \***********************************************/
/*! exports provided: LookupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupService", function() { return LookupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var LookupService = /** @class */ (function () {
    function LookupService() {
    }
    LookupService.prototype.getGender = function (id) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].attribute.gender(id);
    };
    LookupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], LookupService);
    return LookupService;
}());



/***/ }),

/***/ "./src/shared/services/progress-color.service.ts":
/*!*******************************************************!*\
  !*** ./src/shared/services/progress-color.service.ts ***!
  \*******************************************************/
/*! exports provided: ProgressColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressColorService", function() { return ProgressColorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");



var DefaultColor = '#4392EF';
var ProgressColorService = /** @class */ (function () {
    function ProgressColorService() {
        this.changed = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._color = DefaultColor;
        this.changed$ = this.changed.asObservable();
    }
    Object.defineProperty(ProgressColorService.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (v) {
            this._color = v;
            this.changed.next(v);
        },
        enumerable: true,
        configurable: true
    });
    ProgressColorService.prototype.reset = function () {
        this.color = DefaultColor;
    };
    ProgressColorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProgressColorService);
    return ProgressColorService;
}());



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/lookup.service */ "./src/shared/services/lookup.service.ts");






// dialogs
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: [],
            exports: [],
            providers: [
                _services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\partner\grand-partners-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map