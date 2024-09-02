<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- input은 마운트(랜더링)이 된 후 사용이 가능하기 떄문에 v-if를 통해 input이 생겼을 때 사용하도록 해준다. -->
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
		</p>
		<hr />
		<ul>
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const input = ref(null);
		// 아직 랜더링 되지 않아 setup에서는 출력이 되지 않는다.
		console.log('setup: ', input.value);
		onMounted(() => {
			// 위와 같이 요소에 ref는 랜더링이 된 후에 사용이 가능하다.
			input.value.value = 'Hello World';
			console.log('onMounted: ', input.value);

			// itemRefs.value.forEach(item => console.log('item: ', item.textContent));
			itemRefs.value.forEach(item => console.log('item: ', item));
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);

		return { input, fruits, itemRefs };
	},
};
</script>

<style lang="scss" scoped></style>
