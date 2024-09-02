<template>
	<div class="p-3 bg-danger">
		<button type="button" class="btn btn-primary" v-bind="$attrs">
			My Button {{ message }}
		</button>
	</div>
</template>

<script>
export default {
	// 상위 컴포넌트에서 class이름을 지정했을 때, inheritAttrs: false으로 설정하여
	// 하위 컴포넌트에서 class이름을 적용할 수 있도록 함.
	inheritAttrs: false,
};
</script>
<script setup>
import { ref } from 'vue';

const message = ref('message');
</script>

<style lang="scss" scoped></style>
