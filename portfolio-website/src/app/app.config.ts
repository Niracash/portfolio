import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import{provideHotToastConfig} from '@ngneat/hot-toast'
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideHotToastConfig(),]
};
