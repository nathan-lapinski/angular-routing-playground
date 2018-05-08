import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOneViewTwoComponent } from './feature-one-view-two.component';

describe('FeatureOneViewTwoComponent', () => {
  let component: FeatureOneViewTwoComponent;
  let fixture: ComponentFixture<FeatureOneViewTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureOneViewTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureOneViewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
