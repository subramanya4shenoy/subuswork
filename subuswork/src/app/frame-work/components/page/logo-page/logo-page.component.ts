import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { logoFeed } from '../../../config/feeds/logo.directory';
import {Location} from '@angular/common';

@Component({
  selector: 'app-logo-page',
  templateUrl: './logo-page.component.html',
  styleUrls: ['./logo-page.component.scss']
})

export class LogoPageComponent implements OnInit {

  public logo;
  public show = false;
  constructor(private activeRoute: ActivatedRoute, public router: Router, public location: Location) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    console.log(id);
    this.getDetails(id);
  }

  public getDetails(id) {
    this.logo = logoFeed.features.find(function (allLogo) {
      return allLogo.logo_id === parseInt(id, 10);
    });
    if (this.logo === undefined) {
      this.router.navigate(['']);
    } else {
      this.show = true;
    }
    console.log(this.logo);
  }

  goback() {
    event.preventDefault();
    this.location.back();
  }
}
