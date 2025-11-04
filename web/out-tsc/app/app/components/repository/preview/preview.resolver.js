import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../shared/service/auth.service";
import * as i2 from "../../../shared/service/student.service";
import * as i3 from "../../../shared/service/creator.service";
export class PreviewResolver {
    constructor(auth, student, creator) {
        this.auth = auth;
        this.student = student;
        this.creator = creator;
        console.log('constructor');
    }
    resolve(route, state) {
        this.getData = JSON.parse(this.auth.getSessionData('editor'));
        const data = {
            platform: 'web',
            role_id: this.auth.getRoleId(),
            user_id: this.auth.getUserId(),
            school_id: this.auth.getSessionData('school_id'),
            content_id: this.getData.content_id,
            content_format: this.getData.content_format,
            content_type: this.getData.content_type,
        };
        try {
            console.log(this.creator?.repositoryDetail(data), 'preview call');
            return this.creator?.repositoryDetail(data);
        }
        catch (e) {
            console.log(e, 'e in resol');
        }
    }
    static { this.ɵfac = function PreviewResolver_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PreviewResolver)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.StudentService), i0.ɵɵinject(i3.CreatorService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PreviewResolver, factory: PreviewResolver.ɵfac }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PreviewResolver, [{
        type: Injectable
    }], () => [{ type: i1.AuthService }, { type: i2.StudentService }, { type: i3.CreatorService }], null); })();
//# sourceMappingURL=preview.resolver.js.map