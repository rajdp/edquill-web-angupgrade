import {HostListener, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {DeviceDetectorService} from 'ngx-device-detector';
import {environment} from '../environments/environment';

export enum Environment {
    Prod = 'prod',
    ProdUat = 'prodUat',
    DevUat = 'devUat',
    Dev = 'dev',
    Local = 'local',
}

export class EnvProperties {
    env: Environment;
    apiHost: string;
    webHost: string;
    imgUrl: string;
    showStudent: boolean;
    version: string;
    envURL: string;
}

@Injectable({providedIn: 'root'})

export class EnvironmentService {
    public envProperties = new EnvProperties();
    public basePath: string;
    public mobileView = window.innerWidth <= 1100;
    public envRecieved = new BehaviorSubject<boolean>(false);

    get env(): Environment {
        return this.envProperties.env;
    }

    get apiHost(): string {
        return this.envProperties.apiHost !== '' && this.envProperties.apiHost !== 'undefined'
        && this.envProperties.apiHost !== undefined ? this.envProperties.apiHost : this.basePath;
    }

    get imgUrl(): string {
        return this.envProperties.imgUrl;
    }

    get webhost(): string {
        return this.envProperties.webHost;
    }

    public deviceType() {
        return window.innerWidth <= 1180 || this.deviceService.isTablet();
    }

    get version(): string {
        return this.envProperties.version;
    }

    constructor(private http: HttpClient, private deviceService: DeviceDetectorService) {
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

    init(): Promise<void> {
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
            const response: any = await this.post('', data).toPromise();
            if (response.IsSuccess) {
                await this.assignEnvValue(response.ResponseObject, envType);
            }
        } catch (err) {
            await err;
        }
    }

    post(url, reqBody, option?: {}) {
        const json = JSON.stringify(reqBody);
        return this.http.post(url, json);
    }

    private checkingHostType(): void {
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

    @HostListener('window:resize', ['$event'])
    onResize(event?) {
        this.mobileView = event.target.innerWidth <= 1100;
    }
}

