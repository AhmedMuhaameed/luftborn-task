import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { BrandModule } from './backend/bug-log/brand.module';
import { BrandService } from './backend/bug-log/services/brand.service';
import { HttpService } from './backend/common/api/http.service';

export const NB_CORE_PROVIDERS = [
  ...BrandModule.forRoot().providers!,
];
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
        BrandService,
        HttpService
      ],
    };
  }
}
