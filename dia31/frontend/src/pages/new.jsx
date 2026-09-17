import {
  NavLink,
  Outlet,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

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

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-400"
              }
            >
              Contacto
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
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;