import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewThreeComponent } from './component-view-three.component';

describe('ComponentViewThreeComponent', () => {
  let component: ComponentViewThreeComponent;
  let fixture: ComponentFixture<ComponentViewThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentViewThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentViewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
