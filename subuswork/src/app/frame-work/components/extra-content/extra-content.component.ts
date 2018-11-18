import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../config/view.config';

@Component({
  selector: 'app-extra-content',
  templateUrl: './extra-content.component.html',
  styleUrls: ['./extra-content.component.scss']
})
export class ExtraContentComponent implements OnInit {

  private view = ViewConfig.extra;

  constructor() { }

  ngOnInit() {
  }

}
