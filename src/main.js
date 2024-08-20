import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './lectures/App.vue';
// import AppCard from './components/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard); // 컴포넌트 전역설정

// app 레벨에서 provide 설정
// 이렇게 하면 하위 모든 컴포넌트에서 접근하여 사용할 수 있다.
app.provide('app-message', 'app message 입니다.');

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
