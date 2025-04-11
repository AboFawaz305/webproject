import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import Main from './layouts/Main.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import BlogsPage from './pages/BlogsPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import PageNotFoundPage from './pages/PageNotFoundPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      { index: true, path: "home", Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      {
        path: "blogs",
        children: [
          { index: true, Component: BlogsPage },
          { path: ":bid", Component: BlogPage }
        ]
      },
      { path: "login", Component: LoginPage },
      { path: "register", Component: RegisterPage },
      { path: "*", Component: PageNotFoundPage }
    ],
    ErrorBoundary: PageNotFoundPage,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
