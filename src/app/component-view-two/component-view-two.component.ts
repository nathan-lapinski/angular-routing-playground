import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component-view-two',
  templateUrl: './component-view-two.component.html',
  styleUrls: ['./component-view-two.component.css']
})
export class ComponentViewTwoComponent implements OnInit {

  public val1;
  public val2;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.val1 = this.route.snapshot.params['optional1'];
    this.val2 = this.route.snapshot.params['optional2'];
  }

}
