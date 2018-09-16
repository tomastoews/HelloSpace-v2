import Vue from 'vue';
import Store from './store';
import Router from './router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { VueMasonryPlugin } from 'vue-masonry';

import App from './App.vue';
import './css/styles.css';

Vue.use(ElementUI);
Vue.use(VueMasonryPlugin);
Vue.config.productionTip = false

new Vue({
  router: Router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
