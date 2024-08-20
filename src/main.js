import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './lectures/App.vue';
// import AppCard from './components/AppCard.vue';

const app = createApp(App);

// app.component('AppCard', AppCard); // 컴포넌트 전역설정

// app 레벨에서 provide 설정
// 이렇게 하면 하위 모든 컴포넌트에서 접근하여 사용할 수 있다.
app.provide('app-message', 'app message 입니다.');
/*  globalProperties는 모든 컴포넌트에서 접근하고 싶은 라이브러리와 같은 객체를 추가할 때 사용
    하지만 vue3의 composition api는 options api와 다르게 각 컴포넌트에서
    setup() {
      ...
    },
    mounted() {
      console.log('this.msg: ', this.msg);
    }
    위 처럼 this로 접근이 불가능 하다.

    따라서 이 경우를 대신해서 
    app.config.globalProperties.msg = 'hello'; 를
    app.provide('msg', 'hello'); 로 변경해서 provide와 inject를 통해 사용하는 방법으로 사용할 수 있다.
*/
app.config.globalProperties.msg = 'hello';
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
