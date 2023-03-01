import { BrowserModule  } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './@core/@core.module';
import {ToastModule} from 'primeng/toast';
import { ButtonModule } from "primeng/button";
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ErrorInterceptor } from './@core/interceptor/error.interceptor';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ToastModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
  bootstrap: [AppComponent],
  providers:[
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppModule {}
