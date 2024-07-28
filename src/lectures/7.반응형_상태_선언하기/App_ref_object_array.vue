<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref -> Object
		// ref로 만든 상태는 reactive에 넣을 경우 일반속성을 사용하듯 사용이 가능 (value를 생략 가능)
		const count = ref(0);
		const state = reactive({
			count,
		});

		count.value++;
		count.value++;

		console.log(state.count);
		console.log('state.count: ', state.count);

		// ref -> Array
		// 반응형 상태를 객체에 넣으면 .value 생략 가능
		// 반응형 상태를 배열에 넣으면 .value 생략 불가
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr.message: ', arr[0].value);

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
