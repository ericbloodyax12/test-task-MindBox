// если в локал сторадже нет никаких данных то тут
import {ITodo} from "@/models-dto";
import {ApiService} from "../api-service.ts";

class TodoService extends ApiService {

  private readonly API_BASE_URL = "/todos"

  async getAllTodos(): Promise<ITodo[]> {

    const todos = await  super.get<ITodo[]>({path: this.API_BASE_URL})
    return todos;
  }
}


export const todoService = new TodoService([], [], 'https://jsonplaceholder.typicode.com')