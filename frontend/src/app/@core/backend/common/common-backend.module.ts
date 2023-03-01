import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './api/http.service';

const API = [HttpService];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class CommonBackendModule { 
  static forRoot(): ModuleWithProviders<CommonBackendModule> {
    return {
      ngModule: CommonBackendModule,
      providers: [
        ...API,
      ],
    };
  }
}
