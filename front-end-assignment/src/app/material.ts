
import { NgModule } from '@angular/core';

import { MatIconModule, MatButtonModule, MatPaginatorModule,MatFormFieldModule,MatSelectModule, 
        MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        HttpClientModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        HttpClientModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ],
    declarations: []
})
export class MaterialModule
{
}
