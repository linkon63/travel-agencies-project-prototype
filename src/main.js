import { library,config  } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { all } from '@awesome.me/kit-KIT_CODE'
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
const app = createApp(App)
library.add(fas,fab);
app.use(router)
app.use(PrimeVue)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
