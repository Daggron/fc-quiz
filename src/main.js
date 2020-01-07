import Vue from 'vue'
import App from './App.vue'
import Bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue';

Vue.use(Bootstrap);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
