import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MasterConfig } from '../../config/master.config';
import * as _ from 'underscore';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public menu: EventEmitter<string> = new EventEmitter();

  public selectedMenu: string;
  public menuList = MasterConfig.layoutConfig.menus;
  private baseURl = MasterConfig.layoutConfig.icon_firebase_BASEURL;

  constructor() { }

  ngOnInit() {
    _.each(this.menuList, (menu) => {
      if (menu.menu_default) {
        this.selectedMenu = menu.menu_string;
      }
    });
  }

  changeMenu(menu: string) {
    this.selectedMenu = menu;
    this.menu.emit(menu);
  }

}
