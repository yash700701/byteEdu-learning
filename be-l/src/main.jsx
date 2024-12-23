import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Front from './components/Front.jsx'
import Header from './components/Header.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Router}/>
  </StrictMode>,
)
