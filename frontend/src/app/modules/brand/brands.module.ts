import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrandRoutingModule } from './brands-routing.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToastModule} from 'primeng/toast';

const Ui_Modules = [
  CardModule,
  TableModule,
  InputTextModule,
  ButtonModule,
  DialogModule,
  InputSwitchModule,
  ToastModule
]

@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrandRoutingModule,
    ...Ui_Modules
  ]
})
export class BrandModule { }
