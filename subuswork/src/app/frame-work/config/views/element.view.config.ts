import { elementFeed } from '../feeds/element.directory';

export const ElementConfig = {
    shouldShow: true,
    message: [
        'From the web. For the web'
    ],
    texts: [
        'more',
        'no more'
    ],
    feed: elementFeed,
    templates: {
        defaultTemplate: {
            load_per_click: 1
        }
    }
};
