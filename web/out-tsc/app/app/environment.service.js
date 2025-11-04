import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-device-detector";
export var Environment;
(function (Environment) {
    Environment["Prod"] = "prod";
    Environment["ProdUat"] = "prodUat";
    Environment["DevUat"] = "devUat";
    Environment["Dev"] = "dev";
    Environment["Local"] = "local";
})(Environment || (Environment = {}));
export class EnvProperties {
}
export class EnvironmentService {
    get env() {
        return this.envProperties.env;
    }
    get apiHost() {
        return this.envProperties.apiHost !== '' && this.envProperties.apiHost !== 'undefined'
            && this.envProperties.apiHost !== undefined ? this.envProperties.apiHost : this.basePath;
    }
    get imgUrl() {
        return this.envProperties.imgUrl;
    }
    get webhost() {
        return this.envProperties.webHost;
    }
    deviceType() {
        return window.innerWidth <= 1180 || this.deviceService.isTablet();
    }
    get version() {
        return this.envProperties.version;
    }
    constructor(http, deviceService) {
        this.http = http;
        this.deviceService = deviceService;
        this.envProperties = new EnvProperties();
        this.mobileView = window.innerWidth <= 1100;
        this.envRecieved = new BehaviorSubject(false);
        console.log('[ENV] Initializing EnvironmentService');
        // Load configuration from environment file
        this.envProperties.apiHost = environment.apiHost;
        this.envProperties.webHost = environment.webHost;
        this.envProperties.imgUrl = environment.imgUrl;
        this.envProperties.showStudent = environment.showStudent;
        this.envProperties.version = environment.version;
        this.envProperties.env = environment.production ? Environment.Prod : Environment.Local;
        console.log('[ENV] Environment loaded:', {
            env: environment.envName || 'DEFAULT',
            apiHost: this.envProperties.apiHost,
            webHost: this.envProperties.webHost
        });
        this.envRecieved.asObservable();
        this.envRecieved.next(true); // Set to true immediately since we're using environment files
    }
    init() {
        return new Promise(resolve => {
            // No need to call checkingHostType anymore since we use environment files
            console.log('[ENV] Init complete - using environment file configuration');
            resolve();
        });
    }
    get prefixName() {
        const hostname = window && window.location && window.location.hostname;
        return ['localhost', 'staging', 'dev', 'test'].indexOf(hostname.split('.')[0]) > -1 ? 'edquill_web-' : (hostname.split('.')[0] + '_web-');
    }
    async getBaseUrlApi(type, envType = '') {
        const data = {
            type
        };
        try {
            const response = await this.post('', data).toPromise();
            if (response.IsSuccess) {
                await this.assignEnvValue(response.ResponseObject, envType);
            }
        }
        catch (err) {
            await err;
        }
    }
    post(url, reqBody, option) {
        const json = JSON.stringify(reqBody);
        return this.http.post(url, json);
    }
    checkingHostType() {
        // Method kept for backward compatibility but no longer used
        // Environment configuration is now loaded from environment files in constructor
        console.log('[ENV] checkingHostType - using environment file configuration');
    }
    assignEnvValue(res, type) {
        // LEGACY METHOD - No longer needed with proper environment file configuration
        // Environment values are now set from environment.ts files based on build configuration
        // Keeping method for backward compatibility but not using remote API override
        console.log('[ENV] assignEnvValue called but using environment file configuration');
        this.envRecieved.next(true);
    }
    onResize(event) {
        this.mobileView = event.target.innerWidth <= 1100;
    }
    static { this.ɵfac = function EnvironmentService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || EnvironmentService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.DeviceDetectorService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: EnvironmentService, factory: EnvironmentService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnvironmentService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.HttpClient }, { type: i2.DeviceDetectorService }], { onResize: [{
            type: HostListener,
            args: ['window:resize', ['$event']]
        }] }); })();
//# sourceMappingURL=environment.service.js.map