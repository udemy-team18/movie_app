import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Detail from "./routes/detail";
// import "./App.css";

const App = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default App;
