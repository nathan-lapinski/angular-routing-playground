import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  public users = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.route.snapshot.data['users'];
  }

}
