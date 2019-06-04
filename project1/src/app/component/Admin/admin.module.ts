import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MaterialModule } from 'src/app/material/material';
import { UserdatatableComponent } from './userdatatable/userdatatable.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ContactusComponent,
    AboutusComponent,
    DashboardComponent,
    AdminNavbarComponent,
    UserdatatableComponent,
    UserdatatableComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  bootstrap: [ AdminNavbarComponent ]
})
export class AdminModule { }
