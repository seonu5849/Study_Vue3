<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<h3>강의가 있습니까?</h3>
		<p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<button @click="counter++">counter : {{ counter }}</button>
		<h2>이름</h2>
		<p>{{ fullName }}</p>
		<p>{{ fullName2 }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		// computed는 템플릿 문법에 연산식을 넣을 때 관리하기 편하고 캐시가 되기 때문에 재사용성과 가독성을 높일때 사용

		// 템플릿 문법은({{}}) 간단히 사용하면 매우 편리
		// 하지만 템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수 어려움

		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		// 메소드를 작성해서 만든 것보다 computed로 작성한것이 더 효율적임
		// computed로 작성한 것은 캐시되기 때문,
		// 무슨말이냐면 한번 생성이 되면 캐시가 되기 때문에, 재사용을 통해 한번더 호출하지 않는다. (반응형 데이터가 변경되면 다시 호출됨.)
		// 하지만 메소드는 계속해서 호출을 하기 때문에 비효율적인 것이다.
		const hasLecture = computed(() => {
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음' : '없음';
		};

		const counter = ref(0);

		// computed는 기본적으로 getter 전용, 계산된 속성에 새 값을 넣으려고하면 런타임 경고가 표시
		// 하지만 getter, setter 를 추가하면 사용이 가능
		const firstName = ref('홍');
		const lastName = ref('길동');

		const fullName = computed(() => firstName.value + ' ' + lastName.value);
		console.log('Console 출력', fullName.value);
		fullName.value = '짐 코딩'; // App.vue:52 [Vue warn] Write operation failed: computed value is readonly

		const fullName2 = computed({
			get() {
				return firstName.value + ' ' + lastName.value;
			},
			set(value) {
				console.log('value: ', value);
				console.log(value.split(' '));
				[firstName.value, lastName.value] = value.split(' ');
			},
		});
		fullName2.value = '짐 코딩'; //value:  짐 코딩 정상적으로 실행

		return {
			teacher,
			hasLecture,
			existLecture,
			counter,
			fullName,
			fullName2,
		};
	},
};
</script>

<style lang="scss" scoped></style>
