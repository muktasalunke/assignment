import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/interface/interface';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { HttpService } from 'src/app/shared/http.service';
import { Constant } from 'src/app/utils/constant';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-autocomplete',
  template: `
   <mat-form-field [formGroup]="group">
   <input matInput [formControlName]="field.name" (keyup)="applyFilter($event.target.value)" [placeholder]="field.label" [type]="field.inputType" [matAutocomplete]="auto">
   <mat-autocomplete #auto="matAutocomplete" isOpen="true">
     <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
       {{option}}
     </mat-option>
   </mat-autocomplete>
   <ng-container *ngFor="let validation of field.validations;" ngProjectAs="mat-error">
  <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
  </ng-container>
   </mat-form-field>
  `,
  styles: ['mat-form-field{width:100%}']
})
export class AutocompleteComponent implements OnInit {
field:FieldConfig;
group:FormGroup;

  constructor(private httpservice:HttpService) { }

  options: string[] = [];
  autodata:any
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.group.get(this.field.name).valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  applyFilter(filterValue: string) {  
    this.getServiceAPI(filterValue);
    console.log(filterValue);
  }  
  
  getServiceAPI(value:any)
  {
      this.httpservice.get(Constant.GET_USER_DATA,{params: {searchKey:value}}).subscribe(data=>{
      this.autodata=data;
      this.autodata.map(d=>this.options.push(d.employee_name))
      })   
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
