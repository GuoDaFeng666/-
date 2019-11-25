import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from '@/assets/js/http';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);



Vue.use(VueQuillEditor)
Vue.use(ElementUI);
Vue.use(http);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

