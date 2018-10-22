import { Component, OnInit, ElementRef } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-logo1',
  templateUrl: './logo1.component.html',
  styleUrls: ['./logo1.component.scss']
})

export class Logo1Component implements OnInit {

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
  constructor(public element: ElementRef) { }

  ngOnInit() {
    this.parentLayer = this.element.nativeElement.querySelector('.parent_layer');
    this.setSky();
    this.setMoon();
    this.setSun();
    this.setLandscape();
    this.show = true;
    this.loop();
  }

  loop() {
    setInterval(() => {
      this.parentLayer = this.element.nativeElement.querySelector('.parent_layer');
      this.now++;
      if (this.now === 24) {
        this.now = 0;
      }
      this.setSky();
      this.setMoon();
      this.setSun();
      this.setLandscape();
      this.show = true;
    }, 1000);
  }


  setSky() {
    const gradient = this.element.nativeElement.querySelector('.layer1');
    gradient.style.background = this.gradients_collection[this.now];
  }

  setSun() {
    const sun = this.element.nativeElement.querySelector('.layer2');
    if ((this.now >= 6) && (this.now <= 19)) {
      sun.style.left = ((this.now - 6) * (this.parentLayer.offsetWidth / 12)) - 20 + 'px';
      sun.style.top = Math.abs(this.now - 12) * 15 + 'px';
      sun.style.opacity = 1;
    } else {
      sun.style.opacity = 0;
      sun.style.left = '-20px';
      sun.style.top = '90px';
    }
  }

  setMoon() {
    const moon = this.element.nativeElement.querySelector('.layer3');
    if ((this.now <= 6) || (this.now >= 19)) {
      if (this.now <= 6) {
        moon.style.top = this.now * 15 + 'px';
        moon.style.left = ((this.now + 6) * (this.parentLayer.offsetWidth / 12)) - 20 + 'px';
        moon.style.opacity = 1;
      } else {
        moon.style.opacity = 1;
        moon.style.top = Math.abs(this.now - 23) * 15 + 'px';
        moon.style.left = ((this.now - 19) * (this.parentLayer.offsetWidth / 12)) + 20 + 'px';
      }
    } else {
      moon.style.opacity = 0;
      moon.style.left = '-20px';
      moon.style.top = '90px';
    }
  }

  setLandscape() {
    const landscape = this.element.nativeElement.querySelector('.layer4');
    if (this.now <= 6) {
      landscape.style.backgroundPosition = '0px -543px';
    } else if (this.now === 7) {
      landscape.style.backgroundPosition = '0px -403px';
    } else if (this.now === 8) {
      landscape.style.backgroundPosition = '0px -123px';
    } else if (this.now <= 17) {
      landscape.style.backgroundPosition = '0px 17px';
    } else if (this.now < 20) {
      landscape.style.backgroundPosition = '0px -263px';
    } else if (this.now <= 22) {
      landscape.style.backgroundPosition = '0px -403px';
    } else {
      landscape.style.backgroundPosition = '0px -543px';
    }
  }
}
