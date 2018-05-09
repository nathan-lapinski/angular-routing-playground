import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GithubUserService } from './github-user.service';
import { GithubUserResolverService } from './github-user-resolver.service';
import { GithubUserComponent } from './github-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'users', component: GithubUserComponent, resolve: { users: GithubUserResolverService }
    }])
  ],
  providers: [ GithubUserResolverService, GithubUserService ],
  declarations: [GithubUserComponent]
})
export class GithubUsersModule { }
