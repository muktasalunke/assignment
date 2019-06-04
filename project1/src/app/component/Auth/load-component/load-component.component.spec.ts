import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadComponentComponent } from './load-component.component';

describe('LoadComponentComponent', () => {
  let component: LoadComponentComponent;
  let fixture: ComponentFixture<LoadComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
