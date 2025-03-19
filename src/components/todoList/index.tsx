import React from 'react';
import {TasksList} from "@/components/todoList/tasksList";
import { UI } from '@/components';
import {observer} from "mobx-react-lite";

type TTodoListProps = {
    userId: number
}

export const TodoList: React.FC<TTodoListProps> = observer(
    ({userId}) => {




        return (
            <UI.Card>
                <TasksList userId={userId} />
                <UI.Button>
                    button
                </UI.Button>
            </UI.Card>
        );
    }
)

