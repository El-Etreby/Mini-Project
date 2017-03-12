webpackJsonp([1,4],{

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ValidateService = class ValidateService {
    constructor() {
    }
    validateRegister(student) {
        if (student.username == undefined || student.email == undefined || student.studentId == undefined || student.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
};
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
    __metadata('design:paramtypes', [])
], ValidateService);
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/validate.service.js.map

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app works!';
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(691),
        styles: [__webpack_require__(684)]
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__(519);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */] }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_modal__["ModalModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let HomeComponent = class HomeComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        if (this.authService.checkLoggedIn()) {
            this.authService.checkPortfolio().subscribe(data => {
                console.log(data);
                this.portfolio = data.success;
            });
        }
    }
};
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(692),
        styles: [__webpack_require__(685)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
], HomeComponent);
var _a;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/home.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let LoginComponent = class LoginComponent {
    constructor(router, flashMessagesService, authService) {
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
    }
    ngOnInit() {
    }
    onLoginSubmit() {
        var student = {
            username: this.username,
            password: this.password
        };
        //Authenticate user
        this.authService.authenticateStudent(student).subscribe(data => {
            if (data.success) {
                this.authService.storeStudentData(data.token, data.student);
                this.flashMessagesService.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                this.router.navigate(['']);
            }
            else {
                this.flashMessagesService.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                this.router.navigate(['login']);
            }
        });
    }
};
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(693),
        styles: [__webpack_require__(686)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
], LoginComponent);
var _a, _b, _c;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/login.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let NavbarComponent = class NavbarComponent {
    constructor(authService, flashMessagesService, router) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLogoutClick() {
        this.authService.logoutStudent();
        this.flashMessagesService.show('You are now logged out', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['/login']);
    }
};
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(694),
        styles: [__webpack_require__(687)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === 'function' && _c) || Object])
], NavbarComponent);
var _a, _b, _c;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let ProfileComponent = class ProfileComponent {
    constructor(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.projectCount = 0;
        this.type = "url";
        this.screenshots = [];
        this.filesToUpload = [];
    }
    /*upload() {
      var portfolio = {
        name: this.name
      }
      this.authService.makeFileRequest("http://localhost:3000/student/upload", [], this.filesToUpload, portfolio).then((result) => {
        console.log(result);
      }, (error) => {
        console.error(error);
      });
    }*/
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
    fileChangeEventProject(fileInput) {
        this.filesToUploadProject = fileInput.target.files;
    }
    ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
            this.student = profile.student;
            this.portfolio = profile.portfolio;
            this.authService.getProjects().subscribe(projects => {
                if (projects.success) {
                    this.projectCount = projects.projects.length;
                    this.projects = projects.projects;
                }
            });
        }, err => {
            this.flashMessagesService.show(err, { cssClass: 'alert-danger', timeout: 5000 });
            return false;
        });
    }
    getBase64($event) {
        var file = $event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            this.image = reader.result;
            console.log(this.image);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    getAllBase64Helper(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            this.screenshots.push(reader.result);
            console.log(this.screenshots);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
    getAllBase64($event) {
        var files = $event.target.files;
        if (files.length > 2) {
            this.flashMessagesService.show('The maximum number of screenshots to be uploaded is 2!', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            for (var i = 0; i < files.length; i++) {
                this.getAllBase64Helper(files[i]);
            }
        }
        /*for (var i = 0, file; file = files[i]; i++) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = (e) => {
            this.screenshots[i] = reader.result;
            console.log(this.screenshots)
          };
          reader.onerror = function(error) {
            console.log('Error: ', error);
          };
        } */
    }
    onSubmitPortfolio() {
        var portfolio = {
            name: this.name
        };
        this.authService.createPortfolio("http://localhost:3000/student/portfolio", [], this.filesToUpload, portfolio).then((data) => {
            if (data.success) {
                var project = {
                    title: this.title,
                    type: this.type,
                    details: this.details
                };
                this.authService.addProject("http://localhost:3000/student/project", [], this.filesToUploadProject, project).then((data) => {
                    if (data.success) {
                        this.flashMessagesService.show('You have successfully created your portfolio', { cssClass: 'alert-success', timeout: 3000 });
                        window.location.reload();
                    }
                    else {
                        console.log('error');
                    }
                });
            }
            else {
                console.log('error');
            }
        });
    }
    onSubmitProject() {
        var project = {
            title: this.title,
            type: this.type,
            details: this.details
        };
        this.authService.addProject("http://localhost:3000/student/project", [], this.filesToUploadProject, project).then((data) => {
            if (data.success) {
                this.flashMessagesService.show('You have added your project', { cssClass: 'alert-success', timeout: 3000 });
                window.location.reload();
            }
            else {
                console.log('error');
            }
        });
    }
};
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(695),
        styles: [__webpack_require__(688)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
], ProfileComponent);
var _a, _b, _c;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/profile.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let RegisterComponent = class RegisterComponent {
    constructor(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.type = "client";
    }
    onRegisterSubmit() {
        if (this.type == "student") {
            var student = {
                email: this.email,
                username: this.username,
                password: this.password,
                //type: this.type,
                studentId: this.studentId
            };
            console.log(student);
        }
        //Validate Student
        if (!this.validateService.validateRegister(student)) {
            this.flashMessagesService.show('Please fill in the missing field(s)', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        /*Email Validation
        if (!this.validateService.validateEmail(user.email)) {
          this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
          return false;
        } */
        //Register Student
        this.authService.registerStudent(student).subscribe(data => {
            if (data.success) {
                this.flashMessagesService.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                this.router.navigate(['/login']);
            }
            else {
                this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/register']);
            }
        });
    }
};
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(696),
        styles: [__webpack_require__(689)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === 'function' && _d) || Object])
], RegisterComponent);
var _a, _b, _c, _d;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/register.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let SearchComponent = class SearchComponent {
    constructor(authService, flashMessagesService) {
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
    }
    ngOnInit() {
        this.authService.getPortfolios().subscribe(data => {
            if (data.portfolios.length != 0) {
                this.portfolios = data.portfolios;
            }
            else {
                this.flashMessagesService.show('No portfolios are available.', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    }
};
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(697),
        styles: [__webpack_require__(690)]
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object])
], SearchComponent);
var _a, _b;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/search.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.checkLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
], AuthGuard);
var _a, _b;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/environment.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    registerStudent(student) {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://34.251.97.183:3000/student/register', student, { headers: headers })
            .map(res => res.json());
    }
    authenticateStudent(student) {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://34.251.97.183:3000/student/authenticate', student, { headers: headers })
            .map(res => res.json());
    }
    storeStudentData(token, student) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(student));
        this.authToken = token;
        this.student = student;
    }
    logoutStudent() {
        this.authToken = null;
        this.student = null;
        localStorage.clear();
    }
    getProfile() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://34.251.97.183:3000/student/profile', { headers: headers })
            .map(res => res.json());
    }
    loadToken() {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    }
    checkLoggedIn() {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    }
    checkPortfolio() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://34.251.97.183:3000/student/getPortfolio', { headers: headers })
            .map(res => res.json());
    }
    /*
      createPortfolio(data) {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/student/portfolio', data, { headers: headers })
          .map(res => res.json());
      } */
    getProjects() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://34.251.97.183:3000/student/getProjects', { headers: headers })
            .map(res => res.json());
    }
    getPortfolios() {
        let headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://34.251.97.183:3000/student/getPortfolios', { headers: headers })
            .map(res => res.json());
    }
    createPortfolio(url, params, files, portfolio) {
        this.loadToken();
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            var portfolio1 = JSON.stringify(portfolio);
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", this.authToken);
            formData.append("portfolio", portfolio1);
            xhr.send(formData);
        });
    }
    /*  addProject(project) {
        let headers = new Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/student/project', project, { headers: headers })
          .map(res => res.json());
      }*/
    addProject(url, params, files, project) {
        this.loadToken();
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            if (files) {
                for (var i = 0; i < files.length; i++) {
                    formData.append("uploads[]", files[i], files[i].name);
                }
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            var project1 = JSON.stringify(project);
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Authorization", this.authToken);
            formData.append("project", project1);
            xhr.send(formData);
        });
    }
};
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
], AuthService);
var _a;
//# sourceMappingURL=/Users/omarezzatel-etreby/Documents/Projects/iPortfolio/angular-src/src/auth.service.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "label {\n  font-size: 125%;\n}\n\n.card {\n  padding: 10px;\n  padding-top: 20px;\n  text-align: center;\n  margin: 10px 3% 1% 3%;\n  height: 190px;\n  width: calc(80% * (1/3));\n}\n\n.card .card-title {\n  font-size: 2em;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.card .card-link {\n  margin-top: 40px;\n  font-size: 1.1em;\n  font-weight: bold;\n  width: 90%;\n  -webkit-transition: background-color 0.5s ease;\n  transition: background-color 0.5s ease;\n}\n\n.card .card-link:hover {\n  -webkit-transition: background-color 0.5s ease;\n  transition: background-color 0.5s ease;\n}\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "label {\n  font-size: 125%;\n}\n\n.card {\n  padding: 10px;\n  padding-top: 20px;\n  text-align: center;\n  margin: 300px 3% 1% 3%;\n  height: 190px;\n  width: calc(80% * (1/3));\n}\n\n.card .card-title {\n  font-size: 2em;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\n.card .card-link {\n  margin-top: 40px;\n  font-size: 1.1em;\n  font-weight: bold;\n  width: 90%;\n  -webkit-transition: background-color 0.5s ease;\n  transition: background-color 0.5s ease;\n}\n\n.card .card-link:hover {\n  -webkit-transition: background-color 0.5s ease;\n  transition: background-color 0.5s ease;\n}\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<app-navbar> </app-navbar>\n\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>iPortfolio</h1>\n  <p class=\"lead\">iPortfolio is an online platform to showcase your creative work, as well as to update and broadcast your portfolio in one place to a wide, engaged audience.</p>\n  <div *ngIf=\"!authService.checkLoggedIn()\">\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Get Started</a> <a class=\"btn btn-primary\" [routerLink]=\"['/login']\">Log in</a>\n  </div>\n  <div *ngIf=\"authService.checkLoggedIn() && !portfolio\">\n    <a class=\"btn btn-primary \" [routerLink]=\"[ '/profile'] \">Create Your Portfolio</a>\n  </div>\n  <div *ngIf=\"authService.checkLoggedIn() && portfolio\">\n    <a class=\"btn btn-primary \" [routerLink]=\"[ '/profile'] \">Add work to your portfolio</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"login\">\n</form>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a class=\"navbar-brand\" href=\"/\">iPortfolio</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"[ '/search']\">Portfolios</a></li>\n        <li *ngIf=\"authService.checkLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"[ '/profile']\">Profile</a></li>\n        <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"[ '/login']\">Login</a></li>\n        <li *ngIf=\"!authService.checkLoggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"[ '/register']\">Register</a></li>\n        <li><a *ngIf=\"authService.checkLoggedIn()\" (click)=\"onLogoutClick()\">Logout</a></li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1 style=\"text-align:center;\">Profile</h1>\n</header>\n<div *ngIf=\"student\">\n  <div class=container>\n    <div class=\"row\">\n      <div class=\"row-md-6\">\n        <h3 class=\"page-header\">Personal Information</h3>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <br /><br />\n            <div *ngIf=\"portfolio\">\n              <label>Name:</label>\n              <label>{{portfolio.name}}</label> <br />\n            </div>\n            <label>Username: </label>\n            <label>{{student.username}}</label> <br />\n            <label>Email: </label>\n            <label>{{student.email}}</label> <br />\n            <label>University ID: </label>\n            <label>{{student.studentId}}</label>\n          </div>\n          <div class=\"col-md-2\" align=\"center\" *ngIf=\"portfolio && portfolio.image\">\n            <img src={{portfolio.image}} height=\"150\" width=\"110\" style=\"margin:25px\" class=\"img-rounded\" alt={{student.username}}>\n            <div *ngIf=\"!portfolio.image\">\n              <img class=\"card-img-top\" src=\"/assets/default-profile.png\" height=\"150\" width=\"110\" style=\"margin:25px\" class=\"img-rounded\" alt=\"/assets/default-profile.png\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row-md-6\" *ngIf=\"!projectCount==0\">\n        <h3 class=\"page-header\">Projects</h3>\n        <div class=\"row\">\n          <div class=\"card-group\">\n            <div *ngFor=\"let project of projects\">\n              <div class=\"card col-md-4\">\n                <div class=\"card-block\">\n                  <h4 class=\"card-title\">{{project.title}} </h4>\n                  <p class=\"card-text\"></p>\n                  <p class=\"card-text\"><small class=\"text-muted\"></small></p>\n                  <div *ngIf=\"project.type !=  'screenshot'\">\n                    <a href={{project.details}} class=\"btn btn-primary card-link\">Visit Website</a>\n                  </div>\n                  <div *ngIf=\"project.type ==  'screenshot'\">\n                    <a class=\"btn btn-primary card-link\" (click)=\"myModal.open()\">View Project</a>\n                  </div>\n                </div>\n              </div>\n              <modal #myModal>\n                <modal-header>\n                  <h1>{{project.title}}</h1>\n                </modal-header>\n                <modal-content>\n                  <div class=\"modal-body row\">\n                    <div *ngFor=\"let screenshot of project.screenshots\">\n                      <div *ngIf=\"screenshot\">\n                        <div class=\"col-md-6 thumb\">\n                          <a class=\"thumbnail\" href={{screenshot}} target=\"_blank\">\n                            <img src={{screenshot}} class=\"img-rounded\">\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </modal-content>\n                <modal-footer>\n                  <button class=\"btn btn-primary \" (click)=\"myModal.close() \">close</button>\n                </modal-footer>\n              </modal>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row-md-6 \" *ngIf=\"portfolio \">\n        <div class=\"form-container \">\n          <h3 class=\"page-header \">Add New Project</h3>\n          <form (submit)=\"onSubmitProject() \">\n            <div class=\"form-group \">\n              <label>Title</label>\n              <input name=\"title \" type=\"text \" class=\"form-control \" placeholder=\"Title \" [(ngModel)]=\"title \" required>\n            </div>\n            <div class=\"form-group \">\n              <label>Type</label>\n              <div>\n                <select class=\"form-control \" [(ngModel)]=\"type \" name=\"type \" required>\n                  <option value=\"url\">URL</option>\n                  <option value=\"screenshot\">Screenshot</option>\n                  <option value=\"repository\">Repository</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group \" *ngIf=\" type=='url' || type=='repository' \">\n              <label>Link</label>\n              <input name=\"details \" type=\"url \" class=\"form-control \" placeholder=\"Link \" [(ngModel)]=\"details\" required>\n            </div>\n            <div class=\"form-group \" *ngIf=\" type=='screenshot' \">\n              <label>Screenshot(s) (at least 1 file)</label>\n              <input type=\"file\" (change)=\"fileChangeEventProject($event)\" placeholder=\"Upload file...\" required-minimum=\"1\" multiple>\n            </div>\n            <p align=\"center \">\n              <input type=\"submit\" class=\"btn btn-primary \" value=\"Submit\">\n            </p>\n          </form>\n        </div>\n      </div>\n      <div class=\"row-md-6 \" *ngIf=\"!portfolio \">\n        <div class=\"form-container \">\n          <h3 class=\"page-header \">Create Portfolio</h3>\n          <form (ngSubmit)=\"onSubmitPortfolio()\">\n            <div class=\"form-group \">\n              <label for=\"InputTitle \">Name</label>\n              <input type=\"text \" placeholder=\"Full Name\" [(ngModel)]=\"name \" name=\"name \" class=\"form-control \" required>\n            </div>\n            <div class=\"form-group \">\n              <label>Profile picture(optional)</label>\n              <input type=\"file\" (change)=\"fileChangeEvent($event)\" placeholder=\"upload a file... \">\n            </div>\n            <div class=\"form-group \">\n              <label>Title</label>\n              <input name=\"title \" type=\"text \" class=\"form-control \" placeholder=\"Title \" [(ngModel)]=\"title \" required>\n            </div>\n            <div class=\"form-group \">\n              <label>Type</label>\n              <div>\n                <select class=\"form-control \" [(ngModel)]=\"type \" name=\"type \" required>\n                  <option value=\"url\">URL</option>\n                  <option value=\"screenshot\">Screenshot</option>\n                  <option value=\"repository\">Repository</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group \" *ngIf=\" type=='url' || type=='repository' \">\n              <label>Link</label>\n              <input name=\"details \" type=\"url \" class=\"form-control \" placeholder=\"Link \" [(ngModel)]=\"details \" required>\n            </div>\n            <div class=\"form-group \" *ngIf=\" type=='screenshot' \">\n              <label>Screenshot(s) (at least 1 file)</label>\n              <input type=\"file\" (change)=\"fileChangeEventProject($event)\" placeholder=\"Upload file...\" required-minimum=\"1\" multiple>\n            </div>\n            <p align=\"center \">\n              <input type=\"submit\" class=\"btn btn-primary \" value=\"Submit \">\n            </p>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" plaecholder=\"Username\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Type</label>\n      <div>\n        <select class=\"form-control\" [(ngModel)]=\"type\" name=\"type\">\n          <option value=\"client\">Client</option>\n          <option value=\"student\">Student</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"type ==  'student' \">\n      <label>University Id</label>\n      <input type=\"text\" [(ngModel)]=\"studentId\" name=\"studentId\" class=\"form-control \">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary \" value=\"Submit\">\n  </div>\n</form>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Portfolios</h2>\n<div class=\"card-group\">\n  <div *ngFor=\"let portfolio of portfolios; let i=index;\">\n    <div class=\"card col-md-4\">\n      <div class=\"card-block\">\n        <div *ngIf=\"portfolio.image\">\n          <img class=\"card-img-top\" src={{portfolio.image}} height=\"150\" width=\"110\" style=\"margin:25px\" class=\"img-rounded\" alt=\"/assets/default-profile.png\">\n        </div>\n        <div *ngIf=\"!portfolio.image\">\n          <img class=\"card-img-top\" src=\"/assets/default-profile.png\" height=\"150\" width=\"110\" style=\"margin:25px\" class=\"img-rounded\" alt=\"/assets/default-profile.png\">\n        </div>\n        <h4 class=\"card-title\">{{portfolio.name}} </h4>\n        <p class=\"card-text\"></p>\n        <p class=\"card-text\"><small class=\"text-muted\"></small></p>\n        <div *ngIf=\"portfolio.projects[0].type!='screenshot'\">\n          <a href={{portfolio.projects[0].details}} class=\"btn btn-primary card-link\">Visit Website</a>\n        </div>\n        <div *ngIf=\"portfolio.projects[0].type=='screenshot'\">\n          <a class=\"btn btn-primary card-link\" (click)=\"myModal.open()\">View Project</a>\n          <modal #myModal>\n            <modal-header>\n              <h1>{{portfolio.projects[0].title}}</h1>\n            </modal-header>\n            <modal-content>\n              <div class=\"modal-body row\">\n                <div *ngFor=\"let screenshot of portfolio.projects[0].screenshots\">\n                  <div *ngIf=\"screenshot\">\n                    <div class=\"col-md-6 thumb\">\n                      <a class=\"thumbnail\" href={{screenshot}} target=\"_blank\">\n                        <img src={{screenshot}} class=\"img-rounded\">\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </modal-content>\n            <modal-footer>\n              <button class=\"btn btn-primary \" (click)=\"myModal.close() \">close</button>\n            </modal-footer>\n          </modal>\n        </div>\n        <div *ngIf=\"portfolio.projects.length!=1\">\n          <div *ngIf=\"portfolio.projects[1].type!='screenshot'\">\n            <a href={{portfolio.projects[1].details}} class=\"btn btn-primary card-link\">Visit Website</a>\n          </div>\n          <div *ngIf=\"portfolio.projects[1].type=='screenshot'\">\n            <a class=\"btn btn-primary card-link\" (click)=\"myModal.open()\">View Project</a>\n            <modal #myModal>\n              <modal-header>\n                <h1>{{portfolio.projects[1].title}}</h1>\n              </modal-header>\n              <modal-content>\n                <div class=\"modal-body row\">\n                  <div *ngFor=\"let screenshot of portfolio.projects[1].screenshots\">\n                    <div *ngIf=\"screenshot\">\n                      <div class=\"col-md-6 thumb\">\n                        <a class=\"thumbnail\" href={{screenshot}} target=\"_blank\">\n                          <img src={{screenshot}} class=\"img-rounded\">\n                        </a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </modal-content>\n              <modal-footer>\n                <button class=\"btn btn-primary \" (click)=\"myModal.close() \">close</button>\n              </modal-footer>\n            </modal>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ })

},[727]);
//# sourceMappingURL=main.bundle.map