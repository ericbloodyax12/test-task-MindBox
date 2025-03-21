import React, {useMemo, useState} from 'react';
import {TasksList} from "@/components/todoList/tasksList";
import {CustomUI} from '@/components';
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
    const clearCompletedHandler = () => {
         todoStore.clearCompletedTodos(userId)
    }

    const itemsLeftCount = filteredTasks.length
    const filterButtons = useMemo(() => {
        return Object.values(EFilterTD).map((filterName) => {
            return <CustomUI.Button onClick={() => setStatus(filterName) }>{filterName}</CustomUI.Button>
        })
    }, [])

    return (
      <CustomUI.Card className={'tasksList-card-wrapper'}>
        <div className={'tasksList-wrapper'}>
          <TasksList userId={userId} filteredTasks={filteredTasks}/>
          <div className={"todoList-bottom-panel"}>
            {`${itemsLeftCount} items left`}
            <div className={"todoList-bottom-panel__mid"}>
                {filterButtons}
            </div>
            <CustomUI.Button onClick={clearCompletedHandler}>
              Clear Completed
            </CustomUI.Button>
          </div>
        </div>
      </CustomUI.Card>
    );
  }
)

