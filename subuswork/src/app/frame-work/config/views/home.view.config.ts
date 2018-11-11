import { FeaturesList } from '../features.directory';

export const HomeConfig = {
    shouldShow: true,
    message: [
        'Hang on! I am almost there.. Almost..'
    ],
    texts: [
        'more',
        'no more'
    ],
    feed: FeaturesList,
    templates: {
        defaultTemplate: {
            load_per_click: 3
        }
    }
};
