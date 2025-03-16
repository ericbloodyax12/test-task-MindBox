import { createRoot } from 'react-dom/client'
import {Layout} from "./layout/Layout.tsx";

import './index.scss'

createRoot(document.getElementById('root')!).render(
    <Layout />
)
