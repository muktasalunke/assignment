import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderdynamicformComponent } from './renderdynamicform.component';

describe('RenderdynamicformComponent', () => {
  let component: RenderdynamicformComponent;
  let fixture: ComponentFixture<RenderdynamicformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderdynamicformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderdynamicformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
