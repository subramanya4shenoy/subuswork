import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-element-page',
  templateUrl: './element-page.component.html',
  styleUrls: ['./element-page.component.scss']
})
export class ElementPageComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, public router: Router, public location: Location) { }

  public element = 0;

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.element = id;
  }

  goback() {
    event.preventDefault();
    this.location.back();
  }
}
