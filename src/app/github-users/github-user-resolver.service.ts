import { Injectable } from '@angular/core';
import { GithubUsersModule } from './github-users.module';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GithubUserService } from './github-user.service';

@Injectable()
export class GithubUserResolverService implements Resolve<any> {

    constructor(private githubService: GithubUserService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        let user = +route.params['user'];
        return this.githubService.get(user);
    }
}