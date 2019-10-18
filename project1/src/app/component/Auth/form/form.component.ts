import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
}

export interface date{
  value;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // myControl = new FormControl();
  formdata:FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  
  foods: Food[] = [
    {value: 'steak', viewValue: 'Steak'},
    {value: 'pizza', viewValue: 'Pizza'},
    {value: 'tacos', viewValue: 'Tacos'}
  ];
  DateFormat:date[]=[
    {value:"DD-MM-YYYY"},
    {value:"MM-DD-YYYY"},
    {value:"YYYY-DD-MM"},
    {value:"YYYY-MM-DD"}
  ]
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.formdata=this.formbuilder.group({
      autocomplete:["",Validators.required],
      text:["",Validators.required],
      number:["",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:["",[Validators.required,Validators.email]],
      password:["",Validators.required],
      tel:["",[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      date:["",Validators.required],
      search:["",Validators.required],
      // url:["",Validators.required],
      // datetime:["",Validators.required],
      local:["",Validators.required],
      month:["",Validators.required],
      week:["",Validators.required],
      time:["",Validators.required],
      color:["",Validators.required],
      textarea:["",Validators.required],
      radio:["",Validators.required],
      select:["",Validators.required],
      datePickerDate:["",Validators.required],
      checkbox:["",Validators.required],
      toppings:["",Validators.required],
      toggle:["",Validators.required],
      datefor:["",Validators.required]
    })
  }
  optionSelected(event)
  {
    console.log("Selected value:"+event.option.value)
  }
  change(event)
  {
    if(event.checked==true)
    {
    console.log("checkbox selected");
    }
    else
    {
      console.log("checkbox unselected");
    }
  }
  dateChange(event)
  {
    console.log(event.value.getDate());
  }
  dateInput(event)
  {
    console.log(event);
  }
  changeRadio(event)
  {
    console.log("Selected value:"+event.value)
  }
  selectionChange(event)
  {
    console.log("selected value:"+event.value)
  }
  changeToggle(event)
  {
    if(event.checked==true)
    {
    console.log("toggle checked");
    }
    else
    {
      console.log("toggle unchecked")
    }
  }
  submit(formdata:any)
  {
    console.log(localStorage.setItem("date",formdata.datefor)) 
    console.log(formdata)
  }
}
