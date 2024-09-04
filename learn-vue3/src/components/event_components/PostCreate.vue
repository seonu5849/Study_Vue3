<template>
	<div class="row g-3">
		<!-- @click="$emit('createPost', 1, 2, 3, '김길동')" -->
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news" selected>뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input
				v-model="title"
				type="text"
				class="form-control"
				aria-describedby="basic-addon1"
			/>
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createPost'],
	emits: {
		createPost: newPost => {
			// 이벤트 명의 validate
			// validate에 걸리더라도 동작은 하지만 console에 경고가 남는다.
			if (!newPost) {
				return false;
			}
			return true;
		},
	},
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			type.value = 'news';
			title.value = '';
		};
		return { type, title, createPost };
	},
};
</script>

<style lang="scss" scoped></style>
