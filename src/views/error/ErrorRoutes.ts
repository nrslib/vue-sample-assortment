import ErrorRootPage from "@/views/error/ErrorRootPage.vue";
import ErrorServerPage from "@/views/error/server/ErrorServerPage.vue";

export default {
    path: '/error',
    component: ErrorRootPage,
    children: [
        {
            path: 'server',
            name: 'error-server',
            component: ErrorServerPage
        }
    ]
}
