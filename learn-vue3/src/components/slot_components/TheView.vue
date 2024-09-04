<template>
	<main>
		<div class="container py-4">
			<div>
				<LabelInput v-model="username" label="이름" class="d-grid"></LabelInput>
			</div>
			<FancyButton>Click!!!</FancyButton>
			<FancyButton #="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<hr />
			<AppCard>
				<!-- <template #[slotArgs]> 제목입니다. </template> -->
				<!-- <template #default> 내용입니다. </template> -->
				<!-- 내용입니다.
				<template #footer> 푸터입니다. </template> -->
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<template #default="{ childMessage, helloMessage }">
					디폴트입니다. {{ message }} <br />
					{{ childMessage }}
					<br />
					{{ helloMessage }}
				</template>
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>
			<hr />
			<AppCard> 게시글 입니다. </AppCard>
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
		const message = ref('');
		return { slotArgs, message };
	},
};
</script>

<style scoped></style>
