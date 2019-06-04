import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoadComponentComponent } from './load-component/load-component.component';
import { ImageComponent } from './image/image.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
      path:'login',
      component:LoginComponent
    },
    {
      path:'registration',
      component:RegistrationComponent
    },
    {
      path:'home',
      component:ImageComponent
    },
    {
      path:'load',
      component:LoadComponentComponent
    },
    {
      path:'dragdrop',
      component:DragdropComponent
    }]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
