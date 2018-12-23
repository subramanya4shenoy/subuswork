import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../config/view.config';

@Component({
  selector: 'app-element-content',
  templateUrl: './element-content.component.html',
  styleUrls: ['./element-content.component.scss']
})
export class ElementContentComponent implements OnInit {

  private view = ViewConfig.element;

  constructor() { }

  ngOnInit() {
  }

}
