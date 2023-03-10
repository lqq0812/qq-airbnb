import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/views/home"));
const Detail = lazy(() => import("@/views/detail"));
const Entire = lazy(() => import("@/views/entire"));

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/detial",
        element: <Detail />,
    },
    {
        path: "/entire",
        element: <Entire />,
    },
];

export default routes;
