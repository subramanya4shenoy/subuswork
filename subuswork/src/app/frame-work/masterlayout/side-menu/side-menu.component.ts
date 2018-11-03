import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public selectedMenu: string;

  constructor() { }

  ngOnInit() {
    this.selectedMenu = 'Home';
  }

  changeMenu(menu: string) {
    this.selectedMenu = menu;
  }

}
