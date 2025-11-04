import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../../environment.service";
export class ConfigurationService {
    constructor(envService) {
        this.envService = envService;
        this.apiHost = environment.apiHost;
        this.webHost = environment.webHost;
        this.imgUrl = environment.imgUrl;
        this.studCheck = environment.showStudent;
        this.floatFormat = '0,0.000';
        this.percentFormat = '0.000%';
        this.intFormat = '0,0';
        this.webhost = this.webHost;
        this.imgurl = this.imgUrl;
        this.apihost = this.apiHost;
        // this.paytmTranscationUrl = this.paytmUrl;
    }
    getStudentPermissoin() {
        return this.studCheck;
    }
    getHost() {
        return this.envService.apiHost;
    }
    getwebHost() {
        return this.envService.webhost;
    }
    getimgUrl() {
        return this.envService.imgUrl;
    }
    static { this.ɵfac = function ConfigurationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfigurationService)(i0.ɵɵinject(i1.EnvironmentService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfigurationService, factory: ConfigurationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigurationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.EnvironmentService }], null); })();
//# sourceMappingURL=configuration.service.js.map