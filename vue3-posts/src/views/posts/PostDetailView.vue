<template>
  <div>
    <h2>제목</h2>
    <p>내용</p>
    <p class="text-muted">2024-10-16</p>
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
        <button class="btn btn-outline-danger">삭제</button>
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
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () => router.push({ name: 'PostEdit', params: { id } });

</script>

<style lang="scss" scoped>

</style>