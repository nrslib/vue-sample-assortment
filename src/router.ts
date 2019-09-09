import Vue from 'vue'
import Router, {RouteConfig} from 'vue-router'
import TopRoute from "@/views/top/TopRoute";
import UserRoute from "@/views/user/UserRoute";

Vue.use(Router);

const routes: RouteConfig[] = [
  TopRoute,
  UserRoute
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})
