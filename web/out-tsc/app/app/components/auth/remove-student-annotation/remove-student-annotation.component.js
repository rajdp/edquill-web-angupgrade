import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../../shared/pipes/sorting/sorting.pipe";
const _c0 = () => ["rect", "path", "highlight", "text", "rectMask"];
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div", 9)(4, "p", 10);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 11);
    i0.ɵɵlistener("click", function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openDelete()); });
    i0.ɵɵtext(7, "Clear All");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Page No: ", item_r3.pageNumber, "");
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, "Extract");
    i0.ɵɵelementEnd();
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, "Erase");
    i0.ɵɵelementEnd();
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, "Text");
    i0.ɵɵelementEnd();
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, "Highlight");
    i0.ɵɵelementEnd();
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1, "Drawing");
    i0.ɵɵelementEnd();
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.shape);
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "i", 26);
    i0.ɵɵlistener("click", function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_div_15_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r5); const item_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.deleteItem(item_r3)); });
    i0.ɵɵelementEnd()();
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "i", 28);
    i0.ɵɵlistener("click", function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_div_16_Template_i_click_1_listener() { i0.ɵɵrestoreView(_r6); const item_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.undoDeleteItem(item_r3)); });
    i0.ɵɵelementEnd()();
} }
function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 8)(3, "div", 14);
    i0.ɵɵlistener("click", function RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r4); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.hoverRemoveItem(item_r3)); });
    i0.ɵɵelementStart(4, "div", 8)(5, "div", 15)(6, "span", 16);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 17);
    i0.ɵɵtemplate(9, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_9_Template, 2, 0, "p", 18)(10, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_10_Template, 2, 0, "p", 19)(11, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_11_Template, 2, 0, "p", 19)(12, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_12_Template, 2, 0, "p", 19)(13, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_13_Template, 2, 0, "p", 19)(14, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_p_14_Template, 2, 1, "p", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_div_15_Template, 2, 0, "div", 21)(16, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_div_16_Template, 2, 0, "div", 22);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const item_r3 = ctx_r6.$implicit;
    const i_r8 = ctx_r6.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", item_r3.userSelect ? "selectedClass" : "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i_r8 + 1);
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
function RemoveStudentAnnotationComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_1_Template, 8, 1, "div", 4)(2, RemoveStudentAnnotationComponent_ng_container_1_div_1_div_2_Template, 17, 11, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r8 = ctx.index;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", i_r8 == 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", item_r3.isTeacherCorrection);
} }
function RemoveStudentAnnotationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RemoveStudentAnnotationComponent_ng_container_1_div_1_Template, 3, 2, "div", 2);
    i0.ɵɵpipe(2, "sortPipe");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 1, ctx_r1.items, ctx_r1.items));
} }
function RemoveStudentAnnotationComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7)(2, "div", 8)(3, "div", 29)(4, "p")(5, "em");
    i0.ɵɵtext(6, "No annotation found in this page");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementContainerEnd();
} }
export class RemoveStudentAnnotationComponent {
    constructor() {
        this.removeItem = new EventEmitter();
        this.hoverremoveItem = new EventEmitter();
        this.hoverleaveremoveItem = new EventEmitter();
        this.undoDeleteAnnatation = new EventEmitter();
        this.openDeleteDialog = new EventEmitter();
        console.log(this.items, 'in onlint');
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        console.log(this.items, 'itemmss');
        // this.items = this.items.sort((a, b) =>
        //     a.rect.y2 -  b.rect.y2
        //
        // );
    }
    deleteItem(item) {
        console.log(item, 'item');
        this.removeItem.emit(item);
    }
    openDelete() {
        this.openDeleteDialog.emit(true);
    }
    undoDeleteItem(item) {
        console.log(item, 'item');
        this.undoDeleteAnnatation.emit(item);
    }
    hoverRemoveItem(item) {
        console.log(item, 'itemmmmmmm');
        item.userSelect = !item.userSelect;
        console.log(this.items, 'itemmss');
        if (item.userSelect) {
            this.hoverremoveItem.emit(item);
        }
        else {
            this.hoverleaveremoveItem.emit(item);
        }
    }
    mouseLeaveremoveItem(item) {
        this.hoverleaveremoveItem.emit(item);
    }
    static { this.ɵfac = function RemoveStudentAnnotationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RemoveStudentAnnotationComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RemoveStudentAnnotationComponent, selectors: [["app-remove-student-annotation"]], inputs: { items: "items" }, outputs: { removeItem: "removeItem", hoverremoveItem: "hoverremoveItem", hoverleaveremoveItem: "hoverleaveremoveItem", undoDeleteAnnatation: "undoDeleteAnnatation", openDeleteDialog: "openDeleteDialog" }, decls: 3, vars: 2, consts: [[1, "container-fluid"], [4, "ngIf"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["class", "card", 4, "ngIf"], ["class", "card mt-2", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "row"], [1, "col-md-12", "d-flex", "justify-content-between"], [1, "d-flex", "justify-content-start", "shapeFontSize"], [1, "cursor", "d-flex", "justify-content-end", "shapeFontSize", 3, "click"], [1, "card", "mt-2"], [1, "card-body", 3, "ngClass"], [1, "col-md-12", 3, "click"], [1, "col-md-4", "w-25"], [1, "multichoice-option3", 2, "line-height", "4"], [1, "col-md-6", "w-50", 2, "place-self", "center"], ["class", "contenttext shapeFontSize  font-weight-bold text-capitalize", 4, "ngIf"], ["class", "contenttext shapeFontSize font-weight-bold text-capitalize", 4, "ngIf"], ["class", "contenttext shapeFontSize text-capitalize", 4, "ngIf"], ["class", "col-md-2 w-25", "style", "place-self: center;font-size: 2rem", 4, "ngIf"], ["class", "col-md-2 w-25", "title", "Undo", "style", "place-self: center;font-size: 2rem", 4, "ngIf"], [1, "contenttext", "shapeFontSize", "font-weight-bold", "text-capitalize"], [1, "contenttext", "shapeFontSize", "text-capitalize"], [1, "col-md-2", "w-25", 2, "place-self", "center", "font-size", "2rem"], ["title", "Delete", "aria-hidden", "true", 1, "fa", "fa-trash-o", 2, "cursor", "pointer", 3, "click"], ["title", "Undo", 1, "col-md-2", "w-25", 2, "place-self", "center", "font-size", "2rem"], ["aria-hidden", "true", 1, "fa", "fa-undo", 2, "cursor", "pointer", 3, "click"], [1, "col-md-12", "text-center"]], template: function RemoveStudentAnnotationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, RemoveStudentAnnotationComponent_ng_container_1_Template, 3, 4, "ng-container", 1)(2, RemoveStudentAnnotationComponent_ng_container_2_Template, 7, 0, "ng-container", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.items == null ? null : ctx.items.length) !== 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.items == null ? null : ctx.items.length) === 0);
        } }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.SortingPipe], styles: [".shapeFontSize[_ngcontent-%COMP%]{\n  font-size: 1rem !important;\n}\n.selectedClass[_ngcontent-%COMP%]{\n  border-color: #7F3486;\n  border-style: ridge;\n  border-width: 2px;\n  border-radius: 10px;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RemoveStudentAnnotationComponent, [{
        type: Component,
        args: [{ selector: 'app-remove-student-annotation', template: "<div class=\"container-fluid\">\n    <ng-container *ngIf=\"items?.length !== 0\">\n        <div class=\"\" *ngFor=\"let item of items | sortPipe : items; let i = index\">\n\n            <div class=\"card\" *ngIf=\"i == 0\">\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12  d-flex justify-content-between\" >\n                            <p class=\"d-flex justify-content-start shapeFontSize\">Page No: {{item.pageNumber}}</p>\n                            <a class=\"cursor d-flex justify-content-end shapeFontSize\" (click)=\"openDelete()\">Clear All</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div  *ngIf=\"item.isTeacherCorrection\" class=\"card mt-2\">\n                <div class=\"card-body\" [ngClass]=\"item.userSelect ? 'selectedClass': ''\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\" (click)=\"hoverRemoveItem(item)\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4 w-25\">\n                                    <span style=\"line-height: 4\"\n                                          class=\"multichoice-option3\">{{i + 1}}</span>\n                                </div>\n                                <div class=\"col-md-6 w-50\" style=\"place-self: center;\">\n                                    <p class=\"contenttext shapeFontSize  font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'rect'\">Extract</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'rectMask'\">Erase</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'text'\">Text</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'highlight'\">Highlight</p>\n                                    <p class=\"contenttext shapeFontSize font-weight-bold text-capitalize\" *ngIf=\"item.shape == 'path'\">Drawing</p>\n                                    <p class=\"contenttext shapeFontSize text-capitalize\" *ngIf=\"!['rect' ,'path' , 'highlight' , 'text' , 'rectMask'].includes(item.shape)\">{{item.shape}}</p>\n                                </div>\n                                <div class=\"col-md-2 w-25\" *ngIf=\"!item.isDelete\" style=\"place-self: center;font-size: 2rem\">\n                                    <i class=\"fa fa-trash-o\" title=\"Delete\" aria-hidden=\"true\" (click)=\"deleteItem(item)\"\n                                       style=\"cursor: pointer\"></i>\n                                </div>\n                                <div class=\"col-md-2 w-25\" title=\"Undo\" *ngIf=\"item.isDelete\" style=\"place-self: center;font-size: 2rem\">\n                                    <i class=\"fa fa-undo\" aria-hidden=\"true\" style=\"cursor: pointer\" (click)=\"undoDeleteItem(item)\"></i>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </ng-container>\n    <ng-container *ngIf=\"items?.length === 0\">\n\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                    <p><em>No annotation found in this page</em></p>\n                </div>\n            </div>\n        </div>\n\n    </ng-container>\n</div>\n", styles: ["\n.shapeFontSize{\n  font-size: 1rem !important;\n}\n.selectedClass{\n  border-color: #7F3486;\n  border-style: ridge;\n  border-width: 2px;\n  border-radius: 10px;\n}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RemoveStudentAnnotationComponent, { className: "RemoveStudentAnnotationComponent" }); })();
//# sourceMappingURL=remove-student-annotation.component.js.map