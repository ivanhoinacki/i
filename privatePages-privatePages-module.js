(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privatePages-privatePages-module"],{

/***/ "./src/app/pages/privatePages/privatePages-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/privatePages/privatePages-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PrivatePagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePagesRoutingModule", function() { return PrivatePagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _privatePages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privatePages.component */ "./src/app/pages/privatePages/privatePages.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/pages/privatePages/main/main.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/pages/privatePages/resume/resume.component.ts");






var routes = [{
        path: '',
        component: _privatePages_component__WEBPACK_IMPORTED_MODULE_3__["PrivatePagesComponent"],
        children: [
            { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] },
            { path: 'resume', component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"] },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: 'page-not-found' }
        ],
    }];
var PrivatePagesRoutingModule = /** @class */ (function () {
    function PrivatePagesRoutingModule() {
    }
    PrivatePagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], PrivatePagesRoutingModule);
    return PrivatePagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/privatePages/privatePages.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/privatePages/privatePages.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conteudo-injetado\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<footer>\r\n    <div class=\"button-background\" (click)=\"onClickOverlay()\">\r\n        <div class=\"button-toggle\" id=\"toggle\">\r\n            <span class=\"top\"></span>\r\n            <span class=\"middle_1\"></span>\r\n            <span class=\"middle_2\"></span>\r\n            <span class=\"bottom\"></span>\r\n        </div>\r\n    </div>\r\n    <!--menu overlay-->\r\n    <div class=\"overlay\" id=\"overlay\">\r\n        <nav>\r\n            <ul>\r\n                <li>\r\n                    <a [routerLink]=\"['/']\" (click)=\"onClickOverlay()\">Home</a>\r\n                </li>\r\n                <li>\r\n                    <a [routerLink]=\"['./resume']\" (click)=\"onClickOverlay()\">Resume</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"overlay-about\">\r\n                <img src=\"https://s.gravatar.com/avatar/dde18c27d4089be3e93db25c42456247?size=40&default=retro\" align=\"middle\"/>\r\n                <span>\r\n                    <a target=\"_blank\" href=\"https://www.linkedin.com/in/ivanhoinacki/\">&nbsp;ivanhoinacki</a>\r\n                </span>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/pages/privatePages/privatePages.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/privatePages/privatePages.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n* Site footer\r\n*/\n.site-footer {\n  background: #f5f5f5;\n  width: 100%;\n  height: 100px;\n  box-shadow: 0 -1px 4px #ddd;\n  margin-top: 3px; }\n.site-footer p {\n  margin: 20px 20% auto 20%;\n  font-size: 80%;\n  color: #939291;\n  display: inline-block; }\n/* Generated by less 2.4.0 */\n.button-background {\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  background-color: #fff;\n  box-shadow: 0px 0px 4px #ddd;\n  opacity: 0.6;\n  border-radius: 50px 50px;\n  width: 50px;\n  height: 50px;\n  margin: auto;\n  z-index: 200; }\n.button-background:hover {\n  box-shadow: 0px 0px 5px #888;\n  cursor: pointer; }\n.button-toggle {\n  position: inherit;\n  bottom: 43px;\n  right: 30px;\n  height: 22px;\n  width: 30px;\n  cursor: pointer;\n  overflow: hidden;\n  transition: opacity .25s ease;\n  -webkit-transition: opacity .25s ease; }\n.button-toggle.active .top {\n  transform: translateY(9px) translate(0) rotate(45deg);\n  -webkit-transform: translateY(9px) translate(0) rotate(45deg);\n  background: #525151; }\n.button-toggle.active .middle_1 {\n  transform: translateX(-100%);\n  -webkit-transform: translateX(-100%);\n  background: #525151; }\n.button-toggle.active .middle_2 {\n  transform: translateX(100%);\n  -webkit-transform: translateX(100%);\n  background: #525151; }\n.button-toggle.active .bottom {\n  transform: translateY(-9px) translateX(0) rotate(-45deg);\n  -webkit-transform: translateY(-9px) translateX(0) rotate(-45deg);\n  background: #525151; }\n.button-toggle:hover {\n  opacity: .7; }\n.button-toggle span {\n  background: #525151;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  width: 30px;\n  transition: all .35s ease; }\n.button-toggle span:nth-of-type(2) {\n  top: 9px;\n  left: -50%; }\n.button-toggle span:nth-of-type(3) {\n  top: 9px;\n  left: 50%; }\n.button-toggle span:nth-of-type(4) {\n  top: 18px; }\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 0%;\n  opacity: 0;\n  background: black;\n  border-radius: 5px;\n  transition: opacity .35s ease, visibility .35s ease, width .35s ease;\n  visibility: hidden;\n  z-index: 100; }\n.overlay.open {\n  opacity: .8;\n  visibility: visible;\n  width: 100%; }\n.overlay.open li {\n  -webkit-animation: menuFade .5s ease forwards;\n          animation: menuFade .5s ease forwards;\n  -webkit-animation-delay: .35s;\n          animation-delay: .35s; }\n.overlay.open li:nth-of-type(2) {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s; }\n.overlay.open li:nth-of-type(3) {\n  -webkit-animation-delay: .45s;\n          animation-delay: .45s; }\n.overlay.open li:nth-of-type(4) {\n  -webkit-animation-delay: .5s;\n          animation-delay: .5s; }\n.overlay nav {\n  position: relative;\n  height: 80%;\n  top: 80%;\n  transform: translateY(-40%);\n  -webkit-transform: translateY(-40%);\n  font-size: 30px;\n  font-weight: 400; }\n.overlay ul {\n  float: left;\n  list-style: none;\n  padding: 0;\n  margin-bottom: 50px;\n  margin-left: 15%;\n  display: inline-block;\n  position: relative;\n  height: 100%; }\n.overlay ul li {\n  display: block;\n  color: #fff;\n  min-height: 60px;\n  position: relative;\n  opacity: 100;\n  text-align: center; }\n.overlay ul li a {\n  display: block;\n  position: relative;\n  color: #fff;\n  text-decoration: none;\n  overflow: hidden; }\n.overlay ul li a:hover:after, .overlay ul li a:focus:after, .overlay ul li a:active:after {\n  width: 100%; }\n.overlay ul li a:after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0%;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  height: 3px;\n  background: #fff;\n  transition: .35s; }\n.overlay .overlay-about {\n  position: absolute;\n  right: 10%;\n  top: 40%; }\n.overlay .overlay-about img {\n  width: 40px;\n  height: 40px;\n  display: inline;\n  border-radius: 50px; }\n.overlay .overlay-about a {\n  color: #fff;\n  font-size: 12px;\n  text-decoration: none; }\n.overlay .overlay-about a:hover {\n  color: #fff; }\n@-webkit-keyframes menuFade {\n  0% {\n    opacity: 0;\n    left: -25%; }\n  100% {\n    opacity: 1;\n    left: 0; } }\n@keyframes menuFade {\n  0% {\n    opacity: 0;\n    left: -25%; }\n  100% {\n    opacity: 1;\n    left: 0; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZVBhZ2VzL0M6XFxVc2Vyc1xcaXZhbl9cXGdpdExhYlxcaXZhbmhvaW5hY2tpLmdpdGh1Yi5pb1xcY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xccHJpdmF0ZVBhZ2VzXFxwcml2YXRlUGFnZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ByaXZhdGVQYWdlcy9wcml2YXRlUGFnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7O0NDQ0M7QURFRDtFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixlQUFlLEVBQUE7QUFFbkI7RUFDSSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTtBQUd6Qiw0QkFBQTtBQUVBO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVksRUFBQTtBQUVoQjtFQUNJLDRCQUE0QjtFQUM1QixlQUFlLEVBQUE7QUFFbkI7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLHFDQUFxQyxFQUFBO0FBRXpDO0VBQ0kscURBQXFEO0VBQ3JELDZEQUE2RDtFQUM3RCxtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsbUJBQW1CLEVBQUE7QUFFdkI7RUFDSSwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLG1CQUFtQixFQUFBO0FBRXZCO0VBQ0ksd0RBQXdEO0VBQ3hELGdFQUFnRTtFQUNoRSxtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLFdBQVcsRUFBQTtBQUVmO0VBQ0ksbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7QUFFN0I7RUFDSSxRQUFRO0VBQ1IsVUFBVSxFQUFBO0FBRWQ7RUFDSSxRQUFRO0VBQ1IsU0FBUyxFQUFBO0FBRWI7RUFDSSxTQUFTLEVBQUE7QUFFYjtFQUNJLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0VBQW9FO0VBQ3BFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7QUFFaEI7RUFDSSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtBQUVmO0VBQ0ksNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7QUFFekI7RUFDSSw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUFFeEI7RUFDSSw2QkFBcUI7VUFBckIscUJBQXFCLEVBQUE7QUFFekI7RUFDSSw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUFFeEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUVwQjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7QUFFaEI7RUFDSSxjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBRXRCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBO0FBRXBCO0VBQ0ksV0FBVyxFQUFBO0FBRWY7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztFQUNULDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTtBQUVwQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUSxFQUFBO0FBRVo7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YscUJBQXFCLEVBQUE7QUFFekI7RUFDSSxXQUFXLEVBQUE7QUFFZjtFQUNJO0lBQ0ksVUFBVTtJQUNWLFVBQVUsRUFBQTtFQUVkO0lBQ0ksVUFBVTtJQUNWLE9BQU8sRUFBQSxFQUFBO0FBUGY7RUFDSTtJQUNJLFVBQVU7SUFDVixVQUFVLEVBQUE7RUFFZDtJQUNJLFVBQVU7SUFDVixPQUFPLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhdGVQYWdlcy9wcml2YXRlUGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiogU2l0ZSBmb290ZXJcclxuKi9cclxuLnNpdGUtZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIC0xcHggNHB4ICNkZGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuLnNpdGUtZm9vdGVyIHAge1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwJSBhdXRvIDIwJTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICM5MzkyOTE7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi8qIEdlbmVyYXRlZCBieSBsZXNzIDIuNC4wICovXHJcblxyXG4uYnV0dG9uLWJhY2tncm91bmQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggI2RkZDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgei1pbmRleDogMjAwO1xyXG59XHJcbi5idXR0b24tYmFja2dyb3VuZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjODg4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5idXR0b24tdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xyXG4gICAgYm90dG9tOiA0M3B4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzIGVhc2U7XHJcbn1cclxuLmJ1dHRvbi10b2dnbGUuYWN0aXZlIC50b3Age1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDlweCkgdHJhbnNsYXRlKDApIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHRyYW5zbGF0ZSgwKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgYmFja2dyb3VuZDogIzUyNTE1MTtcclxufVxyXG4uYnV0dG9uLXRvZ2dsZS5hY3RpdmUgLm1pZGRsZV8xIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTI1MTUxO1xyXG59XHJcbi5idXR0b24tdG9nZ2xlLmFjdGl2ZSAubWlkZGxlXzIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTI1MTUxO1xyXG59XHJcbi5idXR0b24tdG9nZ2xlLmFjdGl2ZSAuYm90dG9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOXB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGJhY2tncm91bmQ6ICM1MjUxNTE7XHJcbn1cclxuLmJ1dHRvbi10b2dnbGU6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogLjc7XHJcbn1cclxuLmJ1dHRvbi10b2dnbGUgc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTI1MTUxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlO1xyXG59XHJcbi5idXR0b24tdG9nZ2xlIHNwYW46bnRoLW9mLXR5cGUoMikge1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBsZWZ0OiAtNTAlO1xyXG59XHJcbi5idXR0b24tdG9nZ2xlIHNwYW46bnRoLW9mLXR5cGUoMykge1xyXG4gICAgdG9wOiA5cHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuLmJ1dHRvbi10b2dnbGUgc3BhbjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICB0b3A6IDE4cHg7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cyBlYXNlLCB2aXNpYmlsaXR5IC4zNXMgZWFzZSwgd2lkdGggLjM1cyBlYXNlO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5vdmVybGF5Lm9wZW4ge1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm92ZXJsYXkub3BlbiBsaSB7XHJcbiAgICBhbmltYXRpb246IG1lbnVGYWRlIC41cyBlYXNlIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuMzVzO1xyXG59XHJcbi5vdmVybGF5Lm9wZW4gbGk6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAuNHM7XHJcbn1cclxuLm92ZXJsYXkub3BlbiBsaTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC40NXM7XHJcbn1cclxuLm92ZXJsYXkub3BlbiBsaTpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC41cztcclxufVxyXG4ub3ZlcmxheSBuYXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB0b3A6IDgwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ub3ZlcmxheSB1bCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLm92ZXJsYXkgdWwgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvcGFjaXR5OiAxMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm92ZXJsYXkgdWwgbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ub3ZlcmxheSB1bCBsaSBhOmhvdmVyOmFmdGVyLCAub3ZlcmxheSB1bCBsaSBhOmZvY3VzOmFmdGVyLCAub3ZlcmxheSB1bCBsaSBhOmFjdGl2ZTphZnRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ub3ZlcmxheSB1bCBsaSBhOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAuMzVzO1xyXG59XHJcbi5vdmVybGF5IC5vdmVybGF5LWFib3V0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMCU7XHJcbiAgICB0b3A6IDQwJTtcclxufVxyXG4ub3ZlcmxheSAub3ZlcmxheS1hYm91dCBpbWcge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5vdmVybGF5IC5vdmVybGF5LWFib3V0IGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLm92ZXJsYXkgLm92ZXJsYXktYWJvdXQgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5Aa2V5ZnJhbWVzIG1lbnVGYWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIGxlZnQ6IC0yNSU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiogU2l0ZSBmb290ZXJcclxuKi9cbi5zaXRlLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3gtc2hhZG93OiAwIC0xcHggNHB4ICNkZGQ7XG4gIG1hcmdpbi10b3A6IDNweDsgfVxuXG4uc2l0ZS1mb290ZXIgcCB7XG4gIG1hcmdpbjogMjBweCAyMCUgYXV0byAyMCU7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBjb2xvcjogIzkzOTI5MTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi8qIEdlbmVyYXRlZCBieSBsZXNzIDIuNC4wICovXG4uYnV0dG9uLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4ICNkZGQ7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHotaW5kZXg6IDIwMDsgfVxuXG4uYnV0dG9uLWJhY2tncm91bmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjODg4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmJ1dHRvbi10b2dnbGUge1xuICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgYm90dG9tOiA0M3B4O1xuICByaWdodDogMzBweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZTsgfVxuXG4uYnV0dG9uLXRvZ2dsZS5hY3RpdmUgLnRvcCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHRyYW5zbGF0ZSgwKSByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5cHgpIHRyYW5zbGF0ZSgwKSByb3RhdGUoNDVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjNTI1MTUxOyB9XG5cbi5idXR0b24tdG9nZ2xlLmFjdGl2ZSAubWlkZGxlXzEge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gIGJhY2tncm91bmQ6ICM1MjUxNTE7IH1cblxuLmJ1dHRvbi10b2dnbGUuYWN0aXZlIC5taWRkbGVfMiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gIGJhY2tncm91bmQ6ICM1MjUxNTE7IH1cblxuLmJ1dHRvbi10b2dnbGUuYWN0aXZlIC5ib3R0b20ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTlweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoLTQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogIzUyNTE1MTsgfVxuXG4uYnV0dG9uLXRvZ2dsZTpob3ZlciB7XG4gIG9wYWNpdHk6IC43OyB9XG5cbi5idXR0b24tdG9nZ2xlIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjNTI1MTUxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlOyB9XG5cbi5idXR0b24tdG9nZ2xlIHNwYW46bnRoLW9mLXR5cGUoMikge1xuICB0b3A6IDlweDtcbiAgbGVmdDogLTUwJTsgfVxuXG4uYnV0dG9uLXRvZ2dsZSBzcGFuOm50aC1vZi10eXBlKDMpIHtcbiAgdG9wOiA5cHg7XG4gIGxlZnQ6IDUwJTsgfVxuXG4uYnV0dG9uLXRvZ2dsZSBzcGFuOm50aC1vZi10eXBlKDQpIHtcbiAgdG9wOiAxOHB4OyB9XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDAlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zNXMgZWFzZSwgdmlzaWJpbGl0eSAuMzVzIGVhc2UsIHdpZHRoIC4zNXMgZWFzZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxMDA7IH1cblxuLm92ZXJsYXkub3BlbiB7XG4gIG9wYWNpdHk6IC44O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4ub3ZlcmxheS5vcGVuIGxpIHtcbiAgYW5pbWF0aW9uOiBtZW51RmFkZSAuNXMgZWFzZSBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAuMzVzOyB9XG5cbi5vdmVybGF5Lm9wZW4gbGk6bnRoLW9mLXR5cGUoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC40czsgfVxuXG4ub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAuNDVzOyB9XG5cbi5vdmVybGF5Lm9wZW4gbGk6bnRoLW9mLXR5cGUoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC41czsgfVxuXG4ub3ZlcmxheSBuYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAlO1xuICB0b3A6IDgwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbi5vdmVybGF5IHVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLm92ZXJsYXkgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm92ZXJsYXkgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLm92ZXJsYXkgdWwgbGkgYTpob3ZlcjphZnRlciwgLm92ZXJsYXkgdWwgbGkgYTpmb2N1czphZnRlciwgLm92ZXJsYXkgdWwgbGkgYTphY3RpdmU6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTsgfVxuXG4ub3ZlcmxheSB1bCBsaSBhOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHdpZHRoOiAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IC4zNXM7IH1cblxuLm92ZXJsYXkgLm92ZXJsYXktYWJvdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMCU7XG4gIHRvcDogNDAlOyB9XG5cbi5vdmVybGF5IC5vdmVybGF5LWFib3V0IGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDsgfVxuXG4ub3ZlcmxheSAub3ZlcmxheS1hYm91dCBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5vdmVybGF5IC5vdmVybGF5LWFib3V0IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjsgfVxuXG5Aa2V5ZnJhbWVzIG1lbnVGYWRlIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogLTI1JTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGxlZnQ6IDA7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/privatePages/privatePages.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/privatePages/privatePages.component.ts ***!
  \**************************************************************/
/*! exports provided: PrivatePagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePagesComponent", function() { return PrivatePagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrivatePagesComponent = /** @class */ (function () {
    function PrivatePagesComponent() {
    }
    PrivatePagesComponent.prototype.ngOnInit = function () {
        document.getElementById('loader').style.display = 'none';
    };
    PrivatePagesComponent.prototype.onClickOverlay = function () {
        var toggle = document.getElementById("toggle");
        toggle.classList.toggle("active");
        var overlay = document.getElementById("overlay");
        overlay.classList.toggle("open");
    };
    PrivatePagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'private-pages',
            template: __webpack_require__(/*! ./privatePages.component.html */ "./src/app/pages/privatePages/privatePages.component.html"),
            styles: [__webpack_require__(/*! ./privatePages.component.scss */ "./src/app/pages/privatePages/privatePages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrivatePagesComponent);
    return PrivatePagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/privatePages/privatePages.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/privatePages/privatePages.module.ts ***!
  \***********************************************************/
/*! exports provided: PrivatePagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivatePagesModule", function() { return PrivatePagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _privatePages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privatePages.component */ "./src/app/pages/privatePages/privatePages.component.ts");
/* harmony import */ var _privatePages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privatePages-routing.module */ "./src/app/pages/privatePages/privatePages-routing.module.ts");
/* harmony import */ var src_app_lib_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib.module */ "./src/app/lib.module.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.module */ "./src/app/pages/privatePages/main/main.module.ts");
/* harmony import */ var _resume_resume_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resume/resume.module */ "./src/app/pages/privatePages/resume/resume.module.ts");







var PAGES_COMPONENTS = [
    _privatePages_component__WEBPACK_IMPORTED_MODULE_2__["PrivatePagesComponent"],
];
var PrivatePagesModule = /** @class */ (function () {
    function PrivatePagesModule() {
    }
    PrivatePagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _privatePages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PrivatePagesRoutingModule"],
                src_app_lib_module__WEBPACK_IMPORTED_MODULE_4__["LibModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_5__["MainModule"],
                _resume_resume_module__WEBPACK_IMPORTED_MODULE_6__["ResumeModule"]
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PrivatePagesModule);
    return PrivatePagesModule;
}());



/***/ }),

/***/ "./src/app/pages/privatePages/resume/resume.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/privatePages/resume/resume.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"col-md-10 col-md-offset-1\">\r\n\r\n        <div class=\"editable\">\r\n            <h1 class=\"page-header\">Ivan Augusto Hoinacki\r\n                <small id=\"phone\" class=\"pull-right\">(55 46) 99919 2169</small>\r\n            </h1>\r\n            <div>\r\n                <h4>Brazilian, <span class=\"age\">27</span> years, single, no children.</h4>\r\n                <h4>Pato Branco - Paraná.</h4>\r\n                <h4>Willingness to travel or live outsite.</h4>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"editable\">\r\n            <h2 class=\"page-header\">Summary of Qualifications.</h2>\r\n            <ul>\r\n            </ul>\r\n            <h4>\r\n                <i>Interest in WEB development.</i>\r\n            </h4>\r\n            <ul>\r\n            </ul>\r\n            <ul>\r\n                <li>Coordinator Web Team at Limber Software.</li>\r\n                <li>Working on projects developing web sites and systems with HTML, CSS, Javascript(NodeJS) and Angular 7.x.</li>\r\n                <li>Developer for mobile applications with Ionic, Angular and NodeJS.</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"editable\">\r\n            <h2 class=\"page-header\">Professional Experience.</h2>\r\n            <div>\r\n            </div>\r\n            <div>\r\n                <h3>Coordinator Web Team.</h3>\r\n                <ul>\r\n                </ul>\r\n                <p> Limber Software (<b><a href=\"http://www.limbersoftware.com.br\">www.limbersoftware.com.br</a></b>) Pato Branco, Paraná. (December, 2017 - yet).</p>\r\n                <ul>\r\n                </ul>\r\n                <ul>\r\n                    <li>Coordinator Web Team at Limber Software.</li>\r\n                    <li>Planning and allocation of tasks to team players.</li>\r\n                    <li>Control versions of the products and aid developers in tasks performed.</li>\r\n                    <li>Liberation of releases and configuration of projects on Linux and Windows platforms.</li>\r\n                    <li>Coding and maintenance of web projects.</li>\r\n                </ul>\r\n                <h3>Full Stack Development.</h3>\r\n                <ul>\r\n                </ul>\r\n                <p>Limber Software (<b><a href=\"http://www.limbersoftware.com.br\">www.limbersoftware.com.br</a></b>) Pato Branco, Paraná. (November, 2016 - Dec, 2017).</p>\r\n                <ul>\r\n                </ul>\r\n                <ul>\r\n                    <li>Web development team leader at Limber Software, developers applications with CRM and eCommerce, hospitality, clubs for the tourism follow-up.</li>\r\n                    <li>Web developer: HTML5. Angular 7.x, CSS3. Unit-testing. NodeJS. Electron.</li>\r\n                </ul>\r\n                <h3>Full Stack Development.</h3>\r\n                <ul>\r\n                </ul>\r\n                <p>XPert (<b><a href=\"http://www.xpert.com.br\">www.xpert.com.br</a></b>) Pato Branco, Paraná. (February, 2013 - November, 2016).</p>\r\n                <ul>\r\n                </ul>\r\n                <ul>\r\n                    <li>WEB development: HTML. XHMTL. CSS. CSS3. JavaScript. JQuery. JQueryMobile. AngularJS. Flash Builder 4. ActionScript. PHP.</li>\r\n                    <li>Creating Reports: PHP (FPDF).</li>\r\n                    <li>Electronic Tax Invoice: PHP (NFePhp).</li>\r\n                    <li>SGBD: SQL Server 2000, 2005, 2008, 2012 e MySQL.</li>\r\n                </ul>\r\n                <h3>Full Stack Development.</h3>\r\n                <ul>\r\n                </ul>\r\n                <p>SESMO Software for occupational medicine (<b><a href=\"http://www.sesmo.com.br\">www.sesmo.com.br</a></b>) Pato Branco, Paraná. (October, 2011 - February, 2013).</p>\r\n                <ul>\r\n                </ul>\r\n                <ul>\r\n                    <li>Development and maintain web applications to meet their client's needs. Jobs can range from creating a staff intranet license for an organisation to building a system medical.</li>\r\n                    <li>Web developer: HTML5. Asp.NET. C#. ExtJS. Hibernate. </li>\r\n                    <li>Creating Reports: FastReport e QuickReport.</li>\r\n                    <li>Database: FireBird.</li>\r\n                </ul>\r\n                <h3>Analyst Tests.</h3>\r\n                <ul>\r\n                </ul>\r\n                <p>Viasoft (<b><a href=\"http://www.viasoft.com.br\">www.viasoft.com.br</a></b>) Pato Branco, Paraná. (September, 2010 - August, 2011).</p>\r\n                <ul>\r\n                </ul>\r\n                <ul>\r\n                    <li>Writing and executing the functionality plan managing all activities, to ensure that all the objectives are met and that the solution works as expected and technical of support..</li>\r\n                    <li>Creating Reports: QuickReport, Business intelligence.</li>\r\n                    <li>Database: Oracle.</li>\r\n                </ul>\r\n                <h3>Technical of Network and Internet</h3>\r\n                <ul>\r\n                </ul>\r\n                <p>World Line Net (<b><a href=\"http://www.wln.com.br\">www.wln.com.br</a></b>) Realeza, Paraná. (September, 2009 - August, 2010).</p>\r\n                <ul>\r\n                </ul>\r\n                <ul>\r\n                    <li>Technical of Internet and Servers, developer at construction the Home Pages and support to customers both in the connectivity as the use of Internet systems.</li>\r\n                    <li>Web developer: HTML4/XHTML, CSS, JavaScript.</li>\r\n                    <li>Network infrastructure: Mikrotiks and NanoStations</li>\r\n                </ul>\r\n                <h3>Technical of Network and Internet</h3>\r\n                <ul>\r\n                </ul>\r\n                <p>C&S Systems (<b><a href=\"http://www.csistemas.com.brr\">www.csistemas.com.br</a></b>) Realeza, Paraná. (September, 2009 - August, 2010).</p>\r\n                <ul>\r\n                </ul>\r\n                <ul>\r\n                    <li>Technical of support.</li>\r\n                    <li>Desktop developer: VBasic 6</li>\r\n                    <li>Database: Microsoft SQL Server.</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n       <div class=\"editable\">\r\n            <h2 class=\"page-header\">Knowledge in Technology.</h2>\r\n            <ul>\r\n            </ul>\r\n            <ul>\r\n                <li>WEB development: HTML5. XHTML. CSS. CSS3. SASS. LESS. JavaScript. JQuery. AngularJS. Angular 7.x. Bootstrap. Material Design. Flash Builder 4. PHP. ZEND. Java. NodeJs. C#. Hibernate.</li>\r\n                <li>Desktop development: Object Pascal (Delphi7, Delphi2007, Delphi2010). Visual Basic. Java.</li>\r\n                <li>Mobile development: Ionic. PhoneGap. Android (Java). JQueryMobile.</li>\r\n                <li>Creating Reports: FPDF. DOMPDF. FastReport. QuickReport.</li>\r\n                <li>Electronic Tax Invoice. Electronic Knowledge of Transportation: NFePHP.</li>\r\n                <li>SGBD: Sql Server 2000, 2005, 2008, 2012. DB2. MySql. PostgreSql. MongoDB. </li>\r\n                <li>Testing: Unit-testing, e2e.</li>\r\n            </ul>\r\n\r\n        </div>\r\n\r\n        <div class=\"editable\">\r\n            <h2 class=\"page-header\">Education.</h2>\r\n            <ul>\r\n            </ul>\r\n            <ul>\r\n                <li>Analysis and systems development at University of Pato Branco - FADEP. </li>\r\n                <li>High School State Twelve November.</li>\r\n            </ul>\r\n            <h2 class=\"page-header\">Courses.</h2>\r\n            <ul>\r\n            </ul>\r\n            <ul>\r\n                <li>Academic monitoring of AngularJS at University of Pato Branco - FADEP - Year(2017).</li>\r\n                <li>Academic monitoring of JavaScript at University of Pato Branco - FADEP - Year(2017).</li>\r\n                <li>Get Started In UX Design/UI Mastery - Year(2015).</li>\r\n                <li>AngularJS 1.x Standars - Year(2015).</li>\r\n                <li>Designing RESTful APIs - Year(2014).</li>\r\n                <li>Formation Frontend and development with JavaScript e jQuery - Year(2012).</li>\r\n                <li>Html5 and Web Standards - Year(2010).</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"editable\">\r\n            <h2 class=\"page-header\">Foreign Languages.</h2>\r\n            <ul>\r\n            </ul>\r\n            <ul>\r\n                <li>Language: English.</li>\r\n                <li>School: Wizard\r\n                  <a>www.wizard.com.br</a>\r\n                </li>\r\n                <li>Description: communicative approach and focusing on issues and writing.</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"editable\">\r\n            <h2 class=\"page-header\">Contact.</h2>\r\n            <ul>\r\n            </ul>\r\n            <ul>\r\n                <li>Email: <a href=\"mailto:ivanhweb@gmail.com\">ivanhweb@gmail.com</a>.</li>\r\n                <li>Page: <a href=\"https://ivanhoinacki.github.io\">https://ivanhoinacki.github.io</a>.</li>\r\n                <li>Linkedin: <a href=\"https://www.linkedin.com/in/ivanhoinacki/\">br.linkedin.com/in/ivanhoinacki</a>.</li>\r\n                <li>Github: <a href=\"https://github.com/ivanhoinacki\">github.com/ivanhoinacki</a>.</li>\r\n                <li>NPM: <a href=\"https://www.npmjs.org/~ivanhoinacki\">www.npmjs.org/~ivanhoinacki</a>.</li>\r\n            </ul>\r\n        </div>\r\n        <br>\r\n        <br>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/privatePages/resume/resume.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/privatePages/resume/resume.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#phone {\n  font-size: 25px;\n  float: right !important; }\n\n@media (max-width: 767.98px) {\n  #phone {\n    font-size: 12px;\n    float: right !important; } }\n\n* {\n  font-family: \"Maven Pro\", \"Helvetica Neue\", Helvetica, sans-serif; }\n\nbody {\n  color: #555 !important;\n  cursor: pointer; }\n\n.hide {\n  display: none; }\n\n.container a {\n  color: #337ab7 !important;\n  text-decoration: none;\n  cursor: pointer; }\n\nh3 {\n  font-size: 24px; }\n\n@media print {\n  .no-print, .no-print * {\n    display: none !important; } }\n\n@media print {\n  a[href]:after {\n    content: none !important; } }\n\n@media print {\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmF0ZVBhZ2VzL3Jlc3VtZS9DOlxcVXNlcnNcXGl2YW5fXFxnaXRMYWJcXGl2YW5ob2luYWNraS5naXRodWIuaW9cXGNsaWVudC9zcmNcXGFwcFxccGFnZXNcXHByaXZhdGVQYWdlc1xccmVzdW1lXFxyZXN1bWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxlQUFlO0VBQ2YsdUJBQXNCLEVBQUE7O0FBR3hCO0VBQ0U7SUFDSSxlQUFlO0lBQ2YsdUJBQXNCLEVBQUEsRUFDdkI7O0FBR0w7RUFDRSxpRUFBaUUsRUFBQTs7QUFHbkU7RUFDRSxzQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHlCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFFSTtJQUVJLHdCQUF3QixFQUFBLEVBQzNCOztBQUdMO0VBQ0k7SUFDRSx3QkFBd0IsRUFBQSxFQUN6Qjs7QUFHTDtFQUNJO0lBQ0UsNEJBQTRCLEVBQUEsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YXRlUGFnZXMvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuICAjcGhvbmV7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAjcGhvbmV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodCFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gICoge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWF2ZW4gUHJvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBjb2xvcjogIzU1NSFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciBhIHtcclxuICAgIGNvbG9yOiAjMzM3YWI3IWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnRcclxue1xyXG4gICAgLm5vLXByaW50LCAubm8tcHJpbnQgKlxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgIGFbaHJlZl06YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgIGFbaHJlZl06YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIiAoXCIgYXR0cihocmVmKSBcIilcIjtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/privatePages/resume/resume.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/privatePages/resume/resume.component.ts ***!
  \***************************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/pages/privatePages/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.scss */ "./src/app/pages/privatePages/resume/resume.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/pages/privatePages/resume/resume.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/privatePages/resume/resume.module.ts ***!
  \************************************************************/
/*! exports provided: ResumeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeModule", function() { return ResumeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume.component */ "./src/app/pages/privatePages/resume/resume.component.ts");
/* harmony import */ var src_app_lib_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib.module */ "./src/app/lib.module.ts");




var PAGES_COMPONENTS = [
    _resume_component__WEBPACK_IMPORTED_MODULE_2__["ResumeComponent"],
];
var ResumeModule = /** @class */ (function () {
    function ResumeModule() {
    }
    ResumeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_app_lib_module__WEBPACK_IMPORTED_MODULE_3__["LibModule"]
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], ResumeModule);
    return ResumeModule;
}());



/***/ })

}]);
//# sourceMappingURL=privatePages-privatePages-module.js.map