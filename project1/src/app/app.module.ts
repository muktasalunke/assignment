import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { AdminModule } from './component/Admin/admin.module';
import { AuthModule } from './component/Auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { HomeComponent } from './component/Auth/home/home.component';
import { UserDataComponent } from './component/Auth/user-data/user-data.component';
import { StudentDataComponent } from './component/Auth/student-data/student-data.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { MainNavbarComponent } from './component/main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    MainNavbarComponent
  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    MDBBootstrapModule,
    AdminModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[HomeComponent,UserDataComponent,StudentDataComponent,MainNavbarComponent]
})
export class AppModule { }
