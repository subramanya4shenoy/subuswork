import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../../../config/view.config';

@Component({
  selector: 'app-home-default-template',
  templateUrl: './home-default-template.component.html',
  styleUrls: ['./home-default-template.component.scss']
})
export class HomeDefaultTemplateComponent implements OnInit {

  public view = ViewConfig.home.config.templates.defaultTemplate;
  public pageSize = ViewConfig.home.config.templates.defaultTemplate.load_per_click;
  public feeds = ViewConfig.home.config.feed.features;

  constructor() { }

  ngOnInit() {
  }

}
