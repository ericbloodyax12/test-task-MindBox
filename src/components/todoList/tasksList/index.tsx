import React, {useCallback, useMemo} from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from "@/providers";
import { UI } from '@/components';
import crossIcon from "@/assets/images/cross.png";

import "./index.scss"

type TTasksListProps = {
    userId: number
}

export const TasksList: React.FC<TTasksListProps> = observer(
    ({userId}) => {
        const {todoStore} = useStores();
        const userTasks = todoStore.getTodosByUserId(userId)

         const deleteTask = useCallback(async (id: number): Promise<void> => {
           await todoStore.deleteTodo(userId, id)
        }, [todoStore.deleteTodo, userId])

        const todos = useMemo( () => {
          return  userTasks.map((todo) => {
                return (
                    <div className={"todo-container"}>
                        <UI.CheckBox/>
                        {todo.title}
                        <button className={"delete-icon-container"}>
                            <img src={crossIcon} alt="Delete" className={"delete-icon"} onClick={(e) => deleteTask(todo.id)}/>
                        </button>
                    </div>
                )
            });
        }, [deleteTask, userTasks])
        return (
            <div className={"tasks-list-container"}>
                {todos}
            </div>
        );
    }
)

