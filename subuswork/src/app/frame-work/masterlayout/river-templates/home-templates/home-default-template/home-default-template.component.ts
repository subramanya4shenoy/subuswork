import { Component, OnInit } from '@angular/core';
import { ViewConfig } from '../../../../config/view.config';

@Component({
  selector: 'app-home-default-template',
  templateUrl: './home-default-template.component.html',
  styleUrls: ['./home-default-template.component.scss']
})
export class HomeDefaultTemplateComponent implements OnInit {

  public view = ViewConfig.home.config.templates.defaultTemplate;
  public masterPageSize = ViewConfig.home.config.templates.defaultTemplate.load_per_click;
  public allFeeds = ViewConfig.home.config.feed.features;
  public totalFeeds = ViewConfig.home.config.feed.total_count;
  public texts = ViewConfig.home.config.texts;

  public feeds = [];
  public pageSize: number;
  public temp_feed_size = 0;
  public opened_feed = [];

  constructor() { }

  ngOnInit() {
    this.pageSize = this.masterPageSize;
    this.filterFeeds();
  }

  filterFeeds() {
    this.opened_feed = [];
    for (this.temp_feed_size; this.temp_feed_size < this.pageSize; this.temp_feed_size++) {
      this.feeds.push(this.allFeeds[this.temp_feed_size]);
      this.opened_feed.push(this.allFeeds[this.temp_feed_size].feature_id);
    }
  }

  fetchMoreFeed() {
    this.pageSize += this.masterPageSize;
    if (this.pageSize >= this.totalFeeds) {
      this.pageSize = this.totalFeeds;
    }
    this.filterFeeds();
  }

  bannerAction(id) {
    const temp_feed = [];
    if (this.opened_feed.indexOf(id) > -1) {
      // openPreview
    } else {
      const reminder = id % 3;
      if (reminder === 0) {
        temp_feed[2] = (id);
        temp_feed[1] = (id - 1);
        temp_feed[0] = id - 2;
      } else if (reminder === 2) {
        temp_feed[1] = (id);
        temp_feed[0] = (id - 1);
        if ((id + 1) <= this.totalFeeds) {
          temp_feed[2] = (id + 1);
        }
      } else if (reminder === 1) {
        temp_feed[0] = (id);
        if ((id + 1) < this.totalFeeds) {
          temp_feed[1] = (id + 1);
        }
        if ((id + 2) <= this.totalFeeds) {
          temp_feed[2] = (id + 2);
        }
      }
      this.opened_feed = temp_feed;
    }
  }
}
