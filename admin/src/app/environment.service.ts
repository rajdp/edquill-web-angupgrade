import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

export enum Environment {
    Prod = 'prod',
    ProdUat = 'prodUat',
    DevUat = 'devUat',
    Dev = 'dev',
    Local = 'local',
}

export class EnvProperties{
    env: Environment;
    apiHost: string;
    webHost: string;
    imgUrl: string;
    showStudent: boolean;
    version: string;
}
@Injectable({providedIn: 'root'})

export class EnvironmentService {
    public envProperties = new EnvProperties();
    public basePath: string;
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

    get showStudent(): boolean {
        return this.envProperties.showStudent;
    }

    get version(): string {
        return this.envProperties.version;
    }
    constructor(private http: HttpClient) {
        this.envProperties.showStudent = true;
        this.envProperties.version = '0.0.32';
        this.envRecieved.asObservable();
        this.envRecieved.next(false);
    }

    init(): Promise<void> {
        return new Promise(resolve => {
            this.checkingHostType();
            resolve();
        });
    }

    async getBaseUrlApi(type){
        const data = {
            type
        };
        try {
            const response: any = await this.post('', data).toPromise();
            if (response.IsSuccess) {
                await this.assignEnvValue(response.ResponseObject);
            }
        } catch (err) {
            await err;
        }
    }

    post(url, reqBody, option?: {}) {
        const json = JSON.stringify(reqBody);
        return this.http.post(url , json);
    }

    private checkingHostType(): void {
        const hostname = window && window.location && window.location.hostname;
        const pathname = window && window.location && window.location.pathname;
        // 2->testweb, 3->testadmin, 4->testuatweb, 5->testuatadmin, 6->liveuatweb, 7->liveuatadmin, 8->liveweb, 9-> liveadmin
        if (/^.*localhost.*/.test(hostname)) {
            this.envProperties.env = Environment.Local;
            this.basePath = 'https://dev.edquill.com' + '/rista/api/index.php/admin/common/getBuildUrl';
            this.getBaseUrlApi(3);
        } else if ('dev.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.envProperties.env = Environment.Dev;
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.getBaseUrlApi(3);
        } else if ('test.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.envProperties.env = Environment.DevUat;
            this.basePath = 'https://' + `${hostname}` + '/uat/rista/api/index.php/admin/common/getBuildUrl';
            this.getBaseUrlApi(5);
        }  else if ('edquill.com/admin/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.Prod;
            this.getBaseUrlApi(9);
        } else if ('edquill.com/admintest/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/test/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.ProdUat;
            this.getBaseUrlApi(13);
        }else if ('demo.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.ProdUat;
            this.getBaseUrlApi(23);
        }  else if ('xtracurriculum.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.Prod;
            this.getBaseUrlApi(22);
        }  else if ('xtracurriculum.edquill.com/admintest/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/test/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.Prod;
            this.getBaseUrlApi(24);
        }  else if ('edveda.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.Prod;
            this.getBaseUrlApi(22);
        }  else if ('uniqprep.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.Prod;
            this.getBaseUrlApi(24);
        } else if ('staging.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.ProdUat;
            this.getBaseUrlApi(27);
        }  else if ('elevenace.edquill.com/admin/' === `${hostname}${pathname}`) {
            this.basePath = 'https://' + `${hostname}` + '/rista/api/index.php/admin/common/getBuildUrl';
            this.envProperties.env = Environment.Prod;
            this.getBaseUrlApi(22);
        }
        else {
            alert('Cannot find environment for host name');
            console.warn(`Cannot find environment for host name ${hostname}`);
            this.envProperties.env = Environment.Local;
            this.basePath = 'https://dev.edquill.com' + '/rista/api/index.php/admin/common/getBuildUrl';
            this.getBaseUrlApi(3);
        }
    }


    assignEnvValue(res){
        // this.envProperties.env = Environment.Local;
        this.envProperties.apiHost = res.apiHost;
        this.envProperties.imgUrl = res.imgUrl;
        this.envProperties.webHost = res.webHost;
        this.envRecieved.next(true);

    }
}

