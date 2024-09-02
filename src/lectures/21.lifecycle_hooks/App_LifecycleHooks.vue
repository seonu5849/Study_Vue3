<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
import TheNav from '@/components/lifecycle_hooks_component/TheNav.vue';
import TheView from '@/components/lifecycle_hooks_component/TheView.vue';

export default {
	components: {
		TheNav,
		TheView,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
