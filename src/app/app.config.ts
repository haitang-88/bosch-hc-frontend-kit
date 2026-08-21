import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IgxButtonModule, IgxDragDropModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxTreeModule } from 'igniteui-angular/tree';
import { IgxDropDownModule } from 'igniteui-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    //importProvidersFrom(NgbModule),
    importProvidersFrom(IgxDragDropModule),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(IgxTreeModule),
    importProvidersFrom(IgxDragDropModule),
    importProvidersFrom(IgxButtonModule),
    importProvidersFrom(IgxDropDownModule),
    importProvidersFrom(IgxRippleModule),
  ],
};

