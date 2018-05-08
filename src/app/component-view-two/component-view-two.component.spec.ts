import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewTwoComponent } from './component-view-two.component';

describe('ComponentViewTwoComponent', () => {
  let component: ComponentViewTwoComponent;
  let fixture: ComponentFixture<ComponentViewTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentViewTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
