import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../config/view.config';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})

export class HomeContentComponent implements OnInit {

  public view = ViewConfig.home;

  constructor() { }

  ngOnInit() {
  }

}
