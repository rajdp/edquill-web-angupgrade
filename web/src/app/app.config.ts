import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DateAdapter } from 'angular-calendar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CalendarModule } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { ConnectionServiceModule } from 'ng-connection-service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrModule } from 'ngx-toastr';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { SettingModule } from './components/setting/setting.module';
import { StudentContentModule } from './components/student-content/student-content.module';
import { AuthModule } from './components/auth/auth.module';
import { MailboxModule } from './components/mailbox/mailbox.module';
import { UsersModule } from './components/users/users.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { CustomMaterialModule } from './material.module';
import { EnvironmentService } from './environment.service';
import { AuthGuardService } from './shared/service/authgaurd';
import { RoleGaurd } from './shared/service/roleGaurd';
import { CommonDataService } from './shared/service/common-data.service';
import { SubjectServices } from './shared/service/subject.services';
import { CommonService } from './shared/service/common.service';
import { DeactivateAnswering } from './shared/service/answering-deactivate';
import { DatePipe } from '@angular/common';
import { ServerHttpInterceptor } from './shared/service/http.interceptor';
import { appRoutes } from './app.routes';
import { WINDOW_PROVIDERS } from './shared/service/windows.service';

const calendarModule = CalendarModule.forRoot({
  provide: DateAdapter,
  useFactory: adapterFactory
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withHashLocation(),
      withEnabledBlockingInitialNavigation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    importProvidersFrom(
      FormsModule,
      ReactiveFormsModule,
      PdfViewerModule,
      DragDropModule,
      PipesModule,
      calendarModule,
      NgbModule,
      ConnectionServiceModule,
      NgSelectModule,
      CustomMaterialModule,
      SocialLoginModule,
      SettingModule,
      StudentContentModule,
      AuthModule,
      MailboxModule,
      UsersModule,
      ToastrModule.forRoot()
    ),
    NgbTooltipConfig,
    AuthGuardService,
    RoleGaurd,
    CommonDataService,
    SubjectServices,
    CommonService,
    DatePipe,
    DeactivateAnswering,
    ...WINDOW_PROVIDERS,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerHttpInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (envService: EnvironmentService) => () => envService.init(),
      deps: [EnvironmentService],
      multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('116926485369-pu809s8khi5dr5seokmmggld3ff2822c.apps.googleusercontent.com')
          }
        ],
        onError: (err: unknown) => console.error(err)
      } as SocialAuthServiceConfig
    }
  ]
};
