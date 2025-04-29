import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";

export const publicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);