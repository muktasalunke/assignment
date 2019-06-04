import { Component, OnInit, ComponentFactoryResolver, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { UserDataComponent } from '../user-data/user-data.component';
import { componentHostSyntheticProperty } from '@angular/core/src/render3';
import { StudentDataComponent } from '../student-data/student-data.component';

@Component({
  selector: 'app-load-component',
  templateUrl: './load-component.component.html',
  styleUrls: ['./load-component.component.scss']
})
export class LoadComponentComponent implements OnInit {

  @ViewChild(UserDataComponent) Component; 
  options:any=[];
  display;
  constructor(private componentFactoryResolver:ComponentFactoryResolver,public viewContainerRef: ViewContainerRef) { }

  ngOnInit() 
  {
    this.options=[{id:1,name:"UserDataComponent",component:UserDataComponent},{id:2,name:"StudentDataComponent",component:StudentDataComponent}]
  }
  getSelected(component)
  {
    this.display=component;
  }
loadComponent()
{
    let componentFactory=this.componentFactoryResolver.resolveComponentFactory(this.display)
    //let viewContainerRef=this.Component.viewContainerRef;
    this.viewContainerRef.clear();
    let componentRef=this.viewContainerRef.createComponent(componentFactory);
}
}
