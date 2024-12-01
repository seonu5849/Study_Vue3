import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE: ', import.meta.env.MODE);        // 현재 개발하는 환경 출력
// console.log('BASE_URL: ', import.meta.env.BASE_URL);// baseUrl 출력
// console.log('PROD: ', import.meta.env.PROD);        // 현재 production 모드라면 true
// console.log('DEV: ', import.meta.env.DEV);          // 현재 development 모드라면 true
// console.log('VITE_APP_API_URL: ', import.meta.env.VITE_APP_API_URL);          // 커스텀 env, 반드시 VITE를 붙여줘야한다.