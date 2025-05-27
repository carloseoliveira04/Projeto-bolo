import { StrictMode } from 'react'
import { createRoot } from'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Compra from './componentes/Compra'

const router = createBrowserRouter([
  {path:"/", element: <App/>},
  {path:"/compra/:id", element: <Compra />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
