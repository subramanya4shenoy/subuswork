import { FeaturesList } from '../features.directory';

export const HomeConfig = {
    shouldShow: true,
    message: [
        'Migrated to angular7, PWA and service workers are broken, hold on till I find a solution.'
    ],
    texts: [
        'more',
        'no more'
    ],
    feed: FeaturesList,
    templates: {
        defaultTemplate: {
            load_per_click: 1
        }
    }
};
