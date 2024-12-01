import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id', // : (세미콜론)은 동적라우팅
		name: 'PostDetail',
		component: PostDetailView,
		props: true,
		// props: route => ({
		// 	id: parseInt(route.params.id),
		// })
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHomeView
			},
			{
				path: 'one', // 여기에는 /one이 되면 안된다 (상대경로가 됨.), one만 적으면 /nested/one으로 자동으로 붙음
				name: 'NestedOne',
				component: NestedOneView
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView
			}
		],
	}
];

/**
 * history모드와 hashmap모드의 차이 
 * 1. 운영서버에 배포할때 차이가 생김 
 * -> history모드는 모든 url을 서버로 요청함, 하지만 404에러가 발생하는데 이를 해결하기 위해선 따로 클라이언트와 서버가 설정해줘야 할 필요가 있음.
 * -> 반면 hashmap모드는 설정은 필요는 없지만 SEO(검색엔진)에는 악영향을 끼친다.(구글, 네이버 등에 노출이 잘 되지 않음)
 * 그래서 대부분 history모드를 사용해서 배포를 한다.
 */ 
const router = createRouter({
	// 괄호 안에 url을 붙이면 기존 base url이 붙음
	history: createWebHistory('/'), // history 모드로 동작,
	// history: createWebHashHistory(), // hashmap 모드로 동작, 페이지 이동시 url에 #이 붙음
	routes,
});

export default router;
