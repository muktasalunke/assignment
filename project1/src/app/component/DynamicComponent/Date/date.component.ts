import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interface/interface';
import { FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-date',
  template: `
  <mat-form-field class="demo-full-width margin-top" [formGroup]="group">

  <input matInput  [formControlName]="field.name"   [placeholder]="field.label" [owlDateTimeTrigger]="dt2"  [owlDateTime]="dt2">
  <span [owlDateTimeTrigger]="dt2"><i class="fa fa-calendar"></i></span> 
  <owl-date-time [pickerType]="field.inputType" [pickerMode]="field.mode"  #dt2></owl-date-time>

  <mat-hint></mat-hint>
  <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
  <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
  </ng-container>
  </mat-form-field><br>
  `,
  styles: ['mat-form-field{width:100%;}']
})
export class DateComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  date;
  constructor(private commonservice:CommonService) { }
// [owlDateTimeFilter]="field.value"
  ngOnInit() {
  
    // console.log(this.commonservice.getTimeFormat("12:45:12"));
  }

}
