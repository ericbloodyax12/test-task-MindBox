import React from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from "@/providers";
import { UI } from '@/components';

import "./index.scss"

type TTasksListProps = {
    userId: number
}

export const TasksList: React.FC<TTasksListProps> = observer(
    ({userId}) => {
        const {todoStore} = useStores();
        const userTasks = todoStore.getTodosByUserId(userId)

        const todos = userTasks.map((todo) => {
            return (
                <div className={"todo-container"}>
                    <UI.CheckBox />
                    {todo.title}
                </div>
            )

        });
        return (
            <div className={"tasks-list-container"}>
                {todos}
            </div>
        );
    }
)

