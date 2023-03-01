import { NgModule } from '@angular/core';
import { ShellComponent } from './shell.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [ShellComponent],
  imports: [
    ModulesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [ShellComponent],
})
export class ModulesModule {}
