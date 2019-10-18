import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material/material';
import { LoadComponentComponent } from './load-component/load-component.component';
import { UserDataComponent } from './user-data/user-data.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { ImageComponent } from './image/image.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    HomeComponent,
    LoadComponentComponent,
    UserDataComponent,
    StudentDataComponent,
    ImageComponent,
    DragdropComponent,
    FormComponent],

  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  bootstrap:[NavbarComponent],
  entryComponents:[HomeComponent,UserDataComponent,StudentDataComponent,]
})
export class AuthModule { }
