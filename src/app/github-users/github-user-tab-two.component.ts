import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user-tab-two',
  template: `
    <h1>I'm tab 2</h1>
    <h5>{{users[0].login}}</h5>
    <h5>{{users[1].login}}</h5>
  `
})
export class GithubUserTabTwoComponent implements OnInit {

  public users = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.parent.snapshot.data['users'];
  }

}
