import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { extraFeed } from '../../../config/feeds/extra.directory';
import { Location } from '@angular/common';

@Component({
  selector: 'app-extra-page',
  templateUrl: './extra-page.component.html',
  styleUrls: ['./extra-page.component.scss']
})
export class ExtraPageComponent implements OnInit {

  public extra;
  public show = false;
  public hero = '';
  constructor(private activeRoute: ActivatedRoute, public router: Router, public location: Location) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.getDetails(id);
  }

  public getDetails(id) {
    this.extra = extraFeed.features.find(function (allLogo) {
      return allLogo.extra_id === parseInt(id, 10);
    });
    if (this.extra === undefined) {
      this.router.navigate(['']);
    } else {
      this.hero = this.extra.extra_hero_image_url;
      this.show = true;
    }
    console.log(this.extra);
  }

  changeHero(url) {
    this.hero = url;
  }

  goback() {
    event.preventDefault();
    this.location.back();
  }

}
