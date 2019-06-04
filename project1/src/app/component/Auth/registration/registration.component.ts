import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Registration } from 'src/app/model/registration';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  formdata:FormGroup;
  register=new Registration();
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  checkPasswords(formdata: FormGroup) { // here we have the 'passwords' group
    let pass = formdata.controls.password.value;
    let confirmPass = formdata.controls.confirmpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }
  

  ngOnInit() {
    this.formdata=this.formBuilder.group({
      firstname:["",Validators.required],
      lastname:["",Validators.required],
      address:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      mobile:["",Validators.required,Validators.maxLength(10),Validators.minLength(10)],
      password:["",Validators.required],
      confirmpassword:[""]
   },{ validator: this.checkPasswords })
    
  }
  RegisterData()
  {
    console.log(this.register);
    this.router.navigate(['auth/login']);
  }

}
