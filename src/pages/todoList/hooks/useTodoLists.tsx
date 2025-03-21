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
      const isDeactivated = isAnyActive && isNotActive;
      return <TodoList
        key={userId}
        userId={userId}
        activeUserId={activeUserId}
        toggleAccordion={toggleAccordion}
        isDeactivated={isDeactivated}
      />
    })
  }, [userIds, activeUserId]);

  return todoLists;
}