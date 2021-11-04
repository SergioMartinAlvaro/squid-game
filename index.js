import './src/PWA/index';

import { Router } from '@vaadin/router';

window.addEventListener('load', () => { 
  initRouter();
});

function initRouter() {
  const router = new Router(document.querySelector('main')); 
  router.setRoutes([
    {
      path: '/',
      component: 'main-view',
      action: () =>
        import(/* webpackChunkName: "stats" */ './src/PWA/views/main/main-view')
    },
    {
      path: '/stats',
      component: 'stats-view',
      action: () =>
        import(/* webpackChunkName: "stats" */ './src/PWA/views/stats/stats-view') // 
    },
    {
      path: '(.*)', 
      component: 'not-found-view',
      action: () =>
        import(/* webpackChunkName: "not-found-view" */ './src/PWA/views/not-found/not-found-view')
    }
  ]);
}