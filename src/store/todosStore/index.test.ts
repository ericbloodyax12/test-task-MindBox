import { describe, it, expect, beforeEach, beforeAll, vi } from 'vitest';

import {TodosStore} from "@/store";


describe('TodosStore', () => {
    let store: TodosStore;

    beforeAll(() => { // Vitest выполняется в среде Node.js, где нет localStorage
        Object.defineProperty(globalThis, "window", {
            value: globalThis, // Создаём объект window в Node.js
            writable: true,
        });

        Object.defineProperty(globalThis, "localStorage", {
            value: {
                getItem: vi.fn(() => null),
                setItem: vi.fn(),
                removeItem: vi.fn(),
                clear: vi.fn(),
                length: 0,
                key: vi.fn(),
            },
            writable: true,
        });
    });

    beforeEach(() => {
        store = new TodosStore();
        store.setTodos([
            {userId: 1, id: 4, title: "et porro tempora", completed: true, priority: 1},
            {userId: 1, id: 8, title: "quo adipisci enim quam ut ab", completed: true, priority: 1},
            {userId: 1, id: 9, title: "molestiae perspiciatis ipsa", completed: false, priority: 1},
            {userId: 2, id: 26, title: "aliquam aut quasi", completed: true, priority: 1},
            {userId: 2, id: 29, title: "laborum aut in quam", completed: false, priority: 1},
            {userId: 3, id: 43, title: "tempore ut sint quis recusandae", completed: true, priority: 1},
            {userId: 3, id: 48, title: "sit reprehenderit omnis quia", completed: false, priority: 1}
        ]);
    })

    describe('deleteTodo', () => {
        it('should delete a todo by id',  () => {
            store.deleteTodo(8);
            const remainingTodos = store.Todos;
            expect(remainingTodos.length).toBe(6);
            expect(remainingTodos.some(todo => todo.id === 8)).toBe(false);

        });
        it("should`not delete another id",  () => {
            store.deleteTodo(99);
            expect(store.Todos.length).toBe(7);
        });
    })

    describe('changing todo status', () => {
        it('should toggle the completed status of a todo',  () => {
            store.changeTodoStatus(9)
            const updatedTodo = store.Todos.find(todo => todo.id === 4)
            expect(updatedTodo?.completed).toBe(true)
        })

    })

    describe('clear completed todos', () => {
        it('should clear completed todos by userId',  () => {
            const initialTodos = store.Todos;
            const userId = 1
            const completedTodosCount = initialTodos.filter(todo => todo.userId === userId && todo.completed).length;
             store.clearCompletedTodos(userId)
            const remainingTodos = store.Todos
            expect(remainingTodos.length).toBe(5)
            expect(remainingTodos.length).toBe(initialTodos.length - completedTodosCount)
            expect(remainingTodos.some(todo => todo.userId === userId && todo.completed)).toBe(false);
        })

    })

});
