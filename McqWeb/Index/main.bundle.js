webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__papers_papers_component__ = __webpack_require__("../../../../../src/app/papers/papers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paper_types_paper_types_component__ = __webpack_require__("../../../../../src/app/paper-types/paper-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__queries_queries_component__ = __webpack_require__("../../../../../src/app/queries/queries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__query_types_query_types_component__ = __webpack_require__("../../../../../src/app/query-types/query-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_paper_manage_paper_component__ = __webpack_require__("../../../../../src/app/manage-paper/manage-paper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/papers', pathMatch: 'full' },
    { path: 'papers', component: __WEBPACK_IMPORTED_MODULE_2__papers_papers_component__["a" /* PapersComponent */] },
    { path: 'paperTypes', component: __WEBPACK_IMPORTED_MODULE_3__paper_types_paper_types_component__["a" /* PaperTypesComponent */] },
    { path: 'queries', component: __WEBPACK_IMPORTED_MODULE_4__queries_queries_component__["a" /* QueriesComponent */] },
    { path: 'queryTypes', component: __WEBPACK_IMPORTED_MODULE_5__query_types_query_types_component__["a" /* QueryTypesComponent */] },
    { path: 'managePaper', component: __WEBPACK_IMPORTED_MODULE_6__manage_paper_manage_paper_component__["a" /* ManagePaperComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!**/\n    /*HEADER STYLE*/\n/**!*/\n/*.header {*/\n  /*display: flex;*/\n  /*align-items: center;*/\n  /*justify-content: space-between;*/\n  /*padding: 15px 10px;*/\n  /*background: #fff;*/\n  /*border: none;*/\n  /*border-radius: 0;*/\n  /*margin-bottom: 40px;*/\n  /*box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);*/\n/*}*/\n\n/*.header-control {*/\n  /*margin-right: 15px;*/\n  /*text-decoration: none;*/\n  /*color: #7386D5;*/\n  /*cursor: pointer;*/\n/*}*/\n\n/*\n    SIDE BAR STYLE\n*/\napp-side-bar {\n  background-color: #7386D5;\n}\n\n/* ---------------------------------------------------\n    WRAPPER STYLE\n----------------------------------------------------- */\n.wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n.page-content {\n  padding: 20px;\n  min-height: 100vh;\n  transition: all 0.3s;\n  width: 100%;\n  background-color: #f5f5f5;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedIn; then mainTemplate else blankTemplate\"></div>\n\n<ng-template #mainTemplate>\n  <div class=\"wrapper\">\n    <app-side-bar></app-side-bar>\n    <div class=\"page-content\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #blankTemplate>\n  <router-outlet></router-outlet>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(location) {
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loggedIn = !(location.pathname === '/login');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__papers_papers_component__ = __webpack_require__("../../../../../src/app/papers/papers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__queries_queries_component__ = __webpack_require__("../../../../../src/app/queries/queries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__paper_types_paper_types_component__ = __webpack_require__("../../../../../src/app/paper-types/paper-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__query_types_query_types_component__ = __webpack_require__("../../../../../src/app/query-types/query-types.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__paper_types_table_paper_types_table_component__ = __webpack_require__("../../../../../src/app/paper-types-table/paper-types-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__create_paper_type_modal_create_paper_type_modal_component__ = __webpack_require__("../../../../../src/app/create-paper-type-modal/create-paper-type-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_paper_type_modal_edit_paper_type_modal_component__ = __webpack_require__("../../../../../src/app/edit-paper-type-modal/edit-paper-type-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__query_types_table_query_types_table_component__ = __webpack_require__("../../../../../src/app/query-types-table/query-types-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__create_query_type_modal_create_query_type_modal_component__ = __webpack_require__("../../../../../src/app/create-query-type-modal/create-query-type-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__edit_query_type_modal_edit_query_type_modal_component__ = __webpack_require__("../../../../../src/app/edit-query-type-modal/edit-query-type-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__create_query_modal_create_query_modal_component__ = __webpack_require__("../../../../../src/app/create-query-modal/create-query-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__create_paper_modal_create_paper_modal_component__ = __webpack_require__("../../../../../src/app/create-paper-modal/create-paper-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__manage_paper_manage_paper_component__ = __webpack_require__("../../../../../src/app/manage-paper/manage-paper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__edit_paper_modal_edit_paper_modal_component__ = __webpack_require__("../../../../../src/app/edit-paper-modal/edit-paper-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__edit_query_modal_edit_query_modal_component__ = __webpack_require__("../../../../../src/app/edit-query-modal/edit-query-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__papers_table_papers_table_component__ = __webpack_require__("../../../../../src/app/papers-table/papers-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__queries_table_queries_table_component__ = __webpack_require__("../../../../../src/app/queries-table/queries-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_query_type_service__ = __webpack_require__("../../../../../src/app/services/query-type-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__papers_papers_component__["a" /* PapersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__queries_queries_component__["a" /* QueriesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__paper_types_paper_types_component__["a" /* PaperTypesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__query_types_query_types_component__["a" /* QueryTypesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__paper_types_table_paper_types_table_component__["a" /* PaperTypesTableComponent */],
                __WEBPACK_IMPORTED_MODULE_15__create_paper_type_modal_create_paper_type_modal_component__["a" /* CreatePaperTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__edit_paper_type_modal_edit_paper_type_modal_component__["a" /* EditPaperTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_17__query_types_table_query_types_table_component__["a" /* QueryTypesTableComponent */],
                __WEBPACK_IMPORTED_MODULE_18__create_query_type_modal_create_query_type_modal_component__["a" /* CreateQueryTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__edit_query_type_modal_edit_query_type_modal_component__["a" /* EditQueryTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__create_query_modal_create_query_modal_component__["a" /* CreateQueryModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__create_paper_modal_create_paper_modal_component__["a" /* CreatePaperModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__manage_paper_manage_paper_component__["a" /* ManagePaperComponent */],
                __WEBPACK_IMPORTED_MODULE_23__edit_paper_modal_edit_paper_modal_component__["a" /* EditPaperModalComponent */],
                __WEBPACK_IMPORTED_MODULE_24__edit_query_modal_edit_query_modal_component__["a" /* EditQueryModalComponent */],
                __WEBPACK_IMPORTED_MODULE_25__papers_table_papers_table_component__["a" /* PapersTableComponent */],
                __WEBPACK_IMPORTED_MODULE_26__queries_table_queries_table_component__["a" /* QueriesTableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["b" /* ModalModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_27__services_query_type_service__["a" /* QueryTypeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__create_paper_type_modal_create_paper_type_modal_component__["a" /* CreatePaperTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_16__edit_paper_type_modal_edit_paper_type_modal_component__["a" /* EditPaperTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__create_query_type_modal_create_query_type_modal_component__["a" /* CreateQueryTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_19__edit_query_type_modal_edit_query_type_modal_component__["a" /* EditQueryTypeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__create_query_modal_create_query_modal_component__["a" /* CreateQueryModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__create_paper_modal_create_paper_modal_component__["a" /* CreatePaperModalComponent */],
                __WEBPACK_IMPORTED_MODULE_23__edit_paper_modal_edit_paper_modal_component__["a" /* EditPaperModalComponent */],
                __WEBPACK_IMPORTED_MODULE_24__edit_query_modal_edit_query_modal_component__["a" /* EditQueryModalComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/create-paper-modal/create-paper-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-paper-modal/create-paper-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Create Test Paper</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <label for=\"year\">Year</label>\n        <select id=\"year\" class=\"form-control\"\n                formControlName=\"year\" [class.error]=\"isFieldValid('year')\">\n          <option></option>\n          <option *ngFor=\"let year of years\">{{year}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"category\">Choose Category</label>\n        <select id=\"category\" class=\"form-control\"\n                formControlName=\"category\" [class.error]=\"isFieldValid('category')\">\n          <option></option>\n          <option *ngFor=\"let category of categories\">{{category}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input class=\"form-control\" id=\"title\" placeholder=\"Title...\"\n               formControlName=\"title\" [class.error]=\"isFieldValid('title')\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Description</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Description...\"\n                  formControlName=\"description\" [class.error]=\"isFieldValid('description')\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <small class=\"form-text text-muted\">On submit you will be redirected to questios creation wizard</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/create-paper-modal/create-paper-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePaperModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatePaperModalComponent = (function () {
    function CreatePaperModalComponent(bsModalRef, formBuilder) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
    }
    CreatePaperModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            year: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.years = [2007, 2008, 2009, 2010, 2011, 2012, 2013,
            2014, 2014, 2015, 2016, 2017, 2018];
        this.categories = ['PWD Engineer', 'KSEB Assistant Engineer', 'Computer Technician', 'Teachers Trainer',
            'Lab Assistant', 'Police Test', 'PSC Director', 'Stenographer'];
    };
    CreatePaperModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    CreatePaperModalComponent.prototype.onSubmit = function () {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    CreatePaperModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-paper-modal',
            template: __webpack_require__("../../../../../src/app/create-paper-modal/create-paper-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-paper-modal/create-paper-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreatePaperModalComponent);
    return CreatePaperModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-paper-type-modal/create-paper-type-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-paper-type-modal/create-paper-type-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Create new Test Category</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\"\n             formControlName=\"name\" [class.error]=\"isFieldValid('name')\">\n      <small id=\"nameHelp\" class=\"form-text text-muted\">Use minimum 10 letters.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"shortName\">Short Name</label>\n      <input class=\"form-control\" id=\"shortName\" aria-describedby=\"shortNameHelp\" placeholder=\"Enter short name\"\n             formControlName=\"shortName\" [class.error]=\"isFieldValid('shortName')\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">This name will be displayed everywhere. Minimum 3 letters.</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-paper-type-modal/create-paper-type-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePaperTypeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatePaperTypeModalComponent = (function () {
    function CreatePaperTypeModalComponent(bsModalRef, formBuilder) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
    }
    CreatePaperTypeModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(10)
                ])],
            shortName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)
                ])]
        });
    };
    CreatePaperTypeModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    CreatePaperTypeModalComponent.prototype.onSubmit = function () {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    CreatePaperTypeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-paper-type-modal',
            template: __webpack_require__("../../../../../src/app/create-paper-type-modal/create-paper-type-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-paper-type-modal/create-paper-type-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreatePaperTypeModalComponent);
    return CreatePaperTypeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-query-modal/create-query-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-query-modal/create-query-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Create Question</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <label for=\"category\">Choose Category</label>\n        <select id=\"category\" class=\"form-control\"\n                formControlName=\"category\" [class.error]=\"isFieldValid('category')\">\n          <option></option>\n          <option *ngFor=\"let option of categories\">{{option}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"question\">Question</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"question\" placeholder=\"Question...\"\n                  formControlName=\"question\" [class.error]=\"isFieldValid('question')\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"answer\">Answer</label>\n      <input class=\"form-control\" id=\"answer\" placeholder=\"Answer...\"\n             formControlName=\"answer\" [class.error]=\"isFieldValid('answer')\">\n    </div>\n    <label>Other Options</label>\n    <div class=\"form-group\">\n      <input class=\"form-control\" formControlName=\"option1\" [class.error]=\"isFieldValid('option1')\"\n             placeholder=\"Do not leave empty\">\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" formControlName=\"option2\">\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" formControlName=\"option3\">\n    </div>\n    <div class=\"form-group\">\n      <small class=\"form-text text-muted\">At least one extra option should be there</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Done</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Create Another</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/create-query-modal/create-query-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQueryModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateQueryModalComponent = (function () {
    function CreateQueryModalComponent(bsModalRef, formBuilder) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
    }
    CreateQueryModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            category: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            question: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            answer: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            option1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            option2: [''],
            option3: ['']
        });
        this.categories = ['General Knowledge', 'pharmaceutical', 'Engineering Physics',
            'Computer Science', 'Astrophysics', 'Theoretical Physics', 'Microbiology'];
    };
    CreateQueryModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    CreateQueryModalComponent.prototype.onSubmit = function () {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    CreateQueryModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-query-modal',
            template: __webpack_require__("../../../../../src/app/create-query-modal/create-query-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-query-modal/create-query-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateQueryModalComponent);
    return CreateQueryModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-query-type-modal/create-query-type-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-query-type-modal/create-query-type-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Create new Question Category</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\"\n             formControlName=\"name\" [class.error]=\"isFieldValid('name')\">\n      <small id=\"nameHelp\" class=\"form-text text-muted\">Use minimum 3 letters.</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-query-type-modal/create-query-type-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQueryTypeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_query_type_service__ = __webpack_require__("../../../../../src/app/services/query-type-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateQueryTypeModalComponent = (function () {
    function CreateQueryTypeModalComponent(bsModalRef, formBuilder, queryTypeService) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
        this.queryTypeService = queryTypeService;
    }
    CreateQueryTypeModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3)
                ])]
        });
    };
    CreateQueryTypeModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    CreateQueryTypeModalComponent.prototype.onSubmit = function () {
        var self = this;
        self.formSubmitAttempt = true;
        if (self.form.valid) {
            var category = self.form.value;
            console.log('reached method');
            self.queryTypeService.create(category.name).subscribe(function () {
                self.bsModalRef.hide();
            });
        }
    };
    CreateQueryTypeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-query-type-modal',
            template: __webpack_require__("../../../../../src/app/create-query-type-modal/create-query-type-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/create-query-type-modal/create-query-type-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_query_type_service__["a" /* QueryTypeService */]])
    ], CreateQueryTypeModalComponent);
    return CreateQueryTypeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-paper-modal/edit-paper-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-paper-modal/edit-paper-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edit Exams Metadata</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <label for=\"year\">Choose Year</label>\n        <select id=\"year\" class=\"form-control\"\n                formControlName=\"year\" [class.error]=\"isFieldValid('year')\">\n          <option *ngFor=\"let year of years\">{{year}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"category\">Choose Category</label>\n        <select id=\"category\" class=\"form-control\"\n                formControlName=\"category\" [class.error]=\"isFieldValid('category')\">\n          <option *ngFor=\"let category of categories\">{{category}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input class=\"form-control\" id=\"title\" placeholder=\"Title...\"\n               formControlName=\"title\" [class.error]=\"isFieldValid('title')\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"description\">Question</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"description\" placeholder=\"Description...\"\n                  formControlName=\"description\" [class.error]=\"isFieldValid('description')\"></textarea>\n      </div>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/edit-paper-modal/edit-paper-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPaperModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPaperModalComponent = (function () {
    function EditPaperModalComponent(bsModalRef, formBuilder) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
    }
    EditPaperModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            year: [''],
            category: [''],
            title: [''],
            description: ['']
        });
        this.years = [2007, 2008, 2009, 2010, 2011, 2012, 2013,
            2014, 2014, 2015, 2016, 2017, 2018];
        this.categories = ['PWD Engineer', 'KSEB Assistant Engineer', 'Computer Technician', 'Teachers Trainer',
            'Lab Assistant', 'Police Test', 'PSC Director', 'Stenographer'];
    };
    EditPaperModalComponent.prototype.updateFormValues = function (metadata) {
        this.form = this.formBuilder.group({
            year: [metadata.year, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            category: [metadata.category, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            title: [metadata.title, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: [metadata.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    EditPaperModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.form.get(field).invalid && this.formSubmitAttempt);
    };
    EditPaperModalComponent.prototype.onSubmit = function () {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    EditPaperModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-paper-modal',
            template: __webpack_require__("../../../../../src/app/edit-paper-modal/edit-paper-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-paper-modal/edit-paper-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditPaperModalComponent);
    return EditPaperModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-paper-type-modal/edit-paper-type-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-paper-type-modal/edit-paper-type-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edit Test Category</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\"\n             formControlName=\"name\" [class.error]=\"isFieldValid('name')\">\n      <small id=\"nameHelp\" class=\"form-text text-muted\">Use minimum 10 letters.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"shortName\">Short Name</label>\n      <input class=\"form-control\" id=\"shortName\" aria-describedby=\"shortNameHelp\" placeholder=\"Enter short name\"\n             formControlName=\"shortName\" [class.error]=\"isFieldValid('shortName')\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">This name will be displayed everywhere. Minimum 3 letters.</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-paper-type-modal/edit-paper-type-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPaperTypeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPaperTypeModalComponent = (function () {
    function EditPaperTypeModalComponent(bsModalRef, formBuilder) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
    }
    EditPaperTypeModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: [''],
            shortName: ['']
        });
    };
    EditPaperTypeModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    EditPaperTypeModalComponent.prototype.updateFormValues = function (paperType) {
        this.form = this.formBuilder.group({
            id: [paperType.id],
            name: [paperType.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(10)
                ])],
            shortName: [paperType.shortName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)
                ])]
        });
    };
    EditPaperTypeModalComponent.prototype.onSubmit = function () {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    EditPaperTypeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-paper-type-modal',
            template: __webpack_require__("../../../../../src/app/edit-paper-type-modal/edit-paper-type-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-paper-type-modal/edit-paper-type-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], EditPaperTypeModalComponent);
    return EditPaperTypeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-query-modal/edit-query-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-query-modal/edit-query-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edit Question</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <label for=\"category\">Choose Category</label>\n        <select id=\"category\" class=\"form-control\"\n                formControlName=\"category\" [class.error]=\"isFieldValid('category')\">\n          <option *ngFor=\"let option of categories\">{{option}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"question\">Question</label>\n        <textarea type=\"text\" class=\"form-control\" id=\"question\" placeholder=\"Question...\"\n                  formControlName=\"question\" [class.error]=\"isFieldValid('question')\"></textarea>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"answer\">Answer</label>\n      <input class=\"form-control\" id=\"answer\" placeholder=\"Answer...\"\n             formControlName=\"answer\" [class.error]=\"isFieldValid('answer')\">\n    </div>\n    <label>Other Options</label>\n    <div class=\"form-group\">\n      <input class=\"form-control\" formControlName=\"option1\" [class.error]=\"isFieldValid('option1')\"\n             placeholder=\"Do not leave empty\">\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" formControlName=\"option2\">\n    </div>\n    <div class=\"form-group\">\n      <input class=\"form-control\" formControlName=\"option3\">\n    </div>\n    <div class=\"form-group\">\n      <small class=\"form-text text-muted\">At least one extra option should be there</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/edit-query-modal/edit-query-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditQueryModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditQueryModalComponent = (function () {
    function EditQueryModalComponent(bsModalRef, formBuilder) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
    }
    EditQueryModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            category: [''],
            question: [''],
            answer: [''],
            option1: [''],
            option2: [''],
            option3: ['']
        });
        this.categories = ['General Knowledge', 'pharmaceutical', 'Engineering Physics',
            'Computer Science', 'Astrophysics', 'Theoretical Physics', 'Microbiology'];
    };
    EditQueryModalComponent.prototype.updateFormValues = function (query) {
        this.form = this.formBuilder.group({
            category: [query.category, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            question: [query.question, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            answer: [query.answer, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            option1: [query.option1, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            option2: [query.option2],
            option3: [query.option3]
        });
    };
    EditQueryModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    EditQueryModalComponent.prototype.onSubmit = function () {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    EditQueryModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-query-modal',
            template: __webpack_require__("../../../../../src/app/edit-query-modal/edit-query-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-query-modal/edit-query-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], EditQueryModalComponent);
    return EditQueryModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/edit-query-type-modal/edit-query-type-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-query-type-modal/edit-query-type-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edit Question Category</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span>&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"form\" (submit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\"\n             formControlName=\"name\" [class.error]=\"isFieldValid('name')\">\n      <small id=\"nameHelp\" class=\"form-text text-muted\">Use minimum 3 letters.</small>\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n  <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-query-type-modal/edit-query-type-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditQueryTypeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("../../../../ngx-bootstrap/modal/bs-modal-ref.service.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditQueryTypeModalComponent = (function () {
    function EditQueryTypeModalComponent(bsModalRef, formBuilder) {
        this.bsModalRef = bsModalRef;
        this.formBuilder = formBuilder;
    }
    EditQueryTypeModalComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ['']
        });
    };
    EditQueryTypeModalComponent.prototype.isFieldValid = function (field) {
        return (!this.form.get(field).valid && this.form.get(field).touched) ||
            (this.form.get(field).untouched && this.formSubmitAttempt);
    };
    EditQueryTypeModalComponent.prototype.updateFormValues = function (paperType) {
        this.form = this.formBuilder.group({
            id: [paperType.id],
            name: [paperType.name, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)
                ])]
        });
    };
    EditQueryTypeModalComponent.prototype.onSubmit = function () {
        this.formSubmitAttempt = true;
        if (this.form.valid) {
            console.log(this.form.value);
        }
    };
    EditQueryTypeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-query-type-modal',
            template: __webpack_require__("../../../../../src/app/edit-query-type-modal/edit-query-type-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-query-type-modal/edit-query-type-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], EditQueryTypeModalComponent);
    return EditQueryTypeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-signin\n{\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading, .form-signin .checkbox\n{\n  margin-bottom: 10px;\n}\n.form-signin .checkbox\n{\n  font-weight: normal;\n}\n.form-signin .form-control\n{\n  position: relative;\n  font-size: 16px;\n  height: auto;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.form-signin .form-control:focus\n{\n  z-index: 2;\n}\n.form-signin input[type=\"text\"]\n{\n  margin-bottom: -1px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.form-signin input[type=\"password\"]\n{\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.account-wall\n{\n  margin-top: 20px;\n  padding: 40px 0px 20px 0px;\n  background-color: #f7f7f7;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n}\n.login-title\n{\n  color: #555;\n  font-size: 18px;\n  font-weight: 400;\n  display: block;\n}\n.profile-img\n{\n  width: 96px;\n  height: 96px;\n  margin: 0 auto 10px;\n  display: block;\n  border-radius: 50%;\n}\n\n.container {\n  min-height: 100%;\n}\n\n.container {\n  display: -ms-grid;\n  display: grid;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6 col-md-4 col-md-offset-4\">\n      <h1 class=\"text-center login-title\">Sign in to continue to McqAlpha</h1>\n      <div class=\"account-wall\">\n        <img class=\"profile-img\" src=\"https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120\"\n             alt=\"\">\n        <form class=\"form-signin\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Email\" required autofocus>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n          <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"onsubmit()\">\n            Sign in</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(location) {
        this.location = location;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onsubmit = function () {
        location.pathname = '/papers';
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-paper/manage-paper.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-paper/manage-paper.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>{{ metadata.title + ' ' +  metadata.year }}</h2>\n  <a class=\"header-control\" (click)=\"openEditModal()\">\n    <i class=\"fa fa-pencil\"></i> Edit Metadata\n  </a>\n</div>\n\n<div class=\"header\">\n  <div>Total 10 questions</div>\n  <a class=\"header-control\" (click)=\"openCreateQueryModal()\">\n    <i class=\"fa fa-plus\"></i> Add Question\n  </a>\n</div>\n\n\n<ngx-datatable\n  class=\"material striped\"\n  [rows]=\"questions\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\">\n  <ngx-datatable-column name=\"Index\" [width]=\"20\">\n    <ng-template let-rowIndex=\"rowIndex\" let-row=\"row\" ngx-datatable-cell-template>\n      <span>{{rowIndex + 1}}</span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Question\" [width]=\"500\">\n    <ng-template let-column=\"column\" ngx-datatable-header-template>\n      Question\n    </ng-template>\n    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n      <span>{{ value }}</span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Options\" [width]=\"500\">\n    <ng-template let-column=\"column\" ngx-datatable-header-template>\n      <span>Options</span>\n    </ng-template>\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n      <div *ngFor=\"let option of value; let i = index\">\n        <span *ngIf=\"option === row.answer;then answer else other_option\"></span>\n        <ng-template #answer><strong>{{ i + 1 }} - {{ option }}</strong></ng-template>\n        <ng-template #other_option>{{ i + 1 }} - {{ option }}</ng-template>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column [sortable]=\"false\" [width]=\"50\">\n    <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\n      Actions\n    </ng-template>\n    <ng-template ngx-datatable-cell-template let-row=\"row\">\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"openEditQuestionModel(row)\"><i class=\"fa fa-pencil\"></i></button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"openConfirmDeleteModal(confirm, row)\"><i class=\"fa fa-trash-o\"></i></button>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n\n<ng-template #confirm>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirmDelete()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"bsModalRef.hide()\" >No</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/manage-paper/manage-paper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePaperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_paper_modal_edit_paper_modal_component__ = __webpack_require__("../../../../../src/app/edit-paper-modal/edit-paper-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_query_modal_edit_query_modal_component__ = __webpack_require__("../../../../../src/app/edit-query-modal/edit-query-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_query_modal_create_query_modal_component__ = __webpack_require__("../../../../../src/app/create-query-modal/create-query-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagePaperComponent = (function () {
    function ManagePaperComponent(modalService) {
        this.modalService = modalService;
        this.rows = [];
        this.questions = [];
    }
    ManagePaperComponent.prototype.ngOnInit = function () {
        this.metadata = {
            year: 2015,
            category: 'Computer Technician',
            title: 'Technical Assistant',
            description: '90 minutes test containing 8 questions'
        };
        this.questions = [{
                'question': 'What two structures is JSON built on?',
                'options': [
                    'A collection of name/value pairs, and an ordered list of values, or array.',
                    'A collection of object/item pairs, and an ordered list of pairs, or array.',
                    'A collection of name/value objects, and an ordered list of objects, or array.',
                    'A collection of native-value pairs, and an ordered list of arrays, or values.'
                ],
                'answer': 'A collection of name/value pairs, and an ordered list of values, or array.',
                'category': 'Computer Science'
            },
            {
                'question': 'Which of the following is not a valid way to parse JSON string?',
                'options': [
                    'JSON.eval()',
                    'JSON.parse()',
                    'jQuery.parseJSON()',
                    'eval()'
                ],
                'answer': 'JSON.eval()',
                'category': 'Computer Science'
            },
            {
                'question': 'What does JSONP stand for?',
                'options': [
                    'JSON Procedures',
                    'JSON Parsing',
                    'JSON with padding',
                    'JSON Programming'
                ],
                'answer': 'JSON with padding',
                'category': 'Computer Science'
            },
            {
                'question': 'Which of the following code will not throw an error?',
                'options': [
                    'JSON.parse(”);',
                    'JSON.parse(null);',
                    'JSON.parse();',
                    'JSON.parse({});'
                ],
                'answer': 'JSON.parse(null);',
                'category': 'Computer Science'
            },
            {
                'question': 'How does JSON handle numeric values that cannot be represented by a sequence of digits (like Infiniti and Nan)?',
                'options': [
                    'They are stored as strings and then converted when parsed.',
                    'They are not permitted.',
                    'They are stored fine but it’s the parsers job to convert them to numeric values.'
                ],
                'answer': 'They are not permitted.',
                'category': 'Computer Science'
            },
            {
                'question': 'Which of the following number formats are not used in JSON?',
                'options': [
                    'Octal and gate',
                    'Octal and binary',
                    'Binary and hexadecimal',
                    'Octal and hexadecimal'
                ],
                'answer': 'Octal and hexadecimal',
                'category': 'Computer Science'
            },
            {
                'question': 'What is used by the JSONObject and JSONArray constructors to parse JSON source strings?',
                'options': [
                    'JSONTokener',
                    'JSONParser',
                    'JParser',
                    'ParserJ'
                ],
                'answer': 'JSONTokener',
                'category': 'Computer Science'
            },
            {
                'question': 'Which statement about the space parameter in JSON.stringify() is false?',
                'options': [
                    'It controls spacing in the resulting JSON string',
                    'All three statements are false',
                    'It removes whitespace',
                    'It is an optional parameter'
                ],
                'answer': 'It is an optional parameter',
                'category': 'Computer Science'
            },
            {
                'question': 'True of False? The external form of a JSON object always begins and ends with {}',
                'options': [
                    'True',
                    'False'
                ],
                'answer': 'True',
                'category': 'Computer Science'
            },
            {
                'question': 'True of False. The order of JSON objects is always preserved.',
                'options': [
                    'True',
                    'False'
                ],
                'answer': 'True',
                'category': 'Computer Science'
            }];
    };
    ManagePaperComponent.prototype.openEditModal = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__edit_paper_modal_edit_paper_modal_component__["a" /* EditPaperModalComponent */]);
        this.bsModalRef.content.updateFormValues(this.metadata);
    };
    ManagePaperComponent.prototype.openEditQuestionModel = function (query) {
        var options = query.options.filter(function (option) { return option !== query.answer; });
        var queryToEdit = {
            category: query.category,
            question: query.question,
            answer: query.answer,
            option1: options[0],
            option2: options[1],
            option3: options[2],
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_3__edit_query_modal_edit_query_modal_component__["a" /* EditQueryModalComponent */]);
        this.bsModalRef.content.updateFormValues(queryToEdit);
    };
    ManagePaperComponent.prototype.openCreateQueryModal = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_4__create_query_modal_create_query_modal_component__["a" /* CreateQueryModalComponent */]);
    };
    ManagePaperComponent.prototype.openConfirmDeleteModal = function (template, item) {
        this.selectedQuestion = item;
        this.bsModalRef = this.modalService.show(template);
    };
    ManagePaperComponent.prototype.confirmDelete = function () {
        this.questions.splice(this.questions.indexOf(this.selectedQuestion), 1);
        this.bsModalRef.hide();
    };
    ManagePaperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage-paper',
            template: __webpack_require__("../../../../../src/app/manage-paper/manage-paper.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-paper/manage-paper.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], ManagePaperComponent);
    return ManagePaperComponent;
}());



/***/ }),

/***/ "../../../../../src/app/paper-types-table/paper-types-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paper-types-table/paper-types-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ngx-datatable\n    class=\"material\"\n    [rows]=\"rows\"\n    [columnMode]=\"'force'\"\n    [headerHeight]=\"50\"\n    [footerHeight]=\"50\"\n    [rowHeight]=\"'auto'\">\n    <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Short Name\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Associated Tests\"></ngx-datatable-column>\n    <ngx-datatable-column [sortable]=\"false\" [width]=\"10\">\n      <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\n        Actions\n      </ng-template>\n      <ng-template ngx-datatable-cell-template let-row=\"row\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"openEditModal(row)\"><i class=\"fa fa-pencil\"></i></button>\n          <button type=\"button\" class=\"btn btn-default\"\n                  (click)=\"openConfirmDeleteModal(confirm, row)\"\n                  [disabled]=\"row.associatedTests > 0\"\n                  [title]=\"row.associatedTests > 0 ? 'Cannot be deleted as there are associations' : ''\">\n            <i class=\"fa fa-trash-o\"></i>\n          </button>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div>\n\n<ng-template #confirm>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirmDelete()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"bsModalRef.hide()\" >No</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/paper-types-table/paper-types-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperTypesTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_paper_type_modal_edit_paper_type_modal_component__ = __webpack_require__("../../../../../src/app/edit-paper-type-modal/edit-paper-type-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaperTypesTableComponent = (function () {
    function PaperTypesTableComponent(modalService) {
        this.modalService = modalService;
        this.rows = [
            {
                'id': '1',
                'name': 'Lower Division Clerk',
                'shortName': 'LDC',
                'associatedTests': 32
            },
            {
                'id': '2',
                'name': 'Upper Division Clerk',
                'shortName': 'UDC',
                'associatedTests': 12
            },
            {
                'id': '3',
                'name': 'Assistant Engineer',
                'shortName': 'AE',
                'associatedTests': 0
            },
            {
                'id': '4',
                'name': 'Contract Stenographer',
                'shortName': 'Steno',
                'associatedTests': 3
            },
            {
                'id': '5',
                'name': 'Technical Assistant',
                'shortName': 'Tech Support',
                'associatedTests': 27
            }
        ];
    }
    PaperTypesTableComponent.prototype.ngOnInit = function () {
    };
    PaperTypesTableComponent.prototype.openEditModal = function (paperType) {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__edit_paper_type_modal_edit_paper_type_modal_component__["a" /* EditPaperTypeModalComponent */]);
        this.bsModalRef.content.updateFormValues(paperType);
    };
    PaperTypesTableComponent.prototype.openConfirmDeleteModal = function (template, item) {
        this.selectedItem = item;
        this.bsModalRef = this.modalService.show(template);
    };
    PaperTypesTableComponent.prototype.confirmDelete = function () {
        this.rows.splice(this.rows.indexOf(this.selectedItem), 1);
        this.bsModalRef.hide();
    };
    PaperTypesTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paper-types-table',
            template: __webpack_require__("../../../../../src/app/paper-types-table/paper-types-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/paper-types-table/paper-types-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], PaperTypesTableComponent);
    return PaperTypesTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/paper-types/paper-types.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/paper-types/paper-types.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>Manage Paper Types</h2>\n  <a class=\"header-control\" (click)=\"openCreatePaperTypeModalModal()\">\n    <i class=\"fa fa-plus\"></i> Add new category\n  </a>\n</div>\n\n<app-paper-types-table></app-paper-types-table>\n"

/***/ }),

/***/ "../../../../../src/app/paper-types/paper-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaperTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_paper_type_modal_create_paper_type_modal_component__ = __webpack_require__("../../../../../src/app/create-paper-type-modal/create-paper-type-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaperTypesComponent = (function () {
    function PaperTypesComponent(modalService) {
        this.modalService = modalService;
    }
    PaperTypesComponent.prototype.ngOnInit = function () {
    };
    PaperTypesComponent.prototype.openCreatePaperTypeModalModal = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__create_paper_type_modal_create_paper_type_modal_component__["a" /* CreatePaperTypeModalComponent */]);
    };
    PaperTypesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-paper-types',
            template: __webpack_require__("../../../../../src/app/paper-types/paper-types.component.html"),
            styles: [__webpack_require__("../../../../../src/app/paper-types/paper-types.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], PaperTypesComponent);
    return PaperTypesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/papers-table/papers-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/papers-table/papers-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material\"\n  [rows]=\"rows\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\">\n\n  <ngx-datatable-column name=\"Year\" [width]=\"20\">\n    <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\n      <span>{{value}}</span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"title\" [width]=\"500\">\n    <ng-template let-column=\"column\" ngx-datatable-header-template>\n      Title\n    </ng-template>\n    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n      <span><a routerLink=\"/managePaper\">{{ value }}</a></span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"category\" [width]=\"500\">\n    <ng-template let-column=\"column\" ngx-datatable-header-template>\n      Category\n    </ng-template>\n    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n      <span>{{ value }}</span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column [sortable]=\"false\" [width]=\"50\">\n    <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\n      Actions\n    </ng-template>\n    <ng-template ngx-datatable-cell-template let-row=\"row\">\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"openEditPaperModel(row)\"><i class=\"fa fa-pencil\"></i></button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"openConfirmDeleteModal(confirm, row)\">\n          <i class=\"fa fa-trash-o\"></i></button>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n\n<ng-template #confirm>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirmDelete()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"bsModalRef.hide()\" >No</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/papers-table/papers-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PapersTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_paper_modal_edit_paper_modal_component__ = __webpack_require__("../../../../../src/app/edit-paper-modal/edit-paper-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PapersTableComponent = (function () {
    function PapersTableComponent(modalService) {
        this.modalService = modalService;
        this.rows = [];
    }
    PapersTableComponent.prototype.ngOnInit = function () {
        this.rows = [{
                id: 1,
                title: 'Accounts Officer/ Shift Supervisor',
                year: 2011,
                category: 'Computer Technician',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ' +
                    'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 2,
                title: 'Lower Division Clerk /Workshop Attender',
                year: 2014,
                category: 'Computer Technician',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
                    ' magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 3,
                title: 'Manager /Employment Officer',
                year: 2009,
                category: 'Lab Assistant',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
                    'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 4,
                title: 'Workshop Attender/ Junior Assistant',
                year: 2011,
                category: 'Teachers Trainer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' +
                    ' dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 5,
                title: 'Architectural Assistant/Assistant Geologist/ Junior Chemist',
                year: 2014,
                category: 'Lab Assistant',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' +
                    ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
                id: 6,
                title: 'Junior Instructor',
                year: 2016,
                category: 'Teachers Trainer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
                    ' magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }];
    };
    PapersTableComponent.prototype.openEditPaperModel = function (paper) {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__edit_paper_modal_edit_paper_modal_component__["a" /* EditPaperModalComponent */]);
        this.bsModalRef.content.updateFormValues(paper);
    };
    PapersTableComponent.prototype.openConfirmDeleteModal = function (template, item) {
        this.selectedItem = item;
        this.bsModalRef = this.modalService.show(template);
    };
    PapersTableComponent.prototype.confirmDelete = function () {
        this.rows.splice(this.rows.indexOf(this.selectedItem), 1);
        this.bsModalRef.hide();
    };
    PapersTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-papers-table',
            template: __webpack_require__("../../../../../src/app/papers-table/papers-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/papers-table/papers-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], PapersTableComponent);
    return PapersTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/papers/papers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/papers/papers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>Manage Papers</h2>\n  <a class=\"header-control\" (click)=\"openCreatePaperModalModal()\">\n    <i class=\"fa fa-plus\"></i> Create new Test\n  </a>\n</div>\n\n<app-papers-table></app-papers-table>\n"

/***/ }),

/***/ "../../../../../src/app/papers/papers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PapersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_paper_modal_create_paper_modal_component__ = __webpack_require__("../../../../../src/app/create-paper-modal/create-paper-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PapersComponent = (function () {
    function PapersComponent(modalService) {
        this.modalService = modalService;
    }
    PapersComponent.prototype.ngOnInit = function () {
    };
    PapersComponent.prototype.openCreatePaperModalModal = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__create_paper_modal_create_paper_modal_component__["a" /* CreatePaperModalComponent */]);
    };
    PapersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-papers',
            template: __webpack_require__("../../../../../src/app/papers/papers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/papers/papers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], PapersComponent);
    return PapersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/queries-table/queries-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/queries-table/queries-table.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-datatable\n  class=\"material striped\"\n  [rows]=\"questions\"\n  [columnMode]=\"'force'\"\n  [headerHeight]=\"50\"\n  [footerHeight]=\"50\"\n  [rowHeight]=\"'auto'\">\n  <ngx-datatable-column name=\"Question\" [width]=\"500\">\n    <ng-template let-column=\"column\" ngx-datatable-header-template>\n      Question\n    </ng-template>\n    <ng-template let-value=\"value\" ngx-datatable-cell-template>\n      <span>{{ value }}</span>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column name=\"Options\" [width]=\"500\">\n    <ng-template let-column=\"column\" ngx-datatable-header-template>\n      <span>Options</span>\n    </ng-template>\n    <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\n      <div *ngFor=\"let option of value; let i = index\">\n        <span *ngIf=\"option === row.answer;then answer else other_option\"></span>\n        <ng-template #answer><strong>{{ i + 1 }} - {{ option }}</strong></ng-template>\n        <ng-template #other_option>{{ i + 1 }} - {{ option }}</ng-template>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n  <ngx-datatable-column [sortable]=\"false\" [width]=\"50\">\n    <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\n      Actions\n    </ng-template>\n    <ng-template ngx-datatable-cell-template let-row=\"row\">\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"openEditQuestionModel(row)\"><i class=\"fa fa-pencil\"></i></button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"openConfirmDeleteModal(confirm, row)\"><i class=\"fa fa-trash-o\"></i></button>\n      </div>\n    </ng-template>\n  </ngx-datatable-column>\n</ngx-datatable>\n\n<ng-template #confirm>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirmDelete()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"bsModalRef.hide()\" >No</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/queries-table/queries-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueriesTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_query_modal_edit_query_modal_component__ = __webpack_require__("../../../../../src/app/edit-query-modal/edit-query-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueriesTableComponent = (function () {
    function QueriesTableComponent(modalService) {
        this.modalService = modalService;
        this.questions = [];
    }
    QueriesTableComponent.prototype.ngOnInit = function () {
        this.questions = [{
                'question': 'What two structures is JSON built on?',
                'options': [
                    'A collection of name/value pairs, and an ordered list of values, or array.',
                    'A collection of object/item pairs, and an ordered list of pairs, or array.',
                    'A collection of name/value objects, and an ordered list of objects, or array.',
                    'A collection of native-value pairs, and an ordered list of arrays, or values.'
                ],
                'answer': 'A collection of name/value pairs, and an ordered list of values, or array.',
                'category': 'Computer Science'
            },
            {
                'question': 'Which of the following is not a valid way to parse JSON string?',
                'options': [
                    'JSON.eval()',
                    'JSON.parse()',
                    'jQuery.parseJSON()',
                    'eval()'
                ],
                'answer': 'JSON.eval()',
                'category': 'Computer Science'
            },
            {
                'question': 'What does JSONP stand for?',
                'options': [
                    'JSON Procedures',
                    'JSON Parsing',
                    'JSON with padding',
                    'JSON Programming'
                ],
                'answer': 'JSON with padding',
                'category': 'Computer Science'
            },
            {
                'question': 'Which of the following code will not throw an error?',
                'options': [
                    'JSON.parse(”);',
                    'JSON.parse(null);',
                    'JSON.parse();',
                    'JSON.parse({});'
                ],
                'answer': 'JSON.parse(null);',
                'category': 'Computer Science'
            },
            {
                'question': 'How does JSON handle numeric values that cannot be represented by a sequence of digits (like Infiniti and Nan)?',
                'options': [
                    'They are stored as strings and then converted when parsed.',
                    'They are not permitted.',
                    'They are stored fine but it’s the parsers job to convert them to numeric values.'
                ],
                'answer': 'They are not permitted.',
                'category': 'Computer Science'
            },
            {
                'question': 'Which of the following number formats are not used in JSON?',
                'options': [
                    'Octal and gate',
                    'Octal and binary',
                    'Binary and hexadecimal',
                    'Octal and hexadecimal'
                ],
                'answer': 'Octal and hexadecimal',
                'category': 'Computer Science'
            },
            {
                'question': 'What is used by the JSONObject and JSONArray constructors to parse JSON source strings?',
                'options': [
                    'JSONTokener',
                    'JSONParser',
                    'JParser',
                    'ParserJ'
                ],
                'answer': 'JSONTokener',
                'category': 'Computer Science'
            },
            {
                'question': 'Which statement about the space parameter in JSON.stringify() is false?',
                'options': [
                    'It controls spacing in the resulting JSON string',
                    'All three statements are false',
                    'It removes whitespace',
                    'It is an optional parameter'
                ],
                'answer': 'It is an optional parameter',
                'category': 'Computer Science'
            },
            {
                'question': 'True of False? The external form of a JSON object always begins and ends with {}',
                'options': [
                    'True',
                    'False'
                ],
                'answer': 'True',
                'category': 'Computer Science'
            },
            {
                'question': 'True of False. The order of JSON objects is always preserved.',
                'options': [
                    'True',
                    'False'
                ],
                'answer': 'True',
                'category': 'Computer Science'
            }];
    };
    QueriesTableComponent.prototype.openEditQuestionModel = function (query) {
        var options = query.options.filter(function (option) { return option !== query.answer; });
        var queryToEdit = {
            category: query.category,
            question: query.question,
            answer: query.answer,
            option1: options[0],
            option2: options[1],
            option3: options[2],
        };
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__edit_query_modal_edit_query_modal_component__["a" /* EditQueryModalComponent */]);
        this.bsModalRef.content.updateFormValues(queryToEdit);
    };
    QueriesTableComponent.prototype.openConfirmDeleteModal = function (template, item) {
        this.selectedQuestion = item;
        this.bsModalRef = this.modalService.show(template);
    };
    QueriesTableComponent.prototype.confirmDelete = function () {
        this.questions.splice(this.questions.indexOf(this.selectedQuestion), 1);
        this.bsModalRef.hide();
    };
    QueriesTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-queries-table',
            template: __webpack_require__("../../../../../src/app/queries-table/queries-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/queries-table/queries-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], QueriesTableComponent);
    return QueriesTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/queries/queries.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/queries/queries.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>Manage Questions</h2>\n  <a class=\"header-control\" (click)=\"openCreateQueryModal()\">\n    <i class=\"fa fa-plus\"></i> Add new question\n  </a>\n</div>\n\n<app-queries-table></app-queries-table>\n"

/***/ }),

/***/ "../../../../../src/app/queries/queries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_query_modal_create_query_modal_component__ = __webpack_require__("../../../../../src/app/create-query-modal/create-query-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueriesComponent = (function () {
    function QueriesComponent(modalService) {
        this.modalService = modalService;
    }
    QueriesComponent.prototype.ngOnInit = function () {
    };
    QueriesComponent.prototype.openCreateQueryModal = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__create_query_modal_create_query_modal_component__["a" /* CreateQueryModalComponent */]);
    };
    QueriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-queries',
            template: __webpack_require__("../../../../../src/app/queries/queries.component.html"),
            styles: [__webpack_require__("../../../../../src/app/queries/queries.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], QueriesComponent);
    return QueriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/query-types-table/query-types-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/query-types-table/query-types-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ngx-datatable\n    class=\"material\"\n    [rows]=\"rows\"\n    [columnMode]=\"'force'\"\n    [headerHeight]=\"50\"\n    [footerHeight]=\"50\"\n    [rowHeight]=\"'auto'\">\n    <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n    <ngx-datatable-column name=\"Associated Questions\"></ngx-datatable-column>\n    <ngx-datatable-column [sortable]=\"false\" [width]=\"10\">\n      <ng-template ngx-datatable-header-template let-value=\"value\" let-allRowsSelected=\"allRowsSelected\" let-selectFn=\"selectFn\">\n        Actions\n      </ng-template>\n      <ng-template ngx-datatable-cell-template let-row=\"row\">\n        <div class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"openEditModal(row)\"><i class=\"fa fa-pencil\"></i></button>\n          <button type=\"button\" class=\"btn btn-default\"\n                  (click)=\"openConfirmDeleteModal(confirm, row)\"\n                  [disabled]=\"row.associatedQuestions > 0\"\n                  [title]=\"row.associatedQuestions > 0 ? 'Cannot be deleted as there are associations' : ''\">\n            <i class=\"fa fa-trash-o\"></i></button>\n        </div>\n      </ng-template>\n    </ngx-datatable-column>\n  </ngx-datatable>\n</div>\n\n<ng-template #confirm>\n  <div class=\"modal-body text-center\">\n    <p>Do you want to confirm?</p>\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"confirmDelete()\" >Yes</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"bsModalRef.hide()\" >No</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/query-types-table/query-types-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryTypesTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_query_type_modal_edit_query_type_modal_component__ = __webpack_require__("../../../../../src/app/edit-query-type-modal/edit-query-type-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryTypesTableComponent = (function () {
    function QueryTypesTableComponent(modalService) {
        this.modalService = modalService;
        this.rows = [
            {
                'id': '1',
                'name': 'General Knowledge',
                'associatedQuestions': 32
            },
            {
                'id': '2',
                'name': 'Engineering Physics',
                'associatedQuestions': 12
            },
            {
                'id': '3',
                'name': 'Astrophysics',
                'associatedQuestions': 0
            },
            {
                'id': '4',
                'name': 'Theoretical Physics',
                'associatedQuestions': 3
            },
            {
                'id': '5',
                'name': 'Experimental Physics',
                'associatedQuestions': 23
            },
            {
                'id': '6',
                'name': 'Microbiology',
                'associatedQuestions': 2
            },
            {
                'id': '7',
                'name': 'pharmaceutical',
                'associatedQuestions': 9
            },
            {
                'id': '8',
                'name': 'Organic Chemistry',
                'associatedQuestions': 70
            },
            {
                'id': '9',
                'name': 'General English',
                'associatedQuestions': 19
            },
            {
                'id': '10',
                'name': 'Computer Science',
                'associatedQuestions': 0
            }
        ];
    }
    QueryTypesTableComponent.prototype.ngOnInit = function () {
    };
    QueryTypesTableComponent.prototype.openEditModal = function (queryType) {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__edit_query_type_modal_edit_query_type_modal_component__["a" /* EditQueryTypeModalComponent */]);
        this.bsModalRef.content.updateFormValues(queryType);
    };
    QueryTypesTableComponent.prototype.openConfirmDeleteModal = function (template, item) {
        this.selectedItem = item;
        this.bsModalRef = this.modalService.show(template);
    };
    QueryTypesTableComponent.prototype.confirmDelete = function () {
        this.rows.splice(this.rows.indexOf(this.selectedItem), 1);
        this.bsModalRef.hide();
    };
    QueryTypesTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-query-types-table',
            template: __webpack_require__("../../../../../src/app/query-types-table/query-types-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/query-types-table/query-types-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], QueryTypesTableComponent);
    return QueryTypesTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/query-types/query-types.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/query-types/query-types.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h2>Manage Query Types</h2>\n  <a class=\"header-control\" (click)=\"openCreateQueryTypeModal()\">\n    <i class=\"fa fa-plus\"></i> Add new category\n  </a>\n</div>\n\n<app-query-types-table></app-query-types-table>\n"

/***/ }),

/***/ "../../../../../src/app/query-types/query-types.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryTypesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_query_type_modal_create_query_type_modal_component__ = __webpack_require__("../../../../../src/app/create-query-type-modal/create-query-type-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QueryTypesComponent = (function () {
    function QueryTypesComponent(modalService) {
        this.modalService = modalService;
    }
    QueryTypesComponent.prototype.ngOnInit = function () {
    };
    QueryTypesComponent.prototype.openCreateQueryTypeModal = function () {
        this.bsModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_2__create_query_type_modal_create_query_type_modal_component__["a" /* CreateQueryTypeModalComponent */]);
    };
    QueryTypesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-query-types',
            template: __webpack_require__("../../../../../src/app/query-types/query-types.component.html"),
            styles: [__webpack_require__("../../../../../src/app/query-types/query-types.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]])
    ], QueryTypesComponent);
    return QueryTypesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/query-type-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QueryTypeService = (function () {
    function QueryTypeService(http) {
        this.http = http;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serverUrl + 'queryCategory/';
    }
    QueryTypeService.prototype.create = function (name) {
        var _this = this;
        console.log('reached service');
        return this.http.post(this.BASE_URL, { name: name })
            .map(function (response) { return _this.reloadList(); });
    };
    QueryTypeService.prototype.update = function (id, name) {
        var _this = this;
        return this.http.put(this.BASE_URL, { id: id, name: name })
            .map(function (response) { return _this.reloadList(); });
    };
    QueryTypeService.prototype.delete = function (id) {
        var _this = this;
        return this.http.delete(this.BASE_URL + id)
            .map(function (response) { return _this.reloadList(); });
    };
    QueryTypeService.prototype.fetch = function () {
        return this.http.get(this.BASE_URL)
            .map(function (response) {
            console.log(response);
        });
    };
    QueryTypeService.prototype.reloadList = function () {
        console.log('reload query type list');
    };
    QueryTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QueryTypeService);
    return QueryTypeService;
}());



/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a, a:hover, a:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n\n\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n\n.sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  background: #7386D5;\n  color: #fff;\n  transition: all 0.3s;\n}\n\n.sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center;\n}\n\n.sidebar-collapse-control {\n  padding-top: 10px;\n  padding-right: 10px;\n  background: #6d7fcc;\n}\n\n.sidebar-arrow {\n  float: right;\n  cursor: pointer;\n}\n\n.sidebar.active .sidebar-header h3, .sidebar.active .CTAs {\n  display: none;\n}\n\n.sidebar.active .sidebar-header strong {\n  display: block;\n}\n\n.sidebar ul li a {\n  text-align: left;\n}\n\n.sidebar.active ul li a {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em;\n}\n\n.sidebar.active ul li a i {\n  margin-right:  0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px;\n}\n\n.sidebar.active ul ul a {\n  padding: 10px !important;\n}\n\n.sidebar.active a[aria-expanded=\"false\"]::before, .sidebar.active a[aria-expanded=\"true\"]::before {\n  top: auto;\n  bottom: 5px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%);\n}\n\n.sidebar .sidebar-header {\n  padding: 20px;\n  background: #6d7fcc;\n}\n\n.sidebar .sidebar-header strong {\n  display: none;\n  font-size: 1.8em;\n}\n\n.sidebar ul.components {\n  padding: 20px 0;\n  border-bottom: 1px solid #47748b;\n}\n\n.sidebar ul li a {\n  padding: 10px;\n  font-size: 1.1em;\n  display: block;\n}\n.sidebar ul li a:hover {\n  color: #7386D5;\n  background: #fff;\n}\n.sidebar ul li a i {\n  margin-right: 10px;\n}\n\n.sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n  color: #fff;\n  background: #6d7fcc;\n}\n\n\na[data-toggle=\"collapse\"] {\n  position: relative;\n}\n\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n  content: '\\E259';\n  display: block;\n  position: absolute;\n  right: 20px;\n  font-family: 'Glyphicons Halflings';\n  font-size: 0.6em;\n}\na[aria-expanded=\"true\"]::before {\n  content: '\\E260';\n}\n\na.download {\n  background: #fff;\n  color: #7386D5;\n}\n\na.article, a.article:hover {\n  background: #6d7fcc !important;\n  color: #fff !important;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [class]=\"collapseSideMenu? 'sidebar' : 'sidebar active'\">\n\n  <div class=\"sidebar-collapse-control\">\n    <i (click)=\"toggleSideMenu()\"\n       [class]=\"collapseSideMenu? 'sidebar-arrow glyphicon glyphicon-arrow-left' :\n          'sidebar-arrow glyphicon glyphicon-arrow-right'\"></i>\n  </div>\n\n  <div class=\"sidebar-header\">\n    <h3>Pocket PSC</h3>\n    <strong><i class=\"glyphicon glyphicon-home\"></i></strong>\n  </div>\n\n  <ul class=\"list-unstyled components\">\n    <li [class.active]=\"isActive('/papers')\">\n      <a routerLink=\"/papers\">\n        <i class=\"fa fa-file-text-o\"></i>\n        Papers\n      </a>\n    </li>\n    <li [class.active]=\"isActive('/paperTypes')\">\n      <a routerLink=\"/paperTypes\">\n        <i class=\"fa fa-list\"></i>\n        Paper Types\n      </a>\n    </li>\n    <li [class.active]=\"isActive('/queries')\">\n      <a routerLink=\"/queries\">\n        <i class=\"fa fa-question-circle\"></i>\n        Queries\n      </a>\n    </li>\n    <li [class.active]=\"isActive('/queryTypes')\">\n      <a routerLink=\"/queryTypes\">\n        <i class=\"fa fa-paperclip\"></i>\n        Query Types\n      </a>\n    </li>\n    <li>\n      <a href=\"/login\">\n        <i class=\"fa fa-sign-out\"></i>\n        Logout\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = (function () {
    function SideBarComponent(location) {
        this.location = location;
        this.collapseSideMenu = true;
    }
    SideBarComponent.prototype.toggleSideMenu = function () {
        this.collapseSideMenu = !this.collapseSideMenu;
    };
    SideBarComponent.prototype.isActive = function (route) {
        return location.pathname === route;
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__("../../../../../src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    serverUrl: 'https://mcq.a4i.com/api/'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map