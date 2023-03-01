import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path:'brand',
        loadChildren: () => import('./brand/brands.module')
          .then(m => m.BrandModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
