import Vue from 'vue'
import App from './App.vue'

// register filter globally
Vue.filter('to-lowercase');

new Vue({
  el: '#app',
  render: h => h(App)
})
