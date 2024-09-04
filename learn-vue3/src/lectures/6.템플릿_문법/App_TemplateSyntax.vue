<template>
	<div>
		<h2>보간법</h2>
		<p>{{ message }}</p>
		<!-- v-once는 1회성만 보관하도록 하는 템플릿 문법, 버튼을 클릭해도 변하지 않음 -->
		<p v-once>{{ message }}</p>
		<button @click="message = message + '!'">Click</button>
		<hr />
		<h2>HTML</h2>
		<p>{{ rowHtml }}</p>
		<!-- v-html은 html태그를 텍스트로 넣지않고 태그로 넣을 수 있다. -->
		<!-- v-html은 xss에 취약하므로 사용에 주의해야한다. (거의 사용하지 않음) -->
		<p v-html="rowHtml"></p>
		<hr />
		<h2>속성 바인딩</h2>
		<div :title="dynamicTitle">마우스를 올려보세요.</div>
		<input type="text" value="홍길동" :disabled="isInputDisabled" />
		<!-- 태그의 속성들도 바인딩이 가능하다. -->
		<input v-bind="attrs" />
		<hr />
		<h2>JavaScript</h2>
		{{ message.split('').reverse().join('') }}<br />
		{{ isInputDisabled ? '예' : '아니요' }}
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('안녕하세요');
		const rowHtml = ref('<strong>안녕하세요</strong>');
		const dynamicTitle = ref('안녕하세요!!');
		const isInputDisabled = ref(false);
		const attrs = ref({
			type: 'password',
			value: '12345678',
			disabled: false,
		});

		return {
			message,
			rowHtml,
			dynamicTitle,
			isInputDisabled,
			attrs,
		};
	},
};
</script>

<style lang="scss" scoped></style>
