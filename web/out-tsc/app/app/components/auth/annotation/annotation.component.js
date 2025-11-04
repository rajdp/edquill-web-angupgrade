import { Component, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy, SecurityContext } from '@angular/core';
import $ from 'jquery';
import { jsPDF } from 'jspdf';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../../shared/service/auth.service";
import * as i3 from "../../../shared/service/creator.service";
import * as i4 from "@ng-bootstrap/ng-bootstrap";
import * as i5 from "@angular/router";
import * as i6 from "../../../shared/service/configuration.service";
import * as i7 from "../../../shared/service/class.service";
import * as i8 from "ngx-toastr";
import * as i9 from "../../../shared/service/common-data.service";
import * as i10 from "../../../environment.service";
import * as i11 from "../../../shared/service/validation.service";
import * as i12 from "../../../shared/service/nav.service";
import * as i13 from "@angular/common";
import * as i14 from "@angular/forms";
import * as i15 from "ng2-pdf-viewer";
import * as i16 from "../../../shared/components/remove-annatation/remove-annatation.component";
import * as i17 from "ngx-infinite-scroll";
import * as i18 from "../tiny-mice/tiny-mice.component";
const _c0 = ["canvas"];
const _c1 = ["deleteSvgDraw"];
const _c2 = ["class"];
const _c3 = ["mathShow"];
const _c4 = ["eraseAll"];
const _c5 = a0 => ({ "height": a0 });
function AnnotationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "i", 43);
    i0.ɵɵlistener("click", function AnnotationComponent_div_7_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.decrementPage()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "input", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function AnnotationComponent_div_7_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.pageVariable, $event) || (ctx_r2.pageVariable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 43);
    i0.ɵɵlistener("click", function AnnotationComponent_div_7_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.incrementPage()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("fa fa-minus py-2 px-3 border rounded-left ", ctx_r2.pageVariable > 1 ? "color-primary" : "color-grey", "");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.pageVariable);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("fa fa-plus py-2 px-3 border rounded-right ", ctx_r2.pageVariable == ctx_r2.totalPdfPage ? "color-grey" : "color-primary", "");
} }
function AnnotationComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 45);
    i0.ɵɵlistener("click", function AnnotationComponent_img_50_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.expandPage(true)); });
    i0.ɵɵelementEnd();
} }
function AnnotationComponent_img_51_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 46);
    i0.ɵɵlistener("click", function AnnotationComponent_img_51_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.expandPage(false)); });
    i0.ɵɵelementEnd();
} }
function AnnotationComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "button", 50);
    i0.ɵɵlistener("click", function AnnotationComponent_div_52_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.eraseAlert()); });
    i0.ɵɵtext(4, "Clear all");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 51)(6, "img", 52);
    i0.ɵɵlistener("click", function AnnotationComponent_div_52_Template_img_click_6_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.backToQuestion(); return i0.ɵɵresetView(ctx_r2.tools("rect", "crosshair")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "img", 53);
    i0.ɵɵlistener("click", function AnnotationComponent_div_52_Template_img_click_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.backToQuestion(); return i0.ɵɵresetView(ctx_r2.tools("eraser", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "img", 54);
    i0.ɵɵlistener("click", function AnnotationComponent_div_52_Template_img_click_8_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.backToQuestion(); return i0.ɵɵresetView(ctx_r2.tools("text", "auto")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "img", 55);
    i0.ɵɵlistener("click", function AnnotationComponent_div_52_Template_img_click_9_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); ctx_r2.backToQuestion(); return i0.ɵɵresetView(ctx_r2.tools("path", "crosshair")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 56);
    i0.ɵɵlistener("click", function AnnotationComponent_div_52_Template_input_click_10_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.backToQuestion()); });
    i0.ɵɵtwoWayListener("ngModelChange", function AnnotationComponent_div_52_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.svgColor, $event) || (ctx_r2.svgColor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", ctx_r2.shapesType == "rect" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.shapesType == "eraser" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.shapesType == "text" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.shapesType == "path" ? "selected-tool-color" : "");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.svgColor);
} }
function AnnotationComponent_div_54_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵelement(1, "img", 61);
    i0.ɵɵelementEnd();
} }
function AnnotationComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57, 3);
    i0.ɵɵlistener("click", function AnnotationComponent_div_54_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("mousedown", function AnnotationComponent_div_54_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("dblclick", function AnnotationComponent_div_54_Template_div_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editText($event)); })("mousemove", function AnnotationComponent_div_54_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("mouseup", function AnnotationComponent_div_54_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("mouseenter", function AnnotationComponent_div_54_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEnter()); })("mouseover", function AnnotationComponent_div_54_Template_div_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseOver($event)); })("mouseleave", function AnnotationComponent_div_54_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseOut($event)); })("input", function AnnotationComponent_div_54_Template_div_input_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.keyPressfunction($event)); });
    i0.ɵɵtemplate(2, AnnotationComponent_div_54_div_2_Template, 2, 0, "div", 58);
    i0.ɵɵelementStart(3, "pdf-viewer", 59, 4);
    i0.ɵɵlistener("page-rendered", function AnnotationComponent_div_54_Template_pdf_viewer_page_rendered_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageRendered($event)); })("pageChange", function AnnotationComponent_div_54_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pagechanging($event)); })("text-layer-rendered", function AnnotationComponent_div_54_Template_pdf_viewer_text_layer_rendered_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.textRender($event)); })("pages-initialized", function AnnotationComponent_div_54_Template_pdf_viewer_pages_initialized_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pagechanging($event)); })("after-load-complete", function AnnotationComponent_div_54_Template_pdf_viewer_after_load_complete_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.callBackFn($event)); })("error", function AnnotationComponent_div_54_Template_pdf_viewer_error_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onerror($event)); });
    i0.ɵɵtwoWayListener("pageChange", function AnnotationComponent_div_54_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.pageVariable, $event) || (ctx_r2.pageVariable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("col-md-", ctx_r2.deleteAnnatation ? 8 : 12, "");
    i0.ɵɵproperty("id", ctx_r2.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.customPdfLoader);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("page", ctx_r2.pageVariable);
    i0.ɵɵproperty("fit-to-page", true)("original-size", true)("render-text", ctx_r2.shapesType == "select")("show-all", true)("ngStyle", i0.ɵɵpureFunction1(13, _c5, ctx_r2.toolAdjust && ctx_r2.toolHide ? "auto" : "100vh"))("src", ctx_r2.pdfTemplate)("zoom", ctx_r2.zoom);
} }
function AnnotationComponent_div_55_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵelement(1, "img", 64);
    i0.ɵɵelementEnd();
} }
function AnnotationComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 62, 3);
    i0.ɵɵlistener("click", function AnnotationComponent_div_55_Template_div_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("dblclick", function AnnotationComponent_div_55_Template_div_dblclick_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editText($event)); })("mousedown", function AnnotationComponent_div_55_Template_div_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("mouseenter", function AnnotationComponent_div_55_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEnter()); })("mouseleave", function AnnotationComponent_div_55_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseOut($event)); })("mousemove", function AnnotationComponent_div_55_Template_div_mousemove_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("mouseover", function AnnotationComponent_div_55_Template_div_mouseover_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseOver($event)); })("mouseup", function AnnotationComponent_div_55_Template_div_mouseup_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mouseEvent($event)); })("scrolled", function AnnotationComponent_div_55_Template_div_scrolled_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.scrollDownPads($event)); });
    i0.ɵɵtemplate(2, AnnotationComponent_div_55_div_2_Template, 2, 0, "div", 58);
    i0.ɵɵelementStart(3, "pdf-viewer", 63);
    i0.ɵɵlistener("after-load-complete", function AnnotationComponent_div_55_Template_pdf_viewer_after_load_complete_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.callBackFn($event)); })("error", function AnnotationComponent_div_55_Template_pdf_viewer_error_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onerror($event)); })("page-rendered", function AnnotationComponent_div_55_Template_pdf_viewer_page_rendered_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pageRendered($event)); })("pageChange", function AnnotationComponent_div_55_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pagechanging($event)); })("pages-initialized", function AnnotationComponent_div_55_Template_pdf_viewer_pages_initialized_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.pagechanging($event)); })("text-layer-rendered", function AnnotationComponent_div_55_Template_pdf_viewer_text_layer_rendered_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.textRender($event)); });
    i0.ɵɵtwoWayListener("pageChange", function AnnotationComponent_div_55_Template_pdf_viewer_pageChange_3_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.pageVariable, $event) || (ctx_r2.pageVariable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("fromRoot", true)("infiniteScrollContainer", ".scrollWritingPad")("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false)("id", ctx_r2.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.customPdfLoader);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("page", ctx_r2.pageVariable);
    i0.ɵɵproperty("fit-to-page", true)("original-size", true)("render-text", ctx_r2.shapesType == "select")("show-all", true)("src", ctx_r2.pdfTemplate)("zoom", ctx_r2.zoom);
} }
function AnnotationComponent_div_56_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function AnnotationComponent_div_56_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.backToQuestion()); });
    i0.ɵɵtext(1, "Back ");
    i0.ɵɵelementEnd();
} }
function AnnotationComponent_div_56_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "app-remove-annatation", 70);
    i0.ɵɵlistener("hoverleaveremoveItem", function AnnotationComponent_div_56_ng_container_3_Template_app_remove_annatation_hoverleaveremoveItem_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.hoverLeaveRemoveItemEnter($event)); })("hoverremoveItem", function AnnotationComponent_div_56_ng_container_3_Template_app_remove_annatation_hoverremoveItem_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.hoverRemoveItemEnter($event)); })("openDeleteDialog", function AnnotationComponent_div_56_ng_container_3_Template_app_remove_annatation_openDeleteDialog_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.deleteSvg()); })("removeItem", function AnnotationComponent_div_56_ng_container_3_Template_app_remove_annatation_removeItem_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.removeAnnatation($event)); })("undoDeleteAnnatation", function AnnotationComponent_div_56_ng_container_3_Template_app_remove_annatation_undoDeleteAnnatation_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.undoDeleteAnnatation($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.itemSelect);
} }
function AnnotationComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 66);
    i0.ɵɵtemplate(2, AnnotationComponent_div_56_button_2_Template, 2, 0, "button", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, AnnotationComponent_div_56_ng_container_3_Template, 2, 1, "ng-container", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.deleteAnnatation);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.deleteAnnatation);
} }
function AnnotationComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 72)(2, "div", 38)(3, "div", 73)(4, "i", 74);
    i0.ɵɵlistener("click", function AnnotationComponent_ng_template_57_Template_i_click_4_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 75)(6, "h3", 76);
    i0.ɵɵtext(7, "Delete All Annotation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 77)(9, "h5", 78);
    i0.ɵɵtext(10, "Are you sure want to delete All Annotations ?");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(11, "div", 79)(12, "button", 80);
    i0.ɵɵlistener("click", function AnnotationComponent_ng_template_57_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r11); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteAllAnnotation()); });
    i0.ɵɵtext(13, "Yes");
    i0.ɵɵelementEnd()();
} }
function AnnotationComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81)(1, "h4");
    i0.ɵɵtext(2, "Enter values");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "div", 71)(4, "div", 72)(5, "div", 38)(6, "div", 82)(7, "app-tiny-mice", 83);
    i0.ɵɵlistener("emitEditorValue", function AnnotationComponent_ng_template_59_Template_app_tiny_mice_emitEditorValue_7_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mathValue($event)); });
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(8, "div", 79)(9, "button", 80);
    i0.ɵɵlistener("click", function AnnotationComponent_ng_template_59_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.mathAnnotation()); });
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("editorPatchValue", ctx_r2.editMathValue == "" ? false : ctx_r2.editMathValue.rect.text)("height", 130)("id", "multiQues")("showDropBtn", false)("imageToolHide", true)("showInputBtn", false);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.editMathValue == "" ? "Done" : "Update");
} }
function AnnotationComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "h4");
    i0.ɵɵtext(2, "Erase Annotation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i", 85);
    i0.ɵɵlistener("click", function AnnotationComponent_ng_template_61_Template_i_click_3_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 71)(5, "div", 72)(6, "div", 38)(7, "div", 86)(8, "label", 87);
    i0.ɵɵtext(9, "Are you sure? Do you want to erase all writing for this question");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(10, "div", 79)(11, "button", 80);
    i0.ɵɵlistener("click", function AnnotationComponent_ng_template_61_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.close()); });
    i0.ɵɵtext(12, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 88);
    i0.ɵɵlistener("click", function AnnotationComponent_ng_template_61_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.clearAll()); });
    i0.ɵɵtext(14, "Confirm");
    i0.ɵɵelementEnd()();
} }
export class AnnotationComponent {
    constructor(sanitized, auth, creator, modalService, activateRoute, confi, classService, toastr, common, env, validationService, router, navServices) {
        this.sanitized = sanitized;
        this.auth = auth;
        this.creator = creator;
        this.modalService = modalService;
        this.activateRoute = activateRoute;
        this.confi = confi;
        this.classService = classService;
        this.toastr = toastr;
        this.common = common;
        this.env = env;
        this.validationService = validationService;
        this.router = router;
        this.navServices = navServices;
        this.toolAdjust = false;
        this.expandPdf = false;
        this.showPageNo = false;
        this.pageVariable = 1;
        this.id = 'pdf-page';
        this.annotate = new EventEmitter();
        this.deleteAnnotation = new EventEmitter();
        this.currentPageNo = new EventEmitter();
        this.expandBoolean = new EventEmitter();
        this.model = {
            editorData: ''
        };
        this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
        this.lastMousePosition = { x: 0, y: 0 };
        this.canvasPosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.mouseDownFlag = false;
        this.pagePosition = { x: 0, y: 0 };
        this.show = false;
        this.element = null;
        this.areaInfo = [];
        this.indexOfPage = 1;
        this.showPopup = false;
        this.listRectangleId = '';
        this.shapesType = 'select';
        this.expand = false;
        this.mathDelayer = false;
        this.showInput = true;
        this.deleteAnnatation = false;
        this.dragQuestionsList = [];
        this.editTextInput = false;
        this.eraserActive = false;
        this.editMathInput = false;
        this.zoom = 1.0;
        this.selectedDeleteIcon = false;
        this.currentPage = 1;
        this.workAreaPageNo = 0;
        this.totalPdfPage = 1;
        this.itemSelect = [];
        this.redoListArray = [];
        this.customPdfLoader = true;
        this.customeScrollPosition = 0;
        this.workAreaScroll = false;
        this.reccursiveLoading = false;
        this.pdfWidth = 0;
        this.pdfHeight = 0;
        this.shapeTypeChanged = false;
        this.webhost = this.confi.getimgUrl();
        this.preventScroll();
        this.toolAlignCenter = false;
        this.textFontSize = '16';
        this.teacherCorrection = this.type == 'student';
    }
    ngOnInit() {
        this.areaInfo = this.getAnnotate;
        this.dragQuestionsList = this.getDragQues;
        console.log(this.areaInfo, 'areaInfo');
        if (this.toolHide && this.toolAdjust) {
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
        }
        else {
            this.pdfTemplate = this.pdfPath;
            console.log(this.pdfTemplate, 'tttttt');
        }
        this.startTime = new Date().getTime();
        this.svgColor = this.userType == 'student' ? '#00CED1' : '#ff0000';
        // this.pageVariable = this.scrollPage == 0 ? 1 : this.scrollPage;
        // this.scrollPage.addEventListener((event) => {
        //   if (this.scrollPage != '0') {
        //
        //   }
        //   console.log(this.pageVariable, 'pageVariable');
        // });
    }
    AfterViewInit() {
    }
    // OnChanges(changes: SimpleChanges): void {
    //   if (this.scrollPage != '0') {
    //     console.log(this.pageVariable, 'this.pageVariable');
    //     this.pageVariable = parseInt(this.scrollPage);
    //   }
    // }
    /// main mouse hovering events for annotation //
    mouseOut(event) {
        this.commonMouseUp();
        this.lastMousePosition = { x: 0, y: 0 };
        this.mousePosition = { x: 0, y: 0 };
        this.pagePosition = { x: 0, y: 0 };
    }
    mouseOver(event) {
        this.areaInfo.forEach((value) => {
            if (value.rectangleId == event.target.id) {
                if (value.isTeacherCorrection) {
                    const split = event.target.id.split('-');
                    if (split[0] == 'text' && this.shapesType != 'eraser') {
                        event.target.style.cursor = 'move';
                    }
                    else if (this.shapesType == 'eraser') {
                        event.target.style.cursor = 'default';
                    }
                }
                else {
                    event.target.style.cursor = 'default';
                }
            }
        });
    }
    mouseEnter() {
        if (document.getElementById('customText') && this.shapesType == 'text') {
            document.getElementById('customText').focus();
        }
    }
    getParentRecurrsive(val, tagName) {
        this.reccursiveLoading = true;
        if (val.parentElement.tagName === tagName) {
            console.log(val.parentElement.id, 'val.parentElement.id');
            if (tagName == 'svg') {
                this.reccursiveLoading = false;
                return val.parentElement;
            }
            else {
                this.reccursiveLoading = false;
                return val.parentElement.id;
            }
        }
        else {
            if (val.parentElement.localName == 'html') {
                this.reccursiveLoading = false;
                return null;
            }
            else {
                return this.getParentRecurrsive(val.parentElement, tagName);
            }
        }
    }
    async mouseEvent(event) {
        const svgData = document.getElementById(this.id).getElementsByTagName('svg');
        if (svgData) {
            //// eraser opens///
            if (event.type === 'mousemove' && this.shapesType == 'eraser') {
                if (this.eraserActive) {
                    event.preventDefault();
                    let math;
                    if (event.target.tagName.toLowerCase() == 'span' || event.target.tagName.toLowerCase() == 'p') {
                        if (!this.reccursiveLoading) {
                            math = await this.getParentRecurrsive(event.target, 'foreignObject');
                        }
                    }
                    if ((document.getElementById(event.target.id) || math != null) && event.target.tagName != 'DIV') {
                        let id;
                        console.log(math, 'detcet span eraser');
                        if (math != null) {
                            id = math;
                        }
                        else {
                            id = event.target.id;
                        }
                        for (let i = 0; i < this.areaInfo.length; i++) {
                            if (this.areaInfo[i].rectangleId == id && this.areaInfo[i].isTeacherCorrection) {
                                this.areaInfo.splice(i, 1);
                                document.getElementById(id).remove();
                                const emitter = this.areaInfo.filter((value) => {
                                    return value.isTeacherCorrection == true && value.isDelete == false;
                                });
                                this.annotate.emit(emitter);
                            }
                        }
                    }
                }
            }
            // eraser closes //
            // drag and drop text opens //
            if (event.type == 'mousedown' && this.shapesType != 'eraser' && !this.editTextInput) {
                this.textPathData = null;
                // if (event.path != undefined) {
                //   for (let i = 0; i < event.path.length; i++) {
                //     if (event.path[i].tagName == 'foreignObject') {
                //       this.textPathData = document.getElementById(event.path[i].id);
                //     }
                //   }
                // }
                let id;
                if (event.target.tagName != 'svg') {
                    id = this.getParentRecurrsive(event.target, 'foreignObject');
                    this.textPathData = document.getElementById(id);
                }
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == this.textPathData?.id) {
                        if (value.isTeacherCorrection) {
                            this.selectedElement = this.textPathData;
                            this.selectedElement.style.cursor = 'move';
                            this.offsetter = this.getMousePosition(event);
                            this.offsetter.x -= parseFloat(this.selectedElement.getAttributeNS(null, 'x'));
                            this.offsetter.y -= parseFloat(this.selectedElement.getAttributeNS(null, 'y'));
                            this.mouseDownFlag = true;
                        }
                    }
                });
            }
            // drag and drop text closes//
            if (event.type === 'click' && this.shapesType != 'eraser') {
                this.dragpaths = this.composedPath(event.target);
            }
            if (event.type == 'mousedown' && this.shapesType != 'text' && this.shapesType != 'eraser' && this.editTextInput) {
                const path = this.composedPath(event.target);
                this.appendTextAreaInput(event, path);
            }
            if (!this.showPopup && this.shapesType != undefined && this.shapesType != '' && this.shapesType != 'select' && this.selectedElement == null) {
                this.initializeAnnotation(event, svgData);
            }
            else if (this.selectedElement) {
                // drag text
                this.dragAndDropText(event);
            }
        }
    }
    // custom logical created function used for annotation
    initializeAnnotation(event, svgData) {
        if (event.type === 'mousemove' && this.shapesType != 'eraser' && this.shapesType != 'text') {
            event.preventDefault();
            this.mousePosition = {
                x: event.clientX - this.pagePosition.x,
                y: event.clientY - this.pagePosition.y,
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
                    this.updatingPathRectinMousemove(event, width, height);
                }
            }
        }
        if (event.type === 'mousedown' && event.target.tagName != 'DIV' && event.target.tagName != 'TEXTAREA') {
            this.eraserActive = true;
            this.mouseDownFlag = true;
            const path = this.composedPath(event.target);
            const eventPath = path.find(p => p.className == 'page');
            if (typeof eventPath !== 'undefined') {
                this.dataPageNumber = parseInt(eventPath.getAttribute('data-page-number'));
                for (let i = 0; i < svgData.length; i++) {
                    if (svgData[i].id == this.dataPageNumber?.toString()) {
                        this.svgId = i;
                    }
                }
                const toDrawRectangle = document.getElementById(this.id).getElementsByTagName('svg');
                if (toDrawRectangle[this.svgId]) {
                    const pageOffset = toDrawRectangle[this.svgId].getBoundingClientRect();
                    this.pagePosition = {
                        x: pageOffset.left,
                        y: pageOffset.top
                    };
                    this.lastMousePosition = {
                        x: event.clientX - this.pagePosition.x,
                        y: event.clientY - this.pagePosition.y
                    };
                    this.drawingAnnotationbyShapetype(event, path);
                }
            }
        }
        if (event.type === 'mouseup') {
            this.commonMouseUp();
        }
    }
    drawingAnnotationbyShapetype(event, path) {
        const rectId = Math.random().toFixed(6);
        if (this.shapesType != 'text' && this.shapesType != 'math') {
            this.element = document.createElementNS('http://www.w3.org/2000/svg', this.shapesType == 'rectMask' ? 'rect' : this.shapesType == 'highlight' ? 'rect' : this.shapesType);
            this.element.setAttribute('stroke-width', '2');
            this.element.setAttribute('stroke', this.svgColor);
            this.element.setAttribute('fill', 'none');
        }
        if (this.shapesType == 'rect') {
            this.element.id = 'rect-' + rectId;
            this.element.setAttribute('x', this.lastMousePosition.x / this.scale);
            this.element.setAttribute('y', this.lastMousePosition.y / this.scale);
        }
        if (this.shapesType == 'path') {
            this.element.id = 'path-' + rectId;
            this.strPath = 'M' + (this.lastMousePosition.x / this.scale) + ' ' + (this.lastMousePosition.y / this.scale);
            this.element.setAttribute('d', this.strPath);
        }
        if (this.shapesType == 'rectMask') {
            this.element.id = 'rectMask-' + rectId;
            this.element.setAttribute('stroke-width', '0');
            this.element.setAttribute('fill', '#fff');
            this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
            this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));
        }
        if (this.shapesType == 'highlight') {
            this.element.id = 'highlight-' + rectId;
            this.element.setAttribute('stroke-width', '0');
            this.element.setAttribute('fill', this.svgColor);
            this.element.setAttribute('fill-opacity', '0.2');
            this.element.setAttribute('x', (this.lastMousePosition.x / this.scale));
            this.element.setAttribute('y', (this.lastMousePosition.y / this.scale));
        }
        if (this.shapesType == 'math' && !this.editTextInput && !this.editMathInput) {
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
        if (this.shapesType == 'text') {
            this.appendTextAreaInput(event, path);
        }
        if (this.element) {
            this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
        }
    }
    updatingPathRectinMousemove(event, width, height) {
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
        if (this.shapesType != 'path') {
            if (this.rect.width < 0 || this.rect.height < 0) {
                if (document.getElementById(this.element.id)) {
                    document.getElementById(this.element.id).remove();
                }
            }
            else {
                document.getElementById(this.id).getElementsByTagName('svg')[this.svgId].appendChild(this.element);
            }
        }
        else if (this.shapesType == 'path') {
            document.getElementById(this.id).getElementsByTagName('svg')[this.svgId].appendChild(this.element);
        }
        if (this.shapesType == 'path') {
            this.mousePosition = {
                x: (event.clientX - this.pagePosition.x) / this.scale,
                y: (event.clientY - this.pagePosition.y) / this.scale,
            };
            this.appendToBuffer(this.mousePosition);
            this.updateSvgPath();
        }
    }
    commonMouseUp() {
        // when user released the mouse or done the annotation
        this.eraserActive = false;
        this.mouseDownFlag = false;
        this.buffer = [];
        this.rect.d = this.strPath;
        this.rect.text = this.textValue;
        if (this.shapesType == 'text') {
            document.getElementById('customText')?.focus();
        }
        else if (this.shapesType == 'rect') {
            if (this.rect.x1 !== 0 && this.rect.x2 !== this.rect.x1) {
                this.save();
            }
        }
        else if (this.shapesType != 'math') {
            if (this.rect.x1 !== 0 && this.rect.x2 !== 0) {
                this.save();
            }
        }
    }
    dragAndDropText(event) {
        // patching the dynamic coordinates to the dragging element while mousemove
        if (event.type == 'mousemove' && this.mouseDownFlag && this.selectedElement) {
            event.preventDefault();
            const coord = this.getMousePosition(event);
            this.selectedElement.setAttributeNS(null, 'x', coord.x - this.offsetter.x);
            this.selectedElement.setAttributeNS(null, 'y', coord.y - this.offsetter.y);
        }
        // updating the element position and its value when mouse up
        if (event.type == 'mouseup' && this.selectedElement) {
            this.mouseDownFlag = false;
            this.offsetter = null;
            this.areaInfo.forEach((val) => {
                if (this.selectedElement.id == val.rectangleId) {
                    val.rect.x1 = this.selectedElement.x.baseVal.value;
                    val.rect.y1 = this.selectedElement.y.baseVal.value;
                }
            });
            const emitter = this.areaInfo.filter((value) => {
                return value.isTeacherCorrection == true && value.isDelete == false;
            });
            this.annotate.emit(emitter);
            this.selectedElement = null;
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
        this.pdfWidth = parseInt((document.getElementById(this.id).getElementsByTagName('svg')[this.svgId].style.width).split('px')[0]);
        this.pdfHeight = parseInt((document.getElementById(this.id).getElementsByTagName('svg')[this.svgId].style.height).split('px')[0]);
        console.log(this.pdfWidth, 'pdfWidth');
        console.log(event.target.tagName, 'tagName');
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
            if (this.showInput) {
                this.appendTextArea(event, path, '40px', '50px');
                this.lastMousePosition = {
                    x: event.clientX - this.pagePosition.x,
                    y: event.clientY - this.pagePosition.y
                };
                this.inputElement.style.left = (this.lastMousePosition.x / this.scale) > 560 ? ((this.lastMousePosition.x) - 60).toString() + 'px' : (this.lastMousePosition.x).toString() + 'px';
                this.inputElement.style.top = (this.lastMousePosition.y / this.scale) > 920 ? ((this.lastMousePosition.y) - 50).toString() + 'px' : (this.lastMousePosition.y).toString() + 'px';
                this.inputElement.style.width = 'auto';
                this.inputElement.style.position = 'absolute';
                this.textPosition = {
                    x: this.lastMousePosition.x / this.scale,
                    y: this.lastMousePosition.y / this.scale,
                };
                const paths = this.composedPath(event.target);
                if (event.target.name != 'customArea') {
                    paths?.find(p => p.className == 'page').appendChild(this.inputElement);
                }
            }
            console.log(this.textPosition, 'textPosition');
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
                        console.log(this.rect, 'reacyandaglue');
                        this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        let push = path.find(p => p.className == 'page').children;
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
                    console.log(customTextElement, 'customTextElement');
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
                                console.log(this.areaInfo[i], 'this.areaInfo[i]');
                            }
                        }
                        document.getElementById(this.editingTextValue.rectangleId).remove();
                        let push = path.find(p => p.className == 'page').children;
                        for (let i = 0; i < push.length; i++) {
                            if (push[i].tagName == 'svg') {
                                push[i].appendChild(this.element);
                            }
                        }
                        const emitter = this.areaInfo.filter((value) => {
                            return value.isTeacherCorrection == true && value.isDelete == false;
                        });
                        this.annotate.emit(emitter);
                        document.getElementById('customArea').remove();
                    }
                }
                this.textValue = '';
                this.showInput = true;
                this.element = null;
                this.editTextInput = false;
            }
        }
    }
    createWrappingText(text, x, y, height, width, id, color) {
        // const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
        svgText.setAttributeNS(null, 'x', x);
        svgText.setAttributeNS(null, 'y', y);
        let post = document.createElement('pre');
        post.setAttribute('id', id);
        post.className = 'textInput';
        post.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
        post.textContent = text;
        const textValue = [];
        text.split(/^/gm).forEach((items) => {
            textValue.push(items.length);
        });
        post.innerHTML = post.innerHTML.replace(/\n/g, '<br>\n');
        // let split1 = post.innerHTML.split('<br>');
        // let wordCount = 0;
        // let word;
        // for (let i = 0; i < split1.length; i++) {
        //   let split2 = split1[i].split('');
        //   if (split2.length > wordCount) {
        //     wordCount = split2.length;
        //     word = split1[i];
        //   }
        // }
        // console.log(word, 'long')
        // let w = word.getContext('2d');
        // console.log(w)
        // let getWid = w.measureText(word).width;
        // console.log(getWid, 'width');
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
    async editText(event) {
        let id = null;
        if (!this.reccursiveLoading) {
            id = await this.getParentRecurrsive(event.target, 'foreignObject');
        }
        // event.path.forEach((value, index) => {
        //     if (value.tagName == 'foreignObject') {
        //         id = index;
        //     }
        // });
        console.log(id, 'edit id');
        if (id) {
            let split = id.split('-');
            if (split[0] == 'text') {
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == id && value.isTeacherCorrection) {
                        this.editingTextValue = value;
                        console.log(value, 'value');
                        this.appendTextArea(event, event.path, value.rect.width, value.rect.height);
                        this.inputElement.children[0].innerHTML = event.target.innerText;
                        this.inputElement.style.left = value.rect.x1 > 520 ? (value.rect.x1 - 60).toString() + 'px' : (value.rect.x1).toString() + 'px';
                        // this.inputElement.style.top = value.rect.y1 > 920 ? (value.rect.y1 - 50).toString() + 'px' : (value.rect.y1).toString() + 'px';
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
                this.mathInputEvent = document.getElementById(id);
                this.areaInfo.forEach((value) => {
                    if (value.rectangleId == id && value.isTeacherCorrection) {
                        this.editMathValue = value;
                        this.editMathInput = true;
                        this.modalRef = this.modalService.open(this.mathShow, { size: 'md', backdrop: 'static' });
                    }
                });
            }
        }
    }
    //
    incrementZoom(amount) {
        this.zoom += amount;
    }
    incrementPage() {
        if (this.pageVariable != this.totalPdfPage) {
            this.pageVariable += 1;
        }
    }
    decrementPage() {
        if (this.pageVariable > 1) {
            this.pageVariable -= 1;
        }
    }
    expandPage(val) {
        this.expand = val;
        this.expandBoolean.emit(val);
    }
    tools(type, pointerType) {
        this.elem.style.cursor = pointerType;
        if (this.shapesType === type) {
            this.shapesType = '';
            if (document.getElementById('customArea') && this.shapesType != 'text') {
                document.getElementById('customArea').remove();
                this.editTextInput = false;
            }
            this.showInput = true;
        }
        else {
            this.shapeTypeChanged = this.shapesType == 'select' ? type != 'select' : type == 'select';
            this.shapesType = type;
            if (document.getElementById('customArea') && this.shapesType != 'text') {
                document.getElementById('customArea').remove();
                this.editTextInput = false;
            }
            this.showInput = true;
        }
        this.elem.style.cursor = pointerType;
    }
    eraseAlert() {
        this.modalRef = this.modalService.open(this.eraseAll, { size: 'md', backdrop: 'static' });
    }
    clearAll() {
        this.areaInfo = [];
        this.annotate.emit(this.areaInfo);
        console.log(this.areaInfo, 'areaInfo');
        this.jsPDF = new jsPDF();
        this.pdfTemplate = this.jsPDF.output('datauristring');
        // if (this.pageVariable == 1) {
        //   this.pageVariable = 2;
        // } else {
        //   this.pageVariable = 1;
        // }
        this.close();
    }
    preventScroll() {
        document.body.style.overflow = 'hidden';
    }
    allowScroll() {
        document.body.style.overflow = 'scroll';
    }
    deleteSvg() {
        this.modalRef = this.modalService.open(this.deleteClass, { size: 'md', backdrop: 'static' });
    }
    backToQuestion() {
        this.selectedDeleteIcon = false;
        this.deleteAnnatation = false;
        this.deleteAnnotation.emit(this.deleteAnnatation);
    }
    ///math input annotation
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
                const emitter = this.areaInfo.filter((value) => {
                    return value.isTeacherCorrection == true && value.isDelete == false;
                });
                this.annotate.emit(emitter);
            }
            else {
                this.rect.x1 = this.textPosition.x;
                this.rect.y1 = this.textPosition.y;
                this.rect.text = this.mathVal;
                this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                const path = this.composedPath(this.mathInputEvent);
                this.element.children[0].children.forEach((value) => value.id = 'math-' + rectId);
                // let pagePath = path.find(p => p.className == 'page').children[1].appendChild(this.element);
                const pagePath = path.find(p => p.className == 'page');
                const lengthofChilds = path.find(p => p.className == 'page').children.length;
                for (let i = 0; i < lengthofChilds; i++) {
                    if (pagePath.children[i].tagName == 'svg') {
                        this.element.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        pagePath.children[i].appendChild(this.element);
                    }
                }
                console.log('before save funct');
                this.save();
            }
            this.mathVal = '';
            this.element = null;
            this.editMathInput = false;
            this.editMathValue = '';
            this.clickEvent();
        }
    }
    // annotation part related function //
    getMousePosition(evt) {
        if (evt.target.tagName != 'DIV') {
            let CTM;
            if (evt.target.tagName == 'svg') {
                CTM = evt.target.getScreenCTM();
            }
            else {
                const svgElem = this.getParentRecurrsive(evt.target, 'svg');
                CTM = svgElem.getScreenCTM();
            }
            if (CTM != undefined) {
                return {
                    x: (evt.clientX - CTM.e) / CTM.a,
                    y: (evt.clientY - CTM.f) / CTM.d
                };
            }
        }
        else {
            this.mouseDownFlag = false;
            this.offsetter = null;
            this.areaInfo.forEach((val) => {
                if (this.selectedElement.id == val.rectangleId) {
                    val.rect.x1 = this.selectedElement.x.baseVal.value;
                    val.rect.y1 = this.selectedElement.y.baseVal.value;
                }
            });
            const emitter = this.areaInfo.filter((value) => {
                return value.isTeacherCorrection == true && value.isDelete == false;
            });
            this.annotate.emit(emitter);
            this.selectedElement = null;
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
                isTeacherCorrection: true,
                shape: this.shapesType == 'math' ? 'foreignObject' : this.shapesType,
                color: this.svgColor,
                fontSize: this.textFontSize
            });
            const emitter = this.areaInfo.filter((value) => {
                return value.isTeacherCorrection == true && value.isDelete == false;
            });
            this.annotate.emit(emitter);
            this.showPopup = false;
            this.rect = { x1: 0, y1: 0, x2: 0, y2: 0, d: '', text: '', width: 0, height: 0 };
            this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
                if (value.isTeacherCorrection) {
                    return value.pageNumber == this.pageVariable;
                }
            });
            this.itemSelect = this.selectedPageAnnatation;
        }
        else {
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
    appendToBuffer(pt) {
        this.buffer.push(pt);
        while (this.buffer.length > 8) {
            this.buffer.shift();
        }
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
            // Get the smoothed part of the path that will not change
            this.strPath += ' L' + pt.x + ' ' + pt.y;
            // Get the last part of the path (close to the current mouse position)
            // This part will change if the mouse moves again
            let tmpPath = '';
            for (let offset = 10; offset < this.buffer.length; offset += 5) {
                pt = this.getAveragePoint(offset);
                tmpPath += ' L' + pt.x + ' ' + pt.y;
            }
            // Set the complete current path coordinates
            this.element.setAttribute('d', this.strPath + tmpPath);
        }
    }
    scrollToPage(pageNum) {
        const container = document.querySelector('.ng2-pdf-viewer-container') || document.querySelector('pdf-viewer');
        const pageElement = container?.querySelector(`[data-page-number="${pageNum}"]`);
        if (pageElement) {
            pageElement.scrollIntoView({ behavior: 'smooth' });
        }
        this.shapeTypeChanged = false;
    }
    // pdf-viewer built in funtions //
    pageRendered(event) {
        this.scale = event.source.scale;
        console.log(this.scale, 'scale');
        this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.elem.style.position = 'absolute';
        this.elem.setAttribute('id', event.pageNumber);
        this.elem.style.left = 0 + 'px';
        this.elem.style.top = 0 + 'px';
        this.elem.style.right = 0 + 'px';
        this.elem.style.bottom = 0 + 'px';
        this.elem.style.cursor = 'auto';
        this.elem.style.width = event.source.width + 'px';
        this.elem.style.height = event.source.height + 'px';
        const path = this.composedPath(event.source.div);
        this.globalPdfViewerPath = path;
        path.find(p => p.className == 'page').appendChild(this.elem);
        this.areaInfo.forEach((value, index, arr) => {
            if (value.pageNumber == event.pageNumber && !value.isDelete) {
                const rectId = value.rectangleId;
                let rect;
                if (value.shape != 'text') {
                    rect = document.createElementNS('http://www.w3.org/2000/svg', value.shape == 'rectMask' ? 'rect' : value.shape == 'highlight' ? 'rect' : value.shape);
                    rect.setAttribute('stroke-width', '2');
                    rect.setAttribute('stroke', value.color);
                    rect.setAttribute('fill', 'none');
                    rect.style.width = value.rect.width + 'px';
                    rect.style.height = value.rect.height + 'px';
                }
                else {
                    rect = this.createWrappingText(value.rect.text, value.rect.x1, value.rect.y1, 'auto', value.rect.width, value.rectangleId, value.color);
                }
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
                if (value.shape == 'foreignObject') {
                    rect.id = rectId;
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('stroke-width', 'none');
                    rect.setAttribute('stroke', 'none');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                    rect.style.width = 'math';
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
                    rect.id = rectId;
                    rect.children[0].id = rectId;
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('stroke-width', 'none');
                    rect.setAttribute('stroke', 'none');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
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
                    rect.setAttribute('fill', value.color);
                    rect.setAttribute('fill-opacity', '0.2');
                    rect.setAttribute('x', value.rect.x1.toString());
                    rect.setAttribute('y', value.rect.y1.toString());
                }
                // get to-draw-rectangle div and add rectangle
                rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                const pagePath = path.find(p => p.className == 'page');
                const lengthofChilds = path.find(p => p.className == 'page').children.length;
                for (let i = 0; i < lengthofChilds; i++) {
                    if (pagePath.children[i].tagName == 'svg') {
                        rect.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                        pagePath.children[i].appendChild(rect);
                    }
                }
            }
        });
        this.shapeTypeChanged && this.pageVariable > 1 ? this.scrollToPage(this.pageVariable) : '';
        this.clickEvent();
        this.addQuestionButtonInPdf(event, path);
    }
    addQuestionButtonInPdf(value, way) {
        // Exists.
        // this.dragpaths = this.composedPath(event.target);
        // let drageventPath = this.dragpaths.find(p => p.className == 'page');
        // if (drageventPath) {
        if (this.dragQuestionsList) {
            this.dragQuestionsList.forEach((item) => {
                if ($('#' + item.dragButton.id).length == 0) {
                    // document.getElementById(item.id).style.position = 'absolute';
                    // document.getElementById(item.id).style.transform = 'none';
                    this.dragButton = document.createElement('span');
                    this.dragButton.id = item.dragButton.id;
                    this.dragButton.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                    // this.dragButton.style.left = item.dragButton.x + 'px';
                    // this.dragButton.style.top = item.dragButton.y + 'px';
                    // this.dragButton.style.fontSize = '14px';
                    // this.dragButton.style.width = '27px';
                    // this.dragButton.style.background = "#e6baea";
                    // this.dragButton.style.padding = "6px";
                    // this.dragButton.style.borderRadius = "4px";
                    // this.dragButton.style.textAlign = "center";
                    ///
                    this.dragButton.style.left = (item.dragButton.x * this.scale) + 'px';
                    this.dragButton.style.top = (item.dragButton.y * this.scale) + 'px';
                    this.dragButton.style.fontSize = (14 * this.scale).toString() + 'px';
                    this.dragButton.style.minWidth = (27 * this.scale).toString() + 'px';
                    this.dragButton.style.padding = (6 * this.scale).toString() + 'px';
                    this.dragButton.style.borderRadius = (4 * this.scale).toString() + 'px';
                    this.dragButton.style.background = '#e6baea';
                    this.dragButton.style.textAlign = 'center';
                    this.dragButton.style.position = 'absolute';
                    this.dragButton.innerHTML = item.text;
                    // const pagePath = way.find(p => p.className == 'page');
                    // const lengthofChilds = way.find(p => p.className == 'page').children.length;
                    // for (let i = 0; i < lengthofChilds; i ++){
                    //   if (pagePath.children[i].tagName == 'svg'){
                    //     this.dragButton.style.transform = 'scale(' + this.scale.toString() + ') rotate(0) translate(0, 0)';
                    //     pagePath.children[i].appendChild(this.dragButton);
                    //   }
                    // }
                    let path = document.getElementsByClassName('page')[item.pageNumber - 1];
                    // path.children[2].appendChild(this.dragButton);
                    path.appendChild(this.dragButton);
                    // this.dragpaths.find(p => p.className == 'page').appendChild(this.dragButton);
                }
                // else if ($('#' + item.dragButton.id).length > 0) {
                //     console.log(item.dragButton.id, 'button id repeat');
                //     // document.getElementById(this.selectedQueNum + 'dropId').style.position = 'fixed';
                //
                //     const dragList = [];
                //     this.dragQuestionsList.forEach((item1: any) => {
                //         if (item1.id !== item.id) {
                //             dragList.push(item1);
                //         }
                //     });
                //     let elem = document.getElementById(item.dragButton.id);
                //     elem.remove();
                //     this.dragQuestionsList = dragList;
                //
                // }
            });
        }
    }
    textRender(event) {
        const path = this.composedPath(event.source.textLayerDiv);
        path.find(p => p.className == 'page').appendChild(event.source.textLayerDiv);
    }
    callBackFn(pdf) {
        this.totalPdfPage = pdf._pdfInfo.numPages;
        const end = new Date().getTime();
        const total_time = end - this.startTime;
        console.log(total_time, 'total_time');
        console.timeEnd('pdf tim end');
        this.customPdfLoader = false;
        this.allowScroll();
        this.setCustomScrollPosition();
    }
    setCustomScrollPosition() {
        if (this.workAreaScroll) {
            const workArea = document.getElementById('workArea');
            console.log(workArea, 'workArea');
            console.log(this.customeScrollPosition, 'pos');
            setTimeout(() => {
                workArea?.scrollTo(0, this.customeScrollPosition);
                this.workAreaScroll = false;
            }, 50);
        }
    }
    scrollDownPads(event) {
        this.customeScrollPosition = Math.floor(event.currentScrollPosition);
        this.workAreaScroll = true;
        this.jsPDF.addPage();
        this.pdfTemplate = this.jsPDF.output('datauristring');
        console.log(this.areaInfo, 'area');
    }
    pagechanging(event) {
        if (this.deleteAnnatation) {
            this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
                if (value.isTeacherCorrection) {
                    return value.pageNumber == event;
                }
            });
            this.itemSelect = this.selectedPageAnnatation;
        }
        this.currentPageNo.emit(event);
    }
    onerror(error) {
        this.customPdfLoader = false;
        console.error(error, 'errr');
        this.toastr.error(error.message);
    }
    // old delete feature set of codes
    redoPageRendered(value) {
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
        if (value.shape == 'text') {
            rect.id = rectId;
            rect.setAttribute('fill', 'red');
            rect.setAttribute('stroke-width', 'none');
            rect.setAttribute('stroke', 'none');
            rect.setAttribute('x', value.rect.x1.toString());
            rect.setAttribute('y', value.rect.y1.toString());
            rect.appendChild(document.createTextNode(value.rect.text.toString()));
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
    hoverRemoveItemEnter(event) {
        this.globalPdfViewerPath.find(p => p.className == 'page').appendChild(this.elem);
        $('.textLayer').addClass('disable-textLayer');
        this.areaInfo.forEach((value) => {
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);
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
                        }
                        if (value.shape == 'rectMask') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('stroke-width', '0');
                        }
                        if (value.shape == 'highlight') {
                            rect.style.animation = 'blinkFill 0.8s infinite';
                            rect.setAttribute('stroke-width', '0');
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
        this.areaInfo.forEach((value, index, arr) => {
            const eventsvgPath = document.getElementById(event.rectangleId);
            const valuesvgPath = document.getElementById(value.rectangleId);
            if (value.pageNumber == event.pageNumber) {
                if (eventsvgPath == valuesvgPath) {
                    const rect = valuesvgPath;
                    if (rect) {
                        rect.style.animation = '';
                        if (value.shape == 'rect') {
                            rect.setAttribute('stroke-width', '2');
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
                            rect.setAttribute('stroke-width', 'none');
                            rect.setAttribute('stroke', 'none');
                        }
                        if (value.shape == 'rectMask') {
                            rect.setAttribute('fill', '#fff');
                            rect.setAttribute('stroke-width', '0');
                        }
                        if (value.shape == 'highlight') {
                            rect.setAttribute('stroke-width', '0');
                            rect.setAttribute('fill', value.color);
                            rect.setAttribute('fill-opacity', '0.2');
                        }
                    }
                }
            }
        });
    }
    removeAnnatation(event) {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (event.rectangleId == this.areaInfo[i].rectangleId) {
                this.areaInfo[i].isDelete = true;
                this.redoListArray.push(this.areaInfo[i]);
            }
        }
        const joinString = event.rectangleId;
        document.getElementById(joinString).remove();
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            if (value.isTeacherCorrection) {
                return value.pageNumber == this.pageVariable;
            }
        });
        this.itemSelect = this.selectedPageAnnatation;
        const emitter = this.areaInfo.filter((value) => {
            return value.isTeacherCorrection == true && value.isDelete == false;
        });
        this.annotate.emit(emitter);
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
            if (value.isTeacherCorrection) {
                return value.pageNumber == this.pageVariable;
            }
        });
        this.itemSelect = this.selectedPageAnnatation;
        const emitter = this.areaInfo.filter((value) => {
            return value.isTeacherCorrection == true && value.isDelete == false;
        });
        this.annotate.emit(emitter);
    }
    deleteAllAnnotation() {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (document.getElementById(this.areaInfo[i].rectangleId)) {
                if (this.areaInfo[i].isTeacherCorrection) {
                    this.areaInfo[i].isDelete = true;
                    // this.areaInfo.splice(i, 1);
                    this.redoListArray.push(this.areaInfo[i]);
                    document.getElementById(this.areaInfo[i].rectangleId).remove();
                }
            }
        }
        // this.areaInfo = [];
        this.selectedPageAnnatation = this.areaInfo.filter((value, id, array) => {
            if (value.isTeacherCorrection) {
                return value.pageNumber == this.pageVariable;
            }
        });
        this.itemSelect = this.selectedPageAnnatation;
        const emitter = this.areaInfo.filter((value) => {
            return value.isTeacherCorrection == true && value.isDelete == false;
        });
        this.annotate.emit(emitter);
        this.close();
    }
    close() {
        this.modalRef.close();
    }
    deleteCurrentPageAnnotation() {
        for (let i = 0; i < this.areaInfo.length; i++) {
            if (document.getElementById(this.areaInfo[i].rectangleId)) {
                if (this.pageVariable == this.areaInfo[i].pageNumber && this.areaInfo[i].isTeacherCorrection) {
                    this.areaInfo[i].isDelete = true;
                    // this.areaInfo.splice(i, 1);
                    this.redoListArray.push(this.areaInfo[i]);
                    document.getElementById(this.areaInfo[i].rectangleId).remove();
                }
            }
        }
        const emitter = this.areaInfo.filter((value) => {
            return value.isTeacherCorrection == true && value.isDelete == false;
        });
        this.annotate.emit(emitter);
        this.close();
    }
    static { this.ɵfac = function AnnotationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnnotationComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.AuthService), i0.ɵɵdirectiveInject(i3.CreatorService), i0.ɵɵdirectiveInject(i4.NgbModal), i0.ɵɵdirectiveInject(i5.ActivatedRoute), i0.ɵɵdirectiveInject(i6.ConfigurationService), i0.ɵɵdirectiveInject(i7.ClassService), i0.ɵɵdirectiveInject(i8.ToastrService), i0.ɵɵdirectiveInject(i9.CommonDataService), i0.ɵɵdirectiveInject(i10.EnvironmentService), i0.ɵɵdirectiveInject(i11.ValidationService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i12.NavService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AnnotationComponent, selectors: [["app-annotation"]], viewQuery: function AnnotationComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
            i0.ɵɵviewQuery(_c3, 5);
            i0.ɵɵviewQuery(_c4, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.canvas = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteSvgDraw = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.deleteClass = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mathShow = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.eraseAll = _t.first);
        } }, inputs: { toolHide: "toolHide", toolAdjust: "toolAdjust", expandPdf: "expandPdf", toolAlignCenter: "toolAlignCenter", userType: "userType", getAnnotate: "getAnnotate", getDragQues: "getDragQues", pdfPath: "pdfPath", showPageNo: "showPageNo", pageVariable: "pageVariable", id: "id" }, outputs: { annotate: "annotate", deleteAnnotation: "deleteAnnotation", currentPageNo: "currentPageNo", expandBoolean: "expandBoolean" }, decls: 63, vars: 31, consts: [["class", ""], ["mathShow", ""], ["eraseAll", ""], ["pdfPage", ""], ["pdfScroll", ""], [1, "row", "mt-1", "stickyTool", 3, "hidden"], ["alt", "", "src", "assets/images/pdf-icons/add-circle.png", "title", "Zoom-in", 2, "cursor", "pointer", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/minus-circle.png", "title", "Zoom-out", 2, "cursor", "pointer", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/Icon material-delete-1.png", "title", "Delete", 2, "cursor", "pointer", 3, "click", "ngClass"], ["class", "col-md-3 d-flex align-items-center", 4, "ngIf"], ["title", "Font size", 1, "form-control", "pull-right", "mr-2", 2, "width", "80px", 3, "ngModelChange", "ngModel"], ["disabled", "", "selected", "", "value", ""], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "14"], ["value", "15"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "19"], ["value", "20"], ["alt", "", "src", "assets/images/pdf-icons/cursor (2).png", "title", "Mark", 1, "pull-right", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/stop.png", "title", "Extract", 1, "pull-right", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/eraser@2x.png", "title", "Eraser", 1, "pull-right", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/math2.png", "title", "Math", 1, "pull-right", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Text.png", "title", "Text", 1, "pull-right", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/highlighter-icon.png", "title", "Highlighter", 1, "pull-right", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Icon awesome-pencil-alt.png", "title", "Sketch", 1, "pull-right", 3, "click", "ngClass"], ["name", "favcolor", "title", "Color", "type", "color", 1, "pull-right", "mr-2", 2, "margin-top", "6px", 3, "click", "ngModelChange", "ngModel"], ["alt", "", "class", "cursor p-0", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Hide Questions", 3, "click", 4, "ngIf"], ["alt", "", "class", "cursor p-0", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Show Questions", 3, "click", 4, "ngIf"], ["class", "row p-3 d-flex justify-content-center stickyTool", 4, "ngIf"], [1, "row"], [3, "class", "id", "click", "mousedown", "dblclick", "mousemove", "mouseup", "mouseenter", "mouseover", "mouseleave", "input", 4, "ngIf"], ["class", "scrollWritingPad col-md-12 px-0", "infiniteScroll", "", 3, "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "id", "click", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "scrolled", 4, "ngIf"], ["class", "col-md-4", 4, "ngIf"], [1, "col-md-3", "d-flex", "align-items-center"], [3, "click"], ["readonly", "", "type", "text", 1, "form-control", "text-center", "col-4", 3, "ngModelChange", "ngModel"], ["alt", "", "src", "assets/images/pdf-icons/arrowRight.png", "title", "Hide Questions", 1, "cursor", "p-0", 3, "click"], ["alt", "", "src", "assets/images/pdf-icons/arrowLeft.png", "title", "Show Questions", 1, "cursor", "p-0", 3, "click"], [1, "row", "p-3", "d-flex", "justify-content-center", "stickyTool"], [1, "col-md-9", "d-flex", "justify-content-between"], [1, "col-md-3", "px-0"], [1, "btn", "btn-success", "pull-left", 3, "click"], [1, "pdf-assign-btn", "d-flex", "justify-content-end", "pdf-tools", "col-md-7", "pr-2", "px-0"], ["alt", "", "src", "assets/images/pdf-icons/stop.png", "title", "Extract", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/eraser@2x.png", "title", "Eraser", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Text.png", "title", "Text", 3, "click", "ngClass"], ["alt", "", "src", "assets/images/pdf-icons/Icon awesome-pencil-alt.png", "title", "Sketch", 3, "click", "ngClass"], ["name", "favcolor", "title", "Color", "type", "color", 1, "mr-3", 2, "margin-top", "6px", 3, "click", "ngModelChange", "ngModel"], [3, "click", "mousedown", "dblclick", "mousemove", "mouseup", "mouseenter", "mouseover", "mouseleave", "input", "id"], ["id", "custom-pdf-loader", "style", "height: 100vh;", 4, "ngIf"], [2, "display", "block", 3, "page-rendered", "pageChange", "text-layer-rendered", "pages-initialized", "after-load-complete", "error", "page", "fit-to-page", "original-size", "render-text", "show-all", "ngStyle", "src", "zoom"], ["id", "custom-pdf-loader", 2, "height", "100vh"], ["src", "assets/images/pre-loader/loader-01.svg", "alt", ""], ["infiniteScroll", "", 1, "scrollWritingPad", "col-md-12", "px-0", 3, "click", "dblclick", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "scrolled", "fromRoot", "infiniteScrollContainer", "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "id"], [2, "display", "block", "height", "100vh", "background-color", "#f8f8f9", 3, "after-load-complete", "error", "page-rendered", "pageChange", "pages-initialized", "text-layer-rendered", "page", "fit-to-page", "original-size", "render-text", "show-all", "src", "zoom"], ["alt", "", "src", "assets/images/pre-loader/loader-01.svg"], [1, "col-md-4"], [1, "col-md-12"], ["class", "btn btn-primary w-100 mb-3", "type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", "w-100", "mb-3", 3, "click"], [1, "scrollPanel", 3, "hoverleaveremoveItem", "hoverremoveItem", "openDeleteDialog", "removeItem", "undoDeleteAnnatation", "items"], [1, "modal-body", 2, "border", "0"], [1, "container-fluid"], [1, "col-sm-12", "text-right"], [1, "fa", "fa-close", "cursor", 2, "font-size", "1rem", 3, "click"], [1, "col-sm-12", "text-center"], [1, "modal-title", "headerText"], [1, "col-sm-12"], [1, "text-center", "mt-3"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "modal-header"], [1, "col-12"], [3, "emitEditorValue", "editorPatchValue", "height", "id", "showDropBtn", "imageToolHide", "showInputBtn"], [1, "modal-header", "d-flex", "justify-content-between"], [1, "fa", "fa-times-circle", "cursor", 2, "font-size", "1.2rem", 3, "click"], [1, "col-12", "py-3"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function AnnotationComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 5)(1, "div")(2, "div")(3, "img", 6);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.incrementZoom(0.1)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "img", 7);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_4_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.incrementZoom(-0.1)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "img", 8);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.deleteSvg()); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div");
            i0.ɵɵtemplate(7, AnnotationComponent_div_7_Template, 4, 7, "div", 9);
            i0.ɵɵelementStart(8, "div")(9, "select", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function AnnotationComponent_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.textFontSize, $event) || (ctx.textFontSize = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(10, "option", 11);
            i0.ɵɵtext(11, "--Font Size--");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "option", 12);
            i0.ɵɵtext(13, "6");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "option", 13);
            i0.ɵɵtext(15, "7");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "option", 14);
            i0.ɵɵtext(17, "8");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "option", 15);
            i0.ɵɵtext(19, "9");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option", 16);
            i0.ɵɵtext(21, "10");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 17);
            i0.ɵɵtext(23, "11");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "option", 18);
            i0.ɵɵtext(25, "12");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "option", 19);
            i0.ɵɵtext(27, "13");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "option", 20);
            i0.ɵɵtext(29, "14");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "option", 21);
            i0.ɵɵtext(31, "15");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "option", 22);
            i0.ɵɵtext(33, "16");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "option", 23);
            i0.ɵɵtext(35, "17");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "option", 24);
            i0.ɵɵtext(37, "18");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "option", 25);
            i0.ɵɵtext(39, "19");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "option", 26);
            i0.ɵɵtext(41, "20");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "img", 27);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_42_listener() { i0.ɵɵrestoreView(_r1); ctx.tools("select", "auto"); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "img", 28);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_43_listener() { i0.ɵɵrestoreView(_r1); ctx.tools("rect", "crosshair"); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "img", 29);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_44_listener() { i0.ɵɵrestoreView(_r1); ctx.tools("eraser", "auto"); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "img", 30);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_45_listener() { i0.ɵɵrestoreView(_r1); ctx.tools("math", "auto"); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "img", 31);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_46_listener() { i0.ɵɵrestoreView(_r1); ctx.tools("text", "auto"); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "img", 32);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_47_listener() { i0.ɵɵrestoreView(_r1); ctx.tools("highlight", "crosshair"); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "img", 33);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_img_click_48_listener() { i0.ɵɵrestoreView(_r1); ctx.tools("path", "crosshair"); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(49, "input", 34);
            i0.ɵɵlistener("click", function AnnotationComponent_Template_input_click_49_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.backToQuestion()); });
            i0.ɵɵtwoWayListener("ngModelChange", function AnnotationComponent_Template_input_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.svgColor, $event) || (ctx.svgColor = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(50, AnnotationComponent_img_50_Template, 1, 0, "img", 35)(51, AnnotationComponent_img_51_Template, 1, 0, "img", 36);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(52, AnnotationComponent_div_52_Template, 11, 5, "div", 37);
            i0.ɵɵelementStart(53, "div", 38);
            i0.ɵɵtemplate(54, AnnotationComponent_div_54_Template, 5, 15, "div", 39)(55, AnnotationComponent_div_55_Template, 4, 14, "div", 40)(56, AnnotationComponent_div_56_Template, 4, 2, "div", 41);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(57, AnnotationComponent_ng_template_57_Template, 14, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(59, AnnotationComponent_ng_template_59_Template, 11, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(61, AnnotationComponent_ng_template_61_Template, 15, 0, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("hidden", ctx.toolHide == true);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate2("col-md-", ctx.deleteAnnatation ? 8 : 12, " d-flex ", ctx.toolAlignCenter ? "justify-content-center" : "", " mb-2 px-0");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("pdf-assign-btn pdf-tools ", ctx.toolAlignCenter ? "" : ctx.env.deviceType() ? "col-md-4" : "col-md-3", "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", ctx.selectedDeleteIcon ? "deleteIcon" : "");
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("pdf-assign-btn pdf-tools ", ctx.toolAlignCenter ? "" : ctx.env.deviceType() ? "col-md-8" : "col-md-9", " pr-2 px-0 d-flex justify-content-end");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showPageNo);
            i0.ɵɵadvance();
            i0.ɵɵclassMapInterpolate1("col-md-", ctx.showPageNo ? "9" : "12", " d-flex justify-content-end");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.textFontSize);
            i0.ɵɵadvance(33);
            i0.ɵɵproperty("ngClass", ctx.shapesType == "select" ? "selected-tool-color" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shapesType == "rect" ? "selected-tool-color" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shapesType == "eraser" ? "selected-tool-color" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shapesType == "math" ? "selected-tool-color" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shapesType == "text" ? "selected-tool-color" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shapesType == "highlight" ? "selected-tool-color" : "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", ctx.shapesType == "path" ? "selected-tool-color" : "");
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.svgColor);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.expandPdf && !ctx.expand);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.expandPdf && ctx.expand);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.toolHide == true && ctx.toolAdjust == true);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.toolAdjust);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.toolHide && ctx.toolAdjust);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.deleteAnnatation);
        } }, dependencies: [i13.NgClass, i13.NgIf, i13.NgStyle, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.DefaultValueAccessor, i14.SelectControlValueAccessor, i14.NgControlStatus, i15.PdfViewerComponent, i16.RemoveAnnatationComponent, i17.InfiniteScrollDirective, i14.NgModel, i18.TinyMiceComponent], styles: ["@keyframes _ngcontent-%COMP%_blinkStroke {\n  100%,\n  0% {\n    stroke: #500;\n  }\n  30% {\n    stroke: deeppink;\n  }\n  60% {\n    stroke: yellow;\n  }\n  100% {\n    stroke: black;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_blinkFill {\n  100%,\n  0% {\n    fill: #500;\n  }\n  30% {\n    fill: deeppink;\n  }\n  60% {\n    fill: yellow;\n  }\n  100% {\n    fill: black;\n  }\n}\n\n.stickyTool[_ngcontent-%COMP%]{\n  position: sticky;\n  top: 0;\n  background-color: #f8f8f9;\n  z-index: 3;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnnotationComponent, [{
        type: Component,
        args: [{ selector: 'app-annotation', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [hidden]=\"toolHide == true\" class=\"row mt-1 stickyTool\">\n    <div class=\"col-md-{{deleteAnnatation ? 8 : 12}} d-flex {{toolAlignCenter ? 'justify-content-center' : ''}} mb-2 px-0\">\n        <div class=\"pdf-assign-btn pdf-tools {{toolAlignCenter ? '' : env.deviceType() ? 'col-md-4' : 'col-md-3'}}\">\n            <img (click)=\"incrementZoom(0.1)\" alt=\"\" src=\"assets/images/pdf-icons/add-circle.png\"\n                 style=\"cursor: pointer\" title=\"Zoom-in\">\n            <img (click)=\"incrementZoom(-0.1)\" alt=\"\" src=\"assets/images/pdf-icons/minus-circle.png\"\n                 style=\"cursor: pointer\" title=\"Zoom-out\">\n            <img (click)=\"deleteSvg()\" [ngClass]=\"selectedDeleteIcon ? 'deleteIcon': ''\" alt=\"\"\n                 src=\"assets/images/pdf-icons/Icon material-delete-1.png\" style=\"cursor: pointer\" title=\"Delete\">\n        </div>\n        <div class=\"pdf-assign-btn pdf-tools {{toolAlignCenter ? '' : env.deviceType() ? 'col-md-8' : 'col-md-9'}} pr-2 px-0 d-flex justify-content-end\">\n            <div *ngIf=\"showPageNo\" class=\"col-md-3 d-flex align-items-center\">\n                <i (click)=\"decrementPage()\"\n                   class=\"fa fa-minus py-2 px-3 border rounded-left {{pageVariable > 1 ? 'color-primary' : 'color-grey'}}\"></i>\n                <input [(ngModel)]=\"pageVariable\" class=\"form-control text-center col-4\" readonly type=\"text\">\n                <i (click)=\"incrementPage()\"\n                   class=\"fa fa-plus py-2 px-3 border rounded-right {{pageVariable == totalPdfPage ? 'color-grey' : 'color-primary'}}\"></i>\n            </div>\n            <div class=\"col-md-{{showPageNo ? '9' : '12'}} d-flex justify-content-end\">\n                <select [(ngModel)]=\"textFontSize\" class=\"form-control pull-right mr-2\" style=\"width: 80px\"\n                        title=\"Font size\">\n                    <option disabled selected value=\"\">--Font Size--</option>\n                    <option value=\"6\">6</option>\n                    <option value=\"7\">7</option>\n                    <option value=\"8\">8</option>\n                    <option value=\"9\">9</option>\n                    <option value=\"10\">10</option>\n                    <option value=\"11\">11</option>\n                    <option value=\"12\">12</option>\n                    <option value=\"13\">13</option>\n                    <option value=\"14\">14</option>\n                    <option value=\"15\">15</option>\n                    <option value=\"16\">16</option>\n                    <option value=\"17\">17</option>\n                    <option value=\"18\">18</option>\n                    <option value=\"19\">19</option>\n                    <option value=\"20\">20</option>\n                </select>\n                <img (click)=\"tools('select', 'auto');backToQuestion();\"\n                     [ngClass]=\"shapesType == 'select' ? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                     src=\"assets/images/pdf-icons/cursor (2).png\" title=\"Mark\">\n                <img (click)=\"tools('rect', 'crosshair');backToQuestion();\"\n                     [ngClass]=\"shapesType == 'rect'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                     src=\"assets/images/pdf-icons/stop.png\" title=\"Extract\">\n                <img (click)=\"tools('eraser', 'auto');backToQuestion();\"\n                     [ngClass]=\"shapesType == 'eraser'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                     src=\"assets/images/pdf-icons/eraser@2x.png\" title=\"Eraser\">\n                <img (click)=\"tools('math', 'auto');backToQuestion();\"\n                     [ngClass]=\"shapesType == 'math'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                     src=\"assets/images/pdf-icons/math2.png\" title=\"Math\">\n                <img (click)=\"tools('text', 'auto');backToQuestion();\"\n                     [ngClass]=\"shapesType == 'text'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                     src=\"assets/images/pdf-icons/Text.png\" title=\"Text\">\n                <img (click)=\"tools('highlight', 'crosshair');backToQuestion();\"\n                     [ngClass]=\"shapesType == 'highlight'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                     src=\"assets/images/pdf-icons/highlighter-icon.png\" title=\"Highlighter\">\n                <img (click)=\"tools('path', 'crosshair');backToQuestion();\"\n                     [ngClass]=\"shapesType == 'path'? 'selected-tool-color': ''\" alt=\"\" class=\"pull-right\"\n                     src=\"assets/images/pdf-icons/Icon awesome-pencil-alt.png\" title=\"Sketch\">\n                <input (click)=\"backToQuestion()\" [(ngModel)]=\"svgColor\" class=\"pull-right mr-2\" name=\"favcolor\"\n                       style=\"margin-top: 6px\" title=\"Color\" type=\"color\">\n                <img (click)=\"expandPage(true)\" *ngIf=\"expandPdf && !expand\" alt=\"\" class=\"cursor p-0\"\n                     src=\"assets/images/pdf-icons/arrowRight.png\" title=\"Hide Questions\">\n                <img (click)=\"expandPage(false)\" *ngIf=\"expandPdf && expand\" alt=\"\" class=\"cursor p-0\"\n                     src=\"assets/images/pdf-icons/arrowLeft.png\" title=\"Show Questions\">\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"toolHide == true && toolAdjust == true\" class=\"row p-3 d-flex justify-content-center stickyTool\">\n    <div class=\"col-md-9 d-flex justify-content-between\">\n        <div class=\"col-md-3 px-0\">\n            <button (click)=\"eraseAlert()\" class=\"btn btn-success pull-left\">Clear all</button>\n        </div>\n        <div class=\"pdf-assign-btn d-flex justify-content-end pdf-tools col-md-7 pr-2 px-0\">\n            <!--            <img (click)=\"backToQuestion()\" (click)=\" tools('math', 'auto')\" [ngClass]=\"shapesType == 'math'? 'selected-tool-color': ''\" alt=\"\"  class=\"pull-right\" src=\"assets/images/pdf-icons/math2.png\" title=\"Math\">-->\n            <img (click)=\"backToQuestion();tools('rect', 'crosshair')\"\n                 [ngClass]=\"shapesType == 'rect'? 'selected-tool-color': ''\" alt=\"\"\n                 src=\"assets/images/pdf-icons/stop.png\" title=\"Extract\">\n            <img (click)=\"backToQuestion();tools('eraser', 'auto')\"\n                 [ngClass]=\"shapesType == 'eraser'? 'selected-tool-color': ''\" alt=\"\"\n                 src=\"assets/images/pdf-icons/eraser@2x.png\" title=\"Eraser\">\n            <img (click)=\"backToQuestion();tools('text', 'auto')\"\n                 [ngClass]=\"shapesType == 'text'? 'selected-tool-color': ''\" alt=\"\"\n                 src=\"assets/images/pdf-icons/Text.png\" title=\"Text\">\n            <img (click)=\"backToQuestion();tools('path', 'crosshair')\"\n                 [ngClass]=\"shapesType == 'path'? 'selected-tool-color': ''\" alt=\"\"\n                 src=\"assets/images/pdf-icons/Icon awesome-pencil-alt.png\" title=\"Sketch\">\n            <input (click)=\"backToQuestion()\" [(ngModel)]=\"svgColor\" class=\"mr-3\" name=\"favcolor\"\n                   style=\"margin-top: 6px\" title=\"Color\" type=\"color\">\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <!--    <div class=\"col-md-{{deleteAnnatation ? 8 : 12}}\" *ngIf=\"customPdfLoader\" >-->\n    <!--        <div id=\"custom-pdf-loader\" *ngIf=\"customPdfLoader\" style=\"height: 100vh;\">-->\n    <!--            <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">-->\n    <!--        </div>-->\n    <!--    </div>-->\n    <div #pdfPage (click)=\"mouseEvent($event)\" (mousedown)=\"mouseEvent($event)\" *ngIf=\"!toolAdjust\"\n         (dblclick)=\"editText($event)\"\n         (mousemove)=\"mouseEvent($event)\"\n         (mouseup)=\"mouseEvent($event)\"\n         (mouseenter)=\"mouseEnter()\"\n         (mouseover)=\"mouseOver($event)\"\n         (mouseleave)=\"mouseOut($event)\"\n         (input)=\"keyPressfunction($event)\"\n         class=\"col-md-{{deleteAnnatation ? 8 : 12}}\"\n         [id]=\"id\">\n        <div id=\"custom-pdf-loader\" *ngIf=\"customPdfLoader\" style=\"height: 100vh;\">\n            <img src=\"assets/images/pre-loader/loader-01.svg\" alt=\"\">\n        </div>\n        <pdf-viewer #pdfScroll (page-rendered)=\"pageRendered($event)\"\n                    (pageChange)=\"pagechanging($event)\"\n                    (text-layer-rendered)=\"textRender($event)\"\n                    (pages-initialized)=\"pagechanging($event)\"\n                    (after-load-complete)=\"callBackFn($event)\"\n                    (error)=\"onerror($event)\"\n                    [(page)]=\"pageVariable\"\n                    [fit-to-page]=\"true\"\n                    [original-size]=\"true\"\n                    [render-text]=\"shapesType == 'select'\" [show-all]=\"true\"\n                    [ngStyle]=\"{'height': toolAdjust && toolHide ? 'auto' : '100vh'}\" [src]=\"pdfTemplate\" [zoom]=\"zoom\"\n                    style=\"display: block\"></pdf-viewer>\n    </div>\n    <div #pdfPage (click)=\"mouseEvent($event)\" (dblclick)=\"editText($event)\" (mousedown)=\"mouseEvent($event)\"\n         (mouseenter)=\"mouseEnter()\"\n         (mouseleave)=\"mouseOut($event)\"\n         (mousemove)=\"mouseEvent($event)\"\n         (mouseover)=\"mouseOver($event)\"\n         (mouseup)=\"mouseEvent($event)\"\n         *ngIf=\"toolHide && toolAdjust\"\n         (scrolled)=\"scrollDownPads($event)\"\n         [fromRoot]=\"true\"\n         [infiniteScrollContainer]=\"'.scrollWritingPad'\"\n         [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\"\n         [scrollWindow]=\"false\"\n         class=\"scrollWritingPad col-md-12 px-0\"\n         infiniteScroll\n         [id]=\"id\">\n        <div *ngIf=\"customPdfLoader\" id=\"custom-pdf-loader\" style=\"height: 100vh;\">\n            <img alt=\"\" src=\"assets/images/pre-loader/loader-01.svg\">\n        </div>\n        <pdf-viewer (after-load-complete)=\"callBackFn($event)\"\n                    (error)=\"onerror($event)\"\n                    (page-rendered)=\"pageRendered($event)\"\n                    (pageChange)=\"pagechanging($event)\"\n                    (pages-initialized)=\"pagechanging($event)\"\n                    (text-layer-rendered)=\"textRender($event)\"\n                    [(page)]=\"pageVariable\"\n                    [fit-to-page]=\"true\"\n                    [original-size]=\"true\"\n                    [render-text]=\"shapesType == 'select'\"\n                    [show-all]=\"true\"\n                    [src]=\"pdfTemplate\"\n                    [zoom]=\"zoom\"\n                    style=\"display: block; height: 100vh; background-color: #f8f8f9\"></pdf-viewer>\n    </div>\n    <div *ngIf=\"deleteAnnatation\" class=\"col-md-4\">\n        <div class=\"col-md-12\">\n            <button (click)=\"backToQuestion()\" *ngIf=\"deleteAnnatation\" class=\"btn btn-primary w-100 mb-3\"\n                    type=\"button\">Back\n            </button>\n        </div>\n        <ng-container *ngIf=\"deleteAnnatation\">\n            <app-remove-annatation (hoverleaveremoveItem)=\"hoverLeaveRemoveItemEnter($event)\"\n                                   (hoverremoveItem)=\"hoverRemoveItemEnter($event)\"\n                                   (openDeleteDialog)=\"deleteSvg()\"\n                                   (removeItem)=\"removeAnnatation($event)\"\n                                   (undoDeleteAnnatation)=\"undoDeleteAnnatation($event)\"\n                                   [items]=\"itemSelect\"\n                                   class=\"scrollPanel\"></app-remove-annatation>\n        </ng-container>\n    </div>\n</div>\n\n<ng-template #class let-c=\"close\" let-d=\"dismiss\">\n\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <div class=\"col-sm-12 text-right\">\n                    <i (click)=\"close()\" class=\"fa fa-close cursor\" style=\"font-size: 1rem\"></i>\n                </div>\n                <div class=\"col-sm-12 text-center\">\n                    <h3 class=\"modal-title headerText\">Delete All Annotation</h3>\n                </div>\n\n                <div class=\"col-sm-12\">\n                    <h5 class=\"text-center mt-3\">Are you sure want to delete All Annotations ?</h5>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"deleteAllAnnotation()\" class=\"btn btn-outline-primary\" type=\"button\">Yes</button>\n        <!--        <button (click)=\"deleteCurrentPageAnnotation()\" class=\"btn btn-outline-primary\" type=\"button\">This Page</button>-->\n    </div>\n</ng-template>\n\n<ng-template #mathShow let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h4>Enter values</h4>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <!--                <div class=\"col-12 text-right\">-->\n                <!--                    <i class=\"fa fa-close cursor\" style=\"font-size: 2rem\" (click)=\"close()\"></i>-->\n                <!--                </div>-->\n                <!--                <div class=\"col-12 text-center\">-->\n                <!--                    <h3 class=\"modal-title headerText\">Delete Annotation</h3>-->\n                <!--                </div>-->\n                <div class=\"col-12\">\n                    <app-tiny-mice (emitEditorValue)=\"mathValue($event)\"\n                                   [editorPatchValue]=\"editMathValue == '' ? false : editMathValue.rect.text\"\n                                   [height]=\"130\"\n                                   [id]=\"'multiQues'\"\n                                   [showDropBtn]=\"false\"\n                                   [imageToolHide]=\"true\"\n                                   [showInputBtn]=\"false\">\n                    </app-tiny-mice>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"mathAnnotation()\" class=\"btn btn-outline-primary\"\n                type=\"button\">{{editMathValue == '' ? 'Done' : 'Update'}}</button>\n    </div>\n</ng-template>\n\n<ng-template #eraseAll let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header d-flex justify-content-between\">\n        <h4>Erase Annotation</h4>\n        <i (click)=\"close()\" class=\"fa fa-times-circle cursor\" style=\"font-size: 1.2rem\"></i>\n    </div>\n    <div class=\"modal-body\" style=\"border: 0\">\n        <div class=\"container-fluid\">\n            <div class=\"row\">\n                <!--                <div class=\"col-12 text-right\">-->\n                <!--                    <i class=\"fa fa-close cursor\" style=\"font-size: 2rem\" (click)=\"close()\"></i>-->\n                <!--                </div>-->\n                <!--                <div class=\"col-12 text-center\">-->\n                <!--                    <h3 class=\"modal-title headerText\">Delete Annotation</h3>-->\n                <!--                </div>-->\n                <div class=\"col-12 py-3\">\n                    <label class=\"mb-0\">Are you sure? Do you want to erase all writing for this question</label>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal-footer\">\n        <button (click)=\"close()\" class=\"btn btn-outline-primary\" type=\"button\">Close</button>\n        <button (click)=\"clearAll()\" class=\"btn btn-primary\" type=\"button\">Confirm</button>\n    </div>\n</ng-template>\n", styles: ["@keyframes blinkStroke {\n  100%,\n  0% {\n    stroke: #500;\n  }\n  30% {\n    stroke: deeppink;\n  }\n  60% {\n    stroke: yellow;\n  }\n  100% {\n    stroke: black;\n  }\n}\n\n@keyframes blinkFill {\n  100%,\n  0% {\n    fill: #500;\n  }\n  30% {\n    fill: deeppink;\n  }\n  60% {\n    fill: yellow;\n  }\n  100% {\n    fill: black;\n  }\n}\n\n.stickyTool{\n  position: sticky;\n  top: 0;\n  background-color: #f8f8f9;\n  z-index: 3;\n}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: i2.AuthService }, { type: i3.CreatorService }, { type: i4.NgbModal }, { type: i5.ActivatedRoute }, { type: i6.ConfigurationService }, { type: i7.ClassService }, { type: i8.ToastrService }, { type: i9.CommonDataService }, { type: i10.EnvironmentService }, { type: i11.ValidationService }, { type: i5.Router }, { type: i12.NavService }], { canvas: [{
            type: ViewChild,
            args: ['canvas', { static: false }]
        }], toolHide: [{
            type: Input
        }], toolAdjust: [{
            type: Input
        }], expandPdf: [{
            type: Input
        }], toolAlignCenter: [{
            type: Input
        }], userType: [{
            type: Input
        }], getAnnotate: [{
            type: Input
        }], getDragQues: [{
            type: Input
        }], pdfPath: [{
            type: Input
        }], showPageNo: [{
            type: Input
        }], pageVariable: [{
            type: Input
        }], id: [{
            type: Input
        }], annotate: [{
            type: Output
        }], deleteAnnotation: [{
            type: Output
        }], currentPageNo: [{
            type: Output
        }], expandBoolean: [{
            type: Output
        }], deleteSvgDraw: [{
            type: ViewChild,
            args: ['deleteSvgDraw']
        }], deleteClass: [{
            type: ViewChild,
            args: ['class']
        }], mathShow: [{
            type: ViewChild,
            args: ['mathShow']
        }], eraseAll: [{
            type: ViewChild,
            args: ['eraseAll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AnnotationComponent, { className: "AnnotationComponent" }); })();
//# sourceMappingURL=annotation.component.js.map