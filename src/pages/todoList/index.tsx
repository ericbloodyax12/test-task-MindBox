import React from 'react';
import {observer} from "mobx-react-lite";

import {useStores} from "@/providers";


type TTodoListProps = {
  title?: string;
}

export const TodoListPage: React.FC<TTodoListProps> = observer((props) => {
  const {todoStore} = useStores();
  const todos = todoStore.Todos.map((todo) => {
    return <li>{todo.title}</li>
  });

  console.log(props.title)
  return (
    <div>
      <ul>
        {todos}
      </ul>
    </div>
  );
})

