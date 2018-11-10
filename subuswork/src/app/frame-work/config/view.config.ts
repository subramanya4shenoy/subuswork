import { HomeConfig } from './views/home.view.config';
import { ElementConfig } from './views/element.view.config';
import { LogoConfig } from './views/logo.view.config';
import { ExtraConfig } from './views/extra.view.config';
import { AboutConfig } from './views/about.view.config';

export const ViewConfig = {
    home: {
        isActive : true,
        show_title: true,
        show_message: true,
        route_link: '',
        title: 'Timeline',
        config: HomeConfig
    },
    element: {
        isActive : true,
        show_title: true,
        show_message: true,
        route_link: '',
        title: 'element',
        config: ElementConfig
    },
    logo: {
        isActive : true,
        show_title: true,
        show_message: true,
        route_link: '',
        title: 'logo',
        config: LogoConfig
    },
    extra: {
        isActive : true,
        show_title: true,
        show_message: true,
        route_link: '',
        title: 'extra',
        config: ExtraConfig
    },
    about: {
        isActive : true,
        show_title: true,
        show_message: true,
        route_link: '',
        title: 'about',
        config: AboutConfig
    }
};
