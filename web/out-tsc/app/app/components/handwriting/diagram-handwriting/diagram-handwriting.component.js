import { Component, ViewChild, ElementRef } from '@angular/core';
import * as iink from 'iink-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const _c0 = ["dref"];
export class DiagramHandwritingComponent {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    ngAfterViewInit() {
        const diagramEditorElement = document.getElementById('diagramEditor');
        const convertElement = document.getElementById('convert');
        diagramEditorElement.addEventListener('mouseup', (event) => {
            console.log(event);
            convertElement.click();
        });
        const diagramConfiguration = {
            recognitionParams: {
                type: 'MATH',
                protocol: 'WEBSOCKET',
                apiVersion: 'V4',
                server: {
                    scheme: 'https',
                    host: 'cloud.myscript.com',
                    applicationKey: 'd6a78d44-82c3-4612-815b-07949e1888eb',
                    hmacKey: '5cb563c4-8079-4487-8be4-d12a9af40bbd',
                }
            }
        };
        this.diagramEditor = iink.register(this.domDiagramEditor.nativeElement, diagramConfiguration);
    }
    ngOnDestroy() {
        this.diagramEditor.close();
    }
    convertHW() {
        let a = '';
        a = this.diagramEditor.export_();
        console.log(a);
    }
    convert() {
        let a = '';
        a = this.diagramEditor.convert();
        console.log(a);
    }
    static { this.ɵfac = function DiagramHandwritingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DiagramHandwritingComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DiagramHandwritingComponent, selectors: [["app-diagram-handwriting"]], viewQuery: function DiagramHandwritingComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domDiagramEditor = _t.first);
        } }, decls: 7, vars: 0, consts: [["dref", ""], [1, "container"], ["id", "convertText", 1, "classic-btn", 3, "click"], [1, "classic-btn", 3, "click"], ["id", "diagramEditor", 1, "row", 2, "height", "500px", "border", "1px solid red", "margin-top", "1rem"]], template: function DiagramHandwritingComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
            i0.ɵɵlistener("click", function DiagramHandwritingComponent_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convert()); });
            i0.ɵɵtext(2, "ConvertText");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function DiagramHandwritingComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convertHW()); });
            i0.ɵɵtext(4, "Converthandwritingtext");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "div", 4, 0);
            i0.ɵɵelementEnd();
        } }, styles: ["//\n//#textEditor[_ngcontent-%COMP%]   #mathEditor[_ngcontent-%COMP%]   #freeTextEditor[_ngcontent-%COMP%]  {\n//  margin: auto;\n//  min-width: 500px;\n//  max-width: 500px;\n//  min-height: 500px;\n//  max-height: 500px;\n//  border: 1px lightgrey solid;\n//}\n\n.smartguide[_ngcontent-%COMP%]   smartguide-in[_ngcontent-%COMP%] {\n  display: none !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DiagramHandwritingComponent, [{
        type: Component,
        args: [{ selector: 'app-diagram-handwriting', template: "<div class=\"container\">\n    <button class=\"classic-btn\" id=\"convertText\" (click)=\"convert();\" >ConvertText</button>\n    <button class=\"classic-btn\"  (click)=\"convertHW();\" >Converthandwritingtext</button>\n    <div style=\"height: 500px; border: 1px solid red; margin-top: 1rem;\" class=\"row\" id=\"diagramEditor\" #dref ></div>\n</div>\n\n\n\n\n\n\n<!--ristacc@gmail.com') OR 1 = 1 &#45;&#45; ]-->\n", styles: ["//\n//#textEditor #mathEditor #freeTextEditor  {\n//  margin: auto;\n//  min-width: 500px;\n//  max-width: 500px;\n//  min-height: 500px;\n//  max-height: 500px;\n//  border: 1px lightgrey solid;\n//}\n\n.smartguide smartguide-in {\n  display: none !important;\n}\n"] }]
    }], () => [{ type: i1.DomSanitizer }], { domDiagramEditor: [{
            type: ViewChild,
            args: ['dref', { read: ElementRef }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DiagramHandwritingComponent, { className: "DiagramHandwritingComponent" }); })();
//# sourceMappingURL=diagram-handwriting.component.js.map