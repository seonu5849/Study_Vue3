<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4">
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" v-model="form.title" class="form-control" id="title">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea class="form-control" v-model="form.content" id="content" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
        <button class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  title: null,
  content: null,
})

const save = () => {
  try {
    const data = {
      ...form.value,
      createAt: Date.now(),
    }
    createPost(data);

    router.push({ name: 'PostList' });
  } catch (error) {
    console.error(error);
  }

}
const goListPage = () => router.push({ name: 'PostList' });
</script>

<style lang="scss" scoped></style>