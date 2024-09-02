<template>
	<div class="container py-4">
		{{ msg }}
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">click</button>
		<hr />
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from './PostItem.vue';

const msg = 'Hello World!!';
const message = ref('');
const sayHello = () => {
	alert('Hello World');
};
</script>

<style lang="scss" scoped></style>
