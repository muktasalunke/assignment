import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path:'',
    loadChildren: './component/Auth/auth.module#AuthModule'
  },
  {
    path:'admin',
    loadChildren: './component/Admin/admin.module#AdminModule'
  },
  {
    path:'',
   redirectTo:'',
   pathMatch:'full'
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
