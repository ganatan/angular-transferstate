import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    BrowserTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule { }
