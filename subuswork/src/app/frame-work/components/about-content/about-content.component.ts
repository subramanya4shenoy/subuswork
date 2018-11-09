import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference } from 'angularfire2/storage';


@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss']
})
export class AboutContentComponent implements OnInit {

  public ref: AngularFireStorageReference;

  constructor(private afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  redirectTo(social: string) {
    switch (social) {
      case 'instagram':
        window.open('https://www.instagram.com/subuswork/?hl=en', '_blank');
        break;
      case 'facebook':
        window.open('https://www.facebook.com/subramanya.shenoy', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/subramanya-shenoy-06b3a972/', '_blank');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/channel/UCqSUgNg3IbN0f0TRSyKTkAw', '_blank');
        break;
      case 'git':
        window.open('https://github.com/subramanya4shenoy/subuswork', '_blank');
        break;
      default:
        break;
    }
  }

}
