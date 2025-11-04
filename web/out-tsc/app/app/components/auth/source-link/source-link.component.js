import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
const _c0 = a0 => ({ "padding-bottom": a0 });
const _c1 = a0 => ({ "height": a0 });
function SourceLinkComponent_div_3_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 14);
} }
function SourceLinkComponent_div_3_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 15);
} }
function SourceLinkComponent_div_3_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 16);
} }
function SourceLinkComponent_div_3_img_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 17);
} }
function SourceLinkComponent_div_3_img_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 18);
} }
function SourceLinkComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "a", 8);
    i0.ɵɵtemplate(3, SourceLinkComponent_div_3_img_3_Template, 1, 0, "img", 9)(4, SourceLinkComponent_div_3_img_4_Template, 1, 0, "img", 10)(5, SourceLinkComponent_div_3_img_5_Template, 1, 0, "img", 11)(6, SourceLinkComponent_div_3_img_6_Template, 1, 0, "img", 12)(7, SourceLinkComponent_div_3_img_7_Template, 1, 0, "img", 13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "a");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("title", ctx_r0.pdfPath.link);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pdfPath.type == "document");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pdfPath.type == "audio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pdfPath.type == "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pdfPath.type == "ppt");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.pdfPath.type == "Others");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.pdfPath.name);
} }
function SourceLinkComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.pdfPath.link, " ");
} }
function SourceLinkComponent_div_5_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function SourceLinkComponent_div_5_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectedVideolinkData = ""); });
    i0.ɵɵtext(1, "Close ");
    i0.ɵɵelementEnd();
} }
function SourceLinkComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "div", 21);
    i0.ɵɵelement(2, "iframe", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵtemplate(4, SourceLinkComponent_div_5_button_4_Template, 2, 0, "button", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0, ctx_r0.setHeight ? "52.08%" : "30%"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.selectedVideolinkData, i0.ɵɵsanitizeResourceUrl)("ngStyle", i0.ɵɵpureFunction1(6, _c1, ctx_r0.setHeight ? "100%" : "100%"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.selectedVideolinkData);
} }
export class SourceLinkComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.pdfPath = [];
        this.setHeight = true;
        this.showWithIcon = true;
    }
    ngOnInit() {
    }
    showVideo(videolink) {
        if (videolink.includes('youtube') && videolink.includes('watch') || videolink.includes('loom') || videolink.includes('mp4')) {
            if (videolink.includes('youtube') || videolink.includes('loom')) {
                this.selectedVideolinkData = this.sanitizer.bypassSecurityTrustResourceUrl(this.convertToEmbedUrl(videolink));
                console.log(this.selectedVideolinkData, 'selectedVideoLink');
            }
            else {
                this.selectedVideolinkData = this.sanitizer.bypassSecurityTrustResourceUrl(videolink);
            }
            setTimeout(() => {
                const element = document.getElementById('showVideo');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
        else {
            this.selectedVideolinkData = '';
            window.open(videolink, '_blank');
        }
    }
    convertToEmbedUrl(url) {
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const loomRegex = /loom\.com\/share\/([a-zA-Z0-9]+)/;
        const youtubeMatch = url.match(youtubeRegex);
        if (youtubeMatch && youtubeMatch[1]) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
        }
        const loomMatch = url.match(loomRegex);
        if (loomMatch && loomMatch[1]) {
            return `https://www.loom.com/embed/${loomMatch[1]}`;
        }
        console.log(url, 'url');
        return url;
    }
    static { this.ɵfac = function SourceLinkComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SourceLinkComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SourceLinkComponent, selectors: [["app-source-link"]], inputs: { pdfPath: "pdfPath", setHeight: "setHeight", showWithIcon: "showWithIcon" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 4, consts: [[1, "container-fluid", "px-0", "pb-3"], [1, "col-md-12", "px-0"], [1, "cursor", 3, "click", "title"], ["class", "col-md-12 flex-center flex-wrap link-card", "style", "height: 90vh", 4, "ngIf"], ["class", "col-md-12 d-flex justify-content-center align-items-center p-4 link-card color-primary", 4, "ngIf"], ["id", "showVideo", "class", "card col-12 my-3 p-3", 4, "ngIf"], [1, "col-md-12", "flex-center", "flex-wrap", "link-card", 2, "height", "90vh"], [1, "col-md-12", "d-flex", "justify-content-center"], [3, "title"], ["class", "size-120px", "src", "assets/images/icons/doc-icon.png", "alt", "doc", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/audio-icon.png", "alt", "mp3", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/video-icon.png", "alt", "mp4", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 4, "ngIf"], ["class", "size-120px", "src", "assets/images/icons/others-icon.png", "alt", "others", 4, "ngIf"], ["src", "assets/images/icons/doc-icon.png", "alt", "doc", 1, "size-120px"], ["src", "assets/images/icons/audio-icon.png", "alt", "mp3", 1, "size-120px"], ["src", "assets/images/icons/video-icon.png", "alt", "mp4", 1, "size-120px"], ["src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 1, "size-120px"], ["src", "assets/images/icons/others-icon.png", "alt", "others", 1, "size-120px"], [1, "col-md-12", "d-flex", "justify-content-center", "align-items-center", "p-4", "link-card", "color-primary"], ["id", "showVideo", 1, "card", "col-12", "my-3", "p-3"], [2, "position", "relative", "height", "0", 3, "ngStyle"], ["frameborder", "0", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", "", 2, "position", "absolute", "top", "0", "left", "0", "width", "100%", 3, "src", "ngStyle"], [1, "col-12", "px-0", "mt-3"], ["class", "col-2 pull-right btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "col-2", "pull-right", "btn", "btn-outline-primary", 3, "click"]], template: function SourceLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵlistener("click", function SourceLinkComponent_Template_a_click_2_listener() { return ctx.showVideo(ctx.pdfPath.link); });
            i0.ɵɵtemplate(3, SourceLinkComponent_div_3_Template, 10, 7, "div", 3)(4, SourceLinkComponent_div_4_Template, 2, 1, "div", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, SourceLinkComponent_div_5_Template, 5, 8, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("title", ctx.pdfPath.link);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showWithIcon);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.showWithIcon);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedVideolinkData);
        } }, dependencies: [CommonModule, i2.NgIf, i2.NgStyle] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SourceLinkComponent, [{
        type: Component,
        args: [{ selector: 'app-source-link', standalone: true, imports: [CommonModule], template: "<div class=\"container-fluid px-0 pb-3\">\n    <div class=\"col-md-12 px-0\">\n        <a class=\"cursor\" (click)=\"showVideo(pdfPath.link)\" [title]=\"pdfPath.link\">\n            <div class=\"col-md-12 flex-center flex-wrap link-card\" style=\"height: 90vh\" *ngIf=\"showWithIcon\">\n                <div class=\"col-md-12 d-flex justify-content-center\">\n                    <a [title]=\"pdfPath.link\">\n                        <img *ngIf=\"pdfPath.type == 'document'\" class=\"size-120px\"\n                             src=\"assets/images/icons/doc-icon.png\" alt=\"doc\">\n                        <img *ngIf=\"pdfPath.type == 'audio'\" class=\"size-120px\" src=\"assets/images/icons/audio-icon.png\"\n                             alt=\"mp3\">\n                        <img *ngIf=\"pdfPath.type == 'video'\" class=\"size-120px\" src=\"assets/images/icons/video-icon.png\"\n                             alt=\"mp4\">\n                        <img *ngIf=\"pdfPath.type == 'ppt'\" class=\"size-120px\" src=\"assets/images/icons/ppt-icon.png\"\n                             alt=\"ppt\">\n                        <img *ngIf=\"pdfPath.type == 'Others'\" class=\"size-120px\"\n                             src=\"assets/images/icons/others-icon.png\" alt=\"others\">\n                    </a>\n                </div>\n                <a>{{pdfPath.name}}</a>\n            </div>\n            <div class=\"col-md-12 d-flex justify-content-center align-items-center p-4 link-card color-primary\" *ngIf=\"!showWithIcon\">\n                {{pdfPath.link}}\n            </div>\n        </a>\n    </div>\n\n    <div id=\"showVideo\" class=\"card col-12 my-3 p-3\" *ngIf=\"selectedVideolinkData\">\n        <div [ngStyle]=\"{'padding-bottom' : setHeight ? '52.08%' : '30%'}\" style=\"position: relative; height: 0\">\n            <iframe [src]=\"selectedVideolinkData\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen\n                    allowfullscreen [ngStyle]=\"{'height' : setHeight ? '100%' : '100%'}\" style=\"position: absolute; top: 0; left: 0; width: 100%\"></iframe>\n        </div>\n        <div class=\"col-12 px-0 mt-3\">\n            <button *ngIf=\"selectedVideolinkData\" class=\"col-2 pull-right btn btn-outline-primary\"\n                    (click)=\"selectedVideolinkData = ''\">Close\n            </button>\n        </div>\n    </div>\n\n</div>\n" }]
    }], () => [{ type: i1.DomSanitizer }], { pdfPath: [{
            type: Input
        }], setHeight: [{
            type: Input
        }], showWithIcon: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SourceLinkComponent, { className: "SourceLinkComponent" }); })();
//# sourceMappingURL=source-link.component.js.map