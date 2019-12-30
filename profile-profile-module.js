(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 * @type {?}
 */
var DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            /** @type {?} */
            var bodyDir = _document.body ? _document.body.dir : null;
            /** @type {?} */
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            /** @type {?} */
            var value = bodyDir || htmlDir;
            this.value = (value === 'ltr' || value === 'rtl') ? value : 'ltr';
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        /**
         * Normalized direction that accounts for invalid/unsupported values.
         */
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var old = this._dir;
            /** @type {?} */
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = (normalizedValue === 'ltr' || normalizedValue === 'rtl') ? normalizedValue : 'ltr';
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[attr.dir]': '_rawDir' },
                    exportAs: 'dir',
                },] },
    ];
    Dir.propDecorators = {
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] }],
        dir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue, coerceElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceElement", function() { return coerceElement; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat((/** @type {?} */ (value)))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 * @template T
 * @param {?} elementOrRef
 * @return {?}
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/collections.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/collections.es5.js ***!
  \***********************************************************/
/*! exports provided: UniqueSelectionDispatcher, ArrayDataSource, isDataSource, DataSource, getMultipleValuesInSingleSelectionError, SelectionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayDataSource", function() { return ArrayDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDataSource", function() { return isDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
DataSource = /** @class */ (function () {
    function DataSource() {
    }
    return DataSource;
}());
/**
 * Checks whether an object is a data source.
 * @param {?} value
 * @return {?}
 */
function isDataSource(value) {
    // Check if the value is a DataSource by observing if it has a connect function. Cannot
    // be checked as an `instanceof DataSource` since people could create their own sources
    // that match the interface, but don't extend DataSource.
    return value && typeof value.connect === 'function';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * DataSource wrapper for a native array.
 * @template T
 */
var  /**
 * DataSource wrapper for a native array.
 * @template T
 */
ArrayDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ArrayDataSource, _super);
    function ArrayDataSource(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.connect = /**
     * @return {?}
     */
    function () {
        return this._data instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"] ? this._data : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this._data);
    };
    /**
     * @return {?}
     */
    ArrayDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () { };
    return ArrayDataSource;
}(DataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
var  /**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
SelectionModel = /** @class */ (function () {
    function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
        var _this = this;
        if (_multiple === void 0) { _multiple = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Event emitted when the value has changed.
         * @deprecated Use `changed` instead.
         * \@breaking-change 8.0.0 To be changed to `changed`
         */
        this.onChange = this.changed;
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return _this._markSelected(value); }));
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected values. */
        get: /**
         * Selected values.
         * @return {?}
         */
        function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.select = /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._markSelected(value); }));
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.deselect = /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._unmarkSelected(value); }));
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.toggle = /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    SelectionModel.prototype.clear = /**
     * Clears all of the selected values.
     * @return {?}
     */
    function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.isSelected = /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    SelectionModel.prototype.isEmpty = /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    SelectionModel.prototype.hasValue = /**
     * Determines whether the model has a value.
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    SelectionModel.prototype.sort = /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    function (predicate) {
        if (this._multiple && this.selected) {
            (/** @type {?} */ (this._selected)).sort(predicate);
        }
    };
    /**
     * Gets whether multiple values can be selected.
     */
    /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    SelectionModel.prototype.isMultipleSelection = /**
     * Gets whether multiple values can be selected.
     * @return {?}
     */
    function () {
        return this._multiple;
    };
    /** Emits a change event and clears the records of selected and deselected values. */
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._emitChangeEvent = /**
     * Emits a change event and clears the records of selected and deselected values.
     * @private
     * @return {?}
     */
    function () {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
            });
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    };
    /** Selects a value. */
    /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._markSelected = /**
     * Selects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /** Deselects a value. */
    /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._unmarkSelected = /**
     * Deselects a value.
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /** Clears out the selected values. */
    /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    SelectionModel.prototype._unmarkAll = /**
     * Clears out the selected values.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return _this._unmarkSelected(value); }));
        }
    };
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     */
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    SelectionModel.prototype._verifyValueAssignment = /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @private
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    };
    return SelectionModel;
}());
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * \@docs-private
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.notify = /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    UniqueSelectionDispatcher.prototype.listen = /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return (/**
         * @return {?}
         */
        function () {
            _this._listeners = _this._listeners.filter((/**
             * @param {?} registered
             * @return {?}
             */
            function (registered) {
                return listener !== registered;
            }));
        });
    };
    /**
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._listeners = [];
    };
    UniqueSelectionDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=collections.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, PlatformModule, getSupportedInputTypes, supportsPassiveEventListeners, normalizePassiveListenerOptions, supportsScrollBehavior, getRtlScrollAxisType, RtlScrollAxisType, _supportsShadowDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePassiveListenerOptions", function() { return normalizePassiveListenerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsScrollBehavior", function() { return supportsScrollBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRtlScrollAxisType", function() { return getRtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlScrollAxisType", function() { return RtlScrollAxisType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_supportsShadowDom", function() { return _supportsShadowDom; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
/** @type {?} */
var hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && ((/** @type {?} */ (Intl))).v8BreakIterator);
}
catch (_a) {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @breaking-change 8.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        this.BLINK = this.isBrowser && (!!(((/** @type {?} */ (window))).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        /**
         * Whether the current browser is Firefox.
         */
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{},] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result Set of input types support by the current browser.
 * @type {?}
 */
var supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 * @type {?}
 */
var candidateInputTypes = [
    // `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
    // first changing it to something else:
    // The specified value "" does not conform to the required format.
    // The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    /** @type {?} */
    var featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter((/**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    })));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 * @type {?}
 */
var supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', (/** @type {?} */ (null)), Object.defineProperty({}, 'passive', {
                get: (/**
                 * @return {?}
                 */
                function () { return supportsPassiveEvents = true; })
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param {?} options Object to be normalized.
 * @return {?}
 */
function normalizePassiveListenerOptions(options) {
    return supportsPassiveEventListeners() ? options : !!options.capture;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @enum {number} */
var RtlScrollAxisType = {
    /**
     * scrollLeft is 0 when scrolled all the way left and (scrollWidth - clientWidth) when scrolled
     * all the way right.
     */
    NORMAL: 0,
    /**
     * scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    NEGATED: 1,
    /**
     * scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and 0 when scrolled
     * all the way right.
     */
    INVERTED: 2,
};
RtlScrollAxisType[RtlScrollAxisType.NORMAL] = 'NORMAL';
RtlScrollAxisType[RtlScrollAxisType.NEGATED] = 'NEGATED';
RtlScrollAxisType[RtlScrollAxisType.INVERTED] = 'INVERTED';
/**
 * Cached result of the way the browser handles the horizontal scroll axis in RTL mode.
 * @type {?}
 */
var rtlScrollAxisType;
/**
 * Check whether the browser supports scroll behaviors.
 * @return {?}
 */
function supportsScrollBehavior() {
    return !!(typeof document == 'object' && 'scrollBehavior' in (/** @type {?} */ (document.documentElement)).style);
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 * @return {?}
 */
function getRtlScrollAxisType() {
    // We can't check unless we're on the browser. Just assume 'normal' if we're not.
    if (typeof document !== 'object' || !document) {
        return RtlScrollAxisType.NORMAL;
    }
    if (!rtlScrollAxisType) {
        // Create a 1px wide scrolling container and a 2px wide content element.
        /** @type {?} */
        var scrollContainer = document.createElement('div');
        /** @type {?} */
        var containerStyle = scrollContainer.style;
        scrollContainer.dir = 'rtl';
        containerStyle.height = '1px';
        containerStyle.width = '1px';
        containerStyle.overflow = 'auto';
        containerStyle.visibility = 'hidden';
        containerStyle.pointerEvents = 'none';
        containerStyle.position = 'absolute';
        /** @type {?} */
        var content = document.createElement('div');
        /** @type {?} */
        var contentStyle = content.style;
        contentStyle.width = '2px';
        contentStyle.height = '1px';
        scrollContainer.appendChild(content);
        document.body.appendChild(scrollContainer);
        rtlScrollAxisType = RtlScrollAxisType.NORMAL;
        // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
        // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
        // dealing with one of the other two types of browsers.
        if (scrollContainer.scrollLeft === 0) {
            // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
            // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
            // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
            // return 0 when we read it again.
            scrollContainer.scrollLeft = 1;
            rtlScrollAxisType =
                scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
        }
        (/** @type {?} */ (scrollContainer.parentNode)).removeChild(scrollContainer);
    }
    return rtlScrollAxisType;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/** @type {?} */
var shadowDomIsSupported;
/**
 * Checks whether the user's browser support Shadow DOM.
 * @return {?}
 */
function _supportsShadowDom() {
    if (shadowDomIsSupported == null) {
        /** @type {?} */
        var head = typeof document !== 'undefined' ? document.head : null;
        shadowDomIsSupported = !!(head && (((/** @type {?} */ (head))).createShadowRoot || head.attachShadow));
    }
    return shadowDomIsSupported;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/scrolling.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/scrolling.es5.js ***!
  \*********************************************************/
/*! exports provided: _fixedSizeVirtualScrollStrategyFactory, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, SCROLL_DISPATCHER_PROVIDER_FACTORY, DEFAULT_SCROLL_TIME, ScrollDispatcher, SCROLL_DISPATCHER_PROVIDER, CdkScrollable, ScrollingModule, ScrollDispatchModule, VIEWPORT_RULER_PROVIDER_FACTORY, DEFAULT_RESIZE_TIME, ViewportRuler, VIEWPORT_RULER_PROVIDER, CdkVirtualForOf, VIRTUAL_SCROLL_STRATEGY, CdkVirtualScrollViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_fixedSizeVirtualScrollStrategyFactory", function() { return _fixedSizeVirtualScrollStrategyFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeVirtualScrollStrategy", function() { return FixedSizeVirtualScrollStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkFixedSizeVirtualScroll", function() { return CdkFixedSizeVirtualScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER_FACTORY", function() { return SCROLL_DISPATCHER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCROLL_TIME", function() { return DEFAULT_SCROLL_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatcher", function() { return ScrollDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_DISPATCHER_PROVIDER", function() { return SCROLL_DISPATCHER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkScrollable", function() { return CdkScrollable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule", function() { return ScrollingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDispatchModule", function() { return ScrollDispatchModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER_FACTORY", function() { return VIEWPORT_RULER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESIZE_TIME", function() { return DEFAULT_RESIZE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler", function() { return ViewportRuler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEWPORT_RULER_PROVIDER", function() { return VIEWPORT_RULER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualForOf", function() { return CdkVirtualForOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIRTUAL_SCROLL_STRATEGY", function() { return VIRTUAL_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkVirtualScrollViewport", function() { return CdkVirtualScrollViewport; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The injection token used to specify the virtual scrolling strategy.
 * @type {?}
 */
var VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VIRTUAL_SCROLL_STRATEGY');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
var  /**
 * Virtual scrolling strategy for lists with items of known fixed size.
 */
FixedSizeVirtualScrollStrategy = /** @class */ (function () {
    /**
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    function FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
        this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * \@docs-private Implemented as part of VirtualScrollStrategy.
         */
        this.scrolledIndexChange = this._scrolledIndexChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        /**
         * The attached viewport.
         */
        this._viewport = null;
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
    }
    /**
     * Attaches this scroll strategy to a viewport.
     * @param viewport The viewport to attach this strategy to.
     */
    /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.attach = /**
     * Attaches this scroll strategy to a viewport.
     * @param {?} viewport The viewport to attach this strategy to.
     * @return {?}
     */
    function (viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** Detaches this scroll strategy from the currently attached viewport. */
    /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.detach = /**
     * Detaches this scroll strategy from the currently attached viewport.
     * @return {?}
     */
    function () {
        this._scrolledIndexChange.complete();
        this._viewport = null;
    };
    /**
     * Update the item size and buffer size.
     * @param itemSize The size of the items in the virtually scrolling list.
     * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     */
    /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.updateItemAndBufferSize = /**
     * Update the item size and buffer size.
     * @param {?} itemSize The size of the items in the virtually scrolling list.
     * @param {?} minBufferPx The minimum amount of buffer (in pixels) before needing to render more
     * @param {?} maxBufferPx The amount of buffer (in pixels) to render when rendering more.
     * @return {?}
     */
    function (itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx) {
            throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentScrolled = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onDataLengthChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () {
        this._updateTotalContentSize();
        this._updateRenderedRange();
    };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onContentRendered = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /** @docs-private Implemented as part of VirtualScrollStrategy. */
    /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.onRenderedOffsetChanged = /**
     * \@docs-private Implemented as part of VirtualScrollStrategy.
     * @return {?}
     */
    function () { };
    /**
     * Scroll to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling.
     */
    /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype.scrollToIndex = /**
     * Scroll to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?} behavior The ScrollBehavior to use when scrolling.
     * @return {?}
     */
    function (index, behavior) {
        if (this._viewport) {
            this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
    };
    /** Update the viewport's total content size. */
    /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateTotalContentSize = /**
     * Update the viewport's total content size.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
    };
    /** Update the viewport's rendered range. */
    /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    FixedSizeVirtualScrollStrategy.prototype._updateRenderedRange = /**
     * Update the viewport's rendered range.
     * @private
     * @return {?}
     */
    function () {
        if (!this._viewport) {
            return;
        }
        /** @type {?} */
        var scrollOffset = this._viewport.measureScrollOffset();
        /** @type {?} */
        var firstVisibleIndex = scrollOffset / this._itemSize;
        /** @type {?} */
        var renderedRange = this._viewport.getRenderedRange();
        /** @type {?} */
        var newRange = { start: renderedRange.start, end: renderedRange.end };
        /** @type {?} */
        var viewportSize = this._viewport.getViewportSize();
        /** @type {?} */
        var dataLength = this._viewport.getDataLength();
        /** @type {?} */
        var startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
            /** @type {?} */
            var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
            newRange.start = Math.max(0, newRange.start - expandStart);
            newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        }
        else {
            /** @type {?} */
            var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
            if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                /** @type {?} */
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
                if (expandEnd > 0) {
                    newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                    newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
            }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
    };
    return FixedSizeVirtualScrollStrategy;
}());
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param {?} fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 * @return {?}
 */
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
    return fixedSizeDir._scrollStrategy;
}
/**
 * A virtual scroll strategy that supports fixed-size items.
 */
var CdkFixedSizeVirtualScroll = /** @class */ (function () {
    function CdkFixedSizeVirtualScroll() {
        this._itemSize = 20;
        this._minBufferPx = 100;
        this._maxBufferPx = 200;
        /**
         * The scroll strategy used by this directive.
         */
        this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
    }
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "itemSize", {
        /** The size of the items in the list (in pixels). */
        get: /**
         * The size of the items in the list (in pixels).
         * @return {?}
         */
        function () { return this._itemSize; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._itemSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "minBufferPx", {
        /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         */
        get: /**
         * The minimum amount of buffer rendered beyond the viewport (in pixels).
         * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
         * @return {?}
         */
        function () { return this._minBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._minBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkFixedSizeVirtualScroll.prototype, "maxBufferPx", {
        /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         */
        get: /**
         * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
         * @return {?}
         */
        function () { return this._maxBufferPx; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._maxBufferPx = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkFixedSizeVirtualScroll.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
    };
    CdkFixedSizeVirtualScroll.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'cdk-virtual-scroll-viewport[itemSize]',
                    providers: [{
                            provide: VIRTUAL_SCROLL_STRATEGY,
                            useFactory: _fixedSizeVirtualScrollStrategyFactory,
                            deps: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                                 * @return {?}
                                 */
                                function () { return CdkFixedSizeVirtualScroll; }))],
                        }],
                },] },
    ];
    CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        minBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxBufferPx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkFixedSizeVirtualScroll;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the scrolling events by default.
 * @type {?}
 */
var DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */
var ScrollDispatcher = /** @class */ (function () {
    function ScrollDispatcher(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * Subject for notifying that a registered scrollable reference element has been scrolled.
         */
        this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Keeps track of the global `scroll` and `resize` subscriptions.
         */
        this._globalSubscription = null;
        /**
         * Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards.
         */
        this._scrolledCount = 0;
        /**
         * Map of all the scrollable references that are registered with the service and their
         * scroll event subscriptions.
         */
        this.scrollContainers = new Map();
    }
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param scrollable Scrollable instance to be registered.
     */
    /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    ScrollDispatcher.prototype.register = /**
     * Registers a scrollable instance with the service and listens for its scrolled events. When the
     * scrollable is scrolled, the service emits the event to its scrolled observable.
     * @param {?} scrollable Scrollable instance to be registered.
     * @return {?}
     */
    function (scrollable) {
        var _this = this;
        if (!this.scrollContainers.has(scrollable)) {
            this.scrollContainers.set(scrollable, scrollable.elementScrolled()
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._scrolled.next(scrollable); })));
        }
    };
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param scrollable Scrollable instance to be deregistered.
     */
    /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    ScrollDispatcher.prototype.deregister = /**
     * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
     * @param {?} scrollable Scrollable instance to be deregistered.
     * @return {?}
     */
    function (scrollable) {
        /** @type {?} */
        var scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
            scrollableReference.unsubscribe();
            this.scrollContainers.delete(scrollable);
        }
    };
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     */
    /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    ScrollDispatcher.prototype.scrolled = /**
     * Returns an observable that emits an event whenever any of the registered Scrollable
     * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
     * to override the default "throttle" time.
     *
     * **Note:** in order to avoid hitting change detection for every scroll event,
     * all of the events emitted from this stream will be run outside the Angular zone.
     * If you need to update any data bindings as a result of a scroll event, you have
     * to run the callback using `NgZone.run`.
     * @param {?=} auditTimeInMs
     * @return {?}
     */
    function (auditTimeInMs) {
        var _this = this;
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_SCROLL_TIME; }
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            if (!_this._globalSubscription) {
                _this._addGlobalListener();
            }
            // In the case of a 0ms delay, use an observable without auditTime
            // since it does add a perceptible delay in processing overhead.
            /** @type {?} */
            var subscription = auditTimeInMs > 0 ?
                _this._scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(auditTimeInMs)).subscribe(observer) :
                _this._scrolled.subscribe(observer);
            _this._scrolledCount++;
            return (/**
             * @return {?}
             */
            function () {
                subscription.unsubscribe();
                _this._scrolledCount--;
                if (!_this._scrolledCount) {
                    _this._removeGlobalListener();
                }
            });
        }));
    };
    /**
     * @return {?}
     */
    ScrollDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._removeGlobalListener();
        this.scrollContainers.forEach((/**
         * @param {?} _
         * @param {?} container
         * @return {?}
         */
        function (_, container) { return _this.deregister(container); }));
        this._scrolled.complete();
    };
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param elementRef Element whose ancestors to listen for.
     * @param auditTimeInMs Time to throttle the scroll events.
     */
    /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    ScrollDispatcher.prototype.ancestorScrolled = /**
     * Returns an observable that emits whenever any of the
     * scrollable ancestors of an element are scrolled.
     * @param {?} elementRef Element whose ancestors to listen for.
     * @param {?=} auditTimeInMs Time to throttle the scroll events.
     * @return {?}
     */
    function (elementRef, auditTimeInMs) {
        /** @type {?} */
        var ancestors = this.getAncestorScrollContainers(elementRef);
        return this.scrolled(auditTimeInMs).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((/**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            return !target || ancestors.indexOf(target) > -1;
        })));
    };
    /** Returns all registered Scrollables that contain the provided element. */
    /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype.getAncestorScrollContainers = /**
     * Returns all registered Scrollables that contain the provided element.
     * @param {?} elementRef
     * @return {?}
     */
    function (elementRef) {
        var _this = this;
        /** @type {?} */
        var scrollingContainers = [];
        this.scrollContainers.forEach((/**
         * @param {?} _subscription
         * @param {?} scrollable
         * @return {?}
         */
        function (_subscription, scrollable) {
            if (_this._scrollableContainsElement(scrollable, elementRef)) {
                scrollingContainers.push(scrollable);
            }
        }));
        return scrollingContainers;
    };
    /** Returns true if the element is contained within the provided Scrollable. */
    /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    ScrollDispatcher.prototype._scrollableContainsElement = /**
     * Returns true if the element is contained within the provided Scrollable.
     * @private
     * @param {?} scrollable
     * @param {?} elementRef
     * @return {?}
     */
    function (scrollable, elementRef) {
        /** @type {?} */
        var element = elementRef.nativeElement;
        /** @type {?} */
        var scrollableElement = scrollable.getElementRef().nativeElement;
        // Traverse through the element parents until we reach null, checking if any of the elements
        // are the scrollable's element.
        do {
            if (element == scrollableElement) {
                return true;
            }
        } while (element = (/** @type {?} */ (element)).parentElement);
        return false;
    };
    /** Sets up the global scroll listeners. */
    /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._addGlobalListener = /**
     * Sets up the global scroll listeners.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalSubscription = this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window.document, 'scroll').subscribe((/**
             * @return {?}
             */
            function () { return _this._scrolled.next(); }));
        }));
    };
    /** Cleans up the global scroll listener. */
    /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    ScrollDispatcher.prototype._removeGlobalListener = /**
     * Cleans up the global scroll listener.
     * @private
     * @return {?}
     */
    function () {
        if (this._globalSubscription) {
            this._globalSubscription.unsubscribe();
            this._globalSubscription = null;
        }
    };
    ScrollDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ScrollDispatcher.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    /** @nocollapse */ ScrollDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScrollDispatcher_Factory() { return new ScrollDispatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"])); }, token: ScrollDispatcher, providedIn: "root" });
    return ScrollDispatcher;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function SCROLL_DISPATCHER_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new ScrollDispatcher(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var SCROLL_DISPATCHER_PROVIDER = {
    // If there is already a ScrollDispatcher available, use that. Otherwise, provide a new one.
    provide: ScrollDispatcher,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ScrollDispatcher], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]],
    useFactory: SCROLL_DISPATCHER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */
var CdkScrollable = /** @class */ (function () {
    function CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
        var _this = this;
        this.elementRef = elementRef;
        this.scrollDispatcher = scrollDispatcher;
        this.ngZone = ngZone;
        this.dir = dir;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(_this.elementRef.nativeElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._destroyed))
                    .subscribe(observer);
            }));
        }));
    }
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.register(this);
    };
    /**
     * @return {?}
     */
    CdkScrollable.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Returns observable that emits when a scroll event is fired on the host element. */
    /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    CdkScrollable.prototype.elementScrolled = /**
     * Returns observable that emits when a scroll event is fired on the host element.
     * @return {?}
     */
    function () {
        return this._elementScrolled;
    };
    /** Gets the ElementRef for the viewport. */
    /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    CdkScrollable.prototype.getElementRef = /**
     * Gets the ElementRef for the viewport.
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param options specified the offsets to scroll to.
     */
    /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    CdkScrollable.prototype.scrollTo = /**
     * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
     * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} options specified the offsets to scroll to.
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        // Rewrite start & end offsets as right or left offsets.
        options.left = options.left == null ? (isRtl ? options.end : options.start) : options.left;
        options.right = options.right == null ? (isRtl ? options.start : options.end) : options.right;
        // Rewrite the bottom offset as a top offset.
        if (options.bottom != null) {
            ((/** @type {?} */ (options))).top =
                el.scrollHeight - el.clientHeight - options.bottom;
        }
        // Rewrite the right offset as a left offset.
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() != _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NORMAL) {
            if (options.left != null) {
                ((/** @type {?} */ (options))).right =
                    el.scrollWidth - el.clientWidth - options.left;
            }
            if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
                options.left = options.right;
            }
            else if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
                options.left = options.right ? -options.right : options.right;
            }
        }
        else {
            if (options.right != null) {
                ((/** @type {?} */ (options))).left =
                    el.scrollWidth - el.clientWidth - options.right;
            }
        }
        this._applyScrollToOptions(options);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    CdkScrollable.prototype._applyScrollToOptions = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["supportsScrollBehavior"])()) {
            el.scrollTo(options);
        }
        else {
            if (options.top != null) {
                el.scrollTop = options.top;
            }
            if (options.left != null) {
                el.scrollLeft = options.left;
            }
        }
    };
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param from The edge to measure from.
     */
    /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    CdkScrollable.prototype.measureScrollOffset = /**
     * Measures the scroll offset relative to the specified edge of the viewport. This method can be
     * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
     * about what scrollLeft means in RTL. The values returned by this method are normalized such that
     * left and right always refer to the left and right side of the scrolling container irrespective
     * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
     * in an RTL context.
     * @param {?} from The edge to measure from.
     * @return {?}
     */
    function (from) {
        /** @type {?} */
        var LEFT = 'left';
        /** @type {?} */
        var RIGHT = 'right';
        /** @type {?} */
        var el = this.elementRef.nativeElement;
        if (from == 'top') {
            return el.scrollTop;
        }
        if (from == 'bottom') {
            return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        // Rewrite start & end as left or right offsets.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        if (from == 'start') {
            from = isRtl ? RIGHT : LEFT;
        }
        else if (from == 'end') {
            from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].INVERTED) {
            // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
            else {
                return el.scrollLeft;
            }
        }
        else if (isRtl && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getRtlScrollAxisType"])() == _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["RtlScrollAxisType"].NEGATED) {
            // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
            // 0 when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
            }
            else {
                return -el.scrollLeft;
            }
        }
        else {
            // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
            // (scrollWidth - clientWidth) when scrolled all the way right.
            if (from == LEFT) {
                return el.scrollLeft;
            }
            else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
            }
        }
    };
    CdkScrollable.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdk-scrollable], [cdkScrollable]'
                },] },
    ];
    /** @nocollapse */
    CdkScrollable.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: ScrollDispatcher },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return CdkScrollable;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Checks if the given ranges are equal.
 * @param {?} r1
 * @param {?} r2
 * @return {?}
 */
function rangesEqual(r1, r2) {
    return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 * @type {?}
 */
var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_2__["animationFrameScheduler"] : rxjs__WEBPACK_IMPORTED_MODULE_2__["asapScheduler"];
/**
 * A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`.
 */
var CdkVirtualScrollViewport = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(CdkVirtualScrollViewport, _super);
    function CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher) {
        var _this = _super.call(this, elementRef, scrollDispatcher, ngZone, dir) || this;
        _this.elementRef = elementRef;
        _this._changeDetectorRef = _changeDetectorRef;
        _this._scrollStrategy = _scrollStrategy;
        /**
         * Emits when the viewport is detached from a CdkVirtualForOf.
         */
        _this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the rendered range changes.
         */
        _this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this._orientation = 'vertical';
        // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
        // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
        // depending on how the strategy calculates the scrolled index, it may come at a cost to
        // performance.
        /**
         * Emits when the index of the first element visible in the viewport changes.
         */
        _this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            return _this._scrollStrategy.scrolledIndexChange.subscribe((/**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                return Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.ngZone.run((/**
                 * @return {?}
                 */
                function () { return observer.next(index); })); }));
            }));
        }));
        /**
         * A stream that emits whenever the rendered range changes.
         */
        _this.renderedRangeStream = _this._renderedRangeSubject.asObservable();
        /**
         * The total size of all content (in pixels), including content that is not currently rendered.
         */
        _this._totalContentSize = 0;
        /**
         * A string representing the `style.width` property value to be used for the spacer element.
         */
        _this._totalContentWidth = '';
        /**
         * A string representing the `style.height` property value to be used for the spacer element.
         */
        _this._totalContentHeight = '';
        /**
         * The currently rendered range of indices.
         */
        _this._renderedRange = { start: 0, end: 0 };
        /**
         * The length of the data bound to this viewport (in number of items).
         */
        _this._dataLength = 0;
        /**
         * The size of the viewport (in pixels).
         */
        _this._viewportSize = 0;
        /**
         * The last rendered content offset that was set.
         */
        _this._renderedContentOffset = 0;
        /**
         * Whether the last rendered content offset was to the end of the content (and therefore needs to
         * be rewritten as an offset to the start of the content).
         */
        _this._renderedContentOffsetNeedsRewrite = false;
        /**
         * Whether there is a pending change detection cycle.
         */
        _this._isChangeDetectionPending = false;
        /**
         * A list of functions to run after the next change detection cycle.
         */
        _this._runAfterChangeDetection = [];
        if (!_scrollStrategy) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        return _this;
    }
    Object.defineProperty(CdkVirtualScrollViewport.prototype, "orientation", {
        /** The direction the viewport scrolls. */
        get: /**
         * The direction the viewport scrolls.
         * @return {?}
         */
        function () {
            return this._orientation;
        },
        set: /**
         * @param {?} orientation
         * @return {?}
         */
        function (orientation) {
            if (this._orientation !== orientation) {
                this._orientation = orientation;
                this._calculateSpacerSize();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        // It's still too early to measure the viewport at this point. Deferring with a promise allows
        // the Viewport to be rendered with the correct size before we measure. We run this outside the
        // zone to avoid causing more change detection cycles. We handle the change detection loop
        // ourselves instead.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return Promise.resolve().then((/**
         * @return {?}
         */
        function () {
            _this._measureViewportSize();
            _this._scrollStrategy.attach(_this);
            _this.elementScrolled()
                .pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @return {?}
             */
            function () { return _this._scrollStrategy.onContentScrolled(); }));
            _this._markChangeDetectionNeeded();
        })); }));
    };
    /**
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.detach();
        this._scrollStrategy.detach();
        // Complete all subjects
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        _super.prototype.ngOnDestroy.call(this);
    };
    /** Attaches a `CdkVirtualForOf` to this viewport. */
    /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.attach = /**
     * Attaches a `CdkVirtualForOf` to this viewport.
     * @param {?} forOf
     * @return {?}
     */
    function (forOf) {
        var _this = this;
        if (this._forOf) {
            throw Error('CdkVirtualScrollViewport is already attached.');
        }
        // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
        // changes. Run outside the zone to avoid triggering change detection, since we're managing the
        // change detection loop ourselves.
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._forOf = forOf;
            _this._forOf.dataStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this._detachedSubject)).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                /** @type {?} */
                var newLength = data.length;
                if (newLength !== _this._dataLength) {
                    _this._dataLength = newLength;
                    _this._scrollStrategy.onDataLengthChanged();
                }
                _this._doChangeDetection();
            }));
        }));
    };
    /** Detaches the current `CdkVirtualForOf`. */
    /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.detach = /**
     * Detaches the current `CdkVirtualForOf`.
     * @return {?}
     */
    function () {
        this._forOf = null;
        this._detachedSubject.next();
    };
    /** Gets the length of the data bound to this viewport (in number of items). */
    /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getDataLength = /**
     * Gets the length of the data bound to this viewport (in number of items).
     * @return {?}
     */
    function () {
        return this._dataLength;
    };
    /** Gets the size of the viewport (in pixels). */
    /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getViewportSize = /**
     * Gets the size of the viewport (in pixels).
     * @return {?}
     */
    function () {
        return this._viewportSize;
    };
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /** Get the current rendered range of items. */
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getRenderedRange = 
    // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
    // cycle happens. I'm being careful to only call it after the render cycle is complete and before
    // setting it to something else, but its error prone and should probably be split into
    // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
    /**
     * Get the current rendered range of items.
     * @return {?}
     */
    function () {
        return this._renderedRange;
    };
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     */
    /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setTotalContentSize = /**
     * Sets the total size of all content (in pixels), including content that is not currently
     * rendered.
     * @param {?} size
     * @return {?}
     */
    function (size) {
        if (this._totalContentSize !== size) {
            this._totalContentSize = size;
            this._calculateSpacerSize();
            this._markChangeDetectionNeeded();
        }
    };
    /** Sets the currently rendered range of indices. */
    /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedRange = /**
     * Sets the currently rendered range of indices.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        var _this = this;
        if (!rangesEqual(this._renderedRange, range)) {
            this._renderedRangeSubject.next(this._renderedRange = range);
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            function () { return _this._scrollStrategy.onContentRendered(); }));
        }
    };
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     */
    /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.getOffsetToRenderedContentStart = /**
     * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
     * @return {?}
     */
    function () {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
    };
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     */
    /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.setRenderedContentOffset = /**
     * Sets the offset from the start of the viewport to either the start or end of the rendered data
     * (in pixels).
     * @param {?} offset
     * @param {?=} to
     * @return {?}
     */
    function (offset, to) {
        var _this = this;
        if (to === void 0) { to = 'to-start'; }
        // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
        // in the negative direction.
        /** @type {?} */
        var isRtl = this.dir && this.dir.value == 'rtl';
        /** @type {?} */
        var isHorizontal = this.orientation == 'horizontal';
        /** @type {?} */
        var axis = isHorizontal ? 'X' : 'Y';
        /** @type {?} */
        var axisDirection = isHorizontal && isRtl ? -1 : 1;
        /** @type {?} */
        var transform = "translate" + axis + "(" + Number(axisDirection * offset) + "px)";
        this._renderedContentOffset = offset;
        if (to === 'to-end') {
            transform += " translate" + axis + "(-100%)";
            // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
            // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
            // expand upward).
            this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
            // We know this value is safe because we parse `offset` with `Number()` before passing it
            // into the string.
            this._renderedContentTransform = transform;
            this._markChangeDetectionNeeded((/**
             * @return {?}
             */
            function () {
                if (_this._renderedContentOffsetNeedsRewrite) {
                    _this._renderedContentOffset -= _this.measureRenderedContentSize();
                    _this._renderedContentOffsetNeedsRewrite = false;
                    _this.setRenderedContentOffset(_this._renderedContentOffset);
                }
                else {
                    _this._scrollStrategy.onRenderedOffsetChanged();
                }
            }));
        }
    };
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param offset The offset to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToOffset = /**
     * Scrolls to the given offset from the start of the viewport. Please note that this is not always
     * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
     * direction, this would be the equivalent of setting a fictional `scrollRight` property.
     * @param {?} offset The offset to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (offset, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        /** @type {?} */
        var options = { behavior: behavior };
        if (this.orientation === 'horizontal') {
            options.start = offset;
        }
        else {
            options.top = offset;
        }
        this.scrollTo(options);
    };
    /**
     * Scrolls to the offset for the given index.
     * @param index The index of the element to scroll to.
     * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     */
    /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.scrollToIndex = /**
     * Scrolls to the offset for the given index.
     * @param {?} index The index of the element to scroll to.
     * @param {?=} behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
     * @return {?}
     */
    function (index, behavior) {
        if (behavior === void 0) { behavior = 'auto'; }
        this._scrollStrategy.scrollToIndex(index, behavior);
    };
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     */
    /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureScrollOffset = /**
     * Gets the current scroll offset from the start of the viewport (in pixels).
     * @param {?=} from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
     *     in horizontal mode.
     * @return {?}
     */
    function (from) {
        return _super.prototype.measureScrollOffset.call(this, from ? from : this.orientation === 'horizontal' ? 'start' : 'top');
    };
    /** Measure the combined size of all of the rendered items. */
    /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRenderedContentSize = /**
     * Measure the combined size of all of the rendered items.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var contentEl = this._contentWrapper.nativeElement;
        return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
    };
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     */
    /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.measureRangeSize = /**
     * Measure the total combined size of the given range. Throws if the range includes items that are
     * not rendered.
     * @param {?} range
     * @return {?}
     */
    function (range) {
        if (!this._forOf) {
            return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
    };
    /** Update the viewport dimensions and re-render. */
    /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype.checkViewportSize = /**
     * Update the viewport dimensions and re-render.
     * @return {?}
     */
    function () {
        // TODO: Cleanup later when add logic for handling content resize
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
    };
    /** Measure the viewport size. */
    /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._measureViewportSize = /**
     * Measure the viewport size.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var viewportEl = this.elementRef.nativeElement;
        this._viewportSize = this.orientation === 'horizontal' ?
            viewportEl.clientWidth : viewportEl.clientHeight;
    };
    /** Queue up change detection to run. */
    /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._markChangeDetectionNeeded = /**
     * Queue up change detection to run.
     * @private
     * @param {?=} runAfter
     * @return {?}
     */
    function (runAfter) {
        var _this = this;
        if (runAfter) {
            this._runAfterChangeDetection.push(runAfter);
        }
        // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
        // properties sequentially we only have to run `_doChangeDetection` once at the end.
        if (!this._isChangeDetectionPending) {
            this._isChangeDetectionPending = true;
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return Promise.resolve().then((/**
             * @return {?}
             */
            function () {
                _this._doChangeDetection();
            })); }));
        }
    };
    /** Run change detection. */
    /**
     * Run change detection.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._doChangeDetection = /**
     * Run change detection.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isChangeDetectionPending = false;
        // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
        // from the root, since the repeated items are content projected in. Calling `detectChanges`
        // instead does not properly check the projected content.
        this.ngZone.run((/**
         * @return {?}
         */
        function () { return _this._changeDetectorRef.markForCheck(); }));
        // Apply the content transform. The transform can't be set via an Angular binding because
        // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
        // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
        // the `Number` function first to coerce it to a numeric value.
        this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
        /** @type {?} */
        var runAfterChangeDetection = this._runAfterChangeDetection;
        this._runAfterChangeDetection = [];
        for (var _i = 0, runAfterChangeDetection_1 = runAfterChangeDetection; _i < runAfterChangeDetection_1.length; _i++) {
            var fn = runAfterChangeDetection_1[_i];
            fn();
        }
    };
    /** Calculates the `style.width` and `style.height` for the spacer element. */
    /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */
    CdkVirtualScrollViewport.prototype._calculateSpacerSize = /**
     * Calculates the `style.width` and `style.height` for the spacer element.
     * @private
     * @return {?}
     */
    function () {
        this._totalContentHeight =
            this.orientation === 'horizontal' ? '' : this._totalContentSize + "px";
        this._totalContentWidth =
            this.orientation === 'horizontal' ? this._totalContentSize + "px" : '';
    };
    CdkVirtualScrollViewport.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'cdk-virtual-scroll-viewport',
                    template: "<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\"><ng-content></ng-content></div><div class=\"cdk-virtual-scroll-spacer\" [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>",
                    styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
                    host: {
                        'class': 'cdk-virtual-scroll-viewport',
                        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
                        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"',
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    providers: [{
                            provide: CdkScrollable,
                            useExisting: CdkVirtualScrollViewport,
                        }]
                },] },
    ];
    /** @nocollapse */
    CdkVirtualScrollViewport.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [VIRTUAL_SCROLL_STRATEGY,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: ScrollDispatcher }
    ]; };
    CdkVirtualScrollViewport.propDecorators = {
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        scrolledIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        _contentWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentWrapper', { static: true },] }]
    };
    return CdkVirtualScrollViewport;
}(CdkScrollable));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to extract size from a DOM Node.
 * @param {?} orientation
 * @param {?} node
 * @return {?}
 */
function getSize(orientation, node) {
    /** @type {?} */
    var el = (/** @type {?} */ (node));
    if (!el.getBoundingClientRect) {
        return 0;
    }
    /** @type {?} */
    var rect = el.getBoundingClientRect();
    return orientation == 'horizontal' ? rect.width : rect.height;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 * @template T
 */
var CdkVirtualForOf = /** @class */ (function () {
    function CdkVirtualForOf(_viewContainerRef, _template, _differs, _viewport, ngZone) {
        var _this = this;
        this._viewContainerRef = _viewContainerRef;
        this._template = _template;
        this._differs = _differs;
        this._viewport = _viewport;
        /**
         * Emits when the rendered view of the data changes.
         */
        this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Subject that emits when a new DataSource instance is given.
         */
        this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * The size of the cache used to store templates that are not being used for re-use later.
         * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
         */
        this.cdkVirtualForTemplateCacheSize = 20;
        /**
         * Emits whenever the data in the current DataSource changes.
         */
        this.dataStream = this._dataSourceChanges
            .pipe(
        // Start off with null `DataSource`.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])((/** @type {?} */ (null))), 
        // Bundle up the previous and current data sources so we can work with both.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), 
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var prev = _a[0], cur = _a[1];
            return _this._changeDataSource(prev, cur);
        })), 
        // Replay the last emitted data when someone subscribes.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        /**
         * The differ used to calculate changes to the data.
         */
        this._differ = null;
        /**
         * The template cache used to hold on ot template instancess that have been stamped out, but don't
         * currently need to be rendered. These instances will be reused in the future rather than
         * stamping out brand new ones.
         */
        this._templateCache = [];
        /**
         * Whether the rendered data should be updated during the next ngDoCheck cycle.
         */
        this._needsUpdate = false;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dataStream.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this._data = data;
            _this._onRenderedDataChange();
        }));
        this._viewport.renderedRangeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed)).subscribe((/**
         * @param {?} range
         * @return {?}
         */
        function (range) {
            _this._renderedRange = range;
            ngZone.run((/**
             * @return {?}
             */
            function () { return _this.viewChange.next(_this._renderedRange); }));
            _this._onRenderedDataChange();
        }));
        this._viewport.attach(this);
    }
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForOf", {
        /** The DataSource to display. */
        get: /**
         * The DataSource to display.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForOf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._cdkVirtualForOf = value;
            /** @type {?} */
            var ds = Object(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["isDataSource"])(value) ? value :
                // Slice the value if its an NgIterable to ensure we're working with an array.
                new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["ArrayDataSource"](value instanceof rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"] ? value : Array.prototype.slice.call(value || []));
            this._dataSourceChanges.next(ds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTrackBy", {
        /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         */
        get: /**
         * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
         * the item and produces a value to be used as the item's identity when tracking changes.
         * @return {?}
         */
        function () {
            return this._cdkVirtualForTrackBy;
        },
        set: /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            var _this = this;
            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ?
                (/**
                 * @param {?} index
                 * @param {?} item
                 * @return {?}
                 */
                function (index, item) { return fn(index + (_this._renderedRange ? _this._renderedRange.start : 0), item); }) :
                undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkVirtualForOf.prototype, "cdkVirtualForTemplate", {
        /** The template used to stamp out new elements. */
        set: /**
         * The template used to stamp out new elements.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this._needsUpdate = true;
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     */
    /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    CdkVirtualForOf.prototype.measureRangeSize = /**
     * Measures the combined size (width for horizontal orientation, height for vertical) of all items
     * in the specified range. Throws an error if the range includes items that are not currently
     * rendered.
     * @param {?} range
     * @param {?} orientation
     * @return {?}
     */
    function (range, orientation) {
        if (range.start >= range.end) {
            return 0;
        }
        if (range.start < this._renderedRange.start || range.end > this._renderedRange.end) {
            throw Error("Error: attempted to measure an item that isn't rendered.");
        }
        // The index into the list of rendered views for the first item in the range.
        /** @type {?} */
        var renderedStartIndex = range.start - this._renderedRange.start;
        // The length of the range we're measuring.
        /** @type {?} */
        var rangeLen = range.end - range.start;
        // Loop over all root nodes for all items in the range and sum up their size.
        /** @type {?} */
        var totalSize = 0;
        /** @type {?} */
        var i = rangeLen;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i + renderedStartIndex)));
            /** @type {?} */
            var j = view ? view.rootNodes.length : 0;
            while (j--) {
                totalSize += getSize(orientation, (/** @type {?} */ (view)).rootNodes[j]);
            }
        }
        return totalSize;
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._differ && this._needsUpdate) {
            // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
            // this list being rendered (can use simpler algorithm) vs needs update due to data actually
            // changing (need to do this diff).
            /** @type {?} */
            var changes = this._differ.diff(this._renderedItems);
            if (!changes) {
                this._updateContext();
            }
            else {
                this._applyChanges(changes);
            }
            this._needsUpdate = false;
        }
    };
    /**
     * @return {?}
     */
    CdkVirtualForOf.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._viewport.detach();
        this._dataSourceChanges.next();
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        for (var _i = 0, _a = this._templateCache; _i < _a.length; _i++) {
            var view = _a[_i];
            view.destroy();
        }
    };
    /** React to scroll state changes in the viewport. */
    /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._onRenderedDataChange = /**
     * React to scroll state changes in the viewport.
     * @private
     * @return {?}
     */
    function () {
        if (!this._renderedRange) {
            return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
            this._differ = this._differs.find(this._renderedItems).create(this.cdkVirtualForTrackBy);
        }
        this._needsUpdate = true;
    };
    /** Swap out one `DataSource` for another. */
    /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    CdkVirtualForOf.prototype._changeDataSource = /**
     * Swap out one `DataSource` for another.
     * @private
     * @param {?} oldDs
     * @param {?} newDs
     * @return {?}
     */
    function (oldDs, newDs) {
        if (oldDs) {
            oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
    };
    /** Update the `CdkVirtualForOfContext` for all views. */
    /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateContext = /**
     * Update the `CdkVirtualForOfContext` for all views.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
            view.detectChanges();
        }
    };
    /** Apply changes to the DOM. */
    /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    CdkVirtualForOf.prototype._applyChanges = /**
     * Apply changes to the DOM.
     * @private
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Rearrange the views to put them in the right location.
        changes.forEachOperation((/**
         * @param {?} record
         * @param {?} adjustedPreviousIndex
         * @param {?} currentIndex
         * @return {?}
         */
        function (record, adjustedPreviousIndex, currentIndex) {
            if (record.previousIndex == null) { // Item added.
                // Item added.
                /** @type {?} */
                var view = _this._insertViewForNewItem((/** @type {?} */ (currentIndex)));
                view.context.$implicit = record.item;
            }
            else if (currentIndex == null) { // Item removed.
                _this._cacheView(_this._detachView((/** @type {?} */ (adjustedPreviousIndex))));
            }
            else { // Item moved.
                // Item moved.
                /** @type {?} */
                var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (adjustedPreviousIndex)))));
                _this._viewContainerRef.move(view, currentIndex);
                view.context.$implicit = record.item;
            }
        }));
        // Update $implicit for any items that had an identity change.
        changes.forEachIdentityChange((/**
         * @param {?} record
         * @return {?}
         */
        function (record) {
            /** @type {?} */
            var view = (/** @type {?} */ (_this._viewContainerRef.get((/** @type {?} */ (record.currentIndex)))));
            view.context.$implicit = record.item;
        }));
        // Update the context variables on all items.
        /** @type {?} */
        var count = this._data.length;
        /** @type {?} */
        var i = this._viewContainerRef.length;
        while (i--) {
            /** @type {?} */
            var view = (/** @type {?} */ (this._viewContainerRef.get(i)));
            view.context.index = this._renderedRange.start + i;
            view.context.count = count;
            this._updateComputedContextProperties(view.context);
        }
    };
    /** Cache the given detached view. */
    /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    CdkVirtualForOf.prototype._cacheView = /**
     * Cache the given detached view.
     * @private
     * @param {?} view
     * @return {?}
     */
    function (view) {
        if (this._templateCache.length < this.cdkVirtualForTemplateCacheSize) {
            this._templateCache.push(view);
        }
        else {
            /** @type {?} */
            var index = this._viewContainerRef.indexOf(view);
            // It's very unlikely that the index will ever be -1, but just in case,
            // destroy the view on its own, otherwise destroy it through the
            // container to ensure that all the references are removed.
            if (index === -1) {
                view.destroy();
            }
            else {
                this._viewContainerRef.remove(index);
            }
        }
    };
    /** Inserts a view for a new item, either from the cache or by creating a new one. */
    /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewForNewItem = /**
     * Inserts a view for a new item, either from the cache or by creating a new one.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this._insertViewFromCache(index) || this._createEmbeddedViewAt(index);
    };
    /** Update the computed properties on the `CdkVirtualForOfContext`. */
    /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    CdkVirtualForOf.prototype._updateComputedContextProperties = /**
     * Update the computed properties on the `CdkVirtualForOfContext`.
     * @private
     * @param {?} context
     * @return {?}
     */
    function (context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
    };
    /** Creates a new embedded view and moves it to the given index */
    /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._createEmbeddedViewAt = /**
     * Creates a new embedded view and moves it to the given index
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // Note that it's important that we insert the item directly at the proper index,
        // rather than inserting it and the moving it in place, because if there's a directive
        // on the same node that injects the `ViewContainerRef`, Angular will insert another
        // comment node which can throw off the move when it's being repeated for all items.
        return this._viewContainerRef.createEmbeddedView(this._template, {
            $implicit: (/** @type {?} */ (null)),
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
        }, index);
    };
    /** Inserts a recycled view from the cache at the given index. */
    /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._insertViewFromCache = /**
     * Inserts a recycled view from the cache at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var cachedView = this._templateCache.pop();
        if (cachedView) {
            this._viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
    };
    /** Detaches the embedded view at the given index. */
    /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    CdkVirtualForOf.prototype._detachView = /**
     * Detaches the embedded view at the given index.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return (/** @type {?} */ (this._viewContainerRef.detach(index)));
    };
    CdkVirtualForOf.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[cdkVirtualFor][cdkVirtualForOf]',
                },] },
    ];
    /** @nocollapse */
    CdkVirtualForOf.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"] },
        { type: CdkVirtualScrollViewport, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTrackBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cdkVirtualForTemplateCacheSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return CdkVirtualForOf;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ScrollingModule = /** @class */ (function () {
    function ScrollingModule() {
    }
    ScrollingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["PlatformModule"]],
                    exports: [
                        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                    declarations: [
                        CdkFixedSizeVirtualScroll,
                        CdkScrollable,
                        CdkVirtualForOf,
                        CdkVirtualScrollViewport,
                    ],
                },] },
    ];
    return ScrollingModule;
}());
/**
 * @deprecated ScrollDispatchModule has been renamed to ScrollingModule.
 * \@breaking-change 8.0.0 delete this alias
 */
var ScrollDispatchModule = /** @class */ (function () {
    function ScrollDispatchModule() {
    }
    ScrollDispatchModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [ScrollingModule],
                    exports: [ScrollingModule],
                },] },
    ];
    return ScrollDispatchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Time in ms to throttle the resize events by default.
 * @type {?}
 */
var DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * \@docs-private
 */
var ViewportRuler = /** @class */ (function () {
    function ViewportRuler(_platform, ngZone) {
        var _this = this;
        this._platform = _platform;
        ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () {
            _this._change = _platform.isBrowser ?
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'orientationchange')) :
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
            // Note that we need to do the subscription inside `runOutsideAngular`
            // since subscribing is what causes the event listener to be added.
            _this._invalidateCache = _this.change().subscribe((/**
             * @return {?}
             */
            function () { return _this._updateViewportSize(); }));
        }));
    }
    /**
     * @return {?}
     */
    ViewportRuler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._invalidateCache.unsubscribe();
    };
    /** Returns the viewport's width and height. */
    /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportSize = /**
     * Returns the viewport's width and height.
     * @return {?}
     */
    function () {
        if (!this._viewportSize) {
            this._updateViewportSize();
        }
        /** @type {?} */
        var output = { width: this._viewportSize.width, height: this._viewportSize.height };
        // If we're not on a browser, don't cache the size since it'll be mocked out anyway.
        if (!this._platform.isBrowser) {
            this._viewportSize = (/** @type {?} */ (null));
        }
        return output;
    };
    /** Gets a ClientRect for the viewport's bounds. */
    /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportRect = /**
     * Gets a ClientRect for the viewport's bounds.
     * @return {?}
     */
    function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        /** @type {?} */
        var scrollPosition = this.getViewportScrollPosition();
        var _a = this.getViewportSize(), width = _a.width, height = _a.height;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /** Gets the (top, left) scroll position of the viewport. */
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    ViewportRuler.prototype.getViewportScrollPosition = /**
     * Gets the (top, left) scroll position of the viewport.
     * @return {?}
     */
    function () {
        // While we can get a reference to the fake document
        // during SSR, it doesn't have getBoundingClientRect.
        if (!this._platform.isBrowser) {
            return { top: 0, left: 0 };
        }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        /** @type {?} */
        var documentElement = (/** @type {?} */ (document.documentElement));
        /** @type {?} */
        var documentRect = documentElement.getBoundingClientRect();
        /** @type {?} */
        var top = -documentRect.top || document.body.scrollTop || window.scrollY ||
            documentElement.scrollTop || 0;
        /** @type {?} */
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX ||
            documentElement.scrollLeft || 0;
        return { top: top, left: left };
    };
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param throttleTime Time in milliseconds to throttle the stream.
     */
    /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    ViewportRuler.prototype.change = /**
     * Returns a stream that emits whenever the size of the viewport changes.
     * @param {?=} throttleTime Time in milliseconds to throttle the stream.
     * @return {?}
     */
    function (throttleTime) {
        if (throttleTime === void 0) { throttleTime = DEFAULT_RESIZE_TIME; }
        return throttleTime > 0 ? this._change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["auditTime"])(throttleTime)) : this._change;
    };
    /** Updates the cached viewport size. */
    /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    ViewportRuler.prototype._updateViewportSize = /**
     * Updates the cached viewport size.
     * @private
     * @return {?}
     */
    function () {
        this._viewportSize = this._platform.isBrowser ?
            { width: window.innerWidth, height: window.innerHeight } :
            { width: 0, height: 0 };
    };
    ViewportRuler.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    ViewportRuler.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    /** @nocollapse */ ViewportRuler.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ViewportRuler_Factory() { return new ViewportRuler(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); }, token: ViewportRuler, providedIn: "root" });
    return ViewportRuler;
}());
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @param {?} parentRuler
 * @param {?} platform
 * @param {?} ngZone
 * @return {?}
 */
function VIEWPORT_RULER_PROVIDER_FACTORY(parentRuler, platform, ngZone) {
    return parentRuler || new ViewportRuler(platform, ngZone);
}
/**
 * \@docs-private \@deprecated \@breaking-change 8.0.0
 * @type {?}
 */
var VIEWPORT_RULER_PROVIDER = {
    // If there is already a ViewportRuler available, use that. Otherwise, provide a new one.
    provide: ViewportRuler,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ViewportRuler], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]],
    useFactory: VIEWPORT_RULER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=scrolling.es5.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-card.js":
/*!****************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-card.js ***!
  \****************************************************/
/*! exports provided: Card, CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Card = /** @class */ (function () {
    function Card(el) {
        this.el = el;
    }
    Card.prototype.getBlockableElement = function () {
        return this.el.nativeElement.children[0];
    };
    Card.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Card.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Card.prototype, "subheader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Card.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Card.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Header"], { static: true })
    ], Card.prototype, "headerFacet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(primeng_api__WEBPACK_IMPORTED_MODULE_2__["Footer"], { static: true })
    ], Card.prototype, "footerFacet", void 0);
    Card = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'p-card',
            template: "\n        <div [ngClass]=\"'ui-card ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-card-header\" *ngIf=\"headerFacet\">\n               <ng-content select=\"p-header\"></ng-content>\n            </div>\n            <div class=\"ui-card-body\">\n                <div class=\"ui-card-title\" *ngIf=\"header\">{{header}}</div>\n                <div class=\"ui-card-subtitle\" *ngIf=\"subheader\">{{subheader}}</div>\n                <div class=\"ui-card-content\">\n                    <ng-content></ng-content>\n                </div>\n                <div class=\"ui-card-footer\" *ngIf=\"footerFacet\">\n                    <ng-content select=\"p-footer\"></ng-content>\n                </div>\n            </div>\n        </div>\n    "
        })
    ], Card);
    return Card;
}());
var CardModule = /** @class */ (function () {
    function CardModule() {
    }
    CardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Card, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [Card]
        })
    ], CardModule);
    return CardModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-card.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-dropdown.js":
/*!********************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-dropdown.js ***!
  \********************************************************/
/*! exports provided: DROPDOWN_VALUE_ACCESSOR, Dropdown, DropdownItem, DropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROPDOWN_VALUE_ACCESSOR", function() { return DROPDOWN_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModule", function() { return DropdownModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm5/primeng-api.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/utils */ "./node_modules/primeng/fesm5/primeng-utils.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/fesm5/primeng-tooltip.js");










var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var DROPDOWN_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return Dropdown; }),
    multi: true
};
var DropdownItem = /** @class */ (function () {
    function DropdownItem() {
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropdownItem.prototype.onOptionClick = function (event) {
        this.onClick.emit({
            originalEvent: event,
            option: this.option
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownItem.prototype, "option", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownItem.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownItem.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownItem.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownItem.prototype, "itemSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropdownItem.prototype, "template", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DropdownItem.prototype, "onClick", void 0);
    DropdownItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-dropdownItem',
            template: "\n        <li (click)=\"onOptionClick($event)\" role=\"option\"\n            [attr.aria-label]=\"option.label\"\n            [ngStyle]=\"{'height': itemSize + 'px'}\"\n            [ngClass]=\"{'ui-dropdown-item ui-corner-all':true,\n                                                'ui-state-highlight': selected,\n                                                'ui-state-disabled':(option.disabled),\n                                                'ui-dropdown-item-empty': !option.label||option.label.length === 0}\">\n            <span *ngIf=\"!template\">{{option.label||'empty'}}</span>\n            <ng-container *ngTemplateOutlet=\"template; context: {$implicit: option}\"></ng-container>\n        </li>\n    "
        })
    ], DropdownItem);
    return DropdownItem;
}());
var Dropdown = /** @class */ (function () {
    function Dropdown(el, renderer, cd, zone) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.zone = zone;
        this.scrollHeight = '200px';
        this.filterBy = 'label';
        this.resetFilterOnHide = false;
        this.dropdownIcon = 'pi pi-chevron-down';
        this.autoDisplayFirst = true;
        this.emptyFilterMessage = 'No results found';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.showTransitionOptions = '225ms ease-out';
        this.hideTransitionOptions = '195ms ease-in';
        this.filterMatchMode = "contains";
        this.tooltip = '';
        this.tooltipPosition = 'right';
        this.tooltipPositionStyle = 'absolute';
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.viewPortOffsetTop = 0;
    }
    Object.defineProperty(Dropdown.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (_disabled) {
            if (_disabled)
                this.focused = false;
            this._disabled = _disabled;
            if (!this.cd.destroyed) {
                this.cd.detectChanges();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Dropdown.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    _this.selectedItemTemplate = item.template;
                    break;
                case 'group':
                    _this.groupTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    Dropdown.prototype.ngOnInit = function () {
        this.optionsToDisplay = this.options;
        this.updateSelectedOption(null);
    };
    Object.defineProperty(Dropdown.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            var opts = this.optionLabel ? primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].generateSelectItems(val, this.optionLabel) : val;
            this._options = opts;
            this.optionsToDisplay = this._options;
            this.updateSelectedOption(this.value);
            this.optionsChanged = true;
            if (this.filterValue && this.filterValue.length) {
                this.activateFilter();
            }
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.ngAfterViewInit = function () {
        if (this.editable) {
            this.updateEditableLabel();
        }
    };
    Object.defineProperty(Dropdown.prototype, "label", {
        get: function () {
            return (this.selectedOption ? this.selectedOption.label : null);
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.updateEditableLabel = function () {
        if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
            this.editableInputViewChild.nativeElement.value = (this.selectedOption ? this.selectedOption.label : this.value || '');
        }
    };
    Dropdown.prototype.onItemClick = function (event) {
        var _this = this;
        var option = event.option;
        this.itemClick = true;
        if (!option.disabled) {
            this.selectItem(event, option);
            this.focusViewChild.nativeElement.focus();
        }
        setTimeout(function () {
            _this.hide(event);
        }, 150);
    };
    Dropdown.prototype.selectItem = function (event, option) {
        var _this = this;
        if (this.selectedOption != option) {
            this.selectedOption = option;
            this.value = option.value;
            this.filled = true;
            this.onModelChange(this.value);
            this.updateEditableLabel();
            this.onChange.emit({
                originalEvent: event.originalEvent,
                value: this.value
            });
            if (this.virtualScroll) {
                setTimeout(function () {
                    _this.viewPortOffsetTop = _this.viewPort.measureScrollOffset();
                }, 1);
            }
        }
    };
    Dropdown.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.optionsChanged && this.overlayVisible) {
            this.optionsChanged = false;
            if (this.virtualScroll) {
                this.updateVirtualScrollSelectedIndex(true);
            }
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.alignOverlay();
                }, 1);
            });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
            if (this.virtualScroll && this.viewPort) {
                var range = this.viewPort.getRenderedRange();
                this.updateVirtualScrollSelectedIndex(false);
                if (range.start > this.virtualScrollSelectedIndex || range.end < this.virtualScrollSelectedIndex) {
                    this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
                }
            }
            var selectedItem = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight');
            if (selectedItem) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].scrollInView(this.itemsWrapper, primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, 'li.ui-state-highlight'));
            }
            this.selectedOptionUpdated = false;
        }
    };
    Dropdown.prototype.writeValue = function (value) {
        if (this.filter) {
            this.resetFilter();
        }
        this.value = value;
        this.updateSelectedOption(value);
        this.updateEditableLabel();
        this.updateFilledState();
        this.cd.markForCheck();
    };
    Dropdown.prototype.resetFilter = function () {
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.filterValue = null;
            this.filterViewChild.nativeElement.value = '';
        }
        this.optionsToDisplay = this.options;
    };
    Dropdown.prototype.updateSelectedOption = function (val) {
        this.selectedOption = this.findOption(val, this.optionsToDisplay);
        if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
            this.selectedOption = this.optionsToDisplay[0];
        }
        this.selectedOptionUpdated = true;
    };
    Dropdown.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    Dropdown.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    Dropdown.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    Dropdown.prototype.onMouseclick = function (event) {
        if (this.disabled || this.readonly) {
            return;
        }
        this.onClick.emit(event);
        this.selfClick = true;
        this.clearClick = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].hasClass(event.target, 'ui-dropdown-clear-icon');
        if (!this.itemClick && !this.clearClick) {
            this.focusViewChild.nativeElement.focus();
            if (this.overlayVisible)
                this.hide(event);
            else
                this.show();
            this.cd.detectChanges();
        }
    };
    Dropdown.prototype.onEditableInputClick = function (event) {
        this.itemClick = true;
        this.bindDocumentClickListener();
    };
    Dropdown.prototype.onEditableInputFocus = function (event) {
        this.focused = true;
        this.hide(event);
        this.onFocus.emit(event);
    };
    Dropdown.prototype.onEditableInputChange = function (event) {
        this.value = event.target.value;
        this.updateSelectedOption(this.value);
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    Dropdown.prototype.show = function () {
        this.overlayVisible = true;
    };
    Dropdown.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                var itemsWrapperSelector = this.virtualScroll ? '.cdk-virtual-scroll-viewport' : '.ui-dropdown-items-wrapper';
                this.itemsWrapper = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.overlay, itemsWrapperSelector);
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                this.bindDocumentResizeListener();
                if (this.options && this.options.length) {
                    if (!this.virtualScroll) {
                        var selectedListItem = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.itemsWrapper, '.ui-dropdown-item.ui-state-highlight');
                        if (selectedListItem) {
                            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].scrollInView(this.itemsWrapper, selectedListItem);
                        }
                    }
                }
                if (this.filterViewChild && this.filterViewChild.nativeElement) {
                    this.filterViewChild.nativeElement.focus();
                }
                this.onShow.emit(event);
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    Dropdown.prototype.scrollToSelectedVirtualScrollElement = function () {
        if (!this.virtualAutoScrolled) {
            if (this.viewPortOffsetTop) {
                this.viewPort.scrollToOffset(this.viewPortOffsetTop);
            }
            else if (this.virtualScrollSelectedIndex > -1) {
                this.viewPort.scrollToIndex(this.virtualScrollSelectedIndex);
            }
        }
        this.virtualAutoScrolled = true;
    };
    Dropdown.prototype.updateVirtualScrollSelectedIndex = function (resetOffset) {
        if (this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length) {
            if (resetOffset) {
                this.viewPortOffsetTop = 0;
            }
            this.virtualScrollSelectedIndex = this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay);
        }
    };
    Dropdown.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].appendChild(this.overlay, this.appendTo);
            this.overlay.style.minWidth = primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].getWidth(this.containerViewChild.nativeElement) + 'px';
        }
    };
    Dropdown.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    Dropdown.prototype.hide = function (event) {
        this.overlayVisible = false;
        if (this.filter && this.resetFilterOnHide) {
            this.resetFilter();
        }
        if (this.virtualScroll) {
            this.virtualAutoScrolled = false;
        }
        this.cd.markForCheck();
        this.onHide.emit(event);
    };
    Dropdown.prototype.alignOverlay = function () {
        if (this.overlay) {
            if (this.appendTo)
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].absolutePosition(this.overlay, this.containerViewChild.nativeElement);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].relativePosition(this.overlay, this.containerViewChild.nativeElement);
        }
    };
    Dropdown.prototype.onInputFocus = function (event) {
        this.focused = true;
        this.onFocus.emit(event);
    };
    Dropdown.prototype.onInputBlur = function (event) {
        this.focused = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    Dropdown.prototype.findPrevEnabledOption = function (index) {
        var prevEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = (index - 1); 0 <= i; i--) {
                var option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    prevEnabledOption = option;
                    break;
                }
            }
            if (!prevEnabledOption) {
                for (var i = this.optionsToDisplay.length - 1; i >= index; i--) {
                    var option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        prevEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return prevEnabledOption;
    };
    Dropdown.prototype.findNextEnabledOption = function (index) {
        var nextEnabledOption;
        if (this.optionsToDisplay && this.optionsToDisplay.length) {
            for (var i = (index + 1); index < (this.optionsToDisplay.length - 1); i++) {
                var option = this.optionsToDisplay[i];
                if (option.disabled) {
                    continue;
                }
                else {
                    nextEnabledOption = option;
                    break;
                }
            }
            if (!nextEnabledOption) {
                for (var i = 0; i < index; i++) {
                    var option = this.optionsToDisplay[i];
                    if (option.disabled) {
                        continue;
                    }
                    else {
                        nextEnabledOption = option;
                        break;
                    }
                }
            }
        }
        return nextEnabledOption;
    };
    Dropdown.prototype.onKeydown = function (event, search) {
        if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
            return;
        }
        switch (event.which) {
            //down
            case 40:
                if (!this.overlayVisible && event.altKey) {
                    this.show();
                }
                else {
                    if (this.group) {
                        var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        if (selectedItemIndex !== -1) {
                            var nextItemIndex = selectedItemIndex.itemIndex + 1;
                            if (nextItemIndex < (this.optionsToDisplay[selectedItemIndex.groupIndex].items.length)) {
                                this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[nextItemIndex]);
                                this.selectedOptionUpdated = true;
                            }
                            else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                                this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex + 1].items[0]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                        else {
                            this.selectItem(event, this.optionsToDisplay[0].items[0]);
                        }
                    }
                    else {
                        var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                        var nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
                        if (nextEnabledOption) {
                            this.selectItem(event, nextEnabledOption);
                            this.selectedOptionUpdated = true;
                        }
                    }
                }
                event.preventDefault();
                break;
            //up
            case 38:
                if (this.group) {
                    var selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                    if (selectedItemIndex !== -1) {
                        var prevItemIndex = selectedItemIndex.itemIndex - 1;
                        if (prevItemIndex >= 0) {
                            this.selectItem(event, this.optionsToDisplay[selectedItemIndex.groupIndex].items[prevItemIndex]);
                            this.selectedOptionUpdated = true;
                        }
                        else if (prevItemIndex < 0) {
                            var prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
                            if (prevGroup) {
                                this.selectItem(event, prevGroup.items[prevGroup.items.length - 1]);
                                this.selectedOptionUpdated = true;
                            }
                        }
                    }
                }
                else {
                    var selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
                    var prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
                    if (prevEnabledOption) {
                        this.selectItem(event, prevEnabledOption);
                        this.selectedOptionUpdated = true;
                    }
                }
                event.preventDefault();
                break;
            //space
            case 32:
            case 32:
                if (!this.overlayVisible) {
                    this.show();
                    event.preventDefault();
                }
                break;
            //enter
            case 13:
                if (!this.filter || (this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
                    this.hide(event);
                }
                event.preventDefault();
                break;
            //escape and tab
            case 27:
            case 9:
                this.hide(event);
                break;
            //search item based on keyboard input
            default:
                if (search) {
                    this.search(event);
                }
                break;
        }
    };
    Dropdown.prototype.search = function (event) {
        var _this = this;
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        var char = event.key;
        this.previousSearchChar = this.currentSearchChar;
        this.currentSearchChar = char;
        if (this.previousSearchChar === this.currentSearchChar)
            this.searchValue = this.currentSearchChar;
        else
            this.searchValue = this.searchValue ? this.searchValue + char : char;
        var newOption;
        if (this.group) {
            var searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.selectedOption.value, this.optionsToDisplay) : { groupIndex: 0, itemIndex: 0 };
            newOption = this.searchOptionWithinGroup(searchIndex);
        }
        else {
            var searchIndex = this.selectedOption ? this.findOptionIndex(this.selectedOption.value, this.optionsToDisplay) : -1;
            newOption = this.searchOption(++searchIndex);
        }
        if (newOption) {
            this.selectItem(event, newOption);
            this.selectedOptionUpdated = true;
        }
        this.searchTimeout = setTimeout(function () {
            _this.searchValue = null;
        }, 250);
    };
    Dropdown.prototype.searchOption = function (index) {
        var option;
        if (this.searchValue) {
            option = this.searchOptionInRange(index, this.optionsToDisplay.length);
            if (!option) {
                option = this.searchOptionInRange(0, index);
            }
        }
        return option;
    };
    Dropdown.prototype.searchOptionInRange = function (start, end) {
        for (var i = start; i < end; i++) {
            var opt = this.optionsToDisplay[i];
            if (opt.label.toLowerCase().startsWith(this.searchValue.toLowerCase())) {
                return opt;
            }
        }
        return null;
    };
    Dropdown.prototype.searchOptionWithinGroup = function (index) {
        var option;
        if (this.searchValue) {
            for (var i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
                for (var j = (index.groupIndex === i) ? (index.itemIndex + 1) : 0; j < this.optionsToDisplay[i].items.length; j++) {
                    var opt = this.optionsToDisplay[i].items[j];
                    if (opt.label.toLowerCase().startsWith(this.searchValue.toLowerCase())) {
                        return opt;
                    }
                }
            }
            if (!option) {
                for (var i = 0; i <= index.groupIndex; i++) {
                    for (var j = 0; j < ((index.groupIndex === i) ? index.itemIndex : this.optionsToDisplay[i].items.length); j++) {
                        var opt = this.optionsToDisplay[i].items[j];
                        if (opt.label.toLowerCase().startsWith(this.searchValue.toLowerCase())) {
                            return opt;
                        }
                    }
                }
            }
        }
        return null;
    };
    Dropdown.prototype.findOptionIndex = function (val, opts) {
        var index = -1;
        if (opts) {
            for (var i = 0; i < opts.length; i++) {
                if ((val == null && opts[i].value == null) || primeng_utils__WEBPACK_IMPORTED_MODULE_6__["ObjectUtils"].equals(val, opts[i].value, this.dataKey)) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Dropdown.prototype.findOptionGroupIndex = function (val, opts) {
        var groupIndex, itemIndex;
        if (opts) {
            for (var i = 0; i < opts.length; i++) {
                groupIndex = i;
                itemIndex = this.findOptionIndex(val, opts[i].items);
                if (itemIndex !== -1) {
                    break;
                }
            }
        }
        if (itemIndex !== -1) {
            return { groupIndex: groupIndex, itemIndex: itemIndex };
        }
        else {
            return -1;
        }
    };
    Dropdown.prototype.findOption = function (val, opts, inGroup) {
        var e_1, _a;
        if (this.group && !inGroup) {
            var opt = void 0;
            if (opts && opts.length) {
                try {
                    for (var opts_1 = __values(opts), opts_1_1 = opts_1.next(); !opts_1_1.done; opts_1_1 = opts_1.next()) {
                        var optgroup = opts_1_1.value;
                        opt = this.findOption(val, optgroup.items, true);
                        if (opt) {
                            break;
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (opts_1_1 && !opts_1_1.done && (_a = opts_1.return)) _a.call(opts_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return opt;
        }
        else {
            var index = this.findOptionIndex(val, opts);
            return (index != -1) ? opts[index] : null;
        }
    };
    Dropdown.prototype.onFilter = function (event) {
        var inputValue = event.target.value;
        if (inputValue && inputValue.length) {
            this.filterValue = inputValue;
            this.activateFilter();
        }
        else {
            this.filterValue = null;
            this.optionsToDisplay = this.options;
        }
        this.optionsChanged = true;
    };
    Dropdown.prototype.activateFilter = function () {
        var e_2, _a;
        var searchFields = this.filterBy.split(',');
        if (this.options && this.options.length) {
            if (this.group) {
                var filteredGroups = [];
                try {
                    for (var _b = __values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var optgroup = _c.value;
                        var filteredSubOptions = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"].filter(optgroup.items, searchFields, this.filterValue, this.filterMatchMode);
                        if (filteredSubOptions && filteredSubOptions.length) {
                            filteredGroups.push({
                                label: optgroup.label,
                                value: optgroup.value,
                                items: filteredSubOptions
                            });
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                this.optionsToDisplay = filteredGroups;
            }
            else {
                this.optionsToDisplay = primeng_utils__WEBPACK_IMPORTED_MODULE_6__["FilterUtils"].filter(this.options, searchFields, this.filterValue, this.filterMatchMode);
            }
            this.optionsChanged = true;
        }
    };
    Dropdown.prototype.applyFocus = function () {
        if (this.editable)
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.el.nativeElement, '.ui-dropdown-label.ui-inputtext').focus();
        else
            primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].findSingle(this.el.nativeElement, 'input[readonly]').focus();
    };
    Dropdown.prototype.focus = function () {
        this.applyFocus();
    };
    Dropdown.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                if (!_this.selfClick && !_this.itemClick) {
                    _this.hide(event);
                    _this.unbindDocumentClickListener();
                }
                _this.clearClickState();
                _this.cd.markForCheck();
            });
        }
    };
    Dropdown.prototype.clearClickState = function () {
        this.selfClick = false;
        this.itemClick = false;
    };
    Dropdown.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    Dropdown.prototype.bindDocumentResizeListener = function () {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    };
    Dropdown.prototype.unbindDocumentResizeListener = function () {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    };
    Dropdown.prototype.onWindowResize = function () {
        if (!primeng_dom__WEBPACK_IMPORTED_MODULE_5__["DomHandler"].isAndroid()) {
            this.hide(event);
        }
    };
    Dropdown.prototype.updateFilledState = function () {
        this.filled = (this.selectedOption != null);
    };
    Dropdown.prototype.clear = function (event) {
        this.clearClick = true;
        this.value = null;
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
        this.updateSelectedOption(this.value);
        this.updateEditableLabel();
        this.updateFilledState();
    };
    Dropdown.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.overlay = null;
        this.itemsWrapper = null;
    };
    Dropdown.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    Dropdown.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "scrollHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "style", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "panelStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "styleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "panelStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "readonly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "tabindex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "filterPlaceholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "inputId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "selectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "dataKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "filterBy", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "autofocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "resetFilterOnHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "dropdownIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "optionLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "autoDisplayFirst", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "showClear", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "emptyFilterMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "virtualScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "itemSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "autoZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "baseZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "showTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "hideTransitionOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "ariaFilterLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "filterMatchMode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "maxlength", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "tooltip", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "tooltipPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "tooltipPositionStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "tooltipStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Dropdown.prototype, "onChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Dropdown.prototype, "onFocus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Dropdown.prototype, "onBlur", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Dropdown.prototype, "onClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Dropdown.prototype, "onShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], Dropdown.prototype, "onHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: true })
    ], Dropdown.prototype, "containerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filter', { static: false })
    ], Dropdown.prototype, "filterViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('in', { static: true })
    ], Dropdown.prototype, "focusViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], { static: false })
    ], Dropdown.prototype, "viewPort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editableInput', { static: false })
    ], Dropdown.prototype, "editableInputViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(primeng_api__WEBPACK_IMPORTED_MODULE_4__["PrimeTemplate"])
    ], Dropdown.prototype, "templates", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "disabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], Dropdown.prototype, "options", null);
    Dropdown = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'p-dropdown',
            template: "\n         <div #container [ngClass]=\"{'ui-dropdown ui-widget ui-state-default ui-corner-all ui-helper-clearfix':true,\n            'ui-state-disabled':disabled, 'ui-dropdown-open':overlayVisible, 'ui-state-focus':focused, 'ui-dropdown-clearable': showClear && !disabled}\"\n            (click)=\"onMouseclick($event)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #in [attr.id]=\"inputId\" type=\"text\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" readonly (focus)=\"onInputFocus($event)\" aria-haspopup=\"listbox\"\n                    (blur)=\"onInputBlur($event)\" (keydown)=\"onKeydown($event, true)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\" [attr.autofocus]=\"autofocus\">\n            </div>\n            <div class=\"ui-helper-hidden-accessible ui-dropdown-hidden-select\">\n                <select [attr.required]=\"required\" [attr.name]=\"name\" tabindex=\"-1\" aria-hidden=\"true\">\n                    <option *ngIf=\"placeholder\" value=\"\">{{placeholder}}</option>\n                    <option *ngIf=\"selectedOption\" [value]=\"selectedOption.value\" [selected]=\"true\">{{selectedOption.label}}</option>\n                </select>\n            </div>\n            <div class=\"ui-dropdown-label-container\" [pTooltip]=\"tooltip\" [tooltipPosition]=\"tooltipPosition\" [positionStyle]=\"tooltipPositionStyle\" [tooltipStyleClass]=\"tooltipStyleClass\">\n                <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all':true,'ui-dropdown-label-empty':(label == null || label.length === 0)}\" *ngIf=\"!editable && (label != null)\">\n                    <ng-container *ngIf=\"!selectedItemTemplate\">{{label||'empty'}}</ng-container>\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: selectedOption}\"></ng-container>\n                </label>\n                <label [ngClass]=\"{'ui-dropdown-label ui-inputtext ui-corner-all ui-placeholder':true,'ui-dropdown-label-empty': (placeholder == null || placeholder.length === 0)}\" *ngIf=\"!editable && (label == null)\">{{placeholder||'empty'}}</label>\n                <input #editableInput type=\"text\" [attr.maxlength]=\"maxlength\" [attr.aria-label]=\"selectedOption ? selectedOption.label : ' '\" class=\"ui-dropdown-label ui-inputtext ui-corner-all\" *ngIf=\"editable\" [disabled]=\"disabled\" [attr.placeholder]=\"placeholder\"\n                            (click)=\"onEditableInputClick($event)\" (input)=\"onEditableInputChange($event)\" (focus)=\"onEditableInputFocus($event)\" (blur)=\"onInputBlur($event)\">\n                <i class=\"ui-dropdown-clear-icon pi pi-times\" (click)=\"clear($event)\" *ngIf=\"value != null && showClear && !disabled\"></i>\n            </div>\n            <div class=\"ui-dropdown-trigger ui-state-default ui-corner-right\">\n                <span class=\"ui-dropdown-trigger-icon ui-clickable\" [ngClass]=\"dropdownIcon\"></span>\n            </div>\n            <div *ngIf=\"overlayVisible\" [ngClass]=\"'ui-dropdown-panel  ui-widget ui-widget-content ui-corner-all ui-shadow'\" [@overlayAnimation]=\"{value: 'visible', params: {showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions}}\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" [ngStyle]=\"panelStyle\" [class]=\"panelStyleClass\">\n                <div *ngIf=\"filter\" class=\"ui-dropdown-filter-container\" (click)=\"$event.stopPropagation()\">\n                    <input #filter type=\"text\" autocomplete=\"off\" [value]=\"filterValue||''\" class=\"ui-dropdown-filter ui-inputtext ui-widget ui-state-default ui-corner-all\" [attr.placeholder]=\"filterPlaceholder\"\n                    (keydown.enter)=\"$event.preventDefault()\" (keydown)=\"onKeydown($event, false)\" (input)=\"onFilter($event)\" [attr.aria-label]=\"ariaFilterLabel\">\n                    <span class=\"ui-dropdown-filter-icon pi pi-search\"></span>\n                </div>\n                <div class=\"ui-dropdown-items-wrapper\" [style.max-height]=\"virtualScroll ? 'auto' : (scrollHeight||'auto')\">\n                    <ul class=\"ui-dropdown-items ui-dropdown-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\" role=\"listbox\">\n                        <ng-container *ngIf=\"group\">\n                            <ng-template ngFor let-optgroup [ngForOf]=\"optionsToDisplay\">\n                                <li class=\"ui-dropdown-item-group\">\n                                    <span *ngIf=\"!groupTemplate\">{{optgroup.label||'empty'}}</span>\n                                    <ng-container *ngTemplateOutlet=\"groupTemplate; context: {$implicit: optgroup}\"></ng-container>\n                                </li>\n                                <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optgroup.items, selectedOption: selectedOption}\"></ng-container>\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngIf=\"!group\">\n                            <ng-container *ngTemplateOutlet=\"itemslist; context: {$implicit: optionsToDisplay, selectedOption: selectedOption}\"></ng-container>\n                        </ng-container>\n                        <ng-template #itemslist let-options let-selectedOption=\"selectedOption\">\n\n                            <ng-container *ngIf=\"!virtualScroll; else virtualScrollList\">\n                                <ng-template ngFor let-option let-i=\"index\" [ngForOf]=\"options\">\n                                    <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\" \n                                                    (onClick)=\"onItemClick($event)\"\n                                                    [template]=\"itemTemplate\"></p-dropdownItem>\n                                </ng-template>\n                            </ng-container>\n                            <ng-template #virtualScrollList>\n                                <cdk-virtual-scroll-viewport (scrolledIndexChange)=\"scrollToSelectedVirtualScrollElement()\" #viewport [ngStyle]=\"{'height': scrollHeight}\" [itemSize]=\"itemSize\" *ngIf=\"virtualScroll && optionsToDisplay && optionsToDisplay.length\">\n                                    <ng-container *cdkVirtualFor=\"let option of options; let i = index; let c = count; let f = first; let l = last; let e = even; let o = odd\">         \n                                        <p-dropdownItem [option]=\"option\" [selected]=\"selectedOption == option\"\n                                                                   (onClick)=\"onItemClick($event)\"\n                                                                   [template]=\"itemTemplate\"></p-dropdownItem>\n                                    </ng-container>\n                                </cdk-virtual-scroll-viewport>\n                            </ng-template>\n                        </ng-template>\n                        <li *ngIf=\"filter && optionsToDisplay && optionsToDisplay.length === 0\" class=\"ui-dropdown-empty-message\">{{emptyFilterMessage}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('overlayAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(5%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{showTransitionParams}}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{hideTransitionParams}}'))
                ])
            ],
            host: {
                '[class.ui-inputwrapper-filled]': 'filled',
                '[class.ui-inputwrapper-focus]': 'focused'
            },
            providers: [DROPDOWN_VALUE_ACCESSOR]
        })
    ], Dropdown);
    return Dropdown;
}());
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"]],
            exports: [Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
            declarations: [Dropdown, DropdownItem]
        })
    ], DropdownModule);
    return DropdownModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-dropdown.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-tooltip.js":
/*!*******************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-tooltip.js ***!
  \*******************************************************/
/*! exports provided: Tooltip, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dom */ "./node_modules/primeng/fesm5/primeng-dom.js");




var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Tooltip = /** @class */ (function () {
    function Tooltip(el, zone) {
        this.el = el;
        this.zone = zone;
        this.tooltipPosition = 'right';
        this.tooltipEvent = 'hover';
        this.appendTo = 'body';
        this.tooltipZIndex = 'auto';
        this.escape = true;
    }
    Tooltip.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.tooltipEvent === 'hover') {
                _this.mouseEnterListener = _this.onMouseEnter.bind(_this);
                _this.mouseLeaveListener = _this.onMouseLeave.bind(_this);
                _this.clickListener = _this.onClick.bind(_this);
                _this.el.nativeElement.addEventListener('mouseenter', _this.mouseEnterListener);
                _this.el.nativeElement.addEventListener('mouseleave', _this.mouseLeaveListener);
                _this.el.nativeElement.addEventListener('click', _this.clickListener);
            }
            else if (_this.tooltipEvent === 'focus') {
                _this.focusListener = _this.onFocus.bind(_this);
                _this.blurListener = _this.onBlur.bind(_this);
                _this.el.nativeElement.addEventListener('focus', _this.focusListener);
                _this.el.nativeElement.addEventListener('blur', _this.blurListener);
            }
        });
    };
    Tooltip.prototype.onMouseEnter = function (e) {
        if (!this.container && !this.showTimeout) {
            this.activate();
        }
    };
    Tooltip.prototype.onMouseLeave = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.onFocus = function (e) {
        this.activate();
    };
    Tooltip.prototype.onBlur = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.onClick = function (e) {
        this.deactivate();
    };
    Tooltip.prototype.activate = function () {
        var _this = this;
        this.active = true;
        this.clearHideTimeout();
        if (this.showDelay)
            this.showTimeout = setTimeout(function () { _this.show(); }, this.showDelay);
        else
            this.show();
        if (this.life) {
            var duration = this.showDelay ? this.life + this.showDelay : this.life;
            this.hideTimeout = setTimeout(function () { _this.hide(); }, duration);
        }
    };
    Tooltip.prototype.deactivate = function () {
        var _this = this;
        this.active = false;
        this.clearShowTimeout();
        if (this.hideDelay) {
            this.clearHideTimeout(); //life timeout
            this.hideTimeout = setTimeout(function () { _this.hide(); }, this.hideDelay);
        }
        else {
            this.hide();
        }
    };
    Object.defineProperty(Tooltip.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this._text = text;
            if (this.active) {
                if (this._text) {
                    if (this.container && this.container.offsetParent) {
                        this.updateText();
                        this.align();
                    }
                    else {
                        this.show();
                    }
                }
                else {
                    this.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.create = function () {
        this.container = document.createElement('div');
        var tooltipArrow = document.createElement('div');
        tooltipArrow.className = 'ui-tooltip-arrow';
        this.container.appendChild(tooltipArrow);
        this.tooltipText = document.createElement('div');
        this.tooltipText.className = 'ui-tooltip-text ui-shadow ui-corner-all';
        this.updateText();
        if (this.positionStyle) {
            this.container.style.position = this.positionStyle;
        }
        this.container.appendChild(this.tooltipText);
        if (this.appendTo === 'body')
            document.body.appendChild(this.container);
        else if (this.appendTo === 'target')
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.el.nativeElement);
        else
            primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].appendChild(this.container, this.appendTo);
        this.container.style.display = 'inline-block';
    };
    Tooltip.prototype.show = function () {
        if (!this.text || this.disabled) {
            return;
        }
        this.create();
        this.align();
        primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].fadeIn(this.container, 250);
        if (this.tooltipZIndex === 'auto')
            this.container.style.zIndex = ++primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].zindex;
        else
            this.container.style.zIndex = this.tooltipZIndex;
        this.bindDocumentResizeListener();
    };
    Tooltip.prototype.hide = function () {
        this.remove();
    };
    Tooltip.prototype.updateText = function () {
        if (this.escape) {
            this.tooltipText.innerHTML = '';
            this.tooltipText.appendChild(document.createTextNode(this._text));
        }
        else {
            this.tooltipText.innerHTML = this._text;
        }
    };
    Tooltip.prototype.align = function () {
        var position = this.tooltipPosition;
        switch (position) {
            case 'top':
                this.alignTop();
                if (this.isOutOfBounds()) {
                    this.alignBottom();
                    if (this.isOutOfBounds()) {
                        this.alignRight();
                        if (this.isOutOfBounds()) {
                            this.alignLeft();
                        }
                    }
                }
                break;
            case 'bottom':
                this.alignBottom();
                if (this.isOutOfBounds()) {
                    this.alignTop();
                    if (this.isOutOfBounds()) {
                        this.alignRight();
                        if (this.isOutOfBounds()) {
                            this.alignLeft();
                        }
                    }
                }
                break;
            case 'left':
                this.alignLeft();
                if (this.isOutOfBounds()) {
                    this.alignRight();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
            case 'right':
                this.alignRight();
                if (this.isOutOfBounds()) {
                    this.alignLeft();
                    if (this.isOutOfBounds()) {
                        this.alignTop();
                        if (this.isOutOfBounds()) {
                            this.alignBottom();
                        }
                    }
                }
                break;
        }
    };
    Tooltip.prototype.getHostOffset = function () {
        if (this.appendTo === 'body' || this.appendTo === 'target') {
            var offset = this.el.nativeElement.getBoundingClientRect();
            var targetLeft = offset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollLeft();
            var targetTop = offset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getWindowScrollTop();
            return { left: targetLeft, top: targetTop };
        }
        else {
            return { left: 0, top: 0 };
        }
    };
    Tooltip.prototype.alignRight = function () {
        this.preAlign('right');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement);
        var top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignLeft = function () {
        this.preAlign('left');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
        var top = hostOffset.top + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container)) / 2;
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignTop = function () {
        this.preAlign('top');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
        var top = hostOffset.top - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.alignBottom = function () {
        this.preAlign('bottom');
        var hostOffset = this.getHostOffset();
        var left = hostOffset.left + (primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.el.nativeElement) - primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container)) / 2;
        var top = hostOffset.top + primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.el.nativeElement);
        this.container.style.left = left + 'px';
        this.container.style.top = top + 'px';
    };
    Tooltip.prototype.preAlign = function (position) {
        this.container.style.left = -999 + 'px';
        this.container.style.top = -999 + 'px';
        var defaultClassName = 'ui-tooltip ui-widget ui-tooltip-' + position;
        this.container.className = this.tooltipStyleClass ? defaultClassName + ' ' + this.tooltipStyleClass : defaultClassName;
    };
    Tooltip.prototype.isOutOfBounds = function () {
        var offset = this.container.getBoundingClientRect();
        var targetTop = offset.top;
        var targetLeft = offset.left;
        var width = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterWidth(this.container);
        var height = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getOuterHeight(this.container);
        var viewport = primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].getViewport();
        return (targetLeft + width > viewport.width) || (targetLeft < 0) || (targetTop < 0) || (targetTop + height > viewport.height);
    };
    Tooltip.prototype.onWindowResize = function (e) {
        this.hide();
    };
    Tooltip.prototype.bindDocumentResizeListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.resizeListener = _this.onWindowResize.bind(_this);
            window.addEventListener('resize', _this.resizeListener);
        });
    };
    Tooltip.prototype.unbindDocumentResizeListener = function () {
        if (this.resizeListener) {
            window.removeEventListener('resize', this.resizeListener);
            this.resizeListener = null;
        }
    };
    Tooltip.prototype.unbindEvents = function () {
        if (this.tooltipEvent === 'hover') {
            this.el.nativeElement.removeEventListener('mouseenter', this.mouseEnterListener);
            this.el.nativeElement.removeEventListener('mouseleave', this.mouseLeaveListener);
            this.el.nativeElement.removeEventListener('click', this.clickListener);
        }
        else if (this.tooltipEvent === 'focus') {
            this.el.nativeElement.removeEventListener('focus', this.focusListener);
            this.el.nativeElement.removeEventListener('blur', this.blurListener);
        }
        this.unbindDocumentResizeListener();
    };
    Tooltip.prototype.remove = function () {
        if (this.container && this.container.parentElement) {
            if (this.appendTo === 'body')
                document.body.removeChild(this.container);
            else if (this.appendTo === 'target')
                this.el.nativeElement.removeChild(this.container);
            else
                primeng_dom__WEBPACK_IMPORTED_MODULE_2__["DomHandler"].removeChild(this.container, this.appendTo);
        }
        this.unbindDocumentResizeListener();
        this.clearTimeouts();
        this.container = null;
    };
    Tooltip.prototype.clearShowTimeout = function () {
        if (this.showTimeout) {
            clearTimeout(this.showTimeout);
            this.showTimeout = null;
        }
    };
    Tooltip.prototype.clearHideTimeout = function () {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
    };
    Tooltip.prototype.clearTimeouts = function () {
        this.clearShowTimeout();
        this.clearHideTimeout();
    };
    Tooltip.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.remove();
    };
    Tooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "tooltipPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "tooltipEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "appendTo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "positionStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "tooltipStyleClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "tooltipZIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tooltipDisabled")
    ], Tooltip.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "escape", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "showDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "hideDelay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])()
    ], Tooltip.prototype, "life", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('pTooltip')
    ], Tooltip.prototype, "text", null);
    Tooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[pTooltip]'
        })
    ], Tooltip);
    return Tooltip;
}());
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [Tooltip],
            declarations: [Tooltip]
        })
    ], TooltipModule);
    return TooltipModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-tooltip.js.map


/***/ }),

/***/ "./node_modules/primeng/fesm5/primeng-utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/primeng/fesm5/primeng-utils.js ***!
  \*****************************************************/
/*! exports provided: FilterUtils, ObjectUtils, UniqueComponentId, lastId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUtils", function() { return FilterUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUtils", function() { return ObjectUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueComponentId", function() { return UniqueComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastId", function() { return lastId; });
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    ObjectUtils.equals = function (obj1, obj2, field) {
        if (field)
            return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
        else
            return this.equalsByValue(obj1, obj2);
    };
    ObjectUtils.equalsByValue = function (obj1, obj2) {
        if (obj1 === obj2)
            return true;
        if (obj1 && obj2 && typeof obj1 == 'object' && typeof obj2 == 'object') {
            var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
            if (arrA && arrB) {
                length = obj1.length;
                if (length != obj2.length)
                    return false;
                for (i = length; i-- !== 0;)
                    if (!this.equalsByValue(obj1[i], obj2[i]))
                        return false;
                return true;
            }
            if (arrA != arrB)
                return false;
            var dateA = obj1 instanceof Date, dateB = obj2 instanceof Date;
            if (dateA != dateB)
                return false;
            if (dateA && dateB)
                return obj1.getTime() == obj2.getTime();
            var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
            if (regexpA != regexpB)
                return false;
            if (regexpA && regexpB)
                return obj1.toString() == obj2.toString();
            var keys = Object.keys(obj1);
            length = keys.length;
            if (length !== Object.keys(obj2).length)
                return false;
            for (i = length; i-- !== 0;)
                if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
                    return false;
            for (i = length; i-- !== 0;) {
                key = keys[i];
                if (!this.equalsByValue(obj1[key], obj2[key]))
                    return false;
            }
            return true;
        }
        return obj1 !== obj1 && obj2 !== obj2;
    };
    ObjectUtils.resolveFieldData = function (data, field) {
        if (data && field) {
            if (this.isFunction(field)) {
                return field(data);
            }
            else if (field.indexOf('.') == -1) {
                return data[field];
            }
            else {
                var fields = field.split('.');
                var value = data;
                for (var i = 0, len = fields.length; i < len; ++i) {
                    if (value == null) {
                        return null;
                    }
                    value = value[fields[i]];
                }
                return value;
            }
        }
        else {
            return null;
        }
    };
    ObjectUtils.isFunction = function (obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    };
    ObjectUtils.reorderArray = function (value, from, to) {
        var target;
        if (value && from !== to) {
            if (to >= value.length) {
                to %= value.length;
                from %= value.length;
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    };
    ObjectUtils.generateSelectItems = function (val, field) {
        var e_1, _a;
        var selectItems;
        if (val && val.length) {
            selectItems = [];
            try {
                for (var val_1 = __values(val), val_1_1 = val_1.next(); !val_1_1.done; val_1_1 = val_1.next()) {
                    var item = val_1_1.value;
                    selectItems.push({ label: this.resolveFieldData(item, field), value: item });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (val_1_1 && !val_1_1.done && (_a = val_1.return)) _a.call(val_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return selectItems;
    };
    ObjectUtils.insertIntoOrderedArray = function (item, index, arr, sourceArr) {
        if (arr.length > 0) {
            var injected = false;
            for (var i = 0; i < arr.length; i++) {
                var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
                if (currentItemIndex > index) {
                    arr.splice(i, 0, item);
                    injected = true;
                    break;
                }
            }
            if (!injected) {
                arr.push(item);
            }
        }
        else {
            arr.push(item);
        }
    };
    ObjectUtils.findIndexInList = function (item, list) {
        var index = -1;
        if (list) {
            for (var i = 0; i < list.length; i++) {
                if (list[i] == item) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    ObjectUtils.removeAccents = function (str) {
        if (str && str.search(/[\xC0-\xFF]/g) > -1) {
            str = str
                .replace(/[\xC0-\xC5]/g, "A")
                .replace(/[\xC6]/g, "AE")
                .replace(/[\xC7]/g, "C")
                .replace(/[\xC8-\xCB]/g, "E")
                .replace(/[\xCC-\xCF]/g, "I")
                .replace(/[\xD0]/g, "D")
                .replace(/[\xD1]/g, "N")
                .replace(/[\xD2-\xD6\xD8]/g, "O")
                .replace(/[\xD9-\xDC]/g, "U")
                .replace(/[\xDD]/g, "Y")
                .replace(/[\xDE]/g, "P")
                .replace(/[\xE0-\xE5]/g, "a")
                .replace(/[\xE6]/g, "ae")
                .replace(/[\xE7]/g, "c")
                .replace(/[\xE8-\xEB]/g, "e")
                .replace(/[\xEC-\xEF]/g, "i")
                .replace(/[\xF1]/g, "n")
                .replace(/[\xF2-\xF6\xF8]/g, "o")
                .replace(/[\xF9-\xFC]/g, "u")
                .replace(/[\xFE]/g, "p")
                .replace(/[\xFD\xFF]/g, "y");
        }
        return str;
    };
    return ObjectUtils;
}());

var __values$1 = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var FilterUtils = /** @class */ (function () {
    function FilterUtils() {
    }
    FilterUtils.filter = function (value, fields, filterValue, filterMatchMode) {
        var e_1, _a, e_2, _b;
        var filteredItems = [];
        var filterText = ObjectUtils.removeAccents(filterValue).toLowerCase();
        if (value) {
            try {
                for (var value_1 = __values$1(value), value_1_1 = value_1.next(); !value_1_1.done; value_1_1 = value_1.next()) {
                    var item = value_1_1.value;
                    try {
                        for (var fields_1 = (e_2 = void 0, __values$1(fields)), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                            var field = fields_1_1.value;
                            var fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(item, field))).toLowerCase();
                            if (FilterUtils[filterMatchMode](fieldValue, filterText)) {
                                filteredItems.push(item);
                                break;
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (fields_1_1 && !fields_1_1.done && (_b = fields_1.return)) _b.call(fields_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return filteredItems;
    };
    FilterUtils.startsWith = function (value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        var filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        var stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();
        return stringValue.slice(0, filterValue.length) === filterValue;
    };
    FilterUtils.contains = function (value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        var filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        var stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue) !== -1;
    };
    FilterUtils.endsWith = function (value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        var filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        var stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    };
    FilterUtils.equals = function (value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLowerCase() == ObjectUtils.removeAccents(filter.toString()).toLowerCase();
    };
    FilterUtils.notEquals = function (value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }
        if (value === undefined || value === null) {
            return true;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLowerCase() != ObjectUtils.removeAccents(filter.toString()).toLowerCase();
    };
    FilterUtils.in = function (value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        for (var i = 0; i < filter.length; i++) {
            if (filter[i] === value || (value.getTime && filter[i].getTime && value.getTime() === filter[i].getTime())) {
                return true;
            }
        }
        return false;
    };
    FilterUtils.lt = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < filter;
    };
    FilterUtils.lte = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= filter;
    };
    FilterUtils.gt = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > filter;
    };
    FilterUtils.gte = function (value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= filter;
    };
    return FilterUtils;
}());

var lastId = 0;
function UniqueComponentId() {
    var prefix = 'pr_id_';
    lastId++;
    return "" + prefix + lastId;
}

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=primeng-utils.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/deposit-fund/deposit-fund.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">     \r\n          <p-card header=\"Deposit Fund\" styleClass=\"ui-card-shadow\">\r\n\t\t    <div>\r\n\t\t    \t\r\n\t\t  <form class=\"custom\">\r\n\t\t  \t  <label for=\"bank\">Bank</label><br>\r\n\t\t\t  <p-dropdown [options]=\"deposit.bank\" id=\"bank\" [(ngModel)]=\"selectedBank\" placeholder=\"Select a Bank\" optionLabel=\"name\" [showClear]=\"true\" name=\"bank\"></p-dropdown>\r\n\r\n\t\t\t  <label for=\"currency\">Currency</label>\r\n\t\t\t  <input type=\"text\" id=\"currency\" name=\"currency\" disabled=\"true\" [(ngModel)]=\"deposit.currency\" placeholder=\"Currency\" required />\r\n\r\n\t\t\t  <label for=\"amount\">Amount</label>\r\n\t\t\t  <input type=\"text\" id=\"amount\" name=\"amount\" [(ngModel)]=\"deposit.amount\" placeholder=\"0.00\" required />\r\n\t\t\t  <button type=\"submit\" class=\"primary\" value=\"Withdraw\" >Withdraw</button>\r\n\r\n\t\t\t</form>\r\n\r\n\t\t    </div>\r\n\t\t   </p-card>\r\n        </div>\r\n          <div class=\"col-md-7\">\r\n          <p-card subheader=\"Transactions\" styleClass=\"ui-card-shadow\">\r\n          \t<p class=\"loading\" *ngIf=\"isLoading\">Loading...</p>\r\n            <p class=\"loading\" *ngIf=\"!transation && !isLoading\">\r\n            \t<img src=\"../../assets/images/no-data-found.gif\" class=\"norecord\">\r\n            \t<small>No transations</small>\r\n            </p>\r\n         </p-card>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/cash-account/cash-account.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/cash-account/cash-account.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <p>No Cash account!</p>\r\n            <small>Click on open account button to open cash account.</small>\r\n                <br>\r\n             <button class=\"primary\">Open Account</button>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/margin-account/margin-account.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/margin-account/margin-account.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <p>No Margin account!</p>\r\n            <small>Click on open account button to open margin account.</small>\r\n                <br>\r\n             <button class=\"primary\" routerLink=\"../account-opening\">Open Account</button>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/withdraw-list/withdraw-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/withdraw-list/withdraw-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n        <div class=\"col-md-12 text-center\">\r\n           <img src=\"../../assets/images/norecord.gif\" class=\"norecord\">\r\n       \r\n           <p>No Margin account!</p>\r\n            <small>Click on open account button to open margin account.</small>\r\n                <br>\r\n             <button class=\"primary\" routerLink=\"../account-opening\">Open Account</button>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"gradient\">\r\n    <div class=\"area container\" style=\"z-index: unset;\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">     \r\n          <p-card header=\"Withdraw Fund\" styleClass=\"ui-card-shadow\">\r\n\t\t    <div>\r\n\t\t    \t\r\n\t\t  <form class=\"custom\">\r\n\t\t\t  <label for=\"currency\">Currency</label>\r\n\t\t\t  <input type=\"text\" id=\"currency\" name=\"currency\" disabled=\"true\" [(ngModel)]=\"withdraw.currency\" placeholder=\"Currency\" required />\r\n\r\n\t\t\t  <label for=\"amount\">Amount</label>\r\n\t\t\t  <input type=\"text\" id=\"amount\" name=\"amount\" [(ngModel)]=\"withdraw.amount\" placeholder=\"0.00\" required />\r\n\t\t\t  <button type=\"submit\" class=\"primary\" value=\"Withdraw\" >Withdraw</button>\r\n\r\n\t\t\t</form>\r\n\r\n\t\t    </div>\r\n\t\t   </p-card>\r\n        </div>\r\n          <div class=\"col-md-7\">\r\n          <p-card subheader=\"Transactions\" styleClass=\"ui-card-shadow\">\r\n          \t<p class=\"loading\" *ngIf=\"isLoading\">Loading...</p>\r\n            <p class=\"loading\" *ngIf=\"!transation && !isLoading\">\r\n            \t<img src=\"../../assets/images/no-data-found.gif\" class=\"norecord\">\r\n            \t<small>No transations</small>\r\n            </p>\r\n         </p-card>\r\n        </div>\r\n       </div>\r\n    </div>\r\n</div>");

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






var DepositFundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DepositFundComponent, _super);
    function DepositFundComponent(route, router, stockAccountSvc) {
        var _this = _super.call(this, route, router) || this;
        _this.stockAccountSvc = stockAccountSvc;
        _this.deposit = new _modal__WEBPACK_IMPORTED_MODULE_3__["Deposit"]();
        _this.transaction = [];
        _this.isLoading = true;
        return _this;
    }
    DepositFundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.stockAccountSvc.transactionList("deposit").subscribe(function (res) {
            _this.transaction = res['list'];
            _this.isLoading = false;
        });
    };
    DepositFundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_5__["StockAccountService"] }
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
        this.bank = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
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
/* harmony import */ var _withdraw_fund_withdraw_fund_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withdraw-fund/withdraw-fund.component */ "./src/profile/withdraw-fund/withdraw-fund.component.ts");
/* harmony import */ var _deposit_fund_deposit_fund_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deposit-fund/deposit-fund.component */ "./src/profile/deposit-fund/deposit-fund.component.ts");
/* harmony import */ var _stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stock-history/stock-history.component */ "./src/profile/stock-history/stock-history.component.ts");
/* harmony import */ var _transfer_to_stock_transfer_to_stock_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transfer-to-stock/transfer-to-stock.component */ "./src/profile/transfer-to-stock/transfer-to-stock.component.ts");
/* harmony import */ var _shared_margin_account_margin_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/margin-account/margin-account.component */ "./src/profile/shared/margin-account/margin-account.component.ts");
/* harmony import */ var _shared_cash_account_cash_account_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/cash-account/cash-account.component */ "./src/profile/shared/cash-account/cash-account.component.ts");
/* harmony import */ var _shared_withdraw_list_withdraw_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/withdraw-list/withdraw-list.component */ "./src/profile/shared/withdraw-list/withdraw-list.component.ts");
/* harmony import */ var _settings_password_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./settings/password/password.component */ "./src/profile/settings/password/password.component.ts");
/* harmony import */ var _settings_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings/profile-info/profile-info.component */ "./src/profile/settings/profile-info/profile-info.component.ts");
/* harmony import */ var _settings_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/personal-info/personal-info.component */ "./src/profile/settings/personal-info/personal-info.component.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile.service */ "./src/profile/profile.service.ts");
/* harmony import */ var _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../shared/services/stock-account.service */ "./src/shared/services/stock-account.service.ts");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/fesm5/primeng-card.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm5/primeng-dropdown.js");




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
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"],
                primeng_card__WEBPACK_IMPORTED_MODULE_22__["CardModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_23__["DropdownModule"]
            ],
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                _profile_header_desktop_component__WEBPACK_IMPORTED_MODULE_7__["ProfileHeaderDesktopComponent"],
                _profile_header_mobile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileHeaderMobileComponent"],
                _overview_profile_overview_component__WEBPACK_IMPORTED_MODULE_9__["ProfileOverviewComponent"],
                _shared_margin_account_margin_account_component__WEBPACK_IMPORTED_MODULE_14__["MarginAccountComponent"],
                _shared_cash_account_cash_account_component__WEBPACK_IMPORTED_MODULE_15__["CashAccountComponent"],
                _shared_withdraw_list_withdraw_list_component__WEBPACK_IMPORTED_MODULE_16__["WithdrawListComponent"],
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
            providers: [
                _profile_service__WEBPACK_IMPORTED_MODULE_20__["ProfileService"],
                _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_21__["StockAccountService"]
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
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cash-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/cash-account/cash-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], CashAccountComponent);
    return CashAccountComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



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
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./margin-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/margin-account/margin-account.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], MarginAccountComponent);
    return MarginAccountComponent;
}(_BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__["BaseProfileComponent"]));



/***/ }),

/***/ "./src/profile/shared/withdraw-list/withdraw-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/profile/shared/withdraw-list/withdraw-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: WithdrawListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawListComponent", function() { return WithdrawListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _BaseProfileComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../BaseProfileComponent */ "./src/profile/BaseProfileComponent.ts");




var WithdrawListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithdrawListComponent, _super);
    function WithdrawListComponent(route, router) {
        return _super.call(this, route, router) || this;
    }
    WithdrawListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    WithdrawListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'withdraw-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./withdraw-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/profile/shared/withdraw-list/withdraw-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../styles/common.less */ "./src/profile/styles/common.less")).default]
        })
    ], WithdrawListComponent);
    return WithdrawListComponent;
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
/* harmony import */ var _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/stock-account.service */ "./src/shared/services/stock-account.service.ts");






var WithdrawFundComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WithdrawFundComponent, _super);
    function WithdrawFundComponent(route, router, stockAccountSvc) {
        var _this = _super.call(this, route, router) || this;
        _this.stockAccountSvc = stockAccountSvc;
        _this.withdraw = new _modal__WEBPACK_IMPORTED_MODULE_3__["Withdraw"]();
        _this.transaction = [];
        _this.isLoading = true;
        return _this;
    }
    WithdrawFundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.stockAccountSvc.transactionList("withdraw").subscribe(function (res) {
            _this.transaction = res['list'];
            _this.isLoading = false;
        });
    };
    WithdrawFundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_services_stock_account_service__WEBPACK_IMPORTED_MODULE_5__["StockAccountService"] }
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



/***/ }),

/***/ "./src/shared/services/stock-account.service.ts":
/*!******************************************************!*\
  !*** ./src/shared/services/stock-account.service.ts ***!
  \******************************************************/
/*! exports provided: StockAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockAccountService", function() { return StockAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StockAccountService = /** @class */ (function () {
    function StockAccountService(http) {
        this.http = http;
    }
    StockAccountService.prototype.transactionList = function (accountType) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoints.transactions.transactionList(accountType);
        return this.http
            .get(url)
            .map(function (r) { return r; });
    };
    StockAccountService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    StockAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], StockAccountService);
    return StockAccountService;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map