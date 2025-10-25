import { fetchPost } from './api.js';

// 1. Проверка успешного получения поста с id = 1
test('fetchPost returns post for id = 1', async () => {
  const post = await fetchPost(1);
  expect(post).toEqual({ id: 1, title: 'First Post' });
});

// 2. Проверка ошибки для неизвестного id
test('fetchPost throws error for unknown id', async () => {
  await expect(fetchPost(2)).rejects.toThrow('Post not found');
});

// 3. Проверка длины свойства title в успешном результате
test('post title has correct length', async () => {
  const post = await fetchPost(1);
  expect(post.title).toHaveLength(10); // 'First Post' имеет 10 символов
});
