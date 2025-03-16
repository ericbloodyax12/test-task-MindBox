import {useContext} from "react";

import {StoreContext} from "./StoreContext.tsx";
import type {TStores} from "./types";

export const useStores = (): TStores => {
  const context = useContext<TStores | null>(StoreContext)
  if (!context) {
    throw new Error(
      'useStores must be used within a StoreProvider. ' +
      'Wrap your component in <StoreProvider> to fix this error.'
    )
  }
  return context
}