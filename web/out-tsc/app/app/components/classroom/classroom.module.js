import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ListClassroomComponent } from './list-classroom/list-classroom.component';
import { AddClassroomComponent } from './add-classroom/add-classroom.component';
import { ClassroomRoutingModule } from './classroom-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgSelectModule } from '@ng-select/ng-select';
import { CorporateschoolModule } from '../corporateschool/corporateschool.module';
import { AuthModule } from '../auth/auth.module';
import { ContentModule } from '../repository/repositery.module';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
export class ClassroomModule {
    static { this.ɵfac = function ClassroomModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ClassroomModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ClassroomModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TitleCasePipe], imports: [CommonModule,
            NgbModule,
            ReactiveFormsModule,
            ClassroomRoutingModule,
            DropzoneModule,
            NgSelectModule,
            FormsModule,
            CorporateschoolModule,
            AuthModule,
            ContentModule,
            MatTreeModule,
            MatIconModule,
            MatButtonModule,
            MatCheckboxModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ClassroomModule, [{
        type: NgModule,
        args: [{
                declarations: [ListClassroomComponent, AddClassroomComponent],
                imports: [
                    CommonModule,
                    NgbModule,
                    ReactiveFormsModule,
                    ClassroomRoutingModule,
                    DropzoneModule,
                    NgSelectModule,
                    FormsModule,
                    CorporateschoolModule,
                    AuthModule,
                    ContentModule,
                    MatTreeModule,
                    MatIconModule,
                    MatButtonModule,
                    MatCheckboxModule
                ],
                providers: [TitleCasePipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ClassroomModule, { declarations: [ListClassroomComponent, AddClassroomComponent], imports: [CommonModule,
        NgbModule,
        ReactiveFormsModule,
        ClassroomRoutingModule,
        DropzoneModule,
        NgSelectModule,
        FormsModule,
        CorporateschoolModule,
        AuthModule,
        ContentModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule] }); })();
//# sourceMappingURL=classroom.module.js.map