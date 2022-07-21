import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanLoadGuard } from './can-load/can-load.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    'path':'admin',
    canLoad:[CanLoadGuard],
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    'path':'dashboard',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
