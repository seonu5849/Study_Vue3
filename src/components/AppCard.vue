<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title red">Card title</h5>
			<p class="card-text">
				<!-- :class="classes.red"> -->
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

console.log('AppCard module');
export default {
	setup() {
		// const style = useCssModule('classes');
		// console.log('style: ', style);
		console.log('AppCard setup()');

		const color = ref('red');
		color.value = 'blue';
		return { color };
	},
};
</script>

<!-- <style scoped>
/* scoped 는 현재 vue에만 적용되도록 하는 것을 말한다. */
/* scoped가 되는 경우에는 PostCSS가 적용되어서 그렇다. */
.red {
	color: red !important; /* !important는 다른 것들보다 우선순위를 높게 챙기라는 것을 의미 */
}
</style> -->

<!-- <style module="classes">
/* module속성은 CSS 모듈로 컴파일이 되어 CSS 클래스를 '$style' 객체의 속성으로 노출 */
/* module속성에 값을 넣으면 '$style'이 아닌 다른 이름을 지정해서 사용할 수 있다. */
.red {
	color: red !important;
}
</style> -->

<!-- <style module="classes">
/* module속성은 CSS 모듈로 컴파일이 되어 CSS 클래스를 '$style' 객체의 속성으로 노출 */
/* module속성에 값을 넣으면 '$style'이 아닌 다른 이름을 지정해서 사용할 수 있다. */
.red {
	color: red !important;
}
</style> -->

<style>
/* v-bind 사용시 동적으로 css값을 변경할 수 있다. */
.red {
	color: v-bind(color) !important;
}
</style>
