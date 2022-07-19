import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "./_utils/toasted.js";
import "./_utils/sweetAlert.js";
import Vuelidate from 'vuelidate';
import VModal from 'vue-js-modal'

Vue.use(Vuelidate)
Vue.use(require('vue-moment'));
Vue.use(VModal)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
