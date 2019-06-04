import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { login } from '../../../model/login';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formdata:FormGroup;
login=new login();

  constructor(private formBuilder:FormBuilder,private router:Router,private notificationservice:NotificationService) { }

  ngOnInit() {
    if(localStorage.getItem('UserName') && localStorage.getItem('password'))
    {
      this.router.navigate(['/admin/dashboard']);
    }
    this.formdata=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
    
  }
loginData(formdata)
{
  console.log(this.login);
  if(formdata.username !=undefined && formdata !=null)
  {
      localStorage.setItem('UserName',formdata.username);
      localStorage.setItem('password',formdata.password);
      this.notificationservice.success("Login Successfully");
      this.router.navigate(['/admin/dashboard']);
  }
  
}
}
