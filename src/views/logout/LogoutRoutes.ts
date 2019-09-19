import LogoutRootPage from './LogoutRootPage.vue';

export default {
    path: '/logout',
    name: 'logout',
    component: LogoutRootPage,
    meta: { noAuth: true },
};
