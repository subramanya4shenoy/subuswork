import { Component, OnInit, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { lookup } from 'dns';

@Component({
  selector: 'app-logo1',
  templateUrl: './logo1.component.html',
  styleUrls: ['./logo1.component.scss']
})

export class Logo1Component implements OnInit {

  private gradients_collection = [
    '#1a1c35',
    '#1a1c35',
    '#1a1c35',
    '#1a1c35',
    '#1a1c35',
    '#1a1c35',
    '#42233f',
    '#676349',
    '#ccbe63',
    '#b7c9e5',
    '#ffffce',
    '#fff',
    '#fff',
    '#fff',
    '#fff',
    '#b7c9e5',
    '#ffdbf4',
    '#e5b7e1',
    '#ff4242',
    '#800247',
    '#1a1c35',
    '#1a1c35',
    '#1a1c35',
    '#1a1c35'
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
      this.now++;
      if (this.now === 24) {
        this.now = 0;
      }
      this.setSky();
      this.setMoon();
      this.setSun();
      this.setLandscape();
      this.show = true;
    }, 60000);
  }


  setSky() {
    const gradient = this.element.nativeElement.querySelector('.layer1');
    gradient.style.background = this.gradients_collection[this.now];
  }

  setSun() {
    const sun = this.element.nativeElement.querySelector('.layer2');
    if ((this.now >= 6) && (this.now <= 19)) {
      sun.style.top = Math.abs(this.now - 12) * 5 + 'px';
      sun.style.left = (this.now - 6) * (this.parentLayer.offsetWidth / 12) + 'px';
      sun.style.opacity = 1;
    } else {
      sun.style.opacity = 0;
    }
  }

  setMoon() {
    const moon = this.element.nativeElement.querySelector('.layer3');
    if ((this.now <= 6) || (this.now >= 19)) {
      if (this.now <= 6) {
        moon.style.top = this.now * 5 + 'px';
        moon.style.left = (this.now + 6) * (this.parentLayer.offsetWidth / 12) + 'px';
        moon.style.zIndex = 5;
        moon.style.opacity = 1;
        if (this.now === 6) {
          moon.style.zIndex = 3;
        }
      } else {
        moon.style.opacity = 1;
        moon.style.top = Math.abs(this.now - 23) * 5 + 'px';
        moon.style.left = (this.now - 19) * (this.parentLayer.offsetWidth / 12) + 'px';
      }
    } else {
      moon.style.opacity = 0;
    }
  }

  setLandscape() {
    const landscape = this.element.nativeElement.querySelector('.layer4');
    if (this.now <= 6) {
      landscape.style.backgroundPosition = '0px -544px';
    } else if (this.now === 7) {
      landscape.style.backgroundPosition = '0px -404px';
    } else if (this.now === 8) {
      landscape.style.backgroundPosition = '0px -124px';
    } else if (this.now <= 17) {
      landscape.style.backgroundPosition = '0px 17px';
    } else if (this.now < 20) {
      landscape.style.backgroundPosition = '0px -264px';
    } else if (this.now <= 22) {
      landscape.style.backgroundPosition = '0px -404px';
    } else {
      landscape.style.backgroundPosition = '0px -544px';
    }
  }
}
