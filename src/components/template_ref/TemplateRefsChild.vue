<template>
	<!-- 자식컴포넌트에서 부모컴포넌트로 접근 $parent-->
	<div>{{ $parent }}</div>
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello ~!!');
		const sayHello = () => {
			alert(message.value);
		};
		return { message, sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
