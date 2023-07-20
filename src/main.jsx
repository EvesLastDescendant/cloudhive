import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from "./routes/Home"
import About from "./routes/About"
import Events from "./routes/Events"
import Blog from "./routes/Blog"
import Error from './routes/Error'
import SharedLayout from "./components/SharedLayout"
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
