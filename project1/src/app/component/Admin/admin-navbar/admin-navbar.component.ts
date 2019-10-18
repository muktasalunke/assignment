import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  userName;
  constructor(private router:Router,private commonService:CommonService) { }

  ngOnInit() {
   this.userName=this.commonService.getUserInfo();
  }
  logOut()
  {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
