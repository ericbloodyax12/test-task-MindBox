import React from 'react';
import {observer} from "mobx-react-lite";

import {  CustomUI} from "@/components";
import {classNames} from "@/helpers";
import {BottomIcon} from "@/assets/svgIcon/bottomIcon.tsx";
import {TasksListWrapper} from './components/tasksList';

import "./index.scss"


type TTodoListProps = {
  userId: number;
  activeUserId: number | null;
  toggleAccordion: (id: number) => void;
  isDeactivated: boolean;
  title?: string;
}

export const TodoList: React.FC<TTodoListProps> = observer(({
 userId, activeUserId, toggleAccordion, isDeactivated, title
}) => {

  const cls = classNames('todo-list-container', {expanded: activeUserId === userId, collapsed: isDeactivated});
  return (
    <CustomUI.Card variant={"todoListContainer"} className={cls}>
      <div className={"todo-header-container"} onClick={() => toggleAccordion(userId)}>
        <BottomIcon className={`accordion-icon ${activeUserId === userId ? "rotated" : ""}`}/>
        <h2> {`Todo List for User ${userId}`} {title}</h2>
      </div>
      {activeUserId === userId && (
        <TasksListWrapper userId={userId}/>
      )}
    </CustomUI.Card>
  );
})

