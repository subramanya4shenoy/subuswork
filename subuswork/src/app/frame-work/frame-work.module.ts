import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { TopBarComponent } from './masterlayout/top-bar/top-bar.component';
import { MainRiverComponent } from './masterlayout/main-river/main-river.component';
import { SideMenuComponent } from './masterlayout/side-menu/side-menu.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { ElementContentComponent } from './components/element-content/element-content.component';
import { LogoContentComponent } from './components/logo-content/logo-content.component';
import { ExtraContentComponent } from './components/extra-content/extra-content.component';
import { AboutContentComponent } from './components/about-content/about-content.component';
import { SocialConnectBarComponent } from './components/social-connect-bar/social-connect-bar.component';
// tslint:disable-next-line:max-line-length
import { HomeDefaultTemplateComponent } from './masterlayout/river-templates/home-templates/home-default-template/home-default-template.component';
// tslint:disable-next-line:max-line-length
import { LogoDefaultTemplateComponent } from './masterlayout/river-templates/logo-template/logo-default-template/logo-default-template.component';
// tslint:disable-next-line:max-line-length
import { ExtraDefaultTemplateComponent } from './masterlayout/river-templates/extra-template/extra-default-template/extra-default-template.component';
import { LogoPageComponent } from './components/page/logo-page/logo-page.component';
import { ElementPageComponent } from './components/page/element-page/element-page.component';
import { ExtraPageComponent } from './components/page/extra-page/extra-page.component';
import { MePageComponent } from './components/page/me-page/me-page.component';
// tslint:disable-next-line:max-line-length
import { ElementDefaultTemplateComponent } from './masterlayout/river-templates/element-template/element-default-template/element-default-template.component';

// all feature elements listed below
import { Logo1Component } from '../features/component/logo1/logo1.component';
import { ElementDynamicLogoComponent } from '../features/elements/element-dynamic-logo/element-dynamic-logo.component';


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
    ElementDynamicLogoComponent,
    HomeContentComponent,
    ElementContentComponent,
    LogoContentComponent,
    ExtraContentComponent,
    AboutContentComponent,
    SocialConnectBarComponent,
    HomeDefaultTemplateComponent,
    LogoDefaultTemplateComponent,
    ExtraDefaultTemplateComponent,
    LogoPageComponent,
    ElementPageComponent,
    ExtraPageComponent,
    MePageComponent,
    ElementDefaultTemplateComponent
  ],
  exports: [
    MasterlayoutComponent
  ]
})
export class FrameWorkModule { }
