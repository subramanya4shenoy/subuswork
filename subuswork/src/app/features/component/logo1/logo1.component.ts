import { Component, OnInit, ElementRef } from '@angular/core';
import * as moment from 'moment';

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
    '#fff900',
    '#ffffce',
    '#fff',
    '#fff',
    '#fff',
    '#fff',
    '#ffdbf4',
    '#b7c9e5',
    '#e5b7e1',
    '#ff4242',
    '#800247',
    '#1a1c35',
    '#1a1c35',
    '#1a1c35',
    '#1a1c35'
  ];
  private now = parseInt(moment().format('HH'), 10);

  constructor(public element: ElementRef) { }

  ngOnInit() {
    const gradient = this.element.nativeElement.querySelector('.layer1');
    const sun = this.element.nativeElement.querySelector('.layer2');
    const moon = this.element.nativeElement.querySelector('.layer3');
    this.now = 2;
    gradient.style.background = this.gradients_collection[this.now];
    if ((this.now >= 6) && (this.now <= 19)) {
      sun.style.display = 'vissible';
      sun.style.top = Math.abs(this.now - 12) * 5 + 'px';
      sun.style.left = (this.now - 6) * 42.86 + 'px';
    } else {
      sun.style.display = 'none';
    }

    if ((this.now <= 6) || (this.now >= 19)) {
      if ( this.now <= 6) {
        moon.style.display = 'vissible';
        moon.style.top = this.now * 5 + 'px';
        moon.style.left = (this.now + 6) * 42.86 + 'px';
      } else {
        moon.style.display = 'vissible';
        moon.style.top = Math.abs(this.now - 23) * 5 + 'px';
        moon.style.left = (this.now - 19) * 42.86 + 'px';
      }
    } else {
      moon.style.display = 'none';
    }

  }

}
