<template>
	<div class="container py-4">
		<!-- 
			setup에서 엘리먼트에 접근하기 위해서는 ref 속성을 이용해야하고
			ref에 선언한 이름과 동일하게 setup에 ref(반응형변수)를 만들어주면 서로 연결되어 사용이 가능하다.
		-->
		<input ref="inputRef" type="text" value="hello world!" />
		<!-- <LifeCycleChild></LifeCycleChild> -->
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
// import LifeCycleChild from './LifeCycleChild.vue';

export default {
	components: {
		// LifeCycleChild,
	},
	setup() {
		// console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		// onBeforeMount(() => {
		// 	// 돔이 생성되기 전에 호출
		// 	console.log('onBeforeMount');
		// });
		// onMounted(() => {
		// 	// 돔이 생성된 후 호출 따라서 돔에 접근할 수 있음
		// 	/*
		// 		inputRef.value는 <input type="text"> 를 가져오고,
		// 		inputRef.value.value는 해당 input의 value값(=hello world!)을 가져온다.
		// 	*/
		// 	console.log('onMounted', inputRef.value.value);
		// });

		onBeforeUpdate(() => {
			// 돔 트리 업데이트 이전에 생성됨.
			console.log('onBeforeUpdate', message.value);
			let messageText = document.querySelector('#message').textContent;
			console.log('DOM Content: ', messageText);
		});
		onUpdated(() => {
			// 반응형 변수가 변경될 때마다 호출됨.
			console.log('onUpdated', message.value);
			let messageText = document.querySelector('#message').textContent;
			console.log('DOM Content: ', messageText);
		});

		return { inputRef, message };
	},
	// data: () => ({
	// 	dataMessage: 'data message',
	// }),
	// beforeCreate() {
	// 	// 컴포넌트가 초기화 될때 호출되는 라이프사이클 훅
	// 	console.log('beforeCreate', this.dataMessage); // undefined
	// },
	// created() {
	// 	// 컴포넌트가 초기화되고 data 메소드가 실행된 후 실행된다.
	// 	console.log('created', this.dataMessage); // data message
	// },
};
</script>

<style lang="scss" scoped></style>
