import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetroniccComponent } from './metronicc.component';

const routes: Routes = [{ path: '', component: MetroniccComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetroniccRoutingModule { }
