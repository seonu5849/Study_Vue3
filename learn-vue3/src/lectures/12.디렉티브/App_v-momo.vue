<template>
	<div>
			<div v-memo="[subscribers]">
				<p>subscribers: {{ subscribers }}</p>
				<p>views: {{ views }}</p>
				<p>likes: {{ likes }}</p>
			</div>
			<button @click="subscribers++">Subs++</button>
			<button @click="views++">Views++</button>
			<button @click="likes++">Likes++</button>
			<div>
				<p>subscribers: {{ subscribers }}</p>
				<p>views: {{ views }}</p>
				<p>likes: {{ likes }}</p>
			</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup () {
		// v-memo : 성능적인 부분을 처리할때 사용, 변경이 일어나면 그때 랜더링해서 보여줌.
		// 공식문서상 길이가 1000이상일때 사용하면 좋다함.
		const subscribers = ref(4000);
		const views = ref(400);
		const likes = ref(20);

		return {
			subscribers,
			views,
			likes
		}
	}
}
</script>

<style lang="scss" scoped>

</style>