import {Layout} from "@/layout";
import {StoreProvider} from "@/providers";
import {TodoListPage} from "@/pages";
import {UI} from "@/components";

import './App.scss';


export function App() {

  return (
    <StoreProvider>
     <Layout>
       <UI.Card> {/* todo @Young Erik - у Layout должен быть один дочерний компонент TodoListPage (в нем все и реализовывай карты и прочее) */}
         <div>
           <TodoListPage/>
         </div>
         <UI.Button>
           button
         </UI.Button>
         <UI.CheckBox/>
       </UI.Card>
     </Layout>
    </StoreProvider>

  )
}


