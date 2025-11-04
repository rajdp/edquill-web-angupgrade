import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
export class AnsweringResolver {
    constructor(auth, student) {
        this.auth = auth;
        this.student = student;
        console.log('constructor');
    }
    resolve(route, state) {
        this.getData = JSON.parse(this.auth.getSessionData('classDetails'));
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            class_id: this.getData.class_id,
            student_id: this.auth.getUserId(),
            student_content_id: this.getData.student_content_id
        };
        try {
            console.log(this.student?.questionList(data), 'sdsfd');
            return this.student?.questionList(data);
        }
        catch (e) {
            console.log(e, 'e in resol');
        }
    }
    static { this.ɵfac = function AnsweringResolver_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AnsweringResolver)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.StudentService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AnsweringResolver, factory: AnsweringResolver.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AnsweringResolver, [{
        type: Injectable
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }], null); })();
//# sourceMappingURL=answering.resolver.js.map