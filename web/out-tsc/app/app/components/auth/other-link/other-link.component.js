import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
const _c0 = () => ({ standalone: true });
const _c1 = a0 => ({ "input-error": a0 });
function OtherLinkComponent_span_4_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 13);
    i0.ɵɵlistener("click", function OtherLinkComponent_span_4_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.isEditLink = true); });
    i0.ɵɵelementEnd();
} }
function OtherLinkComponent_span_4_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 14);
    i0.ɵɵlistener("click", function OtherLinkComponent_span_4_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.addLinkArray()); });
    i0.ɵɵelementEnd();
} }
function OtherLinkComponent_span_4_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 15);
    i0.ɵɵlistener("click", function OtherLinkComponent_span_4_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.filterEmptyArrayValue()); });
    i0.ɵɵelementEnd();
} }
function OtherLinkComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtemplate(1, OtherLinkComponent_span_4_i_1_Template, 1, 0, "i", 10)(2, OtherLinkComponent_span_4_i_2_Template, 1, 0, "i", 11)(3, OtherLinkComponent_span_4_i_3_Template, 1, 0, "i", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.arrayValue.length != 0 && !ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.arrayValue.length == 0 || ctx_r1.arrayValue.length != 0 && ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditLink);
} }
function OtherLinkComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16)(1, "span", 17);
    i0.ɵɵtext(2, "No Resource Links available!");
    i0.ɵɵelementEnd()();
} }
function OtherLinkComponent_div_6_a_1_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 29);
} }
function OtherLinkComponent_div_6_a_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} }
function OtherLinkComponent_div_6_a_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 31);
} }
function OtherLinkComponent_div_6_a_1_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 32);
} }
function OtherLinkComponent_div_6_a_1_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 33);
} }
function OtherLinkComponent_div_6_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 23);
    i0.ɵɵlistener("click", function OtherLinkComponent_div_6_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r5); const items_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showVideo(items_r6.link)); });
    i0.ɵɵtemplate(1, OtherLinkComponent_div_6_a_1_img_1_Template, 1, 0, "img", 24)(2, OtherLinkComponent_div_6_a_1_img_2_Template, 1, 0, "img", 25)(3, OtherLinkComponent_div_6_a_1_img_3_Template, 1, 0, "img", 26)(4, OtherLinkComponent_div_6_a_1_img_4_Template, 1, 0, "img", 27)(5, OtherLinkComponent_div_6_a_1_img_5_Template, 1, 0, "img", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", items_r6.type == "document");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", items_r6.type == "audio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", items_r6.type == "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", items_r6.type == "ppt");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", items_r6.type == "Others");
} }
function OtherLinkComponent_div_6_div_2_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const list_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", list_r8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(list_r8 == "ppt" ? i0.ɵɵpipeBind1(2, 2, list_r8) : i0.ɵɵpipeBind1(3, 4, list_r8));
} }
function OtherLinkComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "select", 35);
    i0.ɵɵtwoWayListener("ngModelChange", function OtherLinkComponent_div_6_div_2_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const items_r6 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(items_r6.type, $event) || (items_r6.type = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(2, OtherLinkComponent_div_6_div_2_option_2_Template, 4, 6, "option", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const items_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", items_r6.type);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(3, _c0));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.linksType);
} }
function OtherLinkComponent_div_6_div_3_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 40);
    i0.ɵɵpipe(1, "titlecase");
    i0.ɵɵlistener("input", function OtherLinkComponent_div_6_div_3_input_1_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r9); const items_r6 = i0.ɵɵnextContext(2).$implicit; return i0.ɵɵresetView($event.target.value.trimStart() != "" && (items_r6 == null ? null : items_r6.error) ? items_r6.error = false : items_r6.error = false); });
    i0.ɵɵtwoWayListener("ngModelChange", function OtherLinkComponent_div_6_div_3_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r9); const items_r6 = i0.ɵɵnextContext(2).$implicit; i0.ɵɵtwoWayBindingSet(items_r6.name, $event) || (items_r6.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵpropertyInterpolate1("placeholder", "", i0.ɵɵpipeBind1(1, 5, items_r6.type), " Name");
    i0.ɵɵtwoWayProperty("ngModel", items_r6.name);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(7, _c0))("ngClass", i0.ɵɵpureFunction1(8, _c1, items_r6 == null ? null : items_r6.error));
} }
function OtherLinkComponent_div_6_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1, "Name is required");
    i0.ɵɵelementEnd();
} }
function OtherLinkComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵtemplate(1, OtherLinkComponent_div_6_div_3_input_1_Template, 2, 10, "input", 38)(2, OtherLinkComponent_div_6_div_3_span_2_Template, 2, 0, "span", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", items_r6 == null ? null : items_r6.error);
} }
function OtherLinkComponent_div_6_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 42);
    i0.ɵɵlistener("click", function OtherLinkComponent_div_6_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r10); const items_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showVideo(items_r6.link)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(items_r6.name);
} }
function OtherLinkComponent_div_6_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 42);
    i0.ɵɵlistener("click", function OtherLinkComponent_div_6_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r11); const items_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showVideo(items_r6.link)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("\u00A0\u00A0-\u00A0\u00A0", items_r6.link, "");
} }
function OtherLinkComponent_div_6_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 43);
    i0.ɵɵpipe(1, "titlecase");
    i0.ɵɵtwoWayListener("ngModelChange", function OtherLinkComponent_div_6_input_7_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r12); const items_r6 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(items_r6.link, $event) || (items_r6.link = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    const items_r6 = ctx_r12.$implicit;
    const i_r14 = ctx_r12.index;
    i0.ɵɵpropertyInterpolate2("placeholder", "Enter ", i0.ɵɵpipeBind1(1, 5, items_r6.type), " Link ", i_r14 + 1, " *");
    i0.ɵɵtwoWayProperty("ngModel", items_r6.link);
    i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(7, _c0));
} }
function OtherLinkComponent_div_6_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 44);
    i0.ɵɵpipe(1, "titlecase");
    i0.ɵɵlistener("click", function OtherLinkComponent_div_6_i_8_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r15); const i_r14 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteArray(i_r14)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const items_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate1("title", "Delete ", i0.ɵɵpipeBind1(1, 2, items_r6.type), " Link");
} }
function OtherLinkComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, OtherLinkComponent_div_6_a_1_Template, 6, 5, "a", 18)(2, OtherLinkComponent_div_6_div_2_Template, 3, 4, "div", 19)(3, OtherLinkComponent_div_6_div_3_Template, 3, 2, "div", 19);
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtemplate(5, OtherLinkComponent_div_6_a_5_Template, 2, 1, "a", 20)(6, OtherLinkComponent_div_6_a_6_Template, 2, 1, "a", 20)(7, OtherLinkComponent_div_6_input_7_Template, 2, 8, "input", 21)(8, OtherLinkComponent_div_6_i_8_Template, 2, 4, "i", 22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-12 py-3 d-flex flex-wrap align-items-", ctx_r1.isEditLink ? "start" : "center", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r1.isEditLink ? "8" : "11", " d-flex align-items-center");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isEditLink && ctx_r1.showLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditLink);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditLink);
} }
function OtherLinkComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "div", 46);
    i0.ɵɵelement(2, "iframe", 47);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", ctx_r1.selectedVideolinkData, i0.ɵɵsanitizeResourceUrl);
} }
function OtherLinkComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function OtherLinkComponent_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedVideolinkData = ""); });
    i0.ɵɵtext(1, "Close");
    i0.ɵɵelementEnd();
} }
function OtherLinkComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function OtherLinkComponent_button_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.filterEmptyArrayValue()); });
    i0.ɵɵtext(1, "Save");
    i0.ɵɵelementEnd();
} }
export class OtherLinkComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.arrayValue = [];
        this.titleName = 'Additional resource links';
        this.showLink = true;
        this.calledFrom = '';
        this.saveLinks = new EventEmitter();
        this.isEditLink = false;
        this.linksType = ['video', 'audio', 'document', 'ppt', 'Others'];
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
    addLinkArray() {
        this.isEditLink = true;
        this.arrayValue.push({
            type: 'document',
            name: '',
            link: ''
        });
    }
    filterEmptyArrayValue() {
        this.selectedVideolinkData = '';
        this.arrayValue.forEach(item => item.error = item.name == '' && item.link != '');
        if (this.arrayValue.some(item => item.error)) {
            return;
        }
        this.isEditLink = false;
        this.arrayValue = this.arrayValue.filter((item) => item.link !== '');
        this.arrayValue.forEach((list) => {
            list.link = list.link.includes('https') ? list.link : list.link.includes('http') ? list.link.replace(/^http:\/\//, 'https://') : 'https://' + list.link;
        });
        if (this.calledFrom == 'curriculum') {
            console.log(this.arrayValue, 'arrayalue');
            this.saveLinks.emit(this.arrayValue);
        }
    }
    deleteArray(index) {
        this.arrayValue.splice(index, 1);
    }
    static { this.ɵfac = function OtherLinkComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OtherLinkComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OtherLinkComponent, selectors: [["app-other-link"]], inputs: { arrayValue: "arrayValue", titleName: "titleName", showLink: "showLink", calledFrom: "calledFrom" }, outputs: { saveLinks: "saveLinks" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 11, vars: 7, consts: [[1, "my-4", "resource-link-card"], [1, "col-md-12", "d-flex", "justify-content-between"], [1, "font-weight-bold"], [4, "ngIf"], ["class", "col-md-12 d-flex justify-content-center align-items-center", "style", "height: 20vh", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["id", "showVideo", "class", "card col-12 p-3", 4, "ngIf"], [1, "col-md-12", "col-12", "d-flex", "justify-content-end"], ["class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-primary ml-2", 3, "click", 4, "ngIf"], ["class", "fa fa-edit f-22px ml-3 cursor color-primary", "title", "Edit Resource Link", 3, "click", 4, "ngIf"], ["class", "fa fa-plus-circle f-22px ml-3 cursor color-primary", "title", "Add Resource Link", 3, "click", 4, "ngIf"], ["class", "fa fa-times-circle color-red f-22px ml-3 cursor", "title", "Close", 3, "click", 4, "ngIf"], ["title", "Edit Resource Link", 1, "fa", "fa-edit", "f-22px", "ml-3", "cursor", "color-primary", 3, "click"], ["title", "Add Resource Link", 1, "fa", "fa-plus-circle", "f-22px", "ml-3", "cursor", "color-primary", 3, "click"], ["title", "Close", 1, "fa", "fa-times-circle", "color-red", "f-22px", "ml-3", "cursor", 3, "click"], [1, "col-md-12", "d-flex", "justify-content-center", "align-items-center", 2, "height", "20vh"], [1, "text-info"], [3, "click", 4, "ngIf"], ["class", "col-md-2 px-0", 4, "ngIf"], ["class", "cursor", 3, "click", 4, "ngIf"], ["type", "text", "class", "form-control", 3, "placeholder", "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf"], ["class", "fa fa-trash color-red f-22px ml-2 cursor", 3, "title", "click", 4, "ngIf"], [3, "click"], ["class", "size-38px", "src", "assets/images/icons/doc-icon.png", "alt", "doc", 4, "ngIf"], ["class", "size-38px", "src", "assets/images/icons/audio-icon.png", "alt", "mp3", 4, "ngIf"], ["class", "size-38px", "src", "assets/images/icons/video-icon.png", "alt", "mp4", 4, "ngIf"], ["class", "size-38px", "src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 4, "ngIf"], ["class", "size-38px", "src", "assets/images/icons/others-icon.png", "alt", "others", 4, "ngIf"], ["src", "assets/images/icons/doc-icon.png", "alt", "doc", 1, "size-38px"], ["src", "assets/images/icons/audio-icon.png", "alt", "mp3", 1, "size-38px"], ["src", "assets/images/icons/video-icon.png", "alt", "mp4", 1, "size-38px"], ["src", "assets/images/icons/ppt-icon.png", "alt", "ppt", 1, "size-38px"], ["src", "assets/images/icons/others-icon.png", "alt", "others", 1, "size-38px"], [1, "col-md-2", "px-0"], [1, "form-control", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "class", "form-control ml-2", 3, "placeholder", "ngModel", "ngModelOptions", "ngClass", "input", "ngModelChange", 4, "ngIf"], ["class", "errormessage ml-2", 4, "ngIf"], ["type", "text", 1, "form-control", "ml-2", 3, "input", "ngModelChange", "placeholder", "ngModel", "ngModelOptions", "ngClass"], [1, "errormessage", "ml-2"], [1, "cursor", 3, "click"], ["type", "text", 1, "form-control", 3, "ngModelChange", "placeholder", "ngModel", "ngModelOptions"], [1, "fa", "fa-trash", "color-red", "f-22px", "ml-2", "cursor", 3, "click", "title"], ["id", "showVideo", 1, "card", "col-12", "p-3"], [2, "position", "relative", "padding-bottom", "52.083333333333336%", "height", "0"], ["frameborder", "0", "webkitallowfullscreen", "", "mozallowfullscreen", "", "allowfullscreen", "", 2, "position", "absolute", "top", "0", "left", "0", "width", "100%", "height", "100%", 3, "src"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-primary", "ml-2", 3, "click"]], template: function OtherLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, OtherLinkComponent_span_4_Template, 4, 3, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, OtherLinkComponent_div_5_Template, 3, 0, "div", 4)(6, OtherLinkComponent_div_6_Template, 9, 13, "div", 5)(7, OtherLinkComponent_div_7_Template, 3, 1, "div", 6);
            i0.ɵɵelementStart(8, "div", 7);
            i0.ɵɵtemplate(9, OtherLinkComponent_button_9_Template, 2, 0, "button", 8)(10, OtherLinkComponent_button_10_Template, 2, 0, "button", 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.titleName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showLink);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.arrayValue.length == 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.arrayValue);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedVideolinkData);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.selectedVideolinkData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isEditLink);
        } }, dependencies: [CommonModule, i2.NgClass, i2.NgForOf, i2.NgIf, i2.UpperCasePipe, i2.TitleCasePipe, FormsModule, i3.NgSelectOption, i3.ɵNgSelectMultipleOption, i3.DefaultValueAccessor, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [".input-error[_ngcontent-%COMP%] {\n  border-color: #fff !important;\n  box-shadow: 0 0 0 0.1rem red !important;\n}\n\n.errormessage[_ngcontent-%COMP%] {\n  color: red !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OtherLinkComponent, [{
        type: Component,
        args: [{ selector: 'app-other-link', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"my-4 resource-link-card\">\n    <div class=\"col-md-12 d-flex justify-content-between\">\n        <h4 class=\"font-weight-bold\">{{titleName}}</h4>\n        <span *ngIf=\"showLink\">\n            <i class=\"fa fa-edit f-22px ml-3 cursor color-primary\" title=\"Edit Resource Link\"\n                (click)=\"isEditLink = true\" *ngIf=\"arrayValue.length != 0 && !isEditLink\"></i>\n            <i class=\"fa fa-plus-circle f-22px ml-3 cursor color-primary\" title=\"Add Resource Link\"\n                 *ngIf=\"arrayValue.length == 0 || (arrayValue.length != 0 && isEditLink)\" (click)=\"addLinkArray()\"></i>\n            <i class=\"fa fa-times-circle color-red f-22px ml-3 cursor\" title=\"Close\"\n                 (click)=\"filterEmptyArrayValue()\" *ngIf=\"isEditLink\"></i>\n        </span>\n    </div>\n    <div class=\"col-md-12 d-flex justify-content-center align-items-center\" style=\"height: 20vh\"\n         *ngIf=\"arrayValue.length == 0\">\n        <span class=\"text-info\">No Resource Links available!</span>\n    </div>\n    <div class=\"col-md-12 py-3 d-flex flex-wrap align-items-{{isEditLink ? 'start' : 'center'}}\" *ngFor=\"let items of arrayValue; let i = index\">\n        <a (click)=\"showVideo(items.link)\" *ngIf=\"!isEditLink\">\n            <img *ngIf=\"items.type == 'document'\" class=\"size-38px\" src=\"assets/images/icons/doc-icon.png\" alt=\"doc\">\n            <img *ngIf=\"items.type == 'audio'\" class=\"size-38px\" src=\"assets/images/icons/audio-icon.png\" alt=\"mp3\">\n            <img *ngIf=\"items.type == 'video'\" class=\"size-38px\" src=\"assets/images/icons/video-icon.png\" alt=\"mp4\">\n            <img *ngIf=\"items.type == 'ppt'\" class=\"size-38px\" src=\"assets/images/icons/ppt-icon.png\" alt=\"ppt\">\n            <img *ngIf=\"items.type == 'Others'\" class=\"size-38px\" src=\"assets/images/icons/others-icon.png\" alt=\"others\">\n        </a>\n        <div class=\"col-md-2 px-0\" *ngIf=\"isEditLink\">\n            <select [(ngModel)]=\"items.type\" class=\"form-control\" [ngModelOptions]=\"{standalone: true}\">\n                <option [value]=\"list\"\n                        *ngFor=\"let list of linksType\">{{list == 'ppt' ? (list | uppercase) : (list | titlecase)}}</option>\n            </select>\n        </div>\n        <div class=\"col-md-2 px-0\" *ngIf=\"isEditLink\">\n            <input type=\"text\" (input)=\"$event.target.value.trimStart() != '' && items?.error ? items.error = false : items.error = false\" placeholder=\"{{items.type | titlecase}} Name\" *ngIf=\"isEditLink\" [(ngModel)]=\"items.name\"\n                   [ngModelOptions]=\"{standalone: true}\" class=\"form-control ml-2\" [ngClass]=\"{'input-error': items?.error}\">\n            <span *ngIf=\"items?.error\" class=\"errormessage ml-2\">Name is required</span>\n        </div>\n        <div class=\"col-md-{{isEditLink ? '8' : '11'}} d-flex align-items-center\">\n            <a class=\"cursor\" (click)=\"showVideo(items.link)\" *ngIf=\"!isEditLink\">{{items.name}}</a>\n            <a class=\"cursor\" (click)=\"showVideo(items.link)\" *ngIf=\"!isEditLink && showLink\">&nbsp;&nbsp;-&nbsp;&nbsp;{{items.link}}</a>\n            <input type=\"text\" placeholder=\"Enter {{items.type | titlecase}} Link {{i + 1}} *\" *ngIf=\"isEditLink\"\n                   [(ngModel)]=\"items.link\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\">\n            <i class=\"fa fa-trash color-red f-22px ml-2 cursor\" title=\"Delete {{items.type | titlecase}} Link\"\n               (click)=\"deleteArray(i)\" *ngIf=\"isEditLink\"></i>\n        </div>\n    </div>\n\n    <div id=\"showVideo\" class=\"card col-12 p-3\" *ngIf=\"selectedVideolinkData\">\n        <div style=\"position: relative; padding-bottom: 52.083333333333336%; height: 0;\"><iframe [src]=\"selectedVideolinkData\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\"></iframe></div>\n    </div>\n\n    <div class=\"col-md-12 col-12 d-flex justify-content-end\">\n        <button *ngIf=\"selectedVideolinkData\" class=\"btn btn-outline-primary\" (click)=\"selectedVideolinkData = ''\">Close</button>\n        <button *ngIf=\"isEditLink\" class=\"btn btn-primary ml-2\" (click)=\"filterEmptyArrayValue()\">Save</button>\n    </div>\n</div>\n", styles: [".input-error {\n  border-color: #fff !important;\n  box-shadow: 0 0 0 0.1rem red !important;\n}\n\n.errormessage {\n  color: red !important;\n}\n"] }]
    }], () => [{ type: i1.DomSanitizer }], { arrayValue: [{
            type: Input
        }], titleName: [{
            type: Input
        }], showLink: [{
            type: Input
        }], calledFrom: [{
            type: Input
        }], saveLinks: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OtherLinkComponent, { className: "OtherLinkComponent" }); })();
//# sourceMappingURL=other-link.component.js.map