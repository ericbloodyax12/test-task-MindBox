import React, {useState} from 'react';
import {TasksList} from "@/components/todoList/tasksList";
import { CustomUI } from '@/components';
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
            <CustomUI.Card>
                <TasksList userId={userId} filteredTasks={filteredTasks}/>
                <div className={"todoList-bottom-panel"}>
                    {`${itemsLeftCount} items left`}
                    <div className={"todoList-bottom-panel__mid"}>
                        <CustomUI.Button onClick={() => setStatus(EFilterTD.ALL) }>
                            {EFilterTD.ALL}
                        </CustomUI.Button>
                        <CustomUI.Button onClick={() => setStatus(EFilterTD.Active) }>
                            {EFilterTD.Active}
                        </CustomUI.Button>
                        <CustomUI.Button onClick={() => setStatus(EFilterTD.COMPLETED) }>
                            {EFilterTD.COMPLETED}
                        </CustomUI.Button>
                    </div>
                    <CustomUI.Button>
                        Clear Completed
                    </CustomUI.Button>
                </div>
            </CustomUI.Card>
        );
    }
)

