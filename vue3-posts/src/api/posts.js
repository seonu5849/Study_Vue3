// axios
const posts = [
  {id: 1, title: '제목1', content: '내용1', createAt: '2024-10-16'},
  {id: 2, title: '제목2', content: '내용2', createAt: '2024-10-17'},
  {id: 3, title: '제목3', content: '내용3', createAt: '2024-10-18'},
  {id: 4, title: '제목4', content: '내용4', createAt: '2024-10-19'},
  {id: 5, title: '제목5', content: '내용5', createAt: '2024-10-20'}
];

export function getPosts() {
  return posts;
}