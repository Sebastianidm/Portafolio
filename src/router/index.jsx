import { createBrowserRouter } from "react-router-dom";
import ComponentsView from "../Views/ComponentsView";
import Default from "../layouts/Default";
import Home from "../pages/Home";
import NotFoundView from "../Views/NotFoundView";
import WelcomeView from "../Views/WelcomeView";
import ButtonsView from "../Views/ButtonsView";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Default />,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/components",
                element: <ComponentsView/>,
                children:[{

                
                    path: "",
                    element: <WelcomeView/>,
                },
                {
                    path: "buttons",
                    element: <ButtonsView/>
                }
                ]
            }

        ]
    },
    {
        path: "*",
        element: <NotFoundView />,
    },
])