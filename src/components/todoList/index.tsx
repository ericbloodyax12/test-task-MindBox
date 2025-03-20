import React, {useState} from 'react';
import {TasksList} from "@/components/todoList/tasksList";
import { UI } from '@/components';
import {observer} from "mobx-react-lite";

import "./index.scss"
import {useStores} from "@/providers";
import {EFilterTD, filteredTasksHelper} from "@/components/todoList/helper/filterHelper.ts";



type TTodoListProps = {
    userId: number
}

export const TodoList: React.FC<TTodoListProps> = observer(
    ({userId}) => {
            const {todoStore} = useStores();
        const [status, setStatus] = useState<EFilterTD>(EFilterTD.ALL);
        const userTasks = todoStore.getTodosByUserId(userId);
        const filteredTasks = filteredTasksHelper(userTasks, status)

        const itemsLeftCount =  filteredTasks.length

        return (
            <UI.Card>
                <TasksList userId={userId} filteredTasks={filteredTasks} />
                <div className={"todoList-bottom-panel"}>
                    {`${itemsLeftCount} items left`}
                    <div className={"todoList-bottom-panel__mid"}>
                        <UI.Button onClick={() => setStatus(EFilterTD.ALL) }>
                            {EFilterTD.ALL}
                        </UI.Button>
                        <UI.Button onClick={() => setStatus(EFilterTD.Active) }>
                            {EFilterTD.Active}
                        </UI.Button>
                        <UI.Button onClick={() => setStatus(EFilterTD.COMPLETED) }>
                            {EFilterTD.COMPLETED}
                        </UI.Button>
                    </div>
                    <UI.Button>
                        Clear Completed
                    </UI.Button>
                </div>
            </UI.Card>
        );
    }
)

