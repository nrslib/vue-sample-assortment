import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import TopRoute from "@/views/top/TopRoute";
import UserRoute from "@/views/user/UserRoute";
import NotFoundRoute from "@/views/notfound/NotFoundRoute";
import LoginRoute from "@/views/login/LoginRoute";
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
    LoginRoute,
    LogoutRoutes,
    ...NotFoundRoute,
    TopRoute,
    UserRoute,
];

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});
