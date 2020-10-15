import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import store from './Store'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
