import {makeAutoObservable} from "mobx";
import {v4 as uuidv4} from "uuid";

import {Todo} from "@/models-view";
import {todoService} from "@/service";
import {EPriority} from "@/models-view/Todo/EPriority.ts";
import {StorageHelper, StorageTypeName} from "@/store/todosStore/helpers/storageHelper.ts";

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
    const todoFromLocalStorage = StorageHelper.getData(StorageTypeName.todos);
    if (todoFromLocalStorage) {
      return todoFromLocalStorage
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

  deleteTodo(id: number ): void {
    const filteredTodos = this._todos.filter(todo => todo.id !== id)
    this.setTodos(filteredTodos)
    StorageHelper.setData({name:StorageTypeName.todos,data:filteredTodos}) // если бы был полноценный api,
    // то использовался метод api DELETE

  }
  async addTodo(userId: number, name: string ): Promise<void> {
    const id =  parseInt(uuidv4(), 16); //вообще создание id происзодит на стороне сервера, но его нет в рамках тестового
    const newTodo:Todo = {userId, id:id, title: name, completed: false, priority: EPriority.MEDIUM};
    const newTodos = [newTodo, ...this._todos]
    this.setTodos(newTodos)
    StorageHelper.setData({name:StorageTypeName.todos, data: newTodos}) // реализовал логику добавления таски,
    // если бы был полноценный api, то использовался метод api POST
  }

  changeTodoStatus(id: number ): void {
    const updatedTodos = this._todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    this.setTodos(updatedTodos)
    StorageHelper.setData({name:StorageTypeName.todos,data:updatedTodos})
  }

  clearCompletedTodos(userId: number): void {
    const updatedTodos = this._todos.filter(todo => !(todo.userId === userId && todo.completed));
    this.setTodos(updatedTodos)
    StorageHelper.setData({name:StorageTypeName.todos,data:updatedTodos})
  }

}


