import {createContext} from "react";
import type {TStores} from "@/models-view";

export const StoreContext = createContext<TStores | null>(null)


