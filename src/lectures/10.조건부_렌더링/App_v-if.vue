<template>
	<div>
		<h2 v-if="visible">Hello Vue3!</h2>
		<h2 v-else>false 입니다.</h2>
		<button @click="visible = !visible">toggle</button>
		<hr />
		<button @click="type = 'A'">A</button>
		<button @click="type = 'B'">B</button>
		<button @click="type = 'C'">C</button>
		<button @click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A,B,C가 아닙니다.</h2>
		<hr />
		<template v-if="visible">
			<h1>Title</h1>
			<p>Prograph 1</p>
			<p>Prograph 2</p>
		</template>

		<hr />
		<h1 v-show="ok">Title 입니다.</h1>
		<button @click="ok = !ok">show toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);
		const type = ref('A');
		const ok = ref(true);

		// v-if는 실제로 렌더링한다. 전환 할 때 블록 내부의 컴포넌트들이 제거되고 다시 생성됨.
		// v-show는 요소는 생성되어 있지만 display:none으로 보이지 안도록 처리
		// 일반적으로 v-if는 전환비용이 높은 반면, v-show는 초기 렌더링 비용이 높다.
		// 자주 전환을 한다면 v-show, 런타임 시 조건이 변경되지 않는다면, v-if를 사용하는 것이 좋다.
		return {
			visible,
			type,
			ok,
		};
	},
};
</script>

<style lang="scss" scoped></style>
