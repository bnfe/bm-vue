import 'babel-polyfill';
import Vue from 'vue';
import bmVue from '../release/lib/bm-vue.common';
import App from './app';
import router from './router';
import '../release/bm-vue.default.css';
import './styles/pages/IndexPage.scss';

Vue.config.productionTip = false;
Vue.use(bmVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
