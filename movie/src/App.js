import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "routes/home";
import Search from 'components/Search'
// import "./App.css";

const App = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      children : [
        
      ]
    }
  ],
  { basename: process.env.PUBLIC_URL }
);

export default App;