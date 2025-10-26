import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {ContentsRoutingModule} from './repository-routing.module';
import {ContentHomeComponent} from './content-home/content-home.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddResourcesComponent } from './add-resources/add-resources.component';
import {NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularMyDatePickerModule} from 'angular-mydatepicker';
import {CreateAssessmentComponent} from './create-assessment/create-assessment.component';
import {AuthGuardService} from '../../shared/service/authgaurd';
import {CommonDataService} from '../../shared/service/common-data.service';
import {SubjectServices} from '../../shared/service/subject.services';
import {CommonService} from '../../shared/service/common.service';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {SharedModule} from '../../shared/shared.module';
import {PipesModule} from '../../shared/pipes/pipes.module';
import {AuthModule} from '../auth/auth.module';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {PreviewComponent} from './preview/preview.component';
import {AnnotationComponent} from '../auth/annotation/annotation.component';


const customDefaultOptions = {
    scrollThrottlingTime: 0,
    scrollDebounceTime: 0,
    scrollAnimationTime: 750,
    checkResizeInterval: 1000,
    resizeBypassRefreshThreshold: 5,
    modifyOverflowStyleOfParentScroll: true,
    stripedTable: false
};

@NgModule({
  declarations: [ContentHomeComponent, AddResourcesComponent, CreateAssessmentComponent, PreviewComponent, AnnotationComponent],
    imports: [
        CommonModule,
        ContentsRoutingModule,
        NgSelectModule,
        FormsModule,
        TagInputModule,
        ReactiveFormsModule,
        DragDropModule,
        ReactiveFormsModule,
        PdfViewerModule,
        NgbTimepickerModule,
        AngularMyDatePickerModule,
        InfiniteScrollModule,
        SharedModule,
        PipesModule,
        AuthModule,
        Ng2SearchPipeModule
    ],
    providers: [AuthGuardService, CommonDataService, SubjectServices, CommonService, DatePipe,
        {provide: 'virtual-scroller-default-options', useValue: customDefaultOptions}],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
    ]
})
export class ContentModule { }
