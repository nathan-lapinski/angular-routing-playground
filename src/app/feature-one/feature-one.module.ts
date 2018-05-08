import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeatureOneViewOneComponent } from './feature-one-view-one/feature-one-view-one.component';
import { FeatureOneViewTwoComponent } from './feature-one-view-two/feature-one-view-two.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'f1v1', component: FeatureOneViewOneComponent },
      { path: 'f1v2', component: FeatureOneViewTwoComponent}])
  ],
  declarations: [FeatureOneViewOneComponent, FeatureOneViewTwoComponent]
})
export class FeatureOneModule { }
