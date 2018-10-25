import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-logo1',
  templateUrl: './logo1.component.html',
  styleUrls: ['./logo1.component.scss']
})

export class Logo1Component implements OnInit, AfterViewInit {

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
  private now = parseInt(moment().format('HH'), 10);
  public show = false;
  public parentLayer: any;
  public sky;
  public cloud;
  public sun;
  public moon;
  public landscape;
  constructor(public element: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
        // this.now = 18;
        this.parentLayer = this.element.nativeElement.querySelector('.parent_layer');
        this.sky = this.element.nativeElement.querySelector('.layer1');
        this.sun = this.element.nativeElement.querySelector('.layer2');
        this.moon = this.element.nativeElement.querySelector('.layer3');
        this.landscape = this.element.nativeElement.querySelector('.layer4');
        this.cloud = this.element.nativeElement.querySelector('.layer6');
        this.setMoon();
        this.setSun();
        this.setLandscape();
        this.setSky();
        this.show = true;
        this.loop();
  }

  loop() {
    setInterval(() => {
      this.now++;
      if (this.now === 24) {
        this.now = 0;
      }
      this.setSky();
      this.setCloud();
      this.setLandscape();
      this.setMoon();
      this.setSun();
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
      this.landscape.style.backgroundPosition = '0px 40px';
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
        this.cloud.style.opacity = Math.abs((this.now - 7)) / 10 ;
    } else {
      this.cloud.style.opacity = 0;
    }
  }

  // setStar(){

  // }
}
