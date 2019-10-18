import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { InputComponent } from '../Input/input.component';
import { ButtonComponent } from '../Button/button.component';
import { DateComponent } from '../Date/date.component';
import { SelectComponent } from '../Select/select.component';
import { RadiobuttonComponent } from '../Radiobutton/radiobutton.component';
import { FieldConfig } from 'src/app/interface/interface';
import { FormGroup } from '@angular/forms';
import { CheckboxComponent } from '../Checkbox/checkbox.component';
import { TextareaComponent } from '../Textarea/textarea.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { ToggleComponent } from '../Toggle/toggle.component';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent,
  textArea:TextareaComponent,
  autocomplete:AutocompleteComponent,
  toggle:ToggleComponent
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}

