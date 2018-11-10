import { Component, OnInit } from '@angular/core';
import { SocialConfig } from '../../config/social.config';

@Component({
  selector: 'app-social-connect-bar',
  templateUrl: './social-connect-bar.component.html',
  styleUrls: ['./social-connect-bar.component.scss']
})
export class SocialConnectBarComponent implements OnInit {

  public base_url = SocialConfig.baseURL;
  private social_link = SocialConfig.socialLink;

  constructor() { }

  ngOnInit() {
  }

  redirectTo(social: string, newtab: boolean) {
    if (newtab) {
      window.open(social, '_blank');
    } else {
      window.open(social);
    }
  }
}
