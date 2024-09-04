<template>
	<div>
		<h2>input Value</h2>
		<!-- @input 이벤트를 통해 단방향을 양방향 처럼 구현함. -->
		<!-- <input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/> -->

		<input type="text" v-model.lazy.number.trim="inputValue" />
		<div>{{ inputValue }}</div>
		<div>{{ typeof inputValue }}</div>

		<hr />
		<h2>textarea value</h2>
		<!-- <textarea :value="textareaValue"></textarea> -->
		<textarea v-model="textareaValue"></textarea>
		<div>{{ textareaValue }}</div>

		<hr />
		<h2>checkbox value</h2>
		<label for="checkbox">{{ checkboxValue }}</label>
		<!-- <input
			type="checkbox"
			id="checkbox"
			:checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)"
		/> -->
		<!-- 위 내용을 간략화 시킴 -->
		<input
			type="checkbox"
			id="checkbox"
			v-model="checkboxValue"
			true-value="yes"
			false-value="no"
		/>
		<h2>checkbox values</h2>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" />
			HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" />
			CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JavaScript
		</label>
		<div>{{ checkboxValues }}</div>
		<hr />
		<h2>radio value</h2>
		<!-- <label>
			<input
				type="radio"
				name="type"
				value="O"
				:checked="radioValue === 'O'"
				@change="event => (radioValue = event.target.value)"
			/>
			O형
		</label>
		<label>
			<input
				type="radio"
				name="type"
				value="A"
				:checked="radioValue === 'A'"
				@change="event => (radioValue = event.target.value)"
			/>
			A형
		</label> -->
		<label>
			<input type="radio" name="type" value="O" v-model="radioValue" />
			O형
		</label>
		<label>
			<input type="radio" name="type" value="A" v-model="radioValue" />
			A형
		</label>
		<div>{{ radioValue }}</div>

		<hr />
		<h2>select value</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>
		<div>{{ selectValue }}</div>
	</div>
</template>

<script>
import { ref } from 'vue';

// html에 데이터를 변경했을 때 자바스크립트도 변경되는것이 양방향 통신이다.
// v-model은 :value와 @input을 합친 것
// 하지만 태그마다 사용하는 속성이 다르다.
// checkbox와 radio 버튼은 checked 속성과 change 이벤트를 사용
// select 태그는 value 속성과 change 이벤트를 사용

export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref(null);
		const checkboxValue = ref(true);
		const radioValue = ref('O');
		const selectValue = ref('html');
		const checkboxValues = ref([]);

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
