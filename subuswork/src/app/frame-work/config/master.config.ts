import { FireBaseConfig } from './firebase.config';
import { LayoutConfig } from './layout.config';
import { SocialConfig } from './social.config';

export class MasteConfig {
    public version = 0;
    public language = 'EN';
    public domainDefaultURL = '/';
    public menu_count = 5;
    public social_link_count = 5;
    public show_load_screen = false;
    public layoutConfig: LayoutConfig;
    public fireBaseConfig: FireBaseConfig;
    public socialLinkConfig: SocialConfig;

    constructor() {

    }
}
