<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>staticMessage: {{ staticMessage }}</p>
			<p>message: {{ message }}</p>
			<p>count: {{ count }}</p>
			<p>injected: {{ injected }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
import { myInjectionKey } from '@/assets/keys';

export default {
	setup() {
		// inject은 inject('provide명', '기본값'); 으로 provide명만 입력해도 해당 value값을 가져온다. '기본값'은 옵션으로 value가 없을 경우 출력된다.
		const staticMessage = inject('static-message', 'default message');
		const { message, updateMessage } = inject('message');
		updateMessage('!');
		const count = inject('count');
		const injected = inject(myInjectionKey);

		return { staticMessage, message, count, injected };
	},
};
</script>

<style lang="scss" scoped></style>
