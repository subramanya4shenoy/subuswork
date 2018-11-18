import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../../config/view.config';

@Component({
  selector: 'app-logo-default-template',
  templateUrl: './logo-default-template.component.html',
  styleUrls: ['./logo-default-template.component.scss']
})
export class LogoDefaultTemplateComponent implements OnInit {

  public view = ViewConfig.logo.config.templates.defaultTemplate;
  public masterPageSize = this.view.load_per_click;
  public allFeeds = ViewConfig.logo.config.feed.features;
  public totalFeeds = ViewConfig.logo.config.feed.total_count;
  public texts = ViewConfig.logo.config.texts;

  public feeds = [];
  public pageSize: number;
  public temp_feed_size = 0;
  public opened_feed = [];

  constructor() { }

  ngOnInit() {
    this.pageSize = this.masterPageSize;
    this.filterFeeds();
    console.log(this.feeds);
  }

  filterFeeds() {
    this.opened_feed = [];
    for (this.temp_feed_size; this.temp_feed_size < this.pageSize; this.temp_feed_size++) {
      this.feeds.push(this.allFeeds[this.temp_feed_size]);
      this.opened_feed.push(this.allFeeds[this.temp_feed_size].logo_id);
    }
  }

  fetchMoreFeed() {
    this.pageSize += this.masterPageSize;
    if (this.pageSize >= this.totalFeeds) {
      this.pageSize = this.totalFeeds;
    }
    this.filterFeeds();
  }

}
