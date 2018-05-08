import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';


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
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: 'view1', component: ComponentViewOneComponent },
      { path: 'view2', component: ComponentViewTwoComponent },
      { path: 'view3', component: ComponentViewThreeComponent },
      { path: '**', component: PageNotFoundComponent }]),
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
