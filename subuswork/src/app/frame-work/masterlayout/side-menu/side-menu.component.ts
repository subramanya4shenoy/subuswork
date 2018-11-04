import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Output()
  public menu: EventEmitter<string> = new EventEmitter();

  public selectedMenu: string;

  constructor() { }

  ngOnInit() {
    this.selectedMenu = 'home';
  }

  changeMenu(menu: string) {
    this.selectedMenu = menu;
    this.menu.emit(menu);
  }

}
