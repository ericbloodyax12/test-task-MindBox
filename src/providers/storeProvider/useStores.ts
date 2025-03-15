import {useContext} from "react";

import type {TStores} from "./types";
import {StoreContext} from "./StoreContext.tsx";


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