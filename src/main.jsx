import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Blog from "./pages/Blog"
import Error from './pages/Error'
import SharedLayout from "./pages/SharedLayout"
import "./App.css"
import "./index.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<Error />}>
      <Route index element={<Home />}/>
      <Route path="about" element={<About />} />
      <Route path="events" element={<Events />} />
      <Route path="blog" element={<Blog />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
