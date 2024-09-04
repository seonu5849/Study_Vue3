<template>
	<div class="card">
		<div class="card-body">
			<!-- type : news, notice -->
			<span class="badge text-bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<!-- <a v-if="isLike === true" href="#" class="btn btn-danger">좋아요</a>
			<a v-else href="#" class="btn btn-outline-danger">좋아요</a> -->
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
			<!-- {{ obj }} -->
		</div>
	</div>
</template>

<script>
// script는 컴포넌트가 몇번이 생성되던 1번만 호출됨.
console.log('Normal Script');
</script>

<script setup>
// script setup은 컴포넌트가 생성될때마다 호출됨.
import { computed } from 'vue';
console.log('Script Setup');

const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		// required: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => {},
	},
});
const emit = defineEmits(['toggleLike']);

// console.log(props.title);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));

const toggleLike = () => {
	emit('toggleLike');
};
</script>

<style></style>
