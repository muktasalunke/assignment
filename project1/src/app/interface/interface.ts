export interface Validator {
    name: string;
    validator: any;
    message: string;
  }
  export interface FieldConfig {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    mode?:string
    collections?: any;
    type: string;
    value?: any;
    check?:Boolean;
    values?:string[];
    validations?: Validator[];
  }
  