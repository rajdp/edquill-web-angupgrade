import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import * as iink from 'iink-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const _c0 = ["mref"];
export class MathHandwritingComponent {
    constructor(sanitized) {
        this.sanitized = sanitized;
        this.emitMathHandwriting = new EventEmitter();
    }
    ngAfterViewInit() {
        const mathEditorElement = document.getElementById('mathEditor');
        const convertElement = document.getElementById('convert');
        // mathEditorElement.addEventListener('mouseup', (event) => {
        // console.log(event);
        // convertElement.click();
        // });
        const mathConfiguration = {
            recognitionParams: {
                type: 'MATH',
                protocol: 'WEBSOCKET',
                apiVersion: 'V4',
                server: {
                    scheme: 'https',
                    host: 'cloud.myscript.com',
                    applicationKey: 'd6a78d44-82c3-4612-815b-07949e1888eb',
                    hmacKey: '5cb563c4-8079-4487-8be4-d12a9af40bbd',
                },
                iink: {
                    math: {
                        mimeTypes: ['application/x-latex', 'application/vnd.myscript.jiix', 'application/mathml+xml']
                    },
                    export: {
                        jiix: {
                            strokes: true
                        }
                    }
                }
            }
        };
        this.mathEditor = iink.register(this.domMathEditor.nativeElement, mathConfiguration);
        this.mathEditor.import_(this.editorMathHandwritingValue['application/vnd.myscript.jiix'], "application/vnd.myscript.jiix");
    }
    ngOnDestroy() {
        this.mathEditor.close();
    }
    convertHW() {
        let a = '';
        a = this.mathEditor.export_();
        console.log(a);
    }
    convert() {
        const promiseResult = this.mathEditor.convert();
        promiseResult
            .then((value) => {
            this.exportValue = value.res.exports;
            this.emitMathHandwriting.emit(this.exportValue);
            return value.res.exports;
        })
            .catch((error) => {
            console.error('Math handwriting conversion failed', error);
            return error;
        });
    }
    static { this.ɵfac = function MathHandwritingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MathHandwritingComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MathHandwritingComponent, selectors: [["app-math-handwriting"]], viewQuery: function MathHandwritingComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domMathEditor = _t.first);
        } }, inputs: { editorMathHandwritingValue: "editorMathHandwritingValue" }, outputs: { emitMathHandwriting: "emitMathHandwriting" }, decls: 9, vars: 0, consts: [["mref", ""], [1, "container"], [1, "row"], [1, "col-12", "text-right"], ["id", "convertText", 1, "btn", "btn-outline-primary", "mb-2", "mr-2", 3, "click"], [1, "btn", "btn-outline-primary", "mb-2", 3, "click"], ["id", "textEditor", 1, "row", 2, "height", "500px", "border", "1px solid red", "margin-top", "1rem"]], template: function MathHandwritingComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
            i0.ɵɵlistener("click", function MathHandwritingComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convert()); });
            i0.ɵɵtext(4, "ConvertText");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 5);
            i0.ɵɵlistener("click", function MathHandwritingComponent_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convertHW()); });
            i0.ɵɵtext(6, "Converthandwritingtext");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(7, "div", 6, 0);
            i0.ɵɵelementEnd();
        } }, styles: ["//\n//#textEditor[_ngcontent-%COMP%]   #mathEditor[_ngcontent-%COMP%]   #freeTextEditor[_ngcontent-%COMP%]  {\n//  margin: auto;\n//  min-width: 500px;\n//  max-width: 500px;\n//  min-height: 500px;\n//  max-height: 500px;\n//  border: 1px lightgrey solid;\n//}\n\n.smartguide[_ngcontent-%COMP%]   smartguide-in[_ngcontent-%COMP%] {\n  display: none !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MathHandwritingComponent, [{
        type: Component,
        args: [{ selector: 'app-math-handwriting', template: "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 text-right\">\n            <button class=\"btn btn-outline-primary mb-2 mr-2\" id=\"convertText\" (click)=\"convert();\" >ConvertText</button>\n            <button class=\"btn btn-outline-primary mb-2\"  (click)=\"convertHW();\" >Converthandwritingtext</button>\n        </div>\n    </div>\n    <div style=\"height: 500px; border: 1px solid red; margin-top: 1rem;\" class=\"row\" id=\"textEditor\" #mref ></div>\n</div>\n\n\n\n\n\n\n<!--ristacc@gmail.com') OR 1 = 1 &#45;&#45; ]-->\n", styles: ["//\n//#textEditor #mathEditor #freeTextEditor  {\n//  margin: auto;\n//  min-width: 500px;\n//  max-width: 500px;\n//  min-height: 500px;\n//  max-height: 500px;\n//  border: 1px lightgrey solid;\n//}\n\n.smartguide smartguide-in {\n  display: none !important;\n}\n"] }]
    }], () => [{ type: i1.DomSanitizer }], { domMathEditor: [{
            type: ViewChild,
            args: ['mref', { read: ElementRef }]
        }], emitMathHandwriting: [{
            type: Output
        }], editorMathHandwritingValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MathHandwritingComponent, { className: "MathHandwritingComponent" }); })();
//# sourceMappingURL=math-handwriting.component.js.map