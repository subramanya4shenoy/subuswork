import { Component, OnInit, ElementRef, ChangeDetectorRef, SimpleChange, AfterViewInit, OnDestroy } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-logo1',
  templateUrl: './logo1.component.html',
  styleUrls: ['./logo1.component.scss']
})

export class Logo1Component implements OnInit, AfterViewInit, OnDestroy {


  private gradients_collection = [
    '#01051D',
    '#01051D',
    '#01051D',
    '#01051D',
    '#01051D',
    '#01051D',
    '#535F77',
    '#7E7693',
    '#D8A5B7',
    '#b7c9e5',
    '#ffffce',
    '#fff',
    '#fff',
    '#fff',
    '#F9F871',
    '#FFC75F',
    '#FF9671',
    '#FF6F91',
    '#D65DB1',
    '#845EC2',
    '#01051D',
    '#01051D',
    '#01051D',
    '#01051D'
  ];
  private now;
  private timer;
  public show: boolean;
  public parentLayer: any;
  public sky;
  public cloud;
  public sun;
  public moon;
  public landscape;
  public star;
  constructor(public element: ElementRef,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.show = false;
    this.now = parseInt(moment().format('HH'), 10);
    this.timer = setInterval(() => {
      this.now = parseInt(moment().format('HH'), 10);
      }, 10000);
  }

  ngAfterViewInit() {
    this.parentLayer = this.element.nativeElement.querySelector('.parent_layer');
    this.sky = this.element.nativeElement.querySelector('.layer1');
    this.sun = this.element.nativeElement.querySelector('.layer2');
    this.moon = this.element.nativeElement.querySelector('.layer3');
    this.landscape = this.element.nativeElement.querySelector('.layer4');
    this.cloud = this.element.nativeElement.querySelector('.layer6');
    this.star = this.element.nativeElement.querySelector('.layer7');
    this.show = true;
    this.cdr.detectChanges();
    this.setView();
  }

  ngOnchanges(changes: SimpleChange) {
    if (changes['now']) {
        console.log(changes, changes['now']);
    }
  }

  setView() {
    setTimeout(() => {
      this.setMoon();
      this.setSun();
      this.setLandscape();
      this.setSky();
      this.setCloud();
      this.setStar();
    }, 1000);
  }

  setSky() {
    this.sky.style.background = this.gradients_collection[this.now];
  }

  setSun() {
    if ((this.now >= 6) && (this.now <= 19)) {
      this.sun.style.left = ((this.now - 6) * (this.parentLayer.offsetWidth / 12)) - 20 + 'px';
      this.sun.style.top = Math.abs(this.now - 12) * 7 + 'px';
      this.sun.style.opacity = 1;
    } else {
      this.sun.style.opacity = 0;
      this.sun.style.left = '-40px';
      this.sun.style.top = '40px';
    }
  }

  setMoon() {
    if ((this.now <= 6) || (this.now >= 19)) {
      if (this.now <= 6) {
        this.moon.style.top = this.now * 7 + 'px';
        this.moon.style.left = ((this.now + 6) * (this.parentLayer.offsetWidth / 12)) - 20 + 'px';
        this.moon.style.opacity = 1;
      } else {
        this.moon.style.opacity = 1;
        this.moon.style.top = Math.abs(this.now - 23) * 7 + 'px';
        this.moon.style.left = ((this.now - 19) * (this.parentLayer.offsetWidth / 12)) + 20 + 'px';
      }
    } else {
      this.moon.style.opacity = 0;
      this.moon.style.left = '-40px';
      this.moon.style.top = '40px';
    }
  }

  setLandscape() {
    if (this.now <= 6) {
      this.landscape.style.backgroundPosition = '0px -379px';
    } else if (this.now === 7) {
      this.landscape.style.backgroundPosition = '0px -379px';
    } else if (this.now === 8) {
      this.landscape.style.backgroundPosition = '0px -99px';
    } else if (this.now <= 17) {
      this.landscape.style.backgroundPosition = '0px 41px';
    } else if (this.now < 20) {
      this.landscape.style.backgroundPosition = '0px -239px';
    } else if (this.now <= 22) {
      this.landscape.style.backgroundPosition = '0px -379px';
    } else {
      this.landscape.style.backgroundPosition = '0px -379px';
    }
  }

  setCloud() {
    if ((this.now >= 7) && (this.now <= 19)) {
      this.cloud.style.opacity = Math.abs((this.now - 7)) / 10;
    } else {
      this.cloud.style.opacity = 0;
    }
  }

  setStar() {
    if ((this.now < 7) || (this.now >= 19)) {
      this.star.style.opacity = Math.abs((this.now - 7)) / 10;
    } else {
      this.star.style.opacity = 0;
    }
  }

  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

}

