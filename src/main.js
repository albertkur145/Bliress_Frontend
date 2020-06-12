import Vue from 'vue';
import VueCookies from 'vue-cookies';
import Swal from 'sweetalert2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import func from './function';
import router from './router';
import store from './store';
import App from './App.vue';

library.add(fas, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueCookies);

Vue.config.productionTip = false;
Vue.prototype.$func = func;
Vue.prototype.$swal = Swal;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
