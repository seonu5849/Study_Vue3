<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <form @submit.prevent>
      <div class="row g-3 align-items-center">
        <div class="col-9"> <!-- input 크기 -->
          <input v-model="params.title_like" type="text" class="form-control" placeholder="검색어 입력">
        </div>
        <div class="col-3"> <!-- select 크기 -->
          <select v-model="params._limit" class="form-select">
            <option value="3">3개씩 보기</option>
            <option value="6">6개씩 보기</option>
            <option value="9">9개씩 보기</option>
          </select>
        </div>
      </div>
    </form>

    <hr class="my-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4 post">
        <PostItem :id="post.id" :title="post.title" :content="post.content" :create-at="post.createAt"
          @click="goPage(post.id)" @contextmenu.prevent="onRightClick(post.id, $event)">
        </PostItem>
      </div>
    </div>
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !(params._page > 1) }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="params._page--">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pageCount" :key="page" class="page-item" :class="{ active: params._page === page }">
          <a class="page-link" href="#" @click.prevent="params._page = page">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !(params._page < pageCount) }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="params._page++">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <hr class="my-5">
    <AppCard v-if="currentId">
      <PostDetailView :id="currentId"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { computed, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
const posts = ref([]);
const router = useRouter();
const currentId = ref(null);
const params = ref({
  _sort: 'createAt',
  _order: 'desc',
  _limit: 3,
  _page: 1,
  title_like: '',
});
// pagination
const totalCount = ref(0);
const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    posts.value = data;

    if (posts.value.length > 0) {
      currentId.value = posts.value[0].id; // fetch 완료 후 설정
    }

    totalCount.value = headers['x-total-count'];
  } catch (error) {
    console.error(error);
  }
};
watchEffect(fetchPosts); // 초기에 한번 실행하고, 반응형이 변경되었을 때도 동작
// fetchPosts();

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

const onRightClick = (postId, event) => {
  currentId.value = String(postId);
}

</script>

<style lang="scss" scoped></style>