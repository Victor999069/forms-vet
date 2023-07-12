import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '../template/layout/BaseLayout';
import AccountLayout from '../template/layout/AccountLayout';
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import NotFound from "../pages/not_found/NotFound";
import Profile from "../pages/account/profile/Profile";
import Register from "../pages/account/register/Register";
import PasswordRecover from "../pages/account/password_recover/PasswordRecover";
import Login from "../pages/account/login/Login";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <BaseLayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/contato', element: <Contact /> },
        { path: '/sobre', element: <About /> },
        {
          path: '/conta/', 
          children: [
            {
              path: 'perfil',
              element: <Profile />
            }
          ]
        },
        { path: '*', element: <NotFound /> }
      ]
    },
    {
      path: '/conta/',
      element: <AccountLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'cadastro', element: <Register /> },
        { path: 'recuperar-senha', element: <PasswordRecover /> },
        { path: '*', element: <NotFound /> }
      ]
    }
]);

export default routes;
