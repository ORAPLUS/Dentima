import Vue from 'vue'
import App from './containers/master'
import router from './router'
import vbclass from 'vue-body-class'

Vue.config.productionTip = false
Vue.use( vbclass, router )

new Vue({
  render: h => h(App),
  router
}).$mount('#app')