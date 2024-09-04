<template>
	<label>
		{{ label }}
		<!-- v-model="username" -->
		<!-- :value="modelValue"
    @input="e => $emit('update:modelValue', e.target.value)" -->
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
