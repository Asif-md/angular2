import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { LoginComponent } from '../login/login.component';
import { StarterComponent } from './../starter/starter.component';
import { DashboardComponent } from './../general/dashboard/dashboard.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
//import {AreaCreateComponent} from '../area/area-create/area-create.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
     // { path: 'starter', component: StarterComponent, canActivate:[AuthGuard] },
     // { path: 'admin', component: AdminComponent, canActivate:[AuthGuard] },
      { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
      
    ])
  ],
  declarations: [],
  exports: [ RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
