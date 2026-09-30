import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import './styles/paleta.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))
root.render(
        <BrowserRouter>
                <App />
        </BrowserRouter>
)
