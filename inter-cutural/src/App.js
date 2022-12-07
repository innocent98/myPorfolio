import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Coach from "./Coach";
import Support from "./Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Coach />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
