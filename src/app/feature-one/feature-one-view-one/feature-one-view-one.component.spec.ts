import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOneViewOneComponent } from './feature-one-view-one.component';

describe('FeatureOneViewOneComponent', () => {
  let component: FeatureOneViewOneComponent;
  let fixture: ComponentFixture<FeatureOneViewOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureOneViewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureOneViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
