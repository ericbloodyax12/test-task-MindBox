import {useMemo} from "react";

import {TodoList} from "@/components";



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
      return <TodoList
        userId={userId}
        activeUserId={activeUserId}
        toggleAccordion={toggleAccordion}
        isNotActiveNow={isNotActiveNow}
      />
    })
  }, [userIds, activeUserId]);

  return todoLists;
}