import React from 'react';
import {observer} from "mobx-react-lite";
import {TodoList, UI} from '@/components';


type TTodoListProps = {
  title?: string;
  userIds: number[]
}

export const TodoListPage: React.FC<TTodoListProps> = observer(({userIds}) => {
  const todoLists = userIds.map((userId) => {
    return <TodoList userId={userId} />
  })
  return (
    <div>
      <UI.Card>
        {todoLists}
      </UI.Card>
    </div>
  );
})

