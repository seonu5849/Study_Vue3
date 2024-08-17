<template>
	<main>
		<div class="container py-4">
			<div>
				<LabelInput v-model="username" label="이름" class="d-grid"></LabelInput>
			</div>
			<FancyButton class="fancy-btn">Click!!!</FancyButton>
			<FancyButton class="fancy-btn"></FancyButton>
			<hr />
			<AppCard>
				<template #[slotArgs]> 제목입니다. </template>
				<!-- <template #default> 내용입니다. </template> -->
				<!-- 내용입니다.
				<template #footer> 푸터입니다. </template> -->
			</AppCard>
		</div>
	</main>
</template>

<script>
import { ref } from 'vue';
import AppCard from './AppCard.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from '@/components/slot_components/FancyButton.vue';

export default {
	components: {
		AppCard,
		LabelInput,
		FancyButton,
	},
	setup() {
		const slotArgs = ref('header');
		return { slotArgs };
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
