<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');

		// immediate 사용
		// watch(
		// 	message,
		// 	newValue => {
		// 		console.log('즉시 실행함.');
		// 		reverseMessage.value = newValue.split('').reverse().join('');
		// 	},
		// 	{
		// 		immediate: true, // 이 명령어를 넣으면 watch가 변경이 일어난 후 실행되는 것이 아니라 즉시 실행한다.
		// 	},
		// );

		// 함수를 생성해서 사용
		const reverseFunction = () => {
			console.log('즉시 실행함.');
			reverseMessage.value = message.value.split('').reverse().join('');
		};
		watch(message, reverseFunction);
		reverseFunction();

		// computed와 watch의 차이
		// computed는 인스턴스의 상태(ref, reactive 변수)의 종속 관계를 자동으로 세팅하고자 할때 computed로 구현하는 것이 좋음.
		// reverseMessage는 message값에 따라 결정되어지는 종속관계에 있다.
		// 이 종속관계 코드가 복잡해지면 watch로 구현할 경우 더 복잡해지거나 중복계산 또는 오류를 발생시킬 수 있다.

		// watch는 인스턴스의 상태(ref, reactive)의 변경 시점에 특정 액션(call, api, push, route 등)을 취하고자 할때 적합하다.
		// 대게의 경우 computed로 구현이 가능하다면 watch가 아니라 computed로 구현하는 것이 대부분 옳다.

		return {
			message,
			reverseMessage,
		};
	},
};
</script>

<style lang="scss" scoped></style>
