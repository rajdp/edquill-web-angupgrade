import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../pipes/sorting/sorting.pipe";
const _c0 = () => ["rect", "path", "highlight", "text", "rectMask"];
function RemoveAnnatationComponent_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 6)(2, "div", 7)(3, "div", 18);
    i0.ɵɵlistener("mouseenter", function RemoveAnnatationComponent_ng_container_1_div_1_div_1_Template_div_mouseenter_3_listener() { i0.ɵɵrestoreView(_r2); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.hoverRemoveItem(item_r3)); })("mouseleave", function RemoveAnnatationComponent_ng_container_1_div_1_div_1_Template_div_mouseleave_3_listener() { i0.ɵɵrestoreView(_r2); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.mouseLeaveremoveItem(item_r3)); });
    i0.ɵɵelementStart(4, "p", 19);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 20);
    i0.ɵɵlistener("click", function RemoveAnnatationComponent_ng_container_1_div_1_div_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.openDelete()); });
    i0.ɵɵtext(7, "Clear All");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Page No: ", item_r3.pageNumber, "");
} }
function RemoveAnnatationComponent_ng_container_1_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1, "Extract");
    i0.ɵɵelementEnd();
} }
function RemoveAnnatationComponent_ng_container_1_div_1_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1, "Erase");
    i0.ɵɵelementEnd();
} }
function RemoveAnnatationComponent_ng_container_1_div_1_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1, "Text");
    i0.ɵɵelementEnd();
} }
function RemoveAnnatationComponent_ng_container_1_div_1_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1, "Highlight");
    i0.ɵɵelementEnd();
} }
function RemoveAnnatationComponent_ng_container_1_div_1_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1, "Drawing");
    i0.ɵɵelementEnd();
} }
function RemoveAnnatationComponent_ng_container_1_div_1_p_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.shape);
} }
function RemoveAnnatationComponent_ng_container_1_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "i", 24);
    i0.ɵɵlistener("click", function RemoveAnnatationComponent_ng_container_1_div_1_div_17_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r5); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.deleteItem(item_r3)); });
    i0.ɵɵelementEnd()();
} }
function RemoveAnnatationComponent_ng_container_1_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "i", 26);
    i0.ɵɵlistener("click", function RemoveAnnatationComponent_ng_container_1_div_1_div_18_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r6); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.undoDeleteItem(item_r3)); });
    i0.ɵɵelementEnd()();
} }
function RemoveAnnatationComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, RemoveAnnatationComponent_ng_container_1_div_1_div_1_Template, 8, 1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5)(3, "div", 6)(4, "div", 7)(5, "div", 8);
    i0.ɵɵlistener("mouseenter", function RemoveAnnatationComponent_ng_container_1_div_1_Template_div_mouseenter_5_listener() { const item_r3 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.hoverRemoveItem(item_r3)); })("mouseleave", function RemoveAnnatationComponent_ng_container_1_div_1_Template_div_mouseleave_5_listener() { const item_r3 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.mouseLeaveremoveItem(item_r3)); });
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 9)(8, "span", 10);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 11);
    i0.ɵɵtemplate(11, RemoveAnnatationComponent_ng_container_1_div_1_p_11_Template, 2, 0, "p", 12)(12, RemoveAnnatationComponent_ng_container_1_div_1_p_12_Template, 2, 0, "p", 13)(13, RemoveAnnatationComponent_ng_container_1_div_1_p_13_Template, 2, 0, "p", 13)(14, RemoveAnnatationComponent_ng_container_1_div_1_p_14_Template, 2, 0, "p", 13)(15, RemoveAnnatationComponent_ng_container_1_div_1_p_15_Template, 2, 0, "p", 13)(16, RemoveAnnatationComponent_ng_container_1_div_1_p_16_Template, 2, 1, "p", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, RemoveAnnatationComponent_ng_container_1_div_1_div_17_Template, 2, 0, "div", 15)(18, RemoveAnnatationComponent_ng_container_1_div_1_div_18_Template, 2, 0, "div", 16);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r7 == 0);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i_r7 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3.shape == "rect");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.shape == "rectMask");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.shape == "text");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.shape == "highlight");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.shape == "path");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !i0.ɵɵpureFunction0(10, _c0).includes(item_r3.shape));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !item_r3.isDelete);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.isDelete);
} }
function RemoveAnnatationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RemoveAnnatationComponent_ng_container_1_div_1_Template, 19, 11, "div", 2);
    i0.ɵɵpipe(2, "sortPipe");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, ctx_r3.items, ctx_r3.items));
} }
function RemoveAnnatationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 6)(2, "div", 7)(3, "div", 27)(4, "p")(5, "em");
    i0.ɵɵtext(6, "No annotation found in this page");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} }
export class RemoveAnnatationComponent {
    constructor() {
        this.removeItem = new EventEmitter();
        this.hoverremoveItem = new EventEmitter();
        this.hoverleaveremoveItem = new EventEmitter();
        this.undoDeleteAnnatation = new EventEmitter();
        this.openDeleteDialog = new EventEmitter();
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        // this.items = this.items.sort((a, b) =>
        //     a.rect.y2 -  b.rect.y2
        //
        // );
    }
    deleteItem(item) {
        this.removeItem.emit(item);
    }
    openDelete() {
        this.openDeleteDialog.emit(true);
    }
    undoDeleteItem(item) {
        this.undoDeleteAnnatation.emit(item);
    }
    hoverRemoveItem(item) {
        this.hoverremoveItem.emit(item);
    }
    mouseLeaveremoveItem(item) {
        this.hoverleaveremoveItem.emit(item);
    }
    static { this.ɵfac = function RemoveAnnatationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RemoveAnnatationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RemoveAnnatationComponent, selectors: [["app-remove-annatation"]], inputs: { items: "items" }, outputs: { removeItem: "removeItem", hoverremoveItem: "hoverremoveItem", hoverleaveremoveItem: "hoverleaveremoveItem", undoDeleteAnnatation: "undoDeleteAnnatation", openDeleteDialog: "openDeleteDialog" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [[1, "container-fluid"], [4, "ngIf"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["class", "card", 4, "ngIf"], [1, "card", "mt-2"], [1, "card-body"], [1, "row"], [1, "col-md-12", 3, "mouseenter", "mouseleave"], [1, "col-md-3"], [1, "multichoice-option3", 2, "line-height", "4"], [1, "col-md-7", 2, "place-self", "center"], ["class", "contenttext shapeFontSize  font-weight-bold text-capitalize", 4, "ngIf"], ["class", "contenttext shapeFontSize font-weight-bold text-capitalize", 4, "ngIf"], ["class", "contenttext shapeFontSize text-capitalize", 4, "ngIf"], ["class", "col-md-2", "style", "place-self: center;font-size: 2rem", 4, "ngIf"], ["class", "col-md-2", "title", "Undo", "style", "place-self: center;font-size: 2rem", 4, "ngIf"], [1, "card"], [1, "col-md-12", "d-flex", "justify-content-between", 3, "mouseenter", "mouseleave"], [1, "d-flex", "justify-content-start", "shapeFontSize"], [1, "cursor", "d-flex", "justify-content-end", "shapeFontSize", 3, "click"], [1, "contenttext", "shapeFontSize", "font-weight-bold", "text-capitalize"], [1, "contenttext", "shapeFontSize", "text-capitalize"], [1, "col-md-2", 2, "place-self", "center", "font-size", "2rem"], ["title", "Delete", "aria-hidden", "true", 1, "fa", "fa-trash-o", 2, "cursor", "pointer", 3, "click"], ["title", "Undo", 1, "col-md-2", 2, "place-self", "center", "font-size", "2rem"], ["aria-hidden", "true", 1, "fa", "fa-undo", 2, "cursor", "pointer", 3, "click"], [1, "col-md-12", "text-center"]], template: function RemoveAnnatationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, RemoveAnnatationComponent_ng_container_1_Template, 3, 4, "ng-container", 1)(2, RemoveAnnatationComponent_ng_container_2_Template, 7, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.items == null ? null : ctx.items.length) !== 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.items == null ? null : ctx.items.length) === 0);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, PipesModule, i2.SortingPipe], styles: [".shapeFontSize[_ngcontent-%COMP%]{\n  font-size: 1rem !important;\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RemoveAnnatationComponent, [{
        type: Component,
        args: [{ selector: 'app-remove-annatation', standalone: true, imports: [CommonModule, PipesModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"container-fluid\">\n    <ng-container *ngIf=\"items?.length !== 0\">\n        <div class=\"\" *ngFor=\"let item of items | sortPipe : items; let i = index\">\n\n            <div class=\"card\" *ngIf=\"i == 0\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12  d-flex justify-content-between\" (mouseenter)=\"hoverRemoveItem(item)\" (mouseleave)=\"mouseLeaveremoveItem(item)\">\n<!--                            <div class=\" d-flex justify-content-between\">-->\n<!--                                <div class=\"col-md-12\" *ngIf=\"i == 0\">-->\n                                    <p class=\"d-flex justify-content-start shapeFontSize\">Page No: {{item.pageNumber}}</p>\n                                    <a class=\"cursor d-flex justify-content-end shapeFontSize\" (click)=\"openDelete()\">Clear All</a>\n<!--                                </div>-->\n<!--                            </div>-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"card mt-2\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\" (mouseenter)=\"hoverRemoveItem(item)\" (mouseleave)=\"mouseLeaveremoveItem(item)\">\n                            <div class=\"row\">\n                                <!--                            <div class=\"col-md-12\" *ngIf=\"i == 0\">-->\n                                <!--                                <p>Page No: {{item.pageNumber}}</p>-->\n                                <!--                            </div>-->\n                                <div class=\"col-md-3\">\n                                    <span style=\"line-height: 4\"\n                                          class=\"multichoice-option3\">{{i + 1}}</span>\n\n<!--                                    <p>No: {{i + 1}}</p>-->\n                                </div>\n                                <div class=\"col-md-7 \" style=\"place-self: center;\">\n                                    <p class=\"contenttext shapeFontSize  font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'rect'\">Extract</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'rectMask'\">Erase</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'text'\">Text</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'highlight'\">Highlight</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'path'\">Drawing</p>\n                                    <p class=\"contenttext shapeFontSize text-capitalize\" *ngIf=\"!['rect' ,'path' , 'highlight' , 'text' , 'rectMask'].includes(item.shape)\">{{item.shape}}</p>\n                                </div>\n                                <div class=\"col-md-2\" *ngIf=\"!item.isDelete\" style=\"place-self: center;font-size: 2rem\">\n                                    <i class=\"fa fa-trash-o\" title=\"Delete\" aria-hidden=\"true\" (click)=\"deleteItem(item)\"\n                                       style=\"cursor: pointer\"></i>\n                                </div>\n                                <div class=\"col-md-2\" title=\"Undo\" *ngIf=\"item.isDelete\" style=\"place-self: center;font-size: 2rem\">\n                                    <i class=\"fa fa-undo\" aria-hidden=\"true\" style=\"cursor: pointer\" (click)=\"undoDeleteItem(item)\"></i>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"items?.length === 0\">\n\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                    <p><em>No annotation found in this page</em></p>\n                </div>\n            </div>\n        </div>\n\n    </ng-container>\n</div>\n", styles: ["\n.shapeFontSize{\n  font-size: 1rem !important;\n}\n"] }]
    }], () => [], { items: [{
            type: Input
        }], removeItem: [{
            type: Output
        }], hoverremoveItem: [{
            type: Output
        }], hoverleaveremoveItem: [{
            type: Output
        }], undoDeleteAnnatation: [{
            type: Output
        }], openDeleteDialog: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RemoveAnnatationComponent, { className: "RemoveAnnatationComponent" }); })();
//# sourceMappingURL=remove-annatation.component.js.map