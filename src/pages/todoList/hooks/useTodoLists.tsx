import {useMemo} from "react";
import {classNames} from "@/helpers";
import {BottomIcon} from "@/assets/svgIcon/bottomIcon.tsx";
import {TasksListWrapper, CustomUI} from "@/components";


export const useTodoLists = (
  userIds: number[],
  activeUserId: number | null,
  toggleAccordion: (id: number) => void
) => {
  const todoLists = useMemo(() => {
    return userIds.map((userId) => {
      const isAnyActive = userIds.some(id => id === activeUserId);
      const isNotActive = activeUserId !== userId;
      const isNotActiveNow = isAnyActive && isNotActive;


      const cls = classNames('todo-list-container', {expanded: activeUserId === userId, collapsed: isNotActiveNow});

      return (
        <CustomUI.Card variant={"todoListContainer"} className={cls}>
          <div className={"todo-header-container"} onClick={() => toggleAccordion(userId)}>
            <BottomIcon className={`accordion-icon ${activeUserId === userId ? "rotated" : ""}`}/>
            <h2> {`Todo List for User ${userId}`}</h2>
          </div>
          {activeUserId === userId && (
            <TasksListWrapper userId={userId}/>
          )}
        </CustomUI.Card>
      )
    })
  }, [userIds, activeUserId]);

  return todoLists;
}