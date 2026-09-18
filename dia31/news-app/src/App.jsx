import { NavLink, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import NewsList from './pages/NewsList'
import ArticleView from './pages/ArticleView'
import ErrorPage from './pages/ErrorPage'

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
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              News
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
        path: 'news',
        element: <NewsList />
      },

      {
        path: 'articles/:id',
        element: <ArticleView />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}  fallbackElement={<hr />}/>;

}

export default App
