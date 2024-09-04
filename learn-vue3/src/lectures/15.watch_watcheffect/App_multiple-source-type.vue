<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		// 첫번째 매개변수에 ref 대입
		// watch(
		// 	() => x.value + y.value, // message
		// 	(sum, oldValue) => {
		// 		console.log('sum: ', sum);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		// 첫번째 매개변수로 배열 대입
		// watch([x, y], ([newX, newY]) => {
		// 	console.log(newX, newY);
		// });

		// 첫번째 매개변수로 오브젝트 타입 대입
		// obj.count를 넣으면 작동을 안한다. 이유는 number 타입이기 때문 (반응형이 아님)
		// watch(obj.count, (newValue, oldValue) => {
		// 	console.log(newValue, oldValue);
		// });

		// 만약 특정 속성을 감지하도록 하려면 getter를 사용해야함
		// 오브젝트 getter 사용
		watch(
			() => obj.count,
			(newValue, oldValue) => {
				console.log(newValue, oldValue);
			},
		);

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// watch(person, newValue => {
		// 	console.log('newValue: ', newValue);
		// });

		// 아래와 같이 작성하면 obj가 변경되는 경우에만 작동을 한다.
		// 즉, getter 함수로 작성하면 getter 함수로 지정한 값이 변경됐나 안됐나를 확인하고 출력한다.
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue: ', newValue);
			},
		);

		return {
			x,
			y,
			obj,
			person,
		};
	},
};
</script>

<style lang="scss" scoped></style>
