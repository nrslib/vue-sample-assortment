import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from "axios";
import i18n from './plugins/i18n';
import wraxios from '@/library/net/wraxios';
import SetupModuleNavigationGuard from "@/setup/SetupModuleNavigationGuard";
import {Route} from "vue-router";
import ServiceLocator from "@/library/service/ServiceLocator";

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true;

router.beforeEach(SetupModuleNavigationGuard);
router.afterEach((to: Route, from: Route) => {
    wraxios.notifyRouteChanged();
    ServiceLocator.instance.messageService.next();
});

new Vue({
  el: '#app',
  i18n: i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
});
