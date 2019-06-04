import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserdatatableComponent } from './userdatatable/userdatatable.component';
import { AuthGuard } from 'src/app/shared/auth-guard.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children: [
      {
        path:'',
        redirectTo: 'aboutus',
        pathMatch: 'full'
      },
      {
      path:'aboutus',
      component:AboutusComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'contactus',
      component:ContactusComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'dashboard',
      component: HomeComponent,
      canActivate:[AuthGuard]
    },
    {
      path:'userTable',
      component:UserdatatableComponent,
      canActivate:[AuthGuard]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
