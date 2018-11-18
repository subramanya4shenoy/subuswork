import { extraFeed } from '../feeds/extra.directory';

export const ExtraConfig = {
    shouldShow: true,
    message: [
        'Projects that run on their own..'
    ],
    texts: [
        'more',
        'no more'
    ],
    feed: extraFeed,
    templates: {
        defaultTemplate: {
            load_per_click: 3
        }
    }
};
