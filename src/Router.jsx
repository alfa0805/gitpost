import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands";
import Cities from "./pages/Cities";
import Locations from "./pages/Locations";
import Models from "./pages/Models";
import Cars from "./pages/cars";



export const Router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,    
    },
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:"/home/categories",
                element:<Categories/>
            },
            {
                path:"/home/brands",
                element:<Brands/>
            },
            {
                path:"/home/cars",
                element:<Cars/>
            },
            {
                path:"/home/cities",
                element:<Cities/>
            },
            {
                path:"/home/locations",
                element:<Locations/>
            },
            {
                path:"/home/models",
                element:<Models/>
            },
        ]
    },
])
