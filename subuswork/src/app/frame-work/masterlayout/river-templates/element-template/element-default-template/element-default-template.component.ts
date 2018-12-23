import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../../../config/view.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-default-template',
  templateUrl: './element-default-template.component.html',
  styleUrls: ['./element-default-template.component.scss']
})
export class ElementDefaultTemplateComponent implements OnInit {

  public view = ViewConfig.extra.config.templates.defaultTemplate;
  public masterPageSize = ViewConfig.extra.config.templates.defaultTemplate.load_per_click;
  public allFeeds = ViewConfig.extra.config.feed.features;
  public totalFeeds = ViewConfig.extra.config.feed.total_count;
  public texts = ViewConfig.extra.config.texts;

  public feeds = [];
  public pageSize: number;
  public temp_feed_size = 0;
  public opened_feed = [];

  constructor(public router: Router) { }

  ngOnInit() {
    this.pageSize = this.masterPageSize;
    this.filterFeeds();
  }

  filterFeeds() {
    this.opened_feed = [];
    for (this.temp_feed_size; this.temp_feed_size < this.pageSize; this.temp_feed_size++) {
      this.feeds.push(this.allFeeds[this.temp_feed_size]);
      this.opened_feed.push(this.allFeeds[this.temp_feed_size].extra_id);
    }
  }

  fetchMoreFeed() {
    this.pageSize += this.masterPageSize;
    if (this.pageSize >= this.totalFeeds) {
      this.pageSize = this.totalFeeds;
    }
    this.filterFeeds();
  }

  openElementDetailsPage(id) {
    this.router.navigate(['extra/' + id]);
  }

}
