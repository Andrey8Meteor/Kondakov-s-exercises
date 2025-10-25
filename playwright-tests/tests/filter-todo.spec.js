import { test, expect } from '@playwright/test';

test('filter completed todos', async ({ page }) => {
  // 1. Открываем TodoMVC
  await page.goto('https://todomvc.com/examples/vanillajs/');

  // 2. Добавляем две задачи
  const newTodo = page.getByPlaceholder('What needs to be done?');
  
  await newTodo.fill('Task 1');
  await newTodo.press('Enter');
  
  await newTodo.fill('Task 2');
  await newTodo.press('Enter');

  // 3. Отмечаем первую задачу как завершённую
  const firstTodo = page.locator('.todo-list li').nth(0);
  await firstTodo.getByRole('checkbox').check();

  // 4. Фильтруем список по "Completed"
  await page.getByRole('link', { name: 'Completed' }).click();

  // 5. Проверяем, что видна только завершённая задача
  const visibleTodos = page.locator('.todo-list li:not(.hidden)');
  await expect(visibleTodos).toHaveCount(1);
  
  await expect(visibleTodos).toHaveText('Task 1');
});
