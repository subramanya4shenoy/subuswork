import { FeaturesList } from '../features.directory';

export const HomeConfig = {
    shouldShow: true,
    message: [
        'Lazy to build the backend. All individual project is treated as new github projects and linked here. sorry! '
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
