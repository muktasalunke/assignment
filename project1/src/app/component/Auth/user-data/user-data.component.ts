import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Constant } from 'src/app/utils/constant';
export interface tableData
{
  studName:String;
  studAge;
  studFees;
}
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  constructor(private httpservice:HttpService) { }
  displayedColumns: string[] = ['SrNo', 'studName', 'studAge', 'studFees'];
  data:MatTableDataSource<tableData>
  tableData=[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  ngOnInit()
   {  
        this.httpservice.getData(Constant.GET_USER_DATA)
        .subscribe(tdata=>{
            let array= this.tableData=(<any>tdata);
            this.data=new MatTableDataSource(array)
            this.data.paginator=this.paginator;
            this.tableData=array;
          },
          err=>
          {
            alert("Internal Server Error")
          });
  }

}
