import { Component, EventEmitter, HostListener, Input, Output, SecurityContext, ViewChild, } from '@angular/core';
import $ from 'jquery';
import { jsPDF } from 'jspdf';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/creator.service";
import * as i3 from "@angular/router";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/platform-browser";
import * as i6 from "../../../shared/service/configuration.service";
import * as i7 from "@ng-bootstrap/ng-bootstrap";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/common.service";
import * as i10 from "@angular/common";
import * as i11 from "ng2-pdf-viewer";
import * as i12 from "ngx-infinite-scroll";
import * as i13 from "@ng-select/ng-select";
import * as i14 from "ngx-color-picker";
import * as i15 from "../tiny-mice/tiny-mice.component";
import * as i16 from "../remove-student-annotation/remove-student-annotation.component";
const _c0 = ["toolbar"];
const _c1 = ["mathShow"];
const _c2 = ["pdfPage"];
const _c3 = ["canvas"];
const _c4 = ["pencilCanvas"];
const _c5 = ["deleteAlert"];
const _c6 = ["deleteSvgDraw"];
const _c7 = ["eraser"];
const _c8 = ["class"];
const _c9 = ["delete"];
const _c10 = ["eraseAll"];
const _c11 = a0 => ({ "overflow": a0 });
function StudentWebAnnotationComponent_div_0_div_2_div_1_img_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 32);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_img_14_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandPage(true)); });
    i0.ɵɵelementEnd();
} }
function StudentWebAnnotationComponent_div_0_div_2_div_1_img_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 33);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_img_15_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandPage(false)); });
    i0.ɵɵelementEnd();
} }
function StudentWebAnnotationComponent_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17, 5)(2, "div", 18)(3, "ng-select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_ng_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.textFontSize, $event) || (ctx_r1.textFontSize = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "img", 20);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteSvg()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "img", 21);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.incrementZoom(-0.1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "img", 22);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.incrementZoom(0.1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "img", 23);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.tools("rect", "crosshair")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "img", 24);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.tools("eraser", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "img", 25);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.tools("text", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "img", 26);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.tools("math", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "img", 27);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.tools("highlight", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "img", 28);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_img_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.tools("path", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span", 29);
    i0.ɵɵlistener("colorPickerChange", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_span_colorPickerChange_13_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.svgColor = ctx_r1.color); });
    i0.ɵɵtwoWayListener("colorPickerChange", function StudentWebAnnotationComponent_div_0_div_2_div_1_Template_span_colorPickerChange_13_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.color, $event) || (ctx_r1.color = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, StudentWebAnnotationComponent_div_0_div_2_div_1_img_14_Template, 1, 0, "img", 30)(15, StudentWebAnnotationComponent_div_0_div_2_div_1_img_15_Template, 1, 0, "img", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.textFontSize);
    i0.ɵɵproperty("items", ctx_r1.fontList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.selectedDeleteIcon ? "selected-tool-color" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "rect" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "eraser" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "text" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "math" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "highlight" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "path" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("background", ctx_r1.color);
    i0.ɵɵtwoWayProperty("colorPicker", ctx_r1.color);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandPdf && !ctx_r1.expand);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandPdf && ctx_r1.expand);
} }
function StudentWebAnnotationComponent_div_0_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34, 5)(2, "div", 35)(3, "div", 36)(4, "button", 37);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.eraseAlert()); });
    i0.ɵɵtext(5, "Clear all");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 38)(7, "img", 23);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_2_Template_img_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.tools("rect", "crosshair"); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "img", 39);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_2_Template_img_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.tools("eraser", "auto"); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "img", 25);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_2_Template_img_click_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.tools("text", "auto"); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "img", 28);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_2_Template_img_click_10_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.tools("path", "crosshair"); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 40);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_2_Template_input_click_11_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵtwoWayListener("ngModelChange", function StudentWebAnnotationComponent_div_0_div_2_div_2_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.svgColor, $event) || (ctx_r1.svgColor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "rect" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "eraser" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "text" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.shapesType == "path" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.svgColor);
} }
function StudentWebAnnotationComponent_div_0_div_2_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵelement(1, "img", 45);
    i0.ɵɵelementEnd();
} }
function StudentWebAnnotationComponent_div_0_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41, 6);
    i0.ɵɵtemplate(2, StudentWebAnnotationComponent_div_0_div_2_div_4_div_2_Template, 2, 0, "div", 42);
    i0.ɵɵelementStart(3, "pdf-viewer", 43);
    i0.ɵɵlistener("page-rendered", function StudentWebAnnotationComponent_div_0_div_2_div_4_Template_pdf_viewer_page_rendered_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pageRendered($event)); })("pageChange", function StudentWebAnnotationComponent_div_0_div_2_div_4_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pagechanging($event)); })("pages-initialized", function StudentWebAnnotationComponent_div_0_div_2_div_4_Template_pdf_viewer_pages_initialized_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pagechanging($event)); });
    i0.ɵɵtwoWayListener("pageChange", function StudentWebAnnotationComponent_div_0_div_2_div_4_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.pageVariable, $event) || (ctx_r1.pageVariable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("after-load-complete", function StudentWebAnnotationComponent_div_0_div_2_div_4_Template_pdf_viewer_after_load_complete_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.callBackFn($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", ctx_r1.selectedDeleteIcon ? "col-8" : "col-12");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.customPdfLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.pdfTemplate)("zoom", ctx_r1.zoom);
    i0.ɵɵtwoWayProperty("page", ctx_r1.pageVariable);
    i0.ɵɵproperty("fit-to-page", true)("original-size", true)("render-text", false)("show-all", true);
} }
function StudentWebAnnotationComponent_div_0_div_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵelement(1, "img", 45);
    i0.ɵɵelementEnd();
} }
function StudentWebAnnotationComponent_div_0_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 46, 6);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.mouseEvent1($event)); })("dblclick", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_div_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.editText($event)); })("scrolled", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_div_scrolled_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.scrollDownPads($event)); });
    i0.ɵɵtemplate(2, StudentWebAnnotationComponent_div_0_div_2_div_5_div_2_Template, 2, 0, "div", 42);
    i0.ɵɵelementStart(3, "pdf-viewer", 47);
    i0.ɵɵlistener("page-rendered", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_pdf_viewer_page_rendered_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pageRendered($event)); })("after-load-complete", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_pdf_viewer_after_load_complete_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.callBackFn($event)); })("pageChange", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pagechanging($event)); })("pages-initialized", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_pdf_viewer_pages_initialized_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pagechanging($event)); });
    i0.ɵɵtwoWayListener("pageChange", function StudentWebAnnotationComponent_div_0_div_2_div_5_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.pageVariable, $event) || (ctx_r1.pageVariable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("fromRoot", true)("infiniteScrollContainer", ".scrollWritingPad")("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false)("id", "workArea")("ngStyle", i0.ɵɵpureFunction1(15, _c11, ctx_r1.allowWorkSpaceScroll ? "scroll" : "hidden"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.customPdfLoader);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("page", ctx_r1.pageVariable);
    i0.ɵɵproperty("fit-to-page", true)("original-size", true)("render-text", ctx_r1.shapesType == "select")("show-all", true)("src", ctx_r1.pdfTemplate)("zoom", ctx_r1.zoom);
} }
function StudentWebAnnotationComponent_div_0_div_2_div_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_div_0_div_2_div_6_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.backToQuestion()); });
    i0.ɵɵtext(1, "Back");
    i0.ɵɵelementEnd();
} }
function StudentWebAnnotationComponent_div_0_div_2_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "app-remove-student-annotation", 54);
    i0.ɵɵlistener("undoDeleteAnnatation", function StudentWebAnnotationComponent_div_0_div_2_div_6_ng_container_4_Template_app_remove_student_annotation_undoDeleteAnnatation_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.undoDeleteAnnatation($event)); })("hoverremoveItem", function StudentWebAnnotationComponent_div_0_div_2_div_6_ng_container_4_Template_app_remove_student_annotation_hoverremoveItem_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.hoverRemoveItemEnter($event)); })("hoverleaveremoveItem", function StudentWebAnnotationComponent_div_0_div_2_div_6_ng_container_4_Template_app_remove_student_annotation_hoverleaveremoveItem_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.hoverLeaveRemoveItemEnter($event)); })("removeItem", function StudentWebAnnotationComponent_div_0_div_2_div_6_ng_container_4_Template_app_remove_student_annotation_removeItem_1_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.removeAnnatation($event)); })("openDeleteDialog", function StudentWebAnnotationComponent_div_0_div_2_div_6_ng_container_4_Template_app_remove_student_annotation_openDeleteDialog_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteAction()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.itemSelect);
} }
function StudentWebAnnotationComponent_div_0_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48)(1, "div", 49)(2, "div", 50);
    i0.ɵɵtemplate(3, StudentWebAnnotationComponent_div_0_div_2_div_6_button_3_Template, 2, 0, "button", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, StudentWebAnnotationComponent_div_0_div_2_div_6_ng_container_4_Template, 2, 1, "ng-container", 52);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.deleteAnnatation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.deleteAnnatation);
} }
function StudentWebAnnotationComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, StudentWebAnnotationComponent_div_0_div_2_div_1_Template, 16, 14, "div", 12)(2, StudentWebAnnotationComponent_div_0_div_2_div_2_Template, 12, 5, "div", 13);
    i0.ɵɵelementStart(3, "div", 9);
    i0.ɵɵtemplate(4, StudentWebAnnotationComponent_div_0_div_2_div_4_Template, 4, 9, "div", 14)(5, StudentWebAnnotationComponent_div_0_div_2_div_5_Template, 4, 17, "div", 15)(6, StudentWebAnnotationComponent_div_0_div_2_div_6_Template, 5, 2, "div", 16);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.toolAdjust);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.toolHide == true && ctx_r1.toolAdjust == true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.toolAdjust);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.toolHide && ctx_r1.toolAdjust);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.selectedDeleteIcon);
} }
function StudentWebAnnotationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "div", 9);
    i0.ɵɵtemplate(2, StudentWebAnnotationComponent_div_0_div_2_Template, 7, 5, "div", 10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showAnnotation && ctx_r1.annotationType != "preview");
} }
function StudentWebAnnotationComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 58)(4, "i", 59);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_1_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 60)(6, "h3", 61);
    i0.ɵɵtext(7, "Delete All Annotation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 9)(9, "h5", 62);
    i0.ɵɵtext(10, "Are you sure want to delete All Annotations ?");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 63)(12, "button", 64);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_1_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteAllAnnotation()); });
    i0.ɵɵtext(13, "Yes");
    i0.ɵɵelementEnd()();
} }
function StudentWebAnnotationComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 9)(4, "h5", 62);
    i0.ɵɵtext(5, "Please double click on annotation to erase");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(6, "div", 63)(7, "button", 64);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(8, "Got it");
    i0.ɵɵelementEnd()();
} }
function StudentWebAnnotationComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "div", 9)(4, "h5", 62);
    i0.ɵɵtext(5, "Coming Soon");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(6, "div", 63)(7, "button", 64);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_5_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(8, "Got it");
    i0.ɵɵelementEnd()();
} }
function StudentWebAnnotationComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65)(1, "h4");
    i0.ɵɵtext(2, "Enter values");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 55)(4, "div", 56)(5, "div", 57)(6, "div", 9)(7, "app-tiny-mice", 66);
    i0.ɵɵlistener("emitEditorValue", function StudentWebAnnotationComponent_ng_template_7_Template_app_tiny_mice_emitEditorValue_7_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mathValue($event)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(8, "div", 63)(9, "button", 64);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_7_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mathAnnotation()); });
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", ctx_r1.editMathValue == "" ? false : ctx_r1.editMathValue.rect.text)("height", 130)("id", "multiQues")("imageToolHide", true)("showDropBtn", false)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.editMathValue == "" ? "Done" : "Update");
} }
function StudentWebAnnotationComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "h4");
    i0.ɵɵtext(2, "Erase Annotation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 68);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_9_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 55)(5, "div", 56)(6, "div", 57)(7, "div", 69)(8, "label", 70);
    i0.ɵɵtext(9, "Are you sure? Do you want to erase all writing for this question");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(10, "div", 63)(11, "button", 64);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(12, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 71);
    i0.ɵɵlistener("click", function StudentWebAnnotationComponent_ng_template_9_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.clearAll(); return i0.ɵɵresetView(ctx_r1.allowWorkSpaceScroll = true); });
    i0.ɵɵtext(14, "Confirm");
    i0.ɵɵelementEnd()();
} }
export class StudentWebAnnotationComponent {
    constructor(auth, creator, activateRoute, formBuilder, sanitized, confi, modalService, toastr, cdr, router, common) {
        this.auth = auth;
        this.creator = creator;
        this.activateRoute = activateRoute;
        this.formBuilder = formBuilder;
        this.sanitized = sanitized;
        this.confi = confi;
        this.modalService = modalService;
        this.toastr = toastr;
        this.cdr = cdr;
        this.router = router;
        this.common = common;
        this.toolAdjust = false;
        this.popUp = false;
        this.getAnnotate = [];
        this.expandPdf = false;
        this.annotate = new EventEmitter();
        this.expandBoolean = new EventEmitter();
        this.editTextInput = false;
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.customeScrollPosition = 0;
        this.mouseDownFlag = false;
        this.workAreaPageNo = 0;
        this.editMathInput = false;
        this.mathDelayer = false;
        this.pagePosition = { x: 0, y: 0 };
        this.show = false;
        this.shapesType = '';
        this.touchEvents = [];
        this.pageVariable = 1;
        this.moveCount = 0;
        this.element = null;
        this.customPdfLoader = true;
        this.areaInfo = [];
        this.indexOfPage = 1;
        this.showPopup = false;
        this.listRectangleId = '';
        this.count = 0;
        this.dblTimer = 0;
        this.fontList = [
            { value: 12 },
            { value: 13 },
            { value: 14 },
            { value: 15 },
            { value: 16 },
            { value: 17 },
            { value: 18 },
            { value: 19 },
            { value: 20 },
            { value: 21 },
            { value: 22 },
        ];
        this.color = '#00CED1';
        this.zoom = 0.9;
        this.detailData = [];
        this.itemsList = [];
        this.selectedDeleteIcon = false;
        this.eraserDownMouse = false;
        this.drag = false;
        this.dragQuestionsList = [];
        this.originalSize = false;
        this.pathChanged = false;
        this.currentPage = 1;
        this.itemSelect = [];
        this.redoListArray = [];
        this.selectedElement = null;
        this.workAreaScroll = false;
        this.expand = false;
        this.pdfWidth = 0;
        this.pdfHeight = 0;
        this.showPage = false;
        this.allowWorkSpaceScroll = true;
        this.activateRoute.params.forEach((params) => {
            this.assessmentType = params.type;
            this.studentId = params.id;
            if (this.assessmentType == 'preview') {
                this.annotationType = params.type;
            }
            else {
                this.annotationType = 'none';
            }
        });
        this.webhost = this.confi.getimgUrl();
        // this.getStudentDetails();
        this.hide = true;
        this.svgColor = '#00CED1';
        this.disable = true;
        this.showInput = true;
        this.savaText = false;
        this.queDrag = false;
        this.deleteAnnatation = false;
        this.queNum = [];
        this.strPath = '';
        this.alphabets = [];
        this.buffer = [];
        for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
            this.alphabets.push(String.fromCharCode(i));
        }
        this.itemsList = [{ value: 'true' },
            { value: 'false' },
        ];
        this.showPage = true;
        StudentWebAnnotationComponent.me = this;
    }
    onpointerdown(event) {
        if (event.target.tagName == 'svg' && !this.drag) {
            this.mouseEvent1(event);
        }
        else if (event.target.tagName != 'svg') {
            this.handleEdit(event);
            console.log(event, 'pointer');
            this.textDrag(event);
        }
    }
    onTouchStart(event) {
        if (event.target.tagName == 'svg' && !this.drag) {
            this.mouseEvent1(event);
        }
        else if (event.target.tagName == 'text') {
            this.textDrag(event);
        }
    }
    onInput(e) {
        this.keyPressfunction(e);
    }
    onTouchMove(event) {
        if (event.target.tagName == 'svg' && !this.drag) {
            this.mouseEvent1(event);
        }
        else if (event.target.tagName == 'DIV' && this.selectedElement == null) {
            if (this.shapesType != '' && this.shapesType != undefined) {
                if (this.mouseDownFlag) {
                    this.mouseDownFlag = false;
                    this.buffer = [];
                    this.rect.d = this.strPath;
                    this.rect.text = this.textValue;
                    this.save();
                    this.lastMousePosition = { x: 0, y: 0 };
                    this.mousePosition = { x: 0, y: 0 };
                    this.pagePosition = { x: 0, y: 0 };
                    this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
                    this.strPath = '';
                    this.buffer = [];
                }
            }
        }
        if (this.selectedElements) {
            this.preventScroll();
            // this.dragElem(event);
            this.textDrag(event);
        }
    }
    onTouchEnd(event) {
        if (event.target.tagName == 'svg' && !this.drag) {
            this.mouseEvent1(event);
        }
        if (this.selectedElements) {
            this.saveAnnotationDetails();
            this.selectedElement = null;
        }
    }
    onpointermove(event) {
        if (event.target.tagName == 'svg' && this.selectedElement == null && !this.drag) {
            this.mouseEvent1(event);
        }
        else if (event.target.tagName == 'DIV' && this.selectedElement == null) {
            if (this.shapesType != '' && this.shapesType != undefined) {
                if (this.mouseDownFlag) {
                    this.mouseDownFlag = false;
                    this.buffer = [];
                    this.rect.d = this.strPath;
                    this.rect.text = this.textValue;
                    this.save();
                    this.lastMousePosition = { x: 0, y: 0 };
                    this.mousePosition = { x: 0, y: 0 };
                    this.pagePosition = { x: 0, y: 0 };
                    this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
                    this.strPath = '';
                    this.buffer = [];
                }
            }
        }
        if (this.selectedElement) {
            this.preventScroll();
            this.dragElem(event);
        }
    }
    onpointerup(event) {
        if (event.target.tagName != 'DIV' && this.shapesType != 'eraser') {
            this.mouseEvent1(event);
        }
        else if (event.target.tagName != 'DIV' && this.shapesType == 'eraser') {
            this.eraserAlert(event);
        }
        console.log(this.selectedElements, 'selected');
        if (this.selectedElements) {
            this.textDrag(event);
        }
    }
    onDoubleClicked(event) {
        console.log(event.type, 'dblclick');
        if (this.shapesType == 'eraser') {
            for (let i = 0; i < this.areaInfo.length; i++) {
                if (event.target.tagName != 'svg') {
                    if (this.areaInfo[i].rectangleId == event.target.id && this.areaInfo[i].isTeacherCorrection) {
                        this.areaInfo.splice(i, 1);
                        document.getElementById(event.target.id).remove();
                    }
                }
                else {
                    const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
                    const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
                    this.lastMousePosition = {
                        x: clientX - this.pagePosition.x,
                        y: clientY - this.pagePosition.y
                    };
                }
            }
            this.saveAnnotationDetails();
        }
        else {
            this.editText(event);
        }
    }
    ngAfterViewInit() {
        if (this.elementView) {
            this.contentHeight = this.elementView.nativeElement.offsetHeight;
        }
    }
    ngOnInit() {
        if (this.toolHide && this.toolAdjust) {
            this.areaInfo = this.getAnnotate;
            if (this.areaInfo.length != 0) {
                this.jsPDF = new jsPDF();
                this.areaInfo.forEach((val) => {
                    if (val.pageNumber > this.workAreaPageNo) {
                        this.workAreaPageNo = val.pageNumber;
                    }
                });
                for (let i = 0; i < this.workAreaPageNo - 1; i++) {
                    this.jsPDF.addPage();
                }
                this.pdfTemplate = this.jsPDF.output('datauristring');
            }
            else {
                this.jsPDF = new jsPDF();
                this.pdfTemplate = this.jsPDF.output('datauristring');
            }
            this.clearSetTimeoutWorkspace = setTimeout(() => {
                this.cdr.detectChanges();
                this.showAnnotation = true;
                this.annotationType = 'workarea';
            }, 2500);
        }
        else {
            this.getStudDetailSuccess(this.overallData);
        }
    }
    ngAfterContentInit() {
        this.allowScroll();
    }
    ngOnDestroy() {
        this.saveAnnotationDetails();
        if (this.clearSetTimeout) {
            clearTimeout(this.clearSetTimeout);
        }
        if (this.clearSetTimeoutWorkspace) {
            clearTimeout(this.clearSetTimeoutWorkspace);
        }
    }
    incrementZoom(amount) {
        this.zoom += amount;
    }
    callBackFn(pdf) {
        // this.totalPdfPage = pdf._pdfInfo.numPages;
        let end = new Date().getTime();
        // let total_time = end - this.startTime;
        // console.log(total_time ,'total_time');
        // console.timeEnd('pdf tim end');
        this.customPdfLoader = false;
        this.allowScroll();
        this.setCustomScrollPosition();
    }
    expandPage(val) {
        this.expand = val;
        this.expandBoolean.emit(val);
    }
    tools(type, pointerType) {
        console.log(type, pointerType, 'parameters');
        console.log(this.shapesType, 'shapeType');
        if (this.selectedDeleteIcon) {
            for (let i = 0; i < this.areaInfo.length; i++) {
                this.areaInfo[i].userSelect = false;
                this.hoverLeaveRemoveItemEnter(this.areaInfo[i]);
            }
        }
        this.selectedDeleteIcon = false;
        this.lastMousePosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.pagePosition = { x: 0, y: 0 };
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        if (this.shapesType === type) {
            this.allowWorkSpaceScroll = true;
            this.shapesType = '';
            this.mouseDownFlag = false;
            if (document.getElementById('customArea')) {
                document.getElementById('customArea').remove();
                this.editTextInput = false;
            }
            this.allowScroll();
        }
        else {
            this.allowWorkSpaceScroll = false;
            this.shapesType = type;
            this.elem.style.cursor = pointerType;
            if (document.getElementById('customArea') && this.shapesType != 'text') {
                document.getElementById('customArea').remove();
                this.editTextInput = false;
            }
            this.preventScroll();
        }
        this.showInput = true;
        if (this.shapesType == '' || this.shapesType == undefined) {
            this.mouseDownFlag = false;
            this.allowScroll();
        }
    }
    getMousePosition(evt, element, type) {
        console.log(element.nearestViewportElement, 'nearestViewportElement');
        console.log(element.farthestViewportElement, 'farthestViewportElement');
        let CTM;
        if (type == 'move') {
            CTM = element.nearestViewportElement.getScreenCTM();
        }
        else {
            CTM = element.farthestViewportElement.getScreenCTM();
        }
        if (type == 'move') {
            return {
                x: (evt.changedTouches[0].clientX - CTM.e) / CTM.a,
                y: (evt.changedTouches[0].clientY - CTM.f) / CTM.d
            };
        }
        else {
            return {
                x: (evt.clientX - CTM.e) / CTM.a,
                y: (evt.clientY - CTM.f) / CTM.d
            };
        }
    }
    dragElem(event) {
        if (this.mouseDownFlag && this.selectedElement) {
            event.preventDefault();
        }
    }
    textDrag(event) {
        console.log(event.type, 'text drag enter');
        if (event.type == 'pointerdown' || event.type == 'touchstart') {
            console.log(event, 'pointD');
            this.selectedElements = null;
            event.preventDefault();
            let val = event.target.parentElement;
            console.log(val, 'val');
            console.log(val.parentElement, 'parent');
            for (let i = 0; i < i + 1; i++) {
                // console.log(i, val.tagName, 'index');
                // if (val.tagName) {
                if (val.tagName == 'foreignObject') {
                    console.log(i, val.id, 'id');
                    this.selectedElements = document.getElementById(val.id);
                    this.drag = true;
                    break;
                }
                else {
                    val = val.parentElement;
                }
                // } else {
                //     val = val.parentElement;
                // }
            }
            console.log(this.selectedElements, 'selectedElements');
            // this.selectedElements = document.getElementById(event.target.id);
            if (this.selectedElements) {
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == this.selectedElements.id) {
                        if (value.isTeacherCorrection) {
                            this.selectedElements.style.cursor = 'move';
                            this.offsetter = this.getMousePosition(event, this.selectedElements, 'down');
                            this.offsetter.x -= parseFloat(this.selectedElements.getAttributeNS(null, 'x'));
                            this.offsetter.y -= parseFloat(this.selectedElements.getAttributeNS(null, 'y'));
                            this.mouseDownFlag = true;
                            this.preventScroll();
                        }
                    }
                });
                console.log(this.offsetter, 'offsetter');
            }
        }
        if ((event.type == 'pointermove' || event.type == 'touchmove') && this.selectedElements) {
            event.preventDefault();
            const coord = this.getMousePosition(event, this.selectedElements, 'move');
            if (this.selectedElements) {
                this.selectedElements.setAttributeNS(null, 'x', coord.x - this.offsetter.x);
                // this.selectedElements.setAttributeNS(null, 'x', coord.x);
                this.selectedElements.setAttributeNS(null, 'y', coord.y - this.offsetter.y);
                // this.selectedElements.setAttributeNS(null, 'y', coord.y);
            }
        }
        if (event.type == 'pointerup' || event.type == 'touchend') {
            this.mouseDownFlag = this.drag = false;
            this.offsetter = null;
            this.moveCount = 0;
            this.areaInfo.forEach((val) => {
                if (this.selectedElements.id == val.rectangleId) {
                    val.rect.x1 = this.selectedElements.x.baseVal.value;
                    val.rect.y1 = this.selectedElements.y.baseVal.value;
                }
            });
            this.saveAnnotationDetails();
            this.selectedElements = null;
            this.allowScroll();
        }
    }
    eraserAlert(event) {
        this.mouseDownFlag = false;
        this.lastMousePosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        if (event.type == 'pointerup' && this.eraserDownMouse) {
            this.modalRef = this.modalService.open(this.eraser, { size: 'md', backdrop: 'static', windowClass: 'studentAnotation' });
        }
    }
    mathValue(event) {
        this.mathVal = event.content;
    }
    mathAnnotation() {
        this.close();
        if (this.mathVal != '') {
            let rectId;
            this.element = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            if (this.editMathInput) {
                this.element.id = this.editMathValue.rectangleId;
                this.element.setAttribute('x', this.editMathValue.rect.x1);
                this.element.setAttribute('y', this.editMathValue.rect.y1);
            }
            else {
                rectId = Math.random().toFixed(6);
                this.element.id = 'math-' + rectId;
                this.element.setAttribute('x', this.textPosition.x);
                this.element.setAttribute('y', this.textPosition.y);
            }
            this.element.setAttribute('fill', this.svgColor);
            this.element.setAttribute('stroke-width', 'none');
            this.element.setAttribute('stroke', 'none');
            this.element.style.fontSize = this.textFontSize + 'px';
            this.element.style.width = 'auto';
            this.element.style.height = '20px';
            this.element.style.overflow = 'visible';
            this.element.style.cursor = 'move';
            const userInput = this.sanitized.sanitize(SecurityContext.HTML, this.sanitized.bypassSecurityTrustHtml(this.mathVal));
            const mathBody = document.createElement('DIV');
            if (this.editMathInput) {
                mathBody.id = this.editMathValue.rectangleId;
            }
            else {
                mathBody.id = 'math-' + rectId;
            }
            mathBody.innerHTML = userInput;
            this.element.appendChild(mathBody);
            if (this.editMathInput) {
                document.getElementById(this.editMathValue.rectangleId).remove();
                this.element.children[0].children.forEach((value) => value.id = this.editMathValue.rectangleId);
                document.getElementById(this.editMathValue.pageNumber).appendChild(this.element);
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == this.editMathValue.rectangleId) {
                        value.rect.text = this.mathVal;
                    }
                });
                this.saveAnnotationDetails();
            }
            else {
                this.rect.x1 = this.textPosition.x;
                this.rect.y1 = this.textPosition.y;
                this.rect.text = this.mathVal;
                this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                const path = this.composedPath(this.mathInputEvent);
                this.element.children[0].children.forEach((value) => value.id = 'math-' + rectId);
                path.find(p => p.className == 'page').children[1].appendChild(this.element);
                this.save();
            }
            this.mathVal = '';
            this.element = null;
            this.editMathInput = false;
            this.editMathValue = '';
            this.clickEvent();
        }
    }
    editText(event) {
        console.log(event, 'parentELem');
        let id;
        let selected;
        let val = event.target.parentElement;
        for (let i = 0; i < i + 1; i++) {
            console.log(val.tagName, i, 'tagname');
            if (val.tagName == 'foreignObject') {
                selected = document.getElementById(val.id);
                break;
            }
            else {
                val = val.parentElement;
            }
        }
        console.log(selected, 'selected');
        if (selected.tagName == 'foreignObject') {
            let split = selected.id.split('-');
            if (split[0] == 'text') {
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == selected.id && value.isTeacherCorrection) {
                        this.editingTextValue = value;
                        console.log(selected.children[0], 'edit getvel');
                        this.appendTextArea(event, event.path, value.rect.width, value.rect.height);
                        this.inputElement.children[0].innerHTML = selected.children[0].innerText;
                        this.inputElement.style.left = value.rect.x1 > 520 ? (value.rect.x1 - 60).toString() + 'px' : (value.rect.x1).toString() + 'px';
                        this.inputElement.style.top = (value.rect.y1).toString() + 'px';
                        this.inputElement.style.width = 'auto';
                        this.inputElement.style.position = 'absolute';
                        this.textPosition = {
                            x: value.rect.x1 / this.scale,
                            y: value.rect.y1 / this.scale,
                        };
                        const paths = this.composedPath(event.target);
                        paths?.find(p => p.className == 'page').appendChild(this.inputElement);
                        this.editTextInput = true;
                    }
                });
            }
            else if (split[0] == 'math') {
                this.mathInputEvent = document.getElementById(selected.id);
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == selected.id && value.isTeacherCorrection) {
                        if (document.getElementById('customArea')) {
                            document.getElementById('customArea').remove();
                            this.editTextInput = false;
                            this.inputElement = null;
                            this.showInput = true;
                            this.element = null;
                        }
                        this.editMathValue = value;
                        this.editMathInput = true;
                        this.modalRef = this.modalService.open(this.mathShow, { size: 'md', backdrop: 'static' });
                    }
                });
            }
        }
    }
    keyPressfunction(event) {
        const textValue = [];
        event.target.value.split(/^/gm).forEach((items) => {
            textValue.push(items.length);
        });
        const textAreaValue = document.getElementById('customText');
        const textAreaHeight = textAreaValue.style.height.split('px');
        if (['insertText'].indexOf(event.inputType) > -1 && event.data == null) {
            textAreaValue.style.height = (Number(textAreaHeight[0]) + 20).toString() + 'px';
        }
        else {
            console.log(textValue, 'textValue');
            if (textValue.length != 0) {
                const maxCharacterLength = textValue.reduce((a, b) => Math.max(a, b));
                const calculatedWidth = maxCharacterLength == 1 ? maxCharacterLength * 40 : (maxCharacterLength * 6) + 40;
                const leftPosition = this.inputElement.style.left.toString().split('px')[0];
                const allowedPdfWidth = this.pdfWidth - 10 - Math.round(leftPosition);
                console.log(allowedPdfWidth, 'allowd');
                if (allowedPdfWidth > calculatedWidth) {
                    textAreaValue.style.width = calculatedWidth.toString() + 'px';
                }
                if (['deleteContentBackward'].indexOf(event.inputType) > -1 && event.data == null) {
                    textAreaValue.style.height = (((textValue.length - 1) * 20) + 50).toString() + 'px';
                }
            }
        }
    }
    appendTextArea(event, path, width, height) {
        this.inputElement = null;
        if (document.getElementById('customArea')) {
            document.getElementById('customArea').remove();
            this.editTextInput = false;
            this.inputElement = null;
            this.showInput = true;
            this.element = null;
        }
        this.inputElement = document.createElement('DIV');
        const text = document.createElement('TEXTAREA');
        text.className = 'text-area-annotation';
        text.setAttribute('type', 'text');
        text.setAttribute('name', 'customText');
        text.setAttribute('Placeholder', 'Text');
        text.style.resize = 'both';
        text.style.height = height == '' || height == '0' ? '50px' : height;
        text.style.width = width == '' || width == '0' ? '40px' : width;
        text.style.fontSize = this.textFontSize + 'px';
        text.style.overflowWrap = 'break-word';
        text.id = 'customText';
        this.inputElement.id = 'customArea';
        this.inputElement.appendChild(text);
    }
    appendTextAreaInput(event, path) {
        const pageNumber = this.dataPageNumber;
        const pageDetails = document.getElementById('pdf-page').getElementsByTagName('div')[1].getElementsByClassName('page')[pageNumber - 1];
        this.pdfWidth = parseInt((pageDetails.style.width).split('px')[0]);
        this.pdfHeight = parseInt((pageDetails.style.height).split('px')[0]);
        console.log(this.pdfWidth, 'pdfWidth');
        // if (event.target.tagName != "TEXTAREA" && event.target.tagName != 'I') {
        if (event.target.tagName != 'TEXTAREA') {
            if (document.getElementById('customArea') != null) {
                const customTextElement = document.querySelector('textarea[name="customText"]');
                console.log(customTextElement, 'customTextElement');
                if (customTextElement && customTextElement.value == '') {
                    document.getElementById('customArea')?.remove();
                    this.showInput = true;
                }
                else {
                    this.showInput = false;
                }
            }
        }
        console.log(this.showInput, 'showinput');
        if (event.target.tagName != 'TEXTAREA') {
            if (this.showInput) {
                this.appendTextArea(event, path, '40px', '50px');
                const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
                const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
                this.lastMousePosition = {
                    x: clientX - this.pagePosition.x,
                    y: clientY - this.pagePosition.y
                };
                console.log(this.lastMousePosition.x, 'this.lastMousePosition.x');
                this.inputElement.style.left = this.lastMousePosition.x > 520 ? (this.lastMousePosition.x - 60).toString() + 'px' : (this.lastMousePosition.x).toString() + 'px';
                this.inputElement.style.top = (this.lastMousePosition.y / this.scale) > 920 ? (this.lastMousePosition.y - 50).toString() + 'px' : (this.lastMousePosition.y).toString() + 'px';
                this.inputElement.style.width = 'auto';
                this.inputElement.style.position = 'absolute';
                // this.inputElement.style.display = 'block';
                this.textPosition = {
                    x: this.lastMousePosition.x / this.scale,
                    y: this.lastMousePosition.y / this.scale,
                };
                const paths = this.composedPath(event.target);
                if (event.target.name != 'customArea') {
                    // this.inputElement.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                    paths?.find(p => p.className == 'page').appendChild(this.inputElement);
                }
                document.getElementById('customArea').focus();
            }
            if (!this.showInput) {
                let rectId;
                let idd;
                if (!this.editTextInput) {
                    rectId = Math.random().toFixed(6);
                    idd = 'text-' + rectId;
                    const customTextElement = document.querySelector('textarea[name="customText"]');
                    this.textValue = customTextElement.value;
                    if (this.textValue != '') {
                        // console.log(document.getElementById('customText').get)
                        const height = document.getElementById('customText').style.height;
                        const width = document.getElementById('customText').style.width;
                        this.element = this.createWrappingText(this.textValue, this.textPosition.x, this.textPosition.y, height, width, idd, this.svgColor);
                        this.element.id = 'text-' + rectId;
                        this.element.setAttribute('fill', this.svgColor);
                        this.element.style.fontSize = this.textFontSize + 'px';
                        this.element.style.flexWrap = 'wrap';
                        this.element.style.cursor = 'move';
                        this.rect.x1 = this.textPosition.x;
                        this.rect.y1 = this.textPosition.y;
                        this.rect.text = this.textValue;
                        this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        const push = path.find(p => p.className == 'page').children;
                        for (let i = 0; i < push.length; i++) {
                            if (push[i].tagName == 'svg') {
                                push[i].appendChild(this.element);
                            }
                        }
                        document.getElementById('customArea').remove();
                        this.save();
                    }
                }
                else {
                    const customTextElement = document.querySelector('textarea[name="customText"]');
                    this.textValue = customTextElement.value;
                    if (this.textValue != '') {
                        const height = document.getElementById('customText').style.height;
                        const width = document.getElementById('customText').style.width;
                        this.element = this.createWrappingText(this.textValue, this.editingTextValue.rect.x1, this.editingTextValue.rect.y1, height, width, this.editingTextValue.rectangleId, this.svgColor);
                        this.element.id = this.editingTextValue.rectangleId;
                        this.element.setAttribute('fill', this.editingTextValue.color);
                        this.element.style.fontSize = this.textFontSize + 'px';
                        this.element.style.flexWrap = 'wrap';
                        this.element.style.cursor = 'move';
                        this.editingTextValue.rect.text = this.textValue;
                        this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        for (let i = 0; i < this.areaInfo.length; i++) {
                            if (this.areaInfo[i].rectangleId == this.editingTextValue.rectangleId) {
                                this.areaInfo[i].rect.text = this.editingTextValue.rect.text;
                                this.areaInfo[i].rect.width = this.rect.width;
                                this.areaInfo[i].rect.height = this.rect.height;
                            }
                        }
                        document.getElementById(this.editingTextValue.rectangleId).remove();
                        const push = path.find(p => p.className == 'page').children;
                        for (let i = 0; i < push.length; i++) {
                            if (push[i].tagName == 'svg') {
                                push[i].appendChild(this.element);
                            }
                        }
                        document.getElementById('customArea').remove();
                    }
                }
                this.textValue = '';
                this.showInput = true;
                this.element = null;
                this.editTextInput = false;
                // this.lastMousePosition = {
                //     x: event.clientX - this.pagePosition.x,
                //     y: event.clientY - this.pagePosition.y
                // };
                //
                // this.inputElement.style.left = (this.lastMousePosition.x).toString() + 'px';
                // this.inputElement.style.top = (this.lastMousePosition.y).toString() + 'px';
                // this.inputElement.style.width = '200px';
                // this.inputElement.style.height = '20px';
                // this.inputElement.style.overflow = 'visible';
                // this.inputElement.style.position = 'absolute';
                // this.textPosition = {
                //     x: this.lastMousePosition.x / this.scale,
                //     y: this.lastMousePosition.y / this.scale,
                // };
            }
        }
    }
    createWrappingText(text, x, y, height, width, id, color) {
        const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        svgText.setAttributeNS(null, 'x', x);
        svgText.setAttributeNS(null, 'y', y);
        const post = document.createElement('pre');
        post.setAttribute('id', id);
        post.className = 'textInput';
        post.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
        post.textContent = text;
        const textValue = [];
        text.split(/^/gm).forEach((items) => {
            textValue.push(items.length);
        });
        post.innerHTML = post.innerHTML.replace(/\n/g, '<br>\n');
        post.style.color = color;
        const calculateWidth = width ? width.split('px') : width;
        post.style.width = width ? (calculateWidth[0] - 20).toString() + 'px' : width;
        post.style.overflowWrap = 'break-word';
        this.rect.width = width;
        this.rect.height = height;
        post.style.fontFamily = 'sans-serif', 'Arial', 'Verdana', "Trebuchet MS", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        post.style.whiteSpace = 'normal';
        post.style.fontSize = this.textFontSize;
        svgText.style.width = width ? (calculateWidth[0] - 20).toString() + 'px' : width;
        svgText.style.height = textValue.length == 1 ? ((height.split('px')[0] - 20).toString() + 'px') : height;
        svgText.style.overflow = 'visible';
        svgText.appendChild(post);
        return svgText;
    }
    mathInit(event) {
        this.editMathValue = '';
        this.modalRef = this.modalService.open(this.mathShow, { size: 'md', backdrop: 'static' });
        this.mathInputEvent = event.target;
        this.lastMousePosition = {
            x: event.clientX - this.pagePosition.x,
            y: event.clientY - this.pagePosition.y
        };
        this.textPosition = {
            x: this.lastMousePosition.x / this.scale,
            y: this.lastMousePosition.y / this.scale,
        };
    }
    async mouseEvent1(event) {
        if (event.type == 'pointerdown' && this.shapesType != 'text' && this.shapesType != 'eraser' && this.editTextInput) {
            event.preventDefault();
            let path = this.composedPath(event.target);
            this.appendTextAreaInput(event, path);
        }
        if (this.annotationType != 'preview') {
            if (!this.showPopup && this.shapesType != undefined && this.shapesType != '') {
                if (event.type === 'pointerdown') {
                    event.preventDefault();
                    console.log('pointerDown');
                    this.mouseDownFlag = true;
                    this.pathChanged = false;
                    this.lastMousePosition = { x: 0, y: 0 };
                    this.mousePosition = { x: 0, y: 0 };
                    this.pagePosition = { x: 0, y: 0 };
                    this.buffer = [];
                    this.strPath = '';
                    let path;
                    this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
                    path = this.composedPath(event.target);
                    const eventPath = path.find(p => p.className == 'page');
                    if (typeof eventPath !== 'undefined') {
                        this.dataPageNumber = parseInt(eventPath.getAttribute('data-page-number'));
                        let toDrawRectangle;
                        const pagePath1 = path.find(p => p.className == 'page');
                        const lengthofChilds1 = path.find(p => p.className == 'page').children.length;
                        for (let i = 0; i < lengthofChilds1; i++) {
                            if (pagePath1.children[i].tagName == 'svg') {
                                toDrawRectangle = pagePath1.children[i];
                            }
                        }
                        const pageOffset = toDrawRectangle.getBoundingClientRect();
                        this.pagePosition = {
                            x: pageOffset.left,
                            y: pageOffset.top
                        };
                        const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
                        const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
                        this.lastMousePosition = {
                            x: clientX - this.pagePosition.x,
                            y: clientY - this.pagePosition.y
                        };
                        if (this.shapesType != 'text') {
                            this.element = document.createElementNS('http://www.w3.org/2000/svg', this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType);
                            this.element.setAttribute('stroke-width', '2');
                            this.element.setAttribute('stroke', this.svgColor);
                            this.element.setAttribute('fill', 'none');
                        }
                        if (this.shapesType == 'rect') {
                            const rectId = Math.random().toFixed(6);
                            this.element.id = 'rect-' + rectId;
                            this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
                            this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));
                        }
                        if (this.shapesType == 'circle') {
                            const rectId = Math.random().toFixed(6);
                            this.element.id = 'circle-' + rectId;
                            this.element.setAttribute('cx', (this.lastMousePosition.x / this.scale));
                            this.element.setAttribute('cy', (this.lastMousePosition.y / this.scale));
                            this.element.setAttribute('r', ((this.lastMousePosition.x / this.scale) - (this.lastMousePosition.y / this.scale)));
                        }
                        if (this.shapesType == 'path') {
                            this.pathChanged = false;
                            const rectId = Math.random().toFixed(6);
                            this.element.id = 'path-' + rectId;
                            this.strPath = 'M' + (this.lastMousePosition.x / this.scale) + ' ' + (this.lastMousePosition.y / this.scale);
                            this.element.setAttribute('d', this.strPath);
                            // console.log("pointerdown" + this.strPath);
                        }
                        if (this.shapesType == 'rectMask') {
                            const rectId = Math.random().toFixed(6);
                            this.element.id = 'rectMask-' + rectId;
                            this.element.setAttribute('stroke-width', '0');
                            this.element.setAttribute('fill', '#fff');
                            this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
                            this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));
                        }
                        if (this.shapesType == 'highlight') {
                            const rectId = Math.random().toFixed(6);
                            this.element.id = 'highlight-' + rectId;
                            this.element.setAttribute('stroke-width', '0');
                            // this.element.setAttribute('fill', 'yellow');
                            this.element.setAttribute('fill', this.svgColor);
                            this.element.setAttribute('fill-opacity', '0.2');
                            this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
                            this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));
                        }
                        if (this.shapesType == 'line') {
                            const rectId = Math.random().toFixed(6);
                            this.element.id = 'line-' + rectId;
                            this.element.setAttribute('x2', (this.lastMousePosition.x / this.scale));
                            this.element.setAttribute('y2', (this.lastMousePosition.y / this.scale));
                        }
                        if (this.shapesType == 'math' && !this.editTextInput && !this.editMathInput) {
                            this.mathInit(event);
                        }
                        if (this.shapesType == 'text') {
                            this.appendTextAreaInput(event, path);
                        }
                    }
                    if (this.element) {
                        this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                    }
                }
                if (event.type === 'pointermove' && this.shapesType != 'text') {
                    event.preventDefault();
                    this.preventScroll();
                    const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
                    const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
                    this.mousePosition = {
                        x: clientX - this.pagePosition.x,
                        y: clientY - this.pagePosition.y
                    };
                    if (this.mouseDownFlag) {
                        const width = (this.mousePosition.x / this.scale) - (this.lastMousePosition.x / this.scale);
                        const height = (this.mousePosition.y / this.scale) - (this.lastMousePosition.y / this.scale);
                        this.rect = {
                            x1: (this.lastMousePosition.x / this.scale),
                            y1: (this.lastMousePosition.y / this.scale),
                            x2: (this.mousePosition.x / this.scale),
                            y2: (this.mousePosition.y / this.scale),
                            d: '',
                            text: '',
                            width,
                            height
                        };
                        if (this.element != null) {
                            this.element.style.width = width + 'px';
                            this.element.style.height = height + 'px';
                            // let path = this.composedPath(event.target)
                            const pagePath1 = this.composedPath(event.target).find(p => p.className == 'page');
                            const lengthofChilds1 = this.composedPath(event.target).find(p => p.className == 'page').children.length;
                            let toDrawRectangle;
                            for (let i = 0; i < lengthofChilds1; i++) {
                                if (pagePath1.children[i].tagName == 'svg') {
                                    toDrawRectangle = pagePath1.children[i];
                                }
                            }
                            const diffX = this.rect.x1 - this.rect.x2;
                            const diffY = this.rect.y1 - this.rect.y2;
                            if (this.rect.width > 0 && this.rect.height > 0 && this.shapesType != 'path') {
                                toDrawRectangle?.appendChild(this.element);
                            }
                            else if (this.shapesType == 'path' && ((diffX > 4 || diffX < -4) || (diffY > 4 || diffY < -4))) {
                                this.pathChanged = true;
                                toDrawRectangle?.appendChild(this.element);
                            }
                        }
                        if (this.shapesType == 'path' && this.pathChanged) {
                            const clientX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
                            const clientY = event.changedTouches ? event.changedTouches[0].clientY : event.clientY;
                            this.mousePosition = {
                                x: (clientX - this.pagePosition.x) / this.scale,
                                y: (clientY - this.pagePosition.y) / this.scale,
                            };
                            this.appendToBuffer(this.mousePosition);
                            this.updateSvgPath();
                        }
                    }
                }
                if (event.type === 'pointerup' && this.shapesType != 'eraser') {
                    this.touchEvents.push({ type: event.type });
                    this.cdr.detectChanges();
                    this.mouseDownFlag = false;
                    this.buffer = [];
                    this.rect.d = this.strPath;
                    this.rect.text = this.textValue;
                    if (this.shapesType == 'text') {
                        if (document.getElementById('customText')) {
                            document.getElementById('customText').focus();
                        }
                    }
                    else if (this.shapesType == 'path') {
                        if (this.rect.x1 !== 0 && this.pathChanged) {
                            this.save();
                        }
                    }
                    else if (this.shapesType != 'math') {
                        if (this.rect.x1 !== 0 && this.rect.x1 !== this.rect.x2) {
                            this.save();
                        }
                    }
                    this.lastMousePosition = { x: 0, y: 0 };
                    this.mousePosition = { x: 0, y: 0 };
                    this.pagePosition = { x: 0, y: 0 };
                    this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
                    this.strPath = '';
                    this.buffer = [];
                    console.log(this.lastMousePosition, 'this.lastMousePosition');
                }
                else if (event.type === 'pointerup' && this.shapesType == 'eraser') {
                    this.mouseDownFlag = false;
                }
            }
            if (this.shapesType == '' && event.type == 'pointerup') {
                this.allowScroll();
            }
        }
    }
    preventScroll() {
        document.body.style.overflow = 'hidden';
        const d = document.getElementsByClassName('ng2-pdf-viewer-container');
        // const d1 = document.getElementsByClassName('scrollPanel-student') as HTMLCollectionOf<HTMLElement>;
        d[0].style.overflow = 'hidden';
        // d1[0].style.overflow = 'hidden';
    }
    allowScroll() {
        if (!this.popUp) {
            document.body.style.overflow = 'scroll';
        }
        else {
            document.body.style.overflow = 'hidden';
        }
        const d = document.getElementsByClassName('ng2-pdf-viewer-container');
        // const d1 = document.getElementsByClassName('scrollPanel-student') as HTMLCollectionOf<HTMLElement>;
        if (d[0]) {
            d[0].style.overflow = 'scroll';
        }
    }
    clickEvent() {
        if (!this.mathDelayer) {
            this.mathDelayer = true;
            setTimeout(() => {
                document.getElementById('myDiv').click();
            }, 1000);
        }
        setTimeout(() => {
            this.mathDelayer = false;
        }, 1500);
    }
    backToQuestion() {
        this.selectedDeleteIcon = false;
        this.deleteAnnatation = false;
        if (this.shapesType == '' || this.shapesType == undefined) {
            this.allowScroll();
        }
        for (let i = 0; i < this.areaInfo.length; i++) {
            this.areaInfo[i].userSelect = false;
            this.hoverLeaveRemoveItemEnter(this.areaInfo[i]);
        }
    }
    deleteSvg() {
        this.shapesType = '';
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static', windowClass: 'studentAnotation' });
    }
    deleteAllAnnotation() {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (this.areaInfo[i].isTeacherCorrection) {
                this.areaInfo[i].isDelete = true;
                this.redoListArray.push(this.areaInfo[i]);
                if (document.getElementById(this.areaInfo[i].rectangleId)) {
                    document.getElementById(this.areaInfo[i].rectangleId).remove();
                }
            }
        }
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            return value.pageNumber == this.pageVariable && value.isTeacherCorrection;
        });
        this.itemSelect = this.selectedPageAnnatation;
        this.close();
        this.saveAnnotationDetails();
    }
    deleteCurrentPageAnnotation() {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (this.pageVariable == this.areaInfo[i].pageNumber && this.areaInfo[i].isTeacherCorrection) {
                this.areaInfo[i].isDelete = true;
                this.redoListArray.push(this.areaInfo[i]);
                if (document.getElementById(this.areaInfo[i].rectangleId)) {
                    document.getElementById(this.areaInfo[i].rectangleId).remove();
                }
            }
        }
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            return value.pageNumber !== this.pageVariable && value.isTeacherCorrection;
        });
        this.itemSelect = this.selectedPageAnnatation;
        this.deleteSvg();
        this.close();
        this.saveAnnotationDetails();
    }
    getAveragePoint(offset) {
        const len = this.buffer.length;
        if (len % 2 === 1 || len >= 8) {
            let totalX = 0;
            let totalY = 0;
            let pt;
            let i;
            let count = 0;
            for (i = offset; i < len; i++) {
                count++;
                pt = this.buffer[i];
                totalX += pt.x;
                totalY += pt.y;
            }
            return {
                x: totalX / count,
                y: totalY / count
            };
        }
        return null;
    }
    updateSvgPath() {
        let pt = this.getAveragePoint(0);
        if (pt) {
            this.strPath += ' L' + pt.x + ' ' + pt.y;
            let tmpPath = '';
            for (let offset = 10; offset < this.buffer.length; offset += 5) {
                pt = this.getAveragePoint(offset);
                tmpPath += ' L' + pt.x + ' ' + pt.y;
            }
            // Set the complete current path coordinates
            this.element.setAttribute('d', this.strPath + tmpPath);
        }
    }
    appendToBuffer(pt) {
        this.buffer.push(pt);
        while (this.buffer.length > 8) {
            this.buffer.shift();
        }
    }
    pagechanging(event) {
        this.currentPage = event;
        if (this.deleteAnnatation) {
            this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
                return value.pageNumber == this.currentPage && value.isTeacherCorrection;
            });
            this.itemSelect = this.selectedPageAnnatation;
        }
    }
    removeAnnatation(event) {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (event.rectangleId == this.areaInfo[i].rectangleId) {
                this.areaInfo[i].isDelete = true;
                this.redoListArray.push(this.areaInfo[i]);
            }
        }
        const joinString = event.rectangleId;
        // setTimeout(() => {
        document.getElementById(joinString).remove();
        // }, 100);
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            return value.pageNumber == this.pageVariable && value.isTeacherCorrection;
        });
        this.itemSelect = this.selectedPageAnnatation;
        this.saveAnnotationDetails();
    }
    setCustomScrollPosition() {
        if (this.workAreaScroll) {
            const workArea = document.getElementById('workArea');
            console.log(workArea, 'workArea');
            console.log(this.customeScrollPosition, 'pos');
            setTimeout(() => {
                // console.log(workArea.scrollTo(0, 413));
                // workArea.scroll(0, this.customeScrollPosition);
                workArea?.scrollTo(0, this.customeScrollPosition);
                this.workAreaScroll = false;
                console.log('scrollTo');
            }, 50);
        }
    }
    scrollDownPads(event) {
        console.log(event.currentScrollPosition, 'event.currentScrollPosition');
        this.customeScrollPosition = Math.floor(event.currentScrollPosition);
        console.log(this.customeScrollPosition, 'custos');
        this.workAreaScroll = true;
        this.jsPDF.addPage();
        console.log(this.areaInfo, 'areaInfo');
        this.pdfTemplate = this.jsPDF.output('datauristring');
    }
    undoDeleteAnnatation(event) {
        for (let i = 0; i < this.redoListArray.length; i++) {
            if (event.rectangleId == this.redoListArray[i].rectangleId) {
                this.redoPageRendered(this.redoListArray[i]);
                this.redoListArray.splice(i, 1);
            }
        }
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (event.rectangleId == this.areaInfo[i].rectangleId) {
                this.areaInfo[i].isDelete = false;
            }
        }
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            return value.pageNumber == this.pageVariable && value.isTeacherCorrection;
        });
        this.itemSelect = this.selectedPageAnnatation;
        this.saveAnnotationDetails();
    }
    addQuestionButtonInPdf(value) {
        if (this.dragQuestionsList) {
            this.dragQuestionsList.forEach((item) => {
                this.dragButton = document.createElement('span');
                this.dragButton.id = item.dragButton.id;
                this.dragButton.style.transform = 'scale(' + this.zoom.toString() + ') rotate(0) translate(0, 0)';
                this.dragButton.style.left = (item.dragButton.x * this.zoom) + 'px';
                this.dragButton.style.top = (item.dragButton.y * this.zoom) + 'px';
                this.dragButton.style.fontSize = (14 * this.zoom).toString() + 'px';
                this.dragButton.style.width = (27 * this.zoom).toString() + 'px';
                this.dragButton.style.background = '#e6baea';
                this.dragButton.style.padding = (6 * this.zoom).toString() + 'px';
                this.dragButton.style.borderRadius = (4 * this.zoom).toString() + 'px';
                this.dragButton.style.textAlign = 'center';
                this.dragButton.style.position = 'absolute';
                this.dragButton.innerHTML = item.text;
                const path = document.getElementsByClassName('page')[item.pageNumber - 1];
                path.appendChild(this.dragButton);
            });
        }
    }
    redoPageRendered(value) {
        let dele;
        if (value?.isDelete) {
            dele = value.isDelete ? value.isDelete : true;
        }
        if (dele) {
            const path = document.getElementsByClassName('page')[value.pageNumber - 1];
            const path1 = document.getElementsByClassName('page')[value.pageNumber - 1].getAttribute('data-page-number');
            $('.textLayer').addClass('disable-textLayer');
            const rectId = value.rectangleId;
            const rect = document.createElementNS('http://www.w3.org/2000/svg', value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);
            rect.setAttribute('stroke-width', '2');
            rect.setAttribute('stroke', 'red');
            rect.setAttribute('fill', 'none');
            rect.style.width = value.rect.width + 'px';
            rect.style.height = value.rect.height + 'px';
            if (value.shape == 'rect') {
                rect.id = rectId;
                rect.setAttribute('x', value.rect.x1.toString());
                rect.setAttribute('y', value.rect.y1.toString());
            }
            if (value.shape == 'circle') {
                rect.id = rectId;
                rect.setAttribute('cx', value.rect.x1.toString());
                rect.setAttribute('cy', value.rect.y1.toString());
                rect.setAttribute('r', '50');
            }
            if (value.shape == 'path') {
                rect.id = rectId;
                rect.setAttribute('d', value.rect.d);
            }
            if (value.shape == 'text' && value.rect?.text != '') {
                rect.id = rectId;
                rect.setAttribute('fill', value.color);
                rect.setAttribute('stroke-width', 'none');
                rect.setAttribute('stroke', 'none');
                rect.setAttribute('x', value.rect.x1.toString());
                rect.setAttribute('y', value.rect.y1.toString());
                rect.appendChild(document.createTextNode(value.rect?.text?.toString()));
                rect.style.fontSize = value.fontSize + 'px';
            }
            if (value.shape == 'rectMask') {
                rect.id = rectId;
                rect.setAttribute('fill', '#fff');
                rect.setAttribute('stroke-width', '0');
                rect.setAttribute('x', value.rect.x1.toString());
                rect.setAttribute('y', value.rect.y1.toString());
            }
            if (value.shape == 'highlight') {
                rect.id = rectId;
                rect.setAttribute('stroke-width', '0');
                // rect.setAttribute('fill', 'yellow');
                rect.setAttribute('fill', value.color);
                rect.setAttribute('fill-opacity', '0.2');
                rect.setAttribute('x', value.rect.x1.toString());
                rect.setAttribute('y', value.rect.y1.toString());
            }
            rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
            const lengthofChilds = path.children.length;
            for (let i = 0; i < lengthofChilds; i++) {
                if (path.children[i].tagName == 'svg') {
                    rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                    path.children[i].appendChild(rect);
                }
            }
        }
    }
    hoverRemoveItemEnter(event) {
        this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);
        $('.textLayer').addClass('disable-textLayer');
        this.rectElem = this.areaInfo.forEach((value) => {
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);
            // console.log(eventsvgPath , 'eventsvgPath')
            // console.log(valuesvgPath, 'valuesvgPath')
            if (value.pageNumber == event.pageNumber) {
                if (eventsvgPath == valuesvgPath) {
                    const rect = valuesvgPath;
                    if (rect) {
                        if (value.shape == 'rect') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'circle') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'path') {
                            rect.style.animation = 'blinkStroke 0.8s infinite';
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'text') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('stroke-width', 'none');
                            rect.setAttribute('stroke', 'none');
                            // rect.setAttribute("x", value.rect.x1.toString());
                            // rect.setAttribute("y", value.rect.y1.toString());
                            // rect.appendChild(document.createTextNode(value.rect.text.toString()));
                            // rect.style.fontSize = value.fontSize + 'px';
                        }
                        if (value.shape == 'rectMask') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            // rect.setAttribute("fill", "#fff");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('stroke-width', '0');
                        }
                        if (value.shape == 'highlight') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            rect.setAttribute('stroke-width', '0');
                            // rect.setAttribute("fill", "yellow");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('fill-opacity', '0.2');
                        }
                    }
                }
            }
        });
    }
    hoverLeaveRemoveItemEnter(event) {
        this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);
        $('.textLayer').addClass('disable-textLayer');
        this.rectElem = this.areaInfo.forEach((value, index, arr) => {
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);
            if (value.pageNumber == event.pageNumber) {
                if (eventsvgPath == valuesvgPath) {
                    const rect = valuesvgPath;
                    if (rect) {
                        rect.style.animation = '';
                        if (value.shape == 'rect') {
                            rect.setAttribute('stroke-width', '2');
                            // rect.setAttribute("stroke", "red");
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'circle') {
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'path') {
                            rect.setAttribute('stroke-width', '2');
                            rect.setAttribute('stroke', value.color);
                            rect.setAttribute('fill', 'none');
                        }
                        if (value.shape == 'text') {
                            rect.setAttribute('fill', value.color);
                            // rect.setAttribute("stroke-width", );
                            rect.setAttribute('stroke-width', 'none');
                            rect.setAttribute('stroke', 'none');
                            // rect.setAttribute("x", value.rect.x1.toString());
                            // rect.setAttribute("y", value.rect.y1.toString());
                            // rect.appendChild(document.createTextNode(value.rect.text.toString()));
                            // rect.style.fontSize = value.fontSize + 'px';
                        }
                        if (value.shape == 'rectMask') {
                            rect.setAttribute('fill', '#fff');
                            // rect.setAttribute("fill", "#fff");
                            rect.setAttribute('stroke-width', '0');
                        }
                        if (value.shape == 'highlight') {
                            rect.setAttribute('stroke-width', '0');
                            // rect.setAttribute("fill", "yellow");
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('fill-opacity', '0.2');
                        }
                    }
                }
            }
        });
    }
    pageRendered(event) {
        this.scale = event.source.scale;
        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.elem.style.position = 'absolute';
        this.elem.setAttribute('id', event.pageNumber);
        this.elem.style.left = 0 + 'px';
        this.elem.style.top = 0 + 'px';
        this.elem.style.right = 0 + 'px';
        this.elem.style.bottom = 0 + 'px';
        this.elem.style.cursor = 'auto';
        this.elem.style.width = 100 + '%';
        this.elem.style.height = 100 + '%';
        this.elem.style.viewport = event.source.viewport;
        // this.elem.style.transform = 'scale(' + this.scale + ') rotate(0) translate(0, 0)';
        // console.log(event ,'event');
        const path = this.composedPath(event.source.div);
        this.globalPdfViewerPath = path;
        path.find(p => p.className == 'page').appendChild(this.elem);
        this.rectElem = this.areaInfo.forEach((value, index, arr) => {
            if (value.pageNumber == event.pageNumber && value?.isDelete == false) {
                const rectId = value.rectangleId;
                let rect;
                if (value.shape != 'text') {
                    rect = document.createElementNS('http://www.w3.org/2000/svg', value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);
                    rect.setAttribute('stroke-width', '2');
                    rect.setAttribute('stroke', value.color);
                    // rect.setAttribute("fill", "none");
                    rect.setAttribute('fill', 'none');
                    rect.style.width = value.rect.width + 'px';
                    rect.style.height = value.rect.height + 'px';
                }
                else {
                    rect = this.createWrappingText(value.rect.text, value.rect.x1, value.rect.y1, 'auto', value.rect.width, value.rectangleId, value.color);
                }
                if (value.shape == 'rect') {
                    // rect.id = 'rect-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                    // rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                }
                if (value.shape == 'circle') {
                    // rect.id = 'circle-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('cx', value.rect.x1.toString());
                    rect.setAttribute('cy', value.rect.y1.toString());
                    rect.setAttribute('r', '50');
                }
                if (value.shape == 'path') {
                    // rect.id = 'path-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('d', value.rect.d);
                }
                if (value.shape == 'foreignObject') {
                    rect.id = rectId;
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('stroke-width', 'none');
                    rect.setAttribute('stroke', 'none');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                    rect.style.width = 'auto';
                    rect.style.height = '20px';
                    rect.style.overflow = 'visible';
                    rect.style.flexWrap = 'wrap';
                    rect.style.cursor = 'move';
                    const userInput = this.sanitized.sanitize(SecurityContext.HTML, this.sanitized.bypassSecurityTrustHtml(value.rect.text));
                    const mathBody = document.createElement('DIV');
                    mathBody.id = rectId;
                    mathBody.innerHTML = userInput;
                    rect.appendChild(mathBody);
                }
                if (value.shape == 'text') {
                    // rect.id = 'text-' + rectId;
                    rect.id = rectId;
                    rect.children[0].id = rectId;
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('stroke-width', 'none');
                    rect.setAttribute('stroke', 'none');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                    // rect.appendChild(document.createTextNode(value.rect?.text?.toString()));
                    rect.style.fontSize = value.fontSize + 'px';
                }
                if (value.shape == 'rectMask') {
                    // rect.id = 'rectMask-' + rectId;
                    rect.id = rectId;
                    rect.setAttribute('fill', '#fff');
                    rect.setAttribute('stroke-width', '0');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                }
                if (value.shape == 'highlight') {
                    rect.id = rectId;
                    // rect.id = 'highlight-' + rectId;
                    rect.setAttribute('stroke-width', '0');
                    // rect.setAttribute('fill', 'yellow');
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('fill-opacity', '0.2');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                }
                // get to-draw-rectangle div and add rectangle
                const pagePath = path.find(p => p.className == 'page');
                const lengthofChilds = path.find(p => p.className == 'page').children.length;
                for (let i = 0; i < lengthofChilds; i++) {
                    if (pagePath.children[i].tagName == 'svg') {
                        rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        rect.addEventListener('pointerenter', this.handleAnnotateErase.bind(this), true);
                        pagePath.children[i].appendChild(rect);
                    }
                }
            }
        });
        this.addQuestionButtonInPdf(event);
        this.clickEvent();
    }
    handleEdit(event) {
        if (this.shapesType != 'eraser') {
            this.dblTimer += 1;
            setTimeout(() => {
                this.dblTimer = 0;
            }, 500);
            console.log(this.dblTimer, 'timer');
            if (this.dblTimer == 2) {
                this.editText(event);
            }
        }
    }
    handleAnnotateErase(event) {
        if (StudentWebAnnotationComponent.me.shapesType == 'eraser') {
            console.log(this.areaInfo, 'areainfo');
            for (let i = 0; i < this.areaInfo.length; i++) {
                if (this.areaInfo[i].isTeacherCorrection && !this.areaInfo[i].isDelete) {
                    if (event.srcElement.id == this.areaInfo[i].rectangleId) {
                        this.areaInfo.splice(i, 1);
                        document.getElementById(event.srcElement.id).remove();
                        this.saveAnnotationDetails();
                    }
                }
            }
        }
    }
    composedPath(el) {
        const path = [];
        while (el) {
            path.push(el);
            if (el.tagName === 'HTML') {
                path.push(document);
                path.push(window);
                return path;
            }
            el = el.parentElement;
        }
    }
    getStyle() {
        if (this.showPopup) {
            return 'block';
        }
        else {
            return 'none';
        }
    }
    save() {
        const path = document.getElementById(this.element.id);
        if (path) {
            this.areaInfo.push({
                rectangleId: this.element.id,
                pageNumber: this.dataPageNumber,
                rect: this.rect,
                isDelete: false,
                userSelect: false,
                isTeacherCorrection: true,
                shape: this.shapesType == 'math' ? 'foreignObject' : this.shapesType,
                color: this.svgColor,
                fontSize: this.textFontSize
            });
            path.addEventListener('pointerenter', this.handleAnnotateErase.bind(this), true);
            this.showPopup = false;
            this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
            this.pagechanging(this.pageVariable);
            setTimeout(() => {
                this.saveAnnotationDetails();
            }, 1000);
        }
    }
    close() {
        this.mouseDownFlag = false;
        this.eraserDownMouse = false;
        this.modalRef.close();
    }
    deleteAction() {
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static', windowClass: 'studentAnotation' });
    }
    ////// get ipad access token details service
    getStudentDetails() {
        const data = {
            platform: 'web',
            authorization_key: this.studentId
        };
        this.creator.getStudDetail(data).subscribe((successData) => {
            this.getStudDetailSuccess(successData);
        }, (error) => {
            this.getStudDetailFailure(error);
        });
    }
    getStudDetailSuccess(successData) {
        if (successData.IsSuccess) {
            this.detailData = successData.ResponseObject;
            if (this.detailData.status == '1' || this.detailData.status == '2') {
                this.showAnnotation = true;
            }
            this.dragQuestionsList = this.detailData?.questionAnnotation;
            let pdfpath;
            pdfpath = this.common.convertBase64(this.detailData?.pdfpath);
            this.pdfTemplate = this.webhost + '/' + pdfpath[0].original_image_url;
            this.detailData.actual_annotation = this.detailData.actual_annotation == null ? [] : this.detailData.actual_annotation;
            this.areaInfo = [...this.detailData.actual_annotation, ...this.detailData.teacher_annotation];
            this.areaInfo.forEach((item) => {
                item.isTeacherCorrection = false;
            });
            this.detailData.student_annotation.forEach((item) => {
                item.isTeacherCorrection = true;
            });
            this.areaInfo = [...this.areaInfo, ...this.detailData.student_annotation];
            this.areaInfo.forEach((item) => {
                item.userSelect = false;
            });
            this.clearSetTimeout = setTimeout(() => {
                this.cdr.detectChanges();
            }, 2500);
        }
    }
    getStudDetailFailure(error) {
        console.log(error, 'error');
    }
    eraseAlert() {
        this.modalRef = this.modalService.open(this.eraseAll, { size: 'md', backdrop: 'static' });
    }
    clearAll() {
        this.areaInfo = [];
        // this.annotate.emit(this.areaInfo);
        console.log(this.areaInfo, 'areaInfo');
        this.jsPDF = new jsPDF();
        this.pdfTemplate = this.jsPDF.output('datauristring');
        this.close();
    }
    async saveAnnotationDetails() {
        if (this.annotationType != 'preview') {
            let annotationValues = this.areaInfo.filter(f => f.isTeacherCorrection == true);
            annotationValues = annotationValues.filter(f => f.isDelete === false);
            if (!this.popUp) {
                const data = {
                    platform: 'ios',
                    student_id: this.detailData.student_id,
                    annotation: annotationValues,
                    content_id: this.detailData.content_id,
                    class_id: this.detailData.class_id,
                    student_content_id: this.detailData.student_content_id,
                };
                await this.creator.saveAnnotation(data).subscribe(async (successData) => {
                    await this.saveAnnotationSuccess(successData);
                }, (error) => {
                    console.log(error, 'error');
                });
            }
            else {
                this.annotate.emit(annotationValues);
            }
        }
    }
    saveAnnotationSuccess(successData) {
        if (successData.IsSuccess) {
        }
    }
    saveAnnotationFailure(error) {
        console.log(error, 'error');
    }
    static { this.ɵfac = function StudentWebAnnotationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentWebAnnotationComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.CreatorService), i0.ɵɵdirectiveInject(i3.ActivatedRoute), i0.ɵɵdirectiveInject(i4.FormBuilder), i0.ɵɵdirectiveInject(i5.DomSanitizer), i0.ɵɵdirectiveInject(i6.ConfigurationService), i0.ɵɵdirectiveInject(i7.NgbModal), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i9.CommonService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentWebAnnotationComponent, selectors: [["app-student-web-annotation"]], viewQuery: function StudentWebAnnotationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
            i0.ɵɵviewQuery(_c5, 5);
            i0.ɵɵviewQuery(_c6, 5);
            i0.ɵɵviewQuery(_c7, 5);
            i0.ɵɵviewQuery(_c8, 5);
            i0.ɵɵviewQuery(_c9, 5);
            i0.ɵɵviewQuery(_c10, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.elementView = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mathShow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pdfPage = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pencilCanvas = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteAlert = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteSvgDraw = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.eraser = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.delete = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.eraseAll = _t.first);
        } }, hostBindings: function StudentWebAnnotationComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pointerdown", function StudentWebAnnotationComponent_pointerdown_HostBindingHandler($event) { return ctx.onpointerdown($event); })("touchstart", function StudentWebAnnotationComponent_touchstart_HostBindingHandler($event) { return ctx.onTouchStart($event); })("input", function StudentWebAnnotationComponent_input_HostBindingHandler($event) { return ctx.onInput($event); })("touchmove", function StudentWebAnnotationComponent_touchmove_HostBindingHandler($event) { return ctx.onTouchMove($event); })("touchend", function StudentWebAnnotationComponent_touchend_HostBindingHandler($event) { return ctx.onTouchEnd($event); })("pointermove", function StudentWebAnnotationComponent_pointermove_HostBindingHandler($event) { return ctx.onpointermove($event); })("pointerup", function StudentWebAnnotationComponent_pointerup_HostBindingHandler($event) { return ctx.onpointerup($event); })("dblclick", function StudentWebAnnotationComponent_dblclick_HostBindingHandler($event) { return ctx.onDoubleClicked($event); });
        } }, inputs: { toolHide: "toolHide", toolAdjust: "toolAdjust", popUp: "popUp", getAnnotate: "getAnnotate", expandPdf: "expandPdf", overallData: "overallData" }, outputs: { annotate: "annotate", expandBoolean: "expandBoolean" }, decls: 11, vars: 1, consts: [["class", ""], ["eraser", ""], ["delete", ""], ["mathShow", ""], ["eraseAll", ""], ["toolbar", ""], ["pdfPage", ""], ["class", "container-fluid student-annotation disable-text-selection px-0 mx-0 ", 4, "ngIf"], [1, "container-fluid", "student-annotation", "disable-text-selection", "px-0", "mx-0"], [1, "col-12"], ["class", "row clearBoth", 4, "ngIf"], [1, "row", "clearBoth"], ["class", "col-12 p-1 tools-main-div bg-white mb-2", 4, "ngIf"], ["class", "col-12 p-3 d-flex justify-content-center stickyTool", 4, "ngIf"], ["id", "pdf-page", "class", "pdf-mainpage scrollPanel-student", "style", "margin-right: -24px !important; padding-left: 14px !important;", 3, "ngClass", 4, "ngIf"], ["class", "scrollWritingPad col-md-12 px-0", "infiniteScroll", "", 3, "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "id", "ngStyle", "click", "dblclick", "scrolled", 4, "ngIf"], ["class", "col-4 w-50", 4, "ngIf"], [1, "col-12", "p-1", "tools-main-div", "bg-white", "mb-2"], [1, "pdf-assign-btn", "pdf-tools", "col-12", "d-inline-flex", "align-items-center", "justify-content-between"], ["bindLabel", "value", "bindValue", "value", "placeholder", "--Font Size--", 1, "col-3", "pl-2", 3, "ngModelChange", "ngModel", "items"], ["alt", "", "src", "assets/images/pdf-icons/Icon material-delete-1.png", "title", "Delete", 2, "cursor", "pointer", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/minus-circle.png", "title", "Zoom-out", 2, "cursor", "pointer", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/add-circle.png", "title", "Zoom-in", 2, "cursor", "pointer", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/stop.png", "title", "Extract", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/eraser@2x.png", "title", "Erase", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Text.png", "title", "Text", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/math2.png", "title", "Math", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/highlighter-icon.png", "title", "Highlighter", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Icon awesome-pencil-alt.png", "title", "Sketch", 3, "click", "ngClass"], ["title", "Color", 1, "mr-2", 2, "width", "39px", "border", "solid 2px", "height", "19px", 3, "colorPickerChange", "colorPicker"], ["alt", "", "class", "cursor p-0", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Hide Questions", 3, "click", 4, "ngIf"], ["alt", "", "class", "cursor p-0", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Show Questions", 3, "click", 4, "ngIf"], ["alt", "", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Hide Questions", 1, "cursor", "p-0", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Show Questions", 1, "cursor", "p-0", 3, "click"], [1, "col-12", "p-3", "d-flex", "justify-content-center", "stickyTool"], [1, "col-md-9", "d-flex", "justify-content-between", "align-items-center"], [1, "col-md-3", "px-0"], [1, "btn", "btn-success", "pull-left", 3, "click"], [1, "pdf-assign-btn", "d-flex", "justify-content-end", "pdf-tools", "col-md-7", "pr-2", "px-0", "align-items-center"], ["alt", "", "src", "assets/images/pdf-icons/eraser@2x.png", "title", "Eraser", 3, "click", "ngClass"], ["name", "favcolor", "title", "Color", "type", "color", 1, "mr-3", 3, "click", "ngModelChange", "ngModel"], ["id", "pdf-page", 1, "pdf-mainpage", "scrollPanel-student", 2, "margin-right", "-24px !important", "padding-left", "14px !important", 3, "ngClass"], ["id", "custom-pdf-loader", "style", "height: 100vh;", 4, "ngIf"], ["id", "pdf-view", 2, "display", "block", "height", "100vh", 3, "page-rendered", "pageChange", "pages-initialized", "after-load-complete", "src", "zoom", "page", "fit-to-page", "original-size", "render-text", "show-all"], ["id", "custom-pdf-loader", 2, "height", "100vh"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], ["infiniteScroll", "", 1, "scrollWritingPad", "col-md-12", "px-0", 3, "click", "dblclick", "scrolled", "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "id", "ngStyle"], [2, "display", "block", "background-color", "#f8f8f9", 3, "page-rendered", "after-load-complete", "pageChange", "pages-initialized", "page", "fit-to-page", "original-size", "render-text", "show-all", "src", "zoom"], [1, "col-4", "w-50"], [1, "row", "mt-5"], [1, "w-100"], ["type", "button", "class", "btn btn-primary w-100 mb-3", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "click"], [1, "scrollPanel", 3, "undoDeleteAnnatation", "hoverremoveItem", "hoverleaveremoveItem", "removeItem", "openDeleteDialog", "items"], [1, "modal-body", 2, "border", "0"], [1, "container-fluid"], [1, "row"], [1, "col-12", "text-right"], [1, "fa", "fa-close", "cursor", 2, "font-size", "1rem", 3, "click"], [1, "col-12", "text-center"], [1, "modal-title", "headerText"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-header"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "imageToolHide", "showDropBtn", "showInputBtn"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "col-12", "py-3"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function StudentWebAnnotationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, StudentWebAnnotationComponent_div_0_Template, 3, 1, "div", 7)(1, StudentWebAnnotationComponent_ng_template_1_Template, 14, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, StudentWebAnnotationComponent_ng_template_3_Template, 9, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, StudentWebAnnotationComponent_ng_template_5_Template, 9, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(7, StudentWebAnnotationComponent_ng_template_7_Template, 11, 7, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(9, StudentWebAnnotationComponent_ng_template_9_Template, 15, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.showPage);
        } }, dependencies: [i10.NgClass, i10.NgIf, i10.NgStyle, i4.DefaultValueAccessor, i4.NgControlStatus, i11.PdfViewerComponent, i12.InfiniteScrollDirective, i13.NgSelectComponent, i4.NgModel, i14.ColorPickerDirective, i15.TinyMiceComponent, i16.RemoveStudentAnnotationComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentWebAnnotationComponent, [{
        type: Component,
        args: [{ selector: 'app-student-web-annotation', template: "\n<div class=\"container-fluid student-annotation disable-text-selection px-0 mx-0 \" *ngIf=\"showPage\">\n    <div class=\"col-12\">\n        <div *ngIf=\"showAnnotation && annotationType != 'preview'\" class=\"row clearBoth\">\n            <div *ngIf=\"!toolAdjust\" class=\"col-12 p-1 tools-main-div bg-white mb-2\" #toolbar>\n                <div class=\"pdf-assign-btn pdf-tools col-12 d-inline-flex align-items-center justify-content-between\">\n\n                    <ng-select [(ngModel)]=\"textFontSize\"\n                               [items]=\"fontList\"\n                               bindLabel=\"value\"\n                               bindValue=\"value\"\n                               placeholder=\"--Font Size--\"\n                               class=\"col-3 pl-2\"\n                    >\n                    </ng-select>\n                    <img (click)=\"deleteSvg()\" [ngClass]=\"selectedDeleteIcon ? 'selected-tool-color': ''\"  alt=\"\" src=\"assets/images/pdf-icons/Icon material-delete-1.png\" style=\"cursor: pointer\"  title=\"Delete\">\n                    <img (click)=\"incrementZoom(-0.1)\" alt=\"\"  src=\"assets/images/pdf-icons/minus-circle.png\" style=\"cursor: pointer\" title=\"Zoom-out\">\n                    <img (click)=\"incrementZoom(0.1)\" alt=\"\" src=\"assets/images/pdf-icons/add-circle.png\" style=\"cursor: pointer\" title=\"Zoom-in\">\n                    <img (click)=\"tools('rect', 'crosshair')\"  [ngClass]=\"shapesType == 'rect'? 'selected-tool-color': ''\" alt=\"\" src=\"assets/images/pdf-icons/stop.png\" title=\"Extract\">\n                    <img  (click)=\"tools('eraser', 'auto')\" [ngClass]=\"shapesType == 'eraser'? 'selected-tool-color': ''\" alt=\"\" src=\"assets/images/pdf-icons/eraser@2x.png\" title=\"Erase\">\n                    <img (click)=\" tools('text', 'auto')\"  [ngClass]=\"shapesType == 'text'? 'selected-tool-color': ''\" alt=\"\" src=\"assets/images/pdf-icons/Text.png\" title=\"Text\">\n                    <img (click)=\" tools('math', 'auto')\"  [ngClass]=\"shapesType == 'math'? 'selected-tool-color': ''\" alt=\"\" src=\"assets/images/pdf-icons/math2.png\" title=\"Math\">\n                    <img (click)=\" tools('highlight', 'auto')\"  [ngClass]=\"shapesType == 'highlight'? 'selected-tool-color': ''\" alt=\"\" src=\"assets/images/pdf-icons/highlighter-icon.png\" title=\"Highlighter\">\n                    <img (click)=\"tools('path', 'auto')\" [ngClass]=\"shapesType == 'path'? 'selected-tool-color': ''\"  alt=\"\" src=\"assets/images/pdf-icons/Icon awesome-pencil-alt.png\" title=\"Sketch\">\n                    <span class=\"mr-2\" (colorPickerChange)=\"svgColor = color\" [(colorPicker)]=\"color\" [style.background]=\"color\" style=\"width: 39px;border: solid 2px;height: 19px;\" title=\"Color\"></span>\n                    <img (click)=\"expandPage(true)\" *ngIf=\"expandPdf && !expand\" alt=\"\" class=\"cursor p-0\" src=\"assets/images/pdf-icons/arrowRight.png\"  title=\"Hide Questions\">\n                    <img (click)=\"expandPage(false)\" *ngIf=\"expandPdf && expand\" alt=\"\" class=\"cursor p-0\" src=\"assets/images/pdf-icons/arrowLeft.png\"  title=\"Show Questions\">\n                </div>\n\n        </div>\n            <div #toolbar *ngIf=\"toolHide == true && toolAdjust == true\" class=\"col-12 p-3 d-flex justify-content-center stickyTool\">\n                <div class=\"col-md-9 d-flex justify-content-between align-items-center\">\n                    <div class=\"col-md-3 px-0\">\n                        <button (click)=\"eraseAlert()\" class=\"btn btn-success pull-left\">Clear all</button>\n                    </div>\n                    <div class=\"pdf-assign-btn d-flex justify-content-end pdf-tools col-md-7 pr-2 px-0 align-items-center\">\n                        <!--            <img (click)=\"backToQuestion()\" (click)=\" tools('math', 'auto')\" [ngClass]=\"shapesType == 'math'? 'selected-tool-color': ''\" alt=\"\"  class=\"pull-right\" src=\"assets/images/pdf-icons/math2.png\" title=\"Math\">-->\n                        <img (click)=\"tools('rect', 'crosshair');backToQuestion()\" [ngClass]=\"shapesType == 'rect'? 'selected-tool-color': ''\" alt=\"\" src=\"assets/images/pdf-icons/stop.png\" title=\"Extract\">\n                        <img (click)=\"tools('eraser', 'auto');backToQuestion()\" [ngClass]=\"shapesType == 'eraser'? 'selected-tool-color': ''\" alt=\"\"  src=\"assets/images/pdf-icons/eraser@2x.png\" title=\"Eraser\">\n                        <img (click)=\"tools('text', 'auto');backToQuestion()\" [ngClass]=\"shapesType == 'text'? 'selected-tool-color': ''\" alt=\"\"  src=\"assets/images/pdf-icons/Text.png\" title=\"Text\">\n                        <img (click)=\"tools('path', 'crosshair');backToQuestion()\" [ngClass]=\"shapesType == 'path'? 'selected-tool-color': ''\" alt=\"\"  src=\"assets/images/pdf-icons/Icon awesome-pencil-alt.png\" title=\"Sketch\">\n<!--                        <span (click)=\"backToQuestion()\" [(ngModel)]=\"svgColor\" class=\"mr-2\" (colorPickerChange)=\"svgColor = color\" [(colorPicker)]=\"color\" [style.background]=\"color\" style=\"width: 39px;border: solid 2px;height: 19px;\" title=\"Color\"></span>-->\n                        <input (click)=\"backToQuestion()\" [(ngModel)]=\"svgColor\" class=\"mr-3\" name=\"favcolor\" title=\"Color\" type=\"color\">\n                    </div>\n                </div>\n            </div>\n        <div class=\"col-12\">\n            <div *ngIf=\"!toolAdjust\" [ngClass]=\"selectedDeleteIcon ? 'col-8': 'col-12'\" id=\"pdf-page\" class=\"pdf-mainpage scrollPanel-student\"\n                 style=\"margin-right: -24px !important; padding-left: 14px !important;\"  #pdfPage>\n                <div *ngIf=\"customPdfLoader\" id=\"custom-pdf-loader\" style=\"height: 100vh;\">\n                    <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n                </div>\n                <pdf-viewer\n                        id=\"pdf-view\" [src]=\"pdfTemplate\" [zoom]=\"zoom\"\n                        (page-rendered)=\"pageRendered($event)\"\n                        (pageChange)=\"pagechanging($event)\"\n                        (pages-initialized)=\"pagechanging($event)\"\n                        [(page)]=\"pageVariable\"\n                        [fit-to-page]=\"true\"\n                        [original-size]=\"true\"\n                        (after-load-complete)=\"callBackFn($event)\"\n                        [render-text]=\"false\"  [show-all]=\"true\"\n                        style=\"display: block;height: 100vh;\"></pdf-viewer>\n            </div>\n            <div #pdfPage (click)=\"mouseEvent1($event)\" (dblclick)=\"editText($event)\"\n                 *ngIf=\"toolHide && toolAdjust\"\n                 (scrolled)=\"scrollDownPads($event)\"\n                 [fromRoot]=\"true\"\n                 [infiniteScrollContainer]=\"'.scrollWritingPad'\"\n                 [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\"\n                 [scrollWindow]=\"false\"\n                 class=\"scrollWritingPad col-md-12 px-0\"\n                 infiniteScroll\n                 [id]=\"'workArea'\" [ngStyle]=\"{'overflow' : allowWorkSpaceScroll ? 'scroll' : 'hidden'}\" >\n                <div *ngIf=\"customPdfLoader\" id=\"custom-pdf-loader\" style=\"height: 100vh;\">\n                    <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n                </div>\n                <pdf-viewer (page-rendered)=\"pageRendered($event)\"\n                            (after-load-complete)=\"callBackFn($event)\"\n                            (pageChange)=\"pagechanging($event)\"\n                            (pages-initialized)=\"pagechanging($event)\"\n                            [(page)]=\"pageVariable\"\n                            [fit-to-page]=\"true\"\n                            [original-size]=\"true\"\n                            [render-text]=\"shapesType == 'select'\"\n                            [show-all]=\"true\"\n                            [src]=\"pdfTemplate\"\n                            [zoom]=\"zoom\"\n                            style=\"display: block; background-color: #f8f8f9\"></pdf-viewer>\n            </div>\n\n            <div class=\"col-4 w-50\" *ngIf=\"selectedDeleteIcon\">\n                <div class=\"row mt-5\">\n                    <div class=\"w-100\">\n                        <button type=\"button\" *ngIf=\"deleteAnnatation\" (click)=\"backToQuestion()\" class=\"btn btn-primary w-100 mb-3\">Back</button>\n                    </div>\n                    <ng-container *ngIf=\"deleteAnnatation\">\n                        <app-remove-student-annotation [items]=\"itemSelect\"\n                                                       (undoDeleteAnnatation)=\"undoDeleteAnnatation($event)\"\n                                                       (hoverremoveItem)=\"hoverRemoveItemEnter($event)\"\n                                                       (hoverleaveremoveItem)=\"hoverLeaveRemoveItemEnter($event)\"\n                                                       (removeItem)=\"removeAnnatation($event)\"\n                                                       (openDeleteDialog)=\"deleteAction()\"\n                                                       class=\"scrollPanel\"></app-remove-student-annotation>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n</div>\n\n<ng-template  #class let-c=\"close\" let-d=\"dismiss\" >\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12 text-right\">\n                    <i (click)=\"close()\" class=\"fa fa-close cursor\" style=\"font-size: 1rem\"></i>\n                </div>\n                <div class=\"col-12 text-center\">\n                    <h3 class=\"modal-title headerText\">Delete All Annotation</h3>\n                </div>\n\n                <div class=\"col-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure  want to delete All Annotations ?</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"deleteAllAnnotation()\" class=\"btn btn-outline-primary\" type=\"button\">Yes</button>\n    </div>\n</ng-template>\n\n<ng-template #eraser let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 class=\"text-center mt-3\">Please double click on annotation to erase</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"close()\" class=\"btn btn-outline-primary\" type=\"button\">Got it</button>\n    </div>\n</ng-template>\n<ng-template #delete let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <h5 class=\"text-center mt-3\">Coming Soon</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"close()\" class=\"btn btn-outline-primary\" type=\"button\">Got it</button>\n    </div>\n</ng-template>\n<ng-template #mathShow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4>Enter values</h4>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <app-tiny-mice (emitEditorValue)=\"mathValue($event)\"\n                                   [editorPatchValue]= \"editMathValue == '' ? false : editMathValue.rect.text\"\n                                   [height]=\"130\"\n                                   [id]=\"'multiQues'\"\n                                   [imageToolHide]=\"true\"\n                                   [showDropBtn]=\"false\"\n                                   [showInputBtn]=\"false\">\n                    </app-tiny-mice>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"mathAnnotation()\" class=\"btn btn-outline-primary\" type=\"button\">{{editMathValue == '' ? 'Done' : 'Update'}}</button>\n    </div>\n</ng-template>\n\n<ng-template #eraseAll let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4>Erase Annotation</h4>\n        <i (click)=\"close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-12 py-3\">\n                    <label class=\"mb-0\">Are you sure? Do you want to erase all writing for this question</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"close()\" class=\"btn btn-outline-primary\" type=\"button\">Close</button>\n        <button (click)=\"clearAll(); allowWorkSpaceScroll = true;\" class=\"btn btn-primary\" type=\"button\">Confirm</button>\n    </div>\n</ng-template>\n" }]
    }], () => [{ type: i1.AuthService }, { type: i2.CreatorService }, { type: i3.ActivatedRoute }, { type: i4.FormBuilder }, { type: i5.DomSanitizer }, { type: i6.ConfigurationService }, { type: i7.NgbModal }, { type: i8.ToastrService }, { type: i0.ChangeDetectorRef }, { type: i3.Router }, { type: i9.CommonService }], { toolHide: [{
            type: Input
        }], toolAdjust: [{
            type: Input
        }], popUp: [{
            type: Input
        }], getAnnotate: [{
            type: Input
        }], expandPdf: [{
            type: Input
        }], annotate: [{
            type: Output
        }], expandBoolean: [{
            type: Output
        }], elementView: [{
            type: ViewChild,
            args: ['toolbar']
        }], mathShow: [{
            type: ViewChild,
            args: ['mathShow']
        }], pdfPage: [{
            type: ViewChild,
            args: ['pdfPage', { static: false }]
        }], canvas: [{
            type: ViewChild,
            args: ['canvas', { static: false }]
        }], pencilCanvas: [{
            type: ViewChild,
            args: ['pencilCanvas', { static: false }]
        }], deleteAlert: [{
            type: ViewChild,
            args: ['deleteAlert']
        }], deleteSvgDraw: [{
            type: ViewChild,
            args: ['deleteSvgDraw']
        }], eraser: [{
            type: ViewChild,
            args: ['eraser']
        }], deleteClass: [{
            type: ViewChild,
            args: ['class']
        }], delete: [{
            type: ViewChild,
            args: ['delete']
        }], eraseAll: [{
            type: ViewChild,
            args: ['eraseAll']
        }], overallData: [{
            type: Input
        }], onpointerdown: [{
            type: HostListener,
            args: ['pointerdown', ['$event']]
        }], onTouchStart: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }], onTouchMove: [{
            type: HostListener,
            args: ['touchmove', ['$event']]
        }], onTouchEnd: [{
            type: HostListener,
            args: ['touchend', ['$event']]
        }], onpointermove: [{
            type: HostListener,
            args: ['pointermove', ['$event']]
        }], onpointerup: [{
            type: HostListener,
            args: ['pointerup', ['$event']]
        }], onDoubleClicked: [{
            type: HostListener,
            args: ['dblclick', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentWebAnnotationComponent, { className: "StudentWebAnnotationComponent" }); })();
//# sourceMappingURL=student-web-annotation.component.js.map