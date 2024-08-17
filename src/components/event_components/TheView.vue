<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-4" />

			<div class="row g-3">
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
				<hr class="my-4" />
				<LabelInput
					:modelValue="username"
					@update:model-value="value => (username = value)"
				></LabelInput>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';

export default {
	components: {
		AppCard,
		PostCreate,
		LabelInput,
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

		const createPost = newPost => {
			console.log(`${newPost}`);
			posts.push(newPost);
		};

		const username = ref('');

		return { post, posts, obj, createPost, username };
	},
};
</script>

<style lang="scss" scoped></style>
