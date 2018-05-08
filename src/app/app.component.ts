import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  welcomUrl = '/welcome';

  constructor(private router: Router) {}

  onClick(): void {
    this.router.navigate([this.welcomUrl]);
  }

  // debug purposed
  onRouterOutletActivate(v) {
    console.log('Router Outlet Activate: ', v);
  }

  onRouterOutletDeactivate(v) {
    console.log('Router Outlet Activate: ', v);
  }
}
