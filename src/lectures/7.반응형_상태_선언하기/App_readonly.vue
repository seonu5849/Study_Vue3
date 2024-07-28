<template>
	<div></div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
	setup() {
		const original = reactive({
			count: 0,
		});

		const copy = readonly(original);
		original.count++;

		// copy.count++; // App.vue:17 [Vue warn] Set operation on key "count" failed: target is readonly. Proxy(Object){count: 1}
		console.log(original.count);
		console.log(copy.count);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
