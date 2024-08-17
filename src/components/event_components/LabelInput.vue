<template>
	<label>
		이름
		<!-- v-model="username" -->
		<input
			:value="modelValue"
			@input="e => $emit('update:modelValue', e.target.value)"
			type="text"
		/>
	</label>
</template>

<script>
export default {
	props: ['modelValue'],
	emits: ['update:modelValue'],
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
