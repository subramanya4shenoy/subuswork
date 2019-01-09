import { logoFeed } from '../feeds/logo.directory';

export const LogoConfig = {
    shouldShow: true,
    message: [
        'Art that stays and moves'
    ],
    texts: [
        'more',
        'no more'
    ],
    feed: logoFeed,
    templates: {
        defaultTemplate: {
            load_per_click: 8
        }
    }
};
