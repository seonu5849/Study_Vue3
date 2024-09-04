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
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
	</div>
	<MyButton class="parent-class"></MyButton>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from './PostItem.vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
import MyButton from './MyButton.vue';

const msg = 'Hello World!!';
const message = ref('');
const sayHello = () => {
	alert('Hello World');
};

const child = ref(null);
defineExpose({
	msg,
});

// await은 async와 반드시 같이 사용해야 한다.
// 하지만 vue-3의 script setup에서는 async를 생략할 수 있다.
const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response: ', response);
</script>

<style lang="scss" scoped></style>
