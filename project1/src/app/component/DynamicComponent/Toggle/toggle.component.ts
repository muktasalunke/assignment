import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interface/interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  template: `
  <div class="demo-full-width margin-top" [formGroup]="group" >
     <mat-slide-toggle [checked]="field.value" [formControlName]="field.name">Slide me!</mat-slide-toggle>
     </div><br>
     `,
  styles: []
})
export class ToggleComponent implements OnInit {
field:FieldConfig;
group:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
