(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");







const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_4__["HeroDetailComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");




class AppComponent {
    constructor() {
        this.title = 'hero-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 1, consts: [["routerLink", "/dashboard"], ["routerLink", "/heroes"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-messages");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3.2em;\n  margin-bottom: 0;\n  -webkit-text-stroke: 1px #334953;\n  -webkit-text-fill-color: transparent;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited, header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link {\n  color: #334953;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #039be5;\n}\n/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBQTtBQUNBO0VBQ0Usa0JBQVk7QUNDZDtBREFFO0VBQ0UsZ0JBQVc7RUFDWCxnQkFBZTtFQUNmLGdDQUFxQjtFQUNyQixvQ0FBeUI7QUNFN0I7QURERTtFQUNFLGlCQUFTO0VBQ1QscUJBQWlCO0VBQ2pCLGdCQUFZO0VBQ1oscUJBQVM7RUFDVCxzQkFBa0I7RUFDbEIsa0JBQWU7QUNHbkI7QURGRTs7RUFDRSxjQUFPO0FDS1g7QURKRTtFQUNFLGNBQU87RUFDUCx5QkFBa0I7QUNNdEI7QURMRTtFQUNFLGNBQU87QUNPWDtBQUNBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaGVhZGVyXG4gIHRleHQtYWxpZ246IGNlbnRlclxuICBoMVxuICAgIGZvbnQtc2l6ZTogMy4yZW1cbiAgICBtYXJnaW4tYm90dG9tOiAwXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMXB4ICMzMzQ5NTNcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgbmF2IGFcbiAgICBwYWRkaW5nOiA1cHggMTBweFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuICAgIG1hcmdpbi10b3A6IDEwcHhcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlXG4gICAgYm9yZGVyLXJhZGl1czogNHB4XG4gIG5hdiBhOnZpc2l0ZWQsIGE6bGlua1xuICAgIGNvbG9yOiAjMzM0OTUzXG4gIG5hdiBhOmhvdmVyXG4gICAgY29sb3I6ICMwMzliZTVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjXG4gIG5hdiBhLmFjdGl2ZVxuICAgIGNvbG9yOiAjMDM5YmU1IiwiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDMuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzMzNDk1MztcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaGVhZGVyIG5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5oZWFkZXIgbmF2IGE6dmlzaXRlZCxcbmhlYWRlciBhOmxpbmsge1xuICBjb2xvcjogIzMzNDk1Mztcbn1cbmhlYWRlciBuYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuaGVhZGVyIG5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.styl']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/hero-detail/hero-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");


 // <-- NgModel lives here












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"], { dataEncapsulation: false }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"],
        _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__["HeroDetailComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_12__["HeroSearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["HttpClientInMemoryWebApiModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_5__["HeroesComponent"],
                    _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_6__["HeroDetailComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                    _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_12__["HeroSearchComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                    // and returns simulated server responses.
                    // Remove it when a real server is ready to receive requests.
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_10__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_11__["InMemoryDataService"], { dataEncapsulation: false }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero-search/hero-search.component */ "./src/app/hero-search/hero-search.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function DashboardComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r1.name);
} }
class DashboardComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    ngOnInit() {
        this.getHeroes();
    }
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 5, vars: 1, consts: [[1, "grid", "grid-pad"], ["class", "col-1-4", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-1-4", 3, "routerLink"], [1, "module", "hero"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Heroes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-hero-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_a_4_Template, 4, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
    } }, directives: [_hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_2__["HeroSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["[class*='col-'][_ngcontent-%COMP%] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-'][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:after, *[_ngcontent-%COMP%]:before {\n  box-sizing: border-box;\n}\nh2[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0;\n}\nh3[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 1.2em;\n}\n.grid[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.col-1-4[_ngcontent-%COMP%] {\n  width: 25%;\n}\n.module[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  transition: background-color 0.3s ease;\n  background-color: #3f525c;\n  border-radius: 2px;\n}\n.module[_ngcontent-%COMP%]:hover {\n  background-color: #eee;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.grid-pad[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%]:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module[_ngcontent-%COMP%] {\n    max-height: 75px;\n  }\n}\n@media (max-width: 1024px) {\n  .grid[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .module[_ngcontent-%COMP%] {\n    min-width: 60px;\n  }\n}\n/*# sourceMappingURL=src/app/dashboard/dashboard.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL3NyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBQTtBQUNBO0VBQ0UsV0FBTztFQUNQLG1CQUFlO0VBQ2Ysb0JBQWdCO0FDQ2xCO0FEQUE7RUFDRSxnQkFBZTtBQ0VqQjtBRERBO0VBQ0UscUJBQWlCO0FDR25CO0FERkE7OztFQUdFLHNCQUFZO0FDTWQ7QURMQTtFQUNFLGtCQUFZO0VBQ1osZ0JBQWU7QUNPakI7QUROQTtFQUNFLGtCQUFVO0VBQ1YsZ0JBQVc7QUNRYjtBRFBBO0VBQ0UsU0FBUTtBQ1NWO0FEUkE7RUFDRSxVQUFPO0FDVVQ7QURUQTtFQUNFLGFBQVM7RUFDVCxrQkFBWTtFQUNaLFdBQU87RUFDUCxpQkFBWTtFQUNaLGdCQUFXO0VBQ1gsc0NBQVk7RUFDWix5QkFBa0I7RUFDbEIsa0JBQWU7QUNXakI7QURWQTtFQUNFLHNCQUFrQjtFQUNsQixlQUFRO0VBQ1IsY0FBTztBQ1lUO0FEWEE7RUFDRSxlQUFTO0FDYVg7QURaQTtFQUNFLG1CQUFlO0FDY2pCO0FEYndCO0VBQ3RCO0lBQ0UsZ0JBQVk7RUNlZDtBQUNGO0FEZnlCO0VBQ3ZCO0lBQ0UsU0FBUTtFQ2lCVjtFRGhCQTtJQUNFLGVBQVc7RUNrQmI7QUFDRjtBQUNBLG9FQUFvRSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEYXNoYm9hcmRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbltjbGFzcyo9J2NvbC0nXVxuICBmbG9hdDogbGVmdFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4XG5bY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlXG4gIHBhZGRpbmctcmlnaHQ6IDBcbmFcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4qLCAqOmFmdGVyLCAqOmJlZm9yZVxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3hcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3hcbmgyXG4gIHRleHQtYWxpZ246IGNlbnRlclxuICBtYXJnaW4tYm90dG9tOiAwXG5oM1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgZm9udC1zaXplOiAxLjJlbVxuLmdyaWRcbiAgbWFyZ2luOiAwXG4uY29sLTEtNFxuICB3aWR0aDogMjUlXG4ubW9kdWxlXG4gIHBhZGRpbmc6IDIwcHhcbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gIGNvbG9yOiAjZWVlXG4gIG1heC1oZWlnaHQ6IDEyMHB4XG4gIG1pbi13aWR0aDogMTIwcHhcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3MgZWFzZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjXG4gIGJvcmRlci1yYWRpdXM6IDJweFxuLm1vZHVsZTpob3ZlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlXG4gIGN1cnNvcjogcG9pbnRlclxuICBjb2xvcjogIzYwN2Q4YlxuLmdyaWQtcGFkXG4gIHBhZGRpbmc6IDEwcHggMFxuLmdyaWQtcGFkID4gW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZVxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXG4gIC5tb2R1bGVcbiAgICBtYXgtaGVpZ2h0OiA3NXB4XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KVxuICAuZ3JpZFxuICAgIG1hcmdpbjogMFxuICAubW9kdWxlXG4gICAgbWluLXdpZHRoOiA2MHB4IiwiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG5bY2xhc3MqPSdjb2wtJ10ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5bY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4qLFxuKjphZnRlcixcbio6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmdyaWQge1xuICBtYXJnaW46IDA7XG59XG4uY29sLTEtNCB7XG4gIHdpZHRoOiAyNSU7XG59XG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2VlZTtcbiAgbWF4LWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubW9kdWxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzYwN2Q4Yjtcbn1cbi5ncmlkLXBhZCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIG1heC1oZWlnaHQ6IDc1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmdyaWQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAubW9kdWxlIHtcbiAgICBtaW4td2lkdGg6IDYwcHg7XG4gIH1cbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.styl']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hero-detail/hero-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function HeroDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.hero.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r8.hero.name), " ] Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.hero.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.hero.name);
} }
class HeroDetailComponent {
    constructor(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    ngOnInit() {
        this.getHero();
    }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
    }
}
HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) { return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroDetailComponent, selectors: [["app-hero-detail"]], inputs: { hero: "hero" }, decls: 1, vars: 1, consts: [["class", "hero-detail", 4, "ngIf"], [1, "hero-detail"], ["placeholder", "name", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function HeroDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 16, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["div.hero-detail[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 0 auto;\n  padding: 15px;\n  border: 1px solid;\n}\ndiv.hero-detail[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0.5em 0;\n  color: #607d8b;\n  font-weight: bold;\n}\ndiv.hero-detail[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 2em;\n  font-size: 1em;\n  padding-left: 0.4em;\n}\ndiv.hero-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\ndiv.hero-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\ndiv.hero-detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n/*# sourceMappingURL=src/app/hero-detail/hero-detail.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1kZXRhaWwvc3JjL2FwcC9oZXJvLWRldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQUE7QUFDQTtFQUNFLFVBQU87RUFDUCxjQUFRO0VBQ1IsYUFBUztFQUNULGlCQUFRO0FDQ1Y7QURBRTtFQUNFLHFCQUFTO0VBQ1QsZUFBUTtFQUNSLGNBQU87RUFDUCxpQkFBYTtBQ0VqQjtBRERFO0VBQ0UsV0FBUTtFQUNSLGNBQVc7RUFDWCxtQkFBYztBQ0dsQjtBREZFO0VBQ0UsZ0JBQVk7RUFDWixrQkFBYTtFQUNiLHNCQUFrQjtFQUNsQixZQUFRO0VBQ1IsaUJBQVM7RUFDVCxrQkFBZTtFQUNmLGVBQVE7RUFDUixZQUFRO0FDSVo7QURIRTtFQUNFLHlCQUFrQjtBQ0t0QjtBREpFO0VBQ0Usc0JBQWtCO0VBQ2xCLFdBQU87RUFDUCxZQUFRO0FDTVo7QUFDQSx3RUFBd0UiLCJmaWxlIjoic3JjL2FwcC9oZXJvLWRldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9EZXRhaWxDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmRpdi5oZXJvLWRldGFpbFxuICB3aWR0aDogMzAlXG4gIG1hcmdpbjogMCBhdXRvXG4gIHBhZGRpbmc6IDE1cHhcbiAgYm9yZGVyOiAxcHggc29saWRcbiAgbGFiZWxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgICBtYXJnaW46IDAuNWVtIDBcbiAgICBjb2xvcjogIzYwN0Q4QlxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gIGlucHV0XG4gICAgaGVpZ2h0OiAyZW1cbiAgICBmb250LXNpemU6IDFlbVxuICAgIHBhZGRpbmctbGVmdDogMC40ZW1cbiAgYnV0dG9uXG4gICAgbWFyZ2luLXRvcDogMjBweFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVcbiAgICBib3JkZXI6IG5vbmVcbiAgICBwYWRkaW5nOiA1cHggMTBweFxuICAgIGJvcmRlci1yYWRpdXM6IDRweFxuICAgIGN1cnNvcjogcG9pbnRlclxuICAgIGN1cnNvcjogaGFuZFxuICBidXR0b246aG92ZXJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjXG4gIGJ1dHRvbjpkaXNhYmxlZFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVcbiAgICBjb2xvcjogI2NjY1xuICAgIGN1cnNvcjogYXV0byIsIi8qIEhlcm9EZXRhaWxDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmRpdi5oZXJvLWRldGFpbCB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbmRpdi5oZXJvLWRldGFpbCBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwLjVlbSAwO1xuICBjb2xvcjogIzYwN2Q4YjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5kaXYuaGVyby1kZXRhaWwgaW5wdXQge1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmctbGVmdDogMC40ZW07XG59XG5kaXYuaGVyby1kZXRhaWwgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xufVxuZGl2Lmhlcm8tZGV0YWlsIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5kaXYuaGVyby1kZXRhaWwgYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogYXV0bztcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-detail',
                templateUrl: './hero-detail.component.html',
                styleUrls: ['./hero-detail.component.styl']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, { hero: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/hero-search/hero-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hero-search/hero-search.component.ts ***!
  \******************************************************/
/*! exports provided: HeroSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function() { return HeroSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function HeroSearchComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r20.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r20.name, " ");
} }
class HeroSearchComponent {
    constructor(heroService) {
        this.heroService = heroService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.heroes$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), // distinctUntilChanged() 会确保只在过滤条件变化时才发送请求。
        // switch to new search observable each time the term changes
        // switchMap() 会为每个从 debounce() 和 distinctUntilChanged() 中通过的搜索词调用搜索服务。 它会取消并丢弃以前的搜索可观察对象，只保留最近的。
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.heroService.searchHeroes(term)));
    }
}
HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) { return new (t || HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"])); };
HeroSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroSearchComponent, selectors: [["app-hero-search"]], decls: 9, vars: 3, consts: [["id", "search-component"], ["for", "search-box"], ["id", "search-box", "placeholder", "search hero", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function HeroSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hero Search: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeroSearchComponent_Template_input_input_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.search(_r18.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeroSearchComponent_li_7_Template, 3, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.heroes$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["#search-component[_ngcontent-%COMP%] {\n  text-align: center;\n}\n#search-component[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: inline;\n}\n#search-component[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #808080;\n  border-left: 1px solid #808080;\n  border-right: 1px solid #808080;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: #fff;\n  cursor: pointer;\n  list-style-type: none;\n}\n#search-component[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #607d8b;\n}\n#search-component[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  display: block;\n  text-decoration: none;\n}\n#search-component[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n#search-component[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n  color: #fff;\n}\n#search-component[_ngcontent-%COMP%]   #search-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 20px;\n  margin-left: 5px;\n  line-height: 80px;\n}\n#search-component[_ngcontent-%COMP%]   ul.search-result[_ngcontent-%COMP%] {\n  margin-left: 46%;\n  padding-left: 0;\n}\n/*# sourceMappingURL=src/app/hero-search/hero-search.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyby1zZWFyY2gvc3JjL2FwcC9oZXJvLXNlYXJjaC9oZXJvLXNlYXJjaC5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaGVyby1zZWFyY2gvaGVyby1zZWFyY2guY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQUE7QUFDQTtFQUNFLGtCQUFZO0FDQ2Q7QURBRTtFQUNFLGVBQVM7QUNFYjtBRERFO0VBQ0UsZ0NBQWU7RUFDZiw4QkFBYTtFQUNiLCtCQUFjO0VBQ2QsWUFBTztFQUNQLFlBQVE7RUFDUixZQUFTO0VBQ1Qsc0JBQWtCO0VBQ2xCLGVBQVE7RUFDUixxQkFBaUI7QUNHckI7QURGRTtFQUNFLHlCQUFrQjtBQ0l0QjtBREhFO0VBQ0UsV0FBTztFQUNQLGNBQVM7RUFDVCxxQkFBaUI7QUNLckI7QURKRTtFQUNFLFdBQU87QUNNWDtBRExFO0VBQ0UsV0FBTztBQ09YO0FETkU7RUFDRSxZQUFPO0VBQ1AsWUFBUTtFQUNSLGdCQUFhO0VBQ2IsaUJBQWE7QUNRakI7QURQRTtFQUNFLGdCQUFhO0VBQ2IsZUFBYztBQ1NsQjtBQUNBLHdFQUF3RSIsImZpbGUiOiJzcmMvYXBwL2hlcm8tc2VhcmNoL2hlcm8tc2VhcmNoLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb1NlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xuI3NlYXJjaC1jb21wb25lbnRcbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gIGg0XG4gICAgZGlzcGxheTogaW5saW5lXG4gIC5zZWFyY2gtcmVzdWx0IGxpXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXlcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXlcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBncmF5XG4gICAgd2lkdGg6IDE5NXB4XG4gICAgaGVpZ2h0OiAxNnB4XG4gICAgcGFkZGluZzogNXB4XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVcbiAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmVcbiAgLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGFcbiAgICBjb2xvcjogIzg4OFxuICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXJcbiAgICBjb2xvcjogd2hpdGVcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTphY3RpdmVcbiAgICBjb2xvcjogd2hpdGVcbiAgI3NlYXJjaC1ib3hcbiAgICB3aWR0aDogMjAwcHhcbiAgICBoZWlnaHQ6IDIwcHhcbiAgICBtYXJnaW4tbGVmdDogNXB4XG4gICAgbGluZS1oZWlnaHQ6IDgwcHhcbiAgdWwuc2VhcmNoLXJlc3VsdFxuICAgIG1hcmdpbi1sZWZ0OiA0NiVcbiAgICBwYWRkaW5nLWxlZnQ6IDAiLCIvKiBIZXJvU2VhcmNoIHByaXZhdGUgc3R5bGVzICovXG4jc2VhcmNoLWNvbXBvbmVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNzZWFyY2gtY29tcG9uZW50IGg0IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuI3NlYXJjaC1jb21wb25lbnQgLnNlYXJjaC1yZXN1bHQgbGkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzgwODA4MDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICB3aWR0aDogMTk1cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbiNzZWFyY2gtY29tcG9uZW50IC5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4Yjtcbn1cbiNzZWFyY2gtY29tcG9uZW50IC5zZWFyY2gtcmVzdWx0IGxpIGEge1xuICBjb2xvcjogIzg4ODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNzZWFyY2gtY29tcG9uZW50IC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNzZWFyY2gtY29tcG9uZW50IC5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4jc2VhcmNoLWNvbXBvbmVudCAjc2VhcmNoLWJveCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBsaW5lLWhlaWdodDogODBweDtcbn1cbiNzZWFyY2gtY29tcG9uZW50IHVsLnNlYXJjaC1yZXN1bHQge1xuICBtYXJnaW4tbGVmdDogNDYlO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2hlcm8tc2VhcmNoL2hlcm8tc2VhcmNoLmNvbXBvbmVudC5jc3MubWFwICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero-search',
                templateUrl: './hero-search.component.html',
                styleUrls: ['./hero-search.component.styl']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/hero.service.ts":
/*!*********************************!*\
  !*** ./src/app/hero.service.ts ***!
  \*********************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");







class HeroService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    /** Log a HeroService message with the MessageService */
    log(message) {
        this.messageService.add(`HeroService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
    /** GET hero by id. Will 404 if id not found */
    getHero(id) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`fetched hero id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError(`getHero id=${id}`)));
    }
    /** GET heroes from the server */
    getHeroes() {
        return this.http.get(this.heroesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched heroes')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getHeroes', [])));
    }
    /** PUT: update the hero on the server */
    updateHero(hero) {
        // HttpClient.put() 方法接受三个参数：
        //   URL 地址
        //   要修改的数据（这里就是修改后的英雄）
        //   选项
        return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`updated hero id=${hero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateHero')));
    }
    /** POST: add a new hero to the server */
    addHero(hero) {
        // addHero() 和 updateHero() 有两点不同。
        //   它调用 HttpClient.post() 而不是 put()。
        //   它期待服务器为这个新的英雄生成一个 id，然后把它通过 Observable<Hero> 返回给调用者。
        return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((newHero) => this.log(`added hero w/ id=${newHero.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    }
    /** DELETE: delete the hero from the server */
    deleteHero(hero) {
        const id = typeof hero === 'number' ? hero : hero.id;
        const url = `${this.heroesUrl}/${id}`;
        // deleteHero() 调用了 HttpClient.delete()。
        // URL 就是英雄的资源 URL 加上要删除的英雄的 id。
        // 你不用像 put() 和 post() 中那样发送任何数据。
        // 你仍要发送 httpOptions。
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log(`deleted hero id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteHero')));
    }
    /* GET heroes whose name contains search term */
    searchHeroes(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(`${this.heroesUrl}/?name=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(x => x.length ?
            this.log(`found heroes matching "${term}"`) :
            this.log(`no heroes matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('searchHeroes', [])));
    }
}
HeroService.ɵfac = function HeroService_Factory(t) { return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
HeroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeroService, factory: HeroService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero.service */ "./src/app/hero.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function HeroesComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_li_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const hero_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.delete(hero_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r4.name, " ");
} }
// selector— 组件的选择器（CSS 元素选择器）
// templateUrl— 组件模板文件的位置。
// styleUrls— 组件私有 CSS 样式表文件的位置。
// ngOnInit() 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit()。这里是放置初始化逻辑的好地方。
// 始终要 export 这个组件类，以便在其它地方（比如 AppModule）导入它。
class HeroesComponent {
    constructor(heroService, messageService) {
        this.heroService = heroService;
        this.messageService = messageService;
    }
    ngOnInit() {
        this.getHeroes();
    }
    // 获取英雄们
    getHeroes() {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }
    add(name) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name })
            .subscribe(hero => {
            this.heroes.push(hero);
        });
    }
    delete(hero) {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }
}
HeroesComponent.ɵfac = function HeroesComponent_Factory(t) { return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroesComponent, selectors: [["app-heroes"]], decls: 11, vars: 1, consts: [[1, "heroe-add"], ["heroName", ""], [3, "click"], [1, "heroes"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"], ["title", "delete hero", 1, "delete", 3, "click"]], template: function HeroesComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Heroes: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hero name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); ctx.add(_r2.value); return _r2.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeroesComponent_li_10_Template, 7, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.heroe-add[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.heroes[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: #eee;\n  margin: 0.5em;\n  padding: 0.3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607d8b;\n  background-color: #ddd;\n  left: 0.1em;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px;\n}\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #607d8b;\n}\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: #fff;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #405061;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: 0.8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete[_ngcontent-%COMP%] {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: #808080 !important;\n  color: #fff;\n}\n/*# sourceMappingURL=src/app/heroes/heroes.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL3NyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBQTtBQUNBO0VBQ0Usa0JBQVk7QUNDZDtBREFBO0VBQ0Usa0JBQVk7QUNFZDtBRERBO0VBQ0UsY0FBUTtFQUNSLHFCQUFpQjtFQUNqQixVQUFTO0VBQ1QsV0FBTztBQ0dUO0FERkE7RUFDRSxrQkFBVTtFQUNWLGVBQVE7RUFDUixzQkFBa0I7RUFDbEIsYUFBUTtFQUNSLGdCQUFTO0VBQ1QsYUFBUTtFQUNSLGtCQUFlO0FDSWpCO0FESEE7RUFDRSxjQUFPO0VBQ1Asc0JBQWtCO0VBQ2xCLFdBQU07QUNLUjtBREpBO0VBQ0UsV0FBTztFQUNQLHFCQUFpQjtFQUNqQixrQkFBVTtFQUNWLGNBQVM7RUFDVCxZQUFPO0FDTVQ7QURMQTtFQUNFLGNBQU87QUNPVDtBRE5BO0VBQ0UscUJBQVM7RUFDVCxnQkFBVztFQUNYLFdBQU87RUFDUCw0QkFBUztFQUNULHlCQUFrQjtFQUNsQixnQkFBYTtFQUNiLGtCQUFVO0VBQ1YsVUFBTTtFQUNOLFNBQUs7RUFDTCxhQUFRO0VBQ1IsZUFBVztFQUNYLGlCQUFZO0VBQ1osbUJBQWM7RUFDZCwwQkFBZTtBQ1FqQjtBRFBBO0VBQ0Usc0JBQWtCO0VBQ2xCLFlBQVE7RUFDUixpQkFBUztFQUNULGtCQUFlO0VBQ2YsZUFBUTtFQUNSLFlBQVE7RUFDUixrQkFBYTtBQ1NmO0FEUkE7RUFDRSx5QkFBa0I7QUNVcEI7QURUQTtFQUNFLGtCQUFVO0VBQ1YsV0FBTTtFQUNOLFVBQUs7RUFDTCxvQ0FBa0I7RUFDbEIsV0FBTztBQ1dUO0FBQ0EsOERBQThEIiwiZmlsZSI6InNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDJcbiAgdGV4dC1hbGlnbjogY2VudGVyXG4uaGVyb2UtYWRkXG4gIHRleHQtYWxpZ246IGNlbnRlclxuLmhlcm9lc1xuICBtYXJnaW46IDAgYXV0b1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmVcbiAgcGFkZGluZzogMFxuICB3aWR0aDogMTVlbVxuLmhlcm9lcyBsaVxuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgY3Vyc29yOiBwb2ludGVyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVcbiAgbWFyZ2luOiAwLjVlbVxuICBwYWRkaW5nOiAwLjNlbSAwXG4gIGhlaWdodDogMS42ZW1cbiAgYm9yZGVyLXJhZGl1czogNHB4XG4uaGVyb2VzIGxpOmhvdmVyXG4gIGNvbG9yOiAjNjA3RDhCXG4gIGJhY2tncm91bmQtY29sb3I6ICNERERcbiAgbGVmdDogMC4xZW1cbi5oZXJvZXMgYVxuICBjb2xvcjogIzMzM1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIGRpc3BsYXk6IGJsb2NrXG4gIHdpZHRoOiAyNTBweFxuLmhlcm9lcyBhOmhvdmVyXG4gIGNvbG9yOiAjNjA3RDhCXG4uaGVyb2VzIC5iYWRnZVxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcbiAgZm9udC1zaXplOiBzbWFsbFxuICBjb2xvcjogd2hpdGVcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1MDYxXG4gIGxpbmUtaGVpZ2h0OiAxZW1cbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIGxlZnQ6IC0xcHhcbiAgdG9wOiAtNHB4XG4gIGhlaWdodDogMS44ZW1cbiAgbWluLXdpZHRoOiAxNnB4XG4gIHRleHQtYWxpZ246IHJpZ2h0XG4gIG1hcmdpbi1yaWdodDogMC44ZW1cbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHhcbmJ1dHRvblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlXG4gIGJvcmRlcjogbm9uZVxuICBwYWRkaW5nOiA1cHggMTBweFxuICBib3JkZXItcmFkaXVzOiA0cHhcbiAgY3Vyc29yOiBwb2ludGVyXG4gIGN1cnNvcjogaGFuZFxuICBmb250LWZhbWlseTogQXJpYWxcbmJ1dHRvbjpob3ZlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjXG5idXR0b24uZGVsZXRlXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxuICBsZWZ0OiAxOTRweFxuICB0b3A6IC0zMnB4XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudFxuICBjb2xvcjogd2hpdGUiLCIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlcm9lLWFkZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5oZXJvZXMge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbn1cbi5oZXJvZXMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBsZWZ0OiAwLjFlbTtcbn1cbi5oZXJvZXMgYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5oZXJvZXMgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuLmhlcm9lcyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWluLXdpZHRoOiAxNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxuYnV0dG9uLmRlbGV0ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTk0cHg7XG4gIHRvcDogLTMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4vKiMgc291cmNlTWFwcGluZ1VSTD1zcmMvYXBwL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LmNzcy5tYXAgKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-heroes',
                templateUrl: './heroes.component.html',
                styleUrls: ['./heroes.component.styl']
            }]
    }], function () { return [{ type: _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InMemoryDataService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes };
    }
    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes) {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) { return new (t || InMemoryDataService)(); };
InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryDataService, factory: InMemoryDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function MessagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r15, " ");
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%] {\n  display: inline-block;\n}\nbutton.clear[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 1em;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton.clear[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton.clear[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n/*# sourceMappingURL=src/app/messages/messages.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvc3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc3R5bCIsInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBUztBQ0NYO0FEQUE7RUFDRSxpQkFBYTtFQUNiLGNBQVc7RUFDWCxrQkFBYTtFQUNiLHNCQUFrQjtFQUNsQixZQUFRO0VBQ1IsaUJBQVM7RUFDVCxrQkFBZTtFQUNmLGVBQVE7RUFDUixZQUFRO0FDRVY7QURERTtFQUNFLHlCQUFrQjtBQ0d0QjtBREZFO0VBQ0Usc0JBQWtCO0VBQ2xCLFdBQU87RUFDUCxZQUFRO0FDSVo7QUFDQSxrRUFBa0UiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbImgyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuYnV0dG9uLmNsZWFyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4XG4gIGZvbnQtc2l6ZTogMWVtXG4gIGZvbnQtZmFtaWx5OiBBcmlhbFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlXG4gIGJvcmRlcjogbm9uZVxuICBwYWRkaW5nOiA1cHggMTBweFxuICBib3JkZXItcmFkaXVzOiA0cHhcbiAgY3Vyc29yOiBwb2ludGVyXG4gIGN1cnNvcjogaGFuZFxuICAmOmhvdmVyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkY1xuICAmOmRpc2FibGVkXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZVxuICAgIGNvbG9yOiAjY2NjXG4gICAgY3Vyc29yOiBhdXRvIiwiaDIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5idXR0b24uY2xlYXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGN1cnNvcjogaGFuZDtcbn1cbmJ1dHRvbi5jbGVhcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5idXR0b24uY2xlYXI6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBhdXRvO1xufVxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzLm1hcCAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.styl']
            }]
    }], function () { return [{ type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ng-apps/ng-apps/hero-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map