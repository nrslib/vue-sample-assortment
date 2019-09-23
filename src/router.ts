import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import TopRoutes from "@/views/top/TopRoutes";
import UserRoutes from "@/views/user/UserRoutes";
import NotFoundRoutes from "@/views/notfound/NotFoundRoutes";
import LoginRoutes from "@/views/login/LoginRoutes";
import LogoutRoutes from "@/views/logout/LogoutRoutes";
import ErrorRoutes from "@/views/error/ErrorRoutes";

// const r = <any>Router;
// const routerPush = r.prototype.push;
// r.prototype.push = function push(location: Location) {
//     return routerPush.call(this, location).catch(e => e);
// }

Vue.use(Router);

const routes: RouteConfig[] = [
    ErrorRoutes,
    LoginRoutes,
    LogoutRoutes,
    ...NotFoundRoutes,
    TopRoutes,
    UserRoutes,
];

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
