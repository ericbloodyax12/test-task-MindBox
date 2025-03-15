import {StoreProvider} from "./providers";
import {TodoListPage} from "./pages";

import './App.scss'

function App() {


  return (
      <StoreProvider>
          <div>
             <TodoListPage />
          </div>
      </StoreProvider>

  )
}

export default App
