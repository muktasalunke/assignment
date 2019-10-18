import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interface/interface';
import { FormGroup } from '@angular/forms';
import { FileDetector } from 'selenium-webdriver/remote';

@Component({
  selector: 'app-textarea',
  template: `
  <mat-form-field  [formGroup]="group">
  <textarea matInput  [formControlName]="field.name" [placeholder]="field.label"  autocomplete="false"></textarea>
  <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
  <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
  </ng-container>
  </mat-form-field><br>
  `,
  styles: ['mat-form-field{width:100%;}']
})
export class TextareaComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
    // console.log(this.field)
  }

}
