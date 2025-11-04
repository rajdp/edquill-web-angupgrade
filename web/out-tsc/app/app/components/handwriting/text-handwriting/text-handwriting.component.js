import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import * as iink from 'iink-js';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/common-data.service";
const _c0 = ["tref"];
export class TextHandwritingComponent {
    constructor(commondata) {
        this.commondata = commondata;
        this.emitTextHandwriting = new EventEmitter();
    }
    ngAfterViewInit() {
        this.commondata.showLoader(false);
        const textEditorElement = document.getElementById('textEditor');
        const convertElement = document.getElementById('convert');
        textEditorElement.addEventListener('mouseup', (event) => {
            // console.log(event);
            convertElement.click();
        });
        textEditorElement.addEventListener('touchend', (event) => {
            convertElement.click();
        });
        const textConfiguration = {
            recognitionParams: {
                type: 'TEXT',
                protocol: 'WEBSOCKET',
                apiVersion: 'V4',
                server: {
                    scheme: 'https',
                    host: 'webdemoapi.myscript.com',
                    applicationKey: 'd6a78d44-82c3-4612-815b-07949e1888eb',
                    hmacKey: '5cb563c4-8079-4487-8be4-d12a9af40bbd',
                    websocket: {
                        pingEnabled: false,
                        autoReconnect: true
                    }
                },
            }
        };
        this.textEditor = iink.register(this.domTextEditor.nativeElement, textConfiguration);
        console.log(this.editorTextHandwritingValue, 'dddddrrrttt');
        this.textEditor.import_(this.editorTextHandwritingValue['text/plain'], "text/plain");
    }
    ngOnDestroy() {
        this.textEditor.close();
    }
    convertHW() {
        let a = '';
        a = this.textEditor.export_();
        console.log(a);
    }
    async convert() {
        let a = '';
        let b = '';
        ///we can remove the below code
        a = this.textEditor.convert();
        console.log(a, 'aaaa');
        // closed
        b = await this.textEditor.convert();
        console.log(b, 'bbb');
        //method1
        this.emitTextHandwriting.emit(b.res.exports);
        ///previous code need to  remove
        // a.then( (v) => {
        //         b = v.res.export;
        //         this.exportValue = v.res.exports;
        //         return v.res.exports;
        //       })
        //       .catch( (error) => {
        //         return error;
        //       })
        // setTimeout(() => {
        //     this.emitTextHandwriting.emit(this.exportValue);
        // } ,2000);
    }
    static { this.ɵfac = function TextHandwritingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TextHandwritingComponent)(i0.ɵɵdirectiveInject(i1.CommonDataService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextHandwritingComponent, selectors: [["app-text-handwriting"]], viewQuery: function TextHandwritingComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domTextEditor = _t.first);
        } }, inputs: { editorTextHandwritingValue: "editorTextHandwritingValue" }, outputs: { emitTextHandwriting: "emitTextHandwriting" }, decls: 9, vars: 0, consts: [["tref", ""], [1, "container"], [1, "row"], [1, "col-12", "text-right"], ["id", "convert", 1, "btn", "btn-outline-primary", "mb-2", "mr-2", 3, "click"], [1, "btn", "btn-outline-primary", "mb-2"], ["id", "textEditor", 1, "row", 2, "height", "500px", "border", "1px solid red", "margin-top", "1rem"]], template: function TextHandwritingComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
            i0.ɵɵlistener("click", function TextHandwritingComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convert()); });
            i0.ɵɵtext(4, "Convert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "button", 5);
            i0.ɵɵtext(6, "Reset");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(7, "div", 6, 0);
            i0.ɵɵelementEnd();
        } }, styles: [".smartguide[_ngcontent-%COMP%]   smartguide-in[_ngcontent-%COMP%] {\n  display: none !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextHandwritingComponent, [{
        type: Component,
        args: [{ selector: 'app-text-handwriting', template: "<div class=\"container\">\n<!--    <button class=\"classic-btn\"  (click)=\"convertHW();\" >Converthandwritingtext</button>-->\n    <div class=\"row\">\n        <div class=\"col-12 text-right\">\n            <button class=\"btn btn-outline-primary mb-2 mr-2\" id=\"convert\" (click)=\"convert();\" >Convert</button>\n            <button class=\"btn btn-outline-primary mb-2\">Reset</button>\n        </div>\n    </div>\n    <div style=\"height: 500px; border: 1px solid red; margin-top: 1rem;\" class=\"row\" id=\"textEditor\" #tref ></div>\n</div>\n\n\n\n\n\n\n<!--ristacc@gmail.com') OR 1 = 1 &#45;&#45; ]-->\n", styles: [".smartguide smartguide-in {\n  display: none !important;\n}\n"] }]
    }], () => [{ type: i1.CommonDataService }], { domTextEditor: [{
            type: ViewChild,
            args: ['tref', { read: ElementRef }]
        }], emitTextHandwriting: [{
            type: Output
        }], editorTextHandwritingValue: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TextHandwritingComponent, { className: "TextHandwritingComponent" }); })();
//# sourceMappingURL=text-handwriting.component.js.map