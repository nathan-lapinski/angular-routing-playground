import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewOneComponent } from './component-view-one.component';

describe('ComponentViewOneComponent', () => {
  let component: ComponentViewOneComponent;
  let fixture: ComponentFixture<ComponentViewOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentViewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
