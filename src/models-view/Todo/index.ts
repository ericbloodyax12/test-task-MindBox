import {ITodo} from "../../models-dto";
import {EPriority} from "./EPriority.ts";


export class Todo implements ITodo {

  public userId: number;
  public id: number;
  public title: string;
  public completed: boolean;
  public priority: EPriority;

  static Map(dto: ITodo): Todo {
    return new Todo(dto)
  }

  static MapCollection(dtoCollection: ITodo[]): Todo[] {
    return dtoCollection.map(dto => this.Map(dto));
  }

  constructor(dto: ITodo) {
    this.userId = dto.userId
    this.id = dto.id;
    this.title = dto.title;
    this.completed = dto.completed;
    this.priority = EPriority.MEDIUM;
  }


}