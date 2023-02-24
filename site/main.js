import Vue from 'vue';
import App from './app';
import bmVue from '../src/index';
import ElementUI from 'element-ui';
import router from './router';
import store from './store';
import 'normalize.css';
import 'highlight.js/styles/atom-one-light.css';
import './styles/themes/element.scss';
import './styles/index.scss';
Vue.use(ElementUI);
Vue.use(bmVue);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
