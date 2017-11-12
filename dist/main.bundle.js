webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/main/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_messages_messages_component__ = __webpack_require__("../../../../../src/app/main/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_activity_activity_component__ = __webpack_require__("../../../../../src/app/main/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_nav_item_nav_item_component__ = __webpack_require__("../../../../../src/app/main/nav-item/nav-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_tasks_tasks_component__["a" /* TasksComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_activity_activity_component__["a" /* ActivityComponent */],
            __WEBPACK_IMPORTED_MODULE_10__main_nav_item_nav_item_component__["a" /* NavItemComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatIconModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"flex-navbar\" [@Toggle]=\"state\">\n    <ul class=\"nav-left\">\n        <li class=\"nav-link-toggle-sidebar nav-link\">\n            <a href=\"#\">\n                <span class=\"caret-left\"></span>\n                <span class=\"glyphicon glyphicon-menu-hamburger\" (click)=\"toggleSideBar()\"></span>\n            </a>\n        </li>\n        <li class=\"nav-link-search nav-link\">\n            <a href=\"#\"><span class=\"glyphicon glyphicon-search\"></span></a>\n        </li>\n    </ul>\n    <ul class=\"nav-right\">\n        <li class=\"nav-link-add-project nav-link\">\n            <a href=\"#\">\n                <button class=\"add-project-btn\">\n                    <span class=\"plus-add-project\">+</span>\n                Add project\n              </button>\n            </a>\n        </li>\n        <li class=\"nav-link-message nav-link\">\n            <a href=\"#\"><span class=\"glyphicon glyphicon-envelope \"></span></a>\n        </li>\n        <li class=\"nav-bell nav-link-bell nav-link\">\n            <a href=\"#\"><span class=\"glyphicon glyphicon-bell \"><span class=\"badge\">{{navBarItem.notifications}}</span></span></a>\n        </li>\n        <li class=\"nav-link-profile-img\">\n            <a href=\"#\">\n                <img class=\"img-profile\" src=\"{{navBarItem.image}}\" alt=\"profile\">\n                <span class=\"caret\"></span>\n            </a>\n        </li>\n    </ul>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover,\na:active,\na:visited,\na:link {\n  text-decoration: none; }\n\nbutton:active,\nbutton:visited {\n  border: none; }\n\n.flex-navbar {\n  background: #ffffff;\n  border-bottom: 1px solid #d4d9e3;\n  position: fixed;\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -ms-flex-wrap: wrap-reverse;\n      flex-wrap: wrap-reverse;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  min-height: 70px;\n  box-sizing: border-box; }\n  @media (max-width: 1000px) {\n    .flex-navbar {\n      min-height: 140px; } }\n  .flex-navbar ul {\n    margin: 0;\n    list-style: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .flex-navbar ul li {\n      margin: 0 30px; }\n  .flex-navbar .nav-right,\n  .flex-navbar .nav-left {\n    -ms-flex-preferred-size: 280px;\n        flex-basis: 280px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .flex-navbar .nav-right .caret-left,\n    .flex-navbar .nav-left .caret-left {\n      display: inline-block;\n      margin-left: 2px;\n      vertical-align: middle;\n      border-bottom: 4px solid transparent;\n      border-top: 4px solid transparent;\n      border-right: 4px solid;\n      margin-top: -7px;\n      color: #0e1a35; }\n    .flex-navbar .nav-right .glyphicon,\n    .flex-navbar .nav-left .glyphicon {\n      color: #0e1a35;\n      font-size: 24px;\n      position: relative;\n      top: 5px; }\n    .flex-navbar .nav-right .add-project-btn,\n    .flex-navbar .nav-left .add-project-btn {\n      font-family: \"Roboto\", sans-serif;\n      font-weight: 300;\n      background: #5584ff;\n      border: none;\n      width: 130px;\n      height: 35px;\n      color: white;\n      font-size: 14px;\n      padding: 4px;\n      border-radius: 25px; }\n      .flex-navbar .nav-right .add-project-btn .plus-add-project,\n      .flex-navbar .nav-left .add-project-btn .plus-add-project {\n        margin-right: 2px;\n        font-size: 16px;\n        color: #aac2ff;\n        text-align: center;\n        font-weight: bold; }\n    .flex-navbar .nav-right .badge,\n    .flex-navbar .nav-left .badge {\n      position: absolute;\n      top: -30%;\n      left: 50%;\n      font-size: 15px;\n      color: white;\n      background: #5584ff;\n      border-radius: 50%;\n      border: 1px solid white;\n      width: 20px;\n      height: 20px;\n      text-align: center;\n      padding: 0; }\n    .flex-navbar .nav-right .nav-link-profile-img,\n    .flex-navbar .nav-left .nav-link-profile-img {\n      min-width: 82px;\n      height: 57px; }\n    .flex-navbar .nav-right .img-profile,\n    .flex-navbar .nav-left .img-profile {\n      height: 57px;\n      width: 57px;\n      border-radius: 50%; }\n    .flex-navbar .nav-right .caret,\n    .flex-navbar .nav-left .caret {\n      color: #0e1a35; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.sideBarClosed = false;
        this.closeSideBarClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.state = 'out';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.navBarItem = {
            image: 'assets/img/profile.png',
            notifications: 3,
        };
    };
    HeaderComponent.prototype.toggleSideBar = function () {
        this.closeSideBarClick.emit();
        this.sideBarClosed = true;
        this.state == 'in' ? this.state = 'out' : this.state = 'in';
    };
    return HeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "closeSideBarClick", void 0);
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('Toggle', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'padding-left': '270px'
                    // transform: 'translateX(270px)',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'padding-left': '0'
                    // transform: 'translateX(0)',
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('700ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('700ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"flex-card\">\n    <li class=\"card-header\">\n        <p class=\"card-header-name\">Activity</p>\n        <div class=\"badges\">\n            <span class=\"card-badge-empty\"></span>\n            <span class=\"card-badge \">{{notification}}</span>\n        </div>\n    </li>\n    <li class=\"card-line card-line-activity\" *ngFor=\"let activity of activities\">\n        <span class=\"card-badge-activity\"><img src=\"{{activity.img}}\" alt=\"{{activity.img}}\" class=\"profile-img-activity card-badge-activity\"></span>\n        <span class=\"activity-text\">\n        <p class=\"first-line\">{{activity.name}} <span class=\"activity-text-gray\">{{activity.activity }}</span> {{activity.activityName}}</p>\n        <p class=\"days\"> <span class=\"glyphicon glyphicon-time\"></span>{{activity.time}}</p>\n        </span>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/main/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activityData_service__ = __webpack_require__("../../../../../src/app/main/activity/activityData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityComponent = (function () {
    function ActivityComponent(activitiesList) {
        this.activitiesList = activitiesList;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        this.activities = this.activitiesList.activities;
        this.notification = this.activitiesList.notification;
    };
    return ActivityComponent;
}());
ActivityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-activity',
        template: __webpack_require__("../../../../../src/app/main/activity/activity.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__activityData_service__["a" /* dataService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__activityData_service__["a" /* dataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activityData_service__["a" /* dataService */]) === "function" && _a || Object])
], ActivityComponent);

var _a;
//# sourceMappingURL=activity.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/activity/activity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activity; });
var activity = (function () {
    function activity(name, activity, activityName, time, img) {
        this.name = name;
        this.activity = activity;
        this.activityName = activityName;
        this.time = time;
        this.img = img;
    }
    return activity;
}());

//# sourceMappingURL=activity.model.js.map

/***/ }),

/***/ "../../../../../src/app/main/activity/activityData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activity_model__ = __webpack_require__("../../../../../src/app/main/activity/activity.model.ts");

var dataService = (function () {
    function dataService() {
        this.notification = 10;
        this.activities = [
            new __WEBPACK_IMPORTED_MODULE_0__activity_model__["a" /* activity */]("Nina Jones", " added a new project ", "Free UI Kit", " just now", "assets/img/nina.png"),
            new __WEBPACK_IMPORTED_MODULE_0__activity_model__["a" /* activity */]("James Smith", " commented project ", "Free PSD Template", " 40 minutes ago", "assets/img/james.png"),
            new __WEBPACK_IMPORTED_MODULE_0__activity_model__["a" /* activity */]("Alex Clooney", " completed task ", "Symu Website", " 1 hour ago", "assets/img/alexC.png"),
            new __WEBPACK_IMPORTED_MODULE_0__activity_model__["a" /* activity */]("Alexandra Spears", " added a new project", " Free PSD (...)", " 3 hours ago", "assets/img/alexsandra.png")
        ];
    }
    return dataService;
}());

//# sourceMappingURL=activityData.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header (closeSideBarClick)=\"toggleMenu()\"></app-header>\n<!-- <app-side-bar  ></app-side-bar> -->\n<nav class=\"side-bar-container\" [@Toggle]=\"state\">\n    <ul class=\"side-bar\">\n        <app-nav-item></app-nav-item>\n    </ul>\n</nav>\n<div class=\"flex-container\" [@containerState]=\"containerState\">\n\n    <div class=\"charts-header\">\n        <h1 class=\"user-name\">Hello {{user}}! </h1>\n    </div>\n    <div class=\"charts-flex\">\n        <div class=\"box sales\"></div>\n        <div class=\"box report\"></div>\n    </div>\n    <div class=\"lists-flex\">\n        <div class=\"box tasks\">\n            <app-tasks></app-tasks>\n        </div>\n        <div class=\"box messages\">\n            <app-messages></app-messages>\n        </div>\n        <div class=\"box activities \">\n            <app-activity></app-activity>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover,\na:active,\na:visited,\na:link {\n  text-decoration: none;\n  color: none;\n  background: none; }\n\nul {\n  margin: 0;\n  padding: 0; }\n\n.flex-container {\n  background: #f6f7fa;\n  /* width: 100%; */\n  padding: 90px 40px 100px 40px;\n  margin-left: 270px; }\n  @media (max-width: 1100px) {\n    .flex-container {\n      padding: 150px 30px 100px 20px; } }\n  .flex-container .user-name {\n    font-family: \"Roboto\", sans-serif;\n    font-weight: 500; }\n  .flex-container .charts-flex,\n  .flex-container .lists-flex {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 36px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 100%;\n            flex: 1 1 100%;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    @media (max-width: 1100px) {\n      .flex-container .charts-flex,\n      .flex-container .lists-flex {\n        margin-left: 0;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; } }\n    .flex-container .charts-flex .box,\n    .flex-container .lists-flex .box {\n      border: 1px solid #d4d9e3;\n      background: #ffffff; }\n      @media (max-width: 1100px) {\n        .flex-container .charts-flex .box,\n        .flex-container .lists-flex .box {\n          -webkit-box-flex: 1;\n              -ms-flex: 1 1 100%;\n                  flex: 1 1 100%;\n          margin-top: 36px; } }\n  .flex-container .charts-flex .sales,\n  .flex-container .charts-flex .report {\n    height: 428px; }\n  .flex-container .charts-flex .sales {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 33%;\n            flex: 1 1 33%; }\n  .flex-container .charts-flex .report {\n    -webkit-box-flex: 2;\n        -ms-flex: 2 1 55%;\n            flex: 2 1 55%;\n    margin-left: 60px;\n    padding: 5px; }\n    @media (max-width: 1100px) {\n      .flex-container .charts-flex .report {\n        margin-left: 0; } }\n    .flex-container .charts-flex .report img {\n      height: 400px;\n      width: 100%; }\n  .flex-container .lists-flex .tasks,\n  .flex-container .lists-flex .messages,\n  .flex-container .lists-flex .activities {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 25%;\n            flex: 1 1 25%; }\n  .flex-container .lists-flex .activities,\n  .flex-container .lists-flex .messages {\n    margin-left: 50px; }\n    @media (max-width: 1100px) {\n      .flex-container .lists-flex .activities,\n      .flex-container .lists-flex .messages {\n        margin-left: 0; } }\n\n.flex-card .card-header,\n.flex-card .card-line {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1em;\n  height: 105px;\n  border-bottom: 1px solid #eee;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold; }\n\n.flex-card .card-line-activity {\n  border-bottom: none; }\n\n.flex-card .card-header {\n  height: 88px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .flex-card .card-header .card-header-name {\n    font-size: 20px;\n    margin: 0; }\n  .flex-card .card-header .badges {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-preferred-size: 100px;\n        flex-basis: 100px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.flex-card .card-badge, .flex-card .card-badge-two,\n.flex-card .card-badge-activity,\n.flex-card .card-badge-tasks,\n.flex-card .card-badge-messages {\n  background: #5384ff;\n  border-radius: 50%;\n  -ms-flex-preferred-size: 45px !important;\n      flex-basis: 45px !important;\n  height: 45px !important;\n  color: white;\n  text-align: center;\n  line-height: 45px !important;\n  font-size: 18px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: bold;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flex-card .card-badge-two {\n  background: #f83c7b;\n  margin-left: 10px; }\n\n.flex-card .profile-img-activity,\n.flex-card .profile-img-messages {\n  height: 45px;\n  width: 45px;\n  border-radius: 50%; }\n\n.flex-card .activity-text,\n.flex-card .task-text,\n.flex-card .message-text {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  padding-left: 30px;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 500; }\n\n.flex-card .task-text {\n  -ms-flex-preferred-size: 86%;\n      flex-basis: 86%; }\n\n.flex-card .activity-text-gray {\n  color: #a2acc2;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal; }\n\n.flex-card .message-text {\n  font-size: 13px; }\n  .flex-card .message-text .message-name {\n    font-size: 16px; }\n  .flex-card .message-text .message-time {\n    color: #a2acc2;\n    font-weight: normal;\n    font-size: 13px; }\n\n.flex-card .glyphicon-option-vertical {\n  font-weight: normal;\n  font-size: 20px; }\n  .flex-card .glyphicon-option-vertical .readed-bg {\n    background: #f4f5f8; }\n\n.flex-card .glyphicon {\n  color: #8492af; }\n\n.flex-card .icon-flipped {\n  transform: scaleX(-1);\n  -moz-transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n  -ms-transform: scaleX(-1); }\n\n.flex-card .days {\n  font-weight: normal;\n  font-size: 13px;\n  color: #a2acc2; }\n  .flex-card .days .glyphicon {\n    margin-right: 5px; }\n\n.flex-card .days-delay {\n  color: #f84984; }\n\n.flex-card .activity-text,\n.flex-card .activity-body,\n.flex-card .activity-time,\n.flex-card .activity-name,\n.flex-card .message-text,\n.flex-card .message-body,\n.flex-card .message-time,\n.flex-card .message-name,\n.flex-card .days,\n.flex-card .first-line {\n  margin: 0 0 2px; }\n\n.side-bar-container {\n  min-width: 270px;\n  background: #0e1a35;\n  position: fixed;\n  z-index: 11;\n  top: 0;\n  left: 0;\n  bottom: 0; }\n  .side-bar-container .side-bar,\n  .side-bar-container app-nav-item {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    color: white;\n    font-family: \"Roboto\", sans-serif; }\n\n.header {\n  height: 70px;\n  padding: 0px 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .header div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 100%;\n            flex: 1 0 100%; }\n    .header div h2 {\n      margin: 0; }\n  .header .logo-image {\n    text-align: center;\n    height: 50px;\n    width: 50px;\n    margin-right: 15px; }\n\n.sidebar-link {\n  padding: 30px 40px;\n  border-left: 13px solid #0e1a35;\n  height: 80px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 17px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .sidebar-link:hover {\n    border-left: 13px solid #5584ff;\n    background: #122143; }\n  .sidebar-link div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 100%;\n            flex: 1 0 100%; }\n  .sidebar-link .item-image {\n    width: 17px;\n    height: 17px;\n    margin-right: 15px; }\n  .sidebar-link:nth-child(2) {\n    margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
        this.user = " John";
        this.sideBarClosed = true;
        this.state = 'out';
        this.containerState = 'out';
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.toggleMenu = function () {
        this.sideBarClosed = false;
        this.state == 'in' ? this.state = 'out' : this.state = 'in';
        this.containerState == 'in' ? this.containerState = 'out' : this.containerState = 'in';
        // this.sideBarClosed = true;
        console.log("sideBarClosed: " + this.sideBarClosed);
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('Toggle', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    // transform: 'translate3d(0, 0, 0)',
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    // transform: 'translate3d(100%,0,0)',
                    transform: 'translateX(-100%)',
                    'width': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('700ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('700ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* trigger */])('containerState', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'margin-left': '270px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_30" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_31" /* style */])({
                    'margin-left': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('700ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_32" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* animate */])('700ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"flex-card\">\n    <li class=\"card-header\">\n        <p class=\"card-header-name\"> Messages</p>\n        <div class=\"badges\">\n            <span class=\"card-badge-empty\"></span>\n            <span class=\"card-badge card-badge-two\">{{notification}}</span>\n        </div>\n    </li>\n    <li class=\"card-line\" *ngFor=\"let message of messages\" [ngClass]=\"{'readed-bg': message.readed == true}\">\n        <span class=\"card-badge-messages \"><img src=\"{{message.img}}\" alt=\"{{message.img}}\" class=\"profile-img-messages card-badge-messages\"></span>\n        <span class=\"message-text\">\n      <p class=\"message-name\"> {{message.name}} <span class=\"message-time\">{{message.time}} ago</span></p>\n        <p class=\"message-body\">{{message.messageBody}}</p>\n        <span class=\"glyphicon glyphicon-share-alt icon-flipped\"></span>\n        <span class=\"glyphicon glyphicon-cog\"></span>\n        </span>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/main/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messagesData_service__ = __webpack_require__("../../../../../src/app/main/messages/messagesData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = (function () {
    function MessagesComponent(messagesList) {
        this.messagesList = messagesList;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.notification = this.messagesList.notification;
        this.messages = this.messagesList.messages;
    };
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/main/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__messagesData_service__["a" /* messagesData */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__messagesData_service__["a" /* messagesData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__messagesData_service__["a" /* messagesData */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/messages/messages.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return message; });
var message = (function () {
    function message(name, time, messageBody, readed, img) {
        this.name = name;
        this.time = time;
        this.messageBody = messageBody;
        this.readed = readed;
        this.img = img;
    }
    return message;
}());

//# sourceMappingURL=messages.model.js.map

/***/ }),

/***/ "../../../../../src/app/main/messages/messagesData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messagesData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__messages_model__ = __webpack_require__("../../../../../src/app/main/messages/messages.model.ts");

var messagesData = (function () {
    function messagesData() {
        this.notification = 2;
        this.messages = [
            new __WEBPACK_IMPORTED_MODULE_0__messages_model__["a" /* message */]("Nina Jones", " 5 minutes ", "Hey You! It’s me again :-) I attached (...)", true, "../../assets/img/nina.png"),
            new __WEBPACK_IMPORTED_MODULE_0__messages_model__["a" /* message */]("Nina Jones", " About 20 hours ", " Hey! I attached some new PSD fil (...)", true, "../../assets/img/nina.png"),
            new __WEBPACK_IMPORTED_MODULE_0__messages_model__["a" /* message */]("James Smith", " 2 days ", "Good morning, you are fired! ", false, "../../assets/img/james.png"),
            new __WEBPACK_IMPORTED_MODULE_0__messages_model__["a" /* message */]("Nina Jones", " About 2 weeks ", "Hello! Could You bring me coffee", false, "../../assets/img/nina.png"),
        ];
    }
    return messagesData;
}());

//# sourceMappingURL=messagesData.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/nav-item/nav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"header\">\n    <div>\n        <img class=\"logo-image\" src=\"{{logo.icon}}\" alt=\"{{logo.icon}}\">\n        <h2 class=\"logo-text\">{{logo.item}}</h2>\n    </div>\n</li>\n<li class=\"sidebar-link\" *ngFor=\"let item of items\">\n    <div>\n        <img class=\"item-image\" src=\"{{item.icon}}\" alt=\"{{item.icon}}\"> {{item.item}}\n        <!-- <mat-icon svgIcon=\"home\"></mat-icon>{{item.item}} -->\n    </div>\n</li>"

/***/ }),

/***/ "../../../../../src/app/main/nav-item/nav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navData_service__ = __webpack_require__("../../../../../src/app/main/nav-item/navData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavItemComponent = (function () {
    function NavItemComponent(itemsList) {
        this.itemsList = itemsList;
    }
    NavItemComponent.prototype.ngOnInit = function () {
        this.logo = this.itemsList.logo;
        this.items = this.itemsList.items;
    };
    return NavItemComponent;
}());
NavItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav-item',
        template: __webpack_require__("../../../../../src/app/main/nav-item/nav-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__navData_service__["a" /* navData */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__navData_service__["a" /* navData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__navData_service__["a" /* navData */]) === "function" && _a || Object])
], NavItemComponent);

var _a;
//# sourceMappingURL=nav-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/nav-item/navData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navData; });
var navData = (function () {
    function navData() {
        this.logo = {
            icon: 'assets/img/icons/logo.png', item: 'Merkury'
        };
        this.items = [
            { icon: 'assets/img/icons/home.png', item: 'Home' },
            { icon: 'assets/img/icons/workflow.png', item: 'Workflow' },
            { icon: 'assets/img/icons/stat.png', item: 'Statistic' },
            { icon: 'assets/img/icons/calendar.png', item: 'Calendar' },
            { icon: 'assets/img/icons/users.png', item: 'Users' },
            { icon: 'assets/img/icons/settings.png', item: 'Settings' },
        ];
    }
    return navData;
}());

//# sourceMappingURL=navData.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"flex-card\">\n    <li class=\"card-header\">\n        <p class=\"card-header-name\">Tasks</p>\n        <div class=\"badges\">\n            <span class=\"card-badge\">{{notifications.blueNotification}}</span>\n            <span class=\"card-badge-two\">{{notifications.redNotification}}</span>\n        </div>\n    </li>\n    <li class=\"card-line\" *ngFor=\"let task of tasks\">\n        <span class=\"card-badge-tasks\">{{task.profile}}</span>\n        <span class=\"task-text\">\n          <p class=\"first-line\">{{task.title}}</p> \n          <p class=\"days days-delay\" *ngIf=\"task.delay == true; else red\"> <span class=\"glyphicon glyphicon-time days-delay\"></span>{{task.delayInDayes}} days delays</p>\n        <ng-template #red>\n            <p class=\"days\"> <span class=\"glyphicon glyphicon-time\"></span>{{task.delayInDayes}} days left</p>\n        </ng-template>\n        </span>\n        <span class=\"glyphicon glyphicon-option-vertical\"></span>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/main/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasksData_service__ = __webpack_require__("../../../../../src/app/main/tasks/tasksData.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TasksComponent = (function () {
    function TasksComponent(tasksList) {
        this.tasksList = tasksList;
    }
    TasksComponent.prototype.ngOnInit = function () {
        this.notifications = this.tasksList.notifications;
        this.tasks = this.tasksList.tasks;
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-tasks',
        template: __webpack_require__("../../../../../src/app/main/tasks/tasks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__tasksData_service__["a" /* tasksData */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tasksData_service__["a" /* tasksData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tasksData_service__["a" /* tasksData */]) === "function" && _a || Object])
], TasksComponent);

var _a;
//# sourceMappingURL=tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/tasks/tasks.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tasks; });
var tasks = (function () {
    function tasks(title, profile, delay, delayInDayes) {
        this.title = title;
        this.profile = profile;
        this.delay = delay;
        this.delayInDayes = delayInDayes;
    }
    return tasks;
}());

//# sourceMappingURL=tasks.model.js.map

/***/ }),

/***/ "../../../../../src/app/main/tasks/tasksData.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tasksData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tasks_model__ = __webpack_require__("../../../../../src/app/main/tasks/tasks.model.ts");

var tasksData = (function () {
    function tasksData() {
        this.notifications = { blueNotification: 5, redNotification: 2 };
        this.tasks = [
            new __WEBPACK_IMPORTED_MODULE_0__tasks_model__["a" /* tasks */](" New website for Symu.co", "N", true, 5),
            new __WEBPACK_IMPORTED_MODULE_0__tasks_model__["a" /* tasks */]("Free business PSD Template", "F", true, 2),
            new __WEBPACK_IMPORTED_MODULE_0__tasks_model__["a" /* tasks */]("New logo for JCD.pl", "N", false, 5),
            new __WEBPACK_IMPORTED_MODULE_0__tasks_model__["a" /* tasks */]("Free Icons Set vol. 3", "F", false, 10)
        ];
    }
    return tasksData;
}());

//# sourceMappingURL=tasksData.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map