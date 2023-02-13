import Vue from 'vue';
import ElementUI from 'element-ui';
import 'normalize.css';
import 'highlight.js/styles/github-gist.css';
import App from './app';
import bmVue from '../release/lib/bm-vue.common';
import router from './router';
import store from './store';
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
