import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  data="This is user Information";
  userName;
  date:any=new Date()
  constructor(private datepipe:DatePipe) { }
  
  getUserInfo()
  {
    this.userName=localStorage.getItem("UserName");
    return this.userName;
  }
  getDateFormat(date)
  {
    this.date=localStorage.getItem("date");
    console.log(this.date);
    return  this.datepipe.transform(date,this.date);
  }
  getTimeFormat(time)
  {
    this.date=localStorage.getItem("time");
    console.log(this.date);
    return  this.datepipe.transform(time,this.date);
  }
}
