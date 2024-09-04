<template>
	<div>
		<p>author: {{ author }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef } from 'vue';
export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 지금 바로 이 책을 읽습니다  ;)',
			price: '무료',
		});

		// const { author, title } = book; // 위와같이 구조분해할당할 경우 string 타입이 됨.

		// 아래와 같이 toRef, toRefs 를 사용하면 반응형을 잃지 않고 반응형 객체를 가져올 수 있다.
		// const { author, title } = toRefs(book);
		const author = toRef(book, 'author');
		const title = toRef(book, 'title');

		return {
			author,
			title,
			book,
		};
	},
};
</script>

<style lang="scss" scoped></style>
