import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-view-three',
  templateUrl: './component-view-three.component.html',
  styleUrls: ['./component-view-three.component.css']
})
export class ComponentViewThreeComponent implements OnInit {

  public id;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
  }

}
