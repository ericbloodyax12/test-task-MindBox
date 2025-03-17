import {makeAutoObservable} from "mobx";

import {Todo} from "@/models-view";
import {todoService} from "@/service";

export class TodosStore {

  private _todos: Todo[] = [];

  get Todos() {
    return this._todos;
  }

  setTodos(todos: Todo[]) {
    this._todos = todos;
  }

  constructor() {
    makeAutoObservable(this)
  }

  async init() {
    const todos = await this.getAllTodos()
    this.setTodos(todos)
  }

  async getAllTodos(): Promise<Todo[]> {
    const todoFromLocalStorage = localStorage.getItem("todos");
    if (todoFromLocalStorage) {
      return JSON.parse(todoFromLocalStorage)
    }
    try {
      const allDTOTodos = await todoService.getAllTodos()
      const allTodos= Todo.MapCollection(allDTOTodos)
      localStorage.setItem("todos", JSON.stringify(allTodos))
      return allTodos
    } catch (error) {
      throw new Error("не удалось загрузить тудулисты");
    }

  }

  getTodosByUserId(userId: number ): Todo[] {
      return this._todos.filter(todo => todo.userId === userId)
  }

  async deleteTodo(userId: number, id: number ): Promise<void> {
    const userTodoList = this._todos.filter(todo => todo.userId === userId)
    const filteredTodos = userTodoList.filter(todo => todo.id !== id)
    this.setTodos(filteredTodos)
    localStorage.setItem("todos", JSON.stringify(filteredTodos)) // если был бы полноценный api, то использовался метод api DELETE

  }


}


