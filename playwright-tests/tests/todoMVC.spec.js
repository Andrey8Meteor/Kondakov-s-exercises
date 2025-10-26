const { test, expect } = require('@playwright/test');
const TodoMVCPage = require('../pages/TodoMVCPage');

test.describe('TodoMVC Tests with Page Object Pattern', () => {
    let todoPage;

    test.beforeEach(async ({ page }) => {
        todoPage = new TodoMVCPage(page);
        await todoPage.navigate();
    });

    test('should add todo and verify visibility', async () => {
        await todoPage.addTodo('Write Code');
        expect(await todoPage.isTodoVisible('Write Code')).toBe(true);
    });

    test('should add multiple todos and verify both are visible', async () => {
        await todoPage.addTodo('Write Code');
        await todoPage.addTodo('Test App');
        
        expect(await todoPage.isTodoVisible('Write Code')).toBe(true);
        expect(await todoPage.isTodoVisible('Test App')).toBe(true);
        expect(await todoPage.getTodosCount()).toBe(2);
    });

    test('should complete todo and verify completion', async () => {
        await todoPage.addTodo('Write Code');
        await todoPage.completeTodo('Write Code');
        
        expect(await todoPage.isTodoCompleted('Write Code')).toBe(true);
        const checkbox = todoPage.getTodoCheckbox('Write Code');
        await expect(checkbox).toBeChecked();
    });

    test('should delete todo and verify removal', async () => {
        await todoPage.addTodo('Write Code');
        expect(await todoPage.isTodoVisible('Write Code')).toBe(true);
        
        await todoPage.deleteTodo('Write Code');
        expect(await todoPage.isTodoVisible('Write Code')).toBe(false);
    });

    test('complete scenario: add, complete, and delete todo', async () => {
        await todoPage.addTodo('Write Code');
        expect(await todoPage.isTodoVisible('Write Code')).toBe(true);
        
        await todoPage.completeTodo('Write Code');
        expect(await todoPage.isTodoCompleted('Write Code')).toBe(true);
        
        await todoPage.deleteTodo('Write Code');
        expect(await todoPage.isTodoVisible('Write Code')).toBe(false);
    });

    test('generated test scenario: add two todos and complete one', async () => {
        await todoPage.addTodo('Write Code');
        await todoPage.addTodo('Test App');
        await todoPage.completeTodo('Write Code');
        
        expect(await todoPage.isTodoVisible('Write Code')).toBe(true);
        expect(await todoPage.isTodoVisible('Test App')).toBe(true);
        expect(await todoPage.isTodoCompleted('Write Code')).toBe(true);
        expect(await todoPage.isTodoCompleted('Test App')).toBe(false);
    });
});