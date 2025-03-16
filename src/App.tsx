import {StoreProvider} from "./providers";
import {TodoListPage} from "./pages";
import {UI} from "./components";


import './App.scss'



function App() {

  return (
      <StoreProvider>
          <UI.Card>
              <div>
                  <TodoListPage/>
              </div>
              <UI.Button>
                  button
              </UI.Button>
              <UI.CheckBox/>
          </UI.Card>
      </StoreProvider>

  )
}

export default App
