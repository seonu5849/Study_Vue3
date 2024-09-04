<template>
	<div class="card">
		<div class="card-body">Lifecycle Child</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		// console.log('[Child] setup');
		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});
		onMounted(() => {
			console.log('[Child] onMounted');
		});

		onBeforeUnmount(() => {
			// 마운트를 해제하기 직전에 호출함.
			console.log('[Child] onBeforeUnmount');
			console.log(document.querySelector('#input'));
		});
		onUnmounted(() => {
			// 마운트를 해제하고 호출함.
			console.log('[Child] onUnmounted');
			console.log(document.querySelector('#input'));
		});
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
