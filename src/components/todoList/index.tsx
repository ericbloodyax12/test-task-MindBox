import React from 'react';
import {TasksList} from "@/components/todoList/tasksList";
import { UI } from '@/components';
import {observer} from "mobx-react-lite";

import "./index.scss"

enum EFilterTD  {
    ALL = "All",
    Active = "Active",
    COMPLETED = "Completed"
}

type TTodoListProps = {
    userId: number
}

export const TodoList: React.FC<TTodoListProps> = observer(
    ({userId}) => {
        return (
            <UI.Card>
                <TasksList userId={userId} />
                <div className={"todoList-bottom-panel"}>
                    {`${""} items left`}
                    <div className={"todoList-bottom-panel__mid"}>
                        <UI.Button>
                            {EFilterTD.ALL}
                        </UI.Button>
                        <UI.Button>
                            {EFilterTD.Active}
                        </UI.Button>
                        <UI.Button>
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

