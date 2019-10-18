import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { UsersService } from '../_services/user.services';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  public userlist:any = [];
  public isExpansion:boolean = false;
  panelOpenState = false;
  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _usersService : UsersService
  ) {
     // Set the private defaults
     this._unsubscribeAll = new Subject();
   }

  ngOnInit() {

    this._usersService.onUsersChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(response => {
        this.userlist = response;
        console.log(response);
      });
  }

  onClickDetails(){
    this.isExpansion = true;
  }

  onClickCollaspe(){
    this.isExpansion = false;
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
