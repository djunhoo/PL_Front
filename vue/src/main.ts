import Vue from 'vue';
import { router } from './router';
import { store } from './store';
import axios from 'axios'
import App from './App.vue';
import './styles/App.scss';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});