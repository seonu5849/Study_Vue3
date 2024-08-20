<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<p>appMessage: {{ appMessage }}</p>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue';
import { myInjectionKey } from '@/assets/keys';

export default {
	components: {
		Child,
	},
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const count = ref(10);
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		// provide('static-message', staticMessage);

		// readonly 함수를 통해 직접적인 변경을 막았다. 자바의 private 접근제한자와 비슷해보인다.
		// provide는 provide('provide명', '저장할변수 또는 상수')
		provide('message', { message: readonly(message), updateMessage });
		provide('count', count);

		provide(myInjectionKey, '123456789');

		const appMessage = inject('app-message');

		return { staticMessage, message, count, appMessage };
	},
};
</script>

<style lang="scss" scoped></style>
