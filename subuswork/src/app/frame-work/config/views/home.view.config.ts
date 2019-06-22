import { FeaturesList } from '../features.directory';

export const HomeConfig = {
    shouldShow: true,
    message: [
        'Okay. Got rid of service worker, as it was breaking everything. '
    ],
    texts: [
        'more',
        'no more'
    ],
    feed: FeaturesList,
    templates: {
        defaultTemplate: {
            load_per_click: 2
        }
    }
};
