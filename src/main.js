import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/lib/bootstrap/css/bootstrap.min.css'
import './assets/lib/font-awesome/css/font-awesome.min.css'
import './assets/lib/animate/animate.min.css'
import './assets/lib/ionicons/css/ionicons.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/lib/lightbox/css/lightbox.min.css'
import './assets/css/style-red.css'
import './assets/css/gqc.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
