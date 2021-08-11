import {createApp} from 'vue';
import App from './App.vue';
import './index.css';

import {createWebHashHistory, createRouter} from 'vue-router';
import Wbs from './components/Wbs.vue';
import Wbs2 from './components/Wbs2.vue'

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Wbs},
    {path: '/xxx', component: Wbs2}
  ]
});

const app = createApp(App);
app.use(router)
app.mount('#app');
