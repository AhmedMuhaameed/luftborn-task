import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  { path: '', redirectTo: 'pages/brand', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/brand' },
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
