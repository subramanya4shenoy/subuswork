import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../config/view.config';


@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent implements OnInit {

  public view = ViewConfig.about;

  constructor() { }

  ngOnInit() {
  }
}
