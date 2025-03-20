import {createContext} from "react";
import type {TStores} from "./types";

export const StoreContext = createContext<TStores | null>(null)


