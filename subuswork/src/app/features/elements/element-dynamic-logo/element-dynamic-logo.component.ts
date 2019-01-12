import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-element-dynamic-logo',
  templateUrl: './element-dynamic-logo.component.html',
  styleUrls: ['./element-dynamic-logo.component.scss']
})
export class ElementDynamicLogoComponent implements OnInit {

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
  private bg: number;
  private gradients_collection_bg = [
    '#01051D',
    '#535F77',
    '#7E7693',
    '#D8A5B7',
    '#b7c9e5',
    '#ffffce',
    '#fff',
    '#F9F871',
    '#FFC75F',
    '#FF9671',
    '#FF6F91',
    '#D65DB1',
    '#845EC2',
  ];
  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.bg = 6;
  }

  changeBG = (val) => {
      this.bg = val;
  }

}
