import Vue from 'vue'
import App from './App.vue'

// register filter globally
Vue.filter('to-lowercase', function(value){
    return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
