import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/interface/interface';
import { ValidateUrl } from 'src/app/validators/url.validator';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-renderdynamicform',
  templateUrl: './renderdynamicform.component.html',
  styleUrls: ['./renderdynamicform.component.scss']
})
export class RenderdynamicformComponent  {

  @ViewChild(RenderdynamicformComponent) form: RenderdynamicformComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "First Name",
      inputType: "text",
      name: "firstname",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "First Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Last Name",
      inputType: "text",
      name: "lastname",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Last Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "autocomplete",
      label: "Select Your Education",
      inputType: "text",
      name: "education",
      options:[],
      // options: ["Diploma", "MSC", "MCA", "BE","B.Tech"],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Education Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "URL",
      inputType: "url",
      name: "url",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "URL Required"
        },
        // {
        //   name: "validUrl",
        //   validator:ValidateUrl ,
        //   message: "URl starts with only https and ends With  "
        // }
      ]
    },
    {
      type: "input",
      label: "Mobile Number",
      inputType: "text",
      name: "mobile",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Mobile Number Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[0-9]+$"),
          message: "Accept only digit"
        },
        {
          name:"minlength",
          validator:Validators.minLength(10),
          message:"Number must contain 10 Digit"
        },
        {
          name:"maxlength",
          validator:Validators.maxLength(10),
          message:"Number must contain 10 Digit"
        }
      ]
    },
    {
      type: "textArea",
      label: "Address",
      // inputType: "text",
      name: "address",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Address Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "textArea",
      label: "Comment",
      // inputType: "text",
      name: "comment",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Comment Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email-ID",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
   
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "date",
      label: "Date Of Birth",
      name: "dob",
      inputType:"calendar",
      // inputType:"timer",
      // inputType:"both",
      // mode:"dialog",
      mode:"popup",
      value:true,
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      mode:"false",
      // mode:"true",
      values: ["UK"],
      options: ["India", "Rashia", "UK", "US"]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: false
    },
    {
      type:"toggle",
      name:"toggle",
      value:false
    },
    {
      type: "button",
      label: "Save"
    }
  ];
constructor(private commonservice:CommonService){}
  submit(value: any) {
    console.log(this.commonservice.getDateFormat(value.dob));
    console.log(value)
  }
}
