import {Todo} from "@/models-view";

export enum EFilterTD  {
    ALL = "All",
    Active = "Active",
    COMPLETED = "Completed"
}

export const filteredTasksHelper = (userTasks:  Todo[], filter: EFilterTD): Todo[] => {
   return  userTasks.filter(todo => {
        if (filter === EFilterTD.ALL) return true;
        if (filter === EFilterTD.Active) return !todo.completed;
        if (filter === EFilterTD.COMPLETED) return todo.completed;
        return true;
    });
}



