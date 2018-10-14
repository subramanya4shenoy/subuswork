import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { TopBarComponent } from './masterlayout/top-bar/top-bar.component';
import { MainRiverComponent } from './masterlayout/main-river/main-river.component';
import { SideMenuComponent } from './masterlayout/side-menu/side-menu.component';
import { Logo1Component } from '../features/component/logo1/logo1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MasterlayoutComponent,
    TopBarComponent,
    MainRiverComponent,
    SideMenuComponent,
    Logo1Component
  ],
  exports: [
    MasterlayoutComponent
  ]
})
export class FrameWorkModule { }
