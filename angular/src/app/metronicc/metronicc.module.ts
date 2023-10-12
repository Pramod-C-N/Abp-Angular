import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetroniccRoutingModule } from './metronicc-routing.module';
import { MetroniccComponent } from './metronicc.component';


@NgModule({
  declarations: [
    MetroniccComponent
  ],
  imports: [
    CommonModule,
    MetroniccRoutingModule
  ]
})
export class MetroniccModule { }
