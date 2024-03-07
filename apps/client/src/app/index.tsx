import "@appware-dev/ui-shared/main.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
    return <RouterProvider router={router} />;
}