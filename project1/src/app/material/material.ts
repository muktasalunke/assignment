import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatSortModule, MatTableModule, MatSelectModule, MatAutocompleteModule, MatSnackBar }from '@angular/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    DragDropModule
    
  ],
  exports: [
    MatCardModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    DragDropModule
  ],
  declarations: []
})
export class MaterialModule { }