import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../templates/layout/BaseLayout";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import NotFound from "../pages/not_found/NotFound";
import Profile from "../pages/account/profile/Profile";
import Register from "../pages/account/register/Register";
import PasswordRecover from "../pages/account/password_recover/PasswordRecover";
import Login from "../pages/account/login/Login";
import Budget from "../pages/budget/Budget";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: 'contato', element: <Contact /> },
      { path: 'sobre', element: <About /> },
      { path: 'orcamento', element: <Budget /> }
    ]
  },
  {
    path: '/conta/',
    element: <BaseLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'cadastro', element: <Register /> },
      { path: 'perfil', element: <Profile /> },
      { path: 'recuperar-senha', element: <PasswordRecover /> }
    ]
  },
  { path: '*', element: <NotFound /> }
]);

export default routes;