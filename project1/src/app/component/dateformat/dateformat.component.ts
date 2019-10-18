import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from 'src/app/validators/url.validator';
export interface time{
  value;
}

export interface date{
  value;
}
@Component({
  selector: 'app-dateformat',
  templateUrl: './dateformat.component.html',
  styleUrls: ['./dateformat.component.scss']
})
export class DateformatComponent implements OnInit {
  DateFormat:date[]=[
    {value:"yyyy-dd-MM"},
    {value:"yyyy-MM-dd"},
    {value:"dd-yyyy-MM"},
    {value:"dd-MM-yyyy"}
  ]
  timeFormat:time[]=[
    {value:"HH:mm:ss"},
    {value:"HH:ss:mm"},
    {value:"mm:HH:ss"},
    {value:"mm:ss:HH"},
  ]
  formdata:FormGroup;
  isSelected;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.setCategoryValidators();
    this.formdata.get("date").setValue(localStorage.getItem("date"));
    this.formdata.get("time").setValue(localStorage.getItem("time"));
    this.formdata.get("websiteUrl").setValue('');
  }
  buildForm()
  {
    this.formdata=this.fb.group({
      date:[null,[Validators.required]],
      time:[null,[Validators.required]],
      websiteUrl:["",[Validators.required,ValidateUrl]],
      radio:['auto'],
      input1:[null],
      input2:[null]
    })
  }
  setCategoryValidators()
  {
    const input1Control=this.formdata.get('input1');
    const input2Control=this.formdata.get('input2');
    this.formdata.get('radio').valueChanges.subscribe(category=>{
      if(category==='auto')
      {
        input1Control.clearValidators();
        input1Control.clearValidators();
        input1Control.setValidators(null);
        input2Control.setValidators(null);
        input1Control.setValue(null);
        input2Control.setValue(null);
        
      }
      if(category==='custom')
      {
        input1Control.setValidators(Validators.required);
        input2Control.setValidators(Validators.required);
      }
      input1Control.updateValueAndValidity();
      input2Control.updateValueAndValidity();
    })
  }
  selectionChange(event)
  {
    console.log("selected value:"+event.value)
  }
  changeRadio(event)
  {
    console.log("Selected value:"+event.value)
    this.isSelected=event.value
  }
  submit(formdata:any)
  {
    // event.preventDefault();
    localStorage.setItem("date",formdata.date) 
    localStorage.setItem("time",formdata.time)
    console.log(localStorage.getItem("date"));
    console.log(localStorage.getItem("time"));
    console.log(formdata)
  }

}
