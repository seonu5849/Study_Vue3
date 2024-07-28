<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	// watch : 종종 반응형 상태가 변경 되었을 때에 감지하여 다른 작업을 수행해야 하는 경우
	// watch의 첫 매개변수는 다양한 타입이 될 수 있다. (ref, reactive, computed, getter 함수, array 등)
	setup() {
		const message = ref('');

		watch(message, (newValue, oldValue) => {
			// DOM 조작
			// API 호출 -> 반응형 상태 변경

			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue);
		});

		return {
			message,
		};
	},
};
</script>

<style lang="scss" scoped></style>
