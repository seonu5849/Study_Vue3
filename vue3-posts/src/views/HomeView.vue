<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<p>{{ $route.name }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const route = useRouter();
const goAboutPage = () => {
	route.push('/about');
};
</script>

<style lang="scss" scoped></style>
