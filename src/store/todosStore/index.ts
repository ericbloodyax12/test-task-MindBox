import {makeAutoObservable} from "mobx";
import { v4 as uuidv4 } from "uuid";

import {Todo} from "@/models-view";
import {todoService} from "@/service";
import {EPriority} from "@/models-view/Todo/EPriority.ts";

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
    const userTasks = this._todos.filter(todo => todo.userId === userId)
      return this._todos.filter(todo => todo.userId === userId)
  }

  async deleteTodo(id: number ): Promise<void> {
    const filteredTodos = this._todos.filter(todo => todo.id !== id)
    this.setTodos(filteredTodos)
    localStorage.setItem("todos", JSON.stringify(filteredTodos)) // если бы был полноценный api, то использовался метод api DELETE

  }
  async addTodo(userId: number, name: string ): Promise<void> {
    const id =  parseInt(uuidv4(), 16);
    const newTodo:Todo = {userId, id:id, title: name, completed: false, priority: EPriority.MEDIUM};
    const newTodos = [newTodo, ...this._todos]
    this.setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos)) // если бы был полноценный api, то использовался метод api POST

  }


}


