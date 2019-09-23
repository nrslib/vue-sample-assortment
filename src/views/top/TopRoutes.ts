import TopRootPage from "@/views/top/TopRootPage.vue";
import TopIndexPage from "@/views/top/index/TopIndexPage.vue";

export default {
    path: '/',
    component: TopRootPage,
    meta: {role: 'any'},
    children: [
        {
            path: '',
            name: 'top',
            component: TopIndexPage
        }
    ]
};
