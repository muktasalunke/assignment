import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Constant } from 'src/app/utils/constant';
import { CommonService } from 'src/app/shared/common.service';
export interface tableData
{
  empName:String;
  empSalary;
  empAge;
}

@Component({
  selector: 'app-userdatatable',
  templateUrl: './userdatatable.component.html',
  styleUrls: ['./userdatatable.component.scss']
})
export class UserdatatableComponent implements OnInit {

  constructor(private httpservice:HttpService,private commonService:CommonService) { }
  displayedColumns: string[] = ['SrNo', 'empName', 'empSalary', 'empAge'];
  data:MatTableDataSource<tableData>
  tableData=[];
  loading:boolean=true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  ngOnInit()
   {  
        this.httpservice.getData(Constant.GET_USER_DATA)
        .subscribe(tdata=>{
          //this.loading=true
            let array= this.tableData=(<any>tdata);
            this.data=new MatTableDataSource(array)
            this.data.paginator=this.paginator;
            this.data.sort=this.sort;
            this.tableData=array;
            this.loading=false;
          },
          err=>
          {
            alert("Internal Server Error")
          });
          
          console.log(this.commonService.getUserInfo()) 
  }
  applyFilter(filterValue: string) {  
    this.data.filter = filterValue.trim().toLowerCase();  
  
    if (this.data.paginator) {  
      this.data.paginator.firstPage();  
    }  
  }  
  onRowClicked(row) {
    console.log('Row clicked: ', row);
}

  matSortChange(event)
  {
    console.log(event);
  }
  page(event)
  {
    console.log(event)
  }
}
