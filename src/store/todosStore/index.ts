import {makeAutoObservable} from "mobx";

import {Todo} from "../../models-view";
import {todoService} from "../../service";

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
      const todos = await this.getTodos()
        this.setTodos(todos)
    }

    async getTodos(): Promise<Todo[]>  {
        try {
            const todos = await todoService.getTodos(5)
            return Todo.MapCollection(todos)
        }
        catch (error) {
            throw new Error("не удалось загрузить тудулисты");
        }

    }

}


