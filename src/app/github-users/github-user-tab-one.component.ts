import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user-tab-one',
  template: `
    <h1>I'm tab 1</h1>
  `
})
export class GithubUserTabOneComponent implements OnInit {

  public users = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
