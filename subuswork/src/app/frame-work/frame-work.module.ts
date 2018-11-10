import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { TopBarComponent } from './masterlayout/top-bar/top-bar.component';
import { MainRiverComponent } from './masterlayout/main-river/main-river.component';
import { SideMenuComponent } from './masterlayout/side-menu/side-menu.component';
import { Logo1Component } from '../features/component/logo1/logo1.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ElementContentComponent } from './components/element-content/element-content.component';
import { LogoContentComponent } from './components/logo-content/logo-content.component';
import { ExtraContentComponent } from './components/extra-content/extra-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { SocialConnectBarComponent } from './components/social-connect-bar/social-connect-bar.component';
import { HomeDefaultTemplateComponent } from './masterlayout/river-templates/home-templates/home-default-template/home-default-template.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MasterlayoutComponent,
    TopBarComponent,
    MainRiverComponent,
    SideMenuComponent,
    Logo1Component,
    HomeContentComponent,
    ElementContentComponent,
    LogoContentComponent,
    ExtraContentComponent,
    AboutContentComponent,
    SocialConnectBarComponent,
    HomeDefaultTemplateComponent
  ],
  exports: [
    MasterlayoutComponent
  ]
})
export class FrameWorkModule { }
