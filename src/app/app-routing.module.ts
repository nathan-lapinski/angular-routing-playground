import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentViewOneComponent } from './component-view-one/component-view-one.component';
import { ComponentViewTwoComponent } from './component-view-two/component-view-two.component';
import { ComponentViewThreeComponent } from './component-view-three/component-view-three.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const ROUTES = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    { path: 'view1', component: ComponentViewOneComponent },
    { path: 'view2', component: ComponentViewTwoComponent },
    { path: 'view3', component: ComponentViewThreeComponent },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(ROUTES),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}