import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GithubUserService } from './github-user.service';
import { GithubUserResolverService } from './github-user-resolver.service';
import { GithubUserComponent } from './github-user.component';
import { GithubUserTabOneComponent } from './github-user-tab-one.component';
import { GithubUserTabTwoComponent } from './github-user-tab-two.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'users', component: GithubUserComponent, 
      resolve: { users: GithubUserResolverService },
      children: [
        {
          path: '',
          redirectTo: 'tab1',
          pathMatch: 'full'
        },
        {
          path: 'tab1',
          component: GithubUserTabOneComponent
        },
        {
          path: 'tab2',
          component: GithubUserTabTwoComponent
        }
      ]
    }])
  ],
  providers: [ GithubUserResolverService, GithubUserService ],
  declarations: [GithubUserComponent, GithubUserTabOneComponent, GithubUserTabTwoComponent]
})
export class GithubUsersModule { }
