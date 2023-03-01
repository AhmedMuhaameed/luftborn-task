import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandAPI } from './api/brand.api';
import { BrandData } from '../../interfaces/brand/brand';
import { BrandService } from './services/brand.service';

const API = [BrandAPI];

const SERVICES = [
  { provide: BrandData, useClass: BrandService },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BrandModule {
  static forRoot(): ModuleWithProviders<BrandModule> {
    return {
      ngModule: BrandModule,
      providers: [
        ...API,
        ...SERVICES,
      ],
    };
  }
}
