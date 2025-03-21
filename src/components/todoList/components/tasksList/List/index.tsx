import React, {useCallback, useMemo} from 'react';
import {observer} from "mobx-react-lite";
import {useStores} from "@/providers";
import {CustomUI} from '@/components';
import crossIcon from "@/assets/images/cross.png";
import {Todo} from "@/models-view";
import {classNames} from "@/helpers";

import "../index.scss"


type TTasksListProps = {
    userId: number,
    filteredTasks: Todo[],

}

export const TasksList: React.FC<TTasksListProps> = observer(
    ({userId, filteredTasks}) => {
        const {todoStore} = useStores();
        const userTasks = todoStore.getTodosByUserId(userId)

        const deleteTask = useCallback(async (id: number): Promise<void> => {
            await todoStore.deleteTodo(id)
        }, [todoStore.deleteTodo])

        const todos = useMemo(() => {
            return filteredTasks.map((todo) => {
                const isCompleted = todo.completed;
                const mods = {
                    'completed-text': isCompleted,
                };
                return (
                    <div className={"todo-container"} key={todo.id}>
                        <div className={"todo-container__title"}>
                            <CustomUI.CheckBox checked={isCompleted}
                                               onChange={() => todoStore.changeTodoStatus(todo.id)}/>
                            <span className={classNames("", mods)}>
                                    {todo.title}
                            </span>
                        </div>

                        <button className={"delete-icon-container"}>
                            <img src={crossIcon} alt="Delete" className={"delete-icon"}
                                 onClick={() => deleteTask(todo.id)}/>
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

