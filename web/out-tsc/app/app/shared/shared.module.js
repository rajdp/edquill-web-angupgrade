import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { WINDOW_PROVIDERS } from './service/windows.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { RemoveAnnatationComponent } from './components/remove-annatation/remove-annatation.component';
import { PipesModule } from './pipes/pipes.module';
import { Header2Component } from './components/header2/header2.component';
import { RightSidebarMobComponent } from './components/right-sidebar-mob/right-sidebar-mob.component';
import { LongPress } from './directives/long-press';
import { FileDragNDropDirective } from './directives/file-drag-n-drop.directive';
import * as i0 from "@angular/core";
export class SharedModule {
    static { this.ɵfac = function SharedModule_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SharedModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SharedModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [...WINDOW_PROVIDERS], imports: [CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
            PipesModule,
            FeatherIconsComponent,
            FooterComponent,
            HeaderComponent,
            SidebarComponent,
            ContentLayoutComponent,
            BreadcrumbComponent,
            RightSidebarComponent,
            RemoveAnnatationComponent,
            Header2Component,
            RightSidebarMobComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SharedModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    FormsModule,
                    ReactiveFormsModule,
                    PipesModule,
                    FeatherIconsComponent,
                    FooterComponent,
                    HeaderComponent,
                    SidebarComponent,
                    ContentLayoutComponent,
                    BreadcrumbComponent,
                    RightSidebarComponent,
                    RemoveAnnatationComponent,
                    Header2Component,
                    RightSidebarMobComponent,
                    ToggleFullscreenDirective,
                    LongPress,
                    FileDragNDropDirective
                ],
                providers: [...WINDOW_PROVIDERS],
                exports: [
                    FeatherIconsComponent,
                    FooterComponent,
                    HeaderComponent,
                    SidebarComponent,
                    ContentLayoutComponent,
                    BreadcrumbComponent,
                    RightSidebarComponent,
                    RemoveAnnatationComponent,
                    Header2Component,
                    RightSidebarMobComponent,
                    ToggleFullscreenDirective,
                    LongPress,
                    FileDragNDropDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SharedModule, { imports: [CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule,
        FeatherIconsComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ContentLayoutComponent,
        BreadcrumbComponent,
        RightSidebarComponent,
        RemoveAnnatationComponent,
        Header2Component,
        RightSidebarMobComponent,
        ToggleFullscreenDirective,
        LongPress,
        FileDragNDropDirective], exports: [FeatherIconsComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        ContentLayoutComponent,
        BreadcrumbComponent,
        RightSidebarComponent,
        RemoveAnnatationComponent,
        Header2Component,
        RightSidebarMobComponent,
        ToggleFullscreenDirective,
        LongPress,
        FileDragNDropDirective] }); })();
//# sourceMappingURL=shared.module.js.map