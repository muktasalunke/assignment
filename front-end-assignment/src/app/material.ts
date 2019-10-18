
import { NgModule } from '@angular/core';

import { MatIconModule, MatButtonModule, MatPaginatorModule, 
         MatExpansionModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        HttpClientModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        HttpClientModule,
        MatPaginatorModule,
        MatExpansionModule
    ],
    declarations: []
})
export class MaterialModule
{
}
