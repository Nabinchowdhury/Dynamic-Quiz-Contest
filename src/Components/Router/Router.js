import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => {
            return fetch("https://openapi.programming-hero.com/api/quiz")
        },
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path: "/statistics",
                element: <h1>stats</h1>,
            },
            {
                path: "/blog",
                element: <h3>blog</h3>,
            },
        ]
    }
])