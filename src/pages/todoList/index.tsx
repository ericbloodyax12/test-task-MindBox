import React, {useCallback, useState} from 'react';
import {observer} from "mobx-react-lite";
import {useTodoLists} from "./hooks";

import "./index.scss"


type TTodoListProps = {
    title?: string;
    userIds: number[]
}

export const TodoListPage: React.FC<TTodoListProps> = observer(({userIds}) => {
    const [openUserId, setOpenUserId] = useState<number | null>(null);

    const toggleAccordion = useCallback((userId: number) => {
        setOpenUserId(openUserId === userId ? null : userId);
    }, [openUserId]);

    const todoLists = useTodoLists(userIds, openUserId, toggleAccordion)

    return (
        <div className={"todo-list-page"}>
            {todoLists}
        </div>

    );
})

