import TopRootPage from "@/views/top/TopRootPage.vue";
import TopIndexPage from "@/views/top/index/TopIndexPage.vue";

export default {
    path: '/',
    component: TopRootPage,
    children: [
        {
            path: '',
            name: 'top-index',
            component: TopIndexPage
        }
    ]
};
