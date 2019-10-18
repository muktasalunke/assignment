import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interface/interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
  <mat-form-field  [formGroup]="group">
  <input matInput   [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType" autocomplete="off">
  <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
  <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
  </ng-container>
  </mat-form-field><br>
  `,
  styles: ['mat-form-field{width:100%;}']
})
export class InputComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  
  }

}
