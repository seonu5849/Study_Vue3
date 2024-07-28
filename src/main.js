import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './lectures/App.vue';
// import AppCard from './components/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard); // 컴포넌트 전역설정

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
