<template>
	<div>
		<TheNav />
		<TheView />
	</div>
</template>

<script>
import TheNav from '@/components/TheNav.vue';
import TheView from '@/components/TheView.vue';
export default {
	components: {
		TheNav,
		TheView,
	},
	setup() {
		/**
		 * 컴포넌트를 사용하면 UI를 재사용할 수 있다.
		 * -> 프론트엔드 개발을 하다보면 javascript뿐만 아니라 HTML, CSS를 반복적으로 사용해야할 때가 있다.
		 * -> 이런 경우 컴포넌트로 캡슐화 한 후 필요한 곳에 사용할 수 있다.
		 *
		 * 컴포넌트를 사용하면 UI를 독립적으로 나눔으로써(레이아웃 등) 코드를 클린하게 작성할 수 있다.
		 * -> 코드가 길어져 유지보수가 어려울 때가 있다.
		 * -> 이런 경우 컴포넌트를 통해 독립적으로 분리함으로써 코드를 클린하게 하여 유지보수성을 높일 수 있다.
		 */

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
