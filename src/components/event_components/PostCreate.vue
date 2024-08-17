<template>
	<div>
		<button
			class="btn btn-primary"
			@click="$emit('createPost', 1, 2, 3, '김길동')"
		>
			button
		</button>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
