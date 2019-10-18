import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { AdminModule } from './component/Admin/admin.module';
import { AuthModule } from './component/Auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material';
import { HomeComponent } from './component/Auth/home/home.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { MainNavbarComponent } from './component/main-navbar/main-navbar.component';
import { RenderdynamicformComponent } from './component/DynamicComponent/renderdynamicform/renderdynamicform.component';
import { DynamicFormComponent } from './component/DynamicComponent/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './component/DynamicComponent/dynamic-field/dynamic-field.directive';
import { InputComponent } from './component/DynamicComponent/Input/input.component';
import { ButtonComponent } from './component/DynamicComponent/Button/button.component';
import { RadiobuttonComponent } from './component/DynamicComponent/Radiobutton/radiobutton.component';
import { DateComponent } from './component/DynamicComponent/Date/date.component';
import { SelectComponent } from './component/DynamicComponent/Select/select.component';
import { CheckboxComponent } from './component/DynamicComponent/Checkbox/checkbox.component';
import { TextareaComponent } from './component/DynamicComponent/Textarea/textarea.component';
import { AutocompleteComponent } from './component/DynamicComponent/autocomplete/autocomplete.component';
import { ToggleComponent } from './component/DynamicComponent/Toggle/toggle.component';
import { DatePipe } from '@angular/common';
import { DateformatComponent } from './component/dateformat/dateformat.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    MainNavbarComponent,
    InputComponent,
    RenderdynamicformComponent,
    ButtonComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DateComponent,
    SelectComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    TextareaComponent,
    AutocompleteComponent,
    ToggleComponent,
    DateformatComponent,

  ],
  imports: [
    AppRoutingModule,
    MaterialModule,
    MDBBootstrapModule,
    AdminModule,
    AuthModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  entryComponents:[HomeComponent,MainNavbarComponent,RenderdynamicformComponent, InputComponent,ButtonComponent,
    CheckboxComponent,RadiobuttonComponent,DateComponent,SelectComponent,TextareaComponent,AutocompleteComponent,
    ToggleComponent]
})
export class AppModule { }
