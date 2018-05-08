import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';

import { FeatureOneModule } from './feature-one/feature-one.module';

import { AppComponent } from './app.component';
import { ComponentViewOneComponent } from './component-view-one/component-view-one.component';
import { ComponentViewTwoComponent } from './component-view-two/component-view-two.component';
import { ComponentViewThreeComponent } from './component-view-three/component-view-three.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentViewOneComponent,
    ComponentViewTwoComponent,
    ComponentViewThreeComponent,
    PageNotFoundComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    FeatureOneModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
