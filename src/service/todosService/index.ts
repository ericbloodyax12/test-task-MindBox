

// если в локал сторадже нет никаких данных то тут
import {ITodo} from "../../models-dto";

class TodoService {

    private readonly API_BASE_URL = "https://jsonplaceholder.typicode.com/todos"

    async getTodos(limit: number = 5): Promise<ITodo[]> {
        const response = await fetch(`${this.API_BASE_URL}?_limit=${limit}`)
        if (!response.ok) throw new Error('Ошибка при загрузке данных');
        return response.json()
    }
}


export const todoService = new TodoService()