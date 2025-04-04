import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Nav from '../components/Nav'
import PostBlog from '../Pages/PostBlog'
import Home from '../Pages/Home'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>,
      children: [
        {index: true, element: <Home />},
        {path: 'create-blog', element:<PostBlog />},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
