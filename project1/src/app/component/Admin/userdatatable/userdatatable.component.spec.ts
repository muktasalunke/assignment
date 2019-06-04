import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdatatableComponent } from './userdatatable.component';

describe('UserdatatableComponent', () => {
  let component: UserdatatableComponent;
  let fixture: ComponentFixture<UserdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
