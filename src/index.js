import React from 'react'
import ReactDOM from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Detail from './Detail';
import Home from './Home';

import './styles/index.css'

const rootView = document.getElementById('root')
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Detail />
  }
]);


if (rootView) {
  ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
    rootView
  )
}
