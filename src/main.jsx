import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
