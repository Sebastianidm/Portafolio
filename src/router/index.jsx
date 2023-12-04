import { createBrowserRouter } from "react-router-dom";
import ComponentsView from "../Views/ComponentsView";
import Default from "../layouts/Default";
import Home from "../pages/Home";
import NotFoundView from "../Views/NotFoundView";
import WelcomeView from "../Views/WelcomeView";
import ButtonsView from "../Views/ButtonsView";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";
import Skills from "../components/Skills";


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
                
                path: "welcome",
                element: <About/>
            },
            {
                path: "skills",
                element: <Skills/>
            },
            {
                path: "projects",
                element: <Projects/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "*",
                element: <NotFoundView />,
            },

        ]
    },
    {
        path: "*",
        element: <NotFoundView />,
    },
])