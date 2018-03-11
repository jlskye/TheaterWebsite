// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Tabs } from 'bootstrap-vue/es/components';
import { Navbar } from 'bootstrap-vue/es/components';
import RouterNav from 'vue-router-nav'
import  VueResource  from 'vue-resource'



Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.use(BootstrapVue);
Vue.use(Tabs);
Vue.use(Navbar);
Vue.use(RouterNav)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
