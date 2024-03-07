import { RouteObject } from "react-router-dom";
// Layouts
import BuilderLayout from "./layouts/BuilderLayout";
// Containers
import DeveloperContainer from "./containers/DeveloperContainer";

export const builderRoutes: RouteObject[] = [
    { 
        element: <BuilderLayout />,
        children: [
            {
                path: '/',
                element: <DeveloperContainer />
            }
        ]
    }
]