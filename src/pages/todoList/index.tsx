import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {TodoList} from '@/components';
import {BottomIcon} from "@/assets/svgIcon/bottomIcon.tsx";


import "./index.scss"
import {Card} from "@/components/ui";

type TTodoListProps = {
    title?: string;
    userIds: number[]
}

export const TodoListPage: React.FC<TTodoListProps> = observer(({userIds}) => {
    const [openUserId, setOpenUserId] = useState<number | null>(null);
    const toggleAccordion = (userId: number) => {
        setOpenUserId(openUserId === userId ? null : userId);
    };

    const todoLists = userIds.map((userId) => {
        return (
            <Card variant={"todoListContainer"} extraClassName={`todo-list-container ${openUserId === userId ? "expanded" : "collapsed"}`} >
                <div className={"todo-header-container"} onClick={() => toggleAccordion(userId)}>
                    <BottomIcon className={`accordion-icon ${openUserId === userId ? "rotated" : ""}`}/>
                    <h2> {`Todo List for User ${userId}`}</h2>
                </div>
                {openUserId === userId && (
                    <TodoList userId={userId}/>
                )}
            </Card>

        )
    })
    return (
        <div className={"todo-list-page"}>
            {todoLists}
        </div>

    );

})

