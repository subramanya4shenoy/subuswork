import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-river',
  templateUrl: './main-river.component.html',
  styleUrls: ['./main-river.component.scss']
})

export class MainRiverComponent implements OnInit {

  public view: string;

  constructor() { }

  ngOnInit() {
    this.view = 'home';
  }

  changeView(newmenu) {
    this.view = newmenu;
  }

}
