<template>
	<div>
		<form action="" @submit.prevent="save(title, contents)">
			<input type="text" v-model.lazy="title" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="content"></textarea>
			<hr />
			<button>저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
		};

		// 입력을 할때 자동으로 저장하도록 하기 위해선 watchEffect를 사용
		// watchEffect는 최초 한번은 즉시실행한다.
		watchEffect(() => {
			console.log('watchEffect');
			save(title.value, contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
