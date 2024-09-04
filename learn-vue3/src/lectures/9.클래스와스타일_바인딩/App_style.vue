<template>
	<div :style="styleObject">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit commodi
		quod expedita magnam quidem cumque sequi assumenda eaque eius sed obcaecati
		ex ratione odit illum quibusdam molestias, maiores cum quo!
	</div>
	<button @click="fontSize--">-</button>
	<button @click="fontSize++">+</button>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		// 객체 바인딩
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '13px',
		// });

		// computed
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});

		return {
			styleObject,
			fontSize,
		};
	},
};
</script>

<style lang="scss" scoped></style>
