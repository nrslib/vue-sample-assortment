import LoginRootPage from "@/views/login/LoginRootPage.vue";

export default {
    path: '/login',
    name: 'login',
    component: LoginRootPage,
    meta: { noAuth: true }
};
