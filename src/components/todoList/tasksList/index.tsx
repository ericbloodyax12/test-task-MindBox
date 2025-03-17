import React from 'react';
import {useStores} from "@/providers";
import {observer} from "mobx-react-lite";

type TTasksListProps = {
    userId: number
}

export const TasksList: React.FC<TTasksListProps> =  observer(
    ({userId}) => {
        const {todoStore} = useStores();
        const userTasks = todoStore.getTodosByUserId(userId)

        const todos = userTasks.map((todo) => {
            return <li>

                {todo.title}
            </li>
        });
        return (
            <div>
                {todos}
            </div>
        );
    }
)

