import { Injectable } from '@angular/core';
import { GithubUsersModule } from './github-users.module';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GithubUserService {
    private baseUrl = 'https://api.github.com/users';
    constructor(private http: HttpClient) {}

    get(user: number): Observable<any> {
        const fetchUrl = user ? this.baseUrl + '?since=' + user : this.baseUrl;
        return this.http.get(fetchUrl);
    }
}