const { expect } = require('@playwright/test');

class TodoMVCPage {
    constructor(page) {
        this.page = page;
        this.inputField = page.locator('.new-todo');
        this.todoList = page.locator('.todo-list');
        this.todoItems = page.locator('.todo-list li');
        this.todoCount = page.locator('.todo-count');
        this.clearCompleted = page.locator('.clear-completed');
    }

    getTodoItem(taskName) {
        return this.page.locator(`.todo-list li:has-text("${taskName}")`);
    }

    getTodoCheckbox(taskName) {
        return this.getTodoItem(taskName).locator('.toggle');
    }

    getDeleteButton(taskName) {
        return this.getTodoItem(taskName).locator('.destroy');
    }

    async navigate() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async addTodo(taskName) {
        await this.inputField.fill(taskName);
        await this.inputField.press('Enter');
    }

    async completeTodo(taskName) {
        await this.getTodoCheckbox(taskName).check();
    }

    async deleteTodo(taskName) {
        const todoItem = this.getTodoItem(taskName);
        await todoItem.hover();
        await this.getDeleteButton(taskName).click();
    }

    async isTodoVisible(taskName) {
        return await this.getTodoItem(taskName).isVisible();
    }

    async getTodoText(taskName) {
        return await this.getTodoItem(taskName).textContent();
    }

    async getTodosCount() {
        const countText = await this.todoCount.textContent();
        const match = countText.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
    }

    async getAllTodos() {
        return await this.todoItems.allTextContents();
    }

    async isTodoCompleted(taskName) {
        const todoItem = this.getTodoItem(taskName);
        return await todoItem.evaluate(el => el.classList.contains('completed'));
    }
}

module.exports = TodoMVCPage;