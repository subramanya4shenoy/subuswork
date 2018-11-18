import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../config/view.config';


@Component({
  selector: 'app-logo-content',
  templateUrl: './logo-content.component.html',
  styleUrls: ['./logo-content.component.scss']
})
export class LogoContentComponent implements OnInit {

  public view = ViewConfig.logo;

  constructor() { }

  ngOnInit() {
  }

}
