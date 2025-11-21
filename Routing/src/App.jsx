import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './assets/Components/Dashboard';
import Home from './assets/Components/Home';
import About from './assets/Components/About';
import Navbar from './assets/Components/Navbar';
import MockTest from './assets/Components/MockTest';
import Courses from './assets/Components/Courses';
import Reports from './assets/Components/Reports';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    )
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children: [
      {
        path: "courses",  // removed `/`
        element: <Courses />
      },
      {
        path: "mock-tests", // fixed
        element: <MockTest />
      },
      {
        path: "reports",
        element: <Reports />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
