import { FormGroup } from '@angular/forms';

export class CommonUtils
{
    /**
     * Prepare Filter Array On Table List
     *
     * @param item
     * @param array
     */
    public static getFilterJson(sortArray,paginationArray,formArray): any
    {
        var filterJson = {};
        //Sort Array
        if(sortArray.active && sortArray.direction){
            filterJson['column'] = sortArray.active; 
            filterJson['direction'] = sortArray.direction;             
        }
        //Pagination Array
        if(paginationArray.pageIndex>=0 && paginationArray.pageSize>0){
            filterJson['page']  = paginationArray.pageIndex == 0 ? 1 : paginationArray.pageIndex + 1; 
            filterJson['per_page'] = paginationArray.pageSize;             
        }

        //Form Array
        if(formArray){
            if(formArray.searchKey!==''){
                filterJson['q'] = formArray.searchKey;
            }
        }
        return filterJson;
    }

    /** ARRAY TO STRING CONVERSION */
    getArrayToString(input:[]):string{
        return input.toString();
    } 
    /**STRign to JSON */  
    public static getStringToJson(input:string):object{
        return JSON.parse(input);
    } 
    /**AGE CALCULATION */
    public static CalculateAge(birthDate:any): number {
      if (birthDate) {
        var timeDiff  = Math.abs(Date.now() - new Date(birthDate).getTime());
        var validAge  = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
        return validAge;
        }
        return 0;
    } 
    /** Get Json Format For save to server */
    public static getSettingsJsonFormat(jsonInfo,settingType='userimportfields',PreFieldsArray){
        let FieldsArray: any;

        if(settingType=='userimportfields'){
            FieldsArray = {corefields:'',metafields:'',roleid:''};
            //Corefields
            FieldsArray.corefields = jsonInfo.corefields.join(",");
            //metaFields
            FieldsArray.metafields = PreFieldsArray.metaFieldsArray.filter(item=>{
                return jsonInfo.metafields.includes(item.id);
            });
            //RoleID
            FieldsArray.roleid = jsonInfo.userroles || "";
            FieldsArray = JSON.stringify([FieldsArray]);      
        }

        //Export fields settings
        if(settingType=='userexportfields'){
            FieldsArray = {corefields:'',metafields:''};
            //Corefields
            FieldsArray.corefields = jsonInfo.corefields.join(",");
            //metaFields
            FieldsArray.metafields = PreFieldsArray.metaFieldsArray.filter(item=>{
                return jsonInfo.metafields.includes(item.id);
            });
            FieldsArray = JSON.stringify([FieldsArray]);
        }
        //Resident Directory Settings
        if(settingType=='residentdirectorysearch'){
            FieldsArray = {corefields:'',metafields:[],printoptions:{showcorefields:'',showmetafields:[]},subtractdays:0};
            //Corefields
            FieldsArray.corefields = jsonInfo.corefields.join(",");
            //metaFields
            FieldsArray.metafields = PreFieldsArray.metaFieldsArray.filter(item=>{
                return jsonInfo.metafields.includes(item.id);
            });
            //Corefields for Print
            FieldsArray.printoptions.showcorefields = jsonInfo.printoptions.showcorefields.join(",");
            //metaFields for Print
            FieldsArray.printoptions.showmetafields = jsonInfo.printoptions.showmetafields;
            //RoleID
            FieldsArray.subtractdays = jsonInfo.subtractdays || 0;

            FieldsArray = JSON.stringify([FieldsArray]);
        }
        return FieldsArray;
    }


    /** Validate form fields*/
    public static validateAllFormFields(formGroup: FormGroup) :any
    {
        Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        control.markAsTouched({ onlySelf: true });
        });
    }

    /**custom validate email */
    public static validCustomEmail(str) {

        // Handle All Requirements 1-5
        var regEx = /^.{1,}@.{2,}\..{2,}/;
        console.log(regEx.test(str));
        return regEx.test(str);
    }
    /** Get Flat Json From Object */
    public static getFlatSingleJson(obj) {
        let result = [];
        result.push({
            menu_id: obj.menu_id,
            menu_title: obj.menu_title,
            menu_parent_id: obj.menu_parent_id,
            order: obj.order
        });
        if (obj.children && obj.children.length) {
            obj.children.forEach(child => {
                result = result.concat(CommonUtils.getFlatSingleJson(child));
            });
        }
        return result;
    }
        
    // added another method to run forEach
    public static getFlatArrayJson(arr) {
        let result = [];
        arr.forEach(obj => {
            result = result.concat(CommonUtils.getFlatSingleJson(obj));
        });
        
        return result;
    }
    //Get Sorted Array by Criteria
    public static sortJsonbyArray(jsonArray,SortArr){
        if(jsonArray && SortArr){
            let result = [];
            let catsArray = [];
            SortArr.forEach(obj => { result = result.concat(jsonArray.filter(catItem=>{ return catItem.id==obj })); });
            catsArray = result.concat(jsonArray);
            catsArray = catsArray.filter((li, idx, self) => self.map(itm => itm.id).indexOf(li.id) === idx);
            return catsArray;
        }
        return jsonArray;
        
    }

    /****GET FORMATED DATA OF DROPDOWN */
    public getFormatElementofDepartment(ele) {
        let deptArr = [];
        for(let i = 0 ;i < ele.length ; i++)
        {
            if(ele[i].category_type == 'DEPT' && ele[i].status == 'A'){

                let objDept:any = {};
                objDept.id = ele[i].id;
                objDept.category_name = ele[i].category_name;
                objDept.status = ele[i].status ;
                objDept.sub_categories = ele[i].sub_categories;
                deptArr.push(objDept);
            }
        }
        return deptArr;
    } 

    /********** GET TINYMCE SETTING */
    public static getTinymceSetting(){
      let tinyMceSettings = {
            base_url: '/tinymce', // Root for resources
            suffix: '.min',
            plugins: 'link insertdatetime paste code',
            menubar:false,
            statusbar: false,
            paste_as_text:true,
            fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px',
            toolbar:'fontsizeselect | fontselect | formatselect | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | pastetext undo redo code',
            font_formats: 'Roboto=Roboto,sans-serif;Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;sans-serif=sans-serif,sans-serif',
            content_css: [
            ],
            setup : function(ed) {
                ed.on('init', function (ed) {
                    //ed.target.editorCommands.execCommand("fontName", false, "");
                });
            }
        };
        return tinyMceSettings;
    }
}
