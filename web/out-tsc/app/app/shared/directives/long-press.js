import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class LongPress {
    constructor() {
        this.onLongPress = new EventEmitter();
        this.onLongPressing = new EventEmitter();
        this.mouseDown = new EventEmitter();
        this.mouseUp = new EventEmitter();
    }
    get press() { return this.pressing; }
    get longPress() { return this.longPressing; }
    onMouseDown(event) {
        this.pressing = true;
        this.longPressing = false;
        this.mouseDown.emit(event);
        this.timeout = setTimeout(() => {
            this.longPressing = true;
            this.onLongPress.emit(event);
            // this.interval = setInterval(() => {
            //     this.onLongPressing.emit(event);
            // }, 50);
        }, 500);
    }
    endPress(event) {
        clearTimeout(this.timeout);
        this.mouseUp.emit(event);
        this.longPressing = false;
        this.pressing = false;
    }
    static { this.ɵfac = function LongPress_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LongPress)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LongPress, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPress_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("touchstart", function LongPress_touchstart_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mousedown", function LongPress_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("touchend", function LongPress_touchend_HostBindingHandler($event) { return ctx.endPress($event); })("mouseup", function LongPress_mouseup_HostBindingHandler($event) { return ctx.endPress($event); })("mouseleave", function LongPress_mouseleave_HostBindingHandler($event) { return ctx.endPress($event); });
        } if (rf & 2) {
            i0.ɵɵclassProp("press", ctx.press)("longpress", ctx.longPress);
        } }, outputs: { onLongPress: "onLongPress", onLongPressing: "onLongPressing", mouseDown: "mouseDown", mouseUp: "mouseUp" }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LongPress, [{
        type: Directive,
        args: [{
                selector: '[long-press]',
                standalone: true
            }]
    }], null, { onLongPress: [{
            type: Output
        }], onLongPressing: [{
            type: Output
        }], mouseDown: [{
            type: Output
        }], mouseUp: [{
            type: Output
        }], press: [{
            type: HostBinding,
            args: ['class.press']
        }], longPress: [{
            type: HostBinding,
            args: ['class.longpress']
        }], onMouseDown: [{
            type: HostListener,
            args: ['touchstart', ['$event']]
        }, {
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], endPress: [{
            type: HostListener,
            args: ['touchend', ['$event']]
        }, {
            type: HostListener,
            args: ['mouseup', ['$event']]
        }, {
            type: HostListener,
            args: ['mouseleave', ['$event']]
        }] }); })();
//# sourceMappingURL=long-press.js.map