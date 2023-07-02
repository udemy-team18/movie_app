import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/home';
import Detail from './routes/detail';
// import "./App.css";

const App = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    { path: '/movie/:id', element: <Detail /> },
  ],
  // eslint-disable-next-line no-undef
  { basename: process.env.PUBLIC_URL }
);

export default App;
