import { createBrowserRouter } from "react-router-dom";
import { Home } from "../screens/index.tsx";
import { Layout } from "../components/layout/index.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
        path: "/",
        element: <Home />
    }],
  },
]);

export { router };
