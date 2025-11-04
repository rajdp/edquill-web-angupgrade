import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {catchError, map} from 'rxjs/operators';
import {throwError as observableThrowError} from 'rxjs';
import ApexCharts from 'apexcharts';

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    constructor(private http: HttpClient, public authService: AuthService) {

    }

    async printReport(calledType = '') {
        const chartImage = await ApexCharts.exec('feedbackChart', 'dataURI');
        const chartContainer = document.querySelector('#print-section .chart-container');
        if (chartContainer) {
            chartContainer.innerHTML = `<img src="${chartImage.imgURI}" style="max-width:100%;"/>`;
        }

        const printContents = document.getElementById('print-section')?.innerHTML;
        if (!printContents) return;

        const styles = Array.from(document.styleSheets)
            .map((sheet: any) => {
                try {
                    return Array.from(sheet.cssRules).map((rule: any) => rule.cssText).join('');
                } catch {
                    return '';
                }
            })
            .join('');

        const popupWin = window.open('', '_blank', 'width=900,height=650');
        if (!popupWin) return;

        popupWin.document.open();
        popupWin.document.write(`
<html>
<head>
    <title>Feedback Report</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <style>${styles}</style>
    <style>
        body { font-family: "Times New Roman", serif !important; }
        .chart-container { text-align: center; margin: 20px 0; }

        .collapse { display: block !important; }

        .display-block { display: block !important; }

        .feedback-card,
        .custom_feedback_card_body,
        .card,
        .card-body,
        .card-header,
        .content-card {
            max-height: none !important;
            overflow: visible !important;
            height: auto !important;
        }

        i { display: none !important; }
        .apexcharts-tooltip-text { display: none !important; }

        span, h5, p, h6 {
            font-size: 20px !important;
        }
        .logo_design { width: auto; height: 40px; }

        @media print {
            html, body { zoom: 100% !important; }
            span, p, h5, h6 { font-size: 20px !important; }
        }

        @page { size: A4; margin: 10mm; }
        @media print and (min-width: 420mm) { @page { size: A3; margin: 10mm; } }
    </style>
</head>
<body>
    <div class="container-fluid py-3 mt-3" style="font-size:${calledType != '' ? '20px' : '20px'};">
        <div class="text-center">
            <img class="logo_design" src="assets/images/EdQuill.png" alt="Edquill">
        </div>
        ${printContents}
    </div>

    <script>
        window.onbeforeprint = () => {
            document.querySelectorAll('.collapse').forEach(el => el.classList.add('show'));
        };

        window.onafterprint = () => {
            document.querySelectorAll('.collapse').forEach(el => el.classList.remove('show'));
            window.close();
        };

        window.onload = () => {
            setTimeout(() => window.print(), 100);
        };
    </script>
</body>
</html>
    `);
        popupWin.document.close();
    }

    convertBase64PdfPath(b64Data) {
        const byteCharacters = atob(b64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        return new Uint8Array(byteNumbers);
    }

    fileUpload(data) {
        const json = JSON.stringify(data);
        const url = 'common/fileUpload';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    tagList(data) {
        const json = JSON.stringify(data);
        const url = 'common/tagsList';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    getSignature(data) {
        const json = JSON.stringify(data);
        const url = 'classes/zoomSignature';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    convertBase64(b64urlData) {
        try {
            // Handle empty or null data
            if (!b64urlData || b64urlData === '' || (Array.isArray(b64urlData) && b64urlData.length === 0)) {
                return [];
            }
            
            // Handle array data (return as is if it's already processed)
            if (Array.isArray(b64urlData)) {
                return b64urlData;
            }
            
            // Handle string data that needs Base64 decoding
            if (typeof b64urlData === 'string' && b64urlData.length > 0) {
                let b64Data: any;
                try {
                    b64Data = atob(atob(atob(atob(b64urlData))));
                    b64Data = JSON.parse(b64Data);
                    return b64Data;
                } catch (decodeError) {
                    console.warn('Base64 decoding failed:', decodeError);
                    // If decoding fails, try to parse as JSON directly
                    try {
                        return JSON.parse(b64urlData);
                    } catch (parseError) {
                        console.warn('JSON parsing failed:', parseError);
                        return [];
                    }
                }
            }
            
            return [];
        } catch (error) {
            console.error('convertBase64 error:', error);
            return [];
        }
    }

    public downloadfilewithbytes(url: any) {
        console.log(url, 'url');
        return this.http.get(url, {responseType: 'arraybuffer'});
    }

    excelUpload(data) {
        const json = JSON.stringify(data);
        const url = 'common/bulkUpload';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    bulkInsert(data) {
        const json = JSON.stringify(data);
        const url = 'common/bulkInsert';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    emailInviteUpload(data) {
        const json = JSON.stringify(data);
        const url = 'common/emailInvite';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    excelDownload(data) {
        const json = JSON.stringify(data);
        const url = 'common/downloadExcel';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    getStateList(data) {
        const json = JSON.stringify(data);
        const url = 'common/state';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    getCountryList(data) {
        const json = JSON.stringify(data);
        const url = 'common/country';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    studentRegis(data) {
        const json = JSON.stringify(data);
        const url = 'user/getUserDetail';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    saveRegistration(data) {
        const json = JSON.stringify(data);
        const url = 'user/editProfile';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    settingsDetails(data) {
        const json = JSON.stringify(data);
        const url = 'common/settingList';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    dateFormat(data) {
        const json = JSON.stringify(data);
        const url = 'school/dateformat';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    timeZone(data) {
        const json = JSON.stringify(data);
        const url = 'school/timeZoneList';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    editsettings(data) {
        const json = JSON.stringify(data);
        const url = 'common/settingEdit';
        return this.http.post(url, json).pipe(
            map(this.extractData),
            catchError(this.handleError));
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            // const body = error.json() || '';
            const err = error || JSON.stringify(error);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return observableThrowError(error);
    }

}
