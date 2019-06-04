import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {
  userName;
  constructor(private router:Router) { }

  ngOnInit() {
    this.userName=localStorage.getItem("UserName");
  }
  logOut()
  {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
}
