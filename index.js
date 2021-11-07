import './src/PWA/index';
import './src/utils/EventEmitter/EventEmitter';

import { Router } from '@vaadin/router';

window.addEventListener('load', () => {
    initRouter();
});

function initRouter() {
    const router = new Router(document.querySelector('main'));
    router.setRoutes([{
            path: '/',
            component: 'login-view',
            action: () =>
                import ( /* webpackChunkName: "stats" */ './src/PWA/views/login/login-view')
        },
        {
            path: '/main',
            component: 'main-view',
            action: () =>
                import ( /* webpackChunkName: "stats" */ './src/PWA/views/main/main-view') // 
        },
        {
            path: '(.*)',
            component: 'login-view',
            action: () =>
                import ( /* webpackChunkName: "not-found-view" */ './src/PWA/views/login/login-view')
        }
    ]);
}