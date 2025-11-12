import {HostListener, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
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
    public mobileView = false;
    public envRecieved = new BehaviorSubject<boolean>(false);
    private readonly tenantKeyIgnoredHosts = new Set(['localhost', '127.0.0.1', '0.0.0.0']);
    private readonly tenantKeyIgnoredSegments = new Set(['www']);
    private tenantKeySubject = new BehaviorSubject<string | null>(null);
    public tenantKey$: Observable<string | null> = this.tenantKeySubject.asObservable();

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
        return this.deviceService.isMobile() || this.deviceService.isTablet();
    }

    get version(): string {
        return this.envProperties.version;
    }

    get tenantKey(): string | null {
        return this.tenantKeySubject.value;
    }

    public resolveTenantKey(hostname?: string): string | null {
        const currentHost = (hostname ?? this.getCurrentHostname()).trim().toLowerCase();
        if (!currentHost) {
            return null;
        }

        if (this.isLocalHostname(currentHost)) {
            return null;
        }

        const segments = currentHost.split('.').filter(segment => !!segment);
        if (segments.length < 2) {
            return null;
        }

        const [tenantCandidate] = segments;
        if (!tenantCandidate || this.tenantKeyIgnoredSegments.has(tenantCandidate)) {
            return null;
        }

        return tenantCandidate;
    }

    public setTenantKey(tenantKey: string | null): void {
        const normalized = tenantKey ? tenantKey.trim().toLowerCase() : null;
        this.tenantKeySubject.next(normalized || null);
    }

    public refreshTenantKeyFromHost(hostname?: string): string | null {
        const resolved = this.resolveTenantKey(hostname);
        this.setTenantKey(resolved);
        return resolved;
    }

    private getCurrentHostname(): string {
        if (typeof window === 'undefined' || !window?.location?.hostname) {
            return '';
        }
        return window.location.hostname.toLowerCase();
    }

    private isLocalHostname(hostname: string): boolean {
        if (!hostname) {
            return true;
        }

        if (this.tenantKeyIgnoredHosts.has(hostname)) {
            return true;
        }

        return false;
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

        const initialTenantKey = this.resolveTenantKey();
        this.tenantKeySubject.next(initialTenantKey);
        console.log('[ENV] Tenant key detected:', initialTenantKey || 'none');
        
        this.mobileView = this.deviceType();
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

    @HostListener('window:resize')
    onResize() {
        this.mobileView = this.deviceType();
    }
}
