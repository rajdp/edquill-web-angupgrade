import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../service/auth.service";
import * as i2 from "../../service/subject.services";
import * as i3 from "../../service/configuration.service";
import * as i4 from "@angular/common";
function RightSidebarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵelement(1, "img", 15)(2, "div", 16);
    i0.ɵɵelementStart(3, "div", 17)(4, "div", 18);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 19);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", user_r1.img, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(user_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", user_r1.status, "");
} }
export class RightSidebarComponent {
    constructor(auth, subject, config) {
        this.auth = auth;
        this.subject = subject;
        this.config = config;
        this.users = [
            {
                img: "assets/images/dashboard/user.png",
                name: "Vincent Porter",
                status: "Online"
            },
            {
                img: "assets/images/dashboard/user1.jpg",
                name: "Ain Chavez",
                status: "28 minutes ago"
            },
            {
                img: "assets/images/dashboard/user2.jpg",
                name: "Kori Thomas",
                status: "Online"
            },
            {
                img: "assets/images/dashboard/user3.jpg",
                name: "Erica Hughes",
                status: "Online"
            },
            {
                img: "assets/images/dashboard/man.png",
                name: "Ginger Johnston",
                status: "2 minutes ago"
            },
            {
                img: "assets/images/dashboard/user5.jpg",
                name: "Prasanth Anand",
                status: "2 hour ago"
            },
            {
                img: "assets/images/dashboard/designer.jpg",
                name: "Hileri Jecno",
                status: "Online"
            }
        ];
        this.name = this.auth.getSessionData('go-firstname');
        this.role = this.auth.getSessionData('go-roleid');
        this.profile = this.auth.getSessionData('go-profile_url');
    }
    ngOnInit() {
        this.subject.cast.subscribe(data => {
            this.profile = data;
        });
    }
    static { this.ɵfac = function RightSidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RightSidebarComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.SubjectServices), i0.ɵɵdirectiveInject(i3.ConfigurationService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 16, vars: 1, consts: [[1, "container", "p-0"], [1, "modal-header", "p-l-20", "p-r-20"], [1, "col-sm-8", "p-0"], [1, "modal-title", "font-weight-bold"], [1, "col-sm-4", "text-right", "p-0"], ["data-feather", "settings", 1, "mr-2"], [1, "friend-list-search", "mt-0"], ["type", "text", "placeholder", "search friend"], [1, "fa", "fa-search"], [1, "p-l-30", "p-r-30"], [1, "chat-box"], [1, "people-list", "friend-list"], [1, "list"], ["class", "clearfix", 4, "ngFor", "ngForOf"], [1, "clearfix"], ["alt", "", 1, "rounded-circle", "user-image", "blur-up", "lazyloaded", 3, "src"], [1, "status-circle", "online"], [1, "about"], [1, "name"], [1, "status"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h6", 3);
            i0.ɵɵtext(5, "FRIEND LIST");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelement(7, "i", 5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(8, "div", 6);
            i0.ɵɵelement(9, "input", 7)(10, "i", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "ul", 12);
            i0.ɵɵtemplate(15, RightSidebarComponent_li_15_Template, 8, 3, "li", 13);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("ngForOf", ctx.users);
        } }, dependencies: [CommonModule, i4.NgForOf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RightSidebarComponent, [{
        type: Component,
        args: [{ selector: 'app-right-sidebar', standalone: true, imports: [CommonModule], template: "<div>\n    <div class=\"container p-0\">\n        <div class=\"modal-header p-l-20 p-r-20\">\n            <div class=\"col-sm-8 p-0\">\n                <h6 class=\"modal-title font-weight-bold\">FRIEND LIST</h6>\n            </div>\n            <div class=\"col-sm-4 text-right p-0\"><i class=\"mr-2\" data-feather=\"settings\"></i></div>\n        </div>\n    </div>\n    <div class=\"friend-list-search mt-0\">\n        <input type=\"text\" placeholder=\"search friend\"><i class=\"fa fa-search\"></i>\n    </div>\n    <div class=\"p-l-30 p-r-30\">\n        <div class=\"chat-box\">\n            <div class=\"people-list friend-list\">\n                <ul class=\"list\">\n                    <li class=\"clearfix\" *ngFor=\"let user of users\">\n                        <img class=\"rounded-circle user-image blur-up lazyloaded\" [src]=\"user.img\" alt=\"\">\n                        <div class=\"status-circle online\"></div>\n                        <div class=\"about\">\n                            <div class=\"name\">{{user.name}}</div>\n                            <div class=\"status\"> {{user.status}}</div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.SubjectServices }, { type: i3.ConfigurationService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RightSidebarComponent, { className: "RightSidebarComponent" }); })();
//# sourceMappingURL=right-sidebar.component.js.map