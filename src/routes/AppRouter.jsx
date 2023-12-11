import React from "react";
// import { useRoutes } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import ProjectPage from "../pages/ProjectPage/ProjectPage";

// const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

// export default function AppRouter() {
//   let element = useRoutes([
//     {
//       path: "/",
//       element: <HomePage />,
//     },
//   ]);
//   console.log(element);
//   return element;
// }

export const appRouter = [
  {
    path: "/",
    element: <Layout Component={HomePage} />,
  },
  {
    path: "/project/:id",
    element: <Layout Component={ProjectPage} />,
  },
];
