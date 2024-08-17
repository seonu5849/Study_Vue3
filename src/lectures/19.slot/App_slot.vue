<template>
	<div>
		<TheNav></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
import TheNav from '@/components/slot_components/TheNav.vue';
import TheView from '@/components/slot_components/TheView.vue';

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

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #42d392 25%, #647eff);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
