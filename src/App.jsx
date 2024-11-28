import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />
      }
    ]
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
