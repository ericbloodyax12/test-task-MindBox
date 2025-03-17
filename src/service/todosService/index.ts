// если в локал сторадже нет никаких данных то тут
import {ITodo} from "@/models-dto";

class TodoService {

  private readonly API_BASE_URL = "https://jsonplaceholder.typicode.com/todos"

  async getAllTodos(): Promise<ITodo[]> {

    const response = await fetch(`${this.API_BASE_URL}`)
    if (!response.ok) throw new Error('Ошибка при загрузке данных');
    const todos: ITodo[] = await response.json()
    return todos
  }
}


export const todoService = new TodoService()