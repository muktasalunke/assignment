import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { UsersService } from '../_services/user.services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';
import { CommonUtils } from '../_helpers/common.utils';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  public userlist:any = [];
  public isExpansion:boolean = false;
  public filterForm:FormGroup;
  public filterParams: any={};
  public searchKey:string = '';
  public total_count:number = 0;

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @ViewChild('filter', {static: true})
  filter: ElementRef;

  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 10;
  page: number = 1;
  sortColumn: string;
  sortDirection: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _usersService : UsersService,
    private _formBuilder:FormBuilder) {
     // Set the private defaults
     this._unsubscribeAll = new Subject();
   }

  ngOnInit() {

    //Declare Filter Form
    // this.filterForm = this._formBuilder.group({
    //   direction   : [''],
    //   searchKey   : [''],
      
    // });

    // this._usersService.onUsersChanged
    //   .pipe(takeUntil(this._unsubscribeAll))
    //   .subscribe(response => {
    //     this.userlist = response;
    //     this.total_count = this.userlist.length;
    //     console.log(response);
    //   });
  
    //   this.resetPageIndex(); //#Reset PageIndex of form if search changes
        
    //   merge(this.paginator.page, this.filterForm.valueChanges)
    //   .pipe(
    //       takeUntil(this._unsubscribeAll),
    //       debounceTime(500),
    //       distinctUntilChanged()
    //   )
    //   .subscribe(res=>{
    //       this.filterParams = CommonUtils.getFilterJson('',this.paginator,this.filterForm.value);
          
  
    //       // this.dataSource.getFilteredUsers(this.filterParams);
    //   });
  }

  onSearchClear() {
    this.searchKey = "";
    // this.applyFilter();
  }

  applyFilter() {
    this.page = 1;
    this.getSearchList();
  }

  getSearchList(){
    let param = [];
    param.push(
      {
        'q':this.searchKey
      },
      {
        'page': this.page
      },
      {
        'per_page':this.pageSize
      },
      {
        'direction': this.sortDirection
      });
    this._usersService.getSearchedUsers(param)
      .subscribe(response => {
        this.userlist = response.items;
        this.total_count = response.total_count;
        console.log(response);
      });
  }

  getNextPrevious(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getSearchList();
  }

  //Reset PageIndex On Form Changes
  resetPageIndex(){
   
      this.filterForm.valueChanges.subscribe(data=>{
          this.paginator.pageIndex = 0;
      });
  }

  selectionChange(event){
    this.sortDirection = event.value;
    this.getSearchList();
  }

  onClickDetails(name:string){
    this.isExpansion = true;
    this.getDetailList(name);
  }

  onClickCollaspe(){
    this.isExpansion = false
  }

  getDetailList(name){
    this._usersService.getDetailsList(name)
      .subscribe(response => {
        console.log(response);
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

}
