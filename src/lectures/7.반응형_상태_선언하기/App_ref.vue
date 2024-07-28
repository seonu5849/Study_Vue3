<template>
	<div>
		<p>
			{{ message }}
		</p>
		<button @click="addMesage">add click</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		// reactive() 함수는 객체타입에만 동작
		// 기본타입(number, string, boolean)을 반응형으로 만들고자 할때는 ref() 메소드를 사용

		// 원시값 타입
		// let message = reactive('Hello Vue!');
		// const addMesage = () => {
		// 	message = message + '!';
		// };
		// console.log('message :', message);
		// console.log('message typeof :', typeof message);

		const message = ref('Hello Vue!');
		const addMesage = () => {
			message.value = message.value + '!';
		};

		return {
			message,
			addMesage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
