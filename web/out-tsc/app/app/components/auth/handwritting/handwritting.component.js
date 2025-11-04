import { Component, ViewChild, ElementRef } from '@angular/core';
import * as iink from 'iink-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
const _c0 = ["tref"];
const _c1 = ["mref"];
const _c2 = ["dref"];
export class HandwrittingComponent {
    constructor(sanitized) {
        this.sanitized = sanitized;
    }
    ngAfterViewInit() {
        const mathEditorElement = document.getElementById('mathEditor');
        const textEditorElement = document.getElementById('textEditor');
        // const resultElement = document.getElementById('result');
        // const undoElement = document.getElementById('undo');
        // const redoElement = document.getElementById('redo');
        // const clearElement = document.getElementById('clear');
        // const convertElement = document.getElementById('convert');
        // const convertElement = document.getElementById('convert');
        mathEditorElement.addEventListener('mouseup', (event) => {
            // console.log("india");
            console.log(event);
            // console.log(this.mathEditor.pointerDown());
            // console.log(this.mathEditor.pointerUp());
            // console.log(this.mathEditor.pointerMove());
            // convertElement.click();
        });
        textEditorElement.addEventListener('mouseup', (event) => {
            // console.log("india");
            console.log(event);
            // console.log(this.mathEditor.pointerDown());
            // console.log(this.mathEditor.pointerUp());
            // console.log(this.mathEditor.pointerMove());
            // convertElement.click();
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
        const drawingConfiguration = {
            recognitionParams: {
                type: 'DIAGRAM',
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
        this.diagramEditor = iink.register(this.domDiagramEditor.nativeElement, drawingConfiguration);
        // this.mathEditor.import
        let b = '{\n' +
            '    "type": "Math",\n' +
            '        "expressions": [ {\n' +
            '      "type": "+",\n' +
            '      "id": "math/116",\n' +
            '      "items": [ {\n' +
            '        "type": "glyph",\n' +
            '        "timestamp": "2021-04-12 11:24:51.035000",\n' +
            '        "label": "+",\n' +
            '        "bounding-box": {\n' +
            '          "x": 82.3185959,\n' +
            '          "y": 50.5279579,\n' +
            '          "width": 11.2659531,\n' +
            '          "height": 11.2784424\n' +
            '        },\n' +
            '        "id": "00000d0001000700ff00"\n' +
            '      } ],\n' +
            '      "operands": [ {\n' +
            '        "type": "superscript",\n' +
            '        "id": "math/91",\n' +
            '        "operands": [ {\n' +
            '          "type": "symbol",\n' +
            '          "id": "math/64",\n' +
            '          "label": "a",\n' +
            '          "items": [ {\n' +
            '            "type": "glyph",\n' +
            '            "timestamp": "2021-04-12 11:24:47.239000",\n' +
            '            "label": "a",\n' +
            '            "bounding-box": {\n' +
            '              "x": 61.9124985,\n' +
            '              "y": 52.5638237,\n' +
            '              "width": 8.80542755,\n' +
            '              "height": 8.66803741\n' +
            '            },\n' +
            '            "id": "00000b0001000700ff00"\n' +
            '          } ]\n' +
            '        }, {\n' +
            '          "type": "number",\n' +
            '          "id": "math/90",\n' +
            '          "label": "2",\n' +
            '          "value": 2,\n' +
            '          "items": [ {\n' +
            '            "type": "glyph",\n' +
            '            "timestamp": "2021-04-12 11:24:49.552000",\n' +
            '            "label": "2",\n' +
            '            "bounding-box": {\n' +
            '              "x": 72.0143814,\n' +
            '              "y": 44.2355156,\n' +
            '              "width": 5.11838531,\n' +
            '              "height": 7.77875137\n' +
            '            },\n' +
            '            "id": "00000c0001000700ff00"\n' +
            '          } ]\n' +
            '        } ]\n' +
            '      }, {\n' +
            '        "type": "superscript",\n' +
            '        "id": "math/203",\n' +
            '        "operands": [ {\n' +
            '          "type": "symbol",\n' +
            '          "id": "math/184",\n' +
            '          "label": "y",\n' +
            '          "items": [ {\n' +
            '            "type": "glyph",\n' +
            '            "timestamp": "2021-04-12 11:24:53.106000",\n' +
            '            "label": "y",\n' +
            '            "bounding-box": {\n' +
            '              "x": 98.7703857,\n' +
            '              "y": 52.5638237,\n' +
            '              "width": 8.63056946,\n' +
            '              "height": 12.4025383\n' +
            '            },\n' +
            '            "id": "00000e0001000700ff00"\n' +
            '          } ]\n' +
            '        }, {\n' +
            '          "type": "number",\n' +
            '          "id": "math/202",\n' +
            '          "label": "2",\n' +
            '          "value": 2,\n' +
            '          "items": [ {\n' +
            '            "type": "glyph",\n' +
            '            "timestamp": "2021-04-12 11:24:55.099000",\n' +
            '            "label": "2",\n' +
            '            "bounding-box": {\n' +
            '              "x": 108.697411,\n' +
            '              "y": 44.2355156,\n' +
            '              "width": 5.11838531,\n' +
            '              "height": 7.77875137\n' +
            '            },\n' +
            '            "id": "00000f0001000700ff00"\n' +
            '          } ]\n' +
            '        } ]\n' +
            '      } ]\n' +
            '    } ],\n' +
            '        "id": "MainBlock",\n' +
            '        "version": "2"\n' +
            '  }';
        let a = '{\n' +
            ' "type": "Text",\n' +
            ' "label": "Tty",\n' +
            ' "words": [ {\n' +
            '   "label": "Tty",\n' +
            '   "candidates": [ "Tty", "Tity", "aty", "Xty", "Ity" ]\n' +
            '  } ],\n' +
            ' "version": "2",\n' +
            ' "id": "MainBlock"\n' +
            '}';
        console.log(a);
        // a = a.replace('\\n', '\n');
        // this.mathEditor.import_(b,"application/vnd.myscript.jiix");
        // this.textEditor.import_( a, 'application/vnd.myscript.jiix');
        // this.textEditor.import_("india", "text/plain");
    }
    ngOnDestroy() {
        this.textEditor.close();
        this.mathEditor.close();
        this.diagramEditor.close();
    }
    convertHW(type) {
        let a = '';
        if (type == 'text') {
            a = this.textEditor.export_();
        }
        else if (type == 'math') {
            //  a = this.mathEditor.export_('application/vnd.myscript.jiix');
            a = this.mathEditor.export_();
        }
        else if (type == 'diagram') {
            //  a = this.mathEditor.export_('application/vnd.myscript.jiix');
            a = this.mathEditor.export_();
        }
        console.log(a);
    }
    convert(type) {
        let a = '';
        if (type == 'text') {
            a = this.textEditor.convert();
        }
        else if (type == 'math') {
            a = this.mathEditor.convert();
        }
        else if (type == 'diagram') {
            a = this.diagramEditor.convert();
        }
        console.log(a);
    }
    static { this.ɵfac = function HandwrittingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HandwrittingComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HandwrittingComponent, selectors: [["app-handwritting"]], viewQuery: function HandwrittingComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, ElementRef);
            i0.ɵɵviewQuery(_c1, 5, ElementRef);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domTextEditor = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domMathEditor = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.domDiagramEditor = _t.first);
        } }, decls: 19, vars: 0, consts: [["tref", ""], ["mref", ""], ["dref", ""], [1, "container"], ["id", "convertText", 1, "classic-btn", 3, "click"], [1, "classic-btn", 3, "click"], ["id", "textEditor", 1, "row", 2, "height", "500px", "border", "1px solid red", "margin-top", "1rem"], ["id", "convertMath", 1, "classic-btn", 3, "click"], ["id", "mathEditor", 1, "row", 2, "height", "500px", "border", "1px solid greenyellow", "margin-top", "1rem"], ["id", "convertDiagram", 1, "classic-btn", 3, "click"], ["id", "diagramEditor", 1, "row", 2, "height", "500px", "border", "1px solid blueviolet", "margin-top", "1rem"]], template: function HandwrittingComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 3)(1, "button", 4);
            i0.ɵɵlistener("click", function HandwrittingComponent_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convert("text")); });
            i0.ɵɵtext(2, "ConvertText");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 5);
            i0.ɵɵlistener("click", function HandwrittingComponent_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convertHW("text")); });
            i0.ɵɵtext(4, "Converthandwritingtext");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "div", 6, 0);
            i0.ɵɵelementStart(7, "button", 7);
            i0.ɵɵlistener("click", function HandwrittingComponent_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convert("math")); });
            i0.ɵɵtext(8, "ConvertMath");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵlistener("click", function HandwrittingComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convertHW("math")); });
            i0.ɵɵtext(10, "ConverthandwritingMath");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "div", 8, 1);
            i0.ɵɵelementStart(13, "button", 9);
            i0.ɵɵlistener("click", function HandwrittingComponent_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convert("diagram")); });
            i0.ɵɵtext(14, "ConvertDiagram");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "button", 5);
            i0.ɵɵlistener("click", function HandwrittingComponent_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.convertHW("diagram")); });
            i0.ɵɵtext(16, "ConverthandwritingDiagram");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "div", 10, 2);
            i0.ɵɵelementEnd();
        } }, styles: ["#textEditor[_ngcontent-%COMP%]   #mathEditor[_ngcontent-%COMP%]   #freeTextEditor[_ngcontent-%COMP%]  {\n  margin: auto;\n  min-width: 500px;\n  max-width: 500px;\n  min-height: 500px;\n  max-height: 500px;\n  border: 1px lightgrey solid;\n}\n\n.smartguide[_ngcontent-%COMP%]   smartguide-in[_ngcontent-%COMP%] {\n  display: none !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HandwrittingComponent, [{
        type: Component,
        args: [{ selector: 'app-handwritting', template: "<div class=\"container\">\n    <button class=\"classic-btn\" id=\"convertText\" (click)=\"convert('text');\" >ConvertText</button>\n    <button class=\"classic-btn\"  (click)=\"convertHW('text');\" >Converthandwritingtext</button>\n    <div style=\"height: 500px; border: 1px solid red; margin-top: 1rem;\" class=\"row\" id=\"textEditor\" #tref ></div>\n\n    <button class=\"classic-btn\" id=\"convertMath\" (click)=\"convert('math');\" >ConvertMath</button>\n    <button class=\"classic-btn\"  (click)=\"convertHW('math');\" >ConverthandwritingMath</button>\n    <div style=\"height: 500px; border: 1px solid greenyellow; margin-top: 1rem;\"class=\"row\" id=\"mathEditor\" #mref ></div>\n\n\n    <button class=\"classic-btn\" id=\"convertDiagram\" (click)=\"convert('diagram');\" >ConvertDiagram</button>\n    <button class=\"classic-btn\"  (click)=\"convertHW('diagram');\" >ConverthandwritingDiagram</button>\n    <div style=\"height: 500px; border: 1px solid blueviolet; margin-top: 1rem;\"class=\"row\" id=\"diagramEditor\" #dref ></div>\n\n</div>\n\n\n\n\n\n\n<!--ristacc@gmail.com') OR 1 = 1 &#45;&#45; ]-->\n", styles: ["\n#textEditor #mathEditor #freeTextEditor  {\n  margin: auto;\n  min-width: 500px;\n  max-width: 500px;\n  min-height: 500px;\n  max-height: 500px;\n  border: 1px lightgrey solid;\n}\n\n.smartguide smartguide-in {\n  display: none !important;\n}\n"] }]
    }], () => [{ type: i1.DomSanitizer }], { domTextEditor: [{
            type: ViewChild,
            args: ['tref', { read: ElementRef }]
        }], domMathEditor: [{
            type: ViewChild,
            args: ['mref', { read: ElementRef }]
        }], domDiagramEditor: [{
            type: ViewChild,
            args: ['dref', { read: ElementRef }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HandwrittingComponent, { className: "HandwrittingComponent" }); })();
//# sourceMappingURL=handwritting.component.js.map