<template>
	<div class="container py-4">
		<button
			class="btn btn-primary me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp"></component>
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// const currentComp = ref(DynamicApple);
const currentComp = shallowRef(DynamicApple);
const obj1 = ref({ name: '홍길동' });
// 속성에 대해서는 반응하지 않고, 값 자체가 바꼇을 때만 반응
// 즉, obj2.value.name = '김길동2222' 이라는 속성이 바꼈을 때는 반응하지 않는다.
// obj2.value = '김길동2222' 자체가 변경되었을 때만 반응
const obj2 = shallowRef({ name: '김길동' });
const changeCurrentComp = comp => {
	currentComp.value = comp;
};
</script>

<style lang="scss" scoped></style>
