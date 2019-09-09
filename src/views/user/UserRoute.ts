import UserRootPage from "@/views/user/UserRootPage.vue";
import UserIndexPage from "@/views/user/index/UserIndexPage.vue";

export default {
    path: '/user',
    component: UserRootPage,
    children: [
        {
            path: '',
            name: 'user-index',
            component: UserIndexPage
        }
    ]
}