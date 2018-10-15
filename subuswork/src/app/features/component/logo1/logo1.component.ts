import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo1',
  templateUrl: './logo1.component.html',
  styleUrls: ['./logo1.component.scss']
})
export class Logo1Component implements OnInit {

  constructor() { }
  public time = 10;
  ngOnInit() {
    setInterval(() => {
      if (this.time === 30) {
        this.time = 7;
      } else {
        this.time++;
      }
    }, 500);
  }

}
