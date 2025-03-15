import React, {ReactNode, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {StoreContext} from "./StoreContext.tsx";
import {TodosStore} from "../../store";


type TStoreProviderProps = {
    children: ReactNode;

}

export const StoreProvider: React.FC<TStoreProviderProps> = observer((props) => {
        const todoStore = new TodosStore();
        useEffect(() => {
            todoStore.init()
        }, []);

        return (
            <StoreContext.Provider value={{todoStore}}>
                {props.children}
            </StoreContext.Provider>
        );
    }
)

