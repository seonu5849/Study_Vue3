<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createAt }}</p>
    <hr class="my-4">
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
    <!-- 
      동적 라우팅을 가져오는 방법
      - $route.params 필드에 매핑되기 때문에 꺼내서 쓰면 된다.
      이 외에도 $route.query (쿼리스트링), $route.hash(해시태그, #) 등이 있다.
    -->
    <!--
      http://localhost:5173/posts/1?searchText=view#123
      params = { "id": "1" }
      query = { "searchText": "view" }
      hash = #123

      이렇게 반환한다.
    -->
    <!-- 
      <p>params : {{ $route.params }}</p>
      <p>query : {{ $route.query }}</p>
      <p>hash : {{ $route.hash }}</p> 
    -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { reactive, ref, watchEffect } from 'vue';

const props = defineProps({
  id: {
    type: [String, Number],
  }
});



const router = useRouter();
// const id = route.params.id;

/**
 * ref
 * 장점) 
 *  - 한꺼번에 객체 할당이 가능({ ...data }), 
 *  - 레퍼런스 타입, 프리미티브 타입에 사용이 가능, 
 *  - 일관성 유지
 * 단점) .value를 적어야 접근이 가능하다.
 */

const post = ref({});

/**
 * reactive
 * 장점) form.title, form.content처럼 .value를 작'성하지 않아도 된다.
 * 단점) 객체 할당이 불가능(반응형이 사라짐), 레퍼런스 타입만 사용가능
 */
//const form = reactive({});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    setPost(data);
  } catch (error) {
    console.error(error);
  }

  // ref를 사용할 경우
  //post.value = { ...data };

  // reactive를 사용할 경우
  // form = {...data}; 로 선언할 경우 반응형이 사라진 객체가 된다.
  // 만약 reactive를 사용하면서 반응형(ref)를 살리려면 아래와 같이 작성해야한다.
  //form.title = data.title;
  //form.content = data.content;
  //form.createAt = data.createAt;
};

const setPost = ({ title, content, createAt }) => {
  post.value.title = title;
  post.value.content = content;
  post.value.createAt = createAt;

}

fetchPost();

const remove = async () => {
  try {
    if (confirm('삭제하시겠습니까?') === false) {
      return;
    }

    await deletePost(props.id);
    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }
}

// PostListView에서 item에 우클릭시 props값이 변경이 되는데,
// 변경 된 props.id가 변경 될때마다 fetchPost를 동작시켜준다.
watchEffect(() => {
  fetchPost();
});

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () => router.push({ name: 'PostEdit', params: { id: props.id } });

</script>

<style lang="scss" scoped></style>