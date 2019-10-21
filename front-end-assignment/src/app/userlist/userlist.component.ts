import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersService } from '../_services/user.services';
import { FormGroup } from '@angular/forms';
import { MatPaginator, MatSort, PageEvent } from '@angular/material';

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
  public repositorylist:any = [];
  public id:number = 0;

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
  sortDirection: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _usersService : UsersService,
    ) {
     // Set the private defaults
     this._unsubscribeAll = new Subject();
   }

  ngOnInit() {

  
  }

  onSearchClear() {
    this.searchKey = "";
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
      });
  }

  getNextPrevious(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getSearchList();
  }

  selectionChange(event){
    this.sortDirection = event.value;
    this.getSearchList();
  }

  onClickDetails(url:string, id :number){
    this.id = id;
    this.isExpansion = true;
    this.getDetailList(url);
  }

  onClickCollaspe(){
    this.isExpansion = false
  }

  getDetailList(url){
    this._usersService.getDetailsList(url)
      .subscribe(response => {
        this.repositorylist = response;
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
