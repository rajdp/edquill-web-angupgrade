import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class FileDragNDropDirective {
    constructor() {
        this.filesChangeEmiter = new EventEmitter();
        //@Output() private filesInvalidEmiter : EventEmitter<File[]> = new EventEmitter();
        this.background = '#eee';
        this.borderStyle = '2px dashed';
        this.borderColor = '#696D7D';
        this.borderRadius = '5px';
    }
    onDragOver(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = 'lightgray';
        this.borderColor = 'cadetblue';
        this.borderStyle = '3px solid';
    }
    onDragLeave(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        this.borderColor = '#696D7D';
        this.borderStyle = '2px dashed';
    }
    onDrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#eee';
        this.borderColor = '#696D7D';
        this.borderStyle = '2px dashed';
        let files = evt.dataTransfer.files;
        console.log(evt, 'eve');
        let valid_files = files;
        this.setEmitData(valid_files);
    }
    setEmitData(validfiles) {
        const reader = new FileReader();
        let finalData = [];
        validfiles.forEach(async (item, index) => {
            const res = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(item);
                reader.onload = () => {
                    finalData.push({ name: item.name, type: item.type, image: reader.result, size: item.size });
                    resolve(reader.result);
                };
                reader.onerror = error => reject(error);
            });
            if (validfiles.length == finalData.length) {
                this.filesChangeEmiter.emit(finalData);
            }
        });
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    static { this.ɵfac = function FileDragNDropDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FileDragNDropDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: FileDragNDropDirective, selectors: [["", "appFileDragNDrop", ""]], hostVars: 8, hostBindings: function FileDragNDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragover", function FileDragNDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function FileDragNDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function FileDragNDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
        } if (rf & 2) {
            i0.ɵɵstyleProp("background", ctx.background)("border", ctx.borderStyle)("border-color", ctx.borderColor)("border-radius", ctx.borderRadius);
        } }, outputs: { filesChangeEmiter: "filesChangeEmiter" }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileDragNDropDirective, [{
        type: Directive,
        args: [{
                selector: '[appFileDragNDrop]',
                standalone: true
            }]
    }], () => [], { filesChangeEmiter: [{
            type: Output
        }], background: [{
            type: HostBinding,
            args: ['style.background']
        }], borderStyle: [{
            type: HostBinding,
            args: ['style.border']
        }], borderColor: [{
            type: HostBinding,
            args: ['style.border-color']
        }], borderRadius: [{
            type: HostBinding,
            args: ['style.border-radius']
        }], onDragOver: [{
            type: HostListener,
            args: ['dragover', ['$event']]
        }], onDragLeave: [{
            type: HostListener,
            args: ['dragleave', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();
//# sourceMappingURL=file-drag-n-drop.directive.js.map