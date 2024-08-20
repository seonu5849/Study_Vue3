<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
import TheNav from '@/components/provide_inject_components/TheNav.vue';
import TheView from '@/components/provide_inject_components/TheView.vue';

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
