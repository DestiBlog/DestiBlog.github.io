(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! exports provided: keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
var keys = {
    GOOGLE_SECRET_KEY: 'AIzaSyA3L19brZhfBlO-6HcK7obD4rG_GvnWsaU',
    aws_bucket: "enotikbucket",
    aws_id: "AKIAIQPDE5FZ2K3QVQIQ",
    aws_key: "amrbaTIOcwzVwzs2exkCYhR8tT32LltbEPNqIkqy"
};


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-me/about-me.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n\tfont-family: 'Alex Brush';\n\tmargin-top: 5px;\n}\n\n.divider{\n\twidth: 200px;\n\theight: 1px;\n\tbackground-color: #616161;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 20px;\n\tmargin-bottom: 10px;\n}\n\n.footer{\n\tposition: fixed;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 75px;\n\tz-index: 10;\n}"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-me/about-me.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer orange lighten-5\">\n\t<div class=\"divider\"></div>\n\t<h3 class=\"center\">\tAbout Me</h3>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col s12 m6 l6\">\n\t\t<div class=\"container\" [@popupAnim2]>\n\t\t\t<img src=\"assets/about me.png\" class=\"responsive-img\" style=\"margin-top: 10%;\">\n\t\t</div>\n\t</div>\n\t<div class=\"col s12 m6 l6\">\n\t\t<div class=\"container hide-on-small-only\" style=\"font-family: 'calibri';font-size: 18px;margin-left:0px !important;\" [@popupAnim]>\n\t\t\t<h4 style=\"font-size: 48px;font-weight: bold;\">Hallo!</h4>\n\t\t\t<p><span style=\"font-size: 26px;font-weight: bold;\">Aku Desti</span>, salam kenal 😊 Orang bilang aku adalah orang yang ramah, baik dan ceria. Aku bilang, aku itu orang yang ambisius, berangan tinggi, dan kreatif. Biasanya aku mengisi waktu luang dengan pergi ke pantai, dan salah satu kegiatan favorit aku yaitu melihat sunset. Aku juga suka travelling !\n\t \t\t</p>\n\t \t\t<p>Aku tinggal di Bali sekarang, sebelumnya aku juga pernah tinggal di Amerika selatan dan juga New Zealand.</p>\n\t \t\t<p>Blog aku ini isinya pengalaman pribadi dan opini yang aku kembangkan. Semoga pengalaman dan opiniku bisa membantu teman sekalian. </p>\n\t \t\t<p>Aku percaya sama slogan “tak kenal maka tak sayang” , ayo SUBSCRIBE untuk kenal lebih dalam lagi dan saling berbagi informasi!</p>\n\t \t\t<p>Enjoy reading my Blog!</p>\n\t \t</div>\n\t \t<div class=\"container hide-on-med-and-up\" style=\"font-family: 'calibri';font-size: 18px;\" [@popupAnim]>\n\t\t\t<h4 style=\"font-size: 48px;font-weight: bold;\">Hallo!</h4>\n\t\t\t<p><span style=\"font-size: 26px;font-weight: bold;\">Aku Desti</span>, salam kenal 😊 Orang bilang aku adalah orang yang ramah, baik dan ceria. Aku bilang, aku itu orang yang ambisius, berangan tinggi, dan kreatif. Biasanya aku mengisi waktu luang dengan pergi ke pantai, dan salah satu kegiatan favorit aku yaitu melihat sunset. Aku juga suka travelling !\n\t \t\t</p>\n\t \t\t<p>Aku tinggal di Bali sekarang, sebelumnya aku juga pernah tinggal di Amerika selatan dan juga New Zealand.</p>\n\t \t\t<p>Blog aku ini isinya pengalaman pribadi dan opini yang aku kembangkan. Semoga pengalaman dan opiniku bisa membantu teman sekalian. </p>\n\t \t\t<p>Aku percaya sama slogan “tak kenal maka tak sayang” , ayo SUBSCRIBE untuk kenal lebih dalam lagi dan saling berbagi informasi!</p>\n\t \t\t<p>Enjoy reading my Blog!</p>\n\t \t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(edit) {
        this.edit = edit;
        this.edit.sideBarVar = 'norm';
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/app/about-me/about-me.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('popupAnim2', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s 0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('popupAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.6s 1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_edit_service__WEBPACK_IMPORTED_MODULE_2__["EditService"]])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _post_show_post_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-show/post-show.component */ "./src/app/post-show/post-show.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'posts/:id',
        component: _post_show_post_show_component__WEBPACK_IMPORTED_MODULE_5__["PostShowComponent"]
    },
    {
        path: 'gallery',
        component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"]
    },
    {
        path: 'aboutme',
        component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"]
    },
    {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
    },
    {
        path: 'service',
        component: _service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n\n  <router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/edit.service */ "./src/app/services/edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authToken, edit) {
        this.authToken = authToken;
        this.edit = edit;
        this.title = 'app';
        this.authToken.init(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].token_auth_config);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_token__WEBPACK_IMPORTED_MODULE_1__["Angular2TokenService"], _services_edit_service__WEBPACK_IMPORTED_MODULE_3__["EditService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-dialog/auth-dialog.component */ "./src/app/auth-dialog/auth-dialog.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/edit.service */ "./src/app/services/edit.service.ts");
/* harmony import */ var ng2_pica__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-pica */ "./node_modules/ng2-pica/dist/ng2-pica.js");
/* harmony import */ var _post_show_post_show_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post-show/post-show.component */ "./src/app/post-show/post-show.component.ts");
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_share_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-share/buttons */ "./node_modules/@ngx-share/buttons/esm5/ngx-share-buttons.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/app/about-me/about-me.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/service.component */ "./src/app/service/service.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
                _auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AuthDialogComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_11__["LoginFormComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _post_show_post_show_component__WEBPACK_IMPORTED_MODULE_17__["PostShowComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_21__["GalleryComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__["AboutMeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"],
                _service_service_component__WEBPACK_IMPORTED_MODULE_24__["ServiceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_2__["MaterializeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                ng2_pica__WEBPACK_IMPORTED_MODULE_16__["Ng2PicaModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_18__["FroalaViewModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientJsonpModule"],
                _ngx_share_buttons__WEBPACK_IMPORTED_MODULE_20__["ShareButtonsModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"]
            ],
            providers: [angular2_token__WEBPACK_IMPORTED_MODULE_7__["Angular2TokenService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], _services_edit_service__WEBPACK_IMPORTED_MODULE_15__["EditService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-dialog/auth-dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/auth-dialog/auth-dialog.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth-dialog/auth-dialog.component.html":
/*!********************************************************!*\
  !*** ./src/app/auth-dialog/auth-dialog.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" materialize=\"modal\" [materializeActions]=\"modalActions\">\n\n\n  <div class=\"modal-content\">\n\n    <div class=\"row\">\n\n      <div class=\"row\">\n\n        <span class=\"modal-close right\">\n          <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </span>\n      </div>\n\n      <div class=\"row\">\n        <h3 class=\"grey-text text-darken-2\">{{authMode}}</h3>\n\n        <app-login-form (onFormResult)=\"onLoginFormResult($event)\"\n                        *ngIf=\"isLoginMode()\">\n\n        </app-login-form>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/auth-dialog/auth-dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/auth-dialog/auth-dialog.component.ts ***!
  \******************************************************/
/*! exports provided: AuthDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDialogComponent", function() { return AuthDialogComponent; });
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

var AuthDialogComponent = /** @class */ (function () {
    function AuthDialogComponent() {
        this.authMode = 'login';
        this.modalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthDialogComponent.prototype.onLoginFormResult = function (e) {
        if (e.signedIn)
            this.closeDialog();
        else {
            alert(e.err.json().errors[0]);
        }
    };
    AuthDialogComponent.prototype.onRegisterFormResult = function (e) {
        if (e.signedUp)
            this.closeDialog();
        else {
            alert(e.err.json().errors.full_messages[0]);
        }
    };
    AuthDialogComponent.prototype.openDialog = function (mode) {
        if (mode === void 0) { mode = 'login'; }
        this.authMode = mode;
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    AuthDialogComponent.prototype.closeDialog = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    AuthDialogComponent.prototype.ngOnInit = function () {
    };
    AuthDialogComponent.prototype.isLoginMode = function () { return this.authMode == 'login'; };
    AuthDialogComponent.prototype.isRegisterMode = function () { return this.authMode == 'register'; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('auth-mode'),
        __metadata("design:type", String)
    ], AuthDialogComponent.prototype, "authMode", void 0);
    AuthDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth-dialog',
            template: __webpack_require__(/*! ./auth-dialog.component.html */ "./src/app/auth-dialog/auth-dialog.component.html"),
            styles: [__webpack_require__(/*! ./auth-dialog.component.css */ "./src/app/auth-dialog/auth-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthDialogComponent);
    return AuthDialogComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n\tfont-family: 'Alex Brush';\n\tmargin-top: 5px;\n}\n\n.divider{\n\twidth: 200px;\n\theight: 1px;\n\tbackground-color: #616161;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 20px;\n\tmargin-bottom: 10px;\n}\n\n.footer{\n\tposition: fixed;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 75px;\n\tz-index: 10;\n}\n\nh6{\n\tfont-size: 20px;\n\n}\n\n#sotial{\n\ttext-align: center;\n}\n\n#sotial li{\n\tdisplay: inline;\n}\n\n#sotial li img{\n\theight: 50px;\n\twidth: auto;\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer orange lighten-5\">\n\t<div class=\"divider\"></div>\n\t<h3 class=\"center\">\tContacts</h3>\n</div>\n\n<div class=\"container\" style=\"margin-top: 30px;font-family: 'Josefin Sans', sans-serif;\">\n\t<h5 class=\"center\">Terima Kasih sudah mengunjungi Blog ini!</h5>\n\t<h5 class=\"center\">Kamu punya pertanyaan? Kritik dan saran atau request tulisan? </h5>\n\t<div class=\"row\" style=\"margin-top: 20%;\">\n\t\t<div class=\"col s12 m6 l6\">\n\t\t\t<h6>Alamat E-mail   : theonlydestiaryani@gmail.com</h6><br>\n\t\t\t<h6>Alamat Kantor   : Jl. Goa gong ,Ungasan, Kuta selatan,\n\n                           80361, Bali, Indonesia</h6>\n\t\t</div>\n\t\t<div class=\"col s12 m6 l6\">\n\t\t\t<ul id=\"sotial\">\n\t\t      <li>\n\t\t        <a href=\"https://www.facebook.com/dhea.chayankmu\"><img src=\"assets/facebook.png\"></a>\n\t\t      </li>\n\t\t      <li>\n\t\t        <a href=\"https://www.instagram.com/desti_aryni/\"><img src=\"assets/instagram.png\"></a>\n\t\t      </li>\n\t\t      <li>\n\t\t        <a href=\"https://id.pinterest.com/dheachayankmu/\"><img src=\"assets/pinterest.png\"></a>\n\t\t      </li>\n\t\t    </ul>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(edit) {
        this.edit = edit;
        this.edit.sideBarVar = 'norm';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_edit_service__WEBPACK_IMPORTED_MODULE_1__["EditService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n\tfont-family: 'Alex Brush';\n\tmargin-top: 5px;\n}\n\n.divider{\n\twidth: 200px;\n\theight: 1px;\n\tbackground-color: #616161;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 20px;\n\tmargin-bottom: 10px;\n}\n\n.footer{\n\tposition: fixed;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 75px;\n\tz-index: 10;\n}\n\n.helper {\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n}\n\n.card2{\n\twhite-space: nowrap; /* this is required unless you put the helper span closely near the img */\n    \n    text-align: center; \n    overflow-y: hidden;\n    height: 200px;\n    /*margin: 1em 0;*/\n}\n\n.card{\n\theight: 200px;\n}\n\n.card-image{\n\tbackground: #3A6F9A;\n    vertical-align: middle;\n    display: inline-block;\n    /*max-height: 25px;\n    max-width: 160px;*/\n}\n\n.upBtn{\n\tposition: fixed;\n\tbottom: 20px;\n\tright: 20px;\n\tz-index: 20;\n\tborder: 2px solid #e57373;\n\twidth: 50px;\n\theight: 50px;\n\tborder-radius: 50%;\n\ttext-align: center;\n}\n\n.upBtn i{\n\tmargin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer orange lighten-5\">\n\t<div class=\"divider\"></div>\n\t<h3 class=\"center\">Gallery</h3>\n</div>\n\n<div class=\"container\" style=\"margin-top: 50px;\" [@listAnimation]=\"edit.galleryVideos.length+edit.galleryImgs.length\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12 m4 l4 \" *ngFor=\"let img of edit.galleryVideos; let idx = index;\" >\n\t\t\t<div class=\"card grey darken-3 hoverable pic\">\n\t\t\t\t\t<video style=\"width: 100%; height: 100%;\">\n\t\t\t\t\t  <source [src]=\"img\" type=\"video/mp4\">\n\t\t\t\t\tYour browser does not support the video tag.\n\t\t\t\t\t</video>\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col s12 m4 l4 \" *ngFor=\"let img of edit.galleryImgs; let idx = index;\" >\n\t\t\t<div class=\"card grey darken-3 hoverable card2 pic\">\n\t\t\t\t<span class=\"helper\"></span><div class=\"card-image\" >\n\t\t\t\t\t\n\t\t\t\t\t<img [src]=\"img\" materialize=\"materialbox\" class=\"materialboxed\" [id]=\"'img'+idx\">\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!-- <div *ngIf=\"inx\" style=\"position: fixed;width: 100%;height: 100%;z-index: 9999;top:0px;left:0px;\" (click)=\"bla(idx)\"></div> -->\n\n<a class=\"waves-effect waves-light orange lighten-5 upBtn\" *ngIf=\"fixed\" [@popupAnim] (click)=\"goUp()\"><i class=\"material-icons\" style=\"color: #e57373 !important;\">arrow_upward</i></a>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(edit) {
        this.edit = edit;
        this.scrollPos = 0;
        this.Counter = 0;
        this.fixed = false;
        this.edit.sideBarVar = 'norm';
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('video').mouseenter(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('controls', "");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__('video').mouseleave(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__(this).removeAttr('controls');
            });
        });
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent.prototype.onWindowScroll = function () {
        var offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset > this.scrollPos) {
            this.Counter += 1;
        }
        else {
            this.Counter -= 1;
        }
        this.scrollPos = offset;
        if (this.scrollPos > 500) {
            this.fixed = true;
        }
        else {
            this.fixed = false;
        }
    };
    GalleryComponent.prototype.goUp = function () {
        window.scrollTo(0, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GalleryComponent.prototype, "onWindowScroll", null);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'scale(0.0)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: .5, transform: 'scale(0.5)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'scale(1.0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('popupAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(100%)', opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_edit_service__WEBPACK_IMPORTED_MODULE_1__["EditService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authTokenService, router) {
        this.authTokenService = authTokenService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authTokenService.userSignedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angular2_token__WEBPACK_IMPORTED_MODULE_2__["Angular2TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n\tfont-family: 'Alex Brush';\n\tmargin-top: 60px;\n\tmargin-bottom: 60px;\n}\n\n#carousel{\n\twidth: 100vw !important;\n  \theight: 50vw !important;\n  \t/*position:absolute;\n\t  left:0;\n\t  top:0;\n\t  right:0;\n\t  bottom:0;*/\n  \t/*width: 100%;\n\tpadding-bottom:56.25%;\n  \tposition:relative;\t*/\t\n}\n\n.image_carousel{\n\twidth: 100% !important;\n  \theight: 100% !important;\n  \tmin-height: 0px !important;\n  \tposition: absolute;\n  \ttop: 0px;\n  \tleft:0px;\n  \tright: 0px;\n  \tbottom: 0px;\n  \t-webkit-transform: none !important;\n  \t        transform: none !important; \n}\n\n#slider{\n\twidth: 100vw !important;\n  \theight: 55vw !important;\n\t/*width: 100%;\n\tpadding-bottom:50%;\n  \tposition:relative;\t*/\n}\n\n.img_slider{\n\tbackground-size: 100% 100% !important;\n}\n\n.divider{\n\tmargin-top: 30px;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\theight: 3px;\n\tbackground-color: #616161;\n}\n\n.category{\n\tfont-family: 'tahoma';\n\tmargin-top: 20px;\n\tmargin-bottom: -10px;\n\t/*font-weight: bold;*/\n\tcolor: #bdbdbd;\n}\n\n.imgDiv{\n\twidth: 100%;\n\tpadding-bottom: 56.25%;\n  \tposition:relative;\n}\n\n.imgDiv img{\n\tposition:absolute;\n\t  left:0;\n\t  top:0;\n\t  right:0;\n\t  bottom:0;\n\twidth: 100%;\n\theight: 100%;\n}\n\n#sotial{\n\ttext-align: center;\n}\n\n#sotial li{\n\tdisplay: inline;\n}\n\n#sotial li img{\n\theight: 50px;\n\twidth: auto;\n}\n\n.wow:hover{\n\tbackground-color: #f48fb1 !important;\n}\n\n.hexagon {\n  -webkit-clip-path: polygon(100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0, 75% 0);\n  clip-path: polygon(100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0, 75% 0);\n  background: no-repeat;\n  background-size: cover;\n  margin: 10px auto;\n  width: 100%;\n  height: 80%;\n  position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n\n.cont{\n\twidth: 100%;\n    padding-top: 100%;\n    position:relative;\n    transition: all .2s ease-in-out;\n\n}\n\n.cont:hover{\n\t-webkit-transform: scale(1.1);\n\t        transform: scale(1.1);\n}\n\n.truncate2{\n  padding-top: 15px;\n  display: block; /* Fallback for non-webkit */\n  display: -webkit-box;\n  max-width: 400px;\n  height: 55px; /* Fallback for non-webkit */\n  margin: 0 auto;\n  font-size: 20px;\n  line-height: 1;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  padding-left: 5px;\n}\n\n.category2{\n\tmargin-top: 0px;\n\tfont-family: 'tahoma';\n\t/*font-weight: bold;*/\n\tcolor: #bdbdbd;\n\ttext-align: left;\n\tpadding-left: 5px;\n}\n\n.divider2{\n\tmargin-bottom: 15px;\n\tcolor: #bdbdbd;\n\twidth: 80%;\n\tfont-weight: bold;\n\toverflow: hidden;\n\tmargin-right: auto;\n\tmargin-left: auto;\n\tfont-size: 20px;\n\theight: 25px;\n}\n\n.divider3{\n\tposition: relative;\n\ttop: -9px;\n\tmargin-bottom: 15px;\n\twidth: 80%;\n\tfont-weight: bold;\n\toverflow: hidden;\n\tmargin-right: auto;\n\tmargin-left: auto;\n\tfont-size: 20px;\n\theight: 25px;\n}\n\n/*.circle-img{\n  background: url(/assets/desti.jpg) 50% 50% no-repeat; \n  width: 100%;\n  height: 250px;\n}*/"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\n<h1 class=\"center\" style=\"padding-left:10px;padding-right: 10px;\">Desti Aryani</h1>\n\n<div id=\"carousel\" class=\"carousel carousel-slider hide-on-med-and-up\"  materialize=\"carousel\"  [materializeParams]=\"[{full_width: true, indicators:true}]\">\n        <a *ngFor=\"let img of edit.urls\" class=\"carousel-item image_carousel\"><img [src]=\"img\" class=\"image_carousel\"></a>\n</div>\n\n\n<div class=\"slider hide-on-small-only\" materialize='slider' id=\"slider\" [materializeActions]=\"edit.homeSlider\">\n  <ul class=\"slides\" id=\"carousel\">\n    <li *ngFor=\"let img of edit.urls\">\n      <img [src]=\"img\" class=\"img_slider\"> \n      <!-- <div class=\"caption center-align\">\n        <h3>This is our big Tagline!</h3>\n        <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n      </div> -->\n    </li>\n    <!-- <li>\n      <img src=\"https://lorempixel.com/580/250/nature/2\"> random image\n      <div class=\"caption left-align\">\n        <h3>Left Aligned Caption</h3>\n        <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n      </div>\n    </li>\n    <li>\n      <img src=\"https://lorempixel.com/580/250/nature/3\"> \n      <div class=\"caption right-align\">\n        <h3>Right Aligned Caption</h3>\n        <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n      </div>\n    </li>\n    <li>\n      <img src=\"https://lorempixel.com/580/250/nature/4\"> \n      <div class=\"caption center-align\">\n        <h3>This is our big Tagline!</h3>\n        <h5 class=\"light grey-text text-lighten-3\">Here's our small slogan.</h5>\n      </div>\n    </li>  -->\n  </ul>\n</div>\n\n<div class=\"row\">\n\n<!-- !!!!!!!!!!!!!!!!!!!HOME PAGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->\n\n  <div class=\"col s12 m10 l10 topPos\" *ngIf=\"!edit.catsItem\" >\n    <ng-container *ngFor=\"let post of edit.posts; let idx = index\">\n      <div *ngIf=\"idx<2\">\n        <div class=\"container\" style=\"text-align: center;\" >\n          <div class=\"divider\"></div>\n          <div class=\"category center\">{{post.category}}/{{post.created_at | date: 'dd.MM.yyyy'}}</div>\n          <h4 class=\"center flow-text\" style=\"margin-bottom: -5px;font-weight: bold;\"><a (click)=\"goToShow(post.id)\" style=\"color:#616161;font-family: 'Roboto', sans-serif;\">{{post.title}}</a></h4>\n          <div class=\"divider2\">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>\n          <div class=\"imgDiv\"><img [src]=\"post.images[0][0]\"></div>\n          <div [froalaView]=\"post.text\" style=\"overflow: hidden;height: 100px;\"></div>\n          <a *ngIf=\"main\" [@popupAnim] (click)=\"goToShow(post.id)\" class=\"waves-effect waves-light btn-floating pink lighten-4 grey-text text-darken-2 z-depth-0 wow pulse\" style=\"margin: 20px auto 20px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 150px;padding-right: 10px;padding-left: 10px;\">READ MORE</a>\n        </div>\n        <div class=\"center\">\n          <share-buttons class=\"share_btn\" [theme]=\"'outline'\"\n             [include]=\"['facebook','twitter','pinterest','whatsapp','messenger','telegram','vk','email','copy']\"\n             [show]=\"10\"\n             [size]=\"-3\"\n            ></share-buttons>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!CATEGORY PAGE!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->\n\n  <div class=\"col s12 m10 l10 topPos\" *ngIf=\"edit.catsItem\">\n    <ng-container *ngFor=\"let post of edit.catsItem; let idx = index\" >\n      <div *ngIf=\"edit.catsItem\">\n        <div class=\"container\" style=\"text-align: center;\" >\n          <div class=\"divider\"></div>\n          <div class=\"category center\">{{post.category}}/{{post.created_at | date: 'dd.MM.yyyy'}}</div>\n          <h4 class=\"center\" style=\"margin-bottom: -5px;font-weight: bold;\"><a (click)=\"goToShow(post.id)\" style=\"color:#616161;font-family: 'Roboto', sans-serif;\">{{post.title}}</a></h4>\n          <div class=\"divider2\">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>\n          <div class=\"imgDiv\"><img [src]=\"post.images[0][0]\"></div>\n          <div [froalaView]=\"post.text\" style=\"overflow: hidden;height: 100px;\"></div>\n          <a *ngIf=\"main\" [@popupAnim] (click)=\"goToShow(post.id)\" class=\"waves-effect waves-light btn-floating pink lighten-4 grey-text text-darken-2 z-depth-0 wow pulse\" style=\"margin: 20px auto 20px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 150px;padding-right: 10px;padding-left: 10px;\">READ MORE</a>\n        </div>\n        <div class=\"center\">\n          <share-buttons class=\"share_btn\" [theme]=\"'outline'\"\n             [include]=\"['facebook','twitter','pinterest','whatsapp','messenger','telegram','vk','email','copy']\"\n             [show]=\"10\"\n             [size]=\"-3\"\n            ></share-buttons>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n\n<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!SIDE MENU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->\n\n  <div class=\"col s12 m2 l2\" style=\"text-align: center;\">\n    <a [routerLink]=\"['/aboutme']\" class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2 imgPos\" style=\"margin: 20px auto 40px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">ABOUT ME</a>\n    <!-- <div class=\"circle-img\" *ngIf=\"side\" [@popupAnim]></div> -->\n      <img src=\"assets/desti.jpg\" class=\"circle\" style=\"width: 100%;\" *ngIf=\"side\" [@popupAnim] >\n    <p style=\"width: 100%;font-family: 'Alex Brush';color: #616161;font-size: 20px;\">Born and raised in a loving home in Java. Brown-skinned girl who dream to make a way around the world. Falls perfectly in Love with Travel, design and self improvement.</p>\n    <ul id=\"sotial\">\n      <li>\n        <a href=\"https://www.facebook.com/dhea.chayankmu\"><img src=\"assets/facebook.png\"></a>\n      </li>\n      <li>\n        <a href=\"https://www.instagram.com/desti_aryni/\"><img src=\"assets/instagram.png\"></a>\n      </li>\n      <li>\n        <a href=\"https://id.pinterest.com/dheachayankmu/\"><img src=\"assets/pinterest.png\"></a>\n      </li>\n    </ul>\n    <a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2 hide-on-small-only\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">CATEGORIES</a>\n    <a *ngFor=\"let cat of edit.cats\" (click)=\"catShow(cat.category)\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow hide-on-small-only\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">{{cat.category}}</a>\n    <a (click)=\"edit.catsItem=null\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow hide-on-small-only\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">ALL</a>\n    <a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2 postsPos\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">RECENT POSTS</a>\n    <div [@listAnimation]=\"posts.length\">\n    <div class=\"row\" *ngFor=\"let post of posts; let idx = index\"  style=\"margin-bottom: 5px;\">\n      <ng-container *ngIf=\"idx<4\">\n      <div class=\"divider3\" *ngIf=\"idx != 0\">_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>\n      <a (click)=\"goToShow(post.id)\">\n      <div class=\"col s5\" style=\"padding: 0px;\">\n        <div class=\"cont\" >\n          <div class=\"hexagon\" [ngStyle]=\"{'background-image': 'url(' + post.images[0][0] + ')'}\"></div>\n        </div>\n      </div>\n      <div class=\"col s7\" style=\"padding: 0px;\">\n        <div class=\"truncate2\" style=\"font-weight:bold;color:#616161;line-height: 1;\">{{post.title}}</div>\n        <p class=\"category2\">{{post.category}}</p>\n      </div>\n      </a>\n   </ng-container>\n    </div>\n  </div>\n    <a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\"></a>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-share/core */ "./node_modules/@ngx-share/core/esm5/ngx-share-core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(edit, router, share) {
        this.edit = edit;
        this.router = router;
        this.share = share;
        this.scrollPos = 0;
        this.Counter = 0;
        this.main = false;
        this.side = false;
        this.posts = [];
        this.edit.sideBarVar = 'home';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.goToShow = function (id) {
        var postLink = ['/posts', id];
        this.router.navigate(postLink);
    };
    HomeComponent.prototype.catShow = function (value) {
        this.edit.catsItem = this.edit.posts.filter(function (item) { return item.category.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    HomeComponent.prototype.onWindowScroll = function () {
        var offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset > this.scrollPos) {
            this.Counter += 1;
        }
        else {
            this.Counter -= 1;
        }
        this.scrollPos = offset;
        // console.log(this.scrollPos)
        if (this.scrollPos > jquery__WEBPACK_IMPORTED_MODULE_3__('.topPos').offset().top) {
            this.main = true;
        }
        else {
            this.main = false;
        }
        if (this.scrollPos > jquery__WEBPACK_IMPORTED_MODULE_3__('.postsPos').offset().top - 500) {
            this.posts = this.edit.posts;
        }
        else {
            this.posts = [];
        }
        if (this.scrollPos > jquery__WEBPACK_IMPORTED_MODULE_3__('.imgPos').offset().top - 500) {
            this.side = true;
        }
        else {
            this.side = false;
        }
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        var a = document.getElementsByClassName('sb-group');
        for (var i = 0; i < a.length; i += 1) {
            a[i].style.display = "block";
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('popupAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(0.0)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'scale(1.0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('00ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(-100%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('popupAnim2', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('popupAnim3', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('400ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["stagger"])('300ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_edit_service__WEBPACK_IMPORTED_MODULE_1__["EditService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_share_core__WEBPACK_IMPORTED_MODULE_4__["ShareButtons"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSignInSubmit()\" #f=\"ngForm\" >\n\n\n  <div class=\"row\">\n\n    <div class=\"input-field col s12\">\n      <input id=\"email\"\n             type=\"email\"\n             required\n             name='email' \n             [(ngModel)]=\"signInUser.email\" \n             class=\"validate\">\n      \n      <label for=\"email\">Email</label>\n    </div>\n\n\n    <div class=\"input-field col s12\">\n      <input id=\"password\" \n             type=\"password\" \n             required  \n             name='password' \n             [(ngModel)]=\"signInUser.password\" \n             class=\"validate\">\n      \n      <label for=\"password\">Password</label>\n    </div>\n\n    <div class=\"col s12 \">\n      <button type=\"submit\" \n              [disabled]=\"!(f.valid)\" \n              [ngClass]=\"{'disabled': !(f.valid)}\" \n              class=\"waves-effect waves-light btn blue right\"\n      > \n        Login </button>\n    </div>\n\n\n  </div>\n\n</form>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService) {
        this.authService = authService;
        this.signInUser = {
            email: '',
            password: ''
        };
        this.onFormResult = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginFormComponent.prototype.ngOnInit = function () { };
    LoginFormComponent.prototype.onSignInSubmit = function () {
        var _this = this;
        this.authService.logInUser(this.signInUser).subscribe(function (res) {
            if (res.status == 200) {
                _this.onFormResult.emit({ signedIn: true, res: res });
            }
        }, function (err) {
            console.log('err:', err);
            _this.onFormResult.emit({ signedIn: false, err: err });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "onFormResult", void 0);
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/objects/comment.ts":
/*!************************************!*\
  !*** ./src/app/objects/comment.ts ***!
  \************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment(id, text, post_id, user_id, user_name, user_email, created_at) {
        this.id = id;
        this.text = text;
        this.post_id = post_id;
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_email = user_email;
        this.created_at = created_at;
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/objects/post.ts":
/*!*********************************!*\
  !*** ./src/app/objects/post.ts ***!
  \*********************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(id, title, style, images, text, count, category, created_at) {
        this.id = id;
        this.title = title;
        this.style = style;
        this.images = images;
        this.text = text;
        this.count = count;
        this.category = category;
        this.created_at = created_at;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/objects/user.ts":
/*!*********************************!*\
  !*** ./src/app/objects/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, name, email, subscribed) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.subscribed = subscribed;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/post-show/post-show.component.css":
/*!***************************************************!*\
  !*** ./src/app/post-show/post-show.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a:hover{ \n\tcursor: pointer;\n\n}\n\n\n#carousel2{\n\t/*width: 100%;\n\tpadding-bottom: 56.25%;\n  \tposition:relative;*/\n  \twidth: 58vw !important;\n  \theight: 32.63vw !important;\n\n}\n\n\n#slider2{\n\twidth: 58vw !important;\n  \theight: 37vw !important;\n}\n\n\n.slider_img{\n\t/*position:absolute;\n\t  left:0;\n\t  top:0;\n\t  right:0;\n\t  bottom:0;*/\n\tbackground-size: 100% 100% !important;\n}\n\n\n.category{\n\tfont-family: 'tahoma';\n\tfont-weight: bold;\n\tcolor: #bdbdbd;\n}\n\n\n/*.slider .slides li .caption{\n\ttop:85% !important;\n\twidth: 100% !important;\n\tleft: 0% !important;\n\ttext-align: right !important;\n\tpadding: 10px !important;\n\ttext-shadow: 2px 2px #9e9e9e;\n}*/\n\n\n.imgCaption{\n\tposition: absolute;\n\tbottom: 0px;\n\ttext-shadow: 2px 2px #9e9e9e;\n\tcolor: white;\n\tfont-family: 'Roboto', sans-serif;\n\twidth: 100%;\n\ttext-align: right;\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n\tline-height: 1.3;\n\tfont-size: 20px;\n\theight: 52px;\n}\n\n\n#carousel3{\n\twidth: 100vw !important;\n  \theight: 56.25vw !important;\n}\n\n\n.image_carousel{\n\twidth: 100% !important;\n  \theight: 100% !important;\n  \tmin-height: 0px !important;\n  \tposition: absolute;\n  \ttop: 0px;\n  \tleft:0px;\n  \tright: 0px;\n  \tbottom: 0px;\n  \t-webkit-transform: none !important;\n  \t        transform: none !important; \n}\n\n\n.carouselCaption{\n\tposition: absolute;\n\tbottom: 0px;\n\ttext-shadow: 2px 2px #9e9e9e;\n\tcolor: white;\n\tfont-family: 'Roboto', sans-serif;\n\twidth: 100%;\n\ttext-align: right;\n\tpadding-right: 10px;\n\tpadding-left: 10px;\n\tline-height: 1.3;\n\tfont-size: 16px;\n\theight: 41.6px;\n\tz-index: 9999;\n}\n\n\n.divider{\n\tmargin: 5px;\n\twidth: 100%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\theight: 2px;\n\tbackground-color: #616161;\n}\n\n\n.hexagon {\n  -webkit-clip-path: polygon(100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0, 75% 0);\n  clip-path: polygon(100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0, 75% 0);\n  background: no-repeat;\n  background-size: cover;\n  margin: 10px auto;\n  width: 100%;\n  height: 80%;\n  position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n\n\n.cont{\n\twidth: 100%;\n    padding-top: 100%;\n    position:relative;\n}\n\n\n.truncate2{\n  padding-top: 10px;\n  display: block; /* Fallback for non-webkit */\n  display: -webkit-box;\n  max-width: 400px;\n  height: 50px; /* Fallback for non-webkit */\n  margin: 0 auto;\n  font-size: 20px;\n  line-height: 1;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: left;\n  padding-left: 5px;\n}\n\n\n.category2{\n\tmargin-top: 0px;\n\tfont-family: 'tahoma';\n\t/*font-weight: bold;*/\n\tcolor: #bdbdbd;\n\ttext-align: left;\n\tpadding-left: 5px;\n}\n\n\n.sb-group{\n\tdisplay: inline !important;\n}\n\n\n.fixed{\n\tposition: fixed;\n\ttop: -10px;\n\tright: 1px !important;\n}\n\n\n.wow:hover{\n\tbackground-color: #f8bbd0 !important;\n}"

/***/ }),

/***/ "./src/app/post-show/post-show.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-show/post-show.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden;\">\n<div class=\"container\"><h4 class=\"center flow-text\" style=\"margin-top: 50px;margin-bottom: 50px;\">{{edit.post.title}}</h4></div>\n\n<div class=\"row\" style=\"margin-bottom: 100px;\">\n\n\t<div class=\"col s12 m9 l9\" style=\"padding: 0px;\">\n\n\n\t\t<div class=\"hide-on-med-and-up\">\n\t\t\t<div class=\"category\">{{edit.post.category}}/{{edit.post.created_at | date: 'dd.MM.yyyy'}}</div>\n\t\t\t<div #carousel id=\"carousel3\" class=\"carousel carousel-slider\" [materializeActions]=\"carus\" materialize=\"carousel\"  [materializeParams]=\"[{full_width: true, indicators:true}]\">\n\t\t\t\t    <a *ngFor=\"let img of edit.post.images\" class=\"carousel-item image_carousel\">\n\t\t\t\t    \t<img [src]=\"img[0]\" class=\"image_carousel\">\n\t\t\t\t    \t<!-- <div class=\"carouselCaption\">{{img[1]}}</div> -->\n\t\t\t\t    </a>\n\t\t\t</div>\n\t\t\t<div [froalaView]=\"edit.post.text\" style=\"padding: 5px;\"></div>\n\t\t\t<div class=\"divider\"></div>\n\t\t\t<div class=\"divider\"></div>\n\t    </div>\n\n\t\t<div class=\"container hide-on-small-only\">\n\t\t\t<div class=\"category\">{{edit.post.category}}/{{edit.post.created_at | date: 'dd.MM.yyyy'}}</div>\n\t\t\t<div #slider class=\"slider\" materialize='slider' [materializeActions]=\"action\" id='slider2'>\n\t\t\t    <ul class=\"slides\" id=\"carousel2\">\n\t\t\t      <li *ngFor=\"let img of edit.post.images\" >\n\t\t\t        \t<img [src]=\"img[0]\" class=\"slider_img\">\n\t\t\t        \t<div class=\"imgCaption\">{{img[1]}}</div>\n\t\t\t        <!-- <div class=\"caption right\">\n\t\t\t          <h5 class=\"light grey-text text-lighten-3\">{{img[1]}}</h5>\n\t\t\t        </div> -->\n\t\t\t      </li>\n\t\t\t    </ul>\n\t\t\t</div>\n\t\t\t<div [froalaView]=\"edit.post.text\"></div>\n\t\t\t<div class=\"divider\"></div>\n\t\t\t<div class=\"divider\"></div>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\t\t\t\t<H5 id=\"comments\">Comments:</H5>\n\t\t\t\t<div *ngFor=\"let comment of comments\">\n\t\t\t\t\t\t{{comment.created_at | date: 'dd/MM/yyyy hh:mm'}} <b>{{comment.user_name}}</b> said: <a (click)=\"deleteComment(comment.id,comment.post_id)\" class=\"right\" style=\"margin-right: 30px;\" *ngIf=\"(edit.user.id && edit.user.id == comment.user_id) || (auth.userSignedIn())\"><i class=\"material-icons black-text\">delete</i></a>\n\t\t\t\t\t\t<div style=\"padding-bottom:20px;padding-top: 5px;color: #616161;\">{{comment.text}}</div>\n\t\t\t\t</div>\n\t\t\t\t\t\n\n\n\t\t\t\t<form (ngSubmit)=\"add_com(comment);comForm.reset();\" #comForm='ngForm'>\n\t\t\t\t\t<blockquote *ngIf=\"!edit.user.id\" style=\"color: #ee6e73;\">Subscribe before put the comment, unsubscribed users can not delete their comments!</blockquote>\n\t\t\t\t\t<div class=\"switch\" *ngIf=\"edit.user.id\">\n\t\t\t\t\t    <label>\n\t\t\t\t\t      Leave comment as {{edit.user.name}}\n\t\t\t\t\t      <input type=\"checkbox\" name=\"news\" [(ngModel)]='news'>\n\t\t\t\t\t      <span class=\"lever\"></span>\n\t\t\t\t\t      Leave comment under another name\n\t\t\t\t\t    </label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"input-field col s12\" *ngIf=\"!edit.user.id || news\">\n\t\t\t\t\t\t<input type=\"text\" name=\"name\"\n\t\t\t\t\t\tid=\"name\" class=\"validate\"\n\t\t\t\t\t\t[(ngModel)]='comment.user_name'\n\t\t\t\t\t\trequired>\n\t\t\t\t\t\t<label for=\"name\" data-error=\"name is required\" data-success=\"Everithing is ok now\" class=\"active\">name</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<textarea class=\"materialize-textarea validate\"\n\t\t\t\t\t\t\tname=\"text\" #text='ngModel'[(ngModel)]='comment.text' required>\n\t\t\t\t\t\t</textarea>\n\t\t\t\t\t</div><br>\n\t\t\t\t\t<button type=\"submit\" class=\"waves-effect waves-light btn-floating pink lighten-4 grey-text text-darken-2 z-depth-0 wow\" style=\"margin: 20px auto 20px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 150px;padding: 0px 10px 20px 10px;\" [disabled]=\"!comForm.form.valid\">Sounds good</button>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t<div class=\"center hide-on-med-and-up\" *ngIf=\"auth.userSignedIn()\">\n\t\t        <a (click)=\"deletePost(edit.post.id)\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;\"><i class=\"material-icons black-text\">delete</i></a>\n\t\t\t\t<a (click)=\"bla()\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;\"><i class=\"material-icons black-text\">edit</i></a>\n\t\t\t</div>\n\t\t\t<div class=\"hide-on-med-and-up container\">\n\t\t\t\t<a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;padding-left: 10px;padding-right: 10px;\">SIMILAR POSTS</a>\n\t\t\t\t<div style=\"overflow-y: scroll;overflow-x: hidden;height: 45vh;width: 90vw;\">\n\t\t\t\t    <div class=\"row\" *ngFor=\"let post of edit.samePosts(edit.post.category); let idx = index\" style=\"margin-bottom: 5px;\">\n\t\t\t\t      <div *ngIf=\"idx != 0\" style=\"position: relative; top: -9px;text-align: center;\">_ _ _ _ _ _ _ _ _ _ _ _ _</div>\n\t\t\t\t      <a (click)=\"goToShow(post.id)\">\n\t\t\t\t      <div class=\"col s5\" style=\"padding: 0px;\">\n\t\t\t\t        <div class=\"cont\">\n\t\t\t\t          <div class=\"hexagon\" [ngStyle]=\"{'background-image': 'url(' + post.images[0][0] + ')'}\"></div>\n\t\t\t\t        </div>\n\t\t\t\t      </div>\n\t\t\t\t      <div class=\"col s7\" style=\"padding: 0px;\">\n\t\t\t\t        <div class=\"truncate2\" style=\"font-weight:bold;color:#616161;line-height: 1;\">{{post.title}}</div>\n\t\t\t\t        <p class=\"category2\">{{post.category}}</p>\n\t\t\t\t      </div>\n\t\t\t\t      </a>\n\t\t\t\t    </div>\n\t\t\t\t</div>\n\t\t\t\t<a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\"></a>\n\t\t\t</div>\n\t</div>\n\n<!--!!!!!!!!!!!!!!!!!!!!!!!!!!!!SIDE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  -->\n\n\t<div class=\"col m3 l3 hide-on-small-only\" [class.fixed]=\"fixed\">\n\t\t<a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;padding-left: 10px;padding-right: 10px;\">SIMILAR POSTS</a>\n\t\t<div style=\"overflow-y: scroll;overflow-x: hidden;height: 45vh;width: 25vw;\">\n\t\t    <div class=\"row\" *ngFor=\"let post of edit.samePosts(edit.post.category); let idx = index\" style=\"margin-bottom: 5px;\">\n\t\t      <ng-container >\n\t\t      <div *ngIf=\"idx != 0\" style=\"position: relative; top: -9px;text-align: center;\">_ _ _ _ _ _ _ _ _ _ _ _ _</div>\n\t\t      <a (click)=\"goToShow(post.id)\">\n\t\t      <div class=\"col s5\" style=\"padding: 0px;\">\n\t\t        <div class=\"cont\">\n\t\t          <div class=\"hexagon\" [ngStyle]=\"{'background-image': 'url(' + post.images[0][0] + ')'}\"></div>\n\t\t        </div>\n\t\t      </div>\n\t\t      <div class=\"col s7\" style=\"padding: 0px;\">\n\t\t        <div class=\"truncate2\" style=\"font-weight:bold;color:#616161;line-height: 1;\">{{post.title}}</div>\n\t\t        <p class=\"category2\">{{post.category}}</p>\n\t\t      </div>\n\t\t      </a>\n\t\t    </ng-container>\n\t\t    </div>\n\t\t</div>\n\t    <a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">SHARE</a>\n\t    <div class=\"center\" id=\"miaw\">\n          <share-buttons class=\"share_btn\" [theme]=\"'outline'\"\n             [include]=\"['facebook','twitter','pinterest','whatsapp','messenger','telegram','vk','email','copy']\"\n             [show]=\"10\"\n             [size]=\"-3\"\n            ></share-buttons>\n        </div>\n        <div class=\"center\" *ngIf=\"auth.userSignedIn()\">\n\t        <a (click)=\"deletePost(edit.post.id)\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;\"><i class=\"material-icons black-text\">delete</i></a>\n\t\t\t<a (click)=\"bla()\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;\"><i class=\"material-icons black-text\">edit</i></a>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!EDIT SECTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->\n<ng-container *ngIf=\"pushed\">\n\t<h3 class=\"center\"> Edit post</h3>\n\t<form (ngSubmit)=\"editPost(edit.post);bla()\" #postForm='ngForm'>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<input type=\"text\" name=\"title\"\n\t\t\t\tid=\"title\" #title='ngModel' class=\"validate\"\n\t\t\t\t[(ngModel)]='edit.post.title' required>\n\t\t\t\t<label for=\"title\" data-error=\"Title is required\" data-success=\"Everithing is ok now\" class=\"active\">Title</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<input type=\"text\" name=\"category\"\n\t\t\t\tid=\"category\" #category='ngModel' class=\"validate\"\n\t\t\t\t[(ngModel)]='edit.post.category' required>\n\t\t\t\t<label for=\"category\" data-error=\"Category is required\" data-success=\"Everithing is ok now\" class=\"active\">Category</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<textarea [froalaEditor] class=\"materialize-textarea validate\" id=\"text\"\n\t\t\t\t\tname=\"text\" #text='ngModel'[(ngModel)]='edit.post.text' required>\n\t\t\t\t</textarea>\n\t\t\t\t<label for=\"text\" data-error=\"Text is required\" data-success=\"Everithing is ok now\" class=\"active\">Text</label>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"file-field input-field col s12 \">\n\t\t      <div class=\"btn\">\n\t\t        <span>File</span>\n\t\t\t\t\t<input type=\"file\" (change)=\"getFile2($event)\" multiple id=\"needreset\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"file-path-wrapper\">\n\t    \t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Image require\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf='err' class=\"err-alert\">{{err}}</div>\n\t\t\t\t<div *ngIf='sucess' class=\"sucess-alert\">well done!</div>\n\t\t\t\t<div class=\"progress\" *ngIf=\"img_upload && !err && !sucess\" id=\"puscontainer\">\n\t\t\t\t\t<div class='determinate' id='pus2' style='width: 0%'></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div *ngIf=\"edit.post.images.length > 0\" class=\"center\">\n\t\t\t<div *ngFor=\"let url of edit.post.images; let inx = index\">\n\t\t\t\t<a  (click)=\"delFromUpl2(inx)\"><img  style='width:60px;height:auto;margin:5px;' [src]=\"url[0]\" class=\"hoverable img\" align=\"middle\"></a><a (click)=\"edit_descr(inx)\"><p style=\"vertical-align: middle;\" class=\"center\">{{url[1]}}</p></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<button type=\"submit\" class=\"waves-effect waves-teal btn\" [disabled]=\"!postForm.form.valid\">Update</button>\n\t\t</div>\n\t</form>\n</ng-container>\n\n<!-- MODAL SECTION -->\n<!-- ************************************************************************* -->\n\n<div class=\"modal\" materialize=\"modal\" [materializeActions]=\"modalActions\" [materializeParams]=\"[{dismissible:false}]\">\n    <div class=\"modal-content\">\n\t    <div class=\"row\">\n\t    \t<form (ngSubmit)=\"add_descr()\" #modForm='ngForm'>\n\t    \t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input type=\"text\" name=\"descr\"\n\t\t\t\t\tid=\"descr\" class=\"validate\"\n\t\t\t\t\t[(ngModel)]='descr'\n\t\t\t\t\trequired>\n\t\t\t\t\t<label for=\"descr\" data-error=\"descr is required\" data-success=\"Everithing is ok now\" class=\"active\">descr</label>\n\t\t\t\t</div>\n\t    \t\t<button type=\"submit\" class=\"waves-effect waves-teal btn\" [disabled]=\"!modForm.form.valid\">Create</button>\n\t    \t</form>\n\t   \t</div>\n    </div>\n</div>\n\n<!-- ******************************************************************************** -->\n\n\n<!-- COMMENT SECTION\n****************************************************************************************** -->\n\n\n<!-- ****************************************************************************************** -->\n\n</div>"

/***/ }),

/***/ "./src/app/post-show/post-show.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-show/post-show.component.ts ***!
  \**************************************************/
/*! exports provided: PostShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostShowComponent", function() { return PostShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ "./config.ts");
/* harmony import */ var _objects_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/post */ "./src/app/objects/post.ts");
/* harmony import */ var _objects_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/comment */ "./src/app/objects/comment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PostShowComponent = /** @class */ (function () {
    function PostShowComponent(router, route, edit, authService, auth) {
        this.router = router;
        this.route = route;
        this.edit = edit;
        this.authService = authService;
        this.auth = auth;
        this.AWS = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
        this.pushed = false;
        this.sucess = false;
        this.img_upload = false;
        this.modalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.descr = '';
        this.inx = null;
        this.comment = new _objects_comment__WEBPACK_IMPORTED_MODULE_5__["Comment"];
        this.comments = [];
        // actions = new EventEmitter<string|MaterializeAction>();
        this.scrollPos = 0;
        this.Counter = 0;
        this.fixed = false;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.carus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PostShowComponent.prototype.theBegin = function (id) {
        var _this = this;
        this.edit.getComments(id).subscribe(function (res) { return _this.comments = res; });
    };
    PostShowComponent.prototype.random = function () {
        return Math.floor((Math.random() * this.edit.posts.length) + 1) - 1;
    };
    PostShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.edit.sideBarVar = 'show';
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.edit.getPost(id).subscribe(function (res) {
                _this.edit.post = res.json();
                // this.sliderEl.nativeElement.classList.toggle('initialized');
                jquery__WEBPACK_IMPORTED_MODULE_7__('.indicators').remove();
                _this.action.emit('slider');
                window.setTimeout(function () {
                    _this.carus.emit('carousel');
                    _this.carouselEl.nativeElement.classList.toggle('initialized');
                }, 1000);
                // this.carus.emit('carousel');
                // this.carus.emit('carousel');
            });
            _this.edit.getComments(id).subscribe(function (res) { return _this.comments = res; });
        });
        this.AWS.config.update({ region: 'ap-southeast-1', credentials: { "accessKeyId": config__WEBPACK_IMPORTED_MODULE_3__["keys"].aws_id, "secretAccessKey": config__WEBPACK_IMPORTED_MODULE_3__["keys"].aws_key } });
        window.scrollTo(0, 0);
        var timer = rxjs_Rx__WEBPACK_IMPORTED_MODULE_10__["Observable"].timer(0, 5000);
        timer.subscribe(function (t) { return _this.theBegin(_this.edit.post.id); });
    };
    PostShowComponent.prototype.deletePost = function (id) {
        var _this = this;
        var self = this;
        if (window.confirm('Desti, are you sure you want to delete this awesome post?')) {
            this.edit.deletePost(id).subscribe(function (res) {
                _this.edit.post.images.forEach(function (el) {
                    var s3 = new self.AWS.S3().deleteObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_3__["keys"].aws_bucket, Key: id + "/" + el[0].split('/')[el[0].split('/').length - 1] }, function (err, data) {
                    });
                });
                _this.edit.post = new _objects_post__WEBPACK_IMPORTED_MODULE_4__["Post"];
                _this.edit.posts = res;
                _this.router.navigate(['/']);
            });
        }
    };
    PostShowComponent.prototype.bla = function () {
        this.pushed = !this.pushed;
    };
    PostShowComponent.prototype.editPost = function (post) {
        var _this = this;
        this.edit.updatePost(post).subscribe(function (res) { return _this.edit.post = res; });
    };
    PostShowComponent.prototype.getFile2 = function (fileInput) {
        var self = this;
        var file = fileInput.target.files;
        for (var i = 0; i < file.length; i++) {
            this.fileEvent2(file[i]);
        }
    };
    PostShowComponent.prototype.fileEvent2 = function (data) {
        this.sucess = false;
        this.img_upload = true;
        var self = this;
        var params = { Bucket: config__WEBPACK_IMPORTED_MODULE_3__["keys"].aws_bucket, Key: this.edit.post.id + '/' + this.makeid(), Body: data };
        var s3 = new this.AWS.S3.ManagedUpload({ params: params });
        s3.on('httpUploadProgress', function (evt) {
            jquery__WEBPACK_IMPORTED_MODULE_7__('#pus2').css('width', '0%');
            jquery__WEBPACK_IMPORTED_MODULE_7__('#pus2').css('width', evt.loaded * 100 / evt.total + '%');
        }).send(function (error, s3res) {
            if (error) {
                self.err = error.message;
            }
            else {
                self.sucess = true;
            }
            ;
            var a = self.edit.post.images.length;
            self.edit.post.images[a] = [];
            self.edit.post.images[a][0] = 'https://s3-ap-southeast-1.amazonaws.com/' + config__WEBPACK_IMPORTED_MODULE_3__["keys"].aws_bucket + '/' + s3res.Key;
            self.openModal();
        });
    };
    PostShowComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    PostShowComponent.prototype.delFromUpl2 = function (idx) {
        var self = this;
        if (window.confirm('My love, are you sure you want to delete this picture?')) {
            var s3 = new this.AWS.S3().deleteObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_3__["keys"].aws_bucket, Key: self.edit.post.id + '/' + this.edit.post.images[idx][0].split('/')[this.edit.post.images[idx][0].split('/').length - 1] }, function (err, data) {
                if (data) {
                    self.edit.post.images.splice(idx, 1);
                    self.edit.updatePost(self.edit.post).subscribe(function (res) { return self.edit.post = res; });
                }
                else {
                    console.log(err);
                }
            });
        }
    };
    PostShowComponent.prototype.add_descr = function () {
        var _this = this;
        this.closeModal();
        var a = this.edit.post.images.length;
        if (this.inx) {
            this.edit.post.images[this.inx][1] = this.descr;
            this.inx = null;
        }
        else {
            this.edit.post.images[a - 1][1] = this.descr;
        }
        this.descr = '';
        this.edit.updatePost(this.edit.post).subscribe(function (res) { return _this.edit.post = res; });
    };
    PostShowComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    PostShowComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    PostShowComponent.prototype.edit_descr = function (inx) {
        this.inx = inx.toString();
        ;
        this.descr = this.edit.post.images[inx][1];
        this.openModal();
    };
    PostShowComponent.prototype.add_com = function (comment) {
        var _this = this;
        comment.post_id = this.edit.post.id;
        if (this.edit.user.id)
            comment.user_id = this.edit.user.id;
        if (this.edit.user.email)
            comment.user_email = this.edit.user.email;
        if (!comment.user_name)
            comment.user_name = this.edit.user.name;
        this.edit.createComment(comment).subscribe(function (res) { return _this.comments = res; });
    };
    PostShowComponent.prototype.deleteComment = function (id_com, id_post) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete this comment?')) {
            this.edit.deleteComment(id_com, id_post).subscribe(function (res) { return _this.comments = res; });
        }
    };
    PostShowComponent.prototype.ngAfterViewChecked = function () {
        var a = document.getElementsByClassName('sb-group');
        for (var i = 0; i < a.length; i += 1) {
            a[i].style.display = "block";
        }
    };
    PostShowComponent.prototype.goToShow = function (id) {
        var postLink = ['/posts', id];
        this.router.navigate(postLink);
        this.ngOnInit();
    };
    PostShowComponent.prototype.onWindowScroll = function () {
        var offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (offset > this.scrollPos) {
            this.Counter += 1;
        }
        else {
            this.Counter -= 1;
        }
        this.scrollPos = offset;
        if (this.scrollPos > 205) {
            this.fixed = true;
        }
        else {
            this.fixed = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", Object)
    ], PostShowComponent.prototype, "sliderEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('carousel'),
        __metadata("design:type", Object)
    ], PostShowComponent.prototype, "carouselEl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PostShowComponent.prototype, "onWindowScroll", null);
    PostShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-show',
            template: __webpack_require__(/*! ./post-show.component.html */ "./src/app/post-show/post-show.component.html"),
            styles: [__webpack_require__(/*! ./post-show.component.css */ "./src/app/post-show/post-show.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0 }), { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["stagger"])('200ms', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                            ]))
                        ]), { optional: true })
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_edit_service__WEBPACK_IMPORTED_MODULE_2__["EditService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            angular2_token__WEBPACK_IMPORTED_MODULE_9__["Angular2TokenService"]])
    ], PostShowComponent);
    return PostShowComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clearfix{\n  overflow: auto;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"center\">Carousel pictures</h3>\n<div class=\"row\">\n\t<div class=\"row\">\n\t\t<div class=\"file-field input-field col s12 \">\n\t      <div class=\"btn\">\n\t        <span>File</span>\n\t\t\t\t<input type=\"file\" (change)=\"getFile($event)\" multiple id=\"needreset\">\n\t\t\t</div>\n\t\t\t<div class=\"file-path-wrapper\">\n    \t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Image require\">\n\t\t\t</div>\n\t\t\t<div *ngIf='err' class=\"err-alert\">{{err}}</div>\n\t\t\t<div *ngIf='sucess' class=\"sucess-alert\">well done!</div>\n\t\t\t<div class=\"progress\" *ngIf=\"img_upload && !err && !sucess\" id=\"puscontainer\">\n\t\t\t\t<div class='determinate' id='pus' style='width: 0%'></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"edit.urls.length > 0\" class=\"center\">\n\t\t<a *ngFor=\"let url of edit.urls; let idx = index\" (click)=\"delFromUpl(idx)\"><img  style='width:60px;height:auto;margin:5px;' [src]=\"url\" class=\"hoverable img\"></a>\n\t</div>\n</div>\n<h3 class=\"center\"> New post</h3>\n<form (ngSubmit)=\"createPost(post); postForm.reset();\" #postForm='ngForm'>\n\t<div class=\"row\">\n\t\t<div class=\"input-field col s12\">\n\t\t\t<input type=\"text\" name=\"title\"\n\t\t\tid=\"title\" #title='ngModel' class=\"validate\"\n\t\t\t[(ngModel)]='post.title' required>\n\t\t\t<label for=\"title\" data-error=\"Title is required\" data-success=\"Everithing is ok now\" class=\"active\">Title</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"input-field col s12\">\n\t\t\t<input type=\"text\" name=\"category\"\n\t\t\tid=\"category\" #category='ngModel' class=\"validate\"\n\t\t\t[(ngModel)]='post.category' required>\n\t\t\t<label for=\"category\" data-error=\"Category is required\" data-success=\"Everithing is ok now\" class=\"active\">Category</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"input-field col s12\">\n\t\t\t<textarea [froalaEditor] class=\"materialize-textarea validate\" id=\"text\"\n\t\t\t\tname=\"text\" #text='ngModel'[(ngModel)]='post.text' required>\n\t\t\t</textarea>\n\t\t\t<label for=\"text\" data-error=\"Text is required\" data-success=\"Everithing is ok now\" class=\"active\">Text</label>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"file-field input-field col s12 \">\n\t      <div class=\"btn\">\n\t        <span>File</span>\n\t\t\t\t<input type=\"file\" (change)=\"getFile2($event)\" id=\"needreset\">\n\t\t\t</div>\n\t\t\t<div class=\"file-path-wrapper\">\n    \t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Image require\">\n\t\t\t</div>\n\t\t\t<div *ngIf='err' class=\"err-alert\">{{err}}</div>\n\t\t\t<div *ngIf='sucess' class=\"sucess-alert\">well done!</div>\n\t\t\t<div class=\"progress\" *ngIf=\"img_upload && !err && !sucess\" id=\"puscontainer\">\n\t\t\t\t<div class='determinate' id='pus2' style='width: 0%'></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"urls.length > 0\" class=\"center\">\n\t\t<div *ngFor=\"let url of urls; let inx = index\">\n\t\t\t<a  (click)=\"delFromUpl2(inx)\"><img  style='width:60px;height:auto;margin:5px;' [src]=\"url[0]\" class=\"hoverable img\" align=\"middle\"></a><a (click)=\"edit_descr(inx)\"><p style=\"vertical-align: middle;\" class=\"center\">{{url[1]}}</p></a>\n\t\t</div>\n\t</div>\n\t<div>\n\t\t<button type=\"submit\" class=\"waves-effect waves-teal btn\" [disabled]=\"!postForm.form.valid\">Create</button>\n\t</div>\n</form>\n\n<h3 class=\"center\"> Gallery</h3>\n<h4 > Images</h4>\n<div class=\"row\">\n\t<div class=\"row\">\n\t\t<div class=\"file-field input-field col s12 \">\n\t      <div class=\"btn\">\n\t        <span>File</span>\n\t\t\t\t<input type=\"file\" (change)=\"getFile3($event)\" multiple>\n\t\t\t</div>\n\t\t\t<div class=\"file-path-wrapper\">\n    \t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Image require\">\n\t\t\t</div>\n\t\t\t<div *ngIf='err' class=\"err-alert\">{{err}}</div>\n\t\t\t<div *ngIf='sucess' class=\"sucess-alert\">well done!</div>\n\t\t\t<div class=\"progress\" *ngIf=\"img_upload && !err && !sucess\" id=\"puscontainer\">\n\t\t\t\t<div class='determinate' id='pus' style='width: 0%'></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"edit.galleryImgs.length > 0\" class=\"center\">\n\t\t<a *ngFor=\"let url of edit.galleryImgs; let idx = index\" (click)=\"delFromUpl3(idx)\"><img  style='width:60px;height:auto;margin:5px;' [src]=\"url\" class=\"hoverable img\"></a>\n\t</div>\n</div>\n\n\n<h4>Videos</h4>\n<div class=\"row\">\n\t<div class=\"row\">\n\t\t<div class=\"file-field input-field col s12 \">\n\t      <div class=\"btn\">\n\t        <span>File</span>\n\t\t\t\t<input type=\"file\" (change)=\"getFile4($event)\" multiple>\n\t\t\t</div>\n\t\t\t<div class=\"file-path-wrapper\">\n    \t\t\t<input class=\"file-path validate\" type=\"text\" placeholder=\"Image require\">\n\t\t\t</div>\n\t\t\t<div *ngIf='err' class=\"err-alert\">{{err}}</div>\n\t\t\t<div *ngIf='sucess' class=\"sucess-alert\">well done!</div>\n\t\t\t<div class=\"progress\" *ngIf=\"img_upload && !err && !sucess\" id=\"puscontainer\">\n\t\t\t\t<div class='determinate' id='pus' style='width: 0%'></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"edit.galleryVideos.length > 0\" class=\"center\">\n\t\t<a *ngFor=\"let url of edit.galleryVideos; let idx = index\" (click)=\"delFromUpl4(idx)\">\n\t\t\t<video width=\"100\" height=\"100\" controls>\n\t\t\t  <source [src]=\"url\" type=\"video/mp4\">\n\t\t\tYour browser does not support the video tag.\n\t\t\t</video>\n\t\t</a>\n\t</div>\n</div>\n\n<div class=\"modal\" materialize=\"modal\" [materializeActions]=\"modalActions\" [materializeParams]=\"[{dismissible:false}]\">\n    <div class=\"modal-content\">\n\t    <div class=\"row\">\n\t    \t<form (ngSubmit)=\"add_descr()\" #modForm='ngForm'>\n\t    \t\t<div class=\"input-field col s12\">\n\t\t\t\t\t<input type=\"text\" name=\"descr\"\n\t\t\t\t\tid=\"descr\" class=\"validate\"\n\t\t\t\t\t[(ngModel)]='descr'\n\t\t\t\t\trequired>\n\t\t\t\t\t<label for=\"descr\" data-error=\"descr is required\" data-success=\"Everithing is ok now\" class=\"active\">descr</label>\n\t\t\t\t</div>\n\t    \t\t<button type=\"submit\" class=\"waves-effect waves-teal btn\" [disabled]=\"!modForm.form.valid\">Create</button>\n\t    \t</form>\n\t   \t</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ "./config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
/* harmony import */ var _objects_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../objects/post */ "./src/app/objects/post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authTokenService, authService, router, edit) {
        this.authTokenService = authTokenService;
        this.authService = authService;
        this.router = router;
        this.edit = edit;
        this.sucess = false;
        this.img_upload = false;
        this.AWS = __webpack_require__(/*! aws-sdk */ "./node_modules/aws-sdk/lib/browser.js");
        this.post = new _objects_post__WEBPACK_IMPORTED_MODULE_7__["Post"];
        this.urls = [];
        this.modalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.descr = '';
        this.inx = null;
        this.AWS.config.update({ region: 'ap-southeast-1', credentials: { "accessKeyId": config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_id, "secretAccessKey": config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_key } });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.createPost = function (post) {
        var _this = this;
        var self = this;
        post.images = this.urls;
        this.edit.createPost(post).subscribe(function (res) {
            _this.urls = [];
            _this.sucess = false;
            _this.img_upload = false;
            _this.edit.posts = res.posts;
            post.images.forEach(function (el) {
                var s3 = new self.AWS.S3().copyObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket + '/' + res.id, CopySource: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket + '/' + el[0].split('/')[el[0].split('/').length - 1], Key: el[0].split('/')[el[0].split('/').length - 1] }, function (err, data) {
                    var s3 = new self.AWS.S3().deleteObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: el[0].split('/')[el[0].split('/').length - 1] }, function (err, data) {
                    });
                });
            });
        });
        alert('post successfully created!');
    };
    ProfileComponent.prototype.getFile = function (fileInput) {
        var self = this;
        var file = fileInput.target.files;
        for (var i = 0; i < file.length; i++) {
            this.fileEvent(file[i]);
        }
    };
    ProfileComponent.prototype.fileEvent = function (data) {
        this.sucess = false;
        this.img_upload = true;
        var self = this;
        var params = { Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: 'themes/' + this.makeid(), Body: data };
        var s3 = new this.AWS.S3.ManagedUpload({ params: params });
        s3.on('httpUploadProgress', function (evt) {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus').css('width', '0%');
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus').css('width', evt.loaded * 100 / evt.total + '%');
        }).send(function (error, s3res) {
            if (error) {
                self.err = error.message;
            }
            else {
                self.sucess = true;
            }
            ;
            var a = self.edit.urls.length;
            var urlsa = self.edit.urls;
            urlsa[a] = 'https://s3-ap-southeast-1.amazonaws.com/' + config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket + '/' + s3res.Key;
            self.edit.updateTheme(urlsa).subscribe(function (res) { return self.edit.urls = res.images; });
        });
    };
    ProfileComponent.prototype.getFile2 = function (fileInput) {
        var self = this;
        var file = fileInput.target.files;
        for (var i = 0; i < file.length; i++) {
            this.fileEvent2(file[i]);
        }
    };
    ProfileComponent.prototype.fileEvent2 = function (data) {
        this.sucess = false;
        this.img_upload = true;
        var self = this;
        var params = { Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: this.makeid(), Body: data };
        var s3 = new this.AWS.S3.ManagedUpload({ params: params });
        s3.on('httpUploadProgress', function (evt) {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus2').css('width', '0%');
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus2').css('width', evt.loaded * 100 / evt.total + '%');
        }).send(function (error, s3res) {
            if (error) {
                self.err = error.message;
            }
            else {
                self.sucess = true;
            }
            ;
            var a = self.urls.length;
            self.urls[a] = [];
            self.urls[a][0] = 'https://s3-ap-southeast-1.amazonaws.com/' + config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket + '/' + s3res.Key;
            // self.urls[a][1] = self.add_description();
            self.openModal();
        });
    };
    ProfileComponent.prototype.delFromUpl2 = function (idx) {
        var self = this;
        var s3 = new this.AWS.S3().deleteObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: this.urls[idx][0].split('/')[this.urls[idx][0].split('/').length - 1] }, function (err, data) {
            if (data) {
                self.urls.splice(idx, 1);
            }
            else {
                console.log(err);
            }
        });
    };
    ProfileComponent.prototype.add_descr = function () {
        this.closeModal();
        var a = this.urls.length;
        if (this.inx) {
            this.urls[this.inx][1] = this.descr;
            this.inx = null;
        }
        else {
            this.urls[a - 1][1] = this.descr;
        }
        this.descr = '';
    };
    ProfileComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 20; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    ProfileComponent.prototype.delFromUpl = function (idx) {
        var self = this;
        var s3 = new this.AWS.S3().deleteObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: 'themes/' + this.edit.urls[idx].split('/')[this.edit.urls[idx].split('/').length - 1] }, function (err, data) {
            if (data) {
                self.edit.urls.splice(idx, 1);
                self.edit.updateTheme(self.edit.urls).subscribe(function (res) { return self.edit.urls = res.images; });
            }
            else {
                console.log(err);
            }
        });
    };
    ProfileComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    ProfileComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    ProfileComponent.prototype.edit_descr = function (inx) {
        this.inx = inx.toString();
        ;
        this.descr = this.urls[inx][1];
        this.openModal();
    };
    ProfileComponent.prototype.getFile3 = function (fileInput) {
        var self = this;
        var file = fileInput.target.files;
        for (var i = 0; i < file.length; i++) {
            this.fileEvent3(file[i]);
        }
    };
    ProfileComponent.prototype.fileEvent3 = function (data) {
        this.sucess = false;
        this.img_upload = true;
        var self = this;
        var params = { Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: 'gallery/images/' + this.makeid(), Body: data };
        var s3 = new this.AWS.S3.ManagedUpload({ params: params });
        s3.on('httpUploadProgress', function (evt) {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus').css('width', '0%');
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus').css('width', evt.loaded * 100 / evt.total + '%');
        }).send(function (error, s3res) {
            if (error) {
                self.err = error.message;
            }
            else {
                self.sucess = true;
            }
            ;
            var a = self.edit.galleryImgs.length;
            var urlsa = self.edit.galleryImgs;
            urlsa[a] = 'https://s3-ap-southeast-1.amazonaws.com/' + config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket + '/' + s3res.Key;
            self.edit.updateGallery(urlsa).subscribe(function (res) { return self.edit.galleryImgs = res.images; });
        });
    };
    ProfileComponent.prototype.delFromUpl3 = function (idx) {
        var self = this;
        var s3 = new this.AWS.S3().deleteObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: 'gallery/images/' + this.edit.galleryImgs[idx].split('/')[this.edit.galleryImgs[idx].split('/').length - 1] }, function (err, data) {
            if (data) {
                self.edit.galleryImgs.splice(idx, 1);
                self.edit.updateGallery(self.edit.galleryImgs).subscribe(function (res) { return self.edit.galleryImgs = res.images; });
            }
            else {
                console.log(err);
            }
        });
    };
    ProfileComponent.prototype.getFile4 = function (fileInput) {
        var self = this;
        var file = fileInput.target.files;
        for (var i = 0; i < file.length; i++) {
            this.fileEvent4(file[i]);
        }
    };
    ProfileComponent.prototype.fileEvent4 = function (data) {
        this.sucess = false;
        this.img_upload = true;
        var self = this;
        var params = { Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: 'gallery/videos/' + this.makeid(), Body: data };
        var s3 = new this.AWS.S3.ManagedUpload({ params: params });
        s3.on('httpUploadProgress', function (evt) {
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus').css('width', '0%');
            jquery__WEBPACK_IMPORTED_MODULE_5__('#pus').css('width', evt.loaded * 100 / evt.total + '%');
        }).send(function (error, s3res) {
            if (error) {
                self.err = error.message;
            }
            else {
                self.sucess = true;
            }
            ;
            var a = self.edit.galleryVideos.length;
            var urlsa = self.edit.galleryVideos;
            urlsa[a] = 'https://s3-ap-southeast-1.amazonaws.com/' + config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket + '/' + s3res.Key;
            self.edit.updateGalleryVid(urlsa).subscribe(function (res) { return self.edit.galleryVideos = res.videos; });
        });
    };
    ProfileComponent.prototype.delFromUpl4 = function (idx) {
        var self = this;
        if (window.confirm('Desti, are you sure you want to delete this video?')) {
            var s3 = new this.AWS.S3().deleteObject({ Bucket: config__WEBPACK_IMPORTED_MODULE_1__["keys"].aws_bucket, Key: 'gallery/videos/' + this.edit.galleryVideos[idx].split('/')[this.edit.galleryVideos[idx].split('/').length - 1] }, function (err, data) {
                if (data) {
                    self.edit.galleryVideos.splice(idx, 1);
                    self.edit.updateGalleryVid(self.edit.galleryVideos).subscribe(function (res) { return self.edit.galleryVideos = res.videos; });
                }
                else {
                    console.log(err);
                }
            });
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [angular2_token__WEBPACK_IMPORTED_MODULE_4__["Angular2TokenService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_edit_service__WEBPACK_IMPORTED_MODULE_6__["EditService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.css":
/*!***********************************************!*\
  !*** ./src/app/service/service.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n\tfont-family: 'Alex Brush';\n\tmargin-top: 5px;\n}\n\n.divider{\n\twidth: 200px;\n\theight: 1px;\n\tbackground-color: #616161;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tmargin-top: 20px;\n\tmargin-bottom: 10px;\n}\n\n.footer{\n\tposition: fixed;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 75px;\n\tz-index: 10;\n}\n\n.hexagon {\n  -webkit-clip-path: polygon(100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0, 75% 0);\n  clip-path: polygon(100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0, 75% 0);\n  background: no-repeat;\n  background-size: cover;\n  margin: 10px auto;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n}\n\n.cont{\n\twidth: 100%;\n    padding-top: 100%;\n    position:relative;\n    transition: all .2s ease-in-out;\n    margin: 10px;\n}\n\n.cont:hover{\n\t-webkit-transform: scale(1.1);\n\t        transform: scale(1.1);\n}\n"

/***/ }),

/***/ "./src/app/service/service.component.html":
/*!************************************************!*\
  !*** ./src/app/service/service.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer orange lighten-5\">\n\t<div class=\"divider\"></div>\n\t<h3 class=\"center\">Services</h3>\n</div>\n\n\n<div class=\"row\">\n\t<div class=\"col m3 l3 offset-m2 offset-l2\" style=\"padding: 20px 20px 0 20px;\">\n\t\t<div style=\"width: 60%;\" class=\"left\">\n\t\t\t<div class=\"cont\">\n\t\t\t  <div class=\"hexagon\" [ngStyle]=\"{'background-image': 'url(assets/desti.jpg)'}\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"width: 60%; margin-top: -32.5%;margin-right: -10%;\" class=\"right\">\n\t\t\t<div class=\"cont\">\n\t\t\t  <div class=\"hexagon\" [ngStyle]=\"{'background-image': 'url(assets/desti.jpg)'}\" (mouseenter)=\"idx2 = true\" (mouseleave)=\"idx2 = false\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div style=\"width: 60%; margin-top: -32.5%\" class=\"left\">\n\t\t\t<div class=\"cont\">\n\t\t\t  <div class=\"hexagon\" [ngStyle]=\"{'background-image': 'url(assets/desti.jpg)'}\" (mouseenter)=\"idx3 = true\" (mouseleave)=\"idx3 = false\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col m6 l6 offset-m1 offset-l1\">\n\t\t<div class=\"container\" style=\"margin-top: 20%;\">\n\t\t\t<div *ngIf=\"!idx2 && !idx3\" [@popupAnim]>Вслед за техническими характеристиками в сети появились реальные фотографии наследника флагманского Sony Xperia XZ2, представленного в начале этого года на MWC 2018. Смартфон получит одно важное изменение в сравнении с предшественником, но сохранит фирменный дизайн.</div>\n\t\t\t<div *ngIf=\"idx2\" [@popupAnim]>Хидео Кодзима рассказал, какую роль в создании Death Stranding сыграла Линдси Вагнер, почему выбор пал именно на эту актрису и как происходили съёмки её персонажа. Таинственная девушка, которая с насмешкой спрашивает у зрителей «Всё ещё не знаешь, кто я?», стала завершающим аккордом презентации на E3: незнакомка будто специально нагнала ещё больше загадочности на и без того мистический проект. В ней быстро угадали известную артистку, но как её помолодевшая версия оказалась в вымышленном мире японского гения? </div>\n\t\t\t<div *ngIf=\"idx3\" [@popupAnim]>На проходящей в Шанхае выставке потребительской электроники компания Hisense презентовала новый смартфон среднего уровня H20. Аппарат получил восьмиядерный чипсет Snapdragon, 6 ГБ оперативной памяти и двойную камеру. Ключевой же особенностью гаджета стал экран с минимальными рамками, занимающий почти всю переднюю сторону.</div>\n\t\t</div>\t\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
        this.idx2 = false;
        this.idx3 = false;
        // $(document).ready(function(){
        // 	$('.cont').mouseenter(function(){
        // 		$(this).css('width', '105%');
        // 		// $('.hexagon').css('width', '80%');
        // 	})
        // 	$('.cont').mouseleave(function(){
        // 		$(this).css('width', '100%');
        // 		// $('.hexagon').css('width', '100%');
        // 	})
        // })
        // $(document).ready(function(){
        // 	$('.circle').mouseenter(function(){
        // 		$(this).css('width', '55%;');
        // 		$('.circle').css('width', '45%;');
        // 	})
        // 	$('.cont').mouseleave(function(){
        // 		$(this).css('width', '50%;');
        // 		$('.circle').css('width', '50%;');
        // 	})
        // })
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(/*! ./service.component.html */ "./src/app/service/service.component.html"),
            styles: [__webpack_require__(/*! ./service.component.css */ "./src/app/service/service.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('popupAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('00ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(authService) {
        var _this = this;
        this.authService = authService;
        this.userSignedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authService.validateToken().subscribe(function (res) { return res.status == 200 ? _this.userSignedIn$.next(res.json().success) : _this.userSignedIn$.next(false); });
    }
    AuthService.prototype.loggedIn = function () {
        return this.authService.userSignedIn();
    };
    AuthService.prototype.logOutUser = function () {
        var _this = this;
        return this.authService.signOut().map(function (res) {
            _this.userSignedIn$.next(false);
            return res;
        });
    };
    AuthService.prototype.logInUser = function (signInData) {
        var _this = this;
        return this.authService.signIn(signInData).map(function (res) {
            _this.userSignedIn$.next(true);
            return res;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angular2_token__WEBPACK_IMPORTED_MODULE_1__["Angular2TokenService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/edit.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/edit.service.ts ***!
  \******************************************/
/*! exports provided: EditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditService", function() { return EditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _objects_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/post */ "./src/app/objects/post.ts");
/* harmony import */ var _objects_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../objects/user */ "./src/app/objects/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditService = /** @class */ (function () {
    function EditService(http) {
        this.http = http;
        // carouselEl = document.getElementById('carousel');
        // actions = new EventEmitter<string|MaterializeAction>();
        this.urls = [];
        this.prodsUrl = 'https://protected-atoll-70549.herokuapp.com/themes';
        this.postsUrl = 'https://protected-atoll-70549.herokuapp.com/posts';
        this.commentsUrl = 'https://protected-atoll-70549.herokuapp.com/comments';
        this.usersUrl = 'https://protected-atoll-70549.herokuapp.com/user_blas';
        this.galleryUrl = 'https://protected-atoll-70549.herokuapp.com/galleries';
        this.post = new _objects_post__WEBPACK_IMPORTED_MODULE_3__["Post"];
        this.posts = [];
        this.user = new _objects_user__WEBPACK_IMPORTED_MODULE_4__["User"];
        this.cats = [];
        this.catsItem = null;
        this.galleryImgs = [];
        this.galleryVideos = [];
        this.sideBarVar = 'norm';
        this.homeSlider = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    EditService.prototype.getPosts = function () {
        return this.http.get(this.postsUrl)
            .map(function (response) { return response.json(); });
    };
    EditService.prototype.getPost = function (id) {
        return this.http.get(this.postsUrl + "/" + id);
    };
    EditService.prototype.deletePost = function (id) {
        return this.http.delete(this.postsUrl + '/' + id, this.options)
            .map(function (res) { return res.json(); });
    };
    EditService.prototype.createPost = function (post) {
        return this.http.post(this.postsUrl, JSON.stringify(post), this.options)
            .map(function (res) { return res.json(); });
    };
    EditService.prototype.updatePost = function (post) {
        return this.http.put(this.postsUrl + '/' + post.id, JSON.stringify(post), this.options).map(function (res) { return res.json(); });
    };
    EditService.prototype.getTheme = function () {
        return this.http.get(this.prodsUrl)
            .map(function (response) { return response.json(); });
    };
    EditService.prototype.updateTheme = function (image) {
        return this.http.put(this.prodsUrl + '/1', JSON.stringify({ images: image }), this.options).map(function (res) { return res.json(); });
    };
    EditService.prototype.getGallery = function () {
        return this.http.get(this.galleryUrl)
            .map(function (response) { return response.json(); });
    };
    EditService.prototype.updateGallery = function (image) {
        return this.http.put(this.galleryUrl + '/1', JSON.stringify({ images: image }), this.options).map(function (res) { return res.json(); });
    };
    EditService.prototype.updateGalleryVid = function (video) {
        return this.http.put(this.galleryUrl + '/1', JSON.stringify({ videos: video }), this.options).map(function (res) { return res.json(); });
    };
    EditService.prototype.getComments = function (id) {
        return this.http.get(this.commentsUrl + "/" + id)
            .map(function (response) { return response.json(); });
    };
    EditService.prototype.createComment = function (comment) {
        return this.http.post(this.commentsUrl, JSON.stringify(comment), this.options)
            .map(function (res) { return res.json(); });
    };
    EditService.prototype.deleteComment = function (id_com, id_post) {
        return this.http.delete(this.commentsUrl + '/' + id_com + ',' + id_post, this.options)
            .map(function (res) { return res.json(); });
    };
    EditService.prototype.createUser = function (user) {
        return this.http.post(this.usersUrl, JSON.stringify(user), this.options)
            .map(function (res) { return res.json(); });
    };
    EditService.prototype.getUser = function (id) {
        return this.http.get(this.usersUrl + "/" + id)
            .map(function (response) { return response.json(); });
    };
    EditService.prototype.deleteUser = function (id) {
        return this.http.delete(this.usersUrl + '/' + id, this.options)
            .map(function (res) { return res.json(); });
    };
    EditService.prototype.updateUser = function (user) {
        return this.http.put(this.usersUrl + '/' + user.id, JSON.stringify(user), this.options).map(function (res) { return res.json(); });
    };
    EditService.prototype.samePosts = function (value) {
        var same = [];
        if (value)
            same = this.posts.filter(function (item) { return item.category.toLowerCase().indexOf(value.toLowerCase()) > -1; });
        return same;
    };
    EditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], EditService);
    return EditService;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide-on-med-and-down li{\n\tcolor: #616161;\n\tfont-weight: bold;\n\n}\n\n.hide-on-med-and-down li a{\n\tcolor: #616161;\n\tfont-weight: bold;\n\tfont-family: 'tahoma';\n\n}\n\n.hide-on-med-and-down li a:hover{\n\tcolor: black;\n\tbackground-color: transparent;\n\tcursor: pointer;\n}\n\n.divider{\n\twidth: 60%;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\theight: 3px;\n\tbackground-color: #616161;\n}\n\n#secondul{\n\tposition: absolute;\n\ttop: 0px;\n\tright: 10px;\n\t\n}\n\n#secondul li{\n\tmargin-left: 10px;\n\tdisplay: inline;\n\n}\n\n#firstul{\n\twidth: 100%;\n\ttext-align: center;\n\t\n}\n\n#firstul li{\n\tdisplay: inline;\n\tmargin:20px;\n}\n\n#loginBtn{\n\twidth: 20px;\n\theight: 20px; \n\tdisplay: block;\n\tposition: absolute;\n\ttop:0px;\n\tleft:0px;\n}\n\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <!--  <nav class=\"z-depth-0\">\n\n    <div class=\"nav-wrapper orange lighten-5\">\n      <a [routerLink]=\"['']\" id=\"logo-container\" class=\"brand-logo\"></a> -->\n      <a materialize=\"sideNav\" [materializeParams]=\"[{edge:'right', closeOnClick:true}]\" href=\"#\" data-activates=\"slide-out\" class=\"button-collapse hide-on-large-only right \" style=\"position: absolute;right:0px;top:0px;color: #424242;\"><i class=\"material-icons\">menu</i></a>\n          <ul class=\"hide-on-med-and-down\" id=\"firstul\">\n            <li><a [routerLink]=\"['/']\">Home</a></li>\n            <li><a [routerLink]=\"['/gallery']\">Gallery</a></li>\n            <li><a [routerLink]=\"['/aboutme']\">About Me</a></li>\n            <!-- <li><a [routerLink]=\"['/service']\">Services</a></li> -->\n            <li><a [routerLink]=\"['/contact']\">Contacts</a></li>\n          </ul>\n       \n          <ul class=\"hide-on-med-and-down right\" id=\"secondul\">\n            <li *ngIf=\"!auth.userSignedIn() && edit.user.id\" id=\"welcomeLi\"> Welcome back, {{edit.user.name}}!</li>\n            <li *ngIf=\"!auth.userSignedIn() && !edit.user.id\"> <a (click)=\"openModal()\" >Subscribe</a></li>\n            <li *ngIf=\"!auth.userSignedIn() && edit.user.id\"> <a (click)=\"unsubscribe()\" >Unsubscribe</a></li>\n            \n            <li *ngIf=\"auth.userSignedIn()\"><a [routerLink]=\"['/profile']\">PROFILE</a></li>\n            <li *ngIf=\"auth.userSignedIn()\"><a (click)=\"logOut()\">LOGOUT</a></li>\n          </ul>\n      \n\n    <!-- </div> -->\n    <div class=\"divider hide-on-med-and-down\"></div>\n  <!-- </nav> -->\n<a *ngIf=\"!auth.userSignedIn()\" (click)=\"presentAuthDialog()\" id=\"loginBtn\"></a>\n\n<ul id=\"slide-out\" class=\"side-nav orange lighten-5\" style=\"z-index: 1000;max-width: 70%;padding-right: 5px;padding-left: 5px;\">\n  <li><a [routerLink]=\"['/']\">Home</a></li>\n  <li><a [routerLink]=\"['/gallery']\">Gallery</a></li>\n  <li><a [routerLink]=\"['/aboutme']\">About Me</a></li>\n  <!-- <li><a [routerLink]=\"['/service']\">Services</a></li> -->\n  <li><a [routerLink]=\"['/contact']\">Contacts</a></li>\n  <li *ngIf=\"!auth.userSignedIn() && !edit.user.id\"> <a (click)=\"openModal()\" >Subscribe</a></li>\n  <li *ngIf=\"!auth.userSignedIn() && edit.user.id\"> <a (click)=\"unsubscribe()\" >Unsubscribe</a></li>\n  <li *ngIf=\"auth.userSignedIn()\"><a [routerLink]=\"['/profile']\">PROFILE</a></li>\n  <li *ngIf=\"auth.userSignedIn()\"><a (click)=\"logOut()\">LOGOUT</a></li>\n  <ng-container *ngIf=\"edit.sideBarVar == 'home'\">\n    <a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">CATEGORIES</a>\n    <a *ngFor=\"let cat of edit.cats\" (click)=\"catShow(cat.category)\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">{{cat.category}}</a>\n    <a (click)=\"edit.catsItem=null\" class=\"waves-effect waves-light btn transparent grey-text text-darken-2 z-depth-0 wow\" style=\"margin-top:10px;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">ALL</a>\n  </ng-container>\n  <ng-container *ngIf=\"edit.sideBarVar == 'show'\">\n    <a class=\"waves-effect waves-light btn white-text z-depth-0 grey darken-2\" style=\"margin: 20px auto 10px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 100%;\">SHARE</a>\n      <div class=\"center\" id=\"miaw\">\n          <share-buttons class=\"share_btn\" [theme]=\"'outline'\"\n             [include]=\"['facebook','twitter','pinterest','whatsapp','messenger','telegram','vk','email','copy']\"\n             [show]=\"10\"\n             [size]=\"-3\"\n            ></share-buttons>\n      </div>\n  </ng-container>\n</ul>\n\n\n<app-auth-dialog #authDialog ></app-auth-dialog>\n\n<div class=\"modal orange lighten-5\" materialize=\"modal\" [materializeActions]=\"modalActions\" style=\"border-radius: 5px;max-width: 400px;\">\n    <div class=\"modal-content\">\n      <div class=\"divider\" style=\"margin-bottom: 10px;\"></div>\n      <h3 *ngIf=\"newOne\" class=\"flow-text center\" style=\"font-family: 'Josefin Sans', sans-serif;\">Welcome,<br>great things coming your way!</h3>\n\n      <div class=\"divider\"></div>\n     \n        <form (ngSubmit)=\"subscribe(edit.user)\" #subscForm='ngForm'>\n          <div class=\"input-field col s12\">\n            <input type=\"text\" name=\"email\"\n            class=\"validate\"\n            [(ngModel)]='edit.user.email'\n            required>\n            <label for=\"email\" data-error=\"email is required\" data-success=\"Everithing is ok now\" class=\"active\">email</label>\n          </div>\n          <div class=\"input-field col s12\">\n            <input type=\"text\" name=\"name\"\n            class=\"validate\"\n            [(ngModel)]='edit.user.name'\n            required>\n            <label for=\"name\" data-error=\"name is required\" data-success=\"Everithing is ok now\" class=\"active\">name</label>\n          </div>\n          <div class=\"center\">\n            <button type=\"submit\" class=\"waves-effect waves-light btn-floating pink lighten-4 grey-text text-darken-2 z-depth-0 wow\" style=\"margin: 20px auto 20px auto;border: 2px solid #616161;border-radius: 5px;font-weight: bold;width: 150px;padding-right: 10px;padding-left: 10px;\" [disabled]=\"!subscForm.form.valid\" [class.pulse]=\"subscForm.form.valid\">Subscribe</button>\n          </div>\n        </form>\n      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-dialog/auth-dialog.component */ "./src/app/auth-dialog/auth-dialog.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/edit.service */ "./src/app/services/edit.service.ts");
/* harmony import */ var _objects_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../objects/user */ "./src/app/objects/user.ts");
/* harmony import */ var angular2_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-token */ "./node_modules/angular2-token/fesm5/angular2-token.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(authService, router, edit, auth) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.edit = edit;
        this.auth = auth;
        this.modalActions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newOne = false;
        this.edit.getTheme().subscribe(function (res) {
            _this.edit.urls = res.images;
            _this.edit.homeSlider.emit('slider');
            // window.setTimeout(()=>{
            //   if (this.edit.carouselEl) this.edit.carouselEl.classList.toggle('initialized');
            //   this.edit.actions.emit('carousel');
            // },2000)
        });
        this.edit.getPosts().subscribe(function (res) {
            _this.edit.posts = res;
            var a = [];
            var b = 0;
            _this.edit.cats = res.filter(function (item) { if (a.indexOf(item.category) < 0) {
                a[b] = item.category;
                b += 1;
                return true;
            }
            else {
                b += 1;
                return false;
            } });
        });
        this.edit.getGallery().subscribe(function (res) {
            _this.edit.galleryImgs = res.images;
            _this.edit.galleryVideos = res.videos;
        });
        if (this.authService.loggedIn()) {
            this.edit.getUser(2).subscribe(function (res) { return _this.edit.user = res; });
        }
        else {
            if (localStorage['DestiBlogUser']) {
                this.edit.getUser(localStorage['DestiBlogUser']).subscribe(function (res) { return _this.edit.user = res; });
            }
            else {
                this.newOne = true;
                window.setTimeout(function () {
                    _this.openModal();
                }, 1000);
            }
        }
    }
    // onlyUnique(value, a, b) {
    //   if(a.indexOf(value.category))
    // }
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logOutUser().subscribe(function () { return _this.router.navigate(['/']); });
    };
    ToolbarComponent.prototype.presentAuthDialog = function (mode) {
        this.authDialog.openDialog(mode);
    };
    ToolbarComponent.prototype.catShow = function (value) {
        this.edit.catsItem = this.edit.posts.filter(function (item) { return item.category.toLowerCase().indexOf(value.toLowerCase()) > -1; });
    };
    ToolbarComponent.prototype.subscribe = function (user) {
        var _this = this;
        user.subscribed = true;
        this.edit.createUser(user).subscribe(function (res) {
            _this.edit.user = res;
            _this.closeModal();
            _this.newOne = false;
            localStorage['DestiBlogUser'] = res.id;
        });
    };
    ToolbarComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: "modal", params: ['open'] });
    };
    ToolbarComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: "modal", params: ['close'] });
    };
    ToolbarComponent.prototype.ngAfterViewChecked = function () {
        var a = document.getElementsByClassName('sb-group');
        for (var i = 0; i < a.length; i += 1) {
            a[i].style.display = "block";
        }
    };
    ToolbarComponent.prototype.unsubscribe = function () {
        var _this = this;
        if (window.confirm("If you leave I'll be saaad! :'(")) {
            this.edit.user.subscribed = false;
            this.edit.updateUser(this.edit.user).subscribe(function (res) {
                _this.edit.user = new _objects_user__WEBPACK_IMPORTED_MODULE_5__["User"];
                _this.newOne = true;
                localStorage.removeItem('DestiBlogUser');
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('authDialog'),
        __metadata("design:type", _auth_dialog_auth_dialog_component__WEBPACK_IMPORTED_MODULE_1__["AuthDialogComponent"])
    ], ToolbarComponent.prototype, "authDialog", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_edit_service__WEBPACK_IMPORTED_MODULE_4__["EditService"], angular2_token__WEBPACK_IMPORTED_MODULE_6__["Angular2TokenService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    token_auth_config: {
        apiBase: 'https://protected-atoll-70549.herokuapp.com'
        // 'http://0.0.0.0:3000'
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ilia/code/bloga/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map