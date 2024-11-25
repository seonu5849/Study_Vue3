<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4 post">
        <PostItem :id="post.id" :title="post.title" :content="post.content" :create-at="post.createAt"
          @click="goPage(post.id)" @contextmenu="onRightClick(post.id, $event)">
        </PostItem>
      </div>
    </div>
    <hr class="my-4">
    <AppCard>
      <PostDetailView :id="currentId"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const posts = ref([]);
const router = useRouter();

const fetchPosts = () => {
  posts.value = getPosts();
};
fetchPosts();

const goPage = id => {
  // router.push(`/posts/${id}`); // 문자열로 이동
  router.push({ // 객체로 이동
    name: 'PostDetail',
    params: {
      id,
    },
    query: {
      searchText: 'hello',
    },
    hash: '#world!'
  })
}

let currentId = ref('1');
const onRightClick = (postId, event) => {
  event.preventDefault();
  currentId.value = String(postId);
}

</script>

<style lang="scss" scoped></style>