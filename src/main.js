import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';
const app = createApp(App)
library.add(fas);
app.use(router)
app.use(PrimeVue)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
