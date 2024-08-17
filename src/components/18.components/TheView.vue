<template>
	<main>
		<div class="container py-4">
			<div class="row g-3">
				<InputTag></InputTag>
				<div class="col col-4">
					<AppCard title="제목1" contents="내용1"></AppCard>
				</div>
				<div class="col col-4">
					<!-- 반응형 객체를 넣을때는 :title (v-bind) -->
					<AppCard :title="post.title" :contents="post.contents"></AppCard>
				</div>
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<AppCard
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
						:obj="obj"
					></AppCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';
import InputTag from './InputTag.vue';

export default {
	components: {
		AppCard,
		InputTag,
	},
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});

		const obj = reactive({
			title: '제목2',
			contents: '내용2',
		});

		const posts = reactive([
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{
				id: 4,
				title: '제목4',
				contents: '내용4',
				isLike: true,
				type: 'notice',
			},
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice',
			},
		]);
		return { post, posts, obj };
	},
};
</script>

<style lang="scss" scoped></style>
