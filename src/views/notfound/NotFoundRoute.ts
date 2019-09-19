import NotFoundPage from "@/views/notfound/NotFoundPage.vue";

export default [
    {
        path: '*',
        redirect: {name: 'notfound'}
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: NotFoundPage
    }
]
