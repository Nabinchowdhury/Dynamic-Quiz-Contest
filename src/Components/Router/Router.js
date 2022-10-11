import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import QuizContest from "../QuizContest/QuizContest";
import Statistics from "../Statistics/Statistics";

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
                element: <Statistics></Statistics>,
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/quiz/:id",
                loader: ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <QuizContest></QuizContest>,
            },
        ]
    }
])