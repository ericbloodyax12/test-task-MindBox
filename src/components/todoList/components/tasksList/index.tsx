import React, {useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";


import {CustomUI} from '@/components';
import {useStores} from "@/providers";


import { TasksList } from "./List";
import { CreateTodoModal } from "../../components";
import { EFilterTD, filteredTasksHelper } from "../../helpers";
import "../../index.scss"


type TTodoListProps = {
  userId: number
}

export const TasksListWrapper: React.FC<TTodoListProps> = observer(
  ({userId}) => {
    const {todoStore,dialogStore} = useStores();
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
      const addNewTodo = () => {
          dialogStore.openNewDialog({
              headerTitle: 'Create New Todo',
              isVisible: true,
              dialogContent: () => <CreateTodoModal userId={userId} />
          })
      };

    return (
      <CustomUI.Card className={'tasksList-card-wrapper'}>
        <div className={'tasksList-wrapper'}>
          <TasksList userId={userId} filteredTasks={filteredTasks}/>
            <div className={"root-todoList-bottom-panel-wrapper"}>
                <div className={"todoList-bottom-panel"}>
                    {`${itemsLeftCount} items left`}
                    <div className={"todoList-bottom-panel__mid"}>
                        {filterButtons}
                    </div>
                    <CustomUI.Button onClick={clearCompletedHandler}>
                        Clear Completed
                    </CustomUI.Button>
                </div>
                <CustomUI.Button onClick={addNewTodo}>
                    Add New Todo
                </CustomUI.Button>
            </div>
        </div>
      </CustomUI.Card>
    );
  }
)

