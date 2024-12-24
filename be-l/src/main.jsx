import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUsLayout from './Layouts/AboutUsLayout.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import Resources from './components/Resources.jsx'
import Jobs from './components/Jobs.jsx'
import Courses from './components/Courses.jsx'
import Team from './components/Team.jsx'
import ContactUs from './components/ContactUs.jsx'
import AndroidDev from './components/coursesPage/AndroidDev.jsx'
import WebDev from './components/coursesPage/WebDev.jsx'
import DataAna from './components/coursesPage/DataAna.jsx'
import Python from './components/coursesPage/Python.jsx'
import FullStack from './components/coursesPage/FullStack.jsx'
import AiMl from './components/coursesPage/AiMl.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <App/>,
      },
      {
        path: '/aboutus',
        element: <AboutUsLayout/>,
      },
      {
        path: '/courses',
        element: <Courses/>,
      },
      {
        path: '/resources',
        element: <Resources/>,
      },
      {
        path: '/jobs',
        element: <Jobs/>,
      },
      {
        path: '/team',
        element: <Team/>,
      },
      {
        path: '/contacts',
        element: <ContactUs/>,
      },
      {
        path: '/androiddev',
        element: <AndroidDev/>,
      },
      {
        path: '/webdev',
        element: <WebDev/>,
      },
      {
        path: '/dataanalytics',
        element: <DataAna/>,
      },
      {
        path: '/python',
        element: <Python/>,
      },
      {
        path: '/fullstack',
        element: <FullStack/>,
      },
      {
        path: '/aiml',
        element: <AiMl/>,
      },
    ]
  },
 
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={Router}/>
  </StrictMode>,
)
