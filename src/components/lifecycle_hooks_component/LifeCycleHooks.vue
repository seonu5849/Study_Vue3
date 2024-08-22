<template>
	<div class="container py-4"></div>
</template>

<script>
export default {
	setup() {
		console.log('setup');
		return {};
	},
	data: () => ({
		dataMessage: 'data message',
	}),
	beforeCreate() {
		// 컴포넌트가 초기화 될때 호출되는 라이프사이클 훅
		console.log('beforeCreate', this.dataMessage); // undefined
	},
	created() {
		// 컴포넌트가 초기화되고 data 메소드가 실행된 후 실행된다.
		console.log('created', this.dataMessage); // data message
	},
};
</script>

<style lang="scss" scoped></style>
