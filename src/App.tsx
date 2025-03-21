import {Layout} from "@/layout";
import {StoreProvider} from "@/providers";
import {TodoListPage} from "@/pages";

import './App.scss';
import {DialogStoreProvider} from "@/providers/dialogProvider/DialogProvider.tsx";



export function App() {
  return (
    <StoreProvider>
            <Layout>
                <TodoListPage userIds={[1,2,3]} />
            </Layout>
    </StoreProvider>
  )
}


