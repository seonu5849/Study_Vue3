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
import { computed } from 'vue';

// console.log('AppCard module');
export default {
	props: {
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
	},
	emit: ['toggleLike'],
	setup(props, context) {
		// props는 하위 컴포넌트에서는 조작할 수 없는 단방향 통신이다.
		// emit을 통해 하위 컴포넌트에서 상위 컴포넌트로 이벤트를 보낼 수 있다.
		// console.log(props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		const toggleLike = () => {
			// props.isLike = !props.isLike;
			// props.obj.title = '김길동'; // 이렇게 사용하지 않도록 주의하자
			context.emit('toggleLike');
		};
		return { isLikeClass, typeName, toggleLike };
	},
};
</script>

<style></style>
