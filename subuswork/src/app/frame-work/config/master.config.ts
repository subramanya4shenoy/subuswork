import { FireBaseConfig } from './firebase.config';
import { LayoutConfig } from './layout.config';
import { SocialConfig } from './social.config';
import { ViewConfig } from './view.config';

export const MasterConfig = {
    version: 0,
    language: 'EN',
    domainDefaultURL: '/',
    menu_count: 5,
    social_link_count: 5,
    show_load_screen: false,
    layoutConfig: LayoutConfig,
    fireBaseConfig: FireBaseConfig,
    socialLinkConfig: SocialConfig,
    viewConfig: ViewConfig
};
