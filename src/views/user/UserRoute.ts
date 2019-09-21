import UserRootPage from "@/views/user/UserRootPage.vue";
import UserIndexPage from "@/views/user/index/UserIndexPage.vue";
import {AccountRole} from "@/library/account/AccountRole";
import UserAddInputPage from "@/views/user/add/input/UserAddInputPage.vue";
import UserAddConfirmPage from "@/views/user/add/confirm/UserAddConfirmPage.vue";
import UserDetailPage from "@/views/user/detail/UserDetailPage.vue";

export default {
    path: '/user',
    component: UserRootPage,
    meta: {role: [AccountRole.Administrator, AccountRole.Advanced]},
    children: [
        {
            path: '',
            name: 'user-index',
            component: UserIndexPage
        },
        {
            path: ':id',
            name: 'user-detail',
            component: UserDetailPage,
        },
        {
            path: 'add/input',
            name: 'user-add-input',
            component: UserAddInputPage
        },
        {
            path: 'add/confirm',
            name: 'user-add-confirm',
            component: UserAddConfirmPage,
            props: true
        }
    ]
}