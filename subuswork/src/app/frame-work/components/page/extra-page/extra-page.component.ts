import { Component, OnInit, HostListener, ElementRef, Renderer2, AfterViewInit, OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { extraFeed } from '../../../config/feeds/extra.directory';
import { Location } from '@angular/common';
import { $ } from 'protractor';

@Component({
  selector: 'app-extra-page',
  templateUrl: './extra-page.component.html',
  styleUrls: ['./extra-page.component.scss']
})
export class ExtraPageComponent implements OnInit, AfterViewInit, OnDestroy {

  public extra;
  public show = false;
  public hero = '';
  public sticky = false;
  public stickOpen = false;

  constructor(private activeRoute: ActivatedRoute,
              public router: Router,
              public element: ElementRef,
              private renderer: Renderer2,
              public location: Location) { }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params.id;
    this.getDetails(id);
  }

  ngAfterViewInit() {
    document.body.style.overflow = 'hidden';
    console.log();
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
    this.stickOpen = true;
    this.hero = url;
  }

  goback() {
    document.body.style.overflow = 'auto';
    event.preventDefault();
    this.location.back();
  }

  // on scroll stick the header

  @HostListener('window:scroll', ['$event'])
  handleScroll($event) {
    const windowScroll = $event.target.scrollTop;
    console.log(windowScroll);
    const offsetWidth = (window.innerWidth * .87);
    if (windowScroll >= offsetWidth) {
      this.sticky = true;
      console.log(true);
    } else {
      this.sticky = false;
    this.stickOpen = false;
      console.log(false);
    }
    // console.log(windowScroll);
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }

}
