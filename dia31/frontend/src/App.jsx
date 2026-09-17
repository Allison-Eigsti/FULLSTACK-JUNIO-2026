import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import User from './pages/User'
import Post from './pages/Post'
import PageNotFound from './pages/PageNotFound';
import ErrorPage from './page/ErrorPage'

function Layout() {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              Sobre nosotros
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: 'about',
        element: <About />
      },

      {
        path: 'users/:id',
        element: <User />
      },

      {
        path: "post/:id",
        element: <Post />,
        loader: async ({ params }) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(res => res.json())
        }, 
      },

      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}  fallbackElement={<hr />}/>;

}

export default App
