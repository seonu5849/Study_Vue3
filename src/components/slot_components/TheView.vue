<template>
	<main>
		<div class="container py-4">
			<div>
				<LabelInput v-model="username" label="이름" class="d-grid"></LabelInput>
			</div>
			<FancyButton class="fancy-btn">Click!!!</FancyButton>
			<FancyButton class="fancy-btn"></FancyButton>
			<hr />
			<AppCard>
				<template #header> 제목입니다. </template>
				<!-- <template #default> 내용입니다. </template> -->
				내용입니다.
				<template #footer> 푸터입니다. </template>
			</AppCard>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import AppCard from './AppCard.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from '@/components/slot_components/FancyButton.vue';

export default {
	components: {
		AppCard,
		LabelInput,
		FancyButton,
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

		const firstname = ref('');
		const lastname = ref('');

		return { post, posts, obj, createPost, username, firstname, lastname };
	},
};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
