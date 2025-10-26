import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {ConfigurationService} from '../../../shared/service/configuration.service';
import {NewsubjectService} from '../../../shared/service/newsubject.service';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.scss']
})
export class ViewPDFComponent implements OnInit, OnDestroy {

  public pdfTemplate: any;
  protected webhost: any;
  public pdfDetails: any;
  public customPdfLoader = true;

  constructor(public auth: AuthService, public confi: ConfigurationService, public newSubject: NewsubjectService) {
    this.webhost = this.confi.getimgUrl();
    console.log(this.webhost, 'webhost');
    this.pdfDetails = JSON.parse(this.auth.getSessionData('view_pdf_url_details'));
    console.log(this.pdfDetails, 'pdfDetails');
    this.pdfTemplate = this.webhost + '/' + this.pdfDetails.downloadPDF[0]?.original_image_url;
  }

  ngOnDestroy(): void {
    this.newSubject.allowSchoolChange(false);
    }

  ngOnInit(): void {
    this.newSubject.allowSchoolChange(true);
  }

  callBackFn() {
    this.customPdfLoader = false;
  }


}
