const { test, expect } = require('@playwright/test');

test('filter completed todos', async ({ page }) => {
  // Открываем TodoMVC
  await page.goto('https://demo.playwright.dev/todomvc');

  // Добавляем первую задачу
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Task 1');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Добавляем вторую задачу
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Task 2');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Проверяем, что обе задачи добавлены
  await expect(page.getByRole('listitem')).toHaveCount(2);

  // Отмечаем первую задачу как завершённую
  await page.getByRole('listitem').filter({ hasText: 'Task 1' })
    .getByRole('checkbox')
    .check();

  // Фильтруем список по "Completed"
  await page.getByRole('link', { name: 'Completed' }).click();

  // Проверяем, что видна только завершённая задача
  await expect(page.getByRole('listitem')).toHaveCount(1);
  await expect(page.getByRole('listitem')).toHaveText('Task 1');
});