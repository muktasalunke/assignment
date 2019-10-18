import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interface/interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
  <mat-form-field class="demo-full-width margin-top" [formGroup]="group">
  <mat-select [placeholder]="field.label" [formControlName]="field.name" [multiple]="field.mode">
  <mat-option *ngFor="let item of field.options" [value]="item">{{item}}</mat-option>
  </mat-select>
  </mat-form-field>
  `,
  styles: ['mat-form-field{width:100%;}']
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
